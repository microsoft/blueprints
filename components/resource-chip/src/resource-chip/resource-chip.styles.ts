import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';

import type { SizeMap } from './resource-chip.types';

const sizeMap: SizeMap = {
  small: {
    padding: '0px',
    paddingL: tokens.spacingHorizontalXXS,
    gap: tokens.spacingHorizontalXS,
    actionIcon: '16px',
    logo: '14px',
  },
  medium: {
    padding: tokens.spacingVerticalXS,
    paddingL: tokens.spacingHorizontalL,
    gap: tokens.spacingHorizontalS,
    actionIcon: '26px',
    logo: '20px',
  },
  large: {
    padding: tokens.spacingVerticalXS,
    paddingL: tokens.spacingHorizontalL,
    gap: tokens.spacingHorizontalL,
    actionIcon: '36px',
    logo: '30px',
  },
};

export const useResourceChipStyles = makeStyles({
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    verticalAlign: 'bottom',
  },
  small: {
    position: 'relative',
    borderLeftWidth: '0px',
    borderTopWidth: '0px',
    borderRightWidth: '0px',
    borderBottomWidth: '0px',
    paddingTop: sizeMap.small.padding,
    paddingBottom: sizeMap.small.padding,
    paddingLeft: sizeMap.small.paddingL,
    paddingRight: sizeMap.small.padding,
    columnGap: sizeMap.small.gap,
    '&:hover': {
      backgroundColor: 'transparent',
      borderLeftWidth: '0px',
      borderTopWidth: '0px',
      borderRightWidth: '0px',
      borderBottomWidth: '0px',
      boxShadow: 'none',
      '&::before': {
        backgroundColor: tokens.colorNeutralBackground3,
        borderLeftWidth: '0px',
        borderTopWidth: '0px',
        borderRightWidth: '0px',
        borderBottomWidth: '0px',
        boxShadow: `0 0 2px ${tokens.colorNeutralBackground3}, inset 0 0 0px 1px ${tokens.colorNeutralStroke1}`,
      },
    },
    '& > *': {
      zIndex: 1,
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      zIndex: 0,
      top: '-2px',
      left: '-2px',
      width: 'calc(100% + 4px)',
      height: 'calc(100% + 4px)',
      borderTopLeftRadius: tokens.borderRadiusMedium,
      borderBottomLeftRadius: tokens.borderRadiusMedium,
      borderTopRightRadius: tokens.borderRadiusMedium,
      borderBottomRightRadius: tokens.borderRadiusMedium,
      transitionProperty: 'all',
      transitionDuration: tokens.durationNormal,
      transitionTimingFunction: tokens.curveEasyEase,
    },
  },
  medium: {
    paddingTop: sizeMap.medium.padding,
    paddingBottom: sizeMap.medium.padding,
    paddingLeft: sizeMap.medium.paddingL,
    paddingRight: sizeMap.medium.padding,
    columnGap: sizeMap.medium.gap,
    '&:hover span:last-child': {
      backgroundColor: tokens.colorBrandBackground2Hover,
    },
  },
  large: {
    paddingTop: sizeMap.large.padding,
    paddingBottom: sizeMap.large.padding,
    paddingLeft: sizeMap.large.paddingL,
    paddingRight: sizeMap.large.padding,
    columnGap: sizeMap.large.gap,
    '&:hover span:last-child': {
      backgroundColor: tokens.colorBrandBackground2Hover,
    },
  },
  smallRightPadding: {
    paddingRight: sizeMap.small.paddingL,
  },
  mediumRightPadding: {
    paddingRight: sizeMap.medium.paddingL,
  },
  largeRightPadding: {
    paddingRight: sizeMap.large.paddingL,
  },
});

export const useResourceChipActionStyles = makeStyles({
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: '50%',
    borderBottomLeftRadius: '50%',
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
    transitionProperty: 'all',
    transitionDuration: tokens.durationNormal,
    transitionTimingFunction: tokens.curveEasyEase,

    '& > svg': {
      height: '100%',
      width: 'auto',
    },
  },
  small: {
    height: sizeMap.small.actionIcon,
    width: sizeMap.small.actionIcon,
    paddingTop: tokens.spacingVerticalXXS,
    paddingBottom: tokens.spacingVerticalXXS,
    paddingLeft: tokens.spacingVerticalXXS,
    paddingRight: tokens.spacingVerticalXXS,
  },
  medium: {
    height: sizeMap.medium.actionIcon,
    width: sizeMap.medium.actionIcon,
    paddingTop: tokens.spacingVerticalXS,
    paddingBottom: tokens.spacingVerticalXS,
    paddingLeft: tokens.spacingVerticalXS,
    paddingRight: tokens.spacingVerticalXS,
    backgroundColor: tokens.colorBrandBackground2,
  },
  large: {
    height: sizeMap.large.actionIcon,
    width: sizeMap.large.actionIcon,
    paddingTop: tokens.spacingVerticalS,
    paddingBottom: tokens.spacingVerticalS,
    paddingLeft: tokens.spacingVerticalS,
    paddingRight: tokens.spacingVerticalS,
    backgroundColor: tokens.colorBrandBackground2,
  },
});

export const useResourceChipLogoStyles = makeStyles({
  root: {
    width: 'auto',
    alignSelf: 'center',
    justifySelf: 'center',
    overflowY: 'hidden',
  },
  small: {
    height: sizeMap.small.logo,
    marginRight: tokens.spacingHorizontalXXS,
  },
  medium: {
    height: sizeMap.medium.logo,
  },
  large: {
    height: sizeMap.large.logo,
  },
});
