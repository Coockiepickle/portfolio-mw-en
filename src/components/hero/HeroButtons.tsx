
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

interface HeroButtonsProps {
  loaded: boolean;
  handleScrollToSection: (sectionId: string) => void;
}

const HeroButtons = ({ loaded, handleScrollToSection }: HeroButtonsProps) => {
  const { t } = useTranslation();
  
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
        {t('hero.viewProjects')}
      </button>
      <button 
        onClick={() => handleScrollToSection('contact')} 
        className="mw-button"
      >
        {t('hero.contactMe')}
      </button>
    </div>
  );
};

export default HeroButtons;
