import { ThemeSwitch } from '@microsoft/arbutus.theme-switch';
import { useTheme } from '@microsoft/arbutus.theming';
import useResizeObserver from '@react-hook/resize-observer';
import { graphql, useStaticQuery } from 'gatsby';
import  { type FC, type MutableRefObject, useLayoutEffect, useState, useRef } from 'react';
import * as React from 'react';

import { Link } from '../link';
import { useHeaderStyles } from './header.styles';

/**
 * @todo [Extract useSize into its own package #103](https://github.com/microsoft/arbutus/issues/103)
 * */
type Size = { width: number; height: number };

function useSize<T extends HTMLElement>(
  target: MutableRefObject<T | null>,
): Size | undefined {
  const [size, setSize] = useState<Size>();

  useLayoutEffect(() => {
    setSize(target?.current?.getBoundingClientRect());
  }, [target]);

  useResizeObserver(target, (entry) => setSize(entry.contentRect));

  return size;
}

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

  const ref = useRef<HTMLDivElement | null>(null);
  const size = useSize<HTMLDivElement>(ref);
  const width = size?.width ?? 549;
  const isCompact =  width < 570;

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
    <nav className={classes.root} ref={ref}>
      {!isCompact && links.map(({ to, text, isExternal }) => (
        <Link key={to} variant="caption" to={to} isExternal={isExternal}>
          {text}
        </Link>
      ))}
      <ThemeSwitch isDark={isDark} onToggle={onToggle} />
    </nav>
  );
};
