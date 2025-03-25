import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
            <span className="block">Simplify Your Taxes.</span>
            <span className="block text-orange-600">Supercharge Your Savings.</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
            AI-powered tax filing and planning for individuals and businesses in USA.
            Save time, reduce errors, and maximize your returns.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-orange-600 hover:bg-orange-700">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-orange-600 bg-orange-100 hover:bg-orange-200">
              Learn More
            </button>
          </div>
        </div>
        <div className="mt-16 relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center">
            <span className="px-3 bg-gradient-to-b from-gray-50 to-white text-sm text-gray-500">
              Trusted by thousands of businesses across USA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;