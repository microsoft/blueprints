import { createContext, useContext } from 'react';

import type { TableListContextProps } from './table-list-context.types';

export const TableListContext = createContext<TableListContextProps>({
  isAlternating: false,
});

export const TableListProvider = TableListContext.Provider;

export const useTableListContext = () => useContext(TableListContext);
