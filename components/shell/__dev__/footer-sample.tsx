import { Divider } from '@arbutus/component.divider';
import { Link } from '@arbutus/component.link';
import { useSpaceStyles } from '@arbutus/style.use-space-styles';
import { makeStyles } from '@griffel/react';
import type { FC, SyntheticEvent } from 'react';
import * as React from 'react';

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

const useFooterStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    columnGap: '1rem',
  },
  links: {
    display: 'flex',
    justifyContent: 'flex-end',
    columnGap: '0.5rem',
  },
});

export const FooterSample = () => {
  const classes = useFooterStyles();
  const space = useSpaceStyles();

  return (
    <div>
      <div className={classes.root}>
        <div>&nbsp;</div>
        <div className={classes.links}>
          <Link as={LinkSample} variant="caption">
            Design
          </Link>
          <Link as={LinkSample} variant="caption">
            Develop
          </Link>
          <Link as={LinkSample} variant="caption" withIcon>
            Microsfoft Design
          </Link>
        </div>
      </div>
      <Divider className={space.my6} />
      <div className={classes.root}>
        <div>&nbsp;</div>
        <div className={classes.links}>
          <Link as={LinkSample} variant="secondary">
            Contact
          </Link>
          <Link as={LinkSample} variant="secondary">
            Trademarks
          </Link>
          <Link as={LinkSample} variant="secondary">
            Terms of use
          </Link>
          <Link as={LinkSample} variant="secondary">
            © Microsoft 2021
          </Link>
        </div>
      </div>
    </div>
  );
};
