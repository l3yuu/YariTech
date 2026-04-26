import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-gray-900 tracking-tight">Yari Tech</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors">Services</a>
            <a href="#how-we-work" className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors">How We Work</a>
            <a href="#portfolio" className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors">Portfolio</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors">Pricing</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors">Contact</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors">Login</Link>
            <button className="bg-blue-900 hover:bg-blue-800 text-white px-5 py-2.5 rounded-md text-sm font-medium transition-colors">
              Get Started
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-900">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Services</a>
            <a href="#how-we-work" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">How We Work</a>
            <a href="#portfolio" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Portfolio</a>
            <a href="#pricing" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Pricing</a>
            <a href="#contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Contact</a>
            <Link to="/login" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Login</Link>
            <button className="w-full text-left px-3 py-2 text-base font-medium text-blue-600 hover:bg-gray-50 rounded-md">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
