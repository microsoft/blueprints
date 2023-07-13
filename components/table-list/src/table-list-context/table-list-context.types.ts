import type { JSXElementConstructor, ReactElement, ReactPortal } from 'react';

import type { TableListProps } from '../table-list/table-list.types';

export type TableListContextProps = {
  variant?: TableListProps['variant'];
  columnSizing?: TableListProps['columnSizing'];
  headerItems?: (string | number | ReactElement<unknown, string | JSXElementConstructor<unknown>> | ReactPortal)[];
  isCollapsed?: boolean;
};
