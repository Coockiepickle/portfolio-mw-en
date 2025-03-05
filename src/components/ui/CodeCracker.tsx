
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
}

const CodeCracker = ({ text, className, isDecoding }: CodeCrackerProps) => {
  const [displayText, setDisplayText] = useState(text);
  
  useEffect(() => {
    if (!isDecoding) {
      setDisplayText(text);
      return;
    }
    
    let iteration = 0;
    const originalText = text;
    
    // Animation plus fluide avec plus d'itérations
    const animationDuration = 2000; // 2 secondes
    const intervalDelay = 20; // 20ms entre chaque étape - plus rapide pour plus de fluidité
    const totalIterations = animationDuration / intervalDelay;
    
    const interval = setInterval(() => {
      setDisplayText(prevText => {
        const progress = Math.min(iteration / totalIterations, 1);
        const completeChars = Math.floor(progress * originalText.length);
        
        return originalText
          .split('')
          .map((char, index) => {
            // Ajout d'aléatoire - glitch occasionnel même sur les caractères complétés
            // Réduisons la probabilité pour un mouvement plus fluide
            if (index < completeChars && Math.random() > 0.03) return char;
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
  }, [isDecoding, text]);
  
  return (
    <span className={cn("font-mono", className)}>
      {displayText}
    </span>
  );
};

export default CodeCracker;
