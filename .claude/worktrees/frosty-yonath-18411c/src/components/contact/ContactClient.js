'use client';
import { useState } from 'react';
import { useFadeUp } from '@/hooks/useFadeUp';

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'YOUR_WEB3FORMS_KEY';

const CONTACT_INFO = [
  { label: 'Partnerships', email: 'partnerships@goolkai.com', desc: 'For hospitals, health systems, and strategic alliances.' },
  { label: 'Technical', email: 'tech@goolkai.com', desc: 'For integration queries, API access, and technical discussions.' },
  { label: 'General', email: 'support@goolkai.com', desc: 'For general inquiries, media, and press.' },
];

const inputStyle = { width:'100%',padding:'.875rem 1rem',borderRadius:12,border:'1.5px solid var(--border)',fontFamily:'var(--font-body)',fontSize:'.9rem',background:'var(--cream)',color:'var(--text)',outline:'none',transition:'border-color .2s' };
const labelStyle = { display:'block',fontSize:'.78rem',fontWeight:600,color:'var(--muted)',marginBottom:'.4rem',textTransform:'uppercase',letterSpacing:'.05em' };

export default function ContactClient() {
  const [status, setStatus] = useState('idle');
  useFadeUp();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.target);
    formData.append('access_key', WEB3FORMS_KEY);
    formData.append('subject', 'New Consultation Request — Goolkai AI');
    formData.append('from_name', 'Goolkai AI Website');
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
      const data = await res.json();
      if (data.success) { setStatus('success'); e.target.reset(); }
      else setStatus('error');
    } catch { setStatus('error'); }
  };

  return (
    <>
      <section style={{ background: 'var(--cream)', padding: '140px 5vw 90px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
          <div className="fade-up">
            <span className="section-tag">Contact Us</span>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 800, lineHeight: 1.12, letterSpacing: '-.025em', color: 'var(--text)', marginBottom: '1.2rem' }}>
              Let&apos;s talk about your <em style={{ fontStyle: 'italic', color: 'var(--rose)' }}>hospital&apos;s future</em>.
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'var(--muted)', lineHeight: 1.78, marginBottom: '2.5rem' }}>
              Whether you&apos;re looking to modernise your hospital&apos;s tech stack, explore a KiaoM pilot, or just want to understand what&apos;s possible — we&apos;d love to hear from you.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {CONTACT_INFO.map((c, i) => (
                <div key={i} style={{ background: '#fff', borderRadius: 18, padding: '1.5rem', border: '1px solid var(--border)' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '.95rem', fontWeight: 700, color: 'var(--text)', marginBottom: '.3rem' }}>{c.label}</div>
                  <a href={`mailto:${c.email}`} style={{ color: 'var(--rose)', fontSize: '.9rem', fontWeight: 600 }}>{c.email}</a>
                  <p style={{ fontSize: '.82rem', color: 'var(--muted)', marginTop: '.3rem' }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-up" style={{ background: '#fff', borderRadius: 24, padding: '2.5rem', border: '1px solid var(--border)', boxShadow: '0 8px 48px oklch(20% 0.04 255/.06)' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginBottom: '.5rem' }}>Schedule a Consultation</h2>
            <p style={{ fontSize: '.88rem', color: 'var(--muted)', marginBottom: '2rem' }}>Fill in the form below. We typically respond within one business day.</p>

            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--text)', marginBottom: '.5rem' }}>Message received!</h3>
                <p style={{ fontSize: '.9rem', color: 'var(--muted)' }}>Our team will reach out within one business day.</p>
                <button onClick={() => setStatus('idle')} className="btn-outline" style={{ marginTop: '1.5rem', fontSize: '.85rem' }}>Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input type="checkbox" name="botcheck" style={{ display: 'none' }} />
                {[
                  { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Dr. Priya Sharma' },
                  { name: 'email', label: 'Work Email', type: 'email', placeholder: 'priya@hospital.org' },
                  { name: 'organization', label: 'Organisation', type: 'text', placeholder: 'City Care Hospital' },
                  { name: 'phone', label: 'Phone (optional)', type: 'tel', placeholder: '+91 98765 43210' },
                ].map(f => (
                  <div key={f.name}>
                    <label style={labelStyle}>{f.label}</label>
                    <input type={f.type} name={f.name} placeholder={f.placeholder} required={f.type !== 'tel'} style={inputStyle} />
                  </div>
                ))}
                <div>
                  <label style={labelStyle}>How can we help?</label>
                  <textarea name="message" rows={4} placeholder="Tell us about your hospital, current systems, and what you're looking for..." required style={{ ...inputStyle, resize: 'vertical' }} />
                </div>
                {status === 'error' && (
                  <p style={{ fontSize: '.85rem', color: 'var(--rose)', background: 'var(--rose-light)', padding: '.75rem 1rem', borderRadius: 10 }}>
                    Something went wrong. Please email us at partnerships@goolkai.com
                  </p>
                )}
                <button type="submit" className="btn-primary" disabled={status === 'loading'} style={{ width: '100%', justifyContent: 'center', marginTop: '.5rem', opacity: status === 'loading' ? 0.7 : 1 }}>
                  {status === 'loading' ? 'Sending…' : 'Send Message →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
