import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { Divider } from '@microsoft/arbutus.divider';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import { Centered } from '../../../.storybook/decorators';
import type { TextProps } from '../src/index';
import { Text } from '../src/index';
import { colorClasses, variantClasses } from '../src/text/text.styles';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Text',
  component: Text,
  argTypes: {
    variant: {
      options: [...Object.keys(variantClasses), 'code'],
      control: {
        type: 'select',
      },
    },
    color: {
      options: Object.keys(colorClasses),
      control: {
        type: 'select',
      },
    },
  },
  decorators: [
    (Story) => (
      <Centered>
        <div>
          <Story />
        </div>
      </Centered>
    ),
  ],
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
  <Text block {...args}>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate modi eveniet
    dolorum officiis assumenda similique a voluptas voluptatum ducimus temporibus. Culpa
    animi labore molestiae nesciunt suscipit, architecto optio sit iusto.
  </Text>
);

const CodeTemplate: ComponentStory<typeof Text> = (args) => (
  <Text block {...args}>
    {`<Text variant="code">Hello!</Text>`}
  </Text>
);

export const Simple = Template.bind({}) as ComponentStory<FunctionComponent<TextProps>>;
Simple.args = {
  color: 'primary',
  variant: 'paragraph',
};

export const Code = CodeTemplate.bind({}) as ComponentStory<FunctionComponent<TextProps>>;
Code.args = {
  variant: 'code',
};

const useGridStyles = makeStyles({
  root: {
    maxWidth: '60rem',
  },
  article: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    columnGap: '1rem',
  },
  image: {
    ...shorthands.borderRadius('var(--arbutus--shape-border-radius)'),
    width: '100%',
  },
});

const TemplateDemo: ComponentStory<typeof Text> = () => {
  const space = useSpaceStyles();
  const grid = useGridStyles();
  const imageClasses = mergeClasses(grid.image, space.mb4);

  return (
    <main className={mergeClasses(space.pb12, grid.root)}>
      <Text block as="h1" variant="title" className={space.my4}>
        Title
      </Text>
      <Text block variant="leading">
        Leading Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate modi
        eveniet dolorum officiis assumenda similique a voluptas voluptatum ducimus
        temporibus. Culpa animi labore molestiae nesciunt suscipit, architecto optio sit
        iusto.
      </Text>

      <Divider className={space.my8} />

      <Text block as="h2" variant="subtitle" className={space.mb2}>
        Subheading
      </Text>
      <Text block variant="leading">
        Leading Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate modi
        eveniet dolorum officiis assumenda similique a voluptas voluptatum ducimus
        temporibus. Culpa animi labore molestiae nesciunt suscipit, architecto optio sit
        iusto.
      </Text>

      <Divider className={space.my8} />

      <Text block as="h1" variant="headline" className={space.my4}>
        Headline
      </Text>
      <Text block variant="paragraph" className={space.mb8}>
        Paragraph Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
        modi eveniet dolorum officiis assumenda similique a voluptas voluptatum ducimus
        temporibus. Culpa animi labore molestiae nesciunt suscipit, architecto optio sit
        iusto.
      </Text>

      <div className={grid.article}>
        <section>
          <img
            src="https://via.placeholder.com/300x100.png/f0f0f0"
            alt="Text demo 1"
            className={imageClasses}
          />
          <Text block as="h2" variant="caption" className={space.mb1} color="positive">
            Caption: What do you see?
          </Text>
          <Text block variant="description" color="tertiary">
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
          <Text block as="h2" variant="caption" className={space.mb1} color="negative">
            Caption: What do you see?
          </Text>
          <Text block variant="description" color="tertiary">
            Description: Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Cupiditate modi eveniet dolorum officiis assumenda similique a voluptas
            voluptatum ducimus temporibus. Culpa animi labore molestiae nesciunt suscipit,
            architecto optio sit iusto.
          </Text>
        </section>
      </div>

      <Divider className={space.my12} />

      <div className={grid.article}>
        <section>
          <Text block as="h4" variant="jumbo" color="quaternary" className={space.my6}>
            Jumbo Text
          </Text>
          <Text block variant="description" color="secondary">
            Description: Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Cupiditate modi eveniet dolorum officiis assumenda similique a voluptas
            voluptatum ducimus temporibus. Culpa animi labore molestiae nesciunt suscipit,
            architecto optio sit iusto.
          </Text>
        </section>
        <img
          src="https://via.placeholder.com/300x200.png/f0f0f0"
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
