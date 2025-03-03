
import { useEffect, useState } from 'react';

interface SineWavePoint {
  x: number;
  y: number;
}

const SineWaveVisualization = () => {
  const [sineWavePoints, setSineWavePoints] = useState<SineWavePoint[]>([]);
  
  useEffect(() => {
    const generateSineWave = () => {
      const points: SineWavePoint[] = [];
      const totalPoints = 50;
      
      for (let i = 0; i < totalPoints; i++) {
        const x = i * (100 / totalPoints);
        const y = Math.sin((Date.now() / 500) + (i / 5)) * 10;
        points.push({ x, y });
      }
      
      setSineWavePoints(points);
    };
    
    const sineWaveInterval = setInterval(generateSineWave, 50);
    
    return () => {
      clearInterval(sineWaveInterval);
    };
  }, []);

  return (
    <div className="absolute top-[calc(1/3*100%+25px)] left-[15%] w-56 h-28 border border-mw-green border-opacity-40 bg-black bg-opacity-30 flex items-center justify-center overflow-hidden hidden md:flex">
      <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
        <polyline
          points={sineWavePoints.map(point => `${point.x},${point.y + 20}`).join(' ')}
          fill="none"
          stroke="#3f9987"
          strokeWidth="1.5"
          strokeOpacity="0.8"
        />
      </svg>
      <div className="absolute w-full h-px bg-mw-green bg-opacity-30"></div>
      <div className="absolute h-full w-px bg-mw-green bg-opacity-80" 
            style={{
              left: '50%',
              animation: 'scan 3s linear infinite'
            }}></div>
    </div>
  );
};

export default SineWaveVisualization;
