import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';
import { arbutusTokens } from '@microsoft/arbutus.theming';

export const TRAY_WIDTH = '324px';

// Add to vars
const width = 324;
const border = 1;
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
    width: `${width}px`,
    height: '100vh',
    borderRightColor: tokens.colorNeutralStroke1,
    borderRightWidth: `${border}px`,
    borderRightStyle: 'solid',
    transform: `translate3D(-${width + border}px, 0, 0)`,
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
    [`@media screen and (max-width: ${width}px)`]: {
      width: '100%',
    },
  },
  isOpen: {
    opacity: 1,
    backgroundColor: arbutusTokens.color.overlay.background,
    transform: 'translate3d(0, 0, 0)',
  },
});
