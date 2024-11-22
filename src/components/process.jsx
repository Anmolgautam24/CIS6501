import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const processStages = [
  {
    title: "Local Supply in (Avoidance)",
    description: "We process waste left to rot in the forest, fields, or landfill that would otherwise emit greenhouse gases like methane and CO2. Our plants are built at the source of the waste to avoid an additional transportation footprint.",
  },
  {
    title: "Carbon Negative Conversion Process (Removal)",
    description: "We bake, don’t combust. Highly efficient energy generation - no pipeline leakage, no line loss, no fine particulate matter (PM2.5) released into the air. CO2 does not enter the atmosphere from our process.",
  },
  {
    title: "Energy and Carbon Sales (Sequestration)",
    description: "We lock up CO2 for good. More importantly, we support our customers like PG&E, farmers, and municipalities with their own emission reduction programs through sales of our firm renewable power, stable carbon, and offsets via the voluntary carbon market.",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50, // Start slightly below view
    borderColor: 'transparent',
  },
  visible: {
    opacity: 1,
    y: 0,
    borderColor: '#003366', 
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

function Process() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % (processStages.length + 1));
    }, 1300); 

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <section className="bg-white mt-6">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-10">Our Process</h2>

        <div className="flex flex-col lg:flex-row justify-between items-start relative">
          {processStages.map((stage, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center mx-4 mb-6 lg:mb-0 p-6 bg-gray-100 border-4 rounded-lg flex-grow"
              initial="hidden"
              whileInView="visible" // Trigger animation when in view
              viewport={{ once: true }} // Animate only once when scrolling into view
              variants={cardVariants}
            >
              {/* Number Indicator */}
              <span className="absolute top-[-12px] left-[-12px] bg-white rounded-full border-4 border-primary text-primary font-bold w-10 h-10 flex items-center justify-center">
                {index + 1}
              </span>

              {/* Card Content */}
              <div className="text-left">
                <h3 className="text-xl font-semibold text-primary mb-2">{stage.title}</h3>
                <p className="text-gray-700 font-semibold">{stage.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
