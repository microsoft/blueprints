import type { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal } from 'react';

import type { TableListProps } from '../table-list/table-list.types';

export type TableListContextProps = {
  variant?: TableListProps['variant'];
  columnWeights?: TableListProps['columnWeights'];
  headerItems?: (string | number | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal)[];
  isCollapsed?: boolean;
};
