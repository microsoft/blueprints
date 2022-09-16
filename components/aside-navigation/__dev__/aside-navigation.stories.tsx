import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';
import { Tile } from '@microsoft/arbutus.tile';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React, { useEffect, useState } from 'react';

import type { AsideNavigationProps } from '../src/index';
import { AsideNavigation, AsideNavigationLink } from '../src/index';

export default {
  title: 'Layout/AsideNavigation',
  component: AsideNavigation,
} as ComponentMeta<typeof AsideNavigation>;

const items = ['Overview', 'Variants', 'Layout', 'Accessibility', 'Content'];

const useNavigationStyles = makeStyles({
  root: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'auto 15rem',
    minHeight: '40rem',
    columnGap: tokens.spacingHorizontalXXXL,
  },
});

const Template: ComponentStory<typeof AsideNavigation> = ({
  title,
  currentIndex: _i,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(_i ?? 0);

  useEffect(() => setCurrentIndex(_i ?? 0), [_i]);

  const makeOnClick = (i: number) => () => setCurrentIndex(i);

  // Styles
  const classes = useNavigationStyles();

  return (
    <div className={classes.root}>
      <Tile as="main" variant="solid-color">
        &nbsp;
      </Tile>
      <AsideNavigation currentIndex={currentIndex} title={title}>
        {items.map((item, i) => (
          <AsideNavigationLink index={i} key={`${i}--${item}`} onClick={makeOnClick(i)}>
            {item}
          </AsideNavigationLink>
        ))}
      </AsideNavigation>
    </div>
  );
};

export const Simple = Template.bind({}) as ComponentStory<
  FunctionComponent<AsideNavigationProps>
>;

Simple.args = {
  currentIndex: 0,
  title: 'On this page',
};
