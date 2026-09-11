import React from 'react';

export default function SponsorsSection() {
  const sponsors = [
    { name: "Red Bull", logo: "/assets/sponsors/redbull.jpg" },
    { name: "JioGames", logo: "/assets/sponsors/jiogames.jpg" },
    { name: "Krafton", logo: "/assets/sponsors/krafton.jpg" },
    { name: "Riot Games", logo: "/assets/sponsors/riotgames.jpg" },
    { name: "Skoar", logo: "/assets/sponsors/skoar.jpg" },
    { name: "Monster", logo: "/assets/sponsors/monster.jpg" },
    { name: "Kreo", logo: "/assets/sponsors/kreo.jpg" },
    { name: "FFMIC", logo: "/assets/sponsors/ffmic.jpg" }
  ];

  return (
    <section id="sponsors" className="sponsors-section">
      <p className="sponsors-title">PAST SPONSORS & PARTNERS</p>
      
      <div className="sponsors-marquee-container">
        <div className="sponsors-marquee">
          {sponsors.map((sponsor, i) => (
            <div key={i} className="sponsor-logo-placeholder">
              <img 
                src={sponsor.logo} 
                alt={sponsor.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://placehold.co/150x50/111/FFF?text=${sponsor.name}`;
                }}
              />
            </div>
          ))}
          {/* Duplicate for infinite scroll effect */}
          {sponsors.map((sponsor, i) => (
            <div key={i + 10} className="sponsor-logo-placeholder">
              <img 
                src={sponsor.logo} 
                alt={sponsor.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://placehold.co/150x50/111/FFF?text=${sponsor.name}`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
