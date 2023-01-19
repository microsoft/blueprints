import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';
import { layout as BREAKPOINTS } from '@microsoft/arbutus.theming';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { FC } from 'react';
import React from 'react';

import type { ShellProps } from '../src/index';
import { Crown, FOOTER_HEIGHT, HEADER_HEIGHT, Shell } from '../src/index';
import { Area } from './area';
// @ts-ignore TS doesn’t recognize the image format.
import logo from './fluentui-logo.svg';
import { FooterSample } from './footer-sample';
import { HeaderSample } from './header-sample';
import { HeroSample } from './hero-sample';
import { NavigationSample } from './navigation-sample';
import { PageSample } from './page-sample';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Layout/Shell',
  component: Shell,
} as ComponentMeta<typeof Shell>;

const useMainAreaStyles = makeStyles({
  main: {
    minHeight: `calc(100vh - (${HEADER_HEIGHT} + ${FOOTER_HEIGHT} + 16px))`,
    marginBottom: '16px',
  },
  navigation: {
    minHeight: `calc(100vh - (${HEADER_HEIGHT} + 16px))`,
    [`@media screen and (min-width: ${BREAKPOINTS.desktop}px)`]: {
      minHeight: `calc(100vh - (${HEADER_HEIGHT} + ${FOOTER_HEIGHT} + 16px))`,
    },
  },
});

const NavigationArea: FC<{ children?: React.ReactNode }> = ({ children }) => (
  <Area className={useMainAreaStyles().navigation}>{children}</Area>
);

const Template: ComponentStory<typeof Shell> = (args) => (
  <Shell {...args}>
    <Area className={useMainAreaStyles().main}>Main Area</Area>
  </Shell>
);

export const Simple = Template.bind({}) as ComponentStory<FC<ShellProps>>;

Simple.args = {
  headerArea: <Area>Header Area</Area>,
  navigationArea: <NavigationArea>Navigation Area</NavigationArea>,
  footerArea: <Area>Footer Area</Area>,
  logoText: 'Project Name',
  closeTrayLabel: 'Close navigation.',
  openTrayLabel: 'Open navigation.',
};

const FullExampleTemplate: ComponentStory<typeof Shell> = (args) => (
  <Shell {...args}>
    <PageSample />
  </Shell>
);

export const FullExample = FullExampleTemplate.bind({}) as ComponentStory<FC<ShellProps>>;
FullExample.args = {
  headerArea: <HeaderSample />,
  navigationArea: <NavigationSample />,
  footerArea: <FooterSample />,
  logoMarkSrc: logo as string,
  logoMarkAlt: 'Fluent logo',
  closeTrayLabel: 'Close navigation.',
  openTrayLabel: 'Open navigation.',
};

const HeroExampleTemplate: ComponentStory<typeof Shell> = (args) => (
  <Shell {...args}>
    <HeroSample />
  </Shell>
);

const useHeroHeaderStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: 'min-content auto',
    columnGap: tokens.spacingHorizontalXXL,
  },
});

const HeroHeader: FC<{
  logoMarkAlt: string;
  logoMarkSrc: string;
  logoText?: string;
  onLogoClick?: () => void;
}> = ({ logoMarkAlt, logoMarkSrc, logoText, onLogoClick }) => {
  const classes = useHeroHeaderStyles();

  return (
    <div className={classes.root}>
      <Crown
        isTabletLayout={false}
        logoMarkAlt={logoMarkAlt}
        logoMarkSrc={logoMarkSrc}
        logoText={logoText}
        onClick={onLogoClick}
      />
      <HeaderSample isHeroMode />
    </div>
  );
};

export const HeroExample = HeroExampleTemplate.bind({}) as ComponentStory<FC<ShellProps>>;
HeroExample.args = {
  headerArea: <HeroHeader logoMarkAlt="Fluent logo" logoMarkSrc={logo as string} />,
  navigationArea: <NavigationSample />,
  footerArea: <FooterSample />,
  logoMarkSrc: logo as string,
  logoMarkAlt: 'Fluent logo',
  closeTrayLabel: 'Close navigation.',
  openTrayLabel: 'Open navigation.',
  isHeroMode: true,
};
