import type { IGatsbyImageData } from 'gatsby-plugin-image';

export type HomeLayoutProps = {
  title: string;
  leading: string;
  statements: {
    headline: string;
    description: string;
  }[];
  articles: {
    title: string;
    description: string;
    image: {
      src: {
        publicURL: string;
        childrenImageSharp?: { gatsbyImageData: IGatsbyImageData }[];
      };
      alt: string;
    };
  }[];
};
