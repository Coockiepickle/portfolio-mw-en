import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { projectsData } from '../data/projects';
import ProjectsHeader from './projects/ProjectsHeader';
import ProjectGrid from './projects/ProjectGrid';
import { ChevronDown, ChevronUp } from 'lucide-react';
const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const initialProjects = projectsData.slice(0, 4);
  const additionalProjects = projectsData.slice(4);
  const hasAdditionalProjects = additionalProjects.length > 0;
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
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleShowAllProjects = () => {
    setShowAllProjects(!showAllProjects);
    if (!showAllProjects) {
      setTimeout(() => {
        setShowFloatingButton(true);
      }, 600);
    } else {
      setShowFloatingButton(false);
    }
  };
  return <section id="projects" className="relative py-16 bg-mw-darker">
      <div className="absolute inset-0 mw-grid-pattern opacity-20"></div>
      
      <div className="mw-container relative z-10">
        <ProjectsHeader isVisible={isVisible} />
        <ProjectGrid projects={initialProjects} isVisible={isVisible} />
        
        {showAllProjects && <div className={cn("mt-8 transition-all duration-700 ease-out transform", showAllProjects ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16")}>
            <ProjectGrid projects={additionalProjects} isVisible={showAllProjects} startIndex={initialProjects.length} />
          </div>}
        
        {hasAdditionalProjects && <div className="flex justify-center mt-10">
            <button onClick={toggleShowAllProjects} className="mw-button-primary flex items-center gap-2 group transition-all duration-300">
              {showAllProjects ? <>
                  HIDE ADDITIONAL PROJECTS
                  <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                </> : <>
                  SHOW MORE PROJECTS
                  <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </>}
            </button>
          </div>}
        
        {showAllProjects && <div className="flex justify-center mt-8">
            
          </div>}
      </div>
      
      {showFloatingButton && <button onClick={toggleShowAllProjects} className="fixed bottom-6 right-24 z-50 flex items-center gap-2 px-3 py-2 
            bg-mw-darker border border-mw-green border-opacity-30 rounded-sm
            text-mw-light hover:text-white hover:bg-mw-green hover:bg-opacity-10
            transition-all duration-200 shadow-md animate-fade-in">
          <ChevronUp className="w-4 h-4" />
          <span className="text-sm font-medium">HIDE PROJECTS</span>
        </button>}
    </section>;
};
export default Projects;