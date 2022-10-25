import { tokens } from '@fluentui/react-theme';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { Text } from '@microsoft/arbutus.text';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import type { TileProps } from '../src/index';
import { Tile } from '../src/index';
import { colorMap } from '../src/tile.styles';
// @ts-ignore TS doesn’t recognize the image format.
import background from './background.png';
// @ts-ignore TS doesn’t recognize the image format.
import logo from './logo.svg';

export default {
  title: 'Atoms/Tile',
  component: Tile,
  argTypes: {
    backgroundColor: {
      options: Object.keys(colorMap),
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<typeof Tile>;

const useGridStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: '60rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    columnGap: '1rem',
    minHeight: '5rem',
    '& button': {
      textAlign: 'left',
    },
  },
  single: {
    gridTemplateColumns: '1fr',
    columnGap: '1rem',
  },
  double: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    columnGap: '1rem',
  },
  triple: {
    gridTemplateColumns: 'repeat(3, 1fr)',
    columnGap: '1rem',
    gridTemplateRow: '10rem',
  },
  tile: {
    width: '100%',
  },
  imageContent: {
    display: 'grid',
    height: '100%',
    alignItems: 'center',
    gridTemplateColumns: 'auto min-content',
  },
  imageButton: {
    backgroundColor: tokens.colorNeutralBackground1,
    height: '2rem',
    ...shorthands.borderRadius('2rem'),
    alignItems: 'center',
    gridTemplateColumns: 'repeat(2, 1fr)',
    paddingTop: '0.125rem',
  },
  image: {
    backgroundPositionY: '70%',
  },
});

const Children = () => {
  const space = useSpaceStyles();

  return (
    <div className={space.p6}>
      <Text variant="subtitle" as="h3" className={space.my2}>
        Hello 👋
      </Text>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
        <strong>Laboriosam</strong> deleniti eius quam? Occupy tacos schlitz flexitarian.
        Ennui palo santo fingerstache sriracha, distillery shabby chic bitters craft beer
        kinfolk.
      </p>
      <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </ul>
    </div>
  );
};
const Template = (args) => {
  const classes = useGridStyles();

  return (
    <div className={mergeClasses(classes.root, classes.double)}>
      <Tile {...args}>
        <Children />
      </Tile>
      <Tile {...args}>
        <Children />
      </Tile>
    </div>
  );
};

export const CardVariant = Template.bind({}) as ComponentStory<
  FunctionComponent<TileProps>
>;
CardVariant.args = {
  variant: 'card',
};

const ImageTemplate = (args) => {
  const classes = useGridStyles();
  const space = useSpaceStyles();

  return (
    <div className={mergeClasses(classes.root, classes.single)}>
      <Tile {...args} className={mergeClasses(classes.tile, classes.image)}>
        <div className={mergeClasses(classes.imageContent, space.px6)}>
          <img src={logo as string} alt="Windows 11" />
          <div className={mergeClasses(classes.imageButton, space.px3)}>
            <Text as="span" variant="caption">
              Design&nbsp;overview
            </Text>
          </div>
        </div>
      </Tile>
    </div>
  );
};

export const ImageVariant = ImageTemplate.bind({}) as ComponentStory<
  FunctionComponent<TileProps>
>;
ImageVariant.args = {
  variant: 'image',
  imageSrc: background as string,
};

export const SolidColorVariant = Template.bind({}) as ComponentStory<
  FunctionComponent<TileProps>
>;
SolidColorVariant.args = {
  variant: 'solid-color',
  backgroundColor: 'tile',
  as: 'article',
};

const InteractiveTemplate = () => {
  const classes = useGridStyles();
  const space = useSpaceStyles();
  const onClick = () => console.log('onClick');

  return (
    <div className={mergeClasses(classes.root, classes.triple)}>
      <Tile
        as="button"
        variant="card"
        onClick={onClick}
        className={mergeClasses(classes.tile, space.p6)}
      >
        <Text variant="caption" className={space.mb2}>
          Click Me!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis asperiores,
          repellendus esse labore dolore cupiditate veritatis non qui ut dolores.
        </Text>
      </Tile>
      <Tile
        as="button"
        variant="image"
        imageSrc={background as string}
        onClick={onClick}
        className={mergeClasses(classes.tile, space.p6)}
      >
        <Text variant="jumbo" color="background">
          Click Me!
        </Text>
      </Tile>
      <Tile
        as="button"
        variant="solid-color"
        onClick={onClick}
        className={mergeClasses(classes.tile, space.p6)}
      >
        <Text variant="caption" className={space.mb2}>
          Click Me!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis asperiores,
          repellendus esse labore dolore cupiditate veritatis non qui ut dolores.
        </Text>
      </Tile>
    </div>
  );
};

export const InteractiveVariant = InteractiveTemplate.bind({}) as ComponentStory<
  FunctionComponent<TileProps>
>;
