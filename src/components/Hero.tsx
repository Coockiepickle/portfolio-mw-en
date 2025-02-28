
import { useEffect, useState } from 'react';
import { ArrowDown, ExternalLink, Target } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = "TACTICAL DEVELOPER";
  const typingSpeed = 100;
  
  useEffect(() => {
    // Simulate loading for smoother animation
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 500);
    
    // Type effect
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);
    
    return () => {
      clearTimeout(timer);
      clearInterval(typingInterval);
    };
  }, []);
  
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center">
      <div className="absolute inset-0 mw-grid-pattern opacity-30"></div>
      
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 right-10 w-48 h-48 md:w-64 md:h-64 rounded-full border border-mw-green border-opacity-20 
          flex items-center justify-center animate-radar-scan opacity-20">
          {/* Inner element with border-t and border-r removed */}
        </div>
      </div>
      
      <div className="mw-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div 
            className={cn(
              "mb-6 transition-all duration-700 ease-out transform",
              loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            )}
          >
            <span className="mw-badge mb-4">
              <Target className="w-3 h-3 mr-1" />
              MISSION ACTIVATED
            </span>
          </div>
          
          <h1 
            className={cn(
              "text-white mb-6 leading-tight transition-all duration-700 delay-150 ease-out transform",
              loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            )}
          >
            JOHN DOE
            <div className="h-[2px] w-20 bg-mw-green mx-auto my-4"></div>
            <span className="font-code text-2xl sm:text-3xl font-light text-mw-green opacity-90">
              {typedText}
              <span className="inline-block w-1 h-6 ml-1 bg-mw-green animate-pulse"></span>
            </span>
          </h1>
          
          <p 
            className={cn(
              "text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed transition-all duration-700 delay-300 ease-out transform",
              loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            )}
          >
            Experienced developer with tactical precision and strategic approach.
            Specialized in creating sophisticated solutions for complex problems.
          </p>
          
          <div 
            className={cn(
              "flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 transition-all duration-700 delay-450 ease-out transform",
              loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            )}
          >
            <a href="#projects" className="mw-button-primary">
              VIEW MY PROJECTS
            </a>
            <a href="#contact" className="mw-button">
              CONTACT ME
            </a>
          </div>
        </div>
      </div>
      
      <div 
        className={cn(
          "absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer transition-all duration-700 delay-600 ease-out",
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
        onClick={handleScrollToAbout}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs uppercase tracking-wider text-mw-green">Scroll Down</span>
          <ArrowDown className="w-5 h-5 text-mw-green animate-bounce" />
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-mw-darker to-transparent"></div>
    </section>
  );
};

export default Hero;
