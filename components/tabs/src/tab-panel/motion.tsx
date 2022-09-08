import { motion, useReducedMotion } from 'framer-motion';
import type { FC } from 'react';
import * as React from 'react';

const SLIDE_DURATION = 0.2;
const SLIDE_DISTANCE = '-4px';

const appearVariants = {
  active: {
    display: 'block',
  },
  inactive: {
    display: 'none',
  },
};

export const AppearMotion: FC<{
  isActive: boolean;
  className?: string;
  id: string;
  role: string;
  tabIndex: number;
}> = ({ id, className, children, isActive, role, tabIndex }) => {
  return (
    <motion.div
      id={id}
      className={className}
      role={role}
      tabIndex={tabIndex}
      variants={appearVariants}
      style={{ position: 'relative', top: 0 }}
      animate={isActive ? 'active' : 'inactive'}
      initial="inactive"
    >
      {children}
    </motion.div>
  );
};

export const SlideMotion: FC<{
  isActive: boolean;
}> = ({ children, isActive }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={{
        initial: { top: 0 },
        active: {
          opacity: 1,
          top: 0,
          transition: {
            delay: shouldReduceMotion ? 0 : SLIDE_DURATION,
            ease: 'easeOut',
            duration: shouldReduceMotion ? 0 : SLIDE_DURATION,
          },
        },
        inactive: {
          opacity: 0,
          top: SLIDE_DISTANCE,
          transition: {
            ease: 'easeOut',
            duration: shouldReduceMotion ? 0 : SLIDE_DURATION,
          },
        },
      }}
      style={{ position: 'relative', top: 0 }}
      animate={isActive ? 'active' : 'inactive'}
      initial="initial"
    >
      {children}
    </motion.div>
  );
};
