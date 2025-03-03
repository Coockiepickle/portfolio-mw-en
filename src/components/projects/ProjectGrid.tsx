
import { useState } from 'react';
import { cn } from '@/lib/utils';
import ProjectCard from './ProjectCard';
import { ProjectData } from './ProjectCard';

interface ProjectGridProps {
  projects: ProjectData[];
  isVisible: boolean;
}

const ProjectGrid = ({ projects, isVisible }: ProjectGridProps) => {
  const [decodingCardIndex, setDecodingCardIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <div 
          key={index}
          onMouseEnter={() => setDecodingCardIndex(index)}
          onMouseLeave={() => setDecodingCardIndex(null)}
          className="h-full"
        >
          <ProjectCard 
            project={project}
            index={index}
            isVisible={isVisible}
            isDecoding={decodingCardIndex === index}
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
