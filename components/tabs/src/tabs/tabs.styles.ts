import { tokens } from '@fluentui/react-theme';
import { makeStyles, shorthands } from '@griffel/react';

export const useTabsStyles = makeStyles({
  root: {
    color: tokens.colorNeutralForeground1,
    ':global(:root)': { '--reach-tabs': 1 },

    '& [data-reach-tabs][data-orientation="vertical"]': {
      display: 'flex',
    },

    '& [data-reach-tab-list]': {
      display: 'flex',
      backgroundColor: tokens.colorNeutralBackground1,
      borderBottomWidth: '0.0625rem',
      borderBottomStyle: 'solid',
      borderBottomColor: tokens.colorNeutralStroke1,
    },

    '& [data-reach-tab-list][aria-orientation="vertical"]': {
      flexDirection: 'column',
    },

    '& [data-reach-tab]': {
      ...shorthands.margin('0'),
      paddingTop: tokens.spacingHorizontalS,
      paddingBottom: tokens.spacingHorizontalS,
      paddingLeft: tokens.spacingHorizontalL,
      paddingRight: tokens.spacingHorizontalL,
      display: 'inline-block',
      ...shorthands.border('none'),
      ...shorthands.borderRadius('0.25rem 0.25rem 0 0'),
      boxShadow: `0 0 0 ${tokens.colorBrandForeground1}`,
      backgroundColor: 'none',
      color: 'inherit',
      cursor: 'pointer',
      WebkitAppearance: 'none',
      MozAppearance: 'none',
      fontWeight: tokens.fontWeightRegular,
      fontSize: tokens.fontSizeBase300,
      lineHeight: tokens.lineHeightBase300,
      '&:focus': {
        outlineColor: 'initial',
        outlineStyle: 'none',
        outlineWidth: 'initial',
      },
    },

    '& [data-reach-tab]:active': {
      backgroundColor: tokens.colorNeutralBackground1,
    },

    '& [data-reach-tab]:disabled': {
      opacity: '0.25',
      cursor: 'default',
    },

    '& [data-reach-tab][data-selected]': {
      fontWeight: tokens.fontWeightSemibold,
      boxShadow: `0 0.125rem 0 0 ${tokens.colorBrandForeground1}`,
    },
  },
});
