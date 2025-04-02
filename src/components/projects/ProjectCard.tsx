
import { Code } from 'lucide-react';
import { cn } from '@/lib/utils';
import CodeCracker from '../ui/CodeCracker';
import ProjectCardHeader from './ProjectCardHeader';
import ProjectCardBody from './ProjectCardBody';
import ProjectCardFooter from './ProjectCardFooter';

export interface ProjectData {
  title: string;
  description: string;
  tags: string[];
  type: "professional" | "personal";
  date: string;
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
  // Colors based on project type
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
        "mw-card group transition-all duration-500 ease-out transform hover:scale-[1.02] hover:shadow-xl hover:shadow-mw-green/30 h-full flex flex-col cursor-pointer", 
        styles.borderColor,
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16", 
        isVisible && {
          'delay-150': index === 0 || index === 1,
          'delay-300': index === 2 || index === 3
        },
        "will-change-transform", // Optimize rendering performance for transform
        "transition-[transform,box-shadow] duration-300" // Smoother transition
      )}
    >
      <ProjectCardBody 
        project={project} 
        styles={styles} 
        isDecoding={isDecoding} 
        index={index}
      />
      
      <ProjectCardFooter 
        project={project} 
        isDecoding={isDecoding} 
      />
    </div>
  );
};

export default ProjectCard;
