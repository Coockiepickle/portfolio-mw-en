
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

interface HeroDescriptionProps {
  loaded: boolean;
}

const HeroDescription = ({
  loaded
}: HeroDescriptionProps) => {
  const { t } = useTranslation();
  
  return (
    <p 
      className={cn(
        "text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed transition-all duration-700 delay-300 ease-out transform", 
        loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
      )}
      dangerouslySetInnerHTML={{ __html: t('hero.description') }}
    ></p>
  );
};

export default HeroDescription;
