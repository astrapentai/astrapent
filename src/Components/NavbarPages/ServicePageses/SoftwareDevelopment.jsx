import React from 'react';
import img1 from '../../../assets/Software.png';

const SoftwareDevelopment = () => {
  return (
    <div className="w-full mx-auto px-4 sm:px-6 py-8 sm:py-12 bg-gray-100 min-h-[70vh]">
      {/* Mobile/Tablet Layout - Content First */}
      <div className="lg:hidden flex flex-col">
        {/* Content */}
        <div className="w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-500 mb-4 sm:mb-6">
            Software Development
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-500 mb-6 sm:mb-8 leading-relaxed">
            Regular updates, security patches, and performance monitoring for your website are crucial to keeping your digital presence stable 
            and secure. Our end-to-end software development services include scalable solutions tailored to your business goals — ensuring smooth 
            operations, seamless integrations, and future-ready digital systems.
          </p>

          <h2 className="text-2xl sm:text-3xl font-medium text-gray-600 mb-4 sm:mb-6">
            Our Software Development Services
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-11">
            <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg md:text-xl text-gray-600">
              <li>Custom Application Development</li>
              <li>Software Maintenance & Support</li>
              <li>Performance Optimization</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg md:text-xl text-gray-600">
              <li>System Integrations</li>
              <li>Security Monitoring & Patching</li>
              <li>Legacy Software Modernization</li>
            </ul>
          </div>
        </div>

        {/* Image - Now at bottom for mobile/tablet */}
        <div className="w-full flex justify-center mt-8">
          <img 
            src={img1} 
            alt="Software Development" 
            className="w-full max-w-[300px] sm:max-w-[400px] h-auto object-contain"
          />
        </div>
      </div>

      {/* Desktop Layout - Side by Side (Unchanged) */}
      <div className="hidden lg:flex flex-col lg:flex-row items-center justify-between max-w-8xl mx-auto gap-10">
        {/* Left Section - Text Content */}
        <div className="w-full lg:w-1/2 ml-[18vw]">
          <h1 className="text-5xl font-light text-gray-500 mb-6">Software Development</h1>

          <p className="text-xl text-gray-500 mb-8 leading-relaxed">
            Regular updates, security patches, and performance monitoring <br />
            for your website are crucial to keeping your digital presence stable <br />
            and secure. Our end-to-end software development services include <br />
            scalable solutions tailored to your business goals — ensuring smooth <br />
            operations, seamless integrations, and future-ready digital systems.
          </p>

          <h2 className="text-3xl font-medium text-gray-600 mb-6">Our Software Development Services</h2>

          <div className="flex gap-11">
            <ul className="list-disc pl-6 space-y-2 text-xl text-gray-600">
              <li>Custom Application Development</li>
              <li>Software Maintenance & Support</li>
              <li>Performance Optimization</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2 text-xl text-gray-600">
              <li>System Integrations</li>
              <li>Security Monitoring & Patching</li>
              <li>Legacy Software Modernization</li>
            </ul>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img 
            src={img1} 
            alt="Software Development" 
            className="max-w-[30vw] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SoftwareDevelopment;