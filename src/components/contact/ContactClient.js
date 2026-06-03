'use client';
import { useState } from 'react';
import { useFadeUp } from '@/hooks/useFadeUp';
import s from '@/app/contact/contact.module.css';

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'YOUR_WEB3FORMS_KEY';

const CONTACT_INFO = [
  {
    icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    label: 'Partnerships & Sales',
    value: 'goolk.ai.startup@gmail.com',
    href: 'mailto:goolk.ai.startup@gmail.com',
    desc: 'For health organisations, strategic alliances, and implementation enquiries.',
  },
  {
    icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
    label: 'WhatsApp Direct',
    value: '+91 8884235771',
    href: 'https://wa.me/918884235771',
    desc: 'Fastest response for urgent inquiries. Our team is active 9am–8pm IST.',
  },
  {
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    label: 'General Inquiries',
    value: 'goolk.ai.startup@gmail.com',
    href: 'mailto:goolk.ai.startup@gmail.com',
    desc: 'For general inquiries, media, research, and press.',
  },
];

const FAQS = [
  { q: 'How is Goolk AI different from a regular IT consultancy?', a: 'We are clinically-led, technically executed. Before any architecture is drawn, we are in your environment observing clinical workflows. We have walked away from projects where the fit was wrong — because our model depends on projects that succeed.' },
  { q: 'What does the free assessment include?', a: 'A 30-minute conversation with our founding team. No pitch deck. We ask about your current systems, key pain points, and what you have tried before. We give you our honest view on what it would take to solve it.' },
  { q: 'Do you handle compliance — HIPAA, DPDP, ABDM?', a: 'Yes, built into architecture from day one. We do not treat compliance as a pre-audit activity. Every engagement defaults to FHIR R4 data models, role-based access, audit logging, and end-to-end encryption by default.' },
  { q: 'What happens after go-live?', a: '30 days of hypercare — our team is on-call for any issue. Then tracked adoption KPIs at 60 and 90 days. You receive a documented outcomes report at 90 days showing exactly what changed vs. your baseline.' },
  { q: 'Can you integrate with our existing EHR or HIS?', a: 'Yes. HL7 FHIR R4-native architecture means we can connect to any standards-compliant system. For legacy HIS that lack FHIR, we build the translation layer. Your data stays yours — exported in standard format at any time.' },
  { q: 'What is KiaoM?', a: 'KiaoM is our rural AI health kiosk — a multilingual AI-powered primary care touchpoint for communities that lack access to doctors. Currently in pilot in Karnataka. It is funded by our commercial work, because we believe healthcare for everyone is not just a mission statement.' },
];

