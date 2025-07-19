import React from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            We're here to help with any questions about our platform
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              <select name="industry" required>
                <option value="">- Please Select Industry -</option>
                <option value="finance">Finance</option>
                <option value="technology">Technology</option>
                <option value="healthcare">Healthcare</option>
                <option value="other">Other</option>
              </select>
              <button
                type="submit"
                className="w-full bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Other Ways to Reach Us</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-orange-600" />
                <span className="ml-3 text-gray-600">karyantra@jyotax.ai</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-orange-600" />
                <span className="ml-3 text-gray-600">+91-8390990088</span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-medium text-gray-900 mb-4">Address</h4>
              <p className="text-gray-600">
              608, 6th Floor Mont Vert Velocity, S.No-140, Baner-Pashan Link Rd, Pashan Pune, Maharashtra 411021, Bharat
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;