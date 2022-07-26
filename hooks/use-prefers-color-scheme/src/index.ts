import { useCallback, useEffect, useState } from 'react';

export type ColorScheme = 'light' | 'dark';

/**
 * usePrefersColorScheme returns a value of `prefers-color-scheme` media query. Based on Media Queries Level 5: 11.5.
 * Detecting the desire for light or dark color schemes: the prefers-color-scheme feature.
 * @see https://drafts.csswg.org/mediaqueries-5/#prefers-color-scheme
 * 
 * @example
 * ```tsx
 * import { usePrefersColorScheme } from '@arbutus/hook.use-prefers-color-scheme';
 * 
 * const MyComponent = () => {
 *   // "light" | "dark" | undefined
 *   const preferredTheme = usePrefersColorScheme();
 *   return <div>{preferredTheme === 'light' ? 'light' : 'dark'</div>;
 * };
 * ```
 */
export const usePrefersColorScheme = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>();
  const darkModeMediaQuery = window?.matchMedia('(prefers-color-scheme: dark)');
  const lightModeMediaQuery = window?.matchMedia('(prefers-color-scheme: light)');

  const darkModeHandler = useCallback((e: MediaQueryListEvent) => {
    setColorScheme(e.matches ? 'dark' : 'light');
  }, []);
  const lightModeHandler = useCallback((e: MediaQueryListEvent) => {
    setColorScheme(e.matches ? 'light' : 'dark');
  }, []);

  useEffect(() => {
    darkModeMediaQuery.addEventListener('change', darkModeHandler);
    lightModeMediaQuery.addEventListener('change', lightModeHandler);

    return function cleanup() {
      window.removeEventListener('change', darkModeHandler);
      window.removeEventListener('change', lightModeHandler);
    };
  }, []);

  return colorScheme;
};
