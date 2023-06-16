import { NavigationItems } from '@microsoft/arbutus.main-navigation';

import type {
  ComponentPageData,
  GuidelinesPageData,
  NavigationQuery,
} from './navigation';

/* Common utilities. */

const sortAlphabetically = (
  a: ComponentPageData | GuidelinesPageData,
  b: ComponentPageData | GuidelinesPageData,
) => {
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }
  return 0;
};

const sortByIndex = (a: GuidelinesPageData, b: GuidelinesPageData) => {
  if (!a._orderInNav || !b._orderInNav) {
    return 0;
  }
  if (a._orderInNav < b._orderInNav) {
    return -1;
  }
  if (a._orderInNav > b._orderInNav) {
    return 1;
  }
  return 0;
};

/* Page formatting. */

const formatPagesForNavigation = (
  data: ComponentPageData[],
  section: 'components' | 'guidance',
) =>
  data.reduce((acc, { title, _path }) => {
    acc[_path] = {
      title,
      id: `/${section}/${_path}/`,
      linkProps: { to: `/${section}/${_path}` },
    };
    return acc;
  }, {} as NavigationItems) ?? {};

const sortPages = (data: ComponentPageData[] | GuidelinesPageData[]) => {
  const filtered = data.filter((page) => page._includeInNav);
  const indexedPages = filtered
    .filter((page) => typeof page._orderInNav === 'number')
    .sort(sortByIndex);
  const restOfPages = filtered
    .filter((page) => typeof page._orderInNav !== 'number')
    .sort(sortAlphabetically);

  return [...indexedPages, ...restOfPages];
};

/* Final navigation object. */

export const getNavigationContent = (data: NavigationQuery) => ({
  guidance: data.allGuidanceJson
    ? formatPagesForNavigation(sortPages(data.allGuidanceJson.nodes), 'guidance')
    : {},
  components: data.allComponentsJson
    ? formatPagesForNavigation(sortPages(data.allComponentsJson.nodes), 'components')
    : {},
});
