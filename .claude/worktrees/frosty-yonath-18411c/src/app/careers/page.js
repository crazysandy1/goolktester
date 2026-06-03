import CareersClient from '@/components/careers/CareersClient';
export const metadata = {
  title: 'Careers',
  description: 'Join Goolkai AI — explore open roles in engineering, design, clinical advisory, and product. Help us build the digital backbone of modern hospitals.',
  alternates: { canonical: 'https://www.goolkai.com/careers' },
};
export default function CareersPage() { return <CareersClient />; }
