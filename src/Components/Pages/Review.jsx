import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, ArrowLeft } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link, useNavigate } from 'react-router-dom';
const Review = () => {
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate('/contactUS'); // Replace '/contact' with your actual contact page route
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-us');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const testimonials = [
    {
      id: 1,
      name: "Mittul Gupta",
      position: "CEO, TechSolutions",
      quote: "Thank you to Flown developer extremely professional easy to reach reasonable prices and very flexible in my experience",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      name: "Mobin R",
      position: "Marketing Director",
      quote: "Excellent Service thank you to everyone at Flown Developer for all their help highly recommend.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/44.jpg"
    },
    {
      id: 3,
      name: "Stanship Project",
      position: "Project Manager",
      quote: "Amazing work done within deadline. Super responsive team and great customer support. Kudos to Muddshit for her skills",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      id: 4,
      name: "Unvi Shelar",
      position: "Creative Director",
      quote: "Would like to thank team Flown developers for completing my website as per commitment, the cost is very reasonable & low",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/33.jpg"
    }
  ];

  return (
    <div className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-50/30 to-purple-50/30">
      {/* Floating background elements */}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-700 uppercase rounded-full bg-blue-100/80 backdrop-blur-sm mb-4">
            Client Voices
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Trusted by</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Industry Leaders</span>
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
            We have established a record of happy clientele, as customer satisfaction is our topmost priority.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation={{
              nextEl: '.testimonial-next',
              prevEl: '.testimonial-prev',
            }}
            pagination={{
              clickable: true,
              el: '.testimonial-pagination',
              type: 'bullets',
              bulletClass: 'w-2 h-2 rounded-full bg-gray-300 mx-1 inline-block',
              bulletActiveClass: 'bg-blue-600'
            }}
            className="py-8 px-2"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 h-full border border-gray-200/50 hover:border-blue-200/70"
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
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <div className="flex justify-center items-center mt-8 gap-4">
            <button className="testimonial-prev w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg transition-all flex items-center justify-center hover:bg-gray-50">
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </button>
            <div className="testimonial-pagination mx-4"></div>
            <button className="testimonial-next w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg transition-all flex items-center justify-center hover:bg-gray-50">
              <ArrowRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center border border-gray-200/50 shadow-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            India's Premier <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Web Development</span> Company
          </h3>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            We craft digital experiences with cutting-edge tools and innovations, ensuring your website stands out in today's competitive landscape.
          </p>
          <button
            onClick={scrollToContact} // Smooth scroll to ContactUS section
            className="mt-6 px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            Start Your Project
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Review;