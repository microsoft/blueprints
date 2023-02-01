import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { useCopyToClipboard } from '../src/index';

const DemoComponent = () => {
  const { copy, error, isCopied, status } = useCopyToClipboard({});
  const text = 'UseCopyToClipboard test';

  return (
    <div>
      <h1>
        <code>UseCopyToClipboard</code> Demo
      </h1>
      <p>
        Status: {isCopied && '✅'}
        {!!error && '❌'}
        {status}
      </p>

      <button onClick={() => copy(text)} disabled={isCopied || !!error}>
        Copy text: “{text}”
      </button>
    </div>
  );
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Hooks/UseCopyToClipboard',
} as Meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story = () => <DemoComponent />;

export const Demo = Template.bind({}) as Story;
