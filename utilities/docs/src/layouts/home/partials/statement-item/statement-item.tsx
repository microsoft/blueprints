import { Text } from '@fluentui/react-text';
import type { FC } from 'react';
import * as React from 'react';

import { useStatementItemStyles } from './statement-item.styles';
import type { StatementItemProps } from './statement-item.types';

export const StatementItem: FC<StatementItemProps> = ({
  number,
  headline,
  description,
}) => {
  const classes = useStatementItemStyles();

  return (
    <li>
      <h3 className={classes.statementHeading}>
        <Text size={800} weight="bold" className={classes.accentText}>
          {number}
        </Text>
        <span className={classes.statementHeadingText}>
          <Text size={500} weight="semibold">
            {headline}
          </Text>
          <Text size={800}>→</Text>
        </span>
      </h3>
      <Text as="p" block size={400}>
        {description}
      </Text>
    </li>
  );
};
