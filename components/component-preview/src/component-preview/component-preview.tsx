import { Select } from '@fluentui/react-select';
import { mergeClasses } from '@griffel/react';
import { Button } from '@microsoft/arbutus.button';
import { Icon } from '@microsoft/arbutus.icon';
import { useTheme } from '@microsoft/arbutus.theming';
import { useCopyToClipboard } from '@microsoft/arbutus.use-copy-to-clipboard';
import { AnimatePresence } from 'framer-motion';
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import * as React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {
  solarizedDark,
  solarizedLight,
} from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { useComponentPreviewStyles } from './component-preview.styles';
import type { ComponentPreviewProps } from './component-preview.types';
import { FadeMotion, SlideMotion } from './motion';
import { syntaxHighlighterCustomStyles } from './syntax-highlighter.styles';

export const ComponentPreview: FC<ComponentPreviewProps> = ({
  className,
  code,
  codeLanguage = 'tsx',
  component: Component,
  defaultThemeIndex,
  onFullScreen,
  onLiveEdit,
  onThemeChange: onThemeChangeProp,
  themes,
  themeSwitcherLabel = 'Theme',
  wrapper: Wrapper = ({ children }) => <>{children}</>,
}) => {
  // Styles
  const classes = useComponentPreviewStyles();

  // Theme switcher
  const [themeKey, setThemeKey] = useState(themes?.[defaultThemeIndex ?? 0].value);
  const onThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    setThemeKey(value);
  };

  useEffect(() => {
    if (onThemeChangeProp && themeKey) {
      onThemeChangeProp(themeKey);
    }
  }, [themeKey, onThemeChangeProp]);

  // Code viewer
  const [isShowingCode, setIsShowingCode] = useState(false);
  const onCodeClick = () => setIsShowingCode(!isShowingCode);
  const { themeKey: globalThemeKey } = useTheme();
  const isDarkTheme = globalThemeKey === 'dark';

  // Copy to clipboard
  const { copy, isCopied } = useCopyToClipboard({});
  const onCopyClick = () => copy(code ?? '');

  return (
    <div className={mergeClasses(classes.root, className)}>
      {(themeKey || code || onFullScreen) && (
        <div className={classes.previewHeader}>
          {themeKey && (
            <Select
              title={themeSwitcherLabel}
              onChange={onThemeChange}
              className={classes.menuItem}
              size="small"
              value={themeKey}
            >
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
      <AnimatePresence>
        {code && isShowingCode && (
          <SlideMotion isCollapsed={isShowingCode} className={classes.codeSection}>
            <FadeMotion isCollapsed={isShowingCode}>
              <div className={classes.codeHeader}>
                {onLiveEdit && (
                  <Button
                    size="small"
                    color="secondary"
                    onClick={onLiveEdit}
                    className={mergeClasses(classes.menuItem, classes.menuItemButton)}
                  >
                    <Icon iconName="full-screen" className={classes.menuItemIcon} />
                    Edit in sandbox
                  </Button>
                )}
                <Button
                  color="secondary"
                  size="small"
                  className={classes.menuItemButton}
                  onClick={onCopyClick}
                >
                  <Icon
                    iconName={isCopied ? 'check' : 'copy'}
                    className={
                      isCopied ? classes.menuItemIconSuccess : classes.menuItemIcon
                    }
                  />
                  Copy
                </Button>
              </div>
              <SyntaxHighlighter
                language={codeLanguage}
                showLineNumbers
                style={isDarkTheme ? solarizedDark : solarizedLight}
                customStyle={syntaxHighlighterCustomStyles}
              >
                {code}
              </SyntaxHighlighter>
            </FadeMotion>
          </SlideMotion>
        )}
      </AnimatePresence>
    </div>
  );
};
