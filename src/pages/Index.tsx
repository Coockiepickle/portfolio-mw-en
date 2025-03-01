
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

// Initialize EmailJS in the index component
import { useEffect } from "react";
import emailjs from 'emailjs-com';

const Index = () => {
  useEffect(() => {
    // Initialize EmailJS with your User ID
    emailjs.init("GeOubRxyEKZojoxY5");
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
