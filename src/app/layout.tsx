import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vasly – Hold bilen i toppform",
  description: "Vasly hjelper deg med å huske EU-kontroll, bytte dekk til riktig tid, og holde oversikt over bilens vedlikeholdsbehov – alt på ett sted.",
  keywords: "bil, EU-kontroll, dekk, vedlikehold, mekaniker, app, Norge",
  openGraph: {
    title: "Vasly – Hold bilen i toppform",
    description: "Hold oversikt over EU-kontroll, få påminnelser om dekkskift, og spør vår AI-mekaniker.",
    type: "website",
    locale: "nb_NO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
