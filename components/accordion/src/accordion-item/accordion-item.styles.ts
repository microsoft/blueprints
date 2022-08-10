import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';

export const useAccordionItemStyles = makeStyles({
  root: {
    borderBottomWidth: tokens.strokeWidthThin,
    borderBottomStyle: 'solid',
    borderBottomColor: tokens.colorNeutralStroke1,
    transitionProperty: 'border-bottom-color',
    transitionDuration: tokens.durationNormal,
    transitionTimingFunction: tokens.curveEasyEase,
    paddingTop: tokens.spacingVerticalM,
    paddingBottom: tokens.spacingVerticalM,
  },
  trigger: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopStyle: 'none',
    borderBottomStyle: 'none',
    borderLeftStyle: 'none',
    borderRightStyle: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    paddingTop: 0,
    paddingBottom: tokens.spacingVerticalS,
    paddingLeft: '0',
    paddingRight: '0',
  },
  title: {
    whiteSpace: 'nowrap',
    overflowY: 'hidden',
    overflowX: 'hidden',
    textOverflow: 'ellipsis',
  },
  content: {
    width: '100%',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: '0',
    paddingRight: '0',
  },
  toggle: {
    alignSelf: 'center',
    transitionProperty: 'transform',
    transitionDuration: tokens.durationNormal,
    transitionTimingFunction: tokens.curveEasyEase,
  },
  toggleExpanded: {
    transform: 'rotate(90deg)',
  },
  toggleIdle: {
    transform: 'rotate(0deg)',
  },
});
