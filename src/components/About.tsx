import { useEffect, useState } from 'react';
import { User, Shield, Target, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import profileImage from '../assets/images/profile_image.webp';
const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('about');
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
  const stats = [{
    icon: <Clock className="w-5 h-5 text-mw-green mr-2" />,
    value: "4+",
    label: "Years Studied"
  }, {
    icon: <Target className="w-5 h-5 text-mw-green mr-2" />,
    value: "10+",
    label: "Projects Completed"
  }, {
    icon: <Shield className="w-5 h-5 text-mw-green mr-2" />,
    value: "15+",
    label: "Technologies comfortable with"
  }];
  return <section id="about" className="relative py-16 overflow-hidden bg-black">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-mw-darker to-transparent"></div>
      
      <div className="mw-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className={cn("transition-all duration-700 transform", isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8")}>
              <div className="flex flex-col items-start mb-4">
                <span className="mw-badge mb-2">
                  <User className="w-3 h-3 mr-1" />
                  ABOUT ME
                </span>
                <h2 className="mw-section-title text-white mt-2">Strategic Profile</h2>
              </div>
            </div>
            
            <div className={cn("space-y-4 transition-all duration-700 delay-150 transform", isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8")}>
              <p>Networking and Cybersecurity student. I love every aspect of IT. I'm hardworking and serious about everything I do.</p>
              <p>I aim to providing diverse digital solutions with efficiency, reliability and security that exceed all expectations.</p>
              <p>
                When I'm away from my desk, you'll often find me immersed in gaming, pushing my limits through sport or exploring the latest tech trends.
                It's all about keeping my skills sharp and my curiosity alive.
              </p>
            </div>
            
            <div className={cn("mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 transition-all duration-700 delay-300 transform", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
              {stats.map((stat, index) => <div key={index} className="mw-card p-4 text-center hover:shadow-lg hover:shadow-mw-green/30 hover:-translate-y-2 hover:border-mw-green/50 transition-all duration-500">
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-mw-lightgray">{stat.label}</div>
                </div>)}
            </div>
          </div>
          
          <div className={cn("relative transition-all duration-700 delay-450 transform", isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8")}>
            <div className="aspect-square max-w-md mx-auto relative hover:shadow-xl hover:shadow-mw-green/20 transition-all duration-500 hover:-translate-y-2 group">
              <div className="absolute inset-0 border border-mw-green border-opacity-20 p-4 hover:border-opacity-50 transition-all duration-500">
                <div className="relative w-full h-full bg-mw-gray bg-opacity-50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-mw-darker bg-opacity-80">
                    <div className="text-center relative">
                      <div className="relative">
                        <img src={profileImage} alt="Profile Image" className="w-64 h-64 object-cover rounded-md mx-auto mb-4 border border-mw-green/30 z-10 relative" />
                        {/* Corner decorations that move on hover */}
                        <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-mw-green transition-all duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2"></div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-mw-green transition-all duration-300 group-hover:translate-x-2 group-hover:-translate-y-2"></div>
                        <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-mw-green transition-all duration-300 group-hover:-translate-x-2 group-hover:translate-y-2"></div>
                        <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-mw-green transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                      </div>
                      <div className="text-sm uppercase tracking-wider text-mw-light">PROFILE_IMAGE.jpg</div>
                      <div className="mt-2 text-xs text-mw-lightgray">TACTICAL OPERATOR</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t border-l border-mw-green transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t border-r border-mw-green transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b border-l border-mw-green transition-all duration-300 group-hover:-translate-x-1 group-hover:translate-y-1"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b border-r border-mw-green transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
            </div>
            
            <div className="absolute top-4 right-4 w-8 h-8 border border-mw-green border-opacity-40 
              flex items-center justify-center animate-pulse-light">
              <div className="w-2 h-2 bg-mw-green rounded-full"></div>
            </div>
            
            <div className="absolute bottom-4 left-4 h-1 w-16 bg-mw-green bg-opacity-20">
              <div className="h-full w-3/4 bg-mw-green animate-tactical-blink"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;