import { IconButton } from '@arbutus/component.icon-button';
import { Link } from '@arbutus/component.link';
import { Text } from '@arbutus/component.text';
import { useTrayContext } from '@arbutus/component.tray';
import { layout, spaceScale } from '@arbutus/style.theming';
import { useSpaceStyles } from '@arbutus/style.use-space-styles';
import { tokens } from '@fluentui/react-theme';
import { makeStyles, shorthands } from '@griffel/react';
import type { FC, SyntheticEvent } from 'react';
import * as React from 'react';
import useBreakpoint from 'use-breakpoint';

const LinkSample = ({ children }) => {
  const onClick = (e: SyntheticEvent) => {
    e.preventDefault();
    alert('Clicked!');
  };

  return (
    <button
      style={{
        backgroundColor: 'transparent',
        border: 'none',
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const useHeaderSampleStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
    columnGap: tokens.spacingHorizontalM,
  },
  title: {
    display: 'inline-block',
  },
  links: {
    display: 'flex',
    justifyContent: 'flex-end',
    columnGap: '0.5rem',
  },
  button: {
    ...shorthands.border('1px', 'solid', tokens.colorBrandForeground2),
    ...shorthands.borderRadius(tokens.spacingHorizontalXXL),
    height: '48px',
    color: tokens.colorBrandForeground2,
    display: 'inline-grid',
    alignItems: 'center',
    justifyItems: 'center',
    paddingTop: '0px',
    paddingRight: '1rem',
    paddingBottom: '0px',
    paddingLeft: '1rem',
  },
});

export const HeaderSample = () => {
  const { setIsOpen } = useTrayContext();
  const onOpenTray = () => setIsOpen(true);
  const classes = useHeaderSampleStyles();
  const space = useSpaceStyles();
  const { breakpoint } = useBreakpoint(layout);
  const isTabletLayout = breakpoint === 'tablet' || breakpoint === 'mobile';

  return (
    <div className={classes.root}>
      <div>
        {isTabletLayout && (
          <IconButton
            iconName="slide-in"
            label="Close navigation"
            onClick={onOpenTray}
            className={space.mr4}
          />
        )}

        <Text as="h1" variant="subheading" className={classes.title}>
          Arbutus
        </Text>
      </div>
      <div className={classes.links}>
        <Link as={LinkSample}>Blog</Link>
        <Link as={LinkSample}>GitHub</Link>
        <Link as={LinkSample}>Contact Us</Link>
        <div className={classes.button}>Button</div>
      </div>
    </div>
  );
};
