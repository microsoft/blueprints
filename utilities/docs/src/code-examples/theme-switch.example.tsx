import { ThemeSwitch } from '@microsoft/arbutus.theme-switch';
import { useTheme } from '@microsoft/arbutus.theming';
import * as React from 'react';

const ExampleComponent = () => {
  // Example of how to implement theme switching.
  const { themeKey, setTheme } = useTheme();
  const isDark = themeKey === 'dark';
  const onToggle = () => setTheme?.(isDark ? 'light' : 'dark');

  return (
    <ThemeSwitch
      isDark={isDark}
      onToggle={onToggle}
      label={`Change the theme to ${isDark ? 'light' : 'dark'}`}
    />
  );
};

export default ExampleComponent;
