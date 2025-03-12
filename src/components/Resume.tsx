
import { useState, useEffect, useRef } from 'react';
import { FileText, Download } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [followingCardStyle, setFollowingCardStyle] = useState({});
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('resume');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }

      if (sectionRef.current && cardRef.current) {
        const section = sectionRef.current;
        const sectionRect = section.getBoundingClientRect();
        const card = cardRef.current;
        const cardHeight = card.offsetHeight;
        
        const cardFullyVisible = sectionRect.top + 100 < 0;
        
        // Calculate the point where the card should stop
        // This ensures the card doesn't scroll past the bottom of the content area
        if (cardFullyVisible && sectionRect.bottom > cardHeight + 100) {
          const scrollProgress = Math.abs(sectionRect.top) - 150;
          const maxScroll = sectionRect.height - cardHeight - 350; // Increased this value to stop even earlier
          const translateY = Math.min(Math.max(0, scrollProgress), maxScroll);
          
          setFollowingCardStyle({
            transform: `translateY(${translateY}px)`,
            transition: 'transform 0.15s ease-out'
          });
        } else if (!cardFullyVisible) {
          setFollowingCardStyle({
            transform: 'translateY(0px)',
            transition: 'transform 0.15s ease-out'
          });
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    toast({
      title: "Resume downloading",
      description: "Download will start in a few moments",
    });
    // Here you would add actual download functionality
  };

  return (
    <section ref={sectionRef} id="resume" className="relative py-16 bg-mw-dark">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-mw-darker to-transparent"></div>
      <div className="absolute inset-0 mw-grid-pattern opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-mw-darker to-transparent"></div>
      
      <div className="mw-container relative z-10">
        <div className={cn("transition-all duration-700 transform", isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8")}>
          <div className="flex flex-col items-center">
            <span className="mw-badge mb-4">
              <FileText className="w-3 h-3 mr-1" />
              RESUME
            </span>
            <h2 className="mw-section-title text-white">My Curriculum Vitae</h2>
          </div>
        </div>
        
        <div className={cn("mt-8 transition-all duration-700 delay-150 transform", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* INVERTED ORDER - Download card first */}
            <div 
              ref={cardRef}
              style={followingCardStyle}
              className="mw-card p-4 w-full hover:shadow-lg hover:shadow-mw-green/30 hover:-translate-y-2 hover:border-mw-green/50 transition-all duration-500 aspect-square flex items-center"
            >
              <div className="w-full">
                <div className="text-center mb-2">
                  <h3 className="text-xl font-bold text-white mb-1">Download my resume</h3>
                  <p className="text-mw-lightgray text-sm">Download my resume to see all my skills and experience.</p>
                </div>
                
                <div className="flex flex-col items-center justify-center h-[calc(100%-5rem)]">
                  <FileText className="w-16 h-16 text-mw-green/70 mb-3" />
                  <a 
                    href="/CV_Reynaud_Damien.pdf" 
                    className="mw-button-primary inline-flex items-center justify-center"
                    onClick={handleDownload}
                    download
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download my resume (.PDF)
                  </a>
                </div>
              </div>
            </div>
            
            {/* Resume preview card second */}
            <div className="mw-card p-8 w-full hover:shadow-lg hover:shadow-mw-green/30 hover:-translate-y-2 hover:border-mw-green/50 transition-all duration-500 lg:col-span-2">
              <Card className="h-full bg-mw-dark border-mw-green/20">
                <CardHeader>
                  <CardTitle className="text-white">My resume</CardTitle>
                </CardHeader>
                <CardContent className="h-[650px]">
                  <div className="w-full h-full rounded overflow-hidden">
                    <iframe 
                      src="/CV_Reynaud_Damien.pdf#toolbar=0" 
                      className="w-full h-full border-0"
                      title="CV PDF"
                    >
                      Your browser does not support PDF display. 
                      <a href="/CV_Reynaud_Damien.pdf" target="_blank" rel="noopener noreferrer" className="text-mw-green underline">
                        Click here to see the CV
                      </a>
                    </iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
