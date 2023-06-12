import * as React from 'react';
import { lazy, Suspense, useEffect, useState } from 'react';
import type { FC } from 'react';
import type { HeadFC, PageProps } from 'gatsby';

type PreviewPageContext = {
  title: string;
  examplePath: string;
  dependencies: string[];
};


const importExample = (examplePath: string) =>
  lazy(() => import(`../code-examples/${examplePath}`).catch(() => import('./preview-page-not-found')));

const PreviewPage: FC<PageProps<undefined, PreviewPageContext>> = ({ pageContext: { examplePath } }) => {
  // Example component
  const [Example, setExample] = useState<FC | null>(null);

  useEffect(() => {
    async function loadExample() {
      const Module = await importExample(examplePath);
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

export const Head: HeadFC<undefined, PreviewPageContext> = ({ pageContext: { title } }) => (
  <title>{`MADS | Preview: ${title}`}</title>
);

export default PreviewPage;
