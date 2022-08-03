---
to: hooks/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>/__dev__/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>.stories.tsx
---
import type { Meta, Story } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import { <%= h.changeCase.pascalCase(name) %> } from '../src/index';

const DemoComponent = () => {

  // const {} = <%= h.changeCase.pascalCase(name) %>();

  return (
    <div>
      <h1><code><%= h.changeCase.pascalCase(name) %></code> Demo</h1>
    </div>
  );
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/<%= h.changeCase.pascalCase(name) %>',
  component: <%= h.changeCase.pascalCase(name) %>,
} as Meta<typeof <%= h.changeCase.pascalCase(name) %>>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<typeof <%= h.changeCase.pascalCase(name) %>> = () => (
  <DemoComponent/>
);

export const Demo = Template.bind({}) as Story<
  FunctionComponent<<%= h.changeCase.pascalCase(name) %>Props>
>;