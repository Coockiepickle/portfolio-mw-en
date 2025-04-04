
import { useState, useEffect } from 'react';
import { useKonamiCode } from '../hooks/useKonamiCode';
import { toast } from '@/hooks/use-toast';

const EasterEgg = () => {
  const konamiTriggered = useKonamiCode();
  const [image, setImage] = useState<string | null>(null);

  // List of available meme images
  const memeImages = [
    '/easter/meme_1.webp',
    '/easter/meme_2.webp',
    '/easter/meme_3.webp',
    '/easter/meme_4.webp',
    '/easter/meme_5.webp'
  ];

  useEffect(() => {
    if (konamiTriggered) {
      // Select a random image from the meme collection
      const randomIndex = Math.floor(Math.random() * memeImages.length);
      const randomImage = memeImages[randomIndex];
      setImage(randomImage);
      
      // Show a toast notification
      toast({
        title: "Easter egg unlocked!",
        description: "You found a hidden secret! ⭐",
        variant: "default",
      });
      
      // Hide the image after 3 seconds
      const timer = setTimeout(() => {
        setImage(null);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [konamiTriggered]);

  if (!image) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 animate-fade-in">
      <div className="relative max-w-xl w-full p-4 transform transition-all scale-in-center">
        <img 
          src={image} 
          alt="Easter Egg Meme" 
          className="w-full h-auto rounded-lg shadow-xl border-2 border-mw-green" 
        />
      </div>
    </div>
  );
};

export default EasterEgg;
