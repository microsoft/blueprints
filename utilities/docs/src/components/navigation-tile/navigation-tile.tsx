import { Text } from '@fluentui/react-text';
import { Tile } from '@microsoft/arbutus.tile';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import type { FC } from 'react';
import * as React from 'react';

import { Image } from '../image';
import { Link } from '../link';
import { useNavigationTileStyles } from './navigation-tile.styles';
import type { NavigationTileProps } from './navigation-tile.types';

export const NavigationTile: FC<NavigationTileProps> = ({ links, title, thumbnail }) => {
  const classes = useNavigationTileStyles();
  const space = useSpaceStyles();

  return (
    <Tile variant="card" className={classes.root}>
      {thumbnail ? (
        <Image image={thumbnail} className={classes.image} />
      ) : (
        <div className={classes.placeholder} />
      )}
      <div className={space.py10}>
        <Text size={700} weight="bold">
          {title}
        </Text>
        <ul className={classes.links}>
          {links.map(({ text, to, isExternal }) => (
            <li key={text} className={classes.link}>
              <Link to={to} isExternal={isExternal} variant="display">
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Tile>
  );
};
