import { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

const getRandomChar = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,./<>?";
  return chars.charAt(Math.floor(Math.random() * chars.length));
};

interface CodeCrackerProps {
  text: string;
  className?: string;
  isDecoding: boolean;
}

const CodeCracker = ({ text, className, isDecoding }: CodeCrackerProps) => {
  const [displayText, setDisplayText] = useState(text);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  
  useEffect(() => {
    if (!isDecoding) {
      setDisplayText(text);
      return;
    }
    
    const originalText = text;
    
    // Fixed animation duration of 1.5 seconds (1500ms)
    const animationDuration = 1500;
    
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / animationDuration, 1);
      
      // Ease-out function for smoother completion
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const completeChars = Math.floor(easedProgress * originalText.length);
      
      // Implement probabilistic character settling
      // As we get closer to the end, characters have higher chance to settle
      setDisplayText(originalText
        .split('')
        .map((char, index) => {
          // Already completed characters
          if (index < completeChars) return char;
          
          // For remaining characters, calculate probability of showing original vs random
          // Characters closer to the "completion front" have higher chance of settling
          const distanceFromFront = index - completeChars;
          const settlingProbability = Math.max(0, 1 - (distanceFromFront * 0.2));
          
          // Random settling based on probability
          if (Math.random() < settlingProbability * 0.1) return char;
          
          // Otherwise, show random character or space
          return char === ' ' ? ' ' : getRandomChar();
        })
        .join(''));
      
      // Continue animation until complete
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayText(originalText);
        startTimeRef.current = null;
      }
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        startTimeRef.current = null;
      }
    };
  }, [isDecoding, text]);
  
  return (
    <div className={cn("font-mono", className)}>
      {displayText}
    </div>
  );
};

export default CodeCracker;
