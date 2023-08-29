import type { CSSVarsArray, GenerateCSSVarTuples, Value } from './use-css-vars.types';

const isObject = (value: unknown) =>
  !!(value && typeof value === 'object' && !Array.isArray(value));

const isEmptyObject = (obj: Value) => {
  if (typeof obj === 'object' && obj != null && Object.keys(obj).length !== 0) {
    return false;
  } else {
    return true;
  }
};

export const generateCSSVarTuples: GenerateCSSVarTuples = (theme, prefix) => {
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
