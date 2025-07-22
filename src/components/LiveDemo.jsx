// src/components/LiveDemo.jsx
import React from 'react';

const LiveDemo = () => {
  const futureScopeItems = [
    'GPS Integration - Send location along with SOS',
    'Battery Optimization - For 5+ days standby',
    'Companion App - For setup, contacts & pattern management',
    'Voice Activation Backup - For optional voice trigger',
    'Community SOS Network - Auto-alert nearby volunteers',
  ];

  return (
    <section id="live-demo" className="py-20 md:py-24 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-16 animate-fadeIn">
          Live Demo & Future Scope
        </h2>
        <div className="bg-white p-10 rounded-xl shadow-lg mb-16 animate-slideInUp">
          <h3 className="text-3xl font-bold text-indigo-700 mb-6">Experience TapShield in Action</h3>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            While we refine our interactive demo, imagine this: a simple tap on the device,
            and within seconds, an SOS message with live location is sent to your trusted contacts.
            Our prototype has successfully demonstrated real-time tap input, AI model inference,
            and GSM message delivery.
          </p>
          <div className="w-full max-w-3xl mx-auto bg-gray-200 rounded-lg overflow-hidden aspect-video flex items-center justify-center text-gray-500 text-xl font-semibold border-2 border-dashed border-gray-400">
            <p>Demo Video Placeholder</p>
          </div>
          <p className="text-gray-600 text-sm mt-4">
            (Image/Video illustrating: Real-time tap input → AI model inference → Successful GSM message test with SIM800L → Preview of SMS received with live location)
          </p>
        </div>
        <div className="bg-white p-10 rounded-xl shadow-lg animate-slideInUp animation-delay-300">
          <h3 className="text-3xl font-bold text-indigo-700 mb-6">Our Vision for the Future</h3>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            TapShield is more than a prototype - it's a platform for silent safety. We are continuously
            innovating to enhance its capabilities and reach.
          </p>
          <ul className="list-disc list-inside text-left text-gray-700 text-lg max-w-xl mx-auto space-y-3">
            {futureScopeItems.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-indigo-600 mr-2 text-xl">✨</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-center text-gray-700 text-xl italic mt-16 animate-fadeIn">
          "TapShield is more than a prototype - it's platform for silent safety."
        </p>
      </div>
    </section>
  );
};

export default LiveDemo;
