import { Divider } from '@arbutus/component.divider';
import { useSpaceStyles } from '@arbutus/style.use-space-styles';
import { mergeStyles } from '@fluentui/react';
import { makeStyles, shorthands } from '@griffel/react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import type { TextProps } from '../src/index';
import { Text } from '../src/index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = (args) => (
  <Text {...args}>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate modi eveniet
    dolorum officiis assumenda similique a voluptas voluptatum ducimus temporibus. Culpa
    animi labore molestiae nesciunt suscipit, architecto optio sit iusto.
  </Text>
);

export const Simple = Template.bind({}) as ComponentStory<FunctionComponent<TextProps>>;
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Simple.args = {
  color: 'text',
  variant: 'paragraph',
};

const useGridStyles = makeStyles({
  root: {
    maxWidth: '60rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    columnGap: '1rem',
  },
  image: {
    ...shorthands.borderRadius('var(--arbutus-shape-border-radius)'),
    width: '100%',
  },
});

const TemplateDemo: ComponentStory<typeof Text> = () => {
  const space = useSpaceStyles();
  const grid = useGridStyles();
  const imageClasses = mergeStyles(grid.image, space.mb4);

  return (
    <main className={space.pb12}>
      <Text as="h1" variant="headline">
        Headline
      </Text>
      <Text variant="leading">
        Leading Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate modi
        eveniet dolorum officiis assumenda similique a voluptas voluptatum ducimus
        temporibus. Culpa animi labore molestiae nesciunt suscipit, architecto optio sit
        iusto.
      </Text>

      <Divider className={space.my8} />

      <Text as="h2" variant="subheading">
        Subheading
      </Text>
      <Text variant="paragraph" className={space.mb8}>
        Paragraph Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
        modi eveniet dolorum officiis assumenda similique a voluptas voluptatum ducimus
        temporibus. Culpa animi labore molestiae nesciunt suscipit, architecto optio sit
        iusto.
      </Text>

      <div className={grid.root}>
        <section>
          <img
            src="https://via.placeholder.com/300x100.png/f0f0f0"
            alt="Text demo 1"
            className={imageClasses}
          />
          <Text as="h2" variant="caption" className={space.mb1}>
            Caption: What do you see?
          </Text>
          <Text variant="description" color="tertiary">
            Description: Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Cupiditate modi eveniet dolorum officiis assumenda similique a voluptas
            voluptatum ducimus temporibus. Culpa animi labore molestiae nesciunt suscipit,
            architecto optio sit iusto.
          </Text>
        </section>
        <section>
          <img
            src="https://via.placeholder.com/300x100.png/f0f0f0"
            alt="Text demo 1"
            className={imageClasses}
          />
          <Text as="h2" variant="caption" className={space.mb1}>
            Caption: What do you see?
          </Text>
          <Text variant="description" color="tertiary">
            Description: Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Cupiditate modi eveniet dolorum officiis assumenda similique a voluptas
            voluptatum ducimus temporibus. Culpa animi labore molestiae nesciunt suscipit,
            architecto optio sit iusto.
          </Text>
        </section>
      </div>

      <Divider className={space.my12} />

      <div className={grid.root}>
        <section>
          <Text as="h4" variant="jumbo" color="quaternary" className={space.mt4}>
            Jumbo Text
          </Text>
          <Text variant="description" color="secondary">
            Description: Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Cupiditate modi eveniet dolorum officiis assumenda similique a voluptas
            voluptatum ducimus temporibus. Culpa animi labore molestiae nesciunt suscipit,
            architecto optio sit iusto.
          </Text>
        </section>
        <img
          src="https://via.placeholder.com/300x100.png/f0f0f0"
          alt="Text demo 2"
          className={grid.image}
        />
      </div>
    </main>
  );
};

export const StylesDemo = TemplateDemo.bind({}) as ComponentStory<
  FunctionComponent<TextProps>
>;
