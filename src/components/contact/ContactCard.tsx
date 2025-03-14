
import { cn } from '@/lib/utils';
import { Send } from 'lucide-react';
import EmailSection from './EmailSection';
import SocialLinks from './SocialLinks';

interface ContactCardProps {
  isVisible: boolean;
}

const ContactCard = ({ isVisible }: ContactCardProps) => {
  return (
    <div className={cn(
      "mw-card p-6 max-w-2xl mx-auto transition-all duration-500 ease-out transform hover:shadow-lg hover:shadow-mw-green/20 hover:-translate-y-2 hover:border-mw-green/50", 
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16", 
      isVisible && 'delay-150'
    )}>
      <div className="flex items-center mb-6">
        <div className="p-2 bg-mw-green bg-opacity-10 rounded-sm mr-3 group-hover:bg-opacity-30 transition-all duration-300">
          <Send className="w-6 h-6 text-mw-green" />
        </div>
        <h3 className="text-lg font-medium text-white">Get in Touch</h3>
      </div>
      
      <div className="space-y-4">
        <EmailSection />
        <SocialLinks />
      </div>
      
      <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-16 h-16 bg-mw-green bg-opacity-10 transform rotate-45 translate-x-8 -translate-y-8"></div>
      </div>
      
      <div className="absolute top-0 left-0 w-16 h-px group-hover:w-full transition-all duration-500 bg-mw-green"></div>
      <div className="absolute top-0 left-0 w-px h-16 group-hover:h-full transition-all duration-500 bg-mw-green"></div>
    </div>
  );
};

export default ContactCard;
