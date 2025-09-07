
import { useEffect, useState, useCallback, lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import HeroContent from './hero/HeroContent';
import ScrollIndicator from './hero/ScrollIndicator';

// Lazy load heavy visualizations to improve FCP
const SineWaveVisualization = lazy(() => import('./hero/SineWaveVisualization'));
const RadarVisualization = lazy(() => import('./hero/RadarVisualization'));
const AnimatedGridBackground = lazy(() => import('./hero/AnimatedGridBackground'));

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [visualizationsReady, setVisualizationsReady] = useState(false);
  const { t } = useTranslation();
  const fullText = t('hero.typing');
  
  useEffect(() => {
    // Set loaded immediately for better LCP
    setLoaded(true);
    
    // Set full text immediately for LCP, animation handled by CSS
    setTypedText(fullText);
    
    // Defer heavy visualizations until after initial paint
    const timer = setTimeout(() => {
      setVisualizationsReady(true);
    }, 100);
    
    return () => clearTimeout(timer);
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
      {/* Main Content - Prioritized for FCP */}
      <HeroContent 
        loaded={loaded} 
        typedText={typedText} 
        handleScrollToSection={handleScrollToSection} 
      />
      
      {/* Scroll Indicator */}
      <ScrollIndicator loaded={loaded} handleScrollToSection={handleScrollToSection} />
      
      {/* Deferred Heavy Visualizations */}
      {visualizationsReady && (
        <Suspense fallback={null}>
          <AnimatedGridBackground />
          <SineWaveVisualization />
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 hidden md:block">
            <RadarVisualization />
          </div>
        </Suspense>
      )}
      
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
