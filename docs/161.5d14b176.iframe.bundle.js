'use strict';
(self.webpackChunkarbutus = self.webpackChunkarbutus || []).push([
  [161],
  {
    './node_modules/@fluentui/react-spinner/lib/components/Spinner/Spinner.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { $: () => Spinner });
      var react = __webpack_require__('./node_modules/react/index.js'),
        useId = __webpack_require__(
          './node_modules/@fluentui/react-utilities/lib/hooks/useId.js',
        ),
        getNativeElementProps = __webpack_require__(
          './node_modules/@fluentui/react-utilities/lib/utils/getNativeElementProps.js',
        );
      var resolveShorthand = __webpack_require__(
        './node_modules/@fluentui/react-utilities/lib/compose/resolveShorthand.js',
      );
      var createElement = __webpack_require__(
          './node_modules/@fluentui/react-jsx-runtime/lib/createElement.js',
        ),
        getSlotsNext = __webpack_require__(
          './node_modules/@fluentui/react-utilities/lib/compose/getSlotsNext.js',
        );
      var _styles_esm = __webpack_require__(
          './node_modules/@griffel/react/__styles.esm.js',
        ),
        mergeClasses_esm = __webpack_require__(
          './node_modules/@griffel/core/mergeClasses.esm.js',
        );
      const labelClassNames_root = 'fui-Label',
        labelClassNames_required = 'fui-Label__required',
        useStyles = (0, _styles_esm.s)(
          {
            root: { Bahqtrf: 'fk6fouc', sj55zd: 'f19n0e5' },
            disabled: { sj55zd: 'f1s2aq7o' },
            required: { sj55zd: 'f1whyuy6', uwmqm3: ['fycuoez', 'f8wuabp'] },
            requiredDisabled: { sj55zd: 'f1s2aq7o' },
            small: { Be2twd7: 'fy9rknc', Bg96gwp: 'fwrc4pm' },
            medium: { Be2twd7: 'fkhj508', Bg96gwp: 'f1i3iumi' },
            large: { Be2twd7: 'fod5ikn', Bg96gwp: 'faaz57k', Bhrd7zp: 'fl43uef' },
            semibold: { Bhrd7zp: 'fl43uef' },
          },
          {
            d: [
              '.fk6fouc{font-family:var(--fontFamilyBase);}',
              '.f19n0e5{color:var(--colorNeutralForeground1);}',
              '.f1s2aq7o{color:var(--colorNeutralForegroundDisabled);}',
              '.f1whyuy6{color:var(--colorPaletteRedForeground3);}',
              '.fycuoez{padding-left:4px;}',
              '.f8wuabp{padding-right:4px;}',
              '.fy9rknc{font-size:var(--fontSizeBase200);}',
              '.fwrc4pm{line-height:var(--lineHeightBase200);}',
              '.fkhj508{font-size:var(--fontSizeBase300);}',
              '.f1i3iumi{line-height:var(--lineHeightBase300);}',
              '.fod5ikn{font-size:var(--fontSizeBase400);}',
              '.faaz57k{line-height:var(--lineHeightBase400);}',
              '.fl43uef{font-weight:var(--fontWeightSemibold);}',
            ],
          },
        );
      var CustomStyleHooksContext = __webpack_require__(
        './node_modules/@fluentui/react-shared-contexts/lib/CustomStyleHooksContext/CustomStyleHooksContext.js',
      );
      const Label = react.forwardRef((props, ref) => {
        const state = ((props, ref) => {
          const {
            disabled = !1,
            required = !1,
            weight = 'regular',
            size = 'medium',
          } = props;
          return {
            disabled,
            required: (0, resolveShorthand.O)(
              !0 === required ? '*' : required || void 0,
              { defaultProps: { 'aria-hidden': 'true' } },
            ),
            weight,
            size,
            components: { root: 'label', required: 'span' },
            root: (0, getNativeElementProps.n)('label', { ref, ...props }),
          };
        })(props, ref);
        return (
          ((state) => {
            const styles = useStyles();
            (state.root.className = (0, mergeClasses_esm.z)(
              labelClassNames_root,
              styles.root,
              state.disabled && styles.disabled,
              styles[state.size],
              'semibold' === state.weight && styles.semibold,
              state.root.className,
            )),
              state.required &&
                (state.required.className = (0, mergeClasses_esm.z)(
                  labelClassNames_required,
                  styles.required,
                  state.disabled && styles.requiredDisabled,
                  state.required.className,
                ));
          })(state),
          (0, CustomStyleHooksContext.oj)('useLabelStyles_unstable')(state),
          ((state) => {
            const { slots, slotProps } = (0, getSlotsNext.D)(state);
            return (0, createElement.a)(
              slots.root,
              slotProps.root,
              state.root.children,
              slots.required && (0, createElement.a)(slots.required, slotProps.required),
            );
          })(state)
        );
      });
      Label.displayName = 'Label';
      const DefaultSvg = () =>
          react.createElement(
            'svg',
            { className: 'fui-Spinner__Progressbar' },
            react.createElement('circle', { className: 'fui-Spinner__Track' }),
            react.createElement('circle', { className: 'fui-Spinner__Tail' }),
          ),
        useSpinner_unstable = (props, ref) => {
          const {
              appearance = 'primary',
              labelPosition = 'after',
              size = 'medium',
              delay = 0,
            } = props,
            baseId = (0, useId.Me)('spinner'),
            { role = 'progressbar', tabIndex, ...rest } = props,
            nativeRoot = (0, getNativeElementProps.n)('div', { ref, role, ...rest }, [
              'size',
            ]),
            [isVisible, setIsVisible] = react.useState(!0),
            [setDelayTimeout, clearDelayTimeout] = (function useTimeout() {
              const [timeout] = react.useState(() => ({
                id: void 0,
                set: (fn, delay) => {
                  timeout.clear(), (timeout.id = setTimeout(fn, delay));
                },
                clear: () => {
                  void 0 !== timeout.id &&
                    (clearTimeout(timeout.id), (timeout.id = void 0));
                },
              }));
              return (
                react.useEffect(() => timeout.clear, [timeout]),
                [timeout.set, timeout.clear]
              );
            })();
          react.useEffect(() => {
            if (!(delay <= 0))
              return (
                setIsVisible(!1),
                setDelayTimeout(() => {
                  setIsVisible(!0);
                }, delay),
                () => {
                  clearDelayTimeout();
                }
              );
          }, [setDelayTimeout, clearDelayTimeout, delay]);
          const labelShorthand = (0, resolveShorthand.O)(props.label, {
              defaultProps: { id: baseId },
              required: !1,
            }),
            spinnerShortHand = (0, resolveShorthand.O)(props.spinner, {
              required: !0,
              defaultProps: { children: react.createElement(DefaultSvg, null), tabIndex },
            });
          labelShorthand &&
            nativeRoot &&
            !nativeRoot['aria-labelledby'] &&
            (nativeRoot['aria-labelledby'] = labelShorthand.id);
          return {
            appearance,
            delay,
            labelPosition,
            size,
            shouldRenderSpinner: isVisible,
            components: { root: 'div', spinner: 'span', label: Label },
            root: nativeRoot,
            spinner: spinnerShortHand,
            label: labelShorthand,
          };
        },
        spinnerClassNames_root = 'fui-Spinner',
        spinnerClassNames_spinner = 'fui-Spinner__spinner',
        spinnerClassNames_label = 'fui-Spinner__label',
        useRootStyles = (0, _styles_esm.s)(
          {
            root: {
              mc9l5x: 'f22iagw',
              Bt984gj: 'f122n59',
              Brf1p80: 'f4d9j23',
              Bg96gwp: 'fez10in',
              i8kkvl: 'f4px1ci',
              Belr9w4: 'fn67r4l',
            },
            horizontal: { Beiy3e4: 'f1063pyq' },
            vertical: { Beiy3e4: 'f1vx9l62' },
          },
          {
            d: [
              '.f22iagw{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}',
              '.f122n59{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}',
              '.f4d9j23{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;}',
              '.fez10in{line-height:0;}',
              '.f4px1ci{-webkit-column-gap:8px;column-gap:8px;}',
              '.fn67r4l{row-gap:8px;}',
              '.f1063pyq{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}',
              '.f1vx9l62{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}',
            ],
          },
        ),
        useLoaderStyles = (0, _styles_esm.s)(
          {
            spinnerSVG: {
              B3aqqti: 'f1or16p5',
              Brovlpu: 'f1grzc83',
              Bxa1mx5: 'f19shzzi',
              Bwaue66: ['f5tbecn', 'f15qb8s7'],
              fyp1ls: 'fn4mtlg',
              ag6ruv: 'f1y80fxs',
              osj692: 'f1r2crtq',
              aq5vjd: 'f1wsi8sr',
              tlu9e1: 'f1bkm2qd',
              J3u96z: 'f1urqz7h',
              d32isg: 'f1da2vov',
              Bsvqbuc: 'f11rfva0',
              b3s3i5: 'f1exc66',
            },
            tiny: {
              Bah9ito: 'f1j4wmu2',
              ut6tcf: 'f1vppzuq',
              B7p06xz: 'fv1u54w',
              B807ibg: 'fngtx1d',
            },
            'extra-small': {
              Bah9ito: 'fmpqlna',
              ut6tcf: 'f15z5jzu',
              B7p06xz: 'fv1u54w',
              B807ibg: 'fadawes',
            },
            small: {
              Bah9ito: 'fo52gbo',
              ut6tcf: 'f1b41i3v',
              B7p06xz: 'fv1u54w',
              B807ibg: 'f1xqyyrl',
            },
            medium: {
              Bah9ito: 'f1aiqagr',
              ut6tcf: 'f1wtx80b',
              B7p06xz: 'f1flujpd',
              B807ibg: 'f1u06hy7',
            },
            large: {
              Bah9ito: 'f1trdq7b',
              ut6tcf: 'f9e0mc5',
              B7p06xz: 'f1flujpd',
              B807ibg: 'f13pmvhl',
            },
            'extra-large': {
              Bah9ito: 'f89rf2a',
              ut6tcf: 'f1w2xg3q',
              B7p06xz: 'f1flujpd',
              B807ibg: 'fmn74v6',
            },
            huge: {
              Bah9ito: 'f1rx7k5y',
              ut6tcf: 'f1vtyt49',
              B7p06xz: 'f1owbg48',
              B807ibg: 'f1fr1izd',
            },
          },
          {
            f: [
              '.f1or16p5:focus{outline-width:3px;}',
              '.f1grzc83:focus{outline-style:solid;}',
              '.f19shzzi:focus{outline-color:transparent;}',
            ],
            k: [
              '@-webkit-keyframes fb7n1on{0%{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}',
              '@-webkit-keyframes f1gx3jof{0%{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(-360deg);-moz-transform:rotate(-360deg);-ms-transform:rotate(-360deg);transform:rotate(-360deg);}}',
              '@keyframes fb7n1on{0%{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}',
              '@keyframes f1gx3jof{0%{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(-360deg);-moz-transform:rotate(-360deg);-ms-transform:rotate(-360deg);transform:rotate(-360deg);}}',
            ],
            d: [
              '.f5tbecn>svg{-webkit-animation-name:fb7n1on;animation-name:fb7n1on;}',
              '.f15qb8s7>svg{-webkit-animation-name:f1gx3jof;animation-name:f1gx3jof;}',
              '.fn4mtlg>svg{-webkit-animation-duration:3s;animation-duration:3s;}',
              '.f1y80fxs>svg{-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;}',
              '.f1r2crtq>svg{-webkit-animation-timing-function:linear;animation-timing-function:linear;}',
              '.f1wsi8sr>svg{background-color:transparent;}',
              '.f1da2vov>svg>circle{cx:50%;}',
              '.f11rfva0>svg>circle{cy:50%;}',
              '.f1exc66>svg>circle{fill:none;}',
              '.f1j4wmu2>svg{height:20px;}',
              '.f1vppzuq>svg{width:20px;}',
              '.fv1u54w>svg>circle{stroke-width:var(--strokeWidthThick);}',
              '.fngtx1d>svg>circle{r:9px;}',
              '.fmpqlna>svg{height:24px;}',
              '.f15z5jzu>svg{width:24px;}',
              '.fadawes>svg>circle{r:11px;}',
              '.fo52gbo>svg{height:28px;}',
              '.f1b41i3v>svg{width:28px;}',
              '.f1xqyyrl>svg>circle{r:13px;}',
              '.f1aiqagr>svg{height:32px;}',
              '.f1wtx80b>svg{width:32px;}',
              '.f1flujpd>svg>circle{stroke-width:var(--strokeWidthThicker);}',
              '.f1u06hy7>svg>circle{r:14.5px;}',
              '.f1trdq7b>svg{height:36px;}',
              '.f9e0mc5>svg{width:36px;}',
              '.f13pmvhl>svg>circle{r:16.5px;}',
              '.f89rf2a>svg{height:40px;}',
              '.f1w2xg3q>svg{width:40px;}',
              '.fmn74v6>svg>circle{r:18.5px;}',
              '.f1rx7k5y>svg{height:44px;}',
              '.f1vtyt49>svg{width:44px;}',
              '.f1owbg48>svg>circle{stroke-width:var(--strokeWidthThickest);}',
              '.f1fr1izd>svg>circle{r:20px;}',
            ],
            m: [
              [
                '@media screen and (prefers-reduced-motion: reduce){.f1bkm2qd>svg{-webkit-animation-duration:0.01ms;animation-duration:0.01ms;}}',
                { m: 'screen and (prefers-reduced-motion: reduce)' },
              ],
              [
                '@media screen and (prefers-reduced-motion: reduce){.f1urqz7h>svg{-webkit-animation-iteration-count:1;animation-iteration-count:1;}}',
                { m: 'screen and (prefers-reduced-motion: reduce)' },
              ],
            ],
          },
        ),
        useTrackStyles = (0, _styles_esm.s)(
          {
            inverted: {
              gwg7kz: 'f1jvpmnu',
              Bvrehnu: 'fq8a5sv',
              Bidp6o: 'f1b4lwqj',
              cq3kgi: 'f1najlst',
              Btwiser: 'fjxod4',
              B8001xd: 'fu3xdw0',
              Bdordwa: ['f1ttdh6v', 'fmyjox0'],
              Bo2mdfu: 'f1eseayc',
              E10nrc: 'folzdkc',
              Bwl7w15: 'fhlfkde',
              Bksq7rz: 'f1esql28',
            },
            primary: {
              gwg7kz: 'f11ditju',
              B8k2rxp: 'f1m9nikz',
              Bvrehnu: 'fq8a5sv',
              Bidp6o: 'f1b4lwqj',
              cq3kgi: 'f1najlst',
              Btwiser: 'fjxod4',
              B8001xd: 'fu3xdw0',
              Bdordwa: ['f1ttdh6v', 'fmyjox0'],
              Bo2mdfu: 'f1eseayc',
              E10nrc: 'folzdkc',
              Bwl7w15: 'fhlfkde',
              Bksq7rz: 'f61h2gu',
              y14cdu: 'flglbw1',
            },
          },
          {
            d: [
              '.f1jvpmnu>svg>circle.fui-Spinner__Tail{stroke:var(--colorNeutralStrokeOnBrand2);}',
              '.fq8a5sv>svg>circle.fui-Spinner__Tail{-webkit-animation-name:f1v1ql0f;animation-name:f1v1ql0f;}',
              '.f1b4lwqj>svg>circle.fui-Spinner__Tail{-webkit-animation-duration:1.5s;animation-duration:1.5s;}',
              '.f1najlst>svg>circle.fui-Spinner__Tail{-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;}',
              '.fjxod4>svg>circle.fui-Spinner__Tail{-webkit-animation-timing-function:var(--curveEasyEase);animation-timing-function:var(--curveEasyEase);}',
              '.fu3xdw0>svg>circle.fui-Spinner__Tail{stroke-linecap:round;}',
              '.f1ttdh6v>svg>circle.fui-Spinner__Tail{-webkit-transform:rotate(-90deg);-moz-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);}',
              '.fmyjox0>svg>circle.fui-Spinner__Tail{-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);}',
              '.f1eseayc>svg>circle.fui-Spinner__Tail{transform-origin:50% 50%;}',
              '.f1esql28>svg>circle.fui-Spinner__Track{stroke:rgba(255, 255, 255, 0.2);}',
              '.f11ditju>svg>circle.fui-Spinner__Tail{stroke:var(--colorBrandStroke1);}',
              '.f61h2gu>svg>circle.fui-Spinner__Track{stroke:var(--colorBrandStroke2);}',
            ],
            k: [
              '@-webkit-keyframes f1v1ql0f{0%{stroke-dasharray:1,150;stroke-dashoffset:0;}50%{stroke-dasharray:90,150;stroke-dashoffset:-35;}100%{stroke-dasharray:90,150;stroke-dashoffset:-124;}}',
              '@keyframes f1v1ql0f{0%{stroke-dasharray:1,150;stroke-dashoffset:0;}50%{stroke-dasharray:90,150;stroke-dashoffset:-35;}100%{stroke-dasharray:90,150;stroke-dashoffset:-124;}}',
            ],
            m: [
              [
                '@media screen and (prefers-reduced-motion: reduce){.folzdkc>svg>circle.fui-Spinner__Tail{-webkit-animation-duration:0.01ms;animation-duration:0.01ms;}}',
                { m: 'screen and (prefers-reduced-motion: reduce)' },
              ],
              [
                '@media screen and (prefers-reduced-motion: reduce){.fhlfkde>svg>circle.fui-Spinner__Tail{-webkit-animation-iteration-count:1;animation-iteration-count:1;}}',
                { m: 'screen and (prefers-reduced-motion: reduce)' },
              ],
              [
                '@media screen and (forced-colors: active){.f1m9nikz>svg>circle.fui-Spinner__Tail{stroke:var(--colorNeutralStrokeOnBrand2);}}',
                { m: 'screen and (forced-colors: active)' },
              ],
              [
                '@media screen and (prefers-reduced-motion: reduce){.folzdkc>svg>circle.fui-Spinner__Tail{-webkit-animation-duration:0.01ms;animation-duration:0.01ms;}}',
                { m: 'screen and (prefers-reduced-motion: reduce)' },
              ],
              [
                '@media screen and (prefers-reduced-motion: reduce){.fhlfkde>svg>circle.fui-Spinner__Tail{-webkit-animation-iteration-count:1;animation-iteration-count:1;}}',
                { m: 'screen and (prefers-reduced-motion: reduce)' },
              ],
              [
                '@media screen and (forced-colors: active){.flglbw1>svg>circle.fui-Spinner__Track{stroke:var(--colorNeutralBackgroundInverted);}}',
                { m: 'screen and (forced-colors: active)' },
              ],
            ],
          },
        ),
        useLabelStyles = (0, _styles_esm.s)(
          {
            inverted: { sj55zd: 'f15aqcq' },
            primary: {},
            tiny: {
              Bahqtrf: 'fk6fouc',
              Be2twd7: 'fkhj508',
              Bhrd7zp: 'figsok6',
              Bg96gwp: 'f1i3iumi',
            },
            'extra-small': {
              Bahqtrf: 'fk6fouc',
              Be2twd7: 'fkhj508',
              Bhrd7zp: 'figsok6',
              Bg96gwp: 'f1i3iumi',
            },
            small: {
              Bahqtrf: 'fk6fouc',
              Be2twd7: 'fkhj508',
              Bhrd7zp: 'figsok6',
              Bg96gwp: 'f1i3iumi',
            },
            medium: {
              Bahqtrf: 'fk6fouc',
              Be2twd7: 'fod5ikn',
              Bhrd7zp: 'fl43uef',
              Bg96gwp: 'faaz57k',
            },
            large: {
              Bahqtrf: 'fk6fouc',
              Be2twd7: 'fod5ikn',
              Bhrd7zp: 'fl43uef',
              Bg96gwp: 'faaz57k',
            },
            'extra-large': {
              Bahqtrf: 'fk6fouc',
              Be2twd7: 'fod5ikn',
              Bhrd7zp: 'fl43uef',
              Bg96gwp: 'faaz57k',
            },
            huge: {
              Bahqtrf: 'fk6fouc',
              Be2twd7: 'f1pp30po',
              Bhrd7zp: 'fl43uef',
              Bg96gwp: 'f106mvju',
            },
          },
          {
            d: [
              '.f15aqcq{color:rgba(255, 255, 255, 1);}',
              '.fk6fouc{font-family:var(--fontFamilyBase);}',
              '.fkhj508{font-size:var(--fontSizeBase300);}',
              '.figsok6{font-weight:var(--fontWeightRegular);}',
              '.f1i3iumi{line-height:var(--lineHeightBase300);}',
              '.fod5ikn{font-size:var(--fontSizeBase400);}',
              '.fl43uef{font-weight:var(--fontWeightSemibold);}',
              '.faaz57k{line-height:var(--lineHeightBase400);}',
              '.f1pp30po{font-size:var(--fontSizeBase500);}',
              '.f106mvju{line-height:var(--lineHeightBase500);}',
            ],
          },
        ),
        Spinner = react.forwardRef((props, ref) => {
          const state = useSpinner_unstable(props, ref);
          return (
            ((state) => {
              const { labelPosition, size, appearance = 'primary' } = state,
                rootStyles = useRootStyles(),
                spinnerStyles = useLoaderStyles(),
                labelStyles = useLabelStyles(),
                trackStyles = useTrackStyles();
              (state.root.className = (0, mergeClasses_esm.z)(
                spinnerClassNames_root,
                rootStyles.root,
                ('above' === labelPosition || 'below' === labelPosition) &&
                  rootStyles.vertical,
                ('before' === labelPosition || 'after' === labelPosition) &&
                  rootStyles.horizontal,
                state.root.className,
              )),
                state.spinner &&
                  (state.spinner.className = (0, mergeClasses_esm.z)(
                    spinnerClassNames_spinner,
                    spinnerStyles.spinnerSVG,
                    spinnerStyles[size],
                    trackStyles[appearance],
                    state.spinner.className,
                  )),
                state.label &&
                  (state.label.className = (0, mergeClasses_esm.z)(
                    spinnerClassNames_label,
                    labelStyles[size],
                    labelStyles[appearance],
                    state.label.className,
                  ));
            })(state),
            (0, CustomStyleHooksContext.oj)('useSpinnerStyles_unstable')(state),
            ((state) => {
              const { slots, slotProps } = (0, getSlotsNext.D)(state),
                { labelPosition, shouldRenderSpinner } = state;
              return (0, createElement.a)(
                slots.root,
                slotProps.root,
                slots.label &&
                  shouldRenderSpinner &&
                  ('above' === labelPosition || 'before' === labelPosition) &&
                  (0, createElement.a)(slots.label, slotProps.label),
                slots.spinner &&
                  shouldRenderSpinner &&
                  (0, createElement.a)(slots.spinner, slotProps.spinner),
                slots.label &&
                  shouldRenderSpinner &&
                  ('below' === labelPosition || 'after' === labelPosition) &&
                  (0, createElement.a)(slots.label, slotProps.label),
              );
            })(state)
          );
        });
      Spinner.displayName = 'Spinner';
    },
    './node_modules/@fluentui/react-text/lib/components/Text/Text.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { x: () => Text });
      var react = __webpack_require__('./node_modules/react/index.js'),
        getNativeElementProps = __webpack_require__(
          './node_modules/@fluentui/react-utilities/lib/utils/getNativeElementProps.js',
        );
      var createElement = __webpack_require__(
          './node_modules/@fluentui/react-jsx-runtime/lib/createElement.js',
        ),
        getSlotsNext = __webpack_require__(
          './node_modules/@fluentui/react-utilities/lib/compose/getSlotsNext.js',
        );
      var _styles_esm = __webpack_require__(
          './node_modules/@griffel/react/__styles.esm.js',
        ),
        mergeClasses_esm = __webpack_require__(
          './node_modules/@griffel/core/mergeClasses.esm.js',
        );
      const textClassNames_root = 'fui-Text',
        useStyles = (0, _styles_esm.s)(
          {
            root: {
              Bahqtrf: 'fk6fouc',
              Be2twd7: 'fkhj508',
              Bg96gwp: 'f1i3iumi',
              Bhrd7zp: 'figsok6',
              fsow6f: 'fpgzoln',
              mc9l5x: 'f1w7gpdv',
              Huce71: 'f6juhto',
              B68tc82: 'f1mtd64y',
              Bmxbyg5: 'f1y7q3j9',
              ygn44y: 'f2jf649',
            },
            nowrap: { Huce71: 'fz5stix', B68tc82: 'f1p9o1ba', Bmxbyg5: 'f1sil6mw' },
            truncate: { ygn44y: 'f1cmbuwj' },
            block: { mc9l5x: 'ftgm304' },
            italic: { B80ckks: 'f1j4dglz' },
            underline: { w71qe1: 'f13mvf36' },
            strikethrough: { w71qe1: 'fv5q2k7' },
            strikethroughUnderline: { w71qe1: 'f1drk4o6' },
            base100: { Be2twd7: 'f13mqy1h', Bg96gwp: 'fcpl73t' },
            base200: { Be2twd7: 'fy9rknc', Bg96gwp: 'fwrc4pm' },
            base400: { Be2twd7: 'fod5ikn', Bg96gwp: 'faaz57k' },
            base500: { Be2twd7: 'f1pp30po', Bg96gwp: 'f106mvju' },
            base600: { Be2twd7: 'f1x0m3f5', Bg96gwp: 'fb86gi6' },
            hero700: { Be2twd7: 'fojgt09', Bg96gwp: 'fcen8rp' },
            hero800: { Be2twd7: 'fccw675', Bg96gwp: 'f1ebx5kk' },
            hero900: { Be2twd7: 'f15afnhw', Bg96gwp: 'fr3w3wp' },
            hero1000: { Be2twd7: 'fpyltcb', Bg96gwp: 'f1ivgwrt' },
            monospace: { Bahqtrf: 'f1fedwem' },
            numeric: { Bahqtrf: 'f1uq0ln5' },
            weightMedium: { Bhrd7zp: 'fdj6btp' },
            weightSemibold: { Bhrd7zp: 'fl43uef' },
            weightBold: { Bhrd7zp: 'flh3ekv' },
            alignCenter: { fsow6f: 'f17mccla' },
            alignEnd: { fsow6f: 'f12ymhq5' },
            alignJustify: { fsow6f: 'f1j59e10' },
          },
          {
            d: [
              '.fk6fouc{font-family:var(--fontFamilyBase);}',
              '.fkhj508{font-size:var(--fontSizeBase300);}',
              '.f1i3iumi{line-height:var(--lineHeightBase300);}',
              '.figsok6{font-weight:var(--fontWeightRegular);}',
              '.fpgzoln{text-align:start;}',
              '.f1w7gpdv{display:inline;}',
              '.f6juhto{white-space:normal;}',
              '.f1mtd64y{overflow-x:visible;}',
              '.f1y7q3j9{overflow-y:visible;}',
              '.f2jf649{text-overflow:clip;}',
              '.fz5stix{white-space:nowrap;}',
              '.f1p9o1ba{overflow-x:hidden;}',
              '.f1sil6mw{overflow-y:hidden;}',
              '.f1cmbuwj{text-overflow:ellipsis;}',
              '.ftgm304{display:block;}',
              '.f1j4dglz{font-style:italic;}',
              '.f13mvf36{text-decoration-line:underline;}',
              '.fv5q2k7{text-decoration-line:line-through;}',
              '.f1drk4o6{text-decoration-line:line-through underline;}',
              '.f13mqy1h{font-size:var(--fontSizeBase100);}',
              '.fcpl73t{line-height:var(--lineHeightBase100);}',
              '.fy9rknc{font-size:var(--fontSizeBase200);}',
              '.fwrc4pm{line-height:var(--lineHeightBase200);}',
              '.fod5ikn{font-size:var(--fontSizeBase400);}',
              '.faaz57k{line-height:var(--lineHeightBase400);}',
              '.f1pp30po{font-size:var(--fontSizeBase500);}',
              '.f106mvju{line-height:var(--lineHeightBase500);}',
              '.f1x0m3f5{font-size:var(--fontSizeBase600);}',
              '.fb86gi6{line-height:var(--lineHeightBase600);}',
              '.fojgt09{font-size:var(--fontSizeHero700);}',
              '.fcen8rp{line-height:var(--lineHeightHero700);}',
              '.fccw675{font-size:var(--fontSizeHero800);}',
              '.f1ebx5kk{line-height:var(--lineHeightHero800);}',
              '.f15afnhw{font-size:var(--fontSizeHero900);}',
              '.fr3w3wp{line-height:var(--lineHeightHero900);}',
              '.fpyltcb{font-size:var(--fontSizeHero1000);}',
              '.f1ivgwrt{line-height:var(--lineHeightHero1000);}',
              '.f1fedwem{font-family:var(--fontFamilyMonospace);}',
              '.f1uq0ln5{font-family:var(--fontFamilyNumeric);}',
              '.fdj6btp{font-weight:var(--fontWeightMedium);}',
              '.fl43uef{font-weight:var(--fontWeightSemibold);}',
              '.flh3ekv{font-weight:var(--fontWeightBold);}',
              '.f17mccla{text-align:center;}',
              '.f12ymhq5{text-align:end;}',
              '.f1j59e10{text-align:justify;}',
            ],
          },
        );
      var CustomStyleHooksContext = __webpack_require__(
        './node_modules/@fluentui/react-shared-contexts/lib/CustomStyleHooksContext/CustomStyleHooksContext.js',
      );
      const Text = react.forwardRef((props, ref) => {
        const state = ((props, ref) => {
          const {
            wrap,
            truncate,
            block,
            italic,
            underline,
            strikethrough,
            size,
            font,
            weight,
            align,
          } = props;
          var _props_as;
          const as =
            null !== (_props_as = props.as) && void 0 !== _props_as ? _props_as : 'span';
          return {
            align: null != align ? align : 'start',
            block: null != block && block,
            font: null != font ? font : 'base',
            italic: null != italic && italic,
            size: null != size ? size : 300,
            strikethrough: null != strikethrough && strikethrough,
            truncate: null != truncate && truncate,
            underline: null != underline && underline,
            weight: null != weight ? weight : 'regular',
            wrap: null == wrap || wrap,
            components: { root: 'span' },
            root: (0, getNativeElementProps.n)(as, { ref, ...props, as }),
          };
        })(props, ref);
        return (
          ((state) => {
            const styles = useStyles();
            state.root.className = (0, mergeClasses_esm.z)(
              textClassNames_root,
              styles.root,
              !1 === state.wrap && styles.nowrap,
              state.truncate && styles.truncate,
              state.block && styles.block,
              state.italic && styles.italic,
              state.underline && styles.underline,
              state.strikethrough && styles.strikethrough,
              state.underline && state.strikethrough && styles.strikethroughUnderline,
              100 === state.size && styles.base100,
              200 === state.size && styles.base200,
              400 === state.size && styles.base400,
              500 === state.size && styles.base500,
              600 === state.size && styles.base600,
              700 === state.size && styles.hero700,
              800 === state.size && styles.hero800,
              900 === state.size && styles.hero900,
              1e3 === state.size && styles.hero1000,
              'monospace' === state.font && styles.monospace,
              'numeric' === state.font && styles.numeric,
              'medium' === state.weight && styles.weightMedium,
              'semibold' === state.weight && styles.weightSemibold,
              'bold' === state.weight && styles.weightBold,
              'center' === state.align && styles.alignCenter,
              'end' === state.align && styles.alignEnd,
              'justify' === state.align && styles.alignJustify,
              state.root.className,
            );
          })(state),
          (0, CustomStyleHooksContext.oj)('useTextStyles_unstable')(state),
          ((state) => {
            const { slots, slotProps } = (0, getSlotsNext.D)(state);
            return (0, createElement.a)(slots.root, slotProps.root);
          })(state)
        );
      });
      Text.displayName = 'Text';
    },
    './node_modules/@fluentui/react-utilities/lib/compose/resolveShorthand.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { O: () => resolveShorthand });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/react/index.js',
        ),
        _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/@fluentui/react-utilities/lib/compose/constants.js',
        );
      const resolveShorthand = (value, options) => {
        const { required = !1, defaultProps } = options || {};
        if (null === value || (void 0 === value && !required)) return;
        let resolvedShorthand = {};
        return (
          'string' == typeof value ||
          'number' == typeof value ||
          Array.isArray(value) ||
          (0, react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(value)
            ? (resolvedShorthand.children = value)
            : 'object' == typeof value && (resolvedShorthand = value),
          (resolvedShorthand = { ...defaultProps, ...resolvedShorthand }),
          'function' == typeof resolvedShorthand.children &&
            ((resolvedShorthand[_constants__WEBPACK_IMPORTED_MODULE_1__.A] =
              resolvedShorthand.children),
            (resolvedShorthand.children =
              null == defaultProps ? void 0 : defaultProps.children)),
          resolvedShorthand
        );
      };
    },
    './node_modules/@griffel/react/__styles.esm.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { s: () => __styles });
      var _griffel_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/@griffel/core/__styles.esm.js',
        ),
        _RendererContext_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/@griffel/react/RendererContext.esm.js',
        ),
        _TextDirectionContext_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/@griffel/react/TextDirectionContext.esm.js',
        );
      function __styles(classesMapBySlot, cssRules) {
        const getStyles = (0, _griffel_core__WEBPACK_IMPORTED_MODULE_0__.s)(
          classesMapBySlot,
          cssRules,
        );
        return function useClasses() {
          const dir = (0, _TextDirectionContext_esm_js__WEBPACK_IMPORTED_MODULE_1__.s)(),
            renderer = (0, _RendererContext_esm_js__WEBPACK_IMPORTED_MODULE_2__.a)();
          return getStyles({ dir, renderer });
        };
      }
    },
  },
]);
