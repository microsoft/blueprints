export type MainNavigationCollectionKeys = keyof MainNavigationCollectionsQuery;;
export type MainNavigationCollectionsQuery = {
  guidance: {
    nodes: {
      _path: string;
      title: string;
    }[];
  };
  layouts: {
    nodes: {
      _path: string;
      title: string;
    }[];
  };
  patterns: {
    nodes: {
      _path: string;
      title: string;
    }[];
  };
  componentsAtoms: {
    nodes: {
      _path: string;
      title: string;
    }[];
  };
  componentsLists: {
    nodes: {
      _path: string;
      title: string;
    }[];
  };
  componentsTiles: {
    nodes: {
      _path: string;
      title: string;
    }[];
  };
  styles: {
    nodes: {
      _path: string;
      title: string;
    }[];
  };
}


export type MainNavigationItem = {
  title: string;
  id: string;
  linkProps: {
    to: string;
  }
};

export type MainNavigationCollection = {
  collection: string;
  collectionId: MainNavigationCollectionKeys;
  exclude?: string[];
  include?: string[];
  order?: 'alphabetical' | 'chronological';
}

export type MainNavigationHeader = {
  title: string;
  items: MainNavigationItemType[];
  hasDivider?: boolean;
}

export type MainNavigationItemType = MainNavigationItem | MainNavigationCollection | MainNavigationHeader;

export type MainNavigationConfig = MainNavigationItemType[];

export type NavigationQuery = {
  mainNavigationJson: {
    items: MainNavigationItemType[];
  };
};

export type CollectionsQuery = {
  [key: string]: {
    nodes: {
      title: string;
      _path: string;
    }[];
  }
}