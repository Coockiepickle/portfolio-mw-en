
import { useState, useEffect } from 'react';
import { useKonamiCode } from '../hooks/useKonamiCode';
import { toast } from '@/hooks/use-toast';

const EasterEgg = () => {
  const konamiTriggered = useKonamiCode();
  const [image, setImage] = useState<string | null>(null);

  // Updated list of available meme images to include 2 additional images
  const memeImages = [
    '/easter/meme_1.webp',
    '/easter/meme_2.webp',
    '/easter/meme_3.webp',
    '/easter/meme_4.webp',
    '/easter/meme_5.webp',
    '/easter/meme_6.webp',
    '/easter/meme_7.webp',
  ];

  // Randomize the image order when the component mounts
  const [randomizedImages, setRandomizedImages] = useState<string[]>([]);
  
  useEffect(() => {
    // Fisher-Yates (Knuth) shuffle algorithm to randomize the images
    const shuffleArray = (array: string[]) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };
    
    setRandomizedImages(shuffleArray(memeImages));
  }, []);

  useEffect(() => {
    if (konamiTriggered) {
      // Select a random image from the randomized collection
      const randomIndex = Math.floor(Math.random() * randomizedImages.length);
      const randomImage = randomizedImages[randomIndex];
      setImage(randomImage);
      
      // Show a toast notification
      toast({
        title: "Easter egg unlocked!",
        description: "You found a hidden secret! ⭐",
        variant: "default",
      });
    }
  }, [konamiTriggered, randomizedImages]);

  // Handler to close the modal when clicking anywhere
  const handleCloseModal = () => {
    setImage(null);
  };

  if (!image) return null;

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 animate-fade-in cursor-pointer" 
      onClick={handleCloseModal}
    >
      <div className="relative max-w-full max-h-[90vh] p-4 transform transition-all scale-in-center">
        <img 
          src={image} 
          alt="Easter Egg Meme" 
          className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-xl border-2 border-mw-green" 
        />
      </div>
    </div>
  );
};

export default EasterEgg;

