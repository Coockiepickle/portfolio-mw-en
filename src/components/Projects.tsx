
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { projectsData } from '../data/projects';
import ProjectsHeader from './projects/ProjectsHeader';
import ProjectGrid from './projects/ProjectGrid';
import { ChevronDown, ChevronUp } from 'lucide-react'; // Import icons

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  // Initial projects to show (first 4)
  const initialProjects = projectsData.slice(0, 4);
  
  // Additional projects to show when expanded
  const additionalProjects = projectsData.slice(4);
  
  // Check if we have any additional projects to show
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
    handleScroll(); // Check on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleShowAllProjects = () => {
    setShowAllProjects(!showAllProjects);
    
    if (!showAllProjects) {
      // When expanding, show the floating button after a delay
      setTimeout(() => {
        setShowFloatingButton(true);
      }, 600); // Delay to allow for animation
    } else {
      // When collapsing, hide the floating button immediately
      setShowFloatingButton(false);
    }
  };

  return (
    <section id="projects" className="relative py-16 bg-mw-darker">
      <div className="absolute inset-0 mw-grid-pattern opacity-20"></div>
      
      <div className="mw-container relative z-10">
        <ProjectsHeader isVisible={isVisible} />
        <ProjectGrid 
          projects={initialProjects} 
          isVisible={isVisible} 
        />
        
        {/* Conditional rendering for additional projects */}
        {showAllProjects && (
          <div className={cn(
            "mt-8 transition-all duration-700 ease-out transform",
            showAllProjects ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          )}>
            <ProjectGrid 
              projects={additionalProjects} 
              isVisible={showAllProjects}
              startIndex={initialProjects.length}
            />
          </div>
        )}
        
        {/* Show More/Less Projects Button - centered at the bottom */}
        {hasAdditionalProjects && !showFloatingButton && (
          <div className="flex justify-center mt-10">
            <button
              onClick={toggleShowAllProjects}
              className="mw-button-primary flex items-center gap-2 group transition-all duration-300"
            >
              {showAllProjects ? (
                <>
                  HIDE ADDITIONAL PROJECTS
                  <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                </>
              ) : (
                <>
                  SHOW MORE PROJECTS
                  <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
      
      {/* Floating hide button that appears at bottom right */}
      {showFloatingButton && (
        <button
          onClick={toggleShowAllProjects}
          className="fixed bottom-6 right-24 z-50 flex items-center gap-2 px-3 py-2 
            bg-mw-darker border border-mw-green border-opacity-30 rounded-sm
            text-mw-light hover:text-white hover:bg-mw-green hover:bg-opacity-10
            transition-all duration-200 shadow-md animate-fade-in"
        >
          <ChevronUp className="w-4 h-4" />
          <span className="text-sm font-medium">HIDE PROJECTS</span>
        </button>
      )}
    </section>
  );
};

export default Projects;
