import * as React from 'react';
import type { WrapRootElementBrowserArgs, WrapPageElementBrowserArgs } from 'gatsby';

import { Shell } from './src/components/shell';
import { SSRSetup } from './src/components/ssr-setup';
import { Theme } from './src/components/theme';

export const wrapRootElement = ({ element }: WrapRootElementBrowserArgs) => {
  return (
    <SSRSetup>
      <Theme>{element}</Theme>
    </SSRSetup>
  );
};

export const wrapPageElement = ({ element, props }: WrapPageElementBrowserArgs) => (
  <Shell {...props}>{element}</Shell>
);
