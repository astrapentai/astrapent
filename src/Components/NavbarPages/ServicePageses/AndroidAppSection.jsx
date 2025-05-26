import React from 'react';
import img1 from '../../../assets/Android.png';

const AndroidAppSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Mobile/Tablet Layout - Content First */}
      <div className="lg:hidden flex flex-col">
        {/* Content */}
        <div className="w-full">
          <div className="bg-white rounded-xl overflow-hidden h-full">
            <div className="p-6 sm:p-8">
              <h1 className="text-3xl sm:text-4xl font-light text-gray-500 mb-4 sm:mb-6">
                Android Application Development
              </h1>

              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Build high-performance Android apps designed to boost visibility and user engagement. From intuitive UI to Play Store optimization, we ensure your app stands out and drives real business growth.
              </p>


              <h2 className="text-2xl sm:text-3xl font-medium text-gray-500 mb-4 sm:mb-6">
                Our Android Development Services
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <ul className="space-y-2 text-base sm:text-lg text-gray-600">
                  <li className="flex items-start"><span className="mr-2">•</span><span>UI/UX Design for Android</span></li>
                  <li className="flex items-start"><span className="mr-2">•</span><span>Custom App Development</span></li>
                  <li className="flex items-start"><span className="mr-2">•</span><span>App Store Optimization (ASO)</span></li>
                  <li className="flex items-start"><span className="mr-2">•</span><span>Backend Integration</span></li>
                  <li className="flex items-start"><span className="mr-2">•</span><span>Performance Optimization</span></li>
                </ul>

                <ul className="space-y-2 text-base sm:text-lg text-gray-600">
                  <li className="flex items-start"><span className="mr-2">•</span><span>Testing & QA</span></li>
                  <li className="flex items-start"><span className="mr-2">•</span><span>Google Play Deployment</span></li>
                  <li className="flex items-start"><span className="mr-2">•</span><span>App Maintenance & Support</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Image - Now at bottom for mobile/tablet */}
        <div className="w-full flex justify-center mt-8">
          <img
            src={img1}
            alt="Android Development"
            className="w-full max-w-[300px] sm:max-w-[350px] h-auto object-contain"
          />
        </div>
      </div>

      {/* Desktop Layout - Side by Side (Unchanged) */}
      <div className="hidden lg:flex flex-col lg:flex-row gap-8">
        {/* Left Column - Image */}
        <div className="lg:min-w-[23vw]">
          <img
            src={img1}
            alt="Android Development"
            className="max-w-[30vw] h-[30vw] ml-[-7vw] object-contain"
          />
        </div>

        {/* Right Column - Main Content */}
        <div className="w-full lg:w-3/4 ml-[3vw]">
          <div className="bg-white rounded-xl overflow-hidden h-full">
            <div className="p-10">
              <h1 className="text-5xl font-light text-gray-500 mb-6">
                Android Application Development
              </h1>

              <p className="text-xl text-gray-600 mb-6 leading-relaxed w-2xl">
                Boost your search rankings and get more organic traffic to <br /> your website with powerful Android applications.
                Our apps are optimized not only for usability but also for visibility—ensuring your business shines in the
                Google Play Store and on search engines. With a blend of cutting-edge design and technical expertise,
                we build Android experiences that attract, engage, and convert.
              </p>

              <h2 className="text-3xl font-medium text-gray-500 mb-6">
                Our Android Development Services
              </h2>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <ul className="space-y-2 text-xl text-gray-600">
                  <li className="flex items-start"><span className="mr-2">•</span><span>UI/UX Design for Android</span></li>
                  <li className="flex items-start"><span className="mr-2">•</span><span>Custom App Development</span></li>
                  <li className="flex items-start"><span className="mr-2">•</span><span>App Store Optimization (ASO)</span></li>
                  <li className="flex items-start"><span className="mr-2">•</span><span>Backend Integration</span></li>
                  <li className="flex items-start"><span className="mr-2">•</span><span>Performance Optimization</span></li>
                </ul>

                <ul className="space-y-2 text-xl text-gray-600">
                  <li className="flex items-start"><span className="mr-2">•</span><span>Testing & QA</span></li>
                  <li className="flex items-start"><span className="mr-2">•</span><span>Google Play Deployment</span></li>
                  <li className="flex items-start"><span className="mr-2">•</span><span>App Maintenance & Support</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AndroidAppSection;