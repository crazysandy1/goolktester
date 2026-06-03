'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useFadeUp } from '@/hooks/useFadeUp';
import s from '@/app/solutions/solutions.module.css';

const TABS = [
  {
    id: 'his', label: 'Hospital Management',
    title: 'Hospital Information System (HIS)',
    desc: 'Your billing, OPD, pharmacy, and lab — in one screen, sharing one dataset. No duplicate entry. No chasing records across departments. Designed to replace legacy MIS without disrupting a single ward round.',
    features: ['OPD & IPD management', 'Pharmacy & inventory control', 'Laboratory information system', 'Billing & insurance processing', 'Nursing station dashboards', 'ABDM / ABHA integration'],
    kpi: { val: '90 days', label: 'Avg. go-live' },
  },
  {
    id: 'patient', label: 'Patient Engagement',
    title: 'Patient Engagement Platform',
    desc: 'Patients book, pay, view reports, and consult — from their phone. Your call centre handles 60% fewer inbound calls. Your brand everywhere, our name nowhere. Full white-label, iOS and Android.',
    features: ['White-label mobile app (iOS & Android)', 'Online appointment booking', 'Digital prescriptions & reports', 'AI symptom checker', 'Patient feedback & NPS tracking', 'Multilingual support'],
    kpi: { val: '+80%', label: 'Avg. booking lift' },
  },
  {
    id: 'telemed', label: 'Telemedicine',
    title: 'Telemedicine Infrastructure',
    desc: 'HD video consults, digital Rx with digital signature, integrated payments, and WhatsApp follow-up automations — in one workflow. Built for 150+ consults a day without a receptionist touching the queue.',
    features: ['HD video consultations', 'E-prescriptions with digital signature', 'Integrated payment gateway', 'WhatsApp follow-up automations', 'Multi-provider scheduling', 'Recording & audit trails'],
    kpi: { val: '97%', label: 'Call completion rate' },
  },
  {
    id: 'ai', label: 'Clinical AI',
    title: 'Clinical AI & Analytics',
    desc: 'Your CMO sees bed pressure, OPD volume, and department alerts before they become crises. No Excel. No morning report delays. Real-time, on any device, with AI-assisted clinical decision prompts for your care team.',
    features: ['Clinical decision support', 'Predictive bed & OPD analytics', 'Real-time KPI dashboards', 'AI-powered triage assist', 'Drug interaction alerts', 'Population health insights'],
    kpi: { val: '−25%', label: 'Decision latency' },
  },
  {
    id: 'rcm', label: 'Revenue Cycle',
    title: 'Revenue Cycle Management',
    desc: 'Claims filed automatically. Denials tracked, contested, and recovered. Revenue leakage plugged at source. Most hospitals recover 10–25% of previously lost billing within the first 90 days post-deployment.',
    features: ['Automated claim submission', 'Denial management workflows', 'Payment analytics & financial reporting', 'Real-time insurance verification', 'Revenue leakage detection engine', 'CFO dashboards'],
    kpi: { val: '−25%', label: 'Claim denial rate' },
  },
  {
    id: 'integration', label: 'Integration',
    title: 'Systems Integration & API Layer',
    desc: 'Already have an EMR, PACS, or LIS? We connect to it — Epic, Cerner, eHospital, Meditech — without disrupting a single ward round. HL7 FHIR-native. Your data stays yours, on India-hosted infrastructure.',
    features: ['HL7 FHIR compliance engine', 'EMR/EHR connectors (Epic, Cerner, eHospital)', 'PACS integration', 'LIS data bridge', 'Medical device data pipelines', 'Custom API development'],
    kpi: { val: 'FHIR R4', label: 'Compliance standard' },
  },
];

const DIFFERENTIATORS = [
  {
    icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
    title: 'We map before we build',
    desc: 'Two weeks with your nurses, billing staff, and front desk before recommending a single module. We\'ve walked away from deals when the fit wasn\'t right. That\'s why our deployments work.',
  },
  {
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    title: 'No compliance surprises',
    desc: 'HIPAA, DPDP, HL7/FHIR is in the architecture from day one. Data stays in India on ISO 27001-certified infrastructure. If it\'s not compliant at handover, we don\'t hand over.',
  },
  {
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
    title: 'Founders answer the phone',
    desc: 'When something breaks, you reach the engineer who built it — not a ticketing system, not a Level 1 agent. Every client has a direct line to the people who own the code.',
  },
  {
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    title: 'Start with one module',
    desc: 'A 30-bed clinic can deploy patient engagement only. A 400-bed chain can take the full stack. No all-or-nothing contracts. Expand module by module as you see ROI.',
  },
];

