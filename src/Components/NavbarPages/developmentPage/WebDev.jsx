import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Star, Mail, Phone, MapPin, Send, Code, Layout, Smartphone, Globe, Server, Zap, Shield } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Footer from '../../Pages/Footer';

const WebDev = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Data for all sections
  const services = [
    {
      title: 'Custom Website Development',
      description: 'Tailored websites built with React, Next.js, and modern frameworks for optimal performance and scalability.',
      icon: <Code className="text-white" size={20} />,
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'E-Commerce Solutions',
      description: 'Complete online stores with secure payment gateways, inventory management, and conversion optimization.',
      icon: <Smartphone className="text-white" size={20} />,
      gradient: 'from-purple-500 to-fuchsia-600'
    },
    {
      title: 'UI/UX Design',
      description: 'User-centric designs that enhance engagement and drive business growth through intuitive interfaces.',
      icon: <Layout className="text-white" size={20} />,
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      title: 'Web Application Development',
      description: 'Powerful web apps with real-time functionality, APIs, and seamless third-party integrations.',
      icon: <Globe className="text-white" size={20} />,
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      title: 'Backend Development',
      description: 'Robust server-side solutions with Node.js, databases, and cloud infrastructure for your web projects.',
      icon: <Server className="text-white" size={20} />,
      gradient: 'from-rose-500 to-pink-600'
    },
    {
      title: 'Website Maintenance',
      description: 'Ongoing support, updates, and security patches to keep your website running smoothly.',
      icon: <Shield className="text-white" size={20} />,
      gradient: 'from-violet-500 to-purple-600'
    }
  ];

  const technologies = [
    { name: 'React', icon: '⚛️', description: 'Frontend library for interactive UIs' },
    { name: 'Next.js', icon: '🅱️', description: 'React framework for production' },
    { name: 'Node.js', icon: '🟢', description: 'JavaScript runtime environment' },
    { name: 'Tailwind CSS', icon: '🎨', description: 'Utility-first CSS framework' },
    { name: 'MongoDB', icon: '🍃', description: 'NoSQL database solution' },
    { name: 'GraphQL', icon: '📊', description: 'API query language' },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, Digital Solutions",
      quote: "Our new website increased conversions by 40% and reduced bounce rates significantly. The team delivered beyond expectations.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Marketing Director",
      quote: "The e-commerce platform they built handles our 10,000+ daily visitors flawlessly. Excellent performance and security.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      name: "Priya Patel",
      position: "Founder, Startup Ventures",
      quote: "From concept to launch, their team guided us through every step. Our web app is now our competitive advantage.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  const processSteps = [
    {
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a detailed project roadmap",
      icon: "🔍"
    },
    {
      title: "UI/UX Design",
      description: "Crafting intuitive user interfaces and seamless experiences",
      icon: "🎨"
    },
    {
      title: "Development",
      description: "Building your solution with clean, maintainable code",
      icon: "💻"
    },
    {
      title: "Testing",
      description: "Rigorous quality assurance across all devices and scenarios",
      icon: "🧪"
    },
    {
      title: "Deployment",
      description: "Launching your product with optimal performance",
      icon: "🚀"
    },
    {
      title: "Maintenance",
      description: "Ongoing support and updates post-launch",
      icon: "🔧"
    }
  ];

  return (
    <div className="overflow-hidden mt-[-2vw]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-indigo-900 text-white overflow-hidden">
        <FloatingBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
                <span className="block">Professional</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Website Development
                </span>
              </h1>
              <p className="text-xl text-blue-100 max-w-xl mb-8">
                We build fast, secure, and scalable websites that drive business growth and engage your audience.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center">
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
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Website Development"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold">Modern Web Solutions</h3>
                  <p className="text-blue-100">Performance • Security • Scalability</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Web Development Services"
            subtitle="Comprehensive solutions tailored to your business needs"
            highlight="What We Offer"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>




      {/* Our Process Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Development Process"
            subtitle="A structured approach to delivering exceptional results"
            highlight="Methodology"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {processSteps.map((step, index) => (
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
                  <span className="text-blue-600">Step {index + 1}:</span> {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Why Invest in Professional Web Development"
            subtitle="Key benefits that set your business apart"
            highlight="Advantages"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <BenefitItem
                title="Improved Performance"
                description="Optimized code and infrastructure ensure fast loading times and smooth user experience."
                icon={<Zap className="text-blue-600" size={24} />}
              />
              <BenefitItem
                title="Enhanced Security"
                description="Protect your business and customer data with robust security measures and regular updates."
                icon={<Shield className="text-blue-600" size={24} />}
              />
              <BenefitItem
                title="Mobile Responsiveness"
                description="Perfect display and functionality across all devices and screen sizes."
                icon={<Smartphone className="text-blue-600" size={24} />}
              />
            </div>
            <div className="space-y-8">
              <BenefitItem
                title="SEO Optimization"
                description="Built-in search engine optimization to improve your online visibility."
                icon={<Globe className="text-blue-600" size={24} />}
              />
              <BenefitItem
                title="Scalability"
                description="Architected to grow with your business needs and traffic demands."
                icon={<Server className="text-blue-600" size={24} />}
              />
              <BenefitItem
                title="Ongoing Support"
                description="Dedicated maintenance and updates to keep your website running smoothly."
                icon={<Code className="text-blue-600" size={24} />}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 bg-gray-50">
        <FloatingBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            title="What Our Clients Say"
            subtitle="Success stories from businesses we've worked with"
            highlight="Testimonials"
          />

          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Online Presence?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Let's discuss how we can build a website that drives results for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 rounded-xl bg-white text-blue-600 font-medium hover:bg-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center">
                Get Started Now
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                Call Us: +1 (555) 123-4567
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Get In Touch"
            subtitle="Have a project in mind? Let's discuss how we can help"
            highlight="Contact Us"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <ContactForm formData={formData} handleChange={handleChange} />
            <ContactInfo />
          </div>
        </div>
      </section>
        <Footer/>
    </div>
  );
};

// Reusable Components
const FloatingBackground = () => (
  <div className="absolute inset-0 overflow-hidden opacity-20">
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
);

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

const ServiceCard = ({ service, index }) => (
  <motion.div
    className={`group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200/50 hover:border-${service.gradient.split(' ')[1]}/30`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
  >
    <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-md mb-6`}>
      {service.icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-3">
      {service.title}
    </h3>
    <p className="text-gray-600 leading-relaxed">
      {service.description}
    </p>
  </motion.div>
);

const BenefitItem = ({ title, description, icon }) => (
  <motion.div
    className="flex items-start gap-4"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
  >
    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 mt-1">{description}</p>
    </div>
  </motion.div>
);

const TestimonialSlider = ({ testimonials }) => (
  <div className="relative">
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      breakpoints={{
        768: { slidesPerView: 2 },
      }}
      navigation
      pagination={{ clickable: true }}
      className="py-8"
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.id}>
          <TestimonialCard testimonial={testimonial} />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

const TestimonialCard = ({ testimonial }) => (
  <motion.div
    className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 h-full border border-gray-200/50"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
  >
    <div className="flex mb-4">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
      ))}
    </div>
    <blockquote className="mb-6">
      <p className="text-gray-700 text-lg leading-relaxed">"{testimonial.quote}"</p>
    </blockquote>
    <div className="flex items-center gap-4 mt-auto">
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
      />
      <div>
        <p className="font-semibold text-gray-900">{testimonial.name}</p>
        <p className="text-sm text-gray-500">{testimonial.position}</p>
      </div>
    </div>
  </motion.div>
);

const ContactForm = ({ formData, handleChange }) => (
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
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
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
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
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
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
        >
          Send Message <Send className="w-5 h-5" />
        </button>
      </div>
    </form>
  </motion.div>
);

const ContactInfo = () => (
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
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
            <Mail className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-500">Email Us</h4>
            <p className="text-lg font-medium text-gray-900">contact@webdevsolutions.com</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
            <Phone className="w-5 h-5 text-purple-600" />
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
            <p className="text-lg font-medium text-gray-900">123 Tech Street, Bangalore, India</p>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg p-8 text-white">
      <h3 className="text-2xl font-bold mb-4">Schedule a Consultation</h3>
      <p className="mb-6 opacity-90">Book a free 30-minute call with our web development experts</p>
      <button className="w-full px-6 py-3 rounded-lg bg-white text-blue-600 font-medium hover:bg-gray-100 transition-colors duration-300">
        Book Now
      </button>
    </div>
  </motion.div>
  
 
);


export default WebDev;