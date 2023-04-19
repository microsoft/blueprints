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

const CustomLogo = ({ title }) => (
  <>
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'inline-block' }}
    >
      <g>
        <path
          d="M10 0C10.4142 0 10.75 0.33579 10.75 0.75V2.25C10.75 2.66421 10.4142 3 10 3C9.5858 3 9.25 2.66421 9.25 2.25V0.75C9.25 0.33579 9.5858 0 10 0ZM15 10C15 12.7614 12.7614 15 10 15C7.23858 15 5 12.7614 5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10ZM19.25 10.75C19.6642 10.75 20 10.4142 20 10C20 9.5858 19.6642 9.25 19.25 9.25H17.75C17.3358 9.25 17 9.5858 17 10C17 10.4142 17.3358 10.75 17.75 10.75H19.25ZM10 17C10.4142 17 10.75 17.3358 10.75 17.75V19.25C10.75 19.6642 10.4142 20 10 20C9.5858 20 9.25 19.6642 9.25 19.25V17.75C9.25 17.3358 9.5858 17 10 17ZM2.25 10.75C2.66421 10.75 3 10.4142 3 10C3 9.5858 2.66421 9.25 2.25 9.25H0.75C0.33579 9.25 0 9.5858 0 10C0 10.4142 0.33579 10.75 0.75 10.75H2.25ZM2.21967 2.22004C2.51256 1.92715 2.98744 1.92715 3.28033 2.22004L4.78033 3.72004C5.07322 4.01294 5.07322 4.48781 4.78033 4.7807C4.48744 5.0736 4.01256 5.0736 3.71967 4.7807L2.21967 3.2807C1.92678 2.98781 1.92678 2.51294 2.21967 2.22004ZM3.28033 17.7807C2.98744 18.0736 2.51256 18.0736 2.21967 17.7807C1.92678 17.4878 1.92678 17.0129 2.21967 16.72L3.71967 15.22C4.01256 14.9271 4.48744 14.9271 4.78033 15.22C5.07322 15.5129 5.07322 15.9878 4.78033 16.2807L3.28033 17.7807ZM17.7803 2.22004C17.4874 1.92715 17.0126 1.92715 16.7197 2.22004L15.2197 3.72004C14.9268 4.01294 14.9268 4.48781 15.2197 4.7807C15.5126 5.0736 15.9874 5.0736 16.2803 4.7807L17.7803 3.2807C18.0732 2.98781 18.0732 2.51294 17.7803 2.22004ZM16.7197 17.7807C17.0126 18.0736 17.4874 18.0736 17.7803 17.7807C18.0732 17.4878 18.0732 17.0129 17.7803 16.72L16.2803 15.22C15.9874 14.9271 15.5126 14.9271 15.2197 15.22C14.9268 15.5129 14.9268 15.9878 15.2197 16.2807L16.7197 17.7807Z"
          fill="#212121"
        />
      </g>
    </svg>

    <p>{title}</p>
  </>
);

export const WithCustomLogo = Template.bind({}) as ComponentStory<FC<ShellProps>>;

WithCustomLogo.args = {
  headerArea: <Area>Header Area</Area>,
  navigationArea: <NavigationArea>Navigation Area</NavigationArea>,
  footerArea: <Area>Footer Area</Area>,
  logoAs: CustomLogo,
  logoProps: { title: 'Custom Logo' },
  closeTrayLabel: 'Close navigation.',
  openTrayLabel: 'Open navigation.',
};
