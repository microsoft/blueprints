import { createContext } from 'react';

import type { TabsContextValue } from './tabs-context.types';

export const TabsContext = createContext<TabsContextValue>({
  currentIndex: 0,
  prevIndex: undefined,
  id: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  onChangeIndex: ({ nextIndex }) => {},
});

export const TabsProvider = TabsContext.Provider;
