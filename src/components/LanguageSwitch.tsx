
import { Globe } from 'lucide-react';

const LanguageSwitch = () => {
  return (
    <a 
      href="https://dreynaud-fr.netlify.app" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-3 py-2 
        bg-mw-darker border border-mw-green border-opacity-30 rounded-sm
        text-mw-light hover:text-white hover:bg-mw-green hover:bg-opacity-10
        transition-all duration-200 shadow-md"
      aria-label="Switch to French version"
    >
      <Globe className="w-4 h-4" />
      <span className="text-sm font-medium">FR</span>
    </a>
  );
};

export default LanguageSwitch;
