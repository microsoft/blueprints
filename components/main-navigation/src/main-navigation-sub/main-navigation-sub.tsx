import '@reach/accordion/styles.css';

import { Icon } from '@arbutus/component.icon';
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from '@reach/accordion';
import type { FC } from 'react';
import * as React from 'react';

import { useMainNavigationSubStyles } from './main-navigation-sub.styles';
import type { MainNavigationSubProps } from './main-navigation-sub.types';

export const MainNavigationSub: FC<MainNavigationSubProps> = ({
  className,
  children,
  title,
}) => {
  const classes = useMainNavigationSubStyles();

  return (
    <Accordion className={className} collapsible>
      <AccordionItem>
        <AccordionButton className={classes.button}>
          <Icon iconName="chevron-right" color="tertiary" />
          {title}
        </AccordionButton>
        <AccordionPanel>
          <div className={classes.subList}>{children}</div>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
