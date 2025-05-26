import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { useNavigate } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';

const HeroSection = () => {
  const navigate = useNavigate();
  const [hoveredTech, setHoveredTech] = useState(null);

  const typewriterWords = ['Code the Future', 'Build Smart Solutions', 'Innovate  '];
  const longestWord = typewriterWords.reduce((a, b) => (a.length > b.length ? a : b));

  const techCardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: 'easeOut' },
    }),
    hover: {
      scale: 1.1,
      rotate: 2,
      boxShadow: '0px 5px 25px rgba(59, 130, 246, 0.3)',
    },
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3B82F6" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <motion.rect
            width="100%"
            height="100%"
            fill="url(#grid)"
            animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          />
        </svg>
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center mb-5 bg-blue-900/30 backdrop-blur-md rounded-full px-6 py-2"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <i className="ri-code-s-slash-line text-xl sm:text-2xl text-blue-400 mr-2"></i>
            <span className="text-white font-semibold tracking-wide text-sm sm:text-base">
              Tech That Pops
            </span>
          </motion.div>

         <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
  <div className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent inline-block font-mono text-3xl sm:text-4xl md:text-5xl leading-tight">
    <Typewriter
      words={typewriterWords}
      loop
      cursor
      cursorStyle="_"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1500}
    />
  </div>
  <span className="block text-white text-2xl sm:text-3xl md:text-4xl font-semibold mt-1 ml-1">
    with AstraPent
  </span>
</h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-10 max-w-md mx-auto lg:mx-0">
            Transform your ideas into reality with custom web and mobile solutions. At AstraPent, we build innovative, scalable software that drives your success. Ready to stand out? Let’s create something extraordinary!.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <motion.button
      onClick={() => navigate('/servicePagesess')}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-3 sm:px-8 sm:py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg"
    >
      Build Your Future
    </motion.button>

            <motion.button
              onClick={() => navigate('/digitalportfolio')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 sm:px-8 sm:py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 flex items-center justify-center gap-2"
            >
              <i className="ri-star-line text-lg sm:text-xl" />
              Explore Our Work
            </motion.button>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {[
            { icon: 'ri-reactjs-line', name: 'React', desc: 'Dynamic Web Apps', color: 'text-cyan-400' },
            { icon: 'ri-nodejs-line', name: 'Node.js', desc: 'Scalable Backend', color: 'text-green-400' },
            { icon: 'ri-flutter-line', name: 'Flutter', desc: 'Cross-Platform Apps', color: 'text-blue-400' },
            { icon: 'ri-robot-line', name: 'AI/ML', desc: 'Smart Solutions', color: 'text-purple-400' },
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
              className="p-5 sm:p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 text-center shadow-lg"
            >
              <i className={`${tech.icon} text-3xl sm:text-4xl md:text-5xl ${tech.color} mb-4`} />
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">{tech.name}</h3>
              <motion.p
                className="text-xs sm:text-sm text-gray-400 mt-2"
                animate={{
                  opacity: hoveredTech === index ? 1 : 0,
                  height: hoveredTech === index ? 'auto' : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                {tech.desc}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Floating Snippet */}
      <motion.div
        className="absolute bottom-10 left-4 font-mono text-cyan-300 text-[10px] sm:text-xs md:text-sm opacity-10"
        animate={{ y: [0, -10, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
       
      </motion.div>
    </div>
  );
};

export default HeroSection;
