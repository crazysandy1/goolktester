'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useFadeUp } from '@/hooks/useFadeUp';
import HeroSection from './HeroSection';
import s from '@/app/home.module.css';

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'YOUR_WEB3FORMS_KEY';

const SOLUTIONS = [
  { icon: 'M3 22V10l9-7 9 7v12M9 22v-5h6v5M12 10v3M10.5 11.5h3', title: 'Hospital Management System', desc: 'End-to-end HIS covering OPD, IPD, billing, pharmacy, laboratory, and inventory — fully integrated and cloud-ready. Replaces legacy MIS within weeks.' },
  { icon: 'M5 2h14a3 3 0 013 3v14a3 3 0 01-3 3H5a3 3 0 01-3-3V5a3 3 0 013-3z', title: 'Patient Engagement Platform', desc: 'Branded mobile app and web portal for your hospital — appointment booking, reports, prescriptions, teleconsultation, and AI health coaching under your brand.' },
  { icon: 'M2 6h13a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V8a2 2 0 012-2zM15 10l7-4v12l-7-4z', title: 'Telemedicine Infrastructure', desc: 'HIPAA-compliant video consultation platform with e-prescriptions, integrated payments, and WhatsApp follow-up automations — built for high-volume clinical use.' },
  { icon: 'M12 12m-3 0a3 3 0 106 0 3 3 0 10-6 0M12 2v2M12 20v2M2 12h2M20 12h2', title: 'Clinical AI & Intelligence', desc: 'AI-assisted diagnosis support, clinical decision prompts, and real-time hospital KPI dashboards that help clinical leadership make faster, evidence-based decisions.' },
  { icon: 'M3 3v18h18M7 16l4-5 4 3 4-6', title: 'Revenue Cycle Management', desc: 'Automated insurance claim processing, denial management, and collections intelligence that reduce revenue leakage and accelerate reimbursement cycles by up to 40%.' },
  { icon: 'M18 5m-3 0a3 3 0 106 0 3 3 0 10-6 0M6 12m-3 0a3 3 0 106 0 3 3 0 10-6 0M18 19m-3 0a3 3 0 106 0 3 3 0 10-6 0', title: 'Systems Integration & API Layer', desc: 'Seamlessly connect existing EMRs, PACS, LIS, and third-party tools through our HL7 FHIR–compliant integration engine — without disrupting daily operations.' },
];

const PRODUCTS = [
  { title: 'Clinical IT Strategy & Advisory', desc: 'EHR optimisation audits, interoperability roadmaps, vendor due-diligence, and digital health strategy your CMO and CFO can both defend.' },
  { title: 'Healthcare Software Development', desc: 'HIPAA-compliant custom platforms, EHR integrations (Epic, Cerner, Athena, eHospital), telemedicine infrastructure, and mobile apps.' },
  { title: 'Implementation & Change Management', desc: 'On-site go-live support, role-based clinician training, and the first 90 days of adoption coaching — where most healthcare IT projects fail.' },
  { title: 'Hospital Solutions Suite', desc: 'Patient admission / discharge automation, multi-channel patient portals, and real-time clinical & operational dashboards.' },
  { title: 'Medical Device Integration', desc: 'HL7/FHIR pipelines from monitors, infusion pumps, diagnostic equipment, and wearables — directly into the patient chart with encryption and audit trails.' },
  { title: 'AI-Powered Medical Apps & Websites', desc: 'Telemedicine apps, HIPAA-compliant hospital websites with patient portals, and ML-assisted clinical decision support — designed around clinical reality.' },
  { title: 'Innovation Lab', desc: 'Healthcare ML/NLP research, blockchain-for-records pilots, IoT patient monitoring, and proof-of-concepts — let us de-risk the next five years.' },
  { title: 'AI Agent Implementation', desc: 'Production-grade agents for clinical decision support, patient monitoring, billing & claims automation, scheduling, and predictive insights.' },
];

