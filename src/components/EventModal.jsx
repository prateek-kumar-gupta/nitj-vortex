import React, { useEffect, useRef } from 'react';

export default function EventModal({ eventIndex, events, onClose, onChangeEvent }) {
  const isOpen = eventIndex !== null && eventIndex >= 0 && eventIndex < events.length;
  const currentEvent = isOpen ? events[eventIndex] : null;

  const modalRef = useRef(null);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    document.body.classList.add('modal-open');
    if (modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
    closeBtnRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onChangeEvent((eventIndex + 1) % events.length);
      } else if (e.key === 'ArrowLeft') {
        onChangeEvent((eventIndex - 1 + events.length) % events.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, eventIndex, events.length, onClose, onChangeEvent]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen || !currentEvent) {
    return (
      <div className="event-overlay" aria-hidden="true"></div>
    );
  }

  const galleryCaptions = ['EVENT COVER', 'CAMPUS MOMENT', 'ARCHIVE DETAIL'];
  const galleryPositions = ['center', '25% center', '75% center'];

  return (
    <div 
      className="event-overlay open" 
      aria-hidden="false"
      onClick={handleBackdropClick}
    >
      <div 
        className="event-modal" 
        ref={modalRef}
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="modalTitle"
      >
        <button 
          ref={closeBtnRef}
          className="close-btn" 
          aria-label="Close event details"
          onClick={onClose}
        >
          ×
        </button>

        <div className="modal-top">
          <div>
            <p className="modal-kicker">{currentEvent.kicker}</p>
            <h2 id="modalTitle">{currentEvent.title}</h2>
            <p className="modal-subtitle">{currentEvent.subtitle}</p>
          </div>
          <div className="modal-index">
            {currentEvent.number} / {String(events.length).padStart(2, '0')}
          </div>
        </div>

        <div className="modal-hero">
          <img 
            src={`assets/${currentEvent.slug}.jpg`} 
            alt={`${currentEvent.title} event cover`} 
          />
          <div className="hero-overlay"></div>
          <div className="hero-bottom">
            <span>{currentEvent.game}</span>
          </div>
        </div>

        <div className="details-grid">
          <div className="detail-item">
            <span>DATE</span>
            <strong>{currentEvent.date}</strong>
          </div>
          <div className="detail-item">
            <span>VENUE</span>
            <strong>{currentEvent.venue}</strong>
          </div>
          <div className="detail-item">
            <span>FORMAT</span>
            <strong>{currentEvent.format}</strong>
          </div>
          <div className="detail-item">
            <span>PRIZE POOL</span>
            <strong>{currentEvent.prize}</strong>
          </div>
        </div>

        <div className="modal-content">
          <div className="about-block">
            <p className="content-kicker">ABOUT THE EVENT</p>
            <p>{currentEvent.description}</p>
            <div className="meta-pills">
              <span>{currentEvent.tag}</span>
              {currentEvent.participants && <span>{currentEvent.participants} PARTICIPANTS</span>}
            </div>
          </div>

          <div className="winner-block">
            <div className="winner-heading">
              <p className="content-kicker">WINNERS</p>
              <span>DEMO DATA</span>
            </div>
            <div className="winners">
              {currentEvent.winners.map((w, idx) => {
                const place = w.place || w[0];
                const name = w.name || w[1];
                const img = w.image || (w[2]?.startsWith('assets/') ? w[2] : `assets/${w[2]}`);
                return (
                  <div className="winner" key={idx}>
                    <img src={img} alt={`Photo for ${name}`} />
                    <small>{place}</small>
                    <strong>{name}</strong>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="gallery">
          <div className="gallery-heading">
            <p className="content-kicker">EVENT HIGHLIGHTS</p>
          </div>
          <div className="gallery-grid">
            {[0, 1, 2].map((n) => (
              <figure key={n}>
                <img 
                  src={`assets/${currentEvent.slug}.jpg`} 
                  alt={`${currentEvent.title} highlight ${n + 1}`} 
                  style={{ objectPosition: galleryPositions[n] }}
                />
                <figcaption>{galleryCaptions[n]}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
