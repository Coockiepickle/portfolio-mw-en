
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ScrollIndicatorProps {
  loaded: boolean;
  handleScrollToSection: (sectionId: string) => void;
}

const ScrollIndicator = ({ loaded, handleScrollToSection }: ScrollIndicatorProps) => {
  return (
    <button 
      className={cn(
        "absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer transition-all duration-700 delay-600 ease-out focus:outline-none",
        loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      onClick={() => handleScrollToSection('about')}
      aria-label="Scroll to About section"
    >
      <div className="flex flex-col items-center space-y-2">
        <span className="text-xs uppercase tracking-wider text-mw-green">Scroll Down</span>
        <ArrowDown className="w-5 h-5 text-mw-green animate-bounce" />
      </div>
    </button>
  );
};

export default ScrollIndicator;
