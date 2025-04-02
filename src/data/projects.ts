
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
  description: "A Modern Warfare themed portfolio website built with React and Tailwind CSS.",
  tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
  type: "personal",
  date: "2024-05",
  links: {
    demo: "##",
    github: "https://github.com/username/tactical-portfolio"
  }
}, {
  title: "Network Monitoring System",
  description: "A system for monitoring network traffic and detecting potential security threats.",
  tags: ["Python", "Flask", "Wireshark", "Elasticsearch"],
  type: "professional",
  date: "2023-10",
  links: {
    demo: "##",
    github: "https://github.com/username/network-monitoring"
  }
}, {
  title: "Secure File Storage",
  description: "A secure file storage solution with end-to-end encryption and access control.",
  tags: ["Node.js", "React", "MongoDB", "Express"],
  type: "personal",
  date: "2023-08",
  links: {
    demo: "https://secure-files.example.com",
    github: "https://github.com/username/secure-files"
  }
}, {
  title: "Smart Home Automation",
  description: "IoT system for home automation with voice control and mobile app integration.",
  tags: ["IoT", "React Native", "MQTT", "Raspberry Pi"],
  type: "personal",
  date: "2023-06",
  links: {
    demo: "##",
    github: "https://github.com/username/smart-home"
  }
}];
