import React, { useEffect, useRef } from 'react';

export default function UpcomingModal({ isOpen, onClose }) {
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    document.body.classList.add('modal-open');
    closeBtnRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className={`upcoming-overlay ${isOpen ? 'open' : ''}`} 
      aria-hidden={!isOpen}
      onClick={handleBackdropClick}
    >
      <div 
        className="upcoming-modal" 
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="upcomingTitle"
      >
        <button 
          ref={closeBtnRef}
          className="close-btn" 
          aria-label="Close upcoming event details"
          onClick={onClose}
        >
          ×
        </button>
        <div className="upcoming-modal-top">
          <p className="modal-kicker">NIT JALANDHAR × FFM COMMUNITY INDIA</p>
          <h2 id="upcomingTitle">CAMPUS CUP<br /><span>SEASON 2</span></h2>
          <p>College Students & Outsiders can Participate in this Squad Battle Royal!</p>
        </div>
        <div className="upcoming-hero" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#111' }}>
          <img 
            src="/assets/campus-cup-s2.jpg" 
            alt="Campus Cup Season 2 Poster"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>
        <div className="upcoming-details-grid">
          <div><span>DATE</span><strong>15 SEP 2026</strong></div>
          <div><span>VENUE</span><strong>IT BUILDING, NIT JALANDHAR</strong></div>
          <div><span>GAME</span><strong>FREE FIRE MAX</strong></div>
          <div><span>PRIZE POOL</span><strong>₹5,000 + 15K DIAMONDS</strong></div>
        </div>
        <div className="upcoming-modal-bottom">
          <div>
            <p className="content-kicker">EVENT DETAILS</p>
            <p>
              Mode: Squad | Battle Royal. Get ready for an intense showdown at the IT Building. Register your squad now to secure your slot!
            </p>
          </div>
          <a 
            className="btn primary" 
            href="https://forms.gle/REXsdtEPqXh3fkMNA" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            REGISTER NOW ↗
          </a>
        </div>
      </div>
    </div>
  );
}
