
import { useState, useEffect } from 'react';
import { Briefcase, Calendar, Building2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const Experiences = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const experiences = [
    {
      title: "Systems and network administration trainee",
      company: "MH Industries",
      period: "Sept. - Present",
      description: "Helping to improve and maintain the information system. Upgrading the network infrastructure. User technical support"
    },
    {
      title: "Power Automate application development",
      company: "Cégep de La Pocatière",
      period: "March - May 2024",
      description: "Implementation of an application to automate the completion of work placement agreements. Working as part of a team in project mode."
    },
    {
      title: "Trainee Network and Telecommunications Administrator",
      company: "D.S.I. C.H.U. de Limoges",
      period: "16 May - 24 June 2022, 2 Jan. - 10 Feb. 2023",
      description: "Helping to improve and maintain the C.H.U.'s information system. Discover the new tools (software and hardware) needed to run a computer network."
    },
    {
      title: "Observation internship",
      company: "La Clinique Informatique",
      period: "June - July 2019",
      description: "Diagnose faulty computers and replace components components according to problems encountered. Contact with customers."
    }
  ];

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

  return (
    <section id="experiences" className="relative py-24 overflow-hidden bg-black">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-mw-darker to-transparent"></div>
      
      <div className="mw-container relative z-10">
        <div className={cn("transition-all duration-700 transform", isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8")}>
          <span className="mw-badge mb-4">
            <Briefcase className="w-3 h-3 mr-1" />
            CAREER PATH
          </span>
          <h2 className="mw-section-title text-white">Work experience</h2>
        </div>
        
        <div className="mt-8">
          <div className="relative border-l-2 border-mw-green border-opacity-30 pl-8 ml-4">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={cn(
                  "mb-12 relative transition-all duration-700 transform",
                  isVisible ? `opacity-100 translate-y-0 delay-[${index * 150}ms]` : "opacity-0 translate-y-8"
                )}
              >
                <div className="absolute -left-[41px] top-0 w-5 h-5 bg-mw-darker border-2 border-mw-green rounded-full"></div>
                <div className="mw-card p-6 hover:shadow-lg hover:shadow-mw-green/30 hover:-translate-y-2 hover:border-mw-green/50 transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <div className="flex items-center text-mw-lightgray text-sm mt-2 md:mt-0">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.period}
                    </div>
                  </div>
                  <div className="flex items-center mb-4 text-mw-green">
                    <Building2 className="w-4 h-4 mr-2" />
                    <span>{exp.company}</span>
                  </div>
                  <p className="text-mw-light">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
