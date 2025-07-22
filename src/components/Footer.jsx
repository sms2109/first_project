// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12 rounded-t-xl shadow-inner">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold mb-4">TapShield</p>
        <p className="text-gray-400 mb-2">"Silent safety. Smart protection. One tap at a time."</p>
        <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Runtime Terror. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-2 15h-2v-7h2v7zm4 0h-2v-7h2v7zm4 0h-2v-7h2v7zm-8-9h-2v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/></svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-2 15h-2v-7h2v7zm4 0h-2v-7h2v7zm4 0h-2v-7h2v7zm-8-9h-2v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
