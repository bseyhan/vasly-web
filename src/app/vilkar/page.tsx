import Link from "next/link";

export default function Vilkar() {
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
          Brukervilkår
        </h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>
          Sist oppdatert: 12. desember 2025
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          <section>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>1. Aksept av vilkår</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Ved å laste ned, installere eller bruke VASLY-appen, godtar du disse brukervilkårene. 
              Hvis du ikke godtar vilkårene, må du ikke bruke appen.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>2. Beskrivelse av tjenesten</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              VASLY er en mobilapplikasjon som hjelper bileiere med å holde oversikt over 
              EU-kontroll, dekkskift og annet bilvedlikehold. Appen tilbyr også en AI-basert 
              mekaniker-funksjon for generell veiledning.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>3. Brukerkonto</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              For å bruke appen må du opprette en konto. Du er ansvarlig for å holde 
              påloggingsinformasjonen din konfidensiell og for all aktivitet som skjer 
              under din konto.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>4. Ansvarsfraskrivelse</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
              VASLY er kun ment som et hjelpemiddel og erstatter ikke profesjonell mekanisk rådgivning.
            </p>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
              <li>AI-mekanikerens råd er generelle og må ikke betraktes som profesjonell rådgivning</li>
              <li>EU-kontroll datoer hentes fra Statens vegvesen, men vi garanterer ikke nøyaktighet</li>
              <li>Du er selv ansvarlig for å overholde alle lovpålagte frister</li>
              <li>Vi er ikke ansvarlige for skader som følge av å følge råd fra appen</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>5. Akseptabel bruk</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '0.5rem' }}>Du samtykker til å ikke:</p>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
              <li>Bruke appen til ulovlige formål</li>
              <li>Forsøke å hacke eller forstyrre tjenesten</li>
              <li>Misbruke AI-mekaniker funksjonen</li>
              <li>Dele kontoen din med andre</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>6. Begrensninger</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              For å sikre rettferdig bruk og kontrollere kostnader, har vi innført følgende begrensninger:
            </p>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li>Maksimalt 50 meldinger til AI-mekanikeren per dag</li>
              <li>Maksimalt 10 meldinger per minutt</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>7. Endringer i vilkårene</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Vi forbeholder oss retten til å endre disse vilkårene når som helst. 
              Ved vesentlige endringer vil vi varsle deg via appen eller e-post.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>8. Oppsigelse</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Du kan når som helst slette kontoen din via appen. Vi forbeholder oss retten 
              til å suspendere eller avslutte kontoer som bryter disse vilkårene.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>9. Kontakt</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Spørsmål om brukervilkårene? Kontakt oss på:{" "}
              <a href="mailto:support@vasly.no" style={{ color: 'var(--accent-navy)', fontWeight: 600, textDecoration: 'none' }}>
                support@vasly.no
              </a>
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>10. Gjeldende lov</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Disse vilkårene er underlagt norsk lov, og eventuelle tvister skal løses ved norske domstoler.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
