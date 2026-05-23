'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleLinkClick = (href) => {
    setIsMenuOpen(false);
    // Extract section id from href
    const sectionId = href.replace('#', '');
    setActiveSection(sectionId);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'certificates', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Contact', href: '#contact' }
  ];
                                          
  return (
    <nav className="navbar-bubble">
      <div className="nav-bubble-content">
        <div className="logo">GK</div>
        
        <ul className="nav-bubble-links desktop">
          {navItems.map((item) => (
            <li key={item.label}>
              <a 
                href={item.href}
                onClick={() => handleLinkClick(item.href)}
                className={activeSection === item.href.replace('#', '') ? 'active' : ''}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        
        <button 
          className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        {isMenuOpen && (
          <ul className="nav-bubble-links mobile">
            {navItems.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href}
                  onClick={() => handleLinkClick(item.href)}
                  className={activeSection === item.href.replace('#', '') ? 'active' : ''}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}