import React from "react";
import { ShieldCheck, Globe, Server, Lock } from "lucide-react";

const services = [
  { icon: <ShieldCheck />, title: "Web App Security", desc: "Identify and mitigate vulnerabilities in your web application." },
  { icon: <Globe />, title: "Network Security", desc: "Secure your network with comprehensive penetration testing." },
  { icon: <Server />, title: "Server Protection", desc: "Prevent unauthorized access to your servers." },
  { icon: <Lock />, title: "Data Encryption", desc: "Protect sensitive data with advanced encryption techniques." }
];

const Services = () => {
  return (
    <div id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold">Our Services</h2>
        <p className="text-gray-600 mt-4">Comprehensive security solutions</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
              <div className="text-blue-500 mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
