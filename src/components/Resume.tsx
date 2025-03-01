
import { useState, useEffect } from 'react';
import { FileText, Download } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);
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
    <section id="resume" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 mw-grid-pattern opacity-30"></div>
      
      <div className="mw-container relative z-10">
        <div className={cn("transition-all duration-700 transform", isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8")}>
          <span className="mw-badge mb-4">
            <FileText className="w-3 h-3 mr-1" />
            RESUME
          </span>
          <h2 className="mw-section-title text-white">My Curriculum Vitae</h2>
        </div>
        
        <div className={cn("mt-8 transition-all duration-700 delay-150 transform", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
            
            <div className="mw-card p-4 w-full hover:shadow-lg hover:shadow-mw-green/30 hover:-translate-y-2 hover:border-mw-green/50 transition-all duration-500 aspect-square flex items-center">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
