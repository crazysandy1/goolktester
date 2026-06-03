'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-top">
        <div>
          <div className="footer-logo">
            <Image
              src="/logo.png" alt="Goolk AI"
              width={30} height={30}
              style={{ objectFit: 'contain', flexShrink: 0, borderRadius: '50%' }}
            />
            Goolk<span className="footer-logo-accent">AI</span>
          </div>
          <p className="footer-desc">
            Healthcare IT consultancy delivering clinical strategy, EHR integration, hospital software development, and AI-powered medical applications. Trusted across 3+ countries.
          </p>
          <p className="footer-tagline">Innovate Faster · Integrate Smarter · Scale Securely</p>
          <div style={{ marginTop: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <a href="mailto:goolk.ai.startup@gmail.com"
              style={{ fontSize: '0.8rem', color: 'oklch(58% 0.014 155)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'oklch(80% 0.010 155)'}
              onMouseLeave={e => e.currentTarget.style.color = 'oklch(58% 0.014 155)'}>
              goolk.ai.startup@gmail.com
            </a>
            <a href="https://wa.me/918884235771" target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '0.8rem', color: 'oklch(58% 0.014 155)', textDecoration: 'none', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
              onMouseEnter={e => e.currentTarget.style.color = '#25d366'}
              onMouseLeave={e => e.currentTarget.style.color = 'oklch(58% 0.014 155)'}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.5 1.5A10 10 0 001.5 11.5c0 1.7.43 3.3 1.19 4.69L1.5 22.5l6.47-1.17A10 10 0 1011.5 1.5z"/></svg>
              +91 8884235771 · WhatsApp
            </a>
            <span style={{ fontSize: '0.8rem', color: 'oklch(44% 0.012 155)' }}>
              Bangalore, Karnataka, India
            </span>
          </div>
        </div>

        <div className="footer-col">
          <h5>Services &amp; Solutions</h5>
          <Link href="/services#strategy">Clinical IT Strategy</Link>
          <Link href="/services#development">Healthcare Software Dev</Link>
          <Link href="/services#adoption">Implementation &amp; Adoption</Link>
          <Link href="/solutions#his">Hospital Solutions (HIS)</Link>
          <Link href="/solutions#integration">Systems Integration</Link>
          <Link href="/services#ai-apps">Clinical AI Applications</Link>
        </div>

        <div className="footer-col">
          <h5>Company</h5>
          <Link href="/about">About Us</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy Policy</Link>
        </div>

        <div className="footer-col">
          <h5>Get in Touch</h5>
          <a href="mailto:goolk.ai.startup@gmail.com">Partnerships &amp; Sales</a>
          <a href="mailto:goolk.ai.startup@gmail.com">Technical Inquiries</a>
          <a href="https://wa.me/918884235771" target="_blank" rel="noopener noreferrer">WhatsApp Direct</a>
          <a href="tel:+918884235771">+91 8884235771</a>
          <a href="https://www.linkedin.com/company/goolkai" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {year} Goolk AI Technologies Pvt. Ltd. · Bangalore, Karnataka, India · All rights reserved.</span>
        <div className="footer-compliance">
          <span className="footer-badge">HIPAA Aligned</span>
          <span className="footer-badge">DPDP 2023</span>
          <span className="footer-badge">HL7 FHIR R4</span>
          <span className="footer-badge">ABDM Ready</span>
          <Link href="/privacy"
            style={{ fontSize: '0.75rem', color: 'oklch(50% 0.012 155)', textDecoration: 'none', marginLeft: '0.5rem', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'oklch(70% 0.010 155)'}
            onMouseLeave={e => e.currentTarget.style.color = 'oklch(50% 0.012 155)'}>
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
