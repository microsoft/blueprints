import { SSRProvider } from '@fluentui/react-utilities';
import { createDOMRenderer, RendererProvider } from '@griffel/react';
import * as React from 'react';
import type { WrapRootElementNodeArgs, WrapPageElementNodeArgs } from 'gatsby';

import { Shell } from './src/components/shell';
import { Theme } from './src/components/theme';

const renderer = createDOMRenderer();

export const wrapRootElement = ({ element }: WrapRootElementNodeArgs) => (
  <RendererProvider renderer={renderer}>
    <SSRProvider>
      <Theme>{element}</Theme>
    </SSRProvider>
  </RendererProvider>
);

export const wrapPageElement = ({ element, props }: WrapPageElementNodeArgs) => (
  <Shell {...props}>{element}</Shell>
);
