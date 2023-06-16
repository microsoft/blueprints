import { Link as ArbutusLink } from '@microsoft/arbutus.link';
import { Link as GatsbyLink } from 'gatsby';
import type { FC, ReactNode } from 'react';
import * as React from 'react';

import { useLinkStyles } from './link.styles';
import type { LinkProps } from './link.types';

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
