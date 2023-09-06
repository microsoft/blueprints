import type { HeadFC, PageProps } from 'gatsby';
import type { FC } from 'react';
import * as React from 'react';
import { lazy, Suspense, useEffect, useState } from 'react';

type PreviewPageContext = {
  title: string;
  examplePath: string;
  dependencies: string[];
};

const importExample = (examplePath: string) =>
  lazy(() =>
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return -- import() is supposed to return a promise of type any.
    import(`../code-examples/${examplePath}`).catch(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return -- import() is supposed to return a promise of type any.
      () => import('./preview-page-not-found'),
    ),
  );

const PreviewPage: FC<PageProps<undefined, PreviewPageContext>> = ({
  pageContext: { examplePath },
}) => {
  // Example component
  const [Example, setExample] = useState<FC | null>(null);

  useEffect(() => {
    function loadExample() {
      const Module = importExample(examplePath);

      setExample(Module);
    }
    loadExample();
  }, [examplePath]);

  if (Example) {
    return (
      <Suspense fallback={<>Loading component preview</>}>
        <Example />
      </Suspense>
    );
  }

  return <p>Example not found.</p>;
};

export const Head: HeadFC<undefined, PreviewPageContext> = ({
  pageContext: { title },
}) => <title>{`Blueprints | Preview: ${title}`}</title>;

export default PreviewPage;
