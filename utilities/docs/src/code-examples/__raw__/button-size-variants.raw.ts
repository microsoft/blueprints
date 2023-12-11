export default `import * as React from 'react';
import { Button } from '@microsoft/arbutus.button';
import { makeStyles } from '@griffel/react';
import { tokens } from '@fluentui/react-theme';

const containerStyles = makeStyles({
  root: {
    display: 'flex',
    columnGap: tokens.spacingHorizontalM,
  },
});

const ExampleComponent = () => {
  const classes = containerStyles();

  return (
    <div className={classes.root}>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  );
};

export default ExampleComponent;
`;
