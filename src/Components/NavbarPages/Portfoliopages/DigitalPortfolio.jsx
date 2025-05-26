import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DigitalPortfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isHovered, setIsHovered] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Updated with perfectly matched high-quality images
  const capabilities = [
    { 
      name: "AI Solutions", 
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80", 
      description: "Transformative artificial intelligence implementations", 
      category: "Digital Solutions", 
      icon: "🤖" 
    },
    { 
      name: "eCommerce", 
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80", 
      description: "Next-gen online retail experiences", 
      category: "Digital Solutions", 
      icon: "🛒" 
    },
    { 
      name: "Cyber Security", 
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80", 
      description: "Enterprise-grade protection systems", 
      category: "Tech Innovation", 
      icon: "🔒" 
    },
    { 
      name: "SEO Optimization", 
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80", 
      description: "Data-driven search visibility", 
      category: "Marketing", 
      icon: "🔍" 
    },
    { 
      name: "Social Strategy", 
      image: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80", 
      description: "Viral content ecosystems", 
      category: "Marketing", 
      icon: "📱" 
    },
    { 
      name: "Web Design", 
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80", 
      description: "Award-winning digital experiences", 
      category: "Design Studio", 
      icon: "🎨" 
    },
    { 
      name: "Web Development", 
      image: "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80", 
      description: "Cutting-edge web applications", 
      category: "Development", 
      icon: "💻" 
    },
    { 
      name: "Web Platforms", 
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80", 
      description: "Scalable digital foundations", 
      category: "Platforms", 
      icon: "🌐" 
    },
    { 
      name: "Mobile Apps", 
      image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80", 
      description: "Native cross-platform solutions", 
      category: "Development", 
      icon: "📱" 
    },
    { 
      name: "Cloud Architecture", 
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80", 
      description: "Enterprise cloud infrastructure", 
      category: "Services", 
      icon: "☁️" 
    },
    { 
      name: "Data Analytics", 
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80", 
      description: "Actionable business intelligence", 
      category: "Digital Solutions", 
      icon: "📊" 
    },
    { 
      name: "IoT Systems", 
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80", 
      description: "Connected device ecosystems", 
      category: "Tech Innovation", 
      icon: "📶" 
    },
    { 
      name: "Blockchain", 
      image: "https://images.unsplash.com/photo-1620891549027-942fdc95d3f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80", 
      description: "Decentralized future solutions", 
      category: "Tech Innovation", 
      icon: "⛓️" 
    },
    // { 
    //   name: "AR/VR", 
    //   image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80", 
    //   description: "Immersive digital experiences", 
    //   category: "Design Studio", 
    //   icon: "👓" 
    // },
    { 
      name: "UI/UX", 
      image: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80", 
      description: "Human-centered interfaces", 
      category: "Design Studio", 
      icon: "✏️" 
    },
    { 
      name: "DevOps", 
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80", 
      description: "Automated deployment pipelines", 
      category: "Services", 
      icon: "🔄" 
    }
  ];
  const filterButtons = [
    "All",
    "Digital Solutions",
    "Tech Innovation",
   
    "Development",
    "Platforms",
    "Services"
  ];

  const filteredCards = activeFilter === "All" 
    ? capabilities 
    : capabilities.filter(card => card.category === activeFilter);

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: { y: -10 }
  };

  const filterVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    },
    hover: { scale: 1.05 }
  };

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 }
  };

 
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8 font-sans mt-[-2vw]">
      <div className="max-w-7xl mx-auto">
        {/* Header with animated gradient text */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Digital Innovation Portfolio
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Where cutting-edge technology meets exceptional design. Explore our transformative digital solutions that are reshaping industries.
          </p>
        </motion.div>

        {/* Animated Filter Buttons */}
        <motion.div
          variants={filterVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filterButtons.map((button) => (
            <motion.button
              key={button}
              variants={buttonVariants}
              whileHover="hover"
              onClick={() => setActiveFilter(button)}
              className={`px-5 py-2.5 rounded-full transition-all duration-300 font-medium text-sm sm:text-base shadow-sm
                ${activeFilter === button 
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
                }`}
            >
              {button}
            </motion.button>
          ))}
        </motion.div>
        
        {/* Filtered Cards - Strictly 3 per row */}
        <AnimatePresence>
          {filteredCards.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredCards.map((item, index) => (
                <motion.div
                  key={`${item.name}-${index}`}
                  layout
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  onHoverStart={() => setIsHovered(index)}
                  onHoverEnd={() => setIsHovered(null)}
                  className="relative group overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-56 overflow-hidden cursor-pointer" onClick={() => setSelectedImage(item.image)}>
                    <motion.img 
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      whileHover={{ scale: 1.1 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 text-3xl">
                      {item.icon}
                    </div>
                  </div>
                  
                  <motion.div 
                    className="p-6"
                    initial={{ y: 0 }}
                    animate={{ y: isHovered === index ? -10 : 0 }}
                  >
                    <div className="flex items-center mb-2">
                      <span className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-3 text-center py-16"
            >
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-500">No projects found</h3>
              <p className="text-gray-400 mt-1">We're working on new {activeFilter.toLowerCase()} projects. Check back soon!</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90"
              onClick={() => setSelectedImage(null)}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                className="relative max-w-6xl w-full max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.img
                  src={selectedImage}
                  alt="Enlarged preview"
                  className="w-full h-full object-contain"
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                />
                <button
                  className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
                  onClick={() => setSelectedImage(null)}
                >
                  &times;
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DigitalPortfolio;