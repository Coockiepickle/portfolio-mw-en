
import { ProjectData } from '../components/ProjectCard';

export const projectsData: ProjectData[] = [{
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
