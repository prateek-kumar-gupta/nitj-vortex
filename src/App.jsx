import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UpcomingSection from './components/UpcomingSection';
import EventsArchive from './components/EventsArchive';
import AboutSection from './components/AboutSection';
import QuoteSection from './components/QuoteSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import UpcomingToast from './components/UpcomingToast';
import UpcomingModal from './components/UpcomingModal';
import EventModal from './components/EventModal';
import Loader from './components/Loader';
import SponsorsSection from './components/SponsorsSection';
import GallerySection from './components/GallerySection';
import AchievementsSection from './components/AchievementsSection';
import FacultySection from './components/FacultySection';
import TeamSection from './components/TeamSection';
import { events } from './data/events';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedEventIndex, setSelectedEventIndex] = useState(null);
  const [isUpcomingOpen, setIsUpcomingOpen] = useState(false);

  useEffect(() => {
    // Simulate game asset loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const isAnyModalOpen = selectedEventIndex !== null || isUpcomingOpen;

  return (
    <>
      <Loader isLoading={isLoading} />
      <div className="noise"></div>
      
      <Navbar />

      <main className={isAnyModalOpen ? 'modal-open' : ''}>
        <Hero onOpenUpcoming={() => setIsUpcomingOpen(true)} />
        <SponsorsSection />
        <UpcomingSection onOpenUpcoming={() => setIsUpcomingOpen(true)} />
        <EventsArchive 
          events={events} 
          onSelectEvent={(idx) => setSelectedEventIndex(idx)} 
        />
        <GallerySection />
        <AchievementsSection />
        <AboutSection />
        <FacultySection />
        <TeamSection />
        <QuoteSection />
        <ContactSection />
      </main>

      <Footer />

      {/* Announcement Toast */}
      <UpcomingToast 
        isAnyModalOpen={isAnyModalOpen}
        onOpenUpcoming={() => setIsUpcomingOpen(true)}
      />

      {/* Upcoming Event Modal */}
      <UpcomingModal 
        isOpen={isUpcomingOpen}
        onClose={() => setIsUpcomingOpen(false)}
      />

      {/* Apple-style Archive Event Modal */}
      <EventModal 
        eventIndex={selectedEventIndex}
        events={events}
        onClose={() => setSelectedEventIndex(null)}
        onChangeEvent={(newIndex) => setSelectedEventIndex(newIndex)}
      />
    </>
  );
}
