
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

interface ScrollIndicatorProps {
  loaded: boolean;
  handleScrollToSection: (sectionId: string) => void;
}

const ScrollIndicator = ({ loaded, handleScrollToSection }: ScrollIndicatorProps) => {
  const { t } = useTranslation();
  
  return (
    <div 
      className={cn(
        "absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer transition-all duration-700 delay-600 ease-out",
        loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      onClick={() => handleScrollToSection('about')}
    >
      <div className="flex flex-col items-center space-y-2">
        <span className="text-xs uppercase tracking-wider text-mw-green">{t('hero.scrollDown')}</span>
        <ArrowDown className="w-5 h-5 text-mw-green animate-bounce" />
      </div>
    </div>
  );
};

export default ScrollIndicator;
