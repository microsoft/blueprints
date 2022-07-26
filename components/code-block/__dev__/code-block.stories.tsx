import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import type { CodeBlockProps } from '../src/index';
import { CodeBlock } from '../src/index';

const code = `export const CodeBlock: FC<CodeBlockProps> = ({ language, code, isCopyable }) => {
  // Styles
  const classes = useCodeBlockStyles();

  return (
    <div className={classes.root}>
      <div className={classes.overflow} tabIndex={0}>
        <SyntaxHighlighter language={language} showLineNumbers={true} style={BlockStyles}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
`;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Content/CodeBlock',
  component: CodeBlock,
} as ComponentMeta<typeof CodeBlock>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CodeBlock> = (args) => <CodeBlock {...args} />;

export const Simple = Template.bind({}) as ComponentStory<
  FunctionComponent<CodeBlockProps>
>;
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Simple.args = {
  code,
  language: 'typescript',
};
