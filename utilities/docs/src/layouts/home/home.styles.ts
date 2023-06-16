import { tokens } from '@fluentui/react-theme';
import { makeStyles, shorthands } from '@griffel/react';
import { CONTAINER_WIDTH, HEADER_HEIGHT } from '@microsoft/arbutus.shell';
import { layout as BREAKPOINTS } from '@microsoft/arbutus.theming';

export const useHomeStyles = makeStyles({
  root: {
    minHeight: 'calc(100vh)',
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'linear-gradient(180deg, #EAF3EF 0%, #DADFEC 100%)',
  },
  container: {
    width: `calc(100vw - 2 * ${tokens.spacingHorizontalXXXL})`,
    borderTopLeftRadius: '24px',
    borderTopRightRadius: '24px',
    borderBottomRightRadius: '24px',
    borderBottomLeftRadius: '24px',
    marginTop: HEADER_HEIGHT,
    paddingTop: tokens.spacingHorizontalXXXL,
    paddingBottom: tokens.spacingHorizontalXXXL,
    paddingLeft: tokens.spacingHorizontalXXXL,
    paddingRight: tokens.spacingHorizontalXXXL,
    backgroundImage: `linear-gradient(180deg, ${tokens.colorNeutralBackground1} 0%, ${tokens.colorNeutralBackground1} 50%, rgba(255,255,255,0) 100%)`,
  },
  gradientTransition: {
    height: '340px',
    width: '100%',
    position: 'absolute',
    bottom: '0',
  },
  title: {
    fontSize: '120px',
    marginTop: '80px',
    marginBottom: '20px',
    lineHeight: '120px',
    backgroundImage: 'linear-gradient(90.63deg, #65DBA9 0%, #436DCD 54.72%)',
    backgroundClip: 'text',
    textFillColor: 'transparent',
  },
  articles: {
    paddingLeft: tokens.spacingHorizontalL,
    paddingRight: tokens.spacingHorizontalL,
    paddingBottom: tokens.spacingHorizontalL,
    paddingTop: tokens.spacingHorizontalL,
    backgroundImage: 'linear-gradient(180deg, #DADFEC 0%, rgba(255,255,255,1) 100%)',
    gridAutoRows: 'minmax(200px, auto)',
    gridRowGap: tokens.spacingHorizontalM,
    gridColumnGap: tokens.spacingHorizontalM,
  },
  articleTitle: {
    color: 'rgba(255, 255, 255, 1)',
  },
  articleDescription: {
    color: 'rgba(255, 255, 255, 0.85)',
  },
  articleFeatured: {
    gridColumnStart: 1,
    gridColumnEnd: 3,
    gridRowStart: 1,
    gridRowEnd: 3,
  },
});
