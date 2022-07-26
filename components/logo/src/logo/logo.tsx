import { mergeClasses } from '@griffel/react';
import type { FC } from 'react';
import { useMemo } from 'react';
import * as React from 'react';

import { logos } from '../logos';
import { useLogoStyles } from './logo.styles';
import type { LogoProps } from './logo.types';

export const Logo: FC<LogoProps> = ({ className, logoName, size = 'fill', isInline }) => {
  // Styles
  const classes = useLogoStyles();
  const LogoSVG = useMemo(() => logos[logoName], [logoName]);

  const rootClasses = mergeClasses(classes[size], isInline && classes.inline, className);

  return <LogoSVG className={rootClasses} />;
};
