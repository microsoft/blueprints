import { createContext } from 'react';

import type { MarkListProps } from './mark-list';

export const MarkListContext = createContext<
  Partial<Pick<MarkListProps, 'iconColor' | 'iconName'>>
>({});
