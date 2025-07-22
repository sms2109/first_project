// src/components/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-24 md:py-32 lg:py-40 min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute w-64 h-64 bg-indigo-500 rounded-full opacity-10 blur-3xl -top-10 -left-10 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl -bottom-20 -right-20 animate-pulse animation-delay-2000"></div>
      </div>
      <div className="container mx-auto px-6 text-center z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 animate-slideInUp">
          TapShield: <span className="block text-indigo-200 mt-2">Tap. Trigger. Trust.</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto animate-slideInUp animation-delay-500">
          Your silent guardian for unseen emergencies. Discreet, Offline, Life-saving.
        </p>
        <div className="flex justify-center space-x-4 animate-slideInUp animation-delay-1000">
          <a
            href="#features"
            className="bg-white text-indigo-700 hover:bg-indigo-100 px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Discover Features
          </a>
          <a
            href="#how-it-works"
            className="border-2 border-white text-white hover:bg-white hover:text-indigo-700 px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            See How It Works
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
