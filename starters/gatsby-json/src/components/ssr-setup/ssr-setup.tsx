import { createDOMRenderer, RendererProvider } from '@griffel/react';
import type { FC, ReactNode } from 'react';
import * as React from 'react';

const renderer = createDOMRenderer();

export const SSRSetup: FC<{ children: ReactNode }> = ({ children }) => (
  <RendererProvider renderer={renderer}>{children}</RendererProvider>
);
