import type { HeadFC, PageProps } from 'gatsby';
import type { FC } from 'react';
import * as React from 'react';

import type { Layout } from '../layouts/layouts.types';

type JsonPageContext = {
  relativePath: string;
  title: string;
  layout: Layout;
}

const JsonPage: FC<PageProps<undefined, JsonPageContext>> = ({
  pageContext: { relativePath, layout, title },
}) => {
  return (
    <>
      <h1>{title}</h1>
      <pre>{JSON.stringify({ relativePath, layout }, null, 2)}</pre>
    </>
  );
};

export const Head: HeadFC<undefined, JsonPageContext> = ({
  pageContext: { title },
}) => <title>{`Blueprints | ${title}`}</title>;

export default JsonPage;
