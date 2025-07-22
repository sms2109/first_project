    // src/components/Team.jsx
    import React from 'react';

    const TeamMemberCard = ({ name, role, description, email }) => (
      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slideInUp">
        <div className="w-32 h-32 bg-indigo-200 rounded-full flex items-center justify-center text-5xl text-indigo-700 font-bold mb-6">
          {name.charAt(0)}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-indigo-600 text-lg font-semibold mb-4">{role}</p>
        <p className="text-gray-600 mb-4">{description}</p>
        {email && (
          <a href={`mailto:${email}`} className="text-blue-500 hover:underline">
            {email}
          </a>
        )}
      </div>
    );

    const Team = () => {
      const teamMembers = [
        { name: 'Vikram Solanki', role: 'AI Model, ML, GSM and Arduino', description: 'Expert in developing the core AI model and integrating hardware components.', email: 'runtimeterror1.team@gmail.com' },
        { name: 'Vikas', role: 'Circuit Design, Pitch and Presentation', description: 'Responsible for the robust circuit design and compelling presentations.', email: 'runtimeterror1.team@gmail.com' },
        { name: 'Rahul Tak', role: 'AI & ML, Pitch and Presentation', description: 'Contributed significantly to AI/ML development and project communication.', email: 'runtimeterror1.team@gmail.com' },
        { name: 'Sheshkaran', role: 'ML and Web Development', description: 'Focused on machine learning implementation and building the web presence.', email: 'runtimeterror1.team@gmail.com' },
      ];

      return (
        <section id="team" className="py-20 md:py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-16 animate-fadeIn">
              Meet the Team: Runtime Terror
            </h2>
            <p className="text-center text-gray-700 text-xl italic mb-12 animate-slideInUp animation-delay-300">
              "Silent safety. Smart protection. One tap at a time."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {teamMembers.map((member, index) => (
                <TeamMemberCard key={index} name={member.name} role={member.role} description={member.description} email={member.email} />
              ))}
            </div>
            <div className="mt-16 text-center animate-fadeIn animation-delay-500">
              <p className="text-gray-700 text-lg font-semibold">Hackathon: Triwizardathon 1.0 - Hackathon 2025</p>
            </div>
          </div>
        </section>
      );
    };

    export default Team;
    