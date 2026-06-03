'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section style={{
      minHeight: '100svh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--cream)',
      padding: '5vw',
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center',
    }}>
      {/* Background blobs */}
      <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: 500, height: 500, borderRadius: '50%', background: 'var(--rose-light)', filter: 'blur(120px)', opacity: 0.5, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: 400, height: 400, borderRadius: '50%', background: 'var(--sage-light)', filter: 'blur(100px)', opacity: 0.6, pointerEvents: 'none' }} />

      <div style={{
        position: 'relative', zIndex: 1,
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
        maxWidth: 560,
      }}>
        {/* Big 404 */}
        <div style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(6rem, 18vw, 12rem)',
          fontWeight: 800,
          lineHeight: 1,
          letterSpacing: '-0.04em',
          color: 'transparent',
          backgroundImage: 'linear-gradient(135deg, var(--rose) 0%, oklch(55% 0.12 350) 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          marginBottom: '0.5rem',
          userSelect: 'none',
        }}>
          404
        </div>

        <span style={{
          display: 'inline-block',
          fontSize: '.78rem', fontWeight: 600,
          color: 'var(--rose)', background: 'var(--rose-light)',
          padding: '4px 14px', borderRadius: 100,
          textTransform: 'uppercase', letterSpacing: '.07em',
          marginBottom: '1.5rem',
        }}>
          Page not found
        </span>

        <h1 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
          fontWeight: 800, lineHeight: 1.2,
          letterSpacing: '-0.025em',
          color: 'var(--text)', marginBottom: '1rem',
        }}>
          This page doesn&apos;t exist.
        </h1>

        <p style={{
          fontSize: '1.05rem', color: 'var(--muted)',
          lineHeight: 1.75, marginBottom: '2.5rem',
          maxWidth: 440, margin: '0 auto 2.5rem',
        }}>
          The page you&apos;re looking for may have moved or been removed. Let&apos;s get you back on track.
        </p>

        {/* Quick links */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3rem' }}>
          <Link href="/" className="btn-primary">← Back to Home</Link>
          <Link href="/contact" className="btn-outline">Contact Us</Link>
        </div>

        {/* Helpful links */}
        <div style={{
          background: '#fff', borderRadius: 20, padding: '1.5rem 2rem',
          border: '1px solid var(--border)',
          boxShadow: '0 4px 24px oklch(20% 0.04 255/.06)',
        }}>
          <p style={{ fontSize: '.82rem', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '1rem' }}>
            Popular pages
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.5rem' }}>
            {[
              { href: '/solutions', label: 'Our Solutions' },
              { href: '/about', label: 'About Us' },
              { href: '/case-studies', label: 'Case Studies' },
              { href: '/careers', label: 'Careers' },
            ].map(link => (
              <Link key={link.href} href={link.href} style={{
                display: 'flex', alignItems: 'center', gap: '.5rem',
                padding: '.6rem .875rem', borderRadius: 10,
                background: 'var(--cream)', textDecoration: 'none',
                fontSize: '.875rem', fontWeight: 500, color: 'var(--text)',
                transition: 'background .2s, color .2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--rose-light)'; e.currentTarget.style.color = 'var(--rose)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--cream)'; e.currentTarget.style.color = 'var(--text)'; }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--rose)', flexShrink: 0 }} />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
