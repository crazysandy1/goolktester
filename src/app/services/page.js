import ServicesClient from '@/components/services/ServicesClient';

export const metadata = {
  title: 'Clinical IT Services & Advisory',
  description: 'Goolk AI\'s professional healthcare IT services. Clinical IT strategy, custom software development, EHR integration, and implementation change management.',
  alternates: { canonical: 'https://www.goolkai.com/services' },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
