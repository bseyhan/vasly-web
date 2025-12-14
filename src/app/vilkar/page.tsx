import Link from "next/link";

export default function Vilkar() {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <Link href="/" className="text-blue-500 hover:text-blue-400 mb-8 inline-block">
          ← Tilbake til forsiden
        </Link>
        
        <h1 className="text-4xl font-bold text-white mb-8">Brukervilkår</h1>
        
        <div className="prose prose-invert prose-slate max-w-none">
          <p className="text-slate-300 mb-6">
            Sist oppdatert: 12. desember 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">1. Aksept av vilkår</h2>
            <p className="text-slate-300">
              Ved å laste ned, installere eller bruke VASLY-appen, godtar du disse brukervilkårene. 
              Hvis du ikke godtar vilkårene, må du ikke bruke appen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">2. Beskrivelse av tjenesten</h2>
            <p className="text-slate-300">
              VASLY er en mobilapplikasjon som hjelper bileiere med å holde oversikt over 
              EU-kontroll, dekkskift og annet bilvedlikehold. Appen tilbyr også en AI-basert 
              mekaniker-funksjon for generell veiledning.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">3. Brukerkonto</h2>
            <p className="text-slate-300">
              For å bruke appen må du opprette en konto. Du er ansvarlig for å holde 
              påloggingsinformasjonen din konfidensiell og for all aktivitet som skjer 
              under din konto.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">4. Ansvarsfraskrivelse</h2>
            <p className="text-slate-300 mb-4">
              VASLY er kun ment som et hjelpemiddel og erstatter ikke profesjonell mekanisk rådgivning.
            </p>
            <ul className="list-disc list-inside text-slate-300">
              <li>AI-mekanikerens råd er generelle og må ikke betraktes som profesjonell rådgivning</li>
              <li>EU-kontroll datoer hentes fra Statens vegvesen, men vi garanterer ikke nøyaktighet</li>
              <li>Du er selv ansvarlig for å overholde alle lovpålagte frister</li>
              <li>Vi er ikke ansvarlige for skader som følge av å følge råd fra appen</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">5. Akseptabel bruk</h2>
            <p className="text-slate-300 mb-2">Du samtykker til å ikke:</p>
            <ul className="list-disc list-inside text-slate-300">
              <li>Bruke appen til ulovlige formål</li>
              <li>Forsøke å hacke eller forstyrre tjenesten</li>
              <li>Misbruke AI-mekaniker funksjonen</li>
              <li>Dele kontoen din med andre</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">6. Begrensninger</h2>
            <p className="text-slate-300">
              For å sikre rettferdig bruk og kontrollere kostnader, har vi innført følgende begrensninger:
            </p>
            <ul className="list-disc list-inside text-slate-300 mt-2">
              <li>Maksimalt 50 meldinger til AI-mekanikeren per dag</li>
              <li>Maksimalt 10 meldinger per minutt</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">7. Endringer i vilkårene</h2>
            <p className="text-slate-300">
              Vi forbeholder oss retten til å endre disse vilkårene når som helst. 
              Ved vesentlige endringer vil vi varsle deg via appen eller e-post.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">8. Oppsigelse</h2>
            <p className="text-slate-300">
              Du kan når som helst slette kontoen din via appen. Vi forbeholder oss retten 
              til å suspendere eller avslutte kontoer som bryter disse vilkårene.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">9. Kontakt</h2>
            <p className="text-slate-300">
              Spørsmål om brukervilkårene? Kontakt oss på:{" "}
              <a href="mailto:support@vasly.no" className="text-blue-500 hover:text-blue-400">
                support@vasly.no
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
