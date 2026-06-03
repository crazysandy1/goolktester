'use client';
import { useState } from 'react';
import { useFadeUp } from '@/hooks/useFadeUp';

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'YOUR_WEB3FORMS_KEY';

const BENEFITS = [
  { title: 'Founder access', desc: 'Work directly with founding team. No layers of management.' },
  { title: 'Remote-first', desc: 'Work from anywhere in India. Office in Bangalore for those who prefer it.' },
  { title: 'Healthcare impact', desc: 'Your code serves real patients in real hospitals every single day.' },
  { title: 'Learning budget', desc: 'Annual learning allowance for courses, conferences, and certifications.' },
  { title: 'Equity options', desc: 'Early-stage ESOP pool. Build wealth alongside the company.' },
  { title: 'Health insurance', desc: 'Comprehensive health coverage for you and your family.' },
];

const ROLES = [
  { title: 'Senior Full-Stack Engineer', dept: 'Engineering', type: 'Full-time · Remote', desc: 'Build and scale our core healthcare platform using React, Node.js, and PostgreSQL.' },
  { title: 'ML / AI Engineer', dept: 'Engineering', type: 'Full-time · Remote', desc: 'Build clinical AI models for triage, diagnostic support, and predictive analytics.' },
  { title: 'Product Designer', dept: 'Design', type: 'Full-time · Remote / Bangalore', desc: 'Design intuitive healthcare interfaces for doctors, nurses, and patients.' },
  { title: 'Clinical Product Manager', dept: 'Product', type: 'Full-time · Bangalore', desc: 'Bridge clinical workflows and product development. Medical background preferred.' },
  { title: 'DevOps Engineer', dept: 'Engineering', type: 'Full-time · Remote', desc: 'Manage cloud infrastructure and CI/CD for HIPAA-compliant applications.' },
  { title: 'Business Development', dept: 'Growth', type: 'Full-time · Bangalore', desc: 'Build hospital partnerships across India.' },
];

const HIRING_STEPS = [
  { title: 'Apply', desc: 'Submit your application with resume and a brief note on why you want to work in healthcare tech.' },
  { title: 'Screen', desc: '30-minute call with a founder to discuss your background and interests.' },
  { title: 'Technical', desc: 'Role-specific assessment — take-home project or live coding session.' },
  { title: 'Culture fit', desc: 'Conversation with 2-3 team members to ensure mutual fit.' },
  { title: 'Offer', desc: 'Decision within 48 hours. Competitive compensation, equity, and benefits.' },
];

const inputStyle = { width:'100%',padding:'.875rem 1rem',borderRadius:12,border:'1.5px solid var(--border)',fontFamily:'var(--font-body)',fontSize:'.9rem',background:'var(--cream)',color:'var(--text)',outline:'none' };
const labelStyle = { display:'block',fontSize:'.78rem',fontWeight:600,color:'var(--muted)',marginBottom:'.4rem',textTransform:'uppercase',letterSpacing:'.05em' };

