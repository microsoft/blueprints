import * as React from 'react';
import type { FC } from 'react';
import { Embed } from '@microsoft/arbutus.embed';

import { EmbedComponentData } from '../component-renderer.types';

type EmbedComponentProps = EmbedComponentData;

export const EmbedComponent: FC<EmbedComponentProps> = ({ url, size, title, type }) => (
  <Embed title={title} type={type} url={url} size={size ?? 'medium'} />
);
