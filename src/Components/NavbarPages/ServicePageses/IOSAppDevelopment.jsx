import React from 'react';
import img1 from '../../../assets/ios.png';

const IOSAppDevelopment = () => {
  return (
    <div className="relative py-8 sm:py-12 md:py-16 bg-white">
      {/* Mobile/Tablet Layout - Content First */}
      <div className="lg:hidden flex flex-col px-4">
        {/* Content */}
        <div className="w-full">
          <h1 className="text-3xl md:text-4xl font-light text-gray-500 mb-4 sm:mb-6">
            iOS Application Development
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-500 mb-6 sm:mb-8 leading-relaxed">
            Tailored iOS applications that solve your specific business problems with elegance, speed, and seamless 
            performance. Whether it's boosting productivity, engaging customers, or innovating your operations — 
            our iOS development services deliver intuitive solutions built with your goals in mind.
          </p>
          
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 sm:mb-6">
            Our iOS App Solutions
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <ul className="space-y-2 text-base sm:text-lg md:text-xl text-gray-600">
              <li className="flex items-start"><span className="mr-2">•</span>iPhone App Development</li>
              <li className="flex items-start"><span className="mr-2">•</span>iPad App Development</li>
              <li className="flex items-start"><span className="mr-2">•</span>Apple Watch Apps</li>
              <li className="flex items-start"><span className="mr-2">•</span>Custom Business Apps</li>
              <li className="flex items-start"><span className="mr-2">•</span>App Store Optimization</li>
            </ul>
            <ul className="space-y-2 text-base sm:text-lg md:text-xl text-gray-600">
              <li className="flex items-start"><span className="mr-2">•</span>Swift & Objective-C Development</li>
              <li className="flex items-start"><span className="mr-2">•</span>UI/UX for iOS</li>
              <li className="flex items-start"><span className="mr-2">•</span>Third-party API Integrations</li>
            </ul>
          </div>
        </div>

        {/* Image - Now at bottom for mobile/tablet */}
        <div className="w-full flex justify-center mt-8">
          <img 
            src={img1} 
            alt="iOS Development" 
            className="w-full max-w-[350px] sm:max-w-[400px] h-auto object-contain"
          />
        </div>
      </div>

      {/* Desktop Layout - Side by Side (Unchanged) */}
      <div className="hidden lg:flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 gap-10">
        {/* Left Section - Image */}
        <div className="w-full lg:w-1/2 flex justify-start">
          <img 
            src={img1} 
            alt="iOS Development" 
            className="max-w-[35vw] h-[30vw] ml-[-5vw] lg:ml-[5vw] object-contain"
          />
        </div>

        {/* Right Section - Text */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl md:text-5xl font-light text-gray-500 mb-6">
            iOS Application Development
          </h1>
          
          <p className="text-xl text-gray-500 mb-8 leading-relaxed">
            Tailored iOS applications that solve your specific business problems with elegance, speed, and seamless 
            performance. Whether it's boosting productivity, engaging customers, or innovating your operations — 
            our iOS development services deliver intuitive solutions built with your goals in mind.
          </p>
          
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Our iOS App Solutions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <ul className="space-y-2 text-xl text-gray-600">
              <li className="flex items-start"><span className="mr-2">•</span>iPhone App Development</li>
              <li className="flex items-start"><span className="mr-2">•</span>iPad App Development</li>
              <li className="flex items-start"><span className="mr-2">•</span>Apple Watch Apps</li>
              <li className="flex items-start"><span className="mr-2">•</span>Custom Business Apps</li>
              <li className="flex items-start"><span className="mr-2">•</span>App Store Optimization</li>
            </ul>
            <ul className="space-y-2 text-xl text-gray-600">
              <li className="flex items-start"><span className="mr-2">•</span>Swift & Objective-C Development</li>
              <li className="flex items-start"><span className="mr-2">•</span>UI/UX for iOS</li>
              <li className="flex items-start"><span className="mr-2">•</span>Third-party API Integrations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IOSAppDevelopment;