import { Metadata } from 'next';
import Link from 'next/link';
import ShareContent from './ShareContent';

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

  return (
    <ShareContent 
      vehicle={vehicle} 
      documents={documents} 
      expiresAt={expires_at} 
    />
  );
}
