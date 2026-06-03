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
      background: 'var(--dark)',
      padding: '5vw',
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center',
    }}>
      {/* Grid background */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.015, pointerEvents: 'none',
        backgroundImage: 'repeating-linear-gradient(0deg, var(--brand) 0 1px, transparent 1px 72px), repeating-linear-gradient(90deg, var(--brand) 0 1px, transparent 1px 72px)'
      }} />
      <div style={{
        position: 'absolute', top: -120, right: -120, width: 480, height: 480,
        borderRadius: '50%', background: 'radial-gradient(circle, var(--brand) 0%, transparent 70%)',
        pointerEvents: 'none', opacity: 0.08
      }} />

      <div style={{
        position: 'relative', zIndex: 1,
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
        maxWidth: 560,
      }}>
        <div style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(6rem, 18vw, 11rem)',
          fontWeight: 800,
          lineHeight: 1,
          letterSpacing: '-0.05em',
          color: 'transparent',
          backgroundImage: 'linear-gradient(135deg, var(--brand) 0%, var(--brand-mid) 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          marginBottom: '0.5rem',
          userSelect: 'none',
        }}>
          404
        </div>

        <span style={{
          display: 'inline-block',
          fontSize: '0.72rem', fontWeight: 700,
          color: 'var(--brand-mid)', background: 'var(--dark-surface)',
          padding: '4px 14px', borderRadius: 6,
          textTransform: 'uppercase', letterSpacing: '0.08em',
          marginBottom: '1.5rem', border: '1px solid var(--dark-border)',
        }}>
          Page not found
        </span>

        <h1 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
          fontWeight: 800, lineHeight: 1.2,
          letterSpacing: '-0.025em',
          color: '#fff', marginBottom: '1rem',
        }}>
          This page doesn&apos;t exist.
        </h1>

        <p style={{
          fontSize: '1rem', color: 'var(--ink-faint)',
          lineHeight: 1.75, marginBottom: '2.5rem',
          maxWidth: 420, margin: '0 auto 2.5rem',
        }}>
          The page you&apos;re looking for may have moved or been removed. Let&apos;s get you back on track.
        </p>

        <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3rem' }}>
          <Link href="/" className="btn-primary">← Back to Home</Link>
          <Link href="/contact" className="btn-ghost">Contact Us</Link>
        </div>

        {/* Quick links */}
        <div style={{
          background: 'var(--dark-surface)',
          border: '1px solid var(--dark-border)',
          borderRadius: 12, padding: '1.5rem 1.75rem',
        }}>
          <p style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--ink-faint)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
            Popular pages
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
            {[
              { href: '/solutions', label: 'Our Platform' },
              { href: '/about', label: 'About Us' },
              { href: '/case-studies', label: 'Case Studies' },
              { href: '/careers', label: 'Careers' },
            ].map(link => (
              <Link key={link.href} href={link.href} style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.6rem 0.875rem', borderRadius: 8,
                background: 'var(--dark-mid)',
                border: '1px solid var(--dark-border)',
                textDecoration: 'none',
                fontSize: '0.86rem', fontWeight: 500, color: 'var(--ink-faint)',
                transition: 'background 0.15s, color 0.15s, border-color 0.15s',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--brand-light)';
                  e.currentTarget.style.color = 'var(--brand)';
                  e.currentTarget.style.borderColor = 'var(--brand-mid)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'var(--dark-mid)';
                  e.currentTarget.style.color = 'var(--ink-faint)';
                  e.currentTarget.style.borderColor = 'var(--dark-border)';
                }}
              >
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--brand-mid)', flexShrink: 0 }} />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
