'use client';
import { useState } from 'react';
import { useFadeUp } from '@/hooks/useFadeUp';
import s from '@/app/careers/careers.module.css';

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'YOUR_WEB3FORMS_KEY';

const BENEFITS = [
  { icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z', title: 'Founder access, day one', desc: 'You sit with the people who started this. You hear every decision, push back on every one, and own outcomes. No career ladders between you and the problem.' },
  { icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064', title: 'Remote-first, actually', desc: 'Work from wherever you do your best thinking. Bangalore office available for collaboration weeks. No mandatory face-time, no meeting culture.' },
  { icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z', title: 'Real impact, not metrics', desc: 'A doctor you\'ll never meet will use something you ship this sprint. A patient in rural Karnataka will get a diagnosis because of something you built. That\'s not hyperbole.' },
  { icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253', title: 'Learning budget', desc: 'Annual allowance for courses, certifications, and conferences — no approval chain, no justification required.' },
  { icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6', title: 'Early-stage equity (ESOP)', desc: 'A meaningful slice of the company, not a rounding error. You\'re not employee #3,000. Build wealth as we grow.' },
  { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', title: 'Health insurance from day one', desc: 'Comprehensive coverage for you and your family. Healthcare tech companies should take care of their own.' },
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
  { title: 'Culture fit', desc: 'Conversation with 2–3 team members to ensure mutual fit.' },
  { title: 'Offer', desc: 'Decision within 48 hours. Competitive compensation, equity, and benefits.' },
];

export default function CareersClient() {
  const [status, setStatus] = useState('idle');
  const [selectedRole, setSelectedRole] = useState('');
  useFadeUp();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.target);
    formData.append('access_key', WEB3FORMS_KEY);
    formData.append('subject', `New Job Application — ${formData.get('role') || 'Goolk AI'}`);
    formData.append('from_name', 'Goolk AI Careers');
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
      const data = await res.json();
      if (data.success) { setStatus('success'); e.target.reset(); setSelectedRole(''); }
      else setStatus('error');
    } catch { setStatus('error'); }
  };

  return (
    <>
      {/* HERO */}
      <section className={s.hero}>
        <div className={s.heroInner}>
          <span className="section-tag">Careers at Goolk AI</span>
          <h1 className={s.heroH1}>
            Your code will be <em style={{ fontStyle: 'italic' }}>used in actual hospitals</em> tomorrow.
          </h1>
          <p className={s.heroSub}>
            No FAANG abstractions. No growth-hacking dashboards. You build something this week, a doctor or nurse uses it next week. That&apos;s the job. We&apos;re hiring people who want to feel that.
          </p>
        </div>
      </section>

      {/* BENEFITS */}
      <section className={s.benefitsSection}>
        <div className={s.sectionHeader}>
          <span className="section-tag">Why Goolk AI</span>
          <h2 className="section-h2">Why engineers choose us over <em>better-funded options</em></h2>
        </div>
        
        <div className={s.benefitsGrid}>
          {BENEFITS.map((b, i) => (
            <div key={i} className={`${s.benefitCard} fade-up`}>
              <div className={s.benefitIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d={b.icon} />
                </svg>
              </div>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OPEN ROLES */}
      <section className={s.rolesSection}>
        <div className={s.sectionHeader}>
          <span className="section-tag">Open Roles</span>
          <h2 className="section-h2">Positions where your work <em>ships next week</em></h2>
        </div>
        
        <div className={s.rolesList}>
          {ROLES.map((r, i) => (
            <div key={i} className={`${s.roleCard} fade-up`}>
              <div>
                <h3 className={s.roleTitle}>{r.title}</h3>
                <div className={s.roleMeta}>
                  <span className={s.roleDept}>{r.dept}</span>
                  <span className={s.roleType}>{r.type}</span>
                </div>
                <p className={s.roleDesc}>{r.desc}</p>
              </div>
              <a href="#apply" onClick={() => setSelectedRole(r.title)} className={`btn-outline ${s.roleBtn}`}>
                Apply →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* HIRING PROCESS */}
      <section className={s.processSection}>
        <div className={s.sectionHeader}>
          <span className="section-tag">How we hire</span>
          <h2 className="section-h2">Fast. Honest. <em>No whiteboard theatre.</em></h2>
        </div>
        
        <div className={s.processList}>
          {HIRING_STEPS.map((step, i, arr) => (
            <div key={i} className={`${s.processStep} fade-up`}>
              <div className={s.timelineCol}>
                <div className={s.stepDot}>{i + 1}</div>
                {i < arr.length - 1 && <div className={s.stepLine} />}
              </div>
              <div className={s.stepContent}>
                <h4 className={s.stepTitle}>{step.title}</h4>
                <p className={s.stepDesc}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section id="apply" className={s.applySection}>
        <div className={s.formCard}>
          <h2 className={s.formTitle}>Apply Now</h2>
          <p className={s.formDesc}>Send us your details and we&apos;ll get back within 48 hours.</p>
          
          {status === 'success' ? (
            <div className={s.statusSuccess}>
              <div className={s.successIcon}>✓</div>
              <h3 className={s.successTitle}>Application received!</h3>
              <p className={s.successDesc}>We&apos;ll review and get back within 48 hours.</p>
              <button onClick={() => setStatus('idle')} className="btn-outline" style={{ marginTop: '1.5rem', fontSize: '0.84rem' }}>
                Submit another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={s.form}>
              <input type="checkbox" name="botcheck" style={{ display: 'none' }} />
              {[
                { name: 'name', label: 'Full Name', type: 'text' },
                { name: 'email', label: 'Email', type: 'email' },
                { name: 'linkedin', label: 'LinkedIn URL', type: 'url' },
              ].map(f => (
                <div key={f.name} className={s.formGroup}>
                  <label className={s.label}>{f.label}</label>
                  <input type={f.type} name={f.name} required className={s.field} />
                </div>
              ))}
              <div className={s.formGroup}>
                <label className={s.label}>Role you&apos;re applying for</label>
                <select
                  name="role"
                  required
                  value={selectedRole}
                  onChange={e => setSelectedRole(e.target.value)}
                  className={`${s.field} s.select`}
                >
                  <option value="">Select a role…</option>
                  {ROLES.map(r => <option key={r.title} value={r.title}>{r.title}</option>)}
                  <option value="Other / General Interest">Other / General Interest</option>
                </select>
              </div>
              <div className={s.formGroup}>
                <label className={s.label}>Why Goolk AI?</label>
                <textarea name="message" rows={3} required className={`${s.field} s.textarea`} />
              </div>
              {status === 'error' && (
                <p className={s.statusError}>
                  Something went wrong. Email us directly at support@goolkai.com
                </p>
              )}
              <button type="submit" className="btn-primary" disabled={status === 'loading'} style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem', opacity: status === 'loading' ? 0.7 : 1 }}>
                {status === 'loading' ? 'Submitting…' : 'Submit Application →'}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
