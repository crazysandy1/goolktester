'use client';
import Link from 'next/link';
import { useFadeUp } from '@/hooks/useFadeUp';
import s from '@/app/about/about.module.css';

const VALUES = [
  {
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    title: 'Clinical First, Always',
    desc: 'Every recommendation starts with clinical workflow — not technology. We design for the people who deliver care, not the people who procure systems.',
  },
  {
    icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
    title: 'Compliance is the Foundation',
    desc: 'HIPAA, DPDP 2023, HL7 FHIR R4, and ABDM are built into architecture from day one. Compliance is never an audit-prep activity — it\'s how we build.',
  },
  {
    icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
    title: 'Discover Before You Design',
    desc: 'We\'ve walked away from projects where the fit wasn\'t right. Deep discovery before any design commitment means the projects we take succeed.',
  },
  {
    icon: 'M3 3v18h18M7 16l4-5 4 3 4-6',
    title: 'Outcomes Over Features',
    desc: 'We measure success by clinical adoption rates, workflow efficiency, and ROI — not by feature lists. Metrics are agreed at discovery and tracked through delivery.',
  },
  {
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    title: 'Healthcare for Everyone',
    desc: 'The KiaoM project exists because 600M Indians lack access to quality care. Our commercial work funds innovation that serves those who can\'t pay enterprise prices.',
  },
  {
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    title: 'Open Standards, No Lock-in',
    desc: 'HL7 FHIR-native from the ground up. If you ever change vendors, you export your complete patient records in standard format. Your data belongs to your patients.',
  },
];

const TIMELINE = [
  { year: '2021', title: 'Founded in Bangalore', desc: 'Goolk AI founded with a singular mission: healthcare for everyone. Clinical IT consultancy begins with first hospital advisory engagements.' },
  { year: '2022', title: 'First Healthcare Implementations', desc: 'Completed first EHR integration and clinical workflow automation projects. Established the Discovery-First methodology that now defines every engagement.' },
  { year: '2023', title: 'Regional Expansion Begins', desc: 'Healthcare IT deployments across India and Southeast Asia. Built out service capability in medical device integration and AI-powered clinical applications.' },
  { year: '2024', title: '20+ Implementations Milestone', desc: 'Crossed 20 healthcare implementations across India and Southeast Asia. ₹12Cr+ in documented healthcare value delivered. KiaoM rural AI health kiosk conceived.' },
  { year: '2025', title: 'AI Agents & Innovation Lab', desc: 'Launched AI Agents for Healthcare service line. KiaoM pilot live in Karnataka — multilingual AI kiosk bringing care to rural communities.' },
];

const LEADERSHIP = [
  {
    name: 'Priya K.',
    role: 'Founder',
    grad: 'linear-gradient(135deg, #1D4230 0%, #2A5C3F 100%)',
    initials: 'PK',
    bio: 'Ex-health systems lead. Dedicated to clinical workflow design and digital care transformation.'
  },
  {
    name: 'Sandeep JS',
    role: 'CTO',
    grad: 'linear-gradient(135deg, #2E6B6B 0%, #3D7A56 100%)',
    initials: 'SJS',
    bio: 'Ex-health system architect. Designed clinical integrations for 20+ facilities globally.'
  }
];

const DEPARTMENTS = [
  {
    name: 'Clinical Advisory',
    role: 'Domain Experts',
    grad: 'linear-gradient(135deg, #1C2119 0%, #3A4039 100%)',
    initials: 'CA',
    bio: 'Practicing physicians & hospital administrators guiding workflow designs.'
  },
  {
    name: 'Clinical Engineering',
    role: 'System Integrators',
    grad: 'linear-gradient(135deg, #B8912E 0%, #5C8C6E 100%)',
    initials: 'CE',
    bio: 'HL7 FHIR integration specialists & healthcare software developers.'
  },
  {
    name: 'Product Design',
    role: 'UX & Clinical Research',
    grad: 'linear-gradient(135deg, #7A6624 0%, #3D5C4A 100%)',
    initials: 'PD',
    bio: 'Designing high-adoption interfaces validated in live ward environments.'
  },
];

const MISSION_POINTS = [
  'Clinical IT strategy that drives adoption — not just deployment',
  'Compliance built into architecture from day one',
  'Discovery-first: we understand before we recommend',
  'Direct access to the engineers who built your system',
  'Outcomes tracked from kickoff through 90 days post-go-live',
];

