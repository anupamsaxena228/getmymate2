import React from 'react';
import { Search, Calendar, Video, MessageSquare } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Find your mentor',
    description: 'Browse through our diverse pool of experts and find someone who matches your goals and interests.',
    icon: <Search className="w-8 h-8" />,
    color: 'bg-primary-100 text-primary-600'
  },
  {
    id: 2,
    title: 'Book a session',
    description: 'Choose a time slot that works for you and complete the booking with secure payment.',
    icon: <Calendar className="w-8 h-8" />,
    color: 'bg-accent-100 text-accent-600'
  },
  {
    id: 3,
    title: 'Connect virtually',
    description: 'Meet with your mentor through our integrated video platform for a seamless experience.',
    icon: <Video className="w-8 h-8" />,
    color: 'bg-success-100 text-success-600'
  },
  {
    id: 4,
    title: 'Grow and learn',
    description: 'Apply the personalized advice and follow up with additional sessions as needed.',
    icon: <MessageSquare className="w-8 h-8" />,
    color: 'bg-warning-100 text-warning-600'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-primary-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
          <p className="text-xl text-gray-600">Getting started is simple. Follow these steps to connect with a mentor and start your journey.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div 
              key={step.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 relative animate-fade-in"
              style={{ animationDelay: `${(step.id - 1) * 100}ms` }}
            >
              {/* Step number badge */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                {step.id}
              </div>
              
              <div className={`w-16 h-16 ${step.color} rounded-lg flex items-center justify-center mb-6`}>
                {step.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;