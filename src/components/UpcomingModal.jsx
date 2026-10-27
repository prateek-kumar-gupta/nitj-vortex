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
          <p className="modal-kicker">RED BULL × VORTEX NITJ</p>
          <h2 id="upcomingTitle">RED BULL<br /><span>WINGS CUP</span></h2>
          <p>NITJ, READY TO FLY?! EA SPORTS FC 27 Tournament — Live on Campus!</p>
        </div>
        <div className="upcoming-hero" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#0a0a0c' }}>
          <img 
            src="/assets/red-bull-wings-cup.jpg" 
            alt="Red Bull Wings Cup Poster"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>
        <div className="upcoming-details-grid">
          <div><span>DATE</span><strong>TODAY & TOMORROW (27–28 OCT)</strong></div>
          <div><span>VENUE</span><strong>NIT JALANDHAR</strong></div>
          <div><span>GAME</span><strong>EA SPORTS FC 27</strong></div>
          <div><span>REWARDS</span><strong>FREE RED BULL + JERSEY</strong></div>
        </div>
        <div className="upcoming-modal-bottom">
          <div>
            <p className="content-kicker">EVENT HIGHLIGHTS & PERKS</p>
            <p>
              🥤 <strong>Play EA SPORTS FC 27</strong> and get a <strong>FREE Red Bull can</strong>!<br />
              🏆 <strong>Highest scorer</strong> across both days wins an exclusive <strong>Red Bull WINGS CUP Jersey</strong>!<br />
              ⚠️ <strong>FIRST COME, FIRST SERVED!</strong> Pre-registered players get priority, so register early and secure your spot!
            </p>
          </div>
          <a 
            className="btn primary" 
            href="https://www.redbull.com/in-en/events/red-bull-wings-cup-india-2026/red-bull-wings-cup-india-university-league?checkin=01a177eb-2c2b-7374-ae88-eeff5ab19eed" 
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
