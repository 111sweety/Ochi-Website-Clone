import React from "react";

import Navbar from "./components/Navbar";

import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import FeaturesProjects from "./components/FeaturesProjects";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import ContactUS from "./components/ContactUS";
import OurWork from "./components/OurWork";
import OurClients from "./components/OurClients";
import FetchData from "./components/FetchData";


function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <BrowserRouter>
    <div className="w-full  min-h-screen bg-zinc-900 text-white  ">
      <Navbar />

      <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/About" element={<About/>}/> 
          <Route path="/OurWork" element={<OurWork/>}/> 
          <Route path="/OurClients" element={<OurClients/>}/> 
          <Route path="/Contact" element={<ContactUS/>}/> 
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

function Home() {
  return(
    <div>
      
      <LandingPage />
      <Marquee />
      <Eyes />
      <FeaturesProjects />
      <Cards />
      <FetchData/>
      
      
    </div>
  );
}

export default App;
