
import { useState, useCallback } from 'react';
import { Skill } from './skillsData';

const useSkillAnimation = () => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const [animatingSkills, setAnimatingSkills] = useState<{[key: string]: number}>({});
  const [animationComplete, setAnimationComplete] = useState<boolean>(true);

  const handleCategoryMouseEnter = useCallback((catIndex: number, skills: Skill[]) => {
    if (animationComplete) {
      setHoveredCategory(catIndex);
      setAnimationComplete(false);
      
      // Use fewer initial random values for better performance
      const initialRandomValues: {[key: string]: number} = {};
      skills.forEach((skill, skillIndex) => {
        const skillKey = `${catIndex}-${skillIndex}`;
        initialRandomValues[skillKey] = Math.floor(Math.random() * 100);
      });
      setAnimatingSkills(initialRandomValues);
      
      // Use requestAnimationFrame for smoother animation
      const startTime = Date.now();
      const animationDuration = 800; // Slightly shorter for better responsiveness
      const updateInterval = 100; // More frequent updates for smoother animation
      
      let rafId: number;
      const animate = () => {
        const elapsedTime = Date.now() - startTime;
        const progress = Math.min(elapsedTime / animationDuration, 1);
        
        if (progress < 1) {
          // Generate smooth transitions between random values
          const newRandomValues: {[key: string]: number} = {};
          skills.forEach((skill, skillIndex) => {
            const skillKey = `${catIndex}-${skillIndex}`;
            // Use a gradually stabilizing random factor as animation progresses
            const randomFactor = (1 - progress) * 0.5; // Reduced random factor for smoother animation
            const targetValue = skill.level;
            const randomVariation = Math.floor(Math.random() * 30 * randomFactor);
            const smoothedValue = targetValue * progress + randomVariation;
            newRandomValues[skillKey] = Math.min(Math.max(Math.floor(smoothedValue), 0), 100);
          });
          setAnimatingSkills(newRandomValues);
          rafId = requestAnimationFrame(animate);
        } else {
          // Animation complete, set to actual values
          const finalValues: {[key: string]: number} = {};
          skills.forEach((skill, skillIndex) => {
            const skillKey = `${catIndex}-${skillIndex}`;
            finalValues[skillKey] = skill.level;
          });
          setAnimatingSkills(finalValues);
          setAnimationComplete(true);
        }
      };
      
      rafId = requestAnimationFrame(animate);
      
      return () => {
        cancelAnimationFrame(rafId);
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
