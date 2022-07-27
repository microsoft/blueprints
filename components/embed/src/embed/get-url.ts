import type { EmbedProps } from './embed.types';

export const getUrl = ({ type, url }: Pick<EmbedProps, 'url' | 'type'>) => {
  switch (type) {
    case 'figma':
      return `https://www.figma.com/embed?embed_host=arbutus&url=\
      ${url}`;
    case 'storybook':
      return url;
  }
};
