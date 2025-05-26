import React from "react";

const testimonials = [
  { name: "Alice Johnson", text: "The best security solution we've ever used!" },
  { name: "Mike Anderson", text: "Highly reliable and professional service." },
  { name: "Sarah Lee", text: "Quick vulnerability detection and fixes." }
];

const Testimonials = () => {
  return (
    <div id="testimonials" className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold">What Our Clients Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white text-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition">
              <p className="text-lg">"{testimonial.text}"</p>
              <h3 className="mt-4 text-blue-500 font-semibold">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
