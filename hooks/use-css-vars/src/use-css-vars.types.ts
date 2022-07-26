export type Value = Record<string, unknown | never> | string;
export type CSSVarsArray = [string, string][] | [];
export type TraverseObject = (v: Value, pre?: string, acc?: CSSVarsArray | []) => void;
export type GenerateCSSVarTuples = (theme: Record<string, Value>, prefix?: string) => CSSVarsArray | [];
export type UseCSSVars = ({ theme, prefix }: { theme: Record<string, Value>; prefix: string }) => void;
