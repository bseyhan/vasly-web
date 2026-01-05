import Link from "next/link";

export default function Support() {
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
          Support
        </h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>
          Trenger du hjelp? Finn svar her.
        </p>

        {/* Contact Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          <div style={{ 
            background: 'white', 
            padding: '2rem', 
            borderRadius: '20px', 
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            border: '1px solid rgba(0,0,0,0.05)'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📧</div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>E-post</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.6 }}>
              Send oss en e-post, så svarer vi innen 24 timer.
            </p>
            <a 
              href="mailto:support@vasly.no"
              style={{ color: 'var(--accent-navy)', fontWeight: 600, textDecoration: 'none' }}
            >
              support@vasly.no
            </a>
          </div>

          <div style={{ 
            background: 'white', 
            padding: '2rem', 
            borderRadius: '20px', 
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            border: '1px solid rgba(0,0,0,0.05)'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>❓</div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Vanlige spørsmål</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Finn svar på de vanligste spørsmålene nedenfor.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <section>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
            Ofte stilte spørsmål
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ 
              background: 'white', 
              padding: '1.5rem', 
              borderRadius: '16px', 
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              border: '1px solid rgba(0,0,0,0.05)'
            }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                Hvordan legger jeg til en bil?
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Når du først åpner appen, blir du bedt om å legge til en bil med registreringsnummeret. 
                For å legge til flere biler, gå til Mine Biler og trykk på &quot;Legg til&quot; knappen.
              </p>
            </div>

            <div style={{ 
              background: 'white', 
              padding: '1.5rem', 
              borderRadius: '16px', 
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              border: '1px solid rgba(0,0,0,0.05)'
            }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                Hvorfor får jeg ikke varsler?
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Sjekk at du har gitt appen tillatelse til å sende varsler i telefonens innstillinger. 
                Gå til Innstillinger → VASLY → Varsler og sørg for at varsler er aktivert.
              </p>
            </div>

            <div style={{ 
              background: 'white', 
              padding: '1.5rem', 
              borderRadius: '16px', 
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              border: '1px solid rgba(0,0,0,0.05)'
            }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                Er AI-mekanikerens råd pålitelige?
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                AI-mekanikeren gir generelle råd basert på din bil og spørsmål. For komplekse 
                problemer eller sikkerhetsrelaterte spørsmål, anbefaler vi alltid å konsultere 
                en profesjonell mekaniker.
              </p>
            </div>

            <div style={{ 
              background: 'white', 
              padding: '1.5rem', 
              borderRadius: '16px', 
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              border: '1px solid rgba(0,0,0,0.05)'
            }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                Hvordan sletter jeg kontoen min?
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Gå til Profil → Scroll ned → Slett konto. Dette vil permanent slette alle dine 
                data inkludert biler og innstillinger.
              </p>
            </div>

            <div style={{ 
              background: 'white', 
              padding: '1.5rem', 
              borderRadius: '16px', 
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              border: '1px solid rgba(0,0,0,0.05)'
            }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                Når gjelder vinterdekk-kravet?
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                I Sør-Norge: 1. november til første søndag etter 2. påskedag.<br/>
                I Nord-Norge (Nordland, Troms, Finnmark): 16. oktober til 30. april.<br/>
                Appen tilpasser automatisk påminnelsene basert på din lokasjon.
              </p>
            </div>

            <div style={{ 
              background: 'white', 
              padding: '1.5rem', 
              borderRadius: '16px', 
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              border: '1px solid rgba(0,0,0,0.05)'
            }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                Hvor henter dere EU-kontroll datoen fra?
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Kjøretøyinformasjon hentes direkte fra Statens vegvesen sitt offentlige API. 
                Dataen oppdateres automatisk basert på hvor nær EU-kontrollen er.
              </p>
            </div>

            <div style={{ 
              background: 'white', 
              padding: '1.5rem', 
              borderRadius: '16px', 
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              border: '1px solid rgba(0,0,0,0.05)'
            }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                Hvordan fungerer prisestimatet?
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Prisestimatet er basert på tilsvarende biler på markedet med samme merke, modell, 
                årsmodell og kilometerstand. Verdien oppdateres automatisk den 1. hver måned. 
                Merk at dette er et estimat og faktisk salgspris kan variere.
              </p>
            </div>

            <div style={{ 
              background: 'white', 
              padding: '1.5rem', 
              borderRadius: '16px', 
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              border: '1px solid rgba(0,0,0,0.05)'
            }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                Hva er forsikringsgrense?
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Forsikringsgrense hjelper deg å holde oversikt over hvor mye du kjører i forhold 
                til kilometergrensen på forsikringen din. Legg inn grensen og oppdater kjørelengden 
                jevnlig – du får varsler ved 80%, 90% og 100% for å unngå overraskelser.
              </p>
            </div>

            <div style={{ 
              background: 'white', 
              padding: '1.5rem', 
              borderRadius: '16px', 
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              border: '1px solid rgba(0,0,0,0.05)'
            }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                Hva er Salgsmappe?
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Salgsmappe lar deg samle kvitteringer, servicehistorikk og andre dokumenter 
                på ett sted. Når du selger bilen kan du enkelt dele en lenke med kjøper. 
                En dokumentert bil selges ofte raskere og for høyere pris.
              </p>
            </div>

            <div style={{ 
              background: 'white', 
              padding: '1.5rem', 
              borderRadius: '16px', 
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              border: '1px solid rgba(0,0,0,0.05)'
            }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                Kan jeg overføre bilen til ny eier?
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Ja! Hvis kjøperen også bruker Vasly, kan du overføre bilen med alle dokumenter 
                og historikk ved hjelp av en 6-tegns kode. Gå til Salgsmappe → Overfør til ny eier.
              </p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section style={{ 
          marginTop: '3rem', 
          textAlign: 'center', 
          background: 'linear-gradient(135deg, var(--accent-navy) 0%, #1a3a5c 100%)',
          padding: '3rem 2rem', 
          borderRadius: '24px'
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'white' }}>
            Fant du ikke svar på spørsmålet ditt?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem' }}>
            Send oss en e-post, så hjelper vi deg gjerne.
          </p>
          <a 
            href="mailto:support@vasly.no"
            style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'white',
              color: 'var(--accent-navy)',
              padding: '1rem 2rem',
              borderRadius: '50px',
              fontWeight: 700,
              textDecoration: 'none',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
            }}
          >
            Kontakt oss
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
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
