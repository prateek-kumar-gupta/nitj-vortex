import React from 'react';

export default function FacultySection() {
  return (
    <section id="faculty" className="people-section">
      <div className="section-header">
        <h2>Faculty</h2>
      </div>
      
      {/* Tier 1: Director */}
      <div className="people-tier">
        <div className="person-card">
          <div className="person-img"><img src="/assets/director.jpg" alt="Prof. B K Kanaujia" loading="lazy" /></div>
          <div className="person-info">
            <h4>Prof. B K Kanaujia</h4>
            <span>DIRECTOR, NITJ</span>
          </div>
        </div>
      </div>

      {/* Tier 2: DRC */}
      <div className="people-tier">
        <div className="person-card">
          <div className="person-img"><img src="/assets/rohit_mehra.jpg" alt="Prof. Rohit Mehra" loading="lazy" /></div>
          <div className="person-info">
            <h4>Prof. Rohit Mehra</h4>
            <span>DRC</span>
          </div>
        </div>
      </div>

      {/* Tier 3: Coordinators (Swapped) */}
      <div className="people-tier">
        <div className="person-card">
          <div className="person-img"><img src="/assets/urvashi.webp" alt="Dr. Urvashi" loading="lazy" /></div>
          <div className="person-info">
            <h4>Dr. Urvashi</h4>
            <span>COORDINATOR</span>
          </div>
        </div>
        <div className="person-card">
          <div className="person-img"><img src="/assets/amritpal_singh.jpg" alt="Dr. Amritpal Singh" loading="lazy" /></div>
          <div className="person-info">
            <h4>Dr. Amritpal Singh</h4>
            <span>COORDINATOR</span>
          </div>
        </div>
      </div>
    </section>
  );
}
