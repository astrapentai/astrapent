import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import Layout from "./Layout";
import ContactUsForm from "./Components/NavbarPages/ContactUsForm";
import Cards from "./Components/Pages/Cards";
import Review from "./Components/Pages/Review";
import Start from "./Components/Pages/Start";
import Technology from "./Components/Pages/Technology";
import HomeTop from "./HomeTop";
import Solution from "./Components/NavbarPages/Solution";
import Resource from "./Components/NavbarPages/Resource";
import Company from "./Components/NavbarPages/Company";
import WebDev from "./Components/NavbarPages/developmentPage/WebDev";
import AndApp from "./Components/NavbarPages/developmentPage/AndApp";
import EComSol from "./Components/NavbarPages/developmentPage/EComSol";
import UIDesign from "./Components/NavbarPages/developmentPage/UIDesign";
import Ios_App from "./Components/NavbarPages/developmentPage/Ios_App";
import WhyChoose from "./Components/Pages/WhyChoose";
import ContactUS from "./Components/Pages/ContactUS";
import ServicePagesess from "./ServicePagesess";
import AboupagesRouting from "./AboupagesRouting";
import DigitalPortfolio from "./Components/NavbarPages/Portfoliopages/DigitalPortfolio";
import BlogSections from "./Components/NavbarPages/Blogpages/BlogSection";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeTop />} />
          <Route path="/homeTop" element={<HomeTop />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/start" element={<Start />} />
          <Route path="/whyChoose" element={<WhyChoose />} />
          <Route path="/review" element={<Review />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/contactusform" element={<ContactUsForm />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/resource" element={<Resource />} />
          <Route path="/company" element={<Company />} />
          <Route path="/webdev" element={<WebDev />} />
          <Route path="/android" element={<AndApp />} />
          <Route path="/e_commerce" element={<EComSol />} />
          <Route path="/UIDesign" element={<UIDesign />} />
          <Route path="/ios_app" element={<Ios_App />} />
          <Route path="/contactUS" element={<ContactUS />} />
          <Route path="/servicePagesess" element={<ServicePagesess />} />
          <Route path="/Aboupages" element={<AboupagesRouting />} />
          <Route path="/digitalPortfolio" element={<DigitalPortfolio />} />
          <Route path="/blogSection" element={<BlogSections />} />

          {/* Redirect invalid routes to HomeTop */}
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;