
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';
import CodeCracker from '../ui/CodeCracker';
import { ProjectData } from './ProjectCard';
import ProjectTags from './ProjectTags';

interface ProjectCardFooterProps {
  project: ProjectData;
  isDecoding: boolean;
}

const ProjectCardFooter = ({ project, isDecoding }: ProjectCardFooterProps) => {
  // Create the appropriate styles object based on project type
  const tagStyles = {
    iconColor: project.type === "professional" ? "#9b87f5" : "text-mw-green",
    hoverText: project.type === "professional" ? "hover:text-[#9b87f5]" : "hover:text-mw-green",
    tagBg: project.type === "professional" ? "bg-[#9b87f5]/10 hover:bg-[#9b87f5]/30" : "bg-mw-green/10 hover:bg-mw-green/30",
    tagText: project.type === "professional" ? "text-[#9b87f5] hover:shadow-[#9b87f5]" : "text-mw-green hover:shadow-mw-green"
  };

  return (
    <div className={cn("p-4 border-t border-opacity-20", project.type === "professional" ? "border-[#9b87f5]" : "border-mw-green")}>
      <ProjectTags tags={project.tags} styles={tagStyles} isDecoding={isDecoding} />
      
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
  );
};

export default ProjectCardFooter;
