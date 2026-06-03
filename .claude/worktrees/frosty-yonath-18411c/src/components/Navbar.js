'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/solutions', label: 'Solutions' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav style={scrolled ? { boxShadow: '0 4px 20px oklch(20% 0.04 255 / 0.08)' } : undefined}>
        <Link href="/" className="nav-logo" aria-label="Goolkai AI home">
          <Image
            src="/logo.png"
            alt="Goolkai AI logo"
            width={40}
            height={40}
            priority
            style={{ objectFit: 'contain', display: 'block', flexShrink: 0, borderRadius: '50%' }}
          />
          Goolkai<span></span>
        </Link>

        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={pathname === l.href ? 'active' : ''}>
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contact" className="nav-cta">Book&nbsp;Demo</Link>
          </li>
        </ul>

        <button
          className="hamburger"
          onClick={() => setOpen((p) => !p)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span style={open ? { transform: 'rotate(45deg) translate(5px, 5px)' } : undefined} />
          <span style={open ? { opacity: 0 } : undefined} />
          <span style={open ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : undefined} />
        </button>
      </nav>

      <div className={`mob-menu${open ? ' open' : ''}`}>
        {links.map((l) => (
          <Link key={l.href} href={l.href}>
            {l.label}
          </Link>
        ))}
        <Link href="/contact" className="btn-primary" style={{ textAlign: 'center', marginTop: '0.5rem' }}>
          Book Demo →
        </Link>
      </div>
    </>
  );
}
