import React from 'react';
import Image1 from '../../../assets/About-Dynamic-Image.png';
import Image2 from '../../../assets/About-Goal-Image.png';

const WhoWeAre = () => {
    return (
        <div className="bg-white py-12 px-4 sm:px-8 lg:px-16">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-7 mt-10 text-start">
                    Who We Are
                </h1>

                {/* First Section - Image Right */}
                <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
                    {/* Left Text */}
                    <div className="md:w-7/10">
                        <p className="text-gray-600 text-xl sm:text-xl leading-relaxed">
                            Dialogue is a leading web development company that offers a range of innovative and creative digital solutions in its clients, such as a team of experienced and robust developers who are passionate about delivering outstanding results and creating a lasting impact for our clients.
                            At Dialogue, we know that technology should be accessible and easy to use, which is why we can cutting-edge technologies and has listed trends in certain websites that are both functional and visually appealing. Our developers are experts in the areas of technology, including HTML, CSS, JavaScript, React, and more, and they can this expertise to create custom, scalable and seamless that deliver real results.

                        </p>
                    </div>
                    {/* Right Image */}
                    <div className="md:w-5/10">
                        <img
                            src={Image1}
                            alt="Dialogue Team"
                            className="w-full "
                        />
                    </div>
                </div>

                {/* Second Section - Image Left */}
                <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
                    {/* Left Image */}
                    <div className="md:w-5/10">
                        <img
                            src={Image2}
                            alt="Dialogue Technology"
                            className="w-full "
                        />
                    </div>
                    {/* Right Text */}
                    <div className="md:w-7/12">
                        <p className="text-gray-600 text-xl sm:text-xl leading-relaxed">
                            We also understand that each project is unique, which is why we can a personalized approach to each one every aspect we work on. Our team will want closely with you to understand your goals, and we'll see this future through the creative and customized solutions that enrich your needs and essentials your expectations.
                        
                        
                            At Dialogue, we are committed to providing our clients with the highest level of customer service. Our team is always available to answer questions, offer support, and provide guidance, and we believe that our user space communication is key for delivering outstanding results.
                        </p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default WhoWeAre;