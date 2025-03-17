
import React, { useEffect, useRef, useState } from 'react';
import { Github, Code2, Boxes, Server, Terminal, Cpu, Layout, FolderGit2 } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { cn } from '@/lib/utils';

interface TechIcon {
  name: string;
  icon: React.ReactNode;
}

const TechCarousel = () => {
  const [isHovering, setIsHovering] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Define tech icons with proper React components from lucide-react
  const techIcons: TechIcon[] = [
    {
      name: "Github",
      icon: <Github className="w-full h-full" />
    },
    {
      name: "Packet Tracer",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10H8M8 10V17M8 10L11 7H17L20 10M20 10H17M20 10V17M17 10V17M17 10L14 7M9 17H19"></path></svg>
    },
    {
      name: "VSCode",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path><path d="m14.5 5.5 4 4"></path></svg>
    },
    {
      name: "Cisco",
      icon: <Server className="w-full h-full" />
    },
    {
      name: "Linux",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9 8.5v7a1.7 1.7 0 0 0 3 1.1v-8.3a1.2 1.2 0 0 1 2.4 0v3.3a1.2 1.2 0 0 0 2.4 0V9.7A5.1 5.1 0 0 0 12 5.3a3.3 3.3 0 0 0-3 3.2z"></path></svg>
    },
    {
      name: "Windows",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6.5 10.5H11.5V5.5H6.5V10.5Z"></path><path d="M6.5 18.5H11.5V13.5H6.5V18.5Z"></path><path d="M12.5 18.5H17.5V13.5H12.5V18.5Z"></path><path d="M12.5 10.5H17.5V5.5H12.5V10.5Z"></path></svg>
    },
    {
      name: "Android",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 15h18v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2Z"></path><rect x="3" y="8" width="18" height="7" rx="2"></rect><path d="M12 5v3"></path><path d="M9 5v1"></path><path d="M15 5v1"></path><path d="M12 16v3"></path></svg>
    },
    {
      name: "Docker",
      icon: <Boxes className="w-full h-full" />
    },
    {
      name: "Powershell",
      icon: <Terminal className="w-full h-full" />
    },
    {
      name: "Python",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12.9 3h-1.8a2.1 2.1 0 0 0-2.1 2.1v5.1h5.1a2.1 2.1 0 0 1 2.1 2.1v1.8"></path><path d="M5.1 12.9h1.8a2.1 2.1 0 0 1 2.1 2.1v4.2A2.1 2.1 0 0 1 6.9 21h-.8"></path><path d="M10.1 7.2h7.8a2.1 2.1 0 0 1 2.1 2.1v1.8"></path><path d="M16.2 21.3V17a2.1 2.1 0 0 0-2.1-2.1H6.9"></path><circle cx="6.9" cy="6.9" r="1.2"></circle><circle cx="16.8" cy="16.8" r="1.2"></circle></svg>
    },
    {
      name: "Raspberry PI",
      icon: <Cpu className="w-full h-full" />
    },
    {
      name: "Arduino",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M19 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M19 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M5 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M10 19V5"></path><path d="M14 5v14"></path></svg>
    }
  ];

  useEffect(() => {
    let animationFrame: number;
    let startTime: number | null = null;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      
      if (!isHovering && carouselRef.current) {
        // Slowed down animation by increasing the divisor from 15000 to 30000
        const progress = (timestamp - startTime) / 30000;
        
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
              <div className="w-12 h-12 mb-3 text-white">
                {tech.icon}
              </div>
              <span className="text-xs text-mw-lightgray font-tactical tracking-wider">{tech.name}</span>
            </div>
          ))}
          
          {/* Duplicate icons for infinite scroll effect */}
          {techIcons.map((tech, index) => (
            <div 
              key={`duplicate-${index}`} 
              className="flex flex-col items-center flex-shrink-0 transition-all duration-300 hover:scale-110"
            >
              <div className="w-12 h-12 mb-3 text-white">
                {tech.icon}
              </div>
              <span className="text-xs text-mw-lightgray font-tactical tracking-wider">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Fixed: Removed the jsx property from style tag and using a className instead */}
      <style>
        {`.scrollbar-hide::-webkit-scrollbar {
          display: none;
        }`}
      </style>
    </div>
  );
};

export default TechCarousel;
