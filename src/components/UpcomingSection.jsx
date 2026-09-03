import React from 'react';

export default function UpcomingSection({ onOpenUpcoming }) {
  return (
    <section id="upcoming" className="upcoming-section">
      <div className="upcoming-shell">
        <div className="upcoming-copy">
          <p className="eyebrow">WHAT'S NEXT</p>
          <h2>THE NEXT<br /><span>VORTEX</span></h2>
          <p className="section-intro">
            Stay ready. New tournaments, campus challenges and gaming experiences will appear here first.
          </p>
          <div className="upcoming-status">
            <i></i><span>UPCOMING EVENT • DETAILS SOON</span>
          </div>
        </div>
        <button 
          className="upcoming-card" 
          onClick={onOpenUpcoming}
          aria-label="Open upcoming event details"
        >
          <div className="upcoming-card-glow"></div>
          <div className="upcoming-card-top">
            <span>VORTEX / NEXT</span>
            <b>↗</b>
          </div>
          <div className="upcoming-card-body">
            <span className="coming">COMING SOON</span>
            <h3>THE NEXT<br />CHALLENGE</h3>
            <p>The next VORTEX event will be announced soon.</p>
          </div>
          <div className="upcoming-card-footer">
            <span>VIEW DETAILS</span>
            <span>01</span>
          </div>
        </button>
      </div>
    </section>
  );
}
