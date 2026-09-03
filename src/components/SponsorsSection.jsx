import React from 'react';

export default function SponsorsSection() {
  const sponsors = [
    { name: "JioGames", text: "JioGames" },
    { name: "Riot", text: "RIOT" },
    { name: "Krafton", text: "KRAFTON" },
    { name: "Monster", text: "MONSTER" },
    { name: "Kreo", text: "KREO" },
    { name: "FFMIC", text: "FFMIC" }
  ];

  return (
    <section id="sponsors" className="sponsors-section">
      <p className="sponsors-title">BACKED BY INDUSTRY GIANTS</p>
      
      <div className="sponsors-marquee-container">
        <div className="sponsors-marquee">
          {sponsors.map((sponsor, i) => (
            <div key={i} className="sponsor-logo-placeholder">
              <span>{sponsor.text}</span>
            </div>
          ))}
          {/* Duplicate for infinite scroll effect */}
          {sponsors.map((sponsor, i) => (
            <div key={i + 10} className="sponsor-logo-placeholder">
              <span>{sponsor.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
