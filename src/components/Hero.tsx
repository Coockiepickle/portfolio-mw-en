
import { useEffect, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import SineWaveVisualization from './hero/SineWaveVisualization';
import RadarVisualization from './hero/RadarVisualization';
import HeroContent from './hero/HeroContent';
import ScrollIndicator from './hero/ScrollIndicator';
import AnimatedGridBackground from './hero/AnimatedGridBackground';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [typedText, setTypedText] = useState('');
  const { t } = useTranslation();
  const fullText = t('hero.typing');
  const typingSpeed = 90;
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 500);
    
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);
    
    return () => {
      clearTimeout(timer);
      clearInterval(typingInterval);
    };
  }, [fullText]);
  
  const handleScrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  }, []);
  
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center">
      {/* New Animated Grid Background */}
      <AnimatedGridBackground />
      
      {/* Visualizations */}
      <SineWaveVisualization />
      
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 hidden md:block">
        <RadarVisualization />
      </div>
      
      {/* Main Content */}
      <HeroContent 
        loaded={loaded} 
        typedText={typedText} 
        handleScrollToSection={handleScrollToSection} 
      />
      
      {/* Scroll Indicator */}
      <ScrollIndicator loaded={loaded} handleScrollToSection={handleScrollToSection} />
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-mw-darker to-transparent"></div>
      
      <style>
        {`
          @keyframes scan {
            0% { transform: translateX(-50px); }
            100% { transform: translateX(50px); }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
