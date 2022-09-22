import { tokens } from '@fluentui/react-theme';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { Text } from '@microsoft/arbutus.text';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import { colorMap, sizeClasses } from '../src/icon/icon.styles';
import type { IconProps } from '../src/index';
import { Icon, paths } from '../src/index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Icon',
  component: Icon,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: Object.keys(colorMap),
      },
    },
    iconName: {
      control: {
        type: 'select',
        options: Object.keys(paths),
      },
    },
    size: {
      control: {
        type: 'select',
        options: Object.keys(sizeClasses),
      },
    },
  },
} as ComponentMeta<typeof Icon>;

const useGridStyles = makeStyles({
  root: {
    backgroundColor: tokens.colorNeutralBackground6,
    maxWidth: '48rem',
    display: 'grid',
    gridTemplateColumns: '1fr',
    columnGap: '0.5rem',
    rowGap: '0.5rem',
    gridAutoRows: '1.5rem',
    ...shorthands.borderRadius('var(--arbutus--shape-border-radius)'),
  },
  tile: {
    display: 'grid',
    gridTemplateColumns: '1.5rem auto',
    columnGap: '0.5rem',
  },
  swatch: {
    display: 'grid',
    height: '100%',
    alignItems: 'center',
    justifyItems: 'center',
    backgroundColor: tokens.colorNeutralBackground1,
    ...shorthands.borderRadius('0.25rem'),
  },
  label: {
    alignSelf: 'center',
  },
});

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Icon> = (args) => {
  const classes = useGridStyles();
  const space = useSpaceStyles();

  return (
    <div className={mergeClasses(classes.root, space.p4)}>
      {Object.keys(paths).map((iconName, i) => (
        <div className={classes.tile} key={`${iconName}-${i}`}>
          <div className={classes.swatch}>
            {/* @ts-ignore TS is not recognizing iconName being keyof typeof paths*/}
            <Icon {...args} iconName={iconName} />
          </div>
          <Text className={classes.label} as="span">
            {iconName}
          </Text>
        </div>
      ))}
    </div>
  );
};

export const Simple = Template.bind({}) as ComponentStory<FunctionComponent<IconProps>>;
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Simple.args = {
  iconName: 'exclamation',
  size: 'medium',
  color: 'primary',
};
