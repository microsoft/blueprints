import type { NavigationItems } from '@microsoft/arbutus.main-navigation';
import { graphql } from 'gatsby';

import type {
  MainNavigationCollection,
  NavigationQuery,
  MainNavigationItemType,
  MainNavigationHeader,
  MainNavigationItem,
} from './navigation';

/* Common utilities. */

// const sortAlphabetically = (
//   a: ComponentPageData | GuidelinesPageData,
//   b: ComponentPageData | GuidelinesPageData,
// ) => {
//   if (a.title < b.title) {
//     return -1;
//   }

//   if (a.title > b.title) {
//     return 1;
//   }

//   return 0;
// };

// const sortByIndex = (a: GuidelinesPageData, b: GuidelinesPageData) => {
//   if (!a._orderInNav || !b._orderInNav) {
//     return 0;
//   }

//   if (a._orderInNav < b._orderInNav) {
//     return -1;
//   }

//   if (a._orderInNav > b._orderInNav) {
//     return 1;
//   }

//   return 0;
// };

/* Page formatting. */
function isMainNavigationCollection(item: MainNavigationItemType): item is MainNavigationCollection {
  return 'collection' in item;
}

function isMainNavigationHeader(item: MainNavigationItemType): item is MainNavigationHeader {
  return 'items' in item;
}

function isMainNavigationItem(item: MainNavigationItemType): item is MainNavigationItem {
  return 'linkProps' in item;
}

export const makeNavigationQuery = (items: NavigationQuery["mainNavigationJson"]["items"]) => {
  function findObjectsWithCollectionKey(items: NavigationQuery["mainNavigationJson"]["items"]) {
    const objectsWithCollectionKey: MainNavigationCollection[] = [];
  
    for (const item of items) {
      if (isMainNavigationCollection(item)) {
        objectsWithCollectionKey.push(item);
      } else if (isMainNavigationHeader(item)) {
        const nestedObjects = findObjectsWithCollectionKey(item.items);

        if (nestedObjects.length > 0) {
          objectsWithCollectionKey.push(...nestedObjects);
        }
      }
    }
  
    return objectsWithCollectionKey;
  }

  const collections = findObjectsWithCollectionKey(items).map(({ collection }) => {
    const alias = collection.replace('/', '');

    return `
      allPagesJson(filter: {_path: {glob: "${collection}*"}}) {
        nodes {
          title
        }
      }
    `}
  );

  return {
    aliases: {
      componentsAtoms: '/components/atoms/*',
      guidance: '/guidance/*',
    },
    query: graphql`
      query MyQuery {
        componentsAtoms: allPagesJson(filter: {_path: {glob: "/components/atoms/*"}}) {
          nodes {
            _path
            title
          }
        }
        guidance: allPagesJson(filter: {_path: {glob: "/guidance/*"}}) {
          nodes {
            _path
            title
          }
        }
      }
    `
  }
}

export const getNavigationContent = (data: NavigationQuery, collectionsKey: Record<string, string>): NavigationItems => {
  return {}
}
