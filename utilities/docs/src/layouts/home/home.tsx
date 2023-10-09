import { Text } from '@fluentui/react-text';
import { mergeClasses } from '@griffel/react';
import { Tile } from '@microsoft/arbutus.tile';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import type { FC } from 'react';
import * as React from 'react';

import { CTAButton } from '../../components/cta-button';
import { Grid } from '../../components/grid';
import { FluentLogo } from '../../components/fluent-logo';
import { useHomeStyles } from './home.styles';
import type { HomeLayoutProps } from './home.types';
import {
  BookmarkTileIllustration,
  ButtonIllustration,
  CalloutIllustration,
  CheckIllustration,
  ThemeSwitcherIllustration,
  TitleIllustration,
  TypographyIllustration,
} from './assets';

export const HomeLayout: FC<HomeLayoutProps> = ({ title, leading, articles }) => {
  const classes = useHomeStyles();
  const space = useSpaceStyles();

  return (
    <div className={classes.root}>
      <div className={classes.heroLayout}>
        <div className={classes.header}>
          <FluentLogo className={classes.fluentLogo} />
        </div>
        <div className={classes.heroContainer}>
          <TitleIllustration className={classes.titleIllustration} title={title} />
          <Text block as="h2" size={600} weight="bold" className={classes.subtitle}>
            {leading}
          </Text>
          <CTAButton className={space.mt4}>
            Get started
          </CTAButton>
          {/* <Grid layout="large">
            <div className={classes.heroTile}>
              <Text block as="p" size={400}>
                Get started with writing, designing and building documentation for your
                project.
              </Text>
            </div>
          </Grid> */}
          <BookmarkTileIllustration className={classes.bookmarkTileIllustration} />
          <ButtonIllustration className={classes.buttonIllustration} />
          <CalloutIllustration className={classes.calloutIllustration} />
          <CheckIllustration className={classes.checkIllustration} />
          <ThemeSwitcherIllustration className={classes.themeSwitcherIllustration} />
          <TypographyIllustration className={classes.typographyIllustration} />
        </div>
      </div>
      <div className={classes.valueContainer}>
        <Text block className={classes.valueText}>
          An ecosystem of guidance, components and tools for creating your best
          documentation yet.
        </Text>
      </div>
      <div className={classes.articles}>
        <Grid layout="large" className={classes.articlesContainer}>
          {articles.map(({ title, description, image }, i) => (
            <Tile
              variant="image"
              key={i}
              imageSrc={image.src.publicURL}
              className={mergeClasses(
                i === 0 ? space.p12 : space.p9,
                i === 0 && classes.articleFeatured,
              )}
            >
              <Text
                block
                as="h2"
                size={i === 0 ? 1000 : 600}
                weight="bold"
                className={classes.articleTitle}
              >
                {title}
              </Text>
              <Text
                block
                size={i === 0 ? 500 : 300}
                weight="semibold"
                className={classes.articleDescription}
              >
                {description}
              </Text>
            </Tile>
          ))}
        </Grid>
      </div>
    </div>
  );
};
