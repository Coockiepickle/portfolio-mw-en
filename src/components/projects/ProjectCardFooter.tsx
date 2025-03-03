
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
  return (
    <div className={cn("p-4 border-t border-opacity-20", project.type === "professional" ? "border-[#9b87f5]" : "border-mw-green")}>
      <ProjectTags tags={project.tags} projectType={project.type} isDecoding={isDecoding} />
      
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center">
          <Calendar className="w-5 h-5 mr-2 opacity-70" />
          <span className="text-sm text-mw-light">{project.date}</span>
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
