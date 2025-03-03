
import { cn } from '@/lib/utils';
import { Target } from 'lucide-react';

interface HeroContentProps {
  loaded: boolean;
  typedText: string;
  handleScrollToSection: (sectionId: string) => void;
}

const HeroContent = ({ loaded, typedText, handleScrollToSection }: HeroContentProps) => {
  return (
    <div className="mw-container relative z-10">
      <div className="max-w-3xl mx-auto text-center">
        <div 
          className={cn(
            "mb-6 transition-all duration-700 ease-out transform",
            loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          )}
        >
          <span className="mw-badge mb-4">
            <Target className="w-3 h-3 mr-1" />
            LEARNING ACTIVATED
          </span>
        </div>
        
        <h1 
          className={cn(
            "text-white mb-6 leading-tight transition-all duration-700 delay-150 ease-out transform",
            loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          )}
        >
          DAMIEN REYNAUD
          <div className="h-[2px] w-20 bg-mw-green mx-auto my-4"></div>
          <span className="font-code text-2xl sm:text-3xl font-light text-mw-green opacity-90">
            {typedText}
            <span className="inline-block w-1 h-6 ml-1 bg-mw-green animate-pulse"></span>
          </span>
        </h1>
        
        <p 
          className={cn(
            "text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed transition-all duration-700 delay-300 ease-out transform",
            loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          )}
        >
          Experienced network student with tactical precision and strategic approach.
          Specialized in creating sophisticated solutions for complex problems.
        </p>
        
        <div 
          className={cn(
            "flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 transition-all duration-700 delay-450 ease-out transform",
            loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          )}
        >
          <button 
            onClick={() => handleScrollToSection('projects')} 
            className="mw-button-primary"
          >
            VIEW MY PROJECTS
          </button>
          <button 
            onClick={() => handleScrollToSection('contact')} 
            className="mw-button"
          >
            CONTACT ME
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
