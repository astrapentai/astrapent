import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BlogSection = () => {
  const initialPosts = [
    {
      id: 1,
      title: "Top Website Designer & Web Development Company in Jaipur",
      excerpt: "How we helped businesses transform their online presence with cutting-edge web solutions.",
      category: "Web Development",
      date: "April 2025",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      readTime: "4 min read"
    },
    {
      id: 2,
      title: "How We Helped a Local Business Increase Sales with WordPress",
      excerpt: "Case study of a local business that saw 300% growth after our website redesign.",
      category: "Case Study",
      date: "April 2025",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      readTime: "5 min read"
    },
    {
      id: 3,
      title: "Google's Latest Algorithm Update: What It Means for SEO",
      excerpt: "Breaking down the recent Google update and how to adapt your digital marketing strategy.",
      category: "SEO",
      date: "March 10, 2025",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "CMS Development Services for Small Businesses",
      excerpt: "Why custom CMS solutions can be game-changers for small business owners.",
      category: "CMS",
      date: "January 9, 2025",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      readTime: "3 min read"
    },
    {
      id: 5,
      title: "Top Web Developer Skills for 2025",
      excerpt: "The must-have skills every web developer needs to stay competitive this year.",
      category: "Career",
      date: "January 7, 2025",
      image: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      readTime: "7 min read"
    },
    {
      id: 6,
      title: "New Small Business Website: Can Beauty Salons Benefit from SEO in Jaipur?",
      excerpt: "Exploring how local beauty businesses can leverage SEO to attract more customers.",
      category: "Local SEO",
      date: "December 26, 2024",
      image: "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      readTime: "4 min read"
    },
    {
      id: 7,
      title: "Website Maintenance: Why It's Crucial for Your Business",
      excerpt: "Regular website maintenance can prevent security issues and improve performance.",
      category: "Maintenance",
      date: "December 15, 2024",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      readTime: "5 min read"
    },
    {
      id: 8,
      title: "E-commerce Trends to Watch in 2025",
      excerpt: "The future of online shopping and what businesses need to prepare for.",
      category: "E-commerce",
      date: "November 30, 2024",
      image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      readTime: "8 min read"
    },
    {
      id: 9,
      title: "Mobile-First Design: Why It's No Longer Optional",
      excerpt: "With mobile traffic dominating, here's how to optimize your website for mobile users.",
      category: "Web Design",
      date: "November 20, 2024",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      readTime: "6 min read"
    }
  ];

  const additionalPosts = [
    {
      id: 10,
      title: "The Future of JavaScript Frameworks in 2025",
      excerpt: "Exploring upcoming trends in JavaScript frameworks and what developers should learn.",
      category: "Development",
      date: "November 10, 2024",
      image: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      readTime: "7 min read"
    },
    {
      id: 11,
      title: "Building Accessible Websites: A Complete Guide",
      excerpt: "Why accessibility matters and how to implement it in your web projects.",
      category: "Web Design",
      date: "October 28, 2024",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      readTime: "9 min read"
    },
    {
      id: 12,
      title: "Content Strategy for Small Businesses",
      excerpt: "How to create a content strategy that drives traffic and conversions.",
      category: "Content Marketing",
      date: "October 15, 2024",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      readTime: "5 min read"
    },
    {
      id: 13,
      title: "Social Media Integration for Websites",
      excerpt: "Best practices for integrating social media into your website design.",
      category: "Social Media",
      date: "October 5, 2024",
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      readTime: "4 min read"
    },
    {
      id: 14,
      title: "Progressive Web Apps: The Future of Mobile",
      excerpt: "Why PWAs are becoming essential for mobile user experiences.",
      category: "Mobile Development",
      date: "September 22, 2024",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      readTime: "6 min read"
    },
    {
      id: 15,
      title: "Website Performance Optimization Techniques",
      excerpt: "Advanced techniques to make your website load faster and rank higher.",
      category: "Performance",
      date: "September 10, 2024",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      readTime: "8 min read"
    }
  ];

  const [showAllPosts, setShowAllPosts] = useState(false);
  const [displayedPosts, setDisplayedPosts] = useState(initialPosts);

  const handleViewAllClick = () => {
    setDisplayedPosts([...initialPosts, ...additionalPosts]);
    setShowAllPosts(true);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white mt-[-2vw]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
              Insights & Trends
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">Blog Posts</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Discover the latest industry insights, trends and case studies from our digital experts
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPosts.map((post, index) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <motion.a 
                  href="#" 
                  className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Read more
                  <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>

        {!showAllPosts && (
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.button
              onClick={handleViewAllClick}
              whileHover={{ 
                scale: 1.05,
                background: "linear-gradient(to right, #4f46e5, #7c3aed)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all relative overflow-hidden"
            >
              <span className="relative z-10">View All Blog Posts</span>
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-blue-600 opacity-0 hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
              />
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;