
import React, { useEffect, useRef, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { cn } from '@/lib/utils';

interface TechIcon {
  name: string;
  icon: string;
}

const TechCarousel = () => {
  const [isHovering, setIsHovering] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Define tech icons with their SVG paths
  const techIcons: TechIcon[] = [
    {
      name: "Github",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>'
    },
    {
      name: "Packet Tracer",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path><path d="M12 6v4"></path><path d="M12 14h.01"></path></svg>'
    },
    {
      name: "VSCode",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path><path d="m14.5 5.5 4 4"></path></svg>'
    },
    {
      name: "Cisco",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="4" height="8" rx="1"></rect><rect x="10" y="4" width="4" height="16" rx="1"></rect><rect x="17" y="8" width="4" height="8" rx="1"></rect></svg>'
    },
    {
      name: "Linux",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2c4 2.5 5 6 5 10.5s-2 7.5-5 7.5-5-3-5-7.5S8 4.5 12 2"></path><path d="M8.5 10.5c-.5.3-1.8.8-1.8.8s.3 1.3.8 2.2c.3.6.5 1.8.5 2 0 .2 0 1-.5 1.5"></path><path d="M15.5 10.5c.5.3 1.8.8 1.8.8s-.3 1.3-.8 2.2c-.3.6-.5 1.8-.5 2 0 .2 0 1 .5 1.5"></path><path d="M9 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path><path d="M15 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path><path d="M9 16c.9-.1 1.3-.5 2.5-.5s1.6.4 2.5.5"></path></svg>'
    },
    {
      name: "Windows",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 10.5H11.5V5.5H6.5V10.5Z"></path><path d="M6.5 18.5H11.5V13.5H6.5V18.5Z"></path><path d="M12.5 18.5H17.5V13.5H12.5V18.5Z"></path><path d="M12.5 10.5H17.5V5.5H12.5V10.5Z"></path></svg>'
    },
    {
      name: "Android",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16V8"></path><path d="M8 16V8"></path><path d="M12 16V8"></path><path d="M16 16V8"></path><path d="M20 16V8"></path><rect width="16" height="16" x="4" y="4" rx="2"></rect></svg>'
    },
    {
      name: "Docker",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12.5c0 2.761-2.239 5-5 5a5 5 0 0 1-5-5c0-2.762 2.239-5 5-5h5v5z"></path><path d="M17 17.5c-2.761 0-5 2.239-5 5a5 5 0 0 0 5 5h5v-5a5 5 0 0 0-5-5z"></path><path d="M17 7.5H7a5 5 0 0 0-5 5 5 5 0 0 0 5 5h5v-5a5 5 0 0 1 5-5z"></path></svg>'
    },
    {
      name: "Powershell",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 7 5 5-5 5"></path><path d="M13 17h6"></path></svg>'
    },
    {
      name: "Python",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.9 3h-1.8a2.1 2.1 0 0 0-2.1 2.1v5.1h5.1a2.1 2.1 0 0 1 2.1 2.1v1.8"></path><path d="M5.1 12.9h1.8a2.1 2.1 0 0 1 2.1 2.1v4.2A2.1 2.1 0 0 1 6.9 21h-.8"></path><path d="M10.1 7.2h7.8a2.1 2.1 0 0 1 2.1 2.1v1.8"></path><path d="M16.2 21.3V17a2.1 2.1 0 0 0-2.1-2.1H6.9"></path><circle cx="6.9" cy="6.9" r="1.2"></circle><circle cx="16.8" cy="16.8" r="1.2"></circle></svg>'
    },
    {
      name: "Raspberry PI",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h16"></path><path d="M4 15h16"></path><path d="M12 4v16"></path><path d="m15 7 3 3-3 3"></path><path d="M9 12 6 9l3-3"></path></svg>'
    },
    {
      name: "Arduino",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M19 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M19 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M5 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M10 19V5"></path><path d="M14 5v14"></path></svg>'
    }
  ];

  useEffect(() => {
    let animationFrame: number;
    let startTime: number | null = null;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      
      if (!isHovering && carouselRef.current) {
        // Calculate the progress (0 to 1) for smooth animation
        const progress = (timestamp - startTime) / 15000;
        
        // Scroll position cycles between 0 and max scroll width
        const scrollPos = (progress * carouselRef.current.scrollWidth) % carouselRef.current.scrollWidth;
        
        carouselRef.current.scrollLeft = scrollPos;
      }
      
      animationFrame = requestAnimationFrame(animate);
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [isHovering]);

  return (
    <div className="mt-16 relative w-full overflow-hidden">
      <div className="mb-4 flex items-center justify-center">
        <div className="h-0.5 bg-mw-green bg-opacity-10 w-1/4 mr-4"></div>
        <h3 className="text-white text-lg font-tactical">TECHNOLOGY STACK</h3>
        <div className="h-0.5 bg-mw-green bg-opacity-10 w-1/4 ml-4"></div>
      </div>
      
      <div 
        className="relative mx-auto max-w-full"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Left gradient fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10"></div>
        
        {/* Right gradient fade effect */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10"></div>
        
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto scrollbar-hide gap-12 py-8 px-16"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {techIcons.map((tech, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center flex-shrink-0 transition-all duration-300 hover:scale-110"
            >
              <div 
                className="w-12 h-12 mb-3 text-white" 
                dangerouslySetInnerHTML={{ __html: tech.icon }}
              />
              <span className="text-xs text-mw-lightgray font-tactical tracking-wider">{tech.name}</span>
            </div>
          ))}
          
          {/* Duplicate icons for infinite scroll effect */}
          {techIcons.map((tech, index) => (
            <div 
              key={`duplicate-${index}`} 
              className="flex flex-col items-center flex-shrink-0 transition-all duration-300 hover:scale-110"
            >
              <div 
                className="w-12 h-12 mb-3 text-white" 
                dangerouslySetInnerHTML={{ __html: tech.icon }}
              />
              <span className="text-xs text-mw-lightgray font-tactical tracking-wider">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default TechCarousel;
