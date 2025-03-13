
import { cn } from '@/lib/utils';
import { useEffect, useRef } from 'react';

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
  
  useEffect(() => {
    if (visible && barRef.current) {
      // Add a subtle pulse animation when the value changes
      barRef.current.classList.add('pulse-once');
      const timer = setTimeout(() => {
        if (barRef.current) {
          barRef.current.classList.remove('pulse-once');
        }
      }, 750);
      
      return () => clearTimeout(timer);
    }
  }, [level, visible]);
  
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-tactical font-medium">{skill.name}</span>
        <span className="text-xs text-mw-green font-tactical font-medium transition-all duration-300">
          {level}%
        </span>
      </div>
      <div className="progress-bar relative overflow-hidden">
        <div 
          ref={barRef}
          className="progress-bar-fill scanning-light-container transition-all duration-700 ease-out relative" 
          style={{
            width: visible ? `${level}%` : '0%'
          }}
        >
          {/* Add a scanning light effect along the bar */}
          <div className="scanning-light absolute top-0 right-0 w-8 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0"></div>
        </div>
      </div>
      
      <style>
        {`
        @keyframes pulse-once {
          0% { box-shadow: 0 0 0 0 rgba(63, 153, 135, 0.5); }
          70% { box-shadow: 0 0 0 4px rgba(63, 153, 135, 0); }
          100% { box-shadow: 0 0 0 0 rgba(63, 153, 135, 0); }
        }
        
        .pulse-once {
          animation: pulse-once 0.75s ease-out;
        }
        
        @keyframes scanning {
          0% { opacity: 0; transform: translateX(-100%); }
          50% { opacity: 0.3; }
          100% { opacity: 0; transform: translateX(100%); }
        }
        
        .scanning-light {
          animation: scanning 2s ease-in-out infinite;
        }
        `}
      </style>
    </div>
  );
};

export default SkillBar;
