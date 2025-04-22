
import { useEffect, useState, useCallback } from 'react';
import { cn } from '@/lib/utils';
import ContactHeader from './contact/ContactHeader';
import ContactCard from './contact/ContactCard';
import AnimatedGridBackground from './hero/AnimatedGridBackground';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = useCallback(() => {
    // Use requestAnimationFrame for smoother scrolling
    requestAnimationFrame(() => {
      const element = document.getElementById('contact');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    });
  }, []);

  useEffect(() => {
    // Use passive event listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <section id="contact" className="relative py-16">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-50">
        <AnimatedGridBackground />
      </div>
      
      <div className="mw-container relative z-10">
        <ContactHeader isVisible={isVisible} />
        <ContactCard isVisible={isVisible} />
      </div>
    </section>
  );
};

export default Contact;
