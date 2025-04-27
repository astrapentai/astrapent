import React from 'react'
import AboutUs from "./Components/NavbarPages/AboutPages/AboutUs";
import WhoWeAre from "./Components/NavbarPages/AboutPages/WhoWeAre";
import ServicesSection from "./Components/NavbarPages/AboutPages/ServicesSection";
import AboutUsSection from "./Components/NavbarPages/AboutPages/AboutUsSection";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./Components/Pages/Footer";

function AboupagesRouting() {
  return (
  <>
      <AboutUs />
      <WhoWeAre />
      <ServicesSection/>
      <AboutUsSection />
      <Footer />
  </>
  )
}

export default AboupagesRouting