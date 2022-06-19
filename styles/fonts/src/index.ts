import { makeStaticStyles } from '@griffel/react';

/* Segoe UI Fonts */

export const useSegoeUI100 = makeStaticStyles({
  // @font-face {
  //     fontFamily: 'Segoe UI Variable',
  //     src: ``url('src/styles/fonts/SegoeUIVF.woff2') format('woff2-variations'),
  //     url('src/styles/fonts/SegoeUIVF.woff2') format('woff2'),
  //     url('src/styles/fonts/SegoeUIVF.woff') format('woff'),
  //     url('src/styles/fonts/SegoeUIVF.ttf') format('truetype')`,
  //     fontWeight: '100 1000'
  // },

  '@font-face': {
    fontFamily: 'Segoe UI',
    src: `local('Segoe UI Light'), url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/light/latest.woff2) format('woff2'),
            url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/light/latest.woff) format('woff'),
            url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/light/latest.ttf) format('truetype')`,
    fontWeight: 100,
  },
});

export const useSegoeUI200 = makeStaticStyles({
  '@font-face': {
    fontFamily: 'Segoe UI',
    src: `local('Segoe UI Semilight'), url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semilight/latest.woff2) format('woff2'),
            url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semilight/latest.woff) format('woff'),
            url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semilight/latest.ttf) format('truetype')`,
    fontWeight: 200,
  },
});

export const useSegoeUI400 = makeStaticStyles({
  '@font-face': {
    fontFamily: 'Segoe UI',
    src: `local('Segoe UI'), url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.woff2) format('woff2'),
            url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.woff) format('woff'),
            url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.ttf) format('truetype')`,
    fontWeight: 400,
  },
});

export const useSegoeUI600 = makeStaticStyles({
  '@font-face': {
    fontFamily: 'Segoe UI',
    src: `local('Segoe UI Semibold'), url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semibold/latest.woff2) format('woff2'),
            url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semibold/latest.woff) format('woff'),
            url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semibold/latest.ttf) format('truetype')`,
    fontWeight: 600,
  },
});

export const useSegoeUI700 = makeStaticStyles({
  '@font-face': {
    fontFamily: 'Segoe UI',
    src: `local('Segoe UI Bold'), url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.woff2) format('woff2'),
            url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.woff) format('woff'),
            url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.ttf) format('truetype')`,
    fontWeight: 700,
  },
});
