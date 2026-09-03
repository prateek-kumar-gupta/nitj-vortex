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
          <p className="modal-kicker">NEXT VORTEX EVENT</p>
          <h2 id="upcomingTitle">THE NEXT<br /><span>CHALLENGE.</span></h2>
          <p>Official event details will be announced soon.</p>
        </div>
        <div className="upcoming-hero">
          <div className="upcoming-hero-grid"></div>
          <div className="upcoming-hero-copy">
            <span>COMING SOON</span>
            <strong>GET READY.</strong>
          </div>
        </div>
        <div className="upcoming-details-grid">
          <div><span>DATE</span><strong>TO BE ANNOUNCED</strong></div>
          <div><span>VENUE</span><strong>NIT JALANDHAR</strong></div>
          <div><span>GAME</span><strong>TO BE ANNOUNCED</strong></div>
          <div><span>PRIZE POOL</span><strong>TO BE ANNOUNCED</strong></div>
        </div>
        <div className="upcoming-modal-bottom">
          <div>
            <p className="content-kicker">WHAT TO EXPECT</p>
            <p>
              Competitive gaming, campus energy and another VORTEX experience. Follow the club for the official announcement, registration link and full event details.
            </p>
          </div>
          <a 
            className="btn primary" 
            href="https://www.instagram.com/nitj.esportsclub/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            FOLLOW VORTEX ↗
          </a>
        </div>
      </div>
    </div>
  );
}
