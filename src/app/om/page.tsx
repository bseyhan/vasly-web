import Link from "next/link";

export default function OmVasly() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-main)' }}>
      {/* Navigation */}
      <nav>
        <Link href="/" className="logo">
          <img src="/vasly-logo.png" alt="Vasly" className="logo-img" />
        </Link>
        <Link href="/" className="nav-cta">Tilbake</Link>
      </nav>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '8rem 2rem 4rem' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-primary)' }}>
          Om Vasly
        </h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '1.1rem', lineHeight: 1.7 }}>
          Den norske appen som gjør bilhold enkelt
        </p>

        {/* Mission Section */}
        <section style={{ marginBottom: '3rem' }}>
          <div style={{ 
            background: 'linear-gradient(135deg, var(--accent-navy), #1e40af)', 
            padding: '2.5rem', 
            borderRadius: '24px',
            color: 'white',
            marginBottom: '2rem'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎯</div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Vår misjon</h2>
            <p style={{ lineHeight: 1.8, opacity: 0.95 }}>
              Vi tror at alle bilførere fortjener en enkel måte å holde oversikt over bilens vedlikehold. 
              Vasly ble skapt for å fjerne stresset med å huske EU-kontroll, dekkbytte og andre viktige datoer – 
              slik at du kan fokusere på det som betyr mest.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
            Vår historie
          </h2>
          <div style={{ 
            background: 'white', 
            padding: '2rem', 
            borderRadius: '20px', 
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            border: '1px solid rgba(0,0,0,0.05)'
          }}>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Vasly ble startet i 2026 med én enkel idé: å gjøre bilhold mindre komplisert for norske bilførere. 
              Etter å ha glemt EU-kontroll én gang for mange, bestemte vi oss for å lage en løsning som kunne 
              hjelpe andre å unngå det samme.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              I dag er Vasly en komplett bil-app med smarte påminnelser, AI-mekaniker og direkte 
              integrasjon med Statens vegvesen. Vi er stolte av å være 100% norsk – laget av nordmenn, 
              for nordmenn.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
            Våre verdier
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            <div style={{ 
              background: 'white', 
              padding: '1.75rem', 
              borderRadius: '20px', 
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              border: '1px solid rgba(0,0,0,0.05)'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🇳🇴</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                Norsk først
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                Alt vi lager er designet spesielt for norske forhold og regler.
              </p>
            </div>

            <div style={{ 
              background: 'white', 
              padding: '1.75rem', 
              borderRadius: '20px', 
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              border: '1px solid rgba(0,0,0,0.05)'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>✨</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                Enkelt
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                Vi fjerner kompleksitet og gjør bilhold forståelig for alle.
              </p>
            </div>

            <div style={{ 
              background: 'white', 
              padding: '1.75rem', 
              borderRadius: '20px', 
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              border: '1px solid rgba(0,0,0,0.05)'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🔒</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                Personvern
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                Dine data er trygge hos oss. Vi selger aldri informasjon til tredjepart.
              </p>
            </div>

            <div style={{ 
              background: 'white', 
              padding: '1.75rem', 
              borderRadius: '20px', 
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              border: '1px solid rgba(0,0,0,0.05)'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>💡</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                Innovativt
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                Vi bruker moderne teknologi som AI for å gi deg best mulig hjelp.
              </p>
            </div>
          </div>
        </section>

        {/* Developer Section */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
            Utvikleren
          </h2>
          <div style={{ 
            background: 'white', 
            padding: '2rem', 
            borderRadius: '20px', 
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            border: '1px solid rgba(0,0,0,0.05)'
          }}>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              Vasly er utviklet av én person med en lidenskap for å lage produkter som gjør hverdagen 
              enklere. Med bakgrunn innen teknologi og en forkjærlighet for biler, jobber jeg hver dag 
              for å gjøre Vasly bedre for alle norske bilførere.
            </p>
          </div>
        </section>

        {/* Contact CTA */}
        <section>
          <div style={{ 
            background: 'var(--accent-navy-light)', 
            padding: '2.5rem', 
            borderRadius: '24px',
            textAlign: 'center'
          }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
              Har du spørsmål?
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              Vi vil gjerne høre fra deg! Ta kontakt for spørsmål, tilbakemeldinger eller samarbeid.
            </p>
            <Link 
              href="/support" 
              style={{ 
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'var(--accent-navy)', 
                color: 'white', 
                padding: '0.875rem 1.75rem', 
                borderRadius: '12px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
            >
              Kontakt oss
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer style={{ 
        textAlign: 'center', 
        padding: '2rem', 
        color: 'var(--text-muted)',
        borderTop: '1px solid rgba(0,0,0,0.05)',
        marginTop: '2rem'
      }}>
        <p>© 2026 Vasly</p>
      </footer>
    </div>
  );
}
