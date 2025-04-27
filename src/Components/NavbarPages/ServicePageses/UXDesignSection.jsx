import React from 'react';
import img1 from '../../../assets/UIUX.png';

const UXDesignSection = () => {
  return (
    <div className="w-full mx-auto px-4 sm:px-6 py-8 sm:py-12 bg-gray-100">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-8xl mx-auto gap-6 lg:gap-10">
        {/* Left Section - Text Content */}
        <div className="w-full lg:w-1/2 px-4 lg:ml-[18vw] mt-6 lg:mt-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-500 mb-4 sm:mb-6">
            UI/UX Design
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-500 mb-6 sm:mb-8 leading-relaxed">
            Beautiful interfaces that enhance user experience and increase <br className="hidden sm:block" />
            conversion rates. At Acoder, our UI/UX design team focuses<br className="hidden sm:block" /> on crafting 
            visually appealing, user-centric designs that align <br className="hidden sm:block" /> with your brand and business 
            goals. We believe in seamless interactions, intuitive navigation, and elegant 
            design systems that elevate your digital presence.
          </p>

          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 sm:mb-6">
            Our UI/UX Design Services
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 lg:gap-28">
            <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg md:text-xl text-gray-600">
              <li>User Research & Analysis</li>
              <li>Information Architecture</li>
              <li>Wireframing & Prototyping</li>
              <li>Visual Design</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg md:text-xl text-gray-600">
              <li>Interaction Design</li>
              <li>Usability Testing</li>
              <li>Responsive UI Design</li>
              <li>Conversion Optimization</li>
            </ul>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
          <img 
            src={img1} 
            alt="UI/UX Design" 
            className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[30vw] h-auto lg:h-[30vw] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default UXDesignSection;