import {
  Heart,
  Calendar,
  Users,
  ClipboardList,
  Bell,
  Shield,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import './Features.css';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Heart,
    title: 'Horse Health Records',
    description:
      'Comprehensive health tracking for each horse. Log vet visits, vaccinations, medications, and health notes in one organized place.',
  },
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    description:
      'Never miss a farrier appointment or vet visit. Automated reminders keep your entire care schedule on track.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description:
      'Invite trainers, staff, and boarders. Everyone stays informed with role-based access and real-time updates.',
  },
  {
    icon: ClipboardList,
    title: 'Care Logging',
    description:
      'Log daily care activities — feeding, turnout, exercise, grooming — with timestamps and notes.',
  },
  {
    icon: Bell,
    title: 'Reminders & Alerts',
    description:
      'Set recurring reminders for deworming, dental checks, and custom care routines. Get notified before anything slips.',
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description:
      'Enterprise-grade security with Supabase. Your horse data is encrypted and protected with row-level security.',
  },
];

export default function Features() {
  return (
    <section id="features" className="features-section">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-heading">
            Everything You Need to Manage Your Barn
          </h2>
          <p className="features-subtitle">
            From daily care logs to team coordination, Horse Care Tracker gives
            you complete visibility into every horse's wellbeing.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="feature-card">
                <div className="feature-icon-wrapper">
                  <Icon className="feature-icon" size={28} strokeWidth={1.8} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
