
import { cn } from '@/lib/utils';
import { useRef } from 'react';

interface SkillBarProps {
  skill: {
    name: string;
    level: number;
  };
  visible: boolean;
  level: number;
}

const SkillBar = ({ skill, visible, level }: SkillBarProps) => {
  const barRef = useRef<HTMLDivElement>(null);
  
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-tactical font-medium">{skill.name}</span>
        <span className="text-xs text-mw-green font-tactical font-medium transition-all duration-700">
          {level}%
        </span>
      </div>
      <div className="progress-bar relative h-2 bg-mw-darker rounded-sm overflow-hidden">
        <div 
          ref={barRef}
          className="progress-bar-fill h-full bg-gradient-to-r from-mw-green/70 to-mw-green transition-all duration-1000 ease-out relative rounded-sm" 
          style={{
            width: visible ? `${level}%` : '0%'
          }}
        >
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-mw-green/20 animate-pulse-subtle"></div>
        </div>
      </div>
      
      <style>
        {`
        @keyframes pulse-subtle {
          0% { opacity: 0.5; }
          50% { opacity: 0.7; }
          100% { opacity: 0.5; }
        }
        
        .animate-pulse-subtle {
          animation: pulse-subtle 3s ease-in-out infinite;
        }
        `}
      </style>
    </div>
  );
};

export default SkillBar;
