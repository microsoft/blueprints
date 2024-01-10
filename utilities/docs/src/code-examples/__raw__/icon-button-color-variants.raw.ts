export default `import * as React from 'react';
import { IconButton } from '@microsoft/arbutus.icon-button';
import { makeStyles } from '@griffel/react';
import { tokens } from '@fluentui/react-theme';

const useContainerStyles = makeStyles({
  root: {
    display: 'flex',
    columnGap: tokens.spacingHorizontalM,
  },
});

const ExampleComponent = () => {
  const classes = useContainerStyles();
  const handleOnClick = () => {
    /** Action */
  };

  return (
    <div className={classes.root}>
      <IconButton iconName="x" label="close" onClick={handleOnClick} color="primary" />
      <IconButton iconName="x" label="close" onClick={handleOnClick} color="secondary" />
      <IconButton iconName="x" label="close" onClick={handleOnClick} color="accent" />
      <IconButton iconName="x" label="close" onClick={handleOnClick} color="info" />
      <IconButton iconName="x" label="close" onClick={handleOnClick} color="danger" />
      <IconButton iconName="x" label="close" onClick={handleOnClick} color="warning" />
      <IconButton iconName="x" label="close" onClick={handleOnClick} color="success" />
    </div>
  );
};

export default ExampleComponent;
`;
