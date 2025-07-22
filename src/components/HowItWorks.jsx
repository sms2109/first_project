// src/components/HowItWorks.jsx
import React from 'react';

const StepCard = ({ number, title, description, delay }) => (
  <div
    className="flex flex-col items-center text-center bg-white p-8 rounded-xl shadow-lg animate-slideInUp"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="w-16 h-16 flex items-center justify-center bg-indigo-600 text-white rounded-full text-3xl font-bold mb-6 shadow-md">
      {number}
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const HowItWorks = () => {
  const steps = [
    { number: 1, title: 'User taps a preset pattern', description: 'A simple, custom tap pattern on the wearable device initiates the process.' },
    { number: 2, title: 'Tap Detected & AI Recognition', description: 'The on-device TinyML model instantly identifies the distress tap pattern.' },
    { number: 3, title: 'GSM Triggered', description: 'Upon recognition, the SIM800L module is activated to send an alert.' },
    { number: 4, title: 'Emergency Help', description: 'Guardian or emergency contacts receive an SOS SMS with live location.' },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-16 animate-fadeIn">
          How It Works?
        </h2>
        <p className="text-center text-gray-700 text-xl italic mb-12 animate-slideInUp animation-delay-300">
          "From Tap to rescue - under 2 Seconds"
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <StepCard key={index} number={step.number} title={step.title} description={step.description} delay={index * 200} />
          ))}
        </div>
        <div className="mt-20 flex justify-center items-center">
          <div className="hidden md:flex flex-col items-center">
            <div className="text-indigo-600 text-3xl mb-2">👆</div>
            <p className="text-gray-700 font-medium">Tap Input</p>
          </div>
          <div className="hidden md:block w-24 h-1 bg-indigo-300 mx-4 rounded-full animate-pulse"></div>
          <div className="hidden md:flex flex-col items-center">
            <div className="text-indigo-600 text-3xl mb-2">🧠</div>
            <p className="text-gray-700 font-medium">AI Recognition</p>
          </div>
          <div className="hidden md:block w-24 h-1 bg-indigo-300 mx-4 rounded-full animate-pulse animation-delay-500"></div>
          <div className="hidden md:flex flex-col items-center">
            <div className="text-indigo-600 text-3xl mb-2">📡</div>
            <p className="text-gray-700 font-medium">GSM Trigger</p>
          </div>
          <div className="hidden md:block w-24 h-1 bg-indigo-300 mx-4 rounded-full animate-pulse animation-delay-1000"></div>
          <div className="hidden md:flex flex-col items-center">
            <div className="text-indigo-600 text-3xl mb-2">🚨</div>
            <p className="text-gray-700 font-medium">SOS Alert</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
