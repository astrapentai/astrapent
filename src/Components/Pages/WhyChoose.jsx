import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Check, ChevronDown, ChevronUp } from 'lucide-react';
import Lottie from 'react-lottie';
import axios from 'axios';
import img1 from '../../assets/WhyChoose.jpg';


const WhyChoose = () => {
  const [animationData, setAnimationData] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const controls = useAnimation();
  const [expandedItems, setExpandedItems] = useState([]);
  

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  useEffect(() => {
    axios.get('https://assets.lottiefiles.com/packages/lf20_5t9gdfjb.json')
      .then((response) => setAnimationData(response.data))
      .catch((error) => console.error('Error fetching Lottie animation:', error));
  }, []);

  const toggleItem = (index) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter(item => item !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };

  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-us');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const reasons = [
    {
      title: 'Expertise in Modern Frameworks',
      detail: 'We specialize in React, Next.js, and Tailwind CSS to build fast, scalable web applications.',
      icon: <Check className="text-white" size={18} />
    },
    {
      title: 'Performance Optimization',
      detail: 'Our websites are optimized for speed and SEO, ensuring top rankings and smooth user experiences.',
      icon: <Check className="text-white" size={18} />
    },
    {
      title: 'Custom-Tailored Solutions',
      detail: 'We craft bespoke web solutions that align perfectly with your business goals.',
      icon: <Check className="text-white" size={18} />
    },
    {
      title: 'Seamless Integrations',
      detail: 'Integrate APIs, payment gateways, and third-party tools effortlessly with our expertise.',
      icon: <Check className="text-white" size={18} />
    },
    {
      title: 'Responsive Design',
      detail: 'Our websites look stunning and perform flawlessly across all devices and screen sizes.',
      icon: <Check className="text-white" size={18} />
    },
    {
      title: 'Ongoing Support',
      detail: 'We provide 24/7 maintenance and updates to keep your website secure and up-to-date.',
      icon: <Check className="text-white" size={18} />
    },
  ];

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: { preserveAspectRatio: 'xMidYMid slice' },
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-50/30 to-purple-50/30">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Animation Section */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <img src={img1} alt="Why Choose Us" className="w-full h-full object-cover rounded-3xl shadow-lg" />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="order-1 lg:order-2"
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, ease: 'easeOut' }
              }
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-700 uppercase rounded-full bg-blue-100/80 backdrop-blur-sm mb-4">
                Why Choose Us
              </span>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Building Digital</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Experiences That Matter</span>
              </h2>
              <p className="mt-6 text-lg text-gray-600 max-w-lg">
                At AstraPent, we create solutions that drive real impact:
              </p>
            </motion.div>

            <div className="space-y-4">
              {reasons.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                  }}
                  className="group relative overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200/50 hover:border-blue-200/70"
                >
                  <div
                    className="flex items-start gap-4 cursor-pointer"
                    onClick={() => toggleItem(idx)}
                  >
                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-md`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <button className="text-gray-500 hover:text-blue-600 transition-colors">
                          {expandedItems.includes(idx) ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </button>
                      </div>
                      {expandedItems.includes(idx) && (
                        <motion.p
                          className="mt-2 text-gray-600 leading-relaxed"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {item.detail}
                        </motion.p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <button
                onClick={scrollToContact} // Smooth scroll to ContactUS section
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
              >
                Get Started With Us
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;