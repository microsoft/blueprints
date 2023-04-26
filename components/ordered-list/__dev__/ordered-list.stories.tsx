import { Text } from '@microsoft/arbutus.text';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import type { OrderedListProps } from '../src/index';
import { OrderedList, OrderedListItem } from '../src/index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Lists/OrderedList',
  component: OrderedList,
} as ComponentMeta<typeof OrderedList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof OrderedList> = (args) => (
  <OrderedList {...args}>
    <OrderedListItem>
      <Text block variant="caption">
        Primary variant
      </Text>
      <Text block variant="description">
        Description item one on the list.
      </Text>
    </OrderedListItem>
    <OrderedListItem variant="secondary">
      <Text block variant="caption">
        Secondary variant
      </Text>
      <Text block variant="description">
        Description item two on the list.
      </Text>
    </OrderedListItem>
    <OrderedListItem variant="accent">
      <Text block variant="caption">
        Accent variant
      </Text>
      <Text block variant="description">
        Description item three on the list.
      </Text>
    </OrderedListItem>
  </OrderedList>
);

export const Simple = Template.bind({}) as ComponentStory<
  FunctionComponent<OrderedListProps>
>;
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Simple.args = {};
