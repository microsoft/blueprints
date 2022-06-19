---
to: components/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>/__dev__/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>.stories.tsx
---
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import type { <%= h.changeCase.pascalCase(name) %>Props } from '../src/index';
import { <%= h.changeCase.pascalCase(name) %> } from '../src/index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/<%= h.changeCase.pascalCase(name) %>',
  component: <%= h.changeCase.pascalCase(name) %>,
} as ComponentMeta<typeof <%= h.changeCase.pascalCase(name) %>>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof <%= h.changeCase.pascalCase(name) %>> = (args) => (
  <<%= h.changeCase.pascalCase(name) %> {...args} />
);

export const Simple = Template.bind({}) as ComponentStory<
  FunctionComponent<<%= h.changeCase.pascalCase(name) %>Props>
>;
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Simple.args = {
  text: 'Simple <%= h.changeCase.pascalCase(name) %> Example',
};
