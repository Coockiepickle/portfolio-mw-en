
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Achievements from "../components/Achievements";
import Resume from "../components/Resume";
import Experiences from "../components/Experiences";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="relative overflow-hidden">
        {/* Tactical vertical lines for section transitions */}
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-mw-green/20 to-transparent opacity-30 z-0"></div>
        <div className="absolute right-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-mw-green/20 to-transparent opacity-30 z-0"></div>
        
        <Hero />
        <About />
        
        {/* Reduced fade transition height between sections */}
        <div className="relative h-16 bg-gradient-to-b from-transparent via-mw-dark to-transparent opacity-80 -mt-8 -mb-8 z-10"></div>
        
        <Projects />
        
        {/* Reduced fade transition height between sections */}
        <div className="relative h-16 bg-gradient-to-b from-transparent via-mw-dark to-transparent opacity-80 -mt-8 -mb-8 z-10"></div>
        
        <Skills />
        
        {/* Reduced fade transition height between sections */}
        <div className="relative h-16 bg-gradient-to-b from-transparent via-mw-dark to-transparent opacity-80 -mt-8 -mb-8 z-10"></div>
        
        <Achievements />
        
        {/* Reduced fade transition height between sections */}
        <div className="relative h-16 bg-gradient-to-b from-transparent via-mw-dark to-transparent opacity-80 -mt-8 -mb-8 z-10"></div>
        
        <Experiences />
        
        {/* Reduced fade transition height between sections */}
        <div className="relative h-16 bg-gradient-to-b from-transparent via-mw-dark to-transparent opacity-80 -mt-8 -mb-8 z-10"></div>
        
        <Resume />
        
        {/* Reduced fade transition height between sections */}
        <div className="relative h-16 bg-gradient-to-b from-transparent via-mw-dark to-transparent opacity-80 -mt-8 -mb-8 z-10"></div>
        
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
