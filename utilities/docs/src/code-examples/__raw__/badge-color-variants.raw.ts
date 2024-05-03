export default `import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';
import { Badge } from '@microsoft/arbutus.badge';
import * as React from 'react';

const containerStyles = makeStyles({
  root: {
    display: 'flex',
    columnGap: tokens.spacingHorizontalL,
  },
});

const ExampleComponent = () => {
  const classes = containerStyles();

  return (
    <div className={classes.root}>
      <Badge color="primary" iconName="code" />
      <Badge color="secondary" iconName="code" />
      <Badge color="tertiary" iconName="code" />
      <Badge color="quaternary" iconName="code" />
      <Badge color="positive" iconName="check" />
      <Badge color="negative" iconName="x" />
      <Badge color="accent" iconName="exclamation" />
      <Badge color="info" iconName="exclamation" />
      <Badge color="warning" iconName="exclamation" />
      <Badge color="danger" iconName="exclamation" />
    </div>
  );
};

export default ExampleComponent;
`;
