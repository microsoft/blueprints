import { makeStyles } from '@griffel/react';
import { Tile } from '@microsoft/arbutus.tile';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { FunctionComponent, ReactNode } from 'react';
import React from 'react';

import { Centered } from '../../../.storybook/decorators';
import type { RecommendationTileProps } from '../src/index';
import { RecommendationTile } from '../src/index';

const DemoImage: FunctionComponent<{ alt: string; src: string; className: string }> = ({
  className,
  alt,
  src,
}) => <img className={className} alt={alt} src={src} />;

const DemoLink: FunctionComponent<{
  href: string;
  className: string;
  children?: ReactNode | undefined;
}> = ({ className, href, children }) => (
  <a className={className} href={href} target="__blank">
    {children}
  </a>
);

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Tiles/RecommendationTile',
  component: RecommendationTile,
  argTypes: {
    onClick: { action: 'clicked' },
    recommendation: {
      options: ['positive', 'negative'],
      control: {
        type: 'select',
      },
    },
  },
  decorators: [
    (Story) => (
      <Centered>
        <div style={{ maxWidth: '980px' }}>
          <Story />
        </div>
      </Centered>
    ),
  ],
} as ComponentMeta<typeof RecommendationTile>;

const useTileGridStyles = makeStyles({
  root: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    columnGap: '2.5rem',
    rowGap: '2.5rem',

    '@media screen and (max-width: var(--arbutus--breakpoint-xxs))': {
      gridTemplateColumns: '100%',
    },
  },
});

const Template: ComponentStory<typeof RecommendationTile> = (args) => {
  const classes = useTileGridStyles();

  return (
    <div className={classes.root}>
      <RecommendationTile {...args} />
      <Tile variant="solid-color">&nbsp;</Tile>
    </div>
  );
};

export const WithImageAndWithLink = Template.bind({}) as ComponentStory<
  FunctionComponent<RecommendationTileProps>
>;

WithImageAndWithLink.args = {
  title: 'Give primary buttons prominence',
  description:
    'Primary buttons have to draw users’s attention right away. Make sure there is only one primary button in the view.',
  recommendation: 'positive',
  imageAs: DemoImage,
  imageProps: {
    src: 'https://via.placeholder.com/300x200.png/FAF9F8',
    alt: 'Image placeholder',
  },
  linkAs: DemoLink,
  linkText: 'Learn more',
  linkWithIcon: true,
  linkProps: {
    href: 'https://www.microsoft.com',
  },
};

export const WithImage = Template.bind({}) as ComponentStory<
  FunctionComponent<RecommendationTileProps>
>;

WithImage.args = {
  title: 'Give primary buttons prominence',
  description:
    'Primary buttons have to draw users’s attention right away. Make sure there is only one primary button in the view.',
  recommendation: 'positive',
  imageAs: DemoImage,
  imageProps: {
    src: 'https://via.placeholder.com/300x200.png/FAF9F8',
    alt: 'Image placeholder',
  },
};

export const WithoutImage = Template.bind({}) as ComponentStory<
  FunctionComponent<RecommendationTileProps>
>;

WithoutImage.args = {
  title: 'Give primary buttons prominence',
  description:
    'Primary buttons have to draw users’s attention right away. Make sure there is only one primary button in the view.',
  recommendation: 'positive',
  imageAs: undefined,
  imageProps: undefined,
};

export const WithLink = Template.bind({}) as ComponentStory<
  FunctionComponent<RecommendationTileProps>
>;

WithLink.args = {
  title: 'Give primary buttons prominence',
  description:
    'Primary buttons have to draw users’s attention right away. Make sure there is only one primary button in the view.',
  recommendation: 'positive',
  imageAs: undefined,
  imageProps: undefined,
  linkAs: DemoLink,
  linkText: 'Learn more',
  linkWithIcon: true,
  linkProps: {
    href: 'https://www.microsoft.com',
  },
};

export const WithRecommendationList = Template.bind({}) as ComponentStory<
  FunctionComponent<RecommendationTileProps>
>;
WithRecommendationList.args = {
  title: 'Give primary buttons prominence',
  recommendationsList: [
    'Primary buttons have to draw users’s attention right away. Make sure there is only one primary button in the view.',
    'Eu zril ignota quaestio nec, no agam meliore sit, duo posse utinam deleniti id. Ut his veniam verear, ei sea mazim mentitum probatus.',
    'Ut sit alienum molestie referrentur, ius tollit definitiones ad, audiam vidisse gubergren id mea.',
    'Elit veniam ocurreret et ius, menandri atomorum voluptaria eum ad. Ius ex dolor utamur partiendo.',
  ],
  recommendation: 'positive',
};
