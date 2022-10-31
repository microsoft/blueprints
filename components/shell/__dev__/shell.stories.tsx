import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import type { ShellProps } from '../src/index';
import { Shell } from '../src/index';
import { Area } from './area';
// @ts-ignore TS doesn’t recognize the image format.
import logo from './fluentui-logo.svg';
import { FooterSample } from './footer-sample';
import { HeaderSample } from './header-sample';
import { HeroSample } from './hero-sample';
import { NavigationSample } from './navigation-sample';
import { PageSample } from './page-sample';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Layout/Shell',
  component: Shell,
} as ComponentMeta<typeof Shell>;

const Template: ComponentStory<typeof Shell> = (args) => (
  <Shell {...args}>
    <Area>Main Area</Area>
  </Shell>
);

export const Simple = Template.bind({}) as ComponentStory<FunctionComponent<ShellProps>>;

Simple.args = {
  headerArea: <Area>Header Area</Area>,
  navigationArea: <Area>Navigation Area</Area>,
  footerArea: <Area>Footer Area</Area>,
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

const HeroExampleTemplate: ComponentStory<typeof Shell> = (args) => (
  <Shell {...args}>
    <HeroSample />
  </Shell>
);

export const HeroExample = HeroExampleTemplate.bind({}) as ComponentStory<
  FunctionComponent<ShellProps>
>;
HeroExample.args = {
  headerArea: <HeaderSample isHeroMode />,
  navigationArea: <NavigationSample />,
  footerArea: <FooterSample />,
  logoMarkSrc: logo as string,
  logoMarkAlt: 'Fluent logo',
  closeTrayLabel: 'Close navigation.',
  openTrayLabel: 'Open navigation.',
  isHeroMode: true,
};
