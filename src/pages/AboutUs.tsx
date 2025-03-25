import React from 'react';

const AboutUs = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            About Jyotax.ai
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Revolutionizing tax management with AI technology
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            <p className="mt-4 text-gray-600">
              At Jyotax.ai, we're on a mission to simplify tax management for individuals and businesses across USA. 
              By leveraging cutting-edge AI technology, we're making tax compliance more accessible, efficient, and accurate than ever before.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            <p className="mt-4 text-gray-600">
              We envision a future where tax management is no longer a burden but a seamless part of financial operations. 
              Through innovation and dedication, we're working to make this vision a reality for our clients.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center">Our Values</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Innovation</h3>
              <p className="mt-2 text-gray-600">
                We continuously push the boundaries of what's possible in tax management through AI technology.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Integrity</h3>
              <p className="mt-2 text-gray-600">
                We maintain the highest standards of honesty and transparency in all our operations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Excellence</h3>
              <p className="mt-2 text-gray-600">
                We strive for excellence in every aspect of our service delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;