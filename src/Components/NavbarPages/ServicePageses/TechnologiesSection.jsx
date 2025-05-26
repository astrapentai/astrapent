import React from 'react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import {
  SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress,
  SiTypescript, SiGraphql, SiRedux, SiFirebase
} from 'react-icons/si';

const technologies = [
  { name: 'React', icon: <FaReact className="text-blue-500" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-black" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
  { name: 'Express', icon: <SiExpress className="text-gray-800" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
  { name: 'GraphQL', icon: <SiGraphql className="text-pink-600" /> },
  { name: 'Redux', icon: <SiRedux className="text-purple-500" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-orange-500" /> },
];

const TechnologiesSection = () => {
  return (
    <div className="w-full px-4 sm:px-8 py-12 bg-gradient-to-b from-[#f9fafb] to-[#f3f4f6]">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-700 mb-4">
          Our Cutting-Edge Technologies
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          We leverage modern, battle-tested tools to build fast, scalable, and secure web apps.
        </p>
      </div>

      {/* Technologies Grid */}
      <div className="max-w-7xl mx-auto px-2 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 p-6 flex flex-col items-center group"
            >
              <div className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110">
                {tech.icon}
              </div>
              <p className="text-gray-800 font-medium text-sm sm:text-base">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologiesSection;
