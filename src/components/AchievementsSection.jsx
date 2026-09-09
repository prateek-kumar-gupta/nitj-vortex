import React, { useRef, useState, useEffect } from 'react';

export default function AchievementsSection() {
  const achievements = [
    {
      title: "Valorant Campus Cup",
      desc: "Champions at the premier national Valorant Campus Cup, outplaying top collegiate teams.",
      stat: "Winners",
      image: "/assets/achievement-valorant-campus-cup.jpg"
    },
    {
      title: "IIT Ropar Advitya '24 BGMI",
      desc: "Took 1st Place in the BGMI Championship at Advitya '24, the flagship technical fest of IIT Ropar.",
      stat: "Winners",
      image: "/assets/achievement-iit-ropar-advitya24-bgmi.jpg"
    },
    {
      title: "Utkansh '25 Free Fire",
      desc: "Champions in the Free Fire arena at Utkansh '25, securing victory with aggressive firepower.",
      stat: "Winners",
      image: "/assets/achievement-utkansh25-freefire.jpg"
    },
    {
      title: "Game Mania at GNA",
      desc: "Represented NIT Jalandhar and dominated the arena at GNA University, bringing home top honors.",
      stat: "Champions",
      image: "/assets/game-mania-gna.jpg"
    },
    {
      title: "Utkansh '25 BGMI",
      desc: "Clinched the Runners Up trophy in the high-stakes BGMI battleground at Utkansh '25.",
      stat: "Runners Up",
      image: "/assets/achievement-utkansh25-bgmi.jpg"
    },
    {
      title: "Utkansh '25 Valorant",
      desc: "Secured the 1st Runner Up title in the competitive Valorant showdown at Utkansh '25.",
      stat: "Runners Up",
      image: "/assets/achievement-utkansh25-valorant.jpg"
    },
    {
      title: "IIT Ropar Advitya '25 BGMI",
      desc: "Secured the Runners Up position in the competitive BGMI championship at Advitya '25, IIT Ropar.",
      stat: "Runners Up",
      image: "/assets/achievement-iit-ropar-advitya25-bgmi.jpg"
    },
    {
      title: "NST Neutron '24 100K BGMI",
      desc: "Finished as Runners Up in the 100K prize pool BGMI tournament hosted at NST Neutron '24.",
      stat: "Runners Up",
      image: "/assets/achievement-nst-neutron24-bgmi.jpg"
    },
    {
      title: "Krafton x Surge '24 BGMI",
      desc: "Battled through intense national qualifiers to reach the Grand Finals of Krafton x Surge '24.",
      stat: "Finalists",
      image: "/assets/achievement-krafton-surge24-bgmi.jpg"
    },
    {
      title: "Inter-NIT Finalists",
      desc: "Competed fiercely and secured a top spot in the national inter-college esports tournament.",
      stat: "Grand Finalists"
    },
    {
      title: "Game Mania at GNA",
      desc: "Represented NIT Jalandhar and dominated the arena at GNA University, bringing home top honors and competitive glory.",
      stat: "Champions",
      image: "/assets/game-mania-gna.jpg"
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

  const thumbWidth = Math.max(12, Math.round(100 / achievements.length));
  const maxLeft = 100 - thumbWidth;
  const thumbLeft = (scrollProgress / 100) * maxLeft;

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
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    loading="lazy" 
                    onError={(e) => {
                      if (!e.target.dataset.retried) {
                        e.target.dataset.retried = 'true';
                        e.target.src = item.image.startsWith('/') ? item.image : `/${item.image}`;
                      }
                    }}
                  />
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

      {/* Red Scroll Progress Indicator */}
      <div className="achieve-progress-container">
        <div className="achieve-progress-track">
          <div 
            className="achieve-progress-thumb" 
            style={{ 
              width: `${thumbWidth}%`, 
              left: `${thumbLeft}%` 
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}
