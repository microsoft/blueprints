import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';
import { HEADER_HEIGHT, CONTAINER_WIDTH } from '@microsoft/arbutus.shell';
import { arbutusTokens, breakpoints } from '@microsoft/arbutus.theming';

const LIGHT_THEME_GRID = `url("data:image/svg+xml,%3Csvg width='31' height='62' viewBox='0 0 31 62' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0.5' y1='2.13118e-08' x2='0.499997' y2='62' stroke='%23C2DBFF'/%3E%3Cline x1='1' y1='0.5' x2='30.9667' y2='0.499997' stroke='%23C2DBFF'/%3E%3Cline x1='1' y1='31.5' x2='30.9667' y2='31.5' stroke='%23C2DBFF'/%3E%3C/svg%3E%0A")`;
const DARK_THEME_GRID = `url("data:image/svg+xml,%3Csvg width='31' height='62' viewBox='0 0 31 62' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0.5' y1='2.13118e-08' x2='0.499997' y2='62' stroke='%231E4D7F'/%3E%3Cline x1='1' y1='0.5' x2='30.9667' y2='0.499997' stroke='%231E4D7F'/%3E%3Cline x1='1' y1='31.5' x2='30.9667' y2='31.5' stroke='%231E4D7F'/%3E%3C/svg%3E%0A")`;
const HERO_TO_REST_TRANSITION = '540px';
const HERO_TO_REST_TRANSITION_MOBILE = '400px';
const HERO_BREAKPOINT = '1360px'; // A manually calculated value, which is CONTAINER_WIDTH + 2 * tokens.spacingHorizontalL.
const GRID_UNIT = 31;

