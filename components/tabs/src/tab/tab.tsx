import { mergeClasses } from '@griffel/react';
import type { FC } from 'react';
import { useEffect, useRef } from 'react';
import * as React from 'react';

import { useTabsContext } from '../tabs-context';
import { useTabStyles } from './tab.styles';
import type { TabProps } from './tab.types';

export const Tab: FC<TabProps> = ({
  className,
  children,
  disabled,
  __index = 0,
  __total = 0,
}) => {
  const { onChangeIndex, currentIndex, id } = useTabsContext();
  const active = currentIndex === __index;

  const ref = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    onChangeIndex({ nextIndex: __index });
  };

  const handleNext = () => {
    const nextIndex = currentIndex === __total - 1 ? 0 : currentIndex + 1;

    onChangeIndex({ nextIndex });
  };
  const handlePrevious = () => {
    const nextIndex = currentIndex === 0 ? __total - 1 : currentIndex - 1;

    onChangeIndex({ nextIndex });
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      handleNext();
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      handlePrevious();
    }
  };

  const isInitialMount = useRef<boolean>(true);

  useEffect(() => {
    if (!isInitialMount.current && active) {
      ref.current?.focus();
    }
    isInitialMount.current = false;
  }, [active]);

  // Styles
  const classes = useTabStyles();

  return (
    <button
      id={`${id}-tab-${__index}`}
      role="tab"
      aria-selected={active}
      aria-controls={`${id}-tabpanel-${__index}`}
      disabled={disabled}
      tabIndex={active ? 0 : -1}
      className={mergeClasses(
        classes.root,
        active && classes.active,
        disabled && classes.disabled,
        className,
      )}
      onClick={handleClick}
      onKeyDown={onKeyDown}
      ref={ref}
    >
      {children}
    </button>
  );
};
