
import { useEffect, useState, useRef, memo } from 'react';
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

// Use memo to prevent unnecessary re-renders
const CodeCracker = memo(({ text, className, isDecoding }: CodeCrackerProps) => {
  const [displayText, setDisplayText] = useState(text);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  
  useEffect(() => {
    if (!isDecoding) {
      setDisplayText(text);
      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
          startTimeRef.current = null;
        }
      };
    }
    
    const originalText = text;
    const animationDuration = 700; // Changed from 1800 to 700 milliseconds (0.7 seconds)
    
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / animationDuration, 1);
      
      // Improved ease-out cubic function for smoother deceleration
      const easedProgress = 1 - Math.pow(1 - progress, 4);
      
      // Character settling with more realistic algorithm
      setDisplayText(originalText
        .split('')
        .map((char, index) => {
          // Already completed characters
          if (index < Math.floor(easedProgress * originalText.length * 0.6)) return char;
          
          // For remaining characters, calculate probability of showing original vs random
          // Characters closer to the "completion front" have higher chance of settling
          const distanceFromFront = index - Math.floor(easedProgress * originalText.length * 0.6);
          const settlingProbability = Math.max(0, 1 - (distanceFromFront * 0.1));
          
          // Random settling based on probability and progress
          if (Math.random() < settlingProbability * (progress * 0.8)) return char;
          
          // Handle spaces
          if (char === ' ') return ' ';
          
          // For characters that haven't settled yet, we'll have some occasionally flicker between
          // the correct character and random ones for a more realistic "cracking" effect
          if (progress > 0.7 && Math.random() < (progress - 0.7) * 0.8) {
            return Math.random() < 0.7 ? char : getRandomChar();
          }
          
          // Otherwise, show random character
          return getRandomChar();
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
});

CodeCracker.displayName = 'CodeCracker';

export default CodeCracker;
