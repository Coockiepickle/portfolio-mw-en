
import { useEffect, useState, useRef, memo } from 'react';
import { cn } from '@/lib/utils';

const getRandomChar = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,./<>?";
  return chars.charAt(Math.floor(Math.random() * chars.length));
};

// Function to get random animation duration between 1000ms and 1500ms
const getRandomDuration = () => {
  return Math.floor(Math.random() * 501) + 1000; // Random between 1000 and 1500
};

interface CodeCrackerProps {
  text: string;
  className?: string;
  isDecoding: boolean;
  skipAnimation?: boolean; // Add prop to skip animation
}

// Use memo to prevent unnecessary re-renders
const CodeCracker = memo(({ text, className, isDecoding, skipAnimation = false }: CodeCrackerProps) => {
  const [displayText, setDisplayText] = useState(text);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const durationRef = useRef<number>(getRandomDuration()); // Store random duration
  
  useEffect(() => {
    // If animation should be skipped or not decoding, just display the full text
    if (skipAnimation || !isDecoding) {
      setDisplayText(text);
      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
          startTimeRef.current = null;
        }
      };
    }
    
    // Generate a new random duration for each text change
    durationRef.current = getRandomDuration();
    
    const originalText = text;
    const animationDuration = durationRef.current; // Use the random duration
    
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
  }, [isDecoding, text, skipAnimation]);
  
  return (
    <div 
      className={cn("font-mono", className)}
      dangerouslySetInnerHTML={{ __html: displayText }}
    />
  );
});

CodeCracker.displayName = 'CodeCracker';

export default CodeCracker;
