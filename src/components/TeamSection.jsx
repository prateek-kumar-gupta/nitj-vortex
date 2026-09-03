import React, { useState } from 'react';

export default function TeamSection() {
  const [activeVersion, setActiveVersion] = useState('v1');

  const teamData = {
    v1: {
      label: "GEN 1.0",
      year: "CLASS OF '26",
      members: [
        { name: "Kajal Singh", role: "VICE PRESIDENT", img: "assets/vortex-logo.jpg" },
        { name: "Nischay Verma", role: "PRESIDENT", img: "assets/vortex-logo.jpg" },
        { name: "Mankiran Kaur", role: "VICE PRESIDENT", img: "assets/vortex-logo.jpg" }
      ]
    },
    v2: {
      label: "GEN 2.0",
      year: "CLASS OF '27",
      members: [
        { name: "Incoming Roster", role: "TO BE ANNOUNCED", img: "assets/vortex-logo.jpg" }
      ]
    },
    v3: {
      label: "GEN 3.0",
      year: "CLASS OF '28",
      members: [
        { name: "Incoming Roster", role: "TO BE ANNOUNCED", img: "assets/vortex-logo.jpg" }
      ]
    }
  };

  return (
    <section id="team" className="people-section" style={{ position: 'relative' }}>
      <div className="section-header">
        <h2>Student Coordinators<span>.</span></h2>
      </div>

      {/* Version Selector Tabs */}
      <div className="version-tabs">
        {Object.entries(teamData).map(([key, data]) => (
          <button 
            key={key}
            className={`version-tab ${activeVersion === key ? 'active' : ''}`}
            onClick={() => setActiveVersion(key)}
          >
            {data.label} <span>{data.year}</span>
          </button>
        ))}
      </div>
      
      {/* Active Team Grid */}
      <div className="people-tier animate-fade-in" key={activeVersion}>
        {teamData[activeVersion].members.map((member, i) => (
          <div className="person-card" key={i}>
            <div className="person-img">
              <img src={member.img} alt={member.name} loading="lazy" />
            </div>
            <div className="person-info">
              <h4>{member.name}</h4>
              <span>{member.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
