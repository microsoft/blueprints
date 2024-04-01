import { Text } from '@fluentui/react-text';
import { mergeClasses } from '@griffel/react';
import { useTheme } from '@microsoft/arbutus.theming';
import { Tile } from '@microsoft/arbutus.tile';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import { navigate } from 'gatsby';
import { type FC } from 'react';
import * as React from 'react';

import { CTAButton } from '../../components/cta-button';
import { FluentLogo } from '../../components/fluent-logo';
import { Grid } from '../../components/grid';
import { makeNavigate } from '../../utilities/make-navigate';
import {
  BookmarkTileIllustration,
  ButtonIllustration,
  CalloutIllustration,
  CheckIllustration,
  ThemeSwitcherIllustration,
  TitleIllustration,
  TypographyIllustration,
} from './assets';
import { useHomeStyles } from './home.styles';
import type { HomeLayoutProps } from './home.types';

export const HomeLayout: FC<HomeLayoutProps> = ({
  articles,
  cta,
  leading,
  title,
  valueStatement,
}) => {
  const classes = useHomeStyles();
  const space = useSpaceStyles();

  const { themeKey } = useTheme();
  const isDarkTheme = themeKey === 'dark';

  const handleCTAClick = () => {
    navigate(cta.href);
  };

  return (
    <div className={classes.root}>
      <div
        className={mergeClasses(
          classes.heroLayout,
          isDarkTheme ? classes.heroLayoutDark : classes.heroLayoutLight,
        )}
      >
        <div className={classes.header}>
          <FluentLogo className={classes.fluentLogo} />
        </div>
        <div
          className={mergeClasses(
            classes.heroContainer,
            isDarkTheme ? classes.heroContainerDark : classes.heroContainerLight,
          )}
        >
          <TitleIllustration className={classes.titleIllustration} title={title} />
          <Text block as="h2" size={600} weight="bold" className={classes.subtitle}>
            {leading}
          </Text>
          <CTAButton
            className={space.mt4}
            as="button"
            elementProps={{ onClick: handleCTAClick }}
          >
            {cta.label}
          </CTAButton>
          <BookmarkTileIllustration className={classes.bookmarkTileIllustration} />
          <ButtonIllustration className={classes.buttonIllustration} />
          <CalloutIllustration className={classes.calloutIllustration} />
          <CheckIllustration className={classes.checkIllustration} />
          <ThemeSwitcherIllustration className={classes.themeSwitcherIllustration} />
          <TypographyIllustration className={classes.typographyIllustration} />
        </div>
      </div>
      <div
        className={mergeClasses(
          classes.valueContainer,
          isDarkTheme ? classes.valueContainerDark : classes.valueContainerLight,
        )}
      >
        <Text block className={classes.valueText}>
          {valueStatement}
        </Text>
      </div>
      <div className={classes.articles}>
        <Grid layout="large" className={classes.articlesContainer}>
          {articles.map(({ title, description, image, isExternal, to }, i) => {
            const navigate = makeNavigate({ isExternal, to });
            const handleClick = (e: React.SyntheticEvent<Element, Event> | undefined) => {
              navigate(e);
            };

            return (
              <Tile
                variant="image"
                key={i}
                imageSrc={image.src.publicURL}
                className={mergeClasses(
                  i === 0 ? space.p12 : space.p9,
                  i === 0 && classes.articleFeatured,
                )}
                onClick={handleClick}
              >
                <Text
                  block
                  as="h2"
                  className={
                    i === 0 ? classes.articleFeaturedTitle : classes.articleTitle
                  }
                >
                  {title}
                </Text>
                <Text
                  block
                  className={
                    i === 0
                      ? classes.articleFeaturedDescription
                      : classes.articleDescription
                  }
                >
                  {description}
                </Text>
              </Tile>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};
