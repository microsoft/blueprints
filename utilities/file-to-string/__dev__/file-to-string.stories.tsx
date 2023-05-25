import { makeStyles } from '@griffel/react';
import { CodeSnippet } from '@microsoft/arbutus.code-snippet';
import { Command } from '@microsoft/arbutus.command';
import { Text } from '@microsoft/arbutus.text';
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { Centered } from '../../../.storybook/decorators';
import codeString from './__raw__/example.raw';

const useStyles = makeStyles({
  root: {
    maxWidth: '860px',
    display: 'grid',
    gridGap: '16px',
  },
});

const DemoComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Text as="h1" block variant="title">
        File To String
      </Text>
      <Text as="p" block variant="leading">
        File to string takes a path to a file and generates a new file that exports it as
        a string this utility is useful for documenting code examples that you might want
        to show the source code for there are options for output in java script and type
        script.
      </Text>
      <Text as="h2" block variant="caption">
        1. Create a script file, for example:&emsp;
        <Text variant="code">scripts/examples-to-string.mjs</Text>
      </Text>

      <CodeSnippet language="javascript" code={codeString} />
      <Text as="h2" block variant="caption">
        2. Add the script to your package.json.
      </Text>
      <Command
        isCopyable
        command={`"generate-example-files": "node scripts/examples-to-string.mjs"`}
      />
    </div>
  );
};

export default {
  title: 'Utilities/File To String',
  decorators: [
    (StoryFn) => (
      <Centered>
        <StoryFn />
      </Centered>
    ),
  ],
} as Meta;

const Template: StoryFn = () => <DemoComponent />;

export const Demo = Template.bind({}) as StoryFn;
