
import { ProjectData } from '../components/projects/ProjectCard';

export const projectsData: ProjectData[] = [{
  title: "H.P.S. (Handheld Pentesting System)",
  description: "A standalone Raspberry Pi board for auditing and carrying out penetration tests on a network including a battery and a screen.",
  tags: ["RPi", "Debian", "Lynis", "ZPhisher", "PhishMailer", "VNC"],
  type: "professional",
  date: "2024-05",
  links: {
    demo: "https://dreynaud.noho.st/grav/Cegep/ESP",
    github: "##"
  }
}, {
  title: "Self-hosted Services",
  description: "Self-hosted NAS, VPN, Web Server, Knowledge Base and other Web Apps accessible through the Internet.",
  tags: ["YunoHost", "CasaOS", "Firefly", "Grav", "No-IP"],
  type: "personal",
  date: "ONGOING",
  links: {
    demo: "https://dreynaud.noho.st",
    github: "https://github.com/YunoHost"
  }
}, {
  title: "RestoRate",
  description: "A Django website like TripAdvisor but for restaurants that I had to do during my College Studies in Québec.",
  tags: ["Python", "Django", "VS Code", "HTML"],
  type: "professional",
  date: "2024-02",
  links: {
    demo: "##",
    github: "https://github.com/Coockiepickle/PIW_EXS"
  }
}, {
  title: "Smart Greenhouse",
  description: "A collection of scripts used to create a connected greenhouse with sensors and an Arduino board.",
  tags: ["C++", "Python", "Arduino"],
  type: "professional",
  date: "2023-11",
  links: {
    demo: "##",
    github: "https://github.com/Coockiepickle/SerreConnectee"
  }
}, 
// Additional projects that will be shown when "Show more projects" is clicked
{
  title: "Tactical Portfolio",
  description: "A Modern Warfare themed portfolio website built with Lovable.",
  tags: ["Lovable", "TypeScript", "Tailwind CSS", "Vite", "Shadcn-ui"],
  type: "personal",
  date: "ONGOING",
  links: {
    demo: "##",
    github: "https://github.com/coockiepickle/portfolio-mw-en"
  }
}, {
  title: "A.P.E.",
  description: "An Evolutionary Personal Assistant that can send mails, write daily news, control connected equipements and answer questions.",
  tags: ["n8n", "Ollama", "Llama 3", "Telegram"],
  type: "personal",
  date: "PLANNED",
  links: {
    demo: "##",
    github: "https://github.com/coockiepickle/APE"
  }
}, {
  title: "Secure File Storage",
  description: "A secure file storage solution using ZimaOS.",
  tags: ["ZimaOS", "React", "MongoDB", "Express"],
  type: "personal",
  date: "2025-03",
  links: {
    demo: "##",
    github: "https://github.com/IceWhaleTech/zimaos"
  }
}, {
  title: "Windows Print Server",
  description: "A print server in Windows Server to easily connect to every printer in the company, manage their settings and their queue.",
  tags: ["Windows Server", "Stormshield", "VMWare"],
  type: "personal",
  date: "2025-02",
  links: {
    demo: "##",
    github: "##"
  }
}];
