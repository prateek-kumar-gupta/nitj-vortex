import React, { useEffect, useState } from 'react';

export default function Loader({ isLoading }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          // Random jumps for a "game loading" feel
          return prev + Math.floor(Math.random() * 15) + 5;
        });
      }, 150);
      return () => {
        clearInterval(interval);
        document.body.style.overflow = '';
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isLoading]);

  return (
    <div className={`game-loader ${!isLoading ? 'loaded' : ''}`}>
      <div className="loader-content">
        <div className="loader-logo-wrapper">
          <img src="assets/vortex-logo.jpg" alt="VORTEX logo" className="loader-logo" />
          <div className="loader-glitch-layer"></div>
        </div>
        
        <h2 className="loader-text">ENTERING VORTEX...</h2>
        
        <div className="progress-bar-container">
          <div className="progress-bar-fill" style={{ width: `${Math.min(progress, 100)}%` }}></div>
        </div>
        <div className="progress-text">{Math.min(progress, 100)}%</div>
      </div>
    </div>
  );
}
