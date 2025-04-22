
import { useState, useCallback } from 'react';
import { Send, Copy, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const EmailSection = () => {
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();
  const email = 'dreynaud13@pm.me';

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(email).then(() => {
      setIsCopied(true);
      toast({
        title: "Copied!",
        description: "Email address copied to clipboard"
      });
      setTimeout(() => setIsCopied(false), 2000);
    }).catch(err => {
      toast({
        title: "Failed to copy",
        description: "Please try again or copy manually",
        variant: "destructive"
      });
      console.error('Failed to copy: ', err);
    });
  }, [toast]);

  return (
    <div>
      <p className="text-mw-lightgray mb-6 text-center">
        Have you got a project in mind? Do you want me to be a part of your company? <br />
        Send me an e-mail and I'll answer as fast as possible.
      </p>
      
      <div className="flex justify-center mb-6">
        <div className="inline-block px-3 py-2 border border-dashed border-mw-green border-opacity-30 rounded-sm bg-mw-darker bg-opacity-50">
          <div className="flex items-center">
            <a href={`mailto:${email}`} className="text-mw-green font-medium hover:underline transition-all">
              {email}
            </a>
            <button onClick={copyToClipboard} className="ml-2 p-1.5 bg-mw-green bg-opacity-10 hover:bg-opacity-20 rounded-sm transition-all duration-300 text-mw-green" aria-label="Copy email to clipboard">
              {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSection;

