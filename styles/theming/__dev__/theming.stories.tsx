import { Button } from '@microsoft/arbutus.button';
import { Text } from '@microsoft/arbutus.text';
import { ThemeSwitch } from '@microsoft/arbutus.theme-switch';
import type { Meta, StoryFn } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import { Centered } from '../../../.storybook/decorators';
import { ThemeProvider, useTheme } from '../src/index';

const DemoComponent: FunctionComponent = () => {
  const { themeKey, setTheme } = useTheme();

  const isDark = themeKey === 'dark';
  const onToggle = () => setTheme?.(isDark ? 'light' : 'dark');

  return (
    <Centered>
      <ThemeSwitch isDark={isDark} onToggle={onToggle} />
      <Text as="h1" block variant="title">
        Welcome to theming!
      </Text>
      <Button>I am a button</Button>
    </Centered>
  );
};

export default {
  title: 'Styles/Theming',
} as Meta;

const Template: StoryFn = () => (
  <ThemeProvider>
    <DemoComponent />
  </ThemeProvider>
);

export const Simple = Template.bind({}) as StoryFn;
