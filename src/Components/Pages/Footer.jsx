import React from "react";
import 'remixicon/fonts/remixicon.css';

function Footer() {
  return (
    <div className="w-full bg-gradient-to-b from-gray-800 to-gray-900 text-white py-16">
      {/* Footer Top Section */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* About Section */}
        <div>
          <h1 className="text-3xl font-bold mb-4">ASTRAPENT</h1>
          <p className="text-gray-400 leading-relaxed">
            <span className="font-bold text-white">AstraPent AI</span> is an innovative AI-powered cybersecurity solution designed to detect, analyze, and mitigate vulnerabilities across websites, web applications, and networks. Our cutting-edge AI model automates penetration testing, ensuring robust security for businesses and enterprises.
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400 mb-2">
            <i className="ri-phone-line text-blue-500"></i>
            <span className="ml-3">+91 995 577 7050</span>
          </p>
          <p className="text-gray-400">
            <i className="ri-mail-line text-blue-500"></i>
            <span className="ml-3">sales@astrapent.com</span>
          </p>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Product</h3>
            <ul className="text-gray-400 space-y-2">
              <li className="hover:text-blue-500 transition">
                <a href="#">Features</a>
              </li>
              <li className="hover:text-blue-500 transition">
                <a href="#">Pricing</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Resources</h3>
            <ul className="text-gray-400 space-y-2">
              <li className="hover:text-blue-500 transition">
                <a href="#">Blog</a>
              </li>
              <li className="hover:text-blue-500 transition">
                <a href="#">User Guides</a>
              </li>
              <li className="hover:text-blue-500 transition">
                <a href="#">Webinars</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-12 border-t border-gray-700 pt-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Astrapent, Inc. All rights reserved. <a href="#" className="hover:text-blue-500">Privacy</a> · <a href="#" className="hover:text-blue-500">Terms</a> · <a href="#" className="hover:text-blue-500">Sitemap</a>
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-blue-500 transition">
              <i className="ri-linkedin-box-fill"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition">
              <i className="ri-youtube-fill"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition">
              <i className="ri-twitter-x-line"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition">
              <i className="ri-facebook-fill"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition">
              <i className="ri-instagram-line"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;