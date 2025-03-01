import { useState, useEffect } from 'react';
import { User, Menu, X, Shield, Target, Briefcase, Award, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);

      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    {
      id: 'home',
      label: 'Home',
      icon: <Target className="mr-2 h-4 w-4" />
    },
    {
      id: 'about',
      label: 'About',
      icon: <User className="mr-2 h-4 w-4" />
    },
    {
      id: 'projects',
      label: 'Projects',
      icon: <Briefcase className="mr-2 h-4 w-4" />
    },
    {
      id: 'skills',
      label: 'Skills',
      icon: <Shield className="mr-2 h-4 w-4" />
    },
    {
      id: 'achievements',
      label: 'Achievements',
      icon: <Award className="mr-2 h-4 w-4" />
    },
    {
      id: 'contact',
      label: 'Contact',
      icon: <Send className="mr-2 h-4 w-4" />
    }
  ];

  return <header className={cn("fixed top-0 left-0 w-full z-50 transition-all duration-300", isScrolled ? "bg-mw-darker bg-opacity-90 backdrop-blur-md shadow-md" : "bg-transparent")}>
      <div className="mw-container py-4 md:py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-xl font-bold text-white tracking-wider">Damien<span className="text-mw-green">·</span>Reynaud<span className="text-mw-green">·</span>Portfolio</span>
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-1">
            {navLinks.map(link => <button key={link.id} onClick={() => scrollToSection(link.id)} className={cn("mw-nav-link", activeSection === link.id && "active")}>
                <span className="flex items-center">
                  {link.label}
                </span>
              </button>)}
          </nav>
          
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-mw-light hover:text-white focus:outline-none">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      <div className={cn(
        "md:hidden fixed inset-0 z-40 bg-mw-darker bg-opacity-95 backdrop-blur-md transition-all duration-300 ease-in-out transform",
        isMenuOpen ? "translate-x-0" : "translate-x-full",
        isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
      )}>
        <div className="flex flex-col h-full pt-20 px-6 space-y-6">
          {navLinks.map(link => <button key={link.id} onClick={() => scrollToSection(link.id)} className="flex items-center p-3 text-lg text-mw-light hover:text-white border-b border-mw-green border-opacity-20">
              {link.icon}
              {link.label}
            </button>)}
        </div>
      </div>
    </header>;
};

export default Navbar;
