import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-orange-600">Jyotax.ai</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/features" className="text-gray-700 hover:text-orange-600">Features</Link>
            <Link to="/how-it-works" className="text-gray-700 hover:text-orange-600">How it Works</Link>
            <Link to="/pricing" className="text-gray-700 hover:text-orange-600">Pricing</Link>
            <Link to="/about" className="text-gray-700 hover:text-orange-600">About Us</Link>
            <Link to="/resources" className="text-gray-700 hover:text-orange-600">Resources</Link>
            <Link to="/careers" className="text-gray-700 hover:text-orange-600">Careers</Link>
            <Link to="/contact" className="text-gray-700 hover:text-orange-600">Contact</Link>
            <Link to="/contact" className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors">
              Get Started
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/features" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Features</Link>
              <Link to="/how-it-works" className="block px-3 py-2 text-gray-700 hover:text-orange-600">How it Works</Link>
              <Link to="/pricing" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Pricing</Link>
              <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-orange-600">About Us</Link>
              <Link to="/resources" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Resources</Link>
              <Link to="/careers" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Careers</Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Contact</Link>
              <Link to="/contact" className="block w-full mt-4 bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors text-center">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;