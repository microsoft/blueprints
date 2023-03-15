import { makeStyles } from '@griffel/react';
import { CodeSnippet } from '@microsoft/arbutus.code-snippet';
import { Command } from '@microsoft/arbutus.command';
import { TableCell, TableList, TableRow } from '@microsoft/arbutus.table-list';
import { Text } from '@microsoft/arbutus.text';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { Centered } from '../../../.storybook/decorators';
import { getDefaultExportName, getDependencies } from '../src/index';
import codeStr from './example-component.raw';

const useStyles = makeStyles({
  root: {
    maxWidth: '860px',
    display: 'grid',
    gridGap: '16px',
  },
  code: {
    wordWrap: 'break-word',
    maxWidth: '100%',
  },
});

const codeExample = `import { getDefaultExportName, getDependencies } from '@microsoft/arbutus.parse-code-string';
import codeStr from './example-component.raw';

const dependencies = getDependencies(codeStr);
const defaultExportName = getDefaultExportName(codeStr);
`;

const DemoComponent = () => {
  const classes = useStyles();
  const space = useSpaceStyles();

  const dependencies = getDependencies(codeStr);
  const defaultExportName = getDefaultExportName(codeStr);

  return (
    <div className={classes.root}>
      <Text as="h1" block variant="title">
        Parse Code String utilities
      </Text>
      <Text as="h2" block variant="headline">
        Usage
      </Text>
      <Command isCopyable command="npm i @microsoft/arbutus.parse-code-string" />
      <CodeSnippet language="typescript" code={codeExample} />
      <Text as="h2" block variant="headline">
        Example file
      </Text>
      <CodeSnippet language="javascript" code={codeStr} />

      <Text variant="description" block>
        If you need to generate a string from a file, you can use the{' '}
        <Text variant="code">fileToString()</Text> utility from the{' '}
        <Text variant="code">@microsoft/arbutus.file-to-string</Text>
        package.
      </Text>
      <Text as="h2" block variant="headline">
        Result
      </Text>
      <TableList className={space.mb6}>
        <TableRow>
          <TableCell isHeader>Function</TableCell>
          <TableCell isHeader>Output</TableCell>
        </TableRow>
        <TableRow>
          <TableCell isHeader>
            <Text
              variant="code"
              className={classes.code}
            >{`getDependencies(codeStr: string)`}</Text>
          </TableCell>
          <TableCell>
            <Text variant="code" className={classes.code}>
              {JSON.stringify(dependencies)}
            </Text>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell isHeader>
            <Text
              variant="code"
              className={classes.code}
            >{`getDefaultExportName(codeStr: string)`}</Text>
          </TableCell>
          <TableCell>
            <Text variant="code" className={classes.code}>
              {JSON.stringify(defaultExportName, null, 2)}
            </Text>
          </TableCell>
        </TableRow>
      </TableList>
    </div>
  );
};

export default {
  title: 'Utilities/ParseCodeString',
  decorators: [
    (Story) => (
      <Centered>
        <Story />
      </Centered>
    ),
  ],
} as Meta;

const Template: Story = () => <DemoComponent />;

export const Demo = Template.bind({}) as Story;
