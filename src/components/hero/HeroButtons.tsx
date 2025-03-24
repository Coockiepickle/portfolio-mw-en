
import { cn } from '@/lib/utils';

interface HeroButtonsProps {
  loaded: boolean;
  handleScrollToSection: (sectionId: string) => void;
}

const HeroButtons = ({ loaded, handleScrollToSection }: HeroButtonsProps) => {
  return (
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
      <a 
        href="https://dreynaud-fr.netlify.app" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="mw-button bg-transparent border border-mw-green text-mw-green hover:bg-mw-green hover:bg-opacity-10"
      >
        VERSION FRANÇAISE
      </a>
    </div>
  );
};

export default HeroButtons;
