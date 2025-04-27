import React, { useState, useEffect } from 'react';
import { FaShieldAlt, FaUsers, FaEnvelope, FaStar } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';

const Company = () => {
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

  const sections = [
    {
      icon: <FaShieldAlt />,
      title: "About Us",
      desc: "Discover our mission to secure the digital cosmos with cutting-edge cybersecurity solutions.",
      link: "/about",
      linkText: "Explore More",
      bg: "from-cyan-600 to-blue-600",
      color: "cyan-400",
    },
    {
      icon: <FaUsers />,
      title: "Life at ASTRAPENT",
      desc: "Join a vibrant team where innovation and collaboration launch careers to new heights.",
      link: "/lifeAstraPent",
      linkText: "View Culture",
      bg: "from-purple-600 to-pink-600",
      color: "purple-400",
    },
    {
      icon: <FaEnvelope />,
      title: "Contact Us",
      desc: "Reach out to fortify your defenses or explore partnership opportunities.",
      link: "/contactAstra",
      linkText: "Get in Touch",
      bg: "from-teal-600 to-green-600",
      color: "teal-400",
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
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold animate-glow">
          ASTRAPENT <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">COMPANY</span>
          </h1>
          <p className="text-xl md:text-2xl text-cyan-100 max-w-3xl mx-auto mt-4">
            Pioneering cybersecurity with AI-driven solutions to protect the digital frontier.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3 bg-gray-900/80 rounded-2xl p-8 shadow-2xl border border-gray-700"
          >
            <div className="flex flex-col items-center text-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 1 }}
                className="w-48 h-48 rounded-lg overflow-hidden shadow-md mb-6 relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80"
                  alt="Company Profile"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 group-hover:opacity-100 opacity-0 transition-opacity"></div>
              </motion.div>
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 mb-4">
                Why We Lead
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Uncover how ASTRAPENT sets the standard in penetration testing with relentless innovation.
              </p>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="flex gap-2"
              >
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xl" />
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="flex-1 flex flex-col gap-8">
            <div className="grid md:grid-cols-2 gap-8">
              {sections.slice(0, 2).map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`group relative bg-gradient-to-br ${section.bg} rounded-2xl p-8 shadow-xl overflow-hidden border border-gray-700`}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-opacity"></div>
                  <div className="relative z-10 flex items-start">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                      className="bg-white/20 p-4 rounded-full mr-4"
                    >
                      {React.cloneElement(section.icon, { className: "text-2xl text-white" })}
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{section.title}</h3>
                      <p className="text-gray-200 mb-6">{section.desc}</p>
                      <motion.div whileHover={{ x: 10 }}>
                        <Link
                          to={section.link}
                          className={`text-${section.color} font-medium flex items-center hover:text-${section.color.replace('400', '300')} transition-colors`}
                        >
                          {section.linkText} <FiArrowRight className="ml-2" />
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`group relative bg-gradient-to-br ${sections[2].bg} rounded-2xl p-8 shadow-xl overflow-hidden border border-gray-700`}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-opacity"></div>
              <div className="relative z-10 flex items-start">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                  className="bg-white/20 p-4 rounded-full mr-4"
                >
                  {React.cloneElement(sections[2].icon, { className: "text-2xl text-white" })}
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">{sections[2].title}</h3>
                  <p className="text-gray-200 mb-6">{sections[2].desc}</p>
                  <motion.div whileHover={{ x: 10 }}>
                    <Link
                      to={sections[2].link}
                      className={`text-${sections[2].color} font-medium flex items-center hover:text-${sections[2].color.replace('400', '300')} transition-colors`}
                    >
                      {sections[2].linkText} <FiArrowRight className="ml-2" />
                    </Link>
                  </motion.div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
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

export default Company;