import { createDOMRenderer, RendererProvider } from '@griffel/react';
import * as React from 'react';
import type { FC, ReactNode } from 'react';

const renderer = createDOMRenderer();

export const SSRSetup: FC<{ children: ReactNode }> = ({ children }) => (
  <RendererProvider renderer={renderer}>{children}</RendererProvider>
);
