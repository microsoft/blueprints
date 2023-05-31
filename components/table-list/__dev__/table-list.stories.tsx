import { makeStyles } from '@griffel/react';
import { Text } from '@microsoft/arbutus.text';
import type { Meta, StoryFn } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import type { TableListProps } from '../src/index';
import { TableCell, TableList, TableRow } from '../src/index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Lists/TableList',
  component: TableList,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '980px', padding: '24px', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof TableList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof TableList> = (args) => {
  return (
    <TableList {...args}>
      <thead>
        <TableRow>
          <TableCell isHeader scope="col">
            Component
          </TableCell>
          <TableCell isHeader scope="col">
            Domain
          </TableCell>
          <TableCell isHeader scope="col">
            Example
          </TableCell>
          <TableCell isHeader scope="col">
            Notes
          </TableCell>
        </TableRow>
      </thead>
      <tbody>
        <TableRow>
          <TableCell isHeader scope="row">
            Table
          </TableCell>
          <TableCell>Lists</TableCell>
          <TableCell>
            <Text variant="code">{`<TableList>{children}</TableList>`}</Text>
          </TableCell>
          <TableCell>No additional info.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell isHeader scope="row">
            Button
          </TableCell>
          <TableCell>Actions</TableCell>
          <TableCell>
            <Text variant="code">{`<Button onClick={() => {}}>Click me!</Button>`}</Text>
          </TableCell>
          <TableCell>No additional info.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell isHeader scope="row">
            Text
          </TableCell>
          <TableCell>Typography</TableCell>
          <TableCell>
            <Text variant="code">{`<Link href="#">Click me!</Link>`}</Text>
          </TableCell>
          <TableCell>No additional info.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell isHeader scope="row">
            Link
          </TableCell>
          <TableCell>Navigation</TableCell>
          <TableCell>
            <Text variant="code">{`<Link onClick={() => {}}>Click me!</Link>`}</Text>
          </TableCell>
          <TableCell>Deprecated</TableCell>
        </TableRow>
      </tbody>
    </TableList>
  );
};

const HeadlessTemplate: StoryFn<typeof TableList> = (args) => {
  return (
    <TableList {...args}>
      <TableRow>
        <TableCell isHeader>Table</TableCell>
        <TableCell>Lists</TableCell>
        <TableCell>
          <Text variant="code">{`<TableList>{children}</TableList>`}</Text>
        </TableCell>
        <TableCell>No additional info.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell isHeader>Button</TableCell>
        <TableCell>Actions</TableCell>
        <TableCell>
          <Text variant="code">{`<Button onClick={() => {}}>Click me!</Button>`}</Text>
        </TableCell>
        <TableCell>No additional info.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell isHeader>Text</TableCell>
        <TableCell>Typography</TableCell>
        <TableCell>
          <Text variant="code">{`<Link href="#">Click me!</Link>`}</Text>
        </TableCell>
        <TableCell>No additional info.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell isHeader>Link</TableCell>
        <TableCell>Navigation</TableCell>
        <TableCell>
          <Text variant="code">{`<Link onClick={() => {}}>Click me!</Link>`}</Text>
        </TableCell>
        <TableCell>Deprecated</TableCell>
      </TableRow>
    </TableList>
  );
};

export const Simple = Template.bind({}) as StoryFn<FunctionComponent<TableListProps>>;

Simple.args = {
  variant: 'default',
  caption: 'TableList Example',
  description:
    'This is an example of a TableList description. This helps users understand the context of the data.',
};
export const Alternating = Template.bind({}) as StoryFn<
  FunctionComponent<TableListProps>
>;

Alternating.args = {
  variant: 'alternating',
};

export const Borderless = Template.bind({}) as StoryFn<FunctionComponent<TableListProps>>;

Borderless.args = {
  variant: 'borderless',
};

export const ColumnWeights = Template.bind({}) as StoryFn<
  FunctionComponent<TableListProps>
>;

ColumnWeights.args = {
  columnWeights: [1, 1, 2, 1],
};

export const Headless = HeadlessTemplate.bind({}) as StoryFn<
  FunctionComponent<TableListProps>
>;
