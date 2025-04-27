import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer website development, e-commerce solutions, digital marketing, graphic design, and much more to help your business grow online."
    },
    {
      question: "How can I get started with D3 Logics?",
      answer: "You can get started by contacting us through our website or by calling our sales team. We'll schedule a consultation to understand your requirements."
    },
    {
      question: "How much will it cost to develop my website?",
      answer: "The cost varies depending on your requirements. We offer custom quotes after understanding your project scope during our initial consultation."
    },
    {
      question: "What makes D3 Logics different from other agencies?",
      answer: "Our unique combination of technical expertise, creative design, and data-driven marketing strategies sets us apart from competitors."
    },
    {
      question: "How long does it take to complete a website project?",
      answer: "Typical projects take 4-8 weeks from start to launch, depending on complexity and client feedback turnaround times."
    },
    {
      question: "Do you provide ongoing support after my website is launched?",
      answer: "Yes, we offer various maintenance and support packages to keep your website updated and running smoothly."
    },
    {
      question: "Can you help me with SEO and digital marketing for my website?",
      answer: "Absolutely! We have a dedicated digital marketing team that specializes in SEO, PPC, social media marketing, and content strategy."
    }
  ];

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
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 relative z-10">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-gray-200 rounded-xl overflow-hidden transition-all duration-300
                ${activeIndex === index ? 'shadow-lg border-blue-500' : 'hover:shadow-md hover:border-gray-300'}`}
            >
              <button
                className={`w-full px-6 py-4 text-left flex justify-between items-center transition-colors duration-200
                  ${activeIndex === index ? 'bg-blue-50 text-blue-600' : 'bg-white hover:bg-gray-50 text-gray-700'}`}
                onClick={() => setActiveIndex(index === activeIndex ? -1 : index)}
              >
                <div className="flex items-start">
                  <span className="font-bold text-blue-600 mr-3">Q.{index + 1}:</span>
                  <span className="text-lg font-semibold text-left">{faq.question}</span>
                </div>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-300
                    ${activeIndex === index ? 'rotate-180 text-blue-500' : 'text-gray-400'}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {activeIndex === index && (
                <div className="px-6 py-4 bg-white border-t border-gray-100">
                  <div className="flex">
                    <span className="font-bold text-blue-600 mr-3">Ans:</span>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;