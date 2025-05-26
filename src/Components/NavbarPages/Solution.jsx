import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';

const Solution = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    controls.start({
      y: [0, -10, 0],
      transition: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
    });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [controls]);

  const challenges = [
    "Client needs a VAPT report",
    "Someone attempting to hack my app",
    "Achieving security compliance",
    "Vulnerability check before launch",
    "3rd party penetration testing",
  ];

  const industries = [
    "E-learning",
    "Fintech",
    "Healthcare",
    "E-commerce",
    "Government & Public",
    "Other Industries",
  ];

  return (
    <div className="min-h-screen w-screen right-[35.15vw] p-4  bg-gray-950 text-white font-sans overflow-hidden relative">
      {/* Interactive Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: mousePos.x * 0.02 * (i % 2 ? 1 : -1),
              y: mousePos.y * 0.02 * (i % 2 ? 1 : -1),
              opacity: [0.2, 0.8, 0.2],
              transition: {
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
          />
        ))}
      </div>

      {/* Main Container */}
      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row gap-8 mt-[-2vw]">
        {/* Left Panel */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full lg:w-2/5 bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-8 md:p-12 rounded-2xl shadow-2xl border border-gray-700 flex flex-col justify-between"
        >
          <div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              className="bg-white/20 backdrop-blur-sm p-4 rounded-xl mb-6 w-fit"
            >
              <MessageCircle className="w-10 h-10 text-cyan-400" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-3xl md:text-5xl font-bold bg-clip-text mb-4"
            >
              Secure Your Future with Precision Pentesting
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-lg text-gray-300"
            >
              Achieve compliance and fortify your business with expert penetration testing services.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)' }}
              className="px-8 py-4 rounded-full font-bold shadow-lg flex items-center gap-2"
            >
              Get a Quote <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Panel */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full lg:w-3/5 bg-gray-900/80 p-8 md:p-12 rounded-2xl shadow-2xl border border-gray-700"
        >
          {/* Challenges */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold bg-clip-text mb-4">
              Challenges We Solve
            </h2>
            <p className="text-gray-300 mb-6">
              Tackling the toughest cybersecurity hurdles with tailored solutions.
            </p>
            <ul className="space-y-4">
              {challenges.map((challenge, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <div className="bg-cyan-400/50 p-2 rounded-full mr-4">
                    <ArrowRight className="text-cyan-400" size={16} />
                  </div>
                  <span className="text-gray-200">{challenge}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Industries */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold bg-clip-text  mb-4">
              Industries We Serve
            </h2>
            <p className="text-gray-300 mb-6">
              Delivering expert pentesting tailored to your industry's unique threats.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {industries.map((industry, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-gradient-to-br from-gray-800/80 to-gray-700/80 p-4 rounded-lg text-center border border-gray-600 hover:border-cyan-400 transition-all"
                >
                  <span className="text-gray-200 group-hover:text-cyan-400 transition-colors">{industry}</span>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Inline Tailwind Animations */}
      <style jsx global>{`
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 10px rgba(0, 255, 255, 0.5); }
          50% { text-shadow: 0 0 20px rgba(0, 255, 255, 0.8); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Solution;