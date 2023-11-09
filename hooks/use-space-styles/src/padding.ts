import { spaceEntries } from './space-entries';
import type { Declaration, RuleSets, Selector } from './use-space-styles.types';

export const padding = spaceEntries.reduce(
  (acc, [key, value]) => {
    const className = `p${key}` as Selector;

    acc[className] = {
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    } as Declaration;

    return acc;
  },
  {} as RuleSets | Record<string, never>,
);

export const paddingY = spaceEntries.reduce(
  (acc, [key, value]) => {
    const className = `py${key}` as Selector;

    acc[className] = {
      paddingTop: value,
      paddingBottom: value,
    } as Declaration;

    return acc;
  },
  {} as RuleSets | Record<string, never>,
);

export const paddingX = spaceEntries.reduce(
  (acc, [key, value]) => {
    const className = `px${key}` as Selector;

    acc[className] = {
      paddingLeft: value,
      paddingRight: value,
    } as Declaration;

    return acc;
  },
  {} as RuleSets | Record<string, never>,
);

export const paddingTop = spaceEntries.reduce(
  (acc, [key, value]) => {
    const className = `pt${key}` as Selector;

    acc[className] = {
      paddingTop: value,
    } as Declaration;

    return acc;
  },
  {} as RuleSets | Record<string, never>,
);

export const paddingBottom = spaceEntries.reduce(
  (acc, [key, value]) => {
    const className = `pb${key}` as Selector;

    acc[className] = {
      paddingBottom: value,
    } as Declaration;

    return acc;
  },
  {} as RuleSets | Record<string, never>,
);

export const paddingLeft = spaceEntries.reduce(
  (acc, [key, value]) => {
    const className = `pl${key}` as Selector;

    acc[className] = {
      paddingLeft: value,
    } as Declaration;

    return acc;
  },
  {} as RuleSets | Record<string, never>,
);

export const paddingRight = spaceEntries.reduce(
  (acc, [key, value]) => {
    const className = `pr${key}` as Selector;

    acc[className] = {
      paddingRight: value,
    } as Declaration;

    return acc;
  },
  {} as RuleSets | Record<string, never>,
);
