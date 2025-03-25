import React from 'react';
import { Clock, CheckCircle2, PiggyBank, Shield } from 'lucide-react';

const benefits = [
  {
    title: 'Save Time',
    description: 'Reduce tax preparation time by up to 80% with our AI-powered automation.',
    icon: Clock,
  },
  {
    title: 'Minimize Errors',
    description: 'Advanced validation ensures accurate filings and compliance with tax regulations.',
    icon: CheckCircle2,
  },
  {
    title: 'Maximize Savings',
    description: 'Intelligent tax planning helps you identify and utilize all eligible deductions.',
    icon: PiggyBank,
  },
  {
    title: 'Peace of Mind',
    description: 'Bank-grade security and expert support for complete confidence in your tax filing.',
    icon: Shield,
  },
];

const Benefits = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose Jyotax.ai?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Experience the benefits of AI-powered tax management
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="flex justify-center">
                  <div className="p-4 bg-orange-100 rounded-full">
                    <benefit.icon className="h-8 w-8 text-orange-600" />
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{benefit.title}</h3>
                <p className="mt-2 text-gray-500">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;