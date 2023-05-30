import { makeStyles } from '@griffel/react';
import { Text } from '@microsoft/arbutus.text';
import type { Meta, StoryFn } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import { Centered } from '../../../.storybook/decorators';
import type { TableListProps } from '../src/index';
import { TableCell, TableList, TableRow } from '../src/index';

const useTemplateStyles = makeStyles({
  header: {
    width: '120px',
  },
  domain: {
    width: '120px',
  },
});

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
  const classes = useTemplateStyles();

  return (
    <TableList {...args}>
      <thead>
        <TableRow>
          <TableCell isHeader className={classes.header}>
            Component
          </TableCell>
          <TableCell isHeader className={classes.domain}>
            Domain
          </TableCell>
          <TableCell isHeader>Example</TableCell>
          <TableCell isHeader>Notes</TableCell>
        </TableRow>
      </thead>
      <tbody>
        <TableRow>
          <TableCell isHeader className={classes.header}>
            Table
          </TableCell>
          <TableCell className={classes.domain}>Lists</TableCell>
          <TableCell>
            <Text variant="code">{`<TableList>{children}</TableList>`}</Text>
          </TableCell>
          <TableCell>No additional info.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell isHeader className={classes.header}>
            Button
          </TableCell>
          <TableCell className={classes.domain}>Actions</TableCell>
          <TableCell>
            <Text variant="code">{`<Button onClick={() => {}}>Click me!</Button>`}</Text>
          </TableCell>
          <TableCell>No additional info.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell isHeader className={classes.header}>
            Text
          </TableCell>
          <TableCell className={classes.domain}>Typography</TableCell>
          <TableCell>
            <Text variant="code">{`<Link href="#">Click me!</Link>`}</Text>
          </TableCell>
          <TableCell>No additional info.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell isHeader className={classes.header}>
            Link
          </TableCell>
          <TableCell className={classes.domain}>Navigation</TableCell>
          <TableCell>
            <Text variant="code">{`<Link onClick={() => {}}>Click me!</Link>`}</Text>
          </TableCell>
          <TableCell>Deprecated</TableCell>
        </TableRow>
      </tbody>
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
