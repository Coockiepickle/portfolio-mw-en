
import { useState, useEffect } from 'react';
import { User, Menu, X, Shield, Target, Briefcase, Award, Send, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState('en'); // 'en' for English, 'fr' for French

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);

      // Update active section based on scroll position
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

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'fr' : 'en');
  };

  // Translated labels based on current language
  const translations = {
    en: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      achievements: 'Achievements',
      contact: 'Contact',
    },
    fr: {
      home: 'Accueil',
      about: 'À propos',
      projects: 'Projets',
      skills: 'Compétences',
      achievements: 'Réalisations',
      contact: 'Contact',
    }
  };

  const t = translations[language as keyof typeof translations];

  const navLinks = [{
    id: 'home',
    label: t.home,
    icon: <Target className="mr-2 h-4 w-4" />
  }, {
    id: 'about',
    label: t.about,
    icon: <User className="mr-2 h-4 w-4" />
  }, {
    id: 'projects',
    label: t.projects,
    icon: <Briefcase className="mr-2 h-4 w-4" />
  }, {
    id: 'skills',
    label: t.skills,
    icon: <Shield className="mr-2 h-4 w-4" />
  }, {
    id: 'achievements',
    label: t.achievements,
    icon: <Award className="mr-2 h-4 w-4" />
  }, {
    id: 'contact',
    label: t.contact,
    icon: <Send className="mr-2 h-4 w-4" />
  }];

  return <header className={cn("fixed top-0 left-0 w-full z-50 transition-all duration-300", isScrolled ? "bg-mw-darker bg-opacity-90 backdrop-blur-md shadow-md" : "bg-transparent")}>
      <div className="mw-container py-4 md:py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            
            <a href="#" className="flex items-center">
              <span className="text-xl font-bold text-white tracking-wider">Damien<span className="text-mw-green">·</span>Reynaud<span className="text-mw-green">·</span>Portfolio</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map(link => <button key={link.id} onClick={() => scrollToSection(link.id)} className={cn("mw-nav-link", activeSection === link.id && "active")}>
                <span className="flex items-center">
                  {link.label}
                </span>
              </button>)}
              
            {/* Language Toggle Button */}
            <button 
              onClick={toggleLanguage} 
              className="ml-3 p-2 flex items-center justify-center bg-mw-darker bg-opacity-50 text-mw-light hover:text-white rounded-full transition-colors"
              aria-label={language === 'en' ? 'Switch to French' : 'Passer à l\'anglais'}
            >
              <Globe className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium">{language === 'en' ? 'FR' : 'EN'}</span>
            </button>
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-mw-light hover:text-white focus:outline-none">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={cn("md:hidden fixed inset-0 z-40 bg-mw-darker bg-opacity-95 backdrop-blur-md transition-all duration-300 ease-in-out transform", isMenuOpen ? "translate-x-0" : "translate-x-full")}>
        <div className="flex flex-col h-full pt-20 px-6 space-y-6">
          {navLinks.map(link => <button key={link.id} onClick={() => scrollToSection(link.id)} className="flex items-center p-3 text-lg text-mw-light hover:text-white border-b border-mw-green border-opacity-20">
              {link.icon}
              {link.label}
            </button>)}
            
          {/* Language Toggle in Mobile Menu */}
          <button 
            onClick={toggleLanguage} 
            className="flex items-center p-3 text-lg text-mw-light hover:text-white border-b border-mw-green border-opacity-20"
          >
            <Globe className="mr-2 h-4 w-4" />
            {language === 'en' ? 'Passer au français' : 'Switch to English'}
          </button>
        </div>
      </div>
    </header>;
};
export default Navbar;
