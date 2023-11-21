/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-argument */
import { sentenceCase } from 'change-case';
import path from 'path';

export const createPages = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage } = actions;

  // Generating pages for example files.

  const PreviewPage = path.resolve('./src/templates/preview-page.tsx');

  const examplePageQuery = await graphql(`
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
    reporter.panicOnBuild(
      `There was an error loading your pages data.`,
      examplePageQuery.errors,
    );

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
