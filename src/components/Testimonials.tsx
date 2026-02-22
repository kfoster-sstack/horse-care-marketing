import React from 'react';
import { Quote } from 'lucide-react';
import './Testimonials.css';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Horse Care Tracker has completely transformed how we manage our 12-horse barn. No more sticky notes or forgotten vet appointments!',
    name: 'Sarah M.',
    role: 'Barn Manager',
    location: 'Kentucky',
  },
  {
    quote:
      'As a trainer working with multiple barns, having everything in one place saves me hours every week. The team features are incredible.',
    name: 'James R.',
    role: 'Professional Trainer',
    location: 'Virginia',
  },
  {
    quote:
      "We switched from spreadsheets and the difference is night and day. Our boarders love being able to see their horse's care logs.",
    name: 'Linda K.',
    role: 'Stable Owner',
    location: 'Texas',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">Trusted by Horse Owners Everywhere</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-quote-icon">
                <Quote size={32} />
              </div>
              <blockquote className="testimonial-text">
                {testimonial.quote}
              </blockquote>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="testimonial-author-info">
                  <p className="testimonial-name">{testimonial.name}</p>
                  <p className="testimonial-role">
                    {testimonial.role}, {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
