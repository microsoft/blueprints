import { tokens } from '@fluentui/react-theme';
import { makeStyles, shorthands } from '@griffel/react';

export const useTableListStyles = makeStyles({
  root: {
    borderSpacing: 0,

    ...shorthands.borderColor(tokens.colorNeutralStroke1),
    ...shorthands.borderWidth(tokens.strokeWidthThin),
    ...shorthands.borderRadius(tokens.borderRadiusXLarge),
    ...shorthands.borderStyle('solid'),
  },
});
