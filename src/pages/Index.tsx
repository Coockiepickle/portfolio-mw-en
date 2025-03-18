
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
        
        {/* Enhanced About --> Projects transition with tactical scan line effect */}
        <div className="relative h-24 z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-mw-dark/90 to-mw-darker"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%200h40v1H0zm0%2039h40v1H0z%22%20fill%3D%22%233f9987%22%20fill-opacity%3D%22.2%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')] opacity-30"></div>
          <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-mw-green/40 to-transparent top-1/2 transform -translate-y-1/2"></div>
          <div className="absolute w-1/2 h-0.5 bg-gradient-to-r from-mw-accent/30 via-mw-accent to-mw-accent/30 top-1/2 transform -translate-y-1/2 left-1/4 animate-pulse-slow"></div>
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
        
        {/* Enhanced Experiences --> Resume transition with tactical grid pattern */}
        <div className="relative h-24 z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-mw-dark/90 to-mw-darker"></div>
          <div className="absolute inset-0 bg-tactical-grid opacity-30"></div>
          
          {/* Tactical corner elements */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-mw-green/40"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-mw-green/40"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-mw-green/40"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-mw-green/40"></div>
          
          {/* Horizontal scan line */}
          <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-mw-green/40 to-transparent top-1/2 transform -translate-y-1/2"></div>
          
          {/* Animated radar ping */}
          <div className="absolute top-1/2 left-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2">
            <div className="absolute inset-0 rounded-full border border-mw-green/30 animate-ping opacity-30"></div>
            <div className="absolute inset-0 rounded-full border-2 border-mw-green/50 animate-pulse opacity-50 scale-75"></div>
            <div className="absolute inset-0 rounded-full border border-mw-green/70 scale-50"></div>
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
