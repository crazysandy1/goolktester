import ContactClient from '@/components/contact/ContactClient';
export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Goolkai AI — schedule a consultation, request a demo, or reach out to our healthcare technology team.',
  alternates: { canonical: 'https://www.goolkai.com/contact' },
};
export default function ContactPage() { return <ContactClient />; }
