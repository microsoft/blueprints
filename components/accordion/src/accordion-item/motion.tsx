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
  initial: 'expanded' | 'collapsed';
  a11yLabelId: string;
  a11yContentId: string;
  className?: string;
  children?: ReactNode | undefined;
}> = ({ children, initial, a11yLabelId, a11yContentId, className }) => (
  <motion.section
    initial={initial}
    animate="expanded"
    exit="collapsed"
    variants={slideVariants({ shouldReduceMotion: useReducedMotion() })}
    className={className}
    id={a11yContentId}
    aria-labelledby={a11yLabelId}
    role="region"
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
  initial: 'expanded' | 'collapsed';
  className?: string;
  children?: ReactNode | undefined;
}> = ({ children, initial }) => (
  <motion.div
    style={{ position: 'relative' }}
    initial={initial}
    animate="expanded"
    exit="collapsed"
    variants={fadeVariants({ shouldReduceMotion: useReducedMotion() })}
  >
    {children}
  </motion.div>
);
