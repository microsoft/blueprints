/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-argument */
import { sentenceCase } from 'change-case';
import type { GatsbyNode } from 'gatsby';
import path from 'path';

import { findDuplicates } from './src/utilities/generating-pages';
import type { Layout } from './src/layouts/layouts.types';

type JsonPageResult = {
  allPagesJson: {
    nodes: {
      title: string;
      _path: string;
      _layout: Layout;
    }[]
  }
}

type ExamplePageResult = {
  allFile: {
    nodes: {
      absolutePath: string;
      relativePath: string;
    }[];
  };
};

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage } = actions;

  // Generating pages from JSON files.
  const JSONPage = path.resolve('./src/templates/json-page.tsx');

  const jsonPagesQuery = await graphql<JsonPageResult>(`
    query JSONPagesQuery {
      allPagesJson {
        nodes {
          title
          _path
          _layout
        }
      }
    }
  `);

  if (jsonPagesQuery.errors) {
    reporter.panicOnBuild(`There was an error loading your pages data.`, jsonPagesQuery.errors);

    return;
  };

  const jsonPages = jsonPagesQuery?.data?.allPagesJson.nodes ?? [];

  if (jsonPages.length > 0) {
    const paths = jsonPages.map(({ _path }) => _path);
    const { hasDuplicates, duplicates } = findDuplicates(paths);
    if (hasDuplicates) {
      console.error(`There are multiple pages with the same path: ${duplicates.toString()}.
Skipping generating pages from JSON files. Please ensure that all pages have a unique path.`);
    } else {

      jsonPages.forEach(({ title, _path, _layout }) => {
        if (_layout !== null) {
          console.log(`Generating page from JSON file: ${_path}`);

          createPage({
            path: _path,
            component: JSONPage,
            context: {
              title: title,
              layout: _layout,
              path: _path,
            },
          });
        }
      });
    }
  };

  // Generating pages for example files.

  const PreviewPage = path.resolve('./src/templates/preview-page.tsx');

  const examplePageQuery = await graphql<ExamplePageResult>(`
    query ExamplePagesQuery {
      allFile(filter: { relativePath: { glob: "*.example.*" } }) {
        nodes {
          relativePath
          absolutePath
        }
      }
    }
  `);

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
