
import { useState, useCallback, useRef, useEffect } from 'react';
import { Skill } from './skillsData';

const useSkillAnimation = () => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
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
  }, []);

  const handleCategoryMouseLeave = useCallback(() => {
    setHoveredCategory(null);
  }, []);
  
  const getSkillLevel = useCallback((catIndex: number, skillIndex: number, skill: Skill) => {
    return skill.level;
  }, []);

  return {
    hoveredCategory,
    animationComplete,
    handleCategoryMouseEnter,
    handleCategoryMouseLeave,
    getSkillLevel
  };
};

export default useSkillAnimation;
