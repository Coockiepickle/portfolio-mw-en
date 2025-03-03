
import { useEffect, useState } from 'react';
import { Briefcase, Link2, Github, ExternalLink, Code } from 'lucide-react';
import { cn } from '@/lib/utils';

const getRandomChar = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,./<>?";
  return chars.charAt(Math.floor(Math.random() * chars.length));
};

const CodeCracker = ({ text, className, isDecoding }: { text: string, className?: string, isDecoding: boolean }) => {
  const [displayText, setDisplayText] = useState(text);
  
  useEffect(() => {
    if (!isDecoding) {
      setDisplayText(text);
      return;
    }
    
    let iteration = 0;
    const originalText = text;
    const totalIterations = text.length * 3; // Multiplie par 3 pour plus d'effet
    
    const interval = setInterval(() => {
      setDisplayText(prevText => {
        const progress = Math.min(iteration / totalIterations, 1);
        const completeChars = Math.floor(progress * originalText.length);
        
        return originalText
          .split('')
          .map((char, index) => {
            if (index < completeChars) return char;
            return char === ' ' ? ' ' : getRandomChar();
          })
          .join('');
      });
      
      iteration++;
      
      if (iteration > totalIterations) {
        clearInterval(interval);
        setDisplayText(originalText);
      }
    }, 30);
    
    return () => clearInterval(interval);
  }, [isDecoding, text]);
  
  return (
    <div className={cn("font-mono", className)}>
      {displayText}
    </div>
  );
};

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

  const projects = [{
    title: "S.P.P. (Système de Pentesting Portatif)",
    description: "A standalone Raspberry Pi board for auditing and carrying out penetration tests on a network.",
    tags: ["RPi", "Debian", "Lynis", "ZPhisher", "PhishMailer", "VNC"],
    links: {
      demo: "https://dreynaud.noho.st/grav",
      github: "#"
    }
  }, {
    title: "Combat Mission Planner",
    description: "Interactive mission planning tool with real-time collaboration features.",
    tags: ["Node.js", "WebSockets", "Canvas API"],
    links: {
      demo: "#",
      github: "#"
    }
  }, {
    title: "RestoRate",
    description: "A Django website like TripAdvisor but for restaurants that I had to do during my College Studies in Québec.",
    tags: ["Python", "Django", "VS Code", "HTML"],
    links: {
      demo: "#",
      github: "https://github.com/Coockiepickle/PIW_EXS"
    }
  }, {
    title: "SerreConnectée",
    description: "A collection of scripts used to create a connected greenhouse with sensors and an Arduino board..",
    tags: ["C++", "Python", "Arduino"],
    links: {
      demo: "#",
      github: "https://github.com/Coockiepickle/SerreConnectee"
    }
  }];

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
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={cn(
                "mw-card group transition-all duration-700 ease-out transform hover:scale-105 hover:shadow-xl hover:shadow-mw-green/30 hover:border-mw-green/50", 
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16", 
                isVisible && {
                  'delay-150': index === 0 || index === 1,
                  'delay-300': index === 2 || index === 3
                }
              )}
              onMouseEnter={() => setDecodingCardIndex(index)}
              onMouseLeave={() => setDecodingCardIndex(null)}
            >
              <div className="relative p-6 bg-mw-darker">
                <div className="flex items-center justify-between mb-4">
                  <Code className="w-8 h-8 text-mw-green opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                  <CodeCracker 
                    text={`PROJECT_${index + 1}`} 
                    className="text-xs text-mw-lightgray"
                    isDecoding={decodingCardIndex === index}
                  />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-mw-green transition-colors">
                  <CodeCracker 
                    text={project.title}
                    isDecoding={decodingCardIndex === index}
                  />
                </h3>
                <p className="text-sm text-mw-light mb-4">
                  <CodeCracker 
                    text={project.description}
                    isDecoding={decodingCardIndex === index}
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
                        isDecoding={decodingCardIndex === index}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