const SERVICES = [
  { num: '01', title: 'Website Development', desc: 'Custom, scalable healthcare and startup websites designed for performance, accessibility, and conversion.', items: ['Next.js / React, Lighthouse 95+', 'HIPAA-aware hosting & analytics', 'SEO-first, WCAG 2.2 AA'] },
  { num: '02', title: 'App Development', desc: 'End-to-end mobile and web apps — telemedicine, patient engagement, clinical tools, internal hospital ops.', items: ['iOS & Android (Flutter / native)', 'FHIR-native data layer', 'Offline-first for rural deployments'] },
  { num: '03', title: 'Product Management', desc: 'From idea to launch — roadmap, MVP scoping, feature prioritisation, and scaling alongside your team.', items: ['Discovery sprints & user research', 'MVP scoping with cost ceilings', 'Embedded PM, fractional or full'] },
  { num: '04', title: 'Consultancy', desc: 'Expert guidance on AI healthcare strategy, architecture, compliance posture, and go-to-market execution.', items: ['HIPAA, DPDP & FHIR readiness', 'Pre-seed / Seed technical advisory', 'GTM planning & pilot design'] },
  { num: '05', title: 'Custom Engagements', desc: 'Tailored builds aligned to your business goals, brand, and clinical context — when the off-the-shelf option doesn\'t fit.', items: ['Hardware + software (KiaoM-style)', 'Voice / multilingual interfaces', 'Innovation-lab partnerships'] },
];

const PRINCIPLES = [
  { featured: true, text: 'We start every engagement with on-site discovery — sitting with your clinicians, your front-desk, and three to five recent patients. Nothing is built until we can describe your workflow back to you better than you can.', name: 'Discovery before delivery', org: 'Our first commitment' },
  { text: 'If a feature doesn\'t help the patient or save the clinician time, we don\'t build it — even if you\'re willing to pay for it. Healthcare IT failure usually starts with shipping the wrong thing well.', name: 'Patient and clinician first', org: 'Our second commitment' },
  { text: 'Compliance — HIPAA, DPDP, HL7/FHIR — is in our architecture from day one, not patched in before audit. If we\'re not confident in your audit posture at handover, we don\'t hand over.', name: 'Compliance is the floor', org: 'Our third commitment' },
];

const FAQS = [
  { q: 'What size of hospitals do you work with?', a: 'We work with single-specialty clinics, multi-specialty hospitals, and large hospital chains. Our solutions are modular — a 30-bed nursing home can start with patient engagement only, while a 400-bed network can implement the full stack.' },
  { q: 'Can Goolkai integrate with our existing EMR or HIS?', a: 'Yes. Our HL7 FHIR–compliant integration engine connects to most major EMRs including Meditech, Epic, Athenahealth, and Indian systems like eHospital, Practo Health Suite, and custom-built HIS platforms.' },
  { q: 'How long does a full implementation take?', a: 'A standard full-stack deployment typically targets 10–14 weeks; modular implementations (e.g. telemedicine only) can go live in 3–6 weeks. Exact timelines are scoped during our discovery phase.' },
  { q: 'Is the patient data stored securely and compliantly?', a: 'Absolutely. All data is stored in India on ISO 27001-certified infrastructure, compliant with India\'s DPDP Act 2023, ABDM standards, and internationally aligned with HIPAA principles.' },
  { q: 'What kind of post-go-live support do you provide?', a: 'Each engagement includes a named point of contact, defined response-time commitments written into your contract, regular product update releases, and quarterly business reviews.' },
  { q: 'Do you offer a white-label patient app under our hospital\'s brand?', a: 'Yes. Our patient engagement platform is fully white-labelled — your hospital\'s logo, brand colours, and domain. Patients see your brand at every touchpoint, not ours.' },
];

