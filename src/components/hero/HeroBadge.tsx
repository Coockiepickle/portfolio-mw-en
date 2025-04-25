
import { cn } from '@/lib/utils';
import { Target } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface HeroBadgeProps {
  loaded: boolean;
}

const HeroBadge = ({ loaded }: HeroBadgeProps) => {
  const { t } = useTranslation();
  
  return (
    <div 
      className={cn(
        "mb-6 transition-all duration-700 ease-out transform",
        loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
      )}
    >
      <span className="mw-badge mb-4">
        <Target className="w-3 h-3 mr-1" />
        {t('hero.badge')}
      </span>
    </div>
  );
};

export default HeroBadge;
