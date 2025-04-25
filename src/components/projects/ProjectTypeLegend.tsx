
import React from 'react';
import { useTranslation } from 'react-i18next';

const ProjectTypeLegend = () => {
  const { t } = useTranslation();
  
  return (
    <div className="flex justify-center items-center mt-6 gap-6">
      <div className="flex items-center">
        <div className="w-3 h-3 rounded-full bg-[#9b87f5] mr-2"></div>
        <span className="text-sm text-mw-light">{t('projects.projectTypes.professional')}</span>
      </div>
      <div className="flex items-center">
        <div className="w-3 h-3 rounded-full bg-mw-green mr-2"></div>
        <span className="text-sm text-mw-light">{t('projects.projectTypes.personal')}</span>
      </div>
    </div>
  );
};

export default ProjectTypeLegend;
