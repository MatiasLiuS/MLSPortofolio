import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";

function App() {
  return (
      // Ensure the main container is full width and overflow is controlled
      <div className="min-w-full min-h-screen bg-bodyColor text-lightText overflow-hidden">
        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-24">
          <Navbar />
          <Banner />
          <Features />
          <Projects />
          <Resume />
          <Contact />
          <Footer />
          <FooterBottom />
        </div>
      </div>
  )
}

export default App;
