'use client';
import { useState } from 'react';

export default function FloatingBanners() {
  const [certsHidden, setCertsHidden] = useState(false);
  const [socialHidden, setSocialHidden] = useState(false);

  return (
    <>
      {/* Certification badges */}
      <div className={`float-banner float-certs${certsHidden ? ' hidden' : ''}`}>
        <button className="fb-close" onClick={() => setCertsHidden(true)} aria-label="Close">×</button>
        <div className="cert-badge" title="ISO/IEC 27001 — Information Security Management">
          <div className="cert-icon">
            <img src="/assets/iso-27001-logo.png" alt="ISO 27001 certified" loading="lazy" />
          </div>
          <div className="cert-text">
            <span className="cert-line1">Certified</span>
            <span className="cert-line2">27001</span>
          </div>
        </div>
        <div className="cert-badge" title="MSME — Ministry of Micro, Small & Medium Enterprises, Government of India">
          <div className="cert-icon">
            <img src="/assets/msme-logo.png" alt="MSME registered" loading="lazy" />
          </div>
          <div className="cert-text">
            <span className="cert-line1">MSME Registered</span>
            <span className="cert-line2">Govt. of India</span>
          </div>
        </div>
      </div>

      {/* Social links */}
      <div className={`float-banner float-social${socialHidden ? ' hidden' : ''}`}>
        <button className="fb-close" onClick={() => setSocialHidden(true)} aria-label="Close">×</button>
        <a href="https://www.linkedin.com/company/goolkai" target="_blank" rel="noopener noreferrer" className="social-icon linkedin" title="LinkedIn" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </a>
        <a href="https://x.com/goolkaiAI" target="_blank" rel="noopener noreferrer" className="social-icon twitter" title="X (Twitter)" aria-label="X">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a>
        <a href="mailto:goolk.ai.startup@gmail.com" className="social-icon email" title="Email · goolk.ai.startup@gmail.com" aria-label="Email">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        </a>
      </div>

      {/* Persistent WhatsApp Widget (Mobile-first) */}
      <a href="https://wa.me/918884235771" target="_blank" rel="noopener noreferrer" className="whatsapp-widget" title="Chat on WhatsApp">
        <span className="whatsapp-tooltip">Chat with our founders</span>
        <div className="whatsapp-btn">
          <div className="whatsapp-pulse" />
          <svg viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
          </svg>
        </div>
      </a>
    </>
  );
}
