
import { Code } from 'lucide-react';
import { cn } from '@/lib/utils';
import CodeCracker from '../ui/CodeCracker';
import { ProjectData } from './ProjectCard';

interface ProjectCardHeaderProps {
  project: ProjectData;
  styles: {
    iconColor: string;
  };
  isDecoding: boolean;
}

const ProjectCardHeader = ({ project, styles, isDecoding }: ProjectCardHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <Code className={cn("w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity duration-300", styles.iconColor)} />
      <div className="flex items-center">
        <span className={cn("text-xs px-2 py-1 rounded-sm mr-2", 
          project.type === "professional" ? "bg-[#9b87f5]/10 text-[#9b87f5]" : "bg-mw-green/10 text-mw-green")}>
          {project.type === "professional" ? "PRO" : "PERSO"}
        </span>
        <CodeCracker 
          text={`PROJECT_INDEX`} 
          className="text-xs text-mw-lightgray"
          isDecoding={isDecoding}
        />
      </div>
    </div>
  );
};

export default ProjectCardHeader;
