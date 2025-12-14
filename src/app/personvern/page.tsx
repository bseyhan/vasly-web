import Link from "next/link";

export default function Personvern() {
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
          Personvernerklæring
        </h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>
          Sist oppdatert: 12. desember 2025
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          <section>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>1. Introduksjon</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Vasly (&quot;vi&quot;, &quot;oss&quot;, &quot;vår&quot;) respekterer ditt personvern og er forpliktet til å beskytte 
              dine personopplysninger. Denne personvernerklæringen forklarer hvordan vi samler inn, 
              bruker og beskytter informasjon når du bruker vår mobilapplikasjon Vasly.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>2. Informasjon vi samler inn</h2>
            
            <h3 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Kontoinformasjon</h3>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              <li>E-postadresse (for innlogging og kontogjenoppretting)</li>
              <li>Navn (valgfritt, for personalisering)</li>
            </ul>
            
            <h3 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Kjøretøyinformasjon</h3>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              <li>Registreringsnummer</li>
              <li>Bilmerke og modell</li>
              <li>EU-kontroll dato (hentet fra Statens vegvesen)</li>
              <li>Dekkpreferanser</li>
            </ul>

            <h3 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Plasseringsdata</h3>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
              <li>Omtrentlig plassering (kun for værvisning og Nord-Norge tilpasninger)</li>
              <li>Vi lagrer ikke posisjonshistorikk</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>3. Hvordan vi bruker informasjonen</h2>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
              <li>Vise EU-kontroll status og påminnelser</li>
              <li>Sende push-varsler om dekkskift og EU-kontroll</li>
              <li>Tilpasse værinformasjon til din lokasjon</li>
              <li>Gi personaliserte svar fra AI-mekanikeren</li>
              <li>Forbedre appens funksjonalitet</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>4. Deling av informasjon</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
              Vi selger aldri dine personopplysninger. Vi deler kun data med:
            </p>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
              <li><strong>Supabase:</strong> Sikker lagring av brukerdata</li>
              <li><strong>OpenAI:</strong> For AI-mekaniker funksjonen (anonymiserte spørsmål)</li>
              <li><strong>Statens vegvesen:</strong> For å hente kjøretøyinformasjon</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>5. Datasikkerhet</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Vi bruker industristandard sikkerhetstiltak for å beskytte dine data, inkludert 
              kryptering i transit og i hvile, sikker autentisering, og regelmessige sikkerhetsgjennomganger.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>6. Dine rettigheter</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>Du har rett til å:</p>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
              <li>Få innsyn i dine personopplysninger</li>
              <li>Rette feilaktige opplysninger</li>
              <li>Slette din konto og alle tilknyttede data</li>
              <li>Eksportere dine data</li>
            </ul>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginTop: '1rem' }}>
              Du kan slette kontoen din direkte i appen under Profil → Slett konto.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>7. Kontakt oss</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Har du spørsmål om personvern? Kontakt oss på:{" "}
              <a href="mailto:personvern@vasly.no" style={{ color: 'var(--accent-navy)', fontWeight: 600 }}>
                personvern@vasly.no
              </a>
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="footer-left">
            <Link href="/" className="logo">
              <img src="/vasly-logo.png" alt="Vasly" className="logo-img" />
            </Link>
            <div className="footer-links">
              <Link href="/personvern">Personvern</Link>
              <Link href="/vilkar">Vilkår</Link>
              <Link href="/support">Kontakt</Link>
            </div>
          </div>
          <div className="footer-right">
            © 2025 Vasly
          </div>
        </div>
      </footer>
    </div>
  );
}
