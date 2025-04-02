
import { Check, Star, Award } from 'lucide-react';
import { cn } from '@/lib/utils';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader,
  DialogTitle,
  DialogTrigger 
} from '@/components/ui/dialog';

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
      <Dialog>
        <DialogTrigger asChild>
          <button className="mw-card p-6 hover:shadow-lg hover:shadow-mw-green/30 hover:-translate-y-2 hover:border-mw-green/50 transition-all duration-500 group relative overflow-hidden w-full text-left">
            {/* Background tactical grid on hover */}
            <div className="absolute inset-0 bg-tactical-grid opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            
            <h3 className="text-lg font-medium text-white mb-6 pb-2 border-b border-mw-green border-opacity-20 relative z-10 flex items-center">
              <Award className="w-5 h-5 mr-2 text-mw-green" />
              Certifications
            </h3>
            
            <div className="text-sm text-mw-light">
              <span className="flex items-center mb-2">
                <Check className="w-4 h-4 text-mw-green mr-2 shrink-0" />
                {certifications[0]}
              </span>
              <p className="text-mw-lightgray mt-2">Click to view all certifications and ongoing education...</p>
            </div>
            
            {/* Corner tactical border effect */}
            <div className="tactical-border absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <span></span>
            </div>
          </button>
        </DialogTrigger>
        
        <DialogContent className="bg-mw-gray border-mw-green/30 text-mw-light max-w-md w-[90vw] relative overflow-hidden">
          {/* Background tactical grid */}
          <div className="absolute inset-0 bg-tactical-grid opacity-10"></div>
          
          <DialogHeader>
            <DialogTitle className="text-xl font-medium text-white border-b border-mw-green/20 pb-2 relative z-10">
              Certifications & Ongoing Education
            </DialogTitle>
          </DialogHeader>
          
          <div className="relative z-10">
            <h4 className="text-lg font-medium text-white mt-4 mb-3">Certifications</h4>
            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li 
                  key={index} 
                  className="flex items-start group/item"
                >
                  <Check className="w-5 h-5 text-mw-green mr-2 shrink-0 group-hover/item:animate-pulse-light" />
                  <span className="group-hover/item:text-white transition-colors duration-300">{cert}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 pt-4 border-t border-mw-green/20">
              <h4 className="text-lg font-medium text-white mb-3">Continuous Improvement</h4>
              <ul className="space-y-3">
                {ongoingEducation.map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-start group/item"
                  >
                    <Star className="w-5 h-5 text-mw-green mr-2 shrink-0 group-hover/item:animate-tactical-blink" />
                    <span className="group-hover/item:text-white transition-colors duration-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Corner tactical border effect */}
          <div className="tactical-border absolute inset-0 opacity-70">
            <span></span>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CertificationsPanel;
