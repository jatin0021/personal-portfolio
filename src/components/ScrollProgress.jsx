import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  
  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[100] origin-left"
        style={{ 
          scaleX,
          background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4, #3b82f6)',
          backgroundSize: '200% 100%',
          boxShadow: '0 0 12px rgba(34,211,238,0.7)',
        }}
      />
      {/* Glow dot at end of bar */}
      <motion.div
        className="fixed top-0 z-[100] w-3 h-3 rounded-full -mt-[5px]"
        style={{
          left: scrollYProgress.get() === 0 ? '-12px' : 'auto',
          right: 0,
          background: 'radial-gradient(circle, #22d3ee, #3b82f6)',
          boxShadow: '0 0 15px rgba(34,211,238,0.9)',
          scaleX: useSpring(scrollYProgress, { stiffness: 200, damping: 30 }),
          originX: 'left',
          opacity: scrollYProgress,
        }}
      />
    </>
  );
};

export default ScrollProgress;
