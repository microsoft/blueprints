export default `import { mergeClasses, makeStyles } from '@griffel/react';
import { useTheme } from '@microsoft/arbutus.theming';
import { Tile } from '@microsoft/arbutus.tile';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import * as React from 'react';

const useStyles = makeStyles({
  root: {
    minHeight: '400px',
    minWidth: '600px',
  },
});

const ExampleComponent = () => {
  const space = useSpaceStyles();
  const classes = useStyles();

  // Making the image source dynamic based on the theme.
  const { themeKey } = useTheme();
  const imageSrc =
    themeKey === 'light'
      ? 'https://placehold.co/600x400/FAFAFA/424242'
      : 'https://placehold.co/600x400/424242/FAFAFA';

  return (
    <Tile
      variant="image"
      imageSrc={imageSrc}
      className={mergeClasses(classes.root, space.py9, space.px7)}
    >
        {/* Tile: Solid color variant */}
    </Tile>
  );
};

export default ExampleComponent;
`;
