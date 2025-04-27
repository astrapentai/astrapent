import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiCpu,
  FiShield,
  FiCloud,
  FiLayers,
  FiCheck,
  FiTrendingUp,
} from "react-icons/fi";
import Footer from "../../Pages/Footer";
import CustomImage from "../../../assets/web-removebg-preview.png"; // Replace with your custom development image

const Custom_Dev = () => {
  const [activeTab, setActiveTab] = useState("ai");
  const [activeProcess, setActiveProcess] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: [],
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        services: checked
          ? [...prev.services, value]
          : prev.services.filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Thank you for your inquiry! Our custom development team will contact you shortly."
    );
  };

  const developmentServices = {
    ai: {
      title: "AI Solutions",
      description:
        "Custom AI systems tailored to your business needs with advanced machine learning capabilities.",
      icon: <FiCpu className="text-blue-600" size={24} />,
      technologies: ["Machine Learning", "NLP", "Computer Vision", "Analytics"],
      features: [
        "Custom model development",
        "Data pipeline architecture",
        "Real-time decision making",
        "Continuous learning",
      ],
    },
    blockchain: {
      title: "Blockchain Solutions",
      description:
        "Secure decentralized solutions for enterprises with blockchain technology.",
      icon: <FiShield className="text-blue-600" size={24} />,
      technologies: ["Smart Contracts", "Tokenization", "DeFi", "Digital Identity"],
      features: [
        "Immutable records",
        "Supply chain transparency",
        "Cryptographic security",
        "Automated compliance",
      ],
    },
    cloud: {
      title: "Cloud Native Development",
      description:
        "Scalable cloud architectures for modern businesses with high availability.",
      icon: <FiCloud className="text-blue-600" size={24} />,
      technologies: ["Microservices", "Kubernetes", "Serverless", "CI/CD"],
      features: [
        "Elastic scalability",
        "Zero-downtime deployments",
        "Global availability",
        "Cost optimization",
      ],
    },
  };

  const developmentProcess = [
    {
      title: "Requirement Analysis",
      description:
        "We conduct in-depth discussions to understand your business goals and technical requirements.",
    },
    {
      title: "Solution Design",
      description:
        "Creating architecture blueprints and UI/UX prototypes tailored to your needs.",
    },
    {
      title: "Development",
      description:
        "Agile implementation with continuous feedback and regular deliverables.",
    },
    {
      title: "Quality Assurance",
      description:
        "Comprehensive testing including security, performance, and usability.",
    },
    {
      title: "Deployment",
      description:
        "Seamless rollout with monitoring and minimal disruption to your operations.",
    },
    {
      title: "Maintenance & Optimization",
      description:
        "Ongoing maintenance, feature enhancements, and performance improvements.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-500 to-blue-500 text-white py-20 h-[93vh] mt-[-3vw] overflow-y-hidden flex flex-row ">
        <div className="container mx-auto px-6 flex flex-row items-center">
          {/* Left Side: Text Content */}
          <div className="w-1/2 text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Custom Software Development Solutions
            </h1>
            <p className="text-xl mb-8 max-w-lg">
              We deliver tailored software solutions to meet your unique
              business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-teal-400 to-blue-500 text-white hover:from-teal-500 hover:to-blue-600 font-semibold px-8 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                Get a Free Quote
              </button>
              <button className="bg-gradient-to-r from-blue-500 to-teal-400 text-white hover:from-blue-600 hover:to-teal-500 font-semibold px-8 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                View Our Work
              </button>
            </div>
          </div>

          {/* Right Side: Image with Smooth Animation */}
          <motion.div
            className="w-1/2 flex justify-center items-center"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 20 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.3,
            }}
          >
            <img
              src={CustomImage}
              alt="Custom Development"
              className="rounded-lg ml-28 overflow-y-hidden"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
              Our Custom Development Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your specific requirements.
            </p>
          </div>

          {/* Tabs for Services */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-md shadow-lg overflow-hidden">
              {Object.keys(developmentServices).map((serviceKey) => (
                <button
                  key={serviceKey}
                  onClick={() => setActiveTab(serviceKey)}
                  className={`px-6 py-3 text-sm font-medium transition-all duration-300 ${
                    activeTab === serviceKey
                      ? "bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-md"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  } ${serviceKey === "ai" ? "rounded-l-lg" : ""} ${
                    serviceKey === "cloud" ? "rounded-r-lg" : ""
                  }`}
                >
                  {developmentServices[serviceKey].title}
                </button>
              ))}
            </div>
          </div>

          {/* Service Details */}
          <div className="bg-white p-8 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left Column: Service Info */}
              <div className="md:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    {developmentServices[activeTab].icon}
                  </div>
                  <h3 className="text-3xl font-bold ml-4 text-gray-800">
                    {developmentServices[activeTab].title}
                  </h3>
                </div>
                <p className="text-gray-700 mb-6">
                  {developmentServices[activeTab].description}
                </p>

                <h4 className="font-semibold text-lg mb-2 text-gray-800">
                  Technologies We Use:
                </h4>
                <div className="flex flex-wrap gap-3 mb-6">
                  {developmentServices[activeTab].technologies.map(
                    (tech, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-teal-400 to-blue-500 text-white px-4 py-1 rounded-full text-sm shadow-md"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Right Column: Features */}
              <div className="md:w-1/2">
                <h4 className="font-semibold text-lg mb-3 text-gray-800">
                  Key Features:
                </h4>
                <ul className="space-y-3">
                  {developmentServices[activeTab].features.map(
                    (feature, index) => (
                      <li
                        key={index}
                        className="flex items-start bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                      >
                        <FiCheck className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A transparent, collaborative approach to building your custom
              solution.
            </p>
          </div>

          {/* Steps Navigation */}
          <div className="relative mb-12">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -z-10"></div>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {developmentProcess.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProcess(index)}
                  className={`flex flex-col items-center p-4 rounded-lg transition-transform transform ${
                    activeProcess === index
                      ? "bg-gradient-to-r from-blue-500 to-teal-500 text-white scale-105 shadow-lg"
                      : "bg-white hover:bg-gray-100 hover:scale-105"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mb-2 ${
                      activeProcess === index
                        ? "bg-blue-600 text-white"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <h3 className="text-sm font-medium text-center">
                    {step.title}
                  </h3>
                </button>
              ))}
            </div>
          </div>

          {/* Active Step Details */}
          <div className="bg-white p-8 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105">
            <h3 className="text-3xl font-bold mb-4 text-gray-800">
              {developmentProcess[activeProcess].title}
            </h3>
            <p className="text-gray-700 mb-6">
              {developmentProcess[activeProcess].description}
            </p>
          </div>
        </div>
      </section>

{/* CTA Section */}
<section className="py-16 bg-gradient-to-r from-blue-600 to-teal-500 text-white">
  <div className="container mx-auto px-6 text-center">
    {/* Section Header */}
    <h2 className="text-4xl font-extrabold mb-6">
      Ready to Build Your Custom Solution?
    </h2>
    <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
      Let's discuss your project requirements and how we can help bring your vision to life.
    </p>

    {/* Call-to-Action Button */}
    <div className="flex justify-center">
      <button
        onClick={() =>
          document
            .getElementById("contact-section")
            .scrollIntoView({ behavior: "smooth" })
        }
        className="bg-white text-blue-600 hover:text-white hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-600 font-semibold px-8 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
      >
        Start Your Project
      </button>
    </div>

    {/* Decorative Elements */}
    <div className="mt-12 flex justify-center gap-4">
      <div className="w-4 h-4 bg-white rounded-full animate-bounce"></div>
      <div className="w-4 h-4 bg-white rounded-full animate-bounce delay-150"></div>
      <div className="w-4 h-4 bg-white rounded-full animate-bounce delay-300"></div>
    </div>
  </div>
</section>


      {/* Contact Form Section */}
      <section
        id="contact-section"
        className="py-16 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600">
              Have questions about custom development? Contact our experts
              today.
            </p>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl transform transition-all duration-500 hover:shadow-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email address"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Services Interested In
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "AI Development",
                  "Blockchain Solutions",
                  "Cloud Native Development",
                  "Legacy Modernization",
                  "Security Audit",
                  "Other",
                ].map((service, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`service-${index}`}
                      name="services"
                      value={service}
                      checked={formData.services.includes(service)}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor={`service-${index}`}
                      className="ml-2 text-sm text-gray-700"
                    >
                      {service}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-semibold py-3 px-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              Request Consultation
            </button>
          </form>

          {/* Decorative Elements */}
          <div className="mt-12 flex justify-center gap-4">
            <div className="w-4 h-4 bg-teal-500 rounded-full animate-bounce"></div>
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-150"></div>
            <div className="w-4 h-4 bg-teal-500 rounded-full animate-bounce delay-300"></div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Custom_Dev;