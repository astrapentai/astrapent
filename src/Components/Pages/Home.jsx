import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from '../../assets/webdev.png';
import img2 from '../../assets/appdev.png';
import img3 from '../../assets/webdev.png';
import { useNavigate, useLocation, Route } from 'react-router-dom';

const slides = [
  {
    title: "Ideas That Go Beyond Borders",
    description: "We transform your vision into digital reality with cutting-edge solutions that push boundaries.",
    button1: "Explore More",
    button1Route: '/Aboupages',
    button2: "Contact Us",
    button2Route: '/contactusform',
    image: img1,
    bgGradient: "from-indigo-900 to-blue-800",
    textGradient: "from-amber-400 to-orange-500"
  },
  {
    title: "Innovative Digital Solutions",
    description: "Creating impactful digital experiences that drive results and exceed expectations.",
    button1: "View Projects",
    button1Route: '/digitalPortfolio',
    button2: "Our Services",
    button2Route: '/servicePagesess',
    image: img2,
    bgGradient: "from-purple-900 to-indigo-800",
    textGradient: "from-emerald-400 to-teal-500"
  },
  {
    title: "Future-Ready Technology",
    description: "Building tomorrow's solutions today with forward-thinking approaches and technologies.",
    button1: "Learn More",
    button1Route: '/learnMore',
    button2: "Get Started",
    button2Route: '/getStarted',
    image: img3,
    bgGradient: "from-blue-900 to-cyan-800",
    textGradient: "from-rose-400 to-pink-500"
  }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Redirect to /homeTop if the page is reloaded on /servicePagesess
    if (location.pathname === '/servicePagesess') {
      navigate('/homeTop', { replace: true });
    }
  }, [location.pathname, navigate]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative min-h-[91vh] flex items-center justify-center bg-gradient-to-br ${slides[currentSlide].bgGradient} overflow-hidden mt-[-2vw]`}>
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              rotate: [0, 360],
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

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 flex items-center justify-between">
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentSlide}
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${slides[currentSlide].textGradient}`}>
                {slides[currentSlide].title.split(' ')[0]} {slides[currentSlide].title.split(' ')[1]}
              </span>{' '}
              <br />
              <span className="text-white">{slides[currentSlide].title.split(' ').slice(2).join(' ')}</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-blue-100 mb-8 max-w-lg"
            >
              {slides[currentSlide].description}
            </motion.p>

            <motion.div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate(slides[currentSlide].button1Route)} // Navigate to button1Route
                className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 text-white font-medium hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                {slides[currentSlide].button1}
              </button>
              <button
                onClick={() => navigate(slides[currentSlide].button2Route)} // Navigate to button2Route
                className="px-8 py-3.5 rounded-lg bg-white/10 text-white font-medium backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
              >
                {slides[currentSlide].button2}
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Image Section */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={`image-${currentSlide}`}
            className="hidden lg:block lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <img
                src={slides[currentSlide].image}
                alt="Innovative Design"
                className="w-[70%] ml-[10vw] h-auto rounded-2xl shadow-2xl border-8 border-white/10"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white w-6' : 'bg-white/30'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;