import type { ReactNode } from 'react';
import { Children, cloneElement, isValidElement } from 'react';

/**
 * This utility is used to help with mobile layout. It injects an index into each child of a component and adds
 * 1isCollapsed` prop. `__index` helps the child cell to find its corresponding header.
 */
export const injectIndex = ({ children }: { children: ReactNode }) => {
  const childrenWithIndex = Children.map(children, (child, i) => {
    if (isValidElement(child)) {
      // @ts-ignore Not a real error, type has not been implemented to accommodate injecting additional props.
      return cloneElement(child, { __index: i });
    }

    return child;
  });

  return childrenWithIndex;
};
