import React from 'react';

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
    }
  ];

  return (
    <section id="achievements" className="achievements-section">
      <div className="section-header">
        <p className="eyebrow">HALL OF FAME</p>
        <h2>Achievements<span>.</span></h2>
      </div>
      
      <div className="achievements-grid">
        {achievements.map((item, i) => (
          <div key={i} className="achievement-card">
            <div className="achieve-glow"></div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <div className="achieve-stat">{item.stat}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
