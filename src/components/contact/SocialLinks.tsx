
import { Linkedin, Github, Instagram } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div className="h-0.5 bg-mw-green bg-opacity-10 w-1/3"></div>
        <p className="text-mw-lightgray px-4 text-sm">OR CONNECT WITH ME</p>
        <div className="h-0.5 bg-mw-green bg-opacity-10 w-1/3"></div>
      </div>
      <div className="flex justify-center space-x-4">
        <a href="https://github.com/Coockiepickle" className="inline-flex items-center justify-center px-4 py-2 bg-mw-green bg-opacity-10 hover:bg-opacity-20 border border-mw-green border-opacity-20 rounded-sm text-mw-green transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md hover:shadow-mw-green/30 font-tactical font-semibold tracking-wide">
          <Github className="w-4 h-4 mr-2" />
          GitHub
        </a>
        <a href="https://linkedin.com/in/dreynaud" className="inline-flex items-center justify-center px-4 py-2 bg-mw-green bg-opacity-10 hover:bg-opacity-20 border border-mw-green border-opacity-20 rounded-sm text-mw-green transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md hover:shadow-mw-green/30 font-tactical font-semibold tracking-wide">
          <Linkedin className="w-4 h-4 mr-2" />
          LinkedIn
        </a>
        <a href="https://instagram.com/dreynaud13" className="inline-flex items-center justify-center px-4 py-2 bg-mw-green bg-opacity-10 hover:bg-opacity-20 border border-mw-green border-opacity-20 rounded-sm text-mw-green transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md hover:shadow-mw-green/30 font-tactical font-semibold tracking-wide">
          <Instagram className="w-4 h-4 mr-2" />
          Instagram
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
