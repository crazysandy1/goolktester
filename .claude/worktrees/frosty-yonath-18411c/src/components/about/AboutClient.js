'use client';
import Link from 'next/link';
import { useFadeUp } from '@/hooks/useFadeUp';
import s from '@/app/about/about.module.css';

const VALUES = [
  { title: 'Patient-first design', desc: 'Every feature we ship is tested against one question: does this help the patient or save the clinician time?' },
  { title: 'Compliance is the floor', desc: 'HIPAA, DPDP, HL7/FHIR — baked into architecture from day one, not patched in before audit.' },
  { title: 'Discovery before delivery', desc: 'We spend 1–2 weeks mapping workflows before writing a single line of code.' },
  { title: 'Founder-led engagement', desc: 'Direct access to founders and engineers. No call centres, no junior account reps.' },
  { title: 'Interop by default', desc: 'HL7 FHIR-native. Your data stays yours — if you leave us, you take your records.' },
  { title: 'Rural-first innovation', desc: 'KiaoM proves healthcare tech can work without smartphones, insurance cards, or tier-1 cities.' },
];

const TIMELINE = [
  { year: '2021', title: 'Founded in Bangalore', desc: 'Started with a vision to democratize hospital technology across India.' },
  { year: '2022', title: 'First hospital pilots', desc: 'Deployed initial HIS modules in 3 hospitals across Karnataka.' },
  { year: '2023', title: 'KiaoM conceived', desc: 'Rural healthcare kiosk project initiated after field research in 12 villages.' },
  { year: '2024', title: 'Platform expansion', desc: 'Full-stack healthcare platform with telemedicine, patient engagement, and clinical AI.' },
  { year: '2025', title: 'KiaoM pilot launch', desc: 'Live deployment in Karnataka — multilingual AI kiosk serving rural communities.' },
];

const TEAM = [
  { name: 'Sandeep K.', role: 'Founder & CEO', color: 'oklch(55% 0.155 15)' },
  { name: 'Engineering', role: 'Full-Stack & AI Team', color: 'oklch(55% 0.110 158)' },
  { name: 'Clinical', role: 'Healthcare Advisory', color: 'oklch(45% 0.12 255)' },
  { name: 'Design', role: 'UX & Product Design', color: 'oklch(72% 0.130 78)' },
];

export default function AboutClient() {
  useFadeUp();
  return (
    <>
      <section className={s.aboutHero}>
        <span className="section-tag">About Goolkai AI</span>
        <h1 className={s.aboutHeroH1}>We&apos;re building the <em>digital backbone</em> of modern hospitals.</h1>
        <p className={s.aboutHeroSub}>Goolkai AI Technologies is a healthcare technology company headquartered in Bangalore, India. We design, build, and deploy end-to-end digital infrastructure for hospitals, clinic chains, and healthcare networks.</p>
      </section>

      <section className={s.missionSection}>
        <div className={s.missionGrid}>
          <div className="fade-up">
            <span className="section-tag">Our Mission</span>
            <h2 className="section-h2" style={{marginBottom:'1.2rem'}}>Make world-class hospital technology <em>accessible</em> to every healthcare provider in India.</h2>
            <div className={s.missionText}>
              <p>Most Indian hospitals still run on paper registers, disconnected software, and spreadsheets. We believe every hospital — from a 30-bed nursing home in tier-3 India to a 500-bed multi-specialty chain — deserves the same quality of digital infrastructure that global health systems take for granted.</p>
              <p>We don&apos;t just sell software. We sit with your clinicians, understand your workflows, and build technology that fits how care actually happens — not how a product manager imagined it in a conference room.</p>
            </div>
          </div>
          <div className={`${s.missionVisual} fade-up`}>
            <div style={{fontFamily:'var(--font-heading)',fontSize:'1rem',fontWeight:700,color:'var(--text)',marginBottom:'1.5rem'}}>What we stand for</div>
            <div style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
              {['Patient outcomes over feature counts','Compliance as architecture, not afterthought','Discovery before delivery — always','Direct founder access, no account reps'].map((item,i)=>(
                <div key={i} style={{display:'flex',alignItems:'center',gap:'.75rem',padding:'.75rem 1rem',background:'var(--cream)',borderRadius:'12px',fontSize:'.88rem',fontWeight:500,color:'var(--text)'}}>
                  <span style={{width:8,height:8,borderRadius:'50%',background:'var(--rose)',flexShrink:0}}/>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={s.valuesSection}>
        <div className="text-center fade-up"><span className="section-tag">Our Values</span><h2 className="section-h2">Principles that guide <em>every engagement</em></h2></div>
        <div className={s.valuesGrid}>
          {VALUES.map((v,i)=>(<div key={i} className={`${s.valueCard} fade-up`}><div className={s.valueIcon}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2l1.8 7.2L21 12l-7.2 1.8L12 21l-1.8-7.2L3 12l7.2-1.8z"/></svg></div><h3>{v.title}</h3><p>{v.desc}</p></div>))}
        </div>
      </section>

      <section className={s.storySection}>
        <div className="text-center fade-up"><span className="section-tag">Our Story</span><h2 className="section-h2">The journey <em>so far</em></h2></div>
        <div className={s.storyTimeline}>
          {TIMELINE.map((t,i,arr)=>(
            <div key={i} className={`${s.storyRow} fade-up`}>
              <div className={s.storyLeft}><div className={s.storyDot}/>{i<arr.length-1&&<div className={s.storyLine}/>}</div>
              <div className={s.storyBody}><div className={s.storyYear}>{t.year}</div><div className={s.storyTask}>{t.title}</div><div className={s.storyDesc}>{t.desc}</div></div>
            </div>
          ))}
        </div>
      </section>

      <section className={s.teamSection}>
        <div className="text-center fade-up"><span className="section-tag">Our Team</span><h2 className="section-h2">Small team. <em>Big ambition.</em></h2><p className="section-sub">A founder-led team of engineers, designers, and healthcare domain experts building the future of hospital technology in India.</p></div>
        <div className={s.teamGrid}>
          {TEAM.map((t,i)=>(<div key={i} className={`${s.teamCard} fade-up`}><div className={s.teamAvatar} style={{background:t.color}}>{t.name.split(' ').map(w=>w[0]).join('')}</div><h3>{t.name}</h3><p>{t.role}</p></div>))}
        </div>
      </section>

      <section className={s.impactSection}>
        <div style={{textAlign:'center',marginBottom:'3rem'}}><span className="section-tag" style={{color:'var(--rose-mid)'}}>Our Focus Areas</span><h2 style={{fontFamily:'var(--font-heading)',fontSize:'clamp(1.6rem,2.5vw,2.2rem)',fontWeight:700,color:'#fff',lineHeight:1.3}}>Building for <em style={{fontStyle:'italic',color:'var(--rose-mid)'}}>real impact</em></h2></div>
        <div className={s.impactGrid}>
          {[{num:'120+',label:'Team members'},{num:'7',label:'Product modules'},{num:'5+',label:'Languages supported'},{num:'90',label:'Days avg. go-live'}].map((m,i)=>(
            <div key={i} className={`${s.impactBox} fade-up`}><div className={s.impactNum}>{m.num}</div><div className={s.impactLabel}>{m.label}</div></div>
          ))}
        </div>
      </section>
    </>
  );
}
