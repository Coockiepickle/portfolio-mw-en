
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
import { sanitizeHtml } from '@/lib/security';

interface HeroDescriptionProps {
  loaded: boolean;
}

const HeroDescription = ({
  loaded
}: HeroDescriptionProps) => {
  const { t } = useTranslation();
  const description = t('hero.description');
  const sanitizedDescription = sanitizeHtml(description);
  
  return (
    <p 
      className={cn(
        "text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed transition-all duration-700 delay-300 ease-out transform", 
        loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
      )}
      dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
    ></p>
  );
};

export default HeroDescription;
