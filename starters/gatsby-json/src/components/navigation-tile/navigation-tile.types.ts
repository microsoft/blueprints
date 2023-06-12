import { ImageDataLike } from 'gatsby-plugin-image';

export type NavigationTileLink = {
  text: string;
  to: string;
  isExternal: boolean;
};

export type NavigationTileProps = {
  title: string;
  links: NavigationTileLink[];
  thumbnail?: {
    alternativeText: string;
    url: string;
    localFile: ImageDataLike;
  };
};
