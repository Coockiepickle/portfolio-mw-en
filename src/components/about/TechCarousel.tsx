
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface TechIcon {
  name: string;
  icon: React.ReactNode;
}

const TechCarousel = () => {
  const [isHovering, setIsHovering] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Define tech icons with consistent styling and military-themed appearance
  const techIcons: TechIcon[] = [
    {
      name: "Github",
      icon: <i className="devicon-github-plain text-white w-full h-full"></i>
    },
    {
      name: "Packet Tracer",
      icon: <i className="devicon-cisco-plain text-white w-full h-full"></i>
    },
    {
      name: "VSCode",
      icon: <i className="devicon-vscode-plain text-white w-full h-full"></i>
    },
    {
      name: "Cisco",
      icon: <i className="devicon-cisco-plain text-white w-full h-full"></i>
    },
    {
      name: "Linux",
      icon: <i className="devicon-linux-plain text-white w-full h-full"></i>
    },
    {
      name: "Windows",
      icon: <i className="devicon-windows8-plain text-white w-full h-full"></i>
    },
    {
      name: "Android",
      icon: <i className="devicon-android-plain text-white w-full h-full"></i>
    },
    {
      name: "Docker",
      icon: <i className="devicon-docker-plain text-white w-full h-full"></i>
    },
    {
      name: "Powershell",
      icon: <i className="devicon-bash-plain text-white w-full h-full"></i>
    },
    {
      name: "Python",
      icon: <i className="devicon-python-plain text-white w-full h-full"></i>
    },
    {
      name: "Raspberry PI",
      icon: <i className="devicon-raspberrypi-plain text-white w-full h-full"></i>
    },
    {
      name: "Arduino",
      icon: <i className="devicon-arduino-plain text-white w-full h-full"></i>
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
      
      <style>
        {`.scrollbar-hide::-webkit-scrollbar {
          display: none;
        }`}
      </style>
    </div>
  );
};

export default TechCarousel;
