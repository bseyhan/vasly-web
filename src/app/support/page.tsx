import Link from "next/link";

export default function Support() {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <Link href="/" className="text-blue-500 hover:text-blue-400 mb-8 inline-block">
          ← Tilbake til forsiden
        </Link>
        
        <h1 className="text-4xl font-bold text-white mb-8">Support</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Card */}
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
            <div className="text-4xl mb-4">📧</div>
            <h2 className="text-xl font-semibold text-white mb-3">E-post</h2>
            <p className="text-slate-400 mb-4">
              Send oss en e-post, så svarer vi innen 24 timer.
            </p>
            <a 
              href="mailto:support@vasly.no"
              className="text-blue-500 hover:text-blue-400 font-medium"
            >
              support@vasly.no
            </a>
          </div>

          {/* FAQ Card */}
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
            <div className="text-4xl mb-4">❓</div>
            <h2 className="text-xl font-semibold text-white mb-3">Vanlige spørsmål</h2>
            <p className="text-slate-400">
              Finn svar på de vanligste spørsmålene nedenfor.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-8">Ofte stilte spørsmål</h2>
          
          <div className="space-y-6">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                Hvordan legger jeg til en bil?
              </h3>
              <p className="text-slate-400">
                Når du først åpner appen, blir du bedt om å legge til en bil med registreringsnummeret. 
                For å legge til flere biler, gå til Mine Biler og trykk på "Legg til" knappen.
              </p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                Hvorfor får jeg ikke varsler?
              </h3>
              <p className="text-slate-400">
                Sjekk at du har gitt appen tillatelse til å sende varsler i telefonens innstillinger. 
                Gå til Innstillinger → VASLY → Varsler og sørg for at varsler er aktivert.
              </p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                Er AI-mekanikerens råd pålitelige?
              </h3>
              <p className="text-slate-400">
                AI-mekanikeren gir generelle råd basert på din bil og spørsmål. For komplekse 
                problemer eller sikkerhetsrelaterte spørsmål, anbefaler vi alltid å konsultere 
                en profesjonell mekaniker.
              </p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                Hvordan sletter jeg kontoen min?
              </h3>
              <p className="text-slate-400">
                Gå til Profil → Scroll ned → Slett konto. Dette vil permanent slette alle dine 
                data inkludert biler og innstillinger.
              </p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                Når gjelder vinterdekk-kravet?
              </h3>
              <p className="text-slate-400">
                I Sør-Norge: 1. november til første søndag etter 2. påskedag.<br/>
                I Nord-Norge (Nordland, Troms, Finnmark): 16. oktober til 30. april.<br/>
                Appen tilpasser automatisk påminnelsene basert på din lokasjon.
              </p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                Hvor henter dere EU-kontroll datoen fra?
              </h3>
              <p className="text-slate-400">
                Vi henter kjøretøyinformasjon direkte fra Statens vegvesen sitt offentlige API. 
                Dataen oppdateres automatisk basert på hvor nær EU-kontrollen er.
              </p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="mt-16 text-center bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">
            Fant du ikke svar på spørsmålet ditt?
          </h2>
          <p className="text-slate-400 mb-6">
            Send oss en e-post, så hjelper vi deg gjerne.
          </p>
          <a 
            href="mailto:support@vasly.no"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Kontakt oss
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </section>
      </div>
    </div>
  );
}
