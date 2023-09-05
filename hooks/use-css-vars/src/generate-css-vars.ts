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
