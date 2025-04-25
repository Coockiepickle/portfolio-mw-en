import React from 'react';
import { ArrowUp } from 'lucide-react';
const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const currentYear = new Date().getFullYear();
  return <footer className="relative bg-mw-darker border-t border-mw-green border-opacity-10 py-0">
      <div className="mw-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-mw-light group relative">
              &copy; {currentYear}
              <span className="absolute left-full ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-mw-green/50 mx-[9px] px-0">↑ ↑ ↓ ↓ ← → ← → B A</span>
            </p>
          </div>
          
          <div className="flex items-center">
            <button onClick={handleScrollToTop} className="p-2 mr-4 border border-mw-green border-opacity-20 rounded-sm
              hover:bg-mw-green hover:bg-opacity-10 transition-all duration-200" aria-label="Scroll to top">
              <ArrowUp className="w-5 h-5 text-mw-green" />
            </button>
            
            <p className="text-sm text-mw-lightgray">Designed by Damien Reynaud using Lovable</p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;