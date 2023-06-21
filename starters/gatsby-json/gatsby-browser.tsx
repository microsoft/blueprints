import * as React from 'react';

import { Shell } from './src/components/shell';
import { SSRSetup } from './src/components/ssr-setup';
import { Theme } from './src/components/theme';

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
