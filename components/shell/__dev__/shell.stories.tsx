import { Text } from '@arbutus/component.text';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import type { ShellProps } from '../src/index';
import { Shell } from '../src/index';
// @ts-ignore TS doesn’t recognize the image format.
import logo from './fluentui-logo.svg';
import { FooterSample } from './footer-sample';
import { HeaderSample } from './header-sample';
import { NavigationSample } from './navigation-sample';
import { PageSample } from './page-sample';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Layout/Shell',
  component: Shell,
} as ComponentMeta<typeof Shell>;

const Template: ComponentStory<typeof Shell> = (args) => (
  <Shell {...args}>
    <Text>Main Area</Text>
  </Shell>
);

export const Simple = Template.bind({}) as ComponentStory<FunctionComponent<ShellProps>>;

Simple.args = {
  headerArea: <Text>Header Area</Text>,
  navigationArea: <Text>Navigation Area</Text>,
  footerArea: <Text>Footer Area</Text>,
  logoText: 'Project Name',
  closeTrayLabel: 'Close navigation.',
  openTrayLabel: 'Open navigation.',
};

const FullExampleTemplate: ComponentStory<typeof Shell> = (args) => (
  <Shell {...args}>
    <PageSample />
  </Shell>
);

export const FullExample = FullExampleTemplate.bind({}) as ComponentStory<
  FunctionComponent<ShellProps>
>;
FullExample.args = {
  headerArea: <HeaderSample />,
  navigationArea: <NavigationSample />,
  footerArea: <FooterSample />,
  logoMarkSrc: logo as string,
  logoMarkAlt: 'Fluent logo',
  closeTrayLabel: 'Close navigation.',
  openTrayLabel: 'Open navigation.',
};
