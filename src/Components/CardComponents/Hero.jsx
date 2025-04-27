import React from "react";

const Hero = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Protect Your Web App with AstraPent</h1>
        <p className="mt-4 text-lg">
          Advanced penetration testing and security solutions.
        </p>
        <div className="mt-6">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md mr-4 hover:bg-blue-600 transition">
            Get Started
          </button>
          <button className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
