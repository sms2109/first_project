// src/components/Navbar.jsx
import React from 'react';

const Navbar = ({ navigateTo, currentPage }) => {
  const navItems = [
    { name: 'Home', path: 'home' },
    { name: 'Features', path: 'features' },
    { name: 'How It Works', path: 'how-it-works' },
    { name: 'Live Demo', path: 'live-demo' },
    { name: 'Tech Stack', path: 'tech-stack' },
    { name: 'Team / About', path: 'team' },
    { name: 'Contact', path: 'contact' },
  ];

  return (
    <nav className="bg-white shadow-lg py-4 px-6 fixed w-full z-50 top-0 animate-fadeIn rounded-b-xl">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-indigo-700">
          <a href="#home" onClick={() => navigateTo('home')} className="hover:text-indigo-900 transition-colors duration-300">
            TapShield
          </a>
        </div>
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.path}>
              <a
                href={`#${item.path}`}
                onClick={() => navigateTo(item.path)}
                className={`text-gray-600 hover:text-indigo-700 transition-colors duration-300 font-medium relative
                  ${currentPage === item.path ? 'text-indigo-700 font-semibold' : ''}`}
              >
                {item.name}
                {currentPage === item.path && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-700 transform scale-x-0 origin-left animate-scaleX"></span>
                )}
              </a>
            </li>
          ))}
        </ul>
        <div className="md:hidden">
          <button className="text-gray-600 hover:text-indigo-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
