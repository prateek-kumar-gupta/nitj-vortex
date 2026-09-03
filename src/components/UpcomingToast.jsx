import React, { useState, useEffect, useRef } from 'react';

export default function UpcomingToast({ isAnyModalOpen, onOpenUpcoming }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const hideTimerRef = useRef(null);
  const isAnyModalOpenRef = useRef(isAnyModalOpen);
  isAnyModalOpenRef.current = isAnyModalOpen;

  const isDismissedRef = useRef(isDismissed);
  isDismissedRef.current = isDismissed;

  const showToast = () => {
    if (isDismissedRef.current || isAnyModalOpenRef.current) return;
    setIsVisible(true);

    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    hideTimerRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 9000);
  };

  const hideToast = () => {
    setIsVisible(false);
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
  };

  const handleDismiss = () => {
    setIsDismissed(true);
    hideToast();
  };

  const handleAction = () => {
    hideToast();
    onOpenUpcoming();
  };

  useEffect(() => {
    // Hide toast immediately if a modal opens
    if (isAnyModalOpen) {
      hideToast();
    }
  }, [isAnyModalOpen]);

  useEffect(() => {
    // Initial teaser after 7 seconds
    const initialTimer = setTimeout(() => {
      showToast();
    }, 7000);

    // Repeating periodic check every 30 seconds
    const periodicInterval = setInterval(() => {
      if (!document.hidden) {
        showToast();
      }
    }, 30000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(periodicInterval);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, []);

  return (
    <div 
      className={`upcoming-alert ${isVisible ? 'show' : ''}`} 
      aria-hidden={!isVisible}
    >
      <button 
        className="alert-close" 
        onClick={handleDismiss} 
        aria-label="Dismiss announcement"
      >
        ×
      </button>
      <div className="alert-accent"></div>
      <div className="alert-content">
        <div className="alert-label">
          <i></i> UPCOMING
        </div>
        <h3>Something is<br /><span>loading...</span></h3>
        <p>The next VORTEX event is on the way. Tap to see what's coming.</p>
        <button className="alert-action" onClick={handleAction}>
          VIEW UPCOMING EVENT <span>↗</span>
        </button>
      </div>
    </div>
  );
}
