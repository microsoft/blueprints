/* eslint-disable no-unused-vars */
export type Value = Record<string, any> | string;
export type Theme = Record<string, Value> | {};
export type CSSVarsArray = [string, string][] | [];
export type GenerateCSSVarTuples = (theme: Record<string, Value> | Value, prefix?: string) => CSSVarsArray | [];
export type GenerateTokensMap<T> = (theme: Record<string, Value>, prefix?: string) => T | {};
export type UseCSSVarsArgs = { theme: Record<string, Value>; currentThemeKey?: string; prefix?: string };
