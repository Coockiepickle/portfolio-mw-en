
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
import { Separator } from "@/components/ui/separator";

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
        
        {/* Combined Achievements and Experiences section */}
        <section id="achievements" className="relative bg-black">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-mw-darker to-transparent"></div>
          <div className="mw-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Achievements />
            {/* Vertical separator between achievements and experiences */}
            <div className="hidden lg:block absolute left-1/2 top-16 bottom-16 -translate-x-1/2">
              <Separator orientation="vertical" className="h-full bg-gradient-to-b from-transparent via-mw-green/30 to-transparent opacity-50" />
            </div>
            <Experiences />
          </div>
        </section>
        
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
