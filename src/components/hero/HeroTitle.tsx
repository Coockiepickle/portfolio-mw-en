
import { cn } from '@/lib/utils';

interface HeroTitleProps {
  loaded: boolean;
  typedText: string;
}

const HeroTitle = ({ loaded, typedText }: HeroTitleProps) => {
  return (
    <h1 
      className={cn(
        "text-white mb-6 leading-tight transition-all duration-700 delay-150 ease-out transform",
        loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
      )}
    >
      DAMIEN REYNAUD
      <div className="h-[2px] w-20 bg-mw-green mx-auto my-4"></div>
      <span className="font-code text-2xl sm:text-3xl font-light text-mw-green opacity-90">
        {typedText}
        <span className="inline-block w-1 h-6 ml-1 bg-mw-green animate-pulse"></span>
      </span>
    </h1>
  );
};

export default HeroTitle;
