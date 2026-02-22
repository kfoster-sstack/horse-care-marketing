import './HowItWorks.css';

interface Step {
  number: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: 'Create Your Barn',
    description:
      'Sign up free and set up your barn profile in under 2 minutes. Add your horses with photos and details.',
  },
  {
    number: 2,
    title: 'Invite Your Team',
    description:
      'Share a simple invite code with trainers, staff, and boarders. Everyone gets the right level of access.',
  },
  {
    number: 3,
    title: 'Track & Manage',
    description:
      'Log care activities, schedule appointments, set reminders, and keep your entire barn running smoothly.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="how-it-works-container">
        <div className="how-it-works-header">
          <h2 className="how-it-works-heading">Get Started in Minutes</h2>
        </div>

        <div className="steps-row">
          {steps.map((step, index) => (
            <div key={step.number} className="step-item">
              {/* Connector line before (except first step) */}
              {index > 0 && <div className="step-connector" aria-hidden="true" />}

              <div className="step-content">
                <div className="step-number-wrapper">
                  <span className="step-number">{step.number}</span>
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
