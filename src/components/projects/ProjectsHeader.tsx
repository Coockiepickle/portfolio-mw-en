import { Code } from 'lucide-react';
import { cn } from '@/lib/utils';
const ProjectsHeader = ({
  isVisible
}: {
  isVisible: boolean;
}) => {
  return <div className={cn("text-center max-w-3xl mx-auto mb-16 transition-all duration-700 transform", isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8")}>
      <div className="flex flex-col items-center">
        <span className="mw-badge mb-4">
          <Code className="w-3 h-3 mr-1" />
          MY WORK
        </span>
        <h2 className="mw-section-title text-white">Project Showcase</h2>
      </div>
      <p className="mt-4">A collection of my most significant projects, showcasing my technical expertise and problem-solving abilities</p>
    </div>;
};
export default ProjectsHeader;