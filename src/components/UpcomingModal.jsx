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
          <h2 id="upcomingTitle">THE NEXT<br /><span>CHALLENGE</span></h2>
          <p>Get ready for our next gaming tournaments and campus events.</p>
        </div>
        <div className="upcoming-hero" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#111', padding: '40px' }}>
          <img 
            src="/assets/vortex-logo.jpg" 
            alt="VORTEX Esports"
            style={{ width: '160px', height: '160px', borderRadius: '50%', objectFit: 'cover' }}
          />
        </div>
        <div className="upcoming-details-grid">
          <div><span>DATE</span><strong>TO BE ANNOUNCED</strong></div>
          <div><span>VENUE</span><strong>NIT JALANDHAR</strong></div>
          <div><span>GAME</span><strong>TBA</strong></div>
          <div><span>STATUS</span><strong>COMING SOON</strong></div>
        </div>
        <div className="upcoming-modal-bottom">
          <div>
            <p className="content-kicker">WHAT TO EXPECT</p>
            <p>
              Competitive gaming, electrifying campus energy, and another unforgettable VORTEX showdown. Follow our official channels to be the first to know when registrations go live!
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
