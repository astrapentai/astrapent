import React from "react";

const Pricing = () => {
  return (
    <div id="pricing" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="bg-gray-700 rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold">Basic</h3>
            <p className="text-lg mt-4">$29/month</p>
            <p className="mt-4">Basic penetration testing</p>
            <button className="bg-blue-500 px-6 py-2 mt-6 rounded-md">Choose Plan</button>
          </div>

          <div className="bg-gray-700 rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold">Pro</h3>
            <p className="text-lg mt-4">$59/month</p>
            <p className="mt-4">Advanced security testing</p>
            <button className="bg-green-500 px-6 py-2 mt-6 rounded-md">Choose Plan</button>
          </div>

          <div className="bg-gray-700 rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold">Enterprise</h3>
            <p className="text-lg mt-4">$99/month</p>
            <p className="mt-4">Full-scale security solutions</p>
            <button className="bg-yellow-500 px-6 py-2 mt-6 rounded-md">Choose Plan</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
