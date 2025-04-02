"use client";

import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Event handlers for menu items
  const handleAboutUs = () => {
    // This will need to be connected to the state in Hero component
    if (window) {
      window.dispatchEvent(new CustomEvent('showAboutUs'));
    }
  };

  const handleReturnPolicy = () => {
    // This will need to be connected to the state in Hero component
    if (window) {
      window.dispatchEvent(new CustomEvent('showReturnPolicy'));
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[transparent]">
      <div className="w-full py-4 pl-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="w-20 h-12 pointer-events-auto">
            <img
              src="/logo.png"
              alt="Carat Logo"
              className="w-full h-full object-contain brightness-0 invert"
            />
          </div>

          {/* Navigation for larger screens - hidden on mobile */}
          <div className="hidden md:flex items-center space-x-6 font-thin pr-8 pointer-events-auto">
            <button
              onClick={handleAboutUs}
              className="text-[#FFFFFF] hover:text-[#FDF0D5] transition-colors duration-300 text-sm uppercase tracking-wider cursor-pointer"
            >
              About Us
            </button>
            <button 
              onClick={handleReturnPolicy}
              className="text-[#FFFFFF] hover:text-[#FDF0D5] transition-colors duration-300 text-sm uppercase tracking-wider cursor-pointer"
            >
              Return Policy
            </button>
            <a 
              href="https://maps.app.goo.gl/EPT9y3gPymUtjuv89?g_st=com.google.maps.preview.copy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFFFFF] hover:text-[#FDF0D5] transition-colors duration-300 text-sm uppercase tracking-wider cursor-pointer"
            >
              Location
            </a>
          </div>

          {/* Hamburger Menu Button - only visible on mobile */}
          <button 
            className="md:hidden mr-6 pointer-events-auto z-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
          </button>

          {/* Mobile menu overlay */}
          <div className={`fixed inset-0 bg-black/90 z-40 md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
            <div className="flex flex-col items-center justify-center h-full">
              <button
                onClick={() => {
                  handleAboutUs();
                  setIsMenuOpen(false);
                }}
                className="text-[#FFFFFF] hover:text-[#FDF0D5] transition-colors duration-300 text-lg uppercase tracking-wider cursor-pointer py-4"
              >
                About Us
              </button>
              <button 
                onClick={() => {
                  handleReturnPolicy();
                  setIsMenuOpen(false);
                }}
                className="text-[#FFFFFF] hover:text-[#FDF0D5] transition-colors duration-300 text-lg uppercase tracking-wider cursor-pointer py-4"
              >
                Return Policy
              </button>
              <a 
                href="https://maps.app.goo.gl/EPT9y3gPymUtjuv89?g_st=com.google.maps.preview.copy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFFFFF] hover:text-[#FDF0D5] transition-colors duration-300 text-lg uppercase tracking-wider cursor-pointer py-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Location
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
