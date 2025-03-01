
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
        <Achievements />
        <Resume />
        <Experiences />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
