
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
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
      {/* Enhanced background with tactical elements */}
      <div className="absolute inset-0 mw-grid-pattern opacity-20"></div>
      
      {/* Tactical scan lines */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M0 20h40v1H0z\" fill=\"%233f9987\" fill-opacity=\".15\" fill-rule=\"evenodd\"/%3E%3C/svg%3E')] opacity-20"></div>
      
      {/* Tactical corner elements */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-mw-green/20"></div>
      <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-mw-green/20"></div>
      <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-mw-green/20"></div>
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-mw-green/20"></div>
      
      <div className="mw-container relative z-10">
        <ProjectsHeader isVisible={isVisible} />
        <ProjectGrid projects={projectsData} isVisible={isVisible} />
      </div>
    </section>
  );
};

export default Projects;
