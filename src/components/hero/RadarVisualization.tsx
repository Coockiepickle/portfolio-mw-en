
import { useEffect, useState } from 'react';

interface RadarPoint {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  visible: boolean;
}

const RadarVisualization = () => {
  const [radarPoints, setRadarPoints] = useState<RadarPoint[]>([]);
  
  useEffect(() => {
    const staticPoints: RadarPoint[] = [];
    
    for (let i = 0; i < 20; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 0.8;
      
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;
      
      const size = Math.random() * 5 + 2;
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
    
    setRadarPoints(staticPoints);
    
    const pointsInterval = setInterval(() => {
      setRadarPoints(prevPoints => 
        prevPoints.map(point => {
          if (Math.random() < 0.2) {
            return {
              ...point,
              visible: !point.visible
            };
          }
          return point;
        })
      );
    }, 800);
    
    return () => {
      clearInterval(pointsInterval);
    };
  }, []);

  return (
    <div className="absolute top-1/4 right-[10%] w-48 h-48 md:w-64 md:h-64 rounded-full 
      flex items-center justify-center opacity-80 
      bg-gradient-to-br from-mw-dark/30 to-mw-gray/20 
      backdrop-blur-sm border border-mw-green border-opacity-20 
      shadow-lg shadow-mw-green/10">
      <div className="absolute w-3/4 h-3/4 rounded-full border border-mw-green border-opacity-50"></div>
      <div className="absolute w-1/2 h-1/2 rounded-full border border-mw-green border-opacity-60"></div>
      <div className="h-1/2 w-0.5 bg-mw-green bg-opacity-60 absolute top-0 right-1/2 transform origin-bottom animate-radar-scan"></div>
      
      {radarPoints.map(point => (
        <div
          key={point.id}
          className="absolute bg-mw-green rounded-full transition-opacity duration-500 shadow-[0_0_8px_#3f9987] animate-pulse-light"
          style={{
            width: `${point.size}px`,
            height: `${point.size}px`,
            top: `calc(50% + ${point.y * 50}%)`,
            left: `calc(50% + ${point.x * 50}%)`,
            opacity: point.visible ? point.opacity : 0
          }}
        />
      ))}
    </div>
  );
};

export default RadarVisualization;
