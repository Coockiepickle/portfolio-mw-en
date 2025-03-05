import { ExternalLink, Github, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import CodeCracker from '../ui/CodeCracker';
import { ProjectData } from './ProjectCard';
import ProjectTags from './ProjectTags';
import { useState, useEffect } from 'react';

interface ProjectCardFooterProps {
  project: ProjectData;
  isDecoding: boolean;
}

const ProjectCardFooter = ({ project, isDecoding }: ProjectCardFooterProps) => {
  const [showGithubMessage, setShowGithubMessage] = useState(false);
  const [showDemoMessage, setShowDemoMessage] = useState(false);
  const [isGithubGlitching, setIsGithubGlitching] = useState(false);
  const [isDemoGlitching, setIsDemoGlitching] = useState(false);
  
  const formatDate = (date: string) => {
    const [year, month] = date.split('-');
    return `${year} / ${month}`;
  };

  useEffect(() => {
    let githubGlitchInterval: NodeJS.Timeout;
    let demoGlitchInterval: NodeJS.Timeout;
    
    if (showGithubMessage) {
      setIsGithubGlitching(true);
      
      githubGlitchInterval = setInterval(() => {
        setIsGithubGlitching(prev => !prev);
      }, Math.random() * 200 + 50);
    }
    
    if (showDemoMessage) {
      setIsDemoGlitching(true);
      
      demoGlitchInterval = setInterval(() => {
        setIsDemoGlitching(prev => !prev);
      }, Math.random() * 200 + 50);
    }
    
    return () => {
      clearInterval(githubGlitchInterval);
      clearInterval(demoGlitchInterval);
    };
  }, [showGithubMessage, showDemoMessage]);

  const handleGithubClick = (e: React.MouseEvent) => {
    if (project.links.github === "##") {
      e.preventDefault();
      setShowGithubMessage(true);
      setTimeout(() => {
        setShowGithubMessage(false);
        setIsGithubGlitching(false);
      }, 3000);
    }
  };

  const handleDemoClick = (e: React.MouseEvent) => {
    if (project.links.demo === "##") {
      e.preventDefault();
      setShowDemoMessage(true);
      setTimeout(() => {
        setShowDemoMessage(false);
        setIsDemoGlitching(false);
      }, 3000);
    }
  };

  return (
    <div className={cn("p-4 border-t border-opacity-20", project.type === "professional" ? "border-[#9b87f5]" : "border-mw-green")}>
      <ProjectTags tags={project.tags} projectType={project.type} isDecoding={isDecoding} />
      
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center">
          <span 
            className={cn(
              "inline-flex items-center px-2 py-1 text-xs rounded-sm transition-all duration-300 hover:shadow-sm relative overflow-hidden",
              "bg-mw-accent/80 text-white hover:bg-mw-accent hover:shadow-mw-accent group-hover:border border-mw-accent"
            )}
          >
            <div className="absolute inset-0 mw-grid-pattern opacity-30 transform rotate-30 bg-gray-pattern"></div>
            <Calendar className="w-3 h-3 mr-1 opacity-70 relative z-10" />
            <span className="relative z-10 font-tactical font-semibold tracking-wider">
              {isDecoding ? (
                <CodeCracker 
                  text={formatDate(project.date)}
                  isDecoding={isDecoding}
                  className="font-tactical font-semibold tracking-wider"
                />
              ) : (
                <span>REDACTED</span>
              )}
            </span>
          </span>
        </div>
        
        <div className="flex space-x-3 relative">
          <div className="relative">
            <a 
              href={project.links.demo} 
              className={cn("p-2 text-mw-light transition-colors hover:scale-110 transform duration-300", 
                project.type === "professional" ? "hover:text-[#9b87f5]" : "hover:text-mw-green")} 
              aria-label="View demo"
              onClick={handleDemoClick}
            >
              <ExternalLink className="w-5 h-5" />
            </a>
            {showDemoMessage && (
              <div className={cn(
                "absolute -top-10 right-0 bg-mw-dark border border-mw-accent/70 px-3 py-1 rounded-sm text-xs text-white whitespace-nowrap shadow-lg z-20",
                "before:content-[''] before:absolute before:-inset-0.5 before:bg-mw-accent/20 before:rounded-sm before:z-[-1]",
                isDemoGlitching ? "after:animate-tactical-blink" : ""
              )}>
                <div className="absolute inset-0 mw-grid-pattern opacity-40"></div>
                <span className="relative z-10 font-code font-medium tracking-tight">
                  <CodeCracker 
                    text="No Link Available :("
                    isDecoding={isDemoGlitching}
                    className="font-code text-mw-accent"
                  />
                </span>
                <span className="absolute top-0 right-[10%] w-[1px] h-full bg-mw-accent/50 animate-pulse-light"></span>
                <span className="absolute top-0 left-[30%] w-[1px] h-full bg-mw-accent/40 animate-pulse-light"></span>
              </div>
            )}
          </div>
          
          <div className="relative">
            <a 
              href={project.links.github} 
              className={cn("p-2 text-mw-light transition-colors hover:scale-110 transform duration-300", 
                project.type === "professional" ? "hover:text-[#9b87f5]" : "hover:text-mw-green")} 
              aria-label="View code"
              onClick={handleGithubClick}
            >
              <Github className="w-5 h-5" />
            </a>
            {showGithubMessage && (
              <div className={cn(
                "absolute -top-10 right-0 bg-mw-dark border border-mw-accent/70 px-3 py-1 rounded-sm text-xs text-white whitespace-nowrap shadow-lg z-20",
                "before:content-[''] before:absolute before:-inset-0.5 before:bg-mw-accent/20 before:rounded-sm before:z-[-1]",
                isGithubGlitching ? "after:animate-tactical-blink" : ""
              )}>
                <div className="absolute inset-0 mw-grid-pattern opacity-40"></div>
                <span className="relative z-10 font-code font-medium tracking-tight">
                  <CodeCracker 
                    text="No Link Available :("
                    isDecoding={isGithubGlitching}
                    className="font-code text-mw-accent"
                  />
                </span>
                <span className="absolute top-0 right-[10%] w-[1px] h-full bg-mw-accent/50 animate-pulse-light"></span>
                <span className="absolute top-0 left-[30%] w-[1px] h-full bg-mw-accent/40 animate-pulse-light"></span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardFooter;
