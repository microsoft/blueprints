import { Embed } from '@microsoft/arbutus.embed';
import type { FC } from 'react';
import * as React from 'react';

import type { EmbedComponentData } from '../component-renderer.types';

type EmbedComponentProps = EmbedComponentData;

export const EmbedComponent: FC<EmbedComponentProps> = ({ url, size, title, type }) => {
  console.table({ url, size, title, type })
  return (
  <Embed title={title} type={type} url={url} size={size ?? 'medium'} />
)};
