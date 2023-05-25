import { Text } from '@microsoft/arbutus.text';
import type { ThemeOption } from '@microsoft/arbutus.theming';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import type { Meta, StoryFn } from '@storybook/react';
import type { FunctionComponent } from 'react';
import * as React from 'react';
import { useState } from 'react';

import { Centered } from '../../../.storybook/decorators';
import type { ComponentPreviewProps } from '../src/index';
import { ComponentPreview } from '../src/index';
import rawCode from './__raw__/example-component.raw';
import { ExampleComponent } from './example-component';
import { ExampleWrapper } from './example-wrapper';

const themes: { value: ThemeOption; label: string }[] = [
  { value: 'light', label: 'Light Theme' },
  { value: 'dark', label: 'Dark Theme' },
];

export default {
  title: 'Blocks/ComponentPreview',
  component: ComponentPreview,
  decorators: [
    (Story) => (
      <Centered>
        <div style={{ maxWidth: '640px' }}>
          <Story />
        </div>
      </Centered>
    ),
  ],
} as Meta<typeof ComponentPreview>;

const Template: StoryFn<typeof ComponentPreview> = (args) => (
  <ComponentPreview {...args} />
);

const AccessingPreviewThemeTemplate: StoryFn<typeof ComponentPreview> = (args) => {
  const space = useSpaceStyles();

  const [currentTheme, setCurrentTheme] = useState<string>();

  const currentThemeLabel = themes.find((theme) => theme.value === currentTheme)?.label;

  const handleThemeChange = (theme: string) => {
    args.onThemeChange?.(theme);
    setCurrentTheme(theme);
  };

  return (
    <>
      <div className={space.mb6}>
        <Text variant="caption">{currentThemeLabel}&ensp;</Text>
        <Text variant="code">{currentTheme}</Text>
      </div>
      <ComponentPreview {...args} onThemeChange={handleThemeChange} />
    </>
  );
};

export const Simple = Template.bind({}) as StoryFn<
  FunctionComponent<ComponentPreviewProps>
>;
Simple.args = {
  component: ExampleComponent,
  wrapper: ExampleWrapper,
  onFullScreen: undefined,
};

export const WithMenu = Template.bind({}) as StoryFn<
  FunctionComponent<ComponentPreviewProps>
>;
WithMenu.args = {
  component: ExampleComponent,
  wrapper: ExampleWrapper,
  code: rawCode,
  themes,
};

export const AccessingPreviewTheme = AccessingPreviewThemeTemplate.bind({}) as StoryFn<
  FunctionComponent<ComponentPreviewProps>
>;
AccessingPreviewTheme.args = {
  component: ExampleComponent,
  wrapper: ExampleWrapper,
  code: rawCode,
  themes,
  defaultThemeIndex: 1,
};
