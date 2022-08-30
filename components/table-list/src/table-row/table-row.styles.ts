import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';

export const useTableRowStyles = makeStyles({
  root: {
    '&:first-child td:first-child, &:first-child th:first-child': {
      borderTopLeftRadius: tokens.borderRadiusXLarge,
    },
    '&:first-child td:last-child, &:first-child th:last-child': {
      borderTopRightRadius: tokens.borderRadiusXLarge,
    },
    '&:last-child td:first-child, &:last-child th:first-child': {
      borderBottomLeftRadius: tokens.borderRadiusXLarge,
    },
    '&:last-child td:last-child, &:last-child th:last-child': {
      borderBottomRightRadius: tokens.borderRadiusXLarge,
    },
  },
  simple: {
    '&:not(:last-child) td': {
      borderBottomColor: tokens.colorNeutralStroke1,
      borderBottomWidth: tokens.strokeWidthThin,
      borderBottomStyle: 'solid',
    },
    '&:not(:last-child) th': {
      borderBottomColor: tokens.colorNeutralStroke1,
      borderBottomWidth: tokens.strokeWidthThin,
      borderBottomStyle: 'solid',
    },
  },
  alternating: {
    '&:nth-child(even) td, &:nth-child(even) th': {
      backgroundColor: tokens.colorNeutralBackground3,
    },
  },
});
