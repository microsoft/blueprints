import { motion, useReducedMotion } from 'framer-motion';
import type { FC, HTMLAttributes, ReactNode } from 'react';
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

type AppearMotionProps = HTMLAttributes<HTMLDivElement> & {
  isActive: boolean;
  children?: ReactNode | undefined;
};

export const AppearMotion: FC<AppearMotionProps> = ({
  children,
  className,
  hidden,
  id,
  isActive,
  role,
  tabIndex,
}) => {
  return (
    <motion.div
      animate={isActive ? 'active' : 'inactive'}
      className={className}
      hidden={hidden}
      id={id}
      initial="inactive"
      role={role}
      style={{ position: 'relative', top: 0 }}
      tabIndex={tabIndex}
      variants={appearVariants}
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
