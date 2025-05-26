import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import ContactUsForm from "../NavbarPages/ContactUsForm";
import picstart from "../../assets/Picsart_25-03-17_19-03-04-545-removebg-preview.png";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/servicePagesess" },
  { name: "About", path: "/Aboupages" },
  { name: "Projects", path: "/digitalPortfolio" },
  { name: "Blog", path: "/blogSection" },
];

function Navbar() {
  const [showContactUsForm, setShowContactUsForm] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const ContactUsFormRef = useRef(null);
  const location = useLocation();

  // Track active link based on location.pathname
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        ContactUsFormRef.current &&
        !ContactUsFormRef.current.contains(event.target)
      ) {
        setShowContactUsForm(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Helper to handle link click
  const handleNavClick = (path) => {
    setActivePath(path);
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  };

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
        <div className="hidden lg:flex justify-between items-center w-[45%] ml-[30vw]">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => handleNavClick(link.path)}
              className={`relative group text-gray-800 transition-colors duration-200 ${
                activePath === link.path
                  ? "text-[#3b82f6] font-semibold"
                  : "hover:text-[#3b82f6]"
              }`}
            >
              <span className="text-[20px] font-semibold">{link.name}</span>
              <span
                className={`absolute left-0 bottom-0 h-[2.5px] bg-[#3b82f6] transition-all duration-300 ${
                  activePath === link.path
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          ))}

          {/* Contact Us with red text and blue underline hover */}
          <button
            onClick={() => setShowContactUsForm(!showContactUsForm)}
            className={`relative group ml-6 font-semibold text-[20px] cursor-pointer ${
              showContactUsForm
                ? "text-red-600"
                : "text-red-600 hover:text-red-700"
            }`}
          >
            Contact Us
            <span
              className={`absolute left-0 bottom-0 h-[2.5px] bg-[#3b82f6] transition-all duration-300 ${
                showContactUsForm ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </button>
        </div>

        {/* Menu Icon (for tablet and mobile) */}
        <div className="flex items-center space-x-4 lg:hidden">
          <button
            className="text-2xl text-gray-800 hover:text-[#3b82f6] transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i
              className={
                isMobileMenuOpen ? "ri-close-line" : "ri-menu-line"
              }
            ></i>
          </button>
        </div>

        {/* Desktop Contact Us Form */}
        <div
          className="hidden lg:block absolute top-[70px] right-16 z-50"
          ref={ContactUsFormRef}
        >
          {showContactUsForm && <ContactUsForm />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-[70px] left-0 w-full bg-white shadow-lg z-40 md:w-full overflow-y-auto max-h-[calc(100vh-70px)]">
          <div className="flex flex-col p-4 space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`py-2 px-2 border-b border-gray-100 rounded transition-colors duration-200 ${
                  activePath === link.path
                    ? "text-[#3b82f6] font-semibold border-b-2 border-[#3b82f6]"
                    : "text-gray-800 hover:bg-gray-50"
                }`}
                onClick={() => handleNavClick(link.path)}
              >
                <span className="text-[16px] font-medium">{link.name}</span>
              </Link>
            ))}

            {/* Mobile Contact Us */}
            <button
              className={`font-semibold text-[18px] border-b-2 border-transparent transition-all duration-300 cursor-pointer mt-2 ${
                showContactUsForm
                  ? "text-red-600 border-b-2 border-[#3b82f6]"
                  : "text-red-600 hover:border-[#3b82f6]"
              }`}
              onClick={() => setShowContactUsForm(!showContactUsForm)}
            >
              Contact Us
            </button>

            {showContactUsForm && (
              <div className="mt-2 px-2">
                <ContactUsForm />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Spacer div to push content below fixed navbar */}
      <div className="mt-[40px] md:mt-[50px] lg:mt-[60px]" />
    </div>
  );
}

export default Navbar;
