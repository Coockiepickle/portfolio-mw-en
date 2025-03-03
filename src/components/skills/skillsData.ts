
import { ReactNode } from 'react';
import { Shield, Code, Database, Layout, Server, Globe, Cpu, Terminal, Network, Lock } from 'lucide-react';

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  icon: ReactNode;
  title: string;
  skills: Skill[];
}

export const getSkillCategories = (): SkillCategory[] => [
  {
    icon: <Server className="w-6 h-6 text-mw-green" />,
    title: "Operating systems",
    skills: [{
      name: "Windows",
      level: 85
    }, {
      name: "Windows Server",
      level: 75
    }, {
      name: "Linux",
      level: 60
    }, {
      name: "Virtual Machine",
      level: 80
    }]
  }, {
    icon: <Network className="w-6 h-6 text-mw-green" />,
    title: "Networking",
    skills: [{
      name: "Cisco",
      level: 70
    }, {
      name: "Routing",
      level: 65
    }, {
      name: "Switching",
      level: 70
    }, {
      name: "VLAN",
      level: 70
    }]
  }, {
    icon: <Shield className="w-6 h-6 text-mw-green" />,
    title: "Cybersecurity",
    skills: [{
      name: "Fire-Wall",
      level: 60
    }, {
      name: "VPN",
      level: 50
    }, {
      name: "Security Audit - Learning in Progress...",
      level: 55
    }, {
      name: "IDS/IPS - Learning in Progress...",
      level: 60
    }]
  }, {
    icon: <Code className="w-6 h-6 text-mw-green" />,
    title: "Development",
    skills: [{
      name: "HTML",
      level: 75
    }, {
      name: "TypeScript - Learning in Progress...",
      level: 30
    }, {
      name: "Tailwind CSS - Learning in Progress...",
      level: 25
    }, {
      name: "VS Code",
      level: 85
    }]
  }, {
    icon: <Globe className="w-6 h-6 text-mw-green" />,
    title: "Languages",
    skills: [{
      name: "French",
      level: 100
    }, {
      name: "English",
      level: 90
    }, {
      name: "Japanese - Learning in Progress...",
      level: 15
    }, {
      name: "Spanish - Learning in Progress...",
      level: 10
    }]
  }
];
