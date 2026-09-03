import React from 'react';

export default function GallerySection() {
  const images = [
    'assets/arena-x.jpg',
    'assets/kreo-aero-klash.jpg',
    'assets/monster-campus-unleashed.jpg',
    'assets/bgmi-showdown.jpg',
    'assets/tez-ffmic-springs.jpg',
    'assets/vortex-logo.jpg'
  ];

  return (
    <section id="gallery" className="gallery-section">
      <div className="section-header">
        <p className="eyebrow">VISUALS</p>
        <h2>The Gallery<span>.</span></h2>
      </div>

      <div className="gallery-container">
        <div className="carousel-3d">
          {images.map((img, i) => {
            const angle = (360 / images.length) * i;
            return (
              <figure 
                key={i} 
                style={{ '--angle': `${angle}deg` }}
              >
                <img src={img} alt={`Gallery visual ${i + 1}`} loading="lazy" />
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
