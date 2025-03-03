import { useEffect, useState } from 'react';
import { Mail, MapPin, Linkedin, Github, Send, Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('contact');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyToClipboard = () => {
    const email = 'contact-dreynaud.circular585@passmail.com';
    navigator.clipboard.writeText(email)
      .then(() => {
        setIsCopied(true);
        toast({
          title: "Copied!",
          description: "Email address copied to clipboard",
        });
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => {
        toast({
          title: "Failed to copy",
          description: "Please try again or copy manually",
          variant: "destructive",
        });
        console.error('Failed to copy: ', err);
      });
  };
  
  return <section id="contact" className="relative py-24">
      <div className="absolute inset-0 mw-grid-pattern opacity-30"></div>
      
      <div className="mw-container relative z-10">
        <div className={cn("text-center max-w-3xl mx-auto mb-16 transition-all duration-700 transform", isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8")}>
          <div className="flex flex-col items-center">
            <span className="mw-badge mb-4">
              <Mail className="w-3 h-3 mr-1" />
              GET IN TOUCH
            </span>
            <h2 className="mw-section-title text-white">Communication</h2>
          </div>
          <p className="mt-4">
            Have a project in mind? Want me to be a part of your company? Contact me to discuss how we can work together
            to achieve your objectives.
          </p>
        </div>
        
        {/* Skills-style contact card */}
        <div className={cn("mw-card p-6 transition-all duration-500 ease-out transform hover:shadow-lg hover:shadow-mw-green/20 hover:-translate-y-2 hover:border-mw-green/50", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16", isVisible && 'delay-150')}>
          <div className="flex items-center mb-6">
            <div className="p-2 bg-mw-green bg-opacity-10 rounded-sm mr-3 group-hover:bg-opacity-30 transition-all duration-300">
              <Send className="w-6 h-6 text-mw-green" />
            </div>
            <h3 className="text-lg font-medium text-white">Get in Touch</h3>
          </div>
          
          <div className="space-y-4">
            {/* Contact Message */}
            <div>
              <p className="text-mw-lightgray mb-6">Have a project in mind? Want me to be a part of your company? Just send me an e-mail and I'll answer as fast as possible.</p>
              
              <div className="p-4 border border-dashed border-mw-green border-opacity-30 rounded-sm bg-mw-darker bg-opacity-50 mb-6">
                <div className="flex items-center justify-center">
                  <a href="mailto:contact-dreynaud.circular585@passmail.com" className="text-mw-green font-medium hover:underline transition-all">
                    contact-dreynaud.circular585@passmail.com
                  </a>
                  <button 
                    onClick={copyToClipboard}
                    className="ml-2 p-1.5 bg-mw-green bg-opacity-10 hover:bg-opacity-20 rounded-sm transition-all duration-300 text-mw-green"
                    aria-label="Copy email to clipboard"
                  >
                    {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <p className="text-mw-lightgray text-sm mt-2 text-center">
                  This e-mail address is a redirection to my real e-mail address,<br />
                  and I'll send it to you once I'm sure of your identity.
                </p>
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="h-0.5 bg-mw-green bg-opacity-10 w-1/3"></div>
                <p className="text-mw-lightgray px-4 text-sm">OR CONNECT WITH ME</p>
                <div className="h-0.5 bg-mw-green bg-opacity-10 w-1/3"></div>
              </div>
              <div className="flex justify-center space-x-4">
                <a href="https://github.com/Coockiepickle" className="inline-flex items-center justify-center px-4 py-2 bg-mw-green bg-opacity-10 hover:bg-opacity-20 border border-mw-green border-opacity-20 rounded-sm text-mw-green transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md hover:shadow-mw-green/30">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
                <a href="https://linkedin.com/in/dreynaud" className="inline-flex items-center justify-center px-4 py-2 bg-mw-green bg-opacity-10 hover:bg-opacity-20 border border-mw-green border-opacity-20 rounded-sm text-mw-green transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md hover:shadow-mw-green/30">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          
          {/* Skill card corner style */}
          <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-mw-green bg-opacity-10 transform rotate-45 translate-x-8 -translate-y-8"></div>
          </div>
          
          {/* Skill card border animation */}
          <div className="absolute top-0 left-0 w-16 h-px group-hover:w-full transition-all duration-500 bg-mw-green"></div>
          <div className="absolute top-0 left-0 w-px h-16 group-hover:h-full transition-all duration-500 bg-mw-green"></div>
        </div>
      </div>
    </section>;
};
export default Contact;
