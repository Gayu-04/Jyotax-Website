import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '₹499',
    period: '/month',
    description: 'Perfect for individuals and small businesses',
    features: [
      'ITR filing for individuals',
      'Basic tax planning tools',
      'Email support',
      'Document storage',
    ],
  },
  {
    name: 'Professional',
    price: '₹999',
    period: '/month',
    description: 'Ideal for growing businesses',
    features: [
      'Everything in Basic',
      'GST filing',
      'Advanced tax planning',
      'Priority support',
      'Multiple business entities',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: '₹2499',
    period: '/month',
    description: 'For large organizations',
    features: [
      'Everything in Professional',
      'Custom API integration',
      'Dedicated account manager',
      'Custom reporting',
      'Team collaboration',
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Choose the plan that best fits your needs
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl ${
                plan.featured
                  ? 'bg-orange-600 text-white shadow-xl scale-105'
                  : 'bg-white text-gray-900 border border-gray-200'
              }`}
            >
              <div className="p-8">
                <h3 className="text-2xl font-semibold">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className="ml-1 text-xl font-semibold">{plan.period}</span>
                </div>
                <p className={`mt-6 ${plan.featured ? 'text-orange-100' : 'text-gray-500'}`}>
                  {plan.description}
                </p>

                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className={`h-6 w-6 ${plan.featured ? 'text-orange-300' : 'text-orange-600'}`} />
                      </div>
                      <p className="ml-3">{feature}</p>
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-8 w-full py-3 px-6 rounded-full text-center font-medium ${
                    plan.featured
                      ? 'bg-white text-orange-600 hover:bg-gray-50'
                      : 'bg-orange-600 text-white hover:bg-orange-700'
                  }`}
                >
                  Get started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;