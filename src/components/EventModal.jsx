import React, { useState, useEffect, useRef } from 'react';

export default function EventModal({ eventIndex, events, onClose, onChangeEvent }) {
  const isOpen = eventIndex !== null && eventIndex >= 0 && eventIndex < events.length;
  const currentEvent = isOpen ? events[eventIndex] : null;

  const [expandedWinner, setExpandedWinner] = useState(null);

  const modalRef = useRef(null);
  const closeBtnRef = useRef(null);
  const highlightsTrackRef = useRef(null);

  // Reset expanded winner when event changes
  useEffect(() => {
    setExpandedWinner(null);
  }, [eventIndex]);

  useEffect(() => {
    if (!isOpen) return;

    document.body.classList.add('modal-open');
    if (modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
    closeBtnRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (expandedWinner) {
          setExpandedWinner(null);
        } else {
          onClose();
        }
      } else if (!expandedWinner && e.key === 'ArrowRight') {
        onChangeEvent((eventIndex + 1) % events.length);
      } else if (!expandedWinner && e.key === 'ArrowLeft') {
        onChangeEvent((eventIndex - 1 + events.length) % events.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, eventIndex, events.length, onClose, onChangeEvent, expandedWinner]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const scrollHighlights = (dir) => {
    if (!highlightsTrackRef.current) return;
    const distance = 360;
    highlightsTrackRef.current.scrollBy({
      left: dir === 'left' ? -distance : distance,
      behavior: 'smooth'
    });
  };

  if (!isOpen || !currentEvent) {
    return (
      <div className="event-overlay" aria-hidden="true"></div>
    );
  }

  const hasPositions = currentEvent.positions && currentEvent.positions.length > 0;
  const hasHighlights = currentEvent.highlights && currentEvent.highlights.length > 0;

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
            src={currentEvent.poster || `/assets/${currentEvent.slug}.jpg`} 
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

        <div className={`modal-content ${!hasPositions ? 'no-winners-content' : ''}`}>
          <div className="about-block">
            <p className="content-kicker">ABOUT THE EVENT</p>
            <p>{currentEvent.description}</p>
            <div className="meta-pills">
              <span>{currentEvent.tag}</span>
              {currentEvent.participants && <span>{currentEvent.participants} PARTICIPANTS</span>}
            </div>
          </div>

          {/* Render winners/positions ONLY if event has a positions folder */}
          {hasPositions && (
            <div className="winner-block">
              <div className="winner-heading">
                <p className="content-kicker">POSITIONS</p>
              </div>
              <div className="winners winners-positions-only">
                {currentEvent.positions.map((w, idx) => (
                  <div 
                    className="winner winner-pos-card" 
                    key={idx}
                    onClick={() => setExpandedWinner(w)}
                    title="Click to view full photo"
                  >
                    <div className="winner-img-wrap">
                      <img src={w.image} alt={w.place} loading="lazy" />
                    </div>
                    <span className="winner-pos-badge">{w.place}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Scrollable Event Highlights Section */}
        {hasHighlights && (
          <div className="gallery highlights-scrollable-section">
            <div className="gallery-heading highlights-heading-bar">
              <div>
                <p className="content-kicker">EVENT HIGHLIGHTS</p>
                <span className="highlights-count-tag">{currentEvent.highlights.length} MOMENTS</span>
              </div>
              <div className="highlights-nav-arrows">
                <button 
                  type="button" 
                  className="highlights-arrow-btn" 
                  onClick={() => scrollHighlights('left')}
                  aria-label="Previous photos"
                >
                  ←
                </button>
                <button 
                  type="button" 
                  className="highlights-arrow-btn" 
                  onClick={() => scrollHighlights('right')}
                  aria-label="Next photos"
                >
                  →
                </button>
              </div>
            </div>

            <div className="highlights-scroll-track" ref={highlightsTrackRef}>
              {currentEvent.highlights.map((imgSrc, n) => (
                <div className="highlight-item-card" key={n}>
                  <img 
                    src={imgSrc} 
                    alt={`${currentEvent.title} highlight ${n + 1}`} 
                    loading="lazy"
                    onError={(e) => {
                      if (!e.target.dataset.retried) {
                        e.target.dataset.retried = 'true';
                        e.target.src = imgSrc.startsWith('/') ? imgSrc : `/${imgSrc}`;
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Fullscreen Expandable Winner Lightbox */}
        {expandedWinner && (
          <div 
            className="winner-lightbox-overlay"
            onClick={() => setExpandedWinner(null)}
          >
            <div 
              className="winner-lightbox-shell" 
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                type="button"
                className="winner-lightbox-close"
                onClick={() => setExpandedWinner(null)}
                aria-label="Close photo"
              >
                ×
              </button>
              <img 
                src={expandedWinner.image} 
                alt={expandedWinner.place} 
                className="winner-lightbox-img" 
              />
              <div className="winner-lightbox-tag">
                {expandedWinner.place}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
