
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import CodeCracker from '../ui/CodeCracker';
import { ProjectData } from './ProjectCard';
import ProjectTags from './ProjectTags';

interface ProjectCardFooterProps {
  project: ProjectData;
  isDecoding: boolean;
}

const ProjectCardFooter = ({ project, isDecoding }: ProjectCardFooterProps) => {
  // Format the date from "2023-09" to "2023 / 09"
  const formatDate = (date: string) => {
    const [year, month] = date.split('-');
    return `${year} / ${month}`;
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
            <div className="absolute inset-0 mw-grid-pattern opacity-30 transform rotate-30"></div>
            <Calendar className="w-3 h-3 mr-1 opacity-70 relative z-10" />
            <span className="relative z-10">
              {isDecoding ? (
                <CodeCracker 
                  text={formatDate(project.date)}
                  isDecoding={isDecoding}
                />
              ) : (
                <span>REDACTED</span>
              )}
            </span>
          </span>
        </div>
        
        <div className="flex space-x-3">
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

export default ProjectCardFooter;
