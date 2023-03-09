import type { ThemeOption } from '@microsoft/arbutus.theming';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import { Centered } from '../../../.storybook/decorators';
import rawCode from '../__raw__/example-component.raw';
import type { ComponentPreviewProps } from '../src/index';
import { ComponentPreview } from '../src/index';
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
} as ComponentMeta<typeof ComponentPreview>;

const Template: ComponentStory<typeof ComponentPreview> = (args) => (
  <ComponentPreview {...args} />
);

export const Simple = Template.bind({}) as ComponentStory<
  FunctionComponent<ComponentPreviewProps>
>;
Simple.args = {
  component: ExampleComponent,
  wrapper: ExampleWrapper,
  onFullScreen: undefined,
};

export const WithMenu = Template.bind({}) as ComponentStory<
  FunctionComponent<ComponentPreviewProps>
>;
WithMenu.args = {
  component: ExampleComponent,
  wrapper: ExampleWrapper,
  code: rawCode,
  themes,
};
