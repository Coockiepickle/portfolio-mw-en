import { useState, useEffect, useCallback } from 'react';
import { Menu, X, Download, Diamond } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
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
    e.stopPropagation();
    
    const link = document.createElement('a');
    link.href = '/CV_Reynaud_Damien.pdf';
    link.download = 'CV_Reynaud_Damien.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navLinks = [
    { id: 'home', label: t('navbar.home') },
    { id: 'projects', label: t('navbar.projects') },
    { id: 'about', label: t('navbar.about') },
    { id: 'skills', label: t('navbar.skills') },
    { id: 'achievements', label: t('navbar.formation') }
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-500",
      isScrolled 
        ? "bg-gradient-to-r from-primary/95 via-primary/90 to-accent/95 backdrop-blur-lg shadow-2xl shadow-primary/20" 
        : "bg-gradient-to-r from-primary/80 via-primary/60 to-accent/80 backdrop-blur-md"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Diamond className="h-8 w-8 text-white transform rotate-45" />
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl"></div>
            </div>
            <a href="#" className="flex items-center space-x-1">
              <span className="text-xl md:text-2xl font-bold text-white tracking-wider font-tactical">
                DAMIEN
              </span>
              <span className="text-xl md:text-2xl font-bold text-white/80 tracking-wider font-tactical">
                REYNAUD
              </span>
            </a>
          </div>
          
          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <button 
                key={link.id} 
                onClick={() => scrollToSection(link.id)} 
                className={cn(
                  "relative text-white/90 hover:text-white transition-all duration-300 font-medium tracking-wide",
                  "after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0",
                  "after:bg-white after:transition-all after:duration-300 hover:after:w-full",
                  activeSection === link.id && "text-white after:w-full"
                )}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
                >
                  {t('navbar.cv')}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background/95 backdrop-blur-md border-primary/30">
                <DropdownMenuItem 
                  className="cursor-pointer hover:bg-primary/20 focus:bg-primary/20" 
                  onClick={handleDownload}
                >
                  <Download className="mr-2 h-4 w-4" />
                  <span>{t('navbar.downloadCV')}</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-white/20 text-white border-white/30 hover:bg-white/30 hover:scale-105 transition-all duration-300 backdrop-blur-sm shadow-lg"
              variant="outline"
            >
              {t('navbar.contact')}
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden p-2 text-white hover:text-white/80 focus:outline-none transition-colors duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out transform",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{
          backgroundColor: 'hsl(var(--background))',
          backdropFilter: 'blur(12px)'
        }}
      >
        <div className="flex flex-col h-full pt-20 px-6 space-y-6">
          {navLinks.map(link => (
            <button 
              key={link.id} 
              onClick={() => scrollToSection(link.id)} 
              className="flex items-center p-4 text-lg text-foreground hover:text-primary border-b border-border transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
          
          <div className="space-y-4 pt-4">
            <button 
              onClick={handleDownload}
              className="flex items-center p-4 text-lg text-foreground hover:text-primary w-full"
            >
              <Download className="mr-2 h-4 w-4" />
              {t('navbar.downloadCV')}
            </button>
            
            <Button 
              onClick={() => scrollToSection('contact')}
              className="w-full bg-primary hover:bg-primary/90"
            >
              {t('navbar.contact')}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;