import React from 'react';
import { FileText, PieChart, Shield, Calculator } from 'lucide-react';

const features = [
  {
    name: 'ITR Filing',
    description: 'Automate your income tax return filing with our intuitive platform. Upload documents and let AI handle the rest.',
    icon: FileText,
  },
  {
    name: 'GST Compliance',
    description: 'Effortlessly manage your GST obligations and ensure compliance with automated calculations and timely reminders.',
    icon: Calculator,
  },
  {
    name: 'Tax Planning',
    description: 'Optimize your tax liabilities with personalized planning tools and AI-driven recommendations.',
    icon: PieChart,
  },
  {
    name: 'Secure Platform',
    description: 'Your data is protected with bank-grade encryption and security measures. We prioritize your privacy.',
    icon: Shield,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Powerful Features for Effortless Tax Management
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Everything you need to manage your taxes efficiently and accurately.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                <div className="relative px-6 py-8 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                  <div className="space-y-4">
                    <div className="p-3 bg-orange-100 rounded-lg inline-block">
                      <feature.icon className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{feature.name}</h3>
                    <p className="text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;