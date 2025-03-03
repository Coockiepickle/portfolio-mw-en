
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

// Create icon factory functions to avoid using JSX in .ts files
const createServerIcon = () => <Server className="w-6 h-6 text-mw-green" />;
const createNetworkIcon = () => <Network className="w-6 h-6 text-mw-green" />;
const createShieldIcon = () => <Shield className="w-6 h-6 text-mw-green" />;
const createCodeIcon = () => <Code className="w-6 h-6 text-mw-green" />;
const createGlobeIcon = () => <Globe className="w-6 h-6 text-mw-green" />;

export const getSkillCategories = (): SkillCategory[] => [
  {
    icon: createServerIcon(),
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
    icon: createNetworkIcon(),
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
    icon: createShieldIcon(),
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
    icon: createCodeIcon(),
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
    icon: createGlobeIcon(),
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
