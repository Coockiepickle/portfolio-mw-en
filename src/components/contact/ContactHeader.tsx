
import { cn } from '@/lib/utils';
import { Mail } from 'lucide-react';

interface ContactHeaderProps {
  isVisible: boolean;
}

const ContactHeader = ({ isVisible }: ContactHeaderProps) => {
  return (
    <div className={cn(
      "text-center max-w-3xl mx-auto mb-16 transition-all duration-700 transform", 
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
    )}>
      <div className="flex flex-col items-center">
        <span className="mw-badge mb-4">
          <Mail className="w-3 h-3 mr-1" />
          GETTING IN TOUCH
        </span>
        <h2 className="mw-section-title text-white">Communication</h2>
      </div>
    </div>
  );
};

export default ContactHeader;
