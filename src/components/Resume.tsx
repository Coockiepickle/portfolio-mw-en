
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* CV Preview Card */}
            <div className="mw-card p-8 w-full hover:shadow-lg hover:shadow-mw-green/30 hover:-translate-y-2 hover:border-mw-green/50 transition-all duration-500">
              <Card className="h-full bg-mw-dark border-mw-green/20">
                <CardHeader>
                  <CardTitle className="text-white">Prévisualisation du CV</CardTitle>
                  <CardDescription className="text-mw-lightgray">Consultez mon CV directement ici</CardDescription>
                </CardHeader>
                <CardContent className="h-[500px] overflow-auto">
                  <div className="space-y-6 text-mw-lightgray">
                    {/* Formation */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Formation</h3>
                      <div className="pl-4 border-l-2 border-mw-green/30 space-y-4">
                        <div>
                          <p className="text-white">Master en Informatique</p>
                          <p className="text-sm">Université XYZ • 2018-2020</p>
                          <p className="text-sm mt-1">Spécialisation en développement web et technologies modernes</p>
                        </div>
                        <div>
                          <p className="text-white">Licence en Informatique</p>
                          <p className="text-sm">Université ABC • 2015-2018</p>
                          <p className="text-sm mt-1">Fondamentaux en programmation et théorie informatique</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Expérience */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Expérience Professionnelle</h3>
                      <div className="pl-4 border-l-2 border-mw-green/30 space-y-4">
                        <div>
                          <p className="text-white">Développeur Web Senior</p>
                          <p className="text-sm">Entreprise Tech • 2020-Présent</p>
                          <p className="text-sm mt-1">Développement d'applications web avec React, Node.js et technologies modernes</p>
                        </div>
                        <div>
                          <p className="text-white">Développeur Frontend</p>
                          <p className="text-sm">Startup Innovante • 2018-2020</p>
                          <p className="text-sm mt-1">Création d'interfaces utilisateur réactives et accessibles</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Compétences */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Compétences Techniques</h3>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-mw-darker p-2 rounded text-center">React</div>
                        <div className="bg-mw-darker p-2 rounded text-center">TypeScript</div>
                        <div className="bg-mw-darker p-2 rounded text-center">Node.js</div>
                        <div className="bg-mw-darker p-2 rounded text-center">Tailwind CSS</div>
                        <div className="bg-mw-darker p-2 rounded text-center">Git</div>
                        <div className="bg-mw-darker p-2 rounded text-center">UI/UX Design</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Download Card */}
            <div className="mw-card p-8 w-full hover:shadow-lg hover:shadow-mw-green/30 hover:-translate-y-2 hover:border-mw-green/50 transition-all duration-500">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2">Télécharger mon CV</h3>
                <p className="text-mw-lightgray">Téléchargez mon CV complet pour voir l'ensemble de mes compétences et expériences.</p>
              </div>
              
              <div className="flex flex-col items-center justify-center h-[400px]">
                <FileText className="w-24 h-24 text-mw-green/70 mb-6" />
                <p className="text-mw-lightgray mb-8 text-center">
                  Préférez-vous avoir une version hors ligne ? <br />
                  Téléchargez mon CV complet au format PDF.
                </p>
                <a 
                  href="#" 
                  className="mw-button-primary inline-flex items-center justify-center"
                  onClick={handleDownload}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Télécharger mon CV
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
