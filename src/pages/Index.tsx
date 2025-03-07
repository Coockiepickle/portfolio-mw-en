
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
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        
        {/* Tactical transition between Skills and Achievements */}
        <div className="relative h-24 bg-gradient-to-b from-black to-mw-darker overflow-hidden">
          <div className="absolute inset-0 bg-tactical-grid opacity-30"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-md h-0.5 bg-gradient-to-r from-transparent via-mw-green to-transparent relative">
              <div className="absolute -top-2 left-1/2 w-5 h-5 -ml-2.5 bg-mw-darker border border-mw-green rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-mw-green rounded-full animate-pulse"></div>
              </div>
              <div className="absolute top-0 left-0 h-px w-full bg-mw-green opacity-50 animate-pulse"></div>
            </div>
          </div>
          
          {/* Moving tactical elements */}
          <div className="absolute top-1/2 left-0 w-full">
            <div className="relative h-px w-full">
              {Array.from({ length: 5 }).map((_, i) => (
                <div 
                  key={i} 
                  className="absolute top-0 h-px bg-mw-green opacity-40"
                  style={{ 
                    left: `${i * 20}%`, 
                    width: '60px',
                    animation: `radar-scan ${3 + i * 0.5}s linear infinite ${i * 0.2}s` 
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
        
        <Achievements />
        <Experiences />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
