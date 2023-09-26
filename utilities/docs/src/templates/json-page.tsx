import type { HeadFC, PageProps } from 'gatsby';
import type { FC } from 'react';
import * as React from 'react';

import type { LayoutKey } from '../layouts/layouts.types';
import { WorkInProgressLayout } from '../layouts/work-in-progress';
import { BasicLayout } from '../layouts/basic';
import { ReferenceLayout } from '../layouts/reference';
import { HomeLayout } from '../layouts/home';


type JsonPageContext = {
  relativePath: string;
  title: string;
  layout: LayoutKey;
}

const LAYOUTS_MAP = {
  basic: BasicLayout,
  home: HomeLayout,
  reference: ReferenceLayout,
  'work-in-progress': WorkInProgressLayout,
}

const JsonPage: FC<PageProps<undefined, JsonPageContext>> = ({
  pageContext: { relativePath, layout, title },
}) => {
  const PageLayout = LAYOUTS_MAP[layout];
  return (
    <WorkInProgressLayout title={title} />
  );
};

export const Head: HeadFC<undefined, JsonPageContext> = ({
  pageContext: { title },
}) => <title>{`Blueprints | ${title}`}</title>;

export default JsonPage;
