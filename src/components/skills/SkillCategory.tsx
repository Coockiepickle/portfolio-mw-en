import { ReactNode, useState } from 'react';
import { cn } from '@/lib/utils';
import SkillBar from './SkillBar';

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
  return (
    <div 
      className={cn(
        "mw-card p-6 transition-all duration-500 ease-out transform hover:shadow-lg hover:shadow-mw-green/20 hover:-translate-y-2 hover:border-mw-green/50",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16", 
        visible && {
          'delay-150': index === 0,
          'delay-300': index === 1,
          'delay-450': index === 2,
          'delay-600': index === 3,
          'delay-750': index === 4
        }
      )}
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex items-center mb-6">
        <div className="p-2 bg-mw-green bg-opacity-10 rounded-sm mr-3 group-hover:bg-opacity-30 transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-lg font-medium text-white">{title}</h3>
      </div>
      
      <div className="space-y-4">
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
        <div className="absolute top-0 right-0 w-16 h-16 bg-mw-green bg-opacity-10 transform rotate-45 translate-x-8 -translate-y-8"></div>
      </div>
    </div>
  );
};

export default SkillCategory;
