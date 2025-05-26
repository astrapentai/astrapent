import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Smartphone, Layout, Eye, Zap, ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const UIDesign = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
                <span className="block">Exceptional</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  UI/UX Design
                </span>
              </h1>
              <p className="text-xl text-blue-100 max-w-xl mb-8">
                We craft beautiful, intuitive interfaces that enhance user experience and drive conversions.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center">
                  View Portfolio
                  <ArrowRight className="ml-2" size={20} />
                </button>
                <button className="px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                  Get Free Audit
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white/10 transform rotate-1">
                <img 
                  src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="UI/UX Design" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <DesignProcessSection />

      {/* Portfolio Showcase */}
      <PortfolioSection />

      {/* Design Principles */}
      <PrinciplesSection />

      {/* Tools & Technologies */}
      <ToolsSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

// Design Process Section Component
const DesignProcessSection = () => {
  const processSteps = [
    {
      title: "Research & Discovery",
      description: "We analyze your users, market, and competition to inform our design strategy",
      icon: <Eye className="text-white" size={24} />,
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "Wireframing",
      description: "Creating the structural blueprint of your interface",
      icon: <Layout className="text-white" size={24} />,
      gradient: "from-purple-500 to-fuchsia-600"
    },
    {
      title: "Visual Design",
      description: "Applying colors, typography, and visual elements",
      icon: <Palette className="text-white" size={24} />,
      gradient: "from-amber-500 to-orange-600"
    },
    {
      title: "Prototyping",
      description: "Interactive models to test user flows",
      icon: <Smartphone className="text-white" size={24} />,
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      title: "User Testing",
      description: "Validating designs with real users",
      icon: <Zap className="text-white" size={24} />,
      gradient: "from-rose-500 to-pink-600"
    }
  ];

  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Our Design Process"
          subtitle="A user-centered approach to creating exceptional interfaces"
          highlight="Methodology"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200/50 hover:border-${step.gradient.split(' ')[1]}/30`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-md mb-4`}>
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Portfolio Section Component
const PortfolioSection = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "Modern interface for managing online store operations",
      tags: ["Dashboard", "E-Commerce", "Dark Mode"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Web App"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description: "Intuitive banking experience for millennials",
      tags: ["Mobile", "Fintech", "iOS/Android"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Mobile"
    },
    {
      id: 3,
      title: "Healthcare Portal",
      description: "Patient management system with telehealth features",
      tags: ["Healthcare", "SaaS", "Responsive"],
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Web App"
    }
  ];

  return (
    <section className="relative py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Our Design Portfolio"
          subtitle="Showcasing our best UI/UX design work"
          highlight="Work"
        />
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
          className="py-8"
        >
          {portfolioItems.map((item) => (
            <SwiperSlide key={item.id}>
              <motion.div
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-500 h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-60 overflow-hidden">
                  <motion.img
                    className="w-full h-full object-cover"
                    src={item.image}
                    alt={item.title}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <span className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 group-hover:bg-blue-100 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

// Design Principles Section
const PrinciplesSection = () => {
  const principles = [
    {
      title: "User-Centered",
      description: "We prioritize user needs above all else",
      icon: "👥"
    },
    {
      title: "Consistency",
      description: "Uniform patterns for intuitive navigation",
      icon: "🔄"
    },
    {
      title: "Accessibility",
      description: "Designs that work for everyone",
      icon: "♿"
    },
    {
      title: "Clarity",
      description: "Simple, understandable interfaces",
      icon: "✨"
    },
    {
      title: "Emotional Design",
      description: "Creating delightful experiences",
      icon: "❤️"
    }
  ];

  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Our Design Principles"
          subtitle="The foundation of every interface we create"
          highlight="Philosophy"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200/50 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="text-4xl mb-4">{principle.icon}</span>
              <h3 className="text-lg font-semibold text-gray-900">{principle.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{principle.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Tools Section
const ToolsSection = () => {
  const tools = [
    {
      name: "Figma",
      description: "For interface design and prototyping",
      logo: "🖌️"
    },
    {
      name: "Adobe XD",
      description: "For high-fidelity prototypes",
      logo: "✏️"
    },
    {
      name: "Sketch",
      description: "For vector-based design",
      logo: "🎨"
    },
    {
      name: "InVision",
      description: "For collaborative design workflows",
      logo: "👁️"
    },
    {
      name: "Framer",
      description: "For advanced interactions",
      logo: "⚡"
    }
  ];

  return (
    <section className="relative py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Our Design Toolkit"
          subtitle="Industry-standard tools we use to create exceptional designs"
          highlight="Technologies"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-12">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200/50 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <span className="text-4xl mb-4">{tool.logo}</span>
              <h3 className="text-lg font-semibold text-gray-900">{tool.name}</h3>
              <p className="text-sm text-gray-600 mt-2">{tool.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => (
  <section className="relative py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Ready to Elevate Your User Experience?
        </h2>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
          Let's discuss how we can transform your digital products with exceptional design.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-8 py-4 rounded-xl bg-white text-blue-600 font-medium hover:bg-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center">
            Get Started
            <ArrowRight className="ml-2" size={20} />
          </button>
          <button className="px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
            View Case Studies
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

// Reusable Section Header Component
const SectionHeader = ({ title, subtitle, highlight, lightMode = false }) => (
  <motion.div 
    className="text-center mb-12"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <span className={`inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full ${lightMode ? 'bg-white/20 text-white' : 'bg-blue-100 text-blue-700'} mb-4`}>
      {highlight}
    </span>
    <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${lightMode ? 'text-white' : 'text-gray-900'} mb-4`}>
      {title}
    </h2>
    <p className={`text-lg ${lightMode ? 'text-blue-100' : 'text-gray-600'} max-w-3xl mx-auto`}>
      {subtitle}
    </p>
  </motion.div>
);

export default UIDesign;