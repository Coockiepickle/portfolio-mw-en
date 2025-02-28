
import { useEffect, useState } from 'react';
import { Send, Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
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
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({ name: '', email: '', message: '' });
      
      // Reset success message after a delay
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  const contactInfo = [
    { icon: <Mail className="w-5 h-5 text-mw-green" />, label: "Email", value: "contact@modernwarrior.dev" },
    { icon: <Phone className="w-5 h-5 text-mw-green" />, label: "Phone", value: "+1 (555) 123-4567" },
    { icon: <MapPin className="w-5 h-5 text-mw-green" />, label: "Location", value: "San Francisco, CA" },
  ];
  
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, url: "#", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, url: "#", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, url: "#", label: "Twitter" },
  ];
  
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 mw-grid-pattern opacity-30"></div>
      
      <div className="mw-container relative z-10">
        <div 
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 transition-all duration-700 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          )}
        >
          <span className="mw-badge mb-4">
            <Send className="w-3 h-3 mr-1" />
            GET IN TOUCH
          </span>
          <h2 className="mw-section-title text-white">Mission Communication</h2>
          <p className="mt-4">
            Have a mission or project in mind? Contact me to discuss how we can work together
            to achieve your objectives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div 
            className={cn(
              "lg:col-span-3 transition-all duration-700 ease-out transform",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            )}
          >
            <div className="mw-card p-6">
              <h3 className="text-lg font-medium text-white mb-6">Send a Message</h3>
              
              {submitSuccess ? (
                <div className="p-4 border border-mw-green bg-mw-green bg-opacity-10 text-center">
                  <p className="text-white mb-2">Message sent successfully!</p>
                  <p className="text-sm">I'll respond to your transmission as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name <span className="text-mw-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 bg-mw-darker border border-mw-green border-opacity-20 rounded-sm text-white focus:outline-none focus:border-mw-green focus:ring-1 focus:ring-mw-green"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email <span className="text-mw-accent">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 bg-mw-darker border border-mw-green border-opacity-20 rounded-sm text-white focus:outline-none focus:border-mw-green focus:ring-1 focus:ring-mw-green"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message <span className="text-mw-accent">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full p-3 bg-mw-darker border border-mw-green border-opacity-20 rounded-sm text-white focus:outline-none focus:border-mw-green focus:ring-1 focus:ring-mw-green"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={cn(
                        "mw-button-primary w-full py-3 flex justify-center items-center",
                        isSubmitting && "opacity-70 cursor-not-allowed"
                      )}
                    >
                      {isSubmitting ? (
                        <>Processing...</>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
          
          <div 
            className={cn(
              "lg:col-span-2 transition-all duration-700 ease-out transform",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}
          >
            <div className="mw-card p-6 h-full flex flex-col">
              <h3 className="text-lg font-medium text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index} 
                    className={cn(
                      "flex items-start transition-all duration-700 ease-out transform",
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                      isVisible && { "delay-150": index === 0, "delay-300": index === 1, "delay-450": index === 2 }
                    )}
                  >
                    <div className="p-2 bg-mw-green bg-opacity-10 rounded-sm mr-3">
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
                        "p-3 bg-mw-darker hover:bg-mw-green hover:bg-opacity-20 border border-mw-green border-opacity-20 rounded-sm text-mw-light hover:text-white transition-all duration-300 transform hover:-translate-y-1",
                        "transition-all duration-700 ease-out transform",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                        isVisible && { "delay-600": index === 0, "delay-700": index === 1, "delay-800": index === 2 }
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
