import React, { useRef, useState, useEffect } from 'react';

export default function EventsArchive({ events, onSelectEvent }) {
  const trackRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      setScrollProgress((scrollLeft / maxScroll) * 100);
    } else {
      setScrollProgress(0);
    }
  };

  const scroll = (direction) => {
    if (!trackRef.current) return;
    const scrollAmount = 405; // 385px card + 20px gap
    trackRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('resize', handleScroll);
    return () => window.removeEventListener('resize', handleScroll);
  }, [events.length]);

  const thumbWidth = Math.max(8, Math.round(100 / events.length));
  const maxLeft = 100 - thumbWidth;
  const thumbLeft = (scrollProgress / 100) * maxLeft;

  return (
    <section id="events" className="events-section">
      <div className="events-heading">
        <div>
          <h2>Previous Events</h2>
        </div>
        <p className="section-intro">
          Relive the battles, highlights and campus experiences that helped build VORTEX. Select an event to explore its full story.
        </p>
      </div>

      <div className="events-track-wrap">
        <button 
          className="scroll-btn left" 
          aria-label="Scroll events left"
          onClick={() => scroll('left')}
        >
          ←
        </button>
        
        <div className="events-track" ref={trackRef} onScroll={handleScroll}>
          {events.map((e, index) => (
            <article 
              key={e.slug || index}
              className="event-card" 
              tabIndex={0} 
              aria-label={`Open ${e.title}`}
              onClick={() => onSelectEvent(index)}
              onKeyDown={(evt) => {
                if (evt.key === 'Enter' || evt.key === ' ') {
                  evt.preventDefault();
                  onSelectEvent(index);
                }
              }}
            >
              <div 
                className="card-art" 
                style={{ backgroundImage: `url('${e.poster || `/assets/${e.slug}.jpg`}')` }}
              ></div>
              <div className="card-shade"></div>
              <div className="card-top">
                <span className="card-arrow">↗</span>
              </div>
              <div className="card-content">
                <div className="card-date">{e.date}</div>
                <h3>{e.title}</h3>
                <p>{e.subtitle}</p>
                <div className="card-cta">
                  EXPLORE EVENT <span>→</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <button 
          className="scroll-btn right" 
          aria-label="Scroll events right"
          onClick={() => scroll('right')}
        >
          →
        </button>
      </div>

      {/* Red Scroll Progress Indicator matching Achievements */}
      <div className="events-progress-container">
        <div className="events-progress-track">
          <div 
            className="events-progress-thumb" 
            style={{ 
              width: `${thumbWidth}%`, 
              left: `${thumbLeft}%` 
            }}
          ></div>
        </div>
        <span className="event-count">
          {String(events.length).padStart(2, '0')} EVENTS
        </span>
      </div>
    </section>
  );
}
