'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const SERVICES_ITEMS = [
  { href: '/services#strategy', label: 'Clinical IT Strategy & Advisory', desc: 'EHR roadmaps, IT governance, and digital transformation planning' },
  { href: '/services#development', label: 'Healthcare Software Development', desc: 'Custom clinical apps, patient portals, and workflow automation' },
  { href: '/services#adoption', label: 'Implementation & Change Management', desc: 'Structured deployment with clinical adoption frameworks' },
  { href: '/services#ai-apps', label: 'AI-Powered Medical Applications', desc: 'Clinical decision support, diagnostics AI, and predictive analytics' },
];

const SOLUTIONS_ITEMS = [
  { href: '/solutions#his', label: 'Hospital Solutions', desc: 'Full-stack HIS, EHR, and operational intelligence for health systems' },
  { href: '/solutions#integration', label: 'Medical Device Implementation', desc: 'Device integration, data pipelines, and IoMT connectivity' },
  { href: '/solutions#patient', label: 'Innovation Lab', desc: 'R&D partnerships, KiaoM rural kiosk, and emerging tech pilots' },
  { href: '/solutions#ai', label: 'AI Agents for Healthcare', desc: 'Autonomous clinical workflows, scheduling AI, and care coordination bots' },
];

const COMPANY_ITEMS = [
  { href: '/about', label: 'About Goolk AI', desc: 'Our mission, vision, and the team behind the work' },
  { href: '/case-studies', label: 'Case Studies', desc: 'Real implementations. Measurable clinical outcomes.' },
  { href: '/insights', label: 'Insights', desc: 'Healthcare IT thinking from practitioners, not pundits' },
  { href: '/careers', label: 'Careers', desc: 'Join a team building the future of healthcare IT' },
];

const CHEVRON = (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M6 9l6 6 6-6"/>
  </svg>
);

const ICON_PATHS = {
  'Clinical IT Strategy & Advisory':     'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 12l2 2 4-4',
  'Healthcare Software Development':      'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  'Implementation & Change Management':   'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
  'AI-Powered Medical Applications':      'M12 2l1.8 7.2L21 12l-7.2 1.8L12 21l-1.8-7.2L3 12l7.2-1.8z',
  'Hospital Solutions':                   'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2zM9 22V12h6v10',
  'Medical Device Implementation':        'M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v11m0 0H5a2 2 0 00-2 2v4a2 2 0 002 2h4m0-6h10a2 2 0 012 2v4a2 2 0 01-2 2H9m0 0V14',
  'Innovation Lab':                       'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
  'AI Agents for Healthcare':             'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v3',
  'About Goolk AI':                       'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  'Case Studies':                         'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
  'Insights':                             'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  'Careers':                              'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
};

