import { useEffect, useState } from 'react';
import { Briefcase, Link2, Github, ExternalLink, Code } from 'lucide-react';
import { cn } from '@/lib/utils';
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
  const projects = [{
    title: "S.P.P. (Système de Pentesting Portatif)",
    description: "A standalone Raspberry Pi board for auditing and carrying out penetration tests on a network.",
    tags: ["RPi", "Debian", "Lynis", "ZPhisher", "PhishMailer", "VNC"],
    image: "project1.jpg",
    links: {
      demo: "https://dreynaud.noho.st/grav",
      github: "#"
    }
  }, {
    title: "Combat Mission Planner",
    description: "Interactive mission planning tool with real-time collaboration features.",
    tags: ["Node.js", "WebSockets", "Canvas API"],
    image: "project2.jpg",
    links: {
      demo: "#",
      github: "#"
    }
  }, {
    title: "RestoRate",
    description: "A Django website like TripAdvisor but for restaurants that I had to do during my College Studies in Québec.",
    tags: ["Python", "Django", "VS Code", "HTML"],
    image: "project3.jpg",
    links: {
      demo: "#",
      github: "https://github.com/Coockiepickle/PIW_EXS"
    }
  }, {
    title: "SerreConnectée",
    description: "A collection of scripts used to create a connected greenhouse with sensors and an Arduino board..",
    tags: ["C++", "Python", "Arduino"],
    image: "project4.jpg",
    links: {
      demo: "#",
      github: "https://github.com/Coockiepickle/SerreConnectee"
    }
  }];
  return <section id="projects" className="relative py-24 bg-mw-darker">
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
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => <div key={index} className={cn("mw-card group transition-all duration-700 ease-out transform", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16", isVisible && {
          'delay-150': index === 0 || index === 1,
          'delay-300': index === 2 || index === 3
        })}>
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-mw-darker flex items-center justify-center">
                  <Code className="w-12 h-12 text-mw-green opacity-40" />
                  <div className="absolute top-2 right-2 text-xs text-mw-lightgray">{`PROJECT_${index + 1}`}</div>
                </div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-mw-darker via-mw-darker/80 to-transparent">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-mw-green transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-mw-light line-clamp-2">{project.description}</p>
                </div>
                
                {/* Tactical UI elements */}
                <div className="absolute top-0 left-0 w-16 h-px bg-mw-green"></div>
                <div className="absolute top-0 left-0 w-px h-16 bg-mw-green"></div>
              </div>
              
              <div className="p-4 border-t border-mw-green border-opacity-20">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => <span key={tagIndex} className="px-2 py-1 bg-mw-green bg-opacity-10 text-mw-green text-xs rounded-sm">
                      {tag}
                    </span>)}
                </div>
                
                <div className="flex justify-end space-x-3">
                  <a href={project.links.demo} className="p-2 text-mw-light hover:text-mw-green transition-colors" aria-label="View demo">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a href={project.links.github} className="p-2 text-mw-light hover:text-mw-green transition-colors" aria-label="View code">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>)}
        </div>
        
        
      </div>
    </section>;
};
export default Projects;
