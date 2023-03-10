import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import { Centered } from '../../../.storybook/decorators';
import type { CodeSnippetProps } from '../src/index';
import { CodeSnippet } from '../src/index';

const code = `import type { FC } from 'react';
import * as React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { useCodeSnippetStyles } from './code-snippet.styles';
import type { CodeSnippetProps } from './code-snippet.types';

export const CodeSnippet: FC<CodeSnippetProps> = ({ language, code }) => {
  // Styles
  const classes = useCodeSnippetStyles();

  return (
    <div className={classes.root}>
      <SyntaxHighlighter language={language} showLineNumbers={true}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
`;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Blocks/CodeSnippet',
  component: CodeSnippet,
  decorators: [
    (Story) => (
      <Centered>
        <div style={{ minWidth: '860px' }}>
          <Story />
        </div>
      </Centered>
    ),
  ],
} as ComponentMeta<typeof CodeSnippet>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CodeSnippet> = (args) => <CodeSnippet {...args} />;

export const Simple = Template.bind({}) as ComponentStory<
  FunctionComponent<CodeSnippetProps>
>;
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Simple.args = {
  code,
  language: 'tsx',
};
