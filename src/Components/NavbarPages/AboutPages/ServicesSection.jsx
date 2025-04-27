import React from 'react';

const ServicesSection = () => {
    return (
        <div className="bg-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 min-h-[70vh] flex items-center">
            <div className="max-w-6xl mx-auto w-full">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mb-8 lg:mb-12 mt-0 lg:mt-[5vw]">
                    {/* Left Side - Three Boxes (Stacked on mobile, Column on desktop) */}
                    <div className="lg:w-1/2 flex flex-col gap-4 sm:gap-6 items-center lg:items-end">
                        {/* Cloud Box */}
                        <div className="bg-white shadow-xl sm:shadow-2xl p-4 sm:p-6 w-full sm:w-4/5 lg:w-[21vw] min-h-[120px] sm:min-h-[15vh]">
                            <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-2 sm:ml-4">Cloud</h3>
                            <div className='flex items-center gap-3 sm:gap-5'>
                                <div className='h-8 w-8 sm:h-10 sm:w-10 bg-blue-700 rounded-full'></div>
                                <p className="text-black font-medium text-lg sm:text-xl lg:text-2xl">
                                    Cloud solutions & <br className="hidden sm:block" /> Management
                                </p>
                            </div>
                        </div>

                        {/* Software Box */}
                        <div className="bg-gray-50 shadow-xl sm:shadow-2xl p-4 sm:p-6 w-full sm:w-4/5 lg:w-[27vw] min-h-[120px] sm:min-h-[12vh]">
                            <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-2 sm:ml-4">Software</h3>
                            <div className='flex items-center gap-3 sm:gap-5'>
                                <div className='h-8 w-8 sm:h-10 sm:w-10 bg-blue-400 rounded-full'></div>
                                <p className="text-black font-medium text-lg sm:text-xl lg:text-2xl">
                                    Software solutions & services
                                </p>
                            </div>
                        </div>

                        {/* Product Box */}
                        <div className="bg-gray-50 shadow-xl sm:shadow-2xl p-4 sm:p-6 w-full sm:w-4/5 lg:w-[21vw] min-h-[120px] sm:min-h-[12vh]">
                            <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-2 sm:ml-4">Product</h3>
                            <div className='flex items-center gap-3 sm:gap-5'>
                                <div className='h-8 w-8 sm:h-10 sm:w-10 bg-gray-700 rounded-full'></div>
                                <p className="text-black font-medium text-lg sm:text-xl lg:text-2xl">
                                    Product lifecycle services
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Supply Chain Section */}
                    <div className="lg:w-1/2 mt-6 lg:mt-0">
                        <div className="w-full lg:ml-12 xl:ml-24 mt-0 lg:mt-[-2vw]">
                            <h3 className="text-2xl sm:text-3xl font-bold text-black mb-3 sm:mb-4 text-center lg:text-left">
                                Supply Chain <br className="hidden lg:block" /> Optimization
                            </h3>
                            <p className="text-gray-600 mb-4 sm:mb-6 text-center lg:text-left text-base sm:text-lg">
                                We simplify the procurement process for hardware and software through powerful tools and dedicated consultants.
                            </p>
                            <div className="text-center lg:text-left">
                                <button className="px-4 sm:px-6 py-2 sm:py-3 mt-4 sm:mt-6 lg:mt-10 bg-blue-600 font-bold text-white rounded-full hover:bg-blue-700 transition-colors text-sm sm:text-base">
                                    READ MORE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;