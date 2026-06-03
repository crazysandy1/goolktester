import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-top">
        <div>
          <div className="footer-logo">
            <Image src="/logo.png" alt="Goolkai AI logo" width={32} height={32} style={{ objectFit: 'contain', flexShrink: 0, mixBlendMode: 'screen' }} />
            Goolkai<span></span>
          </div>
          <p className="footer-desc">
            End-to-end digital healthcare solutions for hospitals, clinic chains, and healthcare networks across India.
          </p>
          <p className="footer-tagline">Built in India · Designed for Scale</p>
        </div>

        <div className="footer-col">
          <h5>Platform</h5>
          <Link href="/solutions">Hospital Management</Link>
          <Link href="/solutions">Telemedicine</Link>
          <Link href="/solutions">Clinical AI</Link>
          <Link href="/solutions">Patient Engagement</Link>
          <Link href="/solutions">Revenue Cycle</Link>
        </div>

        <div className="footer-col">
          <h5>Company</h5>
          <Link href="/about">About Us</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy Policy</Link>
        </div>

        <div className="footer-col">
          <h5>Get in Touch</h5>
          <a href="mailto:partnerships@goolkai.com">partnerships@goolkai.com</a>
          <a href="mailto:tech@goolkai.com">tech@goolkai.com</a>
          <a href="https://www.linkedin.com/company/goolkai" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://x.com/goolkaiAI" target="_blank" rel="noopener noreferrer">X / Twitter</a>
          <a href="https://wa.link/yd0l5p" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {year} Goolkai AI Technologies Pvt. Ltd. All rights reserved.</span>
        <span>CIN U62013KA2021PTC151234 · MSME Registered</span>
      </div>
    </footer>
  );
}
