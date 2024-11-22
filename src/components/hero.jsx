import React from 'react';
import ReactPlayer from 'react-player/youtube';
import { FaEnvelope, FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="relative h-screen flex flex-col">
      {/* Video Background */}
      <ReactPlayer
        url="https://youtu.be/U30PAL4Ym8U?si=YQvsnU2aP9eXKA5Z"
        playing
        loop
        muted
        width="100%"  // Use 100% to adapt to the parent container
        height="100%" // Use 100% to adapt to the parent container
        className="absolute top-0 left-0 -z-10 object-cover"
        controls={false}
        light={false}
        config={{
          youtube: {
            playerVars: {
              modestbranding: 1,
              showinfo: 0,
              controls: 0,
              rel: 0,
              autoplay: 1,
              playsinline: 1
            }
          }
        }}
      />

      {/* Overlay for gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 -z-10"></div>

      {/* Hero Content */}
      <div className="relative max-w-screen-xl mx-auto px-6 flex flex-col justify-center h-full">
        {/* Hero Text */}
        <div className="text-left pt-20">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-yellow-400 mb-4">
            We are building 50 carbon removal plants over the next 10 years
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white/90 mb-6">
            We are making incredible progress. In that decade, we will have removed 2.8M MTCO2e or more.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
            <Link
              to="/contact"
              className="flex items-center px-6 py-3 bg-yellow-500 text-white rounded-lg font-bold hover:bg-yellow-600 transition"
            >
              <FaEnvelope className="mr-2" />
              Contact Us
            </Link>
            <Link
              to="/about"
              className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition"
            >
              <FaInfoCircle className="mr-2" />
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
