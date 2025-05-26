import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AboutUsSection = () => {
  const [activeTab, setActiveTab] = useState('values');

  const tabContent = {
    values: {
      title: "OUR VALUES",
      subtitle: "The Foundation of Our Success",
      text: "Our core values aren't just words - they're the foundation of everything we do. We operate with transparency, innovation, and uncompromising quality in all our relationships and deliverables.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    mission: {
      title: "OUR MISSION", 
      text: "To create digital experiences that transform businesses and empower our clients to lead in their markets. We combine technical excellence with creative vision to deliver solutions that make an impact.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    story: {
      title: "OUR STORY",
      text: "Founded on the belief that technology should serve human relationships, we've grown from a small team to industry leaders while staying true to our core principles of fairness and respect.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 py-8 sm:py-14 md:py-20 bg-gray-50 mb-5">
      {/* Top Section - Image Left, Text Right */}
      <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center mb-10 md:mb-16">
        {/* Image - Left Side */}
        <div className="w-full lg:w-1/2">
          <div className="relative rounded-xl overflow-hidden shadow-lg aspect-video w-full">
            <img
              src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Business success"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
          </div>
        </div>
        
        {/* Text Content - Right Side */}
        <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-5 lg:mb-6 leading-tight sm:leading-snug">
            We're all about creating your success
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-3 sm:mb-5 leading-relaxed">
            The majority of businesses have a set of guiding principles or core values that specify how they plan to do business. We are distinct in the core ideals we hold dear.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
            Fairness, honesty, and respect for individuals have been the cornerstones of our operations since inception. Or, to quote our founder, "The Essence of Life is Relationships." As a business, we consider everyone to be inherently valuable.
          </p>
        </div>
      </div>

      {/* Interactive Tabs */}
      <div className="flex justify-center mb-8 md:mb-12 overflow-x-auto scrollbar-hide">
        <div className="flex bg-white p-1 rounded-full shadow-lg border border-gray-200 min-w-fit">
          {['values', 'mission', 'story'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-sm sm:text-base md:text-lg font-bold rounded-full transition-colors duration-300 whitespace-nowrap ${
                activeTab === tab
                  ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tabContent[tab].title}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row">
            {/* For VALUES tab - Image on left, text on right */}
            {activeTab === 'values' ? (
              <>
                {/* On mobile: image above text, on desktop: image left, text right */}
                <div className="order-2 lg:order-1 p-4 sm:p-8 md:p-10 flex flex-col justify-center">
                  <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">
                    {tabContent.values.title}
                  </h2>
                  <h3 className="text-xs sm:text-base md:text-xl font-semibold text-blue-600 mb-3 sm:mb-6">
                    {tabContent.values.subtitle}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                    {tabContent.values.text}
                  </p>
                </div>
                <div className="order-1 lg:order-2 relative aspect-video w-full">
                  <img
                    src={tabContent.values.image}
                    alt={tabContent.values.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </>
            ) : (
              /* For other tabs - Keep original layout (text left, image right) */
              <>
                <div className="p-4 sm:p-8 md:p-10 flex flex-col justify-center">
                  <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-6">
                    {tabContent[activeTab].title}
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                    {tabContent[activeTab].text}
                  </p>
                </div>
                <div className="relative aspect-video w-full">
                  <img
                    src={tabContent[activeTab].image}
                    alt={tabContent[activeTab].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AboutUsSection;
