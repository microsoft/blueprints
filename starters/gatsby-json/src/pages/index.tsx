import * as React from 'react';
import type { FC } from 'react';
import type { HeadFC } from 'gatsby';
import { graphql } from 'gatsby';
import type { PageProps } from 'gatsby';

import { HomeLayout, type HomeLayoutProps } from '../layouts/home';

type HomePageData = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
    };
  }
  homeJson: {
    title: string;
    leading: string;
  };
};

const getHomeContent = (data?: HomePageData): HomeLayoutProps => ({
  title: data?.homeJson?.title ?? '',
  leading: data?.homeJson?.leading ?? ''
});

const IndexPage: FC<PageProps<HomePageData>> = ({ data }) => {
  const homeLayoutProps = getHomeContent(data);

  return <HomeLayout {...homeLayoutProps} />;
};

export const Head: HeadFC<HomePageData> = () => <title>Home Page</title>;

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
    }
  }
`;
