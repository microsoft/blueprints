import { makeStyles } from '@griffel/react';

import {
  margin,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  marginX,
  marginY,
} from './margin';
import {
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingX,
  paddingY,
} from './padding';

export const useSpaceStyles = makeStyles({
  ...margin,
  ...marginY,
  ...marginX,
  ...marginTop,
  ...marginBottom,
  ...marginLeft,
  ...marginRight,
  ...padding,
  ...paddingBottom,
  ...paddingLeft,
  ...paddingRight,
  ...paddingTop,
  ...paddingX,
  ...paddingY,
});
