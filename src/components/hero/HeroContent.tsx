
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
import HeroBadge from './HeroBadge';
import HeroTitle from './HeroTitle';
import HeroDescription from './HeroDescription';
import HeroButtons from './HeroButtons';

interface HeroContentProps {
  loaded: boolean;
  typedText: string;
  handleScrollToSection: (sectionId: string) => void;
}

const HeroContent = ({ loaded, typedText, handleScrollToSection }: HeroContentProps) => {
  const { t } = useTranslation();

  return (
    <div className="mw-container relative z-10">
      <div className="max-w-3xl mx-auto text-center">
        <HeroBadge loaded={loaded} />
        <HeroTitle loaded={loaded} typedText={typedText} />
        <HeroDescription loaded={loaded} />
        <HeroButtons loaded={loaded} handleScrollToSection={handleScrollToSection} />
      </div>
    </div>
  );
};

export default HeroContent;
