
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';
import SkillBar from './SkillBar';
import SkillDetailsModal from './SkillDetailsModal';
import { ReactNode } from 'react'; // Add this import for ReactNode

interface Skill {
  name: string;
  level: number;
}

interface SkillCategoryProps {
  icon: ReactNode;
  title: string;
  skills: Skill[];
  visible: boolean;
  index: number;
  animationComplete: boolean;
  onMouseEnter: (index: number) => void;
  onMouseLeave: () => void;
  getSkillLevel: (catIndex: number, skillIndex: number, skill: Skill) => number;
}

const SkillCategory = ({
  icon,
  title,
  skills,
  visible,
  index,
  animationComplete,
  onMouseEnter,
  onMouseLeave,
  getSkillLevel
}: SkillCategoryProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleMouseEnter = () => {
    setIsHovering(true);
    onMouseEnter(index);
  };
  
  const handleMouseLeave = () => {
    setIsHovering(false);
    onMouseLeave();
  };

  const handleCardClick = () => {
    setIsModalOpen(true);
  };
  
  return (
    <>
      <div 
        className={cn(
          "mw-card p-6 transition-all duration-300 ease-out transform hover:scale-[1.02] hover:shadow-lg hover:shadow-mw-green/20 cursor-pointer relative overflow-hidden",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16", 
          visible && {
            'delay-150': index === 0,
            'delay-300': index === 1,
            'delay-450': index === 2,
            'delay-600': index === 3,
            'delay-750': index === 4
          }
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleCardClick}
      >
        <div className={cn(
          "absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none",
          isHovering ? "opacity-10" : ""
        )}>
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-mw-green to-transparent">
            <div className={cn(
              "absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-transparent via-mw-green to-transparent",
              isHovering ? "animate-[scan_2s_ease-in-out_infinite_alternate]" : ""
            )}></div>
          </div>
        </div>
        
        <div className="flex items-center mb-6 relative z-10">
          <div className={cn(
            "p-2 bg-mw-green bg-opacity-10 rounded-sm mr-3 transition-all duration-300",
            isHovering ? "bg-opacity-30" : ""
          )}>
            {icon}
          </div>
          <h3 className="text-lg font-medium text-white flex items-center gap-2">
            {title}
            <ExternalLink 
              className="w-4 h-4 text-mw-green/50 group-hover:text-mw-green transition-colors" 
              strokeWidth={1.5} 
            />
          </h3>
        </div>
        
        <div className="space-y-4 relative z-10">
          {skills.map((skill, skillIndex) => (
            <SkillBar 
              key={skillIndex}
              skill={skill}
              visible={visible}
              level={getSkillLevel(index, skillIndex, skill)}
            />
          ))}
        </div>
        
        <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
          <div className={cn(
            "absolute top-0 right-0 w-16 h-16 bg-mw-green bg-opacity-10 transform rotate-45 translate-x-8 -translate-y-8",
            isHovering ? "bg-opacity-20" : ""
          )}></div>
        </div>
        
        <div className={cn(
          "absolute top-0 left-0 w-3 h-3 border-t border-l border-mw-green/0 transition-all duration-300",
          isHovering ? "border-mw-green/50 -translate-x-0.5 -translate-y-0.5" : ""
        )}></div>
        <div className={cn(
          "absolute top-0 right-0 w-3 h-3 border-t border-r border-mw-green/0 transition-all duration-300",
          isHovering ? "border-mw-green/50 translate-x-0.5 -translate-y-0.5" : ""
        )}></div>
        <div className={cn(
          "absolute bottom-0 left-0 w-3 h-3 border-b border-l border-mw-green/0 transition-all duration-300",
          isHovering ? "border-mw-green/50 -translate-x-0.5 translate-y-0.5" : ""
        )}></div>
        <div className={cn(
          "absolute bottom-0 right-0 w-3 h-3 border-b border-r border-mw-green/0 transition-all duration-300",
          isHovering ? "border-mw-green/50 translate-x-0.5 translate-y-0.5" : ""
        )}></div>
      </div>

      <SkillDetailsModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        category={title}
        icon={icon}
        skills={skills}
      />
    </>
  );
};

export default SkillCategory;
