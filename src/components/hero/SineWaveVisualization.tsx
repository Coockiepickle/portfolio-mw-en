
import { useEffect, useState, useRef, memo, useMemo } from 'react';

interface SineWavePoint {
  x: number;
  y: number;
}

const SineWaveVisualization = memo(() => {
  const [sineWavePoints, setSineWavePoints] = useState<SineWavePoint[]>([]);
  const animationRef = useRef<number>();
  const lastUpdateRef = useRef<number>(0);
  
  // Pre-calculate x positions to avoid recalculation
  const xPositions = useMemo(() => {
    const totalPoints = 30; // Reduced from 50 for better performance
    return Array.from({ length: totalPoints }, (_, i) => i * (100 / totalPoints));
  }, []);

  useEffect(() => {
    const generateSineWave = (timestamp: number) => {
      // Throttle updates to ~30fps instead of 20fps for better performance
      if (timestamp - lastUpdateRef.current < 33) {
        animationRef.current = requestAnimationFrame(generateSineWave);
        return;
      }
      
      lastUpdateRef.current = timestamp;
      
      const points: SineWavePoint[] = xPositions.map((x, i) => ({
        x,
        y: Math.sin((timestamp / 500) + (i / 5)) * 10
      }));
      
      setSineWavePoints(points);
      animationRef.current = requestAnimationFrame(generateSineWave);
    };
    
    animationRef.current = requestAnimationFrame(generateSineWave);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [xPositions]);

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
});

export default SineWaveVisualization;
