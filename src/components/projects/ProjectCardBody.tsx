
import { cn } from '@/lib/utils';
import CodeCracker from '../ui/CodeCracker';
import { ProjectData } from './ProjectCard';
import ProjectCardHeader from './ProjectCardHeader';

interface ProjectCardBodyProps {
  project: ProjectData;
  styles: {
    iconColor: string;
    hoverText: string;
    borderElement: string;
  };
  isDecoding: boolean;
  index: number;
}

const ProjectCardBody = ({ project, styles, isDecoding, index }: ProjectCardBodyProps) => {
  return (
    <div className="relative p-6 bg-mw-darker flex-grow">
      <ProjectCardHeader project={project} styles={styles} isDecoding={isDecoding} index={index} />
      
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
  );
};

export default ProjectCardBody;
