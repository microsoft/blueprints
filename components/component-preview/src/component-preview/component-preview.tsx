import { Select } from '@fluentui/react-select';
import { mergeClasses } from '@griffel/react';
import { Button } from '@microsoft/arbutus.button';
import { Icon } from '@microsoft/arbutus.icon';
import { useTheme } from '@microsoft/arbutus.theming';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import type { FC } from 'react';
import * as React from 'react';
import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {
  solarizedDark,
  solarizedLight,
} from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { useComponentPreviewStyles } from './component-preview.styles';
import type { ComponentPreviewProps } from './component-preview.types';

export const ComponentPreview: FC<ComponentPreviewProps> = ({
  className,
  component: Component,
  code,
  onFullScreen,
  themes,
  codeLanguage = 'tsx',
  wrapper: Wrapper = ({ children }) => <>{children}</>,
}) => {
  // Styles
  const classes = useComponentPreviewStyles();
  const space = useSpaceStyles();

  // Theme switcher
  const [themeKey, setThemeKey] = useState(themes?.[0].value);
  const onThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setThemeKey(event.target.value);
  };

  // Code viewer
  const [isShowingCode, setIsShowingCode] = useState(false);
  const onCodeClick = () => setIsShowingCode(!isShowingCode);
  const { themeKey: globalThemeKey } = useTheme();
  const isDarkTheme = globalThemeKey === 'dark';

  return (
    <div className={mergeClasses(classes.root, className)}>
      {(themeKey || code || onFullScreen) && (
        <div className={classes.header}>
          {themeKey && (
            <Select onChange={onThemeChange} className={classes.menuItem} size="small">
              {themes?.map(({ label, value }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </Select>
          )}
          {code && (
            <Button
              size="small"
              color="secondary"
              onClick={onCodeClick}
              className={mergeClasses(classes.menuItem, classes.menuItemButton)}
            >
              <Icon iconName="code" className={classes.menuItemIcon} />
              {isShowingCode ? 'Hide' : 'Show'} code
            </Button>
          )}
          {onFullScreen && (
            <Button
              size="small"
              color="secondary"
              onClick={onFullScreen}
              className={mergeClasses(classes.menuItem, classes.menuItemButton)}
            >
              <Icon iconName="full-screen" className={classes.menuItemIcon} />
              Full screen
            </Button>
          )}
        </div>
      )}
      <Wrapper themeKey={themeKey}>
        <Component />
      </Wrapper>
      {code && isShowingCode && (
        <div>
          <SyntaxHighlighter
            language={codeLanguage}
            style={isDarkTheme ? solarizedDark : solarizedLight}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  );
};
