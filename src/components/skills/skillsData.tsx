
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
      name: "Docker",
      level: 65
    }, {
      name: "Windows / Windows Server",
      level: 80
    }, {
      name: "Linux",
      level: 60
    }, {
      name: "Virtualization",
      level: 80
    }]
  }, {
    icon: createNetworkIcon(),
    title: "Networking",
    skills: [{
      name: "Cisco",
      level: 70
    }, {
      name: "Routing and Switching",
      level: 65
    }, {
      name: "VoIP",
      level: 40
    }, {
      name: "VLAN",
      level: 70
    }]
  }, {
    icon: createShieldIcon(),
    title: "Cybersecurity",
    skills: [{
      name: "Fire-Wall",
      level: 70
    }, {
      name: "VPN",
      level: 50
    }, {
      name: "Network Security - Learning in Progress...",
      level: 60
    }, {
      name: "IDS/IPS - Learning in Progress...",
      level: 50
    }]
  }, {
    icon: createCodeIcon(),
    title: "Development",
    skills: [{
      name: "HTML / Tailwind CSS - Learning in Progress...",
      level: 60
    }, {
      name: "TypeScript - Learning in Progress...",
      level: 30
    }, {
      name: "Python",
      level: 70
    }, {
      name: "PowerShell",
      level: 75
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
