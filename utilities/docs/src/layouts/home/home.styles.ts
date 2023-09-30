import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';
import { HEADER_HEIGHT, CONTAINER_WIDTH } from '@microsoft/arbutus.shell';

const lightThemeGrid = `url('data:image/svg+xml,<svg width="31" height="63" viewBox="0 0 31 63" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.5" y1="2.13118e-08" x2="0.499997" y2="63" stroke="%23C2DBFF"/><line x1="1" y1="0.5" x2="30.9667" y2="0.499997" stroke="%23C2DBFF"/><line x1="1" y1="31.5" x2="30.9667" y2="31.5" stroke="%23C2DBFF"/></svg>')`;

export const useHomeStyles = makeStyles({
  heroLayout: {
    display: 'grid',
    backgroundImage: 'linear-gradient(293.96deg, #F0F3FF 28.46%, #9BCCFD 100%)',
    gridTemplateColumns: `auto ${CONTAINER_WIDTH} auto`,
    minHeight: 'calc(100vh)',
  },
  heroContainer: {
    height: `calc(100% - ${HEADER_HEIGHT})`,
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
  },
  // gradientTransition: {
  //   height: '340px',
  //   width: '100%',
  //   position: 'absolute',
  //   bottom: '0',
  // },
  title: {
    fontSize: '120px',
    lineHeight: '120px',
    color: tokens.colorNeutralForeground1,
  },
  articles: {
    backgroundImage: 'linear-gradient(180deg, #DADFEC 0%, rgba(255,255,255,1) 100%)',
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
