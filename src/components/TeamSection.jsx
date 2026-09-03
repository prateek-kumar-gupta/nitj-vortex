import React from 'react';

export default function TeamSection() {
  return (
    <section id="team" className="people-section">
      <div className="section-header">
        <h2>Core Team<span>.</span></h2>
      </div>
      
      <div className="people-tier">
        <div className="person-card">
          <div className="person-img"><img src="assets/vortex-logo.jpg" alt="Student placeholder" /></div>
          <div className="person-info">
            <h4>[Student Name]</h4>
            <span>CLUB LEAD</span>
          </div>
        </div>
        <div className="person-card">
          <div className="person-img"><img src="assets/vortex-logo.jpg" alt="Student placeholder" /></div>
          <div className="person-info">
            <h4>[Student Name]</h4>
            <span>CLUB LEAD</span>
          </div>
        </div>
        <div className="person-card">
          <div className="person-img"><img src="assets/vortex-logo.jpg" alt="Student placeholder" /></div>
          <div className="person-info">
            <h4>[Student Name]</h4>
            <span>CLUB LEAD</span>
          </div>
        </div>
      </div>
    </section>
  );
}
