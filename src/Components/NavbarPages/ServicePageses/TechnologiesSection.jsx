import React from 'react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress, SiTypescript, SiGraphql, SiRedux, SiFirebase } from 'react-icons/si';

const TechnologiesSection = () => {
  return (
    <div className="w-full mx-auto px-4 sm:px-6 py-8 sm:py-12 bg-[#F3F4F6]">
      {/* Heading Section */}
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-500 mb-3 sm:mb-4">
          Our Cutting-Edge Technologies
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
          We leverage modern, battle-tested technologies to build fast, scalable and secure web applications that stand out.
        </p>
      </div>

      {/* Technologies Section */}
      <div className="w-full mx-auto lg:w-10/12 xl:w-7xl lg:ml-[15vw]">
        <div className="p-4 sm:p-6 md:p-8 lg:p-10">
          {/* Technologies Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {/* React */}
            <div className="bg-gray-50 p-3 sm:p-4 rounded-lg text-center hover:shadow-md transition-shadow flex flex-col items-center">
              <FaReact className="text-3xl text-blue-500 mb-2" />
              <span className="font-medium text-sm sm:text-base text-gray-800">React</span>
            </div>

            {/* Next.js */}
            <div className="bg-gray-50 p-3 sm:p-4 rounded-lg text-center hover:shadow-md transition-shadow flex flex-col items-center">
              <SiNextdotjs className="text-3xl text-black mb-2" />
              <span className="font-medium text-sm sm:text-base text-gray-800">Next.js</span>
            </div>

            {/* Node.js */}
            <div className="bg-gray-50 p-3 sm:p-4 rounded-lg text-center hover:shadow-md transition-shadow flex flex-col items-center">
              <FaNodeJs className="text-3xl text-green-500 mb-2" />
              <span className="font-medium text-sm sm:text-base text-gray-800">Node.js</span>
            </div>

            {/* Tailwind CSS */}
            <div className="bg-gray-50 p-3 sm:p-4 rounded-lg text-center hover:shadow-md transition-shadow flex flex-col items-center">
              <SiTailwindcss className="text-3xl text-cyan-400 mb-2" />
              <span className="font-medium text-sm sm:text-base text-gray-800">Tailwind CSS</span>
            </div>

            {/* MongoDB */}
            <div className="bg-gray-50 p-3 sm:p-4 rounded-lg text-center hover:shadow-md transition-shadow flex flex-col items-center">
              <SiMongodb className="text-3xl text-green-600 mb-2" />
              <span className="font-medium text-sm sm:text-base text-gray-800">MongoDB</span>
            </div>

            {/* Express */}
            <div className="bg-gray-50 p-3 sm:p-4 rounded-lg text-center hover:shadow-md transition-shadow flex flex-col items-center">
              <SiExpress className="text-3xl text-gray-800 mb-2" />
              <span className="font-medium text-sm sm:text-base text-gray-800">Express</span>
            </div>

            {/* TypeScript */}
            <div className="bg-gray-50 p-3 sm:p-4 rounded-lg text-center hover:shadow-md transition-shadow flex flex-col items-center">
              <SiTypescript className="text-3xl text-blue-600 mb-2" />
              <span className="font-medium text-sm sm:text-base text-gray-800">TypeScript</span>
            </div>

            {/* GraphQL */}
            <div className="bg-gray-50 p-3 sm:p-4 rounded-lg text-center hover:shadow-md transition-shadow flex flex-col items-center">
              <SiGraphql className="text-3xl text-pink-600 mb-2" />
              <span className="font-medium text-sm sm:text-base text-gray-800">GraphQL</span>
            </div>

            {/* Redux */}
            <div className="bg-gray-50 p-3 sm:p-4 rounded-lg text-center hover:shadow-md transition-shadow flex flex-col items-center">
              <SiRedux className="text-3xl text-purple-500 mb-2" />
              <span className="font-medium text-sm sm:text-base text-gray-800">Redux</span>
            </div>

            {/* Firebase */}
            <div className="bg-gray-50 p-3 sm:p-4 rounded-lg text-center hover:shadow-md transition-shadow flex flex-col items-center">
              <SiFirebase className="text-3xl text-orange-500 mb-2" />
              <span className="font-medium text-sm sm:text-base text-gray-800">Firebase</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesSection;