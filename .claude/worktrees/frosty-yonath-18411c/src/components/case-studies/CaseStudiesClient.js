'use client';
import Link from 'next/link';
import { useFadeUp } from '@/hooks/useFadeUp';

const CASES = [
  { tag: 'Hospital Management', title: 'Multi-specialty hospital digitises OPD-to-discharge workflow', desc: 'Complete HIS deployment replacing 3 legacy systems, integrating billing, pharmacy, and laboratory into a single platform.', metrics: [{val:'+34%',label:'OPD throughput'},{val:'-61%',label:'No-show rate'},{val:'90',label:'Days to go-live'}] },
  { tag: 'Patient Engagement', title: 'White-label patient app drives 3× appointment bookings', desc: 'Branded mobile app with online booking, digital reports, and AI symptom checker for a 200-bed hospital chain.', metrics: [{val:'3×',label:'Online bookings'},{val:'4.8★',label:'App store rating'},{val:'89%',label:'Patient adoption'}] },
  { tag: 'Telemedicine', title: 'Teleconsultation platform serves 500+ daily video consults', desc: 'HIPAA-compliant video platform with e-prescriptions, integrated payments, and WhatsApp follow-ups.', metrics: [{val:'500+',label:'Daily consults'},{val:'<2min',label:'Avg. wait time'},{val:'97%',label:'Call completion'}] },
  { tag: 'Clinical AI', title: 'AI-powered KPI dashboard reduces clinical decision latency by 40%', desc: 'Real-time hospital intelligence dashboard with predictive analytics for bed management and staffing.', metrics: [{val:'-40%',label:'Decision latency'},{val:'18%',label:'Better forecasting'},{val:'24/7',label:'Real-time data'}] },
  { tag: 'KiaoM', title: 'Rural health kiosk pilot reaches 5,000+ patients in Karnataka', desc: 'AI-powered multilingual kiosk deployed in village pharmacies for symptom triage and live teleconsultation.', metrics: [{val:'5K+',label:'Patients served'},{val:'5',label:'Languages'},{val:'<3min',label:'Triage time'}] },
  { tag: 'Revenue Cycle', title: 'Insurance claim processing automated, reducing denials by 35%', desc: 'End-to-end revenue cycle automation including claim submission, denial management, and collections intelligence.', metrics: [{val:'-35%',label:'Claim denials'},{val:'+40%',label:'Faster reimbursement'},{val:'₹2.1Cr',label:'Revenue recovered'}] },
];

export default function CaseStudiesClient() {
  useFadeUp();
  return (
    <>
      <section style={{background:'var(--cream)',padding:'140px 5vw 50px',textAlign:'center'}}>
        <span className="section-tag">Case Studies</span>
        <h1 style={{fontFamily:'var(--font-heading)',fontSize:'clamp(2.2rem,4vw,3.6rem)',fontWeight:800,lineHeight:1.12,letterSpacing:'-.025em',color:'var(--text)',marginBottom:'1.2rem'}}>Real deployments. <em style={{fontStyle:'italic',color:'var(--rose)'}}>Real outcomes.</em></h1>
        <p style={{fontSize:'1.1rem',color:'var(--muted)',lineHeight:1.75,maxWidth:580,margin:'0 auto'}}>We&apos;re an early-stage company — these represent our pilot deployments and projected outcomes based on live data from our first hospital partnerships.</p>
      </section>

      <section style={{background:'var(--cream)',padding:'40px 5vw 90px'}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(340px,1fr))',gap:'1.5rem',maxWidth:1200,margin:'0 auto'}}>
          {CASES.map((c,i)=>(
            <div key={i} className="fade-up" style={{background:'#fff',borderRadius:22,padding:'2rem',border:'1px solid var(--border)',transition:'transform .25s,box-shadow .25s',cursor:'default'}} onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-6px)';e.currentTarget.style.boxShadow='0 20px 56px oklch(20% 0.04 255/.10)'}} onMouseLeave={e=>{e.currentTarget.style.transform='';e.currentTarget.style.boxShadow=''}}>
              <span style={{fontSize:'.7rem',fontWeight:600,color:'var(--rose)',textTransform:'uppercase',letterSpacing:'.06em',background:'var(--rose-light)',padding:'4px 10px',borderRadius:100}}>{c.tag}</span>
              <h3 style={{fontFamily:'var(--font-heading)',fontSize:'1.15rem',fontWeight:700,color:'var(--text)',margin:'.8rem 0 .5rem'}}>{c.title}</h3>
              <p style={{fontSize:'.875rem',color:'var(--muted)',lineHeight:1.7,marginBottom:'1.5rem'}}>{c.desc}</p>
              <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'.5rem',borderTop:'1px solid var(--border)',paddingTop:'1rem'}}>
                {c.metrics.map((m,j)=>(
                  <div key={j} style={{textAlign:'center'}}>
                    <div style={{fontFamily:'var(--font-body)',fontSize:'1.1rem',fontWeight:700,color:'var(--text)'}}>{m.val}</div>
                    <div style={{fontSize:'.65rem',color:'var(--muted)',marginTop:2}}>{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{background:'var(--cream-deep)',padding:'90px 5vw'}}>
        <div style={{maxWidth:860,margin:'0 auto',background:'#fff',borderRadius:28,padding:'3.5rem',border:'1px solid var(--border)',textAlign:'center',boxShadow:'0 8px 48px oklch(20% 0.04 255/.06)'}}>
          <span className="section-tag">Become a case study</span>
          <h2 className="section-h2">Want results like these for <em>your hospital</em>?</h2>
          <p className="section-sub" style={{margin:'0 auto 2rem'}}>Schedule a free consultation and let us show you what&apos;s possible.</p>
          <Link href="/contact" className="btn-primary">Schedule Consultation →</Link>
        </div>
      </section>
    </>
  );
}
