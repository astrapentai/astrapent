import React from "react";
import { Outlet } from "react-router-dom"; // To render route content
import Navbar from "./Components/Pages/Navbar";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


function Layout() {
  const location = useLocation();

  useEffect(() => {
    // Using setTimeout helps in some cases where rendering delays the scroll
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [location.pathname]);
  
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);
  

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow">
        <Outlet /> {/* Renders the current route content */}
      </div>

      {/* Footer at the bottom */}
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
