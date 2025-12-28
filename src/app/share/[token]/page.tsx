import { Metadata } from 'next';
import Link from 'next/link';

const SUPABASE_FUNCTION_URL = 'https://urdaisyjzymmifvatrqx.supabase.co/functions/v1/share';

interface ShareData {
  vehicle: {
    registration_number: string;
    make: string;
    model: string;
    year: number;
    color?: string;
    mileage?: number;
  };
  documents: {
    id: string;
    type: 'service' | 'eu_control' | 'other';
    title: string;
    doc_date: string;
    note?: string;
    mime_type: string;
    url: string | null;
  }[];
  expires_at: string;
}

interface ErrorResponse {
  error: string;
}

async function getShareData(token: string): Promise<ShareData | ErrorResponse> {
  try {
    const res = await fetch(`${SUPABASE_FUNCTION_URL}?token=${token}`, {
      cache: 'no-store',
    });
    return await res.json();
  } catch {
    return { error: 'Kunne ikke hente data' };
  }
}

type PageProps = {
  params: Promise<{ token: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { token } = await params;
  const data = await getShareData(token);
  
  if ('error' in data) {
    return { title: 'Salgsmappe | Vasly' };
  }
  
  return {
    title: `${data.vehicle.make} ${data.vehicle.model} - Salgsmappe | Vasly`,
    description: `Dokumentasjon for ${data.vehicle.make} ${data.vehicle.model} (${data.vehicle.year})`,
    openGraph: {
      title: `${data.vehicle.make} ${data.vehicle.model} - Salgsmappe`,
      description: `Se dokumentasjon for ${data.vehicle.make} ${data.vehicle.model} (${data.vehicle.year})`,
      type: 'website',
    },
  };
}

export default async function SharePage({ params }: PageProps) {
  const { token } = await params;
  const data = await getShareData(token);

  // Error state
  if ('error' in data) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        background: 'var(--bg-main)', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '2rem'
      }}>
        <div style={{ 
          background: 'white', 
          borderRadius: '24px', 
          padding: '3rem',
          maxWidth: '400px',
          textAlign: 'center',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          border: '1px solid rgba(0,0,0,0.05)'
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>🔗</div>
          <h1 style={{ 
            fontSize: '1.75rem', 
            fontWeight: 800, 
            color: 'var(--text-primary)',
            marginBottom: '0.75rem'
          }}>
            Lenken er ugyldig
          </h1>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
            {data.error === 'Share link has expired' 
              ? 'Denne delingslenken har utløpt. Be selger om å opprette en ny lenke.'
              : data.error === 'Share link has been deactivated'
              ? 'Denne lenken er deaktivert av eieren.'
              : 'Lenken finnes ikke eller er feil. Sjekk at du har kopiert hele lenken.'}
          </p>
          <Link 
            href="/"
            style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'var(--accent-navy)', 
              color: 'white', 
              padding: '0.875rem 1.75rem', 
              borderRadius: '12px',
              fontWeight: 600,
              textDecoration: 'none'
            }}
          >
            Gå til Vasly
          </Link>
        </div>
      </div>
    );
  }

  const { vehicle, documents, expires_at } = data;
  const expiresDate = new Date(expires_at);
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
          years.map((year) => (
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
                {grouped[year].map((doc) => (
                  <a
                    key={doc.id}
                    href={doc.url || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
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
                  </a>
                ))}
              </div>
            </div>
          ))
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
    </div>
  );
}
