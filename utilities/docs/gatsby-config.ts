import * as dotenv from 'dotenv';
import type { GatsbyConfig } from 'gatsby';

dotenv.config({
  path: `.env.${process.env.NODE_ENV ?? 'development'}`,
});

const config: GatsbyConfig = {
  pathPrefix: process.env.NODE_ENV === 'production' ? 'blueprints' : '/',
  siteMetadata: {
    title: `Blueprints`,
    description:
      'An ecosystem of guidance, components and tools for creating your best documentation yet. Built by the team at Fluent, Microsoft Design.',
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: false,
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/favicon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/src/assets`,
      },
    },
    // Plugins to parse content JSON files.
    `gatsby-transformer-json`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content-json',
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'code-examples',
        path: './src/code-examples/',
      },
    },
  ],
};

export default config;
