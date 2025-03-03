
import { ProjectData } from '../components/projects/ProjectCard';

export const projectsData: ProjectData[] = [{
  title: "H.P.S. (Handheld Pentesting System)",
  description: "A standalone Raspberry Pi board for auditing and carrying out penetration tests on a network including a battery and a screen.",
  tags: ["RPi", "Debian", "Lynis", "ZPhisher", "PhishMailer", "VNC"],
  type: "professional",
  date: "2023-09",
  links: {
    demo: "https://dreynaud.noho.st/grav/Cegep/ESP",
    github: "#"
  }
}, {
  title: "Self-hosted Services",
  description: "Self-hosted NAS, VPN, Web Server, Knowledge Base and other Web Apps accessible through the Internet",
  tags: ["YunoHost", "CasaOS", "Firefly", "Grav", "No-IP"],
  type: "professional",
  date: "2023-03",
  links: {
    demo: "dreynaud.noho.st",
    github: "https://github.com/YunoHost"
  }
}, {
  title: "RestoRate",
  description: "A Django website like TripAdvisor but for restaurants that I had to do during my College Studies in Québec.",
  tags: ["Python", "Django", "VS Code", "HTML"],
  type: "personal",
  date: "2022-11",
  links: {
    demo: "#",
    github: "https://github.com/Coockiepickle/PIW_EXS"
  }
}, {
  title: "Smart Greenhouse",
  description: "A collection of scripts used to create a connected greenhouse with sensors and an Arduino board..",
  tags: ["C++", "Python", "Arduino"],
  type: "professional",
  date: "2022-07",
  links: {
    demo: "#",
    github: "https://github.com/Coockiepickle/SerreConnectee"
  }
}];
