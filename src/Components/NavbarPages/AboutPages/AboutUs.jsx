import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex items-center justify-center px-2 sm:px-4 md:px-6 py-10 sm:py-16 md:py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400 opacity-20"
            style={{
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Animated gradient blobs */}
        <motion.div
          className="absolute top-1/4 -left-20 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full filter blur-3xl opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full filter blur-3xl opacity-10"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 max-w-6xl w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 md:gap-14 lg:gap-16">
          {/* Text content */}
          <div className="flex-1 w-full text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 bg-blue-900/30 text-blue-400 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 border border-blue-800/50">
                Who We Are
              </span>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6"
              >
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 text-transparent bg-clip-text">
                  Building Digital
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 text-transparent bg-clip-text">
                  Experiences
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8"
              >
                We are a team of passionate developers, designers, and strategists dedicated to creating innovative digital solutions that drive real business results.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              >
                <Link to="/DigitalPortfolio">
                  <button className="px-6 py-2 sm:px-8 sm:py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20 text-sm sm:text-base">
                    Our Work
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Visual element (hidden on small screens, visible on lg+) */}
          <div className="flex-1 w-full flex items-center justify-center lg:justify-end mb-8 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full"
            >
              <div className="w-full h-60 sm:h-72 md:h-80 lg:h-96 bg-gradient-to-tr from-blue-900/50 to-purple-900/50 rounded-2xl border border-gray-800/50 shadow-2xl backdrop-blur-sm flex items-center justify-center">
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute -top-10 -left-10 w-20 h-20 sm:w-32 sm:h-32 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 sm:w-44 sm:h-44 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
                </div>
                <div className="relative z-10 text-center p-4 sm:p-8">
                  <div className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-4">🚀</div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Innovation</h3>
                  <p className="text-gray-300 text-xs sm:text-sm md:text-base">
                    Driving digital transformation through cutting-edge technology
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
