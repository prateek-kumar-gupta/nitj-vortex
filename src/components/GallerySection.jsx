import React, { useState, useEffect, useRef, useCallback } from 'react';

const animPhotos = [
  { id: 1, src: '/anim-gallery/IMG_7789.jpg' },
  { id: 2, src: '/anim-gallery/IMG_1721.jpg' },
  { id: 3, src: '/anim-gallery/jiogames_day3_3.jpg' },
  { id: 4, src: '/anim-gallery/IMG_1418.jpg' },
  { id: 5, src: '/anim-gallery/IMG-20260828-WA0034.jpeg' },
  { id: 6, src: '/anim-gallery/IMG_3319.jpg' },
  { id: 7, src: '/anim-gallery/IMG_5304_SnapseedCopy.jpg' },
  { id: 8, src: '/anim-gallery/b8fb6ef2-2c75-4748-8f72-a5ea4e7587de.jpg' },
  { id: 9, src: '/anim-gallery/jiogames_mediaa_divyanshu.JPG' },
  { id: 10, src: '/anim-gallery/img.jpg' }
];

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState('next');
  const touchStartX = useRef(null);
  const heroRef = useRef(null);
  const glareRef = useRef(null);

  const total = animPhotos.length;

  const nextSlide = useCallback(() => {
    setDirection('next');
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setDirection('prev');
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Autoplay rotation every 4.2 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 4200);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Preload adjacent images
  useEffect(() => {
    const nextIdx = (currentIndex + 1) % total;
    const prevIdx = (currentIndex - 1 + total) % total;
    const img1 = new Image();
    img1.src = animPhotos[nextIdx].src;
    const img2 = new Image();
    img2.src = animPhotos[prevIdx].src;
  }, [currentIndex, total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch swipe support
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 45) nextSlide();
    else if (diff < -45) prevSlide();
    touchStartX.current = null;
  };

  // Crazy 3D Mouse Tilt Effect
  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Intense 3D rotation
    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;
    
    heroRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    
    if (glareRef.current) {
      const percentageX = (x / rect.width) * 100;
      const percentageY = (y / rect.height) * 100;
      glareRef.current.style.background = `radial-gradient(circle at ${percentageX}% ${percentageY}%, rgba(255, 45, 38, 0.4) 0%, transparent 60%)`;
      glareRef.current.style.opacity = 1;
    }
  };

  const handleMouseLeave = () => {
    if (!heroRef.current) return;
    heroRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    if (glareRef.current) glareRef.current.style.opacity = 0;
  };

  // Helper to get circular relative indices
  const getPhoto = (offset) => {
    const idx = (currentIndex + offset + total) % total;
    return animPhotos[idx];
  };

  const currentPhoto = animPhotos[currentIndex];
  const prevPhoto = getPhoto(-1);
  const nextPhoto = getPhoto(1);

  return (
    <section id="gallery" className="gallery-section cinematic-gallery">
      <div className="section-header">
        <p className="eyebrow">VISUAL ARCHIVE</p>
        <h2>The Gallery</h2>
      </div>

      <div 
        className="cinematic-stage-wrap"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Dynamic Ambient Background Aura */}
        <div 
          className="stage-ambient-aura"
          style={{ backgroundImage: `url('${currentPhoto.src}')` }}
        ></div>

        {/* 3D Curved Gallery Horizon */}
        <div className="cinematic-stage">
          {/* Left Preview Card */}
          <div 
            className="horizon-card horizon-prev"
            onClick={prevSlide}
            aria-hidden="true"
          >
            <img 
              src={prevPhoto.src} 
              alt="Previous capture" 
              loading="eager" 
            />
          </div>

          {/* Active Center Hero Card with Crazy 3D Tilt */}
          <div 
            className={`hero-showcase-frame slide-${direction}`}
            key={currentIndex}
            ref={heroRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transition: 'transform 0.1s ease-out', willChange: 'transform', transformStyle: 'preserve-3d' }}
          >
            <div ref={glareRef} style={{ position: 'absolute', inset: 0, zIndex: 10, pointerEvents: 'none', opacity: 0, transition: 'opacity 0.3s', mixBlendMode: 'screen' }}></div>
            <div className="hero-img-shell" style={{ transformStyle: 'preserve-3d' }}>
              <img 
                src={currentPhoto.src} 
                alt={`VORTEX capture ${currentIndex + 1}`} 
                className="hero-full-img"
                loading="eager"
                style={{ transform: 'translateZ(20px)' }}
              />
              {/* Tech Corner Brackets */}
              <div className="hero-bracket top-left"></div>
              <div className="hero-bracket top-right"></div>
              <div className="hero-bracket bottom-left"></div>
              <div className="hero-bracket bottom-right"></div>
            </div>
          </div>

          {/* Right Preview Card */}
          <div 
            className="horizon-card horizon-next"
            onClick={nextSlide}
            aria-hidden="true"
          >
            <img 
              src={nextPhoto.src} 
              alt="Next capture" 
              loading="eager" 
            />
          </div>
        </div>

        {/* Sleek Navigation Arrows */}
        <button 
          type="button"
          className="stage-nav-btn prev"
          onClick={prevSlide}
          aria-label="Previous photo"
        >
          ←
        </button>
        <button 
          type="button"
          className="stage-nav-btn next"
          onClick={nextSlide}
          aria-label="Next photo"
        >
          →
        </button>

        {/* Cyber Progress Indicator Bar & Dots */}
        <div className="stage-footer-nav">
          <div className="stage-bars">
            {animPhotos.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`stage-bar ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => {
                  setDirection(idx > currentIndex ? 'next' : 'prev');
                  setCurrentIndex(idx);
                }}
                aria-label={`Go to photo ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
