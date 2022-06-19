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

import { useMainNavigationLinkStyles } from '../main-navigation-link';
import { useMainNavigationSubStyles } from './main-navigation-sub.styles';
import type { MainNavigationSubProps } from './main-navigation-sub.types';

export const MainNavigationSub: FC<MainNavigationSubProps> = ({
  className,
  children,
  title,
}) => {
  const classes = useMainNavigationSubStyles();
  const linkClasses = useMainNavigationLinkStyles();

  return (
    <Accordion className={className} collapsible>
      <AccordionItem>
        <AccordionButton className={linkClasses.root}>
          <Icon iconName="chevron" />
          {title}
        </AccordionButton>
        <AccordionPanel>
          <div className={classes.subList}>{children}</div>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
