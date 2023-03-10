import { makeStyles, makeStaticStyles } from '@griffel/react';
import { tokens } from '@fluentui/react-theme';

export const useStoryStyles = makeStaticStyles({
  'html, body, #root': {
    height: '100%',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  '.sb-show-main.sb-main-padded': {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
});

export const useFrameClasses = makeStyles({
  root: {
    backgroundColor: tokens.colorNeutralBackground1,
    minHeight: '100vh',
  },
  provider: {
    minHeight: '100vh',
    ['& .fui-FluentProvider']: {
      height: '100%',
    },
  },
});

