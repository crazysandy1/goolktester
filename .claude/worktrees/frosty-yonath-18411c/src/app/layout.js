import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingBanners from '@/components/FloatingBanners';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
  weight: ['700', '800'],
});

export const metadata = {
  metadataBase: new URL('https://www.goolkai.com'),
  title: {
    default: 'Goolkai AI — Hospital Management & Healthcare Technology Solutions India',
    template: '%s | Goolkai AI',
  },
  description:
    'Goolkai AI delivers end-to-end digital healthcare solutions — Hospital Management System, Telemedicine, Patient Engagement, Clinical AI, and Revenue Cycle Management for hospitals across India.',
  keywords: [
    'hospital management system India',
    'healthcare technology company India',
    'telemedicine platform hospital',
    'patient engagement software',
    'clinical AI hospital',
    'HIS software India',
    'hospital digital transformation',
    'ABDM compliant HIS',
    'healthcare IT company Bangalore',
    'hospital information system',
    'EMR India',
    'electronic medical records',
    'hospital software India 2026',
    'healthcare AI platform',
  ],
  authors: [{ name: 'Goolkai AI Technologies Pvt. Ltd.' }],
  creator: 'Goolkai AI Technologies Pvt. Ltd.',
  publisher: 'Goolkai AI Technologies Pvt. Ltd.',
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://www.goolkai.com',
    languages: { 'en-IN': 'https://www.goolkai.com', en: 'https://www.goolkai.com' },
  },
  openGraph: {
    title: 'Goolkai AI — Hospital Management & Healthcare Technology Solutions India',
    description:
      'Goolkai AI delivers end-to-end digital healthcare solutions — Hospital Management System, Telemedicine, Patient Engagement, Clinical AI, and Revenue Cycle Management for hospitals across India.',
    url: 'https://www.goolkai.com',
    siteName: 'Goolkai AI',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Goolkai AI Healthcare Technology' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@goolkaiAI',
    title: 'Goolkai AI — Hospital Management & Healthcare Technology Solutions India',
    description:
      'Goolkai AI delivers end-to-end digital healthcare solutions — Hospital Management System, Telemedicine, Patient Engagement, Clinical AI, and Revenue Cycle Management for hospitals across India.',
    images: ['/og-image.png'],
  },
  other: {
    'geo.region': 'IN',
    'geo.placename': 'Bangalore, India',
  },
  verification: {},
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
};

export default function RootLayout({ children }) {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.goolkai.com/#organization',
        name: 'Goolkai AI Technologies Pvt. Ltd.',
        alternateName: 'Goolkai AI',
        url: 'https://www.goolkai.com',
        logo: 'https://www.goolkai.com/logo.png',
        description: 'End-to-end digital healthcare solutions for hospitals, clinic chains, and healthcare networks across India.',
        foundingDate: '2021',
        numberOfEmployees: { '@type': 'QuantitativeValue', value: 120 },
        address: { '@type': 'PostalAddress', addressLocality: 'Bangalore', addressRegion: 'Karnataka', addressCountry: 'IN' },
        contactPoint: [
          { '@type': 'ContactPoint', contactType: 'sales', email: 'partnerships@goolkai.com', availableLanguage: ['English', 'Hindi'] },
          { '@type': 'ContactPoint', contactType: 'technical support', email: 'tech@goolkai.com' },
        ],
        sameAs: ['https://www.linkedin.com/company/goolkai', 'https://twitter.com/goolkaiAI'],
        knowsAbout: ['Hospital Information System', 'Telemedicine', 'Healthcare AI', 'Patient Engagement', 'Revenue Cycle Management', 'Clinical Decision Support', 'ABDM', 'FHIR'],
        areaServed: { '@type': 'Country', name: 'India' },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.goolkai.com/#website',
        url: 'https://www.goolkai.com',
        name: 'Goolkai AI',
        publisher: { '@id': 'https://www.goolkai.com/#organization' },
        inLanguage: 'en-IN',
        potentialAction: {
          '@type': 'SearchAction',
          target: { '@type': 'EntryPoint', urlTemplate: 'https://www.goolkai.com/search?q={search_term_string}' },
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  };

  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingBanners />
      </body>
    </html>
  );
}
