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
