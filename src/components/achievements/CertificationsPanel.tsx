
import { Check, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CertificationsPanelProps {
  certifications: string[];
  ongoingEducation: string[];
  isVisible: boolean;
}

const CertificationsPanel = ({
  certifications,
  ongoingEducation,
  isVisible
}: CertificationsPanelProps) => {
  return (
    <div 
      className={cn(
        "transition-all duration-700 ease-out transform",
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
      )}
    >
      <div className="mw-card p-6 hover:shadow-lg hover:shadow-mw-green/30 hover:-translate-y-2 hover:border-mw-green/50 transition-all duration-500 group relative overflow-hidden">
        {/* Background tactical grid on hover */}
        <div className="absolute inset-0 bg-tactical-grid opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        
        <h3 className="text-lg font-medium text-white mb-6 pb-2 border-b border-mw-green border-opacity-20 relative z-10">
          Certifications
        </h3>
        <ul className="space-y-4 relative z-10">
          {certifications.map((cert, index) => (
            <li 
              key={index} 
              className={cn(
                "flex items-start transition-all duration-700 ease-out transform hover:translate-x-1 group/item",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                isVisible && { 'delay-150': index === 0, 'delay-300': index === 1, 'delay-450': index === 2, 'delay-600': index === 3 }
              )}
            >
              <Check className="w-5 h-5 text-mw-green mr-2 shrink-0 group-hover/item:animate-pulse-light" />
              <span className="group-hover/item:text-white transition-colors duration-300">{cert}</span>
            </li>
          ))}
        </ul>
        
        <div 
          className={cn(
            "mt-8 pt-6 border-t border-mw-green border-opacity-20 transition-all duration-700 delay-750 ease-out transform relative z-10",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <div className="text-center">
            <h4 className="text-white mb-2 font-tactical">Continuous Improvement</h4>
            <ul className="space-y-2">
              {ongoingEducation.map((item, index) => (
                <li 
                  key={index} 
                  className={cn(
                    "flex items-start text-sm transition-all duration-700 ease-out transform hover:translate-x-1 group/item",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                    isVisible && { 'delay-150': index === 0, 'delay-300': index === 1, 'delay-450': index === 2 }
                  )}
                >
                  <Star className="w-5 h-5 text-mw-green mr-2 shrink-0 group-hover/item:animate-tactical-blink" />
                  <span className="group-hover/item:text-white transition-colors duration-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Corner tactical border effect */}
        <div className="tactical-border absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default CertificationsPanel;
