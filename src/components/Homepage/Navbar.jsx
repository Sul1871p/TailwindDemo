import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo / Restaurant Name */}
          <div className="text-2xl font-bold text-red-600">
            Chef's Delight
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-red-600 transition">Home</a>
            <a href="#menu" className="text-gray-700 hover:text-red-600 transition">Menu</a>
            <a href="#about" className="text-gray-700 hover:text-red-600 transition">About</a>
            <a href="#contact" className="text-gray-700 hover:text-red-600 transition">Contact</a>
          </div>

          {/* Call to Action */}
          <div className="hidden md:block">
            <a href="#reserve" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
              Reserve Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
