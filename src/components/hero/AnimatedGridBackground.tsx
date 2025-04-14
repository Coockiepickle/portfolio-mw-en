
import { useEffect, useRef, useState } from 'react';

const AnimatedGridBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState<{ x: number, y: number } | null>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions to match window size
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    };
    
    // Handle mouse leaving the canvas
    const handleMouseLeave = () => {
      setMousePosition(null);
    };
    
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    
    // Grid configuration
    const gridSize = 40;
    const nodeSizeMin = 1;
    const nodeSizeMax = 2;
    const mouseInfluenceRadius = 150; // Radius of cursor influence
    const maxBrightnessBoost = 0.7; // Maximum brightness boost from cursor
    
    // Create grid points with randomized properties
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
          const brightness = Math.random() * 0.2 + 0.1; // Base brightness between 0.1 and 0.3
          const pulseSpeed = Math.random() * 0.001 + 0.0005; // Random slow pulse speed
          const phase = Math.random() * Math.PI * 2; // Random starting phase
          
          gridPoints.push({ x, y, size, brightness, pulseSpeed, phase });
        }
      }
    };
    
    initGrid();
    window.addEventListener('resize', initGrid);
    
    // Draw grid lines
    const drawGridLines = () => {
      ctx.strokeStyle = 'rgba(63, 153, 135, 0.08)'; // Dim green lines (MW theme)
      ctx.lineWidth = 0.5;
      
      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
    };
    
    // Draw and animate grid points
    let animationFrameId: number;
    const animateGrid = (timestamp: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid lines
      drawGridLines();
      
      // Draw pulsing nodes
      gridPoints.forEach(point => {
        // Calculate pulsing effect
        const pulse = Math.sin(timestamp * point.pulseSpeed + point.phase) * 0.1 + 0.9;
        let currentBrightness = point.brightness * pulse;
        
        // Calculate distance to mouse cursor and apply brightness boost
        if (mousePosition) {
          const dx = mousePosition.x - point.x;
          const dy = mousePosition.y - point.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouseInfluenceRadius) {
            // Apply brightness boost based on proximity to cursor
            // The closer to the cursor, the brighter the point becomes
            const proximityFactor = 1 - (distance / mouseInfluenceRadius);
            const brightnessBoost = maxBrightnessBoost * proximityFactor * proximityFactor; // Squared for more natural falloff
            currentBrightness += brightnessBoost;
          }
        }
        
        // Cap brightness at 1.0
        currentBrightness = Math.min(currentBrightness, 1.0);
        
        // Draw the point with varying size based on brightness
        const sizeMultiplier = 1 + currentBrightness; // Points get slightly larger when brighter
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.size * sizeMultiplier, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${currentBrightness})`;
        ctx.fill();
      });
      
      animationFrameId = requestAnimationFrame(animateGrid);
    };
    
    animationFrameId = requestAnimationFrame(animateGrid);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      window.removeEventListener('resize', initGrid);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0" 
      style={{ background: 'linear-gradient(to bottom, rgba(18, 19, 22, 1), rgba(10, 11, 13, 1))' }}
    />
  );
};

export default AnimatedGridBackground;
