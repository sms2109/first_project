    // src/components/Contact.jsx
    import React from 'react';

    const Contact = () => {
      return (
        <section id="contact" className="py-20 md:py-24 bg-gradient-to-br from-indigo-100 to-blue-100">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-16 animate-fadeIn">
              Get in Touch
            </h2>
            <p className="text-gray-700 text-xl mb-12 max-w-2xl mx-auto animate-slideInUp">
              Have questions about TapShield, or want to collaborate? Feel free to reach out to us.
            </p>
            <div className="bg-white p-10 rounded-xl shadow-lg max-w-lg mx-auto animate-slideInUp animation-delay-300">
              <h3 className="text-3xl font-bold text-indigo-700 mb-6">Contact Information</h3>
              <div className="space-y-4 text-lg text-gray-700">
                <p className="flex items-center justify-center">
                  <span className="text-indigo-600 mr-3 text-2xl">📧</span>
                  Email: <a href="mailto:runtimeterror1.team@gmail.com" className="ml-2 text-blue-500 hover:underline">runtimeterror1.team@gmail.com</a>
                </p>
                <p className="flex items-center justify-center">
                  <span className="text-indigo-600 mr-3 text-2xl">📍</span>
                  Team: Runtime Terror
                </p>
                <p className="flex items-center justify-center">
                  <span className="text-indigo-600 mr-3 text-2xl">🏆</span>
                  Hackathon: Triwizardathon 1.0 - Hackathon 2025
                </p>
              </div>
            </div>
          </div>
        </section>
      );
    };

    export default Contact;
    