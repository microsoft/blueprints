import { tokens } from '@fluentui/react-theme';
import { shorthands } from '@griffel/react';
import type { GriffelStyle } from '@griffel/react';

export const GLOBAL_STYLES: Record<string, GriffelStyle> = {
  body: {
    backgroundColor: tokens.colorNeutralForeground1,
    fontFamily: tokens.fontFamilyBase,
    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightRegular,
    lineHeight: tokens.lineHeightBase300,
    minWidth: '400px' /* Smallest supported screen size */,
  },
  root: {
    ['@media (prefers-reduced-motion)']: {
      '*': {
        transitionDuration: '0ms',
        animationDuration: '0.01ms',
        animationIterationCount: '1',
        scrollBehavior: 'auto',
      },
    },
    '*': {
      transitionProperty: 'all',
      transitionDuration: tokens.durationNormal,
      transitionTimingFunction: tokens.curveEasyEase,
    },

    ['*, *::before, *::after']: {
      boxSizing: 'border-box',
    },

    ['*:focus-visible']: {
      outlineColor: tokens.colorNeutralBackground1,
    },

    [`
    h1,
    h2,
    h3,
    h4,
    h5, 
    h6,
    p,
    ul[class],
    ol[class],
    li,
    figure,
    figcaption,
    blockquote,
    dl,
    dd`]: {
      color: tokens.colorNeutralForeground1,
    },

    [`body,
      h1,
      h2,
      h3,
      h4,
      h5, 
      h6,
      p,
      ul[class],
      ol[class],
      li,
      figure,
      figcaption,
      blockquote,
      dl,
      dd`]: {
      ...shorthands.margin(0),
    },
    [`
      h1,
      h2,
      h3,
      h4,
      h5, 
      h6`]: {
      fontWeight: tokens.fontWeightRegular,
    },
    [`ul[class],
      ol[class]`]: {
      listStyleType: 'none',
      ...shorthands.padding(0),
    },

    ['a:not([class])']: {
      textDecorationSkipInk: 'auto',
    },

    img: {
      maxWidth: '100%',
      display: 'block',
    },

    /* Button reset */
    button: {
      ...shorthands.border('none'),
      backgroundColor: 'none',
      cursor: 'pointer',
    },
  },
};
