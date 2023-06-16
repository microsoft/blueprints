import * as React from 'react';
import type { FC, ReactNode } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Link as ArbutusLink } from '@microsoft/arbutus.link';

import type { LinkProps } from './link.types';
import { useLinkStyles } from './link.styles';

const ExternalLink: FC<{ href: string; className: string; children: ReactNode }> = ({
  children,
  href,
  className,
}) => (
  <a
    className={className}
    href={href}
    target="_blank"
    referrerPolicy="no-referrer"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

export const Link: FC<LinkProps> = ({
  children,
  to,
  isExternal,
  isUnderlined,
  variant,
  withIcon,
}) => {
  const classes = useLinkStyles();
  const Element = isExternal ? ExternalLink : GatsbyLink;
  const elementProps = isExternal
    ? { href: to, className: classes.root }
    : { to, className: classes.root };

  return (
    <ArbutusLink
      as={Element}
      elementProps={elementProps}
      isUnderlined={isUnderlined}
      variant={variant}
      withIcon={withIcon ?? isExternal}
    >
      {children}
    </ArbutusLink>
  );
};
