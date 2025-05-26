import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
 
const HeroSection = () => {
  const navigate = useNavigate();
  const [hoveredTech, setHoveredTech] = useState(null);
 
  // Animation variants for tech cards
  const techCardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: 'easeOut' },
    }),
    hover: { scale: 1.1, rotate: 3, boxShadow: '0 0 25px rgba(59, 130, 246, 0.5)' },
  };
 
  return (
    <div className="relative min-h-screen flex bg-black overflow-hidden">
      {/* 3D Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <motion.rect
            width="100%"
            height="100%"
            fill="url(#grid)"
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
            transition={{ duration: 15, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
          />
        </svg>
        {/* Holographic Glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
 
      {/* Split-Screen Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 flex flex-col lg:flex-row items-center gap-8">
        {/* Left: Text Content */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            className="inline-flex items-center mb-4 bg-blue-900/30 backdrop-blur-md rounded-full px-5 py-2"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <i className="ri-code-s-slash-line text-2xl text-blue-400 mr-2"></i>
            <span className="text-white font-semibold">Tech That Pops</span>
          </motion.div>
 
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Code the Future
            </span>
            <span className="block text-white">with Us</span>
          </motion.h1>
 
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-md mx-auto lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Unleash your vision with our web, mobile, and AI solutions that spark innovation and drive results.
          </motion.p>
 
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <motion.button
              onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(34, 211, 238, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg"
            >
              Kickstart Your Project
            </motion.button>
            <motion.button
              onClick={() => navigate('/portfolio')}
              whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(255, 255, 255, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 flex items-center gap-2"
            >
              <i className="ri-star-line text-xl"></i>
              Our Portfolio
            </motion.button>
          </motion.div>
        </motion.div>
 
        {/* Right: Interactive Tech Showcase */}
        <motion.div
          className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {[
            { icon: "ri-reactjs-line", name: "React", desc: "Dynamic Web Apps", color: "text-cyan-400" },
            { icon: "ri-nodejs-line", name: "Node.js", desc: "Scalable Backend", color: "text-green-400" },
            { icon: "ri-flutter-line", name: "Flutter", desc: "Cross-Platform Apps", color: "text-blue-400" },
            { icon: "ri-robot-line", name: "AI/ML", desc: "Smart Solutions", color: "text-purple-400" },
          ].map((tech, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={techCardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              onHoverStart={() => setHoveredTech(index)}
              onHoverEnd={() => setHoveredTech(null)}
              className="p-4 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 text-center"
            >
              <i className={`${tech.icon} text-3xl sm:text-4xl ${tech.color} mb-3`}></i>
              <h3 className="text-lg sm:text-xl font-semibold text-white">{tech.name}</h3>
              <motion.p
                className="text-sm text-gray-400"
                animate={{ opacity: hoveredTech === index ? 1 : 0, height: hoveredTech === index ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
              >
                {tech.desc}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
 
      {/* Floating Code Snippet */}
      <motion.div
        className="absolute bottom-8 left-8 opacity-15 font-mono text-cyan-300 text-xs sm:text-sm"
        animate={{ y: [0, -10, 0], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* {`const future = await code();\n// Let's make it epic!`} */}
      </motion.div>
    </div>
  );
};
 
export default HeroSection;