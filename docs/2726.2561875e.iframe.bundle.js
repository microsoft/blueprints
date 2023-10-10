'use strict';
(self.webpackChunkarbutus = self.webpackChunkarbutus || []).push([
  [2726],
  {
    './components/icon/lib/icon/icon.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { J: () => Icon });
      var _griffel_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './node_modules/@griffel/core/mergeClasses.esm.js',
        ),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/react/index.js',
        ),
        _icon_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './components/icon/lib/icon/icon.styles.js',
        ),
        _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './components/icon/lib/icon/icons/index.js',
        );
      const Icon = ({
        className,
        color = 'primary',
        label,
        iconName,
        size = 'medium',
        isInline,
      }) => {
        const Icon = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
            () => _icons__WEBPACK_IMPORTED_MODULE_1__.H[iconName],
            [iconName],
          ),
          a11yId = (0, react__WEBPACK_IMPORTED_MODULE_0__.useId)(),
          a11yProps = {};
        label
          ? ((a11yProps.role = 'img'), (a11yProps['aria-labelledby'] = label))
          : (a11yProps['aria-hidden'] = !0);
        const classes = (0, _icon_styles__WEBPACK_IMPORTED_MODULE_2__.Zu)(),
          rootClasses = (0, _griffel_react__WEBPACK_IMPORTED_MODULE_3__.z)(
            classes.root,
            classes[color],
            classes[size],
            isInline && classes.inline,
            className,
          );
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          'svg',
          {
            viewBox: '0 0 16 16',
            xmlns: 'http://www.w3.org/2000/svg',
            className: rootClasses,
            fill: 'currentColor',
            ...a11yProps,
          },
          label &&
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'title',
              { id: a11yId },
              label,
            ),
          react__WEBPACK_IMPORTED_MODULE_0__.createElement(Icon, null),
        );
      };
      Icon.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Icon',
        props: {
          color: { defaultValue: { value: "'primary'", computed: !1 }, required: !1 },
          size: { defaultValue: { value: "'medium'", computed: !1 }, required: !1 },
        },
      };
    },
    './components/icon/lib/icon/icon.styles.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        Zu: () => useIconStyles,
        bG: () => colorClasses,
      });
      var _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/@fluentui/tokens/lib/tokens.js',
        ),
        _griffel_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/@griffel/react/makeStyles.esm.js',
        ),
        _microsoft_arbutus_style_utilities__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__('./styles/utilities/lib/map-to-styles.js');
      const colorMap = {
          accent:
            _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorBrandForeground1,
          primary:
            _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground1,
          secondary:
            _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground2,
          tertiary:
            _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground3,
          quaternary:
            _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground4,
          negative:
            _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T
              .colorPaletteDarkOrangeForeground1,
          positive:
            _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T
              .colorPaletteGreenForeground1,
          warning:
            _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T
              .colorPaletteMarigoldForeground1,
          danger:
            _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T
              .colorPaletteDarkOrangeForeground1,
          info: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T
            .colorBrandForeground2,
          'accent-inverse':
            _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorBrandBackground,
          'primary-inverse':
            _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralBackground1,
          'secondary-inverse':
            _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralBackground2,
          'tertiary-inverse':
            _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralBackground3,
          'quaternary-inverse':
            _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralBackground4,
          'negative-inverse':
            _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T
              .colorPaletteDarkOrangeBackground1,
          'positive-inverse':
            _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T
              .colorPaletteGreenBackground1,
          'warning-inverse':
            _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T
              .colorPaletteMarigoldBackground1,
          'danger-inverse':
            _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T
              .colorPaletteDarkOrangeBackground1,
          'info-inverse':
            _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorBrandBackground2,
        },
        colorClasses = (0,
        _microsoft_arbutus_style_utilities__WEBPACK_IMPORTED_MODULE_1__.f)(
          colorMap,
          (color) => ({ color }),
        ),
        sizeClasses = {
          small: {
            height: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.spacingVerticalM,
          },
          medium: {
            height: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.spacingVerticalL,
          },
          large: {
            height:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.spacingVerticalXL,
          },
        },
        useIconStyles = (0, _griffel_react__WEBPACK_IMPORTED_MODULE_2__.Z)({
          ...colorClasses,
          ...sizeClasses,
          root: { width: 'auto' },
          inline: { display: 'inline-block', verticalAlign: 'middle' },
        });
    },
    './components/icon/lib/icon/icons/index.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { H: () => paths });
      var react = __webpack_require__('./node_modules/react/index.js');
      const ArrowRight = () =>
        react.createElement('path', {
          d: 'M9.13633 2.85585C8.87407 2.59743 8.452 2.60056 8.1936 2.86283C7.93513 3.1251 7.93827 3.5472 8.20053 3.80561L11.7808 7.3332H2.66667C2.29847 7.3332 2 7.63167 2 7.99987C2 8.36807 2.29848 8.66653 2.66667 8.66653H11.7764L8.20053 12.1898C7.93827 12.4482 7.93513 12.8703 8.1936 13.1326C8.452 13.3949 8.87407 13.398 9.13633 13.1396L13.7525 8.59133C14.0837 8.26493 14.0837 7.73053 13.7525 7.40413L9.13633 2.85585Z',
          fill: 'currentColor',
        });
      ArrowRight.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'ArrowRight',
      };
      const Check = () =>
        react.createElement('path', {
          d: 'M0 9.27233C0 9.12371 0.0270213 8.98522 0.081064 8.85687C0.141862 8.72177 0.219548 8.60693 0.314123 8.51235C0.415453 8.41102 0.530293 8.33333 0.658645 8.27929C0.793751 8.21849 0.935613 8.18809 1.08423 8.18809C1.37471 8.18809 1.62803 8.29618 1.84421 8.51235L5.40089 12.069L14.1457 3.32426C14.3618 3.10809 14.6185 3 14.9158 3C15.0644 3 15.2029 3.0304 15.3312 3.0912C15.4663 3.14524 15.5812 3.22293 15.6757 3.32426C15.7771 3.42559 15.8548 3.5438 15.9088 3.67891C15.9696 3.80726 16 3.94237 16 4.08423C16 4.38147 15.8919 4.63817 15.6757 4.85434L6.16086 14.3591C6.05953 14.4604 5.94131 14.5415 5.80621 14.6023C5.67786 14.6563 5.54275 14.6833 5.40089 14.6833C5.11041 14.6833 4.85708 14.5753 4.64091 14.3591L0.314123 10.0424C0.104708 9.83302 0 9.57632 0 9.27233Z',
          fill: 'currentColor',
        });
      Check.__docgenInfo = { description: '', methods: [], displayName: 'Check' };
      const ChevronRight = () =>
        react.createElement('path', {
          d: 'M5.73966 3.20041C5.43613 3.48226 5.41856 3.95681 5.70041 4.26034L9.22652 8L5.70041 11.7397C5.41856 12.0432 5.43613 12.5177 5.73967 12.7996C6.0432 13.0815 6.51775 13.0639 6.7996 12.7603L10.7996 8.51034C11.0668 8.22258 11.0668 7.77743 10.7996 7.48966L6.7996 3.23966C6.51775 2.93613 6.0432 2.91856 5.73966 3.20041Z',
          fill: 'currentColor',
        });
      ChevronRight.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'ChevronRight',
      };
      const Code = () =>
        react.createElement('path', {
          d: 'M5.39035 12.4075L9.3878 3.0711C9.53267 2.73262 9.92453 2.57572 10.2631 2.72064C10.5773 2.85521 10.7351 3.2027 10.64 3.52266L10.6135 3.59589L6.61606 12.9323C6.47114 13.2707 6.07928 13.4276 5.74081 13.2827C5.42651 13.1481 5.26877 12.8007 5.36387 12.4807L5.39035 12.4075ZM1.52859 7.52872L4.19526 4.86209C4.45561 4.60174 4.87772 4.60174 5.13807 4.86209C5.37839 5.10241 5.39688 5.48057 5.19353 5.7421L5.13807 5.8049L2.94281 8.00019L5.13807 10.1954C5.39842 10.4558 5.39842 10.8779 5.13807 11.1383C4.89775 11.3785 4.51959 11.3971 4.25807 11.1937L4.19526 11.1383L1.52859 8.47159C1.28827 8.23126 1.26979 7.85306 1.47313 7.59159L1.52859 7.52872ZM10.8614 4.86126C11.1017 4.62095 11.4799 4.60248 11.7414 4.80584L11.8042 4.86131L14.4714 7.52879C14.7119 7.76919 14.7302 8.14759 14.5266 8.40906L14.4711 8.47186L11.8039 11.1356C11.5433 11.3957 11.1212 11.3955 10.8611 11.1349C10.6209 10.8945 10.6027 10.5163 10.8062 10.2549L10.8617 10.1921L13.0569 7.99986L10.8613 5.80408C10.601 5.54371 10.601 5.1216 10.8614 4.86126Z',
          fill: 'currentColor',
        });
      Code.__docgenInfo = { description: '', methods: [], displayName: 'Code' };
      const Copy = () =>
        react.createElement('path', {
          d: 'M4.00029 4.08525L4 10.5C4 11.8255 5.03154 12.91 6.33562 12.9947L6.5 13L10.9144 13.0007C10.7083 13.5829 10.1528 14 9.5 14H6C4.34315 14 3 12.6569 3 11V5.5C3 4.84678 3.41754 4.29109 4.00029 4.08525ZM11.5 2C12.3284 2 13 2.67157 13 3.5V10.5C13 11.3284 12.3284 12 11.5 12H6.5C5.67157 12 5 11.3284 5 10.5V3.5C5 2.67157 5.67157 2 6.5 2H11.5ZM11.5 3H6.5C6.22386 3 6 3.22386 6 3.5V10.5C6 10.7761 6.22386 11 6.5 11H11.5C11.7761 11 12 10.7761 12 10.5V3.5C12 3.22386 11.7761 3 11.5 3Z',
          fill: 'currentColor',
        });
      Copy.__docgenInfo = { description: '', methods: [], displayName: 'Copy' };
      const Download = () =>
        react.createElement('path', {
          d: 'M13.2452 14.4998C13.4352 14.4999 13.6182 14.5721 13.757 14.7018C13.8959 14.8316 13.9803 15.0092 13.9933 15.1988C14.0063 15.3884 13.9467 15.5758 13.8268 15.7233C13.7069 15.8707 13.5355 15.9671 13.3472 15.993L13.2452 16H2.74987C2.55982 15.9999 2.37688 15.9277 2.23801 15.798C2.09914 15.6683 2.0147 15.4906 2.00175 15.301C1.98879 15.1114 2.04829 14.924 2.16823 14.7765C2.28816 14.6291 2.45958 14.5327 2.64785 14.5068L2.74987 14.4998H13.2452ZM8.00452 0.00100017C8.18561 0.00124928 8.36049 0.0670014 8.49689 0.186119C8.63329 0.305236 8.72199 0.469676 8.74661 0.649081L8.75362 0.751094V10.9454L11.72 7.975C11.8469 7.84781 12.0152 7.77039 12.1943 7.75681C12.3734 7.74323 12.5515 7.79439 12.6961 7.90099L12.7811 7.973C12.9084 8.10006 12.9858 8.26863 12.9992 8.44799C13.0126 8.62735 12.9611 8.80555 12.8541 8.95012L12.7821 9.03413L8.53859 13.2847L8.46858 13.3477L8.37657 13.4067L8.34056 13.4277L8.24955 13.4657L8.12954 13.4957L8.05953 13.5037L7.99952 13.5057C7.94876 13.5056 7.89815 13.5002 7.8485 13.4897L7.76849 13.4667C7.67343 13.4361 7.58563 13.3864 7.51046 13.3207L3.21992 9.03513C3.08537 8.90146 3.00645 8.72177 2.99905 8.53225C2.99165 8.34273 3.05633 8.15744 3.18005 8.01368C3.30378 7.86993 3.47737 7.77838 3.66588 7.75747C3.85439 7.73656 4.04382 7.78784 4.19605 7.90099L4.28006 7.974L7.25343 10.9414V0.750094C7.25343 0.551157 7.33246 0.360367 7.47313 0.219697C7.61379 0.0790275 7.80458 0 8.00352 0L8.00452 0.00100017Z',
          fill: 'currentColor',
        });
      Download.__docgenInfo = { description: '', methods: [], displayName: 'Download' };
      const Exclamation = () =>
        react.createElement('path', {
          d: 'M6.38422 7.80332V1.55517C6.38422 1.34172 6.42386 1.14046 6.50314 0.951401C6.58853 0.76234 6.70135 0.597675 6.84162 0.457404C6.98799 0.317134 7.15571 0.207357 7.34477 0.128073C7.53383 0.0426911 7.73509 0 7.94854 0C8.162 0 8.36326 0.0426911 8.55232 0.128073C8.74138 0.207357 8.90604 0.317134 9.04631 0.457404C9.19268 0.597675 9.30551 0.76234 9.38479 0.951401C9.47017 1.14046 9.51286 1.34172 9.51286 1.55517V7.80332C9.51286 8.01677 9.47017 8.21803 9.38479 8.40709C9.30551 8.59615 9.19268 8.76387 9.04631 8.91023C8.90604 9.0505 8.74138 9.16333 8.55232 9.24871C8.36326 9.328 8.162 9.36764 7.94854 9.36764C7.73509 9.36764 7.53383 9.328 7.34477 9.24871C7.15571 9.16333 6.98799 9.0505 6.84162 8.91023C6.70135 8.76387 6.58853 8.59615 6.50314 8.40709C6.42386 8.21803 6.38422 8.01677 6.38422 7.80332ZM6 14.0515C6 13.7831 6.05184 13.53 6.15552 13.2922C6.2592 13.0543 6.39947 12.847 6.57633 12.6701C6.75319 12.4932 6.9575 12.353 7.18925 12.2493C7.4271 12.1456 7.6802 12.0938 7.94854 12.0938C8.21689 12.0938 8.46693 12.1456 8.69869 12.2493C8.93654 12.353 9.14389 12.4932 9.32075 12.6701C9.49762 12.847 9.63789 13.0543 9.74157 13.2922C9.84525 13.53 9.89708 13.7831 9.89708 14.0515C9.89708 14.3198 9.84525 14.5729 9.74157 14.8107C9.63789 15.0425 9.49762 15.2468 9.32075 15.4237C9.14389 15.6005 8.93654 15.7408 8.69869 15.8445C8.46083 15.9482 8.21079 16 7.94854 16C7.6802 16 7.4271 15.9482 7.18925 15.8445C6.9575 15.7408 6.75319 15.6005 6.57633 15.4237C6.39947 15.2468 6.2592 15.0425 6.15552 14.8107C6.05184 14.5729 6 14.3198 6 14.0515Z',
          fill: 'currentColor',
        });
      Exclamation.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Exclamation',
      };
      const FullScreen = () =>
        react.createElement('path', {
          d: 'M3.33333 4C3.33333 3.63181 3.63181 3.33333 4 3.33333H5.33333C5.70152 3.33333 6 3.03485 6 2.66667C6 2.29848 5.70152 2 5.33333 2H4C2.89543 2 2 2.89543 2 4V5.33333C2 5.70152 2.29848 6 2.66667 6C3.03485 6 3.33333 5.70152 3.33333 5.33333V4ZM3.33333 12C3.33333 12.3682 3.63181 12.6667 4 12.6667H5.33333C5.70152 12.6667 6 12.9651 6 13.3333C6 13.7015 5.70152 14 5.33333 14H4C2.89543 14 2 13.1046 2 12V10.6667C2 10.2985 2.29848 10 2.66667 10C3.03485 10 3.33333 10.2985 3.33333 10.6667V12ZM12 3.33333C12.3682 3.33333 12.6667 3.63181 12.6667 4V5.33333C12.6667 5.70152 12.9651 6 13.3333 6C13.7015 6 14 5.70152 14 5.33333V4C14 2.89543 13.1046 2 12 2H10.6667C10.2985 2 10 2.29848 10 2.66667C10 3.03485 10.2985 3.33333 10.6667 3.33333H12ZM12.6667 12C12.6667 12.3682 12.3682 12.6667 12 12.6667H10.6667C10.2985 12.6667 10 12.9651 10 13.3333C10 13.7015 10.2985 14 10.6667 14H12C13.1046 14 14 13.1046 14 12V10.6667C14 10.2985 13.7015 10 13.3333 10C12.9651 10 12.6667 10.2985 12.6667 10.6667V12Z',
          fill: 'currentColor',
        });
      FullScreen.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'FullScreen',
      };
      const Link = () =>
        react.createElement('path', {
          d: 'M5.59845 4C5.80248 4.00023 5.99873 4.07835 6.1471 4.21842C6.29546 4.35849 6.38475 4.54992 6.3967 4.7536C6.40866 4.95729 6.34239 5.15785 6.21143 5.31431C6.08048 5.47078 5.89472 5.57133 5.69211 5.59543L5.59845 5.60103H3.99742C3.37229 5.60043 2.77156 5.84361 2.32288 6.27889C1.8742 6.71417 1.61293 7.30725 1.59459 7.93211C1.57624 8.55697 1.80227 9.16435 2.22464 9.62521C2.64701 10.0861 3.23244 10.3641 3.85652 10.4001L3.99742 10.4041H5.59845C5.80248 10.4044 5.99873 10.4825 6.1471 10.6226C6.29546 10.7626 6.38475 10.9541 6.3967 11.1577C6.40866 11.3614 6.34239 11.562 6.21143 11.7184C6.08048 11.8749 5.89472 11.9755 5.69211 11.9996L5.59845 12.0052H3.99742C2.95181 12.0038 1.94824 11.5934 1.20137 10.8616C0.454502 10.1298 0.0236398 9.13483 0.000944088 8.08947C-0.0217517 7.0441 0.365521 6.03136 1.07992 5.26786C1.79433 4.50436 2.77914 4.05073 3.8237 4.004L3.99742 4H5.59845ZM12.0026 4C13.0482 4.00135 14.0518 4.41181 14.7986 5.14358C15.5455 5.87536 15.9764 6.87034 15.9991 7.9157C16.0218 8.96107 15.6345 9.97381 14.9201 10.7373C14.2057 11.5008 13.2209 11.9544 12.1763 12.0012L12.0026 12.0052H10.4016C10.1975 12.0049 10.0013 11.9268 9.8529 11.7867C9.70454 11.6467 9.61525 11.4553 9.6033 11.2516C9.59134 11.0479 9.65761 10.8473 9.78857 10.6909C9.91952 10.5344 10.1053 10.4338 10.3079 10.4097L10.4016 10.4041H12.0026C12.6277 10.4047 13.2284 10.1616 13.6771 9.72628C14.1258 9.291 14.3871 8.69792 14.4054 8.07306C14.4238 7.4482 14.1977 6.84081 13.7754 6.37996C13.353 5.91911 12.7676 5.64111 12.1435 5.60504L12.0026 5.60103H10.4016C10.1975 5.60081 10.0013 5.52268 9.8529 5.38261C9.70454 5.24255 9.61525 5.05112 9.6033 4.84743C9.59134 4.64375 9.65761 4.44318 9.78857 4.28672C9.91952 4.13026 10.1053 4.0297 10.3079 4.0056L10.4016 4H12.0026ZM3.99742 7.20207H12.0026C12.2066 7.20229 12.4029 7.28042 12.5512 7.42049C12.6996 7.56055 12.7889 7.75198 12.8008 7.95567C12.8128 8.15935 12.7465 8.35992 12.6156 8.51638C12.4846 8.67284 12.2989 8.7734 12.0962 8.7975L12.0026 8.8031H3.99742C3.79338 8.80287 3.59713 8.72475 3.44877 8.58468C3.3004 8.44462 3.21112 8.25318 3.19916 8.0495C3.18721 7.84581 3.25348 7.64525 3.38443 7.48879C3.51539 7.33232 3.70115 7.23177 3.90376 7.20767L3.99742 7.20207H12.0026H3.99742Z',
          fill: 'currentColor',
        });
      Link.__docgenInfo = { description: '', methods: [], displayName: 'Link' };
      const Moon = () =>
        react.createElement('path', {
          d: 'M13.3505 11.3343C11.5093 14.5234 7.4314 15.6161 4.24227 13.7748C3.37379 13.2734 2.64267 12.5951 2.08581 11.7865C1.89963 11.5161 2.02007 11.1427 2.32913 11.0321C4.84075 10.1331 6.18595 9.09146 6.96653 7.60139C7.78833 6.03271 8.00067 4.3144 7.4258 1.95907C7.34633 1.63338 7.60353 1.32327 7.93833 1.34123C8.97633 1.39692 9.9904 1.69508 10.9099 2.22601C14.0991 4.06724 15.1917 8.14512 13.3505 11.3343Z',
          fill: 'currentColor',
        });
      Moon.__docgenInfo = { description: '', methods: [], displayName: 'Moon' };
      const Open = () =>
        react.createElement('path', {
          d: 'M3.71429 1.71429C3.18385 1.71429 2.67515 1.925 2.30007 2.30007C1.925 2.67515 1.71429 3.18385 1.71429 3.71429V12.2857C1.71429 13.3897 2.61029 14.2857 3.71429 14.2857H12.2857C12.8161 14.2857 13.3249 14.075 13.6999 13.6999C14.075 13.3249 14.2857 12.8161 14.2857 12.2857V10C14.2857 9.77267 14.376 9.55465 14.5368 9.39391C14.6975 9.23316 14.9155 9.14286 15.1429 9.14286C15.3702 9.14286 15.5882 9.23316 15.749 9.39391C15.9097 9.55465 16 9.77267 16 10V12.2857C16 13.2708 15.6087 14.2155 14.9121 14.9121C14.2155 15.6087 13.2708 16 12.2857 16H3.71429C2.7292 16 1.78445 15.6087 1.08789 14.9121C0.391325 14.2155 0 13.2708 0 12.2857V3.71429C0 2.7292 0.391325 1.78445 1.08789 1.08789C1.78445 0.391325 2.7292 0 3.71429 0H6C6.22733 0 6.44535 0.0903058 6.60609 0.251051C6.76684 0.411797 6.85714 0.629814 6.85714 0.857143C6.85714 1.08447 6.76684 1.30249 6.60609 1.46323C6.44535 1.62398 6.22733 1.71429 6 1.71429H3.71429ZM8.57143 0.857143C8.57143 0.629814 8.66174 0.411797 8.82248 0.251051C8.98323 0.0903058 9.20124 0 9.42857 0H15.1429C15.3702 0 15.5882 0.0903058 15.749 0.251051C15.9097 0.411797 16 0.629814 16 0.857143V6.57143C16 6.79876 15.9097 7.01677 15.749 7.17752C15.5882 7.33827 15.3702 7.42857 15.1429 7.42857C14.9155 7.42857 14.6975 7.33827 14.5368 7.17752C14.376 7.01677 14.2857 6.79876 14.2857 6.57143V2.92571L10.0343 7.17714C9.95581 7.26136 9.86119 7.3289 9.75604 7.37575C9.6509 7.4226 9.5374 7.44779 9.42231 7.44982C9.30722 7.45185 9.1929 7.43068 9.08617 7.38757C8.97945 7.34446 8.88249 7.28029 8.8011 7.1989C8.71971 7.11751 8.65554 7.02056 8.61243 6.91383C8.56932 6.8071 8.54815 6.69278 8.55018 6.57769C8.55221 6.4626 8.5774 6.3491 8.62425 6.24396C8.6711 6.13881 8.73864 6.04419 8.82286 5.96571L13.0743 1.71429H9.42857C9.20124 1.71429 8.98323 1.62398 8.82248 1.46323C8.66174 1.30249 8.57143 1.08447 8.57143 0.857143V0.857143Z',
          fill: 'currentColor',
        });
      Open.__docgenInfo = { description: '', methods: [], displayName: 'Open' };
      const SlideIn = () =>
        react.createElement('path', {
          d: 'M10.246 6.19922C10.0243 5.95297 9.64493 5.933 9.39862 6.15463L7.39862 7.95421C7.27219 8.06796 7.2 8.23003 7.2 8.40008C7.2 8.57013 7.27219 8.73219 7.39862 8.84595L9.39862 10.6455C9.64493 10.8672 10.0243 10.8472 10.246 10.601C10.4677 10.3547 10.4477 9.97542 10.2014 9.7538L9.36358 8.99995H12.2C12.5314 8.99995 12.8 8.73138 12.8 8.40009C12.8 8.06879 12.5314 7.80022 12.2 7.80022H9.36357L10.2014 7.04638C10.4477 6.82475 10.4677 6.44547 10.246 6.19922ZM1.52588e-06 12.6005C1.52588e-06 13.8153 0.984975 14.8 2.2 14.8L13.8 14.8C15.015 14.8 16 13.8153 16 12.6005V4.19949C16 2.98475 15.015 2 13.8 2H2.2C0.984975 2 0 2.98475 0 4.19949L1.52588e-06 12.6005ZM2.2 13.6003C1.64772 13.6003 1.2 13.1527 1.2 12.6005L1.2 4.19949C1.2 3.64734 1.64772 3.19972 2.2 3.19972L4.80332 3.19972L4.80332 13.6003H2.2ZM6.00332 13.6003L6.00332 3.19972L13.8 3.19972C14.3523 3.19972 14.8 3.64734 14.8 4.19949L14.8 12.6005C14.8 13.1527 14.3523 13.6003 13.8 13.6003L6.00332 13.6003Z',
          fill: 'currentColor',
        });
      SlideIn.__docgenInfo = { description: '', methods: [], displayName: 'SlideIn' };
      const SlideOut = () =>
        react.createElement('path', {
          d: 'M9.75402 10.601C9.9757 10.8472 10.3551 10.8672 10.6014 10.6456L12.6014 8.84599C12.7278 8.73223 12.8 8.57017 12.8 8.40012C12.8 8.23006 12.7278 8.068 12.6014 7.95424L10.6014 6.15465C10.3551 5.93303 9.9757 5.95299 9.75403 6.19924C9.53235 6.44548 9.55232 6.82477 9.79862 7.0464L10.6364 7.80025L7.8 7.80025C7.46863 7.80025 7.2 8.06881 7.2 8.40011C7.2 8.7314 7.46863 8.99997 7.8 8.99997H10.6364L9.79862 9.75382C9.55232 9.97544 9.53235 10.3547 9.75402 10.601ZM0 4.2C0 2.98497 0.984974 2 2.2 2H13.8C15.015 2 16 2.98497 16 4.2V12.6C16 13.815 15.015 14.8 13.8 14.8H2.2C0.984974 14.8 0 13.815 0 12.6V4.2ZM2.2 3.2C1.64772 3.2 1.2 3.64772 1.2 4.2V12.6C1.2 13.1523 1.64772 13.6 2.2 13.6H4.80342V3.2H2.2ZM6.00342 3.2V13.6H13.8C14.3523 13.6 14.8 13.1523 14.8 12.6V4.2C14.8 3.64772 14.3523 3.2 13.8 3.2H6.00342Z',
          fill: 'currentColor',
        });
      SlideOut.__docgenInfo = { description: '', methods: [], displayName: 'SlideOut' };
      const Sun = () =>
        react.createElement(
          react.Fragment,
          null,
          react.createElement(
            'g',
            { clipPath: 'url(#arbutus-sun-icon-clip0_212_184)' },
            react.createElement('path', {
              d: 'M8 0C8.33136 0 8.6 0.268632 8.6 0.6V1.8C8.6 2.13137 8.33136 2.4 8 2.4C7.66864 2.4 7.4 2.13137 7.4 1.8V0.6C7.4 0.268632 7.66864 0 8 0ZM12 8C12 10.2091 10.2091 12 8 12C5.79086 12 4 10.2091 4 8C4 5.79086 5.79086 4 8 4C10.2091 4 12 5.79086 12 8ZM15.4 8.6C15.7314 8.6 16 8.33136 16 8C16 7.66864 15.7314 7.4 15.4 7.4H14.2C13.8686 7.4 13.6 7.66864 13.6 8C13.6 8.33136 13.8686 8.6 14.2 8.6H15.4ZM8 13.6C8.33136 13.6 8.6 13.8686 8.6 14.2V15.4C8.6 15.7314 8.33136 16 8 16C7.66864 16 7.4 15.7314 7.4 15.4V14.2C7.4 13.8686 7.66864 13.6 8 13.6ZM1.8 8.6C2.13137 8.6 2.4 8.33136 2.4 8C2.4 7.66864 2.13137 7.4 1.8 7.4H0.6C0.268632 7.4 0 7.66864 0 8C0 8.33136 0.268632 8.6 0.6 8.6H1.8ZM1.77574 1.77603C2.01005 1.54172 2.38995 1.54172 2.62426 1.77603L3.82426 2.97603C4.05858 3.21035 4.05858 3.59025 3.82426 3.82456C3.58995 4.05888 3.21005 4.05888 2.97574 3.82456L1.77574 2.62456C1.54142 2.39025 1.54142 2.01035 1.77574 1.77603ZM2.62426 14.2246C2.38995 14.4589 2.01005 14.4589 1.77574 14.2246C1.54142 13.9902 1.54142 13.6103 1.77574 13.376L2.97574 12.176C3.21005 11.9417 3.58995 11.9417 3.82426 12.176C4.05858 12.4103 4.05858 12.7902 3.82426 13.0246L2.62426 14.2246ZM14.2242 1.77603C13.9899 1.54172 13.6101 1.54172 13.3758 1.77603L12.1758 2.97603C11.9414 3.21035 11.9414 3.59025 12.1758 3.82456C12.4101 4.05888 12.7899 4.05888 13.0242 3.82456L14.2242 2.62456C14.4586 2.39025 14.4586 2.01035 14.2242 1.77603ZM13.3758 14.2246C13.6101 14.4589 13.9899 14.4589 14.2242 14.2246C14.4586 13.9902 14.4586 13.6103 14.2242 13.376L13.0242 12.176C12.7899 11.9417 12.4101 11.9417 12.1758 12.176C11.9414 12.4103 11.9414 12.7902 12.1758 13.0246L13.3758 14.2246Z',
              fill: 'currentColor',
            }),
          ),
          react.createElement(
            'defs',
            null,
            react.createElement(
              'clipPath',
              { id: 'arbutus-sun-icon-clip0_212_184' },
              react.createElement('rect', { width: '16', height: '16', fill: 'white' }),
            ),
          ),
        );
      Sun.__docgenInfo = { description: '', methods: [], displayName: 'Sun' };
      const X = () =>
        react.createElement('path', {
          d: 'M7.9956 9.33187L3.6 13.7363C3.41832 13.9179 3.1956 14.0088 2.93187 14.0088C2.66813 14.0088 2.44542 13.9209 2.26374 13.7451C2.08791 13.5634 2 13.3407 2 13.0769C2 12.8132 2.09084 12.5905 2.27253 12.4088L6.66813 8.0044L2.27253 3.60879C2.09084 3.42711 2 3.20733 2 2.94945C2 2.82051 2.02344 2.69744 2.07033 2.58022C2.11722 2.463 2.18168 2.36337 2.26374 2.28132C2.35165 2.19927 2.45128 2.1348 2.56264 2.08791C2.67399 2.03516 2.79707 2.00879 2.93187 2.00879C3.18974 2.00879 3.40952 2.09963 3.59121 2.28132L7.9956 6.68571L12.3912 2.28132C12.5788 2.09377 12.8015 2 13.0593 2C13.1883 2 13.3084 2.02637 13.4198 2.07912C13.537 2.12601 13.6366 2.19341 13.7187 2.28132C13.8066 2.36337 13.874 2.463 13.9209 2.58022C13.9678 2.69158 13.9912 2.81172 13.9912 2.94066C13.9912 3.19853 13.9004 3.41832 13.7187 3.6L9.31429 8.0044L13.7187 12.4088C13.9062 12.5963 14 12.819 14 13.0769C14 13.2059 13.9736 13.326 13.9209 13.4374C13.874 13.5487 13.8066 13.6484 13.7187 13.7363C13.6366 13.8183 13.537 13.8857 13.4198 13.9385C13.3084 13.9853 13.1883 14.0088 13.0593 14.0088C12.7956 14.0088 12.5729 13.9179 12.3912 13.7363L7.9956 9.33187Z',
          fill: 'currentColor',
        });
      X.__docgenInfo = { description: '', methods: [], displayName: 'X' };
      const paths = {
        'arrow-right': ArrowRight,
        'chevron-right': ChevronRight,
        'full-screen': FullScreen,
        'slide-in': SlideIn,
        'slide-out': SlideOut,
        check: Check,
        code: Code,
        copy: Copy,
        download: Download,
        exclamation: Exclamation,
        link: Link,
        moon: Moon,
        open: Open,
        sun: Sun,
        x: X,
      };
    },
    './styles/utilities/lib/map-to-styles.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      function mapToStyles(map, styleFunction) {
        return Object.entries(map).reduce(
          (acc, [key, value]) => ((acc[key] = styleFunction(value)), acc),
          {},
        );
      }
      __webpack_require__.d(__webpack_exports__, { f: () => mapToStyles });
    },
  },
]);
