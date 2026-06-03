import PrivacyClient from '@/components/privacy/PrivacyClient';
export const metadata = {
  title: 'Privacy Policy',
  description: 'Goolk AI Privacy Policy — how we collect, use, and protect your data in compliance with HIPAA, DPDP Act 2023, and HL7 FHIR standards.',
  alternates: { canonical: 'https://www.goolkai.com/privacy' },
};
export default function PrivacyPage() { return <PrivacyClient />; }
