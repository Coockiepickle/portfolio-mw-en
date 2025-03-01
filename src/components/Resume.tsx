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
      title: "Téléchargement du CV",
      description: "Le téléchargement va commencer dans quelques instants",
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
            CURRICULUM VITAE
          </span>
          <h2 className="mw-section-title text-white">Mon CV</h2>
        </div>
        
        <div className={cn("mt-8 transition-all duration-700 delay-150 transform", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="mw-card p-8 w-full hover:shadow-lg hover:shadow-mw-green/30 hover:-translate-y-2 hover:border-mw-green/50 transition-all duration-500 lg:col-span-2">
              <Card className="h-full bg-mw-dark border-mw-green/20">
                <CardHeader>
                  <CardTitle className="text-white">Mon CV</CardTitle>
                  <CardDescription className="text-mw-lightgray">Visualisez mon CV</CardDescription>
                </CardHeader>
                <CardContent className="h-[650px]">
                  <div className="w-full h-full rounded overflow-hidden">
                    <iframe 
                      src="/CV_Reynaud_Damien.pdf#toolbar=0" 
                      className="w-full h-full border-0"
                      title="CV PDF"
                    >
                      Votre navigateur ne supporte pas l'affichage des PDFs. 
                      <a href="/CV_Reynaud_Damien.pdf" target="_blank" rel="noopener noreferrer" className="text-mw-green underline">
                        Cliquez ici pour voir le CV
                      </a>
                    </iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mw-card p-6 w-full hover:shadow-lg hover:shadow-mw-green/30 hover:-translate-y-2 hover:border-mw-green/50 transition-all duration-500">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-white mb-2">Télécharger mon CV</h3>
                <p className="text-mw-lightgray">Download my resume to see all my skills and experience.</p>
              </div>
              
              <div className="flex flex-col items-center justify-center h-[300px]">
                <FileText className="w-20 h-20 text-mw-green/70 mb-4" />
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
    </section>
  );
};

export default Resume;
