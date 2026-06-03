import CaseStudiesClient from '@/components/case-studies/CaseStudiesClient';
export const metadata = {
  title: 'Case Studies',
  description: 'Real-world healthcare technology deployments — see how Goolkai AI transforms hospital operations, patient engagement, and clinical outcomes across India.',
  alternates: { canonical: 'https://www.goolkai.com/case-studies' },
};
export default function CaseStudiesPage() { return <CaseStudiesClient />; }
