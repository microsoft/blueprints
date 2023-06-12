import type { ReactNode } from 'react';
import type { gridClasses } from './grid.styles';

export type GridProps = {
  className?: string;
  layout?: keyof typeof gridClasses;
  children: ReactNode;
};
