import { motion, useReducedMotion } from 'framer-motion';
import type { FC, ReactNode } from 'react';
import * as React from 'react';

const SLIDE_DURATION = 0.2;
const FADE_DURATION = 0.15;
const STAGGER_DELAY = 0.075;

const slideVariants = ({
  shouldReduceMotion,
}: {
  shouldReduceMotion: boolean | null;
}) => ({
  expanded: {
    height: 'auto',
    transition: {
      ease: 'easeOut',
      duration: shouldReduceMotion ? 0 : SLIDE_DURATION,
    },
  },
  collapsed: {
    height: 0,
    transition: {
      delay: shouldReduceMotion ? 0 : FADE_DURATION - STAGGER_DELAY,
      ease: 'easeOut',
      duration: shouldReduceMotion ? 0 : SLIDE_DURATION,
    },
  },
});

export const SlideMotion: FC<{
  isCollapsed: boolean;
  className?: string;
  children?: ReactNode | undefined;
}> = ({ children, isCollapsed, className }) => (
  <motion.section
    initial={isCollapsed ? 'collapsed' : 'expanded'}
    animate="expanded"
    exit="collapsed"
    variants={slideVariants({ shouldReduceMotion: useReducedMotion() })}
    className={className}
  >
    {children}
  </motion.section>
);

const fadeVariants = ({
  shouldReduceMotion,
}: {
  shouldReduceMotion: boolean | null;
}) => ({
  expanded: {
    opacity: 1,
    top: '0',
    transition: {
      delay: shouldReduceMotion ? 0 : SLIDE_DURATION - STAGGER_DELAY,
      ease: 'easeOut',
      duration: shouldReduceMotion ? 0 : FADE_DURATION,
    },
  },
  collapsed: {
    opacity: 0,
    top: '-4px',
    transition: {
      ease: 'easeOut',
      duration: shouldReduceMotion ? 0 : FADE_DURATION,
    },
  },
});

export const FadeMotion: FC<{
  isCollapsed: boolean;
  className?: string;
  children?: ReactNode | undefined;
}> = ({ children, isCollapsed }) => (
  <motion.div
    style={{ position: 'relative' }}
    initial={isCollapsed ? 'collapsed' : 'expanded'}
    animate="expanded"
    exit="collapsed"
    variants={fadeVariants({ shouldReduceMotion: useReducedMotion() })}
  >
    {children}
  </motion.div>
);
