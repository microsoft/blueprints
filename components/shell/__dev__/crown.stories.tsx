import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import { Centered } from '../../../.storybook/decorators';
import type { CrownProps } from '../src/index';
import { Crown } from '../src/index';
// @ts-ignore TS doesn’t recognize the image format.
import logo from './fluentui-logo.svg';
// @ts-ignore TS doesn’t recognize the image format.
import logoMark from './logo.svg';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Layout/Crown',
  component: Crown,
  argTypes: {
    onClick: { action: 'clicked' },
    onLogoClick: { action: 'clicked' },
  },
  decorators: [
    (Story) => (
      <Centered>
        <div style={{ maxWidth: '360px' }}>
          <Story />
        </div>
      </Centered>
    ),
  ],
} as ComponentMeta<typeof Crown>;

const Template: ComponentStory<typeof Crown> = (args) => <Crown {...args} />;

export const Simple = Template.bind({}) as ComponentStory<FunctionComponent<CrownProps>>;

Simple.args = {
  logoMarkAlt: 'Arbutus logo',
  logoMarkSrc: logo as string,
  logoText: 'Arbutus',
  isTabletLayout: false,
};

export const TabletLayout = Template.bind({}) as ComponentStory<
  FunctionComponent<CrownProps>
>;

TabletLayout.args = {
  logoMarkAlt: 'Arbutus logo',
  logoMarkSrc: logoMark as string,
  logoText: 'Arbutus',
  isTabletLayout: true,
};

export const ImageOnly = Template.bind({}) as ComponentStory<
  FunctionComponent<CrownProps>
>;

ImageOnly.args = {
  logoMarkAlt: 'Fluent logo',
  logoMarkSrc: logo as string,
  isTabletLayout: true,
};
