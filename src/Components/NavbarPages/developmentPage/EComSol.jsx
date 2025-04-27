import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, CreditCard, Package, Search, Shield, Truck, Globe, BarChart2, ArrowRight, Check, Star, Send, Phone, Mail, MapPin } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Footer from '../../Pages/Footer';

const EComSol = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Key Features */}
      <FeaturesSection />

      {/* E-Commerce Platforms */}
      <PlatformsSection />

      {/* Our Process */}
      <ProcessSection />

      {/* Pricing */}
      <PricingSection />

      {/* Success Stories */}
      <CaseStudiesSection />

      {/* Why Choose Us */}
      <BenefitsSection />

      {/* Contact */}
      <ContactSection formData={formData} handleChange={handleChange} />

      {/* Footer */}
      <Footer />
    </div>
  );
};

// Floating Background Component
const FloatingBackground = () => (
  <div className="absolute inset-0 overflow-hidden opacity-20 " >
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-purple-400/20"
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
);

// Hero Section
const HeroSection = () => (
  <section className="relative min-h-[96vh]  flex items-center justify-center bg-gradient-to-br from-purple-900 to-indigo-900 text-white overflow-hidden">
    <FloatingBackground />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            <span className="block">Transform Your Business</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              With E-Commerce
            </span>
          </h1>
          <p className="text-xl text-purple-100 max-w-xl mb-8">
            Complete e-commerce solutions tailored to your business needs. From setup to scaling, we handle everything to make your online store successful.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center">
              Get Free Consultation
              <ArrowRight className="ml-2" size={20} />
            </button>
            <button className="px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
              View Our Work
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
              src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="E-Commerce Solutions" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// Features Section
const FeaturesSection = () => {
  const features = [
    {
      title: "Secure Payments",
      description: "Multiple payment gateway integrations with PCI compliance",
      icon: <CreditCard className="text-white" size={24} />,
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      title: "Inventory Management",
      description: "Real-time stock tracking with automated alerts",
      icon: <Package className="text-white" size={24} />,
      gradient: "from-pink-500 to-rose-600"
    },
    {
      title: "SEO Optimization",
      description: "Built-in tools to rank higher in search results",
      icon: <Search className="text-white" size={24} />,
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      title: "Fraud Protection",
      description: "Advanced security measures to protect your business",
      icon: <Shield className="text-white" size={24} />,
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Shipping Integration",
      description: "Connect with major carriers for seamless fulfillment",
      icon: <Truck className="text-white" size={24} />,
      gradient: "from-yellow-500 to-amber-600"
    },
    {
      title: "Global Selling",
      description: "Multi-currency and multi-language support",
      icon: <Globe className="text-white" size={24} />,
      gradient: "from-red-500 to-pink-600"
    }
  ];

  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Powerful E-Commerce Features"
          subtitle="Everything you need to launch and grow your online store"
          highlight="Features"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200/50 hover:border-${feature.gradient.split(' ')[1]}/30`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-md mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Platforms Section
const PlatformsSection = () => {
  const platforms = [
    {
      name: "Shopify",
      description: "All-in-one commerce platform to start, grow, and manage a business",
      icon: "🛍️",
      bestFor: "Beginners & growing businesses"
    },
    {
      name: "WooCommerce",
      description: "Open-source e-commerce plugin for WordPress",
      icon: "🛒",
      bestFor: "WordPress users & custom solutions"
    },
    {
      name: "Magento",
      description: "Flexible, scalable commerce platform for large businesses",
      icon: "🏪",
      bestFor: "Enterprise-level businesses"
    },
    {
      name: "BigCommerce",
      description: "SaaS platform for fast-growing and established brands",
      icon: "🏬",
      bestFor: "Mid-market to enterprise"
    },
    {
      name: "Custom Solutions",
      description: "Tailored e-commerce platforms built from scratch",
      icon: "🛠️",
      bestFor: "Unique business needs"
    }
  ];

  return (
    <section className="relative py-20 bg-gray-50">
      <FloatingBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader 
          title="Supported E-Commerce Platforms"
          subtitle="We specialize in all major e-commerce platforms"
          highlight="Platforms"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200/50 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="text-4xl mb-4">{platform.icon}</span>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{platform.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{platform.description}</p>
              <div className="mt-auto bg-purple-50 text-purple-700 text-xs font-medium px-3 py-1 rounded-full">
                {platform.bestFor}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Process Section
const ProcessSection = () => {
  const steps = [
    {
      title: "Discovery & Strategy",
      description: "We analyze your business needs and create a customized e-commerce strategy",
      icon: "🔍"
    },
    {
      title: "Design & UX",
      description: "Crafting beautiful, intuitive shopping experiences",
      icon: "🎨"
    },
    {
      title: "Development",
      description: "Building your store with best practices and modern technologies",
      icon: "💻"
    },
    {
      title: "Testing",
      description: "Rigorous quality assurance across all devices and scenarios",
      icon: "🧪"
    },
    {
      title: "Launch",
      description: "Going live with marketing and SEO optimization",
      icon: "🚀"
    },
    {
      title: "Growth",
      description: "Ongoing optimization and scaling support",
      icon: "📈"
    }
  ];

  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Our E-Commerce Development Process"
          subtitle="A proven methodology to build successful online stores"
          highlight="Process"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                <span className="text-purple-600">Step {index + 1}:</span> {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Pricing Section
const PricingSection = () => {
  const plans = [
    {
      title: "Starter",
      price: "$1,999",
      features: [
        "Basic online store setup",
        "Up to 50 products",
        "1 payment gateway",
        "Mobile responsive design",
        "Basic SEO setup",
        "Email support"
      ],
      popular: false
    },
    {
      title: "Business",
      price: "$4,999",
      features: [
        "Advanced e-commerce site",
        "Up to 500 products",
        "Multiple payment options",
        "Custom design elements",
        "Advanced SEO",
        "Inventory management",
        "Priority support"
      ],
      popular: true
    },
    {
      title: "Enterprise",
      price: "$9,999+",
      features: [
        "Custom e-commerce solution",
        "Unlimited products",
        "All payment gateways",
        "Premium design",
        "Advanced analytics",
        "CRM integration",
        "Dedicated account manager",
        "24/7 support"
      ],
      popular: false
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Transparent Pricing Plans"
          subtitle="Flexible options to fit your business needs and budget"
          highlight="Pricing"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative rounded-2xl overflow-hidden ${plan.popular ? 'border-2 border-purple-500 shadow-xl' : 'border border-gray-200'} bg-white`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                <p className="text-3xl font-bold text-purple-600 mb-6">{plan.price}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5 mr-2" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full px-6 py-3 rounded-lg font-medium ${plan.popular ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-purple-500/30' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'} transition-all duration-300`}>
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Case Studies Section
const CaseStudiesSection = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Fashion Boutique",
      description: "Increased online sales by 300% with our custom Shopify solution",
      tags: ["Shopify", "Stripe", "SEO"],
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      result: "300% revenue growth"
    },
    {
      id: 2,
      title: "Electronics Retailer",
      description: "Scaled to handle 10,000+ daily visitors with our optimized Magento platform",
      tags: ["Magento", "PayPal", "Inventory"],
      image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      result: "10K+ daily visitors"
    },
    {
      id: 3,
      title: "Health Supplements",
      description: "Reduced cart abandonment by 45% with improved UX and checkout flow",
      tags: ["WooCommerce", "Stripe", "UX"],
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      result: "45% less abandonment"
    }
  ];

  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="E-Commerce Success Stories"
          subtitle="See how we've helped businesses grow online"
          highlight="Case Studies"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {caseStudies.map((project) => (
            <motion.div
              key={project.id}
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
                  src={project.image}
                  alt={project.title}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <span className="absolute bottom-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm">
                  {project.result}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-50 text-purple-700 group-hover:bg-purple-100 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Benefits Section
const BenefitsSection = () => {
  const benefits = [
    {
      title: "10+ Years Experience",
      description: "We've been building e-commerce solutions since 2012",
      icon: <BarChart2 className="text-purple-600" size={24} />
    },
    {
      title: "200+ Successful Stores",
      description: "We've launched stores across multiple industries",
      icon: <ShoppingCart className="text-purple-600" size={24} />
    },
    {
      title: "Conversion Focused",
      description: "Our designs are optimized for maximum conversions",
      icon: <CreditCard className="text-purple-600" size={24} />
    },
    {
      title: "Ongoing Support",
      description: "We provide continuous maintenance and updates",
      icon: <Shield className="text-purple-600" size={24} />
    }
  ];

  return (
    <section className="relative py-20 bg-gray-50">
      <FloatingBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader 
          title="Why Choose Our E-Commerce Services"
          subtitle="What sets us apart from other e-commerce developers"
          highlight="Benefits"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = ({ formData, handleChange }) => (
  <section className="relative py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader 
        title="Ready to Start Your E-Commerce Journey?"
        subtitle="Get in touch with our experts today"
        highlight="Contact Us"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        <motion.div
          className="bg-white rounded-2xl shadow-sm p-8 border border-gray-200/50"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
          <form>
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Send Message <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </motion.div>

        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-200/50">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Email Us</h4>
                  <p className="text-lg font-medium text-gray-900">sales@ecommercesolutions.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Call Us</h4>
                  <p className="text-lg font-medium text-gray-900">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Visit Us</h4>
                  <p className="text-lg font-medium text-gray-900">123 Commerce Street, San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Free E-Commerce Consultation</h3>
            <p className="mb-6 opacity-90">Book a free 30-minute strategy session with our e-commerce experts</p>
            <button className="w-full px-6 py-3 rounded-lg bg-white text-purple-600 font-medium hover:bg-gray-100 transition-colors duration-300">
              Schedule Now
            </button>
          </div>
        </motion.div>
      </div>
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
    <span className={`inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full ${lightMode ? 'bg-white/20 text-white' : 'bg-purple-100 text-purple-700'} mb-4`}>
      {highlight}
    </span>
    <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${lightMode ? 'text-white' : 'text-gray-900'} mb-4`}>
      {title}
    </h2>
    <p className={`text-lg ${lightMode ? 'text-purple-100' : 'text-gray-600'} max-w-3xl mx-auto`}>
      {subtitle}
    </p>
  </motion.div>
);

export default EComSol;