import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import './Footer.css';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const columns: FooterColumn[] = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Sign Up', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: "About Schneider's", href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '#' },
      { label: 'Documentation', href: '#' },
      { label: 'Status', href: '#' },
      { label: 'Privacy Policy', href: '#' },
    ],
  },
];

interface SocialLink {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const socialLinks: SocialLink[] = [
  { icon: <Facebook size={20} />, label: 'Facebook', href: '#' },
  { icon: <Instagram size={20} />, label: 'Instagram', href: '#' },
  { icon: <Twitter size={20} />, label: 'X (Twitter)', href: '#' },
];

const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-top">
          {/* Brand Column */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-mark">S</div>
              <div className="footer-logo-text">
                <span className="footer-brand-name">Schneider&apos;s Saddlery</span>
                <span className="footer-product-name">Horse Care Tracker</span>
              </div>
            </div>
            <p className="footer-brand-description">
              The trusted digital platform for modern equestrian care management.
              Track, schedule, and collaborate with ease.
            </p>
            {/* Social Links */}
            <div className="footer-social">
              <span className="footer-social-label">Connect</span>
              <div className="footer-social-icons">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="footer-social-link"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {columns.map((column) => (
            <div key={column.title} className="footer-column">
              <h4 className="footer-column-title">{column.title}</h4>
              <ul className="footer-links">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="footer-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; 2026 Schneider&apos;s Saddlery. All rights reserved.
          </p>
          <p className="footer-made-with">
            Made with love for the equestrian community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
