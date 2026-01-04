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
          Sist oppdatert: 4. januar 2026
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          
          {/* 1. Introduksjon */}
          <section>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>1. Introduksjon</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Vasly AS (&quot;vi&quot;, &quot;oss&quot;, &quot;vår&quot;) er behandlingsansvarlig for dine personopplysninger 
              og er forpliktet til å beskytte ditt personvern i henhold til GDPR. Denne personvernerklæringen 
              forklarer hvordan vi samler inn, bruker, lagrer og beskytter informasjon når du bruker 
              vår mobilapplikasjon Vasly.
            </p>
          </section>

          {/* 2. Datalagring */}
          <section>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>2. Datalagring</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
              Alle data lagres sikkert på servere i EU (Frankfurt, Tyskland) via Supabase.
            </p>
            <div style={{ background: 'white', borderRadius: '12px', padding: '1.5rem', marginTop: '1rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                    <td style={{ padding: '0.75rem 0', fontWeight: 600, color: 'var(--text-primary)' }}>Server</td>
                    <td style={{ padding: '0.75rem 0', color: 'var(--text-secondary)' }}>Supabase (EU-region, Frankfurt)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                    <td style={{ padding: '0.75rem 0', fontWeight: 600, color: 'var(--text-primary)' }}>Behandlingsansvarlig</td>
                    <td style={{ padding: '0.75rem 0', color: 'var(--text-secondary)' }}>Vasly AS</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.75rem 0', fontWeight: 600, color: 'var(--text-primary)' }}>Data som lagres</td>
                    <td style={{ padding: '0.75rem 0', color: 'var(--text-secondary)' }}>Brukerprofil, kjøretøydata, dokumenter, prishistorikk, chat-historikk</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 3. Informasjon vi samler inn */}
          <section>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>3. Informasjon vi samler inn</h2>
            
            <h3 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Kontoinformasjon</h3>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              <li>E-postadresse (for innlogging og kontogjenoppretting)</li>
              <li>Navn (valgfritt, for personalisering)</li>
            </ul>
            
            <h3 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Kjøretøyinformasjon</h3>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              <li>Registreringsnummer</li>
              <li>Bilmerke, modell og årsmodell</li>
              <li>Kilometerstand</li>
              <li>EU-kontroll dato (hentet fra Statens vegvesen)</li>
              <li>Dekkpreferanser</li>
            </ul>

            <h3 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Dokumenter (Salgsmappe)</h3>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              <li>Bilder og PDF-er du laster opp</li>
              <li>Dokumenter lagres kryptert på EU-server</li>
              <li>Kun du har tilgang (med mindre du aktivt deler)</li>
            </ul>

            <h3 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Plasseringsdata</h3>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
              <li>Omtrentlig plassering (kun for værvisning og Nord-Norge tilpasninger)</li>
              <li>Vi lagrer ikke posisjonshistorikk</li>
            </ul>
          </section>

          {/* 4. Sletting av data */}
          <section>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>4. Sletting av data</h2>
            
            <h3 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Ved sletting av bil</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
              Alle data knyttet til bilen slettes automatisk:
            </p>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              <li>Dokumenter (Salgsmappe)</li>
              <li>Prishistorikk</li>
              <li>AI-chat historikk</li>
            </ul>

            <h3 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Ved sletting av konto</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
              <strong>Alt</strong> slettes automatisk og permanent:
            </p>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1rem', paddingLeft: '1.5rem' }}>
              <li>Brukerprofil</li>
              <li>Alle biler og tilknyttede data</li>
              <li>Alle dokumenter (bilder/PDF)</li>
              <li>Prishistorikk og chat-historikk</li>
              <li>Push-tokens og varslingsinnstillinger</li>
            </ul>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Du kan slette kontoen din direkte i appen under <strong>Profil → Slett konto</strong>.
            </p>
          </section>

          {/* 5. Analytics */}
          <section>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>5. Analytics og forbedring av tjenesten</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
              Vi samler <strong>anonyme bruksdata</strong> for å gjøre Vasly bedre.
            </p>
            
            <h3 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Hva vi samler</h3>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              <li>Hvilke funksjoner som brukes (skjermvisninger, knappetrykk)</li>
              <li>Feilmeldinger og krasjer</li>
              <li>Generell bruksstatistikk</li>
            </ul>

            <h3 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Hva vi IKKE samler</h3>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              <li>Navn, e-post eller personnummer</li>
              <li>Registreringsnummer eller bilinfo</li>
              <li>Innhold i dokumenter</li>
              <li>Km-stand eller prisestimater</li>
              <li>Spørsmål til AI-mekanikeren</li>
            </ul>

            <div style={{ background: 'var(--accent-navy-light)', borderRadius: '12px', padding: '1.25rem', marginTop: '1rem' }}>
              <p style={{ color: 'var(--accent-navy)', fontWeight: 600, marginBottom: '0.5rem' }}>
                🔒 Du kan slå av analytics
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Gå til <strong>Varsler-innstillinger</strong> i appen for å slå av anonym analyse. 
                Ved opt-out slettes alle lagrede analytics-data umiddelbart.
              </p>
            </div>
          </section>

          {/* 6. AI-mekaniker */}
          <section>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>6. AI-mekaniker (OpenAI)</h2>
            
            <h3 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Data som sendes til OpenAI</h3>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              <li>Bildata: merke, modell, årsmodell, km-stand, drivstofftype</li>
              <li>Ditt spørsmål</li>
            </ul>

            <h3 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Data som IKKE sendes</h3>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1rem', paddingLeft: '1.5rem' }}>
              <li>Navn eller e-post</li>
              <li>Registreringsnummer</li>
              <li>Personnummer</li>
              <li>Dokumenter</li>
            </ul>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              OpenAI bruker ikke API-data til trening av modeller. AI-mekanikeren gir kun veiledende 
              svar og er ikke en erstatning for profesjonelt verksted.
            </p>
          </section>

          {/* 7. Tredjeparter */}
          <section>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>7. Tredjeparter</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
              Vi selger aldri dine personopplysninger. Vi deler kun data med følgende tjenester:
            </p>
            <div style={{ background: 'white', borderRadius: '12px', padding: '1.5rem', overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '500px' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid rgba(0,0,0,0.1)' }}>
                    <th style={{ padding: '0.75rem 0.5rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-primary)' }}>Tjeneste</th>
                    <th style={{ padding: '0.75rem 0.5rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-primary)' }}>Formål</th>
                    <th style={{ padding: '0.75rem 0.5rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-primary)' }}>Data</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                    <td style={{ padding: '0.75rem 0.5rem', color: 'var(--text-secondary)' }}>Supabase</td>
                    <td style={{ padding: '0.75rem 0.5rem', color: 'var(--text-secondary)' }}>Database & lagring</td>
                    <td style={{ padding: '0.75rem 0.5rem', color: 'var(--text-secondary)' }}>Alt brukerdata (EU-server)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                    <td style={{ padding: '0.75rem 0.5rem', color: 'var(--text-secondary)' }}>OpenAI</td>
                    <td style={{ padding: '0.75rem 0.5rem', color: 'var(--text-secondary)' }}>AI-mekaniker</td>
                    <td style={{ padding: '0.75rem 0.5rem', color: 'var(--text-secondary)' }}>Bildata + spørsmål (ingen PII)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                    <td style={{ padding: '0.75rem 0.5rem', color: 'var(--text-secondary)' }}>Mixpanel</td>
                    <td style={{ padding: '0.75rem 0.5rem', color: 'var(--text-secondary)' }}>Analytics</td>
                    <td style={{ padding: '0.75rem 0.5rem', color: 'var(--text-secondary)' }}>Anonyme events (opt-out mulig)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                    <td style={{ padding: '0.75rem 0.5rem', color: 'var(--text-secondary)' }}>Expo</td>
                    <td style={{ padding: '0.75rem 0.5rem', color: 'var(--text-secondary)' }}>Push-varsler</td>
                    <td style={{ padding: '0.75rem 0.5rem', color: 'var(--text-secondary)' }}>Push-token</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.75rem 0.5rem', color: 'var(--text-secondary)' }}>Statens vegvesen</td>
                    <td style={{ padding: '0.75rem 0.5rem', color: 'var(--text-secondary)' }}>Kjøretøyoppslag</td>
                    <td style={{ padding: '0.75rem 0.5rem', color: 'var(--text-secondary)' }}>Regnr (offentlig API)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 8. Dine rettigheter */}
          <section>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>8. Dine rettigheter (GDPR)</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
              I henhold til GDPR har du følgende rettigheter:
            </p>
            <div style={{ background: 'white', borderRadius: '12px', padding: '1.5rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                    <td style={{ padding: '0.75rem 0', fontWeight: 600, color: 'var(--text-primary)', width: '40%' }}>Innsyn (Art. 15)</td>
                    <td style={{ padding: '0.75rem 0', color: 'var(--text-secondary)' }}>Alle data er synlige i appen</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                    <td style={{ padding: '0.75rem 0', fontWeight: 600, color: 'var(--text-primary)' }}>Retting (Art. 16)</td>
                    <td style={{ padding: '0.75rem 0', color: 'var(--text-secondary)' }}>Du kan redigere all egen data i appen</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                    <td style={{ padding: '0.75rem 0', fontWeight: 600, color: 'var(--text-primary)' }}>Sletting (Art. 17)</td>
                    <td style={{ padding: '0.75rem 0', color: 'var(--text-secondary)' }}>&quot;Slett konto&quot;-knapp i Profil</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                    <td style={{ padding: '0.75rem 0', fontWeight: 600, color: 'var(--text-primary)' }}>Dataportabilitet (Art. 20)</td>
                    <td style={{ padding: '0.75rem 0', color: 'var(--text-secondary)' }}>Kontakt support for eksport</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.75rem 0', fontWeight: 600, color: 'var(--text-primary)' }}>Innsigelse (Art. 21)</td>
                    <td style={{ padding: '0.75rem 0', color: 'var(--text-secondary)' }}>Opt-out for analytics i innstillinger</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 9. Datasikkerhet */}
          <section>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>9. Datasikkerhet</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Vi bruker industristandard sikkerhetstiltak for å beskytte dine data:
            </p>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginTop: '1rem', paddingLeft: '1.5rem' }}>
              <li>Kryptering i transit (TLS) og i hvile</li>
              <li>Sikker autentisering via Supabase Auth</li>
              <li>Row Level Security (RLS) for databasetilgang</li>
              <li>Automatisk sletting via CASCADE constraints</li>
              <li>Daglig opprydding av ubrukte filer</li>
            </ul>
          </section>

          {/* 10. Kontakt */}
          <section>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>10. Kontakt oss</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
              Har du spørsmål om personvern eller ønsker å utøve dine rettigheter?
            </p>
            <div style={{ background: 'white', borderRadius: '12px', padding: '1.5rem' }}>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                <strong style={{ color: 'var(--text-primary)' }}>E-post:</strong>{" "}
                <a href="mailto:support@vasly.no" style={{ color: 'var(--accent-navy)', fontWeight: 600 }}>
                  support@vasly.no
                </a>
              </p>
              <p style={{ color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Behandlingsansvarlig:</strong> Vasly AS
              </p>
            </div>
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
            © 2026 Vasly
          </div>
        </div>
      </footer>
    </div>
  );
}
