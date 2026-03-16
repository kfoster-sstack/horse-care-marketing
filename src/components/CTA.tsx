import React from 'react';
import { ArrowRight } from 'lucide-react';
import './CTA.css';

const CTA: React.FC = () => {
  return (
    <section id="cta" className="cta-section">
      <div className="cta-pattern" aria-hidden="true" />
      <div className="cta-container">
        <h2 className="cta-title">Ready to Simplify Your Horse Care?</h2>
        <p className="cta-subtitle">
          Join hundreds of barn owners and trainers who trust Schneider&apos;s Horse Care Tracker.
        </p>
        <a href="https://kfoster-sstack.github.io/horse-care-saas/#/signup" className="cta-button" target="_blank" rel="noopener noreferrer">
          Start Your Free Trial
          <ArrowRight size={20} />
        </a>
        <p className="cta-disclaimer">
          No credit card required. Free plan available forever.
        </p>
      </div>
    </section>
  );
};

export default CTA;
