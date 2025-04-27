import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';

const Resource = () => {
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

  const resources = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
      title: "Cybersecurity News",
      desc: "Stay ahead with the latest security bulletins and expert advisories.",
      link: "/cyberSecurity",
      color: "indigo",
      bg: "from-indigo-600 to-blue-600",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
      title: "Blog",
      desc: "Dive into insights and trends from our cybersecurity specialists.",
      link: "/blog",
      color: "purple",
      bg: "from-purple-600 to-pink-600",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Case Study",
      desc: "Explore how we’ve secured our clients with tailored solutions.",
      link: "/caseStudy",
      color: "blue",
      bg: "from-blue-600 to-cyan-600",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Guide",
      desc: "Access expert advice and best practices instantly.",
      link: "/guide",
      color: "green",
      bg: "from-green-600 to-teal-600",
    },
  ];

  return (
    <div className="min-h-[86.2vh] md:min-h-[83vh] bg-gray-950 text-white font-sans lg:overflow-hidden xl:overflow-x-hidden overflow-x-hidden md:overflow-auto relative md:m-3 md:mt-[-0.5vw] rounded-2xl">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-streams-of-light-529-large.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/70 to-purple-900/70 z-10"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 z-10"></div>

      {/* Main Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 ">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold animate-glow md:mt-[-3vw]">
            ASTRAPENT <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">Resources</span>
          </h1>
          <p className="text-xl md:text-2xl text-cyan-100 max-w-3xl mx-auto mt-4 ">
            Arm yourself with knowledge to conquer cybersecurity challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-[-2vw]">
          {/* Sidebar Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-8 rounded-2xl shadow-2xl border border-gray-700"
          >
            <div className="flex flex-col items-center h-full justify-center text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className="bg-white/20 backdrop-blur-sm p-4 rounded-xl mb-6"
              >
                <MessageCircle className="w-12 h-12 text-cyan-400" />
              </motion.div>
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 mb-4">
                Pentesting Buyer Guide
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Learn how top security organizations, including ASTRAPENT partners, invest in offensive strategies to protect their operations.
              </p>
              <motion.button
                whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)' }}
                className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-3 rounded-full font-bold shadow-md"
              >
                Get Report <ArrowRight size={16} />
              </motion.button>
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`group relative bg-gradient-to-br ${resource.bg} rounded-2xl p-8 shadow-xl overflow-hidden border border-gray-700`}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-opacity"></div>
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="bg-white/20 backdrop-blur-sm w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  >
                    {React.cloneElement(resource.icon, { className: `h-6 w-6 text-${resource.color}-400` })}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-3">{resource.title}</h3>
                  <p className="text-gray-200 mb-6">{resource.desc}</p>
                  <motion.div whileHover={{ x: 10 }}>
                    <Link
                      to={resource.link}
                      className={`text-${resource.color}-400 hover:text-${resource.color}-300 flex items-center gap-1 font-medium`}
                    >
                      Read more <ArrowRight size={14} />
                    </Link>
                  </motion.div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-cyan-400/50 rounded-full"
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

export default Resource;