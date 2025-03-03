
import { useEffect, useState } from 'react';
import { Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projects';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [decodingCardIndex, setDecodingCardIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('projects');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="projects" className="relative py-24 bg-mw-darker">
      <div className="absolute inset-0 mw-grid-pattern opacity-20"></div>
      
      <div className="mw-container relative z-10">
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
          
          <div className="flex justify-center items-center mt-6 gap-6">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#9b87f5] mr-2"></div>
              <span className="text-sm text-mw-light">Professional</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-mw-green mr-2"></div>
              <span className="text-sm text-mw-light">Personal</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={index}
              onMouseEnter={() => setDecodingCardIndex(index)}
              onMouseLeave={() => setDecodingCardIndex(null)}
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
      </div>
    </section>
  );
};

export default Projects;
