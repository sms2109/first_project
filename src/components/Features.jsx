// src/components/Features.jsx
import React from 'react';

const FeatureCard = ({ title, description, icon }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slideInUp">
    <div className="text-indigo-600 mb-4 text-5xl flex justify-center">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

const Features = () => {
  const innovations = [
    { title: 'On-device AI', description: 'Works without internet or cloud, ensuring reliability anywhere.', icon: '🧠' },
    { title: 'Tap-to-alert', description: 'No voice, no button, just a simple tap for discreet activation.', icon: '👆' },
    { title: 'Silent Activation', description: 'Designed for dangerous situations where discretion is key.', icon: '🤫' },
    { title: 'GSM-based SMS', description: 'Works in remote areas with no app needed, leveraging basic mobile networks.', icon: '📶' },
  ];

  const impacts = [
    { title: 'Women Under Threat', description: 'Provides a silent lifeline during stalking, abuse, or abduction.', icon: '♀️' },
    { title: 'Elderly Medical Emergency', description: 'Immediate alerts for falls or health crises when unable to speak.', icon: '👵' },
    { title: 'Disabled Individuals', description: 'Offers a vital communication method for those with limited mobility or speech.', icon: '♿' },
    { title: 'Remote Areas', description: 'Ensures safety in locations with poor signal or no internet access.', icon: '🏞️' },
  ];

  return (
    <section id="features" className="py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-16 animate-fadeIn">
          Innovation & Impact
        </h2>
        <h3 className="text-3xl font-bold text-center text-indigo-700 mb-10 animate-slideInUp">
          What Makes TapShield Innovative?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {innovations.map((feature, index) => (
            <FeatureCard key={index} title={feature.title} description={feature.description} icon={feature.icon} />
          ))}
        </div>
        <h3 className="text-3xl font-bold text-center text-indigo-700 mb-10 animate-slideInUp">
          Real-World Impact
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((impact, index) => (
            <FeatureCard key={index} title={impact.title} description={impact.description} icon={impact.icon} />
          ))}
        </div>
        <p className="text-center text-gray-700 text-xl italic mt-16 animate-fadeIn">
          "A single tap can be the difference between silence and survival."
        </p>
      </div>
    </section>
  );
};

export default Features;
