import type { FC } from 'react';
import * as React from 'react';

import { ConcertinaListItem } from '../concertina-list-item';
import { useConcertinaListStyles } from './concertina-list.styles';
import type { ConcertinaListProps } from './concertina-list.types';

export const ConcertinaList: FC<ConcertinaListProps> = ({
  items,
  title,
  description,
}) => {
  // Styles
  const classes = useConcertinaListStyles();

  return (
    <div className={classes.root}>
      {title && <h2>{title}</h2>}
      {description && <div className={classes.description}>{description}</div>}
      {items.map(({ title, content }, index) => (
        <ConcertinaListItem key={`concertinaItem-${index}`} title={title}>
          {content}
        </ConcertinaListItem>
      ))}
    </div>
  );
};
