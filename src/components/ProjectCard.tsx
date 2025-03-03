
import { Code, ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';
import CodeCracker from './ui/CodeCracker';

export interface ProjectData {
  title: string;
  description: string;
  tags: string[];
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
  return (
    <div 
      className={cn(
        "mw-card group transition-all duration-700 ease-out transform hover:scale-105 hover:shadow-xl hover:shadow-mw-green/30 hover:border-mw-green/50", 
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16", 
        isVisible && {
          'delay-150': index === 0 || index === 1,
          'delay-300': index === 2 || index === 3
        }
      )}
    >
      <div className="relative p-6 bg-mw-darker">
        <div className="flex items-center justify-between mb-4">
          <Code className="w-8 h-8 text-mw-green opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
          <CodeCracker 
            text={`PROJECT_${index + 1}`} 
            className="text-xs text-mw-lightgray"
            isDecoding={isDecoding}
          />
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-mw-green transition-colors">
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
        <div className="absolute top-0 left-0 w-16 h-px bg-mw-green group-hover:w-full transition-all duration-500"></div>
        <div className="absolute top-0 left-0 w-px h-16 bg-mw-green group-hover:h-full transition-all duration-500"></div>
      </div>
      
      <div className="p-4 border-t border-mw-green border-opacity-20">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <span 
              key={tagIndex} 
              className="px-2 py-1 bg-mw-green bg-opacity-10 text-mw-green text-xs rounded-sm transition-all duration-300 hover:bg-opacity-30 hover:shadow-sm hover:shadow-mw-green group-hover:border border-mw-green/50"
            >
              <CodeCracker 
                text={tag}
                isDecoding={isDecoding}
              />
            </span>
          ))}
        </div>
        
        <div className="flex justify-end space-x-3">
          <a 
            href={project.links.demo} 
            className="p-2 text-mw-light hover:text-mw-green transition-colors hover:scale-110 transform duration-300" 
            aria-label="View demo"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
          <a 
            href={project.links.github} 
            className="p-2 text-mw-light hover:text-mw-green transition-colors hover:scale-110 transform duration-300" 
            aria-label="View code"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
