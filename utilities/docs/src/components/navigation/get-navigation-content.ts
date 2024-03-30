import type { NavigationItems } from '@microsoft/arbutus.main-navigation';
import { camelCase } from 'change-case';

import {
  isMainNavigationCollection,
  isMainNavigationHeader,
  isMainNavigationItem,
} from './config';
import type {
  MainNavigationCollection,
  MainNavigationCollectionsQuery,
  MainNavigationConfig,
  MainNavigationItemType,
} from './index';

/* Common utilities. */

const sortAlphabetically = (a: string, b: string) => {
  if (a < b) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 0;
};

const generateCollectionItems = (
  collection: MainNavigationCollection,
  data: MainNavigationCollectionsQuery,
): NavigationItems => {
  const { exclude = [], order = 'alphabetical' } = collection;
  const { nodes } = data[collection.collectionId];

  const nodesSortedAlphabetically = nodes.sort(
    (a: { title: string }, b: { title: string }) => sortAlphabetically(a.title, b.title),
  );

  const sortedNodes = order === 'alphabetical' ? nodesSortedAlphabetically : nodes;

  return sortedNodes.reduce(
    (
      acc: NavigationItems,
      node: {
        _path: string;
        title: string;
      },
    ) => {
      const key = camelCase(node.title);

      if (exclude.includes(node._path)) {
        return acc;
      }

      return {
        ...acc,
        [key]: {
          id: node._path,
          title: node.title,
          linkProps: {
            to: node._path,
          },
        },
      };
    },
    {},
  );
};

export const getNavigationContent = ({
  collectionsData,
  config,
}: {
  collectionsData: MainNavigationCollectionsQuery;
  config: MainNavigationConfig;
}): NavigationItems => {
  const generateNavigation = (items: MainNavigationItemType[]): NavigationItems => {
    if (!items || items.length === 0) {
      return {};
    }

    return items.reduce((acc: NavigationItems, item: MainNavigationItemType) => {
      if (isMainNavigationItem(item)) {
        const key = camelCase(item.title);

        return {
          ...acc,
          [key]: item,
        };
      }

      if (isMainNavigationCollection(item)) {
        return { ...acc, ...generateCollectionItems(item, collectionsData) };
      }

      if (isMainNavigationHeader(item)) {
        const key = camelCase(item.title);

        acc[key] = {
          title: item.title,
          hasDivider: item.hasDivider,
          items: generateNavigation(item.items),
        };

        return acc;
      }

      return acc;
    }, {});
  };

  return generateNavigation(config);
};
