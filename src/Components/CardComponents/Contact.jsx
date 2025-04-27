import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <p className="text-gray-600 mt-4">We'd love to hear from you</p>

        <form className="mt-10 max-w-lg mx-auto">
          <input type="text" placeholder="Your Name" className="w-full px-4 py-2 mb-4 border rounded-lg" />
          <input type="email" placeholder="Your Email" className="w-full px-4 py-2 mb-4 border rounded-lg" />
          <textarea placeholder="Your Message" className="w-full px-4 py-2 mb-4 border rounded-lg"></textarea>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
