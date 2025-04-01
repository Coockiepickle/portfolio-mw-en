
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

  return (
    <div id="achievements" className="relative py-16 px-2">
      <div className={cn("text-center mb-12 transition-all duration-700 transform", isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8")}>
        <span className="mw-badge mb-4">
          <Award className="w-3 h-3 mr-1" />
          RECOGNITION
        </span>
        <h2 className="mw-section-title text-white">Training Accomplishments</h2>
      </div>
      
      <div className="space-y-6">
        <AchievementsList achievements={achievements} isVisible={isVisible} />
        
        <CertificationsPanel certifications={certifications} ongoingEducation={ongoingEducation} isVisible={isVisible} />
      </div>
    </div>
  );
};

export default Achievements;