const PROCESS_STEPS = [
  { title: 'Discovery & Audit', desc: 'We spend 1–2 weeks mapping your existing workflows, integrations, and pain points before recommending a solution architecture.' },
  { title: 'Solution Design & Sign-off', desc: 'A detailed implementation blueprint — modules, timelines, SLAs, and team structure — approved by your clinical and IT leadership.' },
  { title: 'Phased Implementation', desc: 'Agile deployment in 2-week sprints. Staff training is woven into every phase so adoption is never a separate, post-go-live problem.' },
  { title: 'Go-Live & Ongoing Support', desc: '24/7 dedicated support, monthly product updates, and a named Customer Success Manager for the lifetime of the engagement.' },
];

export default function HomeClient() {
  const [activeStep, setActiveStep] = useState(0);
  const [openFaq, setOpenFaq] = useState(-1);
  const [ctaStatus, setCtaStatus] = useState('idle'); // idle | loading | success | error
  useFadeUp();

  const handleCtaSubmit = async (e) => {
    e.preventDefault();
    setCtaStatus('loading');
    const formData = new FormData(e.target);
    formData.append('access_key', WEB3FORMS_KEY);
    formData.append('subject', 'New Consultation Request (CTA) — Goolkai AI');
    formData.append('from_name', 'Goolkai AI Website');
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
      const data = await res.json();
      if (data.success) { setCtaStatus('success'); e.target.reset(); }
      else setCtaStatus('error');
    } catch { setCtaStatus('error'); }
  };
  const toggleFaq = (i) => setOpenFaq(openFaq === i ? -1 : i);

  return (
    <>
      <HeroSection />

      {/* PARTNERS */}
      <section className={s.partners} id="partners">
        <p className={s.partnersLabel}>We build for healthcare organisations across</p>
        <div className={s.partnersRow}>
          {['Hospitals & Health Systems','Specialty Clinics','Telehealth Providers','Medical Device Cos.','Payers & Insurance','Behavioural & Mental Health'].map(p=>(
            <div key={p} className={s.partnerLogo}>{p}</div>
          ))}
        </div>
      </section>

      {/* KIAOM */}
      <section className={s.kiaom} id="kiaom">
        <div className={s.kiaomInner}>
          <div className={s.kiaomIntro}>
            <div className="fade-up">
              <span className="section-tag">Meet KiaoM</span>
              <h2 className="section-h2" style={{marginBottom:'1.2rem'}}>Healthcare that <em>actually reaches</em> rural India.</h2>
              <p className={s.kiaomDesc}>KiaoM is our flagship AI-powered self-service health kiosk, deployed inside village pharmacies and rural primary care centres. It speaks Kannada, Tamil, Telugu, Hindi and English — so a grandmother who&apos;s never used a smartphone can still triage symptoms, check vitals, and connect to a doctor in under three minutes.</p>
              <p className={s.kiaomDesc}>No app to download. No insurance card needed. No tier-1 city required.</p>
              <div className={s.kiaomStats}>
                <div><div className={s.kiaomStatVal}>Karnataka<span> pilot</span></div><div className={s.kiaomStatLabel}>Live deployment in progress</div></div>
                <div className={s.kiaomStatDivider}/>
                <div><div className={s.kiaomStatVal}>5<span>+ languages</span></div><div className={s.kiaomStatLabel}>Voice-first interface</div></div>
                <div className={s.kiaomStatDivider}/>
                <div><div className={s.kiaomStatVal}>Doctor<span> on-call</span></div><div className={s.kiaomStatLabel}>Live video consult, 24/7</div></div>
              </div>
            </div>
            <div className="fade-up" style={{position:'relative'}}>
              <div className={s.kiaomImageWrap}>
                <img src="/assets/kiaom-elderly-couple.jpg" alt="Elderly couple using KiaoM kiosk powered by Goolk AI in rural Karnataka" loading="lazy"/>
              </div>
              <div className={s.kiaomPowered}><div className={s.kiaomPoweredLabel}>Powered by</div><div className={s.kiaomPoweredName}>Goolk AI</div></div>
            </div>
          </div>
          <div className={s.kiaomStories}>
            <div className={`${s.storyCard} fade-up`}>
              <div className={s.storyImageWrap}><img src="/assets/kiaom-mother-child.jpg" alt="Young mother using KiaoM kiosk" loading="lazy"/><div className={s.storyTag}>Field Study · Bengaluru rural</div></div>
              <div className={s.storyBody}><h3>Care that doesn&apos;t require a four-hour bus ride.</h3><p>For young mothers in tier-3 and rural settings, the nearest paediatrician is often hours away. KiaoM brings AI-assisted triage and live teleconsult into the village pharmacy.</p></div>
            </div>
            <div className={`${s.storyCard} fade-up`} style={{display:'flex',flexDirection:'column'}}>
              <div className={s.storyImageWrap}><img src="/assets/kiaom-teleconsult.jpg" alt="Rural woman video-consulting a doctor on KiaoM" loading="lazy"/><div className={s.storyTag}>Doctor-Patient Consult</div></div>
              <div className={s.storyBody} style={{flex:1}}><h3>Same product. Two form factors.</h3><p>KiaoM works as a shared kiosk at the village pharmacy and as a private app on the patient&apos;s own phone — connected to the same doctor network and patient record.</p></div>
            </div>
          </div>
          <div className={s.kiaomCta}>
            <Link href="/contact" className="btn-primary">Bring KiaoM to your district →</Link>
            <Link href="/solutions" className="btn-outline">How it works</Link>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className={s.solutions} id="solutions">
        <div className={`${s.solutionsIntro} fade-up`}>
          <div><span className="section-tag">Our Solutions</span><h2 className="section-h2">Complete digital infrastructure for <em>healthcare organisations</em></h2></div>
          <p className="section-sub">We don&apos;t sell point tools. We architect and implement the full digital layer of your hospital — from patient acquisition to post-discharge care.</p>
        </div>
        <div className={s.solutionsGrid}>
          {SOLUTIONS.map((sol,i)=>(
            <div key={i} className="solution-card fade-up">
              <div className="solution-icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={sol.icon}/></svg></div>
              <h3>{sol.title}</h3><p>{sol.desc}</p>
              <Link href="/contact" className="solution-link">Learn more →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className={s.process} id="process">
        <div className={s.processLayout}>
          <div>
            <span className="section-tag">How we work</span>
            <h2 className="section-h2">From scoping to go-live in <em>90 days</em></h2>
            <p className="section-sub" style={{marginBottom:'2.5rem'}}>A structured, low-disruption deployment methodology — Discovery, Strategy, Implementation, Adoption — gated by your team&apos;s sign-off at each stage.</p>
            <div className={s.processSteps}>
              {PROCESS_STEPS.map((step,i)=>(
                <div key={i} className={`${s.processStep} ${activeStep===i?s.processStepActive:''}`} onClick={()=>setActiveStep(i)}>
                  <div className={s.stepNum}>{i+1}</div>
                  <div className={s.stepContent}><h4>{step.title}</h4><p>{step.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className={`${s.processVisual} fade-up`}>
            <div className={s.pvTitle}>Typical implementation timeline</div>
            {[
              {week:'Week 1–2',task:'Discovery & workflow mapping',desc:'On-site audit, stakeholder interviews, gap analysis',status:'done'},
              {week:'Week 3–4',task:'Solution blueprint & sign-off',desc:'Architecture docs, SLA agreement, project kickoff',status:'done'},
              {week:'Week 5–10',task:'Phased build & staff training',desc:'Module deployment, parallel running, UAT, training sessions',status:'live'},
              {week:'Week 11–12',task:'Go-live & hypercare',desc:'Full cutover, 24/7 on-call support, KPI review',status:'up'},
            ].map((r,i,arr)=>(
              <div key={i} className={s.pvRow}>
                <div className={s.pvLeft}><div className={s.pvDot} style={r.status==='up'?{background:'var(--border)'}:r.status==='live'?{background:'var(--rose)'}:undefined}/>{i<arr.length-1&&<div className={s.pvLine}/>}</div>
                <div className={s.pvBody}>
                  <div className={s.pvWeek}>{r.week}</div><div className={s.pvTask}>{r.task}</div><div className={s.pvDesc}>{r.desc}</div>
                  <span className={`${s.pvStatus} ${r.status==='done'?s.stDone:r.status==='live'?s.stLive:s.stUp}`}>{r.status==='done'?'✓ Complete':r.status==='live'?'● In progress':'↑ Upcoming'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className={s.stats} id="stats">
        <div className={s.statsInner}>
          <div className={s.statsTop}>
            <h2 className={s.statsTopH2}>How we work — <em>the four commitments</em></h2>
            <p className={s.statsTopP}>We&apos;re an early-stage healthcare IT company. Instead of inflated metrics, here is what every engagement is built on — written into your contract, not just a pitch deck.</p>
          </div>
          <div className={s.statsGrid}>
            {[
              {num:<>Discovery<em>-first</em></>,label:'We listen first. Before proposing anything, we sit with your clinicians and watch how care actually happens.'},
              {num:<>HIPAA <em>·</em> DPDP</>,label:'Your patient data is protected by design. We follow HIPAA and India\'s DPDP privacy laws from day one — not at audit time.'},
              {num:<>HL7 <em>·</em> FHIR</>,label:'Your data stays yours. We use industry-standard healthcare data formats — if you ever leave us, you take your records with you.'},
              {num:<>Founder<em>-led</em></>,label:'Talk directly to the team that builds. No call centres, no junior account reps — a direct line to founders and engineers.'},
            ].map((st,i)=>(
              <div key={i} className={`${s.statBox} fade-up`}><div className={s.statNum}>{st.num}</div><div className={s.statLabel}>{st.label}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className={s.productsSection} id="products">
        <div className={`${s.solutionsIntro} fade-up`}>
          <div><span className="section-tag">Our Products</span><h2 className="section-h2">The product stack we build <em>with you</em></h2></div>
          <p className="section-sub">Eight focused products that compose into your hospital&apos;s digital backbone. Take one — or combine the stack. Every module is HIPAA-aligned, HL7/FHIR-ready, and built around clinical workflow.</p>
        </div>
        <div className={s.solutionsGrid}>
          {PRODUCTS.map((p,i)=>(
            <div key={i} className="solution-card fade-up"><div className="solution-icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 3v18h18M7 16l4-5 4 3 4-6"/></svg></div><h3>{p.title}</h3><p>{p.desc}</p></div>
          ))}
        </div>
        <div style={{marginTop:'2.5rem',textAlign:'center'}}><Link href="/solutions" className="btn-outline">Explore the full product stack →</Link></div>
      </section>

      {/* SERVICES */}
      <section className={s.servicesSection} id="services">
        <div className={s.servicesInner}>
          <div className={s.servicesIntro}>
            <div className="fade-up"><span className="section-tag">For builders &amp; startups</span><h2 className="section-h2">We also build for <em>healthcare startups</em>.</h2></div>
            <p className="section-sub fade-up">When founders bring us an idea instead of a hospital — we run with it. Five focused engagement types, scoped to your stage and budget.</p>
          </div>
          <div className={s.servicesGrid}>
            {SERVICES.map((svc,i)=>(
              <div key={i} className={`${s.serviceCard} fade-up`}>
                <div className={s.serviceCardHeader}><div className={s.serviceIconWrap}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div><span className={s.serviceNum}>{svc.num}</span></div>
                <h3>{svc.title}</h3><p>{svc.desc}</p>
                <ul className={s.serviceList}>{svc.items.map((it,j)=>(<li key={j} className={s.serviceListItem}><span className={s.serviceListDot}/>{it}</li>))}</ul>
              </div>
            ))}
            <div className={`${s.serviceCta} fade-up`}>
              <div><div className={s.serviceCtaTag}>Ready to start?</div><h3 className={s.serviceCtaH3}>Book a free 30-minute scoping call.</h3><p className={s.serviceCtaP}>No slides, no pitch. We listen to where you are, and tell you honestly whether we&apos;re the right partner.</p></div>
              <div className={s.serviceCtaActions}><Link href="/contact" className={s.serviceCtaBtn}>Book Demo →</Link><Link href="/contact" className={s.serviceCtaBtnOutline}>Get Started</Link></div>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className={s.principles} id="testimonials">
        <div className="text-center"><span className="section-tag">How we engage</span><h2 className="section-h2">No customer logos yet. <em>Just commitments.</em></h2><p className="section-sub">We&apos;re an early-stage healthcare IT company. Instead of borrowing credibility through fabricated testimonials, here is how we will work with you — written into every engagement.</p></div>
        <div className="testi-grid">
          {PRINCIPLES.map((pr,i)=>(
            <div key={i} className={`testi-card${pr.featured?' featured':''}`}>
              <div className="quote-mark" style={pr.featured?{color:'oklch(88% 0.06 15)'}:{color:'var(--rose-mid)'}}>&quot;</div>
              <p className="testi-text">{pr.text}</p>
              <div className="testi-author"><div className="testi-av" style={pr.featured?{background:'oklch(90% 0.06 15)',color:'var(--rose)',fontWeight:800}:i===1?{background:'oklch(62% 0.12 30)',color:'#fff'}:{background:'oklch(58% 0.10 155)',color:'#fff'}}>{String(i+1).padStart(2,'0')}</div><div><div className="testi-name">{pr.name}</div><div className="testi-org">{pr.org}</div></div></div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={s.ctaSection} id="cta">
        <div className={s.ctaInner}>
          <div className={s.ctaBlobTop}/><div className={s.ctaBlobBottom}/>
          <div className={s.ctaContent}>
            <span className="section-tag">Get started</span>
            <h2 className="section-h2" style={{fontSize:'clamp(1.6rem,2.5vw,2.4rem)',marginBottom:'.8rem'}}>Ready to modernise your hospital&apos;s digital infrastructure?</h2>
            <p className="section-sub" style={{margin:'0 auto 2rem'}}>Talk to our healthcare technology consultants. We&apos;ll assess your current systems, identify the highest-impact areas, and propose a deployment plan tailored to your organisation.</p>
            {ctaStatus !== 'success' ? (
              <form className={s.ctaForm} onSubmit={handleCtaSubmit}>
                <input type="checkbox" name="botcheck" style={{display:'none'}} />
                <input type="hidden" name="form_source" value="homepage_cta" />
                <input type="email" name="email" placeholder="Your work email address" required/>
                <button type="submit" className="btn-primary" disabled={ctaStatus==='loading'} style={{opacity:ctaStatus==='loading'?0.7:1}}>
                  {ctaStatus==='loading' ? 'Sending…' : 'Request Consultation →'}
                </button>
              </form>
            ) : (
              <p className={s.ctaSuccess}>✓ Received! Our team will contact you within one business day.</p>
            )}
            {ctaStatus==='error' && <p style={{fontSize:'.82rem',color:'var(--rose)',marginTop:'.5rem'}}>Something went wrong — please email us at partnerships@goolkai.com</p>}
            <p className={s.ctaNote}>No commitment required. Typical response within 24 hours.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={s.faqSection} id="faq">
        <div className="text-center"><span className="section-tag">FAQ</span><h2 className="section-h2">Common questions from <em>hospital leadership</em></h2></div>
        <div className={s.faqWrap}>
          {FAQS.map((f,i)=>(
            <div key={i} className={s.faqItem} onClick={()=>toggleFaq(i)}>
              <div className={s.faqQ}>{f.q}<span className={`${s.faqIcon} ${openFaq===i?s.faqIconOpen:''}`}>+</span></div>
              <div className={`${s.faqA} ${openFaq===i?s.faqAOpen:''}`}>{f.a}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
