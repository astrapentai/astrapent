import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress, SiTypescript, SiGraphql, SiRedux, SiFirebase } from 'react-icons/si';

const Technology = () => {
  const technologies = [
    {
      name: "React",
      icon: <FaReact className="text-4xl text-blue-500" />,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      shadow: "hover:shadow-blue-500/30"
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-4xl text-gray-800" />,
      color: "text-gray-800",
      bg: "bg-gray-800/10",
      shadow: "hover:shadow-gray-800/30"
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-4xl text-green-600" />,
      color: "text-green-600",
      bg: "bg-green-600/10",
      shadow: "hover:shadow-green-600/30"
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-4xl text-cyan-500" />,
      color: "text-cyan-500",
      bg: "bg-cyan-500/10",
      shadow: "hover:shadow-cyan-500/30"
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-4xl text-green-700" />,
      color: "text-green-700",
      bg: "bg-green-700/10",
      shadow: "hover:shadow-green-700/30"
    },
    {
      name: "Express",
      icon: <SiExpress className="text-4xl text-gray-600" />,
      color: "text-gray-600",
      bg: "bg-gray-600/10",
      shadow: "hover:shadow-gray-600/30"
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-4xl text-blue-600" />,
      color: "text-blue-600",
      bg: "bg-blue-600/10",
      shadow: "hover:shadow-blue-600/30"
    },
    {
      name: "GraphQL",
      icon: <SiGraphql className="text-4xl text-pink-600" />,
      color: "text-pink-600",
      bg: "bg-pink-600/10",
      shadow: "hover:shadow-pink-600/30"
    },
    {
      name: "Redux",
      icon: <SiRedux className="text-4xl text-purple-500" />,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      shadow: "hover:shadow-purple-500/30"
    },
    {
      name: "Firebase",
      icon: <SiFirebase className="text-4xl text-orange-500" />,
      color: "text-orange-500",
      bg: "bg-orange-500/10",
      shadow: "hover:shadow-orange-500/30"
    }
  ];

  return (
    <div className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-50/50 to-purple-50/50">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400/20"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              rotate: [0, 180],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-700 uppercase rounded-full bg-blue-100/80 backdrop-blur-sm mb-4">
            Tech Stack
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Cutting-Edge Technologies</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">We Master</span>
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
            At AstraPent, we leverage the latest technologies to build innovative, scalable solutions that drive your success          </p>
        </motion.div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className={`flex flex-col items-center p-6 rounded-2xl ${tech.bg} backdrop-blur-sm border border-gray-200/50 transition-all duration-300 group-hover:shadow-lg ${tech.shadow} group-hover:-translate-y-2`}>
                <div className="h-20 w-20 flex items-center justify-center mb-4 rounded-xl bg-white/80 shadow-sm group-hover:shadow-md transition-all duration-300">
                  {tech.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                  {tech.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technology;