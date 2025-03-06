
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

// Enhanced character set with more tactical/military-themed symbols
const getRandomChar = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,./<>?§¢£¥€¤←→↑↓⌂∟∞≡≈≠≤≥÷×°•";
  return chars.charAt(Math.floor(Math.random() * chars.length));
};

interface CodeCrackerProps {
  text: string;
  className?: string;
  isDecoding: boolean;
}

const CodeCracker = ({ text, className, isDecoding }: CodeCrackerProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [hasStarted, setHasStarted] = useState(false);
  
  useEffect(() => {
    if (!isDecoding) {
      setDisplayText(text);
      setHasStarted(false);
      return;
    }
    
    setHasStarted(true);
    let iteration = 0;
    const originalText = text;
    
    // Animation parameters
    const animationDuration = 1800; // 1.8 seconds total
    const intervalDelay = 25; // More frequent updates for smoother effect
    const totalIterations = animationDuration / intervalDelay;
    
    // Character randomization patterns
    const characterIntensity = 2; // How many times a character changes before settling
    
    const interval = setInterval(() => {
      setDisplayText(prevText => {
        const progress = Math.min(iteration / totalIterations, 1);
        const completeChars = Math.floor(progress * originalText.length);
        
        return originalText
          .split('')
          .map((char, index) => {
            // Characters that are completed stay fixed
            if (index < completeChars - 3) return char;
            
            // Characters currently being decoded have random chance of showing correct value
            if (index < completeChars) {
              // Gradually increase chance of showing correct character
              const decodeProgress = (iteration % (totalIterations / characterIntensity)) / (totalIterations / characterIntensity);
              return Math.random() < decodeProgress ? char : getRandomChar();
            }
            
            // Future characters get randomized at decreasing frequency based on position
            const futureCharProb = 0.5 - (index - completeChars) * 0.1;
            return char === ' ' ? ' ' : (Math.random() < futureCharProb ? getRandomChar() : prevText.split('')[index] || getRandomChar());
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
  }, [isDecoding, text]);
  
  // Apply tactical styling to the component
  return (
    <div className={cn(
      "font-mono relative transition-all duration-300",
      hasStarted && isDecoding && "text-mw-green", 
      className
    )}>
      {/* Add subtle pulse effect to decoded text */}
      <span className={cn(
        "inline-block",
        hasStarted && isDecoding && "animate-tactical-blink"
      )}>
        {displayText}
      </span>
    </div>
  );
};

export default CodeCracker;
