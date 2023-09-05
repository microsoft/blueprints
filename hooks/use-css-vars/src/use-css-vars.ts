import { useIsomorphicLayoutEffect } from '@fluentui/utilities';
import * as React from 'react';

import { generateCSSVarTuples } from './generate-css-vars';
import type { UseCSSVarsArgs } from './use-css-vars.types';

/**
 * String concatenation is used to prevent bundlers to complain with older versions of React.
 * @see https://github.com/microsoft/fluentui/blob/master/packages/react-components/react-provider/src/components/FluentProvider/useFluentProviderThemeStyleTag.ts
 */
const useInsertionEffect = (React as never)['useInsertion' + 'Effect']
  ? (React as never)['useInsertion' + 'Effect']
  : useIsomorphicLayoutEffect;

/**
 * useCSSVars takes an object of theme values, generates CSS variables from them, and injects them into the document.
 * @param arg.theme An object of theme values. An object can be nested (e.g.
 * `color.button.primary: #fff` will translate to `--color-button-primary: #fff`).
 * @param arg.currentThemeKey A key of the theme object. Use this option to switch themes, for example for light/dark mode.
 * @param arg.prefix A string to prefix all CSS variables with. This is an optional parameter, but it is recommended to
 * use it to avoid CSS variable collisions.
 * @example Basic usage
 *
 * ```tsx
 * import { useCSSVars } from '@microsoft/arbutus.use-css-vars';
 *
 * const theme = {
 *   color: {
 *     button: {
 *       primary: '#fff',
 *       secondary: '#000',
 *     }
 *   }
 * }
 *
 * const MyAppShell = () => {
 *   // Injects CSS variables into the document.
 *   useCSSVars({ theme, prefix: 'MY_APP' });
 *
 *   return (<div>...</div>);
 * }
 * ```
 *
 * @example Responding to dark / light themes
 *
 * ```tsx
 * import { useCSSVars } from '@microsoft/arbutus.use-css-vars';
 *
 * const theme = {
 *   light: {
 *    color: {
 *     button: {
 *      primary: '#fff',
 *      secondary: '#000',
 *    },
 *   },
 *   dark: {
 *     color: {
 *       button: {
 *         primary: '#000',
 *         secondary: '#fff',
 *       },
 *     },
 *   },
 * };
 *
 * const MyAppShell = () => {
 *   const [currentThemeKey, setCurrentThemeKey] = useState('light');
 *   useCSSVars({ theme, currentThemeKey, prefix: 'MY_APP' });
 *
 *   return (<div>...</div>);
 * }
 * ```
 */
export const useCSSVars = ({ theme, currentThemeKey, prefix }: UseCSSVarsArgs): void => {
  const themeObj = currentThemeKey ? theme[currentThemeKey] : theme;
  const styleId = `${prefix ?? 'arbutus'}-css-vars`;

  useInsertionEffect(() => {
    // If theme object wasn’t, do nothing. We can’t generate CSS variables without a theme.
    if (!themeObj) {
      return;
    }

    // Clear existing style tag with CSS Vars.
    const styleTagWithCSSVars = document.getElementById(styleId) as HTMLStyleElement;

    if (styleTagWithCSSVars) {
      styleTagWithCSSVars.remove();
    }

    // Create a new style tag with CSS Vars.
    const styleTag = document.createElement('style');

    styleTag.id = styleId;
    document.head.appendChild(styleTag);
    const cssVarTuples = generateCSSVarTuples(themeObj, prefix);
    // @ts-ignore-next-line
    const cssVars = cssVarTuples.reduce((acc, [k, v]) => acc + `${k}: ${v};\n`, '');

    styleTag.textContent = `:root {\n${cssVars}}`;
  }, [currentThemeKey]);
};
