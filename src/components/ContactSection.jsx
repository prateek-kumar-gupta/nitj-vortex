import React from 'react';

export default function ContactSection() {
  return (
    <section id="contact" className="contact">
      <div>
        <p className="eyebrow">YOUR NEXT QUEST AWAITS</p>
        <h2>Step into<br /><span>the Arena</span></h2>
      </div>
      <div className="contact-box">
        <p>
          Gear up, assemble your squad, and prepare to dominate. Stay locked to our official comms for the latest tournament intel, upcoming drop zones, and campus leaderboards.
        </p>
        <div style={{ margin: '22px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <p style={{ color: '#fff', fontSize: '18px', fontWeight: '800', margin: 0, letterSpacing: '1px' }}>
            📞 <a href="tel:+917009464206" style={{ color: '#fff', textDecoration: 'none' }}>+91 7009464206</a>
          </p>
          <p style={{ color: '#fff', fontSize: '16px', fontWeight: '700', margin: 0, letterSpacing: '0.5px' }}>
            ✉️ <a href="mailto:vortex@nitj.ac.in" style={{ color: 'var(--red)', textDecoration: 'none' }}>vortex@nitj.ac.in</a>
          </p>
        </div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
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
          <a 
            className="btn" 
            href="https://discord.gg/7Z3Hk2vWn" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            DISCORD
          </a>
        </div>
      </div>
    </section>
  );
}
