'use client';
import Link from 'next/link';
import { useFadeUp } from '@/hooks/useFadeUp';
import s from '@/app/case-studies/case-studies.module.css';

const TAG_COLORS = {
  'Hospital Management': { bg: 'var(--brand-light)', color: 'var(--brand)' },
  'Patient Engagement':  { bg: 'var(--green-light)', color: 'var(--green)' },
  'Telemedicine':        { bg: 'var(--brand-light)', color: 'var(--brand)' },
  'Clinical AI':         { bg: 'var(--brand-light)', color: 'var(--brand)' },
  'KiaoM':               { bg: 'var(--brand-light)', color: 'var(--brand)' },
  'Revenue Cycle':       { bg: 'var(--brand-light)', color: 'var(--brand)' },
};

const CASES = [
  {
    slug: 'hospital-workflow-digitization',
    tag: 'Hospital Management',
    title: 'Multi-specialty hospital digitises OPD-to-discharge workflow',
    desc: 'Complete HIS deployment replacing 3 legacy systems, integrating billing, pharmacy, and laboratory into a single unified platform.',
    context: 'Karnataka · 120-bed hospital · 10-week deployment',
    metrics: [{ val: '+34%', label: 'OPD throughput' }, { val: '−35%', label: 'No-show rate' }, { val: '90 days', label: 'Go-live time' }],
  },
  {
    slug: 'patient-app-bookings',
    tag: 'Patient Engagement',
    title: 'White-label patient app drives +85% increase in online bookings',
    desc: 'Branded mobile app with online appointment booking, digital reports, e-prescriptions, and AI symptom checker.',
    context: 'Tamil Nadu · 200-bed chain · 8-week deployment',
    metrics: [{ val: '+85%', label: 'Online bookings' }, { val: '4.8★', label: 'App store rating' }, { val: '89%', label: 'Patient adoption' }],
  },
  {
    slug: 'telemedicine-infrastructure-scale',
    tag: 'Telemedicine',
    title: 'Teleconsultation platform scales to 150+ daily video consults',
    desc: 'HIPAA-compliant video platform with e-prescriptions, integrated payments, and WhatsApp follow-up automations built for high-volume use.',
    context: 'Pan-India · Telehealth provider · 6-week deployment',
    metrics: [{ val: '150+', label: 'Daily consults' }, { val: '<2 min', label: 'Avg. wait time' }, { val: '97%', label: 'Call completion' }],
  },
  {
    slug: 'realtime-kpi-dashboard',
    tag: 'Clinical AI',
    title: 'Real-time KPI dashboard reduces clinical decision latency by 40%',
    desc: 'Hospital intelligence platform with predictive analytics for bed management, staffing, and department load forecasting.',
    context: 'Maharashtra · 350-bed hospital · 4-week deployment',
    metrics: [{ val: '−40%', label: 'Decision latency' }, { val: '18%', label: 'Better forecasting' }, { val: '24/7', label: 'Real-time data' }],
  },
  {
    slug: 'rural-health-kiosk',
    tag: 'KiaoM',
    title: 'Rural health kiosk pilot serving communities in Karnataka',
    desc: 'AI-powered multilingual kiosk deployed in village pharmacies — providing symptom triage and live doctor teleconsultation.',
    context: 'Karnataka pilot · Village pharmacies · 5 languages',
    metrics: [{ val: 'Pilot', label: 'Live in Karnataka' }, { val: '5', label: 'Languages' }, { val: '<3 min', label: 'Triage time' }],
  },
  {
    slug: 'claims-rcm-automation',
    tag: 'Revenue Cycle',
    title: 'Insurance claim automation reduces denials by 25%',
    desc: 'End-to-end RCM automation — claim submission, denial management, and collections intelligence with financial dashboards.',
    context: 'Bengaluru · Multi-specialty · 12-week deployment',
    metrics: [{ val: '−25%', label: 'Claim denials' }, { val: '+25%', label: 'Faster reimbursement' }, { val: '₹85L', label: 'Revenue recovered' }],
  },
];

