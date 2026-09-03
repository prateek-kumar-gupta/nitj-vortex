import React, { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
    setIsDropdownOpen(false); // Close dropdown when toggling main menu
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = (e) => {
    // Prevent navigating if it's just a toggle click
    e.preventDefault();
    setIsDropdownOpen(prev => !prev);
  };

  return (
    <header className="nav">
      <a className="brand" href="#home" onClick={closeMenu}>
        <img src="assets/vortex-logo.jpg" alt="VORTEX logo" />
        <span>VORTEX</span>
      </a>
      <button 
        className="menu" 
        aria-label="Toggle menu" 
        aria-expanded={isMenuOpen}
        onClick={toggleMenu}
      >
        ☰
      </button>
      <nav className={isMenuOpen ? 'open' : ''}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <div 
          className={`nav-dropdown ${isDropdownOpen ? 'active' : ''}`}
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <span className="nav-dropdown-toggle" onClick={toggleDropdown}>Events ▾</span>
          <div className="nav-dropdown-menu">
            <a href="#upcoming" onClick={closeMenu}>Upcoming</a>
            <a href="#events" onClick={closeMenu}>Previous</a>
          </div>
        </div>
        <a href="#gallery" onClick={closeMenu}>Gallery</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#faculty" onClick={closeMenu}>Faculty</a>
        <a href="#team" onClick={closeMenu}>Team</a>
        <a href="#contact" onClick={closeMenu}>Contact Us</a>
      </nav>
    </header>
  );
}
