import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/Herosection';
import Chatbot from '../components/Chatbot';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Product() {
  const services = [
    {
      title: "Renewable Energy Sales",
      description:
        "Currently we sell electricity to PG&E and other leading utilities under long-term fixed price contracts. Our co-located carbon removal plants can help you power your company operations with 24/7 firm renewable power behind the meter.",
      buttonText: "Contact us for more information",
      link: "#",
      gradient: "from-blue-50 to-blue-100",
      icon: "🌞", // Emoji for illustration, replace with icons if needed
    },
    {
      title: "Carbon Credits",
      description:
        "We hold forward contracts for current and future projects with leading carbon brokers for CO₂ generated, removed, and sequestered during production of our high-quality biochar. Our carbon credits can help your company reach its emission goals.",
      buttonText: "Learn more about our carbon credits",
      link: "#",
      gradient: "from-green-50 to-green-100",
      icon: "🌍",
    },
    {
      title: "Biochar Sales",
      description:
        "We sell and market high-quality biochar through our brand, Earthworks Biochar. Biochar can be used to increase soil fertility, improve water quality, reduce greenhouse gas emissions, and more.",
      buttonText: "Contact us to purchase Biochar",
      link: "#",
      gradient: "from-yellow-50 to-yellow-100",
      icon: "🌱",
    },
  ];

  const workSections = [
    {
      title: "How we work in the forest",
      points: [
        {
          icon: "🌲",
          title: "Forest Management",
          description: "Decades of poor forest management have led to overcrowding, making fires more severe.",
        },
        {
          icon: "🔥",
          title: "Fire Risk Reduction",
          description: "Dry trees and climate change create higher temperatures, fueling fires.",
        },
        {
          icon: "🌎",
          title: "Community Collaboration",
          description: "We work with local communities to reduce fire risk, preserving ecosystems and reducing air pollution.",
        },
      ],
    },
    {
      title: "How we work in the landfill",
      points: [
        {
          icon: "🌾",
          title: "Waste Management",
          description: "California's agricultural state leads to large waste, causing methane emissions.",
        },
        {
          icon: "🗑️",
          title: "Waste Diversion",
          description: "We divert organic waste, reducing methane emissions and promoting composting.",
        },
        {
          icon: "⏳",
          title: "Climate Abatement",
          description: "Our work reduces waste in landfills, supporting climate abatement measures.",
        },
      ],
    },
  ];

  return (
    <div className="px-4 mx-0 py-4">
      <HeroSection
        imageUrl="https://assets-global.website-files.com/656e01d2cc0e5b21b8f1be9b/656e01d2cc0e5b21b8f1beea_image%201.jpg"
        title="Our products keep CO₂ out of the air"
        description="We provide innovative solutions for carbon removal, biochar sales, and renewable energy."
        buttonLink="/products"
      />

      {/* Services Section */}
      <div className="flex flex-col lg:flex-row gap-8 my-16">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className={`flex-1 p-8 bg-gradient-to-br ${service.gradient} shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 border-2 border-primary`}
          >
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-4xl">{service.icon}</span>
              <h3 className="text-2xl font-bold text-primary">{service.title}</h3>
            </div>
            <p className="text-gray-700 mb-6">{service.description}</p>
            <div className="flex items-center">
              <a
                href={service.link}
                className="inline-flex items-center px-4 py-2 text-sm font-semibold text-primary bg-white border border-primary rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
              >
                {service.buttonText}
                <span className="ml-2 text-lg transition-transform duration-300 transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* "How we work" Sections */}
      <div className="space-y-16">
        {workSections.map((section, index) => (
          <div key={index}>
            <h3 className="text-3xl font-bold text-center text-primary mb-8">{section.title}</h3>
            <div className="flex flex-col md:flex-row gap-8">
              {section.points.map((point, pointIndex) => (
                <motion.div
                  key={pointIndex}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeIn}
                  viewport={{ once: true }}
                  className="flex-1 p-6 border-2 border-primary rounded-lg hover:border-primary transition-colors duration-300"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-3xl">{point.icon}</span>
                    <h4 className="text-xl font-semibold text-primary">{point.title}</h4>
                  </div>
                  <p className="text-gray-600">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Last Section */}
      <div
        className="relative flex flex-col lg:flex-row items-center justify-center text-center lg:text-left py-24 px-4 bg-cover bg-center text-white mt-6"
        style={{
          backgroundImage: 'url(https://assets-global.website-files.com/656e01d2cc0e5b21b8f1be9b/656e01d2cc0e5b21b8f1bf48_forest-beach-mobile.png)',
          backgroundColor: '#0f766e',
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="lg:w-1/2 mx-5">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our carbon removal plants are <span className="text-white">community scale</span> and <span className="text-white">built at the fuel source</span>.
          </h2>
          <a
            href="#"
            className="mt-6 inline-flex items-center px-6 py-3 text-lg font-semibold bg-primary text-white rounded-full hover:bg-primary-dark transition-colors duration-300"
          >
            Learn more about our projects
            <span className="ml-2 text-xl">→</span>
          </a>
        </div>
        <div className="hidden lg:block lg:w-1/2 mx-5">
          <img
            src="https://assets-global.website-files.com/656e01d2cc0e5b21b8f1be9b/656e01d2cc0e5b21b8f1bf48_forest-beach-mobile.png"
            alt="Forest landscape"
            className="rounded-lg shadow-lg max-w-[50%] mx-auto"
          />
        </div>
      </div>
      <Chatbot />

    </div>
  );
}

export default Product;
