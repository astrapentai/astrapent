import React from 'react'
import Servicess from "./Components/NavbarPages/ServicePageses/Servicess";
import UXDesignSection from "./Components/NavbarPages/ServicePageses/UXDesignSection";
import ECommerceSection from "./Components/NavbarPages/ServicePageses/ECommerceSection";
import WebDevelopmentSection from "./Components/NavbarPages/ServicePageses/WebDevelopmentSection";
import AndroidAppSection from "./Components/NavbarPages/ServicePageses/AndroidAppSection"
import SoftwareDevelopment from "./Components/NavbarPages/ServicePageses/SoftwareDevelopment"
import IOSAppDevelopment from "./Components/NavbarPages/ServicePageses/IOSAppDevelopment"
import TechnologiesSection from "./Components/NavbarPages/ServicePageses/TechnologiesSection"
import Footer from "./Components/Pages/Footer";
import ContactUS from "./Components/Pages/ContactUS";

function ServicePagesess() {
  

    return (
        <>

            <Servicess />

            <WebDevelopmentSection />
            <ECommerceSection />
            <UXDesignSection />
            <AndroidAppSection />
            <SoftwareDevelopment />
            <IOSAppDevelopment />
            <TechnologiesSection />
            <ContactUS />
            <Footer />
        </>
    )
}

export default ServicePagesess