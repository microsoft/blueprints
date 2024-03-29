import { tokens } from '@fluentui/react-theme';
import { makeStyles, shorthands } from '@griffel/react';
import { Link } from '@microsoft/arbutus.link';
import type { FC, ReactNode, SyntheticEvent } from 'react';
import * as React from 'react';

const LinkSample: FC<{ children?: ReactNode | undefined }> = ({ children }) => {
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
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
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

export const HeaderSample = ({ isHeroMode }: { isHeroMode?: boolean }) => {
  const classes = useHeaderSampleStyles();

  return (
    <div className={classes.root}>
      <Link as={LinkSample} variant={isHeroMode ? 'caption' : 'primary'}>
        Blog
      </Link>
      <Link as={LinkSample} variant={isHeroMode ? 'caption' : 'primary'}>
        GitHub
      </Link>
      <Link as={LinkSample} variant={isHeroMode ? 'caption' : 'primary'}>
        Contact Us
      </Link>
      <div className={classes.button}>Button</div>
    </div>
  );
};
