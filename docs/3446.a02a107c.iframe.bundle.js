'use strict';
(self.webpackChunkarbutus = self.webpackChunkarbutus || []).push([
  [3446],
  {
    './node_modules/@fluentui/react-icons/lib/utils/createFluentIcon.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { k: () => createFluentIcon });
      var react = __webpack_require__('./node_modules/react/index.js'),
        _styles_esm = __webpack_require__(
          './node_modules/@griffel/react/__styles.esm.js',
        ),
        mergeClasses_esm = __webpack_require__(
          './node_modules/@griffel/core/mergeClasses.esm.js',
        );
      const useRootStyles = (0, _styles_esm.s)(
          { root: { mc9l5x: 'f1w7gpdv', Bg96gwp: 'fez10in', ycbfsm: 'fg4l7m0' } },
          {
            d: ['.f1w7gpdv{display:inline;}', '.fez10in{line-height:0;}'],
            t: ['@media (forced-colors: active){.fg4l7m0{forced-color-adjust:auto;}}'],
          },
        ),
        useIconState = (props) => {
          const { title, primaryFill = 'currentColor', ...rest } = props,
            state = { ...rest, title: void 0, fill: primaryFill },
            styles = useRootStyles();
          return (
            (state.className = (0, mergeClasses_esm.z)(styles.root, state.className)),
            title && (state['aria-label'] = title),
            state['aria-label'] || state['aria-labelledby']
              ? (state.role = 'img')
              : (state['aria-hidden'] = !0),
            state
          );
        },
        createFluentIcon = (displayName, width, paths) => {
          const viewBoxWidth = '1em' === width ? '20' : width,
            Icon = (props) => {
              const state = {
                ...useIconState(props),
                width,
                height: width,
                viewBox: `0 0 ${viewBoxWidth} ${viewBoxWidth}`,
                xmlns: 'http://www.w3.org/2000/svg',
              };
              return react.createElement(
                'svg',
                state,
                ...paths.map((d) => react.createElement('path', { d, fill: state.fill })),
              );
            };
          return (Icon.displayName = displayName), Icon;
        };
    },
    './node_modules/@fluentui/react-select/lib/components/Select/Select.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { P: () => Select });
      var react = __webpack_require__('./node_modules/react/index.js');
      const FieldContext = react.createContext(void 0);
      FieldContext.Provider;
      var _props,
        _props1,
        _arialabelledby,
        _props2,
        _ariainvalid,
        _props3,
        _props4,
        _ariarequired,
        _props5;
      function useFieldControlProps_unstable(props, options) {
        return (function getFieldControlProps(context, props, options) {
          if (!context) return props;
          props = { ...props };
          const {
            generatedControlId,
            hintId,
            labelFor,
            labelId,
            required,
            validationMessageId,
            validationState,
          } = context;
          var _id, _, _1, _size;
          generatedControlId &&
            ((null !== (_id = (_props = props).id) && void 0 !== _id) ||
              (_props.id = generatedControlId));
          !labelId ||
            ((null == options ? void 0 : options.supportsLabelFor) &&
              labelFor === props.id) ||
            (null !== (_ = (_props1 = props)[(_arialabelledby = 'aria-labelledby')]) &&
              void 0 !== _) ||
            (_props1[_arialabelledby] = labelId);
          (validationMessageId || hintId) &&
            (props['aria-describedby'] = [
              validationMessageId,
              hintId,
              null == props ? void 0 : props['aria-describedby'],
            ]
              .filter(Boolean)
              .join(' '));
          'error' === validationState &&
            ((null !== (_1 = (_props2 = props)[(_ariainvalid = 'aria-invalid')]) &&
              void 0 !== _1) ||
              (_props2[_ariainvalid] = !0));
          if (required) {
            var _required, _2;
            if (null == options ? void 0 : options.supportsRequired)
              (null !== (_required = (_props3 = props).required) &&
                void 0 !== _required) ||
                (_props3.required = !0);
            else
              (null !== (_2 = (_props4 = props)[(_ariarequired = 'aria-required')]) &&
                void 0 !== _2) ||
                (_props4[_ariarequired] = !0);
          }
          (null == options ? void 0 : options.supportsSize) &&
            ((null !== (_size = (_props5 = props).size) && void 0 !== _size) ||
              (_props5.size = context.size));
          return props;
        })(react.useContext(FieldContext), props, options);
      }
      var getNativeElementProps = __webpack_require__(
          './node_modules/@fluentui/react-utilities/lib/utils/getNativeElementProps.js',
        ),
        resolveShorthand = __webpack_require__(
          './node_modules/@fluentui/react-utilities/lib/compose/resolveShorthand.js',
        ),
        useIsomorphicLayoutEffect = __webpack_require__(
          './node_modules/@fluentui/react-utilities/lib/hooks/useIsomorphicLayoutEffect.js',
        );
      const ChevronDownRegular = (0,
      __webpack_require__(
        './node_modules/@fluentui/react-icons/lib/utils/createFluentIcon.js',
      ).k)('ChevronDownRegular', '1em', [
        'M15.85 7.65c.2.2.2.5 0 .7l-5.46 5.49a.55.55 0 0 1-.78 0L4.15 8.35a.5.5 0 1 1 .7-.7L10 12.8l5.15-5.16c.2-.2.5-.2.7 0Z',
      ]);
      var OverridesContext = __webpack_require__(
        './node_modules/@fluentui/react-shared-contexts/lib/OverridesContext/OverridesContext.js',
      );
      const useSelect_unstable = (props, ref) => {
        props = useFieldControlProps_unstable(props, {
          supportsLabelFor: !0,
          supportsRequired: !0,
          supportsSize: !0,
        });
        const overrides = (0, OverridesContext.QG)();
        var _overrides_inputDefaultAppearance;
        const {
            defaultValue,
            value,
            select,
            icon,
            root,
            appearance = null !==
              (_overrides_inputDefaultAppearance = overrides.inputDefaultAppearance) &&
            void 0 !== _overrides_inputDefaultAppearance
              ? _overrides_inputDefaultAppearance
              : 'outline',
            onChange,
            size = 'medium',
          } = props,
          nativeProps = (0, getNativeElementProps.$)({
            props,
            primarySlotTagName: 'select',
            excludedPropNames: [
              'appearance',
              'defaultValue',
              'onChange',
              'size',
              'value',
            ],
          }),
          state = {
            size,
            appearance,
            components: { root: 'span', select: 'select', icon: 'span' },
            select: (0, resolveShorthand.O)(select, {
              required: !0,
              defaultProps: { defaultValue, value, ref, ...nativeProps.primary },
            }),
            icon: (0, resolveShorthand.O)(icon, {
              required: !0,
              defaultProps: { children: react.createElement(ChevronDownRegular, null) },
            }),
            root: (0, resolveShorthand.O)(root, {
              required: !0,
              defaultProps: nativeProps.root,
            }),
          };
        return (
          (state.select.onChange = ((fn) => {
            const callbackRef = react.useRef(() => {
              throw new Error('Cannot call an event handler while rendering');
            });
            return (
              (0, useIsomorphicLayoutEffect.L)(() => {
                callbackRef.current = fn;
              }, [fn]),
              react.useCallback(
                (...args) => (0, callbackRef.current)(...args),
                [callbackRef],
              )
            );
          })((event) => {
            null == onChange || onChange(event, { value: event.target.value });
          })),
          state
        );
      };
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
        ),
        tokens = __webpack_require__('./node_modules/@fluentui/tokens/lib/tokens.js');
      const selectClassNames_root = 'fui-Select',
        selectClassNames_select = 'fui-Select__select',
        selectClassNames_icon = 'fui-Select__icon',
        iconSizes_small = '16px',
        iconSizes_medium = '20px',
        iconSizes_large = '24px',
        useRootStyles =
          (tokens.T.spacingHorizontalSNudge,
          tokens.T.spacingHorizontalXXS,
          tokens.T.spacingHorizontalXXS,
          tokens.T.spacingHorizontalMNudge,
          tokens.T.spacingHorizontalXXS,
          tokens.T.spacingHorizontalXXS,
          tokens.T.spacingHorizontalM,
          tokens.T.spacingHorizontalSNudge,
          tokens.T.spacingHorizontalSNudge,
          tokens.T.spacingHorizontalSNudge,
          tokens.T.spacingHorizontalXXS,
          tokens.T.spacingHorizontalMNudge,
          tokens.T.spacingHorizontalXXS,
          tokens.T.spacingHorizontalM,
          tokens.T.spacingHorizontalSNudge,
          (0, _styles_esm.s)(
            {
              base: {
                Bt984gj: 'f122n59',
                B7ck84d: 'f1ewtqcl',
                mc9l5x: 'f22iagw',
                Eh141a: 'flvyvdh',
                Bahqtrf: 'fk6fouc',
                qhf8xq: 'f10pi13n',
                h62rwi: 'f7ll8cq',
                B3778ie: ['f1ibwz09', 'f1kp91vd'],
                d9w3h3: ['f1kp91vd', 'f1ibwz09'],
                Bl18szs: ['f18vqdqu', 'f53nyzz'],
                B4j8arr: ['f53nyzz', 'f18vqdqu'],
                li1rpt: 'f1gw3sf2',
                Bsft5z2: 'f13zj6fq',
                Dlnsje: 'fhwjr99',
                E3zdtr: 'f1mdlcz9',
                By385i5: 'fo72kxq',
                Eqx8gd: ['f1n6gb5g', 'f15yvnhg'],
                B1piin3: ['f15yvnhg', 'f1n6gb5g'],
                b1kco5: 'f1yk9hq',
                Ba2ppi3: 'fhwpy7i',
                F2fol1: 'f14ee0xe',
                lck23g: 'f1xhbsuh',
                df92cz: 'fv8e3ye',
                I188md: 'ftb5wc6',
                umuwi5: 'fjw5xc1',
                Blcqepd: 'f1xdyd5c',
                nplu4u: 'fatpbeo',
                Bioka5o: 'fb7uyps',
                H713fs: 'f1cmft4k',
                B9ooomg: 'f1x58t8o',
              },
            },
            {
              d: [
                '.f122n59{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}',
                '.f1ewtqcl{box-sizing:border-box;}',
                '.f22iagw{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}',
                '.flvyvdh{-webkit-box-flex-wrap:nowrap;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;}',
                '.fk6fouc{font-family:var(--fontFamilyBase);}',
                '.f10pi13n{position:relative;}',
                '.f7ll8cq::after{background-image:linear-gradient(\n        0deg,\n        var(--colorCompoundBrandStroke) 0%,\n        var(--colorCompoundBrandStroke) 50%,\n        transparent 50%,\n        transparent 100%\n      );}',
                '.f1ibwz09::after{border-bottom-right-radius:var(--borderRadiusMedium);}',
                '.f1kp91vd::after{border-bottom-left-radius:var(--borderRadiusMedium);}',
                '.f18vqdqu::after{border-top-right-radius:0;}',
                '.f53nyzz::after{border-top-left-radius:0;}',
                '.f1gw3sf2::after{box-sizing:border-box;}',
                '.f13zj6fq::after{content:"";}',
                '.fhwjr99::after{height:var(--borderRadiusMedium);}',
                '.f1mdlcz9::after{position:absolute;}',
                '.fo72kxq::after{bottom:0;}',
                '.f1n6gb5g::after{left:0;}',
                '.f15yvnhg::after{right:0;}',
                '.f1yk9hq::after{-webkit-transform:scaleX(0);-moz-transform:scaleX(0);-ms-transform:scaleX(0);transform:scaleX(0);}',
                '.fhwpy7i::after{transition-property:transform;}',
                '.f14ee0xe::after{transition-duration:var(--durationUltraFast);}',
                '.f1xhbsuh::after{transition-delay:var(--curveAccelerateMid);}',
              ],
              m: [
                [
                  '@media screen and (prefers-reduced-motion: reduce){.fv8e3ye::after{transition-duration:0.01ms;}}',
                  { m: 'screen and (prefers-reduced-motion: reduce)' },
                ],
                [
                  '@media screen and (prefers-reduced-motion: reduce){.ftb5wc6::after{transition-delay:0.01ms;}}',
                  { m: 'screen and (prefers-reduced-motion: reduce)' },
                ],
                [
                  '@media screen and (prefers-reduced-motion: reduce){.f1cmft4k:focus-within::after{transition-duration:0.01ms;}}',
                  { m: 'screen and (prefers-reduced-motion: reduce)' },
                ],
                [
                  '@media screen and (prefers-reduced-motion: reduce){.f1x58t8o:focus-within::after{transition-delay:0.01ms;}}',
                  { m: 'screen and (prefers-reduced-motion: reduce)' },
                ],
              ],
              w: [
                '.fjw5xc1:focus-within::after{-webkit-transform:scaleX(1);-moz-transform:scaleX(1);-ms-transform:scaleX(1);transform:scaleX(1);}',
                '.f1xdyd5c:focus-within::after{transition-property:transform;}',
                '.fatpbeo:focus-within::after{transition-duration:var(--durationNormal);}',
                '.fb7uyps:focus-within::after{transition-delay:var(--curveDecelerateMid);}',
              ],
            },
          )),
        useSelectStyles = (0, _styles_esm.s)(
          {
            base: {
              Bowrso0: 'fqrijq1',
              B4j52fo: 'f5ogflp',
              Bekrc4i: ['f1hqa2wf', 'finvdd3'],
              Bn0qgzm: 'f1f09k3d',
              ibv6hh: ['finvdd3', 'f1hqa2wf'],
              icvyot: 'fzkkow9',
              vrafjx: ['fcdblym', 'fjik90z'],
              oivjwe: 'fg706s2',
              wvpqe5: ['fjik90z', 'fcdblym'],
              g2u3we: 'f1p3nwhy',
              h3c5rm: ['f11589ue', 'f1pdflbu'],
              B9xav0g: 'f1q5o8ev',
              zhjwy3: ['f1pdflbu', 'f11589ue'],
              Bbmb7ep: ['f1aa9q02', 'f16jpd5f'],
              Beyfa6y: ['f16jpd5f', 'f1aa9q02'],
              B7oj6ja: ['f1jar5jt', 'fyu767a'],
              Btl43ni: ['fyu767a', 'f1jar5jt'],
              E5pizo: 'f1couhl3',
              B7ck84d: 'f1ewtqcl',
              sj55zd: 'f19n0e5',
              Bceei9c: 'f1k6fduh',
              Bh6795r: 'fqerorx',
              B2u0y6b: 'f6dzj5z',
              Byoj8tv: 'f1qch9an',
              z8tnut: 'f1g0x7ka',
              B3aqqti: 'fatbyko',
              Brovlpu: 'f1grzc83',
              Bxa1mx5: 'f19shzzi',
            },
            disabled: {
              De3pzq: 'f1c21dwh',
              g2u3we: 'f1jj8ep1',
              h3c5rm: ['f15xbau', 'fy0fskl'],
              B9xav0g: 'f4ikngz',
              zhjwy3: ['fy0fskl', 'f15xbau'],
              sj55zd: 'f1s2aq7o',
              Bceei9c: 'fdrzuqr',
              Bjwas2f: 'fg455y9',
              Bn1d65q: ['f1rvyvqg', 'f14g86mu'],
              Bxeuatn: 'f1cwzwz',
              n51gp8: ['f14g86mu', 'f1rvyvqg'],
            },
            disabledUnderline: {
              g2u3we: 'fgig46g',
              h3c5rm: ['f1mxt3zg', 'fziff3p'],
              B9xav0g: 'f4ikngz',
              zhjwy3: ['fziff3p', 'f1mxt3zg'],
            },
            small: {
              Bqenvij: 'frvgh55',
              uwmqm3: ['f1xile11', 'fqznh8f'],
              z189sj: ['fiqd4sw', 'f11fkzut'],
              Bahqtrf: 'fk6fouc',
              Be2twd7: 'fy9rknc',
              Bhrd7zp: 'figsok6',
              Bg96gwp: 'fwrc4pm',
            },
            medium: {
              Bqenvij: 'f1d2rq10',
              uwmqm3: ['f1e60jzv', 'f135dnwl'],
              z189sj: ['f154vowv', 'flqamny'],
              Bahqtrf: 'fk6fouc',
              Be2twd7: 'fkhj508',
              Bhrd7zp: 'figsok6',
              Bg96gwp: 'f1i3iumi',
            },
            large: {
              Bqenvij: 'fbhnoac',
              uwmqm3: ['fnphzt9', 'flt1dlf'],
              z189sj: ['f1xi5ia2', 'f1xi1l47'],
              Bahqtrf: 'fk6fouc',
              Be2twd7: 'fod5ikn',
              Bhrd7zp: 'figsok6',
              Bg96gwp: 'faaz57k',
            },
            outline: {
              De3pzq: 'fxugw4r',
              B4j52fo: 'f5ogflp',
              Bekrc4i: ['f1hqa2wf', 'finvdd3'],
              Bn0qgzm: 'f1f09k3d',
              ibv6hh: ['finvdd3', 'f1hqa2wf'],
              icvyot: 'fzkkow9',
              vrafjx: ['fcdblym', 'fjik90z'],
              oivjwe: 'fg706s2',
              wvpqe5: ['fjik90z', 'fcdblym'],
              g2u3we: 'fj3muxo',
              h3c5rm: ['f1akhkt', 'f1lxtadh'],
              B9xav0g: 'f1c1zstj',
              zhjwy3: ['f1lxtadh', 'f1akhkt'],
            },
            outlineInteractive: {
              Bgoe8wy: 'fvcxoqz',
              Bwzppfd: ['f1ub3y4t', 'f1m52nbi'],
              oetu4i: 'flmw63s',
              gg5e9n: ['f1m52nbi', 'f1ub3y4t'],
              B6oc9vd: 'fvs00aa',
              ak43y8: ['f1assf6x', 'f4ruux4'],
              wmxk5l: 'fqhmt4z',
              B50zh58: ['f4ruux4', 'f1assf6x'],
            },
            underline: {
              De3pzq: 'f1c21dwh',
              Bn0qgzm: 'f1f09k3d',
              oivjwe: 'fg706s2',
              B9xav0g: 'f1c1zstj',
              Bbmb7ep: ['f1krrbdw', 'f1deotkl'],
              Beyfa6y: ['f1deotkl', 'f1krrbdw'],
              B7oj6ja: ['f10ostut', 'f1ozlkrg'],
              Btl43ni: ['f1ozlkrg', 'f10ostut'],
            },
            'filled-lighter': { De3pzq: 'fxugw4r' },
            'filled-darker': { De3pzq: 'f16xq7d1' },
            invalid: {
              tvckwq: 'fs4k3qj',
              gk2u95: ['fcee079', 'fmyw78r'],
              hhx65j: 'f1fgmyf4',
              Bxowmz0: ['fmyw78r', 'fcee079'],
            },
            invalidUnderline: { hhx65j: 'f1fgmyf4' },
          },
          {
            d: [
              '.fqrijq1{-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;appearance:none;}',
              '.f5ogflp{border-top-width:1px;}',
              '.f1hqa2wf{border-right-width:1px;}',
              '.finvdd3{border-left-width:1px;}',
              '.f1f09k3d{border-bottom-width:1px;}',
              '.fzkkow9{border-top-style:solid;}',
              '.fcdblym{border-right-style:solid;}',
              '.fjik90z{border-left-style:solid;}',
              '.fg706s2{border-bottom-style:solid;}',
              '.f1p3nwhy{border-top-color:transparent;}',
              '.f11589ue{border-right-color:transparent;}',
              '.f1pdflbu{border-left-color:transparent;}',
              '.f1q5o8ev{border-bottom-color:transparent;}',
              '.f1aa9q02{border-bottom-right-radius:var(--borderRadiusMedium);}',
              '.f16jpd5f{border-bottom-left-radius:var(--borderRadiusMedium);}',
              '.f1jar5jt{border-top-right-radius:var(--borderRadiusMedium);}',
              '.fyu767a{border-top-left-radius:var(--borderRadiusMedium);}',
              '.f1couhl3{box-shadow:none;}',
              '.f1ewtqcl{box-sizing:border-box;}',
              '.f19n0e5{color:var(--colorNeutralForeground1);}',
              '.f1k6fduh{cursor:pointer;}',
              '.fqerorx{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}',
              '.f6dzj5z{max-width:100%;}',
              '.f1qch9an{padding-bottom:0;}',
              '.f1g0x7ka{padding-top:0;}',
              '.f1c21dwh{background-color:var(--colorTransparentBackground);}',
              '.f1jj8ep1{border-top-color:var(--colorNeutralStrokeDisabled);}',
              '.f15xbau{border-right-color:var(--colorNeutralStrokeDisabled);}',
              '.fy0fskl{border-left-color:var(--colorNeutralStrokeDisabled);}',
              '.f4ikngz{border-bottom-color:var(--colorNeutralStrokeDisabled);}',
              '.f1s2aq7o{color:var(--colorNeutralForegroundDisabled);}',
              '.fdrzuqr{cursor:not-allowed;}',
              '.fgig46g{border-top-color:var(--colorTransparentStrokeDisabled);}',
              '.f1mxt3zg{border-right-color:var(--colorTransparentStrokeDisabled);}',
              '.fziff3p{border-left-color:var(--colorTransparentStrokeDisabled);}',
              '.frvgh55{height:24px;}',
              '.f1xile11{padding-left:calc(var(--spacingHorizontalSNudge) + var(--spacingHorizontalXXS));}',
              '.fqznh8f{padding-right:calc(var(--spacingHorizontalSNudge) + var(--spacingHorizontalXXS));}',
              '.fiqd4sw{padding-right:calc(var(--spacingHorizontalSNudge)\n    + 16px\n    + var(--spacingHorizontalXXS)\n    + var(--spacingHorizontalXXS));}',
              '.f11fkzut{padding-left:calc(var(--spacingHorizontalSNudge)\n    + 16px\n    + var(--spacingHorizontalXXS)\n    + var(--spacingHorizontalXXS));}',
              '.fk6fouc{font-family:var(--fontFamilyBase);}',
              '.fy9rknc{font-size:var(--fontSizeBase200);}',
              '.figsok6{font-weight:var(--fontWeightRegular);}',
              '.fwrc4pm{line-height:var(--lineHeightBase200);}',
              '.f1d2rq10{height:32px;}',
              '.f1e60jzv{padding-left:calc(var(--spacingHorizontalMNudge) + var(--spacingHorizontalXXS));}',
              '.f135dnwl{padding-right:calc(var(--spacingHorizontalMNudge) + var(--spacingHorizontalXXS));}',
              '.f154vowv{padding-right:calc(var(--spacingHorizontalMNudge)\n    + 20px\n    + var(--spacingHorizontalXXS)\n    + var(--spacingHorizontalXXS));}',
              '.flqamny{padding-left:calc(var(--spacingHorizontalMNudge)\n    + 20px\n    + var(--spacingHorizontalXXS)\n    + var(--spacingHorizontalXXS));}',
              '.fkhj508{font-size:var(--fontSizeBase300);}',
              '.f1i3iumi{line-height:var(--lineHeightBase300);}',
              '.fbhnoac{height:40px;}',
              '.fnphzt9{padding-left:calc(var(--spacingHorizontalM) + var(--spacingHorizontalSNudge));}',
              '.flt1dlf{padding-right:calc(var(--spacingHorizontalM) + var(--spacingHorizontalSNudge));}',
              '.f1xi5ia2{padding-right:calc(var(--spacingHorizontalM)\n    + 24px\n    + var(--spacingHorizontalSNudge)\n    + var(--spacingHorizontalSNudge));}',
              '.f1xi1l47{padding-left:calc(var(--spacingHorizontalM)\n    + 24px\n    + var(--spacingHorizontalSNudge)\n    + var(--spacingHorizontalSNudge));}',
              '.fod5ikn{font-size:var(--fontSizeBase400);}',
              '.faaz57k{line-height:var(--lineHeightBase400);}',
              '.fxugw4r{background-color:var(--colorNeutralBackground1);}',
              '.fj3muxo{border-top-color:var(--colorNeutralStroke1);}',
              '.f1akhkt{border-right-color:var(--colorNeutralStroke1);}',
              '.f1lxtadh{border-left-color:var(--colorNeutralStroke1);}',
              '.f1c1zstj{border-bottom-color:var(--colorNeutralStrokeAccessible);}',
              '.f1krrbdw{border-bottom-right-radius:0;}',
              '.f1deotkl{border-bottom-left-radius:0;}',
              '.f10ostut{border-top-right-radius:0;}',
              '.f1ozlkrg{border-top-left-radius:0;}',
              '.f16xq7d1{background-color:var(--colorNeutralBackground3);}',
              '.fs4k3qj:not(:focus-within),.fs4k3qj:hover:not(:focus-within){border-top-color:var(--colorPaletteRedBorder2);}',
              '.fcee079:not(:focus-within),.fcee079:hover:not(:focus-within){border-right-color:var(--colorPaletteRedBorder2);}',
              '.fmyw78r:not(:focus-within),.fmyw78r:hover:not(:focus-within){border-left-color:var(--colorPaletteRedBorder2);}',
              '.f1fgmyf4:not(:focus-within),.f1fgmyf4:hover:not(:focus-within){border-bottom-color:var(--colorPaletteRedBorder2);}',
            ],
            f: [
              '.fatbyko:focus{outline-width:2px;}',
              '.f1grzc83:focus{outline-style:solid;}',
              '.f19shzzi:focus{outline-color:transparent;}',
            ],
            m: [
              [
                '@media (forced-colors: active){.fg455y9{border-top-color:GrayText;}}',
                { m: '(forced-colors: active)' },
              ],
              [
                '@media (forced-colors: active){.f1rvyvqg{border-right-color:GrayText;}.f14g86mu{border-left-color:GrayText;}}',
                { m: '(forced-colors: active)' },
              ],
              [
                '@media (forced-colors: active){.f1cwzwz{border-bottom-color:GrayText;}}',
                { m: '(forced-colors: active)' },
              ],
              [
                '@media (forced-colors: active){.f14g86mu{border-left-color:GrayText;}.f1rvyvqg{border-right-color:GrayText;}}',
                { m: '(forced-colors: active)' },
              ],
            ],
            h: [
              '.fvcxoqz:hover{border-top-color:var(--colorNeutralStroke1Hover);}',
              '.f1ub3y4t:hover{border-right-color:var(--colorNeutralStroke1Hover);}',
              '.f1m52nbi:hover{border-left-color:var(--colorNeutralStroke1Hover);}',
              '.flmw63s:hover{border-bottom-color:var(--colorNeutralStrokeAccessible);}',
            ],
            a: [
              '.fvs00aa:active{border-top-color:var(--colorNeutralStroke1Pressed);}',
              '.f1assf6x:active{border-right-color:var(--colorNeutralStroke1Pressed);}',
              '.f4ruux4:active{border-left-color:var(--colorNeutralStroke1Pressed);}',
              '.fqhmt4z:active{border-bottom-color:var(--colorNeutralStrokeAccessible);}',
            ],
          },
        ),
        useIconStyles = (0, _styles_esm.s)(
          {
            icon: {
              B7ck84d: 'f1ewtqcl',
              sj55zd: 'fxkbij4',
              mc9l5x: 'ftgm304',
              qhf8xq: 'f1euv43f',
              Bkecrkj: 'f1aehjj5',
              Bo70h7d: 'fvc9v3g',
            },
            disabled: { sj55zd: 'f1s2aq7o', Bbusuzp: 'f1dcs8yz' },
            small: {
              Be2twd7: 'f4ybsrx',
              Bqenvij: 'fd461yt',
              j35jbq: ['f13lnp83', 'f1i5nn0v'],
              a9b677: 'fjw5fx7',
            },
            medium: {
              Be2twd7: 'fe5j1ua',
              Bqenvij: 'fjamq6b',
              j35jbq: ['fnyteob', 'f1enpzzf'],
              a9b677: 'f64fuq3',
            },
            large: {
              Be2twd7: 'f1rt2boy',
              Bqenvij: 'frvgh55',
              j35jbq: ['f8b87gs', 'fedtrts'],
              a9b677: 'fq4mcun',
            },
          },
          {
            d: [
              '.f1ewtqcl{box-sizing:border-box;}',
              '.fxkbij4{color:var(--colorNeutralStrokeAccessible);}',
              '.ftgm304{display:block;}',
              '.f1euv43f{position:absolute;}',
              '.f1aehjj5{pointer-events:none;}',
              '.fvc9v3g svg{display:block;}',
              '.f1s2aq7o{color:var(--colorNeutralForegroundDisabled);}',
              '.f4ybsrx{font-size:16px;}',
              '.fd461yt{height:16px;}',
              '.f13lnp83{right:var(--spacingHorizontalSNudge);}',
              '.f1i5nn0v{left:var(--spacingHorizontalSNudge);}',
              '.fjw5fx7{width:16px;}',
              '.fe5j1ua{font-size:20px;}',
              '.fjamq6b{height:20px;}',
              '.fnyteob{right:var(--spacingHorizontalMNudge);}',
              '.f1enpzzf{left:var(--spacingHorizontalMNudge);}',
              '.f64fuq3{width:20px;}',
              '.f1rt2boy{font-size:24px;}',
              '.frvgh55{height:24px;}',
              '.f8b87gs{right:var(--spacingHorizontalM);}',
              '.fedtrts{left:var(--spacingHorizontalM);}',
              '.fq4mcun{width:24px;}',
            ],
            m: [
              [
                '@media (forced-colors: active){.f1dcs8yz{color:GrayText;}}',
                { m: '(forced-colors: active)' },
              ],
            ],
          },
        );
      var CustomStyleHooksContext = __webpack_require__(
        './node_modules/@fluentui/react-shared-contexts/lib/CustomStyleHooksContext/CustomStyleHooksContext.js',
      );
      const Select = react.forwardRef((props, ref) => {
        const state = useSelect_unstable(props, ref);
        return (
          ((state) => {
            const { size, appearance } = state,
              disabled = state.select.disabled,
              invalid = 'true' == `${state.select['aria-invalid']}`,
              iconStyles = useIconStyles(),
              rootStyles = useRootStyles(),
              selectStyles = useSelectStyles();
            (state.root.className = (0, mergeClasses_esm.z)(
              selectClassNames_root,
              rootStyles.base,
              state.root.className,
            )),
              (state.select.className = (0, mergeClasses_esm.z)(
                selectClassNames_select,
                selectStyles.base,
                selectStyles[size],
                selectStyles[appearance],
                !disabled && 'outline' === appearance && selectStyles.outlineInteractive,
                !disabled &&
                  invalid &&
                  'underline' !== appearance &&
                  selectStyles.invalid,
                !disabled &&
                  invalid &&
                  'underline' === appearance &&
                  selectStyles.invalidUnderline,
                disabled && selectStyles.disabled,
                disabled && 'underline' === appearance && selectStyles.disabledUnderline,
                state.select.className,
              )),
              state.icon &&
                (state.icon.className = (0, mergeClasses_esm.z)(
                  selectClassNames_icon,
                  iconStyles.icon,
                  disabled && iconStyles.disabled,
                  iconStyles[size],
                  state.icon.className,
                ));
          })(state),
          (0, CustomStyleHooksContext.oj)('useSelectStyles_unstable')(state),
          ((state) => {
            const { slots, slotProps } = (0, getSlotsNext.D)(state);
            return (0, createElement.a)(
              slots.root,
              slotProps.root,
              (0, createElement.a)(
                slots.select,
                slotProps.select,
                slotProps.select.children,
              ),
              (0, createElement.a)(slots.icon, slotProps.icon),
            );
          })(state)
        );
      });
      Select.displayName = 'Select';
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
    './node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { M: () => AnimatePresence });
      var react = __webpack_require__('./node_modules/react/index.js'),
        frameloop = __webpack_require__(
          './node_modules/framer-motion/dist/es/frameloop/index.mjs',
        ),
        use_isomorphic_effect = __webpack_require__(
          './node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs',
        );
      function useIsMounted() {
        const isMounted = (0, react.useRef)(!1);
        return (
          (0, use_isomorphic_effect.L)(
            () => (
              (isMounted.current = !0),
              () => {
                isMounted.current = !1;
              }
            ),
            [],
          ),
          isMounted
        );
      }
      var PresenceContext = __webpack_require__(
          './node_modules/framer-motion/dist/es/context/PresenceContext.mjs',
        ),
        use_constant = __webpack_require__(
          './node_modules/framer-motion/dist/es/utils/use-constant.mjs',
        );
      class PopChildMeasure extends react.Component {
        getSnapshotBeforeUpdate(prevProps) {
          const element = this.props.childRef.current;
          if (element && prevProps.isPresent && !this.props.isPresent) {
            const size = this.props.sizeRef.current;
            (size.height = element.offsetHeight || 0),
              (size.width = element.offsetWidth || 0),
              (size.top = element.offsetTop),
              (size.left = element.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function PopChild({ children, isPresent }) {
        const id = (0, react.useId)(),
          ref = (0, react.useRef)(null),
          size = (0, react.useRef)({ width: 0, height: 0, top: 0, left: 0 });
        return (
          (0, react.useInsertionEffect)(() => {
            const { width, height, top, left } = size.current;
            if (isPresent || !ref.current || !width || !height) return;
            ref.current.dataset.motionPopId = id;
            const style = document.createElement('style');
            return (
              document.head.appendChild(style),
              style.sheet &&
                style.sheet.insertRule(
                  `\n          [data-motion-pop-id="${id}"] {\n            position: absolute !important;\n            width: ${width}px !important;\n            height: ${height}px !important;\n            top: ${top}px !important;\n            left: ${left}px !important;\n          }\n        `,
                ),
              () => {
                document.head.removeChild(style);
              }
            );
          }, [isPresent]),
          react.createElement(
            PopChildMeasure,
            { isPresent, childRef: ref, sizeRef: size },
            react.cloneElement(children, { ref }),
          )
        );
      }
      const PresenceChild = ({
        children,
        initial,
        isPresent,
        onExitComplete,
        custom,
        presenceAffectsLayout,
        mode,
      }) => {
        const presenceChildren = (0, use_constant.h)(newChildrenMap),
          id = (0, react.useId)(),
          context = (0, react.useMemo)(
            () => ({
              id,
              initial,
              isPresent,
              custom,
              onExitComplete: (childId) => {
                presenceChildren.set(childId, !0);
                for (const isComplete of presenceChildren.values())
                  if (!isComplete) return;
                onExitComplete && onExitComplete();
              },
              register: (childId) => (
                presenceChildren.set(childId, !1), () => presenceChildren.delete(childId)
              ),
            }),
            presenceAffectsLayout ? void 0 : [isPresent],
          );
        return (
          (0, react.useMemo)(() => {
            presenceChildren.forEach((_, key) => presenceChildren.set(key, !1));
          }, [isPresent]),
          react.useEffect(() => {
            !isPresent && !presenceChildren.size && onExitComplete && onExitComplete();
          }, [isPresent]),
          'popLayout' === mode &&
            (children = react.createElement(PopChild, { isPresent }, children)),
          react.createElement(PresenceContext.O.Provider, { value: context }, children)
        );
      };
      function newChildrenMap() {
        return new Map();
      }
      var LayoutGroupContext = __webpack_require__(
        './node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs',
      );
      var errors = __webpack_require__(
        './node_modules/framer-motion/dist/es/utils/errors.mjs',
      );
      const getChildKey = (child) => child.key || '';
      const AnimatePresence = ({
        children,
        custom,
        initial = !0,
        onExitComplete,
        exitBeforeEnter,
        presenceAffectsLayout = !0,
        mode = 'sync',
      }) => {
        (0, errors.k)(!exitBeforeEnter, "Replace exitBeforeEnter with mode='wait'");
        const forceRender =
            (0, react.useContext)(LayoutGroupContext.p).forceRender ||
            (function useForceUpdate() {
              const isMounted = useIsMounted(),
                [forcedRenderCount, setForcedRenderCount] = (0, react.useState)(0),
                forceRender = (0, react.useCallback)(() => {
                  isMounted.current && setForcedRenderCount(forcedRenderCount + 1);
                }, [forcedRenderCount]);
              return [
                (0, react.useCallback)(
                  () => frameloop.Wi.postRender(forceRender),
                  [forceRender],
                ),
                forcedRenderCount,
              ];
            })()[0],
          isMounted = useIsMounted(),
          filteredChildren = (function onlyElements(children) {
            const filtered = [];
            return (
              react.Children.forEach(children, (child) => {
                (0, react.isValidElement)(child) && filtered.push(child);
              }),
              filtered
            );
          })(children);
        let childrenToRender = filteredChildren;
        const exitingChildren = (0, react.useRef)(new Map()).current,
          presentChildren = (0, react.useRef)(childrenToRender),
          allChildren = (0, react.useRef)(new Map()).current,
          isInitialRender = (0, react.useRef)(!0);
        if (
          ((0, use_isomorphic_effect.L)(() => {
            (isInitialRender.current = !1),
              (function updateChildLookup(children, allChildren) {
                children.forEach((child) => {
                  const key = getChildKey(child);
                  allChildren.set(key, child);
                });
              })(filteredChildren, allChildren),
              (presentChildren.current = childrenToRender);
          }),
          (function useUnmountEffect(callback) {
            return (0, react.useEffect)(() => () => callback(), []);
          })(() => {
            (isInitialRender.current = !0), allChildren.clear(), exitingChildren.clear();
          }),
          isInitialRender.current)
        )
          return react.createElement(
            react.Fragment,
            null,
            childrenToRender.map((child) =>
              react.createElement(
                PresenceChild,
                {
                  key: getChildKey(child),
                  isPresent: !0,
                  initial: !!initial && void 0,
                  presenceAffectsLayout,
                  mode,
                },
                child,
              ),
            ),
          );
        childrenToRender = [...childrenToRender];
        const presentKeys = presentChildren.current.map(getChildKey),
          targetKeys = filteredChildren.map(getChildKey),
          numPresent = presentKeys.length;
        for (let i = 0; i < numPresent; i++) {
          const key = presentKeys[i];
          -1 !== targetKeys.indexOf(key) ||
            exitingChildren.has(key) ||
            exitingChildren.set(key, void 0);
        }
        return (
          'wait' === mode && exitingChildren.size && (childrenToRender = []),
          exitingChildren.forEach((component, key) => {
            if (-1 !== targetKeys.indexOf(key)) return;
            const child = allChildren.get(key);
            if (!child) return;
            const insertionIndex = presentKeys.indexOf(key);
            let exitingComponent = component;
            if (!exitingComponent) {
              const onExit = () => {
                allChildren.delete(key), exitingChildren.delete(key);
                const removeIndex = presentChildren.current.findIndex(
                  (presentChild) => presentChild.key === key,
                );
                if (
                  (presentChildren.current.splice(removeIndex, 1), !exitingChildren.size)
                ) {
                  if (
                    ((presentChildren.current = filteredChildren),
                    !1 === isMounted.current)
                  )
                    return;
                  forceRender(), onExitComplete && onExitComplete();
                }
              };
              (exitingComponent = react.createElement(
                PresenceChild,
                {
                  key: getChildKey(child),
                  isPresent: !1,
                  onExitComplete: onExit,
                  custom,
                  presenceAffectsLayout,
                  mode,
                },
                child,
              )),
                exitingChildren.set(key, exitingComponent);
            }
            childrenToRender.splice(insertionIndex, 0, exitingComponent);
          }),
          (childrenToRender = childrenToRender.map((child) => {
            const key = child.key;
            return exitingChildren.has(key)
              ? child
              : react.createElement(
                  PresenceChild,
                  { key: getChildKey(child), isPresent: !0, presenceAffectsLayout, mode },
                  child,
                );
          })),
          react.createElement(
            react.Fragment,
            null,
            exitingChildren.size
              ? childrenToRender
              : childrenToRender.map((child) => (0, react.cloneElement)(child)),
          )
        );
      };
    },
  },
]);