export const useHomeStyles = makeStyles({
  root: {
    maxWidth: '100vw',
    overflowX: 'hidden',
  },
  fluentLogo: {
    marginTop: '23px',
    marginBottom: '23px',
    height: '34px',
    width: 'auto',
  },
  heroLayout: {
    display: 'grid',
    gridTemplateColumns: `auto ${CONTAINER_WIDTH} auto`,
    rowGap: 0,
    [`@media screen and (max-width: ${HERO_BREAKPOINT})`]: {
      gridTemplateColumns: `1fr ${tokens.spacingHorizontalL}`,
      paddingLeft: tokens.spacingHorizontalL,
    },
    [`@media screen and (max-width: ${breakpoints.small})`]: {
      minHeight: `calc(100vh + (${HERO_TO_REST_TRANSITION_MOBILE})`,
    },
  },
  heroLayoutLight: {
    backgroundImage: 'linear-gradient(293.96deg, #F0F3FF 28.46%, #9BCCFD 100%)',
  },
  heroLayoutDark: {
    backgroundImage: 'linear-gradient(293.96deg, #000829 28.46%, #023364 100%)',
  },
  heroContainer: {
    position: 'relative',
    height: `calc(100vh + ${HERO_TO_REST_TRANSITION} - ${HEADER_HEIGHT})`,
    gridColumnStart: 2,
    gridColumnEnd: 4,
    borderTopLeftRadius: arbutusTokens.shape.borderRadius,
    paddingLeft: tokens.spacingHorizontalXXXL,
    paddingRight: tokens.spacingHorizontalXXXL,
    paddingTop: tokens.spacingHorizontalXXXL,
    paddingBottom: tokens.spacingHorizontalXXXL,
    backgroundImage: `linear-gradient(115deg, #C0DFFE 2%, rgba(240, 243, 255, 0.65) 56%, rgba(240, 243, 255, 0.00) 100%), ${LIGHT_THEME_GRID}, linear-gradient(105.51deg, #C0DFFE 5.67%, #F0F3FF 73.77%)`,
    backgroundRepeatY: 'repeat',
    backgroundRepeatX: 'repeat',
    [`@media screen and (max-width: ${HERO_BREAKPOINT})`]: {
      gridColumnStart: 1,
      gridColumnEnd: 3,
    },
    [`@media screen and (max-width: ${breakpoints.small})`]: {
      height: `calc(100vh + ${HERO_TO_REST_TRANSITION_MOBILE} - ${HEADER_HEIGHT})`,
    },
  },
  heroContainerLight: {
    backgroundImage: `linear-gradient(115deg, #C0DFFE 2%, rgba(240, 243, 255, 0.65) 56%, rgba(240, 243, 255, 0.00) 100%), ${LIGHT_THEME_GRID}, linear-gradient(105.51deg, #C0DFFE 5.67%, #F0F3FF 73.77%)`,
  },
  heroContainerDark: {
    backgroundImage: `linear-gradient(115deg, #104175 2%, rgba(1, 9, 41, 0.65) 56%, rgba(240, 243, 255, 0.00) 100%), ${DARK_THEME_GRID}, linear-gradient(105.51deg, #104175 5.67%, #010929 73.77%)`,
  },
  header: {
    height: HEADER_HEIGHT,
    [`@media screen and (min-width: ${HERO_BREAKPOINT})`]: {
      gridColumnStart: 1,
      gridColumnEnd: 4,
      paddingLeft: tokens.spacingHorizontalL,
    },
  },
  titleIllustration: {
    display: 'block',
    marginTop: `${GRID_UNIT * 3 - 1}px`, // TypographyIllustration doesn’t neatly fit on the grid, so have to manually adjust it.
    marginBottom: `${GRID_UNIT * 1}px`,
    [`@media screen and (max-width: ${breakpoints.small})`]: {
      marginTop: `${GRID_UNIT * 3 + 15}px`, // TypographyIllustration doesn’t neatly fit on the grid, so have to manually adjust it.
      height: '61.5px',
      width: 'auto',
    },
  },
  bookmarkTileIllustration: {
    position: 'absolute',
    top: `${GRID_UNIT}px`,
    left: `${GRID_UNIT * 30}px`,
    [`@media screen and (max-width: ${breakpoints.small})`]: {
      display: 'none',
    },
  },
  buttonIllustration: {
    position: 'absolute',
    top: `${GRID_UNIT * 10}px`,
    left: `${GRID_UNIT * 20}px`,
    [`@media screen and (max-width: ${breakpoints.small})`]: {
      display: 'none',
    },
  },
  calloutIllustration: {
    position: 'absolute',
    top: `${GRID_UNIT * 13}px`,
    left: `${GRID_UNIT * 13}px`,
    [`@media screen and (max-width: ${breakpoints.small})`]: {
      display: 'none',
    },
  },
  checkIllustration: {
    position: 'absolute',
    top: `${GRID_UNIT * 14}px`,
    left: `${GRID_UNIT * 31}px`,
    [`@media screen and (max-width: ${breakpoints.small})`]: {
      display: 'none',
    },
  },
  themeSwitcherIllustration: {
    position: 'absolute',
    top: `${GRID_UNIT * 8}px`,
    left: `${GRID_UNIT * 29}px`,
    [`@media screen and (max-width: ${breakpoints.small})`]: {
      display: 'none',
    },
  },
  typographyIllustration: {
    position: 'absolute',
    top: `${GRID_UNIT * 9 + 5}px`, // TypographyIllustration doesn’t neatly fit on the grid, so have to manually adjust it.
    left: `${GRID_UNIT * 30}px`,
    [`@media screen and (max-width: ${breakpoints.small})`]: {
      display: 'none',
    },
  },
  subtitle: {
    maxWidth: '464px',
    marginTop: 0,
    marginBottom: `${GRID_UNIT * 1}px`,
  },
  heroButton: {
    position: 'relative',
    zIndex: 1,
    backgroundColor: tokens.colorNeutralForeground1,
    color: tokens.colorNeutralBackground1,
    fontSize: tokens.fontSizeBase400,
    lineHeight: tokens.lineHeightBase400,
    fontWeight: tokens.fontWeightSemibold,
    paddingTop: tokens.spacingVerticalS,
    paddingBottom: tokens.spacingVerticalS,
    paddingLeft: tokens.spacingHorizontalXXL,
    paddingRight: tokens.spacingHorizontalXXL,
    borderTopLeftRadius: '38px',
    borderTopRightRadius: '38px',
    borderBottomLeftRadius: '38px',
    borderBottomRightRadius: '38px',
    borderTopStyle: 'none',
    borderRightStyle: 'none',
    borderBottomStyle: 'none',
    borderLeftStyle: 'none',
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    transitionProperty: 'all',
    transitionDuration: tokens.durationFast,
    transitionTimingFunction: tokens.curveEasyEase,
    outlineStyle: 'none',
    ':hover': {
      backgroundColor: tokens.colorNeutralForeground2,
    },
  },
  heroButtonIcon: {
    color: tokens.colorNeutralBackground1,
    verticalAlign: '-8%',
  },
  valueContainer: {
    alignItems: 'center',
    display: 'grid',
    height: HERO_TO_REST_TRANSITION,
    justifyItems: 'center',
    marginTop: `-${HERO_TO_REST_TRANSITION}`,
    position: 'relative',
    zIndex: 1,
    [`@media screen and (max-width: ${breakpoints.small})`]: {
      marginTop: `-${HERO_TO_REST_TRANSITION_MOBILE}`,
      height: HERO_TO_REST_TRANSITION_MOBILE,
    },
  },
  valueContainerLight: {
    backgroundImage: `linear-gradient(180deg, rgba(241, 244, 255, 0) 0%, #F1F4FF 51.56%, ${tokens.colorNeutralBackground1} 100%)`,
  },
  valueContainerDark: {
    backgroundImage: `linear-gradient(180deg, rgba(1, 9, 41, 0) 0%, #010929 51.56%, ${tokens.colorNeutralBackground1} 100%)`,
  },
  valueText: {
    marginRight: tokens.spacingHorizontalXXXL,
    marginLeft: tokens.spacingHorizontalXXXL,
    maxWidth: '764px',
    fontWeight: 600,
    fontSize: tokens.fontSizeHero700,
    lineHeight: tokens.lineHeightHero700,
    textAlign: 'center',
    letterSpacing: '-0.02em',
    color: tokens.colorNeutralForeground1,
    [`@media screen and (max-width: ${breakpoints.small})`]: {
      fontSize: tokens.fontSizeBase600,
      lineHeight: tokens.lineHeightBase600,
      textAlign: 'left',
    },
  },
  articles: {
    backgroundColor: tokens.colorNeutralBackground1,
    marginBottom: '240px',
    [`@media screen and (max-width: ${HERO_BREAKPOINT})`]: {
      paddingLeft: tokens.spacingHorizontalL,
      paddingRight: tokens.spacingHorizontalL,
    },
  },
  articlesContainer: {
    maxWidth: CONTAINER_WIDTH,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: tokens.spacingHorizontalL,
    paddingTop: tokens.spacingHorizontalL,
    gridAutoRows: 'minmax(160px, auto)',
    gridRowGap: tokens.spacingHorizontalM,
    gridColumnGap: tokens.spacingHorizontalM,
    [`@media screen and (max-width: ${breakpoints.small})`]: {
      gridRowGap: tokens.spacingHorizontalL,
      gridTemplateColumns: '1fr',
    }

  },
  articleFeatured: {
    gridColumnStart: 1,
    gridColumnEnd: 3,
    gridRowStart: 1,
    gridRowEnd: 3,
    [`@media screen and (max-width: ${breakpoints.small})`]: {
      gridColumnStart: 1,
      gridColumnEnd: 2,
      gridRowStart: 1,
      gridRowEnd: 2,
      paddingTop: tokens.spacingVerticalXXL,
      paddingBottom: tokens.spacingVerticalXXL,
      paddingLeft: tokens.spacingHorizontalXXL,
      paddingRight: tokens.spacingHorizontalXXL,
    },
  },
  articleTitle: {
    marginTop: 0,
    marginBottom: tokens.spacingVerticalL,
    fontSize: tokens.fontSizeHero700,
    lineHeight: tokens.lineHeightHero700,
    fontWeight: tokens.fontWeightBold,
    color: 'rgba(255, 255, 255, 1)',
    [`@media screen and (max-width: ${breakpoints.small})`]: {
      fontSize: tokens.fontSizeBase500,
      lineHeight: tokens.lineHeightBase500,
    },
  },
  articleDescription: {
    fontSize: tokens.fontSizeBase300,
    lineHeight: tokens.lineHeightBase300,
    fontWeight: tokens.fontWeightSemibold,
    color: 'rgba(255, 255, 255, 0.85)',
  },
  articleFeaturedTitle: {
    marginTop: 0,
    marginBottom: tokens.spacingVerticalXXL,
    fontSize: tokens.fontSizeHero1000,
    lineHeight: '74px',
    fontWeight: tokens.fontWeightBold,
    color: 'rgba(255, 255, 255, 1)',
    [`@media screen and (max-width: ${breakpoints.small})`]: {
      fontSize: tokens.fontSizeBase500,
      lineHeight: tokens.lineHeightBase500,
    },
  },
  articleFeaturedDescription: {
    fontSize: tokens.fontSizeBase500,
    lineHeight: tokens.lineHeightBase500,
    fontWeight: tokens.fontWeightSemibold,
    color: 'rgba(255, 255, 255, 0.85)',
    [`@media screen and (max-width: ${breakpoints.small})`]: {
      fontSize: tokens.fontSizeBase300,
      lineHeight: tokens.lineHeightBase300,
    },
  },
});
