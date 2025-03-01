
import { useEffect, useState } from 'react';
import { Award, Star, Check, Calendar, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);
  
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
      description: "En attente de résultat..., Institution Beaupeyrat",
    },
    {
      icon: <Award className="w-6 h-6 text-mw-green" />,
      year: "2023-2024",
      title: "D.E.C. Techniques de l'informatique",
      description: "Profil Réseau, Moyenne de 80% de réussite, Cégep de La Pocatière, Québec",
    },
    {
      icon: <Star className="w-6 h-6 text-mw-green" />,
      year: "2021-2023",
      title: "B.T.S. S.I.O.",
      description: "Option S.I.S.R., 15,88/20, Institution Beaupeyrat",
    },
    {
      icon: <Calendar className="w-6 h-6 text-mw-green" />,
      year: "2019-2021",
      title: "Bac S.T.I.2.D.",
      description: "Option S.I.N., Mention 'Assez Bien', 13,66/20, Lycée Raoul Dautry",
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
    "Currently pursuing advanced development methodologies",
    "TypeScript Codecademy & OpenClassroom courses",
    "Tailwind CSS Coursera course"
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
                  className={cn(
                    "mw-card flex p-5 transition-all duration-700 ease-out transform",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                    isVisible && { 'delay-150': index === 0, 'delay-300': index === 1, 'delay-450': index === 2, 'delay-600': index === 3 }
                  )}
                >
                  <div className="p-3 bg-mw-green bg-opacity-10 rounded-sm self-start mr-4">
                    {achievement.icon}
                  </div>
                  <div>
                    <div className="text-xs text-mw-green font-medium uppercase tracking-wider mb-1">
                      {achievement.year}
                    </div>
                    <h3 className="text-lg font-medium text-white mb-2">{achievement.title}</h3>
                    <p className="text-sm text-mw-light">{achievement.description}</p>
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
            <div className="mw-card p-6">
              <h3 className="text-lg font-medium text-white mb-6 pb-2 border-b border-mw-green border-opacity-20">
                Certifications
              </h3>
              
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li 
                    key={index} 
                    className={cn(
                      "flex items-start transition-all duration-700 ease-out transform",
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                      isVisible && { 'delay-150': index === 0, 'delay-300': index === 1, 'delay-450': index === 2, 'delay-600': index === 3 }
                    )}
                  >
                    <Check className="w-5 h-5 text-mw-green mr-2 shrink-0" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
              
              <div 
                className={cn(
                  "mt-8 pt-6 border-t border-mw-green border-opacity-20 transition-all duration-700 delay-750 ease-out transform",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
              >
                <div className="text-center">
                  <h4 className="text-white mb-2">Continuous Improvement</h4>
                  <ul className="space-y-2">
                    {ongoingEducation.map((item, index) => (
                      <li key={index} className="text-sm">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
