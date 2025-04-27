import React from "react";
import { motion } from "framer-motion";

const HowToGetStarted = () => {
    return (
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-50/30 to-purple-50/30">
            {/* Floating background elements */}
            <div className="absolute inset-0 overflow-hidden opacity-30">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-blue-400/20"
                        style={{
                            width: Math.random() * 300 + 50,
                            height: Math.random() * 300 + 50,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            x: [0, Math.random() * 100 - 50],
                            y: [0, Math.random() * 100 - 50],
                            rotate: [0, 180],
                        }}
                        transition={{
                            duration: Math.random() * 20 + 10,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "linear",
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
                        HOW TO GET STARTED
                    </h1>
                    <h2 className="text-3xl font-semibold text-blue-600">Our Process</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                   
                    {/* Step 1 */}
                    <div className="group relative h-full flex flex-col p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-200/50 hover:-translate-y-2 text-center">
                        <div className="text-5xl font-black text-blue-100 group-hover:text-blue-300 mb-6 transition-colors duration-300">
                            01
                        </div>
                        <div className="w-20 h-20 mb-6 p-3 bg-white rounded-xl shadow-md flex items-center justify-center ml-16">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/2994/2994587.png"
                                alt="Discussion"
                                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Discussion</h3>
                        <p className="text-gray-600 mb-6 flex-grow">
                            We always prioritise your suggestions and needs, and we'll create a
                            plan of action around them.
                        </p>
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-200 group-hover:bg-blue-500 transition-colors duration-300"></div>
                    </div>

                    {/* Step 2 */}
                    <div className="group relative h-full flex flex-col p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-200/50 hover:-translate-y-2 text-center">
                        <div className="text-5xl font-black text-purple-100 group-hover:text-purple-300 mb-6 transition-colors duration-300">
                            02
                        </div>
                        <div className="w-20 h-20 mb-6 p-3 bg-white rounded-xl shadow-md flex items-center justify-center ml-16">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
                                alt="Designing"
                                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Designing</h3>
                        <p className="text-gray-600 mb-6 flex-grow">
                            Our design team will create the greatest and most appropriate design
                            that embodies your concept based on the planning.
                        </p>
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-purple-200 group-hover:bg-purple-500 transition-colors duration-300"></div>
                    </div>

                    {/* Step 3 */}
                    <div className="group relative h-full flex flex-col p-8 rounded-2xl bg-gradient-to-br from-green-50 to-teal-50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-200/50 hover:-translate-y-2 text-center">
                        <div className="text-5xl font-black text-green-100 group-hover:text-green-300 mb-6 transition-colors duration-300">
                            03
                        </div>
                        <div className="w-20 h-20 mb-6 p-3 bg-white rounded-xl shadow-md flex items-center justify-center ml-16">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/2282/2282188.png"
                                alt="Development"
                                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Development</h3>
                        <p className="text-gray-600 mb-6 flex-grow">
                            Our team of highly skilled developers will create the website or app
                            in a way that ensures it is finished on schedule.
                        </p>
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-200 group-hover:bg-green-500 transition-colors duration-300"></div>
                    </div>

                    {/* Step 4 */}
                    <div className="group relative h-full flex flex-col p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-200/50 hover:-translate-y-2 text-center">
                        <div className="text-5xl font-black text-orange-100 group-hover:text-orange-300 mb-6 transition-colors duration-300">
                            04
                        </div>
                        <div className="w-20 h-20 mb-6 p-3 bg-white rounded-xl shadow-md flex items-center justify-center ml-16">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/1570/1570887.png"
                                alt="Launch"
                                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 "
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Launch</h3>
                        <p className="text-gray-600 mb-6 flex-grow">
                            We host your website or app after thorough testing. Moreover, our
                            staff will teach you website management techniques.
                        </p>
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-200 group-hover:bg-orange-500 transition-colors duration-300"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowToGetStarted;