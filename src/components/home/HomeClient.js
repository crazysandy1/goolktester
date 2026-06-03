'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useFadeUp } from '@/hooks/useFadeUp';
import HeroSection from './HeroSection';
import s from '@/app/home.module.css';

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'YOUR_WEB3FORMS_KEY';

/* ─── Data ─── */
const SERVICES = [
  { num: '01', href: '/services#strategy', title: 'Clinical IT Strategy', desc: 'Workflow mapping before any recommendation. We spend time in your environment, talk to your clinicians, and build a roadmap that reflects how care is actually delivered — not how it should work on paper.' },
  { num: '02', href: '/services#development', title: 'EHR & HIS Integration', desc: 'Siloed systems connected through FHIR-native architecture. Legacy HIS to modern EHR. Device data to clinical records. Every integration built for interoperability, not just the current connection.' },
  { num: '03', href: '/solutions#his', title: 'Hospital Software', desc: 'OPD, IPD, pharmacy, LIS, billing, and telemedicine — purpose-built for facilities from 50 to 500+ beds. ABDM-ready from the ground up. No retrofitting compliance.' },
  { num: '04', href: '/services#ai-apps', title: 'Clinical AI & Agents', desc: 'Decision support tools, diagnostic AI, and scheduling agents — all designed with the clinician in the loop. We do not build AI that replaces clinical judgment. We build tools that protect it.' },
  { num: '05', href: '/services#adoption', title: 'Implementation & Adoption', desc: 'Go-live is not the finish line. Thirty days of hypercare, tracked adoption KPIs, and clinical champions embedded in your teams from week one. We measure success at 90 days, not at handover.' },
  { num: '06', href: '/solutions#rcm', title: 'Revenue Cycle Management', desc: 'Claims filed automatically, denials tracked and contested, leakage detected at source. Most clients recover 10–25% of previously lost billing within the first quarter post-deployment.' },
];

const APPROACH = [
  { phase: '01', title: 'Discover', weeks: '2–3 weeks', desc: 'On-site rounds. Shadow clinical staff. Map workflows as they exist, not as the org chart suggests. We walk away from projects where the fit is wrong.' },
  { phase: '02', title: 'Design', weeks: '3–5 weeks', desc: 'Architecture for your environment — existing systems, current devices, planned roadmap. Compliance written in from line one, not reviewed before audit.' },
  { phase: '03', title: 'Build', weeks: 'Milestone-gated', desc: 'Phased delivery. Every sprint validated with clinical users before progressing. No big-bang go-lives. No surprises for the ward team.' },
  { phase: '04', title: 'Adopt', weeks: 'Embedded in delivery', desc: 'Change management and training are not separate workstreams. They run alongside every sprint. Clinical champions identified and activated in the first two weeks.' },
  { phase: '05', title: 'Measure', weeks: '30–90 days post-live', desc: 'KPIs defined at discovery and tracked through go-live and beyond. You see adoption rates, workflow efficiency, and ROI — reported, not estimated.' },
];

