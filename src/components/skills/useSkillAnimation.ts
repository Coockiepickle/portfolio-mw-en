
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
    setHoveredCategory(catIndex);
    setAnimationComplete(false);
    
    // Initialize with target values (show full values immediately)
    const initialValues: {[key: string]: number} = {};
    
    skills.forEach((skill, skillIndex) => {
      const skillKey = `${catIndex}-${skillIndex}`;
      initialValues[skillKey] = skill.level;
    });
    
    setAnimatingSkills(initialValues);
    setAnimationComplete(true);
    
    // The animation will be handled by CSS in the SkillBar component now
  }, []);

  const handleCategoryMouseLeave = useCallback(() => {
    setHoveredCategory(null);
  }, []);
  
  const getSkillLevel = useCallback((catIndex: number, skillIndex: number, skill: Skill) => {
    const skillKey = `${catIndex}-${skillIndex}`;
    
    if (hoveredCategory === catIndex) {
      return skill.level;
    }
    
    // Return full skill level by default (no animation on load)
    return skill.level;
  }, [hoveredCategory]);

  return {
    hoveredCategory,
    animationComplete,
    handleCategoryMouseEnter,
    handleCategoryMouseLeave,
    getSkillLevel
  };
};

export default useSkillAnimation;
