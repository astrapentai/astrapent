import React, { useState, useRef, useLayoutEffect } from "react";
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import "remixicon/fonts/remixicon.css";

const services = [
  {
    icon: "ri-global-line",
    title: "Web Development",
    short: "Modern, responsive websites.",
    description:
      "We build blazing-fast, SEO-friendly, and scalable websites tailored to your business needs. From landing pages to complex web apps, we deliver pixel-perfect results.",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: "ri-smartphone-line",
    title: "Mobile Apps",
    short: "Cross-platform mobile apps.",
    description:
      "Our team crafts stunning, high-performance mobile apps for Android and iOS using Flutter, ensuring seamless user experiences and rapid deployment.",
    color: "from-blue-400 to-purple-500",
  },
  {
    icon: "ri-brain-line",
    title: "AI Solutions",
    short: "Smarter business with AI.",
    description:
      "Integrate AI/ML to automate tasks, analyze data, and make smarter decisions. We help you unlock new possibilities with custom AI solutions.",
    color: "from-purple-400 to-pink-500",
  },
  {
    icon: "ri-cloud-line",
    title: "Cloud Services",
    short: "Scalable cloud infrastructure.",
    description:
      "Migrate, manage, and scale your business on the cloud with our secure, cost-effective solutions. We handle AWS, Azure, GCP, and more.",
    color: "from-indigo-400 to-cyan-400",
  },
  {
    icon: "ri-pencil-ruler-2-line",
    title: "UI/UX Designing",
    short: "Intuitive & stunning designs.",
    description:
      "Our designers create clean, user-centered interfaces that enhance usability and elevate your brand. We focus on seamless experiences across platforms.",
    color: "from-pink-400 to-red-400",
  },
  {
    icon: "ri-store-2-line",
    title: "E-Commerce Solutions",
    short: "Complete online store setup.",
    description:
      "We develop powerful e-commerce platforms with inventory, payments, and integrations, tailored to scale with your business needs.",
    color: "from-orange-400 to-yellow-500",
  },
  {
    icon: "ri-settings-3-line",
    title: "DevOps & Automation",
    short: "CI/CD & deployment pipelines.",
    description:
      "Streamline your development process with automated workflows, continuous integration, and robust deployment strategies.",
    color: "from-yellow-400 to-green-400",
  },
  {
    icon: "ri-shield-keyhole-line",
    title: "Cybersecurity",
    short: "Protect your digital assets.",
    description:
      "We provide end-to-end security solutions including audits, penetration testing, and threat mitigation to safeguard your business.",
    color: "from-red-500 to-pink-500",
  }
];


const CARD_WIDTH = 420;
const GAP = 32;

const iconVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: { scale: 1.08, rotate: 4 },
};

const Service = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Duplicate cards for seamless loop
  const cardList = [...services, ...services];
  const containerRef = useRef(null);
  const x = useMotionValue(0);

  // Calculate total width after mount
  const [totalWidth, setTotalWidth] = useState(1);
  useLayoutEffect(() => {
    if (containerRef.current) {
      setTotalWidth(containerRef.current.scrollWidth / 2);
    }
  }, []);

  // Infinite scroll effect (only on large screens)
  useAnimationFrame(() => {
    if (window.innerWidth >= 1024) { // lg breakpoint
     const speed = 0.5; 

      let current = x.get();
      current -= speed;
      if (Math.abs(current) >= totalWidth) {
        current = 0;
      }
      x.set(current);
    }
  });

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex items-center justify-center px-2 sm:px-8 py-8 overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl flex flex-col lg:flex-row items-stretch justify-between gap-0">
        {/* LEFT: Cards (responsive) */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-transparent overflow-hidden">
          {/* Infinite scroll carousel on large screens */}
          <div className="hidden lg:block relative overflow-hidden w-full h-[260px] sm:h-[300px] md:h-[320px] lg:h-[340px] xl:h-[380px]">
            <motion.div
              ref={containerRef}
              className="flex"
              style={{
                x,
                width: cardList.length * (CARD_WIDTH + GAP),
                gap: GAP,
              }}
            >
              {cardList.map((service, i) => (
                <motion.div
                  key={i}
                  whileHover="hover"
                  onHoverStart={() => setHoveredIndex(i % services.length)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className={`group bg-gray-800 border-2 border-gray-700 rounded-3xl p-6 flex flex-col items-center text-center transition-all duration-300 cursor-pointer mx-2`}
                  style={{
                    minWidth: CARD_WIDTH,
                    maxWidth: CARD_WIDTH,
                    boxShadow:
                      hoveredIndex === i % services.length
                        ? "0 4px 16px 0 rgba(59,130,246,0.13)"
                        : "0 2px 8px 0 rgba(59,130,246,0.08)",
                    zIndex: hoveredIndex === i % services.length ? 10 : 1,
                  }}
                  variants={{
                    hover: {
                      scale: 1.025,
                      boxShadow: "0 4px 16px 0 rgba(59,130,246,0.13)",
                      borderColor: "#38bdf8",
                      zIndex: 10,
                    },
                  }}
                >
                  <motion.i
                    className={`${service.icon} text-4xl mb-4 bg-gradient-to-br ${service.color} text-transparent bg-clip-text drop-shadow-lg z-10`}
                    variants={iconVariants}
                    animate={
                      hoveredIndex === i % services.length
                        ? "hover"
                        : "initial"
                    }
                    transition={{ type: "spring", stiffness: 300 }}
                    aria-hidden="true"
                  />
                  <h3 className="text-xl font-bold text-white mb-2 z-10 drop-shadow">
                    {service.title}
                  </h3>
                  <p className="text-cyan-100 text-base min-h-[32px] z-10 transition-all duration-300">
                    {hoveredIndex === i % services.length
                      ? service.description
                      : service.short}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    className={`mt-4 px-6 py-2 rounded-full font-semibold text-base bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg transition-all duration-300 z-10
                  ${
                    hoveredIndex === i % services.length
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2 pointer-events-none"
                  }
                `}
                  >
                    Learn More
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          </div>
          {/* Simple vertical stack on small screens */}
          <div className="block lg:hidden w-full">
            <div className="flex flex-col gap-6 w-full items-center">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="bg-gray-800 border-2 border-gray-700 rounded-3xl p-4 flex flex-col items-center text-center w-full max-w-md mx-auto"
                >
                  <i
                    className={`${service.icon} text-3xl mb-3 bg-gradient-to-br ${service.color} text-transparent bg-clip-text drop-shadow-lg`}
                    aria-hidden="true"
                  />
                  <h3 className="text-lg font-bold text-white mb-1">
                    {service.title}
                  </h3>
                  <p className="text-cyan-100 text-base min-h-[24px]">
                    {service.short}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* RIGHT: Text (50%) - AboutUs style */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-left px-4 lg:px-12 py-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <span className="inline-block px-4 py-2 bg-blue-900/30 text-blue-400 rounded-full text-sm font-medium mb-3 border border-blue-800/50">
              What We Offer
            </span>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 text-transparent bg-clip-text">
                Next-Gen Digital
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 text-transparent bg-clip-text">
                Services
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-5"
            >
              From web and mobile apps to AI and cloud, we combine creativity and technology to deliver solutions that transform your business and delight your users.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
             <Link to="/ContactUsForm">
  <button className="px-8 py-3 border border-gray-700 rounded-lg font-medium hover:bg-gray-800/50 transition-colors">
    Talk to Us
  </button>
</Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Service;
