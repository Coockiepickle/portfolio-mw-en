
import { useEffect, useState } from 'react';
import { Mail, MapPin, Linkedin, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

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

  const contactInfo = [{
    icon: <Mail className="w-5 h-5 text-mw-green" />,
    label: "Email",
    value: "contact.country946@passmail.com"
  },
  {
    icon: <MapPin className="w-5 h-5 text-mw-green" />,
    label: "Location",
    value: "Nouvelle-Aquitaine, France"
  }];
  
  const socialLinks = [{
    icon: <Github className="w-5 h-5" />,
    url: "https://github.com/Coockiepickle",
    label: "GitHub"
  }, {
    icon: <Linkedin className="w-5 h-5" />,
    url: "https://linkedin.com/in/dreynaud",
    label: "LinkedIn"
  }];

  return (
    <section id="contact" className="relative py-24">
      <div className="mw-container relative z-10">
        <div className={cn("text-center max-w-3xl mx-auto mb-16 transition-all duration-700 transform", isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8")}>
          <span className="mw-badge mb-4">
            <Mail className="w-3 h-3 mr-1" />
            GET IN TOUCH
          </span>
          <h2 className="mw-section-title text-white">Communication</h2>
          <p className="mt-4">
            Have a project in mind? Want me to be a part of your company? Contact me to discuss how we can work together
            to achieve your objectives.
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className={cn("max-w-lg w-full transition-all duration-700 ease-out transform", isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8")}>
            <div className="mw-card p-6 h-full flex flex-col hover:shadow-xl hover:shadow-mw-green/30 hover:-translate-y-2 hover:border-mw-green/50 transition-all duration-500">
              <h3 className="text-lg font-medium text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index} 
                    className={cn(
                      "flex items-start transition-all duration-700 ease-out transform hover:translate-x-1", 
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4", 
                      isVisible && {
                        "delay-150": index === 0,
                        "delay-300": index === 1
                      }
                    )}
                  >
                    <div className="p-2 bg-mw-green bg-opacity-10 rounded-sm mr-3 hover:bg-opacity-30 transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-mw-lightgray">{item.label}</p>
                      <p className="text-white">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-auto">
                <h4 className="text-sm font-medium uppercase tracking-wider mb-4 pb-2 border-b border-mw-green border-opacity-20">
                  Connect With Me
                </h4>
                
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index} 
                      href={social.url} 
                      className={cn(
                        "p-3 bg-mw-darker hover:bg-mw-green hover:bg-opacity-20 border border-mw-green border-opacity-20 rounded-sm text-mw-light hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md hover:shadow-mw-green/30", 
                        "transition-all duration-700 ease-out transform", 
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4", 
                        isVisible && {
                          "delay-600": index === 0,
                          "delay-700": index === 1
                        }
                      )} 
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
