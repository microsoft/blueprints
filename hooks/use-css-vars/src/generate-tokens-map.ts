import type { Theme, Value } from './use-css-vars.types';

const isObject = (value: Value) =>
  !!(
    value &&
    typeof value === 'object' &&
    typeof value !== 'string' &&
    !Array.isArray(value)
  );

const isEmptyObject = (obj: Value) => {
  if (typeof obj === 'object' && obj !== null && Object.keys(obj).length !== 0) {
    return false;
  } else {
    return true;
  }
};

/**
 * Generates a map of CSS variables from a theme object. Use this helper to generate a map of CSS variables that you can
 * use in your style files.
 * @param theme Theme object you want to map to CSS variables.
 * @param prefix Optional prefix to add to the CSS variable name (e.g. `--my-prefix--color-button-primary`).
 * @returns A map of CSS variables, where the key is the same as in your theme object, but the value is a CSS variable.
 *
 * @example
 *
 * ```tsx
 * import { generateTokensMap } from '@microsoft/arbutus.use-css-vars';
 *
 * const lightTheme: Theme = {
 *   color: {
 *     button: {
 *       primary: '#fff',
 *       secondary: '#000',
 *     },
 *   },
 * };
 *
 * // NOTE: If you are using TypeScript, create a `Theme` type for you custom themes to get type safety.
 *
 * const myCustomTokens = generateTokensMap<Theme>(lightTheme, 'my-prefix');
 * // Output:
 * // {
 * //  color: {
 * //    button: {
 * //      primary: 'var(--my-prefix--color-button-primary)',
 * //      secondary: 'var(--my-prefix--color-button-secondary)',
 * //    },
 * //  },
 * //};
 *
 * const myStyles = {
 *  button: {
 *   color: myCustomTokens.color.button.primary,
 * },
 *
 * ```
 */

export function generateTokensMap<T>(theme: Record<string, Value>, prefix?: string): T {
  const traverseObject = (obj: Theme, pre: string) => {
    const newObj: Record<string, any> = {};

    for (const [key, value] of Object.entries(obj)) {
      if (isObject(value) && !isEmptyObject(value)) {
        newObj[key] = traverseObject(value, `${pre}-${key}`);
      } else {
        newObj[key] = `var(${pre}-${key})`;
      }
    }

    return newObj;
  };

  return traverseObject(theme, prefix ? `--${prefix}-` : '-') as T;
}
