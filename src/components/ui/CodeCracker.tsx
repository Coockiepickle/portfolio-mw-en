
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
    const animationDuration = 1000; // Animation duration in milliseconds (1000ms = 1 second)
    
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / animationDuration, 1);
      
      // Improved ease-out cubic function for smoother deceleration
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      
      // Calculate how many characters to show based on progress
      const charactersToShow = Math.floor(easedProgress * originalText.length);
      
      // Create display text with visible characters and cursor at the end
      const visibleText = originalText.substring(0, charactersToShow);
      
      // Add cursor at the end of the visible text
      setDisplayText(
        visibleText + 
        (progress < 1 ? "<span class='text-mw-green animate-pulse-light'>▌</span>" : "▌")
      );
      
      // Continue animation until complete
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayText(originalText + "<span class='text-mw-green animate-pulse-light'>▌</span>");
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
    <div 
      className={cn("font-mono", className)}
      dangerouslySetInnerHTML={{ __html: displayText }}
    />
  );
});

CodeCracker.displayName = 'CodeCracker';

export default CodeCracker;
