
import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-mw-darker border-t border-mw-green border-opacity-10 py-0">
      <div className="mw-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-mw-light">
              <span className="group inline-flex items-center">
                &copy; {currentYear}
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center space-x-1">
                  <span>↑</span>
                  <span>↑</span>
                  <span>↓</span>
                  <span>↓</span>
                  <span>←</span>
                  <span>→</span>
                  <span>←</span>
                  <span>→</span>
                  <span>B</span>
                  <span>A</span>
                </span>
              </span>
            </p>
          </div>
          
          <div className="flex items-center">
            <button onClick={handleScrollToTop} className="p-2 mr-4 border border-mw-green border-opacity-20 rounded-sm
              hover:bg-mw-green hover:bg-opacity-10 transition-all duration-200" aria-label="Scroll to top">
              <ArrowUp className="w-5 h-5 text-mw-green" />
            </button>
            
            <p className="text-sm text-mw-lightgray">{t('footer.designedBy')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
