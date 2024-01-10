import * as React from 'react';
import type { FC } from 'react';
import { ResourceChip } from '@microsoft/arbutus.resource-chip';
import { useCopyToClipboard } from '@microsoft/arbutus.use-copy-to-clipboard';

import type {
  QuickResourceCopyTextProps,
  QuickResourceLinkProps,
  QuickResourceProps,
} from './quick-resource.types';

export const isCopyResource = (
  resource: QuickResourceProps['data'],
): resource is { copyText: string } => {
  return 'copyText' in resource;
};

export const isLinkResource = (
  resource: QuickResourceProps['data'],
): resource is { label: string; url: string; type: 'figma' | 'storybook' } => {
  return 'label' in resource && 'url' in resource && 'type' in resource;
};

const QuickResourceCopyText: FC<QuickResourceCopyTextProps> = ({
  copyText,
  className,
}) => {
  const { copy: copyPackageName, status } = useCopyToClipboard();

  const handleCopyPackageName = () => copyPackageName(copyText ?? '');

  return (
    <ResourceChip
      text={copyText}
      actionIconName={status === 'ready' ? 'copy' : 'check'}
      onClick={handleCopyPackageName}
      className={className}
    />
  );
};

const QuickResourceLink: FC<QuickResourceLinkProps> = ({
  label,
  url,
  type,
  className,
}) => {
  const handleClick = () => window.open(url, '_blank');

  return (
    <ResourceChip
      text={label}
      actionIconName="link"
      onClick={handleClick}
      logoName={type}
      logoLabel={type}
      className={className}
    />
  );
};

export const QuickResource: FC<QuickResourceProps> = ({ data, className }) => {
  if (isCopyResource(data)) {
    return <QuickResourceCopyText copyText={data.copyText} className={className} />;
  }

  if (isLinkResource(data)) {
    return (
      <QuickResourceLink
        label={data.label}
        url={data.url}
        type={data.type}
        className={className}
      />
    );
  }

  return null;
};
