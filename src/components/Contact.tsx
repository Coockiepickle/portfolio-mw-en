
import { cn } from '@/lib/utils';
import ContactHeader from './contact/ContactHeader';
import ContactCard from './contact/ContactCard';
import AnimatedGridBackground from './hero/AnimatedGridBackground';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const Contact = () => {
  const { isVisible, elementRef } = useIntersectionObserver();

  return (
    <section id="contact" ref={elementRef} className="relative py-8">
      <div className="absolute inset-0 opacity-50">
        <AnimatedGridBackground />
      </div>
      
      <div className="mw-container relative z-10">
        <ContactHeader isVisible={isVisible} />
        <div className="-mt-8">
          <ContactCard isVisible={isVisible} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
