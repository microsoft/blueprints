import type { Theme } from './theming.types';

const isObject = (value: unknown) =>
  !!(value && typeof value === 'object' && !Array.isArray(value));

const isEmptyObject = (obj: Value) => {
  if (typeof obj === 'object' && obj != null && Object.keys(obj).length !== 0) {
    return false;
  } else {
    return true;
  }
};

type Value = Record<string, unknown | never> | string;
type CSSVarsArray = [string, string][] | [];
type TraverseObject = (v: Value, pre?: string, acc?: CSSVarsArray | []) => void;
type GenerateCSSVarTuples = (theme: Theme) => CSSVarsArray | [];

export const generateCSSVarTuples: GenerateCSSVarTuples = (theme: Theme) => {
  let acc: CSSVarsArray = [];
  const traverseObject: TraverseObject = (v, pre = '-') => {
    if (typeof v === 'string') {
      acc = [...acc, [pre, v]];
    }

    if (!v || isEmptyObject(v)) {
      return;
    }

    if (isObject(v)) {
      Object.entries(v).forEach(([k, v]: [k: string, v: Value]) =>
        traverseObject(v, `${pre}-${k}`),
      );
    }

    return;
  };

  traverseObject(theme);

  return acc;
};
