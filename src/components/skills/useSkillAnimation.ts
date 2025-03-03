
import { useState } from 'react';
import { Skill } from './skillsData';

const useSkillAnimation = () => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const [animatingSkills, setAnimatingSkills] = useState<{[key: string]: number}>({});
  const [animationComplete, setAnimationComplete] = useState<boolean>(true);

  const handleCategoryMouseEnter = (catIndex: number, skills: Skill[]) => {
    if (animationComplete) {
      setHoveredCategory(catIndex);
      setAnimationComplete(false);
      
      // Initialize animation with random values
      const initialRandomValues: {[key: string]: number} = {};
      skills.forEach((skill, skillIndex) => {
        const skillKey = `${catIndex}-${skillIndex}`;
        initialRandomValues[skillKey] = Math.floor(Math.random() * 100);
      });
      setAnimatingSkills(initialRandomValues);
      
      // Use CSS animations and fewer state updates for smoother animation
      const startTime = Date.now();
      const animationDuration = 1000; // 1 second total duration
      const updateInterval = 250; // Even less frequent updates for smoother feel
      let currentUpdate = 0;
      
      const animationInterval = setInterval(() => {
        currentUpdate++;
        const elapsedTime = Date.now() - startTime;
        const progress = Math.min(elapsedTime / animationDuration, 1);
        
        if (progress < 1) {
          // Generate smooth transitions between random values
          const newRandomValues: {[key: string]: number} = {};
          skills.forEach((skill, skillIndex) => {
            const skillKey = `${catIndex}-${skillIndex}`;
            // Use a gradually stabilizing random factor as animation progresses
            const randomFactor = 1 - progress;
            const targetValue = skill.level;
            const randomVariation = Math.floor(Math.random() * 50 * randomFactor);
            const smoothedValue = targetValue * progress + randomVariation;
            newRandomValues[skillKey] = Math.min(Math.max(Math.floor(smoothedValue), 0), 100);
          });
          setAnimatingSkills(newRandomValues);
        } else {
          // Animation complete, set to actual values
          clearInterval(animationInterval);
          setAnimationComplete(true);
        }
      }, updateInterval);
      
      return () => clearInterval(animationInterval);
    }
  };

  const handleCategoryMouseLeave = () => {
    setHoveredCategory(null);
  };
  
  const getSkillLevel = (catIndex: number, skillIndex: number, skill: Skill) => {
    const skillKey = `${catIndex}-${skillIndex}`;
    
    if (hoveredCategory === catIndex && !animationComplete) {
      return animatingSkills[skillKey] || 0;
    }
    
    return skill.level;
  };

  return {
    hoveredCategory,
    animationComplete,
    handleCategoryMouseEnter,
    handleCategoryMouseLeave,
    getSkillLevel
  };
};

export default useSkillAnimation;
