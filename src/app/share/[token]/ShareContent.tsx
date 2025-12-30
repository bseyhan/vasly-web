'use client';

import { useState, useMemo, useEffect, useCallback } from 'react';
import Link from 'next/link';

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
  const [singleViewMode, setSingleViewMode] = useState(false); // true = single doc, no navigation
  const [touchStart, setTouchStart] = useState<number | null>(null);

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

  // Build slides for gallery - only include documents with valid image URLs
  const imageDocuments = useMemo(() => 
    documents.filter(doc => 
      doc.url && 
      doc.mime_type.startsWith('image/')
    ), 
    [documents]
  );

  // Find the index in imageDocuments for a given document
  const getImageIndex = (docId: string): number => {
    return imageDocuments.findIndex(d => d.id === docId);
  };

  // Open single document view (no navigation)
  const openSingleView = (index: number) => {
    setGalleryIndex(index);
    setSingleViewMode(true);
    setGalleryOpen(true);
  };

  // Open full gallery (with navigation)
  const openGalleryAt = (index: number) => {
    setGalleryIndex(index);
    setSingleViewMode(false);
    setGalleryOpen(true);
  };

  const closeGallery = useCallback(() => {
    setGalleryOpen(false);
    setSingleViewMode(false);
  }, []);

  const goToPrev = useCallback(() => {
    setGalleryIndex(prev => (prev > 0 ? prev - 1 : imageDocuments.length - 1));
  }, [imageDocuments.length]);

  const goToNext = useCallback(() => {
    setGalleryIndex(prev => (prev < imageDocuments.length - 1 ? prev + 1 : 0));
  }, [imageDocuments.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!galleryOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeGallery();
      // Only allow navigation in gallery mode (not single view)
      if (!singleViewMode && imageDocuments.length > 1) {
        if (e.key === 'ArrowLeft') goToPrev();
        if (e.key === 'ArrowRight') goToNext();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [galleryOpen, closeGallery, goToPrev, goToNext, singleViewMode]);

  // Touch handlers for swipe - only in gallery mode (not single view)
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!singleViewMode && imageDocuments.length > 1) {
      setTouchStart(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null || singleViewMode || imageDocuments.length <= 1) return;
    
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
    setTouchStart(null);
  };

  const currentImage = imageDocuments[galleryIndex];

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
                    
                    const handleClick = () => {
                      if (isImage) {
                        // Single document click = single view mode (no navigation)
                        openSingleView(imageIndex);
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

      {/* Custom Image Gallery Modal */}
      {galleryOpen && currentImage && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.95)',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={closeGallery}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close button */}
          <button
            onClick={closeGallery}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10001,
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Counter - only show in gallery mode */}
          {!singleViewMode && imageDocuments.length > 1 && (
            <div
              style={{
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                color: 'white',
                fontSize: '0.9rem',
                fontWeight: 600,
                background: 'rgba(255,255,255,0.1)',
                padding: '0.5rem 1rem',
                borderRadius: '50px',
              }}
            >
              {galleryIndex + 1} / {imageDocuments.length}
            </div>
          )}

          {/* Swipe hint - only in gallery mode on mobile */}
          {!singleViewMode && imageDocuments.length > 1 && (
            <div
              className="swipe-hint"
              style={{
                position: 'absolute',
                bottom: '1rem',
                left: '50%',
                transform: 'translateX(-50%)',
                color: 'rgba(255,255,255,0.5)',
                fontSize: '0.8rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              Swipe for å bla
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          )}

          {/* Previous button - only in gallery mode, hidden on mobile */}
          {!singleViewMode && imageDocuments.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goToPrev(); }}
              className="gallery-nav-btn"
              style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(255,255,255,0.15)',
                border: 'none',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10001,
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}

          {/* Next button - only in gallery mode, hidden on mobile */}
          {!singleViewMode && imageDocuments.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="gallery-nav-btn"
              style={{
                position: 'absolute',
                right: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(255,255,255,0.15)',
                border: 'none',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10001,
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          )}

          {/* Image */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '90vw',
              maxHeight: '70vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={currentImage.url!}
              alt={currentImage.title || 'Dokument'}
              style={{
                maxWidth: '100%',
                maxHeight: '70vh',
                objectFit: 'contain',
                borderRadius: '8px',
              }}
            />
          </div>

          {/* Caption */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              marginTop: '1.5rem',
              textAlign: 'center',
              color: 'white',
              maxWidth: '600px',
              padding: '0 2rem',
            }}
          >
            <p style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>
              {currentImage.title}
            </p>
            {currentImage.note && (
              <p style={{ fontSize: '0.9rem', opacity: 0.7, lineHeight: 1.5 }}>
                {currentImage.note}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
