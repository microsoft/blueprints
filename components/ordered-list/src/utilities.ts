import type { ReactNode } from 'react';
import { Children, cloneElement, isValidElement } from 'react';

export const injectIndex = ({
  children,
  start,
}: {
  children: ReactNode;
  start?: number;
}) => {
  let __index = start ? start - 1 : 0;
  const __total = Children.count(children);
  const childrenWithIndex = Children.map(children, (child) => {
    if (isValidElement(child)) {
      __index = __index + 1;

      // @ts-ignore Not a real error, type has not been implemented to accommodate injecting additional props.
      return cloneElement(child, { __index, __total });
    }

    return child;
  });

  return childrenWithIndex;
};
