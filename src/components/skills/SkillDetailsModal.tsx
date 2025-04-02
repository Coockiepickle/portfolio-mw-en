import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Skill } from "./skillsData";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import CodeCracker from "../ui/CodeCracker";

interface SkillDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const getSkillDescription = (skillName: string): string => {
  const descriptions: { [key: string]: string } = {
    "Docker": "Containerization platform that enables applications to run consistently across different environments.",
    "Windows / Windows Server": "Microsoft operating systems for desktop and server environments with GUI and extensive application support.",
    "Linux": "Open-source operating system known for stability, security, and flexibility in server environments.",
    "Virtualization": "Technology that creates virtual instances of computing resources, allowing multiple OS environments on a single machine.",
    
    "Cisco": "Enterprise networking equipment and solutions including routers, switches, and security devices.",
    "Routing and Switching": "Directing network traffic between different networks and connecting devices within a network.",
    "VoIP - Learning in Progress...": "Voice over Internet Protocol - technology for delivering voice communications over IP networks.",
    "VLAN": "Virtual Local Area Network - method of creating independent logical networks within a physical network.",
    
    "Fire-Wall": "Network security system that monitors and controls incoming and outgoing network traffic.",
    "VPN": "Virtual Private Network - secure connection method extending a private network across a public network.",
    "Network Security - Learning in Progress...": "Protecting network infrastructure and data from unauthorized access and misuse.",
    "IDS/IPS - Learning in Progress...": "Intrusion Detection/Prevention Systems - monitoring network traffic for suspicious activity.",
    
    "HTML / Tailwind CSS - Learning in Progress...": "Web markup language and utility-first CSS framework for rapidly building custom designs.",
    "TypeScript - Learning in Progress...": "JavaScript superset adding static types for improved developer experience and code quality.",
    "Python": "High-level programming language valued for readability and versatility across many domains.",
    "PowerShell": "Task automation and configuration management framework from Microsoft.",
    
    "Team Collaboration": "Ability to work effectively with others to achieve common goals through communication and cooperation.",
    "Punctuality": "Consistently arriving or completing tasks on time, demonstrating reliability and respect for others.",
    "Communication": "Clearly conveying information and ideas through various channels, ensuring understanding.",
    "Adaptability": "Adjusting effectively to changing environments, work requirements, and new challenges.",
    
    "French": "Native language with full professional proficiency in speaking, reading, and writing.",
    "English": "Professional working proficiency in business communication and technical documentation.",
    "Japanese - Learning in Progress...": "Basic understanding of common phrases and fundamental language concepts.",
    "Spanish - Learning in Progress...": "Elementary proficiency with basic vocabulary and simple conversations."
  };
  
  return descriptions[skillName] || "Detailed information about this skill will be added soon.";
};

const SkillDetailsModal = ({ isOpen, onClose, category, icon, skills }: SkillDetailsModalProps) => {
  const [isDecoding, setIsDecoding] = useState(false);
  
  useEffect(() => {
    if (isOpen) {
      setIsDecoding(true);
    } else {
      setIsDecoding(false);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[800px] bg-mw-darker border border-mw-green/30 text-white rounded-md">
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4 text-mw-green" />
          <span className="sr-only">Close</span>
        </DialogClose>
        
        <DialogHeader className="flex flex-row items-center gap-4 mb-4">
          <div className="p-2 rounded-sm bg-mw-green bg-opacity-20">
            {icon}
          </div>
          <DialogTitle className="text-xl font-tactical tracking-wider text-white">
            {category} <span className="text-mw-green">Skills</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
          {skills.map((skill, index) => (
            <div key={index} className="border border-mw-green/20 rounded-md p-0 transition-all hover:border-mw-green/40 bg-black relative overflow-hidden">
              <div className="bg-mw-dark border-b border-mw-green/20 py-1 px-3 flex justify-between items-center rounded-t-md">
                <div className="flex items-center space-x-2">
                  <span className="inline-block w-3 h-3 bg-red-500 rounded-full"></span>
                  <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full"></span>
                  <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
                </div>
                <div className="text-xs font-mono text-mw-lightgray">{skill.name}.skill</div>
                <div className="w-10"></div>
              </div>
              
              <div className="p-3 font-mono text-sm">
                <div className="flex mb-2">
                  <span className="text-mw-green mr-1">$</span>
                  <span className="text-mw-lightgray mr-1">skill</span>
                  <span className="text-mw-accent">--info</span>
                  <span className="text-mw-accent"> --progress = '{skill.level}%'</span>
                  <span className="ml-1 text-mw-green animate-pulse-light">▌</span>
                </div>
                
                <div className="mb-3 h-1 w-full bg-mw-dark overflow-hidden rounded-full">
                  <div 
                    className="h-full bg-gradient-to-r from-mw-green/80 to-mw-green rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                
                <div className="mt-3">
                  <div className="text-mw-lightgray opacity-70">/* Description */</div>
                  <div className="text-mw-light opacity-90 overflow-y-auto max-h-24 terminal-scrollbar">
                    <CodeCracker 
                      text={getSkillDescription(skill.name)}
                      isDecoding={isDecoding}
                    />
                  </div>
                </div>
              </div>
              
              <div className="absolute inset-0 pointer-events-none bg-scanlines opacity-5"></div>
              
              <div className="h-px w-full bg-gradient-to-r from-transparent via-mw-green/30 to-transparent mt-3 relative overflow-hidden">
                <div className={cn(
                  "absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-transparent via-mw-green/60 to-transparent",
                  "animate-[scan_2s_ease-in-out_infinite_alternate]"
                )}></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="h-px w-full bg-gradient-to-r from-transparent via-mw-green/40 to-transparent">
          <div className="h-full w-full animate-pulse-light"></div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SkillDetailsModal;
