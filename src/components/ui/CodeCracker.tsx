import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const getRandomChar = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,./<>?";
  return chars.charAt(Math.floor(Math.random() * chars.length));
};

interface CodeCrackerProps {
  text: string;
  className?: string;
  isDecoding: boolean;
  charDelay?: number; // Added optional charDelay prop
}

const CodeCracker = ({ text, className, isDecoding, charDelay }: CodeCrackerProps) => {
  const [displayText, setDisplayText] = useState(text);
  
  useEffect(() => {
    if (!isDecoding) {
      setDisplayText(text);
      return;
    }
    
    let iteration = 0;
    const originalText = text;
    
    // Fixed animation duration of 1.5 seconds (1500ms)
    const animationDuration = 1500;
    // Number of steps depends on the animation duration and interval delay
    const intervalDelay = charDelay || 30; // Use provided charDelay or default to 30ms
    const totalIterations = animationDuration / intervalDelay;
    
    const interval = setInterval(() => {
      setDisplayText(prevText => {
        const progress = Math.min(iteration / totalIterations, 1);
        const completeChars = Math.floor(progress * originalText.length);
        
        return originalText
          .split('')
          .map((char, index) => {
            if (index < completeChars) return char;
            return char === ' ' ? ' ' : getRandomChar();
          })
          .join('');
      });
      
      iteration++;
      
      if (iteration > totalIterations) {
        clearInterval(interval);
        setDisplayText(originalText);
      }
    }, intervalDelay);
    
    return () => clearInterval(interval);
  }, [isDecoding, text, charDelay]);
  
  return (
    <div className={cn("font-mono", className)}>
      {displayText}
    </div>
  );
};

export default CodeCracker;
