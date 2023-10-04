import { Text } from '@fluentui/react-text';
import { mergeClasses } from '@griffel/react';
import { Tile } from '@microsoft/arbutus.tile';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import type { FC } from 'react';
import * as React from 'react';

import { Grid } from '../../components/grid';
import { MicrosoftLogo } from '../../components/microsoft-logo';
import { useHomeStyles } from './home.styles';
import type { HomeLayoutProps } from './home.types';
import { Statement, StatementItem } from './partials';

export const HomeLayout: FC<HomeLayoutProps> = ({
  title,
  leading,
  statements,
  articles,
}) => {
  const classes = useHomeStyles();
  const space = useSpaceStyles();

  return (
    <>
      <div className={classes.heroLayout}>
        <div className={classes.heroContainer}>
          <MicrosoftLogo />
          <Text block as="h1" weight="bold" className={classes.title}>
            {title}
          </Text>
          <Grid layout="large">
            <div className={classes.heroTile}>
              <Text block as="h2" size={600} weight="bold">
                Create a documentation site
              </Text>
              <Text block as="p" size={400}>
                Get started with writing, designing and building documentation for your
                project.
              </Text>
            </div>
          </Grid>
        </div>
      </div>
      <div className={classes.valueContainer}>
        <Text block className={classes.valueText}>
          En ecosystem of guidance, components and tools for creating your best
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
    </>
  );
};
