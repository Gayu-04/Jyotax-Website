import React from 'react';

const Resources = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Resources
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Helpful guides and resources for tax management
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">Tax Guides</h3>
              <p className="mt-2 text-gray-600">
                Comprehensive guides on various tax topics and regulations.
              </p>
              <a href="#" className="mt-4 text-orange-600 hover:text-orange-700 inline-block">
                Learn more →
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">Video Tutorials</h3>
              <p className="mt-2 text-gray-600">
                Step-by-step video guides for using Jyotax.ai features.
              </p>
              <a href="#" className="mt-4 text-orange-600 hover:text-orange-700 inline-block">
                Watch now →
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">Blog</h3>
              <p className="mt-2 text-gray-600">
                Latest updates on tax laws and best practices.
              </p>
              <a href="#" className="mt-4 text-orange-600 hover:text-orange-700 inline-block">
                Read more →
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Downloadable Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Tax Calculators</h3>
              <p className="mt-2 text-gray-600">
                Excel templates and tools for tax calculations.
              </p>
              <button className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700">
                Download Now
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Checklists</h3>
              <p className="mt-2 text-gray-600">
                Tax preparation and filing checklists.
              </p>
              <button className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700">
                Download Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;