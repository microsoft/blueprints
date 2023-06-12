import * as React from 'react';
import { Text } from '@microsoft/arbutus.text';
import { makeStyles } from '@griffel/react';
import { tokens } from '@fluentui/react-theme';

const useWrapperStyles = makeStyles({
  root: {
    minHeight: '480px',
    display: 'grid',
    justifyItems: 'center',
    alignItems: 'center',
    height: '100%',
    paddingTop: '40px',
    paddingBottom: '40px',
    paddingLeft: '40px',
    paddingRight: '40px',
    backgroundColor: tokens.colorNeutralBackground3,
  },
});

const NotFoundComponent = () => {
  return (
    <div className={useWrapperStyles().root}>
      <Text as="p" block variant="caption" color="warning">
        Example not found.
      </Text>
    </div>
  );
};

export default NotFoundComponent;
