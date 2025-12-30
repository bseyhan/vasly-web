'use client';

import { useState } from 'react';
import Link from 'next/link';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/counter.css';

interface Vehicle {
  registration_number: string;
  make: string;
  model: string;
  year: number;
  color?: string;
  mileage?: number;
}

interface Document {
  id: string;
  type: 'service' | 'eu_control' | 'other';
  title: string;
  doc_date: string;
  note?: string;
  mime_type: string;
  url: string | null;
}

interface ShareContentProps {
  vehicle: Vehicle;
  documents: Document[];
  expiresAt: string;
}

export default function ShareContent({ vehicle, documents, expiresAt }: ShareContentProps) {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const expiresDate = new Date(expiresAt);
  const daysLeft = Math.ceil((expiresDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24));

  const typeLabels: Record<string, string> = {
    service: 'Service',
    eu_control: 'EU-kontroll',
    other: 'Annet',
  };

  const typeIcons: Record<string, string> = {
    service: '🔧',
    eu_control: '✅',
    other: '📄',
  };

  // Group documents by year
  const grouped = documents.reduce((acc, doc) => {
    const year = new Date(doc.doc_date).getFullYear().toString();
    if (!acc[year]) acc[year] = [];
    acc[year].push(doc);
    return acc;
  }, {} as Record<string, typeof documents>);

  const years = Object.keys(grouped).sort((a, b) => parseInt(b) - parseInt(a));

  // Build slides for lightbox - only include documents with valid image URLs
  const imageDocuments = documents.filter(doc => 
    doc.url && 
    doc.mime_type.startsWith('image/')
  );

  const slides = imageDocuments.map(doc => ({
    src: doc.url!,
    alt: doc.title || 'Dokument',
    title: doc.title || 'Dokument',
    description: doc.note || undefined,
  }));

  // Find the index in imageDocuments for a given document
  const getImageIndex = (docId: string): number => {
    return imageDocuments.findIndex(d => d.id === docId);
  };

  const openGalleryAt = (index: number) => {
    setGalleryIndex(index);
    setGalleryOpen(true);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-main)' }}>
      {/* Navigation */}
      <nav>
        <Link href="/" className="logo">
          <img src="/vasly-logo.png" alt="Vasly" className="logo-img" />
        </Link>
        <div style={{ 
          background: 'var(--accent-navy-light)', 
          padding: '0.5rem 1rem', 
          borderRadius: '50px',
          fontSize: '0.85rem',
          color: 'var(--accent-navy)',
          fontWeight: 600
        }}>
          Salgsmappe
        </div>
      </nav>

      {/* Vehicle Header */}
      <header style={{ 
        background: 'white', 
        borderBottom: '1px solid rgba(0,0,0,0.05)',
        paddingTop: '6rem'
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ 
              width: '64px', 
              height: '64px', 
              background: 'var(--accent-navy-light)', 
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem'
            }}>
              🚗
            </div>
            <div>
              <h1 style={{ 
                fontSize: 'clamp(1.5rem, 4vw, 2rem)', 
                fontWeight: 800, 
                color: 'var(--text-primary)',
                marginBottom: '0.25rem'
              }}>
                {vehicle.make} {vehicle.model}
              </h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
                {vehicle.registration_number} • {vehicle.year}
              </p>
            </div>
          </div>
          
          {(vehicle.mileage || vehicle.color) && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
              {vehicle.mileage && (
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  color: 'var(--text-secondary)',
                  fontSize: '0.95rem'
                }}>
                  <span>🛣️</span>
                  <span>{vehicle.mileage.toLocaleString('nb-NO')} km</span>
                </div>
              )}
              {vehicle.color && (
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  color: 'var(--text-secondary)',
                  fontSize: '0.95rem'
                }}>
                  <span>🎨</span>
                  <span>{vehicle.color}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </header>

      {/* Documents */}
      <main style={{ maxWidth: '700px', margin: '0 auto', padding: '2rem' }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          marginBottom: '1.5rem'
        }}>
          <h2 style={{ 
            fontSize: '1.25rem', 
            fontWeight: 700, 
            color: 'var(--text-primary)' 
          }}>
            Dokumenter ({documents.length})
          </h2>
          <span style={{ 
            fontSize: '0.85rem', 
            color: daysLeft <= 3 ? '#ef4444' : 'var(--text-muted)',
            fontWeight: daysLeft <= 3 ? 600 : 400
          }}>
            {daysLeft <= 0 
              ? 'Utløpt' 
              : `Utløper om ${daysLeft} ${daysLeft === 1 ? 'dag' : 'dager'}`
            }
          </span>
        </div>

        {documents.length === 0 ? (
          <div style={{ 
            background: 'white', 
            borderRadius: '20px', 
            padding: '3rem',
            textAlign: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            border: '1px solid rgba(0,0,0,0.05)'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📂</div>
            <p style={{ color: 'var(--text-muted)' }}>Ingen dokumenter lastet opp ennå.</p>
          </div>
        ) : (
          <>
            {years.map((year) => (
              <div key={year} style={{ marginBottom: '2rem' }}>
                <h3 style={{ 
                  fontSize: '1.1rem', 
                  fontWeight: 700, 
                  color: 'var(--text-primary)',
                  marginBottom: '1rem'
                }}>
                  {year}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {grouped[year].map((doc) => {
                    const imageIndex = getImageIndex(doc.id);
                    const isImage = imageIndex !== -1;
                    const hasUrl = !!doc.url;
                    
                    // For images: open in lightbox gallery
                    // For other files (PDF, etc.): open in new tab
                    const handleClick = () => {
                      if (isImage) {
                        openGalleryAt(imageIndex);
                      } else if (hasUrl) {
                        window.open(doc.url!, '_blank', 'noopener,noreferrer');
                      }
                    };
                    
                    return (
                      <div
                        key={doc.id}
                        onClick={handleClick}
                        style={{ 
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem',
                          background: 'white',
                          padding: '1.25rem',
                          borderRadius: '16px',
                          textDecoration: 'none',
                          boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                          border: '1px solid rgba(0,0,0,0.05)',
                          cursor: hasUrl ? 'pointer' : 'default',
                          transition: 'transform 0.2s, box-shadow 0.2s'
                        }}
                      >
                        <div style={{ 
                          width: '48px', 
                          height: '48px', 
                          background: 'var(--bg-main)', 
                          borderRadius: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.5rem',
                          flexShrink: 0
                        }}>
                          {typeIcons[doc.type]}
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <p style={{ 
                            fontWeight: 600, 
                            color: 'var(--text-primary)',
                            marginBottom: '0.25rem',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'
                          }}>
                            {doc.title}
                          </p>
                          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                            {typeLabels[doc.type]} • {new Date(doc.doc_date).toLocaleDateString('nb-NO', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric'
                            })}
                          </p>
                        </div>
                        {isImage ? (
                          <svg 
                            width="20" 
                            height="20" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="var(--text-muted)" 
                            strokeWidth="2"
                            style={{ flexShrink: 0 }}
                          >
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.35-4.35" />
                            <line x1="11" y1="8" x2="11" y2="14" />
                            <line x1="8" y1="11" x2="14" y2="11" />
                          </svg>
                        ) : hasUrl ? (
                          <svg 
                            width="20" 
                            height="20" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="var(--text-muted)" 
                            strokeWidth="2"
                            style={{ flexShrink: 0 }}
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Gallery Button - only show if more than 1 image document */}
            {imageDocuments.length > 1 && (
              <button 
                onClick={() => openGalleryAt(0)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  background: 'var(--accent-navy)',
                  color: 'white',
                  padding: '1rem 1.5rem',
                  borderRadius: '16px',
                  border: 'none',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  marginTop: '1rem',
                  transition: 'transform 0.2s, box-shadow 0.2s'
                }}
              >
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
                Se alle dokumenter ({imageDocuments.length})
              </button>
            )}
          </>
        )}
      </main>

      {/* Footer */}
      <footer style={{ 
        borderTop: '1px solid rgba(0,0,0,0.05)',
        background: 'white',
        marginTop: '2rem'
      }}>
        <div style={{ 
          maxWidth: '700px', 
          margin: '0 auto', 
          padding: '2rem',
          textAlign: 'center'
        }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
            Dokumentasjon delt via Vasly
          </p>
          <a 
            href="https://apps.apple.com/no/app/vasly/id6756527671"
            style={{ 
              color: 'var(--accent-navy)', 
              fontWeight: 600, 
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            Last ned Vasly-appen
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>
      </footer>

      {/* Lightbox Gallery */}
      <Lightbox
        open={galleryOpen}
        close={() => setGalleryOpen(false)}
        index={galleryIndex}
        on={{ view: ({ index }) => setGalleryIndex(index) }}
        slides={slides}
        plugins={[Captions, Counter]}
        captions={{ 
          showToggle: true,
          descriptionTextAlign: 'center',
          descriptionMaxLines: 3 
        }}
        styles={{
          container: { backgroundColor: 'rgba(0, 0, 0, 0.95)' },
        }}
      />
    </div>
  );
}
