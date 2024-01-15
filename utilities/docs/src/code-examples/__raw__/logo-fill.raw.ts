export default `import { makeStyles } from '@griffel/react';
import { Logo } from '@microsoft/arbutus.logo';
import * as React from 'react';

const useContainerStyles = makeStyles({
  root: {
    width: '140px',
  },
});

const ExampleComponent = () => {
  const classes = useContainerStyles();

  return (
    <div className={classes.root}>
      <Logo logoName="figma" size="fill" />
    </div>
  );
};

export default ExampleComponent;
`;
