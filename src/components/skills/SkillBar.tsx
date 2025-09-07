
import { memo } from 'react';
import { cn } from '@/lib/utils';

interface SkillBarProps {
  skill: {
    name: string;
    level: number;
  };
  visible: boolean;
  level: number;
}

const SkillBar = memo(({ skill, visible, level }: SkillBarProps) => {
  
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-tactical font-medium">{skill.name}</span>
        <span className="text-xs text-mw-green font-tactical font-medium">
          {skill.level}%
        </span>
      </div>
      <div className="progress-bar relative overflow-hidden">
        <div 
          className="progress-bar-fill scanning-light-container relative" 
          style={{
            width: `${skill.level}%`
          }}
        >
          {/* Add a scanning light effect along the bar */}
          <div className="scanning-light absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0"></div>
        </div>
      </div>
      
      <style>
        {`
        @keyframes scanning {
          0% { opacity: 0; transform: translateX(-100%); }
          50% { opacity: 0.3; }
          100% { opacity: 0; transform: translateX(100%); }
        }
        
        .scanning-light {
          animation: scanning 2s ease-in-out infinite;
          width: 100%;
        }
        `}
      </style>
    </div>
  );
});

export default SkillBar;
