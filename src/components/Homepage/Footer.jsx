import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 items-start">
        
        {/* Branding */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">Chef's Delight</h3>
          <p className="text-sm text-gray-400">
            Where taste meets tradition. Experience fine dining like never before.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-2">
          <h4 className="text-white font-semibold mb-2">Quick Links</h4>
          <a href="#home" className="hover:text-red-500 transition">Home</a>
          <a href="#menu" className="hover:text-red-500 transition">Menu</a>
          <a href="#about" className="hover:text-red-500 transition">About</a>
          <a href="#contact" className="hover:text-red-500 transition">Contact</a>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-white font-semibold mb-2">Follow Us</h4>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-red-500 transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-red-500 transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-red-500 transition">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Chef's Delight. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
