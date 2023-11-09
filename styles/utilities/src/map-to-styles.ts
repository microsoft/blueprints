import type { GriffelStyle } from '@griffel/react';

/**
 * mapToStyles is designed to help generating styles variants. It generates Griffel classes from a map of values.
 * @param map An object, where the key will become a class name, and the value will be passed to the `styleFunction`.
 * @param styleFunction A function that takes the value from the `map` and returns a `GriffelStyle`.
 * @returns An object with keys from the map and values as GriffelStyle returned by the `styleFunction`.
 *
 * @example
 * ```ts
 * type ColorValue = string;
 * const textColors = { primary: 'red', secondary: 'blue' }
 * const textStyleFunction = (color: ColorValue) => ({
 *   color,
 *   '&:visited': { color }
 * })
 * const textColorClasses = mapToStyles<ColorValue, typeof textColors>(textColors, textStyleFunction);
 *
 * // {
 * //   primary: {
 * //     color: 'red',
 * //     '&:visited: { color: 'red'}}
 * //   },
 * //   secondary: {
 * //     color: 'blue',
 * //     '&:visited: { color: 'blue'}}
 * //   },
 * // }
 * ```
 */
export function mapToStyles<Value, Map>(
  map: Record<keyof Map, Value>,
  styleFunction: (i: Value) => GriffelStyle,
) {
  return Object.entries(map).reduce(
    (acc, [key, value]) => {
      acc[key as keyof Map] = styleFunction(value as Value);

      return acc;
    },
    {} as Record<keyof Map, GriffelStyle>,
  );
}
