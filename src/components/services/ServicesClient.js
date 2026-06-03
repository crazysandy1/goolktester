'use client';
import Link from 'next/link';
import { useFadeUp } from '@/hooks/useFadeUp';
import s from '@/app/services/services.module.css';

const SERVICES = [
  {
    id: 'strategy',
    num: '01',
    title: 'Clinical IT Strategy & Advisory',
    desc: 'Most healthcare IT projects fail because technology was chosen before workflows were understood. We spend time on-site in your environment, shadowing clinicians and nurses to draft roadmaps that reflect clinical reality — not vendor pitches.',
    deliverables: [
      'Current-state technology mapping and gap analysis',
      'Clinical workflow audit and bottleneck documentation',
      'EMR / HIS vendor scoring and selection frameworks',
      'Multi-year clinical transformation roadmaps with cost projections',
      'Compliance and data privacy gap audits (HIPAA, DPDP 2023)'
    ],
    kpi: { val: '30% faster', label: 'Implementation speed' },
    kpiDesc: 'Average project timeline reduction compared to traditional IT consultancies.'
  },
  {
    id: 'development',
    num: '02',
    title: 'Healthcare Software Development',
    desc: 'We build secure, low-latency applications designed for fast-paced care settings. From custom patient-facing portals and e-prescription pads to complex systems integration bridges — engineered with HL7/FHIR compliance built into the codebase.',
    deliverables: [
      'Custom B2B clinical portals, dashboards, and HIS modules',
      'White-label patient mobile applications (iOS & Android)',
      'FHIR-native database models and secure REST/GraphQL APIs',
      'Digital signature integration and paperless prescription engines',
      'Audit logging, role-based access control, and end-to-end data encryption'
    ],
    kpi: { val: '+80% increase', label: 'Patient booking lift' },
    kpiDesc: 'Documented booking volume growth within 90 days for digital engagement clients.'
  },
  {
    id: 'adoption',
    num: '03',
    title: 'Implementation & Change Management',
    desc: 'Go-live is not the finish line. We stay on-site with your team, training ward clerks, setting up hypercare help desks, and embedding clinical champions to ensure that the software actually gets used by your frontline staff.',
    deliverables: [
      'Department-specific training programs and workflow dry-runs',
      'On-site go-live support pods (24/7 hypercare coverage)',
      'Adoption metric trackers (60 and 90 days post-go-live)',
      'Feedback loop management and quick-turn code refinement support',
      'Clinical adoption champion activation and training'
    ],
    kpi: { val: '85%', label: 'Clinician adoption' },
    kpiDesc: 'Average active utilization rate measured across all active EMR deployments at 90 days.'
  },
  {
    id: 'ai-apps',
    num: '04',
    title: 'AI-Powered Medical Applications',
    desc: 'We build clinical AI solutions that protect and assist human judgment. From bed occupancy forecasting engines to multilingual voice triage kiosks, our models are designed to integrate seamlessly into active clinical queues.',
    deliverables: [
      'Predictive bed-occupancy and staff-planning forecasting algorithms',
      'Multilingual voice-to-text symptom triage modules',
      'Secure LLM pipelines for automated medical record summaries',
      'Prior authorization automation and insurance claim coding logic',
      'Clinician-in-the-loop audit logs and safety gate systems'
    ],
    kpi: { val: '−25% latency', label: 'Clinical decision time' },
    kpiDesc: 'Improvement in emergency ward triage-to-admission cycles post-deployment.'
  }
];

const APPROACH = [
  { phase: '01', title: 'Discover', weeks: '2–3 weeks', desc: 'On-site rounds. Shadow clinical staff. Map workflows as they exist, not as the org chart suggests. We walk away from projects where the fit is wrong.' },
  { phase: '02', title: 'Design', weeks: '3–5 weeks', desc: 'Architecture for your environment — existing systems, current devices, planned roadmap. Compliance written in from line one, not reviewed before audit.' },
  { phase: '03', title: 'Build', weeks: 'Milestone-gated', desc: 'Phased delivery. Every sprint validated with clinical users before progressing. No big-bang go-lives. No surprises for the ward team.' },
  { phase: '04', title: 'Adopt', weeks: 'Embedded in delivery', desc: 'Change management and training are not separate workstreams. They run alongside every sprint. Clinical champions identified and activated in the first two weeks.' },
  { phase: '05', title: 'Measure', weeks: '30–90 days post-live', desc: 'KPIs defined at discovery and tracked through go-live and beyond. You see adoption rates, workflow efficiency, and ROI — reported, not estimated.' },
];

