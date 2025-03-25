import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Small Business Owner',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=128&h=128',
    content: 'Jyotax.ai has transformed how I handle my business taxes. The AI-powered system saves me countless hours every month.',
  },
  {
    name: 'Priya Sharma',
    role: 'Freelance Consultant',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=128&h=128',
    content: 'As a freelancer, keeping track of taxes was always challenging. Jyotax.ai makes it simple and stress-free.',
  },
  {
    name: 'Amit Patel',
    role: 'CEO, Tech Startup',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=128&h=128',
    content: 'The accuracy and efficiency of Jyotax.ai are impressive. It has become an essential tool for our company\'s tax management.',
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Trusted by Businesses Across USA
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            See what our customers have to say about their experience
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center space-x-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-gray-600 italic">"{testimonial.content}"</p>
                <div className="mt-6 flex items-center space-x-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
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

export default Testimonials;