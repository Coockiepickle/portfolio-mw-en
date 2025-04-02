
import { useState } from 'react';
import { cn } from '@/lib/utils';
import ProjectCard from './ProjectCard';
import { ProjectData } from './ProjectCard';

interface ProjectGridProps {
  projects: ProjectData[];
  isVisible: boolean;
  startIndex?: number; // Optional prop for indexing additional projects
}

const ProjectGrid = ({ projects, isVisible, startIndex = 0 }: ProjectGridProps) => {
  const [decodingCardIndex, setDecodingCardIndex] = useState<number | null>(null);

  const handleCardClick = (project: ProjectData) => {
    // Navigate to demo link if available, otherwise to github link
    const targetLink = project.links.demo !== "##" 
      ? project.links.demo 
      : project.links.github !== "##" 
        ? project.links.github 
        : null;
    
    if (targetLink) {
      window.open(targetLink, '_blank');
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <div 
          key={startIndex + index}
          onMouseEnter={() => setDecodingCardIndex(startIndex + index)}
          onMouseLeave={() => setDecodingCardIndex(null)}
          onClick={() => handleCardClick(project)}
          className={cn(
            "h-full cursor-pointer transition-all duration-500",
            "hover:scale-[1.02]",
            isVisible ? "opacity-100" : "opacity-0",
            // Add staggered delay for fade-in based on card index
            isVisible && {
              'transition-delay-100': index % 4 === 0,
              'transition-delay-200': index % 4 === 1,
              'transition-delay-300': index % 4 === 2, 
              'transition-delay-400': index % 4 === 3
            }
          )}
          style={{
            transitionDelay: isVisible ? `${(index % 4) * 100 + 100}ms` : '0ms'
          }}
        >
          <ProjectCard 
            project={project}
            index={startIndex + index}
            isVisible={isVisible}
            isDecoding={decodingCardIndex === (startIndex + index)}
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