export default function ServicesClient() {
  useFadeUp();

  return (
    <>
      {/* HERO */}
      <section className={s.hero}>
        <div className={s.heroInner}>
          <span className="section-tag">Our Capabilities</span>
          <h1 className={s.heroH1}>
            Clinical IT services designed around <em style={{ fontStyle: 'italic' }}>care delivery.</em>
          </h1>
          <p className={s.heroSub}>
            We combine medical domain expertise with modern software engineering. We do not just consult and deliver slide decks — we build, implement, and stay until your clinical team adopts the change.
          </p>
          <div className={s.heroActions}>
            <Link href="/contact" className="btn-primary">Schedule a Free Assessment →</Link>
            <Link href="/solutions" className="btn-outline">Explore Our Solutions</Link>
          </div>
        </div>
      </section>

      {/* SERVICE DETAILS */}
      {SERVICES.map((svc, i) => {
        const isEven = i % 2 === 0;
        const sectionClass = isEven ? s.svcSection : s.svcSectionAlt;

        return (
          <section key={svc.id} id={svc.id} className={sectionClass}>
            <div className={`${s.svcInner} fade-up`}>
              {/* Left Column: Description & KPI */}
              <div className={s.svcContent}>
                <div className={s.svcNum}>{svc.num}</div>
                <h2 className={s.svcTitle}>{svc.title}</h2>
                <p className={s.svcDesc}>{svc.desc}</p>

                {/* KPI block */}
                <div className={s.outcomesBlock}>
                  <div className={s.outcomesLabel}>Key Result Metric</div>
                  <div className={s.outcomeMetric}>{svc.kpi.val}</div>
                  <div className={s.outcomeText}>{svc.kpi.label} — {svc.kpiDesc}</div>
                </div>
              </div>

              {/* Right Column: Deliverables Card */}
              <div className={s.svcDetailCard}>
                <h3 className={s.cardTitle}>Deliverables & scope</h3>
                <div className={s.bulletList}>
                  {svc.deliverables.map((del, j) => (
                    <div key={j} className={s.bulletItem}>
                      <span className={s.bullet} />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '2.5rem' }}>
                  <Link href="/contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Discuss this service →
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* HOW WE WORK */}
      <section className={s.approachSection} id="how-we-work">
        <div className={s.approachInner}>
          <div className={s.approachHead}>
            <span className="section-tag">Our Method</span>
            <h2 className={s.approachH2}>
              Discovery first.<br />
              <em>Always.</em>
            </h2>
          </div>
          <div className={s.approachSteps}>
            {APPROACH.map((step, i) => (
              <div key={i} className={`${s.approachStep} fade-up`}>
                <div className={s.approachStepNum}>{step.phase}</div>
                <div className={s.approachStepTitle}>{step.title}</div>
                <div className={s.approachStepWeeks}>{step.weeks}</div>
                <p className={s.approachStepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--brand)', padding: '80px 5vw' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
          <span style={{ display: 'inline-block', fontSize: '0.72rem', fontWeight: 700, color: 'var(--brand-light)', textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: '0.9rem' }}>
            Get Started
          </span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.6rem,2.5vw,2.3rem)', fontWeight: 700, color: '#fff', marginBottom: '0.875rem', letterSpacing: '-0.025em' }}>
            Ready to enhance your clinical technology?
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--brand-light)', opacity: 0.9, lineHeight: 1.75, maxWidth: 520, margin: '0 auto 2rem' }}>
            Book a 30-minute workspace review with our founding team. We will analyze your current systems, identify workflow gaps, and propose a concrete roadmap.
          </p>
          <div style={{ display: 'flex', gap: '0.875rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ background: '#fff', color: 'var(--brand)', padding: '0.8rem 1.75rem', borderRadius: 9, fontWeight: 600, fontSize: '0.92rem', textDecoration: 'none' }}>Schedule a Consultation →</Link>
            <Link href="/case-studies" className="btn-ghost">View Case Studies</Link>
          </div>
        </div>
      </section>
    </>
  );
}
