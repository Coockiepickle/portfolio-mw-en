import { useEffect, useRef } from 'react';

const AnimatedGridBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    const gridSize = 40;
    const nodeSizeMin = 1.5;
    const nodeSizeMax = 3;
    
    let gridPoints: { x: number; y: number; size: number; brightness: number; pulseSpeed: number; phase: number }[] = [];
    
    const initGrid = () => {
      gridPoints = [];
      
      const cols = Math.ceil(canvas.width / gridSize) + 1;
      const rows = Math.ceil(canvas.height / gridSize) + 1;
      
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * gridSize;
          const y = j * gridSize;
          const size = Math.random() * (nodeSizeMax - nodeSizeMin) + nodeSizeMin;
          const brightness = Math.random() * 0.3 + 0.2;
          const pulseSpeed = Math.random() * 0.003 + 0.0015;
          const phase = Math.random() * Math.PI * 2;
          
          gridPoints.push({ x, y, size, brightness, pulseSpeed, phase });
        }
      }
    };
    
    initGrid();
    window.addEventListener('resize', initGrid);
    
    const drawGridLines = () => {
      ctx.strokeStyle = 'rgba(63, 153, 135, 0.08)';
      ctx.lineWidth = 0.5;
      
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
    };
    
    let animationFrameId: number;
    const animateGrid = (timestamp: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      drawGridLines();
      
      gridPoints.forEach(point => {
        const pulse = Math.sin(timestamp * point.pulseSpeed + point.phase) * 0.3 + 0.7;
        const currentBrightness = point.brightness * pulse;
        
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${currentBrightness * 1.2})`;
        ctx.fill();
      });
      
      animationFrameId = requestAnimationFrame(animateGrid);
    };
    
    animationFrameId = requestAnimationFrame(animateGrid);
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      window.removeEventListener('resize', initGrid);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0" 
      style={{ 
        background: 'linear-gradient(to bottom, rgba(18, 19, 22, 0.9), rgba(10, 11, 13, 0.9))',
        backdropFilter: 'brightness(110%) contrast(110%)'
      }}
    />
  );
};

export default AnimatedGridBackground;
