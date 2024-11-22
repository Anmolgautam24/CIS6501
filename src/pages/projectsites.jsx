import React from 'react';
import HeroSection from '../components/Herosection';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Chatbot from '../components/Chatbot';
const projectSites = [
  {
    name: 'North Fork',
    imageUrl: 'https://cdn.prod.website-files.com/656e01d2cc0e5b21b8f1be9b/656e01d2cc0e5b21b8f1bf65_north-fork-logos.png',
    description: 'Commissioning February 2024 – Generating 2MW of electricity.',
  },
  {
    name: 'Willseyville',
    imageUrl: 'https://cdn.prod.website-files.com/656e01d2cc0e5b21b8f1bec4/656e01d2cc0e5b21b8f1bf88_Mask%20Group-2.png',
    description: 'Commissioning June 2025 – Generating 3MW of electricity.',
  },
  {
    name: 'Modesto',
    imageUrl: 'https://cdn.prod.website-files.com/656e01d2cc0e5b21b8f1bec4/656e01d2cc0e5b21b8f1bf5c_Mask%20Group-3.png',
    description: 'Under development – Supporting local carbon removal efforts.',
  },
  {
    name: 'Merced',
    imageUrl: 'https://cdn.prod.website-files.com/656e01d2cc0e5b21b8f1bec4/656e01d2cc0e5b21b8f1bf8a_Mask%20Group.png',
    description: 'Under development – Focused on sustainable energy generation.',
  },
];

const partners = [
  {
    name: 'Sunpork',
    logoUrl: 'https://img1.wsimg.com/isteam/ip/d6310cd6-91d6-41fd-b441-961abbdfd491/Sunpork.png',
    description: 'Partnering to provide reliable and sustainable power solutions.',
  },
  {
    name: 'North Fork Community Power',
    logoUrl: 'https://cdn.prod.website-files.com/656e01d2cc0e5b21b8f1bec4/656e01d2cc0e5b21b8f1becc_NFCP%20Logo.png',
    description: 'Community partner focused on carbon removal projects.',
  },
  {
    name: 'USDA',
    logoUrl: 'https://cdn.prod.website-files.com/656e01d2cc0e5b21b8f1bec4/656e01d2cc0e5b21b8f1bf8f_USDA%20Rural%20Dev%20logo.png',
    description: 'Supporting sustainable development in rural areas.',
  },
  {
    name: 'CAL FIRE',
    logoUrl: 'https://cdn.prod.website-files.com/656e01d2cc0e5b21b8f1bec4/656e01d2cc0e5b21b8f1bf8b_Group%20289.png',
    description: 'Collaborating on fire risk reduction and land management.',
  },
];

function ProjectSites() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        imageUrl="https://assets-global.website-files.com/656e01d2cc0e5b21b8f1be9b/656e01d2cc0e5b21b8f1bf64_project-sites-hero.jpg"
        title="We are building 50 carbon removal plants over the next 10 years"
        description="We are making incredible progress. In that decade, we will have removed 2.8M MTCO2e or more."
        buttonLink="/products"
      />

      {/* Project Spotlight Section */}
      <section className="py-12 bg-gray-100">
        <h2 className="text-4xl font-bold text-center text-primary mb-8">Project Spotlight</h2>
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg border-l-4 border-primary space-y-6">
          <p className="text-lg text-gray-700 text-center">
            Our <strong>North Fork Community Power Plant</strong> in North Fork, CA will be commissioning in February 2024, and <strong>Blue Mountain Electric Company</strong> in Wilseyville, CA will be commissioning in June 2025.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4">
            <li>Reduce the risk of wildfire.</li>
            <li>Support family-sustaining jobs and job training in the community.</li>
            <li>Provide reliable backup power for rural regions.</li>
            <li>Generate net-negative emissions from high-hazard fuels.</li>
          </ul>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <div className="border-2 border-primary p-6 rounded-lg shadow text-center transition hover:shadow-md">
              <h4 className="text-xl font-bold text-secondary">North Fork Community Power</h4>
              <p className="text-sm text-gray-600 mb-2">Commissioning February 2024</p>
              <p className="text-lg font-semibold text-gray-700">Generating 2MW of electricity.</p>
            </div>
            <div className="border-2 border-primary p-6 rounded-lg shadow text-center transition hover:shadow-md">
              <h4 className="text-xl font-bold text-secondary">Blue Mountain Electric Company</h4>
              <p className="text-sm text-gray-600 mb-2">Commissioning June 2025</p>
              <p className="text-lg font-semibold text-gray-700">Generating 3MW of electricity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Sites Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-6">Project Sites</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {projectSites.map((site, index) => (
            <div
              key={index}
              className="relative w-64 sm:w-80 md:w-96 h-64 bg-cover bg-center rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
              style={{ backgroundImage: `url(${site.imageUrl})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity text-white p-4 text-center">
                <span className="text-lg font-semibold">{site.description}</span>
              </div>
              <div className="bg-black bg-opacity-60 h-full w-full flex items-center justify-center text-white text-2xl font-semibold">
                {site.name}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-6">Project Partners and Customers</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="w-40 sm:w-48 lg:w-56 flex flex-col items-center bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105 text-center"
            >
              <img src={partner.logoUrl} alt={partner.name} className="h-20 object-contain mb-2" />
              <p className="text-sm font-medium text-gray-700">{partner.name}</p>
              <p className="text-xs text-gray-500">{partner.description}</p>
            </div>
          ))}
        </div>
      </section>
      <Chatbot />
    </div>
  );
}

export default ProjectSites;
