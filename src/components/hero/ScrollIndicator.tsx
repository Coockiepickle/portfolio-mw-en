
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ScrollIndicatorProps {
  loaded: boolean;
  handleScrollToSection: (sectionId: string) => void;
}

const ScrollIndicator = ({ loaded, handleScrollToSection }: ScrollIndicatorProps) => {
  return (
    <div 
      className={cn(
        "absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-700 delay-600 ease-out",
        loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      <button 
        className="group flex flex-col items-center space-y-2 p-3 transition-all duration-300 focus:outline-none"
        onClick={() => handleScrollToSection('about')}
        aria-label="Scroll to About Section"
      >
        <span className="text-xs uppercase tracking-wider text-mw-green group-hover:text-white transition-colors duration-300">Scroll Down</span>
        <div className="relative flex items-center justify-center">
          <div className="absolute w-8 h-8 border border-mw-green rounded-full opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"></div>
          <ArrowDown className="w-5 h-5 text-mw-green group-hover:text-white animate-bounce transition-colors duration-300" />
        </div>
        <div className="h-1 w-6 bg-mw-green bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
      </button>
    </div>
  );
};

export default ScrollIndicator;
