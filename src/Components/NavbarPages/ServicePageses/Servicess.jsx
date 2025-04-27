import React from 'react';

const Servicess = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 min-h-[90vh] flex flex-col justify-center">
      {/* Mobile/Tablet Layout - Content First */}
      <div className="lg:hidden flex flex-col gap-8">
        {/* Content */}
        <div className="w-full">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4 sm:mb-6 underline">Services</h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Omni-channel is our call, and we will fuse it into all your business solutions to satisfy each customer. Blending in the perfect essence of flexibility in our delivery models with mature methodologies, innovative technologies, and unbeatable domain expertise, As a web development company in India for your business, Acodez will design a progressive workflow for your application development process.
          </p>
        </div>

        {/* Image - Bottom for mobile/tablet */}
        <div className="w-full flex justify-center mt-4 sm:mt-6">
          <img 
            src="https://img.freepik.com/premium-vector/man-is-sitting-front-computer-with-gears-gears_1134986-4615.jpg" 
            alt="Services"
            className="w-full max-w-[500px] h-auto rounded-lg"
          />
        </div>

        {/* Bottom Text */}
        <h1 className='text-base sm:text-lg md:text-xl mt-8 sm:mt-10 text-gray-600 font-medium'>
          We offer a wide array of services to cater to any of your web, mobile, or digital marketing requirements. Check out below:
        </h1>
      </div>

      {/* Desktop Layout - Side by Side */}
      <div className="hidden lg:flex flex-col">
        <div className="flex items-center gap-8">
          {/* Left side - Image */}
          <div className="w-1/2 flex justify-start">
            <img 
              src="https://img.freepik.com/premium-vector/man-is-sitting-front-computer-with-gears-gears_1134986-4615.jpg" 
              alt="Services"
              className="w-[40vw] max-w-[500px] h-[30vw] max-h-[400px] rounded-lg ml-[-12vw] object-cover md:ml-16 lg:ml-[-6vw]"
            />
          </div>

          {/* Right side - Content */}
          <div className="w-1/2 pl-8">
            <h2 className="text-4xl font-semibold text-gray-800 mb-6 underline">Services</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Omni-channel is our call, and we will fuse it into all your business solutions to satisfy each customer. Blending in the perfect essence of flexibility in our delivery models with mature methodologies, innovative technologies, and unbeatable domain expertise, As a web development company in India for your business, Acodez will design a progressive workflow for your application development process.
            </p>
          </div>
        </div>
        
        {/* Bottom Text - Desktop */}
        <h1 className='text-xl mt-16 min-w-[70vw] text-gray-600 font-medium'>
          We offer a wide array of services to cater to any of your web, mobile, or digital marketing requirements. Check out below:
        </h1>
      </div>
    </div>
  );
};

export default Servicess;