import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav>
        <Link href="#" className="logo">
          <img src="/vasly-logo.png" alt="Vasly" className="logo-img" />
        </Link>
        <ul className="nav-links">
          <li><Link href="#ai-mechanic">AI-mekaniker</Link></li>
          <li><Link href="#features">Funksjoner</Link></li>
          <li><Link href="#how-it-works">Slik fungerer det</Link></li>
        </ul>
        <Link href="#download" className="nav-cta">Last ned gratis</Link>
        <Link href="#download" className="nav-cta-mobile">Last ned</Link>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge desktop-only">🇳🇴 Laget for norske bilførere</div>
            <h1>Hold bilen din i <span>toppform</span></h1>
            <p className="hero-description">
              Vasly hjelper deg med å huske EU-kontroll og bytte dekk til riktig tid – 
              med smarte påminnelser og en AI-mekaniker som kjenner din bil.
            </p>
            <div className="hero-buttons desktop-only">
              <Link href="#download" className="btn-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Last ned appen
              </Link>
              <Link href="#features" className="btn-secondary">
                Se funksjoner
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="phone-frame">
              <div className="phone-screen">
                <div className="phone-notch"></div>
                <div className="app-screen">
                  <div className="app-header">
                    <div className="app-greeting">Hei, Ole <span>👋</span></div>
                  </div>
                  
                  <div className="car-card-main">
                    <div className="car-card-top">
                      <div>
                        <div className="car-brand">VOLVO</div>
                        <div className="car-model">XC60 T8 Twin Engine • 2018</div>
                      </div>
                      <div className="weather-badge">
                        <div className="weather-city">Oslo</div>
                        <div className="weather-temp">1°C</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <div className="license-plate">
                        <div className="plate-country">
                          🇳🇴
                          <span>N</span>
                        </div>
                        <div className="plate-number">AB12345</div>
                      </div>
                    </div>
                  </div>

                  <div className="health-card">
                    <div className="health-circle">
                      <span className="health-value">85<small>%</small></span>
                    </div>
                    <div className="health-info">
                      <h4>Bil-helse <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 12, height: 12, color: 'var(--text-muted)' }}><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg></h4>
                      <div className="health-status">Utmerket</div>
                      <div className="health-note">• EU nærmer seg</div>
                    </div>
                  </div>

                  <div className="status-row">
                    <div className="status-card eu">
                      <div className="status-icon">🔧</div>
                      <div className="status-label">EU-kontroll</div>
                      <div className="status-value">85 dager</div>
                      <div className="status-sub">Frist: 22. feb. 2026</div>
                    </div>
                    <div className="status-card tires">
                      <div className="status-icon">❄️</div>
                      <div className="status-label">Montert dekk</div>
                      <div className="status-value">Vinterdekk</div>
                      <div className="status-sub">✓ Krav: 1. nov - 27. apr.</div>
                    </div>
                  </div>

                  <div className="tips-card">
                    <div className="tips-icon">💡</div>
                    <div>
                      <div className="tips-label">Ukas tips</div>
                      <div className="tips-text">Sjekk forsikringen din...</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="floating-card notification">
              <div className="floating-header">
                <div className="floating-icon green">🔔</div>
                <div className="floating-title">Påminnelse</div>
              </div>
              <div className="floating-text">EU-kontroll om 30 dager</div>
            </div>
            
            <div className="floating-card ai">
              <div className="floating-header">
                <div className="floating-icon blue">🤖</div>
                <div className="floating-title">AI-mekaniker</div>
              </div>
              <div className="floating-text">Spør meg om bilen din!</div>
            </div>
          </div>
          
          {/* Mobile only - badge and buttons after phone */}
          <div className="hero-mobile-bottom">
            <div className="hero-badge">🇳🇴 Laget for norske bilførere</div>
            <div className="hero-buttons">
              <Link href="#download" className="btn-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Last ned appen
              </Link>
              <Link href="#features" className="btn-secondary">
                Se funksjoner
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Mechanic Section */}
      <section className="ai-mechanic" id="ai-mechanic">
        <div className="section-container">
          <div className="ai-grid">
            <div className="ai-content">
              <span className="section-label">AI-mekaniker</span>
              <h2 className="section-title">Din personlige<br/>bilekspert i lomma</h2>
              <p className="ai-description">
                Spør om hva som helst – fra svake punkter på din bil, til hva du bør sjekke før EU-kontroll. 
                AI-mekanikeren kjenner din bil og gir deg skreddersydde svar.
              </p>
              <div className="ai-features-list">
                <div className="ai-feature-item">
                  <div className="ai-feature-icon">🎯</div>
                  <div>
                    <strong>Personlig for din bil</strong>
                    <p>Kjenner merke, modell og årsmodell</p>
                  </div>
                </div>
                <div className="ai-feature-item">
                  <div className="ai-feature-icon">⚠️</div>
                  <div>
                    <strong>Svake punkter</strong>
                    <p>Vet hva som ofte går galt på din bilmodell</p>
                  </div>
                </div>
                <div className="ai-feature-item">
                  <div className="ai-feature-icon">💬</div>
                  <div>
                    <strong>Alltid tilgjengelig</strong>
                    <p>Svar på sekunder, 24/7</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="ai-visual">
              <div className="chat-mockup">
                <div className="chat-header">
                  <div className="chat-header-icon">🔧</div>
                  <div className="chat-header-info">
                    <div className="chat-header-title">Mekaniker</div>
                    <div className="chat-header-sub">Din digitale bilekspert</div>
                  </div>
                </div>
                <div className="chat-car-badge">VOLVO XC60 T8 Twin Engine</div>
                
                <div className="chat-body">
                  <div className="chat-welcome">
                    <div className="chat-wave">👋</div>
                    <div className="chat-welcome-title">Hei!</div>
                    <p>Jeg er din digitale mekaniker for VOLVO XC60 T8 Twin Engine (2018). Spør meg om vedlikehold, svake punkter eller tips!</p>
                  </div>
                  
                  <div className="chat-suggestions">
                    <div className="chat-suggestions-label">Forslag:</div>
                    <div className="suggestion-btn"><span>⚠️</span> Svake punkter på min bil?</div>
                    <div className="suggestion-btn"><span>🔍</span> Hva bør jeg sjekke før EU?</div>
                    <div className="suggestion-btn"><span>💰</span> Hvor mye koster service på min bil?</div>
                    <div className="suggestion-btn"><span>🚗</span> Når bytte bremseklosser?</div>
                  </div>
                </div>
                
                <div className="chat-input">
                  <input type="text" placeholder="Spør om bilen din..." disabled />
                  <button className="chat-send">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="section-container">
          <div className="section-header">
            <span className="section-label">Funksjoner</span>
            <h2 className="section-title">Alt du trenger for å ta vare på bilen</h2>
            <p className="section-description">
              Fra automatiske påminnelser til personlige råd fra AI – Vasly gjør bilhold enkelt.
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon green">✅</div>
              <h3 className="feature-title">EU-kontroll påminnelser</h3>
              <p className="feature-description">
                Aldri glem EU-kontroll igjen. Vi varsler deg i god tid før fristen, 
                med fargekodede varsler som viser hvor mye som gjenstår.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon blue">❄️</div>
              <h3 className="feature-title">Sesongbaserte dekk-påminnelser</h3>
              <p className="feature-description">
                Basert på din lokasjon får du påminnelser om dekkbytte til riktig tid – 
                med forskjellige datoer for Nord- og Sør-Norge.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon yellow">🤖</div>
              <h3 className="feature-title">AI-mekaniker</h3>
              <p className="feature-description">
                Chat med vår AI-mekaniker som kjenner din bil. Få personlige råd om vedlikehold, 
                typiske svakheter, og svar på alle dine bilspørsmål.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon navy">🔗</div>
              <h3 className="feature-title">Vegvesen-integrasjon</h3>
              <p className="feature-description">
                Legg til bilen med bare registreringsnummeret. Vi henter automatisk all 
                informasjon fra Statens vegvesen – merke, modell, og EU-dato.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon orange">🚗</div>
              <h3 className="feature-title">Flere biler</h3>
              <p className="feature-description">
                Har du flere biler? Legg til så mange du vil og få varsler for alle. 
                Perfekt for familier eller deg med firmabil og privatbil.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon yellow">💡</div>
              <h3 className="feature-title">Ukentlige biltips</h3>
              <p className="feature-description">
                Få nyttige tips hver uke om bilhold, vedlikehold og økonomi. 
                Lær hvordan du sparer penger og holder bilen i god stand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="how-it-works" id="how-it-works">
        <div className="section-container">
          <div className="section-header">
            <span className="section-label">Slik fungerer det</span>
            <h2 className="section-title">Kom i gang på sekunder</h2>
            <p className="section-description">
              Tre enkle steg, så er du klar til å ta bedre vare på bilen din.
            </p>
          </div>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3 className="step-title">Last ned appen</h3>
              <p className="step-description">
                Gratis på App Store og Google Play. Opprett konto med e-post eller logg inn med Google.
              </p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3 className="step-title">Legg til bilen</h3>
              <p className="step-description">
                Skriv inn registreringsnummeret – vi henter resten automatisk fra Vegvesenet.
              </p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3 className="step-title">Få påminnelser</h3>
              <p className="step-description">
                Aktiver varsler og slapp av. Vi gir beskjed når det er tid for EU-kontroll eller dekkbytte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta" id="download">
        <div className="cta-box">
          <div className="cta-content">
            <h2>Klar til å holde bilen i toppform?</h2>
            <p>Last ned Vasly gratis i dag og få full oversikt over bilens vedlikeholdsbehov.</p>
            <div className="app-stores">
              <a href="#" className="store-btn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="store-info">
                  <div className="store-label">Last ned fra</div>
                  <div className="store-name">App Store</div>
                </div>
              </a>
              <a href="#" className="store-btn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="store-info">
                  <div className="store-label">Kommer snart</div>
                  <div className="store-name">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

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
            © 2025 Vasly.
          </div>
        </div>
      </footer>
    </>
  );
}