export default function AboutClient() {
  useFadeUp();
  return (
    <>
      {/* HERO */}
      <section className={s.aboutHero}>
        <div className={s.aboutHeroInner}>
          <span className="section-tag">About Goolk AI</span>
          <h1 className={s.aboutHeroH1}>
            We exist because healthcare deserves <em>better technology partners.</em>
          </h1>
          <p className={s.aboutHeroSub}>
            Goolk AI is a healthcare IT consultancy headquartered in Bangalore, delivering clinical IT strategy, EHR integration, and AI-powered medical applications to health organisations across India, UAE, and Singapore. Our mission is simple: healthcare for everyone — starting with the technology that makes it possible.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className={s.missionSection}>
        <div className={s.missionGrid}>
          <div className="fade-up">
            <span className="section-tag">Our Mission</span>
            <h2 className="section-h2" style={{ marginBottom: '1.2rem' }}>
              <em>Healthcare for everyone.</em> Every human deserves access to quality medical treatment.
            </h2>
            <div className={s.missionText}>
              <p>Most healthcare IT failures share a root cause: technology was chosen before workflows were understood. Vendors prioritise features over adoption. Compliance is treated as a last-mile concern. And clinical teams are handed systems they never asked for.</p>
              <p>Goolk AI was built to solve this differently. We are clinically-led and technically executed. We spend time in your environment before we propose anything. And we stay accountable to measurable outcomes — not just go-live dates.</p>
            </div>
          </div>
          <div className={`${s.missionVisual} fade-up`}>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '1.4rem' }}>
              What distinguishes our work
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {MISSION_POINTS.map((item, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '0.875rem',
                  padding: '0.75rem 1rem', background: 'var(--white)',
                  borderRadius: '10px', fontSize: '0.875rem', fontWeight: 500,
                  color: 'var(--ink)', border: '1px solid var(--border)',
                }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--brand)', flexShrink: 0 }} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className={s.valuesSection}>
        <div className="text-center fade-up">
          <span className="section-tag">Our Values</span>
          <h2 className="section-h2">Six principles that <em>define every engagement</em></h2>
          <p className="section-sub">Not aspirations. Not slide-deck messaging. The actual principles that govern how we work — in discovery, in delivery, and after go-live.</p>
        </div>
        <div className={s.valuesGrid}>
          {VALUES.map((v, i) => (
            <div key={i} className={`${s.valueCard} fade-up`}>
              <div className={s.valueIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d={v.icon} />
                </svg>
              </div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className={s.storySection}>
        <div className="text-center fade-up">
          <span className="section-tag">Our Journey</span>
          <h2 className="section-h2">Five years. <em>Growing globally.</em></h2>
        </div>
        <div className={s.storyTimeline}>
          {TIMELINE.map((t, i, arr) => (
            <div key={i} className={`${s.storyRow} fade-up`}>
              <div className={s.storyLeft}>
                <div className={s.storyDot} />
                {i < arr.length - 1 && <div className={s.storyLine} />}
              </div>
              <div className={s.storyBody}>
                <div className={s.storyYear}>{t.year}</div>
                <div className={s.storyTask}>{t.title}</div>
                <div className={s.storyDesc}>{t.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className={s.teamSection}>
        <div className="text-center fade-up">
          <span className="section-tag">Our Team</span>
          <h2 className="section-h2">Clinical experts. <em>Technical depth.</em></h2>
          <p className="section-sub">A founder-led team combining healthcare domain expertise with engineering capability. Everyone who works on your project has operated in clinical environments — not just built software for them.</p>
        </div>
        
        {/* Leadership Grid */}
        <div className={s.leadershipGrid}>
          {LEADERSHIP.map((t, i) => (
            <div key={i} className={`${s.teamCard} fade-up`}>
              <div className={s.teamAvatar} style={{ background: t.grad }}>
                {t.initials}
              </div>
              <h3>{t.name}</h3>
              <p>{t.role}</p>
              <p className={s.teamBio}>{t.bio}</p>
            </div>
          ))}
        </div>

        {/* Departments Grid */}
        <div className={s.departmentsGrid}>
          {DEPARTMENTS.map((t, i) => (
            <div key={i} className={`${s.teamCard} fade-up`}>
              <div className={s.teamAvatar} style={{ background: t.grad }}>
                {t.initials}
              </div>
              <h3>{t.name}</h3>
              <p>{t.role}</p>
              <p className={s.teamBio}>{t.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--white)', padding: '80px 5vw', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }} className="fade-up">
          <span className="section-tag">Work with us</span>
          <h2 className="section-h2">Ready to transform your <em>healthcare IT?</em></h2>
          <p className="section-sub" style={{ margin: '0 auto 2rem' }}>
            Schedule 30 minutes with our team. We&apos;ll listen, ask the right questions, and give you an honest view on where technology can help and where it can&apos;t.
          </p>
          <div style={{ display: 'flex', gap: '0.875rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Schedule a Free Assessment →</Link>
            <Link href="/careers" className="btn-outline">Join Our Team</Link>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className={s.impactSection}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ display: 'inline-block', fontSize: '0.72rem', fontWeight: 700, color: 'oklch(88% 0.06 152)', textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: '0.9rem' }}>
            By the numbers
          </span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 700, color: '#fff', lineHeight: 1.25, letterSpacing: '-0.025em' }}>
            Measured impact across <em style={{ fontStyle: 'italic', color: 'oklch(88% 0.06 152)' }}>every engagement</em>
          </h2>
        </div>
        <div className={s.impactGrid}>
          {[
            { num: '20+', label: 'Healthcare implementations' },
            { num: '50+', label: 'Clinical workflows automated' },
            { num: '3+', label: 'Countries served' },
            { num: '₹12Cr+', label: 'Healthcare value delivered' },
          ].map((m, i) => (
            <div key={i} className={`${s.impactBox} fade-up`}>
              <div className={s.impactNum}>{m.num}</div>
              <div className={s.impactLabel}>{m.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
