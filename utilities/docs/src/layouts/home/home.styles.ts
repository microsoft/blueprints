import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';
import { HEADER_HEIGHT, CONTAINER_WIDTH } from '@microsoft/arbutus.shell';
import { arbutusTokens } from '@microsoft/arbutus.theming';

const lightThemeGrid = `url('data:image/svg+xml,<svg width="31" height="63" viewBox="0 0 31 63" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.5" y1="2.13118e-08" x2="0.499997" y2="63" stroke="%23C2DBFF"/><line x1="1" y1="0.5" x2="30.9667" y2="0.499997" stroke="%23C2DBFF"/><line x1="1" y1="31.5" x2="30.9667" y2="31.5" stroke="%23C2DBFF"/></svg>')`;
const HERO_TO_REST_TRANSITION = '540px'; 
const HERO_BREAKPOINT = '1360px'; // A manually calculated value, which is CONTAINER_WIDTH + 2 * tokens.spacingHorizontalL.

export const useHomeStyles = makeStyles({
  heroLayout: {
    display: 'grid',
    backgroundImage: 'linear-gradient(293.96deg, #F0F3FF 28.46%, #9BCCFD 100%)',
    gridTemplateColumns: `auto ${CONTAINER_WIDTH} auto`,
    minHeight: `calc(100vh - ${HEADER_HEIGHT} + ${HERO_TO_REST_TRANSITION})`,
    [`@media screen and (max-width: ${HERO_BREAKPOINT})`]: {
      gridTemplateColumns: `1fr ${tokens.spacingHorizontalL}`,
      paddingLeft: tokens.spacingHorizontalL,
    },
  },
  heroContainer: {
    height: `calc(100vh - ${HEADER_HEIGHT} + ${HERO_TO_REST_TRANSITION})`,
    gridColumnStart: 2,
    gridColumnEnd: 4,
    marginTop: HEADER_HEIGHT,
    borderTopLeftRadius: '24px',
    backgroundColor: 'red',
    paddingLeft: tokens.spacingHorizontalXXXL,
    paddingRight: tokens.spacingHorizontalXXXL,
    paddingTop: tokens.spacingHorizontalXXXL,
    paddingBottom: tokens.spacingHorizontalXXXL,
    backgroundImage: `linear-gradient(115deg, #C0DFFE 2%, rgba(240, 243, 255, 0.65) 56%, rgba(240, 243, 255, 0.00) 100%), ${lightThemeGrid}, linear-gradient(105.51deg, #C0DFFE 5.67%, #F0F3FF 73.77%)`,
    backgroundRepeatY: 'repeat',
    backgroundRepeatX: 'repeat',
    
    [`@media screen and (max-width: ${HERO_BREAKPOINT})`]: {
      gridColumnStart: 1,
      gridColumnEnd: 3,
    },
  },
  heroTile: {
    backgroundImage: `radial-gradient(100% 156.1% at 39.48% 59.44%, #FFFFFF 0%, #E5EEFF 69.08%)`,
    boxShadow: `0px 4px 16px rgba(103, 159, 255, 0.15), 0px 2px 4px rgba(103, 159, 255, 0.15)`,
    paddingTop: tokens.spacingVerticalXS,
    paddingBottom: tokens.spacingVerticalXS,
    paddingLeft: tokens.spacingHorizontalXXL,
    paddingRight: tokens.spacingHorizontalXXL,
    borderTopLeftRadius: arbutusTokens.shape.borderRadius,
    borderTopRightRadius: arbutusTokens.shape.borderRadius,
    borderBottomLeftRadius: arbutusTokens.shape.borderRadius,
    borderBottomRightRadius: arbutusTokens.shape.borderRadius,
  },
  valueContainer: {
    alignItems: 'center',
    backgroundImage: `linear-gradient(180deg, rgba(241, 244, 255, 0) 0%, #F1F4FF 51.56%, ${tokens.colorNeutralBackground1} 100%)`,
    display: 'grid',
    height: HERO_TO_REST_TRANSITION,
    justifyItems: 'center',
    marginTop: `-${HERO_TO_REST_TRANSITION}`,
    position: 'relative',
    zIndex: 1,
  },
  valueText: {
    maxWidth: '764px',
    fontWeight: 600,
    fontSize: '40px',
    lineHeight: '48px',
    textAlign: 'center',
    letterSpacing: '-0.02em',
    color: tokens.colorNeutralForeground1,
  },
  title: {
    fontSize: '120px',
    lineHeight: '120px',
    color: tokens.colorNeutralForeground1,
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
