import React from 'react';

export default function ContactSection() {
  return (
    <section id="contact" className="contact">
      <div>
        <p className="eyebrow">YOUR NEXT QUEST AWAITS</p>
        <h2>Step into<br /><span>the Arena.</span></h2>
      </div>
      <div className="contact-box">
        <p>
          Recruit your squad, secure your slot, and prepare for battle. Follow our comms network for drop zones, tournament intel, and campus leaderboards.
        </p>
        <p style={{ color: '#fff', fontSize: '18px', fontWeight: '800', margin: '20px 0', letterSpacing: '1px' }}>
          📞 +91 7009464206
        </p>
        <a 
          className="btn primary" 
          href="https://www.instagram.com/nitj.esportsclub/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Instagram ↗
        </a>
      </div>
    </section>
  );
}
