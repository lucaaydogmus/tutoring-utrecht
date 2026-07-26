import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import { siteConfig } from "@/lib/site-config";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: "Bijles Basisschool, Wiskunde en Natuurwetenschappen Utrecht | Utrecht Bijles",
  description:
    "Persoonlijke bijles in Utrecht en online voor basisschool, VMBO, HAVO en VWO. Rekenen, taal, wiskunde, natuurkunde, scheikunde en Engels. Volledig in het Nederlands of Engels.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Utrecht Bijles — Persoonlijke bijles in Utrecht en online",
    description:
      "Persoonlijke bijles in Utrecht en online voor basisschool, VMBO, HAVO en VWO. Rekenen, taal, wiskunde, natuurkunde, scheikunde en Engels.",
    url: siteConfig.siteUrl,
    siteName: siteConfig.businessName,
    locale: "nl_NL",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: siteConfig.businessName,
  founder: siteConfig.tutorName,
  areaServed: "Utrecht, Netherlands",
  email: siteConfig.email,
  telephone: siteConfig.phoneE164,
  url: siteConfig.siteUrl,
  description:
    "Persoonlijke bijles in Utrecht en online voor basisschool, VMBO, HAVO en VWO in rekenen, taal, wiskunde, natuurkunde, scheikunde en Engels.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${manrope.variable} ${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-ink">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
