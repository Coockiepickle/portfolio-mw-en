
import { useState } from 'react';
import { cn } from '@/lib/utils';
import AchievementItem from './AchievementItem';
import { Achievement } from './achievementsData';

interface AchievementsListProps {
  achievements: Achievement[];
  isVisible: boolean;
}

const AchievementsList = ({ achievements, isVisible }: AchievementsListProps) => {
  const [hoveringCardIndex, setHoveringCardIndex] = useState<number | null>(null);

  return (
    <div 
      className={cn(
        "lg:col-span-2 transition-all duration-700 ease-out transform",
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
      )}
    >
      <div className="space-y-6">
        {achievements.map((achievement, index) => (
          <AchievementItem
            key={index}
            icon={achievement.icon}
            year={achievement.year}
            title={achievement.title}
            description={achievement.description}
            code={achievement.code}
            location={achievement.location}
            isVisible={isVisible}
            index={index}
            isHovering={hoveringCardIndex === index}
            onMouseEnter={() => setHoveringCardIndex(index)}
            onMouseLeave={() => setHoveringCardIndex(null)}
          />
        ))}
      </div>
    </div>
  );
};

export default AchievementsList;
