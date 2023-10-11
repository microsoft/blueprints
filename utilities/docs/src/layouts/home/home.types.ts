import type { IGatsbyImageData } from 'gatsby-plugin-image';

export type HomeLayoutProps = {
  title: string;
  leading: string;
  statements: {
    headline: string;
    description: string;
  }[];
  cta: {
    label: string;
    href: string;
  };
  valueStatement: string;
  articles: {
    title: string;
    description: string;
    isExternal: boolean;
    to: string;
    image: {
      src: {
        publicURL: string;
        childrenImageSharp?: { gatsbyImageData: IGatsbyImageData }[];
      };
      alt: string;
    };
  }[];
};
