
import { useEffect, useState } from 'react';
import { projectsData } from '../data/projects';
import ProjectsHeader from './projects/ProjectsHeader';
import ProjectGrid from './projects/ProjectGrid';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

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
    <section id="projects" className="relative py-16 bg-mw-darker">
      <div className="absolute inset-0 mw-grid-pattern opacity-20"></div>
      
      <div className="mw-container relative z-10">
        <ProjectsHeader isVisible={isVisible} />
        <ProjectGrid projects={projectsData} isVisible={isVisible} />
      </div>
    </section>
  );
};

export default Projects;