const WHO_SERVE = [
  { title: 'Hospitals & Health Systems', desc: '50–500+ bed facilities. Multi-site deployments. Unified patient records across all locations.' },
  { title: 'Specialty Clinic Chains', desc: 'Scalable infrastructure for chains across cities. One clinical platform, consistent experience at every location.' },
  { title: 'Telehealth Providers', desc: 'HD video consults, digital prescriptions, WhatsApp follow-ups, FHIR-compliant records. Built for daily volume at scale.' },
  { title: 'Medical Device Companies', desc: 'Device integration, IoMT connectivity, and clinical data pipelines that turn diagnostic output into actionable intelligence.' },
  { title: 'Payers & Insurers', desc: 'Claims automation, prior authorisation AI, member health portals, and population health analytics for large payer networks.' },
  { title: 'Healthcare Startups', desc: 'MVP to production with compliance from day one. Direct access to the team that builds your product. No enterprise bloat.' },
];

export default function SolutionsClient() {
  const [active, setActive] = useState(0);
  useFadeUp();

  useEffect(() => {
    const handleHash = () => {
      if (typeof window !== 'undefined' && window.location.hash) {
        const hash = window.location.hash.substring(1);
        const idx = TABS.findIndex(t => t.id === hash);
        if (idx !== -1) setActive(idx);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const tab = TABS[active];

  return (
    <>
      {/* HERO */}
      <section className={s.hero}>
        <div className={s.heroInner}>
          <span className="section-tag">Services & Solutions</span>
          <h1 className={s.heroH1}>
            Healthcare IT services built for <em style={{ fontStyle: 'italic' }}>clinical reality.</em>
          </h1>
          <p className={s.heroSub}>
            From clinical IT strategy and EHR integration to AI-powered medical applications and hospital management systems — every service is designed around how care is actually delivered, not how software is typically sold.
          </p>
          <div className={s.heroActions}>
            <Link href="/contact" className="btn-primary">Schedule a Demo →</Link>
            <Link href="/case-studies" className="btn-outline">View Case Studies</Link>
          </div>
        </div>
      </section>

      {/* SOLUTION TABS */}
      <section className={s.tabSection}>
        {/* Sticky tab bar */}
        <div className={s.tabBarWrapper}>
          <div className={`${s.tabBar} scrollbar-hide`}>
            {TABS.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className={`${s.tabButton} ${active === i ? s.tabButtonActive : ''}`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Active solution */}
        <div className={`${s.activeTabGrid} fade-up`}>
          <div className={s.tabLeft}>
            <h2 className={s.tabTitle}>{tab.title}</h2>
            <p className={s.tabDesc}>{tab.desc}</p>
            
            {/* KPI highlight */}
            <div className={s.kpiCard}>
              <div>
                <div className={s.kpiNum}>{tab.kpi.val}</div>
                <div className={s.kpiLabel}>{tab.kpi.label}</div>
              </div>
              <div className={s.kpiDivider} />
              <div className={s.kpiText}>
                Measured across live deployments
              </div>
            </div>
            
            <div className={s.tabActions}>
              <Link href="/contact" className="btn-primary">Schedule Demo →</Link>
              <Link href="/case-studies" className="btn-outline">View Case Studies</Link>
            </div>
          </div>

          <div className={s.featuresCard}>
            <div className={s.featuresTitle}>
              Key Features
            </div>
            <div className={s.featuresList}>
              {tab.features.map((f, i) => (
                <div key={i} className={s.featureItem}>
                  <span className={s.featureBullet} />
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY GOOLKAI */}
      <section className={s.whySection}>
        <div className={s.whyHeader}>
          <span className="section-tag">Why Goolk AI</span>
          <h2 className="section-h2">Why healthcare leaders choose Goolk AI <em>after trying others</em></h2>
        </div>
        <div className={s.whyGrid}>
          {DIFFERENTIATORS.map((d, i) => (
            <div key={i} className={`${s.diffCard} fade-up`}>
              <div className={s.diffIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d={d.icon} />
                </svg>
              </div>
              <div className={s.diffContent}>
                <h3>{d.title}</h3>
                <p>{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ENGAGEMENT MODEL */}
      <section className={s.engSection}>
        <div className={`${s.engHeader} fade-up`}>
          <span className="section-tag">How We Work With You</span>
          <h2 className="section-h2">Three ways to engage. <em>One standard of delivery.</em></h2>
          <p className="section-sub">
            Choose the engagement model that matches your current stage and internal capability. Every model includes direct access to the engineers who build your system.
          </p>
        </div>
        
        <div className={s.engGrid}>
          {[
            {
              num: '01',
              title: 'Clinical IT Advisory',
              subtitle: 'For organisations planning transformation',
              desc: 'We assess your current technology landscape, clinical workflows, and organisational readiness. You receive an actionable roadmap with prioritised recommendations — before a single line of code is written.',
              includes: ['EHR/HIS evaluation report', 'Clinical workflow audit', 'Vendor shortlist & scoring', 'Implementation roadmap', 'Compliance gap analysis'],
              fit: 'Best for: Health systems planning major tech investment',
            },
            {
              num: '02',
              title: 'Project Implementation',
              subtitle: 'For organisations ready to build or deploy',
              desc: 'End-to-end project delivery — from discovery through go-live. Fixed milestones, clinical gates, and a named engineer from our team throughout. We do not hand off to a delivery partner.',
              includes: ['Full discovery + design', 'Development or integration', '30-day hypercare post go-live', '90-day adoption KPI tracking', 'Staff training + change mgmt'],
              fit: 'Best for: Hospital IT projects with defined scope',
            },
            {
              num: '03',
              title: 'Full Technology Partnership',
              subtitle: 'For organisations scaling or running at pace',
              desc: 'Embedded clinical IT capability — ongoing roadmap advisory, feature development, and system optimisation. Our team functions as your extended clinical engineering function.',
              includes: ['Dedicated clinical IT pod', 'Monthly roadmap review', 'Continuous development', 'Incident response SLA', 'Quarterly outcome reviews'],
              fit: 'Best for: Health systems with ongoing technology needs',
            },
          ].map((eng, i) => (
            <div key={i} className={`${s.engCard} fade-up`}>
              <div className={s.engNum}>{eng.num}</div>
              <h3 className={s.engTitle}>{eng.title}</h3>
              <div className={s.engSubtitle}>{eng.subtitle}</div>
              <p className={s.engDesc}>{eng.desc}</p>
              
              <div className={s.engIncludes}>
                <div className={s.includesLabel}>Includes</div>
                <div className={s.includesList}>
                  {eng.includes.map((item, j) => (
                    <div key={j} className={s.includesItem}>
                      <span className={s.includesBullet} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className={s.engFit}>
                {eng.fit}
              </div>
              
              <Link href="/contact" className={`btn-outline ${s.engCta}`}>Discuss this model →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className={s.whoSection} id="who-we-serve">
        <div className={s.whoInner}>
          <div className={s.whoHead}>
            <span className={s.sectionLabel}>Who We Work With</span>
            <h2 className={s.whoH2}>Healthcare organisations<br /><em>at every stage.</em></h2>
          </div>
          <div className={s.whoGrid}>
            {WHO_SERVE.map((w, i) => (
              <div key={i} className={`${s.whoItem} fade-up`}>
                <h3 className={s.whoTitle}>{w.title}</h3>
                <p className={s.whoDesc}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--brand)', padding: '80px 5vw' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
          <span style={{ display: 'inline-block', fontSize: '0.72rem', fontWeight: 700, color: 'var(--brand-light)', textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: '0.9rem' }}>
            Free Assessment
          </span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.6rem,2.5vw,2.3rem)', fontWeight: 700, color: '#fff', marginBottom: '0.875rem', letterSpacing: '-0.025em' }}>
            Ready to transform your healthcare technology?
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--brand-light)', opacity: 0.9, lineHeight: 1.75, maxWidth: 520, margin: '0 auto 2rem' }}>
            Schedule a free clinical IT assessment. We&apos;ll map your current systems, identify gaps, and propose a tailored implementation roadmap with clear milestones and SLAs.
          </p>
          <div style={{ display: 'flex', gap: '0.875rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ background: '#fff', color: 'var(--brand)', padding: '0.8rem 1.75rem', borderRadius: 9, fontWeight: 600, fontSize: '0.92rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>Schedule a Consultation →</Link>
            <Link href="/case-studies" className="btn-ghost">View Case Studies</Link>
          </div>
        </div>
      </section>
    </>
  );
}
