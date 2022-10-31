import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';
import { Text } from '@microsoft/arbutus.text';
import { Tile } from '@microsoft/arbutus.tile';
import * as React from 'react';

import { CONTAINER_WIDTH, HEADER_HEIGHT } from '../src';
// @ts-ignore TS doesn't recognize an image as a valid import.
import heroBackground from './hero-background.png';

const useMainStyles = makeStyles({
  thirds: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    columnGap: '1rem',
    paddingBottom: '40px',
    marginBottom: '72px',
  },
  heroBackground: {
    position: 'absolute',
    top: `-${HEADER_HEIGHT}`,
    height: '620px',
    width: '100%',
  },
  heroText: {
    position: 'relative',
    maxWidth: '720px',
    paddingTop: '92px',
    paddingBottom: tokens.spacingVerticalXXXL,
    display: 'grid',
    rowGap: tokens.spacingVerticalXXXL,
  },
  backgroundImage: {
    width: '100%',
    height: '620px',
    objectFit: 'cover',
  },
  gradientTransition: {
    height: '340px',
    width: '100%',
    position: 'absolute',
    bottom: '0',
  },
  container: {
    position: 'relative',
    maxWidth: CONTAINER_WIDTH,
    width: '100%',
    marginRight: 'auto',
    marginLeft: 'auto',
    [`@media screen and (max-width: ${CONTAINER_WIDTH})`]: {
      paddingRight: tokens.spacingHorizontalL,
      paddingLeft: tokens.spacingHorizontalL,
    },
  },
  mockCard: {
    height: '300px',
  },
  titleMarginTop: {
    paddingTop: '72px',
  },
  titleMarginBottom: {
    paddingBottom: tokens.spacingVerticalXXXL,
  },
});

export const HeroSample = () => {
  const classes = useMainStyles();

  return (
    <div>
      <div className={classes.heroBackground} aria-hidden="true">
        <img className={classes.backgroundImage} src={heroBackground as string} alt="" />
        <div
          // @todo File a bug on Griffel.
          style={{
            background: `linear-gradient(180deg, transparent, ${tokens.colorNeutralBackground1})`,
          }}
          className={classes.gradientTransition}
        />
      </div>
      <div className={classes.container}>
        <Text block as="h1" variant="jumbo" className={classes.titleMarginTop}>
          {'Start building'}
          <br />
          {'with Arbutus'}
        </Text>
        <Text block variant="headline" className={classes.titleMarginBottom}>
          A library of all sort of useful building blocks for documentation sites.
        </Text>
        <div className={classes.thirds}>
          <Tile variant="card" className={classes.mockCard}>
            &nbsp;
          </Tile>
          <Tile variant="card" className={classes.mockCard}>
            &nbsp;
          </Tile>
          <Tile variant="card" className={classes.mockCard}>
            &nbsp;
          </Tile>
        </div>
      </div>
    </div>
  );
};
