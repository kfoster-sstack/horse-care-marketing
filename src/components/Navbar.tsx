import { useState, useEffect } from 'react';
import './Navbar.css';

const APP_URL = '#'; // TODO: Update to https://horse-care-saas.vercel.app

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        {/* Logo / Brand */}
        <a href="/" className="navbar__brand">
          <img
            src="/schneiders_logo.png"
            alt="Schneider's Saddlery"
            className="navbar__logo"
          />
          <span className="navbar__brand-text">Horse Care Tracker</span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="navbar__links">
          <li>
            <a
              href="#features"
              className="navbar__link"
              onClick={(e) => handleNavClick(e, '#features')}
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className="navbar__link"
              onClick={(e) => handleNavClick(e, '#pricing')}
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#how-it-works"
              className="navbar__link"
              onClick={(e) => handleNavClick(e, '#how-it-works')}
            >
              How It Works
            </a>
          </li>
        </ul>

        {/* Desktop CTA */}
        <a
          href={APP_URL}
          className="navbar__cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Started Free
        </a>

        {/* Mobile Hamburger Button */}
        <button
          className={`navbar__hamburger${mobileMenuOpen ? ' navbar__hamburger--active' : ''}`}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className="navbar__hamburger-bar" />
          <span className="navbar__hamburger-bar" />
          <span className="navbar__hamburger-bar" />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`navbar__mobile-menu${mobileMenuOpen ? ' navbar__mobile-menu--open' : ''}`}>
        <ul className="navbar__mobile-links">
          <li>
            <a
              href="#features"
              className="navbar__mobile-link"
              onClick={(e) => handleNavClick(e, '#features')}
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className="navbar__mobile-link"
              onClick={(e) => handleNavClick(e, '#pricing')}
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#how-it-works"
              className="navbar__mobile-link"
              onClick={(e) => handleNavClick(e, '#how-it-works')}
            >
              How It Works
            </a>
          </li>
          <li>
            <a
              href={APP_URL}
              className="navbar__mobile-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started Free
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