export default function CaseStudiesClient() {
  useFadeUp();
  return (
    <>
      {/* HERO */}
      <section className={s.hero}>
        <div className={s.heroInner}>
          <span className="section-tag">Case Studies</span>
          <h1 className={s.heroH1}>
            Numbers from real hospitals. <em style={{ fontStyle: 'italic' }}>Not a pitch deck.</em>
          </h1>
          <p className={s.heroSub}>
            We measure before deployment, and again at 30, 60, and 90 days after go-live. Every number here came from a live deployment — not a projection, not a benchmark, not a competitor claim.
          </p>
          <div className={s.tagStrip}>
            {['HIS', 'Patient Engagement', 'Telemedicine', 'Clinical AI', 'KiaoM', 'RCM'].map(tag => (
              <span key={tag} className={s.tagChip}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <div className={s.disclaimerStrip}>
        <div className={s.disclaimerInner}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={s.disclaimerIcon}>
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <p className={s.disclaimerText}>
            <strong>Transparency note:</strong> Goolk AI is a growing healthcare IT consultancy. All metrics shown are from live deployments. Results are measured outcomes, not projections — verified during active engagements.
          </p>
        </div>
      </div>

      {/* CASES GRID */}
      <section className={s.gridSection}>
        <div className={s.grid}>
          {CASES.map((c, i) => {
            const tagColor = TAG_COLORS[c.tag] || { bg: 'var(--brand-light)', color: 'var(--brand)' };
            return (
              <Link href={`/case-studies/${c.slug}`} key={i} className={`${s.card} fade-up`}>
                <div>
                  <div className={s.cardHeader}>
                    <span className={s.cardTag} style={{ background: tagColor.bg, color: tagColor.color }}>
                      {c.tag}
                    </span>
                    <span className={s.cardContext}>{c.context}</span>
                  </div>
                  <h3 className={s.cardTitle}>{c.title}</h3>
                  <p className={s.cardDesc}>{c.desc}</p>
                </div>
                <div className={s.metricsGrid}>
                  {c.metrics.map((m, j) => (
                    <div key={j} className={s.metricItem}>
                      <div className={s.metricVal}>{m.val}</div>
                      <div className={s.metricLabel}>{m.label}</div>
                    </div>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* HOW WE MEASURE */}
      <section className={s.methodSection}>
        <div className={s.methodInner}>
          <div className={`${s.methodLeft} fade-up`}>
            <span className="section-tag">Methodology</span>
            <h2 className="section-h2">How we measure <em>success</em></h2>
            <p className="section-sub" style={{ marginBottom: '1.5rem' }}>
              Every engagement begins with baseline measurement — before we write a single line of code, we document the current state. At go-live and 30/60/90 days after, we remeasure the same metrics.
            </p>
            <p style={{ fontSize: '0.9rem', color: 'var(--ink-muted)', lineHeight: 1.75 }}>
              This is how we hold ourselves accountable. If outcomes don&apos;t meet projections, we work until they do — it&apos;s written into our engagement contracts.
            </p>
          </div>
          
          <div className={`${s.methodRight} fade-up`}>
            {[
              { step: '01', title: 'Baseline measurement', desc: 'Current OPD volume, billing cycle time, no-show rate, and key KPIs documented before deployment.' },
              { step: '02', title: 'Milestone tracking', desc: 'Fortnightly check-ins during deployment to catch drift early. No surprises at go-live.' },
              { step: '03', title: 'Post-go-live audit', desc: 'Formal outcome review at 30, 60, and 90 days. Data-backed, not anecdotal.' },
            ].map((st, i) => (
              <div key={i} className={s.methodStep}>
                <div className={s.stepNum}>{st.step}</div>
                <div>
                  <div className={s.stepTitle}>{st.title}</div>
                  <div className={s.stepDesc}>{st.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--brand)', padding: '80px 5vw' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
          <span style={{ display: 'inline-block', fontSize: '0.72rem', fontWeight: 700, color: 'var(--brand-light)', textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: '0.9rem' }}>
            Become a case study
          </span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.6rem,2.5vw,2.3rem)', fontWeight: 700, color: '#fff', marginBottom: '0.875rem', letterSpacing: '-0.025em' }}>
            Ready to see results like these for <em style={{ fontStyle: 'italic' }}>your hospital</em>?
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--brand-light)', opacity: 0.9, lineHeight: 1.75, maxWidth: 520, margin: '0 auto 2rem' }}>
            Schedule a free consultation. We&apos;ll assess your current systems and tell you honestly what&apos;s possible — and what it will take.
          </p>
          <div style={{ display: 'flex', gap: '0.875rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ background: '#fff', color: 'var(--brand)', padding: '0.8rem 1.75rem', borderRadius: 9, fontWeight: 600, fontSize: '0.92rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>Schedule a Consultation →</Link>
            <Link href="/solutions" className="btn-ghost">Explore Platform</Link>
          </div>
        </div>
      </section>
    </>
  );
}
