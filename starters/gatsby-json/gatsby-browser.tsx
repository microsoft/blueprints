import * as React from 'react';
import { Theme } from './src/components/theme';
import { Shell } from './src/components/shell';
import { SSRSetup } from './src/components/ssr-setup';

export const wrapRootElement = ({ element }) => {
  return (
    <SSRSetup>
      <Theme>{element}</Theme>
    </SSRSetup>
  );
};

export const wrapPageElement = ({ element, props }) => (
  <Shell {...props}>{element}</Shell>
);
