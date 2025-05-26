import React, { useState, useEffect } from "react";
import { X, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import contactImage from "../../assets/CLogo.png";

function ContactForm() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    phoneNumber: "",
    message: "",
  });

  const [showForm, setShowForm] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "fullName" || name === "companyName") {
      newValue = value.replace(/[^a-zA-Z\s]/g, "");
    } else if (name === "phoneNumber") {
      newValue = value.replace(/[^0-9]/g, "");
    }

    setFormData((prev) => ({ ...prev, [name]: newValue }));
  };

  const handleClose = () => {
    setShowForm(false);
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      const response = await fetch("https://astrapent-backend.vercel.app/api/generalContact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          fullName: "",
          email: "",
          companyName: "",
          phoneNumber: "",
          message: "",
        });
        setTimeout(() => setSubmitSuccess(false), 4000);
      } else {
        const resData = await response.json();
        setSubmitError(resData.message || "Something went wrong.");
      }
    } catch (error) {
      setSubmitError("Network error. Please try again!");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!showForm) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-2 sm:p-4">
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`bg-gray-900 rounded-lg shadow-xl w-200 overflow-hidden border border-gray-700 ${
          !isMobile ? "max-w-4xl md:grid md:grid-cols-2" : "max-w-md"
        }`}
        style={{
          maxHeight: "90vh",
        }}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-white z-30"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Section - Only visible on md+ screens */}
        {!isMobile && (
          <div className="hidden md:flex items-center justify-center bg-gray-800 p-4">
            <img
              src={contactImage}
              alt="Contact Us"
              className="w-full h-full object-contain max-h-[400px]"
            />
          </div>
        )}

        {/* Form Section */}
        <div className="p-4 space-y-3 overflow-y-auto">
          <div className="mb-2">
            <h2 className="text-lg sm:text-xl font-bold text-cyan-400">
              Contact Us
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm">
              Our team will get in touch shortly
            </p>
          </div>

          {(submitSuccess || submitError) && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-2 rounded text-sm ${
                submitSuccess ? "bg-green-600" : "bg-red-600"
              } text-white`}
            >
              {submitSuccess
                ? "Thank you! Your message has been sent."
                : submitError}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3">
            {[
              { label: "Full Name", name: "fullName", type: "text" },
              { label: "Email", name: "email", type: "email" },
              { label: "Company Name", name: "companyName", type: "text" },
              { label: "Phone Number", name: "phoneNumber", type: "tel" },
            ].map(({ label, name, type }) => (
              <div key={name}>
                <input
                  name={name}
                  type={type}
                  placeholder={label}
                  value={formData[name]}
                  onChange={handleChange}
                  required={name === "fullName" || name === "email"}
                  className="w-full px-3 py-2 text-sm sm:text-base bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                />
              </div>
            ))}

            <textarea
              name="message"
              placeholder="Your message (minimum 30 characters)"
              value={formData.message}
              onChange={handleChange}
              minLength={30}
              required
              className="w-full px-3 py-2 text-sm sm:text-base bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-500 resize-none focus:outline-none focus:ring-1 focus:ring-cyan-500"
              rows={4}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-2 rounded flex items-center justify-center text-sm sm:text-base hover:opacity-90 transition-opacity"
            >
              {isSubmitting ? (
                "Submitting..."
              ) : (
                <>
                  Submit <ArrowRight size={16} className="ml-1" />
                </>
              )}
            </button>
          </form>
        </div>
      </motion.section>
    </div>
  );
}

export default ContactForm;
