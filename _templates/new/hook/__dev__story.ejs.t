---
to: hooks/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>/__dev__/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>.stories.tsx
---
import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { <%= h.changeCase.camel(name) %> } from '../src/index';

const DemoComponent = () => {

  // const {} = <%= h.changeCase.camel(name) %>();

  return (
    <div>
      <h1><code><%= h.changeCase.camel(name) %></code> Demo</h1>
    </div>
  );
}

export default {
  title: 'Utilities/<%= h.changeCase.pascalCase(name) %>',
} as Meta;

const Template: Story = () => (
  <DemoComponent />
);

export const Demo = Template.bind({}) as Story;