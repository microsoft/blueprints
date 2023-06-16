import { ThemeSwitch } from '@microsoft/arbutus.theme-switch';
import { useTheme } from '@microsoft/arbutus.theming';
import { graphql, useStaticQuery } from 'gatsby';
import type { FC } from 'react';
import * as React from 'react';

import { Link } from '../link';
import { useHeaderStyles } from './header.styles';

type HeaderQuery = {
  headerJson: {
    links: {
      isExternal: boolean;
      text: string;
      to: string;
    }[];
  };
};

const getHeaderContent = (data: HeaderQuery) => ({
  links: data.headerJson.links ?? [],
});

export const Header: FC = () => {
  const classes = useHeaderStyles();

  const data = useStaticQuery<HeaderQuery>(graphql`
    query HeaderQuery {
      headerJson(_layout: { eq: "header" }, links: {}) {
        links {
          isExternal
          text
          to
        }
      }
    }
  `);

  const { links } = getHeaderContent(data);

  // Theme control
  const { themeKey, setTheme } = useTheme();
  const isDark = themeKey === 'dark';
  const onToggle = () => {
    setTheme?.(isDark ? 'light' : 'dark');
  };

  return (
    <nav className={classes.root}>
      {links.map(({ to, text, isExternal }) => (
        <Link key={to} variant="caption" to={to} isExternal={isExternal}>
          {text}
        </Link>
      ))}
      <ThemeSwitch isDark={isDark} onToggle={onToggle} />
    </nav>
  );
};
