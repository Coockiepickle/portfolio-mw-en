
import { useState, useEffect } from 'react';
import { FileText, Download } from 'lucide-react';
import { cn } from '@/lib/utils';

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('resume');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="resume" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 mw-grid-pattern opacity-30"></div>
      
      <div className="mw-container relative z-10">
        <div className={cn("transition-all duration-700 transform", isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8")}>
          <span className="mw-badge mb-4">
            <FileText className="w-3 h-3 mr-1" />
            CURRICULUM VITAE
          </span>
          <h2 className="mw-section-title text-white">Mon CV</h2>
        </div>
        
        <div className={cn("mt-8 transition-all duration-700 delay-150 transform", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
          <div className="flex flex-col items-center justify-center max-w-2xl mx-auto">
            <div className="mw-card p-8 w-full hover:shadow-lg hover:shadow-mw-green/30 hover:-translate-y-2 hover:border-mw-green/50 transition-all duration-500">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2">Curriculum Vitae</h3>
                <p className="text-mw-lightgray">Téléchargez mon CV complet pour voir l'ensemble de mes compétences et expériences.</p>
              </div>
              
              <div className="text-center">
                <a 
                  href="#" 
                  className="mw-button-primary inline-flex items-center justify-center"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Fonctionnalité de téléchargement à venir - ajoutez votre PDF de CV ici");
                  }}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Télécharger mon CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
