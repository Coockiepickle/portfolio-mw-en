
import { Code } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';

const ProjectsHeader = ({
  isVisible
}: {
  isVisible: boolean;
}) => {
  const { t } = useTranslation();
  
  return (
    <div className={cn(
      "text-center max-w-3xl mx-auto mb-16 transition-all duration-700 transform", 
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
    )}>
      <div className="flex flex-col items-center">
        <span className="mw-badge mb-4">
          <Code className="w-3 h-3 mr-1" />
          {t('projects.badge')}
        </span>
        <h2 className="mw-section-title text-white">{t('projects.title')}</h2>
      </div>
      <p className="mt-4">{t('projects.description')}</p>
    </div>
  );
};

export default ProjectsHeader;
