import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';
import { layout as BREAKPOINTS } from '@microsoft/arbutus.theming';
import { TRAY_WIDTH } from '@microsoft/arbutus.tray';

const toRawValue = (value: `${string}px`) => Number(value.replace('px', ''));

export const FOOTER_HEIGHT = '98px';
export const HEADER_HEIGHT = '80px';
export const CONTENT_WIDTH = '980px';
export const CONTAINER_WIDTH = `${
  toRawValue(CONTENT_WIDTH) + toRawValue(TRAY_WIDTH) + 24
}px`;

export const useShellStyles = makeStyles({
  root: {
    width: '100%',
  },
  main: {
    width: '100%',
    maxWidth: CONTENT_WIDTH,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  hero: {
    width: '100%',
    minHeight: `calc(100vh - (${HEADER_HEIGHT} + ${FOOTER_HEIGHT}))`,
  },
  heroWrapper: {
    position: 'relative',
  },
  heroHeader: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    width: '100%',
    maxWidth: CONTAINER_WIDTH,
    minHeight: HEADER_HEIGHT,
    marginLeft: 'auto',
    marginRight: 'auto',
    transitionProperty: 'background-color',
    transitionDuration: tokens.durationFast,
    transitionTimingFunction: tokens.curveEasyEase,
    [`@media screen and (max-width: ${CONTAINER_WIDTH})`]: {
      paddingRight: tokens.spacingHorizontalL,
      paddingLeft: tokens.spacingHorizontalL,
    },
  },
  heroHeaderScroll: {
    backgroundColor: 'var(--arbutus--color-overlay-background)',
    backdropFilter: 'blur(1rem)',
    boxShadow: tokens.shadow8,
  },
  boundaries: {
    [`@media screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      paddingLeft: tokens.spacingHorizontalL,
    },
    [`@media screen and (max-width: ${CONTAINER_WIDTH})`]: {
      paddingRight: tokens.spacingHorizontalL,
    },
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: `${TRAY_WIDTH} auto`,
    columnGap: tokens.spacingHorizontalXXL,
    position: 'relative',
  },
  minHeight: {
    minHeight: `calc(100vh - ${FOOTER_HEIGHT})`,
  },
  footer: {
    minHeight: FOOTER_HEIGHT,
  },
  header: {
    minHeight: HEADER_HEIGHT,
    paddingRight: tokens.spacingHorizontalL,
  },
  aside: {
    paddingLeft: tokens.spacingHorizontalL,
    height: '100vh',
    overflowY: 'auto',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    [`@media screen and (min-width: ${BREAKPOINTS.desktop}px)`]: {
      height: `calc(100vh - ${FOOTER_HEIGHT})`,
    },
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  stickyAside: {
    position: 'sticky',
    top: '0',
  },
});
