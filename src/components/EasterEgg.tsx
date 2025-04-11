
import { useState, useEffect } from 'react';
import { useKonamiCode } from '../hooks/useKonamiCode';
import { toast } from '@/hooks/use-toast';

const EasterEgg = () => {
  const konamiTriggered = useKonamiCode();
  const [image, setImage] = useState<string | null>(null);
  const [previousImage, setPreviousImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const memeImages = [
    '/easter/meme_1.webp',
    '/easter/meme_2.webp',
    '/easter/meme_3.webp',
    '/easter/meme_4.webp',
    '/easter/meme_5.webp',
    '/easter/meme_6.webp',
    '/easter/meme_7.webp',
    '/easter/meme_8.webp',
    '/easter/meme_9.webp',
  ];

  const [randomizedImages, setRandomizedImages] = useState<string[]>([]);
  
  useEffect(() => {
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
    const handleDevTools = () => {
      console.log("🕵️ Il n'y a rien à voir ici !");
    };

    const checkDevTools = () => {
      const threshold = 160;
      const widthDiff = window.outerWidth - window.innerWidth;
      const heightDiff = window.outerHeight - window.innerHeight;

      if (widthDiff > threshold || heightDiff > threshold) {
        handleDevTools();
      }
    };

    window.addEventListener('resize', checkDevTools);

    return () => {
      window.removeEventListener('resize', checkDevTools);
    };
  }, []);

  useEffect(() => {
    if (konamiTriggered && !isProcessing) {
      setIsProcessing(true);
      
      // Filter out the previous image if it exists
      const availableImages = previousImage 
        ? randomizedImages.filter(img => img !== previousImage)
        : randomizedImages;
      
      // Get a random image from the filtered array
      const randomIndex = Math.floor(Math.random() * availableImages.length);
      const randomImage = availableImages[randomIndex];
      
      // Set the current image and store it as the previous image for next time
      setImage(randomImage);
      setPreviousImage(randomImage);
      
      toast({
        title: "Easter egg unlocked!",
        description: "You found a hidden secret! ⭐",
        variant: "default",
      });
      
      // Reset processing flag after a short delay
      setTimeout(() => {
        setIsProcessing(false);
      }, 3000); // Match this with the Konami code reset timing
    }
  }, [konamiTriggered, randomizedImages, previousImage, isProcessing]);

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
