import React, { useRef, useEffect, useCallback } from 'react';

export default function Hero() {
  const markRef = useRef(null);
  const logoRef = useRef(null);
  const orbRef = useRef(null);

  const coordsRef = useRef({
    targetX: 0,
    targetY: 0,
    currentX: 0,
    currentY: 0,
    rafId: null
  });

  const updateIdentity = useCallback(() => {
    const coords = coordsRef.current;
    coords.currentX += (coords.targetX - coords.currentX) * 0.12;
    coords.currentY += (coords.targetY - coords.currentY) * 0.12;

    const rotateY = coords.currentX * 9;
    const rotateX = -coords.currentY * 7;

    if (markRef.current) {
      markRef.current.style.transform = `rotateX(${rotateX * 0.35}deg) rotateY(${rotateY * 0.35}deg)`;
    }
    if (logoRef.current) {
      logoRef.current.style.transform = `translate3d(${coords.currentX * 10}px,${coords.currentY * 8}px,18px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.025)`;
    }
    if (orbRef.current) {
      orbRef.current.style.transform = `translate3d(${coords.currentX * -8}px,${coords.currentY * -6}px,-20px)`;
    }

    if (Math.abs(coords.targetX - coords.currentX) > 0.001 || Math.abs(coords.targetY - coords.currentY) > 0.001) {
      coords.rafId = requestAnimationFrame(updateIdentity);
    } else {
      coords.rafId = null;
    }
  }, []);

  const handlePointerMove = (event) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !markRef.current) {
      return;
    }
    const rect = markRef.current.getBoundingClientRect();
    const coords = coordsRef.current;
    coords.targetX = Math.max(-1, Math.min(1, (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)));
    coords.targetY = Math.max(-1, Math.min(1, (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)));
    markRef.current.classList.add('is-hovered');

    if (!coords.rafId) {
      coords.rafId = requestAnimationFrame(updateIdentity);
    }
  };

  const handlePointerLeave = () => {
    const coords = coordsRef.current;
    coords.targetX = 0;
    coords.targetY = 0;
    if (markRef.current) {
      markRef.current.classList.remove('is-hovered');
    }
    if (!coords.rafId) {
      coords.rafId = requestAnimationFrame(updateIdentity);
    }
  };

  useEffect(() => {
    return () => {
      if (coordsRef.current.rafId) {
        cancelAnimationFrame(coordsRef.current.rafId);
      }
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow animate-slide-up" style={{ animationDelay: '0.1s' }}>NIT JALANDHAR • ESPORTS CLUB</p>
        <h1 className="hero-title-anim">
          <span className="cyber-text delay-1">RISE.</span>
          <span className="cyber-text delay-2 glitch" data-text="DOMINATE.">DOMINATE.</span>
          <span className="cyber-text delay-3">ASCEND.</span>
        </h1>
        <p className="lead animate-slide-up" style={{ animationDelay: '0.4s' }}>The ultimate proving ground for collegiate gamers. Join the elite ranks, showcase your skills, and cement your legacy in the campus esports arena.</p>
        <div className="actions animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <a className="btn primary" href="#events">Explore Events <span>↗</span></a>
          <a className="btn ghost" href="#about">Meet VORTEX</a>
        </div>
      </div>
      <div 
        className="hero-mark" 
        ref={markRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        <div className="orb" ref={orbRef}></div>
        <img ref={logoRef} src="assets/vortex-logo.jpg" alt="VORTEX skull emblem" />
      </div>
      <div className="hero-grid"></div>
    </section>
  );
}
