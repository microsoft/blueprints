import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';

// Add to vars
const width = 20.25;
const border = 0.0625;
const stack = {
  base: 1,
  middle: 10,
  overlay: 100,
  top: 1000,
};

export const useTrayStyles = makeStyles({
  root: {
    zIndex: stack.middle,
    position: 'fixed',
    width: `${width}rem`,
    height: '100vh',
    borderRightColor: tokens.colorNeutralStroke1,
    borderRightWidth: `${border}rem`,
    borderRightStyle: 'solid',
    transform: `translate3D(-${width + border}rem, 0, 0)`,
    opacity: 0,
    left: 0,
    top: 0,
    backgroundColor: tokens.colorNeutralBackground1,
    backdropFilter: 'blur(1rem)',
    '@media screen and (prefers-reduced-motion: no-preference)': {
      transitionProperty: 'all',
      transitionDuration: tokens.durationNormal,
      transitionTimingFunction: tokens.curveEasyEase,
    },
    [`@media screen and (max-width: ${width}rem)`]: {
      width: '100%',
    },
  },
  isOpen: {
    opacity: 1,
    backgroundColor: 'var(--arbutus--color-overlay-background)',
    transform: 'translate3d(0, 0, 0)',
  },
});
