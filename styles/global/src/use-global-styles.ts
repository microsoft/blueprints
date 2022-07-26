import { tokens } from '@fluentui/react-theme';
import { makeStaticStyles } from '@griffel/react';

export const useGlobalStyles = makeStaticStyles({
  '*': {
    transition: 'all 250ms ease-in-out',
  },

  ['*, *::before, *::after']: {
    boxSizing: 'border-box',
  },

  ['*:focus-visible']: {
    outlineColor: tokens.colorNeutralBackground1,
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
    margin: 0,
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

  body: {
    backgroundColor: tokens.colorNeutralForeground1,
    fontFamily: tokens.fontFamilyBase,
    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightRegular,
    lineHeight: tokens.lineHeightBase300,
    minWidth: '400px' /* Smallest supported screen size */,
  },

  [`ul[class],
    ol[class]`]: {
    listStyle: 'none',
    padding: 0,
  },

  ['a:not([class])']: {
    textDecorationSkipInk: 'auto',
  },

  img: {
    maxWidth: '100%',
    display: 'block',
  },

  [`input,
    button,
    textarea,
    select`]: {
    font: 'inherit',
  },

  /* Button reset */
  button: {
    border: 'none',
    background: 'none',
    cursor: 'pointer',
  },

  // Need to investigate why Griffel doesn’t correctly translate this.
  ['@media (prefers-reduced-motion: reduce)']: {
    '*': {
      animationDuration: '0.01ms',
      animationIterationCount: '1',
      transitionDuration: '0.01ms',
      scrollBehavior: 'auto',
    },
  },
});
