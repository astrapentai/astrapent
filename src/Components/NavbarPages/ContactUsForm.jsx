
import React, { useState, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import contactImage from '../../assets/CLogo.png'; // Replace with your image path

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    companyName: '',
    phoneNumber: '',
    message: '',
  });
  const [showForm, setShowForm] = useState(true);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    document.body.style.overflow = showForm ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showForm]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === 'firstName' || name === 'companyName') {
      newValue = value.replace(/[^a-zA-Z\s]/g, '');
    } else if (name === 'phoneNumber') {
      newValue = value.replace(/[^0-9]/g, '');
    } else if (name === 'email') {
      newValue = value.replace(/[^a-zA-Z0-9@.]/g, '');
    }

    setFormData({ ...formData, [name]: newValue });
  };

  const handleClose = () => {
    setShowForm(false);
    navigate('/'); // Redirect to HomeTop when the form is closed
  };

  if (!showForm) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm font-sans p-4">
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="relative z-20 bg-gray-900 rounded-xl shadow-xl max-w-6xl w-full h-[90vh] max-h-[700px] grid grid-cols-1 lg:grid-cols-2 border border-gray-800 overflow-hidden"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={handleClose} // Call handleClose on close button click
          className="absolute top-3 right-3 text-gray-400 hover:text-white transition z-30"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </motion.button>

        {/* Left Side - Image */}
        <div className="hidden lg:block relative bg-gray-800 h-full">
          <motion.img
            src={contactImage}
            alt="Contact Illustration"
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/30 to-transparent"></div>
          <motion.div
            className="absolute bottom-8 left-0 right-0 px-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-white mb-3">Let's Build Something Amazing</h3>
            <p className="text-gray-300">Our team is ready to help transform your digital presence</p>
          </motion.div>
        </div>

        {/* Right Side - Form Content */}
        <div className="p-6 md:p-8 space-y-6 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
              Contact Us
            </h2>
            <p className="text-gray-400 mt-3">
              Get in touch with our experts today
            </p>
          </motion.div>

          <form className="space-y-5">
            {[
              { name: 'firstName', placeholder: 'First Name', type: 'text' },
              { name: 'email', placeholder: 'Email Address', type: 'email' },
              { name: 'companyName', placeholder: 'Company Name', type: 'text' },
              { name: 'phoneNumber', placeholder: 'Phone Number', type: 'tel' },
            ].map((field, index) => (
              <motion.div
                key={field.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                />
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <textarea
                name="message"
                placeholder="Your Message (Minimum 30 characters)"
                value={formData.message}
                onChange={handleChange}
                minLength="30"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-200 resize-none h-32 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
              />
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 py-3 rounded-lg font-medium flex items-center justify-center gap-2 text-md mt-4"
            >
              Submit <ArrowRight size={18} />
            </motion.button>
          </form>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactUsForm;