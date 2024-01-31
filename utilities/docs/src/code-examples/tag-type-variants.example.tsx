import { Tag } from '@microsoft/arbutus.tag';
import * as React from 'react';
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

  return (
    <div className={classes.root}>
      <Tag type="accent">Accent</Tag>
      <Tag type="new">New</Tag>
      <Tag type="success">Success</Tag>
      <Tag type="info">Info</Tag>
      <Tag type="warning">Warning</Tag>
      <Tag type="error">Error</Tag>
    </div>
  );
};

export default ExampleComponent;
