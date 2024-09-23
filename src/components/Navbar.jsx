import React, { useState } from 'react';
import logo from "../assets/image.png";
import { Link } from 'react-router-dom';

const Navbar = ({ navbarColor }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className={`fixed w-full top-0 left-0 z-30 ${navbarColor}`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <a href='/#About' className="flex items-center gap-2">
            <img 
              src={logo} 
              alt='logo' 
              className='h-8 w-8 rounded-full object-contain bg-white' 
            />
            <div className='font-serif text-white text-lg font-bold'>
              ML
            </div>
          </a>

          {/* Menu Items for Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <a href="/#categories" className="hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Categories
            </a>

            {/* Dropdown for About Section */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                className="hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </button>
              {isDropdownOpen && (
                <div
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  className="absolute mt-1 w-48 rounded-md bg-blue-400 text-white ring-1 ring-black ring-opacity-5"
                >
                  <a href="/#reviews" className="block px-4 py-2 text-sm hover:bg-blue-600">
                    Our Reviews
                  </a>
                  <a href="/#achievements" className="block px-4 py-2 text-sm hover:bg-blue-600">
                    Our Achievements
                  </a>
                  <a href="/#Choose-us" className="block px-4 py-2 text-sm hover:bg-blue-600">
                    Why Choose Us
                  </a>
                </div>
              )}
            </div>
            <Link to="/contact-us" className="hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </Link>
            <a href="/#faq" className="hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              FAQ'S
            </a>
            <Link to="/application" className="hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Apply Now
            </Link>
          </div>

          {/* Login Button for Desktop */}
          <div className="hidden md:block font-serif hover:bg-blue-700 hover:text-white px-3 py-3 rounded-lg text-sm font-semibold">
            <Link to="/login">Login</Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-400 hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={!isMenuOpen ? 'M4 6h16M4 12h16M4 18h16' : 'M6 18L18 6M6 6l12 12'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className=" hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Home
            </a>
            <a href="#categories" className=" hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Categories
            </a>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className=" hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </button>
              {isDropdownOpen && (
                <div className="ml-4 mt-2 w-40 rounded-md shadow-lg bg-blue-500 ring-1 ring-black ring-opacity-5">
                  <a href="#reviews" className="block px-4 py-2 text-sm  hover:bg-white hover:text-blue-500">
                    Our Reviews
                  </a>
                  <a href="#achievements" className="block px-4 py-2 text-sm  hover:bg-white hover:text-blue-500">
                    Achievements
                  </a>
                </div>
              )}
            </div>
            <Link to="/contact-us" className=" hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
            <a href="#faq" className=" hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              FAQ'S
            </a>
            <Link to="/application" className=" hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Apply Now
            </Link>

            {/* Login Button for Mobile */}
            <div className="font-serif hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-lg text-sm font-semibold">
              <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
