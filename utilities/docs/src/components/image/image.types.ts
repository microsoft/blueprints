import type { GatsbyImageProps, IGatsbyImageData } from 'gatsby-plugin-image';

export type ImageProps = {
  image?: {
    alternativeText: string;
    url?: string;
    localFile?: { publicURL: string; childrenImageSharp: { gatsbyImageData: IGatsbyImageData }[] };
  };
  src?: string;
  alt?: string;
  className?: string;
  isRounded?: boolean;
  isHero?: boolean;
  gatsbyImageProps?: Omit<GatsbyImageProps, 'alt' | 'image'>;
};
