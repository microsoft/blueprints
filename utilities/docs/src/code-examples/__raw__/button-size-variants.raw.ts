export default `import * as React from 'react';
import { Button } from '@microsoft/arbutus.button';
import { makeStyles } from '@griffel/react';
import { tokens } from '@fluentui/react-theme';

const containerStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    columnGap: tokens.spacingHorizontalM,
  },
});

const ExampleComponent = () => {
  const classes = containerStyles();

  return (
    <div className={classes.root}>
      <Button color="secondary" size="small">
        Small
      </Button>
      <Button color="secondary" size="medium">
        Medium
      </Button>
      <Button color="secondary" size="large">
        Large
      </Button>
    </div>
  );
};

export default ExampleComponent;
`;
