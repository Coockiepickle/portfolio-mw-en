import { useState, useEffect, useCallback } from 'react';
import { User, Menu, X, Shield, Target, Briefcase, Award, Send, FileText, Clock, Download, ChevronDown, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);

      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(prev => prev !== sectionId ? sectionId : prev);
        }
      });
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  }, []);

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent triggering the parent onClick
    
    // Create a link element and trigger the download
    const link = document.createElement('a');
    link.href = '/CV_Reynaud_Damien.pdf';
    link.download = 'CV_Reynaud_Damien.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navLinks = [{
    id: 'home',
    label: t('navbar.home'),
    icon: <Target className="mr-2 h-4 w-4" />
  }, {
    id: 'about',
    label: t('navbar.about'),
    icon: <User className="mr-2 h-4 w-4" />
  }, {
    id: 'projects',
    label: t('navbar.projects'),
    icon: <Briefcase className="mr-2 h-4 w-4" />
  }, {
    id: 'skills',
    label: t('navbar.skills'),
    icon: <Shield className="mr-2 h-4 w-4" />
  }, {
    id: 'achievements',
    label: t('navbar.formation'),
    icon: <GraduationCap className="mr-2 h-4 w-4" />
  }, {
    id: 'resume',
    label: t('navbar.cv'),
    icon: <FileText className="mr-2 h-4 w-4" />,
    hasDropdown: true
  }, {
    id: 'contact',
    label: t('navbar.contact'),
    icon: <Send className="mr-2 h-4 w-4" />
  }];

  return <header className={cn("fixed top-4 left-4 right-4 z-50 transition-all duration-300 rounded-full", isScrolled ? "bg-mw-darker bg-opacity-90 backdrop-blur-md shadow-md" : "bg-transparent")}>
      <div className="px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            
            <a href="#" className="flex items-center">
              <span className="text-lg font-bold text-white tracking-wider">Damien<span className="text-mw-green">·</span>Reynaud</span>
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-0.5">
            {navLinks.map(link => (
              link.hasDropdown ? (
                <DropdownMenu key={link.id} open={undefined}>
                  <DropdownMenuTrigger asChild>
                    <button 
                      onClick={() => scrollToSection(link.id)} 
                      className={cn("mw-nav-link group", activeSection === link.id && "active")}
                    >
                      <span className="flex items-center">
                        {link.label}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </span>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-mw-darker border-mw-green/30 text-mw-light">
                    <DropdownMenuItem 
                      className="cursor-pointer hover:bg-mw-dark hover:text-white focus:bg-mw-dark focus:text-white" 
                      onClick={handleDownload}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      <span>{t('navbar.downloadCV')}</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <button key={link.id} onClick={() => scrollToSection(link.id)} className={cn("mw-nav-link relative", activeSection === link.id && "active", link.id === 'contact' ? `bg-white rounded-full px-4 py-2 hover:bg-mw-green transition-colors duration-300 overflow-hidden ${activeSection === 'contact' ? 'text-mw-green' : 'text-black'}` : "after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-mw-green after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left")}>
                  <span className="flex items-center relative z-10">
                    {link.label}
                  </span>
                </button>
              )
            ))}
          </nav>
          
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-mw-light hover:text-white focus:outline-none">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      <div className={cn("md:hidden fixed inset-0 z-40 bg-mw-darker bg-opacity-95 backdrop-blur-md transition-all duration-300 ease-in-out transform", isMenuOpen ? "translate-x-0" : "translate-x-full")}>
        <div className="flex flex-col h-full pt-20 px-6 space-y-6">
          {navLinks.map(link => {
            if (link.hasDropdown) {
              return (
                <div key={link.id} className="space-y-2">
                  <button 
                    onClick={() => scrollToSection(link.id)} 
                    className="flex items-center p-3 text-lg text-mw-light hover:text-white border-b border-mw-green border-opacity-20 w-full"
                  >
                    {link.icon}
                    {link.label}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <button 
                    onClick={handleDownload}
                    className="flex items-center p-3 text-lg text-mw-light hover:text-white ml-6 w-full"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    {t('navbar.downloadCV')}
                  </button>
                </div>
              );
            }
            
            return (
              <button 
                key={link.id} 
                onClick={() => scrollToSection(link.id)} 
                className="flex items-center p-3 text-lg text-mw-light hover:text-white border-b border-mw-green border-opacity-20"
              >
                {link.icon}
                {link.label}
              </button>
            );
          })}
        </div>
      </div>
    </header>;
};

export default Navbar;
