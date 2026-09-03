import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="brand small">
        <img src="assets/vortex-logo.jpg" alt="" />
        <span>VORTEX<span className="dot">.</span></span>
      </div>
      
      <div className="footer-social-icons">
        <a 
          href="https://www.instagram.com/nitj.esportsclub/" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
        <a 
          href="#" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </a>
        <a 
          href="#" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
        <a 
          href="https://www.bing.com/ck/a?!&&p=ef201711924f81a33f2918da74bc52e2c11c261464e32d25eeb961acbfd68fc8JmltdHM9MTc4ODMwNzIwMA&ptn=3&ver=2&hsh=4&fclid=33574a4a-7301-604a-2bb3-5edb72f3619b&u=a1L21hcHM_Jm1lcGk9MH5-RW1iZWRkZWR-QWRkcmVzc19MaW5rJnR5PTE4JnE9RHIlMjBCJTIwUiUyMEFtYmVka2FyJTIwTmF0aW9uYWwlMjBJbnN0aXR1dGUlMjBvZiUyMFRlY2hub2xvZ3klMjBKYWxhbmRoYXImc3M9eXBpZC5ZTkE0MTFEODZCMzhDRjU4QyZwcG9pcz0zMS4zOTU4NzIxMTYwODg4NjdfNzUuNTM1ODM1MjY2MTEzMjhfRHIlMjBCJTIwUiUyMEFtYmVka2FyJTIwTmF0aW9uYWwlMjBJbnN0aXR1dGUlMjBvZiUyMFRlY2hub2xvZ3klMjBKYWxhbmRoYXJfWU5BNDExRDg2QjM4Q0Y1OEN-JmNwPTMxLjM5NTg3Mn43NS41MzU4MzUmdj0yJnNWPTEmRk9STT1NUFNSUEw" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Location"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        </a>
      </div>

      <div className="footer-info">
        <p>© 2026 VORTEX • NIT Jalandhar Esports Club</p>
      </div>
    </footer>
  );
}