export default function ContactClient() {
  const [status, setStatus] = useState('idle');
  const [openFaq, setOpenFaq] = useState(-1);
  useFadeUp();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.target);
    formData.append('access_key', WEB3FORMS_KEY);
    formData.append('subject', 'New Assessment Request — Goolk AI');
    formData.append('from_name', 'Goolk AI Website');
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
      const data = await res.json();
      if (data.success) { setStatus('success'); e.target.reset(); }
      else setStatus('error');
    } catch { setStatus('error'); }
  };

  return (
    <>
      {/* HERO */}
      <section className={s.hero}>
        <div className={s.heroInner}>
          <span className="section-tag">Start the conversation</span>
          <h1 className={s.heroH1}>
            Free 30-minute healthcare IT assessment. <em style={{ fontStyle: 'italic' }}>No pitch. Just answers.</em>
          </h1>
          <p className={s.heroSub}>
            Tell us what&apos;s not working in your healthcare IT environment. We&apos;ll provide an honest clinical IT perspective — and tell you exactly what it would take to fix it.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className={s.gridSection}>
        <div className={s.grid}>
          {/* Left: contact info */}
          <div className={`${s.infoCol} fade-up`}>
            <h2 className={s.infoColTitle}>Direct access. No middlemen.</h2>
            <p className={s.infoColDesc}>
              We respond personally within one business day. For urgent matters, WhatsApp is fastest — our founding team manages it directly.
            </p>
            
            <div className={s.infoCardList}>
              {CONTACT_INFO.map((c, i) => (
                <div key={i} className={s.infoCard}>
                  <div className={s.infoIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d={c.icon} />
                    </svg>
                  </div>
                  <div>
                    <div className={s.infoLabel}>{c.label}</div>
                    <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className={s.infoValue}>
                      {c.value}
                    </a>
                    <p className={s.infoDesc}>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Office + socials */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className={s.addressCard}>
                <div className={s.infoIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <div className={s.infoLabel}>Registered Office</div>
                  <p className={s.infoDesc} style={{ margin: 0 }}>Goolk AI Technologies Pvt. Ltd.<br />Bangalore, Karnataka — India</p>
                </div>
              </div>
              
              <div className={s.connectBox}>
                <div className={s.connectTitle}>Connect with us</div>
                <div className={s.connectLinks}>
                  {[
                    { href: 'https://wa.me/918884235771', label: '💬 WhatsApp' },
                    { href: 'https://www.linkedin.com/company/goolkai', label: 'LinkedIn' },
                  ].map(l => (
                    <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className={s.connectLink}>
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className={`${s.formCard} fade-up`}>
            <h2 className={s.formTitle}>
              Request your free assessment
            </h2>
            <p className={s.formDesc}>
              Tell us about your organisation. We respond personally within one business day — no automated calendar link, no outsourced sales reps.
            </p>

            {status === 'success' ? (
              <div className={s.statusSuccess}>
                <div className={s.successIcon}>✓</div>
                <h3 className={s.successTitle}>
                  Assessment request received!
                </h3>
                <p className={s.successDesc}>Our clinical IT team will be in touch within one business day.</p>
                <button onClick={() => setStatus('idle')} className="btn-outline" style={{ marginTop: '1.5rem', fontSize: '0.85rem' }}>
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={s.form}>
                <input type="checkbox" name="botcheck" style={{ display: 'none' }} />
                {[
                  { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Dr. Priya Sharma' },
                  { name: 'email', label: 'Work Email', type: 'email', placeholder: 'priya@hospital.org' },
                  { name: 'organization', label: 'Organisation Name', type: 'text', placeholder: 'Metro Health System' },
                  { name: 'phone', label: 'Phone / WhatsApp (optional)', type: 'tel', placeholder: '+91 98765 43210' },
                ].map(f => (
                  <div key={f.name} className={s.formGroup}>
                    <label className={s.label}>{f.label}</label>
                    <input
                      type={f.type} name={f.name} placeholder={f.placeholder}
                      required={f.type !== 'tel'} className={s.field}
                    />
                  </div>
                ))}
                <div className={s.formGroup}>
                  <label className={s.label}>What are you trying to solve?</label>
                  <textarea
                    name="message" rows={4}
                    placeholder="Tell us about your organisation, current systems, key challenges, and what you're looking to achieve..."
                    required className={`${s.field} s.textarea`}
                  />
                </div>
                {status === 'error' && (
                  <p className={s.statusError}>
                    Something went wrong. Please email us at goolk.ai.startup@gmail.com or WhatsApp +91 8884235771
                  </p>
                )}
                <button
                  type="submit" className="btn-primary"
                  disabled={status === 'loading'}
                  style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem', opacity: status === 'loading' ? 0.7 : 1 }}
                >
                  {status === 'loading' ? 'Sending…' : 'Request Free Assessment →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className={s.faqSection} id="faq">
        <div className={s.faqInner}>
          <div className={s.faqHead}>
            <span className={s.sectionLabel}>Common Questions</span>
            <h2 className={s.faqH2}>What people<br /><em>usually ask first.</em></h2>
          </div>
          <div className={s.faqList}>
            {FAQS.map((faq, i) => (
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
    </>
  );
}
