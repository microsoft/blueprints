import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import { statusMap } from '../src/callout/callout.styles';
import type { CalloutProps } from '../src/index';
import { Callout } from '../src/index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Content/Callout',
  component: Callout,
  argTypes: {
    status: {
      options: Object.keys(statusMap),
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Callout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Callout> = (args) => (
  <Callout {...args}>
    <p>
      Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum
      soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
      placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
      Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
      eveniet ut et voluptates.
    </p>
  </Callout>
);

export const Simple = Template.bind({}) as ComponentStory<
  FunctionComponent<CalloutProps>
>;
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Simple.args = {
  title: 'Simple Callout Example',
  status: 'success',
};
