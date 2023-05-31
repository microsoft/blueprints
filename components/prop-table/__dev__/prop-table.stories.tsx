import type { Meta, StoryFn } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import demoComponentPropDoc from '../__prop-docs__/demo-component.props';
import type { PropTableProps } from '../src/index';
import { PropTable } from '../src/index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Blocks/PropTable',
  component: PropTable,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '980px', padding: '24px', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof PropTable>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof PropTable> = (args) => <PropTable {...args} />;

export const Simple = Template.bind({}) as StoryFn<FunctionComponent<PropTableProps>>;
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Simple.args = {
  propsDoc: demoComponentPropDoc,
  caption: 'DemoComponent',
};
