import { LinkProps as ArbutusLinkProps } from '@microsoft/arbutus.link';
import type { ReactNode } from 'react';

export type LinkProps = {
  to: string;
  isExternal?: boolean;
  children: ReactNode;
} & Pick<ArbutusLinkProps, 'variant' | 'isUnderlined' | 'withIcon'>;
