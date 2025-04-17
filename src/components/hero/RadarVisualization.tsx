
import { useEffect, useState, useRef } from 'react';

interface RadarPoint {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  visible: boolean;
  isTarget?: boolean; // New property to indicate high-priority targets
}

const RadarVisualization = () => {
  const [radarPoints, setRadarPoints] = useState<RadarPoint[]>([]);
  const [scanAngle, setScanAngle] = useState(0);
  const scanIntervalRef = useRef<number | null>(null);
  
  // Create the initial static points and set up animations
  useEffect(() => {
    const staticPoints: RadarPoint[] = [];
    
    // Generate regular radar points
    for (let i = 0; i < 15; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 0.8;
      
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;
      
      const size = Math.random() * 4 + 2;
      const opacity = Math.random() * 0.5 + 0.5;
      
      staticPoints.push({
        id: i,
        x,
        y,
        size,
        opacity,
        visible: true
      });
    }
    
    // Add a few high-priority "target" points
    for (let i = 15; i < 18; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 0.6 + 0.2; // Keep targets within central area
      
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;
      
      staticPoints.push({
        id: i,
        x,
        y,
        size: 6, // Larger size for targets
        opacity: 0.9,
        visible: true,
        isTarget: true
      });
    }
    
    setRadarPoints(staticPoints);
    
    // Update point visibility at intervals to simulate signal noise
    const pointsInterval = setInterval(() => {
      setRadarPoints(prevPoints => 
        prevPoints.map(point => {
          // Target points blink less frequently
          if (point.isTarget) {
            if (Math.random() < 0.1) {
              return {
                ...point,
                visible: !point.visible
              };
            }
          } else {
            // Regular points blink more often
            if (Math.random() < 0.2) {
              return {
                ...point,
                visible: !point.visible
              };
            }
          }
          return point;
        })
      );
    }, 800);
    
    // Animate the radar scan line - modified for smooth continuous rotation
    scanIntervalRef.current = window.setInterval(() => {
      setScanAngle(prevAngle => (prevAngle + 1) % 360); // Reduced increment for smoother rotation
    }, 20); // Faster interval for smoother animation
    
    return () => {
      clearInterval(pointsInterval);
      if (scanIntervalRef.current) {
        clearInterval(scanIntervalRef.current);
      }
    };
  }, []);

  return (
    <div className="absolute top-1/4 right-[10%] w-48 h-48 md:w-64 md:h-64 rounded-full 
      flex items-center justify-center opacity-80 
      bg-gradient-to-br from-mw-dark/30 to-mw-gray/20 
      backdrop-blur-sm border border-mw-green border-opacity-20 
      shadow-lg shadow-mw-green/10 overflow-hidden">
      
      {/* Radar rings */}
      <div className="absolute w-3/4 h-3/4 rounded-full border border-mw-green border-opacity-50"></div>
      <div className="absolute w-1/2 h-1/2 rounded-full border border-mw-green border-opacity-60"></div>
      <div className="absolute w-1/4 h-1/4 rounded-full border border-mw-green border-opacity-70"></div>
      
      {/* Cross hairs */}
      <div className="absolute h-full w-[1px] bg-mw-green bg-opacity-30"></div>
      <div className="absolute w-full h-[1px] bg-mw-green bg-opacity-30"></div>
      
      {/* Enhanced visible scan line */}
      <div 
        className="absolute h-1/2 w-1.5 top-0 left-1/2 transform -translate-x-1/2 origin-bottom z-20"
        style={{ transform: `rotate(${scanAngle}deg)` }}
      >
        {/* Brighter scan line with white-green gradient */}
        <div className="h-full w-full bg-gradient-to-t from-transparent via-white to-mw-green opacity-80"></div>
        
        {/* Enhanced glow effect at the top of scan line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-12 
                        bg-gradient-to-r from-white/20 via-white/50 to-white/20 
                        rounded-full blur-lg"></div>
        
        {/* Wider trailing effect for better visibility */}
        <div className="absolute top-0 h-full w-8 -left-3.5 
                        bg-gradient-to-r from-transparent via-mw-green/50 to-transparent 
                        blur-md"></div>
      </div>
      
      {/* Bright dot at scan line tip for extra visibility */}
      <div 
        className="absolute w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#ffffff] z-20"
        style={{ 
          top: '0%', 
          left: '50%',
          transform: `rotate(${scanAngle}deg) translateY(0px) translateX(-50%)`,
          transformOrigin: 'bottom center'
        }}
      ></div>
      
      {/* Radar ping effect at center */}
      <div className="absolute w-4 h-4 rounded-full bg-mw-green/20 animate-radar-ping"></div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-20 mw-grid-pattern"></div>
      
      {/* Digital scanline effect */}
      <div className="absolute inset-0 bg-scanlines opacity-10"></div>
      
      {/* Radar points */}
      {radarPoints.map(point => (
        <div
          key={point.id}
          className={`absolute rounded-full transition-opacity duration-500 ${
            point.isTarget 
              ? "bg-mw-accent shadow-[0_0_10px_#db3a34] animate-tactical-blink" 
              : "bg-mw-green shadow-[0_0_8px_#3f9987] animate-pulse-light"
          }`}
          style={{
            width: `${point.size}px`,
            height: `${point.size}px`,
            top: `calc(50% + ${point.y * 50}%)`,
            left: `calc(50% + ${point.x * 50}%)`,
            opacity: point.visible ? point.opacity : 0,
            zIndex: point.isTarget ? 10 : 5
          }}
        />
      ))}
      
      {/* Edge glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-mw-green/5 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default RadarVisualization;
