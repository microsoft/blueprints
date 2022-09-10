import { tokens } from '@fluentui/react-theme';
import { makeStyles, shorthands } from '@griffel/react';

export const useGuidanceStyles = makeStyles({
  image: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  },
  figure: {
    display: 'grid',
    ...shorthands.margin(0),
    borderTopLeftRadius: tokens.borderRadiusMedium,
    borderTopRightRadius: tokens.borderRadiusMedium,
    borderBottomLeftRadius: tokens.borderRadiusMedium,
    borderBottomRightRadius: tokens.borderRadiusMedium,
    borderBottomColor: tokens.colorNeutralStroke1,
    borderTopColor: tokens.colorNeutralStroke1,
    borderLeftColor: tokens.colorNeutralStroke1,
    borderRightColor: tokens.colorNeutralStroke1,
    borderTopStyle: 'solid',
    borderBottomStyle: 'solid',
    borderLeftStyle: 'solid',
    borderRightStyle: 'solid',
    borderTopWidth: '1px',
    borderBottomWidth: '1px',
    borderLeftWidth: '1px',
    borderRightWidth: '1px',
    overflowX: 'hidden',
    overflowY: 'hidden',
  },
  figcaption: {
    height: `calc(${tokens.spacingVerticalXL} + ${tokens.spacingVerticalSNudge}) + ${tokens.spacingVerticalSNudge}`,
    display: 'grid',
    columnGap: tokens.spacingHorizontalXS,
    ...shorthands.padding(tokens.spacingHorizontalM),
    borderTopColor: tokens.colorNeutralStroke1,
    borderTopStyle: 'solid',
    borderTopWidth: '1px',
  },
  figcaptionWithLogo: {
    gridTemplateColumns: `${tokens.spacingHorizontalXXL} auto ${tokens.spacingHorizontalXXL}`,
  },
  figcaptionWithoutLogo: {
    gridTemplateColumns: `auto ${tokens.spacingHorizontalXXL}`,
  },
  twoColumn: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'flex-start',
    columnGap: tokens.spacingHorizontalXXXL,
  },
});
