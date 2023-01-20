import { createContext } from 'react';

import type { MainNavigationRendererContextValue } from './main-navigation-renderer.types';

export const MainNavigationRendererContext =
  createContext<MainNavigationRendererContextValue>({
    linkAs: 'a',
  });

export const MainNavigationRendererProvider = MainNavigationRendererContext.Provider;
export const MainNavigationRendererConsumer = MainNavigationRendererContext.Consumer;