export default function CareersClient() {
  const [status, setStatus] = useState('idle');
  const [selectedRole, setSelectedRole] = useState('');
  useFadeUp();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.target);
    formData.append('access_key', WEB3FORMS_KEY);
    formData.append('subject', `New Job Application — ${formData.get('role') || 'Goolkai AI'}`);
    formData.append('from_name', 'Goolkai AI Careers');
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
      const data = await res.json();
      if (data.success) { setStatus('success'); e.target.reset(); setSelectedRole(''); }
      else setStatus('error');
    } catch { setStatus('error'); }
  };

  return (
    <>
      <section style={{ background:'var(--cream)', padding:'140px 5vw 80px', textAlign:'center' }}>
        <span className="section-tag">Careers at Goolkai AI</span>
        <h1 style={{ fontFamily:'var(--font-heading)', fontSize:'clamp(2.2rem,4vw,3.6rem)', fontWeight:800, lineHeight:1.12, letterSpacing:'-.025em', color:'var(--text)', marginBottom:'1.2rem' }}>
          Build technology that <em style={{ fontStyle:'italic', color:'var(--rose)' }}>saves lives</em>.
        </h1>
        <p style={{ fontSize:'1.1rem', color:'var(--muted)', lineHeight:1.75, maxWidth:580, margin:'0 auto' }}>
          Join a founder-led team building the digital backbone of modern hospitals. Your code will serve real patients every single day.
        </p>
      </section>

      {/* Benefits */}
      <section style={{ background:'var(--cream-deep)', padding:'90px 5vw' }}>
        <div className="text-center fade-up"><span className="section-tag">Why Goolkai</span><h2 className="section-h2">What we <em>offer</em></h2></div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1.5rem', maxWidth:1100, margin:'2.5rem auto 0' }}>
          {BENEFITS.map((b,i) => (
            <div key={i} className="fade-up" style={{ background:'#fff', borderRadius:22, padding:'2rem', border:'1px solid var(--border)', transition:'transform .25s' }}
              onMouseEnter={e=>e.currentTarget.style.transform='translateY(-4px)'}
              onMouseLeave={e=>e.currentTarget.style.transform=''}>
              <div style={{ width:52, height:52, borderRadius:14, background:'var(--rose-light)', color:'var(--rose)', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'1.2rem' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2l1.8 7.2L21 12l-7.2 1.8L12 21l-1.8-7.2L3 12l7.2-1.8z"/></svg>
              </div>
              <h3 style={{ fontFamily:'var(--font-heading)', fontSize:'1.1rem', fontWeight:700, color:'var(--text)', marginBottom:'.5rem' }}>{b.title}</h3>
              <p style={{ fontSize:'.875rem', color:'var(--muted)', lineHeight:1.7 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Roles */}
      <section style={{ background:'var(--cream)', padding:'90px 5vw' }}>
        <div className="text-center fade-up"><span className="section-tag">Open Roles</span><h2 className="section-h2">Find your <em>next chapter</em></h2></div>
        <div style={{ maxWidth:820, margin:'3rem auto 0', display:'flex', flexDirection:'column', gap:'.75rem' }}>
          {ROLES.map((r,i) => (
            <div key={i} className="fade-up" style={{ background:'#fff', borderRadius:18, padding:'1.5rem 2rem', border:'1px solid var(--border)', display:'grid', gridTemplateColumns:'1fr auto', gap:'1.5rem', alignItems:'center', transition:'border-color .2s' }}
              onMouseEnter={e=>e.currentTarget.style.borderColor='var(--rose-mid)'}
              onMouseLeave={e=>e.currentTarget.style.borderColor='var(--border)'}>
              <div>
                <h3 style={{ fontFamily:'var(--font-heading)', fontSize:'1.05rem', fontWeight:700, color:'var(--text)', marginBottom:'.3rem' }}>{r.title}</h3>
                <div style={{ display:'flex', gap:'.75rem', flexWrap:'wrap', marginBottom:'.4rem' }}>
                  <span style={{ fontSize:'.72rem', fontWeight:600, color:'var(--rose)', background:'var(--rose-light)', padding:'3px 10px', borderRadius:100 }}>{r.dept}</span>
                  <span style={{ fontSize:'.72rem', fontWeight:500, color:'var(--muted)' }}>{r.type}</span>
                </div>
                <p style={{ fontSize:'.85rem', color:'var(--muted)', lineHeight:1.6 }}>{r.desc}</p>
              </div>
              <a href="#apply" onClick={()=>setSelectedRole(r.title)} className="btn-outline" style={{ padding:'.6rem 1.2rem', fontSize:'.82rem', whiteSpace:'nowrap' }}>Apply →</a>
            </div>
          ))}
        </div>
      </section>

      {/* Hiring Process */}
      <section style={{ background:'var(--cream-deep)', padding:'90px 5vw' }}>
        <div className="text-center fade-up"><span className="section-tag">Hiring Process</span><h2 className="section-h2">Simple. <em>Respectful.</em> Fast.</h2></div>
        <div style={{ maxWidth:700, margin:'3rem auto 0', display:'flex', flexDirection:'column' }}>
          {HIRING_STEPS.map((step,i,arr) => (
            <div key={i} className="fade-up" style={{ display:'flex', gap:'1.5rem', paddingBottom:i<arr.length-1?'2rem':0 }}>
              <div style={{ display:'flex', flexDirection:'column', alignItems:'center', width:40, flexShrink:0 }}>
                <div style={{ width:40, height:40, borderRadius:'50%', background:'var(--rose)', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-heading)', fontWeight:700, fontSize:'.95rem' }}>{i+1}</div>
                {i<arr.length-1 && <div style={{ flex:1, width:2, background:'var(--border)', marginTop:4 }}/>}
              </div>
              <div style={{ flex:1 }}>
                <h4 style={{ fontFamily:'var(--font-heading)', fontSize:'1.05rem', fontWeight:700, color:'var(--text)', marginBottom:'.3rem' }}>{step.title}</h4>
                <p style={{ fontSize:'.875rem', color:'var(--muted)', lineHeight:1.65 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" style={{ background:'var(--cream)', padding:'90px 5vw' }}>
        <div style={{ maxWidth:640, margin:'0 auto', background:'#fff', borderRadius:24, padding:'2.5rem', border:'1px solid var(--border)', boxShadow:'0 8px 48px oklch(20% 0.04 255/.06)' }}>
          <h2 style={{ fontFamily:'var(--font-heading)', fontSize:'1.3rem', fontWeight:700, color:'var(--text)', marginBottom:'.5rem', textAlign:'center' }}>Apply Now</h2>
          <p style={{ fontSize:'.88rem', color:'var(--muted)', marginBottom:'2rem', textAlign:'center' }}>Send us your details and we&apos;ll get back within 48 hours.</p>
          {status === 'success' ? (
            <div style={{ textAlign:'center', padding:'2rem' }}>
              <div style={{ fontSize:'3rem', marginBottom:'1rem' }}>✓</div>
              <h3 style={{ fontFamily:'var(--font-heading)', fontSize:'1.2rem', fontWeight:700, color:'var(--text)' }}>Application received!</h3>
              <p style={{ fontSize:'.9rem', color:'var(--muted)', marginTop:'.5rem' }}>We&apos;ll review and get back to you within 48 hours.</p>
              <button onClick={()=>setStatus('idle')} className="btn-outline" style={{ marginTop:'1.5rem', fontSize:'.85rem' }}>Submit another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:'1rem' }}>
              <input type="checkbox" name="botcheck" style={{ display:'none' }}/>
              {[{name:'name',label:'Full Name',type:'text'},{name:'email',label:'Email',type:'email'},{name:'linkedin',label:'LinkedIn URL',type:'url'}].map(f=>(
                <div key={f.name}><label style={labelStyle}>{f.label}</label><input type={f.type} name={f.name} required style={inputStyle}/></div>
              ))}
              <div>
                <label style={labelStyle}>Role you&apos;re applying for</label>
                <select name="role" required value={selectedRole} onChange={e=>setSelectedRole(e.target.value)} style={{ ...inputStyle, appearance:'auto' }}>
                  <option value="">Select a role…</option>
                  {ROLES.map(r=><option key={r.title} value={r.title}>{r.title}</option>)}
                  <option value="Other / General Interest">Other / General Interest</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Why Goolkai?</label>
                <textarea name="message" rows={3} required style={{ ...inputStyle, resize:'vertical' }}/>
              </div>
              {status === 'error' && (
                <p style={{ fontSize:'.85rem', color:'var(--rose)', background:'var(--rose-light)', padding:'.75rem 1rem', borderRadius:10 }}>
                  Something went wrong. Email us at partnerships@goolkai.com
                </p>
              )}
              <button type="submit" className="btn-primary" disabled={status==='loading'} style={{ width:'100%', justifyContent:'center', marginTop:'.5rem', opacity:status==='loading'?0.7:1 }}>
                {status==='loading' ? 'Submitting…' : 'Submit Application →'}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
