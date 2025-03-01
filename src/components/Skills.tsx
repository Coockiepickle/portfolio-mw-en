
import { useEffect, useState } from 'react';
import { Shield, Code, Database, Layout, Server, Globe, Cpu } from 'lucide-react';
import { cn } from '@/lib/utils';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('skills');
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
  
  const skillCategories = [
    {
      icon: <Layout className="w-6 h-6 text-mw-green" />,
      title: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "CSS/SCSS", level: 90 },
        { name: "Responsive Design", level: 95 },
      ]
    },
    {
      icon: <Server className="w-6 h-6 text-mw-green" />,
      title: "Backend",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express", level: 85 },
        { name: "RESTful APIs", level: 90 },
        { name: "GraphQL", level: 75 },
      ]
    },
    {
      icon: <Database className="w-6 h-6 text-mw-green" />,
      title: "Database",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Firebase", level: 85 },
        { name: "Redis", level: 70 },
      ]
    },
    {
      icon: <Globe className="w-6 h-6 text-mw-green" />,
      title: "DevOps",
      skills: [
        { name: "Docker", level: 75 },
        { name: "CI/CD", level: 80 },
        { name: "AWS", level: 70 },
        { name: "Git/GitHub", level: 95 },
      ]
    },
    {
      icon: <Cpu className="w-6 h-6 text-mw-green" />,
      title: "Tools",
      skills: [
        { name: "VS Code", level: 95 },
        { name: "Figma", level: 80 },
        { name: "Jest", level: 85 },
        { name: "Webpack", level: 75 },
      ]
    },
  ];
  
  return (
    <section id="skills" className="relative py-24">
      <div className="absolute inset-0 mw-grid-pattern opacity-30"></div>
      
      <div className="mw-container relative z-10">
        <div 
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 transition-all duration-700 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          )}
        >
          <span className="mw-badge mb-4 block">
            <Shield className="w-3 h-3 mr-1" />
            CAPABILITIES
          </span>
          <h2 className="mw-section-title text-white">Combat Loadout</h2>
          <p className="mt-4">
            My arsenal of technical skills and tools, honed through years of strategic development
            and tactical problem-solving.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div 
              key={catIndex} 
              className={cn(
                "mw-card p-6 transition-all duration-700 ease-out transform",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16",
                isVisible && { 'delay-150': catIndex === 0, 'delay-300': catIndex === 1, 'delay-450': catIndex === 2, 'delay-600': catIndex === 3, 'delay-750': catIndex === 4 }
              )}
            >
              <div className="flex items-center mb-6">
                <div className="p-2 bg-mw-green bg-opacity-10 rounded-sm mr-3">
                  {category.icon}
                </div>
                <h3 className="text-lg font-medium text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm">{skill.name}</span>
                      <span className="text-xs text-mw-green">{skill.level}%</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-bar-fill transition-all duration-1000 ease-out"
                        style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Tactical UI elements */}
              <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-mw-green bg-opacity-10 transform rotate-45 translate-x-8 -translate-y-8"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
