
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
  
  useEffect(() => {
    const staticPoints: RadarPoint[] = [];
    
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
    
    for (let i = 15; i < 18; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 0.6 + 0.2;
      
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;
      
      staticPoints.push({
        id: i,
        x,
        y,
        size: 6,
        opacity: 0.9,
        visible: true,
        isTarget: true
      });
    }
    
    setRadarPoints(staticPoints);
    
    const pointsInterval = setInterval(() => {
      setRadarPoints(prevPoints => 
        prevPoints.map(point => {
          if (point.isTarget) {
            if (Math.random() < 0.1) {
              return {
                ...point,
                visible: !point.visible
              };
            }
          } else {
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
    
    // Use a smaller increment for smoother rotation (0.5 -> 0.25 degrees)
    scanIntervalRef.current = window.setInterval(() => {
      setScanAngle(prevAngle => (prevAngle + 0.25) % 360);
    }, 5); // Faster interval for smoother animation
    
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
      
      <div className="absolute w-3/4 h-3/4 rounded-full border border-mw-green border-opacity-50"></div>
      <div className="absolute w-1/2 h-1/2 rounded-full border border-mw-green border-opacity-60"></div>
      <div className="absolute w-1/4 h-1/4 rounded-full border border-mw-green border-opacity-70"></div>
      
      <div className="absolute h-full w-[1px] bg-mw-green bg-opacity-30"></div>
      <div className="absolute w-full h-[1px] bg-mw-green bg-opacity-30"></div>
      
      {/* Properly centered scan line with origin at center */}
      <div 
        className="absolute h-1/2 w-1 origin-bottom z-20"
        style={{ 
          transform: `rotate(${scanAngle}deg)`,
          transformOrigin: 'center bottom',
          bottom: '50%',
          left: 'calc(50% - 0.5px)',
          transition: 'transform 0.05s linear'
        }}
      >
        <div className="h-full w-full bg-gradient-to-t from-transparent via-white/80 to-mw-green opacity-100"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 
                       bg-white/70 rounded-full blur-xl opacity-90"></div>
        <div className="absolute top-0 h-full w-16 -left-8 
                       bg-gradient-to-r from-transparent via-white/60 to-transparent 
                       blur-lg"></div>
      </div>
      
      {/* Properly centered radar dot */}
      <div 
        className="absolute w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_12px_#ffffff] z-30"
        style={{ 
          top: `calc(50% - ${Math.sin(scanAngle * Math.PI/180) * 50}%)`,
          left: `calc(50% + ${Math.cos(scanAngle * Math.PI/180) * 50}%)`,
        }}
      ></div>
      
      <div className="absolute w-4 h-4 rounded-full bg-mw-green/20 animate-radar-ping"></div>
      
      <div className="absolute inset-0 opacity-20 mw-grid-pattern"></div>
      
      <div className="absolute inset-0 bg-scanlines opacity-10"></div>
      
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
      
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-mw-green/5 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default RadarVisualization;
