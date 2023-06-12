import type { ReferenceLayoutProps } from './reference.types';

const tabOrder = ['usage', 'design', 'develop', 'code', 'accessibility', 'content'];

const filterKnownTabs = (tabs: ReferenceLayoutProps['tabs']) => {
  let result: [ReferenceLayoutProps['tabs'], ReferenceLayoutProps['tabs']] = [[], []];

  tabs.forEach((tab) => {
    if (tabOrder.includes(tab.tab)) {
      result[0].push(tab);
    } else {
      result[1].push(tab);
    }
  });

  return result;
};

const sortAlphabetically = (a: string, b: string) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  };

const sortByOrder = (a: string, b: string) => {
  const aIndex = tabOrder.indexOf(a);
  const bIndex = tabOrder.indexOf(b);
  return aIndex - bIndex;
};

export const sortTabs = (tabs: ReferenceLayoutProps['tabs']) => {
  const [knownTabs, unknownTabs] = filterKnownTabs(tabs);

  return [
    ...knownTabs.sort((a, b) => sortByOrder(a.tab, b.tab)),
    ...unknownTabs.sort((a, b) => sortAlphabetically(a.tab, b.tab)),
  ];
}