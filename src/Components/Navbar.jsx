import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../ComponentCSS/Navbar.css'; 

const MyNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleNavClick = (section) => {
    setActiveSection(section);
    document.getElementById(section).scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top custom-top-nav my-navbar ${scrolled ? 'scrolled' : ''}`} >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" style={{ color: '#fff', fontSize: '34px' }}>
        <span id="jsonTitle">{'{JSON}'} </span><span id="junctitle">JUNCTION</span>
        </Link>

        <div className={`collapse navbar-collapse justify-content-end`} id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={() => handleNavClick('home')}
                style={{ color: '#fff' }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={() => handleNavClick('about')}
                style={{ color: '#fff' }}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={() => handleNavClick('contact')}
                style={{ color: '#fff' }}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="ml-auto">
            <Link to="/login" className="btn  borderless">
              Sign In
            </Link>
            <Link to="/signup" className="btn borderless">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
