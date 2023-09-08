import type { NavigationItems } from '@microsoft/arbutus.main-navigation';

const items: NavigationItems = {
  gettingStarted: {
    title: 'Getting Started',
    id: '/getting-started',
    linkProps: { to: '/getting-started' },
  },
  about: {
    title: 'About',
    id: '/about',
    linkProps: { to: '/about' },
    hasDivider: true,
  },
  guidance: {
    title: 'Guidance',
    items: {
      introduction: {
        title: 'Introduction',
        id: '/guidance/introduction',
        linkProps: { to: '/content-design/introduction' },
      },
      informationArchitecture: {
        title: 'Information Architecture',
        id: '/guidance/information-architecture',
        linkProps: { to: '/content-design/information-architecture' },
      },
    },
    hasDivider: true,
  },
  layouts: {
    title: 'Layouts',
    items: {
      introduction: {
        title: 'Introduction',
        id: '/layouts/introduction',
        linkProps: { to: '/layouts/introduction' },
      },
    },
  },
  patterns: {
    title: 'Patterns',
    items: {
      introduction: {
        title: 'Introduction',
        id: '/patterns/introduction',
        linkProps: { to: '/patterns/introduction' },
      },
    },
  },
  components: {
    title: 'Components',
    items:  {
      introduction: {
        title: 'Introduction',
        id: '/components/introduction',
        linkProps: { to: '/components/introduction' },
      },
    },
  },
  styles: {
    title: 'Styles',
    items: {
      introduction: {
        title: 'Introduction',
        id: '/styles/introduction',
        linkProps: { to: '/styles/introduction' },
      },
      theming: {
        title: 'Theming',
        id: '/styles/theming',
        linkProps: { to: '/styles/theming' },
      },
      global: {
        title: 'Global',
        id: '/styles/global',
        linkProps: { to: '/styles/global' },
      },
      fonts: {
        title: 'Fonts',
        id: '/styles/fonts',
        linkProps: { to: '/styles/fonts' },
      },
      styleUtilities: {
        title: 'Style Utilities',
        id: 'styles/utilities',
        linkProps: { to: '/styles/utilities' },
      },
    },
    hasDivider: true,
  },
  starters: {
    title: 'Starters',
    items: {
      introduction: {
        title: 'Introduction',
        id: '/starters/introduction',
        linkProps: { to: '/starters/introduction' },
      },
    },
    hasDivider: true,
  },
  cms: {
    title: 'CMS',
    items: {
      introduction: {
        title: 'Introduction',
        id: '/cms/introduction',
        linkProps: { to: '/cms/introduction' },
      },
    },
    hasDivider: true,
  },
};