import CaseStudiesClient from '@/components/case-studies/CaseStudiesClient';
export const metadata = {
  title: 'Case Studies',
  description: 'Real healthcare IT implementations — see how Goolk AI delivers clinical IT strategy, EHR integration, and measurable outcomes for health organisations globally.',
  alternates: { canonical: 'https://www.goolkai.com/case-studies' },
};
export default function CaseStudiesPage() { return <CaseStudiesClient />; }
