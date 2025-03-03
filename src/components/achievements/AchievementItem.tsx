
import { ReactNode, useState } from 'react';
import { cn } from '@/lib/utils';
import CodeCracker from '../ui/CodeCracker';

interface AchievementItemProps {
  icon: ReactNode;
  year: string;
  title: string;
  description: string;
  code: string;
  isVisible: boolean;
  index: number;
  isHovering: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const AchievementItem = ({
  icon,
  year,
  title,
  description,
  code,
  isVisible,
  index,
  isHovering,
  onMouseEnter,
  onMouseLeave
}: AchievementItemProps) => {
  return (
    <div 
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cn(
        "mw-card flex p-5 transition-all duration-500 ease-out transform hover:shadow-lg hover:shadow-mw-green/30 hover:-translate-y-2 hover:border-mw-green/50 relative overflow-hidden group",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        isVisible && { 'delay-150': index === 0, 'delay-300': index === 1, 'delay-450': index === 2, 'delay-600': index === 3 }
      )}
    >
      {/* Background scanlines effect on hover */}
      <div className="absolute inset-0 bg-repeat opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        style={{
          backgroundImage: "linear-gradient(0deg, transparent 24%, rgba(63, 153, 135, 0.5) 25%, rgba(63, 153, 135, 0.5) 26%, transparent 27%, transparent 74%, rgba(63, 153, 135, 0.5) 75%, rgba(63, 153, 135, 0.5) 76%, transparent 77%, transparent)",
          backgroundSize: "4px 4px"
        }}>
      </div>
      
      {/* Secret code that appears on hover */}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-mw-green text-xs">
        <CodeCracker
          text={code}
          isDecoding={isHovering}
        />
      </div>
      
      <div className="p-3 bg-mw-green bg-opacity-10 rounded-sm self-start mr-4 group-hover:bg-opacity-30 transition-all duration-300 relative z-10">
        {/* Apply CodeCracker to the icon element */}
        {isHovering ? (
          <div className="animate-tactical-blink">
            {icon}
          </div>
        ) : (
          icon
        )}
      </div>
      <div className="relative z-10">
        <div className="text-xs text-mw-green font-medium uppercase tracking-wider mb-1">
          <CodeCracker 
            text={year}
            isDecoding={isHovering}
          />
        </div>
        <h3 className="text-lg font-tactical font-medium text-white mb-2">
          {isHovering ? (
            <CodeCracker 
              text={title}
              isDecoding={true}
            />
          ) : title}
        </h3>
        <p className="text-sm text-mw-light">
          {/* Apply CodeCracker to the description text */}
          {isHovering ? (
            <CodeCracker 
              text={description}
              isDecoding={true}
            />
          ) : description}
        </p>
      </div>
      
      {/* Radar ping effect on hover */}
      <div className={cn(
        "absolute -inset-px rounded-sm opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden",
        isHovering ? "after:animate-radar-scan" : ""
      )}>
        <div className="absolute inset-0 rounded-sm overflow-hidden">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[1px] bg-gradient-to-r from-transparent via-mw-green to-transparent origin-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementItem;
