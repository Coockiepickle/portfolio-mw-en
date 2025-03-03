
import { Code, ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';
import CodeCracker from './ui/CodeCracker';

export interface ProjectData {
  title: string;
  description: string;
  tags: string[];
  type: "professional" | "personal";
  links: {
    demo: string;
    github: string;
  };
}

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  isVisible: boolean;
  isDecoding: boolean;
}

const ProjectCard = ({ project, index, isVisible, isDecoding }: ProjectCardProps) => {
  // Couleurs différentes selon le type de projet
  const getTypeStyles = () => {
    if (project.type === "professional") {
      return {
        iconColor: "text-[#9b87f5]",
        borderColor: "border-[#9b87f5]/50 group-hover:border-[#9b87f5]",
        hoverText: "group-hover:text-[#9b87f5]",
        tagBg: "bg-[#9b87f5]/10 hover:bg-[#9b87f5]/30",
        tagText: "text-[#9b87f5]",
        borderElement: "bg-[#9b87f5]"
      };
    } else {
      return {
        iconColor: "text-mw-green",
        borderColor: "border-mw-green/50 group-hover:border-mw-green",
        hoverText: "group-hover:text-mw-green",
        tagBg: "bg-mw-green/10 hover:bg-mw-green/30",
        tagText: "text-mw-green",
        borderElement: "bg-mw-green"
      };
    }
  };

  const styles = getTypeStyles();

  return (
    <div 
      className={cn(
        "mw-card group transition-all duration-700 ease-out transform hover:scale-105 hover:shadow-xl hover:shadow-mw-green/30 h-full flex flex-col", 
        styles.borderColor,
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16", 
        isVisible && {
          'delay-150': index === 0 || index === 1,
          'delay-300': index === 2 || index === 3
        }
      )}
    >
      <div className="relative p-6 bg-mw-darker flex-grow">
        <div className="flex items-center justify-between mb-4">
          <Code className={cn("w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity duration-300", styles.iconColor)} />
          <div className="flex items-center">
            <span className={cn("text-xs px-2 py-1 rounded-sm mr-2", 
              project.type === "professional" ? "bg-[#9b87f5]/10 text-[#9b87f5]" : "bg-mw-green/10 text-mw-green")}>
              {project.type === "professional" ? "PRO" : "PERSO"}
            </span>
            <CodeCracker 
              text={`PROJECT_${index + 1}`} 
              className="text-xs text-mw-lightgray"
              isDecoding={isDecoding}
            />
          </div>
        </div>
        
        <h3 className={cn("text-xl font-semibold text-white mb-3 transition-colors", styles.hoverText)}>
          <CodeCracker 
            text={project.title}
            isDecoding={isDecoding}
          />
        </h3>
        <p className="text-sm text-mw-light mb-4">
          <CodeCracker 
            text={project.description}
            isDecoding={isDecoding}
          />
        </p>
        
        {/* Tactical UI elements */}
        <div className={cn("absolute top-0 left-0 w-16 h-px group-hover:w-full transition-all duration-500", styles.borderElement)}></div>
        <div className={cn("absolute top-0 left-0 w-px h-16 group-hover:h-full transition-all duration-500", styles.borderElement)}></div>
      </div>
      
      <div className={cn("p-4 border-t border-opacity-20", project.type === "professional" ? "border-[#9b87f5]" : "border-mw-green")}>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <span 
              key={tagIndex} 
              className={cn(
                "px-2 py-1 text-xs rounded-sm transition-all duration-300 hover:shadow-sm",
                project.type === "professional" 
                  ? "bg-[#9b87f5]/10 text-[#9b87f5] hover:bg-[#9b87f5]/30 hover:shadow-[#9b87f5] group-hover:border border-[#9b87f5]/50"
                  : "bg-mw-green/10 text-mw-green hover:bg-mw-green/30 hover:shadow-mw-green group-hover:border border-mw-green/50"
              )}
            >
              <CodeCracker 
                text={tag}
                isDecoding={isDecoding}
              />
            </span>
          ))}
        </div>
        
        <div className="flex justify-end space-x-3">
          <a 
            href={project.links.demo} 
            className={cn("p-2 text-mw-light transition-colors hover:scale-110 transform duration-300", 
              project.type === "professional" ? "hover:text-[#9b87f5]" : "hover:text-mw-green")} 
            aria-label="View demo"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
          <a 
            href={project.links.github} 
            className={cn("p-2 text-mw-light transition-colors hover:scale-110 transform duration-300", 
              project.type === "professional" ? "hover:text-[#9b87f5]" : "hover:text-mw-green")} 
            aria-label="View code"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
