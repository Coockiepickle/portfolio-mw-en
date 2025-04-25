
import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitch = () => {
  const { t } = useTranslation();
  const { currentLanguage, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(currentLanguage === 'en' ? 'fr' : 'en');
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-3 py-2 
        bg-mw-darker border border-mw-green border-opacity-30 rounded-sm
        text-mw-light hover:text-white hover:bg-mw-green hover:bg-opacity-10
        transition-all duration-200 shadow-md"
      aria-label={currentLanguage === 'en' ? "Switch to French" : "Passer à l'anglais"}
    >
      <Globe className="w-4 h-4" />
      <span className="text-sm font-medium">{t(`language.${currentLanguage === 'en' ? 'fr' : 'en'}`)}</span>
    </button>
  );
};

export default LanguageSwitch;
