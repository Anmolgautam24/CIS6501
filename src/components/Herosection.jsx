import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection({ imageUrl, title, description, buttonLink }) {
  return (
    <section className="relative w-full h-[500px] mb-16 sm:h-[400px] md:h-[450px]">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00334d]/90 via-[#00334d]/70 to-transparent">
          {/* Content Container */}
          <div className="container mx-auto px-6 h-full flex items-center">
            <div className="max-w-2xl sm:max-w-xl md:max-w-3xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#c3ecd6] mb-6">
                {title}
              </h1>
              <p className="text-white text-lg sm:text-xl md:text-xl leading-relaxed mb-8">
                {description}
              </p>
              <Link
                to={buttonLink}
                className="inline-flex items-center px-6 py-3 rounded-full bg-yellow-400 text-gray-900 hover:bg-yellow-300 transition-colors"
              >
                <span className="text-lg font-semibold">Explore our products</span>
                <span className="ml-2 text-2xl">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
