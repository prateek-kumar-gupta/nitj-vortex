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
          <i></i> LIVE EVENT
        </div>
        <h3>RED BULL<br /><span>WINGS CUP</span></h3>
        <p>Play EA SPORTS FC 27 today & tomorrow! Get a free Red Bull can + exclusive Wings Cup Jersey.</p>
        <button className="alert-action" onClick={handleAction}>
          VIEW DETAILS & REGISTER <span>↗</span>
        </button>
      </div>
    </div>
  );
}
