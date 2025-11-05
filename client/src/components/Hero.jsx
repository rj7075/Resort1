// src/components/Hero.jsx
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const heroImageUrl =
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1470&q=80"; // default resort image

  return (
    <div
      className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImageUrl})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 text-white max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Our Resort
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Experience luxury and tranquility like never before
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/#rooms"
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors"
          >
            Book Your Stay
          </Link>
          <Link
            to="/stories"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors"
          >
            Explore Our Stories
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
