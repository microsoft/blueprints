import { Avatar } from '@fluentui/react-avatar';
import { Text } from '@microsoft/arbutus.text';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import type { FC } from 'react';
import * as React from 'react';

import { usePostPreviewStyles } from './post-preview.styles';
import type { PostPreviewProps } from './post-preview.types';

export const PostPreview: FC<PostPreviewProps> = ({
  avatarProps,
  className,
  firstName,
  imageAs: Image = 'img',
  imageProps,
  isImagePlaceholder,
  lastName,
  onClick,
  timestamp,
  title,
}) => {
  const classes = usePostPreviewStyles();
  const space = useSpaceStyles();

  return (
    <button onClick={onClick} className={classes.root}>
      {/* {isImagePlaceholder ? <div /> : <Image {...imageProps} />} */}
      <div>
        <Text block variant="caption">
          {title}
        </Text>
        <div className={space.mt4}>
          <Avatar {...avatarProps} />
          <Text variant="description" color="secondary">
            &ensp; {firstName} {lastName} — {timestamp}
          </Text>
        </div>
      </div>
    </button>
  );
};