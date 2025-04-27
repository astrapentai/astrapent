import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg fixed w-full z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="text-3xl font-bold">AstraPent</a>

        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="#services" className="hover:text-gray-300">Services</a>
          <a href="#features" className="hover:text-gray-300">Features</a>
          <a href="#pricing" className="hover:text-gray-300">Pricing</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-indigo-700 text-white flex flex-col items-center space-y-4 py-4">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="#services" className="hover:text-gray-300">Services</a>
          <a href="#features" className="hover:text-gray-300">Features</a>
          <a href="#pricing" className="hover:text-gray-300">Pricing</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
