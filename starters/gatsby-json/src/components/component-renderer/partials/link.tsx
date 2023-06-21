import { makeStyles, mergeClasses } from '@griffel/react';
import { Link as ArbutusLink } from '@microsoft/arbutus.link';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import { Link as GatsbyLink } from 'gatsby';
import type { FC } from 'react';
import * as React from 'react';

import type { LinkComponentData } from '../component-renderer.types';

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
