
import { useEffect, useState } from 'react';
import { Award, Star, Check, Calendar, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';
import CodeCracker from './ui/CodeCracker';

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveringCardIndex, setHoveringCardIndex] = useState<number | null>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('achievements');
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
  
  const achievements = [
    {
      icon: <Trophy className="w-6 h-6 text-mw-green" />,
      year: "2024-2025",
      title: "Bachelor A.I.S.",
      description: "Awaiting results..., Institution Beaupeyrat",
      code: "MISSION_STATUS: PENDING"
    },
    {
      icon: <Award className="w-6 h-6 text-mw-green" />,
      year: "2023-2024",
      title: "D.E.C. Techniques de l'informatique",
      description: "Network channel, 80% success rate, Cégep of La Pocatière, Québec",
      code: "INTEL_LEVEL: ADVANCED"
    },
    {
      icon: <Star className="w-6 h-6 text-mw-green" />,
      year: "2021-2023",
      title: "B.T.S. S.I.O.",
      description: "Option S.I.S.R., 15,88/20, Institution Beaupeyrat",
      code: "CLEARANCE_LEVEL: HIGH"
    },
    {
      icon: <Calendar className="w-6 h-6 text-mw-green" />,
      year: "2019-2021",
      title: "Bac S.T.I.2.D.",
      description: "Option S.I.N., Mention 'Assez Bien', 13,66/20, Lycée Raoul Dautry",
      code: "FIELD_OPERATIVE: CONFIRMED"
    },
  ];
  
  const certifications = [
    "PIX",
    "C.N.I.L.",
    "A.N.S.S.I.",
    "C.C.N.A 2 & 3",
    "Cisco IoT Fundamentals",
    "Cisco Cybersecurity Fundamentals"
  ];
  
  const ongoingEducation = [
    "TypeScript Codecademy course",
    "TypeScript OpenClassroom course",
    "Tailwind CSS Coursera course",
    "T.O.E.I.C."
  ];
  
  return (
    <section id="achievements" className="relative py-24 bg-mw-darker">
      <div className="absolute inset-0 mw-grid-pattern opacity-20"></div>
      
      <div className="mw-container relative z-10">
        <div 
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 transition-all duration-700 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          )}
        >
          <span className="mw-badge mb-4">
            <Award className="w-3 h-3 mr-1" />
            RECOGNITION
          </span>
          <h2 className="mw-section-title text-white">Training Accomplishments</h2>
          <p className="mt-4">
            Diplomas and skills recognition earned throughout my career.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div 
            className={cn(
              "lg:col-span-2 transition-all duration-700 ease-out transform",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            )}
          >
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  onMouseEnter={() => setHoveringCardIndex(index)}
                  onMouseLeave={() => setHoveringCardIndex(null)}
                  className={cn(
                    "mw-card flex p-5 transition-all duration-500 ease-out transform hover:shadow-lg hover:shadow-mw-green/30 hover:-translate-y-2 hover:border-mw-green/50 relative overflow-hidden group",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                    isVisible && { 'delay-150': index === 0, 'delay-300': index === 1, 'delay-450': index === 2, 'delay-600': index === 3 }
                  )}
                >
                  {/* Background scanlines effect on hover */}
                  <div className="absolute inset-0 bg-repeat opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    style={{
                      backgroundImage: "linear-gradient(0deg, transparent 24%, rgba(63, 153, 135, 0.5) 25%, rgba(63, 153, 135, 0.5) 26%, transparent 27%, transparent 74%, rgba(63, 153, 135, 0.5) 75%, rgba(63, 153, 135, 0.5) 76%, transparent 77%, transparent)",
                      backgroundSize: "4px 4px"
                    }}>
                  </div>
                  
                  {/* Secret code that appears on hover */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-mw-green text-xs">
                    <CodeCracker
                      text={achievement.code}
                      isDecoding={hoveringCardIndex === index}
                    />
                  </div>
                  
                  <div className="p-3 bg-mw-green bg-opacity-10 rounded-sm self-start mr-4 group-hover:bg-opacity-30 transition-all duration-300 relative z-10">
                    {achievement.icon}
                  </div>
                  <div className="relative z-10">
                    <div className="text-xs text-mw-green font-medium uppercase tracking-wider mb-1">
                      <CodeCracker 
                        text={achievement.year}
                        isDecoding={hoveringCardIndex === index}
                      />
                    </div>
                    <h3 className="text-lg font-tactical font-medium text-white mb-2">
                      {hoveringCardIndex === index ? (
                        <CodeCracker 
                          text={achievement.title}
                          isDecoding={true}
                        />
                      ) : achievement.title}
                    </h3>
                    <p className="text-sm text-mw-light">{achievement.description}</p>
                  </div>
                  
                  {/* Radar ping effect on hover */}
                  <div className={cn(
                    "absolute -inset-px rounded-sm opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden",
                    hoveringCardIndex === index ? "after:animate-radar-scan" : ""
                  )}>
                    <div className="absolute inset-0 rounded-sm overflow-hidden">
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[1px] bg-gradient-to-r from-transparent via-mw-green to-transparent origin-center"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
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
        </div>
      </div>
    </section>
  );
};

export default Achievements;
