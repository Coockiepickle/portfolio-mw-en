
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
        
        {/* Enhanced About --> Projects transition with tactical scan line */}
        <div className="relative h-24 z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mw-dark/90 to-mw-darker"></div>
          <div className="absolute inset-0 mw-grid-pattern opacity-20"></div>
          <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-mw-green/40 to-transparent top-1/2 transform -translate-y-1/2"></div>
          <div className="absolute w-1/2 h-px bg-mw-accent/80 top-1/2 transform -translate-y-1/2 left-1/4 animate-pulse-slow"></div>
        </div>
        
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
        
        {/* Enhanced Experiences --> Resume transition with tactical grid and radar effect */}
        <div className="relative h-24 z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mw-dark/90 to-mw-darker"></div>
          <div className="absolute inset-0 mw-grid-pattern opacity-20"></div>
          
          {/* Tactical corner elements */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-mw-green/40"></div>
          <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-mw-green/40"></div>
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-mw-green/40"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-mw-green/40"></div>
          
          {/* Scan line */}
          <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-mw-green/40 to-transparent top-1/2 transform -translate-y-1/2"></div>
          
          {/* Radar ping effect */}
          <div className="absolute top-1/2 left-1/2 w-24 h-24 -translate-x-1/2 -translate-y-1/2">
            <div className="absolute inset-0 rounded-full border border-mw-green/20 animate-ping opacity-20"></div>
            <div className="absolute inset-0 rounded-full border border-mw-green/30 animate-pulse opacity-30 scale-75"></div>
            <div className="absolute inset-0 rounded-full border border-mw-green/40 scale-50"></div>
          </div>
        </div>
        
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
