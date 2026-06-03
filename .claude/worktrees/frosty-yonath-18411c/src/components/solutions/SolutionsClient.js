'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useFadeUp } from '@/hooks/useFadeUp';

const TABS = [
  { id: 'his', label: 'Hospital Management', title: 'Hospital Information System (HIS)', desc: 'End-to-end hospital management covering OPD, IPD, billing, pharmacy, laboratory, inventory, and more — fully integrated, cloud-ready, and designed to replace legacy systems within weeks.', features: ['OPD & IPD management','Pharmacy & inventory','Laboratory information system','Billing & insurance','Nursing station dashboards','ABDM / ABHA integration'] },
  { id: 'patient', label: 'Patient Engagement', title: 'Patient Engagement Platform', desc: 'A branded mobile app and web portal for your hospital — appointment booking, reports, prescriptions, teleconsultation, and AI health coaching under your brand.', features: ['White-label mobile app','Online appointment booking','Digital prescriptions & reports','AI symptom checker','Patient feedback & NPS','Multilingual support'] },
  { id: 'telemed', label: 'Telemedicine', title: 'Telemedicine Infrastructure', desc: 'HIPAA-compliant video consultation platform with e-prescriptions, integrated payments, and WhatsApp follow-up automations — built for high-volume clinical use.', features: ['HD video consultations','E-prescriptions','Integrated payments','WhatsApp automations','Multi-provider scheduling','Recording & audit trails'] },
  { id: 'ai', label: 'Clinical AI', title: 'Clinical AI & Intelligence', desc: 'AI-assisted diagnosis support, clinical decision prompts, and real-time hospital KPI dashboards that help clinical leadership make faster, evidence-based decisions.', features: ['Clinical decision support','Predictive analytics','Real-time KPI dashboards','AI-powered triage','Drug interaction alerts','Population health insights'] },
  { id: 'rcm', label: 'Revenue Cycle', title: 'Revenue Cycle Management', desc: 'Automated insurance claim processing, denial management, and collections intelligence that reduce revenue leakage and accelerate reimbursement cycles by up to 40%.', features: ['Automated claim submission','Denial management','Payment analytics','Insurance verification','Revenue leakage detection','Financial reporting'] },
  { id: 'integration', label: 'Integration', title: 'Systems Integration & API Layer', desc: 'Seamlessly connect existing EMRs, PACS, LIS, and third-party tools through our HL7 FHIR–compliant integration engine — without disrupting daily operations.', features: ['HL7 FHIR engine','EMR/EHR connectors','PACS integration','LIS bridge','Device data pipelines','Custom API development'] },
];

export default function SolutionsClient() {
  const [active, setActive] = useState(0);
  useFadeUp();
  const tab = TABS[active];

  return (
    <>
      <section style={{background:'var(--cream)',padding:'140px 5vw 40px',textAlign:'center'}}>
        <span className="section-tag">Our Solutions</span>
        <h1 style={{fontFamily:'var(--font-heading)',fontSize:'clamp(2.2rem,4vw,3.6rem)',fontWeight:800,lineHeight:1.12,letterSpacing:'-.025em',color:'var(--text)',marginBottom:'1.2rem'}}> Complete digital infrastructure for <em style={{fontStyle:'italic',color:'var(--rose)'}}>healthcare organisations</em></h1>
        <p style={{fontSize:'1.1rem',color:'var(--muted)',lineHeight:1.75,maxWidth:620,margin:'0 auto'}}>We don&apos;t sell point tools. We architect and implement the full digital layer of your hospital — from patient acquisition to post-discharge care.</p>
      </section>

      <section style={{background:'var(--cream)',padding:'40px 5vw 90px'}}>
        {/* Sticky tabs */}
        <div style={{position:'sticky',top:72,zIndex:50,background:'var(--cream)',padding:'12px 0',borderBottom:'1px solid var(--border)',marginBottom:'3rem'}}>
          <div style={{display:'flex',gap:'.5rem',overflowX:'auto',maxWidth:1100,margin:'0 auto'}}>
            {TABS.map((t,i)=>(
              <button key={t.id} onClick={()=>setActive(i)} style={{padding:'.6rem 1.2rem',borderRadius:100,border:'1.5px solid',borderColor:active===i?'var(--rose)':'var(--border)',background:active===i?'var(--rose)':'#fff',color:active===i?'#fff':'var(--text)',fontSize:'.82rem',fontWeight:600,cursor:'pointer',whiteSpace:'nowrap',transition:'all .2s',fontFamily:'var(--font-body)'}}>{t.label}</button>
            ))}
          </div>
        </div>

        {/* Active solution detail */}
        <div style={{maxWidth:1100,margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'4rem',alignItems:'start'}} className="fade-up">
          <div>
            <h2 className="section-h2">{tab.title}</h2>
            <p style={{fontSize:'1.05rem',color:'var(--muted)',lineHeight:1.78,marginBottom:'2rem'}}>{tab.desc}</p>
            <div style={{display:'flex',gap:'1rem',flexWrap:'wrap'}}>
              <Link href="/contact" className="btn-primary">Schedule Demo →</Link>
              <Link href="/case-studies" className="btn-outline">View Case Studies</Link>
            </div>
          </div>
          <div style={{background:'#fff',borderRadius:24,padding:'2rem',border:'1px solid var(--border)',boxShadow:'0 8px 40px oklch(20% 0.04 255/.06)'}}>
            <div style={{fontFamily:'var(--font-heading)',fontSize:'1rem',fontWeight:700,color:'var(--text)',marginBottom:'1.5rem'}}>Key Features</div>
            <div style={{display:'flex',flexDirection:'column',gap:'.75rem'}}>
              {tab.features.map((f,i)=>(
                <div key={i} style={{display:'flex',alignItems:'center',gap:'.75rem',padding:'.75rem 1rem',background:'var(--cream)',borderRadius:12,fontSize:'.88rem',fontWeight:500,color:'var(--text)'}}>
                  <span style={{width:8,height:8,borderRadius:'50%',background:'var(--rose)',flexShrink:0}}/>
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{background:'var(--cream-deep)',padding:'90px 5vw'}}>
        <div style={{maxWidth:860,margin:'0 auto',background:'#fff',borderRadius:28,padding:'3.5rem',border:'1px solid var(--border)',textAlign:'center',boxShadow:'0 8px 48px oklch(20% 0.04 255/.06)'}}>
          <span className="section-tag">Get started</span>
          <h2 className="section-h2" style={{fontSize:'clamp(1.6rem,2.5vw,2.4rem)'}}>Ready to transform your hospital&apos;s digital infrastructure?</h2>
          <p className="section-sub" style={{margin:'0 auto 2rem'}}>Talk to our team. We&apos;ll assess your current systems and propose a tailored deployment plan.</p>
          <Link href="/contact" className="btn-primary">Schedule a Consultation →</Link>
        </div>
      </section>
    </>
  );
}
