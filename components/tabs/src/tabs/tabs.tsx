import { mergeClasses } from '@griffel/react';
import { nanoid } from 'nanoid';
import type { FC } from 'react';
import * as React from 'react';
import { useMemo, useState } from 'react';

import { TabsProvider } from '../tabs-context';
import { useTabsStyles } from './tabs.styles';
import type { TabsProps } from './tabs.types';

export const Tabs: FC<TabsProps> = ({ className, children, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);
  const [prevIndex, setPrevIndex] = useState<number>();

  const onChangeIndex = ({ nextIndex }: { nextIndex: number }) => {
    setPrevIndex(currentIndex);
    setCurrentIndex(nextIndex);
  };

  const id = useMemo(() => nanoid(), []);

  // Styles
  const classes = useTabsStyles();

  return (
    <div className={mergeClasses(classes.root, className)} role="tablist">
      <TabsProvider value={{ id, currentIndex, prevIndex, onChangeIndex }}>
        {children}
      </TabsProvider>
    </div>
  );
};
