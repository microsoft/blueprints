import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';
import { IconButton } from '@microsoft/arbutus.icon-button';
import { Text } from '@microsoft/arbutus.text';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React, { useState } from 'react';

import type { TrayProps } from '../src/index';
import { Tray } from '../src/index';
import { NavigationSample } from './navigation-sample';
import { PageSample } from './page-sample';

export default {
  title: 'Layout/Tray',
  component: Tray,
} as ComponentMeta<typeof Tray>;

const useGridStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
  },
  header: {
    display: 'grid',
    gridTemplateColumns: `${tokens.spacingHorizontalXXXL} auto`,
    columnGap: tokens.spacingHorizontalM,
    marginBottom: tokens.spacingVerticalXL,
  },
});

const Template: ComponentStory<typeof Tray> = (args) => {
  const classes = useGridStyles();
  const space = useSpaceStyles();

  return (
    <div className={classes.root}>
      <Tray {...args}>
        <div className={space.p3}>lorem</div>
      </Tray>
      <PageSample />
    </div>
  );
};

export const Simple = Template.bind({}) as ComponentStory<FunctionComponent<TrayProps>>;
Simple.args = {
  isOpen: true,
};

const NavigationExampleTemplate: ComponentStory<typeof Tray> = () => {
  const classes = useGridStyles();
  const space = useSpaceStyles();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <div className={classes.root}>
      <Tray isOpen={isOpen}>
        <div className={space.p3}>
          <header className={classes.header}>
            <IconButton iconName="slide-in" label="Close navigation" onClick={onClose} />
            <Text as="h1" variant="subheading">
              Arbutus
            </Text>
          </header>
          <NavigationSample />
        </div>
      </Tray>
      <header className={classes.header}>
        <IconButton iconName="slide-out" label="Open navigation" onClick={onOpen} />
        <Text as="h1" variant="subheading">
          Arbutus
        </Text>
      </header>
      <PageSample />
    </div>
  );
};

export const NavigationExample = NavigationExampleTemplate.bind({}) as ComponentStory<
  FunctionComponent<TrayProps>
>;
