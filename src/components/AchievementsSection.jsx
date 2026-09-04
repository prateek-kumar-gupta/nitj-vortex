import React, { useRef, useState, useEffect } from 'react';

export default function AchievementsSection() {
  const achievements = [
    {
      title: "Inter-NIT Finalists",
      desc: "Competed fiercely and secured a top spot in the national inter-college esports tournament.",
      stat: "Grand Finalists"
    },
    {
      title: "Campus Record",
      desc: "Highest ever participation in a single gaming event in college history.",
      stat: "1200+ Players"
    },
    {
      title: "Esports Community",
      desc: "Fastest growing technical club on campus with a dedicated gamer base.",
      stat: "Top 3"
    },
    {
      title: "Game Mania at GNA",
      desc: "Represented NIT Jalandhar and dominated the arena at GNA University, bringing home top honors and competitive glory.",
      stat: "Champions",
      image: "assets/game-mania-gna.jpg"
    }
  ];

  const trackRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      setScrollProgress((scrollLeft / maxScroll) * 100);
    } else {
      setScrollProgress(0);
    }
  };

  const scroll = (direction) => {
    if (!trackRef.current) return;
    const scrollAmount = 380;
    trackRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('resize', handleScroll);
    return () => window.removeEventListener('resize', handleScroll);
  }, []);

  return (
    <section id="achievements" className="achievements-section">
      <div className="section-header">
        <p className="eyebrow">HALL OF FAME</p>
        <h2>Achievements</h2>
      </div>
      
      <div className="achievements-track-wrap">
        <button 
          type="button"
          className="achieve-scroll-btn left" 
          aria-label="Scroll achievements left"
          onClick={() => scroll('left')}
        >
          ←
        </button>

        <div 
          className="achievements-track" 
          ref={trackRef} 
          onScroll={handleScroll}
        >
          {achievements.map((item, i) => (
            <div key={i} className="achievement-card">
              <div className="achieve-glow"></div>
              {item.image && (
                <div className="achieve-card-img">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
              )}
              <div className="achieve-card-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="achieve-stat">{item.stat}</div>
              </div>
            </div>
          ))}
        </div>

        <button 
          type="button"
          className="achieve-scroll-btn right" 
          aria-label="Scroll achievements right"
          onClick={() => scroll('right')}
        >
          →
        </button>
      </div>

      {/* Red Scroll Progress Indicator (Same as screenshot) */}
      <div className="achieve-progress-container">
        <div className="achieve-progress-track">
          <div 
            className="achieve-progress-thumb" 
            style={{ 
              width: '25%', 
              left: `${scrollProgress * 0.75}%` 
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}
