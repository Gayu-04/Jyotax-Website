import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How secure is my data on Jyotax.ai?',
    answer: 'We use bank-grade encryption and security measures to protect your data. Our platform is compliant with all relevant data protection regulations, and we never share your information with third parties.',
  },
  {
    question: 'What documents do I need to upload?',
    answer: 'You will need to upload your Form 16, bank statements, investment proofs, and any other relevant tax documents. Our system will guide you through the specific requirements based on your tax situation.',
  },
  {
    question: 'How accurate is the AI-powered tax calculation?',
    answer: 'Our AI system is regularly updated with the latest tax regulations and has an accuracy rate of over 99%. However, all calculations are reviewed by tax experts before final submission.',
  },
  {
    question: 'Can I switch plans later?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. The changes will be reflected in your next billing cycle.',
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'We offer email support for all plans, with priority support and dedicated account managers for higher-tier plans. Our support team is available during business hours to assist you.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Find answers to common questions about Jyotax.ai
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm"
              >
                <button
                  className="w-full px-6 py-4 flex justify-between items-center text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-500">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;