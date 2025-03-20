import { useEffect, useState } from 'react';
import { Award } from 'lucide-react';
import { cn } from '@/lib/utils';
import AchievementsList from './achievements/AchievementsList';
import CertificationsPanel from './achievements/CertificationsPanel';
import { achievements, certifications, ongoingEducation } from './achievements/achievementsData';
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
  return <section id="achievements" className="relative py-16 bg-mw-darker">
      <div className="absolute inset-0 mw-grid-pattern opacity-20"></div>
      
      <div className="mw-container relative z-10">
        <div className={cn("text-center max-w-3xl mx-auto mb-16 transition-all duration-700 transform", isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8")}>
          <span className="mw-badge mb-4">
            <Award className="w-3 h-3 mr-1" />
            RECOGNITION
          </span>
          <h2 className="mw-section-title text-white">Training Accomplishments</h2>
          <p className="mt-4">Diplomas and skills recognition earned throughout my career</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <AchievementsList achievements={achievements} isVisible={isVisible} />
          
          <CertificationsPanel certifications={certifications} ongoingEducation={ongoingEducation} isVisible={isVisible} />
        </div>
      </div>
    </section>;
};
export default Achievements;