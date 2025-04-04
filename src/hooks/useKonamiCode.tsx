import { useState, useEffect } from 'react';

// The Konami code sequence
const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a'
];

export const useKonamiCode = () => {
  const [konamiTriggered, setKonamiTriggered] = useState(false);
  const [keySequence, setKeySequence] = useState<string[]>([]);

  useEffect(() => {
    const keyHandler = (event: KeyboardEvent) => {
      // Get the key pressed (lowercase for letters)
      const key = event.key === 'B' || event.key === 'A' 
        ? event.key.toLowerCase() 
        : event.key;
      
      // Add the new key to the sequence
      const newSequence = [...keySequence, key];
      
      // Only keep the last N keys where N is the length of the Konami code
      if (newSequence.length > KONAMI_CODE.length) {
        newSequence.shift();
      }
      
      setKeySequence(newSequence);
      
      // Check if the sequence matches the Konami code
      const isKonamiCode = newSequence.length === KONAMI_CODE.length &&
        newSequence.every((k, i) => k === KONAMI_CODE[i]);
      
      if (isKonamiCode) {
        setKonamiTriggered(true);
        // Reset after a short delay to allow re-triggering
        setTimeout(() => setKonamiTriggered(false), 3000);
      }
    };

    window.addEventListener('keydown', keyHandler);
    
    return () => {
      window.removeEventListener('keydown', keyHandler);
    };
  }, [keySequence]);

  return konamiTriggered;
};
