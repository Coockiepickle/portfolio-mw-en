
import { useState, useCallback, useRef, useEffect } from 'react';
import { Skill } from './skillsData';

const useSkillAnimation = () => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const [animatingSkills, setAnimatingSkills] = useState<{[key: string]: number}>({});
  const [animationComplete, setAnimationComplete] = useState<boolean>(true);
  const animationRef = useRef<number | null>(null);
  
  // Cleanup animation frame on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const handleCategoryMouseEnter = useCallback((catIndex: number, skills: Skill[]) => {
    if (animationComplete) {
      setHoveredCategory(catIndex);
      setAnimationComplete(false);
      
      // Initialize with zero values
      const initialValues: {[key: string]: number} = {};
      
      skills.forEach((skill, skillIndex) => {
        const skillKey = `${catIndex}-${skillIndex}`;
        initialValues[skillKey] = 0;
      });
      
      setAnimatingSkills(initialValues);
      
      // Use requestAnimationFrame for smooth animation
      const startTime = performance.now();
      const animationDuration = 1500; // 1.5 seconds for smoother animation
      
      const animate = (timestamp: number) => {
        const elapsedTime = timestamp - startTime;
        const progress = Math.min(elapsedTime / animationDuration, 1);
        
        // Using custom bezier easing for more natural, smoother animation
        // This creates a slow start, faster middle, smooth end
        const easeOutQuint = (x: number) => 1 - Math.pow(1 - x, 5);
        const easedProgress = easeOutQuint(progress);
        
        if (progress < 1) {
          // Generate smooth transitions
          const newValues: {[key: string]: number} = {};
          
          skills.forEach((skill, skillIndex) => {
            const skillKey = `${catIndex}-${skillIndex}`;
            const targetValue = skill.level;
            
            // Calculate smooth progression to the target
            const newValue = Math.round(targetValue * easedProgress);
            
            newValues[skillKey] = newValue;
          });
          
          setAnimatingSkills(newValues);
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
    
    return hoveredCategory === catIndex ? skill.level : 0;
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
