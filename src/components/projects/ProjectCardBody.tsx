
import { cn } from '@/lib/utils';
import CodeCracker from '../ui/CodeCracker';
import ProjectCardHeader from './ProjectCardHeader';
import { ProjectData } from './ProjectCard';
import ProjectTags from './ProjectTags';

interface ProjectCardBodyProps {
  project: ProjectData;
  styles: {
    iconColor: string;
    hoverText: string;
    tagBg: string;
    tagText: string;
  };
  isDecoding: boolean;
  index: number; // Added index prop
}

const ProjectCardBody = ({ project, styles, isDecoding, index }: ProjectCardBodyProps) => {
  return (
    <div className="relative p-6 bg-mw-darker flex-grow">
      <ProjectCardHeader 
        project={project} 
        styles={styles}
        isDecoding={isDecoding}
        index={index} // Pass index to ProjectCardHeader
      />
      
      <h3 className={cn("text-xl font-medium mb-2 transition-colors duration-300", styles.hoverText)}>
        <CodeCracker 
          text={project.title} 
          isDecoding={isDecoding}
        />
      </h3>
      
      <p className="text-mw-lightgray mb-4 text-sm">
        <CodeCracker 
          text={project.description} 
          isDecoding={isDecoding}
          charDelay={15}
        />
      </p>
      
      <ProjectTags 
        tags={project.tags} 
        styles={styles}
        isDecoding={isDecoding}
      />
    </div>
  );
};

export default ProjectCardBody;
