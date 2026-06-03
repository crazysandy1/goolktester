'use client';
import { useEffect } from 'react';

/**
 * Observe all elements with class "fade-up" and add "visible"
 * once they enter the viewport.
 */
export function useFadeUp() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: '0px' }
    );
    document.querySelectorAll('.fade-up').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}
