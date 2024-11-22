import React from 'react';
import HeroSection from '../components/Herosection';
import TeamCard from '../components/teamcard';
import Chatbot from '../components/Chatbot';

const AboutUs = () => {
  const teamMembers = [
    { image: 'https://cdn.prod.website-files.com/656e01d2cc0e5b21b8f1bec4/656e01d2cc0e5b21b8f1bf93_Gregory-Stangl.jpg', name: 'Gregory Stangl', position: 'CEO' },
    { image: 'https://cdn.prod.website-files.com/656e01d2cc0e5b21b8f1bec4/656e01d2cc0e5b21b8f1bf94_Kelly-Laurel.jpg', name: 'Kelly Laurel', position: 'Finance' },
    { image: 'https://cdn.prod.website-files.com/656e01d2cc0e5b21b8f1bec4/656e01d2cc0e5b21b8f1bf95_Todd-Machado.jpg', name: 'Todd Machado', position: 'Plants Ops & Training' },
    { image: 'https://cdn.prod.website-files.com/656e01d2cc0e5b21b8f1bec4/656e01d2cc0e5b21b8f1bf96_Loni-Austin.jpg', name: 'Loni Austin', position: 'Biochar & Ecosystem Services' },
    { image: 'https://cdn.prod.website-files.com/656e01d2cc0e5b21b8f1bec4/656e01d2cc0e5b21b8f1bf97_Jill-Micheau.jpg', name: 'Jill Micheau', position: 'Government Relations' },
  ];

  const advisors = [
    { image: 'https://cdn.prod.website-files.com/656e01d2cc0e5b21b8f1bec4/656e01d2cc0e5b21b8f1bf9b_Dickesron.9.2MP-p-500.jpg', name: 'Joyce Dickerson', position: 'Advisor' },
    { image: 'https://cdn.prod.website-files.com/656e01d2cc0e5b21b8f1bec4/656e01d2cc0e5b21b8f1bf9a_James-Schweitzer.jpg', name: 'James Schweitzer', position: 'Advisor' },
    { image: 'https://cdn.prod.website-files.com/656e01d2cc0e5b21b8f1bec4/656e01d2cc0e5b21b8f1bf99_Bill-Cimino.jpg', name: 'Bill Cimino', position: 'Advisor' },
    { image: 'https://cdn.prod.website-files.com/656e01d2cc0e5b21b8f1bec4/656e01d2cc0e5b21b8f1bf98_Ty-Jagerson.jpg', name: 'Ty Jagerson', position: 'Advisor' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection
        imageUrl="https://assets-global.website-files.com/656e01d2cc0e5b21b8f1be9b/656e01d2cc0e5b21b8f1bf68_construction-worker-hero.jpg"
        title="About Phoenix Energy"
        description="In classical mythology, the Phoenix symbolizes immortality, resurrection, and life after death. At Phoenix Energy, we take 'dead' materials like waste biomass and ag residues and bring it back to life in new useful forms such as biochar and firm renewable energy. At Phoenix we eat our own dogfood when we say that renewal is an important part of the Earth's cycle...regenerating life is in our team's ethos and the focus of our corporate strategy."
        buttonLink="/products"
      />

      {/* Team Section */}
      <section className="container mx-auto px-6 mb-16">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-700">The Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard 
              key={index}
              image={member.image}
              name={member.name}
              position={member.position}
              description="Description about the team member."
            />
          ))}
        </div>
      </section>

      {/* Advisors Section */}
      <section className="container mx-auto px-6 mb-16">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-700">Advisors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {advisors.map((advisor, index) => (
            <TeamCard 
              key={index}
              image={advisor.image}
              name={advisor.name}
              position={advisor.position}
              description="Advisor description here."
            />
          ))}
        </div>
      </section>
      <Chatbot />
    </div>
  );
};

export default AboutUs;