const PROOF_ITEMS = [
  {
    metric: '−45%',
    label: 'Faster than industry average',
    context: 'Implementation timeline',
    quote: 'Goolk AI did what three previous vendors could not — integrated our legacy HIS in 11 weeks without a single ward disruption.',
    attr: 'Chief Medical Officer, Metro Multi-Specialty Hospital',
  },
  {
    metric: '₹85L',
    label: 'Recovered in 90 days',
    context: 'Revenue cycle automation',
    quote: 'Most consultants deliver decks. Goolk AI delivered working revenue cycle automation that recovered denied claims within the first quarter.',
    attr: 'CFO, Bengaluru Multi-Specialty Chain',
  },
  {
    metric: '85%',
    label: 'Clinician adoption',
    context: 'Avg. 90 days post-deployment',
    quote: 'Our teleconsult volume scaled from 40 to 150+ daily consults within 60 days. The compliance architecture means we have never had an audit concern.',
    attr: 'CEO, Pan-India Telehealth Provider',
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

const FAQS = [
  { q: 'How is Goolk AI different from a regular IT consultancy?', a: 'We are clinically-led, technically executed. Before any architecture is drawn, we are in your environment observing clinical workflows. We have walked away from projects where the fit was wrong — because our model depends on projects that succeed.' },
  { q: 'What does the free assessment include?', a: 'A 30-minute conversation with our founding team. No pitch deck. We ask about your current systems, key pain points, and what you have tried before. We give you our honest view on what it would take to solve it.' },
  { q: 'Do you handle compliance — HIPAA, DPDP, ABDM?', a: 'Yes, built into architecture from day one. We do not treat compliance as a pre-audit activity. Every engagement defaults to FHIR R4 data models, role-based access, audit logging, and end-to-end encryption by default.' },
  { q: 'What happens after go-live?', a: '30 days of hypercare — our team is on-call for any issue. Then tracked adoption KPIs at 60 and 90 days. You receive a documented outcomes report at 90 days showing exactly what changed vs. your baseline.' },
  { q: 'Can you integrate with our existing EHR or HIS?', a: 'Yes. HL7 FHIR R4-native architecture means we can connect to any standards-compliant system. For legacy HIS that lack FHIR, we build the translation layer. Your data stays yours — exported in standard format at any time.' },
  { q: 'What is KiaoM?', a: 'KiaoM is our rural AI health kiosk — a multilingual AI-powered primary care touchpoint for communities that lack access to doctors. Currently in pilot in Karnataka. It is funded by our commercial work, because we believe healthcare for everyone is not just a mission statement.' },
];

export default function HomeClient() {
  const [openFaq, setOpenFaq] = useState(-1);
  const [ctaStatus, setCtaStatus] = useState('idle');
  const [showStickyBar, setShowStickyBar] = useState(false);
  useFadeUp();

  useEffect(() => {
    const hero = document.getElementById('hero');
    const obs = new IntersectionObserver(
      ([e]) => setShowStickyBar(!e.isIntersecting),
      { threshold: 0 }
    );
    if (hero) obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  const handleCtaSubmit = async (e) => {
    e.preventDefault();
    setCtaStatus('loading');
    const fd = new FormData(e.target);
    fd.append('access_key', WEB3FORMS_KEY);
    fd.append('subject', 'Homepage Assessment Request — Goolk AI');
    fd.append('from_name', 'Goolk AI Website');
    try {
      const r = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: fd });
      const d = await r.json();
      setCtaStatus(d.success ? 'success' : 'error');
      if (d.success) e.target.reset();
    } catch { setCtaStatus('error'); }
  };

  return (
    <>
      <HeroSection />

      {/* ══ 01 COMPLIANCE TICKER ══ */}
      <div className={s.ticker}>
        <div className={s.tickerLabel}>Compliance standards we design for</div>
        <div className={s.tickerTrack}>
          <div className={s.tickerInner}>
            {['HL7 FHIR R4', 'HIPAA', 'ABDM', 'DPDP 2023', 'ISO 27001', 'SNOMED CT', 'ICD-10', 'DICOM', 'HL7 v2/v3', 'OpenMRS', 'LOINC', 'IHE XDS'].concat(
              ['HL7 FHIR R4', 'HIPAA', 'ABDM', 'DPDP 2023', 'ISO 27001', 'SNOMED CT', 'ICD-10', 'DICOM', 'HL7 v2/v3', 'OpenMRS', 'LOINC', 'IHE XDS']
            ).map((b, i) => (
              <span key={i} className={s.tickerChip}>{b}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ══ 02 THE PROBLEM — editorial, two-column ══ */}
      <section className={s.problemSection} id="challenge">
        <div className={s.problemInner}>
          <div className={s.problemLeft}>
            <span className={s.sectionLabel}>The Hard Truth</span>
            <h2 className={s.problemH2}>
              Healthcare IT projects<br />
              fail at <em>adoption,</em><br />
              not implementation.
            </h2>
            <p className={s.problemSub}>
              A system that goes live is not the same as a system that gets used.
              Most vendors disappear at handover. Most failures happen in the
              weeks after go-live, when your clinical team is alone with software
              they never fully bought into.
            </p>
            <Link href="/contact" className={s.problemCta}>
              Talk to our clinical IT team →
            </Link>
          </div>
          <div className={s.problemRight}>
            {[
              { stat: '45%', desc: 'of EHR implementations fail to deliver expected clinical value within the first year' },
              { stat: '35%', desc: 'of clinical software is abandoned or under-used within 12 months of go-live' },
              { stat: '$4.5M', desc: 'average cost of a healthcare data breach in 2024 — most caused by poor system design' },
              { stat: '55%', desc: 'of health CIOs cannot demonstrate clear ROI from their last major IT project' },
            ].map((item, i) => (
              <div key={i} className={`${s.problemStat} fade-up`}>
                <div className={s.problemStatNum}>{item.stat}</div>
                <div className={s.problemStatDesc}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 03 SERVICES — editorial list, not card grid ══ */}
      <section className={s.servicesSection} id="services">
        <div className={s.servicesInner}>
          <div className={s.servicesHead}>
            <div>
              <span className={s.sectionLabel}>What We Do</span>
              <h2 className={s.servicesH2}>Six practice areas.<br /><em>One commitment.</em></h2>
            </div>
            <p className={s.servicesIntro}>
              Each engagement draws on whichever of these capabilities your situation requires.
              We do not up-sell services you do not need.
            </p>
          </div>
          <div className={s.servicesList}>
            {SERVICES.map((svc, i) => (
              <div key={i} className={`${s.svcItem} fade-up`}>
                <span className={s.svcNum}>{svc.num}</span>
                <div className={s.svcContent}>
                  <h3 className={s.svcTitle}>{svc.title}</h3>
                  <p className={s.svcDesc}>{svc.desc}</p>
                </div>
                <Link href={svc.href} className={s.svcArrow}>↗</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 04 HOW WE WORK — condensed method ══ */}
      <section className={s.approachSection} id="how-we-work">
        <div className={s.approachInner}>
          <div className={s.approachHead}>
            <div>
              <span className={s.sectionLabel}>Our Method</span>
              <h2 className={s.approachH2}>
                Discovery first.<br />
                <em>Always.</em>
              </h2>
            </div>
            <p className={s.approachIntro}>
              We do not build without understanding. We shadow your clinicians, audit workflows, and map integrations before writing a single line of code.
            </p>
          </div>
          <div className={s.approachStepsCondensed}>
            {APPROACH.map((step, i) => (
              <div key={i} className={`${s.approachStepCondensedItem} fade-up`}>
                <div className={s.approachStepNumCompact}>{step.phase}</div>
                <div className={s.approachStepText}>
                  <h4 className={s.approachStepTitleCompact}>{step.title}</h4>
                  <span className={s.approachStepWeeksCompact}>{step.weeks}</span>
                </div>
              </div>
            ))}
          </div>
          <div className={s.approachFooter}>
            <Link href="/services#how-we-work" className="btn-primary">
              Learn more about our methodology →
            </Link>
          </div>
        </div>
      </section>

      {/* ══ 05 OUTCOMES — dark, large numbers ══ */}
      <section className={s.outcomesSection} id="outcomes">
        <div className={s.outcomesInner}>
          <div className={s.outcomesHead}>
            <span className={s.outcomesSectionLabel}>Measured Results</span>
            <h2 className={s.outcomesH2}>Results we have<br /><em>documented.</em></h2>
            <p className={s.outcomesSubtext}>Across 20+ engagements, tracked from kickoff through 90 days post-deployment.</p>
          </div>
          <div className={s.outcomesGrid}>
            {[
              { num: '−30%', label: 'Faster implementation', sub: 'vs. traditional vendors' },
              { num: '85%',  label: 'Clinician adoption', sub: 'average, 90 days post-live' },
              { num: '+18%', label: 'Care coordination', sub: 'improvement in patient satisfaction' },
              { num: '₹12Cr+', label: 'Healthcare value', sub: 'documented across all engagements' },
            ].map((o, i) => (
              <div key={i} className={`${s.outcomeItem} fade-up`}>
                <div className={s.outcomeNum}>{o.num}</div>
                <div className={s.outcomeLabel}>{o.label}</div>
                <div className={s.outcomeSub}>{o.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 06 IN PRACTICE — 3 pull-quote blocks ══ */}
      <section className={s.proofSection} id="proof">
        <div className={s.proofInner}>
          <div className={s.proofHead}>
            <span className={s.sectionLabel}>In Practice</span>
            <h2 className={s.proofH2}>What happens<br /><em>after we engage.</em></h2>
          </div>
          <div className={s.proofGrid}>
            {PROOF_ITEMS.map((p, i) => (
              <div key={i} className={`${s.proofCard} fade-up`}>
                <div className={s.proofMetric}>
                  <span className={s.proofNum}>{p.metric}</span>
                  <div>
                    <div className={s.proofLabel}>{p.label}</div>
                    <div className={s.proofContext}>{p.context}</div>
                  </div>
                </div>
                <blockquote className={s.proofQuote}>"{p.quote}"</blockquote>
                <cite className={s.proofAttr}>{p.attr}</cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 07 WHO WE SERVE — condensed grid ══ */}
      <section className={s.whoSection} id="who-we-serve">
        <div className={s.whoInner}>
          <div className={s.whoHead}>
            <div>
              <span className={s.sectionLabel}>Who We Work With</span>
              <h2 className={s.whoH2}>Healthcare organisations<br /><em>at every stage.</em></h2>
            </div>
            <p className={s.whoIntro}>
              We build systems that scale across the entire care spectrum. From large hospital networks to fast-moving health startups.
            </p>
          </div>
          <div className={s.whoGridCondensed}>
            {WHO_SERVE.map((w, i) => (
              <div key={i} className={`${s.whoItemCondensed} fade-up`}>
                <h3 className={s.whoTitleCompact}>{w.title}</h3>
                <p className={s.whoDescCompact}>{w.desc}</p>
              </div>
            ))}
          </div>
          <div className={s.whoFooter}>
            <Link href="/solutions#who-we-serve" className="btn-outline">
              Learn how we configure solutions for each sector →
            </Link>
          </div>
        </div>
      </section>

      {/* ══ 08 CONTACT CTA — dark, direct ══ */}
      <section className={s.ctaSection} id="start">
        <div className={s.ctaInner}>
          <div className={s.ctaLeft}>
            <span className={s.ctaSectionLabel}>Start Here</span>
            <h2 className={s.ctaH2}>Free 30-minute<br /><em>clinical IT assessment.</em></h2>
            <p className={s.ctaSubtext}>
              No pitch. No demo. We listen to your situation, ask the right questions,
              and give you an honest view of what it would take to fix it.
            </p>
            <div className={s.ctaContacts}>
              <a href="https://wa.me/918884235771" className={s.ctaContact}>
                <span>💬</span> WhatsApp: +91 88842 35771
              </a>
              <a href="mailto:goolk.ai.startup@gmail.com" className={s.ctaContact}>
                <span>✉</span> goolk.ai.startup@gmail.com
              </a>
            </div>
          </div>
          <div className={s.ctaRight}>
            {ctaStatus === 'success' ? (
              <div className={s.ctaSuccess}>
                <div className={s.ctaSuccessIcon}>✓</div>
                <h3>Request received.</h3>
                <p>We respond personally within one business day. Check your inbox — it will come from a real person.</p>
                <button onClick={() => setCtaStatus('idle')} className={s.ctaSuccessReset}>Send another</button>
              </div>
            ) : (
              <form onSubmit={handleCtaSubmit} className={s.ctaForm}>
                <input type="checkbox" name="botcheck" style={{ display: 'none' }} />
                <div className={s.ctaFormRow}>
                  <div className={s.ctaFormField}>
                    <label>Full name</label>
                    <input type="text" name="name" placeholder="Dr. Priya Sharma" required />
                  </div>
                  <div className={s.ctaFormField}>
                    <label>Work email</label>
                    <input type="email" name="email" placeholder="priya@hospital.org" required />
                  </div>
                </div>
                <div className={s.ctaFormField}>
                  <label>Organisation</label>
                  <input type="text" name="organization" placeholder="Metro Health System" required />
                </div>
                <div className={s.ctaFormField}>
                  <label>What are you trying to solve?</label>
                  <textarea name="message" rows={3} placeholder="Describe your current systems, key challenges, and what you want to achieve." required />
                </div>
                {ctaStatus === 'error' && (
                  <p className={s.ctaError}>Something went wrong. Please WhatsApp us directly at +91 88842 35771.</p>
                )}
                <button type="submit" className={s.ctaSubmit} disabled={ctaStatus === 'loading'}>
                  {ctaStatus === 'loading' ? 'Sending…' : 'Request free assessment'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ══ 09 FAQ — condensed accordion ══ */}
      <section className={s.faqSection} id="faq">
        <div className={s.faqInner}>
          <div className={s.faqHead}>
            <div>
              <span className={s.sectionLabel}>Common Questions</span>
              <h2 className={s.faqH2}>What people<br /><em>usually ask first.</em></h2>
            </div>
            <p className={s.faqIntro}>
              Have questions about our process, integrations, or compliance? Here are a few quick answers.
            </p>
            <Link href="/contact#faq" className={s.faqLinkBtn}>
              View all FAQs on our contact page →
            </Link>
          </div>
          <div className={s.faqList}>
            {FAQS.slice(0, 3).map((faq, i) => (
              <div key={i} className={s.faqItem}>
                <button
                  className={s.faqQ}
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{faq.q}</span>
                  <span className={`${s.faqIcon} ${openFaq === i ? s.faqIconOpen : ''}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className={s.faqA}>{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MOBILE STICKY CTA ══ */}
      {showStickyBar && (
        <div className={s.stickyBar}>
          <span>Free 30-min healthcare IT assessment</span>
          <Link href="/contact" className={s.stickyBarBtn}>Get started →</Link>
        </div>
      )}
    </>
  );
}
