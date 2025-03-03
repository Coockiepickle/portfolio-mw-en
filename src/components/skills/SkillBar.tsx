
import { cn } from '@/lib/utils';

interface SkillBarProps {
  skill: {
    name: string;
    level: number;
  };
  visible: boolean;
  level: number;
}

const SkillBar = ({ skill, visible, level }: SkillBarProps) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-tactical font-medium">{skill.name}</span>
        <span className="text-xs text-mw-green font-tactical font-medium">
          {level}%
        </span>
      </div>
      <div className="progress-bar">
        <div 
          className="progress-bar-fill transition-all duration-700 ease-out" 
          style={{
            width: visible ? `${level}%` : '0%'
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
