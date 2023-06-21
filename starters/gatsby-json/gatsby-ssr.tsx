import { SSRProvider } from '@fluentui/react-utilities';
import { createDOMRenderer, RendererProvider } from '@griffel/react';
import * as React from 'react';

import { Shell } from './src/components/shell';
import { Theme } from './src/components/theme';

const renderer = createDOMRenderer();

export const wrapRootElement = ({ element }) => (
  <RendererProvider renderer={renderer}>
    <SSRProvider>
      <Theme>{element}</Theme>
    </SSRProvider>
  </RendererProvider>
);

export const wrapPageElement = ({ element, props }) => (
  <Shell {...props}>{element}</Shell>
);
