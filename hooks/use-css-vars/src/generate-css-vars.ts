import type { Value } from './use-css-vars.types';

type CSSVarsArray = [string, string][] | [];

const isObject = (value: unknown) =>
  !!(value && typeof value === 'object' && !Array.isArray(value));

const isEmptyObject = (obj: Value) => {
  if (typeof obj === 'object' && obj != null && Object.keys(obj).length !== 0) {
    return false;
  } else {
    return true;
  }
};

/**
 * A utility function that generates a list of CSS variable tuples from a theme object, where the first item in the
 * tuple is the CSS variable name, and the second item is the CSS variable value.
 * @param theme Theme object.
 * @param prefix Optional prefix to add to the CSS variable name (e.g. `--my-prefix--color-button-primary`).
 * @returns An array of CSS variable tuples, where the first item in the tuple is the CSS variable name, and the second
 * item is the CSS variable value (e.g. `[['--color-button-primary', '#fff'], ['--color-button-secondary', '#000']]`)
 *
 * @example
 * ```tsx
 * const theme = {
 *   color: {
 *     button: {
 *      primary: '#fff',
 *      secondary: '#000',
 *    },
 *   },
 * };
 *
 * const CSS_VAR_TUPLES = generateCSSVarTuples(theme, 'my-prefix');
 * // Output:
 * // [
 * //  ['--my-prefix--color-button-primary', '#fff'],
 * //  ['--my-prefix--color-button-secondary', '#000'],
 * // ];
 * ```
 */

export const generateCSSVarTuples = (
  theme: Record<string, Value> | Value,
  prefix?: string,
): CSSVarsArray | [] => {
  let acc: CSSVarsArray = [];

  const traverseObject = (v: Value, pre = prefix ? `--${prefix}-` : '-') => {
    if (typeof v === 'string') {
      acc = [...acc, [pre, v]];
    }

    if (!v || isEmptyObject(v)) {
      return;
    }

    if (isObject(v)) {
      Object.entries(v).forEach(([k, v]) => traverseObject(v as Value, `${pre}-${k}`));
    }

    return;
  };

  traverseObject(theme);

  return acc;
};
