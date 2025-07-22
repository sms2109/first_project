    // src/components/TechStack.jsx
    import React from 'react';

    const StackCategory = ({ title, items, icon }) => (
      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slideInUp">
        <div className="text-indigo-600 mb-4 text-5xl flex justify-center">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{title}</h3>
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );

    const TechStack = () => {
      const hardware = [
        'Arduino Nano', 'Piezo Sensor', 'SIM800L GSM Module', 'Vibration motor',
      ];
      const softwareAI = [
        'Edge Impulse', 'TinyML Inference Code', 'C++ (Arduino IDE)', 'Serial Monitoring',
      ];
      const powerSystem = [
        'LiPo 3.7V Battery', 'TP4056 Charging Module', 'Voltage Regulator (5V)',
      ];

      return (
        <section id="tech-stack" className="py-20 md:py-24 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-16 animate-fadeIn">
              Technology Stack
            </h2>
            <p className="text-center text-gray-700 text-xl italic mb-12 animate-slideInUp animation-delay-300">
              "Built for real-world emergencies - simple, scalable, and smart."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <StackCategory title="Hardware" items={hardware} icon="⚙️" />
              <StackCategory title="Software & AI" items={softwareAI} icon="💻" />
              <StackCategory title="Power System" items={powerSystem} icon="🔋" />
            </div>
          </div>
        </section>
      );
    };

    export default TechStack;
    