import { spaceEntries } from './space-entries';
import type { Declaration, RuleSets, Selector } from './use-space-styles.types';

export const margin = spaceEntries.reduce(
  (acc, [key, value]) => {
    const className = `m${key}` as Selector;

    acc[className] = {
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    } as Declaration;

    return acc;
  },
  {} as RuleSets | Record<string, never>,
);

export const marginY = spaceEntries.reduce(
  (acc, [key, value]) => {
    const className = `my${key}` as Selector;

    acc[className] = {
      marginTop: value,
      marginBottom: value,
    } as Declaration;

    return acc;
  },
  {} as RuleSets | Record<string, never>,
);

export const marginX = spaceEntries.reduce(
  (acc, [key, value]) => {
    const className = `mx${key}` as Selector;

    acc[className] = {
      marginLeft: value,
      marginRight: value,
    } as Declaration;

    return acc;
  },
  {} as RuleSets | Record<string, never>,
);

export const marginTop = spaceEntries.reduce(
  (acc, [key, value]) => {
    const className = `mt${key}` as Selector;

    acc[className] = {
      marginTop: value,
    } as Declaration;

    return acc;
  },
  {} as RuleSets | Record<string, never>,
);

export const marginBottom = spaceEntries.reduce(
  (acc, [key, value]) => {
    const className = `mb${key}` as Selector;

    acc[className] = {
      marginBottom: value,
    } as Declaration;

    return acc;
  },
  {} as RuleSets | Record<string, never>,
);

export const marginLeft = spaceEntries.reduce(
  (acc, [key, value]) => {
    const className = `ml${key}` as Selector;

    acc[className] = {
      marginLeft: value,
    } as Declaration;

    return acc;
  },
  {} as RuleSets | Record<string, never>,
);

export const marginRight = spaceEntries.reduce(
  (acc, [key, value]) => {
    const className = `mr${key}` as Selector;

    acc[className] = {
      marginRight: value,
    } as Declaration;

    return acc;
  },
  {} as RuleSets | Record<string, never>,
);
