
import { useState, useCallback, useRef } from 'react';
import { Skill } from './skillsData';

const useSkillAnimation = () => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const [animatingSkills, setAnimatingSkills] = useState<{[key: string]: number}>({});
  const [animationComplete, setAnimationComplete] = useState<boolean>(true);
  const animationRef = useRef<number | null>(null);

  const handleCategoryMouseEnter = useCallback((catIndex: number, skills: Skill[]) => {
    if (animationComplete) {
      setHoveredCategory(catIndex);
      setAnimationComplete(false);
      
      // Initial values - start with more realistic base points
      const initialRandomValues: {[key: string]: number} = {};
      const previousValues: {[key: string]: number} = {};
      
      skills.forEach((skill, skillIndex) => {
        const skillKey = `${catIndex}-${skillIndex}`;
        // Start with a value between 20% and 60% of the final value for more realism
        const initialValue = Math.floor(skill.level * (0.2 + Math.random() * 0.4));
        initialRandomValues[skillKey] = initialValue;
        previousValues[skillKey] = initialValue;
      });
      
      setAnimatingSkills(initialRandomValues);
      
      // Use requestAnimationFrame for smooth animation
      const startTime = performance.now();
      const animationDuration = 1000; // 1 second for a smoother feel
      
      const animate = (timestamp: number) => {
        const elapsedTime = timestamp - startTime;
        const progress = Math.min(elapsedTime / animationDuration, 1);
        
        // Create easing functions for more realistic motion
        // Using cubic ease-out for natural deceleration
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        
        if (progress < 1) {
          // Generate smooth transitions with physics-inspired behavior
          const newRandomValues: {[key: string]: number} = {};
          
          skills.forEach((skill, skillIndex) => {
            const skillKey = `${catIndex}-${skillIndex}`;
            const targetValue = skill.level;
            const currentValue = previousValues[skillKey] || 0;
            
            // Add slight noise that decreases over time
            const noise = Math.random() * Math.max(0, 15 * (1 - easedProgress));
            
            // Calculate new value with easing
            let newValue = currentValue + (targetValue - currentValue) * (0.1 + easedProgress * 0.2);
            
            // Add some randomness early in the animation, less as we progress
            newValue += (Math.random() - 0.5) * noise;
            
            // Ensure values stay within bounds
            newValue = Math.min(Math.max(Math.round(newValue), 0), 100);
            
            newRandomValues[skillKey] = newValue;
            previousValues[skillKey] = newValue;
          });
          
          setAnimatingSkills(newRandomValues);
          animationRef.current = requestAnimationFrame(animate);
        } else {
          // Animation complete, set to actual values
          const finalValues: {[key: string]: number} = {};
          skills.forEach((skill, skillIndex) => {
            const skillKey = `${catIndex}-${skillIndex}`;
            finalValues[skillKey] = skill.level;
          });
          setAnimatingSkills(finalValues);
          setAnimationComplete(true);
          animationRef.current = null;
        }
      };
      
      animationRef.current = requestAnimationFrame(animate);
      
      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
          animationRef.current = null;
        }
        setAnimationComplete(true);
      };
    }
  }, [animationComplete]);

  const handleCategoryMouseLeave = useCallback(() => {
    setHoveredCategory(null);
  }, []);
  
  const getSkillLevel = useCallback((catIndex: number, skillIndex: number, skill: Skill) => {
    const skillKey = `${catIndex}-${skillIndex}`;
    
    if (hoveredCategory === catIndex && !animationComplete) {
      return animatingSkills[skillKey] || 0;
    }
    
    return skill.level;
  }, [hoveredCategory, animationComplete, animatingSkills]);

  return {
    hoveredCategory,
    animationComplete,
    handleCategoryMouseEnter,
    handleCategoryMouseLeave,
    getSkillLevel
  };
};

export default useSkillAnimation;
