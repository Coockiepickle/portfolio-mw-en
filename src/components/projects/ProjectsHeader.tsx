
import { Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';
import ProjectTypeLegend from './ProjectTypeLegend';

interface ProjectsHeaderProps {
  isVisible: boolean;
}

const ProjectsHeader = ({ isVisible }: ProjectsHeaderProps) => {
  return (
    <div className={cn("text-center max-w-3xl mx-auto mb-16 transition-all duration-700 transform", isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8")}>
      <span className="mw-badge mb-4">
        <Briefcase className="w-3 h-3 mr-1" />
        MY WORK
      </span>
      <h2 className="mw-section-title text-white">Mission Portfolio</h2>
      <p className="mt-4">
        A collection of projects that demonstrate my capabilities
        and problem-solving approach.
      </p>
      
      <ProjectTypeLegend />
    </div>
  );
};

export default ProjectsHeader;
