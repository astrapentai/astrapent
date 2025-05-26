
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link for routing

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.5,
      ease: 'easeOut'
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    },
  },
  hover: {
    y: -10,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
  }
};

const scrollToContact = () => {
  const contactSection = document.getElementById('contact-us');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const ClickableCards = () => {
  const services = [
    {
      title: 'Website Development',
      description: 'Custom, responsive websites that elevate your brand’s online presence.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      gradient: 'from-purple-500 to-indigo-600',
      link: '/webdev'
    },
    {
      title: 'E-Commerce Solutions',
      description: 'Create powerful, scalable online stores with seamless payment systems to maximize your sales.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      gradient: 'from-amber-500 to-orange-600',
      link: '/e_commerce'
    },
    {
      title: 'UI/UX Design',
      description: 'Create powerful, scalable online stores with seamless payment systems to maximize your sales.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      gradient: 'from-emerald-500 to-teal-600',
      link: '/UIDesign'
    },
    {
      title: 'Android Application Development',
      description: 'Build reliable, engaging Android apps tailored to reach a broad mobile audience.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      gradient: 'from-blue-500 to-cyan-600',
      link: '/android'
    },
    {
      title: 'Software Development',
      description: 'Custom, scalable software solutions to streamline operations and boost efficiency.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: 'from-rose-500 to-pink-600',
      link: '/maintenance'
    },
    {
      title: 'iOS Application Development',
      description: 'Craft sleek, high-performance iOS apps optimized for Apple’s ecosystem to captivate users.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      gradient: 'from-violet-500 to-fuchsia-600',
      link: '/customapps'
    },
  ];

  return (
    <motion.div
      className="relative py-20 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 -z-10"></div>

      {/* Floating dots */}
      <div className="absolute inset-0 overflow-hidden -z-20">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-900/5"
            style={{
              width: Math.random() * 20 + 5,
              height: Math.random() * 20 + 5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div className="text-center mb-16" variants={cardVariants}>
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-blue-900 uppercase rounded-full bg-blue-100/80 backdrop-blur-sm">
            Our Services
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Digital Solutions That</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Drive Results</span>
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
            AstraPent crafts innovative digital solutions to fuel your business growth.</p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 min-w-[70vw] ml-[-4vw]">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300"
              style={{ width: 'calc(100% + 3vw)' }}
              variants={cardVariants}
              whileHover="hover"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

              <div className="relative p-8 h-full flex flex-col">
                <div className={`flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} text-white shadow-lg mb-6`}>
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>


              </div>

              {/* Hover effect border */}
              <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-${service.gradient.split(' ')[1]}/30 transition-all duration-500 pointer-events-none`}></div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-20 text-center"
          variants={cardVariants}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900">Need something custom?</h3>
            <Link
              onClick={scrollToContact} // Smooth scroll to ContactUS section
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              Request Custom Service
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ClickableCards;