import React, { useState, useEffect } from 'react';
import { FaTree, FaWater } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const impacts = [
  {
    icon: <FaTree className="text-6xl text-green-500" />, // Increased icon size
    shortDetail: "2.8M MT",
    description: "Carbon (CO2e) removed from the atmosphere each year",
    additionalDetails: "This remarkable achievement contributes significantly to global climate goals, promoting a healthier planet for future generations.",
  },
  {
    icon: <FaWater className="text-6xl text-blue-500" />,
    shortDetail: "0.5M MT",
    description: "Carbon (CO2e) prevented from entering the atmosphere",
    additionalDetails: "By preventing this amount of carbon from entering, we enhance air quality and reduce harmful pollutants, ensuring a safer environment.",
  },
  {
    icon: <FaTree className="text-6xl text-yellow-500" />,
    shortDetail: "174 MW",
    description: "Firm renewable energy generated",
    additionalDetails: "Our renewable energy initiatives support sustainable development and reduce reliance on fossil fuels, paving the way for a greener future.",
  },
];

function Impact() {
  const [currentImpactIndex, setCurrentImpactIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImpactIndex((prevIndex) => (prevIndex + 1) % impacts.length);
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="bg-gradient-to-r from-green-400 to-blue-500 py-12 mt-6 text-white">
      <div className="max-w-screen-lg mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-10">
          Our Impact Over the Next 10 Years
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
          {/* Circle Column */}
          <div className="flex flex-col items-center">
            <motion.div
              className="bg-transparent rounded-full border-4 border-white shadow-lg p-8 text-center relative overflow-hidden h-64 w-64 flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-center mb-4">
                {impacts[currentImpactIndex].icon}
              </div>
              <h3 className="text-2xl font-bold font-serif">{impacts[currentImpactIndex].shortDetail}</h3>
            </motion.div>
          </div>

          {/* Details Column */}
          <div className="text-center max-w-md">
            <AnimatePresence>
              <motion.h3
                className="text-3xl font-bold font-serif mb-4 text-secondary"
                key={currentImpactIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
              >
                {impacts[currentImpactIndex].description}
              </motion.h3>
              <motion.p
                className="text-lg font-semibold font-serif text-white/90"
                key={`details-${currentImpactIndex}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
              >
                {impacts[currentImpactIndex].additionalDetails}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Impact;
