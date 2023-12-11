import * as React from 'react';
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
      <Button color="primary">Primary action</Button>
      <Button color="secondary">Secondary action</Button>
      <Button color="danger">Danger zone, careful!</Button>
      <Button color="warning">Are you sure?</Button>
      <Button color="success">Good to go!</Button>
    </div>
  );
};

export default ExampleComponent;
