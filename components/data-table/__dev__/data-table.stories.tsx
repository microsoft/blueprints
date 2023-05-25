import type { Meta, StoryFn } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import type { DataTableProps } from '../src/index';
import { DataTable } from '../src/index';

const image = ({ text }: { text: string }) => ({
  imageSrc: 'https://via.placeholder.com/200x150.png/f0f0f0',
  imageAlt: `Placeholder ${text}`,
});

const Content: React.FC<{ text: string }> = ({ text }) => (
  <section>
    <p>Content {text}.</p>
    <ul>
      <li>Item One</li>
      <li>Item Two</li>
      <li>Item Three</li>
    </ul>
    <code>npm i black-hole</code>
  </section>
);

const items = ['One', 'Two', 'Three'];

const data = items.map((text) => [{ content: <Content text={text} /> }, image({ text })]);

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Blocks/DataTable',
  component: DataTable,
} as Meta<typeof DataTable>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof DataTable> = (args) => <DataTable {...args} />;

export const Simple = Template.bind({}) as StoryFn<FunctionComponent<DataTableProps>>;
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Simple.args = {
  rows: data,
};
