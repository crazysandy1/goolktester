'use client';
import Link from 'next/link';
import { useFadeUp } from '@/hooks/useFadeUp';
import s from '@/app/insights/insights.module.css';

const ARTICLES = [
  {
    tag: 'EHR Integration',
    readTime: '8 min read',
    title: 'Why 45% of EHR integrations fail — and what the 55% do differently',
    excerpt:
      'After 20+ healthcare IT implementations, we have a clear picture of why integrations fail. It comes down to three root causes — none of which are technical.',
    date: 'May 2025',
    highlight: true,
  },
  {
    tag: 'Clinical AI',
    readTime: '6 min read',
    title: 'Clinician-in-the-loop: the only safe model for AI in clinical decision support',
    excerpt:
      'AI diagnostics tools are proliferating. Most bypass the fundamental requirement for any clinical system: the clinician must remain in control. Here\'s why that matters, and how to enforce it architecturally.',
    date: 'Apr 2025',
    highlight: false,
  },
  {
    tag: 'Compliance',
    readTime: '10 min read',
    title: 'HIPAA, DPDP, and ABDM: building one architecture that satisfies all three',
    excerpt:
      'Multi-jurisdiction healthcare IT is complex by default. But if you build for FHIR R4 from the ground up and understand where the overlap is, you can satisfy all three without separate compliance workstreams.',
    date: 'Mar 2025',
    highlight: false,
  },
  {
    tag: 'Revenue Cycle',
    readTime: '7 min read',
    title: 'The billing leak you can\'t see: how most hospitals lose 10–20% of reimbursable revenue',
    excerpt:
      'Revenue leakage in healthcare billing is systematic. It\'s not fraud — it\'s uncoded procedures, missed modifiers, and claim submission timing. Here\'s a diagnostic framework your CFO can use today.',
    date: 'Feb 2025',
    highlight: false,
  },
  {
    tag: 'Telemedicine',
    readTime: '5 min read',
    title: 'Scaling to 150 daily video consults: the infrastructure decisions that determine success',
    excerpt:
      'Most telehealth platforms are built for demos, not load. Scaling video consultation infrastructure requires specific decisions at the transport, queue, and scheduling layers that most vendors skip.',
    date: 'Jan 2025',
    highlight: false,
  },
  {
    tag: 'Change Management',
    readTime: '9 min read',
    title: 'Why clinical adoption is a design problem, not a training problem',
    excerpt:
      'Software that clinicians resist using is software that failed at design — not at training. The distinction is important, because it changes when you need to intervene: before go-live, not after.',
    date: 'Dec 2024',
    highlight: false,
  },
];

const TAG_COLORS = {
  'EHR Integration':   { bg: 'var(--brand-light)', color: 'var(--brand)' },
  'Clinical AI':       { bg: 'var(--green-light)', color: 'var(--green)' },
  'Compliance':        { bg: 'var(--brand-light)', color: 'var(--brand)' },
  'Revenue Cycle':     { bg: 'var(--brand-light)', color: 'var(--brand)' },
  'Telemedicine':      { bg: 'var(--brand-light)', color: 'var(--brand)' },
  'Change Management': { bg: 'var(--surface-alt)', color: 'var(--ink-muted)' },
};

export default function InsightsClient() {
  useFadeUp();
  const [featured, ...rest] = ARTICLES;
  const tagColor = (tag) => TAG_COLORS[tag] || { bg: 'var(--brand-light)', color: 'var(--brand)' };

  return (
    <>
      {/* HERO */}
      <section className={s.hero}>
        <div className={s.heroInner}>
          <span className="section-tag">Insights</span>
          <h1 className={s.heroH1}>
            Healthcare IT thinking <em style={{ fontStyle: 'italic' }}>from practitioners, not pundits.</em>
          </h1>
          <p className={s.heroSub}>
            Frameworks, clinical IT analysis, and hard-won lessons from 20+ healthcare implementations. No sponsored content. No product announcements. Just the work.
          </p>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      <section className={s.featuredSection}>
        <div className={s.featuredInner}>
          <div className={`${s.featuredGrid} fade-up`}>
            {/* Featured article visual */}
            <div className={s.featuredVisual}>
              <div className={s.visualGridBg} />
              <div>
                <span className={s.featuredBadge}>Featured</span>
                <div className={s.visualTitle}>{featured.title}</div>
                <div className={s.visualMeta}>{featured.date} · {featured.readTime}</div>
              </div>
            </div>
            
            {/* Article text */}
            <div className={s.featuredContent}>
              <div className={s.metaRow}>
                <span className={s.tagChip} style={{ background: tagColor(featured.tag).bg, color: tagColor(featured.tag).color }}>
                  {featured.tag}
                </span>
                <span className={s.readTime}>{featured.readTime}</span>
              </div>
              <h2 className={s.featuredTitle}>{featured.title}</h2>
              <p className={s.featuredExcerpt}>
                {featured.excerpt}
              </p>
              <div className={s.featuredActions}>
                <Link href="/contact" className="btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.88rem' }}>
                  Discuss with our team →
                </Link>
                <span className={s.featuredDate}>{featured.date}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className={s.gridSection}>
        <div className={s.featuredInner}>
          <div className={s.grid}>
            {rest.map((a, i) => {
              const tc = tagColor(a.tag);
              return (
                <div key={i} className={`${s.card} fade-up`}>
                  <div>
                    <div className={s.cardHeader}>
                      <span className={s.tagChip} style={{ background: tc.bg, color: tc.color }}>
                        {a.tag}
                      </span>
                      <span className={s.readTime}>{a.readTime}</span>
                    </div>
                    <h3 className={s.cardTitle}>{a.title}</h3>
                    <p className={s.cardExcerpt}>
                      {a.excerpt}
                    </p>
                  </div>
                  <div className={s.cardFooter}>
                    <span className={s.cardDate}>{a.date}</span>
                    <Link href="/contact" className={s.cardLink}>
                      Discuss →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* NEWSLETTER / SUBSCRIBE */}
      <section className={s.newsletterSection}>
        <div className={s.newsletterInner}>
          <span className="section-tag">Stay Current</span>
          <h2 className="section-h2">Healthcare IT thinking,<br /><em>straight from the field.</em></h2>
          <p className="section-sub" style={{ margin: '0 auto 2rem' }}>
            New insights published quarterly. No marketing emails. No noise. Just the healthcare IT analysis your leadership team should read.
          </p>
          <div style={{ display: 'flex', gap: '0.875rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Get in Touch →</Link>
            <Link href="/case-studies" className="btn-outline">See Real Outcomes</Link>
          </div>
        </div>
      </section>
    </>
  );
}
