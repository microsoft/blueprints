import { tokens } from '@fluentui/react-theme';
import { useEffect } from 'react';

import { generateCSSVarTuples } from './generate-css-vars';
import type { UseCSSVars } from './use-css-vars.types';

/**
 * useCSSVars takes an object of theme values, generates CSS variables from them, and injects them into the document.
 * @param arg.theme An object of theme values. An object can be nested (e.g.
 * `color.button.primary: #fff` will translate to `--color-button-primary: #fff`).
 * @param arg.prefix A string to prefix all CSS variables with. This is an optional parameter, but it is recommended to
 * use it to avoid CSS variable collisions.
 * @example
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
 */
export const useCSSVars: UseCSSVars = ({ theme, prefix }) => {
  useEffect(() => {
    const cssVarTuples = generateCSSVarTuples(theme, prefix);

    cssVarTuples.forEach(([k, v]: [k: string, v: string]) =>
      document?.documentElement?.style?.setProperty(k, v),
    );

    return () => {
      cssVarTuples.forEach(([k]: [k: string, v: string]) =>
        document?.documentElement?.style?.removeProperty(k),
      );
    };
  }, [theme, prefix]);
};
