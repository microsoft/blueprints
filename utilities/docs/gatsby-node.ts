/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-argument */
import { sentenceCase } from 'change-case';
import type { GatsbyNode } from 'gatsby';
import path from 'path';

import { generatePageQuery, findLayout, getPath, findTitle } from './src/utilities/generating-pages';
import type { Layout } from './src/layouts/layouts.types';
 
type JsonPageResult = {
  allFile: {
    nodes: {
      relativePath: string;
      childAtomsJson: {
        title: string;
        _layout: Layout;
      } | null;
      childComponentsJson: {
        title: string;
        _layout: Layout;
      } | null;
      childGuidanceJson: {
        title: string;
        _layout: Layout;
      } | null;
      childListsJson: {
        title: string;
        _layout: Layout;
      } | null;
      childPagesJson: {
        title: string;
        _layout: Layout;
      } | null;
      childTilesJson: {
        title: string;
        _layout: Layout;
      } | null;
    }
  }[]
}

type ExamplePageResult = {
  allFile: {
    nodes: {
      absolutePath: string;
      relativePath: string;
    }[];
  };
};

const knownPageCollections = ['Atoms', 'Components', 'Guidance', 'Lists', 'Pages', 'Tiles'];
const pageQuery = generatePageQuery(knownPageCollections);

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage } = actions;

  // Generating pages from JSON files.
  const JsonPage = path.resolve('./src/templates/json-page.tsx');

  const jsonPagesQuery = await graphql<JsonPageResult>(pageQuery);

  if (jsonPagesQuery.errors) {
    reporter.panicOnBuild(`There was an error loading your pages data.`, jsonPagesQuery.errors);

    return;
  };

  const jsonPages = jsonPagesQuery?.data?.allFile.nodes ?? [];

  if (jsonPages.length > 0) {
    jsonPages.forEach(({ relativePath, ...childJson }) => {
      const layout = findLayout(childJson);
      const title = findTitle(childJson);
      const pagePath = getPath(relativePath);
      console.log(pagePath, layout);

      if (layout !== null) {
        createPage({
          path: pagePath,
          component: JsonPage,
          context: {
            title: title,
            layout: layout,
            relativePath: relativePath,
          },
        });
      }
    });
  };

  // Generating pages for example files.

  const PreviewPage = path.resolve('./src/templates/preview-page.tsx');

  const examplePageQuery = await graphql<ExamplePageResult>(
    `
      {
        allFile(filter: { relativePath: { glob: "*.example.*" } }) {
          nodes {
            relativePath
            absolutePath
          }
        }
      }
    `,
  );

  if (examplePageQuery.errors) {
    reporter.panicOnBuild(`There was an error loading your pages data.`, examplePageQuery.errors);

    return;
  }

  const examplePages = examplePageQuery?.data?.allFile.nodes ?? [];

  if (examplePages.length > 0) {
    examplePages.forEach(({ absolutePath, relativePath }) => {
      // eslint-disable-next-line no-useless-escape -- This RegEx is correct.
      const match = absolutePath.match(/\/([^\/.]+)\.example./);
      const fileName = match?.[1] ?? 'file';
      const title = sentenceCase(fileName);

      createPage({
        path: `/preview/${fileName}`,
        component: PreviewPage,
        context: {
          title: title,
          fileName: fileName,
          examplePath: relativePath,
          dependencies: [],
        },
      });
    });
  }
};
