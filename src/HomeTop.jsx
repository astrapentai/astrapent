import React from "react";

// Corrected imports based on folder structure
import Home from "./Components/Pages/Home";
import Cards from "./Components/Pages/Cards";
import Footer from "./Components/Pages/Footer";
import Review from "./Components/Pages/Review";
import Start from "./Components/Pages/Start";
import WhyChoose from "./Components/Pages/WhyChoose";
import Technology from "./Components/Pages/Technology";
import ContactUS from "./Components/Pages/ContactUS";
import HowToGetStarted from "./Components/Pages/HowToGetStarted";
import FAQSection from "./Components/Pages/FAQSection";






function HomeTop() {
  return (
    <>
      <Home />
      <Cards />
      <Technology />
      <Start />
      <WhyChoose />
      <Review />
      <HowToGetStarted />
      <FAQSection />
      <ContactUS />
      <Footer />
     
      
     
    </>
  );
}

export default HomeTop;