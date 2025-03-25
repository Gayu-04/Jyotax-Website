import React from 'react';
import { Upload, Brain, CheckSquare, Send } from 'lucide-react';

const steps = [
  {
    title: 'Upload Documents',
    description: 'Simply upload your tax documents and financial statements.',
    icon: Upload,
  },
  {
    title: 'AI-Powered Analysis',
    description: 'Our AI system extracts and processes your data automatically.',
    icon: Brain,
  },
  {
    title: 'Review and Verify',
    description: 'Check the prepared returns and make any necessary adjustments.',
    icon: CheckSquare,
  },
  {
    title: 'Secure Filing',
    description: 'Submit your returns electronically with complete confidence.',
    icon: Send,
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            How Jyotax.ai Works
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Four simple steps to hassle-free tax filing
          </p>
        </div>

        <div className="mt-16">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-200 hidden md:block" />

            <div className="space-y-16">
              {steps.map((step, index) => (
                <div key={step.title} className={`relative ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div className={`flex items-center ${index % 2 === 0 ? 'md:justify-end' : ''} space-x-4 md:space-x-8`}>
                    <div className="flex-1 md:w-1/2">
                      <div className="relative group">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                          <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                              <div className="p-3 bg-orange-100 rounded-full">
                                <step.icon className="h-6 w-6 text-orange-600" />
                              </div>
                            </div>
                            <div>
                              <h3 className="text-lg font-medium text-gray-900">{step.title}</h3>
                              <p className="mt-2 text-gray-500">{step.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;