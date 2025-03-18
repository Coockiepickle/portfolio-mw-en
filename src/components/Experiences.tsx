
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { CalendarDays, MapPin, Building, Award } from 'lucide-react';

type Experience = {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
  achievements?: string[];
};

const experiencesData: Experience[] = [
  {
    id: 1,
    title: "Lead Software Engineer",
    company: "Thales",
    location: "Toulouse, France",
    period: "Jan 2021 - Present",
    description: [
      "Designed and implemented the next-generation air traffic management system using modern web technologies",
      "Led a team of 5 engineers, directing architectural decisions and code quality initiatives",
      "Established CI/CD pipelines and testing practices that reduced deployment time by 70%"
    ],
    technologies: ["React", "TypeScript", "Node.js", "Jest", "Docker", "AWS", "GraphQL"],
    achievements: [
      "Successfully delivered a critical navigation component used by 15+ European control centers",
      "Introduced performance optimizations that improved system response time by 40%",
      "Created training materials and mentored junior developers on modern JavaScript practices"
    ]
  },
  {
    id: 2,
    title: "Senior Frontend Developer",
    company: "Airbus",
    location: "Toulouse, France",
    period: "Jun 2018 - Dec 2020",
    description: [
      "Developed interactive cockpit simulation tools for pilot training programs",
      "Built responsive web interfaces for aircraft maintenance system using React and Redux",
      "Collaborated with UX designers to implement intuitive interfaces for complex technical systems"
    ],
    technologies: ["React", "Redux", "JavaScript", "SASS", "D3.js", "Three.js", "WebGL"],
    achievements: [
      "Received innovation award for developing a WebGL-based cockpit visualization tool",
      "Implemented accessibility improvements that became company standard"
    ]
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Capgemini",
    location: "Paris, France",
    period: "Sep 2015 - May 2018",
    description: [
      "Built web applications for various clients in banking and insurance sectors",
      "Migrated legacy applications to modern JavaScript frameworks",
      "Participated in agile development teams using Scrum methodology"
    ],
    technologies: ["Angular", "JavaScript", "TypeScript", "Bootstrap", "LESS", "RESTful APIs"],
    achievements: [
      "Successfully delivered 8+ major client projects on time and within budget",
      "Recognized for excellent client communication and requirements gathering"
    ]
  }
];

const Experiences = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('experiences');
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

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setVisibleItems([1]);
      }, 300);
      
      const timer2 = setTimeout(() => {
        setVisibleItems([1, 2]);
      }, 600);
      
      const timer3 = setTimeout(() => {
        setVisibleItems([1, 2, 3]);
      }, 900);
      
      return () => {
        clearTimeout(timer);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [isVisible]);

  return (
    <section id="experiences" className="relative py-16 bg-mw-dark">
      <div className="absolute inset-0 mw-grid-pattern opacity-30"></div>
      
      <div className="mw-container relative z-10">
        <div className={cn("transition-all duration-700 transform", 
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8")}>
          <div className="flex flex-col items-center">
            <span className="mw-badge mb-4">
              <CalendarDays className="w-3 h-3 mr-1" />
              WORK HISTORY
            </span>
            <h2 className="mw-section-title text-white mb-0">Professional Experience</h2>
            <p className="text-mw-lightgray text-center max-w-2xl mx-auto mt-4">
              My professional journey in software development has equipped me with a diverse range of skills and experiences.
            </p>
          </div>
        </div>
        
        <div className="mt-12 space-y-10 max-w-4xl mx-auto">
          {experiencesData.map((experience) => (
            <div 
              key={experience.id}
              className={cn(
                "transition-all duration-700 transform",
                visibleItems.includes(experience.id) 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-16"
              )}
            >
              <Card className="mw-card p-0 bg-mw-darker/60 backdrop-blur-sm border border-mw-green/20 overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-mw-green/40"></div>
                <CardContent className="pt-6 px-6 pb-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{experience.title}</h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4">
                        <div className="flex items-center text-mw-lightgray">
                          <Building className="w-4 h-4 mr-1" />
                          <span>{experience.company}</span>
                        </div>
                        <div className="flex items-center text-mw-lightgray">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{experience.location}</span>
                        </div>
                        <div className="flex items-center text-mw-lightgray">
                          <CalendarDays className="w-4 h-4 mr-1" />
                          <span>{experience.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <ul className="space-y-2 mb-4">
                      {experience.description.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-mw-green mr-2">›</span>
                          <span className="text-mw-light">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {experience.achievements && (
                      <div className="mt-4 pt-4 border-t border-mw-green/20">
                        <div className="flex items-center mb-2">
                          <Award className="w-4 h-4 text-mw-green mr-2" />
                          <span className="text-white font-semibold">Key Achievements</span>
                        </div>
                        <ul className="space-y-2">
                          {experience.achievements.map((item, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-mw-accent mr-2">›</span>
                              <span className="text-mw-light">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="mt-4 pt-4 border-t border-mw-green/20">
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, idx) => (
                          <span key={idx} className="px-2 py-1 bg-mw-green/10 text-mw-green text-xs rounded-sm border border-mw-green/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
