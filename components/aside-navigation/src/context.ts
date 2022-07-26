import { createContext } from 'react';

import type { AsideNavigationProps } from './aside-navigation';

export const AsideNavigationContext = createContext<
  Partial<Pick<AsideNavigationProps, 'currentIndex'>>
>({});
