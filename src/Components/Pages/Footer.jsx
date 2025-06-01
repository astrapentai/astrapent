import React from "react";
import "remixicon/fonts/remixicon.css";

function Footer() {
  return (
    <div className="w-full bg-gradient-to-b from-gray-800 to-gray-900 text-white py-16">
      {/* Footer Top Section */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* About Section */}
        <div>
          <h1 className="text-3xl font-bold mb-4">ASTRAPENT</h1>
          <p className="text-gray-400 leading-relaxed">
            <span className="font-bold text-white">AstraPent AI</span> Transform your ideas into reality with custom web and mobile solutions. At AstraPent, we build innovative, scalable software that drives your success. Ready to stand out? Let’s create something extraordinary!.
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
            <span className="ml-3">astrapent@gmail.com</span>
          </p>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Company</h3>
            <ul className="text-gray-400 space-y-2">
              <li className="hover:text-blue-500 transition">
                <a href="/Aboupages">About Us</a>
              </li>
              {/* <li className="hover:text-blue-500 transition">
                <a href="#">Cereer</a>
              </li> */}
              <li className="hover:text-blue-500 transition">
                <a href="/ContactUs">Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Support</h3>
            <ul className="text-gray-400 space-y-2">
              <li className="hover:text-blue-500 transition">Privacy Policy</li>
              <li className="hover:text-blue-500 transition">User Guides</li>
              <li className="hover:text-blue-500 transition">
                Cancellation and Refund
              </li>
              <li className="hover:text-blue-500 transition">FAQ</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-12 border-t border-gray-700 pt-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Astrapent, Inc. All rights reserved.{" "}
           
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://www.linkedin.com/company/astrapentai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors duration-300 text-xl"
            >
              <i className="ri-linkedin-box-fill"></i>
            </a>

            <a
              href="https://www.instagram.com/astrapentai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition-colors duration-300 text-xl"
            >
              <i className="ri-instagram-line"></i>
            </a>

            <a
              href="https://x.com/astrapentai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors duration-300 text-xl"
            >
              <i className="ri-twitter-x-line"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
