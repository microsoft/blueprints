import { makeStaticStyles } from '@griffel/react';

// export const GlobalStyles = () => {
//   const theme: Theme = useTheme();
//   const [isWindows, setIsWindows] = React.useState<boolean>();
//   React.useEffect(() => {
//     if (navigator) {
//       setIsWindows(navigator.userAgent.indexOf('Win') !== -1);
//     }
//   }, []);

//   const scrollbarStyles =
//     isWindows &&
//     css`
//       ::-webkit-scrollbar {
//         -webkit-appearance: none;
//         width: 11px;
//       }

//       ::-webkit-scrollbar-thumb {
//         border-radius: 7px;
//         background-color: rgba(0, 0, 0, 0.5);
//         background-clip: padding-box;
//         border: 2px solid transparent;
//       }
//     `;

//   // global styles exposed to theming
//   return (
//     <Global
//       styles={css`
//         // Custom Windows scrollbar styles
//         ${scrollbarStyles}
//       `}
//     />
//   );
// };

export const useGlobalStyles = makeStaticStyles({
  '*': {
    transition: 'all 250ms ease-in-out',
  },

  ['*, *::before, *::after']: {
    boxSizing: 'border-box',
  },

  ['*:focus-is-visible']: {
    outlineColor: 'var(--color-brand-action)',
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
    color: 'var(--color-primary)',
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
    fontWeight: 'var(--font-weight-regular)',
  },

  body: {
    backgroundColor: 'var(--color-background)',
    fontFamily: `'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif`,
    fontWeight: 400,
    lineHeight: '1.64',
    minWidth: '400px' /* Smallest supported screen size */,
  },

  // ['@supports (font-variation-settings: normal)']: {
  //   body: {
  //     fontFamily: `'Segoe UI Variable', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif`,
  //   },
  // },

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

  // Need to investigate why Griffel doesn't correctly translate this.
  // ['@media (prefers-reduced-motion: reduce)']: {
  //   '*': {
  //     animationDuration: '0.01ms',
  //     animationIterationCount: '1',
  //     transitionDuration: '0.01ms',
  //     scrollBehavior: 'auto',
  //   },
  // },

  /* Menulist Styles (Portal) */
  ['[data-reach-menu-list]']: {
    marginTop: '1rem',
    backgroundColor: '#fff',
    padding: '0.5rem',
    boxShadow:
      '0px 8px 10px rgba(0, 0, 0, 0.07), 0px 3px 14px rgba(0, 0, 0, 0.06), 0px 5px 5px rgba(0, 0, 0, 0.1)',
    borderRadius: '0.75rem',
  },

  [`[data-reach-menu-list],
    [data-reach-menu-items]`]: {
    border: 'none',
    fontSize: '85%',
  },

  ['[data-reach-popover]']: {
    zIndex: 4,
  },

  /* Prevent clicks from targeting the inner children of an interactive item */
  [`button > *,
    a > *`]: {
    pointerEvents: 'none',
  },
});
