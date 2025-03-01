
import { useEffect, useState } from 'react';
import { ArrowDown, ExternalLink, Target } from 'lucide-react';
import { cn } from '@/lib/utils';

// Define an interface for radar points
interface RadarPoint {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
}

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [radarPoints, setRadarPoints] = useState<RadarPoint[]>([]);
  const fullText = "TACTICAL STUDENT";
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
    
    // Generate random radar points every 1-3 seconds
    const radarPointsInterval = setInterval(() => {
      // Random angle and distance from center
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 0.8; // Only up to 80% of radius to keep within circles
      
      // Convert to x,y coordinates (-1 to 1 range)
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;
      
      // Random size and opacity
      const size = Math.random() * 3 + 1; // 1-4px
      const opacity = Math.random() * 0.4 + 0.4; // 0.4-0.8 opacity
      
      // Random duration for fading out (2-5 seconds)
      const duration = Math.random() * 3000 + 2000;
      
      // Add new point
      const newPoint: RadarPoint = {
        id: Date.now(),
        x,
        y,
        size,
        opacity,
        duration
      };
      
      setRadarPoints(prevPoints => {
        // Add new point and remove old ones (max 15 points)
        const updatedPoints = [...prevPoints, newPoint];
        if (updatedPoints.length > 15) {
          return updatedPoints.slice(updatedPoints.length - 15);
        }
        return updatedPoints;
      });
      
      // Remove the point after its duration expires
      setTimeout(() => {
        setRadarPoints(prevPoints => prevPoints.filter(p => p.id !== newPoint.id));
      }, duration);
      
    }, Math.random() * 2000 + 1000); // Random interval between 1-3 seconds
    
    return () => {
      clearTimeout(timer);
      clearInterval(typingInterval);
      clearInterval(radarPointsInterval);
    };
  }, []);
  
  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center">
      <div className="absolute inset-0 mw-grid-pattern opacity-30"></div>
      
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/3 right-1/3 w-48 h-48 md:w-64 md:h-64 rounded-full border border-mw-green border-opacity-40 
          flex items-center justify-center animate-radar-scan opacity-60">
          <div className="absolute w-3/4 h-3/4 rounded-full border border-mw-green border-opacity-50"></div>
          <div className="absolute w-1/2 h-1/2 rounded-full border border-mw-green border-opacity-60"></div>
          <div className="h-1/2 w-0.5 bg-mw-green bg-opacity-60 absolute top-0 right-1/2 transform origin-bottom animate-radar-scan"></div>
          
          {/* Radar points */}
          {radarPoints.map(point => (
            <div
              key={point.id}
              className="absolute bg-mw-green rounded-full animate-pulse"
              style={{
                width: `${point.size}px`,
                height: `${point.size}px`,
                top: `calc(50% + ${point.y * 50}%)`,
                left: `calc(50% + ${point.x * 50}%)`,
                opacity: point.opacity,
                transition: `opacity ${point.duration}ms ease-out`
              }}
            />
          ))}
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
              LEARNING ACTIVATED
            </span>
          </div>
          
          <h1 
            className={cn(
              "text-white mb-6 leading-tight transition-all duration-700 delay-150 ease-out transform",
              loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            )}
          >
            DAMIEN REYNAUD
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
            Experienced network student with tactical precision and strategic approach.
            Specialized in creating sophisticated solutions for complex problems.
          </p>
          
          <div 
            className={cn(
              "flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 transition-all duration-700 delay-450 ease-out transform",
              loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            )}
          >
            <button 
              onClick={() => handleScrollToSection('projects')} 
              className="mw-button-primary"
            >
              VIEW MY PROJECTS
            </button>
            <button 
              onClick={() => handleScrollToSection('contact')} 
              className="mw-button"
            >
              CONTACT ME
            </button>
          </div>
        </div>
      </div>
      
      <div 
        className={cn(
          "absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer transition-all duration-700 delay-600 ease-out",
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
        onClick={() => handleScrollToSection('about')}
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