function DropdownIcon({ label }) {
  return (
    <div className="nav-dd-icon">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d={ICON_PATHS[label] || 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z'} />
      </svg>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();
  const closeTimer = useRef(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => { setOpen(false); setActiveDropdown(null); }, [pathname]);

  const openMenu = useCallback((key) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(key);
  }, []);

  const closeMenu = useCallback(() => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 130);
  }, []);

  const stayOpen = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  return (
    <>
      {/* Top info bar */}
      <div className="nav-top-bar">
        <span className="nav-top-bar-text">
          <strong>20+ Healthcare Implementations · 3+ Countries</strong>
          <span style={{ opacity: 0.5 }}>·</span>
          HIPAA · DPDP · HL7 FHIR Certified
        </span>
        <a href="mailto:goolk.ai.startup@gmail.com" className="nav-top-bar-link">
          goolk.ai.startup@gmail.com →
        </a>
      </div>

      <nav className={scrolled ? 'scrolled' : ''}>
        <Link href="/" className="nav-logo" aria-label="Goolk AI home">
          <Image
            src="/logo.png" alt="Goolk AI"
            width={36} height={36} priority
            style={{ objectFit: 'contain', borderRadius: '50%', display: 'block', flexShrink: 0 }}
          />
          Goolk<span className="nav-logo-accent">AI</span>
        </Link>

        {/* Desktop nav */}
        <ul className="nav-center">
          {/* Services */}
          <li className="nav-item"
            onMouseEnter={() => openMenu('services')}
            onMouseLeave={closeMenu}>
            <button className={`nav-trigger${activeDropdown === 'services' ? ' open' : ''}`}>
              Services {CHEVRON}
            </button>
            {activeDropdown === 'services' && (
              <div className="nav-dropdown" style={{ minWidth: 600 }} onMouseEnter={stayOpen} onMouseLeave={closeMenu}>
                <div className="nav-dropdown-cols">
                  <div className="nav-dropdown-group">
                    <div className="nav-dropdown-group-label">Consulting</div>
                    {SERVICES_ITEMS.slice(0, 2).map(item => (
                      <Link key={item.label} href={item.href} className="nav-dropdown-link">
                        <DropdownIcon label={item.label} />
                        <div className="nav-dd-text">
                          <div className="nav-dd-title">{item.label}</div>
                          <div className="nav-dd-desc">{item.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="nav-dropdown-group">
                    <div className="nav-dropdown-group-label">Technology</div>
                    {SERVICES_ITEMS.slice(2).map(item => (
                      <Link key={item.label} href={item.href} className="nav-dropdown-link">
                        <DropdownIcon label={item.label} />
                        <div className="nav-dd-text">
                          <div className="nav-dd-title">{item.label}</div>
                          <div className="nav-dd-desc">{item.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </li>

          {/* Solutions */}
          <li className="nav-item"
            onMouseEnter={() => openMenu('solutions')}
            onMouseLeave={closeMenu}>
            <button className={`nav-trigger${activeDropdown === 'solutions' ? ' open' : ''}`}>
              Solutions {CHEVRON}
            </button>
            {activeDropdown === 'solutions' && (
              <div className="nav-dropdown" style={{ minWidth: 560 }} onMouseEnter={stayOpen} onMouseLeave={closeMenu}>
                <div className="nav-dropdown-cols">
                  {SOLUTIONS_ITEMS.map(item => (
                    <Link key={item.label} href={item.href} className="nav-dropdown-link">
                      <DropdownIcon label={item.label} />
                      <div className="nav-dd-text">
                        <div className="nav-dd-title">{item.label}</div>
                        <div className="nav-dd-desc">{item.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>

          {/* Company */}
          <li className="nav-item"
            onMouseEnter={() => openMenu('company')}
            onMouseLeave={closeMenu}>
            <button className={`nav-trigger${activeDropdown === 'company' ? ' open' : ''}`}>
              Company {CHEVRON}
            </button>
            {activeDropdown === 'company' && (
              <div className="nav-dropdown" style={{ minWidth: 360 }} onMouseEnter={stayOpen} onMouseLeave={closeMenu}>
                <div className="nav-dropdown-group">
                  {COMPANY_ITEMS.map(item => (
                    <Link key={item.label} href={item.href} className="nav-dropdown-link">
                      <DropdownIcon label={item.label} />
                      <div className="nav-dd-text">
                        <div className="nav-dd-title">{item.label}</div>
                        <div className="nav-dd-desc">{item.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>

          <li>
            <Link href="/contact" className="nav-plain-link">Contact</Link>
          </li>
        </ul>

        <div className="nav-right">
          <Link href="/contact" className="nav-cta">Get a Free Assessment →</Link>
          <button
            className="hamburger"
            onClick={() => setOpen(p => !p)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span style={open ? { transform: 'rotate(45deg) translate(5px, 5px)' } : undefined} />
            <span style={open ? { opacity: 0 } : undefined} />
            <span style={open ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : undefined} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mob-menu${open ? ' open' : ''}`}>
        <div className="mob-group-label">Services</div>
        {SERVICES_ITEMS.map(item => <Link key={item.label} href={item.href} onClick={() => setOpen(false)} className="mob-link">{item.label}</Link>)}

        <div className="mob-group-label">Solutions</div>
        {SOLUTIONS_ITEMS.map(item => <Link key={item.label} href={item.href} onClick={() => setOpen(false)} className="mob-link">{item.label}</Link>)}

        <div className="mob-group-label">Company</div>
        {COMPANY_ITEMS.map(item => <Link key={item.label} href={item.href} onClick={() => setOpen(false)} className="mob-link">{item.label}</Link>)}
        <Link href="/contact" onClick={() => setOpen(false)} className="mob-link">Contact</Link>

        <Link href="/contact" onClick={() => setOpen(false)} className="mob-cta">Get a Free Assessment →</Link>
      </div>
    </>
  );
}
