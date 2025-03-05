
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
    
    // Animation avec une pause de stabilité entre les phases de glitch
    const animationDuration = 2000; // 2 secondes au total
    const intervalDelay = 20; // 20ms entre chaque étape 
    const totalIterations = animationDuration / intervalDelay;
    
    // Durée de stabilité (1.3s) avant la reprise du glitching
    const stabilityDuration = 1300; // en millisecondes
    const stabilityIterations = stabilityDuration / intervalDelay;
    let isInStabilityPhase = false;
    let stabilityCounter = 0;
    
    const interval = setInterval(() => {
      setDisplayText(prevText => {
        const progress = Math.min(iteration / totalIterations, 1);
        const completeChars = Math.floor(progress * originalText.length);
        
        // Si on est en phase de stabilité, afficher le texte original
        if (isInStabilityPhase) {
          stabilityCounter++;
          // Fin de la phase de stabilité
          if (stabilityCounter >= stabilityIterations) {
            isInStabilityPhase = false;
            stabilityCounter = 0;
          }
          return originalText;
        }
        
        // Phase de glitch
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
      
      // Basculer en phase de stabilité quand on atteint un certain stade
      if (iteration % (totalIterations / 3) === 0 && !isInStabilityPhase) {
        isInStabilityPhase = true;
      }
      
      if (iteration > totalIterations * 3) { // Triple la durée pour voir les cycles
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
