import { Heart, Calendar, Shield, ChevronRight, Activity } from 'lucide-react';
import './Hero.css';

const APP_URL = 'https://kfoster-sstack.github.io/horse-care-saas/#/signup';

const Hero = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero">
      <div className="hero__container">
        {/* Left — Text Content */}
        <div className="hero__content">
          <div className="hero__badge">
            <Activity size={14} />
            <span>Trusted by Equestrian Professionals</span>
          </div>

          <h1 className="hero__headline">
            Professional Horse Care Management,{' '}
            <span className="hero__headline-accent">Simplified</span>
          </h1>

          <p className="hero__subheadline">
            Track health records, schedule farrier and vet visits, coordinate
            with your barn team — all in one powerful platform built by{' '}
            <strong>Schneider's Saddlery</strong>.
          </p>

          <div className="hero__cta-group">
            <a
              href={APP_URL}
              className="hero__cta hero__cta--primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Free Trial
              <ChevronRight size={18} />
            </a>
            <a
              href="#how-it-works"
              className="hero__cta hero__cta--outline"
              onClick={(e) => handleSmoothScroll(e, '#how-it-works')}
            >
              See How It Works
            </a>
          </div>

          <p className="hero__note">No credit card required. Free 14-day trial.</p>
        </div>

        {/* Right — Visual / Illustration Placeholder */}
        <div className="hero__visual">
          <div className="hero__visual-card">
            {/* Decorative floating icons */}
            <div className="hero__icon-float hero__icon-float--heart">
              <Heart size={28} />
            </div>
            <div className="hero__icon-float hero__icon-float--calendar">
              <Calendar size={28} />
            </div>
            <div className="hero__icon-float hero__icon-float--shield">
              <Shield size={28} />
            </div>

            {/* SVG Horse Silhouette */}
            <svg
              className="hero__horse-svg"
              viewBox="0 0 200 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M160 30c-5-12-18-18-28-14-4-8-14-14-24-12-3-6-12-8-18-4l-4 4c-8-2-16 2-20 10l-2 6c-10 4-18 14-20 26l-2 14c-6 8-10 18-10 28 0 6 2 12 4 18l-4 20c-2 6 0 12 4 16l8 6c4 2 10 2 14-2l6-6 16 4c4 0 8-2 10-6l4-10 12-2c6-2 10-6 12-12l4-12c8-4 14-12 16-22l2-10c4-6 6-14 6-22 0-12-4-24-10-34l-2-4z"
                fill="rgba(139, 0, 0, 0.08)"
                stroke="rgba(139, 0, 0, 0.3)"
                strokeWidth="1.5"
              />
            </svg>

            {/* Mock dashboard snippet */}
            <div className="hero__mock-dashboard">
              <div className="hero__mock-header">
                <div className="hero__mock-dot hero__mock-dot--red" />
                <div className="hero__mock-dot hero__mock-dot--gold" />
                <div className="hero__mock-dot hero__mock-dot--green" />
                <span className="hero__mock-title">Horse Care Tracker</span>
              </div>
              <div className="hero__mock-body">
                <div className="hero__mock-row">
                  <span className="hero__mock-label">Next Vet Visit</span>
                  <span className="hero__mock-value">Mar 15</span>
                </div>
                <div className="hero__mock-row">
                  <span className="hero__mock-label">Farrier Due</span>
                  <span className="hero__mock-value">Mar 02</span>
                </div>
                <div className="hero__mock-row">
                  <span className="hero__mock-label">Health Score</span>
                  <span className="hero__mock-value hero__mock-value--good">Excellent</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="hero__stats">
        <div className="hero__stats-container">
          <div className="hero__stat">
            <span className="hero__stat-number">10,000+</span>
            <span className="hero__stat-label">Horses Tracked</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">500+</span>
            <span className="hero__stat-label">Barns</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">99.9%</span>
            <span className="hero__stat-label">Uptime</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
