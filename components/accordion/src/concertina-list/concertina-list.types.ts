import type * as React from 'react';

import type { ConcertinaListItemProps } from '../concertina-list-item';

export type ConcertinaListProps = {
  title?: string;
  description?: string;
  items: (ConcertinaListItemProps & { content: React.ReactNode })[];
};
