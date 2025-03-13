
import { useState, useCallback, useRef } from 'react';
import { Skill } from './skillsData';

const useSkillAnimation = () => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const [animatingSkills, setAnimatingSkills] = useState<{[key: string]: number}>({});
  const [animationComplete, setAnimationComplete] = useState<boolean>(true);
  const animationRef = useRef<number | null>(null);
  const previousValuesRef = useRef<{[key: string]: number}>({});
  const velocitiesRef = useRef<{[key: string]: number}>({});

  const handleCategoryMouseEnter = useCallback((catIndex: number, skills: Skill[]) => {
    if (animationComplete) {
      setHoveredCategory(catIndex);
      setAnimationComplete(false);
      
      // Initialize previous values and velocities
      const initialValues: {[key: string]: number} = {};
      
      skills.forEach((skill, skillIndex) => {
        const skillKey = `${catIndex}-${skillIndex}`;
        // Start with a value between 25% and 55% of the final value for more realism
        const initialValue = Math.floor(skill.level * (0.25 + Math.random() * 0.3));
        initialValues[skillKey] = initialValue;
        previousValuesRef.current[skillKey] = initialValue;
        velocitiesRef.current[skillKey] = 0; // Initial velocity is 0
      });
      
      setAnimatingSkills(initialValues);
      
      // Use requestAnimationFrame for smooth animation
      const startTime = performance.now();
      const animationDuration = 1200; // 1.2 seconds for smoother feel
      
      const animate = (timestamp: number) => {
        const elapsedTime = timestamp - startTime;
        const progress = Math.min(elapsedTime / animationDuration, 1);
        
        // Using quintic ease-out for more natural deceleration
        const easedProgress = 1 - Math.pow(1 - progress, 5);
        
        if (progress < 1) {
          // Generate smooth transitions with physics-inspired behavior
          const newValues: {[key: string]: number} = {};
          
          skills.forEach((skill, skillIndex) => {
            const skillKey = `${catIndex}-${skillIndex}`;
            const targetValue = skill.level;
            const currentValue = previousValuesRef.current[skillKey] || 0;
            const currentVelocity = velocitiesRef.current[skillKey] || 0;
            
            // Spring physics for smoother movement
            const spring = 0.3; // Spring constant (affects stiffness)
            const damping = 0.75; // Damping factor (affects how quickly oscillations die down)
            
            // Simulate physics with spring-damping system
            // Calculate force based on distance from target
            const distanceToTarget = targetValue - currentValue;
            
            // Apply progressive force based on progress to avoid too much overshoot
            const force = distanceToTarget * spring * (0.2 + easedProgress * 0.8);
            
            // Calculate new velocity with damping
            let newVelocity = currentVelocity + force;
            newVelocity *= damping;
            
            // Calculate new value based on velocity
            let newValue = currentValue + newVelocity;
            
            // Add subtle randomness early in the animation
            if (progress < 0.7) {
              const noise = Math.max(0, 5 * (1 - progress));
              newValue += (Math.random() - 0.5) * noise;
            }
            
            // Ensure values stay within bounds
            newValue = Math.min(Math.max(Math.round(newValue), 0), skill.level);
            
            // As we approach the end, get closer to the actual value
            if (progress > 0.8) {
              const blend = (progress - 0.8) / 0.2; // 0 to 1 in last 20%
              newValue = Math.round(newValue * (1 - blend) + targetValue * blend);
            }
            
            newValues[skillKey] = newValue;
            previousValuesRef.current[skillKey] = newValue;
            velocitiesRef.current[skillKey] = newVelocity;
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
          // Reset velocity
          velocitiesRef.current = {};
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
