import type { HeadFC, PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { type IGatsbyImageData } from 'gatsby-plugin-image';
import type { FC } from 'react';
import * as React from 'react';

import { HomeLayout, type HomeLayoutProps } from '../layouts/home';

type HomePageData = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
    };
  };
  homeJson: {
    title: string;
    leading: string;
    cta: {
      label: string;
      href: string;
    };
    valueStatement: string;
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
      isExternal: boolean;
      to: string;
    }[];
  };
};

const getHomeContent = (data?: HomePageData): HomeLayoutProps => ({
  title: data?.homeJson?.title ?? '',
  leading: data?.homeJson?.leading ?? '',
  cta: data?.homeJson?.cta ?? { label: '', href: '' },
  valueStatement: data?.homeJson?.valueStatement ?? '',
  statements: data?.homeJson?.statements ?? [],
  articles: data?.homeJson?.articles ?? [],
});

const IndexPage: FC<PageProps<HomePageData>> = ({ data }) => {
  const homeLayoutProps = getHomeContent(data);

  return <HomeLayout {...homeLayoutProps} />;
};

export const Head: HeadFC<HomePageData> = ({ data }) => {
  const { title: site } = data.site?.siteMetadata ?? '';

  return <title>{`${site} | Welcome!`}</title>;
};

export default IndexPage;

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    homeJson(_layout: { eq: "home" }) {
      title
      leading
      cta {
        label
        href
      }
      valueStatement
      articles {
        title
        description
        image {
          src {
            publicURL
          }
          alt
        }
        isExternal
        to
      }
    }
  }
`;
