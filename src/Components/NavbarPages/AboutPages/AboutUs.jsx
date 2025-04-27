import React, { useEffect } from 'react';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-100 min-h-[70vh] flex items-center justify-center p-4 sm:p-6 lg:mt-[-2vw]">
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-500 mb-8 sm:mb-12">About us</h1>
        
        {/* Subheading (Tagline) */}
        <div className="leading-[0.9] sm:leading-[0.8] lg:leading-[0.7]">
          <p className="text-4xl sm:text-5xl lg:text-[65px] text-gray-900 font-medium mb-6 sm:mb-8 lg:mb-10">
            We're a team of creatives who are
          </p>
          <p className="text-4xl sm:text-5xl lg:text-[65px] text-gray-900 font-medium mb-8 sm:mb-10 lg:mb-12">
            excited about new ideas
          </p>
        </div>
        
        {/* Main Description */}
        <p className="text-gray-600 text-lg sm:text-xl lg:text-2xl mt-12 sm:mt-16 lg:mt-20 leading-relaxed max-w-4xl mx-auto">
          D3logics is a leading web development company that offers a range of innovative and creative digital solutions to its clients. We are a team of experienced and skilled developers who are passionate about delivering outstanding results and creating a lasting impact for our clients.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;