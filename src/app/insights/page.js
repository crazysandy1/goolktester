import InsightsClient from '@/components/insights/InsightsClient';

export const metadata = {
  title: 'Insights',
  description:
    'Healthcare IT thinking from practitioners. Frameworks, clinical analysis, and hard-won lessons from 20+ implementations — EHR integration, clinical AI, compliance, and more.',
};

export default function InsightsPage() {
  return <InsightsClient />;
}
