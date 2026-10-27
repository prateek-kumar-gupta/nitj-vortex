import React from 'react';

export default function UpcomingSection({ onOpenUpcoming }) {
  return (
    <section id="upcoming" className="upcoming-section">
      <div className="upcoming-shell">
        <div className="upcoming-copy">
          <p className="eyebrow">WHAT'S NEXT</p>
          <h2>THE NEXT<br /><span>VORTEX</span></h2>
          <p className="section-intro">
            NITJ, ready to fly?! Red Bull Wings Cup is live on campus today and tomorrow. Play EA SPORTS FC 27, claim your free Red Bull can, and compete for the exclusive Wings Cup Jersey!
          </p>
          <div className="upcoming-status">
            <i></i><span>LIVE EVENT • 27–28 OCTOBER 2026</span>
          </div>
        </div>
        <button 
          className="upcoming-card" 
          onClick={onOpenUpcoming}
          aria-label="Open Red Bull Wings Cup details"
        >
          <div className="upcoming-card-glow"></div>
          <div className="upcoming-card-top">
            <span>VORTEX × RED BULL</span>
            <b>↗</b>
          </div>
          <div className="upcoming-card-body">
            <span className="coming">TODAY & TOMORROW</span>
            <h3>RED BULL<br />WINGS CUP</h3>
            <p>Play EA SPORTS FC 27, get a free Red Bull can & compete for the exclusive Wings Cup Jersey!</p>
          </div>
          <div className="upcoming-card-footer">
            <span>VIEW DETAILS & REGISTER</span>
            <span>01</span>
          </div>
        </button>
      </div>
    </section>
  );
}
