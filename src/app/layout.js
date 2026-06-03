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
    default: 'Goolk AI — Healthcare IT Solutions & Consultancy',
    template: '%s | Goolk AI',
  },
  description:
    'Goolk AI delivers end-to-end healthcare IT consultancy — Clinical IT strategy, EHR integration, hospital software development, and AI-powered medical apps. Trusted by 20+ healthcare implementations across 3+ countries.',
  keywords: [
    'healthcare IT consultancy India',
    'clinical IT strategy',
    'healthcare software development',
    'EHR integration services',
    'hospital management system',
    'medical app development',
    'AI healthcare solutions',
    'HIPAA compliant healthcare IT',
    'HL7 FHIR integration',
    'ABDM compliant',
    'healthcare digital transformation',
    'hospital IT consulting Bangalore',
    'clinical workflow automation',
    'medical device implementation',
    'healthcare AI platform India',
  ],
  authors: [{ name: 'Goolk AI Technologies Pvt. Ltd.' }],
  creator: 'Goolk AI Technologies Pvt. Ltd.',
  publisher: 'Goolk AI Technologies Pvt. Ltd.',
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
    title: 'Goolk AI — Healthcare IT Solutions & Consultancy',
    description:
      'Clinical IT strategy, EHR integration, hospital software development, and AI-powered medical apps. Innovate Faster. Integrate Smarter. Scale Securely.',
    url: 'https://www.goolkai.com',
    siteName: 'Goolk AI',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Goolk AI Healthcare IT Consultancy' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@goolkAI',
    title: 'Goolk AI — Healthcare IT Solutions & Consultancy',
    description:
      'Clinical IT strategy, EHR integration, hospital software development, and AI-powered medical apps. Trusted by 20+ healthcare implementations.',
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
        name: 'Goolk AI Technologies Pvt. Ltd.',
        alternateName: 'Goolk AI',
        url: 'https://www.goolkai.com',
        logo: 'https://www.goolkai.com/logo.png',
        description: 'Healthcare IT consultancy delivering clinical IT strategy, EHR integration, hospital software development, and AI-powered medical applications.',
        foundingDate: '2021',
        address: { '@type': 'PostalAddress', addressLocality: 'Bangalore', addressRegion: 'Karnataka', addressCountry: 'IN' },
        contactPoint: [
          { '@type': 'ContactPoint', contactType: 'sales', email: 'goolk.ai.startup@gmail.com', availableLanguage: ['English', 'Hindi'] },
          { '@type': 'ContactPoint', contactType: 'technical support', telephone: '+91-8884235771' },
        ],
        sameAs: ['https://www.linkedin.com/company/goolkai', 'https://wa.me/918884235771'],
        knowsAbout: ['Clinical IT Strategy', 'Healthcare Software Development', 'EHR Integration', 'HL7 FHIR', 'HIPAA Compliance', 'Medical Device Implementation', 'AI Healthcare Apps', 'ABDM'],
        areaServed: [
          { '@type': 'Country', name: 'India' },
          { '@type': 'Place', name: 'Global' },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.goolkai.com/#website',
        url: 'https://www.goolkai.com',
        name: 'Goolk AI',
        publisher: { '@id': 'https://www.goolkai.com/#organization' },
        inLanguage: 'en-IN',
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
