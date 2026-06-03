'use client';
import Link from 'next/link';
import s from '@/app/home.module.css';

const PROOF_ROWS = [
  {
    tag: 'EHR Migration',
    org: 'Karnataka hospital chain',
    result: '85% staff adoption',
    time: '11 weeks',
  },
  {
    tag: 'Revenue Cycle',
    org: 'Bengaluru multi-specialty',
    result: '₹85L recovered',
    time: '90 days',
  },
  {
    tag: 'Teleconsult Platform',
    org: 'Pan-India provider',
    result: '150+ daily consults',
    time: '60 days',
  },
];

export default function HeroSection() {
  return (
    <section className={s.hero} id="hero">
      {/* Animated Background Mesh & Particles */}
      <div className={s.heroBackground}>
        <div className={s.heroGrid} />
        <div className={`${s.heroParticle} ${s.p1}`} />
        <div className={`${s.heroParticle} ${s.p2}`} />
        <div className={`${s.heroParticle} ${s.p3}`} />
      </div>

      <div className={s.heroBody}>

        {/* ── LEFT: Copy ── */}
        <div className={s.heroLeft}>
          <div className={s.heroEyebrow}>
            <span className={s.heroBadge}>Healthcare IT Consultancy</span>
            <span className={s.heroEyebrowText}>Bangalore · Est. 2021 · 3+ Countries</span>
          </div>

          <h1 className={s.heroH1}>
            The clinical IT<br />
            firm that stays<br />
            until <em>adoption</em><br />
            happens.
          </h1>

          <p className={s.heroSub}>
            We map your clinical workflows first. Then we build. Then we stay
            through go-live until your team actually uses it.
          </p>

          <div className={s.heroActions}>
            <Link href="/contact" className={s.heroCta}>
              Schedule a free assessment
            </Link>
            <Link href="/case-studies" className={s.heroGhost}>
              See real outcomes →
            </Link>
          </div>

          <div className={s.heroCompliance}>
            {['HIPAA', 'HL7 FHIR R4', 'ABDM', 'DPDP 2023', 'ISO 27001'].map(b => (
              <span key={b} className={s.heroCompBadge}>{b}</span>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Evidence column ── */}
        <div className={s.heroRight}>
          <div className={s.heroProofHead}>
            <span className={s.heroProofDot} />
            Recent engagements
          </div>
          <div className={s.heroProofList}>
            {PROOF_ROWS.map((row, i) => (
              <div key={i} className={s.heroProofRow}>
                <div className={s.heroProofTop}>
                  <span className={s.heroProofTag}>{row.tag}</span>
                  <span className={s.heroProofTime}>{row.time}</span>
                </div>
                <div className={s.heroProofOrg}>{row.org}</div>
                <div className={s.heroProofResult}>{row.result}</div>
              </div>
            ))}
          </div>
          <div className={s.heroProofFoot}>
            <Link href="/case-studies" className={s.heroProofLink}>
              All case studies →
            </Link>
          </div>
        </div>

      </div>

      {/* ── BOTTOM STATS ── */}
      <div className={s.heroStatBar}>
        {[
          { num: '20+',   label: 'Implementations' },
          { num: '50+',   label: 'Workflows automated' },
          { num: '85%',   label: 'Clinician adoption avg.' },
          { num: '₹12Cr+', label: 'Healthcare value delivered' },
          { num: '3+',    label: 'Countries served' },
        ].map((st, i) => (
          <div key={i} className={s.heroStatItem}>
            <span className={s.heroStatNum}>{st.num}</span>
            <span className={s.heroStatLabel}>{st.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
