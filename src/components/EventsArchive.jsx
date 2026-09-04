import React, { useRef, useState } from 'react';

export default function EventsArchive({ events, onSelectEvent }) {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction) => {
    if (trackRef.current) {
      const scrollAmount = direction === 'left' ? -410 : 410;
      trackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScroll = (e) => {
    const track = e.target;
    if (!track.firstElementChild) return;
    const cardWidth = track.firstElementChild.getBoundingClientRect().width + 20;
    const index = Math.round(track.scrollLeft / cardWidth);
    if (index !== activeIndex && index >= 0 && index < events.length) {
      setActiveIndex(index);
    }
  };

  const scrollToEvent = (index) => {
    if (trackRef.current && trackRef.current.firstElementChild) {
      const cardWidth = trackRef.current.firstElementChild.getBoundingClientRect().width + 20;
      trackRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
    }
  };

  React.useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleNativeWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        track.scrollLeft += e.deltaY;
      }
    };

    track.addEventListener('wheel', handleNativeWheel, { passive: false });
    return () => {
      track.removeEventListener('wheel', handleNativeWheel);
    };
  }, []);

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
                <span className="card-number">
                  {e.number} / {String(events.length).padStart(2, '0')}
                </span>
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

      <div className="track-footer">
        <div className="scroll-dots">
          {events.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === activeIndex ? 'active' : ''}`}
              onClick={() => scrollToEvent(i)}
              aria-label={`Scroll to event ${i + 1}`}
            />
          ))}
        </div>
        <span className="event-count">
          {String(events.length).padStart(2, '0')} EVENTS
        </span>
      </div>
    </section>
  );
}
