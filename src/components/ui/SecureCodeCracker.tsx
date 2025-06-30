
import { useEffect, useState, useRef, memo } from 'react';
import { cn } from '@/lib/utils';
import { sanitizeHtml } from '@/lib/security';

const getRandomDuration = () => {
  return Math.floor(Math.random() * 1001) + 1000;
};

interface SecureCodeCrackerProps {
  text: string;
  className?: string;
  isDecoding: boolean;
  skipAnimation?: boolean;
}

const SecureCodeCracker = memo(({ text, className, isDecoding, skipAnimation = false }: SecureCodeCrackerProps) => {
  const [displayText, setDisplayText] = useState(text);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const durationRef = useRef<number>(getRandomDuration());
  
  useEffect(() => {
    if (skipAnimation || !isDecoding) {
      setDisplayText(text);
      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
          startTimeRef.current = null;
        }
      };
    }
    
    durationRef.current = getRandomDuration();
    
    const originalText = text;
    const animationDuration = durationRef.current;
    
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / animationDuration, 1);
      
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const charactersToShow = Math.floor(easedProgress * originalText.length);
      const visibleText = originalText.substring(0, charactersToShow);
      
      const cursorHtml = progress < 1 
        ? "<span class='text-mw-green animate-pulse-light'>▌</span>" 
        : "<span class='text-mw-green animate-pulse-light'>▌</span>";
      
      const safeContent = sanitizeHtml(visibleText + cursorHtml);
      setDisplayText(safeContent);
      
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        const finalContent = sanitizeHtml(originalText + cursorHtml);
        setDisplayText(finalContent);
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

SecureCodeCracker.displayName = 'SecureCodeCracker';

export default SecureCodeCracker;
