import React from 'react';
import img1 from '../../../assets/Web.png';

const WebDevelopmentSection = () => {
  return (
    <div className="w-full mx-auto px-4 sm:px-6 py-8 sm:py-12 bg-gray-100 min-h-[70vh]">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-8xl mx-auto gap-6 lg:gap-10">

        {/* Left Section - Text Content */}
        <div className="w-full lg:w-1/2 px-4 lg:ml-[18vw]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-500 mb-4 sm:mb-6">Web Development</h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-500 mb-6 sm:mb-8 leading-relaxed">
            At AstraPent AI, we build fast, responsive, and secure websites tailored to grow your business online.<br className="hidden sm:block" />
            Cross-browser and cross-device compatibility driven by mobile<br className="hidden sm:block" />
            responsiveness all under one roof. Starting from basic<br className="hidden sm:block" />
            website designs, including CMS and online store building to highly<br className="hidden sm:block" />
            complex business website apps and design solutions, we will<br className="hidden sm:block" />
            customize the best of web development solutions for you.
          </p>


          <h2 className="text-2xl sm:text-3xl font-medium text-gray-600 mb-4 sm:mb-6">Our Web Development Services</h2>

          <div className="space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-11">
              <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg md:text-xl text-gray-600">
                <li>Custom Application Development</li>
                <li>Content Management System <br className="hidden sm:block" />(CMS)</li>
              </ul>
              <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg md:text-xl text-gray-600">
                <li>Ecommerce Development</li>
                <li>MEAN Stack Development</li>
                <li>Social Media Apps</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
          <img
            src={img1}
            alt="Web Development"
            className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[30vw] h-auto max-h-[400px] sm:max-h-[500px] lg:h-[30vw] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default WebDevelopmentSection;