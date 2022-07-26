import { Text } from '@arbutus/component.text';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import type { ShellProps } from '../src/index';
import { Shell } from '../src/index';
import { FooterSample } from './footer-sample';
import { HeaderSample } from './header-sample';
import { NavigationSample } from './navigation-sample';
import { PageSample } from './page-sample';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Shell',
  component: Shell,
} as ComponentMeta<typeof Shell>;

const Template: ComponentStory<typeof Shell> = () => (
  <Shell
    headerArea={<Text>Header Area</Text>}
    navigationArea={<Text>Navigation Area</Text>}
    footerArea={<Text>Footer Area</Text>}
  >
    <Text>Main Area</Text>
  </Shell>
);

export const Simple = Template.bind({}) as ComponentStory<FunctionComponent<ShellProps>>;

const FullExampleTemplate: ComponentStory<typeof Shell> = () => (
  <Shell
    headerArea={<HeaderSample />}
    navigationArea={<NavigationSample />}
    footerArea={<FooterSample />}
  >
    <Text>
      <PageSample />
    </Text>
  </Shell>
);

export const FullExample = FullExampleTemplate.bind({}) as ComponentStory<
  FunctionComponent<ShellProps>
>;
