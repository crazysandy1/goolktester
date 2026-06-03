import Link from 'next/link';
import { notFound } from 'next/navigation';

const CASE_DETAILS = {
  'hospital-workflow-digitization': {
    tag: 'Hospital Management',
    title: 'Multi-specialty hospital digitises OPD-to-discharge workflow',
    context: 'Karnataka · 120-bed hospital · 10-week deployment',
    meta: {
      client: 'Metro Multi-Specialty Hospital',
      location: 'Karnataka, India',
      timeline: '10 weeks (Go-live in 90 days)',
      scope: 'Full HIS Replacement (Billing, Pharmacy, Lab, OPD/IPD, nursing stations)'
    },
    metrics: [
      { val: '+34%', label: 'OPD Daily Throughput' },
      { val: '−35%', label: 'Appointment No-show Rate' },
      { val: '90 days', label: 'Average Go-live Time' }
    ],
    challenge: 'The hospital was running on three siloed legacy MIS systems. Receptionists had to duplicate entries from appointment records into billing logs. Pharmacy stock counts did not reconcile with IPD prescription logs, leading to frequent medicine stockouts. Doctors had to write prescriptions on paper, which nurses then manually entered into discharge sheets, creating critical transcription latency.',
    solution: 'Goolk AI deployed a unified Hospital Information System (HIS) with a shared relational data layer. We automated the data flows from the front-desk appointment desk to the billing desks in real-time. We integrated barcode scanners at the pharmacy counters to automatically deduct inventory when prescriptions were processed, and deployed nurse dashboards on tablet devices at the wards.',
    outcomes: 'Patient wait times at the billing desk dropped from an average of 42 minutes to less than 8 minutes. Billing leakage from unlogged ward procedures was reduced to absolute zero. The ward nurses reported saving an average of 2.2 hours per shift by avoiding manual transcription tasks.',
    quote: {
      text: 'Goolk AI did what three previous software vendors could not — they integrated our legacy systems in 11 weeks without a single minute of ward disruption.',
      author: 'Chief Medical Officer',
      org: 'Metro Multi-Specialty Hospital'
    },
    timelineSteps: [
      { week: 'Weeks 1-2', label: 'On-site discovery & shadowing', desc: 'Shadowed nurses, ward clerks, and billing executives to map how data moves between rooms.' },
      { week: 'Weeks 3-5', label: 'Data schema consolidation', desc: 'Migrated 7 years of legacy database records into a unified HL7/FHIR-native database.' },
      { week: 'Weeks 6-8', label: 'Departmental dry runs', desc: 'Ran parallel simulations with staff members in testing environments to build muscle memory.' },
      { week: 'Weeks 9-10', label: 'Phased go-live & Hypercare', desc: 'Switched departments one-by-one over two weekends with on-site engineering support.' }
    ]
  },
  'patient-app-bookings': {
    tag: 'Patient Engagement',
    title: 'White-label patient app drives +85% increase in online bookings',
    context: 'Tamil Nadu · 200-bed chain · 8-week deployment',
    meta: {
      client: 'Aegis Healthcare Group',
      location: 'Tamil Nadu, India',
      timeline: '8 weeks',
      scope: 'White-label Patient Mobile Apps (iOS & Android) + AI Triage Assist'
    },
    metrics: [
      { val: '+85%', label: 'Booking Volume Lift' },
      { val: '4.8★', label: 'App Store Rating' },
      { val: '78%', label: 'Patient Adoption Rate' }
    ],
    challenge: 'Aegis Healthcare relied entirely on their call centre for appointments. High call queues led to a 28% call abandonment rate. Patients had no way to view lab reports or download prescriptions without physically visiting the clinic and printing them out at the desk.',
    solution: 'We built a bespoke, fully white-labeled patient app for iOS and Android. It connects directly to their EMR via secure APIs. Patients can view doctors schedules, book appointments, make payments via UPI, and download report PDFs instantly. We also built a lightweight AI-based triage tool to guide patients to the correct specialty.',
    outcomes: 'Inbound booking calls decreased by 40%, freeing up call centre staff to handle complex clinical queries. Over 74% of patients discharged from the hospital registered on the app within 24 hours. The hospital chain saw a +85% lift in booking volume in the first 90 days.',
    quote: {
      text: 'Most IT firms deliver decks. Goolk AI delivered a working patient app that immediately resolved our call queue bottleneck and boosted our clinical brand.',
      author: 'Managing Director',
      org: 'Aegis Healthcare Group'
    },
    timelineSteps: [
      { week: 'Weeks 1-2', label: 'UX workflow planning', desc: 'Designed patient booking flows keeping senior citizens in mind, simplifying the screens.' },
      { week: 'Weeks 3-4', label: 'EMR API integration', desc: 'Connected the app secure pipeline to the existing EMR schedules and report storage buckets.' },
      { week: 'Weeks 5-6', label: 'Payment & notification setup', desc: 'Integrated Indian UPI rails and set up SMS/WhatsApp alerts for booking confirmations.' },
      { week: 'Weeks 7-8', label: 'App store submission & launching', desc: 'Published to Apple App Store and Google Play, and set up QR registration at billing counters.' }
    ]
  },
  'telemedicine-infrastructure-scale': {
    tag: 'Telemedicine',
    title: 'Teleconsultation platform scales to 150+ daily video consults',
    context: 'Pan-India · Telehealth provider · 6-week deployment',
    meta: {
      client: 'Veda Telehealth Network',
      location: 'Bangalore, India (Pan-India Service)',
      timeline: '6 weeks',
      scope: 'HIPAA-compliant high-volume teleconsultation engine + WhatsApp integrations'
    },
    metrics: [
      { val: '150+', label: 'Daily Video Consultations' },
      { val: '<2 min', label: 'Average Patient Wait Time' },
      { val: '97%', label: 'Video Call Completion' }
    ],
    challenge: 'Veda Network was using off-the-shelf video tools which suffered from call drops, high latency, and lack of integration with prescription writes. Receptionists had to copy prescription text from doctors emails and paste them into WhatsApp to send to patients.',
    solution: 'Goolk AI built a WebRTC-based high-availability teleconsultation engine. We integrated a digital prescription writing canvas directly into the video screen, allowing doctors to type and sign prescriptions while speaking with patients. Prescriptions are automatically converted to PDFs and pushed to patients via WhatsApp APIs.',
    outcomes: 'The provider scaled consultations from 40 to 150+ daily sessions without adding a single receptionist. Video latency drops were minimized, resulting in a 97% consultation completion rate. Digital signature audits are fully compliant with Indian telemedicine guidelines.',
    quote: {
      text: 'Our daily consultation volume scaled 3.5x within two months. Goolk AI compliance-first architecture saved us months of auditing preparation.',
      author: 'Chief Technology Officer',
      org: 'Veda Telehealth Network'
    },
    timelineSteps: [
      { week: 'Weeks 1-2', label: 'WebRTC pipeline architecture', desc: 'Designed the low-latency media servers and fallback TURN servers for poor network connections.' },
      { week: 'Weeks 3-4', label: 'Prescription tool design', desc: 'Built the digital prescription interface with built-in drug-drug interaction warning systems.' },
      { week: 'Weeks 5-6', label: 'WhatsApp & SMS gateway launch', desc: 'Integrated official WhatsApp Business API nodes for immediate PDF delivery post-consultation.' }
    ]
  },
  'realtime-kpi-dashboard': {
    tag: 'Clinical AI',
    title: 'Real-time KPI dashboard reduces clinical decision latency by 25%',
    context: 'Maharashtra · 350-bed hospital · 4-week deployment',
    meta: {
      client: 'Sahyadri Specialty Hospitals',
      location: 'Maharashtra, India',
      timeline: '4 weeks',
      scope: 'Predictive Bed Management Dashboard & Staff Triage AI Models'
    },
    metrics: [
      { val: '−25%', label: 'Clinical Decision Latency' },
      { val: '12%', label: 'Bed Allocation Improvement' },
      { val: '24/7', label: 'Real-time Data Sync' }
    ],
    challenge: 'Hospital leaders received bed-occupancy reports once a day at 9:00 AM. In the emergency ward, staff had to manually phone departments to check if a bed had been vacated, leading to average patient triage delays of 52 minutes and frequent ICU bottlenecks.',
    solution: 'We built a real-time data sync pipeline pulling ADT (Admissions, Discharges, Transfers) messages from the hospital systems. We designed a central operations dashboard displaying real-time patient queue metrics, bed pressures, and triage alerts, accessible on any tablet or smartphone.',
    outcomes: 'Decision latency dropped by 25%, and the average emergency room waiting time fell from 52 minutes to under 38 minutes. Bed utilization increased by 12% due to faster cleanup and allocation loops between discharge and admission.',
    quote: {
      text: 'Our operations team has real-time visibility for the first time. We no longer make staffing or admission decisions based on yesterday\'s data.',
      author: 'Chief Operating Officer',
      org: 'Sahyadri Specialty Hospitals'
    },
    timelineSteps: [
      { week: 'Week 1', label: 'ADT stream capture', desc: 'Connected listeners to EMR log files to capture admission and discharge events instantly.' },
      { week: 'Weeks 2-3', label: 'Dashboard development', desc: 'Designed real-time charts showing hospital bed levels, emergency ward load, and nurse ratios.' },
      { week: 'Week 4', label: 'Deployment & Training', desc: 'Installed dashboards at emergency counters and trained the clinical coordinators.' }
    ]
  },
  'rural-health-kiosk': {
    tag: 'KiaoM',
    title: 'Rural health kiosk pilot serving communities in Karnataka',
    context: 'Karnataka pilot · Village pharmacies · 5 languages',
    meta: {
      client: 'KiaoM Foundation Pilot Project',
      location: 'Rural Karnataka, India',
      timeline: 'Ongoing initiative (Live since Jan 2025)',
      scope: 'Multilingual AI health kiosk development, symptom triage models, and telemedicine bridge'
    },
    metrics: [
      { val: 'Pilot', label: 'Live in 5 Districts' },
      { val: '5', label: 'Indian Languages Supported' },
      { val: '<3 min', label: 'Average Symptom Triage Time' }
    ],
    challenge: 'Over 600 million rural Indians live in villages that lack functional primary care clinics. For minor symptoms, villagers have to travel hours to the nearest town, lose daily wages, and pay expensive consultants, or consult unverified local pharmacists.',
    solution: 'We designed KiaoM — a physical, low-cost health kiosk installed in village pharmacies. The kiosk is equipped with basic diagnostic devices (BP monitor, pulse oximeter, thermometer) connected to a tablet. A custom multilingual voice-AI guides users to input symptoms and connects them directly to tele-doctors.',
    outcomes: 'Villagers can access verified triage assessments and consult a doctor in under 5 minutes without leaving their village. During the initial pilot, over 4,500 consults have been completed across Karnataka, with a high patient satisfaction score.',
    quote: {
      text: 'Goolk AI built a solution that rural patients can interact with naturally using voice. This is bringing real doctor consults to villages for the first time.',
      author: 'Project Coordinator',
      org: 'KiaoM Foundation'
    },
    timelineSteps: [
      { week: 'Phase 1', label: 'Hardware & IoT engineering', desc: 'Integrated basic medical sensors to reliably stream vital signs over low-bandwidth 2G/3G connections.' },
      { week: 'Phase 2', label: 'Voice-AI translation models', desc: 'Trained speech models to handle Kannada, Telugu, Tamil, Marathi, and Hindi symptom descriptions.' },
      { week: 'Phase 3', label: 'Pilot deployment', desc: 'Installed kiosks in 12 villages in partnership with local pharmacy shops, establishing the doctor loop.' }
    ]
  },
  'claims-rcm-automation': {
    tag: 'Revenue Cycle',
    title: 'Insurance claim automation reduces denials by 25%',
    context: 'Bengaluru · Multi-specialty · 12-week deployment',
    meta: {
      client: 'Bangalore Care Multi-Specialty Chain',
      location: 'Bengaluru, India',
      timeline: '12 weeks',
      scope: 'RCM Automation engine, Claim Scraper, and CFO Finance Dashboards'
    },
    metrics: [
      { val: '−25%', label: 'Insurance Claim Denials' },
      { val: '+25%', label: 'Claim Reimbursement Speed' },
      { val: '₹85L', label: 'Revenue Recovered in 90 Days' }
    ],
    challenge: 'The hospital chain was losing 4.2% of its billable revenue due to claim denials. Claims were submitted manually on insurer portals. Errors like wrong patient IDs, missing signatures, or incorrect treatment codes were only discovered weeks later.',
    solution: 'Goolk AI built a claim-scrubbing engine. The system automatically scans discharge summaries, validates billing codes (ICD-10/CPT) against treatments, and flags formatting anomalies before submission. We also built scrapers to check claim statuses on insurance sites daily.',
    outcomes: 'In the first quarter post-launch, the system flagged over 400 erroneous claims before they were sent, reducing denials by 25%. The finance team recovered ₹85 Lakhs in previously delayed claims and speeded up the billing cycle by 25%.',
    quote: {
      text: 'We recovered our software investment in Goolk AI within the first three weeks of deployment. The pre-check algorithm is extremely robust.',
      author: 'Chief Financial Officer',
      org: 'Bangalore Care Chain'
    },
    timelineSteps: [
      { week: 'Weeks 1-3', label: 'Denial history analysis', desc: 'Audited 2,000 historical denials to extract the primary error patterns and code mismatches.' },
      { week: 'Weeks 4-8', label: 'Scrubbing engine build', desc: 'Programmed the rule engine containing ICD-10 validity rules and claim schema requirements.' },
      { week: 'Weeks 9-10', label: 'Insurer portal integration', desc: 'Built background robotic tasks to upload claims and check status logs automatically.' },
      { week: 'Weeks 11-12', label: 'Finance board go-live', desc: 'Launched the CFO dashboard and trained billing teams to resolve scrubbing alerts.' }
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(CASE_DETAILS).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const item = CASE_DETAILS[params.slug];
  if (!item) return { title: 'Case Study Not Found' };
  return {
    title: `${item.tag} Case Study: ${item.client || 'Goolk AI Engagement'}`,
    description: `Read about how Goolk AI solved critical healthcare IT challenges: ${item.title}. Details, metrics, and outcomes.`,
    alternates: { canonical: `https://www.goolkai.com/case-studies/${params.slug}` }
  };
}

export default function CaseStudyPage({ params }) {
  const item = CASE_DETAILS[params.slug];
  if (!item) notFound();

  return (
    <>
      {/* HEADER HERO */}
      <section style={{
        background: 'var(--surface)',
        padding: '156px 5vw 80px',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid var(--border)'
      }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.02, pointerEvents: 'none',
          backgroundImage: 'repeating-linear-gradient(0deg, var(--brand) 0 1px, transparent 1px 72px), repeating-linear-gradient(90deg, var(--brand) 0 1px, transparent 1px 72px)'
        }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 960, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
            <Link href="/case-studies" style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--brand)', textDecoration: 'none' }}>
              ← All Case Studies
            </Link>
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--border-mid)' }} />
            <span style={{
              fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em',
              background: 'var(--brand-light)', color: 'var(--brand)', padding: '3px 10px', borderRadius: 4
            }}>
              {item.tag}
            </span>
          </div>
          <h1 style={{
            fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: '1.5rem'
          }}>
            {item.title}
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--ink-muted)', lineHeight: 1.7, margin: 0, maxWidth: 760 }}>
            {item.context}
          </p>
        </div>
      </section>

      {/* METRICS & OVERVIEW SECTION */}
      <section style={{ background: 'var(--white)', padding: '60px 5vw 80px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          {/* Metrics bar */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem', background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: 12, padding: '2rem 1.5rem', marginBottom: '4rem'
          }}>
            {item.metrics.map((m, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: 'var(--brand)', lineHeight: 1.1 }}>
                  {m.val}
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--ink-muted)', marginTop: 8, textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700 }}>
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Overview columns */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr', gap: '4rem', alignItems: 'start' }}>
            {/* Left: Project Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.45rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '1rem' }}>
                  The Challenge
                </h2>
                <p style={{ fontSize: '0.94rem', color: 'var(--ink-muted)', lineHeight: 1.8, margin: 0 }}>
                  {item.challenge}
                </p>
              </div>

              <div>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.45rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '1rem' }}>
                  The Solution
                </h2>
                <p style={{ fontSize: '0.94rem', color: 'var(--ink-muted)', lineHeight: 1.8, margin: 0 }}>
                  {item.solution}
                </p>
              </div>

              <div>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.45rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '1rem' }}>
                  The Outcomes
                </h2>
                <p style={{ fontSize: '0.94rem', color: 'var(--ink-muted)', lineHeight: 1.8, margin: 0 }}>
                  {item.outcomes}
                </p>
              </div>
            </div>

            {/* Right: Meta Details card */}
            <div style={{
              background: 'var(--surface-alt)', border: '1px solid var(--border)',
              borderRadius: 12, padding: '2rem 1.5rem', position: 'sticky', top: 100
            }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '1.5rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border)' }}>
                Engagement Metadata
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { label: 'Client / partner', val: item.meta.client },
                  { label: 'Deployment location', val: item.meta.location },
                  { label: 'Implementation window', val: item.meta.timeline },
                  { label: 'Project scope', val: item.meta.scope }
                ].map((row, i) => (
                  <div key={i}>
                    <div style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--ink-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>
                      {row.label}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--ink)', fontWeight: 600, lineHeight: 1.4 }}>
                      {row.val}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section style={{ background: 'var(--surface-alt)', padding: '80px 5vw', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '3rem', textAlign: 'center' }}>
            Implementation Timeline
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {item.timelineSteps.map((step, i, arr) => (
              <div key={i} style={{ display: 'flex', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 100, flexShrink: 0 }}>
                  <span style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--brand)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {step.week}
                  </span>
                  {i < arr.length - 1 && <div style={{ flex: 1, width: 2, background: 'var(--border-mid)', margin: '12px 0' }} />}
                </div>
                <div style={{ flex: 1, paddingBottom: i < arr.length - 1 ? '2.5rem' : 0 }}>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.4rem' }}>
                    {step.label}
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--ink-muted)', lineHeight: 1.6, margin: 0 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section style={{ background: 'var(--white)', padding: '100px 5vw' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <span style={{ fontSize: '4rem', fontFamily: 'var(--font-heading)', color: 'var(--brand-mid)', lineHeight: 0.1, display: 'block', marginBottom: '1.5rem' }}>
            “
          </span>
          <blockquote style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.2rem, 2.5vw, 1.65rem)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.5, margin: '0 auto 1.5rem', maxWidth: 680 }}>
            {item.quote.text}
          </blockquote>
          <cite style={{ fontSize: '0.88rem', color: 'var(--ink-muted)', fontStyle: 'normal', fontWeight: 700, display: 'block' }}>
            {item.quote.author}
          </cite>
          <span style={{ fontSize: '0.78rem', color: 'var(--brand)', fontWeight: 600 }}>
            {item.quote.org}
          </span>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section style={{ background: 'var(--brand)', padding: '80px 5vw' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.6rem,2.5vw,2.3rem)', fontWeight: 700, color: '#fff', marginBottom: '0.875rem', letterSpacing: '-0.025em' }}>
            Ready to achieve these outcomes for your system?
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--brand-light)', opacity: 0.9, lineHeight: 1.75, maxWidth: 520, margin: '0 auto 2rem' }}>
            Book a free clinical IT consultation. We&apos;ll audit your workflows, analyze your existing integrations, and draft an honest roadmap.
          </p>
          <div style={{ display: 'flex', gap: '0.875rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ background: '#fff', color: 'var(--brand)', padding: '0.8rem 1.75rem', borderRadius: 9, fontWeight: 600, fontSize: '0.92rem', textDecoration: 'none' }}>Schedule a consultation →</Link>
            <Link href="/case-studies" className="btn-ghost">Back to case studies</Link>
          </div>
        </div>
      </section>
    </>
  );
}
