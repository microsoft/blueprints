import type {
  MainNavigationCollection,
  MainNavigationConfig,
  MainNavigationHeader,
  MainNavigationItem,
  MainNavigationItemType,
} from './index';

export function isMainNavigationCollection(item: MainNavigationItemType): item is MainNavigationCollection {
  return 'collection' in item;
}

export function isMainNavigationHeader(item: MainNavigationItemType): item is MainNavigationHeader {
  return 'items' in item;
}

export function isMainNavigationItem(item: MainNavigationItemType): item is MainNavigationItem {
  return 'linkProps' in item;
}

export const MAIN_NAVIGATION: MainNavigationConfig = [
  {
    title: 'Getting Started',
    id: '/getting-started',
    linkProps: {
      to: '/getting-started'
    }
  },
  {
    hasDivider: true,
    id: '/about',
    linkProps: {
      to: '/about'
    },
    title: 'About'
  },
  {
    title: 'Guidance',
    hasDivider: true,
    items: [
      {
        id: '/guidance/introduction',
        linkProps: {
          to: '/guidance/introduction'
        },
        title: 'Introduction'
      },
      {
        collection: '/guidance/*',
        collectionId: 'guidance',
        exclude: ['/guidance/introduction'],
        order: 'alphabetical'
      }
    ]
  },
  {
    title: 'Layouts',
    items: [
      {
        id: '/layouts/introduction',
        linkProps: {
          to: '/layouts/introduction'
        },
        title: 'Introduction'
      },
    {
        collection: '/layouts/*',
        collectionId: 'layouts',
        exclude: ['/layouts/introduction'],
        order: 'alphabetical'
      }
    ]
  },
  {
    title: 'Patterns',
    items: [
      {
        id: '/patterns/introduction',
        linkProps: {
          to: '/patterns/introduction'
        },
        title: 'Introduction'
      },
      {
        collection: '/patterns/*',
        collectionId: 'patterns',
        exclude: ['/patterns/introduction'],
        order: 'alphabetical'
      }
    ]
  },
  {
    title: 'Components',
    hasDivider: true,
    items: [
      {
        title: 'Introduction',
        id: '/components/introduction',
        linkProps: {
          to: '/components/introduction'
        }
      },
      {
        title: 'Atoms',
        items: [
          {
            collection: '/components/atoms/*',
            collectionId: 'componentsAtoms',
            order: 'alphabetical'
          }
        ]
      },
      {
        title: 'Lists',
        items: [
          {
            collection: '/components/lists/*',
            collectionId: 'componentsLists',
            order: 'alphabetical'
          }
        ]
      },
      {
        title: 'Tiles',
        items: [
          {
            collection: '/components/tiles/*',
            collectionId: 'componentsTiles',
            order: 'alphabetical'
          }
        ]
      } 
    ]
  },
  {
    title: 'Styles',
    hasDivider: true,
    items: [
      {
        title: 'Introduction',
        id: '/styles/introduction',
        linkProps: {
          to: '/styles/introduction'
        }
      }
    ]
  },
  {
    title: 'Starters',
    hasDivider: true,
    items: [
      {
        title: 'Introduction',
        id: '/starters/introduction',
        linkProps: {
          to: '/starters/introduction'
        }
      }
    ]
  },
  {
    title: 'CMS',
    hasDivider: true,
    items: [
      {
        id: '/cms/introduction',
        linkProps: {
          to: '/cms/introduction'
        },
        title: 'Introduction'
      }
    ]
  }
]