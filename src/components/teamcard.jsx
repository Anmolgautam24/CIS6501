import React from 'react';

const TeamCard = ({ image, name, position, description }) => {
  return (
    <div className="max-w-xs w-full bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 duration-300">
      {/* Image Section */}
      <img className="w-full py-4  px-4 h-56 rounded-lg object-cover" src={image} alt={`${name}`} />
      
      {/* Content Section */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">{name}</h3>
        <p className="text-sm text-gray-500 font-medium mb-4">{position}</p>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        
        {/* Social Icons */}
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
            <i className="fas fa-globe"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
