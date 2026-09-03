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
          Gear up, assemble your squad, and prepare to dominate. Stay locked to our official comms for the latest tournament intel, upcoming drop zones, and campus leaderboards.
        </p>
        <p style={{ color: '#fff', fontSize: '18px', fontWeight: '800', margin: '20px 0', letterSpacing: '1px' }}>
          📞 +91 7009464206
        </p>
        <a 
          className="btn primary" 
          href="https://www.instagram.com/nitj.esportsclub/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
          INSTAGRAM
        </a>
      </div>
    </section>
  );
}
