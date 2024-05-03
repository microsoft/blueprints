import { mergeClasses } from '@griffel/react';
import { Tile } from '@microsoft/arbutus.tile';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import type { FC } from 'react';
import * as React from 'react';

import { MarkdownRenderer } from '../../markdown-renderer';
import type { SidenoteComponentData } from '../component-renderer.types';
import { useGridStyles } from '../use-grid-styles';

type SidenoteComponentProps = SidenoteComponentData;

export const SidenoteComponent: FC<SidenoteComponentProps> = ({ markdown, variant }) => {
  const space = useSpaceStyles();
  const classes = useGridStyles();

  return (
    <Tile
      variant="solid-color"
      backgroundColor={variant}
      className={mergeClasses(classes.root, space.p8)}
    >
      {markdown?.raw && <MarkdownRenderer markdown={markdown.raw} />}
    </Tile>
  );
};
