import * as React from 'react';
import type { FC } from 'react';
import { Link as ArbutusLink } from '@microsoft/arbutus.link';
import { Link as GatsbyLink } from 'gatsby';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';

import { LinkComponentData } from '../component-renderer.types';
import { makeStyles, mergeClasses } from '@griffel/react';

type LinkComponentProps = LinkComponentData;

const useLinkStyles = makeStyles({
  root: {
    textDecorationLine: 'none',
  },
});

export const LinkComponent: FC<LinkComponentProps> = ({ to, isExternal, text }) => {
  const classes = useLinkStyles();
  const space = useSpaceStyles();

  const linkProps = {} as { to?: string; onClick?: () => void };
  if (isExternal) {
    linkProps['to'] = to;
  } else {
    linkProps['onClick'] = () => window.open(to, '_blank');
  }

  return (
    <ArbutusLink
      withIcon
      variant="caption"
      elementProps={linkProps}
      as={GatsbyLink}
      className={mergeClasses(classes.root, space.my5)}
    >
      {text}
    </ArbutusLink>
  );
};
