import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="manifesto">
      <div className="manifesto-logo interactive-logo">
        <div className="logo-ring outer-ring"></div>
        <div className="logo-ring inner-ring"></div>
        <div className="scanner"></div>
        <img src="assets/vortex-logo.jpg" alt="VORTEX emblem" />
        <div className="hologram-effect"></div>
      </div>
      <div className="manifesto-content">
        <div className="manifesto-header">
          <p className="eyebrow">THE VORTEX INITIATIVE</p>
          <h2>Not just a club.<br /><span>It's a legacy.</span></h2>
        <p className="manifesto-desc">
          The ultimate esports battleground at NIT Jalandhar. We unite gamers, forge champions, and build a legacy beyond the screen. Whether you're a casual player looking for a squad or a fierce competitor aiming for the leaderboards, VORTEX is your home. We host high-stakes tournaments, interactive game nights, and elite campus leagues to push the boundaries of collegiate esports.
        </p>
        </div>

        <div className="stats stats-card">
          <div className="stat-glow">
            <b>1200+</b>
            <small>ACTIVE GAMERS</small>
          </div>
          <div className="stat-separator"></div>
          <div className="stat-glow">
            <b>∞</b>
            <small>CLUTCH MOMENTS</small>
          </div>
        </div>
      </div>
    </section>
  );
}
