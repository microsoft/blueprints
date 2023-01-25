import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import { Centered } from '../../../.storybook/decorators';
import type { TableListProps } from '../src/index';
import { TableCell, TableList, TableRow } from '../src/index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Lists/TableList',
  component: TableList,
  decorators: [
    (Story) => (
      <Centered>
        <div>
          <Story />
        </div>
      </Centered>
    ),
  ],
} as ComponentMeta<typeof TableList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TableList> = (args) => (
  <TableList {...args}>
    <TableRow>
      <TableCell isHeader>Component</TableCell>
      <TableCell isHeader>Domain</TableCell>
      <TableCell isHeader>Example</TableCell>
      <TableCell isHeader>Notes</TableCell>
    </TableRow>
    <TableRow>
      <TableCell isHeader>Table</TableCell>
      <TableCell>Lists</TableCell>
      <TableCell>
        <code>{`<TableList>{children}</TableList>`}</code>
      </TableCell>
      <TableCell>No additional info.</TableCell>
    </TableRow>
    <TableRow>
      <TableCell isHeader>Button</TableCell>
      <TableCell>Actions</TableCell>
      <TableCell>
        <code>{`<Button onClick={() => {}}>Click me!</Button>`}</code>
      </TableCell>
      <TableCell>No additional info.</TableCell>
    </TableRow>
    <TableRow>
      <TableCell isHeader>Link</TableCell>
      <TableCell>Navigation</TableCell>
      <TableCell>
        <code>{`<Link onClick={() => {}}>Click me!</Link>`}</code>
      </TableCell>
      <TableCell>Deprecated</TableCell>
    </TableRow>
  </TableList>
);

export const Simple = Template.bind({}) as ComponentStory<
  FunctionComponent<TableListProps>
>;
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Simple.args = {
  isAlternating: false,
};
export const Alternating = Template.bind({}) as ComponentStory<
  FunctionComponent<TableListProps>
>;
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Alternating.args = {
  isAlternating: true,
};
