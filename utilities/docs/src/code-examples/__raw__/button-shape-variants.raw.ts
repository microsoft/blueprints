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
    <>
      <div className={classes.root}>
        <Button>Primary brick</Button>
        <Button color='secondary'>Secondary brick</Button>
      </div>
      <div className={classes.root}>
        <Button shape="pill" >Primary pill</Button>
        <Button shape="pill" color='secondary'>Secondary pill</Button>
      </div>
    </>
  );
};

export default ExampleComponent;
`;
