
import { cn } from '@/lib/utils';
interface HeroDescriptionProps {
  loaded: boolean;
}
const HeroDescription = ({
  loaded
}: HeroDescriptionProps) => {
  return <p className={cn("text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed transition-all duration-700 delay-300 ease-out transform", loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8")}>...with both precision and strategic approach.<br />
Curious and attentive person with an ability to adapt and a strong intellectual curiosity.</p>;
};
export default HeroDescription;
