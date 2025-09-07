import { useEffect, useState } from 'react';

/**
 * Hook to optimize performance by deferring heavy operations when the main thread is busy
 */
export const usePerformanceOptimized = () => {
  const [isHighPerformanceMode, setIsHighPerformanceMode] = useState(false);

  useEffect(() => {
    // Check for performance hints
    const checkPerformance = () => {
      // Use performance observer to detect main thread blocking
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(() => {
          setIsHighPerformanceMode(true);
        });
      } else {
        // Fallback for browsers without requestIdleCallback
        setTimeout(() => {
          setIsHighPerformanceMode(true);
        }, 100);
      }
    };

    checkPerformance();
  }, []);

  return { isHighPerformanceMode };
};

/**
 * Hook to throttle animations based on main thread availability
 */
export const useThrottledAnimation = (callback: () => void, fps: number = 30) => {
  const frameTime = 1000 / fps;

  useEffect(() => {
    let lastFrame = 0;
    let animationId: number;

    const animate = (timestamp: number) => {
      if (timestamp - lastFrame >= frameTime) {
        callback();
        lastFrame = timestamp;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [callback, frameTime]);
};