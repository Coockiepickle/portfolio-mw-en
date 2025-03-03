
import { useEffect, useState } from 'react';
import { Mail, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';

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
        
        {/* Single Unified Contact Card */}
        <div className={cn("transition-all duration-700 ease-out transform", isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-y-8")}>
          <Card className="bg-mw-gray border border-mw-green border-opacity-20 hover:shadow-xl hover:shadow-mw-green/30 hover:-translate-y-2 hover:border-mw-green/50 transition-all duration-500">
            <CardHeader className="pb-4">
              <CardTitle className="text-white text-xl">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-8">
              {/* Left Section (Contact Information) */}
              <div className="space-y-6">
                <div className={cn("transition-all duration-700 ease-out transform", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
                  <h3 className="text-white text-lg mb-4 pb-2 border-b border-mw-green border-opacity-20">Contact Information</h3>
                  {contactInfo.map((item, index) => (
                    <div 
                      key={index} 
                      className={cn(
                        "flex items-start transition-all duration-700 ease-out transform hover:translate-x-1 mb-6", 
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
                
                <div className={cn("transition-all duration-700 ease-out transform", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4", "delay-400")}>
                  <h4 className="text-sm font-medium uppercase tracking-wider mb-4 pb-2 border-b border-mw-green border-opacity-20 w-full">
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
              
              {/* Right Section (Send A Message) */}
              <div className={cn("space-y-6 transition-all duration-700 ease-out transform", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4", "delay-300")}>
                <h3 className="text-white text-lg mb-4 pb-2 border-b border-mw-green border-opacity-20">Send a Message</h3>
                <p className="text-mw-lightgray mb-6">I'm always open to discussing new projects, opportunities, or how we can work together.</p>
                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-mw-darker rounded-sm border border-mw-green border-opacity-10">
                    <Send className="w-4 h-4 text-mw-green mr-2" />
                    <p className="text-white">Send an email to initiate a conversation</p>
                  </div>
                  <div className="p-4 border border-dashed border-mw-green border-opacity-30 rounded-sm bg-mw-darker bg-opacity-50 text-center">
                    <p className="text-mw-green font-medium">contact.country946@passmail.com</p>
                    <p className="text-mw-lightgray text-sm mt-2">Responses typically within 24-48 hours</p>
                  </div>
                  <div className="mt-8">
                    <div className="flex items-center justify-between">
                      <div className="h-0.5 bg-mw-green bg-opacity-10 w-1/3"></div>
                      <p className="text-mw-lightgray px-4 text-sm">OR</p>
                      <div className="h-0.5 bg-mw-green bg-opacity-10 w-1/3"></div>
                    </div>
                    <div className="mt-4 text-center">
                      <a 
                        href="https://linkedin.com/in/dreynaud" 
                        className="inline-flex items-center justify-center px-4 py-2 bg-mw-green bg-opacity-10 hover:bg-opacity-20 border border-mw-green border-opacity-20 rounded-sm text-mw-green transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md hover:shadow-mw-green/30"
                      >
                        <Linkedin className="w-4 h-4 mr-2" />
                        Connect on LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-4 flex-col items-start">
              <div className="w-full text-center mt-2">
                <p className="text-sm text-mw-lightgray italic">Looking forward to connecting with you!</p>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
