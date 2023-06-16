import type { IGatsbyImageData } from 'gatsby-plugin-image';

import type { ComponentData } from '../../components/component-renderer';

export type BasicLayoutProps = {
  title: string;
  leading?: string;
  heroImage?: {
    alt: string;
    src: { publicURL: string; childrenImageSharp: { gatsbyImageData: IGatsbyImageData }[] };
  };
  content?: ComponentData[];
};
