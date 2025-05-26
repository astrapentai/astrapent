import React from 'react';

const AndApp = () => {
  return (
    <div 
      className="w-full min-h-[60vh] bg-cover bg-center py-12 px-4 sm:px-6 lg:px-8"
      style={{ 
        backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://pungent-react.envytheme.com/images/page-banner1.jpg')",
        backgroundColor: '#6b7280' // fallback color
      }}
    >
      <div className="max-w-7xl mx-auto mt-[10vw]">
        <h1 className="text-4xl font-bold text-center text-white sm:text-5xl md:text-6xl">
          Mobile App Development
        </h1>
      </div>
    </div>
  );
};

export default AndApp;