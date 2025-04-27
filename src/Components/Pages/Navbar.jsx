import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import ContactUsForm from "../NavbarPages/ContactUsForm";

import picstart from "../../assets/Picsart_25-03-17_19-03-04-545-removebg-preview.png";

function Navbar() {
  const [showContactUsForm, setShowContactUsForm] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showDevSection, setShowDevSection] = useState(false); // Added state
  const [showSolution, setShowSolution] = useState(false); // Ensure this is defined
  const ContactUsFormRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ContactUsFormRef.current && !ContactUsFormRef.current.contains(event.target)) {
        setShowContactUsForm(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setShowDevSection(false); // Now defined
        setShowSolution(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <div className="relative">
      {/* Navbar */}
      <div className="h-[70px] md:h-[11vh] w-full bg-white flex justify-between items-center text-black font-medium fixed top-0 z-50 shadow-md px-4 md:px-8 lg:px-16">
        {/* Logo */}
        <Link
          to="/homeTop"
          onClick={() => window.scrollTo(0, 0)}
          className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px]"
        >
          <img
            src={picstart}
            alt="Home Top"
            className="h-full w-full object-cover rounded-lg"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex justify-between items-center w-[40%] ml-[35vw]">
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="relative group text-gray-800 hover:text-blue-600 transition-colors duration-200"
          >
            <span className="text-[20px] font-semibold">Home</span>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/servicePagesess"
            onClick={() => window.scrollTo(0, 0)}
            className="relative group hover:text-blue-600 transition-colors duration-200"
          >
            <span className="text-[20px] font-semibold">Services</span>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <button className="relative group text-gray-800 hover:text-blue-600 transition-colors duration-200">
            <Link to="/Aboupages"
            onClick={() => window.scrollTo(0, 0)}
             className="text-[20px] font-semibold">
              About
            </Link>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </button>

          <button className="relative group text-gray-800 hover:text-blue-600 transition-colors duration-200">
            <Link to="/digitalPortfolio" 
            onClick={() => window.scrollTo(0, 0)}
            className="text-[20px] font-semibold">
              Projects
            </Link>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </button>

          <button className="relative group text-gray-800 hover:text-blue-600 transition-colors duration-200">
            <Link to="/blogSection" 
            onClick={() => window.scrollTo(0, 0)}
            className="text-[20px] font-semibold">
              Blog
            </Link>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>

        {/* Menu Icon (for tablet and mobile) */}
        <div className="flex items-center space-x-4 lg:hidden">
          <button
            className="text-2xl text-gray-800 hover:text-blue-600 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={isMobileMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
          </button>
        </div>

        {/* Desktop Contact Us */}
        <div
          className="hidden lg:block relative group text-gray-800 hover:text-blue-600 transition-colors duration-200"
          ref={ContactUsFormRef}
        >
          <button
            className="text-[20px] font-semibold "
            onClick={() => setShowContactUsForm(!showContactUsForm)}
          >
            Contact Us
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </button>

          {showContactUsForm && <ContactUsForm />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-[70px] left-0 w-full bg-white shadow-lg z-40 md:w-full overflow-y-auto max-h-[calc(100vh-70px)]">
          <div className="flex flex-col p-4 space-y-4">
            <Link
              to="/"
             
              className="text-gray-800 py-2 px-2 border-b border-gray-100 hover:bg-gray-50 rounded transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-[16px] font-medium">Home</span>
              
            </Link>

            <div className="py-2 px-2 border-b border-gray-100">
              <button
                className="text-gray-800 w-full flex justify-between items-center hover:bg-gray-50 rounded transition-colors duration-200"
                onClick={() => setShowDevSection(!showDevSection)}
              >
                <span className="text-[16px] font-medium">Services</span>
                <i
                  className={`ri-arrow-down-s-line transition-transform ${
                    showDevSection ? "rotate-180" : ""
                  }`}
                ></i>
              </button>
            </div>

            <button
              className="text-gray-800 py-2 px-2 border-b border-gray-100 hover:bg-gray-50 rounded transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-[16px] font-medium">About</span>
            </button>

            <Link
              to="/projects"
              className="text-gray-800 py-2 px-2 border-b border-gray-100 hover:bg-gray-50 rounded transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-[16px] font-medium">Projects</span>
            </Link>

            <button
              className="text-gray-800 py-2 px-2 border-b border-gray-100 hover:bg-gray-50 rounded transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-[16px] font-medium">Blog</span>
            </button>

            {/* Mobile Contact Us */}
            <div className="pt-4">
              <button
                className="w-full h-12 text-white font-medium rounded-full bg-gradient-to-r from-[#3076F8] to-[#FB62F6] hover:shadow-lg transition-all duration-300 hover:opacity-90"
                onClick={() => setShowContactUsForm(!showContactUsForm)}
              >
                Contact Us
              </button>

              {showContactUsForm && (
                <div className="mt-2">
                  <ContactUsForm />
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Spacer div to push content below fixed navbar */}
      <div className="mt-[80px] md:mt-[100px] lg:mt-[120px]" />
    </div>
  );
}

export default Navbar;