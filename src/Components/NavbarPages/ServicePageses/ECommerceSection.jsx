import React from 'react';
import img1 from '../../../assets/Ecom.png';

const ECommerceSection = () => {
  return (
    <div className="relative bg-white">
      {/* Mobile/Tablet Layout - Content First */}
      <div className="lg:hidden flex flex-col py-8 sm:py-12">
        {/* Content */}
        <div className="w-full px-4 sm:px-6">
          <div className="bg-opacity-90 rounded-2xl p-6 sm:p-8">
            <h1 className="text-3xl sm:text-4xl font-light text-gray-600 mb-4 sm:mb-6">
              E-Commerce
            </h1>

            <p className="text-base sm:text-lg text-gray-500 mb-6 sm:mb-8 leading-relaxed">
              Complete online store solutions designed to help businesses grow and thrive in the digital marketplace. From seamless payment integration to robust inventory systems, we craft user-focused e-commerce platforms optimized for performance and conversions.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
              Our E-Commerce Solutions Include
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <ul className="space-y-2 text-gray-600 text-base sm:text-lg">
                <li className="flex items-start"><span className="mr-2">•</span><span>Custom Online Store Development</span></li>
                <li className="flex items-start"><span className="mr-2">•</span><span>Payment Gateway Integration</span></li>
                <li className="flex items-start"><span className="mr-2">•</span><span>Inventory & Order Management</span></li>
                <li className="flex items-start"><span className="mr-2">•</span><span>Shopping Cart Integration</span></li>
                <li className="flex items-start"><span className="mr-2">•</span><span>Mobile-Optimized Storefronts</span></li>
              </ul>

              <ul className="space-y-2 text-gray-600 text-base sm:text-lg">
                <li className="flex items-start"><span className="mr-2">•</span><span>SEO & Marketing Tools</span></li>
                <li className="flex items-start"><span className="mr-2">•</span><span>Multi-vendor Marketplace Solutions</span></li>
                <li className="flex items-start"><span className="mr-2">•</span><span>Analytics & Reporting</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Image - At bottom */}
        <div className="w-full flex justify-center px-4 sm:px-6 mt-4 sm:mt-6">
          <img 
            src={img1} 
            alt="E-Commerce" 
            className="w-full max-w-[400px] sm:max-w-[500px] h-auto object-contain"
          />
        </div>
      </div>

      {/* Desktop Layout - Side by Side */}
      <div className="hidden lg:flex relative min-h-[500px] py-16 overflow-hidden">
        {/* Left Section - Image */}
        <div className="w-1/2 flex items-center justify-center">
          <img 
            src={img1} 
            alt="E-Commerce" 
            className="w-full max-w-[450px] h-auto max-h-[400px] object-contain"
          />
        </div>

        {/* Right Section - Content */}
        <div className="w-1/2 flex items-center">
          <div className="bg-white bg-opacity-90 rounded-2xl p-8 xl:p-12 max-w-[600px]">
            <h1 className="text-4xl xl:text-5xl font-light text-gray-600 mb-6">
              E-Commerce
            </h1>

            <p className="text-lg xl:text-xl text-gray-500 mb-8 leading-relaxed">
              Complete online store solutions designed to help businesses grow <br /> 
              and thrive in the digital marketplace. From seamless payment <br /> 
              integration to robust inventory systems, we craft user-focused <br /> 
              e-commerce platforms optimized for performance and conversions.
            </p>

            <h2 className="text-2xl xl:text-3xl font-semibold text-gray-800 mb-6">
              Our E-Commerce Solutions Include
            </h2>

            <div className="grid grid-cols-2 gap-6 xl:gap-8">
              <ul className="space-y-2 text-gray-600 text-lg">
                <li className="flex items-start"><span className="mr-2">•</span><span>Custom Online Store Development</span></li>
                <li className="flex items-start"><span className="mr-2">•</span><span>Payment Gateway Integration</span></li>
                <li className="flex items-start"><span className="mr-2">•</span><span>Inventory & Order Management</span></li>
                <li className="flex items-start"><span className="mr-2">•</span><span>Shopping Cart Integration</span></li>
                <li className="flex items-start"><span className="mr-2">•</span><span>Mobile-Optimized Storefronts</span></li>
              </ul>

              <ul className="space-y-2 text-gray-600 text-lg">
                <li className="flex items-start"><span className="mr-2">•</span><span>SEO & Marketing Tools</span></li>
                <li className="flex items-start"><span className="mr-2">•</span><span>Multi-vendor Marketplace Solutions</span></li>
                <li className="flex items-start"><span className="mr-2">•</span><span>Analytics & Reporting</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ECommerceSection;