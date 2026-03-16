import React from 'react';
import { Check } from 'lucide-react';
import './Pricing.css';

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  highlighted?: boolean;
  badge?: string;
}

const tiers: PricingTier[] = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    description: 'Perfect for individual horse owners getting started.',
    features: [
      'Up to 3 horses',
      'Basic health records',
      'Care logging',
      '1 user',
    ],
    buttonText: 'Get Started Free',
    buttonLink: 'https://kfoster-sstack.github.io/horse-care-saas/#/signup',
  },
  {
    name: 'Team',
    price: '$9.99',
    period: '/month',
    description: 'Ideal for barns and training operations.',
    features: [
      'Up to 15 horses',
      'Full health records',
      'Smart scheduling',
      'Team collaboration (up to 5 users)',
      'Reminders & alerts',
    ],
    buttonText: 'Start Free Trial',
    buttonLink: 'https://kfoster-sstack.github.io/horse-care-saas/#/signup',
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    name: 'Business',
    price: '$24.99',
    period: '/month',
    description: 'For large operations that need it all.',
    features: [
      'Unlimited horses',
      'Everything in Team',
      'Unlimited team members',
      'Priority support',
      'Custom branding',
      'Advanced analytics',
    ],
    buttonText: 'Contact Sales',
    buttonLink: 'https://kfoster-sstack.github.io/horse-care-saas/#/signup',
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-container">
        <div className="pricing-header">
          <h2 className="pricing-title">Simple, Transparent Pricing</h2>
          <p className="pricing-subtitle">Start free. Upgrade as your barn grows.</p>
        </div>

        <div className="pricing-grid">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`pricing-card ${tier.highlighted ? 'pricing-card--highlighted' : ''}`}
            >
              {tier.badge && (
                <div className="pricing-badge">{tier.badge}</div>
              )}

              <div className="pricing-card-header">
                <h3 className="pricing-plan-name">{tier.name}</h3>
                <div className="pricing-price-wrapper">
                  <span className="pricing-price">{tier.price}</span>
                  <span className="pricing-period">{tier.period}</span>
                </div>
                <p className="pricing-description">{tier.description}</p>
              </div>

              <div className="pricing-card-body">
                <ul className="pricing-features">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="pricing-feature">
                      <Check className="pricing-check-icon" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pricing-card-footer">
                <a
                  href={tier.buttonLink}
                  className={`pricing-button ${tier.highlighted ? 'pricing-button--primary' : 'pricing-button--outline'}`}
                >
                  {tier.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
