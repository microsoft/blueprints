/*! For license information please see app-2153e13751186920df40.js.LICENSE.txt */
(self.webpackChunkarbutus_boilerplate_gatsby =
  self.webpackChunkarbutus_boilerplate_gatsby || []).push([
  [143],
  {
    9003: function (e, t, r) {
      'use strict';

      function o(e) {
        for (var t, r = 0, o = 0, n = e.length; n >= 4; ++o, n -= 4)
          (t =
            1540483477 *
              (65535 &
                (t =
                  (255 & e.charCodeAt(o)) |
                  ((255 & e.charCodeAt(++o)) << 8) |
                  ((255 & e.charCodeAt(++o)) << 16) |
                  ((255 & e.charCodeAt(++o)) << 24))) +
            ((59797 * (t >>> 16)) << 16)),
            (r =
              (1540483477 * (65535 & (t ^= t >>> 24)) + ((59797 * (t >>> 16)) << 16)) ^
              (1540483477 * (65535 & r) + ((59797 * (r >>> 16)) << 16)));

        switch (n) {
          case 3:
            r ^= (255 & e.charCodeAt(o + 2)) << 16;
          case 2:
            r ^= (255 & e.charCodeAt(o + 1)) << 8;
          case 1:
            r =
              1540483477 * (65535 & (r ^= 255 & e.charCodeAt(o))) +
              ((59797 * (r >>> 16)) << 16);
        }

        return (
          ((r = 1540483477 * (65535 & (r ^= r >>> 13)) + ((59797 * (r >>> 16)) << 16)) ^
            (r >>> 15)) >>>
          0
        ).toString(36);
      }
      r.d(t, {
        Z: function () {
          return o;
        },
      });
    },
    2504: function (e, t, r) {
      'use strict';
      r.d(t, {
        a: function () {
          return a;
        },
      });
      var o = r(2784),
        n = r(6266);

      function a(e, t, ...r) {
        return (function (e) {
          return Boolean(null == e ? void 0 : e.hasOwnProperty(n.A));
        })(t)
          ? (function (e, t, r) {
              const { [n.A]: a, ...i } = t;

              r.length > 0 && (i.children = o.createElement(o.Fragment, {}, ...r));

              return o.createElement(o.Fragment, {}, a(e, i));
            })(e, t, r)
          : o.createElement(e, t, ...r);
      }
    },
    5785: function (e, t, r) {
      'use strict';
      r.d(t, {
        Qb: function () {
          return n;
        },
        UF: function () {
          return i;
        },
        oj: function () {
          return s;
        },
      });
      var o = r(2784);
      const n = o.createContext(void 0),
        a = () => {},
        i = n.Provider,
        s = (e) => {
          var t, r;

          return null !==
            (r = null === (t = o.useContext(n)) || void 0 === t ? void 0 : t[e]) &&
            void 0 !== r
            ? r
            : a;
        };
    },
    9194: function (e, t, r) {
      'use strict';
      r.d(t, {
        QG: function () {
          return i;
        },
        sD: function () {
          return a;
        },
      });
      var o = r(2784);
      const n = o.createContext(void 0),
        a = n.Provider;

      function i() {
        var e;

        return null !== (e = o.useContext(n)) && void 0 !== e ? e : {};
      }
    },
    2781: function (e, t, r) {
      'use strict';
      r.d(t, {
        O: function () {
          return s;
        },
        z: function () {
          return i;
        },
      });
      var o = r(2784);
      const n = o.createContext(void 0),
        a = {
          targetDocument: 'object' == typeof document ? document : void 0,
          dir: 'ltr',
        },
        i = n.Provider;

      function s() {
        var e;

        return null !== (e = o.useContext(n)) && void 0 !== e ? e : a;
      }
    },
    6266: function (e, t, r) {
      'use strict';
      r.d(t, {
        A: function () {
          return o;
        },
      });
      const o = Symbol('fui.slotRenderFunction');
    },
    1954: function (e, t, r) {
      'use strict';
      r.d(t, {
        D: function () {
          return o;
        },
      });
      r(2784);

      function o(e) {
        const t = {},
          r = {},
          o = Object.keys(e.components);

        for (const a of o) {
          const [o, i] = n(e, a);

          (t[a] = o), (r[a] = i);
        }

        return { slots: t, slotProps: r };
      }

      function n(e, t) {
        var r, o;
        const n = e[t];

        if (void 0 === n) return [null, void 0];
        const { as: a, ...i } = n,
          s =
            void 0 === (null === (r = e.components) || void 0 === r ? void 0 : r[t]) ||
            'string' == typeof e.components[t]
              ? a ||
                (null === (o = e.components) || void 0 === o ? void 0 : o[t]) ||
                'div'
              : e.components[t];

        return [s, 'string' == typeof s && a ? i : n];
      }
    },
    9481: function (e, t, r) {
      'use strict';
      r.d(t, {
        Me: function () {
          return c;
        },
      });
      var o = r(2784),
        n = r.t(o, 2);
      const a = { current: 0 },
        i = o.createContext(void 0);

      function s() {
        var e;

        return null !== (e = o.useContext(i)) && void 0 !== e ? e : a;
      }
      const l = o.createContext(void 0);

      l.Provider;

      function c(e = 'fui-', t) {
        const r = s(),
          a = o.useContext(l) || '',
          i = n.useId;

        if (i) {
          const r = i(),
            n = o.useMemo(() => r.replace(/:/g, ''), [r]);

          return t || `${a}${e}${n}`;
        }

        return o.useMemo(() => t || `${a}${e}${++r.current}`, [a, e, t, r]);
      }
    },
    4400: function (e, t, r) {
      'use strict';
      r.d(t, {
        L: function () {
          return n;
        },
      });
      var o = r(2784);
      const n = (0, r(9836).N)() ? o.useLayoutEffect : o.useEffect;
    },
    9836: function (e, t, r) {
      'use strict';

      function o() {
        return (
          'undefined' != typeof window &&
          !(!window.document || !window.document.createElement)
        );
      }
      r.d(t, {
        N: function () {
          return o;
        },
      });
    },
    7178: function (e, t, r) {
      'use strict';
      r.d(t, {
        n: function () {
          return v;
        },
        $: function () {
          return y;
        },
      });
      r(2784);
      const o = (...e) => {
          const t = {};

          for (const r of e) {
            const e = Array.isArray(r) ? r : Object.keys(r);

            for (const r of e) t[r] = 1;
          }

          return t;
        },
        n = o([
          'onAuxClick',
          'onCopy',
          'onCut',
          'onPaste',
          'onCompositionEnd',
          'onCompositionStart',
          'onCompositionUpdate',
          'onFocus',
          'onFocusCapture',
          'onBlur',
          'onBlurCapture',
          'onChange',
          'onInput',
          'onSubmit',
          'onLoad',
          'onError',
          'onKeyDown',
          'onKeyDownCapture',
          'onKeyPress',
          'onKeyUp',
          'onAbort',
          'onCanPlay',
          'onCanPlayThrough',
          'onDurationChange',
          'onEmptied',
          'onEncrypted',
          'onEnded',
          'onLoadedData',
          'onLoadedMetadata',
          'onLoadStart',
          'onPause',
          'onPlay',
          'onPlaying',
          'onProgress',
          'onRateChange',
          'onSeeked',
          'onSeeking',
          'onStalled',
          'onSuspend',
          'onTimeUpdate',
          'onVolumeChange',
          'onWaiting',
          'onClick',
          'onClickCapture',
          'onContextMenu',
          'onDoubleClick',
          'onDrag',
          'onDragEnd',
          'onDragEnter',
          'onDragExit',
          'onDragLeave',
          'onDragOver',
          'onDragStart',
          'onDrop',
          'onMouseDown',
          'onMouseDownCapture',
          'onMouseEnter',
          'onMouseLeave',
          'onMouseMove',
          'onMouseOut',
          'onMouseOver',
          'onMouseUp',
          'onMouseUpCapture',
          'onSelect',
          'onTouchCancel',
          'onTouchEnd',
          'onTouchMove',
          'onTouchStart',
          'onScroll',
          'onWheel',
          'onPointerCancel',
          'onPointerDown',
          'onPointerEnter',
          'onPointerLeave',
          'onPointerMove',
          'onPointerOut',
          'onPointerOver',
          'onPointerUp',
          'onGotPointerCapture',
          'onLostPointerCapture',
        ]),
        a = o([
          'accessKey',
          'children',
          'className',
          'contentEditable',
          'dir',
          'draggable',
          'hidden',
          'htmlFor',
          'id',
          'lang',
          'ref',
          'role',
          'style',
          'tabIndex',
          'title',
          'translate',
          'spellCheck',
          'name',
        ]),
        i = o(['itemID', 'itemProp', 'itemRef', 'itemScope', 'itemType']),
        s = o(a, n, i),
        l = o(s, ['form']),
        c = o(s, ['height', 'loop', 'muted', 'preload', 'src', 'width']),
        u = o(c, ['poster']),
        d = o(s, ['start']),
        h = o(s, ['value']),
        f = o(s, ['download', 'href', 'hrefLang', 'media', 'rel', 'target', 'type']),
        p = o(s, ['dateTime']),
        g = o(s, [
          'autoFocus',
          'disabled',
          'form',
          'formAction',
          'formEncType',
          'formMethod',
          'formNoValidate',
          'formTarget',
          'type',
          'value',
        ]);
      const m = {
        label: l,
        audio: c,
        video: u,
        ol: d,
        li: h,
        a: f,
        button: g,
        input: o(g, [
          'accept',
          'alt',
          'autoCapitalize',
          'autoComplete',
          'checked',
          'dirname',
          'form',
          'height',
          'inputMode',
          'list',
          'max',
          'maxLength',
          'min',
          'multiple',
          'pattern',
          'placeholder',
          'readOnly',
          'required',
          'src',
          'step',
          'size',
          'type',
          'value',
          'width',
        ]),
        textarea: o(g, [
          'autoCapitalize',
          'cols',
          'dirname',
          'form',
          'maxLength',
          'placeholder',
          'readOnly',
          'required',
          'rows',
          'wrap',
        ]),
        select: o(g, ['form', 'multiple', 'required']),
        option: o(s, ['selected', 'value']),
        table: o(s, ['cellPadding', 'cellSpacing']),
        tr: s,
        th: o(s, ['colSpan', 'rowSpan', 'scope']),
        td: o(s, ['colSpan', 'headers', 'rowSpan', 'scope']),
        colGroup: o(s, ['span']),
        col: o(s, ['span']),
        fieldset: o(s, ['disabled', 'form']),
        form: o(s, [
          'acceptCharset',
          'action',
          'encType',
          'encType',
          'method',
          'noValidate',
          'target',
        ]),
        iframe: o(s, [
          'allow',
          'allowFullScreen',
          'allowPaymentRequest',
          'allowTransparency',
          'csp',
          'height',
          'importance',
          'referrerPolicy',
          'sandbox',
          'src',
          'srcDoc',
          'width',
        ]),
        img: o(s, ['alt', 'crossOrigin', 'height', 'src', 'srcSet', 'useMap', 'width']),
        time: p,
        dialog: o(s, ['open', 'onCancel', 'onClose']),
      };

      function v(e, t, r) {
        const o = (e && m[e]) || s;

        return (
          (o.as = 1),
          (function (e, t, r) {
            const o = Array.isArray(t),
              n = {},
              a = Object.keys(e);

            for (const i of a)
              !(
                (!o && t[i]) ||
                (o && t.indexOf(i) >= 0) ||
                0 === i.indexOf('data-') ||
                0 === i.indexOf('aria-')
              ) ||
                (r && -1 !== (null == r ? void 0 : r.indexOf(i))) ||
                (n[i] = e[i]);

            return n;
          })(t, o, r)
        );
      }
      const y = ({ primarySlotTagName: e, props: t, excludedPropNames: r }) => ({
        root: { style: t.style, className: t.className },
        primary: v(e, t, [...(r || []), 'style', 'className']),
      });
    },
    4035: function (e, t, r) {
      'use strict';
      r.d(t, {
        E: function () {
          return o;
        },
      });
      const o = {
        borderRadiusNone: '0',
        borderRadiusSmall: '2px',
        borderRadiusMedium: '4px',
        borderRadiusLarge: '6px',
        borderRadiusXLarge: '8px',
        borderRadiusCircular: '10000px',
      };
    },
    8397: function (e, t, r) {
      'use strict';
      r.d(t, {
        C: function () {
          return a;
        },
        b: function () {
          return n;
        },
      });
      var o = r(4234);
      const n = {
          red: o.Q6,
          green: o.ek,
          darkOrange: o.nn,
          yellow: o.er,
          berry: o.Z1,
          lightGreen: o.ZE,
          marigold: o.vx,
        },
        a = {
          darkRed: o.o6,
          cranberry: o.o0,
          pumpkin: o.cE,
          peach: o.C2,
          gold: o.EV,
          brass: o.cB,
          brown: o.P_,
          forest: o.Ig,
          seafoam: o.$I,
          darkGreen: o.Ce,
          lightTeal: o.B8,
          teal: o.$C,
          steel: o.gr,
          blue: o.iN,
          royalBlue: o.VI,
          cornflower: o.wO,
          navy: o.Ih,
          lavender: o.N0,
          purple: o.jk,
          grape: o.pl,
          lilac: o.A5,
          pink: o.iQ,
          magenta: o.ym,
          plum: o.vd,
          beige: o.e9,
          mink: o.RR,
          platinum: o.Xd,
          anchor: o.Eu,
        };
    },
    4234: function (e, t, r) {
      'use strict';
      r.d(t, {
        $C: function () {
          return T;
        },
        $I: function () {
          return w;
        },
        A5: function () {
          return _;
        },
        B8: function () {
          return E;
        },
        BA: function () {
          return o;
        },
        C2: function () {
          return m;
        },
        Ce: function () {
          return x;
        },
        EV: function () {
          return b;
        },
        Eu: function () {
          return U;
        },
        Hf: function () {
          return a;
        },
        Ig: function () {
          return P;
        },
        Ih: function () {
          return R;
        },
        N0: function () {
          return D;
        },
        P_: function () {
          return B;
        },
        Q6: function () {
          return f;
        },
        RR: function () {
          return $;
        },
        Sn: function () {
          return u;
        },
        VI: function () {
          return A;
        },
        Xd: function () {
          return W;
        },
        Z1: function () {
          return O;
        },
        ZE: function () {
          return S;
        },
        cB: function () {
          return k;
        },
        cE: function () {
          return g;
        },
        d1: function () {
          return i;
        },
        e9: function () {
          return z;
        },
        ek: function () {
          return C;
        },
        er: function () {
          return y;
        },
        es: function () {
          return s;
        },
        gr: function () {
          return N;
        },
        hu: function () {
          return l;
        },
        iN: function () {
          return F;
        },
        iQ: function () {
          return j;
        },
        ix: function () {
          return c;
        },
        jZ: function () {
          return n;
        },
        jk: function () {
          return H;
        },
        nn: function () {
          return p;
        },
        o0: function () {
          return h;
        },
        o6: function () {
          return d;
        },
        pl: function () {
          return M;
        },
        vd: function () {
          return V;
        },
        vx: function () {
          return v;
        },
        wO: function () {
          return L;
        },
        ym: function () {
          return I;
        },
      });
      const o = {
          2: '#050505',
          4: '#0a0a0a',
          6: '#0f0f0f',
          8: '#141414',
          10: '#1a1a1a',
          12: '#1f1f1f',
          14: '#242424',
          16: '#292929',
          18: '#2e2e2e',
          20: '#333333',
          22: '#383838',
          24: '#3d3d3d',
          26: '#424242',
          28: '#474747',
          30: '#4d4d4d',
          32: '#525252',
          34: '#575757',
          36: '#5c5c5c',
          38: '#616161',
          40: '#666666',
          42: '#6b6b6b',
          44: '#707070',
          46: '#757575',
          48: '#7a7a7a',
          50: '#808080',
          52: '#858585',
          54: '#8a8a8a',
          56: '#8f8f8f',
          58: '#949494',
          60: '#999999',
          62: '#9e9e9e',
          64: '#a3a3a3',
          66: '#a8a8a8',
          68: '#adadad',
          70: '#b3b3b3',
          72: '#b8b8b8',
          74: '#bdbdbd',
          76: '#c2c2c2',
          78: '#c7c7c7',
          80: '#cccccc',
          82: '#d1d1d1',
          84: '#d6d6d6',
          86: '#dbdbdb',
          88: '#e0e0e0',
          90: '#e6e6e6',
          92: '#ebebeb',
          94: '#f0f0f0',
          96: '#f5f5f5',
          98: '#fafafa',
        },
        n = {
          5: 'rgba(255, 255, 255, 0.05)',
          10: 'rgba(255, 255, 255, 0.1)',
          20: 'rgba(255, 255, 255, 0.2)',
          30: 'rgba(255, 255, 255, 0.3)',
          40: 'rgba(255, 255, 255, 0.4)',
          50: 'rgba(255, 255, 255, 0.5)',
          60: 'rgba(255, 255, 255, 0.6)',
          70: 'rgba(255, 255, 255, 0.7)',
          80: 'rgba(255, 255, 255, 0.8)',
          90: 'rgba(255, 255, 255, 0.9)',
        },
        a = {
          5: 'rgba(0, 0, 0, 0.05)',
          10: 'rgba(0, 0, 0, 0.1)',
          20: 'rgba(0, 0, 0, 0.2)',
          30: 'rgba(0, 0, 0, 0.3)',
          40: 'rgba(0, 0, 0, 0.4)',
          50: 'rgba(0, 0, 0, 0.5)',
          60: 'rgba(0, 0, 0, 0.6)',
          70: 'rgba(0, 0, 0, 0.7)',
          80: 'rgba(0, 0, 0, 0.8)',
          90: 'rgba(0, 0, 0, 0.9)',
        },
        i = {
          5: 'rgba(26, 26, 26, 0.05)',
          10: 'rgba(26, 26, 26, 0.1)',
          20: 'rgba(26, 26, 26, 0.2)',
          30: 'rgba(26, 26, 26, 0.3)',
          40: 'rgba(26, 26, 26, 0.4)',
          50: 'rgba(26, 26, 26, 0.5)',
          60: 'rgba(26, 26, 26, 0.6)',
          70: 'rgba(26, 26, 26, 0.7)',
          80: 'rgba(26, 26, 26, 0.8)',
          90: 'rgba(26, 26, 26, 0.9)',
        },
        s = {
          5: 'rgba(31, 31, 31, 0.05)',
          10: 'rgba(31, 31, 31, 0.1)',
          20: 'rgba(31, 31, 31, 0.2)',
          30: 'rgba(31, 31, 31, 0.3)',
          40: 'rgba(31, 31, 31, 0.4)',
          50: 'rgba(31, 31, 31, 0.5)',
          60: 'rgba(31, 31, 31, 0.6)',
          70: 'rgba(31, 31, 31, 0.7)',
          80: 'rgba(31, 31, 31, 0.8)',
          90: 'rgba(31, 31, 31, 0.9)',
        },
        l = {
          5: 'rgba(36, 36, 36, 0.05)',
          10: 'rgba(36, 36, 36, 0.1)',
          20: 'rgba(36, 36, 36, 0.2)',
          30: 'rgba(36, 36, 36, 0.3)',
          40: 'rgba(36, 36, 36, 0.4)',
          50: 'rgba(36, 36, 36, 0.5)',
          60: 'rgba(36, 36, 36, 0.6)',
          70: 'rgba(36, 36, 36, 0.7)',
          80: 'rgba(36, 36, 36, 0.8)',
          90: 'rgba(36, 36, 36, 0.9)',
        },
        c = '#ffffff',
        u = '#000000',
        d = {
          shade50: '#130204',
          shade40: '#230308',
          shade30: '#420610',
          shade20: '#590815',
          shade10: '#690a19',
          primary: '#750b1c',
          tint10: '#861b2c',
          tint20: '#962f3f',
          tint30: '#ac4f5e',
          tint40: '#d69ca5',
          tint50: '#e9c7cd',
          tint60: '#f9f0f2',
        },
        h = {
          shade50: '#200205',
          shade40: '#3b0509',
          shade30: '#6e0811',
          shade20: '#960b18',
          shade10: '#b10e1c',
          primary: '#c50f1f',
          tint10: '#cc2635',
          tint20: '#d33f4c',
          tint30: '#dc626d',
          tint40: '#eeacb2',
          tint50: '#f6d1d5',
          tint60: '#fdf3f4',
        },
        f = {
          shade50: '#210809',
          shade40: '#3f1011',
          shade30: '#751d1f',
          shade20: '#9f282b',
          shade10: '#bc2f32',
          primary: '#d13438',
          tint10: '#d7494c',
          tint20: '#dc5e62',
          tint30: '#e37d80',
          tint40: '#f1bbbc',
          tint50: '#f8dadb',
          tint60: '#fdf6f6',
        },
        p = {
          shade50: '#230900',
          shade40: '#411200',
          shade30: '#7a2101',
          shade20: '#a62d01',
          shade10: '#c43501',
          primary: '#da3b01',
          tint10: '#de501c',
          tint20: '#e36537',
          tint30: '#e9835e',
          tint40: '#f4bfab',
          tint50: '#f9dcd1',
          tint60: '#fdf6f3',
        },
        g = {
          shade50: '#200d03',
          shade40: '#3d1805',
          shade30: '#712d09',
          shade20: '#9a3d0c',
          shade10: '#b6480e',
          primary: '#ca5010',
          tint10: '#d06228',
          tint20: '#d77440',
          tint30: '#df8e64',
          tint40: '#efc4ad',
          tint50: '#f7dfd2',
          tint60: '#fdf7f4',
        },
        m = {
          shade50: '#291600',
          shade40: '#4d2a00',
          shade30: '#8f4e00',
          shade20: '#c26a00',
          shade10: '#e67e00',
          primary: '#ff8c00',
          tint10: '#ff9a1f',
          tint20: '#ffa83d',
          tint30: '#ffba66',
          tint40: '#ffddb3',
          tint50: '#ffedd6',
          tint60: '#fffaf5',
        },
        v = {
          shade50: '#251a00',
          shade40: '#463100',
          shade30: '#835b00',
          shade20: '#b27c00',
          shade10: '#d39300',
          primary: '#eaa300',
          tint10: '#edad1c',
          tint20: '#efb839',
          tint30: '#f2c661',
          tint40: '#f9e2ae',
          tint50: '#fcefd3',
          tint60: '#fefbf4',
        },
        y = {
          primary: '#fde300',
          shade10: '#e4cc00',
          shade20: '#c0ad00',
          shade30: '#817400',
          shade40: '#4c4400',
          shade50: '#282400',
          tint10: '#fde61e',
          tint20: '#fdea3d',
          tint30: '#feee66',
          tint40: '#fef7b2',
          tint50: '#fffad6',
          tint60: '#fffef5',
        },
        b = {
          shade50: '#1f1900',
          shade40: '#3a2f00',
          shade30: '#6c5700',
          shade20: '#937700',
          shade10: '#ae8c00',
          primary: '#c19c00',
          tint10: '#c8a718',
          tint20: '#d0b232',
          tint30: '#dac157',
          tint40: '#ecdfa5',
          tint50: '#f5eece',
          tint60: '#fdfbf2',
        },
        k = {
          shade50: '#181202',
          shade40: '#2e2103',
          shade30: '#553e06',
          shade20: '#745408',
          shade10: '#89640a',
          primary: '#986f0b',
          tint10: '#a47d1e',
          tint20: '#b18c34',
          tint30: '#c1a256',
          tint40: '#e0cea2',
          tint50: '#efe4cb',
          tint60: '#fbf8f2',
        },
        B = {
          shade50: '#170e07',
          shade40: '#2b1a0e',
          shade30: '#50301a',
          shade20: '#6c4123',
          shade10: '#804d29',
          primary: '#8e562e',
          tint10: '#9c663f',
          tint20: '#a97652',
          tint30: '#bb8f6f',
          tint40: '#ddc3b0',
          tint50: '#edded3',
          tint60: '#faf7f4',
        },
        P = {
          shade50: '#0c1501',
          shade40: '#162702',
          shade30: '#294903',
          shade20: '#376304',
          shade10: '#427505',
          primary: '#498205',
          tint10: '#599116',
          tint20: '#6ba02b',
          tint30: '#85b44c',
          tint40: '#bdd99b',
          tint50: '#dbebc7',
          tint60: '#f6faf0',
        },
        w = {
          shade50: '#002111',
          shade40: '#003d20',
          shade30: '#00723b',
          shade20: '#009b51',
          shade10: '#00b85f',
          primary: '#00cc6a',
          tint10: '#19d279',
          tint20: '#34d889',
          tint30: '#5ae0a0',
          tint40: '#a8f0cd',
          tint50: '#cff7e4',
          tint60: '#f3fdf8',
        },
        S = {
          shade50: '#031a02',
          shade40: '#063004',
          shade30: '#0b5a08',
          shade20: '#0e7a0b',
          shade10: '#11910d',
          primary: '#13a10e',
          tint10: '#27ac22',
          tint20: '#3db838',
          tint30: '#5ec75a',
          tint40: '#a7e3a5',
          tint50: '#cef0cd',
          tint60: '#f2fbf2',
        },
        C = {
          shade50: '#031403',
          shade40: '#052505',
          shade30: '#094509',
          shade20: '#0c5e0c',
          shade10: '#0e700e',
          primary: '#107c10',
          tint10: '#218c21',
          tint20: '#359b35',
          tint30: '#54b054',
          tint40: '#9fd89f',
          tint50: '#c9eac9',
          tint60: '#f1faf1',
        },
        x = {
          shade50: '#021102',
          shade40: '#032003',
          shade30: '#063b06',
          shade20: '#085108',
          shade10: '#0a5f0a',
          primary: '#0b6a0b',
          tint10: '#1a7c1a',
          tint20: '#2d8e2d',
          tint30: '#4da64d',
          tint40: '#9ad29a',
          tint50: '#c6e7c6',
          tint60: '#f0f9f0',
        },
        E = {
          shade50: '#001d1f',
          shade40: '#00373a',
          shade30: '#00666d',
          shade20: '#008b94',
          shade10: '#00a5af',
          primary: '#00b7c3',
          tint10: '#18bfca',
          tint20: '#32c8d1',
          tint30: '#58d3db',
          tint40: '#a6e9ed',
          tint50: '#cef3f5',
          tint60: '#f2fcfd',
        },
        T = {
          shade50: '#001516',
          shade40: '#012728',
          shade30: '#02494c',
          shade20: '#026467',
          shade10: '#037679',
          primary: '#038387',
          tint10: '#159195',
          tint20: '#2aa0a4',
          tint30: '#4cb4b7',
          tint40: '#9bd9db',
          tint50: '#c7ebec',
          tint60: '#f0fafa',
        },
        N = {
          shade50: '#000f12',
          shade40: '#001b22',
          shade30: '#00333f',
          shade20: '#004555',
          shade10: '#005265',
          primary: '#005b70',
          tint10: '#0f6c81',
          tint20: '#237d92',
          tint30: '#4496a9',
          tint40: '#94c8d4',
          tint50: '#c3e1e8',
          tint60: '#eff7f9',
        },
        F = {
          shade50: '#001322',
          shade40: '#002440',
          shade30: '#004377',
          shade20: '#005ba1',
          shade10: '#006cbf',
          primary: '#0078d4',
          tint10: '#1a86d9',
          tint20: '#3595de',
          tint30: '#5caae5',
          tint40: '#a9d3f2',
          tint50: '#d0e7f8',
          tint60: '#f3f9fd',
        },
        A = {
          shade50: '#000c16',
          shade40: '#00172a',
          shade30: '#002c4e',
          shade20: '#003b6a',
          shade10: '#00467e',
          primary: '#004e8c',
          tint10: '#125e9a',
          tint20: '#286fa8',
          tint30: '#4a89ba',
          tint40: '#9abfdc',
          tint50: '#c7dced',
          tint60: '#f0f6fa',
        },
        L = {
          shade50: '#0d1126',
          shade40: '#182047',
          shade30: '#2c3c85',
          shade20: '#3c51b4',
          shade10: '#4760d5',
          primary: '#4f6bed',
          tint10: '#637cef',
          tint20: '#778df1',
          tint30: '#93a4f4',
          tint40: '#c8d1fa',
          tint50: '#e1e6fc',
          tint60: '#f7f9fe',
        },
        R = {
          shade50: '#00061d',
          shade40: '#000c36',
          shade30: '#001665',
          shade20: '#001e89',
          shade10: '#0023a2',
          primary: '#0027b4',
          tint10: '#173bbd',
          tint20: '#3050c6',
          tint30: '#546fd2',
          tint40: '#a3b2e8',
          tint50: '#ccd5f3',
          tint60: '#f2f4fc',
        },
        D = {
          shade50: '#120f25',
          shade40: '#221d46',
          shade30: '#3f3682',
          shade20: '#5649b0',
          shade10: '#6656d1',
          primary: '#7160e8',
          tint10: '#8172eb',
          tint20: '#9184ee',
          tint30: '#a79cf1',
          tint40: '#d2ccf8',
          tint50: '#e7e4fb',
          tint60: '#f9f8fe',
        },
        H = {
          shade50: '#0f0717',
          shade40: '#1c0e2b',
          shade30: '#341a51',
          shade20: '#46236e',
          shade10: '#532982',
          primary: '#5c2e91',
          tint10: '#6b3f9e',
          tint20: '#7c52ab',
          tint30: '#9470bd',
          tint40: '#c6b1de',
          tint50: '#e0d3ed',
          tint60: '#f7f4fb',
        },
        M = {
          shade50: '#160418',
          shade40: '#29072e',
          shade30: '#4c0d55',
          shade20: '#671174',
          shade10: '#7a1589',
          primary: '#881798',
          tint10: '#952aa4',
          tint20: '#a33fb1',
          tint30: '#b55fc1',
          tint40: '#d9a7e0',
          tint50: '#eaceef',
          tint60: '#faf2fb',
        },
        O = {
          shade50: '#1f091d',
          shade40: '#3a1136',
          shade30: '#6d2064',
          shade20: '#932b88',
          shade10: '#af33a1',
          primary: '#c239b3',
          tint10: '#c94cbc',
          tint20: '#d161c4',
          tint30: '#da7ed0',
          tint40: '#edbbe7',
          tint50: '#f5daf2',
          tint60: '#fdf5fc',
        },
        _ = {
          shade50: '#1c0b1f',
          shade40: '#35153a',
          shade30: '#63276d',
          shade20: '#863593',
          shade10: '#9f3faf',
          primary: '#b146c2',
          tint10: '#ba58c9',
          tint20: '#c36bd1',
          tint30: '#cf87da',
          tint40: '#e6bfed',
          tint50: '#f2dcf5',
          tint60: '#fcf6fd',
        },
        j = {
          shade50: '#24091b',
          shade40: '#441232',
          shade30: '#80215d',
          shade20: '#ad2d7e',
          shade10: '#cd3595',
          primary: '#e43ba6',
          tint10: '#e750b0',
          tint20: '#ea66ba',
          tint30: '#ef85c8',
          tint40: '#f7c0e3',
          tint50: '#fbddf0',
          tint60: '#fef6fb',
        },
        I = {
          shade50: '#1f0013',
          shade40: '#390024',
          shade30: '#6b0043',
          shade20: '#91005a',
          shade10: '#ac006b',
          primary: '#bf0077',
          tint10: '#c71885',
          tint20: '#ce3293',
          tint30: '#d957a8',
          tint40: '#eca5d1',
          tint50: '#f5cee6',
          tint60: '#fcf2f9',
        },
        V = {
          shade50: '#13000c',
          shade40: '#240017',
          shade30: '#43002b',
          shade20: '#5a003b',
          shade10: '#6b0045',
          primary: '#77004d',
          tint10: '#87105d',
          tint20: '#98246f',
          tint30: '#ad4589',
          tint40: '#d696c0',
          tint50: '#e9c4dc',
          tint60: '#faf0f6',
        },
        z = {
          shade50: '#141313',
          shade40: '#252323',
          shade30: '#444241',
          shade20: '#5d5958',
          shade10: '#6e6968',
          primary: '#7a7574',
          tint10: '#8a8584',
          tint20: '#9a9594',
          tint30: '#afabaa',
          tint40: '#d7d4d4',
          tint50: '#eae8e8',
          tint60: '#faf9f9',
        },
        $ = {
          shade50: '#0f0e0e',
          shade40: '#1c1b1a',
          shade30: '#343231',
          shade20: '#474443',
          shade10: '#54514f',
          primary: '#5d5a58',
          tint10: '#706d6b',
          tint20: '#84817e',
          tint30: '#9e9b99',
          tint40: '#cecccb',
          tint50: '#e5e4e3',
          tint60: '#f8f8f8',
        },
        W = {
          shade50: '#111314',
          shade40: '#1f2426',
          shade30: '#3b4447',
          shade20: '#505c60',
          shade10: '#5f6d71',
          primary: '#69797e',
          tint10: '#79898d',
          tint20: '#89989d',
          tint30: '#a0adb2',
          tint40: '#cdd6d8',
          tint50: '#e4e9ea',
          tint60: '#f8f9fa',
        },
        U = {
          shade50: '#090a0b',
          shade40: '#111315',
          shade30: '#202427',
          shade20: '#2b3135',
          shade10: '#333a3f',
          primary: '#394146',
          tint10: '#4d565c',
          tint20: '#626c72',
          tint30: '#808a90',
          tint40: '#bcc3c7',
          tint50: '#dbdfe1',
          tint60: '#f6f7f8',
        };
    },
    4096: function (e, t, r) {
      'use strict';
      r.d(t, {
        y: function () {
          return o;
        },
      });
      const o = {
        curveAccelerateMax: 'cubic-bezier(1,0,1,1)',
        curveAccelerateMid: 'cubic-bezier(0.7,0,1,0.5)',
        curveAccelerateMin: 'cubic-bezier(0.8,0,1,1)',
        curveDecelerateMax: 'cubic-bezier(0,0,0,1)',
        curveDecelerateMid: 'cubic-bezier(0.1,0.9,0.2,1)',
        curveDecelerateMin: 'cubic-bezier(0.33,0,0.1,1)',
        curveEasyEaseMax: 'cubic-bezier(0.8,0,0.1,1)',
        curveEasyEase: 'cubic-bezier(0.33,0,0.67,1)',
        curveLinear: 'cubic-bezier(0,0,1,1)',
      };
    },
    263: function (e, t, r) {
      'use strict';
      r.d(t, {
        l: function () {
          return o;
        },
      });
      const o = {
        durationUltraFast: '50ms',
        durationFaster: '100ms',
        durationFast: '150ms',
        durationNormal: '200ms',
        durationSlow: '300ms',
        durationSlower: '400ms',
        durationUltraSlow: '500ms',
      };
    },
    1131: function (e, t, r) {
      'use strict';
      r.d(t, {
        CH: function () {
          return o;
        },
        Vl: function () {
          return i;
        },
        tO: function () {
          return n;
        },
        vC: function () {
          return a;
        },
      });
      const o = {
          fontSizeBase100: '10px',
          fontSizeBase200: '12px',
          fontSizeBase300: '14px',
          fontSizeBase400: '16px',
          fontSizeBase500: '20px',
          fontSizeBase600: '24px',
          fontSizeHero700: '28px',
          fontSizeHero800: '32px',
          fontSizeHero900: '40px',
          fontSizeHero1000: '68px',
        },
        n = {
          lineHeightBase100: '14px',
          lineHeightBase200: '16px',
          lineHeightBase300: '20px',
          lineHeightBase400: '22px',
          lineHeightBase500: '28px',
          lineHeightBase600: '32px',
          lineHeightHero700: '36px',
          lineHeightHero800: '40px',
          lineHeightHero900: '52px',
          lineHeightHero1000: '92px',
        },
        a = {
          fontWeightRegular: 400,
          fontWeightMedium: 500,
          fontWeightSemibold: 600,
          fontWeightBold: 700,
        },
        i = {
          fontFamilyBase:
            "'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif",
          fontFamilyMonospace: "Consolas, 'Courier New', Courier, monospace",
          fontFamilyNumeric:
            "Bahnschrift, 'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif",
        };
    },
    1597: function (e, t, r) {
      'use strict';
      r.d(t, {
        e: function () {
          return g;
        },
        l: function () {
          return p;
        },
      });
      const o = '0',
        n = '2px',
        a = '4px',
        i = '6px',
        s = '8px',
        l = '10px',
        c = '12px',
        u = '16px',
        d = '20px',
        h = '24px',
        f = '32px',
        p = {
          spacingHorizontalNone: o,
          spacingHorizontalXXS: n,
          spacingHorizontalXS: a,
          spacingHorizontalSNudge: i,
          spacingHorizontalS: s,
          spacingHorizontalMNudge: l,
          spacingHorizontalM: c,
          spacingHorizontalL: u,
          spacingHorizontalXL: d,
          spacingHorizontalXXL: h,
          spacingHorizontalXXXL: f,
        },
        g = {
          spacingVerticalNone: o,
          spacingVerticalXXS: n,
          spacingVerticalXS: a,
          spacingVerticalSNudge: i,
          spacingVerticalS: s,
          spacingVerticalMNudge: l,
          spacingVerticalM: c,
          spacingVerticalL: u,
          spacingVerticalXL: d,
          spacingVerticalXXL: h,
          spacingVerticalXXXL: f,
        };
    },
    3292: function (e, t, r) {
      'use strict';
      r.d(t, {
        G: function () {
          return o;
        },
      });
      const o = {
        strokeWidthThin: '1px',
        strokeWidthThick: '2px',
        strokeWidthThicker: '3px',
        strokeWidthThickest: '4px',
      };
    },
    9336: function (e, t, r) {
      'use strict';
      r.d(t, {
        PN: function () {
          return o;
        },
        X: function () {
          return n;
        },
      });
      const o = [
          'red',
          'green',
          'darkOrange',
          'yellow',
          'berry',
          'lightGreen',
          'marigold',
        ],
        n = [
          'darkRed',
          'cranberry',
          'pumpkin',
          'peach',
          'gold',
          'brass',
          'brown',
          'forest',
          'seafoam',
          'darkGreen',
          'lightTeal',
          'teal',
          'steel',
          'blue',
          'royalBlue',
          'cornflower',
          'navy',
          'lavender',
          'purple',
          'grape',
          'lilac',
          'pink',
          'magenta',
          'plum',
          'beige',
          'mink',
          'platinum',
          'anchor',
        ];
    },
    3552: function (e, t, r) {
      'use strict';
      r.d(t, {
        T: function () {
          return o;
        },
      });
      const o = {
        colorNeutralForeground1: 'var(--colorNeutralForeground1)',
        colorNeutralForeground1Hover: 'var(--colorNeutralForeground1Hover)',
        colorNeutralForeground1Pressed: 'var(--colorNeutralForeground1Pressed)',
        colorNeutralForeground1Selected: 'var(--colorNeutralForeground1Selected)',
        colorNeutralForeground2: 'var(--colorNeutralForeground2)',
        colorNeutralForeground2Hover: 'var(--colorNeutralForeground2Hover)',
        colorNeutralForeground2Pressed: 'var(--colorNeutralForeground2Pressed)',
        colorNeutralForeground2Selected: 'var(--colorNeutralForeground2Selected)',
        colorNeutralForeground2BrandHover: 'var(--colorNeutralForeground2BrandHover)',
        colorNeutralForeground2BrandPressed: 'var(--colorNeutralForeground2BrandPressed)',
        colorNeutralForeground2BrandSelected:
          'var(--colorNeutralForeground2BrandSelected)',
        colorNeutralForeground3: 'var(--colorNeutralForeground3)',
        colorNeutralForeground3Hover: 'var(--colorNeutralForeground3Hover)',
        colorNeutralForeground3Pressed: 'var(--colorNeutralForeground3Pressed)',
        colorNeutralForeground3Selected: 'var(--colorNeutralForeground3Selected)',
        colorNeutralForeground3BrandHover: 'var(--colorNeutralForeground3BrandHover)',
        colorNeutralForeground3BrandPressed: 'var(--colorNeutralForeground3BrandPressed)',
        colorNeutralForeground3BrandSelected:
          'var(--colorNeutralForeground3BrandSelected)',
        colorNeutralForeground4: 'var(--colorNeutralForeground4)',
        colorNeutralForegroundDisabled: 'var(--colorNeutralForegroundDisabled)',
        colorBrandForegroundLink: 'var(--colorBrandForegroundLink)',
        colorBrandForegroundLinkHover: 'var(--colorBrandForegroundLinkHover)',
        colorBrandForegroundLinkPressed: 'var(--colorBrandForegroundLinkPressed)',
        colorBrandForegroundLinkSelected: 'var(--colorBrandForegroundLinkSelected)',
        colorNeutralForeground2Link: 'var(--colorNeutralForeground2Link)',
        colorNeutralForeground2LinkHover: 'var(--colorNeutralForeground2LinkHover)',
        colorNeutralForeground2LinkPressed: 'var(--colorNeutralForeground2LinkPressed)',
        colorNeutralForeground2LinkSelected: 'var(--colorNeutralForeground2LinkSelected)',
        colorCompoundBrandForeground1: 'var(--colorCompoundBrandForeground1)',
        colorCompoundBrandForeground1Hover: 'var(--colorCompoundBrandForeground1Hover)',
        colorCompoundBrandForeground1Pressed:
          'var(--colorCompoundBrandForeground1Pressed)',
        colorNeutralForegroundOnBrand: 'var(--colorNeutralForegroundOnBrand)',
        colorNeutralForegroundInverted: 'var(--colorNeutralForegroundInverted)',
        colorNeutralForegroundInvertedHover: 'var(--colorNeutralForegroundInvertedHover)',
        colorNeutralForegroundInvertedPressed:
          'var(--colorNeutralForegroundInvertedPressed)',
        colorNeutralForegroundInvertedSelected:
          'var(--colorNeutralForegroundInvertedSelected)',
        colorNeutralForegroundInverted2: 'var(--colorNeutralForegroundInverted2)',
        colorNeutralForegroundStaticInverted:
          'var(--colorNeutralForegroundStaticInverted)',
        colorNeutralForegroundInvertedLink: 'var(--colorNeutralForegroundInvertedLink)',
        colorNeutralForegroundInvertedLinkHover:
          'var(--colorNeutralForegroundInvertedLinkHover)',
        colorNeutralForegroundInvertedLinkPressed:
          'var(--colorNeutralForegroundInvertedLinkPressed)',
        colorNeutralForegroundInvertedLinkSelected:
          'var(--colorNeutralForegroundInvertedLinkSelected)',
        colorNeutralForegroundInvertedDisabled:
          'var(--colorNeutralForegroundInvertedDisabled)',
        colorBrandForeground1: 'var(--colorBrandForeground1)',
        colorBrandForeground2: 'var(--colorBrandForeground2)',
        colorNeutralForeground1Static: 'var(--colorNeutralForeground1Static)',
        colorBrandForegroundInverted: 'var(--colorBrandForegroundInverted)',
        colorBrandForegroundInvertedHover: 'var(--colorBrandForegroundInvertedHover)',
        colorBrandForegroundInvertedPressed: 'var(--colorBrandForegroundInvertedPressed)',
        colorBrandForegroundOnLight: 'var(--colorBrandForegroundOnLight)',
        colorBrandForegroundOnLightHover: 'var(--colorBrandForegroundOnLightHover)',
        colorBrandForegroundOnLightPressed: 'var(--colorBrandForegroundOnLightPressed)',
        colorBrandForegroundOnLightSelected: 'var(--colorBrandForegroundOnLightSelected)',
        colorNeutralBackground1: 'var(--colorNeutralBackground1)',
        colorNeutralBackground1Hover: 'var(--colorNeutralBackground1Hover)',
        colorNeutralBackground1Pressed: 'var(--colorNeutralBackground1Pressed)',
        colorNeutralBackground1Selected: 'var(--colorNeutralBackground1Selected)',
        colorNeutralBackground2: 'var(--colorNeutralBackground2)',
        colorNeutralBackground2Hover: 'var(--colorNeutralBackground2Hover)',
        colorNeutralBackground2Pressed: 'var(--colorNeutralBackground2Pressed)',
        colorNeutralBackground2Selected: 'var(--colorNeutralBackground2Selected)',
        colorNeutralBackground3: 'var(--colorNeutralBackground3)',
        colorNeutralBackground3Hover: 'var(--colorNeutralBackground3Hover)',
        colorNeutralBackground3Pressed: 'var(--colorNeutralBackground3Pressed)',
        colorNeutralBackground3Selected: 'var(--colorNeutralBackground3Selected)',
        colorNeutralBackground4: 'var(--colorNeutralBackground4)',
        colorNeutralBackground4Hover: 'var(--colorNeutralBackground4Hover)',
        colorNeutralBackground4Pressed: 'var(--colorNeutralBackground4Pressed)',
        colorNeutralBackground4Selected: 'var(--colorNeutralBackground4Selected)',
        colorNeutralBackground5: 'var(--colorNeutralBackground5)',
        colorNeutralBackground5Hover: 'var(--colorNeutralBackground5Hover)',
        colorNeutralBackground5Pressed: 'var(--colorNeutralBackground5Pressed)',
        colorNeutralBackground5Selected: 'var(--colorNeutralBackground5Selected)',
        colorNeutralBackground6: 'var(--colorNeutralBackground6)',
        colorNeutralBackgroundInverted: 'var(--colorNeutralBackgroundInverted)',
        colorNeutralBackgroundStatic: 'var(--colorNeutralBackgroundStatic)',
        colorNeutralBackgroundAlpha: 'var(--colorNeutralBackgroundAlpha)',
        colorNeutralBackgroundAlpha2: 'var(--colorNeutralBackgroundAlpha2)',
        colorSubtleBackground: 'var(--colorSubtleBackground)',
        colorSubtleBackgroundHover: 'var(--colorSubtleBackgroundHover)',
        colorSubtleBackgroundPressed: 'var(--colorSubtleBackgroundPressed)',
        colorSubtleBackgroundSelected: 'var(--colorSubtleBackgroundSelected)',
        colorSubtleBackgroundLightAlphaHover:
          'var(--colorSubtleBackgroundLightAlphaHover)',
        colorSubtleBackgroundLightAlphaPressed:
          'var(--colorSubtleBackgroundLightAlphaPressed)',
        colorSubtleBackgroundLightAlphaSelected:
          'var(--colorSubtleBackgroundLightAlphaSelected)',
        colorSubtleBackgroundInverted: 'var(--colorSubtleBackgroundInverted)',
        colorSubtleBackgroundInvertedHover: 'var(--colorSubtleBackgroundInvertedHover)',
        colorSubtleBackgroundInvertedPressed:
          'var(--colorSubtleBackgroundInvertedPressed)',
        colorSubtleBackgroundInvertedSelected:
          'var(--colorSubtleBackgroundInvertedSelected)',
        colorTransparentBackground: 'var(--colorTransparentBackground)',
        colorTransparentBackgroundHover: 'var(--colorTransparentBackgroundHover)',
        colorTransparentBackgroundPressed: 'var(--colorTransparentBackgroundPressed)',
        colorTransparentBackgroundSelected: 'var(--colorTransparentBackgroundSelected)',
        colorNeutralBackgroundDisabled: 'var(--colorNeutralBackgroundDisabled)',
        colorNeutralBackgroundInvertedDisabled:
          'var(--colorNeutralBackgroundInvertedDisabled)',
        colorNeutralStencil1: 'var(--colorNeutralStencil1)',
        colorNeutralStencil2: 'var(--colorNeutralStencil2)',
        colorNeutralStencil1Alpha: 'var(--colorNeutralStencil1Alpha)',
        colorNeutralStencil2Alpha: 'var(--colorNeutralStencil2Alpha)',
        colorBackgroundOverlay: 'var(--colorBackgroundOverlay)',
        colorScrollbarOverlay: 'var(--colorScrollbarOverlay)',
        colorBrandBackground: 'var(--colorBrandBackground)',
        colorBrandBackgroundHover: 'var(--colorBrandBackgroundHover)',
        colorBrandBackgroundPressed: 'var(--colorBrandBackgroundPressed)',
        colorBrandBackgroundSelected: 'var(--colorBrandBackgroundSelected)',
        colorCompoundBrandBackground: 'var(--colorCompoundBrandBackground)',
        colorCompoundBrandBackgroundHover: 'var(--colorCompoundBrandBackgroundHover)',
        colorCompoundBrandBackgroundPressed: 'var(--colorCompoundBrandBackgroundPressed)',
        colorBrandBackgroundStatic: 'var(--colorBrandBackgroundStatic)',
        colorBrandBackground2: 'var(--colorBrandBackground2)',
        colorBrandBackgroundInverted: 'var(--colorBrandBackgroundInverted)',
        colorBrandBackgroundInvertedHover: 'var(--colorBrandBackgroundInvertedHover)',
        colorBrandBackgroundInvertedPressed: 'var(--colorBrandBackgroundInvertedPressed)',
        colorBrandBackgroundInvertedSelected:
          'var(--colorBrandBackgroundInvertedSelected)',
        colorNeutralStrokeAccessible: 'var(--colorNeutralStrokeAccessible)',
        colorNeutralStrokeAccessibleHover: 'var(--colorNeutralStrokeAccessibleHover)',
        colorNeutralStrokeAccessiblePressed: 'var(--colorNeutralStrokeAccessiblePressed)',
        colorNeutralStrokeAccessibleSelected:
          'var(--colorNeutralStrokeAccessibleSelected)',
        colorNeutralStroke1: 'var(--colorNeutralStroke1)',
        colorNeutralStroke1Hover: 'var(--colorNeutralStroke1Hover)',
        colorNeutralStroke1Pressed: 'var(--colorNeutralStroke1Pressed)',
        colorNeutralStroke1Selected: 'var(--colorNeutralStroke1Selected)',
        colorNeutralStroke2: 'var(--colorNeutralStroke2)',
        colorNeutralStroke3: 'var(--colorNeutralStroke3)',
        colorNeutralStrokeOnBrand: 'var(--colorNeutralStrokeOnBrand)',
        colorNeutralStrokeOnBrand2: 'var(--colorNeutralStrokeOnBrand2)',
        colorNeutralStrokeOnBrand2Hover: 'var(--colorNeutralStrokeOnBrand2Hover)',
        colorNeutralStrokeOnBrand2Pressed: 'var(--colorNeutralStrokeOnBrand2Pressed)',
        colorNeutralStrokeOnBrand2Selected: 'var(--colorNeutralStrokeOnBrand2Selected)',
        colorBrandStroke1: 'var(--colorBrandStroke1)',
        colorBrandStroke2: 'var(--colorBrandStroke2)',
        colorCompoundBrandStroke: 'var(--colorCompoundBrandStroke)',
        colorCompoundBrandStrokeHover: 'var(--colorCompoundBrandStrokeHover)',
        colorCompoundBrandStrokePressed: 'var(--colorCompoundBrandStrokePressed)',
        colorNeutralStrokeDisabled: 'var(--colorNeutralStrokeDisabled)',
        colorNeutralStrokeInvertedDisabled: 'var(--colorNeutralStrokeInvertedDisabled)',
        colorTransparentStroke: 'var(--colorTransparentStroke)',
        colorTransparentStrokeInteractive: 'var(--colorTransparentStrokeInteractive)',
        colorTransparentStrokeDisabled: 'var(--colorTransparentStrokeDisabled)',
        colorNeutralStrokeAlpha: 'var(--colorNeutralStrokeAlpha)',
        colorStrokeFocus1: 'var(--colorStrokeFocus1)',
        colorStrokeFocus2: 'var(--colorStrokeFocus2)',
        colorNeutralShadowAmbient: 'var(--colorNeutralShadowAmbient)',
        colorNeutralShadowKey: 'var(--colorNeutralShadowKey)',
        colorNeutralShadowAmbientLighter: 'var(--colorNeutralShadowAmbientLighter)',
        colorNeutralShadowKeyLighter: 'var(--colorNeutralShadowKeyLighter)',
        colorNeutralShadowAmbientDarker: 'var(--colorNeutralShadowAmbientDarker)',
        colorNeutralShadowKeyDarker: 'var(--colorNeutralShadowKeyDarker)',
        colorBrandShadowAmbient: 'var(--colorBrandShadowAmbient)',
        colorBrandShadowKey: 'var(--colorBrandShadowKey)',
        colorPaletteRedBackground1: 'var(--colorPaletteRedBackground1)',
        colorPaletteRedBackground2: 'var(--colorPaletteRedBackground2)',
        colorPaletteRedBackground3: 'var(--colorPaletteRedBackground3)',
        colorPaletteRedBorderActive: 'var(--colorPaletteRedBorderActive)',
        colorPaletteRedBorder1: 'var(--colorPaletteRedBorder1)',
        colorPaletteRedBorder2: 'var(--colorPaletteRedBorder2)',
        colorPaletteRedForeground1: 'var(--colorPaletteRedForeground1)',
        colorPaletteRedForeground2: 'var(--colorPaletteRedForeground2)',
        colorPaletteRedForeground3: 'var(--colorPaletteRedForeground3)',
        colorPaletteRedForegroundInverted: 'var(--colorPaletteRedForegroundInverted)',
        colorPaletteGreenBackground1: 'var(--colorPaletteGreenBackground1)',
        colorPaletteGreenBackground2: 'var(--colorPaletteGreenBackground2)',
        colorPaletteGreenBackground3: 'var(--colorPaletteGreenBackground3)',
        colorPaletteGreenBorderActive: 'var(--colorPaletteGreenBorderActive)',
        colorPaletteGreenBorder1: 'var(--colorPaletteGreenBorder1)',
        colorPaletteGreenBorder2: 'var(--colorPaletteGreenBorder2)',
        colorPaletteGreenForeground1: 'var(--colorPaletteGreenForeground1)',
        colorPaletteGreenForeground2: 'var(--colorPaletteGreenForeground2)',
        colorPaletteGreenForeground3: 'var(--colorPaletteGreenForeground3)',
        colorPaletteGreenForegroundInverted: 'var(--colorPaletteGreenForegroundInverted)',
        colorPaletteDarkOrangeBackground1: 'var(--colorPaletteDarkOrangeBackground1)',
        colorPaletteDarkOrangeBackground2: 'var(--colorPaletteDarkOrangeBackground2)',
        colorPaletteDarkOrangeBackground3: 'var(--colorPaletteDarkOrangeBackground3)',
        colorPaletteDarkOrangeBorderActive: 'var(--colorPaletteDarkOrangeBorderActive)',
        colorPaletteDarkOrangeBorder1: 'var(--colorPaletteDarkOrangeBorder1)',
        colorPaletteDarkOrangeBorder2: 'var(--colorPaletteDarkOrangeBorder2)',
        colorPaletteDarkOrangeForeground1: 'var(--colorPaletteDarkOrangeForeground1)',
        colorPaletteDarkOrangeForeground2: 'var(--colorPaletteDarkOrangeForeground2)',
        colorPaletteDarkOrangeForeground3: 'var(--colorPaletteDarkOrangeForeground3)',
        colorPaletteYellowBackground1: 'var(--colorPaletteYellowBackground1)',
        colorPaletteYellowBackground2: 'var(--colorPaletteYellowBackground2)',
        colorPaletteYellowBackground3: 'var(--colorPaletteYellowBackground3)',
        colorPaletteYellowBorderActive: 'var(--colorPaletteYellowBorderActive)',
        colorPaletteYellowBorder1: 'var(--colorPaletteYellowBorder1)',
        colorPaletteYellowBorder2: 'var(--colorPaletteYellowBorder2)',
        colorPaletteYellowForeground1: 'var(--colorPaletteYellowForeground1)',
        colorPaletteYellowForeground2: 'var(--colorPaletteYellowForeground2)',
        colorPaletteYellowForeground3: 'var(--colorPaletteYellowForeground3)',
        colorPaletteYellowForegroundInverted:
          'var(--colorPaletteYellowForegroundInverted)',
        colorPaletteBerryBackground1: 'var(--colorPaletteBerryBackground1)',
        colorPaletteBerryBackground2: 'var(--colorPaletteBerryBackground2)',
        colorPaletteBerryBackground3: 'var(--colorPaletteBerryBackground3)',
        colorPaletteBerryBorderActive: 'var(--colorPaletteBerryBorderActive)',
        colorPaletteBerryBorder1: 'var(--colorPaletteBerryBorder1)',
        colorPaletteBerryBorder2: 'var(--colorPaletteBerryBorder2)',
        colorPaletteBerryForeground1: 'var(--colorPaletteBerryForeground1)',
        colorPaletteBerryForeground2: 'var(--colorPaletteBerryForeground2)',
        colorPaletteBerryForeground3: 'var(--colorPaletteBerryForeground3)',
        colorPaletteMarigoldBackground1: 'var(--colorPaletteMarigoldBackground1)',
        colorPaletteMarigoldBackground2: 'var(--colorPaletteMarigoldBackground2)',
        colorPaletteMarigoldBackground3: 'var(--colorPaletteMarigoldBackground3)',
        colorPaletteMarigoldBorderActive: 'var(--colorPaletteMarigoldBorderActive)',
        colorPaletteMarigoldBorder1: 'var(--colorPaletteMarigoldBorder1)',
        colorPaletteMarigoldBorder2: 'var(--colorPaletteMarigoldBorder2)',
        colorPaletteMarigoldForeground1: 'var(--colorPaletteMarigoldForeground1)',
        colorPaletteMarigoldForeground2: 'var(--colorPaletteMarigoldForeground2)',
        colorPaletteMarigoldForeground3: 'var(--colorPaletteMarigoldForeground3)',
        colorPaletteLightGreenBackground1: 'var(--colorPaletteLightGreenBackground1)',
        colorPaletteLightGreenBackground2: 'var(--colorPaletteLightGreenBackground2)',
        colorPaletteLightGreenBackground3: 'var(--colorPaletteLightGreenBackground3)',
        colorPaletteLightGreenBorderActive: 'var(--colorPaletteLightGreenBorderActive)',
        colorPaletteLightGreenBorder1: 'var(--colorPaletteLightGreenBorder1)',
        colorPaletteLightGreenBorder2: 'var(--colorPaletteLightGreenBorder2)',
        colorPaletteLightGreenForeground1: 'var(--colorPaletteLightGreenForeground1)',
        colorPaletteLightGreenForeground2: 'var(--colorPaletteLightGreenForeground2)',
        colorPaletteLightGreenForeground3: 'var(--colorPaletteLightGreenForeground3)',
        colorPaletteAnchorBackground2: 'var(--colorPaletteAnchorBackground2)',
        colorPaletteAnchorBorderActive: 'var(--colorPaletteAnchorBorderActive)',
        colorPaletteAnchorForeground2: 'var(--colorPaletteAnchorForeground2)',
        colorPaletteBeigeBackground2: 'var(--colorPaletteBeigeBackground2)',
        colorPaletteBeigeBorderActive: 'var(--colorPaletteBeigeBorderActive)',
        colorPaletteBeigeForeground2: 'var(--colorPaletteBeigeForeground2)',
        colorPaletteBlueBackground2: 'var(--colorPaletteBlueBackground2)',
        colorPaletteBlueBorderActive: 'var(--colorPaletteBlueBorderActive)',
        colorPaletteBlueForeground2: 'var(--colorPaletteBlueForeground2)',
        colorPaletteBrassBackground2: 'var(--colorPaletteBrassBackground2)',
        colorPaletteBrassBorderActive: 'var(--colorPaletteBrassBorderActive)',
        colorPaletteBrassForeground2: 'var(--colorPaletteBrassForeground2)',
        colorPaletteBrownBackground2: 'var(--colorPaletteBrownBackground2)',
        colorPaletteBrownBorderActive: 'var(--colorPaletteBrownBorderActive)',
        colorPaletteBrownForeground2: 'var(--colorPaletteBrownForeground2)',
        colorPaletteCornflowerBackground2: 'var(--colorPaletteCornflowerBackground2)',
        colorPaletteCornflowerBorderActive: 'var(--colorPaletteCornflowerBorderActive)',
        colorPaletteCornflowerForeground2: 'var(--colorPaletteCornflowerForeground2)',
        colorPaletteCranberryBackground2: 'var(--colorPaletteCranberryBackground2)',
        colorPaletteCranberryBorderActive: 'var(--colorPaletteCranberryBorderActive)',
        colorPaletteCranberryForeground2: 'var(--colorPaletteCranberryForeground2)',
        colorPaletteDarkGreenBackground2: 'var(--colorPaletteDarkGreenBackground2)',
        colorPaletteDarkGreenBorderActive: 'var(--colorPaletteDarkGreenBorderActive)',
        colorPaletteDarkGreenForeground2: 'var(--colorPaletteDarkGreenForeground2)',
        colorPaletteDarkRedBackground2: 'var(--colorPaletteDarkRedBackground2)',
        colorPaletteDarkRedBorderActive: 'var(--colorPaletteDarkRedBorderActive)',
        colorPaletteDarkRedForeground2: 'var(--colorPaletteDarkRedForeground2)',
        colorPaletteForestBackground2: 'var(--colorPaletteForestBackground2)',
        colorPaletteForestBorderActive: 'var(--colorPaletteForestBorderActive)',
        colorPaletteForestForeground2: 'var(--colorPaletteForestForeground2)',
        colorPaletteGoldBackground2: 'var(--colorPaletteGoldBackground2)',
        colorPaletteGoldBorderActive: 'var(--colorPaletteGoldBorderActive)',
        colorPaletteGoldForeground2: 'var(--colorPaletteGoldForeground2)',
        colorPaletteGrapeBackground2: 'var(--colorPaletteGrapeBackground2)',
        colorPaletteGrapeBorderActive: 'var(--colorPaletteGrapeBorderActive)',
        colorPaletteGrapeForeground2: 'var(--colorPaletteGrapeForeground2)',
        colorPaletteLavenderBackground2: 'var(--colorPaletteLavenderBackground2)',
        colorPaletteLavenderBorderActive: 'var(--colorPaletteLavenderBorderActive)',
        colorPaletteLavenderForeground2: 'var(--colorPaletteLavenderForeground2)',
        colorPaletteLightTealBackground2: 'var(--colorPaletteLightTealBackground2)',
        colorPaletteLightTealBorderActive: 'var(--colorPaletteLightTealBorderActive)',
        colorPaletteLightTealForeground2: 'var(--colorPaletteLightTealForeground2)',
        colorPaletteLilacBackground2: 'var(--colorPaletteLilacBackground2)',
        colorPaletteLilacBorderActive: 'var(--colorPaletteLilacBorderActive)',
        colorPaletteLilacForeground2: 'var(--colorPaletteLilacForeground2)',
        colorPaletteMagentaBackground2: 'var(--colorPaletteMagentaBackground2)',
        colorPaletteMagentaBorderActive: 'var(--colorPaletteMagentaBorderActive)',
        colorPaletteMagentaForeground2: 'var(--colorPaletteMagentaForeground2)',
        colorPaletteMinkBackground2: 'var(--colorPaletteMinkBackground2)',
        colorPaletteMinkBorderActive: 'var(--colorPaletteMinkBorderActive)',
        colorPaletteMinkForeground2: 'var(--colorPaletteMinkForeground2)',
        colorPaletteNavyBackground2: 'var(--colorPaletteNavyBackground2)',
        colorPaletteNavyBorderActive: 'var(--colorPaletteNavyBorderActive)',
        colorPaletteNavyForeground2: 'var(--colorPaletteNavyForeground2)',
        colorPalettePeachBackground2: 'var(--colorPalettePeachBackground2)',
        colorPalettePeachBorderActive: 'var(--colorPalettePeachBorderActive)',
        colorPalettePeachForeground2: 'var(--colorPalettePeachForeground2)',
        colorPalettePinkBackground2: 'var(--colorPalettePinkBackground2)',
        colorPalettePinkBorderActive: 'var(--colorPalettePinkBorderActive)',
        colorPalettePinkForeground2: 'var(--colorPalettePinkForeground2)',
        colorPalettePlatinumBackground2: 'var(--colorPalettePlatinumBackground2)',
        colorPalettePlatinumBorderActive: 'var(--colorPalettePlatinumBorderActive)',
        colorPalettePlatinumForeground2: 'var(--colorPalettePlatinumForeground2)',
        colorPalettePlumBackground2: 'var(--colorPalettePlumBackground2)',
        colorPalettePlumBorderActive: 'var(--colorPalettePlumBorderActive)',
        colorPalettePlumForeground2: 'var(--colorPalettePlumForeground2)',
        colorPalettePumpkinBackground2: 'var(--colorPalettePumpkinBackground2)',
        colorPalettePumpkinBorderActive: 'var(--colorPalettePumpkinBorderActive)',
        colorPalettePumpkinForeground2: 'var(--colorPalettePumpkinForeground2)',
        colorPalettePurpleBackground2: 'var(--colorPalettePurpleBackground2)',
        colorPalettePurpleBorderActive: 'var(--colorPalettePurpleBorderActive)',
        colorPalettePurpleForeground2: 'var(--colorPalettePurpleForeground2)',
        colorPaletteRoyalBlueBackground2: 'var(--colorPaletteRoyalBlueBackground2)',
        colorPaletteRoyalBlueBorderActive: 'var(--colorPaletteRoyalBlueBorderActive)',
        colorPaletteRoyalBlueForeground2: 'var(--colorPaletteRoyalBlueForeground2)',
        colorPaletteSeafoamBackground2: 'var(--colorPaletteSeafoamBackground2)',
        colorPaletteSeafoamBorderActive: 'var(--colorPaletteSeafoamBorderActive)',
        colorPaletteSeafoamForeground2: 'var(--colorPaletteSeafoamForeground2)',
        colorPaletteSteelBackground2: 'var(--colorPaletteSteelBackground2)',
        colorPaletteSteelBorderActive: 'var(--colorPaletteSteelBorderActive)',
        colorPaletteSteelForeground2: 'var(--colorPaletteSteelForeground2)',
        colorPaletteTealBackground2: 'var(--colorPaletteTealBackground2)',
        colorPaletteTealBorderActive: 'var(--colorPaletteTealBorderActive)',
        colorPaletteTealForeground2: 'var(--colorPaletteTealForeground2)',
        borderRadiusNone: 'var(--borderRadiusNone)',
        borderRadiusSmall: 'var(--borderRadiusSmall)',
        borderRadiusMedium: 'var(--borderRadiusMedium)',
        borderRadiusLarge: 'var(--borderRadiusLarge)',
        borderRadiusXLarge: 'var(--borderRadiusXLarge)',
        borderRadiusCircular: 'var(--borderRadiusCircular)',
        fontFamilyBase: 'var(--fontFamilyBase)',
        fontFamilyMonospace: 'var(--fontFamilyMonospace)',
        fontFamilyNumeric: 'var(--fontFamilyNumeric)',
        fontSizeBase100: 'var(--fontSizeBase100)',
        fontSizeBase200: 'var(--fontSizeBase200)',
        fontSizeBase300: 'var(--fontSizeBase300)',
        fontSizeBase400: 'var(--fontSizeBase400)',
        fontSizeBase500: 'var(--fontSizeBase500)',
        fontSizeBase600: 'var(--fontSizeBase600)',
        fontSizeHero700: 'var(--fontSizeHero700)',
        fontSizeHero800: 'var(--fontSizeHero800)',
        fontSizeHero900: 'var(--fontSizeHero900)',
        fontSizeHero1000: 'var(--fontSizeHero1000)',
        fontWeightRegular: 'var(--fontWeightRegular)',
        fontWeightMedium: 'var(--fontWeightMedium)',
        fontWeightSemibold: 'var(--fontWeightSemibold)',
        fontWeightBold: 'var(--fontWeightBold)',
        lineHeightBase100: 'var(--lineHeightBase100)',
        lineHeightBase200: 'var(--lineHeightBase200)',
        lineHeightBase300: 'var(--lineHeightBase300)',
        lineHeightBase400: 'var(--lineHeightBase400)',
        lineHeightBase500: 'var(--lineHeightBase500)',
        lineHeightBase600: 'var(--lineHeightBase600)',
        lineHeightHero700: 'var(--lineHeightHero700)',
        lineHeightHero800: 'var(--lineHeightHero800)',
        lineHeightHero900: 'var(--lineHeightHero900)',
        lineHeightHero1000: 'var(--lineHeightHero1000)',
        shadow2: 'var(--shadow2)',
        shadow4: 'var(--shadow4)',
        shadow8: 'var(--shadow8)',
        shadow16: 'var(--shadow16)',
        shadow28: 'var(--shadow28)',
        shadow64: 'var(--shadow64)',
        shadow2Brand: 'var(--shadow2Brand)',
        shadow4Brand: 'var(--shadow4Brand)',
        shadow8Brand: 'var(--shadow8Brand)',
        shadow16Brand: 'var(--shadow16Brand)',
        shadow28Brand: 'var(--shadow28Brand)',
        shadow64Brand: 'var(--shadow64Brand)',
        strokeWidthThin: 'var(--strokeWidthThin)',
        strokeWidthThick: 'var(--strokeWidthThick)',
        strokeWidthThicker: 'var(--strokeWidthThicker)',
        strokeWidthThickest: 'var(--strokeWidthThickest)',
        spacingHorizontalNone: 'var(--spacingHorizontalNone)',
        spacingHorizontalXXS: 'var(--spacingHorizontalXXS)',
        spacingHorizontalXS: 'var(--spacingHorizontalXS)',
        spacingHorizontalSNudge: 'var(--spacingHorizontalSNudge)',
        spacingHorizontalS: 'var(--spacingHorizontalS)',
        spacingHorizontalMNudge: 'var(--spacingHorizontalMNudge)',
        spacingHorizontalM: 'var(--spacingHorizontalM)',
        spacingHorizontalL: 'var(--spacingHorizontalL)',
        spacingHorizontalXL: 'var(--spacingHorizontalXL)',
        spacingHorizontalXXL: 'var(--spacingHorizontalXXL)',
        spacingHorizontalXXXL: 'var(--spacingHorizontalXXXL)',
        spacingVerticalNone: 'var(--spacingVerticalNone)',
        spacingVerticalXXS: 'var(--spacingVerticalXXS)',
        spacingVerticalXS: 'var(--spacingVerticalXS)',
        spacingVerticalSNudge: 'var(--spacingVerticalSNudge)',
        spacingVerticalS: 'var(--spacingVerticalS)',
        spacingVerticalMNudge: 'var(--spacingVerticalMNudge)',
        spacingVerticalM: 'var(--spacingVerticalM)',
        spacingVerticalL: 'var(--spacingVerticalL)',
        spacingVerticalXL: 'var(--spacingVerticalXL)',
        spacingVerticalXXL: 'var(--spacingVerticalXXL)',
        spacingVerticalXXXL: 'var(--spacingVerticalXXXL)',
        durationUltraFast: 'var(--durationUltraFast)',
        durationFaster: 'var(--durationFaster)',
        durationFast: 'var(--durationFast)',
        durationNormal: 'var(--durationNormal)',
        durationSlow: 'var(--durationSlow)',
        durationSlower: 'var(--durationSlower)',
        durationUltraSlow: 'var(--durationUltraSlow)',
        curveAccelerateMax: 'var(--curveAccelerateMax)',
        curveAccelerateMid: 'var(--curveAccelerateMid)',
        curveAccelerateMin: 'var(--curveAccelerateMin)',
        curveDecelerateMax: 'var(--curveDecelerateMax)',
        curveDecelerateMid: 'var(--curveDecelerateMid)',
        curveDecelerateMin: 'var(--curveDecelerateMin)',
        curveEasyEaseMax: 'var(--curveEasyEaseMax)',
        curveEasyEase: 'var(--curveEasyEase)',
        curveLinear: 'var(--curveLinear)',
      };
    },
    3737: function (e, t, r) {
      'use strict';
      r.d(t, {
        f: function () {
          return m;
        },
      });
      var o = r(8397),
        n = r(9336);
      const a = n.PN.reduce((e, t) => {
        const r = t.slice(0, 1).toUpperCase() + t.slice(1),
          n = {
            [`colorPalette${r}Background1`]: o.b[t].tint60,
            [`colorPalette${r}Background2`]: o.b[t].tint40,
            [`colorPalette${r}Background3`]: o.b[t].primary,
            [`colorPalette${r}Foreground1`]: o.b[t].shade10,
            [`colorPalette${r}Foreground2`]: o.b[t].shade30,
            [`colorPalette${r}Foreground3`]: o.b[t].primary,
            [`colorPalette${r}BorderActive`]: o.b[t].primary,
            [`colorPalette${r}Border1`]: o.b[t].tint40,
            [`colorPalette${r}Border2`]: o.b[t].primary,
          };

        return Object.assign(e, n);
      }, {});

      (a.colorPaletteYellowForeground1 = o.b.yellow.shade30),
        (a.colorPaletteRedForegroundInverted = o.b.red.tint20),
        (a.colorPaletteGreenForegroundInverted = o.b.green.tint20),
        (a.colorPaletteYellowForegroundInverted = o.b.yellow.tint40);
      const i = n.X.reduce((e, t) => {
          const r = t.slice(0, 1).toUpperCase() + t.slice(1),
            n = {
              [`colorPalette${r}Background2`]: o.C[t].tint40,
              [`colorPalette${r}Foreground2`]: o.C[t].shade30,
              [`colorPalette${r}BorderActive`]: o.C[t].primary,
            };

          return Object.assign(e, n);
        }, {}),
        s = { ...a, ...i };
      var l = r(4234);
      var c = r(4035),
        u = r(1131),
        d = r(3292),
        h = r(3622),
        f = r(263),
        p = r(4096),
        g = r(1597);
      const m = (e) => {
        const t = ((e) => ({
          colorNeutralForeground1: l.BA[14],
          colorNeutralForeground1Hover: l.BA[14],
          colorNeutralForeground1Pressed: l.BA[14],
          colorNeutralForeground1Selected: l.BA[14],
          colorNeutralForeground2: l.BA[26],
          colorNeutralForeground2Hover: l.BA[14],
          colorNeutralForeground2Pressed: l.BA[14],
          colorNeutralForeground2Selected: l.BA[14],
          colorNeutralForeground2BrandHover: e[80],
          colorNeutralForeground2BrandPressed: e[70],
          colorNeutralForeground2BrandSelected: e[80],
          colorNeutralForeground3: l.BA[38],
          colorNeutralForeground3Hover: l.BA[26],
          colorNeutralForeground3Pressed: l.BA[26],
          colorNeutralForeground3Selected: l.BA[26],
          colorNeutralForeground3BrandHover: e[80],
          colorNeutralForeground3BrandPressed: e[70],
          colorNeutralForeground3BrandSelected: e[80],
          colorNeutralForeground4: l.BA[44],
          colorNeutralForegroundDisabled: l.BA[74],
          colorNeutralForegroundInvertedDisabled: l.jZ[40],
          colorBrandForegroundLink: e[70],
          colorBrandForegroundLinkHover: e[60],
          colorBrandForegroundLinkPressed: e[40],
          colorBrandForegroundLinkSelected: e[70],
          colorNeutralForeground2Link: l.BA[26],
          colorNeutralForeground2LinkHover: l.BA[14],
          colorNeutralForeground2LinkPressed: l.BA[14],
          colorNeutralForeground2LinkSelected: l.BA[14],
          colorCompoundBrandForeground1: e[80],
          colorCompoundBrandForeground1Hover: e[70],
          colorCompoundBrandForeground1Pressed: e[60],
          colorBrandForeground1: e[80],
          colorBrandForeground2: e[70],
          colorNeutralForeground1Static: l.BA[14],
          colorNeutralForegroundStaticInverted: l.ix,
          colorNeutralForegroundInverted: l.ix,
          colorNeutralForegroundInvertedHover: l.ix,
          colorNeutralForegroundInvertedPressed: l.ix,
          colorNeutralForegroundInvertedSelected: l.ix,
          colorNeutralForegroundInverted2: l.ix,
          colorNeutralForegroundOnBrand: l.ix,
          colorNeutralForegroundInvertedLink: l.ix,
          colorNeutralForegroundInvertedLinkHover: l.ix,
          colorNeutralForegroundInvertedLinkPressed: l.ix,
          colorNeutralForegroundInvertedLinkSelected: l.ix,
          colorBrandForegroundInverted: e[100],
          colorBrandForegroundInvertedHover: e[110],
          colorBrandForegroundInvertedPressed: e[100],
          colorBrandForegroundOnLight: e[80],
          colorBrandForegroundOnLightHover: e[70],
          colorBrandForegroundOnLightPressed: e[50],
          colorBrandForegroundOnLightSelected: e[60],
          colorNeutralBackground1: l.ix,
          colorNeutralBackground1Hover: l.BA[96],
          colorNeutralBackground1Pressed: l.BA[88],
          colorNeutralBackground1Selected: l.BA[92],
          colorNeutralBackground2: l.BA[98],
          colorNeutralBackground2Hover: l.BA[94],
          colorNeutralBackground2Pressed: l.BA[86],
          colorNeutralBackground2Selected: l.BA[90],
          colorNeutralBackground3: l.BA[96],
          colorNeutralBackground3Hover: l.BA[92],
          colorNeutralBackground3Pressed: l.BA[84],
          colorNeutralBackground3Selected: l.BA[88],
          colorNeutralBackground4: l.BA[94],
          colorNeutralBackground4Hover: l.BA[98],
          colorNeutralBackground4Pressed: l.BA[96],
          colorNeutralBackground4Selected: l.ix,
          colorNeutralBackground5: l.BA[92],
          colorNeutralBackground5Hover: l.BA[96],
          colorNeutralBackground5Pressed: l.BA[94],
          colorNeutralBackground5Selected: l.BA[98],
          colorNeutralBackground6: l.BA[90],
          colorNeutralBackgroundInverted: l.BA[16],
          colorNeutralBackgroundStatic: l.BA[20],
          colorNeutralBackgroundAlpha: l.jZ[50],
          colorNeutralBackgroundAlpha2: l.jZ[80],
          colorSubtleBackground: 'transparent',
          colorSubtleBackgroundHover: l.BA[96],
          colorSubtleBackgroundPressed: l.BA[88],
          colorSubtleBackgroundSelected: l.BA[92],
          colorSubtleBackgroundLightAlphaHover: l.jZ[70],
          colorSubtleBackgroundLightAlphaPressed: l.jZ[50],
          colorSubtleBackgroundLightAlphaSelected: 'transparent',
          colorSubtleBackgroundInverted: 'transparent',
          colorSubtleBackgroundInvertedHover: l.Hf[10],
          colorSubtleBackgroundInvertedPressed: l.Hf[30],
          colorSubtleBackgroundInvertedSelected: l.Hf[20],
          colorTransparentBackground: 'transparent',
          colorTransparentBackgroundHover: 'transparent',
          colorTransparentBackgroundPressed: 'transparent',
          colorTransparentBackgroundSelected: 'transparent',
          colorNeutralBackgroundDisabled: l.BA[94],
          colorNeutralBackgroundInvertedDisabled: l.jZ[10],
          colorNeutralStencil1: l.BA[90],
          colorNeutralStencil2: l.BA[98],
          colorNeutralStencil1Alpha: l.Hf[10],
          colorNeutralStencil2Alpha: l.Hf[5],
          colorBackgroundOverlay: l.Hf[40],
          colorScrollbarOverlay: l.Hf[50],
          colorBrandBackground: e[80],
          colorBrandBackgroundHover: e[70],
          colorBrandBackgroundPressed: e[40],
          colorBrandBackgroundSelected: e[60],
          colorCompoundBrandBackground: e[80],
          colorCompoundBrandBackgroundHover: e[70],
          colorCompoundBrandBackgroundPressed: e[60],
          colorBrandBackgroundStatic: e[80],
          colorBrandBackground2: e[160],
          colorBrandBackgroundInverted: l.ix,
          colorBrandBackgroundInvertedHover: e[160],
          colorBrandBackgroundInvertedPressed: e[140],
          colorBrandBackgroundInvertedSelected: e[150],
          colorNeutralStrokeAccessible: l.BA[38],
          colorNeutralStrokeAccessibleHover: l.BA[34],
          colorNeutralStrokeAccessiblePressed: l.BA[30],
          colorNeutralStrokeAccessibleSelected: e[80],
          colorNeutralStroke1: l.BA[82],
          colorNeutralStroke1Hover: l.BA[78],
          colorNeutralStroke1Pressed: l.BA[70],
          colorNeutralStroke1Selected: l.BA[74],
          colorNeutralStroke2: l.BA[88],
          colorNeutralStroke3: l.BA[94],
          colorNeutralStrokeOnBrand: l.ix,
          colorNeutralStrokeOnBrand2: l.ix,
          colorNeutralStrokeOnBrand2Hover: l.ix,
          colorNeutralStrokeOnBrand2Pressed: l.ix,
          colorNeutralStrokeOnBrand2Selected: l.ix,
          colorBrandStroke1: e[80],
          colorBrandStroke2: e[140],
          colorCompoundBrandStroke: e[80],
          colorCompoundBrandStrokeHover: e[70],
          colorCompoundBrandStrokePressed: e[60],
          colorNeutralStrokeDisabled: l.BA[88],
          colorNeutralStrokeInvertedDisabled: l.jZ[40],
          colorTransparentStroke: 'transparent',
          colorTransparentStrokeInteractive: 'transparent',
          colorTransparentStrokeDisabled: 'transparent',
          colorNeutralStrokeAlpha: l.Hf[5],
          colorStrokeFocus1: l.ix,
          colorStrokeFocus2: l.Sn,
          colorNeutralShadowAmbient: 'rgba(0,0,0,0.12)',
          colorNeutralShadowKey: 'rgba(0,0,0,0.14)',
          colorNeutralShadowAmbientLighter: 'rgba(0,0,0,0.06)',
          colorNeutralShadowKeyLighter: 'rgba(0,0,0,0.07)',
          colorNeutralShadowAmbientDarker: 'rgba(0,0,0,0.20)',
          colorNeutralShadowKeyDarker: 'rgba(0,0,0,0.24)',
          colorBrandShadowAmbient: 'rgba(0,0,0,0.30)',
          colorBrandShadowKey: 'rgba(0,0,0,0.25)',
        }))(e);

        return {
          ...c.E,
          ...u.CH,
          ...u.tO,
          ...u.Vl,
          ...u.vC,
          ...d.G,
          ...g.l,
          ...g.e,
          ...f.l,
          ...p.y,
          ...t,
          ...s,
          ...(0, h.T)(t.colorNeutralShadowAmbient, t.colorNeutralShadowKey),
          ...(0, h.T)(t.colorBrandShadowAmbient, t.colorBrandShadowKey, 'Brand'),
        };
      };
    },
    3622: function (e, t, r) {
      'use strict';

      function o(e, t, r = '') {
        return {
          [`shadow2${r}`]: `0 0 2px ${e}, 0 1px 2px ${t}`,
          [`shadow4${r}`]: `0 0 2px ${e}, 0 2px 4px ${t}`,
          [`shadow8${r}`]: `0 0 2px ${e}, 0 4px 8px ${t}`,
          [`shadow16${r}`]: `0 0 2px ${e}, 0 8px 16px ${t}`,
          [`shadow28${r}`]: `0 0 8px ${e}, 0 14px 28px ${t}`,
          [`shadow64${r}`]: `0 0 8px ${e}, 0 32px 64px ${t}`,
        };
      }
      r.d(t, {
        T: function () {
          return o;
        },
      });
    },
    3362: function (e, t, r) {
      'use strict';
      r.d(t, {
        s: function () {
          return n;
        },
      });
      var o = r(5141);

      function n(e, t) {
        const r = {};
        let n = null,
          a = null;

        return function (i) {
          const { dir: s, renderer: l } = i,
            c = 'ltr' === s,
            u = c ? l.id : l.id + 'r';

          return (
            c ? null === n && (n = (0, o.V)(e, s)) : null === a && (a = (0, o.V)(e, s)),
            void 0 === r[u] && (l.insertCSSRules(t), (r[u] = !0)),
            c ? n : a
          );
        };
      }
    },
    3536: function (e, t, r) {
      'use strict';
      r.d(t, {
        $Q: function () {
          return s;
        },
        C_: function () {
          return g;
        },
        Hf: function () {
          return l;
        },
        JM: function () {
          return f;
        },
        M_: function () {
          return d;
        },
        Qz: function () {
          return u;
        },
        de: function () {
          return p;
        },
        gk: function () {
          return c;
        },
        jD: function () {
          return h;
        },
        xR: function () {
          return i;
        },
      });
      const o = 'undefined' == typeof window ? r.g : window,
        n = '@griffel/';

      function a(e, t) {
        return o[Symbol.for(n + e)] || (o[Symbol.for(n + e)] = t), o[Symbol.for(n + e)];
      }
      const i = a('DEFINITION_LOOKUP_TABLE', {}),
        s = 'data-make-styles-bucket',
        l = 'f',
        c = 7,
        u = '___',
        d = '_',
        h = u.length + c,
        f = 0,
        p = 1,
        g = {
          all: 1,
          animation: 1,
          background: 1,
          backgroundPosition: 1,
          border: 1,
          borderBlock: 1,
          borderBlockEnd: 1,
          borderBlockStart: 1,
          borderBottom: 1,
          borderColor: 1,
          borderImage: 1,
          borderInline: 1,
          borderInlineEnd: 1,
          borderInlineStart: 1,
          borderLeft: 1,
          borderRadius: 1,
          borderRight: 1,
          borderStyle: 1,
          borderTop: 1,
          borderWidth: 1,
          caret: 1,
          columns: 1,
          columnRule: 1,
          containIntrinsicSize: 1,
          container: 1,
          flex: 1,
          flexFlow: 1,
          font: 1,
          gap: 1,
          grid: 1,
          gridArea: 1,
          gridColumn: 1,
          gridRow: 1,
          gridTemplate: 1,
          inset: 1,
          insetBlock: 1,
          insetInline: 1,
          lineClamp: 1,
          listStyle: 1,
          margin: 1,
          marginBlock: 1,
          marginInline: 1,
          mask: 1,
          maskBorder: 1,
          motion: 1,
          offset: 1,
          outline: 1,
          overflow: 1,
          overscrollBehavior: 1,
          padding: 1,
          paddingBlock: 1,
          paddingInline: 1,
          placeItems: 1,
          placeContent: 1,
          placeSelf: 1,
          scrollMargin: 1,
          scrollMarginBlock: 1,
          scrollMarginInline: 1,
          scrollPadding: 1,
          scrollPaddingBlock: 1,
          scrollPaddingInline: 1,
          scrollSnapMargin: 1,
          scrollTimeline: 1,
          textDecoration: 1,
          textEmphasis: 1,
          transition: 1,
        };
    },
    928: function (e, t, r) {
      'use strict';
      r.d(t, {
        q5: function () {
          return v;
        },
      });
      const o = ['Top', 'Right', 'Bottom', 'Left'];

      function n(e, t, ...r) {
        const [n, a = n, i = n, s = a] = r,
          l = [n, a, i, s],
          c = {};

        for (let u = 0; u < l.length; u += 1)
          if (l[u] || 0 === l[u]) {
            c[e + o[u] + t] = l[u];
          }

        return c;
      }

      function a(...e) {
        return n('border', 'Width', ...e);
      }

      function i(...e) {
        return n('border', 'Style', ...e);
      }

      function s(...e) {
        return n('border', 'Color', ...e);
      }
      const l = (e) => 'number' == typeof e && !Number.isNaN(e),
        c = (e) => 'auto' === e,
        u = ['content', 'fit-content', 'max-content', 'min-content'],
        d = (e) =>
          u.some((t) => e === t) ||
          ((e) => 'string' == typeof e && /(\d+(\w+|%))/.test(e))(e);
      const h = /var\(.*\)/gi;
      const f = /^[a-zA-Z0-9\-_\\#;]+$/,
        p = /^-moz-initial$|^auto$|^initial$|^inherit$|^revert$|^unset$|^span \d+$|\d.*/;

      function g(e) {
        return void 0 !== e && 'string' == typeof e && f.test(e) && !p.test(e);
      }
      const m = ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'];
      const v = {
        border: function (...e) {
          return { ...a(e[0]), ...(e[1] && i(e[1])), ...(e[2] && s(e[2])) };
        },
        borderLeft: function (...e) {
          return {
            borderLeftWidth: e[0],
            ...(e[1] && { borderLeftStyle: e[1] }),
            ...(e[2] && { borderLeftColor: e[2] }),
          };
        },
        borderBottom: function (...e) {
          return {
            borderBottomWidth: e[0],
            ...(e[1] && { borderBottomStyle: e[1] }),
            ...(e[2] && { borderBottomColor: e[2] }),
          };
        },
        borderRight: function (...e) {
          return {
            borderRightWidth: e[0],
            ...(e[1] && { borderRightStyle: e[1] }),
            ...(e[2] && { borderRightColor: e[2] }),
          };
        },
        borderTop: function (...e) {
          return {
            borderTopWidth: e[0],
            ...(e[1] && { borderTopStyle: e[1] }),
            ...(e[2] && { borderTopColor: e[2] }),
          };
        },
        borderColor: s,
        borderStyle: i,
        borderRadius: function (e, t = e, r = e, o = t) {
          return {
            borderBottomRightRadius: r,
            borderBottomLeftRadius: o,
            borderTopRightRadius: t,
            borderTopLeftRadius: e,
          };
        },
        borderWidth: a,
        flex: function (...e) {
          const t = 1 === e.length,
            r = 2 === e.length,
            o = 3 === e.length;

          if (t) {
            const [t] = e;

            if ('initial' === t) return { flexGrow: 0, flexShrink: 1, flexBasis: 'auto' };
            if (c(t)) return { flexGrow: 1, flexShrink: 1, flexBasis: 'auto' };
            if (((e) => 'none' === e)(t))
              return { flexGrow: 0, flexShrink: 0, flexBasis: 'auto' };
            if (l(t)) return { flexGrow: t, flexShrink: 1, flexBasis: 0 };
            if (d(t)) return { flexGrow: 1, flexShrink: 1, flexBasis: t };
          }

          if (r) {
            const [t, r] = e;

            if (l(r)) return { flexGrow: t, flexShrink: r, flexBasis: 0 };
            if (d(r)) return { flexGrow: t, flexShrink: 1, flexBasis: r };
          }

          if (o) {
            const [t, r, o] = e;

            if (l(t) && l(r) && (c(o) || d(o)))
              return { flexGrow: t, flexShrink: r, flexBasis: o };
          }

          return {};
        },
        gap: function (e, t = e) {
          return { columnGap: e, rowGap: t };
        },
        gridArea: function (...e) {
          if (
            e.some(
              (e) =>
                !(function (e) {
                  return (
                    void 0 === e ||
                    'number' == typeof e ||
                    ('string' == typeof e && !h.test(e))
                  );
                })(e),
            )
          )
            return {};
          const t = void 0 !== e[0] ? e[0] : 'auto',
            r = void 0 !== e[1] ? e[1] : g(t) ? t : 'auto';

          return {
            gridRowStart: t,
            gridColumnStart: r,
            gridRowEnd: void 0 !== e[2] ? e[2] : g(t) ? t : 'auto',
            gridColumnEnd: void 0 !== e[3] ? e[3] : g(r) ? r : 'auto',
          };
        },
        margin: function (...e) {
          return n('margin', '', ...e);
        },
        marginBlock: function (e, t = e) {
          return { marginBlockStart: e, marginBlockEnd: t };
        },
        marginInline: function (e, t = e) {
          return { marginInlineStart: e, marginInlineEnd: t };
        },
        padding: function (...e) {
          return n('padding', '', ...e);
        },
        paddingBlock: function (e, t = e) {
          return { paddingBlockStart: e, paddingBlockEnd: t };
        },
        paddingInline: function (e, t = e) {
          return { paddingInlineStart: e, paddingInlineEnd: t };
        },
        overflow: function (e, t = e) {
          return { overflowX: e, overflowY: t };
        },
        inset: function (...e) {
          const [t, r = t, o = t, n = r] = e;

          return { top: t, right: r, bottom: o, left: n };
        },
        outline: function (e, t, r) {
          return {
            outlineWidth: e,
            ...(t && { outlineStyle: t }),
            ...(r && { outlineColor: r }),
          };
        },
        transition: function (...e) {
          return (function (e) {
            return 1 === e.length && m.includes(e[0]);
          })(e)
            ? {
                transitionDelay: e[0],
                transitionDuration: e[0],
                transitionProperty: e[0],
                transitionTimingFunction: e[0],
              }
            : (function (e) {
                if (1 === e.length && Array.isArray(e[0])) return e[0];

                return [e];
              })(e).reduce(
                (e, [t, r = '0s', o = '0s', n = 'ease'], a) => (
                  0 === a
                    ? ((e.transitionProperty = t),
                      (e.transitionDuration = r),
                      (e.transitionDelay = o),
                      (e.transitionTimingFunction = n))
                    : ((e.transitionProperty += `, ${t}`),
                      (e.transitionDuration += `, ${r}`),
                      (e.transitionDelay += `, ${o}`),
                      (e.transitionTimingFunction += `, ${n}`)),
                  e
                ),
                {},
              );
        },
      };
    },
    3513: function (e, t, r) {
      'use strict';
      r.d(t, {
        z: function () {
          return s;
        },
      });
      var o = r(3536),
        n = r(8033),
        a = r(5141);
      const i = {};

      function s() {
        let e = null,
          t = '',
          r = '';
        const s = new Array(arguments.length);

        for (let n = 0; n < arguments.length; n++) {
          const e = arguments[n];

          if ('string' == typeof e && '' !== e) {
            const a = e.indexOf(o.Qz);

            if (-1 === a) t += e + ' ';
            else {
              const i = e.substr(a, o.jD);

              a > 0 && (t += e.slice(0, a)), (r += i), (s[n] = i);
            }
            0;
          }
        }
        if ('' === r) return t.slice(0, -1);
        const l = i[r];

        if (void 0 !== l) return t + l;
        const c = [];

        for (let n = 0; n < arguments.length; n++) {
          const t = s[n];

          if (t) {
            const r = o.xR[t];

            r && (c.push(r[o.JM]), (e = r[o.de]));
          }
        }
        const u = Object.assign.apply(Object, [{}].concat(c));
        let d = (0, a.w)(u, e);
        const h = (0, n.m)(d, e, s);

        return (d = h + ' ' + d), (i[r] = d), (o.xR[h] = [u, e]), t + d;
      }
    },
    6328: function (e, t, r) {
      'use strict';
      r.d(t, {
        u: function () {
          return c;
        },
      });
      var o = r(3536),
        n = r(5827);
      const a = ['r', 'd', 'l', 'v', 'w', 'f', 'i', 'h', 'a', 'k', 't', 'm', 'c'].reduce(
        (e, t, r) => ((e[t] = r), e),
        {},
      );

      function i(e, t, r, i, s = {}) {
        const l = 'm' === e,
          c = l ? e + s.m : e;

        if (!i.stylesheets[c]) {
          const u = t && t.createElement('style'),
            d = (0, n.T)(u, e, { ...i.styleElementAttributes, ...(l && { media: s.m }) });

          (i.stylesheets[c] = d),
            t &&
              u &&
              t.head.insertBefore(
                u,
                (function (e, t, r, n, i) {
                  const s = a[r];
                  let l = (e) => s - a[e.getAttribute(o.$Q)],
                    c = e.head.querySelectorAll(`[${o.$Q}]`);

                  if ('m' === r && i) {
                    const t = e.head.querySelectorAll(`[${o.$Q}="${r}"]`);

                    t.length &&
                      ((c = t), (l = (e) => n.compareMediaQueries(i.m, e.media)));
                  }
                  const u = c.length;
                  let d = u - 1;

                  for (; d >= 0; ) {
                    const e = c.item(d);

                    if (l(e) > 0) return e.nextSibling;
                    d--;
                  }
                  if (u > 0) return c.item(0);

                  return t ? t.nextSibling : null;
                })(t, r, e, i, s),
              );
        }

        return i.stylesheets[c];
      }
      let s = 0;
      const l = (e, t) => (e < t ? -1 : e > t ? 1 : 0);

      function c(e = 'undefined' == typeof document ? void 0 : document, t = {}) {
        const {
            unstable_filterCSSRule: r,
            insertionPoint: o,
            styleElementAttributes: n,
            compareMediaQueries: a = l,
          } = t,
          c = {
            insertionCache: {},
            stylesheets: {},
            styleElementAttributes: Object.freeze(n),
            compareMediaQueries: a,
            id: 'd' + s++,
            insertCSSRules(t) {
              for (const s in t) {
                const l = t[s];

                for (let t = 0, u = l.length; t < u; t++) {
                  const [u, d] = ((n = l[t]), Array.isArray(n) ? n : [n]),
                    h = i(s, e, o || null, c, d);

                  if (!c.insertionCache[u]) {
                    c.insertionCache[u] = s;

                    try {
                      r ? r(u) && h.insertRule(u) : h.insertRule(u);
                    } catch (a) {
                      0;
                    }
                  }
                }
              }
              var n;
            },
          };

        return c;
      }
    },
    5827: function (e, t, r) {
      'use strict';
      r.d(t, {
        L: function () {
          return a;
        },
        T: function () {
          return n;
        },
      });
      var o = r(3536);

      function n(e, t, r) {
        const n = [];

        if (((r[o.$Q] = t), e)) for (const o in r) e.setAttribute(o, r[o]);

        return {
          elementAttributes: r,
          insertRule: function (t) {
            return (null == e ? void 0 : e.sheet)
              ? e.sheet.insertRule(t, e.sheet.cssRules.length)
              : n.push(t);
          },
          element: e,
          bucketName: t,
          cssRules() {
            return (null == e ? void 0 : e.sheet)
              ? Array.from(e.sheet.cssRules).map((e) => e.cssText)
              : n;
          },
        };
      }

      function a(e) {
        const t = Array.from(e.attributes).reduce(
          (e, t) => ((e[t.name] = t.value), e),
          {},
        );

        return n(e, t[o.$Q], t);
      }
    },
    6883: function (e, t, r) {
      'use strict';
      r.d(t, {
        PE: function () {
          return p;
        },
        Ty: function () {
          return h;
        },
      });
      var o = r(9452),
        n = r(2774),
        a = r(299),
        i = r(5645),
        s = r(2004);
      const l = (e) => {
        if (e.type === i.Fr) {
          if ('string' == typeof e.props) return void 0;
          e.props = e.props.map((e) =>
            -1 === e.indexOf(':global(')
              ? e
              : (0, s.wS)(e)
                  .reduce((e, t, r, o) => {
                    if ('' === t) return e;

                    if (':' === t && 'global' === o[r + 1]) {
                      const t = o[r + 2].slice(1, -1) + ' ';

                      return e.unshift(t), (o[r + 1] = ''), (o[r + 2] = ''), e;
                    }

                    return e.push(t), e;
                  }, [])
                  .join(''),
          );
        }
      };
      var c = r(1160),
        u = r(7708);
      const d = /,( *[^ &])/g;

      function h(e) {
        const t = [];

        return (
          (0, o.q)((0, n.MY)(e), (0, a.qR)([l, a.Ji, o.P, (0, a.cD)((e) => t.push(e))])),
          t
        );
      }

      function f(e, t, r) {
        let o = t;

        return (
          r.length > 0 &&
            (o = r.reduceRight((e, t) => {
              return `${((r = t), '&' + (0, u.L)(r.replace(d, ',&$1')))} { ${e} }`;
              var r;
            }, t)),
          `${e}{${o}}`
        );
      }

      function p(e) {
        const {
          className: t,
          media: r,
          layer: o,
          selectors: n,
          support: a,
          property: i,
          rtlClassName: s,
          rtlProperty: l,
          rtlValue: u,
          value: d,
          container: p,
        } = e;
        let g = f(
          `.${t}`,
          Array.isArray(d)
            ? `${d.map((e) => `${(0, c.J)(i)}: ${e}`).join(';')};`
            : `${(0, c.J)(i)}: ${d};`,
          n,
        );

        if (l && s) {
          g += f(
            `.${s}`,
            Array.isArray(u)
              ? `${u.map((e) => `${(0, c.J)(l)}: ${e}`).join(';')};`
              : `${(0, c.J)(l)}: ${u};`,
            n,
          );
        }

        return (
          r && (g = `@media ${r} { ${g} }`),
          o && (g = `@layer ${o} { ${g} }`),
          a && (g = `@supports ${a} { ${g} }`),
          p && (g = `@container ${p} { ${g} }`),
          h(g)
        );
      }
    },
    5141: function (e, t, r) {
      'use strict';
      r.d(t, {
        V: function () {
          return i;
        },
        w: function () {
          return a;
        },
      });
      var o = r(3536),
        n = r(8033);

      function a(e, t) {
        let r = '';

        for (const o in e) {
          const n = e[o];

          if (n) {
            const e = Array.isArray(n);

            r += 'rtl' === t ? (e ? n[1] : n) + ' ' : (e ? n[0] : n) + ' ';
          }
        }

        return r.slice(0, -1);
      }

      function i(e, t) {
        const r = {};

        for (const i in e) {
          const s = a(e[i], t);

          if ('' === s) {
            r[i] = '';
            continue;
          }
          const l = (0, n.m)(s, t),
            c = l + ' ' + s;

          (o.xR[l] = [e[i], t]), (r[i] = c);
        }

        return r;
      }
    },
    9525: function (e, t, r) {
      'use strict';
      r.d(t, {
        U: function () {
          return n;
        },
      });
      var o = r(1160);

      function n(e) {
        let t = '';

        for (const r in e) {
          const n = e[r];

          ('string' != typeof n && 'number' != typeof n) ||
            (t += (0, o.J)(r) + ':' + n + ';');
        }

        return t;
      }
    },
    8033: function (e, t, r) {
      'use strict';
      r.d(t, {
        m: function () {
          return i;
        },
      });
      var o = r(9003),
        n = r(3536);

      function a(e) {
        const t = e.length;

        if (t === n.gk) return e;
        for (let r = t; r < n.gk; r++) e += '0';

        return e;
      }

      function i(e, t, r = []) {
        return n.Qz + a((0, o.Z)(e + t));
      }
    },
    1160: function (e, t, r) {
      'use strict';
      r.d(t, {
        J: function () {
          return s;
        },
      });
      const o = /[A-Z]/g,
        n = /^ms-/,
        a = {};

      function i(e) {
        return '-' + e.toLowerCase();
      }

      function s(e) {
        if (Object.prototype.hasOwnProperty.call(a, e)) return a[e];
        if ('--' === e.substr(0, 2)) return e;
        const t = e.replace(o, i);

        return (a[e] = n.test(t) ? '-' + t : t);
      }
    },
    7708: function (e, t, r) {
      'use strict';

      function o(e) {
        return '&' === e.charAt(0) ? e.slice(1) : e;
      }
      r.d(t, {
        L: function () {
          return o;
        },
      });
    },
    6103: function (e, t, r) {
      'use strict';
      r.d(t, {
        m: function () {
          return u;
        },
        a: function () {
          return d;
        },
      });
      var o = r(6328),
        n = r(5827);
      const a = /@(media|supports|layer)[^{]+\{([\s\S]+?})\s*}/g,
        i = /\.([^{:]+)(:[^{]+)?{(?:[^}]*;)?([^}]*?)}/g,
        s = {
          k: /@(-webkit-)?keyframes ([^{]+){((?:(?:from|to|(?:\d+\.?\d*%))\{(?:[^}])*})*)}/g,
          t: a,
          m: a,
        };
      var l = r(2784);
      const c = l.createContext((0, o.u)()),
        u = ({ children: e, renderer: t, targetDocument: r }) => (
          'undefined' != typeof window &&
            window.document &&
            window.document.createElement &&
            l.useMemo(() => {
              !(function (e, t = 'undefined' == typeof document ? void 0 : document) {
                t &&
                  t.querySelectorAll('[data-make-styles-bucket]').forEach((t) => {
                    const r = t.dataset.makeStylesBucket,
                      o = s[r] || i,
                      a = 'm' === r ? r + t.media : r;
                    let l;

                    for (
                      e.stylesheets[a] || (e.stylesheets[a] = (0, n.L)(t));
                      (l = o.exec(t.textContent));

                    ) {
                      const [t] = l;

                      e.insertionCache[t] = r;
                    }
                  });
              })(t, r);
            }, [t, r]),
          l.createElement(c.Provider, { value: t }, e)
        );

      function d() {
        return l.useContext(c);
      }
    },
    2861: function (e, t, r) {
      'use strict';
      r.d(t, {
        n: function () {
          return a;
        },
        s: function () {
          return i;
        },
      });
      var o = r(2784);
      const n = o.createContext('ltr'),
        a = ({ children: e, dir: t }) => o.createElement(n.Provider, { value: t }, e);

      function i() {
        return o.useContext(n);
      }
    },
    9087: function (e, t, r) {
      'use strict';
      r.d(t, {
        s: function () {
          return i;
        },
      });
      var o = r(3362),
        n = r(6103),
        a = r(2861);

      function i(e, t) {
        const r = (0, o.s)(e, t);

        return function () {
          const e = (0, a.s)(),
            t = (0, n.a)();

          return r({ dir: e, renderer: t });
        };
      }
    },
    3387: function (e, t, r) {
      'use strict';
      r.d(t, {
        Z: function () {
          return q;
        },
      });
      var o = r(9003);

      function n(e) {
        return e.reduce(function (e, t) {
          var r = t[0],
            o = t[1];

          return (e[r] = o), (e[o] = r), e;
        }, {});
      }

      function a(e) {
        return 'number' == typeof e;
      }

      function i(e, t) {
        return -1 !== e.indexOf(t);
      }

      function s(e, t, r, o) {
        return (
          t + ((n = r), 0 === parseFloat(n) ? n : '-' === n[0] ? n.slice(1) : '-' + n) + o
        );
        var n;
      }

      function l(e) {
        return e
          .replace(/ +/g, ' ')
          .split(' ')
          .map(function (e) {
            return e.trim();
          })
          .filter(Boolean)
          .reduce(
            function (e, t) {
              var r = e.list,
                o = e.state,
                n = (t.match(/\(/g) || []).length,
                a = (t.match(/\)/g) || []).length;

              return (
                o.parensDepth > 0
                  ? (r[r.length - 1] = r[r.length - 1] + ' ' + t)
                  : r.push(t),
                (o.parensDepth += n - a),
                { list: r, state: o }
              );
            },
            { list: [], state: { parensDepth: 0 } },
          ).list;
      }

      function c(e) {
        var t = l(e);

        if (t.length <= 3 || t.length > 4) return e;
        var r = t[0],
          o = t[1],
          n = t[2];

        return [r, t[3], n, o].join(' ');
      }
      var u = {
        padding: function (e) {
          var t = e.value;

          return a(t) ? t : c(t);
        },
        textShadow: function (e) {
          var t = (function (e) {
            for (var t = [], r = 0, o = 0, n = !1; o < e.length; )
              n || ',' !== e[o]
                ? '(' === e[o]
                  ? ((n = !0), o++)
                  : ')' === e[o]
                  ? ((n = !1), o++)
                  : o++
                : (t.push(e.substring(r, o).trim()), (r = ++o));

            return r != o && t.push(e.substring(r, o + 1)), t;
          })(e.value).map(function (e) {
            return e.replace(/(^|\s)(-*)([.|\d]+)/, function (e, t, r, o) {
              return '0' === o ? e : '' + t + ('' === r ? '-' : '') + o;
            });
          });

          return t.join(',');
        },
        borderColor: function (e) {
          return c(e.value);
        },
        borderRadius: function (e) {
          var t = e.value;

          if (a(t)) return t;

          if (i(t, '/')) {
            var r = t.split('/'),
              o = r[0],
              n = r[1];

            return (
              u.borderRadius({ value: o.trim() }) +
              ' / ' +
              u.borderRadius({ value: n.trim() })
            );
          }
          var s = l(t);

          switch (s.length) {
            case 2:
              return s.reverse().join(' ');
            case 4:
              var c = s[0],
                d = s[1],
                h = s[2];

              return [d, c, s[3], h].join(' ');
            default:
              return t;
          }
        },
        background: function (e) {
          var t = e.value,
            r = e.valuesToConvert,
            o = e.isRtl,
            n = e.bgImgDirectionRegex,
            i = e.bgPosDirectionRegex;

          if (a(t)) return t;
          var s = t
            .replace(
              /(url\(.*?\))|(rgba?\(.*?\))|(hsl\(.*?\))|(#[a-fA-F0-9]+)|((^| )(\D)+( |$))/g,
              '',
            )
            .trim();

          return (
            (t = t.replace(
              s,
              u.backgroundPosition({
                value: s,
                valuesToConvert: r,
                isRtl: o,
                bgPosDirectionRegex: i,
              }),
            )),
            u.backgroundImage({ value: t, valuesToConvert: r, bgImgDirectionRegex: n })
          );
        },
        backgroundImage: function (e) {
          var t = e.value,
            r = e.valuesToConvert,
            o = e.bgImgDirectionRegex;

          return i(t, 'url(') || i(t, 'linear-gradient(')
            ? t.replace(o, function (e, t, o) {
                return e.replace(o, r[o]);
              })
            : t;
        },
        backgroundPosition: function (e) {
          var t = e.value,
            r = e.valuesToConvert,
            o = e.isRtl,
            n = e.bgPosDirectionRegex;

          return t
            .replace(o ? /^((-|\d|\.)+%)/ : null, function (e, t) {
              return (function (e) {
                var t = e.indexOf('.');

                if (-1 === t) e = 100 - parseFloat(e) + '%';
                else {
                  var r = e.length - t - 2;

                  e = (e = 100 - parseFloat(e)).toFixed(r) + '%';
                }

                return e;
              })(t);
            })
            .replace(n, function (e) {
              return r[e];
            });
        },
        backgroundPositionX: function (e) {
          var t = e.value,
            r = e.valuesToConvert,
            o = e.isRtl,
            n = e.bgPosDirectionRegex;

          return a(t)
            ? t
            : u.backgroundPosition({
                value: t,
                valuesToConvert: r,
                isRtl: o,
                bgPosDirectionRegex: n,
              });
        },
        transition: function (e) {
          var t = e.value,
            r = e.propertiesToConvert;

          return t
            .split(/,\s*/g)
            .map(function (e) {
              var t = e.split(' ');

              return (t[0] = r[t[0]] || t[0]), t.join(' ');
            })
            .join(', ');
        },
        transitionProperty: function (e) {
          var t = e.value,
            r = e.propertiesToConvert;

          return t
            .split(/,\s*/g)
            .map(function (e) {
              return r[e] || e;
            })
            .join(', ');
        },
        transform: function (e) {
          var t = e.value,
            r = '[^\\u0020-\\u007e]',
            o = '(?:(?:(?:\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)|\\\\[^\\r\\n\\f0-9a-f])',
            n =
              '((?:-?(?:[0-9]*\\.[0-9]+|[0-9]+)(?:\\s*(?:em|ex|px|cm|mm|in|pt|pc|deg|rad|grad|ms|s|hz|khz|%)|-?(?:[_a-z]|' +
              r +
              '|' +
              o +
              ')(?:[_a-z0-9-]|' +
              r +
              '|' +
              o +
              ')*)?)|(?:inherit|auto))',
            a = new RegExp('(translateX\\s*\\(\\s*)' + n + '(\\s*\\))', 'gi'),
            i = new RegExp(
              '(translate\\s*\\(\\s*)' + n + '((?:\\s*,\\s*' + n + '){0,1}\\s*\\))',
              'gi',
            ),
            l = new RegExp(
              '(translate3d\\s*\\(\\s*)' + n + '((?:\\s*,\\s*' + n + '){0,2}\\s*\\))',
              'gi',
            ),
            c = new RegExp('(rotate[ZY]?\\s*\\(\\s*)' + n + '(\\s*\\))', 'gi');

          return t.replace(a, s).replace(i, s).replace(l, s).replace(c, s);
        },
      };

      (u.objectPosition = u.backgroundPosition),
        (u.margin = u.padding),
        (u.borderWidth = u.padding),
        (u.boxShadow = u.textShadow),
        (u.webkitBoxShadow = u.boxShadow),
        (u.mozBoxShadow = u.boxShadow),
        (u.WebkitBoxShadow = u.boxShadow),
        (u.MozBoxShadow = u.boxShadow),
        (u.borderStyle = u.borderColor),
        (u.webkitTransform = u.transform),
        (u.mozTransform = u.transform),
        (u.WebkitTransform = u.transform),
        (u.MozTransform = u.transform),
        (u.transformOrigin = u.backgroundPosition),
        (u.webkitTransformOrigin = u.transformOrigin),
        (u.mozTransformOrigin = u.transformOrigin),
        (u.WebkitTransformOrigin = u.transformOrigin),
        (u.MozTransformOrigin = u.transformOrigin),
        (u.webkitTransition = u.transition),
        (u.mozTransition = u.transition),
        (u.WebkitTransition = u.transition),
        (u.MozTransition = u.transition),
        (u.webkitTransitionProperty = u.transitionProperty),
        (u.mozTransitionProperty = u.transitionProperty),
        (u.WebkitTransitionProperty = u.transitionProperty),
        (u.MozTransitionProperty = u.transitionProperty),
        (u['text-shadow'] = u.textShadow),
        (u['border-color'] = u.borderColor),
        (u['border-radius'] = u.borderRadius),
        (u['background-image'] = u.backgroundImage),
        (u['background-position'] = u.backgroundPosition),
        (u['background-position-x'] = u.backgroundPositionX),
        (u['object-position'] = u.objectPosition),
        (u['border-width'] = u.padding),
        (u['box-shadow'] = u.textShadow),
        (u['-webkit-box-shadow'] = u.textShadow),
        (u['-moz-box-shadow'] = u.textShadow),
        (u['border-style'] = u.borderColor),
        (u['-webkit-transform'] = u.transform),
        (u['-moz-transform'] = u.transform),
        (u['transform-origin'] = u.transformOrigin),
        (u['-webkit-transform-origin'] = u.transformOrigin),
        (u['-moz-transform-origin'] = u.transformOrigin),
        (u['-webkit-transition'] = u.transition),
        (u['-moz-transition'] = u.transition),
        (u['transition-property'] = u.transitionProperty),
        (u['-webkit-transition-property'] = u.transitionProperty),
        (u['-moz-transition-property'] = u.transitionProperty);
      var d = n([
          ['paddingLeft', 'paddingRight'],
          ['marginLeft', 'marginRight'],
          ['left', 'right'],
          ['borderLeft', 'borderRight'],
          ['borderLeftColor', 'borderRightColor'],
          ['borderLeftStyle', 'borderRightStyle'],
          ['borderLeftWidth', 'borderRightWidth'],
          ['borderTopLeftRadius', 'borderTopRightRadius'],
          ['borderBottomLeftRadius', 'borderBottomRightRadius'],
          ['padding-left', 'padding-right'],
          ['margin-left', 'margin-right'],
          ['border-left', 'border-right'],
          ['border-left-color', 'border-right-color'],
          ['border-left-style', 'border-right-style'],
          ['border-left-width', 'border-right-width'],
          ['border-top-left-radius', 'border-top-right-radius'],
          ['border-bottom-left-radius', 'border-bottom-right-radius'],
        ]),
        h = ['content'],
        f = n([
          ['ltr', 'rtl'],
          ['left', 'right'],
          ['w-resize', 'e-resize'],
          ['sw-resize', 'se-resize'],
          ['nw-resize', 'ne-resize'],
        ]),
        p = new RegExp('(^|\\W|_)((ltr)|(rtl)|(left)|(right))(\\W|_|$)', 'g'),
        g = new RegExp('(left)|(right)');

      function m(e) {
        return Object.keys(e).reduce(
          function (t, r) {
            var o = e[r];

            if (('string' == typeof o && (o = o.trim()), i(h, r))) return (t[r] = o), t;
            var n = v(r, o),
              a = n.key,
              s = n.value;

            return (t[a] = s), t;
          },
          Array.isArray(e) ? [] : {},
        );
      }

      function v(e, t) {
        var r,
          o = /\/\*\s?@noflip\s?\*\//.test(t),
          n = o ? e : d[(r = e)] || r,
          i = o
            ? t
            : (function (e, t) {
                if (
                  !(function (e) {
                    return (
                      (t = e),
                      !(
                        'boolean' == typeof t ||
                        (function (e) {
                          return null == e;
                        })(e)
                      )
                    );
                    var t;
                  })(t)
                )
                  return t;
                if (((r = t), r && 'object' == typeof r)) return m(t);
                var r;
                var o,
                  n = a(t),
                  i = (function (e) {
                    return 'function' == typeof e;
                  })(t),
                  s = n || i ? t : t.replace(/ !important.*?$/, ''),
                  l = !n && s.length !== t.length,
                  c = u[e];

                o = c
                  ? c({
                      value: s,
                      valuesToConvert: f,
                      propertiesToConvert: d,
                      isRtl: !0,
                      bgImgDirectionRegex: p,
                      bgPosDirectionRegex: g,
                    })
                  : f[s] || s;
                if (l) return o + ' !important';

                return o;
              })(n, t);

        return { key: n, value: i };
      }
      var y = r(3536),
        b = r(6883),
        k = r(9452),
        B = r(2774),
        P = r(299),
        w = r(9525);

      function S(e) {
        let t = '';

        for (const r in e) t += `${r}{${(0, w.U)(e[r])}}`;

        return t;
      }

      function C(e, t) {
        const r = `@keyframes ${e} {${t}}`,
          o = [];

        return (
          (0, k.q)((0, B.MY)(r), (0, P.qR)([P.Ji, k.P, (0, P.cD)((e) => o.push(e))])), o
        );
      }

      function x(e, t) {
        return 0 === e.length ? t : `${e} and ${t}`;
      }

      function E(e) {
        return '@media' === e.substr(0, 6);
      }

      function T(e) {
        return '@layer' === e.substr(0, 6);
      }
      const N = /^(:|\[|>|&)/;

      function F(e) {
        return N.test(e);
      }

      function A(e) {
        return '@supports' === e.substr(0, 9);
      }

      function L(e) {
        return '@container' === e.substring(0, 10);
      }
      var R = r(7708);
      const D = { 'us-w': 'w', 'us-v': 'i', nk: 'l', si: 'v', cu: 'f', ve: 'h', ti: 'a' };

      function H(e, t, r, o, n) {
        if (r) return 'm';
        if (t || o) return 't';
        if (n) return 'c';

        if (e.length > 0) {
          const t = e[0].trim();

          if (58 === t.charCodeAt(0)) return D[t.slice(4, 8)] || D[t.slice(3, 5)] || 'd';
        }

        return 'd';
      }

      function M({
        media: e,
        layer: t,
        property: r,
        selectors: n,
        support: a,
        value: i,
      }) {
        const s = (0, o.Z)(n.join('') + e + t + a + r + i.trim());

        return y.Hf + s;
      }

      function O(e, t, r, n) {
        const a = e.join('') + t + r + n,
          i = (0, o.Z)(a),
          s = i.charCodeAt(0);

        return s >= 48 && s <= 57 ? String.fromCharCode(s + 17) + i.substr(1) : i;
      }

      function _(...e) {
        0;
      }

      function j(e, t) {
        const r = JSON.stringify(t, null, 2),
          o = [
            '@griffel/react: A rule was not resolved to CSS properly. Please check your `makeStyles` or `makeResetStyles` calls for following:',
            ' '.repeat(2) + 'makeStyles({',
            ' '.repeat(4) + '[slot]: {',
            ' '.repeat(6) +
              `"${e}": ${r
                .split('\n')
                .map((e, t) => ' '.repeat(0 === t ? 0 : 6) + e)
                .join('\n')}`,
            ' '.repeat(4) + '}',
            ' '.repeat(2) + '})',
            '',
          ];

        -1 === e.indexOf('&')
          ? (o.push(
              "It looks that you're are using a nested selector, but it is missing an ampersand placeholder where the generated class name should be injected.",
            ),
            o.push(`Try to update a property to include it i.e "${e}" => "&${e}".`))
          : (o.push(''),
            o.push(
              "If it's not obvious what triggers a problem, please report an issue at https://github.com/microsoft/griffel/issues",
            )),
          _(o.join('\n'));
      }

      function I(e, t) {
        _(
          [
            `@griffel/react: You are using unsupported shorthand CSS property "${e}". Please check your "makeStyles" calls, there *should not* be following:`,
            ' '.repeat(2) + 'makeStyles({',
            ' '.repeat(4) + `[slot]: { ${e}: "${t}" }`,
            ' '.repeat(2) + '})',
            '',
            'Learn why CSS shorthands are not supported: https://aka.ms/griffel-css-shorthands',
          ].join('\n'),
        );
      }

      function V(e, t, r, o) {
        e[t] = o ? [r, o] : r;
      }

      function z(e, t) {
        return t ? [e, t] : e;
      }

      function $(e, t, r, o, n) {
        var a;
        let i;

        'm' === t && n && (i = { m: n }),
          (null !== (a = e[t]) && void 0 !== a) || (e[t] = []),
          r && e[t].push(z(r, i)),
          o && e[t].push(z(o, i));
      }

      function W(e, t = [], r = '', n = '', a = '', i = '', s = {}, l = {}, c) {
        for (const d in e) {
          if (y.C_.hasOwnProperty(d)) {
            I(d, e[d]);
            continue;
          }
          const h = e[d];

          if (null != h)
            if ('string' == typeof h || 'number' == typeof h) {
              const e = O(t, r, a, d),
                o = M({
                  media: r,
                  layer: n,
                  value: h.toString(),
                  support: a,
                  selectors: t,
                  property: d,
                }),
                u = (c && { key: d, value: c }) || v(d, h),
                f = u.key !== d || u.value !== h,
                p = f
                  ? M({
                      value: u.value.toString(),
                      property: u.key,
                      selectors: t,
                      media: r,
                      layer: n,
                      support: a,
                    })
                  : void 0,
                g = f
                  ? { rtlClassName: p, rtlProperty: u.key, rtlValue: u.value }
                  : void 0,
                m = H(t, n, r, a, i),
                [y, k] = (0, b.PE)({
                  className: o,
                  media: r,
                  layer: n,
                  selectors: t,
                  property: d,
                  support: a,
                  container: i,
                  value: h,
                  ...g,
                });

              V(s, e, o, p), $(l, m, y, k, r);
            } else if ('animationName' === d) {
              const e = Array.isArray(h) ? h : [h],
                c = [],
                u = [];

              for (const t of e) {
                const e = S(t),
                  n = S(m(t)),
                  a = y.Hf + (0, o.Z)(e);
                let i;
                const s = C(a, e);
                let d = [];

                e === n ? (i = a) : ((i = y.Hf + (0, o.Z)(n)), (d = C(i, n)));
                for (let t = 0; t < s.length; t++) $(l, 'k', s[t], d[t], r);
                c.push(a), u.push(i);
              }
              W({ animationName: c.join(', ') }, t, r, n, a, i, s, l, u.join(', '));
            } else if (Array.isArray(h)) {
              if (0 === h.length) {
                0;
                continue;
              }
              const e = O(t, r, a, d),
                o = M({
                  media: r,
                  layer: n,
                  value: h.map((e) => (null != e ? e : '').toString()).join(';'),
                  support: a,
                  selectors: t,
                  property: d,
                }),
                c = h.map((e) => v(d, e));

              if (c.some((e) => e.key !== c[0].key)) {
                0;
                continue;
              }
              const u = c[0].key !== d || c.some((e, t) => e.value !== h[t]),
                f = u
                  ? M({
                      value: c
                        .map((e) => {
                          var t;

                          return (
                            null !== (t = null == e ? void 0 : e.value) && void 0 !== t
                              ? t
                              : ''
                          ).toString();
                        })
                        .join(';'),
                      property: c[0].key,
                      selectors: t,
                      layer: n,
                      media: r,
                      support: a,
                    })
                  : void 0,
                p = u
                  ? {
                      rtlClassName: f,
                      rtlProperty: c[0].key,
                      rtlValue: c.map((e) => e.value),
                    }
                  : void 0,
                g = H(t, n, r, a, i),
                [m, y] = (0, b.PE)({
                  className: o,
                  media: r,
                  layer: n,
                  selectors: t,
                  property: d,
                  support: a,
                  container: i,
                  value: h,
                  ...p,
                });

              V(s, e, o, f), $(l, g, m, y, r);
            } else if (null != (u = h) && 'object' == typeof u && !1 === Array.isArray(u))
              if (F(d)) W(h, t.concat((0, R.L)(d)), r, n, a, i, s, l);
              else if (E(d)) {
                const e = x(r, d.slice(6).trim());

                W(h, t, e, n, a, i, s, l);
              } else if (T(d)) {
                const e = (n ? `${n}.` : '') + d.slice(6).trim();

                W(h, t, r, e, a, i, s, l);
              } else if (A(d)) {
                const e = x(a, d.slice(9).trim());

                W(h, t, r, n, e, i, s, l);
              } else if (L(d)) {
                const e = d.slice(10).trim();

                W(h, t, r, n, a, e, s, l);
              } else j(d, h);
        }
        var u;

        return [s, l];
      }
      var U = r(5141);

      function G(e) {
        const t = {};
        let r = null,
          o = null,
          n = null,
          a = null;

        return function (i) {
          const { dir: s, renderer: l } = i;

          null === r &&
            ([r, o] = (function (e) {
              const t = {},
                r = {};

              for (const o in e) {
                const n = e[o],
                  [a, i] = W(n);

                (t[o] = a),
                  Object.keys(i).forEach((e) => {
                    r[e] = (r[e] || []).concat(i[e]);
                  });
              }

              return [t, r];
            })(e));
          const c = 'ltr' === s,
            u = c ? l.id : l.id + 'r';

          return (
            c ? null === n && (n = (0, U.V)(r, s)) : null === a && (a = (0, U.V)(r, s)),
            void 0 === t[u] && (l.insertCSSRules(o), (t[u] = !0)),
            c ? n : a
          );
        };
      }
      var Z = r(6103),
        X = r(2861);

      function q(e) {
        const t = G(e);

        return function () {
          const e = (0, X.s)(),
            r = (0, Z.a)();

          return t({ dir: e, renderer: r });
        };
      }
    },
    5516: function (e, t) {
      'use strict';
      t.H = void 0;

      t.H = (e, t = 'always') => {
        const r = e.endsWith('.html'),
          o = e.endsWith('.xml'),
          n = e.endsWith('.pdf');

        return '/' === e
          ? e
          : ((r || o || n) && (t = 'never'),
            'always' === t
              ? e.endsWith('/')
                ? e
                : `${e}/`
              : 'never' === t && e.endsWith('/')
              ? e.slice(0, -1)
              : e);
      };
    },
    2802: function (e, t, r) {
      'use strict';
      t.p2 = t.$C = void 0;
      var o = r(1415);

      t.$C = o.ScrollHandler;
      var n = r(5492);

      t.p2 = n.useScrollRestoration;
    },
    1415: function (e, t, r) {
      'use strict';
      var o = r(1600);

      (t.__esModule = !0), (t.ScrollHandler = t.ScrollContext = void 0);
      var n = o(r(5297)),
        a = o(r(6531)),
        i = (function (e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ('object' != typeof e && 'function' != typeof e))
            return { default: e };
          var r = c(t);

          if (r && r.has(e)) return r.get(e);
          var o = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;

          for (var a in e)
            if ('default' !== a && Object.prototype.hasOwnProperty.call(e, a)) {
              var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;

              i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
            }
          (o.default = e), r && r.set(e, o);

          return o;
        })(r(2784)),
        s = o(r(3980)),
        l = r(643);

      function c(e) {
        if ('function' != typeof WeakMap) return null;
        var t = new WeakMap(),
          r = new WeakMap();

        return (c = function (e) {
          return e ? r : t;
        })(e);
      }
      var u = i.createContext(new l.SessionStorage());

      (t.ScrollContext = u), (u.displayName = 'GatsbyScrollContext');
      var d = (function (e) {
        function t() {
          for (var t, r = arguments.length, o = new Array(r), a = 0; a < r; a++)
            o[a] = arguments[a];

          return (
            ((t = e.call.apply(e, [this].concat(o)) || this)._stateStorage =
              new l.SessionStorage()),
            (t._isTicking = !1),
            (t._latestKnownScrollY = 0),
            (t.scrollListener = function () {
              (t._latestKnownScrollY = window.scrollY),
                t._isTicking ||
                  ((t._isTicking = !0),
                  requestAnimationFrame(t._saveScroll.bind((0, n.default)(t))));
            }),
            (t.windowScroll = function (e, r) {
              t.shouldUpdateScroll(r, t.props) && window.scrollTo(0, e);
            }),
            (t.scrollToHash = function (e, r) {
              var o = document.getElementById(e.substring(1));

              o && t.shouldUpdateScroll(r, t.props) && o.scrollIntoView();
            }),
            (t.shouldUpdateScroll = function (e, r) {
              var o = t.props.shouldUpdateScroll;

              return !o || o.call((0, n.default)(t), e, r);
            }),
            t
          );
        }
        (0, a.default)(t, e);
        var r = t.prototype;

        return (
          (r._saveScroll = function () {
            var e = this.props.location.key || null;

            e &&
              this._stateStorage.save(this.props.location, e, this._latestKnownScrollY),
              (this._isTicking = !1);
          }),
          (r.componentDidMount = function () {
            var e;

            window.addEventListener('scroll', this.scrollListener);
            var t = this.props.location,
              r = t.key,
              o = t.hash;

            r && (e = this._stateStorage.read(this.props.location, r)),
              o
                ? this.scrollToHash(decodeURI(o), void 0)
                : e && this.windowScroll(e, void 0);
          }),
          (r.componentWillUnmount = function () {
            window.removeEventListener('scroll', this.scrollListener);
          }),
          (r.componentDidUpdate = function (e) {
            var t,
              r = this.props.location,
              o = r.hash,
              n = r.key;

            n && (t = this._stateStorage.read(this.props.location, n)),
              o ? this.scrollToHash(decodeURI(o), e) : this.windowScroll(t, e);
          }),
          (r.render = function () {
            return i.createElement(
              u.Provider,
              { value: this._stateStorage },
              this.props.children,
            );
          }),
          t
        );
      })(i.Component);

      (t.ScrollHandler = d),
        (d.propTypes = {
          shouldUpdateScroll: s.default.func,
          children: s.default.element.isRequired,
          location: s.default.object.isRequired,
        });
    },
    643: function (e, t) {
      'use strict';
      (t.__esModule = !0), (t.SessionStorage = void 0);
      var r = '___GATSBY_REACT_ROUTER_SCROLL',
        o = (function () {
          function e() {}
          var t = e.prototype;

          return (
            (t.read = function (e, t) {
              var o = this.getStateKey(e, t);

              try {
                var n = window.sessionStorage.getItem(o);

                return n ? JSON.parse(n) : 0;
              } catch (a) {
                return window && window[r] && window[r][o] ? window[r][o] : 0;
              }
            }),
            (t.save = function (e, t, o) {
              var n = this.getStateKey(e, t),
                a = JSON.stringify(o);

              try {
                window.sessionStorage.setItem(n, a);
              } catch (i) {
                (window && window[r]) || (window[r] = {}), (window[r][n] = JSON.parse(a));
              }
            }),
            (t.getStateKey = function (e, t) {
              var r = '@@scroll|' + e.pathname;

              return null == t ? r : r + '|' + t;
            }),
            e
          );
        })();

      t.SessionStorage = o;
    },
    5492: function (e, t, r) {
      'use strict';
      (t.__esModule = !0),
        (t.useScrollRestoration = function (e) {
          var t = (0, a.useLocation)(),
            r = (0, n.useContext)(o.ScrollContext),
            i = (0, n.useRef)(null);

          return (
            (0, n.useLayoutEffect)(
              function () {
                if (i.current) {
                  var o = r.read(t, e);

                  i.current.scrollTo(0, o || 0);
                }
              },
              [t.key],
            ),
            {
              ref: i,
              onScroll: function () {
                i.current && r.save(t, e, i.current.scrollTop);
              },
            }
          );
        });
      var o = r(1415),
        n = r(2784),
        a = r(5619);
    },
    1915: function (e, t, r) {
      'use strict';
      (t.__esModule = !0), (t.onInitialClientRender = void 0);
      r(6291), r(5071);

      t.onInitialClientRender = () => {};
    },
    5895: function (e, t) {
      'use strict';
      (t.__esModule = !0),
        (t.getForwards = function (e) {
          return null == e
            ? void 0
            : e.flatMap((e) => (null == e ? void 0 : e.forward) || []);
        });
    },
    5071: function (e, t, r) {
      'use strict';
      (t.__esModule = !0),
        (t.injectPartytownSnippet = function (e) {
          if (!e.length) return;
          const t = document.querySelector('script[data-partytown]'),
            r = document.querySelector('iframe[src*="~partytown/partytown-sandbox-sw"]');

          t && t.remove();
          r && r.remove();
          const a = (0, n.getForwards)(e),
            i = document.createElement('script');

          (i.dataset.partytown = ''),
            (i.innerHTML = (0, o.partytownSnippet)({ forward: a })),
            document.head.appendChild(i);
        });
      var o = r(8072),
        n = r(5895);
    },
    7892: function (e, t, r) {
      'use strict';
      r.d(t, {
        i: function () {
          return s;
        },
      });
      var o = r(3513),
        n = r(2784),
        a = r(3552);
      const i = (0, r(3387).Z)({
          root: {
            width: '100%',
            height: '0.0625rem',
            position: 'relative',
            borderTopStyle: 'none',
            borderRightStyle: 'none',
            borderBottomStyle: 'none',
            borderLeftStyle: 'none',
            backgroundColor: a.T.colorNeutralStroke1,
            marginBottom: 0,
            marginTop: 0,
          },
        }),
        s = (e) => {
          let { className: t } = e;
          const r = i(),
            a = (0, o.z)(r.root, t);

          return n.createElement('hr', { className: a });
        };
    },
    8872: function (e, t, r) {
      'use strict';
      r.d(t, {
        h: function () {
          return p;
        },
      });
      var o = r(3513),
        n = r(8578),
        a = r(9471),
        i = r(2784),
        s = r(3552),
        l = r(3387),
        c = r(928),
        u = r(6457);
      const d = {
          primary: {
            background: s.T.colorNeutralBackground1,
            backgroundHover: s.T.colorNeutralBackground1Hover,
            outline: s.T.colorBrandStroke1,
            stroke: s.T.colorNeutralForeground1,
            strokeHover: s.T.colorNeutralForeground1Hover,
          },
          secondary: {
            background: s.T.colorNeutralBackground1,
            backgroundHover: s.T.colorNeutralBackground2Hover,
            outline: s.T.colorBrandStroke1,
            stroke: s.T.colorNeutralForeground2,
            strokeHover: s.T.colorNeutralForeground2Hover,
          },
          danger: {
            background: s.T.colorNeutralBackground1,
            backgroundHover: s.T.colorPaletteDarkOrangeBackground1,
            outline: s.T.colorPaletteDarkOrangeBorderActive,
            stroke: s.T.colorPaletteDarkOrangeForeground3,
            strokeHover: s.T.colorPaletteDarkOrangeForeground1,
          },
          warning: {
            background: s.T.colorNeutralBackground1,
            backgroundHover: s.T.colorPaletteMarigoldBackground1,
            outline: s.T.colorPaletteMarigoldBorderActive,
            stroke: s.T.colorPaletteMarigoldForeground3,
            strokeHover: s.T.colorPaletteMarigoldForeground1,
          },
          success: {
            background: s.T.colorNeutralBackground1,
            backgroundHover: s.T.colorPaletteLightGreenBackground1,
            outline: s.T.colorPaletteLightGreenBorderActive,
            stroke: s.T.colorPaletteLightGreenForeground1,
            strokeHover: s.T.colorPaletteLightGreenForeground3,
          },
          info: {
            background: s.T.colorNeutralBackground1,
            backgroundHover: s.T.colorNeutralBackground2Hover,
            outline: s.T.colorBrandStroke1,
            stroke: s.T.colorNeutralForeground2,
            strokeHover: s.T.colorNeutralForeground2Hover,
          },
          accent: {
            background: s.T.colorNeutralBackground1,
            backgroundHover: s.T.colorBrandBackgroundInvertedHover,
            outline: s.T.colorBrandStroke1,
            stroke: s.T.colorCompoundBrandStroke,
            strokeHover: s.T.colorCompoundBrandStrokeHover,
          },
        },
        h = (0, u.f)(d, (e) => {
          let {
            background: t,
            backgroundHover: r,
            outline: o,
            stroke: n,
            strokeHover: a,
          } = e;

          return {
            backgroundColor: t,
            '& > svg': { color: n },
            ':hover': { backgroundColor: r, '& > svg': { color: a } },
            ':focus': { backgroundColor: r, outlineColor: o },
          };
        }),
        f = (0, l.Z)({
          ...h,
          root: {
            ...c.q5.borderRadius(s.T.borderRadiusXLarge),
            cursor: 'pointer',
            transitionProperty: 'all',
            transitionDuration: s.T.durationNormal,
            transitionTimingFunction: s.T.curveEasyEase,
            lineHeight: 0,
            borderTopStyle: 'none',
            borderRightStyle: 'none',
            borderBottomStyle: 'none',
            borderLeftStyle: 'none',
          },
        }),
        p = (e) => {
          let {
            className: t,
            label: r,
            iconName: s,
            onClick: l,
            color: c = 'primary',
          } = e;
          const u = f(),
            d = (0, a.z)();

          return i.createElement(
            'button',
            { onClick: l, 'aria-label': r, className: (0, o.z)(u.root, u[c], d.p2, t) },
            i.createElement(n.J, { iconName: s }),
          );
        };
    },
    8578: function (e, t, r) {
      'use strict';
      r.d(t, {
        J: function () {
          return f;
        },
      });
      var o = r(3513),
        n = r(2784),
        a = r(3552),
        i = r(3387),
        s = r(6457);
      const l = {
          accent: a.T.colorBrandForeground1,
          primary: a.T.colorNeutralForeground1,
          secondary: a.T.colorNeutralForeground2,
          tertiary: a.T.colorNeutralForeground3,
          quaternary: a.T.colorNeutralForeground4,
          negative: a.T.colorPaletteDarkOrangeForeground1,
          positive: a.T.colorPaletteGreenForeground1,
          warning: a.T.colorPaletteMarigoldForeground1,
          danger: a.T.colorPaletteDarkOrangeForeground1,
          info: a.T.colorBrandForeground2,
          'accent-inverse': a.T.colorBrandBackground,
          'primary-inverse': a.T.colorNeutralBackground1,
          'secondary-inverse': a.T.colorNeutralBackground2,
          'tertiary-inverse': a.T.colorNeutralBackground3,
          'quaternary-inverse': a.T.colorNeutralBackground4,
          'negative-inverse': a.T.colorPaletteDarkOrangeBackground1,
          'positive-inverse': a.T.colorPaletteGreenBackground1,
          'warning-inverse': a.T.colorPaletteMarigoldBackground1,
          'danger-inverse': a.T.colorPaletteDarkOrangeBackground1,
          'info-inverse': a.T.colorBrandBackground2,
        },
        c = (0, s.f)(l, (e) => ({ color: e })),
        u = {
          small: { height: a.T.spacingVerticalM },
          medium: { height: a.T.spacingVerticalL },
          large: { height: a.T.spacingVerticalXL },
        },
        d = (0, i.Z)({
          ...c,
          ...u,
          root: { width: 'auto' },
          inline: { display: 'inline-block', verticalAlign: 'middle' },
        }),
        h = {
          'arrow-right': () =>
            n.createElement('path', {
              d: 'M9.13633 2.85585C8.87407 2.59743 8.452 2.60056 8.1936 2.86283C7.93513 3.1251 7.93827 3.5472 8.20053 3.80561L11.7808 7.3332H2.66667C2.29847 7.3332 2 7.63167 2 7.99987C2 8.36807 2.29848 8.66653 2.66667 8.66653H11.7764L8.20053 12.1898C7.93827 12.4482 7.93513 12.8703 8.1936 13.1326C8.452 13.3949 8.87407 13.398 9.13633 13.1396L13.7525 8.59133C14.0837 8.26493 14.0837 7.73053 13.7525 7.40413L9.13633 2.85585Z',
              fill: 'currentColor',
            }),
          'chevron-right': () =>
            n.createElement('path', {
              d: 'M5.73966 3.20041C5.43613 3.48226 5.41856 3.95681 5.70041 4.26034L9.22652 8L5.70041 11.7397C5.41856 12.0432 5.43613 12.5177 5.73967 12.7996C6.0432 13.0815 6.51775 13.0639 6.7996 12.7603L10.7996 8.51034C11.0668 8.22258 11.0668 7.77743 10.7996 7.48966L6.7996 3.23966C6.51775 2.93613 6.0432 2.91856 5.73966 3.20041Z',
              fill: 'currentColor',
            }),
          'full-screen': () =>
            n.createElement('path', {
              d: 'M3.33333 4C3.33333 3.63181 3.63181 3.33333 4 3.33333H5.33333C5.70152 3.33333 6 3.03485 6 2.66667C6 2.29848 5.70152 2 5.33333 2H4C2.89543 2 2 2.89543 2 4V5.33333C2 5.70152 2.29848 6 2.66667 6C3.03485 6 3.33333 5.70152 3.33333 5.33333V4ZM3.33333 12C3.33333 12.3682 3.63181 12.6667 4 12.6667H5.33333C5.70152 12.6667 6 12.9651 6 13.3333C6 13.7015 5.70152 14 5.33333 14H4C2.89543 14 2 13.1046 2 12V10.6667C2 10.2985 2.29848 10 2.66667 10C3.03485 10 3.33333 10.2985 3.33333 10.6667V12ZM12 3.33333C12.3682 3.33333 12.6667 3.63181 12.6667 4V5.33333C12.6667 5.70152 12.9651 6 13.3333 6C13.7015 6 14 5.70152 14 5.33333V4C14 2.89543 13.1046 2 12 2H10.6667C10.2985 2 10 2.29848 10 2.66667C10 3.03485 10.2985 3.33333 10.6667 3.33333H12ZM12.6667 12C12.6667 12.3682 12.3682 12.6667 12 12.6667H10.6667C10.2985 12.6667 10 12.9651 10 13.3333C10 13.7015 10.2985 14 10.6667 14H12C13.1046 14 14 13.1046 14 12V10.6667C14 10.2985 13.7015 10 13.3333 10C12.9651 10 12.6667 10.2985 12.6667 10.6667V12Z',
              fill: 'currentColor',
            }),
          'slide-in': () =>
            n.createElement('path', {
              d: 'M10.246 6.19922C10.0243 5.95297 9.64493 5.933 9.39862 6.15463L7.39862 7.95421C7.27219 8.06796 7.2 8.23003 7.2 8.40008C7.2 8.57013 7.27219 8.73219 7.39862 8.84595L9.39862 10.6455C9.64493 10.8672 10.0243 10.8472 10.246 10.601C10.4677 10.3547 10.4477 9.97542 10.2014 9.7538L9.36358 8.99995H12.2C12.5314 8.99995 12.8 8.73138 12.8 8.40009C12.8 8.06879 12.5314 7.80022 12.2 7.80022H9.36357L10.2014 7.04638C10.4477 6.82475 10.4677 6.44547 10.246 6.19922ZM1.52588e-06 12.6005C1.52588e-06 13.8153 0.984975 14.8 2.2 14.8L13.8 14.8C15.015 14.8 16 13.8153 16 12.6005V4.19949C16 2.98475 15.015 2 13.8 2H2.2C0.984975 2 0 2.98475 0 4.19949L1.52588e-06 12.6005ZM2.2 13.6003C1.64772 13.6003 1.2 13.1527 1.2 12.6005L1.2 4.19949C1.2 3.64734 1.64772 3.19972 2.2 3.19972L4.80332 3.19972L4.80332 13.6003H2.2ZM6.00332 13.6003L6.00332 3.19972L13.8 3.19972C14.3523 3.19972 14.8 3.64734 14.8 4.19949L14.8 12.6005C14.8 13.1527 14.3523 13.6003 13.8 13.6003L6.00332 13.6003Z',
              fill: 'currentColor',
            }),
          'slide-out': () =>
            n.createElement('path', {
              d: 'M9.75402 10.601C9.9757 10.8472 10.3551 10.8672 10.6014 10.6456L12.6014 8.84599C12.7278 8.73223 12.8 8.57017 12.8 8.40012C12.8 8.23006 12.7278 8.068 12.6014 7.95424L10.6014 6.15465C10.3551 5.93303 9.9757 5.95299 9.75403 6.19924C9.53235 6.44548 9.55232 6.82477 9.79862 7.0464L10.6364 7.80025L7.8 7.80025C7.46863 7.80025 7.2 8.06881 7.2 8.40011C7.2 8.7314 7.46863 8.99997 7.8 8.99997H10.6364L9.79862 9.75382C9.55232 9.97544 9.53235 10.3547 9.75402 10.601ZM0 4.2C0 2.98497 0.984974 2 2.2 2H13.8C15.015 2 16 2.98497 16 4.2V12.6C16 13.815 15.015 14.8 13.8 14.8H2.2C0.984974 14.8 0 13.815 0 12.6V4.2ZM2.2 3.2C1.64772 3.2 1.2 3.64772 1.2 4.2V12.6C1.2 13.1523 1.64772 13.6 2.2 13.6H4.80342V3.2H2.2ZM6.00342 3.2V13.6H13.8C14.3523 13.6 14.8 13.1523 14.8 12.6V4.2C14.8 3.64772 14.3523 3.2 13.8 3.2H6.00342Z',
              fill: 'currentColor',
            }),
          check: () =>
            n.createElement('path', {
              d: 'M0 9.27233C0 9.12371 0.0270213 8.98522 0.081064 8.85687C0.141862 8.72177 0.219548 8.60693 0.314123 8.51235C0.415453 8.41102 0.530293 8.33333 0.658645 8.27929C0.793751 8.21849 0.935613 8.18809 1.08423 8.18809C1.37471 8.18809 1.62803 8.29618 1.84421 8.51235L5.40089 12.069L14.1457 3.32426C14.3618 3.10809 14.6185 3 14.9158 3C15.0644 3 15.2029 3.0304 15.3312 3.0912C15.4663 3.14524 15.5812 3.22293 15.6757 3.32426C15.7771 3.42559 15.8548 3.5438 15.9088 3.67891C15.9696 3.80726 16 3.94237 16 4.08423C16 4.38147 15.8919 4.63817 15.6757 4.85434L6.16086 14.3591C6.05953 14.4604 5.94131 14.5415 5.80621 14.6023C5.67786 14.6563 5.54275 14.6833 5.40089 14.6833C5.11041 14.6833 4.85708 14.5753 4.64091 14.3591L0.314123 10.0424C0.104708 9.83302 0 9.57632 0 9.27233Z',
              fill: 'currentColor',
            }),
          code: () =>
            n.createElement('path', {
              d: 'M5.39035 12.4075L9.3878 3.0711C9.53267 2.73262 9.92453 2.57572 10.2631 2.72064C10.5773 2.85521 10.7351 3.2027 10.64 3.52266L10.6135 3.59589L6.61606 12.9323C6.47114 13.2707 6.07928 13.4276 5.74081 13.2827C5.42651 13.1481 5.26877 12.8007 5.36387 12.4807L5.39035 12.4075ZM1.52859 7.52872L4.19526 4.86209C4.45561 4.60174 4.87772 4.60174 5.13807 4.86209C5.37839 5.10241 5.39688 5.48057 5.19353 5.7421L5.13807 5.8049L2.94281 8.00019L5.13807 10.1954C5.39842 10.4558 5.39842 10.8779 5.13807 11.1383C4.89775 11.3785 4.51959 11.3971 4.25807 11.1937L4.19526 11.1383L1.52859 8.47159C1.28827 8.23126 1.26979 7.85306 1.47313 7.59159L1.52859 7.52872ZM10.8614 4.86126C11.1017 4.62095 11.4799 4.60248 11.7414 4.80584L11.8042 4.86131L14.4714 7.52879C14.7119 7.76919 14.7302 8.14759 14.5266 8.40906L14.4711 8.47186L11.8039 11.1356C11.5433 11.3957 11.1212 11.3955 10.8611 11.1349C10.6209 10.8945 10.6027 10.5163 10.8062 10.2549L10.8617 10.1921L13.0569 7.99986L10.8613 5.80408C10.601 5.54371 10.601 5.1216 10.8614 4.86126Z',
              fill: 'currentColor',
            }),
          copy: () =>
            n.createElement('path', {
              d: 'M4.00029 4.08525L4 10.5C4 11.8255 5.03154 12.91 6.33562 12.9947L6.5 13L10.9144 13.0007C10.7083 13.5829 10.1528 14 9.5 14H6C4.34315 14 3 12.6569 3 11V5.5C3 4.84678 3.41754 4.29109 4.00029 4.08525ZM11.5 2C12.3284 2 13 2.67157 13 3.5V10.5C13 11.3284 12.3284 12 11.5 12H6.5C5.67157 12 5 11.3284 5 10.5V3.5C5 2.67157 5.67157 2 6.5 2H11.5ZM11.5 3H6.5C6.22386 3 6 3.22386 6 3.5V10.5C6 10.7761 6.22386 11 6.5 11H11.5C11.7761 11 12 10.7761 12 10.5V3.5C12 3.22386 11.7761 3 11.5 3Z',
              fill: 'currentColor',
            }),
          download: () =>
            n.createElement('path', {
              d: 'M13.2452 14.4998C13.4352 14.4999 13.6182 14.5721 13.757 14.7018C13.8959 14.8316 13.9803 15.0092 13.9933 15.1988C14.0063 15.3884 13.9467 15.5758 13.8268 15.7233C13.7069 15.8707 13.5355 15.9671 13.3472 15.993L13.2452 16H2.74987C2.55982 15.9999 2.37688 15.9277 2.23801 15.798C2.09914 15.6683 2.0147 15.4906 2.00175 15.301C1.98879 15.1114 2.04829 14.924 2.16823 14.7765C2.28816 14.6291 2.45958 14.5327 2.64785 14.5068L2.74987 14.4998H13.2452ZM8.00452 0.00100017C8.18561 0.00124928 8.36049 0.0670014 8.49689 0.186119C8.63329 0.305236 8.72199 0.469676 8.74661 0.649081L8.75362 0.751094V10.9454L11.72 7.975C11.8469 7.84781 12.0152 7.77039 12.1943 7.75681C12.3734 7.74323 12.5515 7.79439 12.6961 7.90099L12.7811 7.973C12.9084 8.10006 12.9858 8.26863 12.9992 8.44799C13.0126 8.62735 12.9611 8.80555 12.8541 8.95012L12.7821 9.03413L8.53859 13.2847L8.46858 13.3477L8.37657 13.4067L8.34056 13.4277L8.24955 13.4657L8.12954 13.4957L8.05953 13.5037L7.99952 13.5057C7.94876 13.5056 7.89815 13.5002 7.8485 13.4897L7.76849 13.4667C7.67343 13.4361 7.58563 13.3864 7.51046 13.3207L3.21992 9.03513C3.08537 8.90146 3.00645 8.72177 2.99905 8.53225C2.99165 8.34273 3.05633 8.15744 3.18005 8.01368C3.30378 7.86993 3.47737 7.77838 3.66588 7.75747C3.85439 7.73656 4.04382 7.78784 4.19605 7.90099L4.28006 7.974L7.25343 10.9414V0.750094C7.25343 0.551157 7.33246 0.360367 7.47313 0.219697C7.61379 0.0790275 7.80458 0 8.00352 0L8.00452 0.00100017Z',
              fill: 'currentColor',
            }),
          exclamation: () =>
            n.createElement('path', {
              d: 'M6.38422 7.80332V1.55517C6.38422 1.34172 6.42386 1.14046 6.50314 0.951401C6.58853 0.76234 6.70135 0.597675 6.84162 0.457404C6.98799 0.317134 7.15571 0.207357 7.34477 0.128073C7.53383 0.0426911 7.73509 0 7.94854 0C8.162 0 8.36326 0.0426911 8.55232 0.128073C8.74138 0.207357 8.90604 0.317134 9.04631 0.457404C9.19268 0.597675 9.30551 0.76234 9.38479 0.951401C9.47017 1.14046 9.51286 1.34172 9.51286 1.55517V7.80332C9.51286 8.01677 9.47017 8.21803 9.38479 8.40709C9.30551 8.59615 9.19268 8.76387 9.04631 8.91023C8.90604 9.0505 8.74138 9.16333 8.55232 9.24871C8.36326 9.328 8.162 9.36764 7.94854 9.36764C7.73509 9.36764 7.53383 9.328 7.34477 9.24871C7.15571 9.16333 6.98799 9.0505 6.84162 8.91023C6.70135 8.76387 6.58853 8.59615 6.50314 8.40709C6.42386 8.21803 6.38422 8.01677 6.38422 7.80332ZM6 14.0515C6 13.7831 6.05184 13.53 6.15552 13.2922C6.2592 13.0543 6.39947 12.847 6.57633 12.6701C6.75319 12.4932 6.9575 12.353 7.18925 12.2493C7.4271 12.1456 7.6802 12.0938 7.94854 12.0938C8.21689 12.0938 8.46693 12.1456 8.69869 12.2493C8.93654 12.353 9.14389 12.4932 9.32075 12.6701C9.49762 12.847 9.63789 13.0543 9.74157 13.2922C9.84525 13.53 9.89708 13.7831 9.89708 14.0515C9.89708 14.3198 9.84525 14.5729 9.74157 14.8107C9.63789 15.0425 9.49762 15.2468 9.32075 15.4237C9.14389 15.6005 8.93654 15.7408 8.69869 15.8445C8.46083 15.9482 8.21079 16 7.94854 16C7.6802 16 7.4271 15.9482 7.18925 15.8445C6.9575 15.7408 6.75319 15.6005 6.57633 15.4237C6.39947 15.2468 6.2592 15.0425 6.15552 14.8107C6.05184 14.5729 6 14.3198 6 14.0515Z',
              fill: 'currentColor',
            }),
          link: () =>
            n.createElement('path', {
              d: 'M5.59845 4C5.80248 4.00023 5.99873 4.07835 6.1471 4.21842C6.29546 4.35849 6.38475 4.54992 6.3967 4.7536C6.40866 4.95729 6.34239 5.15785 6.21143 5.31431C6.08048 5.47078 5.89472 5.57133 5.69211 5.59543L5.59845 5.60103H3.99742C3.37229 5.60043 2.77156 5.84361 2.32288 6.27889C1.8742 6.71417 1.61293 7.30725 1.59459 7.93211C1.57624 8.55697 1.80227 9.16435 2.22464 9.62521C2.64701 10.0861 3.23244 10.3641 3.85652 10.4001L3.99742 10.4041H5.59845C5.80248 10.4044 5.99873 10.4825 6.1471 10.6226C6.29546 10.7626 6.38475 10.9541 6.3967 11.1577C6.40866 11.3614 6.34239 11.562 6.21143 11.7184C6.08048 11.8749 5.89472 11.9755 5.69211 11.9996L5.59845 12.0052H3.99742C2.95181 12.0038 1.94824 11.5934 1.20137 10.8616C0.454502 10.1298 0.0236398 9.13483 0.000944088 8.08947C-0.0217517 7.0441 0.365521 6.03136 1.07992 5.26786C1.79433 4.50436 2.77914 4.05073 3.8237 4.004L3.99742 4H5.59845ZM12.0026 4C13.0482 4.00135 14.0518 4.41181 14.7986 5.14358C15.5455 5.87536 15.9764 6.87034 15.9991 7.9157C16.0218 8.96107 15.6345 9.97381 14.9201 10.7373C14.2057 11.5008 13.2209 11.9544 12.1763 12.0012L12.0026 12.0052H10.4016C10.1975 12.0049 10.0013 11.9268 9.8529 11.7867C9.70454 11.6467 9.61525 11.4553 9.6033 11.2516C9.59134 11.0479 9.65761 10.8473 9.78857 10.6909C9.91952 10.5344 10.1053 10.4338 10.3079 10.4097L10.4016 10.4041H12.0026C12.6277 10.4047 13.2284 10.1616 13.6771 9.72628C14.1258 9.291 14.3871 8.69792 14.4054 8.07306C14.4238 7.4482 14.1977 6.84081 13.7754 6.37996C13.353 5.91911 12.7676 5.64111 12.1435 5.60504L12.0026 5.60103H10.4016C10.1975 5.60081 10.0013 5.52268 9.8529 5.38261C9.70454 5.24255 9.61525 5.05112 9.6033 4.84743C9.59134 4.64375 9.65761 4.44318 9.78857 4.28672C9.91952 4.13026 10.1053 4.0297 10.3079 4.0056L10.4016 4H12.0026ZM3.99742 7.20207H12.0026C12.2066 7.20229 12.4029 7.28042 12.5512 7.42049C12.6996 7.56055 12.7889 7.75198 12.8008 7.95567C12.8128 8.15935 12.7465 8.35992 12.6156 8.51638C12.4846 8.67284 12.2989 8.7734 12.0962 8.7975L12.0026 8.8031H3.99742C3.79338 8.80287 3.59713 8.72475 3.44877 8.58468C3.3004 8.44462 3.21112 8.25318 3.19916 8.0495C3.18721 7.84581 3.25348 7.64525 3.38443 7.48879C3.51539 7.33232 3.70115 7.23177 3.90376 7.20767L3.99742 7.20207H12.0026H3.99742Z',
              fill: 'currentColor',
            }),
          moon: () =>
            n.createElement('path', {
              d: 'M13.3505 11.3343C11.5093 14.5234 7.4314 15.6161 4.24227 13.7748C3.37379 13.2734 2.64267 12.5951 2.08581 11.7865C1.89963 11.5161 2.02007 11.1427 2.32913 11.0321C4.84075 10.1331 6.18595 9.09146 6.96653 7.60139C7.78833 6.03271 8.00067 4.3144 7.4258 1.95907C7.34633 1.63338 7.60353 1.32327 7.93833 1.34123C8.97633 1.39692 9.9904 1.69508 10.9099 2.22601C14.0991 4.06724 15.1917 8.14512 13.3505 11.3343Z',
              fill: 'currentColor',
            }),
          open: () =>
            n.createElement('path', {
              d: 'M3.71429 1.71429C3.18385 1.71429 2.67515 1.925 2.30007 2.30007C1.925 2.67515 1.71429 3.18385 1.71429 3.71429V12.2857C1.71429 13.3897 2.61029 14.2857 3.71429 14.2857H12.2857C12.8161 14.2857 13.3249 14.075 13.6999 13.6999C14.075 13.3249 14.2857 12.8161 14.2857 12.2857V10C14.2857 9.77267 14.376 9.55465 14.5368 9.39391C14.6975 9.23316 14.9155 9.14286 15.1429 9.14286C15.3702 9.14286 15.5882 9.23316 15.749 9.39391C15.9097 9.55465 16 9.77267 16 10V12.2857C16 13.2708 15.6087 14.2155 14.9121 14.9121C14.2155 15.6087 13.2708 16 12.2857 16H3.71429C2.7292 16 1.78445 15.6087 1.08789 14.9121C0.391325 14.2155 0 13.2708 0 12.2857V3.71429C0 2.7292 0.391325 1.78445 1.08789 1.08789C1.78445 0.391325 2.7292 0 3.71429 0H6C6.22733 0 6.44535 0.0903058 6.60609 0.251051C6.76684 0.411797 6.85714 0.629814 6.85714 0.857143C6.85714 1.08447 6.76684 1.30249 6.60609 1.46323C6.44535 1.62398 6.22733 1.71429 6 1.71429H3.71429ZM8.57143 0.857143C8.57143 0.629814 8.66174 0.411797 8.82248 0.251051C8.98323 0.0903058 9.20124 0 9.42857 0H15.1429C15.3702 0 15.5882 0.0903058 15.749 0.251051C15.9097 0.411797 16 0.629814 16 0.857143V6.57143C16 6.79876 15.9097 7.01677 15.749 7.17752C15.5882 7.33827 15.3702 7.42857 15.1429 7.42857C14.9155 7.42857 14.6975 7.33827 14.5368 7.17752C14.376 7.01677 14.2857 6.79876 14.2857 6.57143V2.92571L10.0343 7.17714C9.95581 7.26136 9.86119 7.3289 9.75604 7.37575C9.6509 7.4226 9.5374 7.44779 9.42231 7.44982C9.30722 7.45185 9.1929 7.43068 9.08617 7.38757C8.97945 7.34446 8.88249 7.28029 8.8011 7.1989C8.71971 7.11751 8.65554 7.02056 8.61243 6.91383C8.56932 6.8071 8.54815 6.69278 8.55018 6.57769C8.55221 6.4626 8.5774 6.3491 8.62425 6.24396C8.6711 6.13881 8.73864 6.04419 8.82286 5.96571L13.0743 1.71429H9.42857C9.20124 1.71429 8.98323 1.62398 8.82248 1.46323C8.66174 1.30249 8.57143 1.08447 8.57143 0.857143V0.857143Z',
              fill: 'currentColor',
            }),
          sun: () =>
            n.createElement(
              n.Fragment,
              null,
              n.createElement(
                'g',
                { clipPath: 'url(#arbutus-sun-icon-clip0_212_184)' },
                n.createElement('path', {
                  d: 'M8 0C8.33136 0 8.6 0.268632 8.6 0.6V1.8C8.6 2.13137 8.33136 2.4 8 2.4C7.66864 2.4 7.4 2.13137 7.4 1.8V0.6C7.4 0.268632 7.66864 0 8 0ZM12 8C12 10.2091 10.2091 12 8 12C5.79086 12 4 10.2091 4 8C4 5.79086 5.79086 4 8 4C10.2091 4 12 5.79086 12 8ZM15.4 8.6C15.7314 8.6 16 8.33136 16 8C16 7.66864 15.7314 7.4 15.4 7.4H14.2C13.8686 7.4 13.6 7.66864 13.6 8C13.6 8.33136 13.8686 8.6 14.2 8.6H15.4ZM8 13.6C8.33136 13.6 8.6 13.8686 8.6 14.2V15.4C8.6 15.7314 8.33136 16 8 16C7.66864 16 7.4 15.7314 7.4 15.4V14.2C7.4 13.8686 7.66864 13.6 8 13.6ZM1.8 8.6C2.13137 8.6 2.4 8.33136 2.4 8C2.4 7.66864 2.13137 7.4 1.8 7.4H0.6C0.268632 7.4 0 7.66864 0 8C0 8.33136 0.268632 8.6 0.6 8.6H1.8ZM1.77574 1.77603C2.01005 1.54172 2.38995 1.54172 2.62426 1.77603L3.82426 2.97603C4.05858 3.21035 4.05858 3.59025 3.82426 3.82456C3.58995 4.05888 3.21005 4.05888 2.97574 3.82456L1.77574 2.62456C1.54142 2.39025 1.54142 2.01035 1.77574 1.77603ZM2.62426 14.2246C2.38995 14.4589 2.01005 14.4589 1.77574 14.2246C1.54142 13.9902 1.54142 13.6103 1.77574 13.376L2.97574 12.176C3.21005 11.9417 3.58995 11.9417 3.82426 12.176C4.05858 12.4103 4.05858 12.7902 3.82426 13.0246L2.62426 14.2246ZM14.2242 1.77603C13.9899 1.54172 13.6101 1.54172 13.3758 1.77603L12.1758 2.97603C11.9414 3.21035 11.9414 3.59025 12.1758 3.82456C12.4101 4.05888 12.7899 4.05888 13.0242 3.82456L14.2242 2.62456C14.4586 2.39025 14.4586 2.01035 14.2242 1.77603ZM13.3758 14.2246C13.6101 14.4589 13.9899 14.4589 14.2242 14.2246C14.4586 13.9902 14.4586 13.6103 14.2242 13.376L13.0242 12.176C12.7899 11.9417 12.4101 11.9417 12.1758 12.176C11.9414 12.4103 11.9414 12.7902 12.1758 13.0246L13.3758 14.2246Z',
                  fill: 'currentColor',
                }),
              ),
              n.createElement(
                'defs',
                null,
                n.createElement(
                  'clipPath',
                  { id: 'arbutus-sun-icon-clip0_212_184' },
                  n.createElement('rect', { width: '16', height: '16', fill: 'white' }),
                ),
              ),
            ),
          x: () =>
            n.createElement('path', {
              d: 'M7.9956 9.33187L3.6 13.7363C3.41832 13.9179 3.1956 14.0088 2.93187 14.0088C2.66813 14.0088 2.44542 13.9209 2.26374 13.7451C2.08791 13.5634 2 13.3407 2 13.0769C2 12.8132 2.09084 12.5905 2.27253 12.4088L6.66813 8.0044L2.27253 3.60879C2.09084 3.42711 2 3.20733 2 2.94945C2 2.82051 2.02344 2.69744 2.07033 2.58022C2.11722 2.463 2.18168 2.36337 2.26374 2.28132C2.35165 2.19927 2.45128 2.1348 2.56264 2.08791C2.67399 2.03516 2.79707 2.00879 2.93187 2.00879C3.18974 2.00879 3.40952 2.09963 3.59121 2.28132L7.9956 6.68571L12.3912 2.28132C12.5788 2.09377 12.8015 2 13.0593 2C13.1883 2 13.3084 2.02637 13.4198 2.07912C13.537 2.12601 13.6366 2.19341 13.7187 2.28132C13.8066 2.36337 13.874 2.463 13.9209 2.58022C13.9678 2.69158 13.9912 2.81172 13.9912 2.94066C13.9912 3.19853 13.9004 3.41832 13.7187 3.6L9.31429 8.0044L13.7187 12.4088C13.9062 12.5963 14 12.819 14 13.0769C14 13.2059 13.9736 13.326 13.9209 13.4374C13.874 13.5487 13.8066 13.6484 13.7187 13.7363C13.6366 13.8183 13.537 13.8857 13.4198 13.9385C13.3084 13.9853 13.1883 14.0088 13.0593 14.0088C12.7956 14.0088 12.5729 13.9179 12.3912 13.7363L7.9956 9.33187Z',
              fill: 'currentColor',
            }),
        },
        f = (e) => {
          let {
            className: t,
            color: r = 'primary',
            label: a,
            iconName: i,
            size: s = 'medium',
            isInline: l,
          } = e;
          const c = (0, n.useMemo)(() => h[i], [i]),
            u = (0, n.useId)(),
            f = {};

          a ? ((f.role = 'img'), (f['aria-labelledby'] = a)) : (f['aria-hidden'] = !0);
          const p = d(),
            g = (0, o.z)(p.root, p[r], p[s], l && p.inline, t);

          return n.createElement(
            'svg',
            {
              viewBox: '0 0 16 16',
              xmlns: 'http://www.w3.org/2000/svg',
              className: g,
              fill: 'currentColor',
              ...f,
            },
            a && n.createElement('title', { id: u }, a),
            n.createElement(c, null),
          );
        };
    },
    7211: function (e, t, r) {
      'use strict';
      r.d(t, {
        r: function () {
          return f;
        },
      });
      var o = r(3513),
        n = r(8578),
        a = r(9256),
        i = r(9471),
        s = r(2784),
        l = r(3552),
        c = r(3387),
        u = r(928);
      const d = (0, c.Z)({
          root: {
            cursor: 'pointer',
            backgroundColor: 'transparent',
            ...u.q5.borderStyle('none'),
            outlineStyle: 'none',
            display: 'inline-flex',
            textDecorationLine: 'none',
            alignItems: 'center',
          },
          isUnderlined: { textDecorationLine: 'underline', textDecorationSkipInk: 'all' },
          flexLayout: { columnGap: l.T.spacingHorizontalS },
        }),
        h = (e) => {
          let { variant: t } = e;

          switch (t) {
            case 'display':
              return { variant: 'leading', color: 'action' };
            case 'accent':
            case 'caption':
              return { variant: 'caption', color: 'primary' };
            case 'inverse':
              return { color: 'background' };
            case 'secondary':
              return { variant: 'description', color: 'secondary' };
            default:
              return { color: 'action' };
          }
        },
        f = (e) => {
          let {
            as: t,
            children: r,
            className: l,
            elementProps: c,
            variant: u = 'primary',
            withIcon: f,
            isUnderlined: p,
            iconName: g = 'open',
          } = e;
          const m = (0, i.z)(),
            v = d(),
            y = ['display', 'accent'].includes(u);

          return s.createElement(
            t,
            { className: (0, o.z)(v.root, y && v.flexLayout, l), ...c },
            y &&
              s.createElement(n.J, {
                iconName: 'arrow-right',
                size: 'display' === u ? 'large' : 'medium',
                className: (0, o.z)(
                  'display' === u ? m.mr3 : m.mr1,
                  'display' === u && m.mt1,
                ),
              }),
            s.createElement(
              a.x,
              { as: 'span', className: p ? v.isUnderlined : '', ...h({ variant: u }) },
              r,
            ),
            f &&
              s.createElement(n.J, {
                iconName: g,
                color: 'tertiary',
                isInline: !0,
                className: m.ml3,
              }),
          );
        };
    },
    2430: function (e, t, r) {
      'use strict';
      r.d(t, {
        Mz: function () {
          return c;
        },
        Ph: function () {
          return h;
        },
        RZ: function () {
          return d;
        },
      });
      var o = r(3552),
        n = r(3387),
        a = r(4910),
        i = r(3810);
      const s = (e) => Number(e.replace('px', '')),
        l = '98px',
        c = '80px',
        u = '980px',
        d = s(u) + s(i.T) + 24 + 'px',
        h = (0, n.Z)({
          root: { width: '100%' },
          main: { width: '100%', maxWidth: u, marginLeft: 'auto', marginRight: 'auto' },
          hero: { width: '100%', minHeight: 'calc(100vh - 98px)' },
          heroWrapper: { position: 'relative' },
          heroHeader: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            width: '100%',
            minHeight: c,
            transitionProperty: 'background-color',
            transitionDuration: o.T.durationFast,
            transitionTimingFunction: o.T.curveEasyEase,
          },
          heroHeaderScroll: {
            backgroundColor: 'var(--arbutus--color-overlay-background)',
            backdropFilter: 'blur(1rem)',
            boxShadow: o.T.shadow8,
          },
          heroHeaderContent: {
            maxWidth: d,
            marginLeft: 'auto',
            marginRight: 'auto',
            ['@media screen and (max-width: ' + d + ')']: {
              paddingRight: o.T.spacingHorizontalL,
              paddingLeft: o.T.spacingHorizontalL,
            },
          },
          boundaries: {
            ['@media screen and (max-width: ' + a.b.desktop + 'px)']: {
              paddingLeft: o.T.spacingHorizontalL,
            },
            ['@media screen and (max-width: ' + d + ')']: {
              paddingRight: o.T.spacingHorizontalL,
            },
          },
          grid: {
            display: 'grid',
            gridTemplateColumns: i.T + ' auto',
            columnGap: o.T.spacingHorizontalXXL,
            position: 'relative',
          },
          minHeight: { minHeight: 'calc(100vh - 98px)' },
          minHeightTablet: { minHeight: 'calc(100vh - (98px + ' + c + '))' },
          footer: { minHeight: l },
          header: { minHeight: c, paddingRight: o.T.spacingHorizontalL },
          aside: {
            paddingLeft: o.T.spacingHorizontalL,
            height: '100vh',
            overflowY: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            ['@media screen and (min-width: ' + a.b.desktop + 'px)']: {
              height: 'calc(100vh - 98px)',
            },
            '&::-webkit-scrollbar': { display: 'none' },
          },
          stickyAside: { position: 'sticky', top: '0' },
        });
    },
    9256: function (e, t, r) {
      'use strict';
      r.d(t, {
        x: function () {
          return B;
        },
      });
      var o = r(2784),
        n = r(7178);
      var a = r(2504),
        i = r(1954);
      var s = r(9087),
        l = r(3513);
      const c = 'fui-Text',
        u = (0, s.s)(
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
      var d = r(5785);
      const h = o.forwardRef((e, t) => {
        const r = ((e, t) => {
          const {
            wrap: r,
            truncate: o,
            block: a,
            italic: i,
            underline: s,
            strikethrough: l,
            size: c,
            font: u,
            weight: d,
            align: h,
          } = e;
          var f;
          const p = null !== (f = e.as) && void 0 !== f ? f : 'span';

          return {
            align: null != h ? h : 'start',
            block: null != a && a,
            font: null != u ? u : 'base',
            italic: null != i && i,
            size: null != c ? c : 300,
            strikethrough: null != l && l,
            truncate: null != o && o,
            underline: null != s && s,
            weight: null != d ? d : 'regular',
            wrap: null == r || r,
            components: { root: 'span' },
            root: (0, n.n)(p, { ref: t, ...e, as: p }),
          };
        })(e, t);

        return (
          ((e) => {
            const t = u();

            e.root.className = (0, l.z)(
              c,
              t.root,
              !1 === e.wrap && t.nowrap,
              e.truncate && t.truncate,
              e.block && t.block,
              e.italic && t.italic,
              e.underline && t.underline,
              e.strikethrough && t.strikethrough,
              e.underline && e.strikethrough && t.strikethroughUnderline,
              100 === e.size && t.base100,
              200 === e.size && t.base200,
              400 === e.size && t.base400,
              500 === e.size && t.base500,
              600 === e.size && t.base600,
              700 === e.size && t.hero700,
              800 === e.size && t.hero800,
              900 === e.size && t.hero900,
              1e3 === e.size && t.hero1000,
              'monospace' === e.font && t.monospace,
              'numeric' === e.font && t.numeric,
              'medium' === e.weight && t.weightMedium,
              'semibold' === e.weight && t.weightSemibold,
              'bold' === e.weight && t.weightBold,
              'center' === e.align && t.alignCenter,
              'end' === e.align && t.alignEnd,
              'justify' === e.align && t.alignJustify,
              e.root.className,
            );
          })(r),
          (0, d.oj)('useTextStyles_unstable')(r),
          ((e) => {
            const { slots: t, slotProps: r } = (0, i.D)(e);

            return (0, a.a)(t.root, r.root);
          })(r)
        );
      });

      h.displayName = 'Text';
      var f = r(3552),
        p = r(3387),
        g = r(928),
        m = r(6457);
      const v = {
          accent: f.T.colorBrandForeground1,
          action: f.T.colorBrandForeground2,
          primary: f.T.colorNeutralForeground1,
          secondary: f.T.colorNeutralForeground2,
          tertiary: f.T.colorNeutralForeground3,
          quaternary: f.T.colorNeutralForeground4,
          negative: f.T.colorPaletteDarkOrangeForeground1,
          positive: f.T.colorPaletteGreenForeground1,
          warning: f.T.colorPaletteMarigoldForeground1,
          danger: f.T.colorPaletteDarkOrangeForeground1,
          info: f.T.colorBrandForeground2,
          background: f.T.colorNeutralBackground1,
        },
        y = (0, m.f)(v, (e) => ({ color: e })),
        b = {
          jumbo: {
            fontFamily: f.T.fontFamilyBase,
            fontSize: f.T.fontSizeHero1000,
            lineHeight: f.T.lineHeightHero1000,
            fontWeight: f.T.fontWeightBold,
          },
          title: {
            fontFamily: f.T.fontFamilyBase,
            fontSize: f.T.fontSizeHero800,
            lineHeight: f.T.lineHeightHero800,
            fontWeight: f.T.fontWeightSemibold,
          },
          subtitle: {
            fontFamily: f.T.fontFamilyBase,
            fontSize: f.T.fontSizeHero700,
            lineHeight: f.T.lineHeightHero700,
            fontWeight: f.T.fontWeightSemibold,
          },
          headline: {
            fontFamily: f.T.fontFamilyBase,
            fontSize: f.T.fontSizeBase500,
            lineHeight: f.T.lineHeightBase500,
            fontWeight: f.T.fontWeightSemibold,
          },
          leading: {
            fontFamily: f.T.fontFamilyBase,
            fontSize: f.T.fontSizeBase500,
            lineHeight: f.T.lineHeightBase500,
            fontWeight: f.T.fontWeightRegular,
          },
          paragraph: {
            fontFamily: f.T.fontFamilyBase,
            fontSize: f.T.fontSizeBase300,
            lineHeight: f.T.lineHeightBase300,
            fontWeight: f.T.fontWeightRegular,
          },
          caption: {
            fontFamily: f.T.fontFamilyBase,
            fontSize: f.T.fontSizeBase300,
            lineHeight: f.T.lineHeightBase300,
            fontWeight: f.T.fontWeightSemibold,
          },
          description: {
            fontFamily: f.T.fontFamilyBase,
            fontSize: f.T.fontSizeBase200,
            lineHeight: f.T.lineHeightBase200,
            fontWeight: f.T.fontWeightRegular,
          },
        },
        k = (0, p.Z)({
          ...y,
          ...b,
          root: { ...g.q5.margin(0), ...g.q5.padding(0) },
          code: {
            display: 'inline-block',
            fontFamily: f.T.fontFamilyMonospace,
            fontSize: f.T.fontSizeBase300,
            lineHeight: f.T.lineHeightBase300,
            backgroundColor: f.T.colorNeutralBackground3,
            ...g.q5.borderRadius(f.T.borderRadiusSmall),
            paddingLeft: f.T.spacingHorizontalXS,
            paddingRight: f.T.spacingHorizontalXS,
          },
        }),
        B = (e) => {
          let {
            children: t,
            color: r = 'primary',
            variant: n,
            className: a,
            weight: i,
            size: s,
            font: c,
            ...u
          } = e;
          const d = k();
          let f = '';

          (i && s && c) || (f = n ? d[n] : d.paragraph);
          const p = (0, l.z)(d.root, d[r], f, a);

          return o.createElement(
            h,
            { weight: i, size: s, font: c, className: p, ...u },
            t,
          );
        };
    },
    3810: function (e, t, r) {
      'use strict';
      r.d(t, {
        T: function () {
          return a;
        },
        j: function () {
          return i;
        },
      });
      var o = r(3552),
        n = r(3387);
      const a = '324px',
        i = (0, n.Z)({
          root: {
            zIndex: 10,
            position: 'fixed',
            width: '324px',
            height: '100vh',
            borderRightColor: o.T.colorNeutralStroke1,
            borderRightWidth: '1px',
            borderRightStyle: 'solid',
            transform: 'translate3D(-325px, 0, 0)',
            opacity: 0,
            left: 0,
            top: 0,
            backgroundColor: o.T.colorNeutralBackground1,
            backdropFilter: 'blur(1rem)',
            '@media screen and (prefers-reduced-motion: no-preference)': {
              transitionProperty: 'all',
              transitionDuration: o.T.durationNormal,
              transitionTimingFunction: o.T.curveEasyEase,
            },
            '@media screen and (max-width: 324px)': { width: '100%' },
          },
          isOpen: {
            opacity: 1,
            backgroundColor: 'var(--arbutus--color-overlay-background)',
            transform: 'translate3d(0, 0, 0)',
          },
        });
    },
    9471: function (e, t, r) {
      'use strict';
      r.d(t, {
        z: function () {
          return B;
        },
      });
      var o = r(3387),
        n = r(3552);
      const a = {
          1: n.T.spacingHorizontalXXS,
          2: n.T.spacingHorizontalXS,
          3: n.T.spacingHorizontalSNudge,
          4: n.T.spacingHorizontalS,
          5: n.T.spacingHorizontalMNudge,
          6: n.T.spacingHorizontalM,
          7: n.T.spacingHorizontalL,
          8: n.T.spacingHorizontalXL,
          9: n.T.spacingHorizontalXXL,
          10: n.T.spacingHorizontalXXXL,
          11: '40px',
          12: '52px',
        },
        i = Object.entries(a),
        s = i.reduce((e, t) => {
          let [r, o] = t;

          return (
            (e['m' + r] = {
              marginTop: o,
              marginBottom: o,
              marginLeft: o,
              marginRight: o,
            }),
            e
          );
        }, {}),
        l = i.reduce((e, t) => {
          let [r, o] = t;

          return (e['my' + r] = { marginTop: o, marginBottom: o }), e;
        }, {}),
        c = i.reduce((e, t) => {
          let [r, o] = t;

          return (e['mx' + r] = { marginLeft: o, marginRight: o }), e;
        }, {}),
        u = i.reduce((e, t) => {
          let [r, o] = t;

          return (e['mt' + r] = { marginTop: o }), e;
        }, {}),
        d = i.reduce((e, t) => {
          let [r, o] = t;

          return (e['mb' + r] = { marginBottom: o }), e;
        }, {}),
        h = i.reduce((e, t) => {
          let [r, o] = t;

          return (e['ml' + r] = { marginLeft: o }), e;
        }, {}),
        f = i.reduce((e, t) => {
          let [r, o] = t;

          return (e['mr' + r] = { marginRight: o }), e;
        }, {}),
        p = i.reduce((e, t) => {
          let [r, o] = t;

          return (
            (e['p' + r] = {
              paddingTop: o,
              paddingBottom: o,
              paddingLeft: o,
              paddingRight: o,
            }),
            e
          );
        }, {}),
        g = i.reduce((e, t) => {
          let [r, o] = t;

          return (e['py' + r] = { paddingTop: o, paddingBottom: o }), e;
        }, {}),
        m = i.reduce((e, t) => {
          let [r, o] = t;

          return (e['px' + r] = { paddingLeft: o, paddingRight: o }), e;
        }, {}),
        v = i.reduce((e, t) => {
          let [r, o] = t;

          return (e['pt' + r] = { paddingTop: o }), e;
        }, {}),
        y = i.reduce((e, t) => {
          let [r, o] = t;

          return (e['pb' + r] = { paddingBottom: o }), e;
        }, {}),
        b = i.reduce((e, t) => {
          let [r, o] = t;

          return (e['pl' + r] = { paddingLeft: o }), e;
        }, {}),
        k = i.reduce((e, t) => {
          let [r, o] = t;

          return (e['pr' + r] = { paddingRight: o }), e;
        }, {}),
        B = (0, o.Z)({
          ...s,
          ...l,
          ...c,
          ...u,
          ...d,
          ...h,
          ...f,
          ...p,
          ...y,
          ...b,
          ...k,
          ...v,
          ...m,
          ...g,
        });
    },
    7225: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          onRouteUpdate: function () {
            return o;
          },
        });
      r(4792), r(5251);

      const o = function (e, t) {
        let { location: r } = e;
      };
    },
    5251: function (e, t, r) {
      'use strict';
      var o = r(4792);
    },
    603: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          wrapPageElement: function () {
            return Ie;
          },
          wrapRootElement: function () {
            return je;
          },
        });
      var o = r(2784),
        n = r(5376),
        a = r(6883),
        i = r(9525);

      function s(e, t) {
        const r = `${e} {${(0, i.U)(t)}}`;

        return (0, a.Ty)(r)[0];
      }

      function l(e, t = {}) {
        if ('string' == typeof e) {
          const r = (0, a.Ty)(e);

          for (const e of r) c(e, t);
        } else
          for (const r in e) {
            c(s(r, e[r]), t);
          }

        return t;
      }

      function c(e, t = {}) {
        (t.d = t.d || []), t.d.push(e);
      }
      var u = r(6103);

      function d(e) {
        const t = (function (e) {
          const t = {},
            r = Array.isArray(e) ? e : [e];

          return function (e) {
            const o = e.renderer.id;

            if (!t[o]) {
              for (const t of r) e.renderer.insertCSSRules(l(t));
              t[o] = !0;
            }
          };
        })(e);

        return function () {
          const e = (0, u.a)();

          return t({ renderer: e });
        };
      }
      const h = d({
          '@font-face': {
            fontFamily: 'Segoe UI',
            src: "local('Segoe UI Light'), url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/light/latest.woff2) format('woff2'),\n            url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/light/latest.woff) format('woff'),\n            url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/light/latest.ttf) format('truetype')",
            fontWeight: 100,
          },
        }),
        f = d({
          '@font-face': {
            fontFamily: 'Segoe UI',
            src: "local('Segoe UI Semilight'), url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semilight/latest.woff2) format('woff2'),\n            url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semilight/latest.woff) format('woff'),\n            url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semilight/latest.ttf) format('truetype')",
            fontWeight: 200,
          },
        }),
        p = d({
          '@font-face': {
            fontFamily: 'Segoe UI',
            src: "local('Segoe UI'), url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.woff2) format('woff2'),\n            url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.woff) format('woff'),\n            url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.ttf) format('truetype')",
            fontWeight: 400,
          },
        }),
        g = d({
          '@font-face': {
            fontFamily: 'Segoe UI',
            src: "local('Segoe UI Semibold'), url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semibold/latest.woff2) format('woff2'),\n            url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semibold/latest.woff) format('woff'),\n            url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semibold/latest.ttf) format('truetype')",
            fontWeight: 600,
          },
        }),
        m = d({
          '@font-face': {
            fontFamily: 'Segoe UI',
            src: "local('Segoe UI Bold'), url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.woff2) format('woff2'),\n            url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.woff) format('woff'),\n            url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.ttf) format('truetype')",
            fontWeight: 700,
          },
        });
      var v = r(3552);
      const y = d({
          '*': { boxSizing: 'border-box' },
          a: { textDecoration: 'none' },
          body: { backgroundColor: v.T.colorNeutralBackground1 },
        }),
        b = (e) => {
          let { children: t } = e;

          return h(), f(), p(), g(), m(), y(), o.createElement(n.f, null, t);
        };
      var k = r(4792),
        B = r(3513),
        P = r(9471),
        w = r(3387);
      const S = (0, w.Z)({ root: { backgroundColor: v.T.colorNeutralBackground6 } }),
        C = (e) => {
          let { className: t, children: r } = e;
          const n = S(),
            a = (0, P.z)();

          return o.createElement('footer', { className: (0, B.z)(n.root, a.p7, t) }, r);
        },
        x = (0, w.Z)({ root: { color: v.T.colorNeutralForeground1 } }),
        E = (e) => {
          let { className: t, children: r } = e;
          const n = x(),
            a = (0, P.z)();

          return o.createElement('header', { className: (0, B.z)(n.root, a.py5, t) }, r);
        };
      var T = r(4910);
      const N = (0, o.createContext)({ isOpen: !1, setIsOpen: (e) => {} }),
        F = N.Provider,
        A = N.Consumer;
      var L = r(3810);
      const R = (e) => {
        let { className: t, children: r, isOpen: n } = e;
        const a = (0, L.j)();

        return o.createElement(
          'aside',
          { className: (0, B.z)(a.root, n && a.isOpen, t) },
          r,
        );
      };
      var D = (e) => {
        const t = Object.keys(e).sort((t, r) => e[r] - e[t]);

        return t.map((r, o) => {
          let n = '';
          const a = e[r],
            i = t[o - 1],
            s = i ? e[i] : null;

          a >= 0 && (n = `(min-width: ${a}px)`),
            null !== s && (n && (n += ' and '), (n += `(max-width: ${s - 1}px)`));

          return { breakpoint: r, maxWidth: s ? s - 1 : null, minWidth: a, query: n };
        });
      };
      var H = 'undefined' == typeof window ? o.useEffect : o.useLayoutEffect;
      const M = { breakpoint: void 0, minWidth: void 0, maxWidth: void 0 };
      var O = (e, t, r = !0) => {
          const n = (0, o.useMemo)(() => D(e), [e]),
            [a, i] = (0, o.useState)(() => {
              for (const { query: e, ...o } of n)
                if ('undefined' == typeof window || (t && r)) {
                  if (o.breakpoint === t) return o;
                } else {
                  if (window.matchMedia(e).matches) return o;
                }

              return M;
            }),
            s = (0, o.useCallback)(({ matches: e }, t) => {
              e && i(t);
            }, []);

          return (
            H(() => {
              const e = n.map(({ query: e, ...t }) => {
                const r = window.matchMedia(e);

                s(r, t);
                const o = (e) => {
                    s(e, t);
                  },
                  n = 'addEventListener' in r && 'removeEventListener' in r;

                return (
                  n ? r.addEventListener('change', o) : r.addListener(o),
                  () => {
                    n ? r.removeEventListener('change', o) : r.removeListener(o);
                  }
                );
              });

              return () => e.forEach((e) => e());
            }, [n, s]),
            (0, o.useDebugValue)(a, (e) =>
              'string' == typeof e.breakpoint
                ? `${e.breakpoint} (${e.minWidth} ≤ x${
                    e.maxWidth ? ` < ${e.maxWidth + 1}` : ''
                  })`
                : '',
            ),
            a
          );
        },
        _ = r(8872),
        j = r(9256);
      var I = r(928);
      const V = (0, w.Z)({
          root: {
            width: '100%',
            display: 'inline-flex',
            alignItems: 'center',
            minHeight: '60px',
            columnGap: v.T.spacingHorizontalM,
          },
          image: { width: 'auto', height: v.T.spacingHorizontalXXXL },
          logo: {
            display: 'inline-flex',
            alignItems: 'center',
            height: '100%',
            columnGap: v.T.spacingHorizontalM,
          },
          interactive: {
            backgroundColor: 'transparent',
            borderLeftWidth: 'none',
            borderRightWidth: 'none',
            borderTopWidth: 'none',
            borderBottomWidth: 'none',
            borderLeftColor: 'none',
            borderRightColor: 'none',
            borderTopColor: 'none',
            borderBottomColor: 'none',
            borderLeftStyle: 'none',
            borderRightStyle: 'none',
            borderTopStyle: 'none',
            borderBottomStyle: 'none',
            cursor: 'pointer',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              top: '-1px',
              left: '-1px',
              height: 'calc(100% + 2px)',
              width: 'calc(100% + 2px)',
              boxShadow: '0 0 4px 1px transparent',
              transitionProperty: 'box-shadow',
              transitionDuration: v.T.durationNormal,
              transitionTimingFunction: v.T.curveEasyEase,
              ...I.q5.borderRadius(v.T.borderRadiusMedium),
            },
            '&:focus': {
              outlineColor: 'initial',
              outlineStyle: 'none',
              outlineWidth: 'initial',
              position: 'relative',
            },
            '&:focus-visible': {
              outlineStyle: 'none',
              '&::after': { boxShadow: '0 0 4px 2px ' + v.T.colorBrandForeground1 },
            },
          },
        }),
        z = (e) => {
          let { onClick: t, children: r } = e;
          const n = V();

          return t
            ? o.createElement(
                'button',
                { className: (0, B.z)(n.logo, n.interactive), onClick: t },
                r,
              )
            : o.createElement(o.Fragment, null, r);
        },
        $ = (e) => {
          let {
            className: t,
            onClick: r,
            closeTrayLabel: n = 'Close navigation',
            isTabletLayout: a,
            logoMarkAlt: i,
            logoMarkSrc: s,
            logoAs: l,
            logoProps: c,
            logoText: u,
            openTrayLabel: d = 'Open navigation',
          } = e;
          const { isOpen: h, setIsOpen: f } = (0, o.useContext)(N),
            p = V();

          return o.createElement(
            'div',
            { className: (0, B.z)(p.root, t) },
            a &&
              o.createElement(_.h, {
                iconName: h ? 'slide-in' : 'slide-out',
                label: h ? n : d,
                onClick: h ? () => f(!1) : () => f(!0),
                'aria-hidden': !0,
              }),
            o.createElement(
              z,
              { onClick: r },
              l && o.createElement(l, { ...c }),
              s && o.createElement('img', { src: s, alt: i, className: p.image }),
              u && o.createElement(j.x, { as: 'h1', variant: 'subtitle' }, u),
            ),
          );
        };
      var W = r(2430);
      const U = (e) => {
          let {
            children: t,
            className: r,
            closeTrayLabel: n,
            footerArea: a,
            headerArea: i,
            isBlankMode: s,
            isHeroMode: l,
            logoMarkAlt: c,
            logoAs: u,
            logoProps: d,
            logoMarkSrc: h,
            logoText: f,
            navigationArea: p,
            onLogoClick: g,
            openTrayLabel: m,
          } = e;
          const v = (0, W.Ph)(),
            y = (0, P.z)(),
            b = (() => {
              const { 0: e, 1: t } = (0, o.useState)(!1);

              return { isOpen: e, setIsOpen: t };
            })(),
            { breakpoint: k } = O(T.b),
            w = 'tablet' === k || 'mobile' === k,
            { 0: S, 1: x } = (0, o.useState)(!0);

          return (
            (0, o.useEffect)(() => {
              if (l && window) {
                const e = () => {
                  x(!(window.scrollY >= parseInt(W.Mz)));
                };

                return (
                  window.addEventListener('scroll', e),
                  () => window.removeEventListener('scroll', e)
                );
              }
            }, [l]),
            s
              ? o.createElement(o.Fragment, null, t)
              : l
              ? o.createElement(
                  'div',
                  { className: v.heroWrapper },
                  o.createElement(
                    E,
                    { className: (0, B.z)(v.heroHeader, !S && v.heroHeaderScroll) },
                    o.createElement('div', { className: v.heroHeaderContent }, i),
                  ),
                  o.createElement('main', { className: v.hero }, t),
                  o.createElement(C, { className: v.footer }, a),
                )
              : o.createElement(
                  F,
                  { value: b },
                  o.createElement(
                    'div',
                    { className: (0, B.z)(v.root, r) },
                    w &&
                      o.createElement(
                        'div',
                        { className: (0, B.z)(v.header, v.grid, y.px7) },
                        o.createElement($, {
                          className: y.my5,
                          closeTrayLabel: n,
                          isTabletLayout: w,
                          logoMarkAlt: c,
                          logoMarkSrc: h,
                          logoAs: u,
                          logoProps: d,
                          logoText: f,
                          onClick: g,
                          openTrayLabel: m,
                        }),
                        o.createElement(E, null, i),
                      ),
                    o.createElement(
                      'div',
                      {
                        className: w ? v.minHeightTablet : (0, B.z)(v.grid, v.minHeight),
                      },
                      w
                        ? o.createElement(A, null, (e) => {
                            let { isOpen: t } = e;

                            return o.createElement(
                              R,
                              { isOpen: t, className: (0, B.z)(v.aside, y.px7, y.py5) },
                              o.createElement($, {
                                closeTrayLabel: n,
                                isTabletLayout: w,
                                logoMarkAlt: c,
                                logoMarkSrc: h,
                                logoAs: u,
                                logoProps: d,
                                logoText: f,
                                onClick: g,
                                openTrayLabel: m,
                              }),
                              p,
                            );
                          })
                        : o.createElement(
                            'aside',
                            { className: (0, B.z)(v.aside, v.stickyAside) },
                            o.createElement($, {
                              className: y.my5,
                              isTabletLayout: w,
                              logoMarkAlt: c,
                              logoMarkSrc: h,
                              logoAs: u,
                              logoProps: d,
                              logoText: f,
                              onClick: g,
                            }),
                            p,
                          ),
                      o.createElement(
                        'div',
                        null,
                        !w && o.createElement(E, { className: v.header }, i),
                        o.createElement(
                          'main',
                          { className: (0, B.z)(v.main, v.boundaries) },
                          t,
                        ),
                      ),
                    ),
                    o.createElement(C, { className: v.footer }, a),
                  ),
                )
          );
        },
        G = (e) => {
          let { className: t, children: r } = e;

          return o.createElement('div', { className: t }, r);
        };
      var Z = r(7892);
      const X = (0, w.Z)({
          root: {
            ...I.q5.padding(0, v.T.spacingHorizontalM, 0, v.T.spacingHorizontalXXXL),
            alignItems: 'center',
            backgroundColor: 'transparent',
            color: v.T.colorNeutralForeground1,
            cursor: 'pointer',
            display: 'grid',
            fontSize: v.T.fontSizeBase300,
            fontWeight: v.T.fontWeightRegular,
            height: v.T.spacingHorizontalXXXL,
            lineHeight: v.T.lineHeightBase300,
            marginBottom: v.T.spacingHorizontalS,
            marginTop: v.T.spacingHorizontalS,
            paddingLeft: v.T.spacingHorizontalXXL,
            textAlign: 'left',
            textDecorationLine: 'none',
            transitionDuration: v.T.durationNormal,
            transitionProperty: 'all',
            transitionTimingFunction: v.T.curveEasyEase,
            width: '100%',
            ...I.q5.borderRadius('0.5rem'),
            ...I.q5.borderStyle('none'),
            ...I.q5.borderColor('transparent'),
            ...I.q5.borderStyle('none'),
            ...I.q5.borderColor('transparent'),
            ':hover': {
              backgroundColor: v.T.colorBrandBackground2,
              color: v.T.colorBrandForeground2,
              ':focus': { outlineColor: v.T.colorBrandForeground2 },
            },
          },
          active: {
            backgroundColor: v.T.colorBrandBackground2,
            '& a': { color: v.T.colorBrandForeground2 },
          },
        }),
        q = (e) => {
          let { as: t, children: r, elementProps: n, isActive: a, className: i } = e;
          const s = X();

          return o.createElement(
            t,
            { className: (0, B.z)(s.root, a && s.active, i), ...n },
            r,
          );
        };
      var K = r(8578),
        J = r(5380);
      const Q = (0, w.Z)({
        button: {
          ...I.q5.padding(0, v.T.spacingHorizontalM, 0, v.T.spacingHorizontalS),
          marginBottom: v.T.spacingHorizontalS,
          color: v.T.colorNeutralForeground1,
          fontWeight: v.T.fontWeightSemibold,
          fontSize: v.T.fontSizeBase300,
          lineHeight: v.T.lineHeightBase300,
          textAlign: 'left',
          display: 'grid',
          gridTemplateColumns: v.T.spacingHorizontalL + ' auto',
          columnGap: v.T.spacingHorizontalS,
          alignItems: 'center',
          width: '100%',
          height: v.T.spacingHorizontalXXXL,
          transitionProperty: 'all',
          transitionDuration: v.T.durationNormal,
          transitionTimingFunction: v.T.curveEasyEase,
          backgroundColor: 'transparent',
          cursor: 'pointer',
          ...I.q5.borderStyle('none'),
          ...I.q5.borderColor('transparent'),
          ...I.q5.borderRadius('0.5rem'),
          ':hover': {
            color: v.T.colorBrandForeground2,
            backgroundColor: v.T.colorBrandBackground2,
            '& svg': { color: v.T.colorBrandForeground2 },
            ':focus': { outlineColor: v.T.colorBrandForeground2 },
          },
          '&[data-state="open"]': { '& svg': { transform: 'rotate(90deg)' } },
        },
        subList: { paddingLeft: v.T.spacingHorizontalXXL },
        toggle: {
          transitionProperty: 'transform',
          transitionDuration: v.T.durationNormal,
          transitionTimingFunction: v.T.curveEasyEase,
        },
        toggleExpanded: { transform: 'rotate(90deg)' },
        toggleIdle: { transform: 'rotate(0deg)' },
      });
      var Y = r(1885),
        ee = r(3517);
      const te = 0.15,
        re = (e) => {
          let { shouldReduceMotion: t } = e;

          return {
            expanded: {
              height: 'auto',
              transition: { ease: 'easeOut', duration: t ? 0 : 0.2 },
            },
            collapsed: {
              height: 0,
              transition: {
                delay: t ? 0 : 0.075,
                ease: 'easeOut',
                duration: t ? 0 : 0.2,
              },
            },
          };
        },
        oe = (e) => {
          let {
            children: t,
            initial: r,
            a11yLabelId: n,
            a11yContentId: a,
            className: i,
          } = e;

          return o.createElement(
            Y.E.section,
            {
              initial: r,
              animate: 'expanded',
              exit: 'collapsed',
              variants: re({ shouldReduceMotion: (0, ee.J)() }),
              className: i,
              id: a,
              'aria-labelledby': n,
              role: 'region',
            },
            t,
          );
        },
        ne = (e) => {
          let { shouldReduceMotion: t } = e;

          return {
            expanded: {
              opacity: 1,
              top: '0',
              transition: { delay: t ? 0 : 0.125, ease: 'easeOut', duration: t ? 0 : te },
            },
            collapsed: {
              opacity: 0,
              top: '-4px',
              transition: { ease: 'easeOut', duration: t ? 0 : te },
            },
          };
        },
        ae = (e) => {
          let { children: t, initial: r } = e;

          return o.createElement(
            Y.E.div,
            {
              style: { position: 'relative' },
              initial: r,
              animate: 'expanded',
              exit: 'collapsed',
              variants: ne({ shouldReduceMotion: (0, ee.J)() }),
            },
            t,
          );
        },
        ie = (e) => {
          let { className: t, children: r, title: n, initial: a = 'collapsed' } = e;
          const { 0: i, 1: s } = (0, o.useState)(!1),
            l = (0, o.useId)(),
            c = (0, o.useId)(),
            u = Q();

          return o.createElement(
            'div',
            { className: t },
            o.createElement(
              'button',
              {
                className: u.button,
                id: l,
                'aria-controls': c,
                'aria-expanded': i,
                onClick: () => s(!i),
              },
              o.createElement(K.J, {
                iconName: 'chevron-right',
                color: 'tertiary',
                className: (0, B.z)(u.toggle, i ? u.toggleExpanded : u.toggleIdle),
              }),
              n,
            ),
            o.createElement(
              J.M,
              { initial: !1 },
              i &&
                o.createElement(
                  oe,
                  { initial: a, a11yContentId: c, a11yLabelId: l },
                  o.createElement(
                    ae,
                    { initial: a },
                    o.createElement('div', { className: u.subList }, r),
                  ),
                ),
            ),
          );
        },
        se = (0, o.createContext)({ linkAs: 'a' }),
        le = se.Provider,
        ce = (se.Consumer, (e) => 'id' in e),
        ue = (e) => {
          let { item: t } = e;
          const {
              linkAs: r,
              activeItemId: n,
              onNavigationItemClick: a,
            } = (0, o.useContext)(se),
            i = (0, P.z)(),
            s = ce(t) && a ? { onClick: () => (null == a ? void 0 : a(t)) } : {};
          var l;

          return ce(t)
            ? o.createElement(
                o.Fragment,
                null,
                o.createElement(
                  q,
                  {
                    isActive: t.id === n,
                    as: r,
                    elementProps: {
                      ...(null !== (l = t.linkProps) && void 0 !== l ? l : {}),
                      ...s,
                    },
                  },
                  t.title,
                ),
                t.hasDivider && o.createElement(Z.i, { className: i.my4 }),
              )
            : ((e) => 'items' in e)(t)
            ? o.createElement(
                o.Fragment,
                null,
                o.createElement(
                  ie,
                  { title: t.title },
                  Object.entries(t.items).map((e) => {
                    let [t, r] = e;

                    return o.createElement(ue, { key: t, item: r });
                  }),
                ),
                t.hasDivider && o.createElement(Z.i, { className: i.my4 }),
              )
            : null;
        },
        de = (e) => {
          let { items: t, ...r } = e;

          return o.createElement(
            le,
            { value: r },
            Object.entries(t).map((e) => {
              let [t, r] = e;

              return o.createElement(ue, { key: t, item: r });
            }),
          );
        };
      var he = r(5619),
        fe = r(4616);
      const pe = (e, t) => (e.title < t.title ? -1 : e.title > t.title ? 1 : 0),
        ge = (e, t) =>
          e._orderInNav && t._orderInNav
            ? e._orderInNav < t._orderInNav
              ? -1
              : e._orderInNav > t._orderInNav
              ? 1
              : 0
            : 0,
        me = (e, t) => {
          var r;

          return null !==
            (r = e.reduce((e, r) => {
              let { title: o, _path: n } = r;

              return (
                (e[n] = {
                  title: o,
                  id: '/' + t + '/' + n + '/',
                  linkProps: { to: '/' + t + '/' + n },
                }),
                e
              );
            }, {})) && void 0 !== r
            ? r
            : {};
        },
        ve = (e) => {
          const t = e.filter((e) => e._includeInNav),
            r = t.filter((e) => 'number' == typeof e._orderInNav).sort(ge),
            o = t.filter((e) => 'number' != typeof e._orderInNav).sort(pe);

          return [].concat((0, fe.Z)(r), (0, fe.Z)(o));
        },
        ye = () => {
          const { pathname: e } = (0, he.useLocation)(),
            t = (0, k.useStaticQuery)('2645023429'),
            { components: r, guidance: n } = ((e) => ({
              guidance: e.allGuidanceJson
                ? me(ve(e.allGuidanceJson.nodes), 'guidance')
                : {},
              components: e.allComponentsJson
                ? me(ve(e.allComponentsJson.nodes), 'components')
                : {},
            }))(t),
            a = {
              gettingStarted: {
                title: 'Getting Started',
                id: '/getting-started',
                linkProps: { to: '/getting-started' },
                hasDivider: !0,
              },
              guidance: { title: 'Guidance', items: n },
              components: { title: 'Components', hasDivider: !0, items: r },
            };

          return o.createElement(
            G,
            null,
            o.createElement(de, { items: a, linkAs: k.Link, activeItemId: e }),
          );
        };
      var be = r(7788);
      const ke = v.T.spacingVerticalXXL,
        Be = v.T.spacingVerticalL,
        Pe = '-2px',
        we = (0, w.Z)({
          root: {
            position: 'relative',
            backgroundColor: v.T.colorNeutralBackground2,
            height: ke,
            width: 'calc(' + ke + ' * 2 + ' + Pe + ')',
            paddingTop: 'calc((' + ke + ' - ' + Be + ') / 2)',
            paddingBottom: 'calc((' + ke + ' - ' + Be + ') / 2)',
            paddingLeft: 'calc((' + ke + ' - ' + Be + ') / 2)',
            paddingRight: 'calc((' + ke + ' - ' + Be + ') / 2)',
            outlineStyle: 'none',
            cursor: 'pointer',
            transitionProperty: 'all',
            transitionDuration: v.T.durationNormal,
            transitionTimingFunction: v.T.curveEasyEase,
            borderTopStyle: 'none',
            borderBottomStyle: 'none',
            borderLeftStyle: 'none',
            borderRightStyle: 'none',
            boxShadow: v.T.shadow2,
            ...I.q5.borderRadius('calc(' + ke + ' / 2)'),
          },
          toggle: {
            transitionProperty: 'all',
            transitionDuration: v.T.durationNormal,
            transitionTimingFunction: v.T.curveEasyEase,
            position: 'absolute',
            top: 'calc((' + ke + ' - ' + Be + ') / 2)',
            height: Be,
            width: Be,
            backgroundColor: v.T.colorNeutralForeground2,
            boxShadow: v.T.shadow4,
            ...I.q5.borderRadius(Be),
          },
          toggleOff: { transform: 'translateX(0)' },
          toggleOn: { transform: 'translateX(calc(' + ke + ' + ' + Pe + '))' },
          iconSun: {
            position: 'absolute',
            transitionProperty: 'all',
            transitionDuration: v.T.durationNormal,
            transitionTimingFunction: v.T.curveEasyEase,
            top: 'calc((' + ke + ' - ' + Be + ') / 2)',
            left: 'calc((' + ke + ' - ' + Be + ') / 2)',
            color: v.T.colorPaletteMarigoldBackground3,
            opacity: 1,
          },
          iconMoon: {
            position: 'absolute',
            transitionProperty: 'all',
            transitionDuration: v.T.durationNormal,
            transitionTimingFunction: v.T.curveEasyEase,
            top: 'calc((' + ke + ' - ' + Be + ') / 2)',
            right: 'calc((' + ke + ' - ' + Be + ') / 2)',
            color: v.T.colorPaletteMarigoldBackground3,
            opacity: 1,
          },
          iconOff: { opacity: 0 },
        }),
        Se = (e) => {
          let { className: t, label: r = 'Dark mode', isDark: n, onToggle: a } = e;
          const i = we();

          return o.createElement(
            'button',
            {
              'aria-pressed': n,
              className: (0, B.z)(i.root, t),
              onClick: () => (null == a ? void 0 : a()),
            },
            o.createElement(be.T, null, r),
            o.createElement('div', {
              'aria-hidden': !0,
              className: (0, B.z)(i.toggle, n ? i.toggleOn : i.toggleOff),
            }),
            o.createElement(K.J, {
              iconName: 'sun',
              className: (0, B.z)(i.iconSun, !n && i.iconOff),
            }),
            o.createElement(K.J, {
              iconName: 'moon',
              className: (0, B.z)(i.iconMoon, n && i.iconOff),
            }),
          );
        };
      var Ce = r(285),
        xe = r(7211);
      const Ee = (0, w.Z)({
          root: {
            color: 'inherit',
            textDecorationLine: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            '& svg:first-child': { marginTop: 0, marginRight: v.T.spacingHorizontalM },
          },
        }),
        Te = (e) => {
          let { children: t, href: r, className: n } = e;

          return o.createElement(
            'a',
            {
              className: n,
              href: r,
              target: '_blank',
              referrerPolicy: 'no-referrer',
              rel: 'noopener noreferrer',
            },
            t,
          );
        },
        Ne = (e) => {
          let {
            children: t,
            to: r,
            isExternal: n,
            isUnderlined: a,
            variant: i,
            withIcon: s,
          } = e;
          const l = Ee(),
            c = n ? Te : k.Link,
            u = n ? { href: r, className: l.root } : { to: r, className: l.root };

          return o.createElement(
            xe.r,
            {
              as: c,
              elementProps: u,
              isUnderlined: a,
              variant: i,
              withIcon: null != s ? s : n,
            },
            t,
          );
        },
        Fe = (0, w.Z)({
          root: {
            display: 'flex',
            columnGap: v.T.spacingHorizontalXL,
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingTop: v.T.spacingVerticalM,
            paddingBottom: v.T.spacingVerticalM,
          },
        }),
        Ae = () => {
          const e = Fe(),
            t = (0, k.useStaticQuery)('728947269'),
            { links: r } = ((e) => {
              var t;

              return {
                links: null !== (t = e.headerJson.links) && void 0 !== t ? t : [],
              };
            })(t),
            { themeKey: n, setTheme: a } = (0, Ce.F)(),
            i = 'dark' === n;

          return o.createElement(
            'nav',
            { className: e.root },
            r.map((e) => {
              let { to: t, text: r, isExternal: n } = e;

              return o.createElement(
                Ne,
                { key: t, variant: 'caption', to: t, isExternal: n },
                r,
              );
            }),
            o.createElement(Se, {
              isDark: i,
              onToggle: () => {
                null == a || a(i ? 'light' : 'dark');
              },
            }),
          );
        },
        Le = (0, w.Z)({
          root: { display: 'flex', justifyContent: 'flex-end', height: '100%' },
          links: {
            display: 'flex',
            justifyContent: 'flex-end',
            columnGap: v.T.spacingHorizontalM,
          },
        }),
        Re = () => {
          const e = Le(),
            t = (0, P.z)(),
            r = (0, k.useStaticQuery)('3551971565'),
            { primaryLinks: n, secondaryLinks: a } = ((e) => {
              var t, r, o, n;

              return {
                primaryLinks:
                  null !==
                    (t =
                      null == e || null === (r = e.footerJson) || void 0 === r
                        ? void 0
                        : r.primaryLinks) && void 0 !== t
                    ? t
                    : [],
                secondaryLinks:
                  null !==
                    (o =
                      null == e || null === (n = e.footerJson) || void 0 === n
                        ? void 0
                        : n.secondaryLinks) && void 0 !== o
                    ? o
                    : [],
              };
            })(r);

          return o.createElement(
            'div',
            null,
            o.createElement(
              'div',
              { className: e.root },
              o.createElement(
                'div',
                { className: e.links },
                n.map((e, t) => {
                  let { to: r, text: n, isExternal: a } = e;

                  return o.createElement(
                    Ne,
                    { key: '' + r + t, variant: 'caption', to: r, isExternal: a },
                    n,
                  );
                }),
              ),
            ),
            o.createElement(Z.i, { className: t.my6 }),
            o.createElement(
              'div',
              { className: e.root },
              o.createElement(
                'div',
                { className: e.links },
                a.map((e, t) => {
                  let { to: r, text: n, isExternal: a } = e;

                  return o.createElement(
                    Ne,
                    { key: '' + r + t, variant: 'secondary', to: r, isExternal: a },
                    n,
                  );
                }),
                o.createElement(
                  j.x,
                  { color: 'secondary' },
                  '© Microsoft ',
                  new Date().getFullYear(),
                ),
              ),
            ),
          );
        },
        De = (0, w.Z)({ svg: { height: '34px', width: 'auto' } }),
        He = () =>
          o.createElement(
            'svg',
            {
              width: '210',
              height: '210',
              viewBox: '0 0 210 210',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              'aria-labelledby': 'mads-logo-title',
              className: De().svg,
            },
            o.createElement('title', { id: 'mads-logo-title' }, 'Fluent'),
            o.createElement('path', {
              d: 'M101.002 17.3064L57.0022 42.691C54.5258 44.1198 53 46.7615 53 49.6205V160.379C53 163.239 54.5258 165.88 57.0022 167.309L99.0011 191.539C101.668 193.078 105 191.153 105 188.074V135L150.994 108.465C153.663 106.925 153.663 103.075 150.994 101.535L105 75L150.994 48.4647C153.663 46.9254 153.663 43.0746 150.994 41.5353L108.998 17.3064C106.524 15.8791 103.476 15.8791 101.002 17.3064Z',
              fill: 'var(--colorNeutralForeground1)',
            }),
          ),
        Me = (e) => {
          let { children: t, location: r } = e;
          const n = r.pathname === (0, k.withPrefix)('/'),
            a = r.pathname.includes('/preview/'),
            i = r.pathname.includes('/sandbox/');

          return o.createElement(
            U,
            {
              footerArea: o.createElement(Re, null),
              headerArea: o.createElement(Ae, null),
              navigationArea: o.createElement(ye, null),
              logoAs: He,
              logoText: 'Documentation',
              closeTrayLabel: 'Close navigation',
              openTrayLabel: 'Open navigation',
              isHeroMode: n,
              isBlankMode: a || i,
              onLogoClick: () => (0, k.navigate)('/'),
            },
            t,
          );
        };
      const Oe = (0, r(6328).u)(),
        _e = (e) => {
          let { children: t } = e;

          return o.createElement(u.m, { renderer: Oe }, t);
        },
        je = (e) => {
          let { element: t } = e;

          return o.createElement(_e, null, o.createElement(b, null, t));
        },
        Ie = (e) => {
          let { element: t, props: r } = e;

          return o.createElement(Me, r, t);
        };
    },
    4910: function (e, t, r) {
      'use strict';
      r.d(t, {
        b: function () {
          return o;
        },
      });
      const o = { mobile: 0, tablet: 768, desktop: 1140, ultraWide: 1440 };
    },
    3914: function (e, t, r) {
      'use strict';
      r.d(t, {
        N: function () {
          return i;
        },
      });
      var o = r(3737),
        n = r(2784),
        a = r(4432);
      const i = (0, n.createContext)({ theme: (0, o.f)(a.C), themeKey: 'light' });
    },
    5376: function (e, t, r) {
      'use strict';
      r.d(t, {
        f: function () {
          return me;
        },
      });
      var o = r(2784),
        n = r.t(o, 2),
        a = r(2504),
        i = r(1954),
        s = r(9836),
        l = r(2861),
        c = r(2781);
      const u = o.createContext(void 0),
        d = u.Provider,
        h = o.createContext(void 0),
        f = h.Provider;
      var p = r(5785);
      const g = o.createContext(void 0),
        m = g.Provider;
      var v = r(9194);

      function y(e, t) {
        var r;
        const o = e;
        var n;

        return Boolean(
          (null == o || null === (r = o.ownerDocument) || void 0 === r
            ? void 0
            : r.defaultView) &&
            o instanceof
              o.ownerDocument.defaultView[
                null !== (n = null == t ? void 0 : t.constructorName) && void 0 !== n
                  ? n
                  : 'HTMLElement'
              ],
        );
      }
      const b = 'undefined' != typeof WeakRef;

      class k {
        constructor(e) {
          b && 'object' == typeof e
            ? (this._weakRef = new WeakRef(e))
            : (this._instance = e);
        }
        deref() {
          var e, t, r;
          let o;

          return (
            this._weakRef
              ? ((o = null === (e = this._weakRef) || void 0 === e ? void 0 : e.deref()),
                o || delete this._weakRef)
              : ((o = this._instance),
                (null ===
                  (r = null === (t = o) || void 0 === t ? void 0 : t.isDisposed) ||
                void 0 === r
                  ? void 0
                  : r.call(t)) && delete this._instance),
            o
          );
        }
      }
      const B = 'keyborg:focusin';
      let P = !1;
      let w = 0;

      class S {
        constructor() {
          (this.__keyborgCoreRefs = {}), (this._isNavigatingWithKeyboard = !1);
        }
        add(e) {
          const t = e.id;

          t in this.__keyborgCoreRefs || (this.__keyborgCoreRefs[t] = new k(e));
        }
        remove(e) {
          delete this.__keyborgCoreRefs[e],
            0 === Object.keys(this.__keyborgCoreRefs).length &&
              (this._isNavigatingWithKeyboard = !1);
        }
        setVal(e) {
          if (this._isNavigatingWithKeyboard !== e) {
            this._isNavigatingWithKeyboard = e;

            for (const t of Object.keys(this.__keyborgCoreRefs)) {
              const r = this.__keyborgCoreRefs[t].deref();

              r ? r.update(e) : this.remove(t);
            }
          }
        }
        getVal() {
          return this._isNavigatingWithKeyboard;
        }
      }
      const C = new S();

      class x {
        constructor(e, t) {
          (this._isMouseUsed = !1),
            (this._onFocusIn = (e) => {
              if (this._isMouseUsed) return void (this._isMouseUsed = !1);
              if (C.getVal()) return;
              const t = e.details;

              t.relatedTarget &&
                (t.isFocusedProgrammatically ||
                  void 0 === t.isFocusedProgrammatically ||
                  C.setVal(!0));
            }),
            (this._onMouseDown = (e) => {
              0 === e.buttons ||
                (0 === e.clientX &&
                  0 === e.clientY &&
                  0 === e.screenX &&
                  0 === e.screenY) ||
                ((this._isMouseUsed = !0), C.setVal(!1));
            }),
            (this._onKeyDown = (e) => {
              var t;
              const r = C.getVal(),
                o = e.keyCode,
                n = this._triggerKeys;

              r || (n && !n.has(o))
                ? r &&
                  (null === (t = this._dismissKeys) || void 0 === t
                    ? void 0
                    : t.has(o)) &&
                  this._scheduleDismiss()
                : C.setVal(!0);
            }),
            (this.id = 'c' + ++w),
            (this._win = e);
          const r = e.document;

          if (t) {
            const e = t.triggerKeys,
              r = t.dismissKeys;

            (null == e ? void 0 : e.length) && (this._triggerKeys = new Set(e)),
              (null == r ? void 0 : r.length) && (this._dismissKeys = new Set(r));
          }
          r.addEventListener(B, this._onFocusIn, !0),
            r.addEventListener('mousedown', this._onMouseDown, !0),
            e.addEventListener('keydown', this._onKeyDown, !0),
            (function (e) {
              const t = e;

              P ||
                (P = (function (e) {
                  const t = e.HTMLElement,
                    r = t.prototype.focus;
                  let o = !1;

                  return (
                    (t.prototype.focus = function () {
                      o = !0;
                    }),
                    e.document.createElement('button').focus(),
                    (t.prototype.focus = r),
                    o
                  );
                })(t));
              const r = t.HTMLElement.prototype.focus;

              if (r.__keyborgNativeFocus) return;
              t.HTMLElement.prototype.focus = n;
              const o = (t.__keyborgData = {
                focusInHandler: (e) => {
                  var t;
                  const r = e.target;

                  if (!r) return;
                  const n = document.createEvent('HTMLEvents');

                  n.initEvent(B, !0, !0);
                  const a = { relatedTarget: e.relatedTarget || void 0 };

                  (P || o.lastFocusedProgrammatically) &&
                    ((a.isFocusedProgrammatically =
                      r ===
                      (null === (t = o.lastFocusedProgrammatically) || void 0 === t
                        ? void 0
                        : t.deref())),
                    (o.lastFocusedProgrammatically = void 0)),
                    (n.details = a),
                    r.dispatchEvent(n);
                },
              });

              function n() {
                const e = t.__keyborgData;

                return (
                  e && (e.lastFocusedProgrammatically = new k(this)),
                  r.apply(this, arguments)
                );
              }
              t.document.addEventListener('focusin', t.__keyborgData.focusInHandler, !0),
                (n.__keyborgNativeFocus = r);
            })(e),
            C.add(this);
        }
        dispose() {
          const e = this._win;

          if (e) {
            this._dismissTimer &&
              (e.clearTimeout(this._dismissTimer), (this._dismissTimer = void 0)),
              (function (e) {
                const t = e,
                  r = t.HTMLElement.prototype,
                  o = r.focus.__keyborgNativeFocus,
                  n = t.__keyborgData;

                n &&
                  (t.document.removeEventListener('focusin', n.focusInHandler, !0),
                  delete t.__keyborgData),
                  o && (r.focus = o);
              })(e);
            const t = e.document;

            t.removeEventListener(B, this._onFocusIn, !0),
              t.removeEventListener('mousedown', this._onMouseDown, !0),
              e.removeEventListener('keydown', this._onKeyDown, !0),
              delete this._win,
              C.remove(this.id);
          }
        }
        isDisposed() {
          return !!this._win;
        }
        update(e) {
          var t, r;
          const o =
            null ===
              (r = null === (t = this._win) || void 0 === t ? void 0 : t.__keyborg) ||
            void 0 === r
              ? void 0
              : r.refs;

          if (o) for (const n of Object.keys(o)) E.update(o[n], e);
        }
        _scheduleDismiss() {
          const e = this._win;

          if (e) {
            this._dismissTimer &&
              (e.clearTimeout(this._dismissTimer), (this._dismissTimer = void 0));
            const t = e.document.activeElement;

            this._dismissTimer = e.setTimeout(() => {
              this._dismissTimer = void 0;
              const r = e.document.activeElement;

              t && r && t === r && C.setVal(!1);
            }, 500);
          }
        }
      }
      class E {
        constructor(e, t) {
          (this._cb = []), (this._id = 'k' + ++w), (this._win = e);
          const r = e.__keyborg;

          r
            ? ((this._core = r.core), (r.refs[this._id] = this))
            : ((this._core = new x(e, t)),
              (e.__keyborg = { core: this._core, refs: { [this._id]: this } }));
        }
        static create(e, t) {
          return new E(e, t);
        }
        static dispose(e) {
          e.dispose();
        }
        static update(e, t) {
          e._cb.forEach((e) => e(t));
        }
        dispose() {
          var e;
          const t = null === (e = this._win) || void 0 === e ? void 0 : e.__keyborg;

          (null == t ? void 0 : t.refs[this._id]) &&
            (delete t.refs[this._id],
            0 === Object.keys(t.refs).length &&
              (t.core.dispose(), delete this._win.__keyborg)),
            (this._cb = []),
            delete this._core,
            delete this._win;
        }
        isNavigatingWithKeyboard() {
          return C.getVal();
        }
        subscribe(e) {
          this._cb.push(e);
        }
        unsubscribe(e) {
          const t = this._cb.indexOf(e);

          t >= 0 && this._cb.splice(t, 1);
        }
        setVal(e) {
          C.setVal(e);
        }
      }
      const T = 'data-fui-focus-visible';

      function N(e, t) {
        if (A(e)) return () => {};
        const r = { current: void 0 },
          o = ((n = t), E.create(n, a));
        var n, a;

        o.subscribe((e) => {
          !e && r.current && (F(r.current), (r.current = void 0));
        });

        const i = (e) => {
            r.current && (F(r.current), (r.current = void 0)),
              o.isNavigatingWithKeyboard() &&
                y(e.target) &&
                e.target &&
                ((r.current = e.target), r.current.setAttribute(T, ''));
          },
          s = (t) => {
            (!t.relatedTarget || (y(t.relatedTarget) && !e.contains(t.relatedTarget))) &&
              r.current &&
              (F(r.current), (r.current = void 0));
          };

        return (
          e.addEventListener(B, i),
          e.addEventListener('focusout', s),
          (e.focusVisible = !0),
          () => {
            var t;

            e.removeEventListener(B, i),
              e.removeEventListener('focusout', s),
              delete e.focusVisible,
              (t = o),
              E.dispose(t);
          }
        );
      }

      function F(e) {
        e.removeAttribute(T);
      }

      function A(e) {
        return !!e && (!!e.focusVisible || A(null == e ? void 0 : e.parentElement));
      }

      function L(e = {}) {
        const t = (0, c.O)(),
          r = o.useRef(null);
        var n;
        const a = null !== (n = e.targetDocument) && void 0 !== n ? n : t.targetDocument;

        return (
          o.useEffect(() => {
            if ((null == a ? void 0 : a.defaultView) && r.current)
              return N(r.current, a.defaultView);
          }, [r, a]),
          r
        );
      }
      var R = r(7178);

      function D(...e) {
        const t = o.useCallback(
          (r) => {
            t.current = r;
            for (const t of e) 'function' == typeof t ? t(r) : t && (t.current = r);
          },
          [...e],
        );

        return t;
      }
      var H = r(4400),
        M = r(9481),
        O = r(3362),
        _ = r(3513),
        j = r(6103);
      const I = 'fui-FluentProvider',
        V = (0, O.s)(
          {
            root: {
              sj55zd: 'f19n0e5',
              De3pzq: 'fxugw4r',
              fsow6f: ['f1o700av', 'fes3tcz'],
              Bahqtrf: 'fk6fouc',
              Be2twd7: 'fkhj508',
              Bhrd7zp: 'figsok6',
              Bg96gwp: 'f1i3iumi',
            },
          },
          {
            d: [
              '.f19n0e5{color:var(--colorNeutralForeground1);}',
              '.fxugw4r{background-color:var(--colorNeutralBackground1);}',
              '.f1o700av{text-align:left;}',
              '.fes3tcz{text-align:right;}',
              '.fk6fouc{font-family:var(--fontFamilyBase);}',
              '.fkhj508{font-size:var(--fontSizeBase300);}',
              '.figsok6{font-weight:var(--fontWeightRegular);}',
              '.f1i3iumi{line-height:var(--lineHeightBase300);}',
            ],
          },
        ),
        z = n.useInsertionEffect ? n.useInsertionEffect : H.L,
        $ = (e) => {
          const { targetDocument: t, theme: r, rendererAttributes: n } = e,
            a = o.useRef(),
            i = (0, M.Me)(I),
            s = n,
            l = o.useMemo(
              () =>
                r ? Object.keys(r).reduce((e, t) => (e += `--${t}: ${r[t]}; `), '') : '',
              [r],
            ),
            c = `.${i} { ${l} }`;

          return (
            (function (e, t) {
              o.useState(() => {
                if (!e) return;
                const r = e.getElementById(t);

                r && e.head.append(r);
              });
            })(t, i),
            z(() => {
              const e = null == t ? void 0 : t.getElementById(i);

              return (
                e
                  ? (a.current = e)
                  : ((a.current = ((e, t) => {
                      if (!e) return;
                      const r = e.createElement('style');

                      return (
                        Object.keys(t).forEach((e) => {
                          r.setAttribute(e, t[e]);
                        }),
                        e.head.appendChild(r),
                        r
                      );
                    })(t, { ...s, id: i })),
                    a.current &&
                      ((e, t) => {
                        const r = e.sheet;

                        r &&
                          (r.cssRules.length > 0 && r.deleteRule(0), r.insertRule(t, 0));
                      })(a.current, c)),
                () => {
                  var e;

                  null === (e = a.current) || void 0 === e || e.remove();
                }
              );
            }, [i, t, c, s]),
            { styleTagId: i, rule: c }
          );
        };
      const W = (e, t) => {
        const r = (0, c.O)(),
          n = o.useContext(u),
          a = (0, v.QG)(),
          i = o.useContext(p.Qb) || {},
          {
            applyStylesToPortals: s = !0,
            customStyleHooks_unstable: l,
            dir: d = r.dir,
            targetDocument: h = r.targetDocument,
            theme: f,
            overrides_unstable: g = {},
          } = e,
          m = U(n, f),
          y = U(a, g),
          b = U(i, l);

        o.useEffect(() => {
          0;
        }, []);
        const k = (0, j.a)();
        var B;
        const { styleTagId: P, rule: w } = $({
          theme: m,
          targetDocument: h,
          rendererAttributes:
            null !== (B = k.styleElementAttributes) && void 0 !== B ? B : {},
        });

        return {
          applyStylesToPortals: s,
          customStyleHooks_unstable: b,
          dir: d,
          targetDocument: h,
          theme: m,
          overrides_unstable: y,
          themeClassName: P,
          components: { root: 'div' },
          root: (0, R.n)('div', { ...e, dir: d, ref: D(t, L({ targetDocument: h })) }),
          serverStyleProps: {
            cssRule: w,
            attributes: { ...k.styleElementAttributes, id: P },
          },
        };
      };

      function U(e, t) {
        return e && t ? { ...e, ...t } : e || t;
      }
      const G = o.forwardRef((e, t) => {
        const r = W(e, t);

        ((e) => {
          const t = (0, j.a)(),
            r = V({ dir: e.dir, renderer: t });

          e.root.className = (0, _.z)(I, e.themeClassName, r.root, e.root.className);
        })(r);
        const n = (function (e) {
          const {
              applyStylesToPortals: t,
              customStyleHooks_unstable: r,
              dir: n,
              root: a,
              targetDocument: i,
              theme: s,
              themeClassName: l,
              overrides_unstable: c,
            } = e,
            u = o.useMemo(() => ({ dir: n, targetDocument: i }), [n, i]),
            [d] = o.useState(() => ({}));

          return {
            customStyleHooks_unstable: r,
            overrides_unstable: c,
            provider: u,
            textDirection: n,
            tooltip: d,
            theme: s,
            themeClassName: t ? a.className : l,
          };
        })(r);

        return ((e, t) => {
          const { slots: r, slotProps: o } = (0, i.D)(e);

          return (0, a.a)(
            c.z,
            { value: t.provider },
            (0, a.a)(
              d,
              { value: t.theme },
              (0, a.a)(
                f,
                { value: t.themeClassName },
                (0, a.a)(
                  p.UF,
                  { value: t.customStyleHooks_unstable },
                  (0, a.a)(
                    m,
                    { value: t.tooltip },
                    (0, a.a)(
                      l.n,
                      { dir: t.textDirection },
                      (0, a.a)(
                        v.sD,
                        { value: t.overrides_unstable },
                        (0, a.a)(
                          r.root,
                          o.root,
                          (0, s.N)()
                            ? null
                            : (0, a.a)('style', {
                                dangerouslySetInnerHTML: {
                                  __html: e.serverStyleProps.cssRule,
                                },
                                ...e.serverStyleProps.attributes,
                              }),
                          o.root.children,
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          );
        })(r, n);
      });

      G.displayName = 'FluentProvider';
      var Z = r(3737),
        X = r(8397),
        q = r(9336);
      const K = q.PN.reduce((e, t) => {
        const r = t.slice(0, 1).toUpperCase() + t.slice(1),
          o = {
            [`colorPalette${r}Background1`]: X.b[t].shade40,
            [`colorPalette${r}Background2`]: X.b[t].shade30,
            [`colorPalette${r}Background3`]: X.b[t].primary,
            [`colorPalette${r}Foreground1`]: X.b[t].tint30,
            [`colorPalette${r}Foreground2`]: X.b[t].tint40,
            [`colorPalette${r}Foreground3`]: X.b[t].tint20,
            [`colorPalette${r}BorderActive`]: X.b[t].tint30,
            [`colorPalette${r}Border1`]: X.b[t].primary,
            [`colorPalette${r}Border2`]: X.b[t].tint20,
          };

        return Object.assign(e, o);
      }, {});

      (K.colorPaletteRedForeground3 = X.b.red.tint30),
        (K.colorPaletteRedBorder2 = X.b.red.tint30),
        (K.colorPaletteGreenForeground3 = X.b.green.tint40),
        (K.colorPaletteGreenBorder2 = X.b.green.tint40),
        (K.colorPaletteDarkOrangeForeground3 = X.b.darkOrange.tint30),
        (K.colorPaletteDarkOrangeBorder2 = X.b.darkOrange.tint30),
        (K.colorPaletteRedForegroundInverted = X.b.red.primary),
        (K.colorPaletteGreenForegroundInverted = X.b.green.primary),
        (K.colorPaletteYellowForegroundInverted = X.b.yellow.shade30);
      const J = q.X.reduce((e, t) => {
        const r = t.slice(0, 1).toUpperCase() + t.slice(1),
          o = {
            [`colorPalette${r}Background2`]: X.C[t].shade30,
            [`colorPalette${r}Foreground2`]: X.C[t].tint40,
            [`colorPalette${r}BorderActive`]: X.C[t].tint30,
          };

        return Object.assign(e, o);
      }, {});

      (J.colorPaletteDarkRedBackground2 = X.C.darkRed.shade20),
        (J.colorPalettePlumBackground2 = X.C.plum.shade20);
      const Q = { ...K, ...J };
      var Y = r(4234);
      var ee = r(4035),
        te = r(1131),
        re = r(3292),
        oe = r(3622),
        ne = r(263),
        ae = r(4096),
        ie = r(1597);
      const se = (e) => {
        const t = ((e) => ({
          colorNeutralForeground1: Y.ix,
          colorNeutralForeground1Hover: Y.ix,
          colorNeutralForeground1Pressed: Y.ix,
          colorNeutralForeground1Selected: Y.ix,
          colorNeutralForeground2: Y.BA[84],
          colorNeutralForeground2Hover: Y.ix,
          colorNeutralForeground2Pressed: Y.ix,
          colorNeutralForeground2Selected: Y.ix,
          colorNeutralForeground2BrandHover: e[100],
          colorNeutralForeground2BrandPressed: e[90],
          colorNeutralForeground2BrandSelected: e[100],
          colorNeutralForeground3: Y.BA[68],
          colorNeutralForeground3Hover: Y.BA[84],
          colorNeutralForeground3Pressed: Y.BA[84],
          colorNeutralForeground3Selected: Y.BA[84],
          colorNeutralForeground3BrandHover: e[100],
          colorNeutralForeground3BrandPressed: e[90],
          colorNeutralForeground3BrandSelected: e[100],
          colorNeutralForeground4: Y.BA[60],
          colorNeutralForegroundDisabled: Y.BA[36],
          colorNeutralForegroundInvertedDisabled: Y.jZ[40],
          colorBrandForegroundLink: e[100],
          colorBrandForegroundLinkHover: e[110],
          colorBrandForegroundLinkPressed: e[90],
          colorBrandForegroundLinkSelected: e[100],
          colorNeutralForeground2Link: Y.BA[84],
          colorNeutralForeground2LinkHover: Y.ix,
          colorNeutralForeground2LinkPressed: Y.ix,
          colorNeutralForeground2LinkSelected: Y.ix,
          colorCompoundBrandForeground1: e[100],
          colorCompoundBrandForeground1Hover: e[110],
          colorCompoundBrandForeground1Pressed: e[90],
          colorBrandForeground1: e[100],
          colorBrandForeground2: e[110],
          colorNeutralForeground1Static: Y.BA[14],
          colorNeutralForegroundStaticInverted: Y.ix,
          colorNeutralForegroundInverted: Y.BA[14],
          colorNeutralForegroundInvertedHover: Y.BA[14],
          colorNeutralForegroundInvertedPressed: Y.BA[14],
          colorNeutralForegroundInvertedSelected: Y.BA[14],
          colorNeutralForegroundInverted2: Y.BA[14],
          colorNeutralForegroundOnBrand: Y.ix,
          colorNeutralForegroundInvertedLink: Y.ix,
          colorNeutralForegroundInvertedLinkHover: Y.ix,
          colorNeutralForegroundInvertedLinkPressed: Y.ix,
          colorNeutralForegroundInvertedLinkSelected: Y.ix,
          colorBrandForegroundInverted: e[80],
          colorBrandForegroundInvertedHover: e[70],
          colorBrandForegroundInvertedPressed: e[60],
          colorBrandForegroundOnLight: e[80],
          colorBrandForegroundOnLightHover: e[70],
          colorBrandForegroundOnLightPressed: e[50],
          colorBrandForegroundOnLightSelected: e[60],
          colorNeutralBackground1: Y.BA[16],
          colorNeutralBackground1Hover: Y.BA[24],
          colorNeutralBackground1Pressed: Y.BA[12],
          colorNeutralBackground1Selected: Y.BA[22],
          colorNeutralBackground2: Y.BA[12],
          colorNeutralBackground2Hover: Y.BA[20],
          colorNeutralBackground2Pressed: Y.BA[8],
          colorNeutralBackground2Selected: Y.BA[18],
          colorNeutralBackground3: Y.BA[8],
          colorNeutralBackground3Hover: Y.BA[16],
          colorNeutralBackground3Pressed: Y.BA[4],
          colorNeutralBackground3Selected: Y.BA[14],
          colorNeutralBackground4: Y.BA[4],
          colorNeutralBackground4Hover: Y.BA[12],
          colorNeutralBackground4Pressed: Y.Sn,
          colorNeutralBackground4Selected: Y.BA[10],
          colorNeutralBackground5: Y.Sn,
          colorNeutralBackground5Hover: Y.BA[8],
          colorNeutralBackground5Pressed: Y.BA[2],
          colorNeutralBackground5Selected: Y.BA[6],
          colorNeutralBackground6: Y.BA[20],
          colorNeutralBackgroundInverted: Y.ix,
          colorNeutralBackgroundStatic: Y.BA[24],
          colorNeutralBackgroundAlpha: Y.d1[50],
          colorNeutralBackgroundAlpha2: Y.es[70],
          colorSubtleBackground: 'transparent',
          colorSubtleBackgroundHover: Y.BA[22],
          colorSubtleBackgroundPressed: Y.BA[18],
          colorSubtleBackgroundSelected: Y.BA[20],
          colorSubtleBackgroundLightAlphaHover: Y.hu[80],
          colorSubtleBackgroundLightAlphaPressed: Y.hu[50],
          colorSubtleBackgroundLightAlphaSelected: 'transparent',
          colorSubtleBackgroundInverted: 'transparent',
          colorSubtleBackgroundInvertedHover: Y.Hf[10],
          colorSubtleBackgroundInvertedPressed: Y.Hf[30],
          colorSubtleBackgroundInvertedSelected: Y.Hf[20],
          colorTransparentBackground: 'transparent',
          colorTransparentBackgroundHover: 'transparent',
          colorTransparentBackgroundPressed: 'transparent',
          colorTransparentBackgroundSelected: 'transparent',
          colorNeutralBackgroundDisabled: Y.BA[8],
          colorNeutralBackgroundInvertedDisabled: Y.jZ[10],
          colorNeutralStencil1: Y.BA[34],
          colorNeutralStencil2: Y.BA[20],
          colorNeutralStencil1Alpha: Y.jZ[10],
          colorNeutralStencil2Alpha: Y.jZ[5],
          colorBackgroundOverlay: Y.Hf[50],
          colorScrollbarOverlay: Y.jZ[60],
          colorBrandBackground: e[70],
          colorBrandBackgroundHover: e[80],
          colorBrandBackgroundPressed: e[40],
          colorBrandBackgroundSelected: e[60],
          colorCompoundBrandBackground: e[100],
          colorCompoundBrandBackgroundHover: e[110],
          colorCompoundBrandBackgroundPressed: e[90],
          colorBrandBackgroundStatic: e[80],
          colorBrandBackground2: e[40],
          colorBrandBackgroundInverted: Y.ix,
          colorBrandBackgroundInvertedHover: e[160],
          colorBrandBackgroundInvertedPressed: e[140],
          colorBrandBackgroundInvertedSelected: e[150],
          colorNeutralStrokeAccessible: Y.BA[68],
          colorNeutralStrokeAccessibleHover: Y.BA[74],
          colorNeutralStrokeAccessiblePressed: Y.BA[70],
          colorNeutralStrokeAccessibleSelected: e[100],
          colorNeutralStroke1: Y.BA[40],
          colorNeutralStroke1Hover: Y.BA[46],
          colorNeutralStroke1Pressed: Y.BA[42],
          colorNeutralStroke1Selected: Y.BA[44],
          colorNeutralStroke2: Y.BA[32],
          colorNeutralStroke3: Y.BA[24],
          colorNeutralStrokeOnBrand: Y.BA[16],
          colorNeutralStrokeOnBrand2: Y.ix,
          colorNeutralStrokeOnBrand2Hover: Y.ix,
          colorNeutralStrokeOnBrand2Pressed: Y.ix,
          colorNeutralStrokeOnBrand2Selected: Y.ix,
          colorBrandStroke1: e[100],
          colorBrandStroke2: e[50],
          colorCompoundBrandStroke: e[100],
          colorCompoundBrandStrokeHover: e[110],
          colorCompoundBrandStrokePressed: e[90],
          colorNeutralStrokeDisabled: Y.BA[26],
          colorNeutralStrokeInvertedDisabled: Y.jZ[40],
          colorTransparentStroke: 'transparent',
          colorTransparentStrokeInteractive: 'transparent',
          colorTransparentStrokeDisabled: 'transparent',
          colorNeutralStrokeAlpha: Y.jZ[10],
          colorStrokeFocus1: Y.Sn,
          colorStrokeFocus2: Y.ix,
          colorNeutralShadowAmbient: 'rgba(0,0,0,0.24)',
          colorNeutralShadowKey: 'rgba(0,0,0,0.28)',
          colorNeutralShadowAmbientLighter: 'rgba(0,0,0,0.12)',
          colorNeutralShadowKeyLighter: 'rgba(0,0,0,0.14)',
          colorNeutralShadowAmbientDarker: 'rgba(0,0,0,0.40)',
          colorNeutralShadowKeyDarker: 'rgba(0,0,0,0.48)',
          colorBrandShadowAmbient: 'rgba(0,0,0,0.30)',
          colorBrandShadowKey: 'rgba(0,0,0,0.25)',
        }))(e);

        return {
          ...ee.E,
          ...te.CH,
          ...te.tO,
          ...te.Vl,
          ...te.vC,
          ...re.G,
          ...ie.l,
          ...ie.e,
          ...ne.l,
          ...ae.y,
          ...t,
          ...Q,
          ...(0, oe.T)(t.colorNeutralShadowAmbient, t.colorNeutralShadowKey),
          ...(0, oe.T)(t.colorBrandShadowAmbient, t.colorBrandShadowKey, 'Brand'),
        };
      };
      var le = r(4616);
      const ce = (e, t) => {
        let r = [];
        const o = function (e, n) {
          var a, i;

          (void 0 === n && (n = t ? '--' + t + '-' : '-'),
          'string' == typeof e && (r = [].concat((0, le.Z)(r), [[n, e]])),
          e && 'object' == typeof (a = e) && null != a && 0 !== Object.keys(a).length) &&
            (i = e) &&
            'object' == typeof i &&
            !Array.isArray(i) &&
            Object.entries(e).forEach((e) => {
              let [t, r] = e;

              return o(r, n + '-' + t);
            });
        };

        return o(e), r;
      };
      var ue = r(3914),
        de = r(4432);
      const he = {
        micro: '400px',
        xxs: '470px',
        xs: '640px',
        small: '768px',
        medium: '1024px',
        large: '1140px',
      };
      var fe = r(4910);
      const pe = {
          color: { overlay: { background: 'rgb(0 0 0 / 75%)' } },
          shape: { 'border-radius': '1rem' },
          breakpoints: he,
          layout: fe.b,
        },
        ge = {
          light: {
            color: { overlay: { background: 'rgb(255 255 255 / 75%)' } },
            shape: { 'border-radius': '1rem' },
            breakpoints: he,
            layout: fe.b,
          },
          dark: pe,
        },
        me = (e) => {
          let {
            children: t,
            brandVariants: r = de.C,
            defaultTheme: n = 'light',
            themes: a,
            currentThemeKey: i,
            setThemeKey: s,
          } = e;
          const l = (0, o.useMemo)(() => ({ light: (0, Z.f)(r), dark: se(r) }), [r]),
            c = null != a ? a : l,
            u = (() => {
              const { 0: e, 1: t } = (0, o.useState)(),
                r = (0, o.useCallback)((e) => {
                  t(e.matches ? 'dark' : 'light');
                }, []),
                n = (0, o.useCallback)((e) => {
                  t(e.matches ? 'light' : 'dark');
                }, []);

              return (
                (0, o.useEffect)(() => {
                  if (void 0 !== window) {
                    const e = window.matchMedia('(prefers-color-scheme: dark)'),
                      o = window.matchMedia('(prefers-color-scheme: light)');

                    e.matches && t('dark'),
                      o.matches && t('light'),
                      e.addEventListener('change', r),
                      o.addEventListener('change', n);
                  }

                  return function () {
                    void 0 !== window &&
                      (window.removeEventListener('change', r),
                      window.removeEventListener('change', n));
                  };
                }, [r, n]),
                e
              );
            })(),
            d = null != u ? u : n,
            h = void 0 !== i,
            { 0: f, 1: p } = (0, o.useState)(d);

          (0, o.useEffect)(() => {
            h || p(d);
          }, [u, d, h]);
          const g = h ? i : f,
            m = h ? s : p,
            v = c[g];

          return (
            ((e) => {
              let { theme: t, prefix: r } = e;

              (0, o.useEffect)(() => {
                const e = ce(t, r);

                return (
                  e.forEach((e) => {
                    var t, r, o;
                    let [n, a] = e;

                    return null === (t = document) ||
                      void 0 === t ||
                      null === (r = t.documentElement) ||
                      void 0 === r ||
                      null === (o = r.style) ||
                      void 0 === o
                      ? void 0
                      : o.setProperty(n, a);
                  }),
                  () => {
                    e.forEach((e) => {
                      var t, r, o;
                      let [n] = e;

                      return null === (t = document) ||
                        void 0 === t ||
                        null === (r = t.documentElement) ||
                        void 0 === r ||
                        null === (o = r.style) ||
                        void 0 === o
                        ? void 0
                        : o.removeProperty(n);
                    });
                  }
                );
              }, [t, r]);
            })({ theme: ge[g], prefix: 'arbutus' }),
            o.createElement(
              ue.N.Provider,
              { value: { setTheme: m, themeKey: g, theme: v } },
              o.createElement(G, { theme: v }, t),
            )
          );
        };
    },
    4432: function (e, t, r) {
      'use strict';
      r.d(t, {
        C: function () {
          return o;
        },
      });
      const o = {
        10: '#151515',
        20: '#221F1E',
        30: '#2E2627',
        40: '#3D2D2E',
        50: '#4F3437',
        60: '#613A3D',
        70: '#913039',
        80: '#BD3844',
        90: '#C6404B',
        100: '#E05E69',
        110: '#E6717B',
        120: '#EB838C',
        130: '#F19FA6',
        140: '#F7B7BC',
        150: '#FACFD3',
        160: '#FCEBEC',
      };
    },
    285: function (e, t, r) {
      'use strict';
      r.d(t, {
        F: function () {
          return a;
        },
      });
      var o = r(2784),
        n = r(3914);
      const a = () => {
        const { theme: e, themeKey: t, setTheme: r } = (0, o.useContext)(n.N);

        return { theme: e, themeKey: t, setTheme: r };
      };
    },
    6457: function (e, t, r) {
      'use strict';

      function o(e, t) {
        return Object.entries(e).reduce((e, r) => {
          let [o, n] = r;

          return (e[o] = t(n)), e;
        }, {});
      }
      r.d(t, {
        f: function () {
          return o;
        },
      });
    },
    6849: function (e, t, r) {
      t.components = {
        'component---src-pages-404-tsx': () => r.e(218).then(r.bind(r, 3503)),
        'component---src-pages-basic-json-path-tsx': () =>
          Promise.all([r.e(609), r.e(66), r.e(560), r.e(62), r.e(690)]).then(
            r.bind(r, 8818),
          ),
        'component---src-pages-components-components-json-path-tsx': () =>
          Promise.all([r.e(609), r.e(66), r.e(560), r.e(62), r.e(727)]).then(
            r.bind(r, 3317),
          ),
        'component---src-pages-guidance-guidance-json-path-tsx': () =>
          Promise.all([r.e(609), r.e(66), r.e(560), r.e(62), r.e(136)]).then(
            r.bind(r, 178),
          ),
        'component---src-pages-index-tsx': () => r.e(691).then(r.bind(r, 4522)),
        'component---src-templates-preview-page-tsx': () =>
          r.e(325).then(r.bind(r, 4371)),
      };
    },
    5969: function (e, t, r) {
      e.exports = [
        {
          plugin: r(7225),
          options: {
            plugins: [],
            icon: 'src/assets/favicon.png',
            legacy: !0,
            theme_color_in_head: !0,
            cache_busting_mode: 'query',
            crossOrigin: 'anonymous',
            include_favicon: !0,
            cacheDigest: 'e37e9add36e850f94a0c6bc1b60d9241',
          },
        },
        { plugin: r(603), options: { plugins: [] } },
        { plugin: r(1915), options: { plugins: [] } },
      ];
    },
    1852: function (e, t, r) {
      const o = r(5969),
        { getResourceURLsForPathname: n, loadPage: a, loadPageSync: i } = r(8175).jN;

      (t.h = function (e, t, r, s) {
        void 0 === t && (t = {});
        let l = o.map((r) => {
          if (!r.plugin[e]) return;
          (t.getResourceURLsForPathname = n), (t.loadPage = a), (t.loadPageSync = i);
          const o = r.plugin[e](t, r.options);

          return o && s && (t = s({ args: t, result: o, plugin: r })), o;
        });

        return (l = l.filter((e) => void 0 !== e)), l.length > 0 ? l : r ? [r] : [];
      }),
        (t.I = (e, t, r) =>
          o.reduce(
            (r, o) => (o.plugin[e] ? r.then(() => o.plugin[e](t, o.options)) : r),
            Promise.resolve(),
          ));
    },
    3112: function (e, t) {
      t.M = () => '';
    },
    6249: function (e, t, r) {
      'use strict';
      r.d(t, {
        Z: function () {
          return o;
        },
      });
      var o = (function (e) {
        return (
          (e = e || Object.create(null)),
          {
            on: function (t, r) {
              (e[t] || (e[t] = [])).push(r);
            },
            off: function (t, r) {
              e[t] && e[t].splice(e[t].indexOf(r) >>> 0, 1);
            },
            emit: function (t, r) {
              (e[t] || []).slice().map(function (e) {
                e(r);
              }),
                (e['*'] || []).slice().map(function (e) {
                  e(t, r);
                });
            },
          }
        );
      })();
    },
    9529: function (e, t, r) {
      'use strict';
      r.d(t, {
        UD: function () {
          return h;
        },
        Cj: function () {
          return p;
        },
        GA: function () {
          return f;
        },
        DS: function () {
          return d;
        },
      });
      var o = r(5619),
        n = r(3834),
        a = (e) => {
          if (void 0 === e) return e;
          let [t, r = ''] = e.split('?');

          return (
            r && (r = '?' + r),
            '/' === t
              ? '/' + r
              : '/' === t.charAt(t.length - 1)
              ? t.slice(0, -1) + r
              : t + r
          );
        },
        i = r(3182);
      const s = new Map();
      let l = [];
      const c = (e) => {
        let t = e;

        if (-1 !== e.indexOf('?')) {
          const [r, o] = e.split('?');

          t = r + '?' + encodeURIComponent(o);
        }
        const r = decodeURIComponent(t);

        return (0, n.Z)(r, decodeURIComponent('')).split('#')[0];
      };

      function u(e) {
        return e.startsWith('/') || e.startsWith('https://') || e.startsWith('http://')
          ? e
          : new URL(
              e,
              window.location.href + (window.location.href.endsWith('/') ? '' : '/'),
            ).pathname;
      }

      const d = (e) => {
          l = e;
        },
        h = (e) => {
          const t = g(e),
            r = l.map((e) => {
              let { path: t, matchPath: r } = e;

              return { path: r, originalPath: t };
            }),
            n = (0, o.pick)(r, t);

          return n ? a(n.route.originalPath) : null;
        },
        f = (e) => {
          const t = g(e),
            r = l.map((e) => {
              let { path: t, matchPath: r } = e;

              return { path: r, originalPath: t };
            }),
            n = (0, o.pick)(r, t);

          return n ? n.params : {};
        },
        p = (e) => {
          const t = c(u(e));

          if (s.has(t)) return s.get(t);
          const r = (0, i.J)(e);

          if (r) return p(r.toPath);
          let o = h(t);

          return o || (o = g(e)), s.set(t, o), o;
        },
        g = (e) => {
          let t = c(u(e));

          return '/index.html' === t && (t = '/'), (t = a(t)), t;
        };
    },
    4792: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          Link: function () {
            return s.rU;
          },
          PageRenderer: function () {
            return a();
          },
          Script: function () {
            return w.Script;
          },
          ScriptStrategy: function () {
            return w.ScriptStrategy;
          },
          Slice: function () {
            return k;
          },
          StaticQuery: function () {
            return l.i1;
          },
          StaticQueryContext: function () {
            return l.B9;
          },
          collectedScriptsByPage: function () {
            return w.collectedScriptsByPage;
          },
          graphql: function () {
            return C;
          },
          navigate: function () {
            return s.c4;
          },
          parsePath: function () {
            return s.cP;
          },
          prefetchPathname: function () {
            return S;
          },
          scriptCache: function () {
            return w.scriptCache;
          },
          scriptCallbackCache: function () {
            return w.scriptCallbackCache;
          },
          useScrollRestoration: function () {
            return i.p2;
          },
          useStaticQuery: function () {
            return l.K2;
          },
          withAssetPrefix: function () {
            return s.mc;
          },
          withPrefix: function () {
            return s.dq;
          },
        });
      var o = r(8175),
        n = r(9758),
        a = r.n(n),
        i = r(2802),
        s = r(2467),
        l = r(5483);
      var c = r(1665);

      function u(e) {
        return (
          (u = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          u(e)
        );
      }
      var d = r(8960);

      function h(e, t, r) {
        return (
          (h = (function () {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;

            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })()
            ? Reflect.construct.bind()
            : function (e, t, r) {
                var o = [null];

                o.push.apply(o, t);
                var n = new (Function.bind.apply(e, o))();

                return r && (0, d.Z)(n, r.prototype), n;
              }),
          h.apply(null, arguments)
        );
      }

      function f(e) {
        var t = 'function' == typeof Map ? new Map() : void 0;

        return (
          (f = function (e) {
            if (
              null === e ||
              ((r = e), -1 === Function.toString.call(r).indexOf('[native code]'))
            )
              return e;
            var r;

            if ('function' != typeof e)
              throw new TypeError('Super expression must either be null or a function');

            if (void 0 !== t) {
              if (t.has(e)) return t.get(e);
              t.set(e, o);
            }

            function o() {
              return h(e, arguments, u(this).constructor);
            }

            return (
              (o.prototype = Object.create(e.prototype, {
                constructor: { value: o, enumerable: !1, writable: !0, configurable: !0 },
              })),
              (0, d.Z)(o, e)
            );
          }),
          f(e)
        );
      }
      var p = r(2784),
        g = r(3112),
        m = r(3204);
      const v = (e) => {
          let { sliceId: t, children: r } = e;
          const o = [
            p.createElement('slice-start', { id: t + '-1' }),
            p.createElement('slice-end', { id: t + '-1' }),
          ];

          return (
            r &&
              (o.push(r),
              o.push(
                p.createElement('slice-start', { id: t + '-2' }),
                p.createElement('slice-end', { id: t + '-2' }),
              )),
            o
          );
        },
        y = (e) => {
          let { sliceName: t, allowEmpty: r, children: o, ...n } = e;
          const a = (0, p.useContext)(m.u0),
            i = (0, p.useContext)(m.Db),
            s = a[t];

          if (!s) {
            if (r) return null;
            throw new Error('Slice "' + s + '" for "' + t + '" slot not found');
          }
          const l = ((e, t) => (Object.keys(t).length ? e + '-' + (0, g.M)(t) : e))(s, n);
          let c = i[l];

          return (
            c
              ? o && (c.hasChildren = !0)
              : (i[l] = c = { props: n, sliceName: s, hasChildren: !!o }),
            p.createElement(v, { sliceId: l }, o)
          );
        },
        b = (e) => {
          let { sliceName: t, allowEmpty: r, children: o, ...n } = e;
          const a = (0, p.useContext)(m.u0),
            i = (0, p.useContext)(m.m3),
            s = a[t],
            l = i.get(s);

          if (!l) {
            if (r) return null;
            throw new Error('Slice "' + s + '" for "' + t + '" slot not found');
          }

          return p.createElement(
            l.component,
            Object.assign({ sliceContext: l.sliceContext, data: l.data }, n),
            o,
          );
        };

      function k(e) {
        {
          const t = { ...e, sliceName: e.alias };

          delete t.alias, delete t.__renderedByLocation;
          const r = (0, p.useContext)(m.Bs),
            o = P(e);

          if (Object.keys(o).length)
            throw new B(
              'browser' === r.renderEnvironment,
              t.sliceName,
              o,
              e.__renderedByLocation,
            );
          if ('server' === r.renderEnvironment) return p.createElement(y, t);
          if ('browser' === r.renderEnvironment) return p.createElement(b, t);
          if ('engines' === r.renderEnvironment || 'dev-ssr' === r.renderEnvironment)
            return p.createElement(b, t);

          if ('slices' === r.renderEnvironment) {
            let t = '';

            try {
              t =
                '\n\nSlice component "' +
                r.sliceRoot.name +
                '" (' +
                r.sliceRoot.componentPath +
                ') tried to render <Slice alias="' +
                e.alias +
                '"/>';
            } catch {}
            throw new Error(
              'Nested slices are not supported.' +
                t +
                '\n\nSee https://gatsbyjs.com/docs/reference/built-in-components/gatsby-slice#nested-slices',
            );
          }
          throw new Error(
            'Slice context "' + r.renderEnvironment + '" is not supported.',
          );
        }
      }
      let B = (function (e) {
        function t(r, o, n, a) {
          var i;
          const s = Object.entries(n)
              .map((e) => {
                let [t, r] = e;

                return 'not serializable "' + r + '" type passed to "' + t + '" prop';
              })
              .join(', '),
            l = 'SlicePropsError';
          let c = '',
            u = '';

          if (r) {
            const e =
              p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactDebugCurrentFrame.getCurrentStack()
                .trim()
                .split('\n')
                .slice(1);

            (e[0] = e[0].trim()),
              (c = '\n' + e.join('\n')),
              (u =
                'Slice "' +
                o +
                '" was passed props that are not serializable (' +
                s +
                ').');
          } else {
            u =
              l +
              ': Slice "' +
              o +
              '" was passed props that are not serializable (' +
              s +
              ').';
            c = u + '\n' + new Error().stack.trim().split('\n').slice(2).join('\n');
          }

          return (
            ((i = e.call(this, u) || this).name = l),
            c
              ? (i.stack = c)
              : Error.captureStackTrace(
                  (function (e) {
                    if (void 0 === e)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                      );

                    return e;
                  })(i),
                  t,
                ),
            a && (i.forcedLocation = { ...a, functionName: 'Slice' }),
            i
          );
        }

        return (0, c.Z)(t, e), t;
      })(f(Error));
      const P = function (e, t, r, o) {
        void 0 === t && (t = {}), void 0 === r && (r = []), void 0 === o && (o = null);

        for (const [n, a] of Object.entries(e)) {
          if (null == a || (!o && 'children' === n)) continue;
          const e = o ? o + '.' + n : n;

          'function' == typeof a
            ? (t[e] = typeof a)
            : 'object' == typeof a && r.indexOf(a) <= 0 && (r.push(a), P(a, t, r, e));
        }

        return t;
      };
      var w = r(6291);
      const S = o.ZP.enqueue;

      function C() {
        throw new Error(
          'It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away. Unfortunately, something went wrong and the query was left in the compiled code.\n\nUnless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.',
        );
      }
    },
    8175: function (e, t, r) {
      'use strict';
      r.d(t, {
        uQ: function () {
          return d;
        },
        kL: function () {
          return B;
        },
        ZP: function () {
          return S;
        },
        Nt: function () {
          return x;
        },
        hs: function () {
          return C;
        },
        jN: function () {
          return w;
        },
        N1: function () {
          return P;
        },
      });
      var o = r(1665),
        n = r(4616),
        a = r(58);
      const i = (function (e) {
          if ('undefined' == typeof document) return !1;
          const t = document.createElement('link');

          try {
            if (t.relList && 'function' == typeof t.relList.supports)
              return t.relList.supports(e);
          } catch (r) {
            return !1;
          }

          return !1;
        })('prefetch')
          ? function (e, t) {
              return new Promise((r, o) => {
                if ('undefined' == typeof document) return void o();
                const n = document.createElement('link');

                n.setAttribute('rel', 'prefetch'),
                  n.setAttribute('href', e),
                  Object.keys(t).forEach((e) => {
                    n.setAttribute(e, t[e]);
                  }),
                  (n.onload = r),
                  (n.onerror = o);
                (
                  document.getElementsByTagName('head')[0] ||
                  document.getElementsByName('script')[0].parentNode
                ).appendChild(n);
              });
            }
          : function (e) {
              return new Promise((t, r) => {
                const o = new XMLHttpRequest();

                o.open('GET', e, !0),
                  (o.onload = () => {
                    200 === o.status ? t() : r();
                  }),
                  o.send(null);
              });
            },
        s = {};
      var l = function (e, t) {
          return new Promise((r) => {
            s[e]
              ? r()
              : i(e, t)
                  .then(() => {
                    r(), (s[e] = !0);
                  })
                  .catch(() => {});
          });
        },
        c = r(6249),
        u = r(9529);
      const d = { Error: 'error', Success: 'success' },
        h = (e) => {
          const [t, r] = e.split('?');
          var o;

          return (
            '/page-data/' +
            ('/' === t
              ? 'index'
              : (o = '/' === (o = t)[0] ? o.slice(1) : o).endsWith('/')
              ? o.slice(0, -1)
              : o) +
            '/page-data.json' +
            (r ? '?' + r : '')
          );
        },
        f = (e) => e.startsWith('//');

      function p(e, t) {
        return (
          void 0 === t && (t = 'GET'),
          new Promise((r) => {
            const o = new XMLHttpRequest();

            o.open(t, e, !0),
              (o.onreadystatechange = () => {
                4 == o.readyState && r(o);
              }),
              o.send(null);
          })
        );
      }

      const g = /bot|crawler|spider|crawling/i,
        m = function (e, t, r) {
          var o;

          void 0 === t && (t = null);
          const n = {
            componentChunkName: e.componentChunkName,
            path: e.path,
            webpackCompilationHash: e.webpackCompilationHash,
            matchPath: e.matchPath,
            staticQueryHashes: e.staticQueryHashes,
            getServerDataError: e.getServerDataError,
            slicesMap: null !== (o = e.slicesMap) && void 0 !== o ? o : {},
          };

          return { component: t, head: r, json: e.result, page: n };
        };

      function v(e) {
        return new Promise((t) => {
          try {
            const r = e.readRoot();

            t(r);
          } catch (r) {
            if (
              !Object.hasOwnProperty.call(r, '_response') ||
              !Object.hasOwnProperty.call(r, '_status')
            )
              throw r;
            setTimeout(() => {
              v(e).then(t);
            }, 200);
          }
        });
      }
      let y = (function () {
        function e(e, t) {
          (this.inFlightNetworkRequests = new Map()),
            (this.pageDb = new Map()),
            (this.inFlightDb = new Map()),
            (this.staticQueryDb = {}),
            (this.pageDataDb = new Map()),
            (this.partialHydrationDb = new Map()),
            (this.slicesDataDb = new Map()),
            (this.sliceInflightDb = new Map()),
            (this.slicesDb = new Map()),
            (this.isPrefetchQueueRunning = !1),
            (this.prefetchQueued = []),
            (this.prefetchTriggered = new Set()),
            (this.prefetchCompleted = new Set()),
            (this.loadComponent = e),
            (0, u.DS)(t);
        }
        var t = e.prototype;

        return (
          (t.memoizedGet = function (e) {
            let t = this.inFlightNetworkRequests.get(e);

            return (
              t || ((t = p(e, 'GET')), this.inFlightNetworkRequests.set(e, t)),
              t
                .then((t) => (this.inFlightNetworkRequests.delete(e), t))
                .catch((t) => {
                  throw (this.inFlightNetworkRequests.delete(e), t);
                })
            );
          }),
          (t.setApiRunner = function (e) {
            (this.apiRunner = e),
              (this.prefetchDisabled = e('disableCorePrefetching').some((e) => e));
          }),
          (t.fetchPageDataJson = function (e) {
            const { pagePath: t, retries: r = 0 } = e,
              o = h(t);

            return this.memoizedGet(o).then((o) => {
              const { status: n, responseText: a } = o;

              if (200 === n)
                try {
                  const r = JSON.parse(a);

                  if (void 0 === r.path) throw new Error('not a valid pageData response');
                  const o = t.split('?')[1];

                  return (
                    o && !r.path.includes(o) && (r.path += '?' + o),
                    Object.assign(e, { status: d.Success, payload: r })
                  );
                } catch (i) {}

              return 404 === n || 200 === n
                ? '/404.html' === t || '/500.html' === t
                  ? Object.assign(e, { status: d.Error })
                  : this.fetchPageDataJson(
                      Object.assign(e, { pagePath: '/404.html', notFound: !0 }),
                    )
                : 500 === n
                ? this.fetchPageDataJson(
                    Object.assign(e, { pagePath: '/500.html', internalServerError: !0 }),
                  )
                : r < 3
                ? this.fetchPageDataJson(Object.assign(e, { retries: r + 1 }))
                : Object.assign(e, { status: d.Error });
            });
          }),
          (t.fetchPartialHydrationJson = function (e) {
            const { pagePath: t, retries: r = 0 } = e,
              o = h(t).replace('.json', '-rsc.json');

            return this.memoizedGet(o).then((o) => {
              const { status: n, responseText: a } = o;

              if (200 === n)
                try {
                  return Object.assign(e, { status: d.Success, payload: a });
                } catch (i) {}

              return 404 === n || 200 === n
                ? '/404.html' === t || '/500.html' === t
                  ? Object.assign(e, { status: d.Error })
                  : this.fetchPartialHydrationJson(
                      Object.assign(e, { pagePath: '/404.html', notFound: !0 }),
                    )
                : 500 === n
                ? this.fetchPartialHydrationJson(
                    Object.assign(e, { pagePath: '/500.html', internalServerError: !0 }),
                  )
                : r < 3
                ? this.fetchPartialHydrationJson(Object.assign(e, { retries: r + 1 }))
                : Object.assign(e, { status: d.Error });
            });
          }),
          (t.loadPageDataJson = function (e) {
            const t = (0, u.Cj)(e);

            if (this.pageDataDb.has(t)) {
              const e = this.pageDataDb.get(t);

              return Promise.resolve(e);
            }

            return this.fetchPageDataJson({ pagePath: t }).then(
              (e) => (this.pageDataDb.set(t, e), e),
            );
          }),
          (t.loadPartialHydrationJson = function (e) {
            const t = (0, u.Cj)(e);

            if (this.partialHydrationDb.has(t)) {
              const e = this.partialHydrationDb.get(t);

              return Promise.resolve(e);
            }

            return this.fetchPartialHydrationJson({ pagePath: t }).then(
              (e) => (this.partialHydrationDb.set(t, e), e),
            );
          }),
          (t.loadSliceDataJson = function (e) {
            if (this.slicesDataDb.has(e)) {
              const t = this.slicesDataDb.get(e);

              return Promise.resolve({ sliceName: e, jsonPayload: t });
            }

            return p('/slice-data/' + e + '.json', 'GET').then((t) => {
              const r = JSON.parse(t.responseText);

              return this.slicesDataDb.set(e, r), { sliceName: e, jsonPayload: r };
            });
          }),
          (t.findMatchPath = function (e) {
            return (0, u.UD)(e);
          }),
          (t.loadPage = function (e) {
            const t = (0, u.Cj)(e);

            if (this.pageDb.has(t)) {
              const e = this.pageDb.get(t);

              return e.error
                ? Promise.resolve({ error: e.error, status: e.status })
                : Promise.resolve(e.payload);
            }
            if (this.inFlightDb.has(t)) return this.inFlightDb.get(t);
            const r = [this.loadAppData(), this.loadPageDataJson(t)];
            const o = Promise.all(r).then((e) => {
              const [r, o, i] = e;

              if (o.status === d.Error || (null == i ? void 0 : i.status) === d.Error)
                return { status: d.Error };
              let s = o.payload;
              const {
                  componentChunkName: l,
                  staticQueryHashes: u = [],
                  slicesMap: h = {},
                } = s,
                f = {},
                p = Array.from(new Set(Object.values(h))),
                g = (e) => {
                  if (this.slicesDb.has(e.name)) return this.slicesDb.get(e.name);
                  if (this.sliceInflightDb.has(e.name))
                    return this.sliceInflightDb.get(e.name);
                  const t = this.loadComponent(e.componentChunkName).then((t) => {
                    return {
                      component: ((r = t), (r && r.default) || r),
                      sliceContext: e.result.sliceContext,
                      data: e.result.data,
                    };
                    var r;
                  });

                  return (
                    this.sliceInflightDb.set(e.name, t),
                    t.then((t) => {
                      this.slicesDb.set(e.name, t), this.sliceInflightDb.delete(e.name);
                    }),
                    t
                  );
                };

              return Promise.all(p.map((e) => this.loadSliceDataJson(e))).then((e) => {
                const h = [],
                  p = (0, n.Z)(u);

                for (const { jsonPayload: t, sliceName: r } of Object.values(e)) {
                  h.push({ name: r, ...t });
                  for (const e of t.staticQueryHashes) p.includes(e) || p.push(e);
                }
                const y = [Promise.all(h.map(g)), this.loadComponent(l, 'head')];

                y.push(this.loadComponent(l));
                const b = Promise.all(y).then((e) => {
                    const [t, n, l] = e;

                    f.createdAt = new Date();
                    for (const r of t)
                      (!r || r instanceof Error) && ((f.status = d.Error), (f.error = r));
                    let c;

                    if (
                      ((!l || l instanceof Error) &&
                        ((f.status = d.Error), (f.error = l)),
                      f.status !== d.Error)
                    ) {
                      if (
                        ((f.status = d.Success),
                        (!0 !== o.notFound && !0 !== (null == i ? void 0 : i.notFound)) ||
                          (f.notFound = !0),
                        (s = Object.assign(s, {
                          webpackCompilationHash: r ? r.webpackCompilationHash : '',
                        })),
                        'string' == typeof (null == i ? void 0 : i.payload))
                      ) {
                        (c = m(s, null, n)), (c.partialHydration = i.payload);
                        const e = new ReadableStream({
                          start(e) {
                            const t = new TextEncoder();

                            e.enqueue(t.encode(i.payload));
                          },
                          pull(e) {
                            e.close();
                          },
                          cancel() {},
                        });

                        return v((0, a.createFromReadableStream)(e)).then(
                          (e) => ((c.partialHydration = e), c),
                        );
                      }
                      c = m(s, l, n);
                    }

                    return c;
                  }),
                  k = Promise.all(
                    p.map((e) => {
                      if (this.staticQueryDb[e]) {
                        const t = this.staticQueryDb[e];

                        return { staticQueryHash: e, jsonPayload: t };
                      }

                      return this.memoizedGet('/page-data/sq/d/' + e + '.json')
                        .then((t) => {
                          const r = JSON.parse(t.responseText);

                          return { staticQueryHash: e, jsonPayload: r };
                        })
                        .catch(() => {
                          throw new Error(
                            'We couldn\'t load "/page-data/sq/d/' + e + '.json"',
                          );
                        });
                    }),
                  ).then((e) => {
                    const t = {};

                    return (
                      e.forEach((e) => {
                        let { staticQueryHash: r, jsonPayload: o } = e;

                        (t[r] = o), (this.staticQueryDb[r] = o);
                      }),
                      t
                    );
                  });

                return Promise.all([b, k])
                  .then((e) => {
                    let r,
                      [o, n] = e;

                    return (
                      o &&
                        ((r = { ...o, staticQueryResults: n }),
                        (f.payload = r),
                        c.Z.emit('onPostLoadPageResources', {
                          page: r,
                          pageResources: r,
                        })),
                      this.pageDb.set(t, f),
                      f.error ? { error: f.error, status: f.status } : r
                    );
                  })
                  .catch((e) => ({ error: e, status: d.Error }));
              });
            });

            return (
              o
                .then(() => {
                  this.inFlightDb.delete(t);
                })
                .catch((e) => {
                  throw (this.inFlightDb.delete(t), e);
                }),
              this.inFlightDb.set(t, o),
              o
            );
          }),
          (t.loadPageSync = function (e, t) {
            void 0 === t && (t = {});
            const r = (0, u.Cj)(e);

            if (this.pageDb.has(r)) {
              var o;
              const e = this.pageDb.get(r);

              if (e.payload) return e.payload;
              if (null !== (o = t) && void 0 !== o && o.withErrorDetails)
                return { error: e.error, status: e.status };
            }
          }),
          (t.shouldPrefetch = function (e) {
            return (
              !!(() => {
                if ('connection' in navigator && void 0 !== navigator.connection) {
                  if ((navigator.connection.effectiveType || '').includes('2g'))
                    return !1;
                  if (navigator.connection.saveData) return !1;
                }

                return !0;
              })() &&
              (!navigator.userAgent || !g.test(navigator.userAgent)) &&
              !this.pageDb.has(e)
            );
          }),
          (t.prefetch = function (e) {
            if (!this.shouldPrefetch(e)) return { then: (e) => e(!1), abort: () => {} };
            if (this.prefetchTriggered.has(e))
              return { then: (e) => e(!0), abort: () => {} };
            const t = { resolve: null, reject: null, promise: null };

            (t.promise = new Promise((e, r) => {
              (t.resolve = e), (t.reject = r);
            })),
              this.prefetchQueued.push([e, t]);
            const r = new AbortController();

            return (
              r.signal.addEventListener('abort', () => {
                const t = this.prefetchQueued.findIndex((t) => {
                  let [r] = t;

                  return r === e;
                });

                -1 !== t && this.prefetchQueued.splice(t, 1);
              }),
              this.isPrefetchQueueRunning ||
                ((this.isPrefetchQueueRunning = !0),
                setTimeout(() => {
                  this._processNextPrefetchBatch();
                }, 3e3)),
              { then: (e, r) => t.promise.then(e, r), abort: r.abort.bind(r) }
            );
          }),
          (t._processNextPrefetchBatch = function () {
            (window.requestIdleCallback || ((e) => setTimeout(e, 0)))(() => {
              const e = this.prefetchQueued.splice(0, 4),
                t = Promise.all(
                  e.map((e) => {
                    let [t, r] = e;

                    return (
                      this.prefetchTriggered.has(t) ||
                        (this.apiRunner('onPrefetchPathname', { pathname: t }),
                        this.prefetchTriggered.add(t)),
                      this.prefetchDisabled
                        ? r.resolve(!1)
                        : this.doPrefetch((0, u.Cj)(t)).then(() => {
                            this.prefetchCompleted.has(t) ||
                              (this.apiRunner('onPostPrefetchPathname', { pathname: t }),
                              this.prefetchCompleted.add(t)),
                              r.resolve(!0);
                          })
                    );
                  }),
                );

              this.prefetchQueued.length
                ? t.then(() => {
                    setTimeout(() => {
                      this._processNextPrefetchBatch();
                    }, 3e3);
                  })
                : (this.isPrefetchQueueRunning = !1);
            });
          }),
          (t.doPrefetch = function (e) {
            const t = h(e);

            return l(t, { crossOrigin: 'anonymous', as: 'fetch' }).then(() =>
              this.loadPageDataJson(e),
            );
          }),
          (t.hovering = function (e) {
            this.loadPage(e);
          }),
          (t.getResourceURLsForPathname = function (e) {
            const t = (0, u.Cj)(e),
              r = this.pageDataDb.get(t);

            if (r) {
              const e = m(r.payload);

              return [].concat((0, n.Z)(b(e.page.componentChunkName)), [h(t)]);
            }

            return null;
          }),
          (t.isPageNotFound = function (e) {
            const t = (0, u.Cj)(e),
              r = this.pageDb.get(t);

            return !r || r.notFound;
          }),
          (t.loadAppData = function (e) {
            return (
              void 0 === e && (e = 0),
              this.memoizedGet('/page-data/app-data.json').then((t) => {
                const { status: r, responseText: o } = t;
                let n;

                if (200 !== r && e < 3) return this.loadAppData(e + 1);

                if (200 === r)
                  try {
                    const e = JSON.parse(o);

                    if (void 0 === e.webpackCompilationHash)
                      throw new Error('not a valid app-data response');
                    n = e;
                  } catch (a) {}

                return n;
              })
            );
          }),
          e
        );
      })();
      const b = (e) => (window.___chunkMapping[e] || []).map((e) => '' + e);
      let k,
        B = (function (e) {
          function t(t, r, o) {
            var n;

            return (
              (n =
                e.call(
                  this,
                  function (e, r) {
                    if ((void 0 === r && (r = 'components'), !t[(r = 'components')][e]))
                      throw new Error(
                        'We couldn\'t find the correct component chunk with the name "' +
                          e +
                          '"',
                      );

                    return t[r][e]().catch((e) => e);
                  },
                  r,
                ) || this),
              o &&
                n.pageDataDb.set((0, u.Cj)(o.path), {
                  pagePath: o.path,
                  payload: o,
                  status: 'success',
                }),
              n
            );
          }
          (0, o.Z)(t, e);
          var r = t.prototype;

          return (
            (r.doPrefetch = function (t) {
              return e.prototype.doPrefetch.call(this, t).then((e) => {
                if (e.status !== d.Success) return Promise.resolve();
                const t = e.payload,
                  r = t.componentChunkName,
                  o = b(r);

                return Promise.all(o.map(l)).then(() => t);
              });
            }),
            (r.loadPageDataJson = function (t) {
              return e.prototype.loadPageDataJson
                .call(this, t)
                .then((e) =>
                  e.notFound
                    ? f(t)
                      ? e
                      : p(t, 'HEAD').then((t) =>
                          200 === t.status ? { status: d.Error } : e,
                        )
                    : e,
                );
            }),
            (r.loadPartialHydrationJson = function (t) {
              return e.prototype.loadPartialHydrationJson
                .call(this, t)
                .then((e) =>
                  e.notFound
                    ? f(t)
                      ? e
                      : p(t, 'HEAD').then((t) =>
                          200 === t.status ? { status: d.Error } : e,
                        )
                    : e,
                );
            }),
            t
          );
        })(y);
      const P = (e) => {
          k = e;
        },
        w = {
          enqueue: (e) => k.prefetch(e),
          getResourceURLsForPathname: (e) => k.getResourceURLsForPathname(e),
          loadPage: (e) => k.loadPage(e),
          loadPageSync: function (e, t) {
            return void 0 === t && (t = {}), k.loadPageSync(e, t);
          },
          prefetch: (e) => k.prefetch(e),
          isPageNotFound: (e) => k.isPageNotFound(e),
          hovering: (e) => k.hovering(e),
          loadAppData: () => k.loadAppData(),
        };
      var S = w;

      function C() {
        return k ? k.staticQueryDb : {};
      }

      function x() {
        return k ? k.slicesDb : {};
      }
    },
    9559: function (e, t, r) {
      'use strict';
      r.d(t, {
        Z: function () {
          return S;
        },
      });
      var o = r(2784),
        n = r(3980),
        a = r.n(n),
        i = r(1852),
        s = r(9529),
        l = r(4616),
        c = r(4792),
        u = r(5619),
        d = r(3853);

      function h(e) {
        let { children: t, callback: r } = e;

        return (
          (0, o.useEffect)(() => {
            r();
          }),
          t
        );
      }
      const f = [
        'link',
        'meta',
        'style',
        'title',
        'base',
        'noscript',
        'script',
        'html',
        'body',
      ];

      function p(e, t) {
        if (e instanceof HTMLElement && t instanceof HTMLElement) {
          const r = t.getAttribute('nonce');

          if (r && !e.getAttribute('nonce')) {
            const o = t.cloneNode(!0);

            return (
              o.setAttribute('nonce', ''),
              (o.nonce = r),
              r === e.nonce && e.isEqualNode(o)
            );
          }
        }

        return e.isEqualNode(t);
      }

      function g(e, t) {
        void 0 === t && (t = { html: {}, body: {} });
        const r = new Map(),
          o = [];

        for (const s of e.childNodes) {
          var n, a;
          const e = s.nodeName.toLowerCase(),
            c =
              null === (n = s.attributes) ||
              void 0 === n ||
              null === (a = n.id) ||
              void 0 === a
                ? void 0
                : a.value;

          if (y(s)) {
            if (v(e))
              if ('html' === e || 'body' === e)
                for (const r of s.attributes) t[e] = { ...t[e], [r.name]: r.value };
              else {
                let e = s.cloneNode(!0);

                if (
                  (e.setAttribute('data-gatsby-head', !0),
                  'script' === e.nodeName.toLowerCase() && (e = m(e)),
                  c)
                )
                  if (r.has(c)) {
                    var i;
                    const t = r.get(c);

                    null === (i = o[t].parentNode) || void 0 === i || i.removeChild(o[t]),
                      (o[t] = e);
                  } else o.push(e), r.set(c, o.length - 1);
                else o.push(e);
              }
            s.childNodes.length && o.push.apply(o, (0, l.Z)(g(s, t).validHeadNodes));
          }
        }

        return { validHeadNodes: o, htmlAndBodyAttributes: t };
      }

      function m(e) {
        const t = document.createElement('script');

        for (const r of e.attributes) t.setAttribute(r.name, r.value);

        return (t.innerHTML = e.innerHTML), t;
      }

      function v(e) {
        return f.includes(e);
      }

      function y(e) {
        return 1 === e.nodeType;
      }

      const b = document.createElement('div'),
        k = { html: [], body: [] },
        B = () => {
          var e;
          const { validHeadNodes: t, htmlAndBodyAttributes: r } = g(b);

          (k.html = Object.keys(r.html)),
            (k.body = Object.keys(r.body)),
            (function (e) {
              if (!e) return;
              const { html: t, body: r } = e,
                o = document.querySelector('html');

              o &&
                Object.entries(t).forEach((e) => {
                  let [t, r] = e;

                  o.setAttribute(t, r);
                });
              const n = document.querySelector('body');

              n &&
                Object.entries(r).forEach((e) => {
                  let [t, r] = e;

                  n.setAttribute(t, r);
                });
            })(r);
          const o = document.querySelectorAll('[data-gatsby-head]');
          var n;

          if (0 === o.length)
            return void (n = document.head).append.apply(n, (0, l.Z)(t));
          const a = [];

          !(function (e) {
            let { oldNodes: t, newNodes: r, onStale: o, onNew: n } = e;

            for (const a of t) {
              const e = r.findIndex((e) => p(e, a));

              -1 === e ? o(a) : r.splice(e, 1);
            }
            for (const a of r) n(a);
          })({
            oldNodes: o,
            newNodes: t,
            onStale: (e) => e.parentNode.removeChild(e),
            onNew: (e) => a.push(e),
          }),
            (e = document.head).append.apply(e, a);
        };

      function P(e) {
        let { pageComponent: t, staticQueryResults: r, pageComponentProps: n } = e;

        (0, o.useEffect)(() => {
          if (null != t && t.Head) {
            !(function (e) {
              if ('function' != typeof e)
                throw new Error(
                  'Expected "Head" export to be a function got "' + typeof e + '".',
                );
            })(t.Head);
            const { render: a } = (0, d.U)(),
              s = o.createElement(t.Head, {
                location: { pathname: (e = n).location.pathname },
                params: e.params,
                data: e.data || {},
                serverData: e.serverData,
                pageContext: e.pageContext,
              }),
              l = (0, i.h)('wrapRootElement', { element: s }, s, (e) => {
                let { result: t } = e;

                return { element: t };
              }).pop();

            a(
              o.createElement(
                h,
                { callback: B },
                o.createElement(
                  c.StaticQueryContext.Provider,
                  { value: r },
                  o.createElement(u.LocationProvider, null, l),
                ),
              ),
              b,
            );
          }
          var e;

          return () => {
            !(function () {
              const e = document.querySelectorAll('[data-gatsby-head]');

              for (const t of e) t.parentNode.removeChild(t);
            })(),
              (function (e) {
                if (!e) return;
                const { html: t, body: r } = e;

                if (t) {
                  const e = document.querySelector('html');

                  t.forEach((t) => {
                    e && e.removeAttribute(t);
                  });
                }

                if (r) {
                  const e = document.querySelector('body');

                  r.forEach((t) => {
                    e && e.removeAttribute(t);
                  });
                }
              })(k);
          };
        });
      }

      function w(e) {
        const t = {
          ...e,
          params: {
            ...(0, s.GA)(e.location.pathname),
            ...e.pageResources.json.pageContext.__params,
          },
        };
        let r;
        var n;

        r = e.pageResources.partialHydration
          ? e.pageResources.partialHydration
          : (0, o.createElement)(((n = e.pageResources.component) && n.default) || n, {
              ...t,
              key: e.path || e.pageResources.page.path,
            });
        P({
          pageComponent: e.pageResources.head,
          staticQueryResults: e.pageResources.staticQueryResults,
          pageComponentProps: t,
        });

        return (0, i.h)('wrapPageElement', { element: r, props: t }, r, (e) => {
          let { result: r } = e;

          return { element: r, props: t };
        }).pop();
      }
      w.propTypes = {
        location: a().object.isRequired,
        pageResources: a().object.isRequired,
        data: a().object,
        pageContext: a().object.isRequired,
      };
      var S = w;
    },
    5069: function (e, t, r) {
      'use strict';
      var o = r(1665),
        n = r(1852),
        a = r(2784),
        i = r(5619),
        s = r(2802),
        l = r(5483),
        c = r(3204),
        u = r(8175),
        d = r(3182),
        h = r(6249);
      const f = {
        id: 'gatsby-announcer',
        style: {
          position: 'absolute',
          top: 0,
          width: 1,
          height: 1,
          padding: 0,
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          border: 0,
        },
        'aria-live': 'assertive',
        'aria-atomic': 'true',
      };
      var p = r(2467);

      function g(e) {
        const t = (0, d.J)(e),
          { hash: r, search: o } = window.location;

        return null != t && (window.___replace(t.toPath + o + r), !0);
      }
      let m = '';

      window.addEventListener('unhandledrejection', (e) => {
        /loading chunk \d* failed./i.test(e.reason) &&
          m &&
          (window.location.pathname = m);
      });

      const v = (e, t) => {
          g(e.pathname) ||
            ((m = e.pathname),
            (0, n.h)('onPreRouteUpdate', { location: e, prevLocation: t }));
        },
        y = (e, t) => {
          g(e.pathname) || (0, n.h)('onRouteUpdate', { location: e, prevLocation: t });
        },
        b = function (e, t) {
          if ((void 0 === t && (t = {}), 'number' == typeof e))
            return void i.globalHistory.navigate(e);
          const { pathname: r, search: o, hash: a } = (0, p.cP)(e),
            s = (0, d.J)(r);

          if ((s && (e = s.toPath + o + a), window.___swUpdated))
            return void (window.location = r + o + a);
          const l = setTimeout(() => {
            h.Z.emit('onDelayedLoadPageResources', { pathname: r }),
              (0, n.h)('onRouteUpdateDelayed', { location: window.location });
          }, 1e3);

          u.ZP.loadPage(r + o).then((n) => {
            if (!n || n.status === u.uQ.Error)
              return (
                window.history.replaceState({}, '', location.href),
                (window.location = r),
                void clearTimeout(l)
              );
            n &&
              n.page.webpackCompilationHash !== window.___webpackCompilationHash &&
              ('serviceWorker' in navigator &&
                null !== navigator.serviceWorker.controller &&
                'activated' === navigator.serviceWorker.controller.state &&
                navigator.serviceWorker.controller.postMessage({
                  gatsbyApi: 'clearPathResources',
                }),
              (window.location = r + o + a)),
              (0, i.navigate)(e, t),
              clearTimeout(l);
          });
        };

      function k(e, t) {
        let { location: r } = t;
        const { pathname: o, hash: a } = r,
          i = (0, n.h)('shouldUpdateScroll', {
            prevRouterProps: e,
            pathname: o,
            routerProps: { location: r },
            getSavedScrollPosition: (e) => [0, this._stateStorage.read(e, e.key)],
          });

        if (i.length > 0) return i[i.length - 1];

        if (e) {
          const {
            location: { pathname: t },
          } = e;

          if (t === o) return a ? decodeURI(a.slice(1)) : [0, 0];
        }

        return !0;
      }
      let B = (function (e) {
        function t(t) {
          var r;

          return ((r = e.call(this, t) || this).announcementRef = a.createRef()), r;
        }
        (0, o.Z)(t, e);
        var r = t.prototype;

        return (
          (r.componentDidUpdate = function (e, t) {
            requestAnimationFrame(() => {
              let e = 'new page at ' + this.props.location.pathname;

              document.title && (e = document.title);
              const t = document.querySelectorAll('#gatsby-focus-wrapper h1');

              t && t.length && (e = t[0].textContent);
              const r = 'Navigated to ' + e;

              if (this.announcementRef.current) {
                this.announcementRef.current.innerText !== r &&
                  (this.announcementRef.current.innerText = r);
              }
            });
          }),
          (r.render = function () {
            return a.createElement(
              'div',
              Object.assign({}, f, { ref: this.announcementRef }),
            );
          }),
          t
        );
      })(a.Component);
      const P = (e, t) => {
        var r, o;

        return (
          e.href !== t.href ||
          (null == e || null === (r = e.state) || void 0 === r ? void 0 : r.key) !==
            (null == t || null === (o = t.state) || void 0 === o ? void 0 : o.key)
        );
      };
      let w = (function (e) {
        function t(t) {
          var r;

          return (r = e.call(this, t) || this), v(t.location, null), r;
        }
        (0, o.Z)(t, e);
        var r = t.prototype;

        return (
          (r.componentDidMount = function () {
            y(this.props.location, null);
          }),
          (r.shouldComponentUpdate = function (e) {
            return (
              !!P(this.props.location, e.location) &&
              (v(e.location, this.props.location), !0)
            );
          }),
          (r.componentDidUpdate = function (e) {
            P(e.location, this.props.location) && y(this.props.location, e.location);
          }),
          (r.render = function () {
            return a.createElement(
              a.Fragment,
              null,
              this.props.children,
              a.createElement(B, { location: location }),
            );
          }),
          t
        );
      })(a.Component);
      var S = r(9559),
        C = r(6849);

      function x(e, t) {
        for (var r in e) if (!(r in t)) return !0;
        for (var o in t) if (e[o] !== t[o]) return !0;

        return !1;
      }
      var E = (function (e) {
          function t(t) {
            var r;

            r = e.call(this) || this;
            const { location: o, pageResources: n } = t;

            return (
              (r.state = {
                location: { ...o },
                pageResources:
                  n || u.ZP.loadPageSync(o.pathname + o.search, { withErrorDetails: !0 }),
              }),
              r
            );
          }
          (0, o.Z)(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              let { location: r } = e;

              if (t.location.href !== r.href) {
                return {
                  pageResources: u.ZP.loadPageSync(r.pathname + r.search, {
                    withErrorDetails: !0,
                  }),
                  location: { ...r },
                };
              }

              return { location: { ...r } };
            });
          var r = t.prototype;

          return (
            (r.loadResources = function (e) {
              u.ZP.loadPage(e).then((t) => {
                t && t.status !== u.uQ.Error
                  ? this.setState({ location: { ...window.location }, pageResources: t })
                  : (window.history.replaceState({}, '', location.href),
                    (window.location = e));
              });
            }),
            (r.shouldComponentUpdate = function (e, t) {
              return t.pageResources
                ? this.state.pageResources !== t.pageResources ||
                    this.state.pageResources.component !== t.pageResources.component ||
                    this.state.pageResources.json !== t.pageResources.json ||
                    !(
                      this.state.location.key === t.location.key ||
                      !t.pageResources.page ||
                      (!t.pageResources.page.matchPath && !t.pageResources.page.path)
                    ) ||
                    (function (e, t, r) {
                      return x(e.props, t) || x(e.state, r);
                    })(this, e, t)
                : (this.loadResources(e.location.pathname + e.location.search), !1);
            }),
            (r.render = function () {
              return this.props.children(this.state);
            }),
            t
          );
        })(a.Component),
        T = r(3834),
        N = r(3853);
      const F = new u.kL(C, [], window.pageData);

      (0, u.N1)(F), F.setApiRunner(n.h);
      const { render: A, hydrate: L } = (0, N.U)();

      (window.asyncRequires = C),
        (window.___emitter = h.Z),
        (window.___loader = u.jN),
        i.globalHistory.listen((e) => {
          e.location.action = e.action;
        }),
        (window.___push = (e) => b(e, { replace: !1 })),
        (window.___replace = (e) => b(e, { replace: !0 })),
        (window.___navigate = (e, t) => b(e, t));
      const R = 'gatsby-reload-compilation-hash-match';

      (0, n.I)('onClientEntry').then(() => {
        (0, n.h)('registerServiceWorker').filter(Boolean).length > 0 && r(472);
        const e = (e) =>
            a.createElement(
              i.BaseContext.Provider,
              { value: { baseuri: '/', basepath: '/' } },
              a.createElement(S.Z, e),
            ),
          t = a.createContext({}),
          d = { renderEnvironment: 'browser' };
        let h = (function (e) {
            function r() {
              return e.apply(this, arguments) || this;
            }

            return (
              (0, o.Z)(r, e),
              (r.prototype.render = function () {
                const { children: e } = this.props;

                return a.createElement(i.Location, null, (r) => {
                  let { location: o } = r;

                  return a.createElement(E, { location: o }, (r) => {
                    let { pageResources: o, location: n } = r;
                    const i = (0, u.hs)(),
                      s = (0, u.Nt)();

                    return a.createElement(
                      l.B9.Provider,
                      { value: i },
                      a.createElement(
                        c.Bs.Provider,
                        { value: d },
                        a.createElement(
                          c.m3.Provider,
                          { value: s },
                          a.createElement(
                            c.u0.Provider,
                            { value: o.page.slicesMap },
                            a.createElement(
                              t.Provider,
                              { value: { pageResources: o, location: n } },
                              e,
                            ),
                          ),
                        ),
                      ),
                    );
                  });
                });
              }),
              r
            );
          })(a.Component),
          f = (function (r) {
            function n() {
              return r.apply(this, arguments) || this;
            }

            return (
              (0, o.Z)(n, r),
              (n.prototype.render = function () {
                return a.createElement(t.Consumer, null, (t) => {
                  let { pageResources: r, location: o } = t;

                  return a.createElement(
                    w,
                    { location: o },
                    a.createElement(
                      s.$C,
                      { location: o, shouldUpdateScroll: k },
                      a.createElement(
                        i.Router,
                        { basepath: '', location: o, id: 'gatsby-focus-wrapper' },
                        a.createElement(
                          e,
                          Object.assign(
                            {
                              path:
                                '/404.html' === r.page.path || '/500.html' === r.page.path
                                  ? (0, T.Z)(o.pathname, '')
                                  : encodeURI(
                                      (r.page.matchPath || r.page.path).split('?')[0],
                                    ),
                            },
                            this.props,
                            { location: o, pageResources: r },
                            r.json,
                          ),
                        ),
                      ),
                    ),
                  );
                });
              }),
              n
            );
          })(a.Component);
        const { pagePath: p, location: g } = window;

        p &&
          '' + p !== g.pathname + (p.includes('?') ? g.search : '') &&
          !(
            F.findMatchPath((0, T.Z)(g.pathname, '')) ||
            p.match(/^\/(404|500)(\/?|.html)$/) ||
            p.match(/^\/offline-plugin-app-shell-fallback\/?$/)
          ) &&
          (0, i.navigate)('' + p + (p.includes('?') ? '' : g.search) + g.hash, {
            replace: !0,
          });

        const m = () => {
          try {
            return sessionStorage;
          } catch {
            return null;
          }
        };

        u.jN.loadPage(g.pathname + g.search).then((e) => {
          var t;
          const r = m();

          if (
            null != e &&
            null !== (t = e.page) &&
            void 0 !== t &&
            t.webpackCompilationHash &&
            e.page.webpackCompilationHash !== window.___webpackCompilationHash &&
            ('serviceWorker' in navigator &&
              null !== navigator.serviceWorker.controller &&
              'activated' === navigator.serviceWorker.controller.state &&
              navigator.serviceWorker.controller.postMessage({
                gatsbyApi: 'clearPathResources',
              }),
            r)
          ) {
            if (!('1' === r.getItem(R)))
              return r.setItem(R, '1'), void window.location.reload(!0);
          }

          if ((r && r.removeItem(R), !e || e.status === u.uQ.Error)) {
            const t =
              'page resources for ' + g.pathname + ' not found. Not rendering React';

            if (e && e.error) throw (console.error(t), e.error);
            throw new Error(t);
          }
          const o = (0, n.h)(
              'wrapRootElement',
              { element: a.createElement(f, null) },
              a.createElement(f, null),
              (e) => {
                let { result: t } = e;

                return { element: t };
              },
            ).pop(),
            i = function () {
              const e = a.useRef(!1);

              return (
                a.useEffect(() => {
                  e.current ||
                    ((e.current = !0),
                    performance.mark && performance.mark('onInitialClientRender'),
                    (0, n.h)('onInitialClientRender'));
                }, []),
                a.createElement(h, null, o)
              );
            },
            s = document.getElementById('gatsby-focus-wrapper');
          let l = A;

          s && s.children.length && (l = L);
          const c = (0, n.h)('replaceHydrateFunction', void 0, l)[0];

          function d() {
            const e =
              'undefined' != typeof window ? document.getElementById('___gatsby') : null;

            c(a.createElement(i, null), e);
          }
          const p = document;

          if (
            'complete' === p.readyState ||
            ('loading' !== p.readyState && !p.documentElement.doScroll)
          )
            setTimeout(function () {
              d();
            }, 0);
          else {
            const e = function () {
              p.removeEventListener('DOMContentLoaded', e, !1),
                window.removeEventListener('load', e, !1),
                d();
            };

            p.addEventListener('DOMContentLoaded', e, !1),
              window.addEventListener('load', e, !1);
          }
        });
      });
    },
    3161: function (e, t, r) {
      'use strict';
      r.r(t);
      var o = r(2784),
        n = r(8175),
        a = r(9559);

      t.default = (e) => {
        let { location: t } = e;
        const r = n.ZP.loadPageSync(t.pathname);

        return r
          ? o.createElement(a.Z, { location: t, pageResources: r, ...r.json })
          : null;
      };
    },
    9758: function (e, t, r) {
      var o;

      e.exports = ((o = r(3161)) && o.default) || o;
    },
    3853: function (e, t, r) {
      'use strict';
      r.d(t, {
        U: function () {
          return n;
        },
      });
      const o = new WeakMap();

      function n() {
        const e = r(7029);

        return {
          render: (t, r) => {
            let n = o.get(r);

            n || o.set(r, (n = e.createRoot(r))), n.render(t);
          },
          hydrate: (t, r) => e.hydrateRoot(r, t),
        };
      }
    },
    3182: function (e, t, r) {
      'use strict';
      r.d(t, {
        J: function () {
          return a;
        },
      });
      const o = new Map(),
        n = new Map();

      function a(e) {
        let t = o.get(e);

        return t || (t = n.get(e.toLowerCase())), t;
      }
      [].forEach((e) => {
        e.ignoreCase ? n.set(e.fromPath, e) : o.set(e.fromPath, e);
      });
    },
    472: function (e, t, r) {
      'use strict';
      r.r(t);
      var o = r(1852);

      'https:' !== window.location.protocol && 'localhost' !== window.location.hostname
        ? console.error(
            'Service workers can only be used over HTTPS, or on localhost for development',
          )
        : 'serviceWorker' in navigator &&
          navigator.serviceWorker
            .register('/sw.js')
            .then(function (e) {
              e.addEventListener('updatefound', () => {
                (0, o.h)('onServiceWorkerUpdateFound', { serviceWorker: e });
                const t = e.installing;

                console.log('installingWorker', t),
                  t.addEventListener('statechange', () => {
                    switch (t.state) {
                      case 'installed':
                        navigator.serviceWorker.controller
                          ? ((window.___swUpdated = !0),
                            (0, o.h)('onServiceWorkerUpdateReady', { serviceWorker: e }),
                            window.___failedResources &&
                              (console.log('resources failed, SW updated - reloading'),
                              window.location.reload()))
                          : (console.log('Content is now available offline!'),
                            (0, o.h)('onServiceWorkerInstalled', { serviceWorker: e }));

                        break;
                      case 'redundant':
                        console.error('The installing service worker became redundant.'),
                          (0, o.h)('onServiceWorkerRedundant', { serviceWorker: e });

                        break;
                      case 'activated':
                        (0, o.h)('onServiceWorkerActive', { serviceWorker: e });
                    }
                  });
              });
            })
            .catch(function (e) {
              console.error('Error during service worker registration:', e);
            });
    },
    3204: function (e, t, r) {
      'use strict';
      r.d(t, {
        Bs: function () {
          return a;
        },
        Db: function () {
          return s;
        },
        m3: function () {
          return n;
        },
        u0: function () {
          return i;
        },
      });
      var o = r(2784);
      const n = o.createContext({}),
        a = o.createContext({}),
        i = o.createContext({}),
        s = o.createContext({});
    },
    5483: function (e, t, r) {
      'use strict';
      r.d(t, {
        i1: function () {
          return l;
        },
        B9: function () {
          return n;
        },
        K2: function () {
          return c;
        },
      });
      var o = r(2784);
      const n =
        ((a = 'StaticQuery'),
        (i = {}),
        o.createServerContext
          ? (function (e, t) {
              return (
                void 0 === t && (t = null),
                globalThis.__SERVER_CONTEXT || (globalThis.__SERVER_CONTEXT = {}),
                globalThis.__SERVER_CONTEXT[e] ||
                  (globalThis.__SERVER_CONTEXT[e] = o.createServerContext(e, t)),
                globalThis.__SERVER_CONTEXT[e]
              );
            })(a, i)
          : o.createContext(i));
      var a, i;

      function s(e) {
        let { staticQueryData: t, data: r, query: n, render: a } = e;
        const i = r ? r.data : t[n] && t[n].data;

        return o.createElement(
          o.Fragment,
          null,
          i && a(i),
          !i && o.createElement('div', null, 'Loading (StaticQuery)'),
        );
      }

      const l = (e) => {
          const { data: t, query: r, render: a, children: i } = e;

          return o.createElement(n.Consumer, null, (e) =>
            o.createElement(s, { data: t, query: r, render: a || i, staticQueryData: e }),
          );
        },
        c = (e) => {
          var t;

          o.useContext;
          const r = o.useContext(n);

          if (isNaN(Number(e)))
            throw new Error(
              "useStaticQuery was called with a string but expects to be called using `graphql`. Try this:\n\nimport { useStaticQuery, graphql } from 'gatsby';\n\nuseStaticQuery(graphql`" +
                e +
                '`);\n',
            );
          if (null !== (t = r[e]) && void 0 !== t && t.data) return r[e].data;
          throw new Error(
            'The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues',
          );
        };
    },
    3834: function (e, t, r) {
      'use strict';

      function o(e, t) {
        return (
          void 0 === t && (t = ''),
          t ? (e === t ? '/' : e.startsWith(t + '/') ? e.slice(t.length) : e) : e
        );
      }
      r.d(t, {
        Z: function () {
          return o;
        },
      });
    },
    7677: function (e) {
      'use strict';

      e.exports = function (e, t, r, o, n, a, i, s) {
        if (!e) {
          var l;

          if (void 0 === t)
            l = new Error(
              'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.',
            );
          else {
            var c = [r, o, n, a, i, s],
              u = 0;

            (l = new Error(
              t.replace(/%s/g, function () {
                return c[u++];
              }),
            )).name = 'Invariant Violation';
          }
          throw ((l.framesToPop = 1), l);
        }
      };
    },
    5077: function (e, t, r) {
      'use strict';
      var o = r(2784),
        n = { stream: !0 },
        a = new Map(),
        i = Symbol.for('react.element'),
        s = Symbol.for('react.lazy'),
        l = Symbol.for('react.default_value'),
        c = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ContextRegistry;

      function u(e, t, r) {
        (this._status = e), (this._value = t), (this._response = r);
      }

      function d(e) {
        switch (e._status) {
          case 3:
            return e._value;
          case 1:
            var t = JSON.parse(e._value, e._response._fromJSON);

            return (e._status = 3), (e._value = t);
          case 2:
            for (var o = (t = e._value).chunks, n = 0; n < o.length; n++) {
              var i = a.get(o[n]);

              if (null !== i) throw i;
            }

            return (
              (o = r(t.id)),
              (t =
                '*' === t.name
                  ? o
                  : '' === t.name
                  ? o.__esModule
                    ? o.default
                    : o
                  : o[t.name]),
              (e._status = 3),
              (e._value = t)
            );
          case 0:
            throw e;
          default:
            throw e._value;
        }
      }

      function h() {
        return d(v(this, 0));
      }

      function f(e, t) {
        return new u(3, t, e);
      }

      function p(e) {
        if (null !== e) for (var t = 0; t < e.length; t++) (0, e[t])();
      }

      function g(e, t) {
        if (0 === e._status) {
          var r = e._value;

          (e._status = 4), (e._value = t), p(r);
        }
      }

      function m(e, t) {
        e._chunks.forEach(function (e) {
          g(e, t);
        });
      }

      function v(e, t) {
        var r = e._chunks,
          o = r.get(t);

        return o || ((o = new u(0, null, e)), r.set(t, o)), o;
      }

      function y(e) {
        m(e, Error('Connection closed.'));
      }

      function b(e, t) {
        if ('' !== t) {
          var n = t[0],
            i = t.indexOf(':', 1),
            s = parseInt(t.substring(1, i), 16);

          switch (((i = t.substring(i + 1)), n)) {
            case 'J':
              (n = (t = e._chunks).get(s))
                ? 0 === n._status &&
                  ((e = n._value), (n._status = 1), (n._value = i), p(e))
                : t.set(s, new u(1, i, e));

              break;
            case 'M':
              (n = (t = e._chunks).get(s)), (i = JSON.parse(i, e._fromJSON));
              var d = e._bundlerConfig;

              d = (i = d ? d[i.id][i.name] : i).chunks;

              for (var h = 0; h < d.length; h++) {
                var m = d[h];

                if (void 0 === a.get(m)) {
                  var v = r.e(m),
                    y = a.set.bind(a, m, null),
                    b = a.set.bind(a, m);

                  v.then(y, b), a.set(m, v);
                }
              }
              n
                ? 0 === n._status &&
                  ((e = n._value), (n._status = 2), (n._value = i), p(e))
                : t.set(s, new u(2, i, e));

              break;
            case 'P':
              e._chunks.set(
                s,
                f(
                  e,
                  (function (e) {
                    return c[e] || (c[e] = o.createServerContext(e, l)), c[e];
                  })(i).Provider,
                ),
              );

              break;
            case 'S':
              (n = JSON.parse(i)), e._chunks.set(s, f(e, Symbol.for(n)));

              break;
            case 'E':
              (t = JSON.parse(i)),
                ((n = Error(t.message)).stack = t.stack),
                (i = (t = e._chunks).get(s)) ? g(i, n) : t.set(s, new u(4, n, e));

              break;
            default:
              throw Error(
                "Error parsing the data. It's probably an error code or network corruption.",
              );
          }
        }
      }

      function k(e) {
        return function (t, r) {
          return 'string' == typeof r
            ? (function (e, t, r) {
                switch (r[0]) {
                  case '$':
                    return '$' === r
                      ? i
                      : '$' === r[1] || '@' === r[1]
                      ? r.substring(1)
                      : d((e = v(e, parseInt(r.substring(1), 16))));
                  case '@':
                    return (
                      (e = v(e, parseInt(r.substring(1), 16))),
                      { $$typeof: s, _payload: e, _init: d }
                    );
                }

                return r;
              })(e, 0, r)
            : 'object' == typeof r && null !== r
            ? r[0] === i
              ? {
                  $$typeof: i,
                  type: r[1],
                  key: r[2],
                  ref: null,
                  props: r[3],
                  _owner: null,
                }
              : r
            : r;
        };
      }

      function B(e) {
        var t = new TextDecoder();

        return (
          ((e = {
            _bundlerConfig: e,
            _chunks: new Map(),
            readRoot: h,
            _partialRow: '',
            _stringDecoder: t,
          })._fromJSON = k(e)),
          e
        );
      }

      function P(e, t) {
        function r(t) {
          m(e, t);
        }
        var o = t.getReader();

        o.read().then(function t(a) {
          var i = a.value;

          if (!a.done) {
            (a = i), (i = e._stringDecoder);

            for (var s = a.indexOf(10); -1 < s; ) {
              var l = e._partialRow,
                c = a.subarray(0, s);

              (c = i.decode(c)),
                b(e, l + c),
                (e._partialRow = ''),
                (s = (a = a.subarray(s + 1)).indexOf(10));
            }

            return (e._partialRow += i.decode(a, n)), o.read().then(t, r);
          }
          y(e);
        }, r);
      }
      (u.prototype.then = function (e) {
        0 === this._status
          ? (null === this._value && (this._value = []), this._value.push(e))
          : e();
      }),
        (t.createFromReadableStream = function (e, t) {
          return P((t = B(t && t.moduleMap ? t.moduleMap : null)), e), t;
        });
    },
    58: function (e, t, r) {
      'use strict';
      e.exports = r(5077);
    },
    5297: function (e) {
      (e.exports = function (e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );

        return e;
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    6531: function (e, t, r) {
      var o = r(8560);

      (e.exports = function (e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          o(e, t);
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    1600: function (e) {
      (e.exports = function (e) {
        return e && e.__esModule ? e : { default: e };
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    8560: function (e) {
      function t(r, o) {
        return (
          (e.exports = t =
            Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return (e.__proto__ = t), e;
                }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          t(r, o)
        );
      }
      (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
    },
    8072: function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      (t.SCRIPT_TYPE = 'text/partytown'),
        (t.partytownSnippet = (e) =>
          ((e, t) => {
            const { forward: r = [], ...o } = e || {},
              n = JSON.stringify(
                o,
                (e, t) => (
                  'function' == typeof t &&
                    (t = String(t)).startsWith(e + '(') &&
                    (t = 'function ' + t),
                  t
                ),
              );

            return [
              '!(function(w,p,f,c){',
              Object.keys(o).length > 0
                ? `c=w[p]=Object.assign(w[p]||{},${n});`
                : 'c=w[p]=w[p]||{};',
              'c[f]=(c[f]||[])',
              r.length > 0 ? `.concat(${JSON.stringify(r)})` : '',
              "})(window,'partytown','forward');",
              t,
            ].join('');
          })(
            e,
            '/* Partytown 0.7.6 - MIT builder.io */\n!function(t,e,n,i,r,o,a,d,s,c,p,l){function u(){l||(l=1,"/"==(a=(o.lib||"/~partytown/")+(o.debug?"debug/":""))[0]&&(s=e.querySelectorAll(\'script[type="text/partytown"]\'),i!=t?i.dispatchEvent(new CustomEvent("pt1",{detail:t})):(d=setTimeout(f,1e4),e.addEventListener("pt0",w),r?h(1):n.serviceWorker?n.serviceWorker.register(a+(o.swPath||"partytown-sw.js"),{scope:a}).then((function(t){t.active?h():t.installing&&t.installing.addEventListener("statechange",(function(t){"activated"==t.target.state&&h()}))}),console.error):f())))}function h(t){c=e.createElement(t?"script":"iframe"),t||(c.setAttribute("style","display:block;width:0;height:0;border:0;visibility:hidden"),c.setAttribute("aria-hidden",!0)),c.src=a+"partytown-"+(t?"atomics.js?v=0.7.6":"sandbox-sw.html?"+Date.now()),e.body.appendChild(c)}function f(n,r){for(w(),i==t&&(o.forward||[]).map((function(e){delete t[e.split(".")[0]]})),n=0;n<s.length;n++)(r=e.createElement("script")).innerHTML=s[n].innerHTML,e.head.appendChild(r);c&&c.parentNode.removeChild(c)}function w(){clearTimeout(d)}o=t.partytown||{},i==t&&(o.forward||[]).map((function(e){p=t,e.split(".").map((function(e,n,i){p=p[i[n]]=n+1<i.length?"push"==i[n+1]?[]:p[i[n]]||{}:function(){(t._ptf=t._ptf||[]).push(i,arguments)}}))})),"complete"==e.readyState?u():(t.addEventListener("DOMContentLoaded",u),t.addEventListener("load",u))}(window,document,navigator,top,window.crossOriginIsolated);',
          ));
    },
    1665: function (e, t, r) {
      'use strict';
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var o = r(8960);

      function n(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          (0, o.Z)(e, t);
      }
    },
    8960: function (e, t, r) {
      'use strict';

      function o(e, t) {
        return (
          (o = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          o(e, t)
        );
      }
      r.d(t, {
        Z: function () {
          return o;
        },
      });
    },
    4616: function (e, t, r) {
      'use strict';

      function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, o = new Array(t); r < t; r++) o[r] = e[r];

        return o;
      }

      function n(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return o(e);
          })(e) ||
          (function (e) {
            if (
              ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e['@@iterator']
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (e) {
              if ('string' == typeof e) return o(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);

              return (
                'Object' === r && e.constructor && (r = e.constructor.name),
                'Map' === r || 'Set' === r
                  ? Array.from(e)
                  : 'Arguments' === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  ? o(e, t)
                  : void 0
              );
            }
          })(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      r.d(t, {
        Z: function () {
          return n;
        },
      });
    },
    5619: function (e, t, r) {
      'use strict';
      var o;

      r.r(t),
        r.d(t, {
          BaseContext: function () {
            return m;
          },
          Link: function () {
            return Z;
          },
          Location: function () {
            return Q;
          },
          LocationContext: function () {
            return v;
          },
          LocationProvider: function () {
            return J;
          },
          Match: function () {
            return ee;
          },
          Redirect: function () {
            return S;
          },
          Router: function () {
            return se;
          },
          ServerLocation: function () {
            return Y;
          },
          createHistory: function () {
            return u;
          },
          createMemorySource: function () {
            return d;
          },
          globalHistory: function () {
            return f;
          },
          insertParams: function () {
            return N;
          },
          isRedirect: function () {
            return B;
          },
          match: function () {
            return E;
          },
          navigate: function () {
            return p;
          },
          pick: function () {
            return x;
          },
          redirectTo: function () {
            return P;
          },
          resolve: function () {
            return T;
          },
          shallowCompare: function () {
            return j;
          },
          startsWith: function () {
            return C;
          },
          useBaseContext: function () {
            return y;
          },
          useLocation: function () {
            return ce;
          },
          useLocationContext: function () {
            return b;
          },
          useMatch: function () {
            return he;
          },
          useNavigate: function () {
            return ue;
          },
          useParams: function () {
            return de;
          },
          validateRedirect: function () {
            return F;
          },
        });
      var n = r(2784),
        a = r(3980),
        i = r(7677);

      function s() {
        return (
          (s = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];

                  for (var o in r)
                    Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
                }

                return e;
              }),
          s.apply(this, arguments)
        );
      }

      function l(e, t) {
        if (null == e) return {};
        var r,
          o,
          n = {},
          a = Object.keys(e);

        for (o = 0; o < a.length; o++) t.indexOf((r = a[o])) >= 0 || (n[r] = e[r]);

        return n;
      }
      const c = (e) => {
          const {
            search: t,
            hash: r,
            href: o,
            origin: n,
            protocol: a,
            host: i,
            hostname: s,
            port: l,
          } = e.location;
          let { pathname: c } = e.location;

          return (
            !c && o && h && (c = new URL(o).pathname),
            {
              pathname: encodeURI(decodeURI(c)),
              search: t,
              hash: r,
              href: o,
              origin: n,
              protocol: a,
              host: i,
              hostname: s,
              port: l,
              state: e.history.state,
              key: (e.history.state && e.history.state.key) || 'initial',
            }
          );
        },
        u = (e, t) => {
          let r = [],
            o = c(e),
            n = !1,
            a = () => {};

          return {
            get location() {
              return o;
            },
            get transitioning() {
              return n;
            },
            _onTransitionComplete() {
              (n = !1), a();
            },
            listen(t) {
              r.push(t);

              const n = () => {
                (o = c(e)), t({ location: o, action: 'POP' });
              };

              return (
                e.addEventListener('popstate', n),
                () => {
                  e.removeEventListener('popstate', n), (r = r.filter((e) => e !== t));
                }
              );
            },
            navigate(t, { state: i, replace: l = !1 } = {}) {
              if ('number' == typeof t) e.history.go(t);
              else {
                i = s({}, i, { key: Date.now() + '' });

                try {
                  n || l
                    ? e.history.replaceState(i, null, t)
                    : e.history.pushState(i, null, t);
                } catch (r) {
                  e.location[l ? 'replace' : 'assign'](t);
                }
              }
              (o = c(e)), (n = !0);
              const u = new Promise((e) => (a = e));

              return r.forEach((e) => e({ location: o, action: 'PUSH' })), u;
            },
          };
        },
        d = (e = '/') => {
          const t = e.indexOf('?'),
            r = {
              pathname: t > -1 ? e.substr(0, t) : e,
              search: t > -1 ? e.substr(t) : '',
            };
          let o = 0;
          const n = [r],
            a = [null];

          return {
            get location() {
              return n[o];
            },
            addEventListener(e, t) {},
            removeEventListener(e, t) {},
            history: {
              get entries() {
                return n;
              },
              get index() {
                return o;
              },
              get state() {
                return a[o];
              },
              pushState(e, t, r) {
                const [i, s = ''] = r.split('?');

                o++, n.push({ pathname: i, search: s.length ? `?${s}` : s }), a.push(e);
              },
              replaceState(e, t, r) {
                const [i, s = ''] = r.split('?');

                (n[o] = { pathname: i, search: s }), (a[o] = e);
              },
              go(e) {
                const t = o + e;

                t < 0 || t > a.length - 1 || (o = t);
              },
            },
          };
        },
        h = !(
          'undefined' == typeof window ||
          !window.document ||
          !window.document.createElement
        ),
        f = u(h ? window : d()),
        { navigate: p } = f;

      function g(e, t) {
        return n.createServerContext
          ? ((e, t = null) => (
              globalThis.__SERVER_CONTEXT || (globalThis.__SERVER_CONTEXT = {}),
              globalThis.__SERVER_CONTEXT[e] ||
                (globalThis.__SERVER_CONTEXT[e] = n.createServerContext(e, t)),
              globalThis.__SERVER_CONTEXT[e]
            ))(e, t)
          : n.createContext(t);
      }
      const m = g('Base', { baseuri: '/', basepath: '/' }),
        v = g('Location'),
        y = () => n.useContext(m),
        b = () => n.useContext(v);

      function k(e) {
        this.uri = e;
      }

      const B = (e) => e instanceof k,
        P = (e) => {
          throw new k(e);
        };

      function w(e) {
        const { to: t, replace: r = !0, state: o, noThrow: a, baseuri: i } = e;

        n.useEffect(() => {
          Promise.resolve().then(() => {
            const n = T(t, i);

            p(N(n, e), { replace: r, state: o });
          });
        }, []);
        const s = T(t, i);

        return a || P(N(s, e)), null;
      }

      const S = (e) => {
        const t = b(),
          { baseuri: r } = y();

        return n.createElement(w, s({}, t, { baseuri: r }, e));
      };

      S.propTypes = { from: a.string, to: a.string.isRequired };
      const C = (e, t) => e.substr(0, t.length) === t,
        x = (e, t) => {
          let r, o;
          const [n] = t.split('?'),
            a = M(n),
            s = '' === a[0],
            l = H(e);

          for (let c = 0, u = l.length; c < u; c++) {
            let e = !1;
            const n = l[c].route;

            if (n.default) {
              o = { route: n, params: {}, uri: t };
              continue;
            }
            const u = M(n.path),
              d = {},
              h = Math.max(a.length, u.length);
            let f = 0;

            for (; f < h; f++) {
              const t = u[f],
                r = a[f];

              if (R(t)) {
                d[t.slice(1) || '*'] = a.slice(f).map(decodeURIComponent).join('/');

                break;
              }

              if (void 0 === r) {
                e = !0;

                break;
              }
              const o = A.exec(t);

              if (o && !s) {
                const e = -1 === _.indexOf(o[1]);

                i(
                  e,
                  `<Router> dynamic segment "${o[1]}" is a reserved name. Please use a different name in path "${n.path}".`,
                );
                const t = decodeURIComponent(r);

                d[o[1]] = t;
              } else if (t !== r) {
                e = !0;

                break;
              }
            }

            if (!e) {
              r = { route: n, params: d, uri: '/' + a.slice(0, f).join('/') };

              break;
            }
          }

          return r || o || null;
        },
        E = (e, t) => x([{ path: e }], t),
        T = (e, t) => {
          if (C(e, '/')) return e;
          const [r, o] = e.split('?'),
            [n] = t.split('?'),
            a = M(r),
            i = M(n);

          if ('' === a[0]) return O(n, o);

          if (!C(a[0], '.')) {
            const e = i.concat(a).join('/');

            return O(('/' === n ? '' : '/') + e, o);
          }
          const s = i.concat(a),
            l = [];

          for (let c = 0, u = s.length; c < u; c++) {
            const e = s[c];

            '..' === e ? l.pop() : '.' !== e && l.push(e);
          }

          return O('/' + l.join('/'), o);
        },
        N = (e, t) => {
          const [r, o = ''] = e.split('?');
          let n =
            '/' +
            M(r)
              .map((e) => {
                const r = A.exec(e);

                return r ? t[r[1]] : e;
              })
              .join('/');
          const { location: { search: a = '' } = {} } = t,
            i = a.split('?')[1] || '';

          return (n = O(n, o, i)), n;
        },
        F = (e, t) => {
          const r = (e) => L(e);

          return M(e).filter(r).sort().join('/') === M(t).filter(r).sort().join('/');
        },
        A = /^:(.+)/,
        L = (e) => A.test(e),
        R = (e) => e && '*' === e[0],
        D = (e, t) => ({
          route: e,
          score: e.default
            ? 0
            : M(e.path).reduce(
                (e, t) => (
                  (e += 4),
                  ((e) => '' === e)(t)
                    ? (e += 1)
                    : L(t)
                    ? (e += 2)
                    : R(t)
                    ? (e -= 5)
                    : (e += 3),
                  e
                ),
                0,
              ),
          index: t,
        }),
        H = (e) =>
          e
            .map(D)
            .sort((e, t) =>
              e.score < t.score ? 1 : e.score > t.score ? -1 : e.index - t.index,
            ),
        M = (e) => e.replace(/(^\/+|\/+$)/g, '').split('/'),
        O = (e, ...t) =>
          e +
          ((t = t.filter((e) => e && e.length > 0)) && t.length > 0
            ? `?${t.join('&')}`
            : ''),
        _ = ['uri', 'path'],
        j = (e, t) => {
          const r = Object.keys(e);

          return (
            r.length === Object.keys(t).length &&
            r.every((r) => t.hasOwnProperty(r) && e[r] === t[r])
          );
        },
        I = (e) => e.replace(/(^\/+|\/+$)/g, ''),
        V = (e) => (t) => {
          if (!t) return null;
          if (t.type === n.Fragment && t.props.children)
            return n.Children.map(t.props.children, V(e));
          if (
            (i(
              t.props.path || t.props.default || t.type === S,
              `<Router>: Children of <Router> must have a \`path\` or \`default\` prop, or be a \`<Redirect>\`. None found on element type \`${t.type}\``,
            ),
            i(
              !!(t.type !== S || (t.props.from && t.props.to)),
              `<Redirect from="${t.props.from}" to="${t.props.to}"/> requires both "from" and "to" props when inside a <Router>.`,
            ),
            i(
              !(t.type === S && !F(t.props.from, t.props.to)),
              `<Redirect from="${t.props.from} to="${t.props.to}"/> has mismatched dynamic segments, ensure both paths have the exact same dynamic segments.`,
            ),
            t.props.default)
          )
            return { value: t, default: !0 };
          const r = t.type === S ? t.props.from : t.props.path,
            o = '/' === r ? e : `${I(e)}/${I(r)}`;

          return {
            value: t,
            default: t.props.default,
            path: t.props.children ? `${I(o)}/*` : o,
          };
        },
        z = ['innerRef'],
        $ = ['to', 'state', 'replace', 'getProps'],
        W = ['key'];
      let { forwardRef: U } = o || (o = r.t(n, 2));

      void 0 === U && (U = (e) => e);
      const G = () => {},
        Z = U((e, t) => {
          let { innerRef: r } = e,
            o = l(e, z);
          const { baseuri: a } = y(),
            { location: i } = b(),
            { to: c, state: u, replace: d, getProps: h = G } = o,
            f = l(o, $),
            g = T(c, a),
            m = encodeURI(g),
            v = i.pathname === m,
            k = C(i.pathname, m);

          return n.createElement(
            'a',
            s(
              { ref: t || r, 'aria-current': v ? 'page' : void 0 },
              f,
              h({ isCurrent: v, isPartiallyCurrent: k, href: g, location: i }),
              {
                href: g,
                onClick: (e) => {
                  if (
                    (f.onClick && f.onClick(e),
                    ((e) =>
                      !e.defaultPrevented &&
                      0 === e.button &&
                      !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey))(e))
                  ) {
                    e.preventDefault();
                    let t = d;

                    if ('boolean' != typeof d && v) {
                      const e = l(s({}, i.state), W);

                      t = j(s({}, u), e);
                    }
                    p(g, { state: u, replace: t });
                  }
                },
              },
            ),
          );
        });

      (Z.displayName = 'Link'), (Z.propTypes = { to: a.string.isRequired });
      class X extends n.Component {
        constructor(...e) {
          super(...e), (this.displayName = 'ReactUseErrorBoundary');
        }
        componentDidCatch(...e) {
          this.setState({}), this.props.onError(...e);
        }
        render() {
          return this.props.children;
        }
      }
      const q = n.createContext({
        componentDidCatch: { current: void 0 },
        error: void 0,
        setError: () => !1,
      });

      function K({ children: e }) {
        const [t, r] = n.useState(),
          o = n.useRef(),
          a = n.useMemo(() => ({ componentDidCatch: o, error: t, setError: r }), [t]);

        return n.createElement(
          q.Provider,
          { value: a },
          n.createElement(
            X,
            {
              error: t,
              onError: (e, t) => {
                r(e), null == o.current || o.current(e, t);
              },
            },
            e,
          ),
        );
      }
      K.displayName = 'ReactUseErrorBoundaryContext';

      const J = (function (e) {
          var t, r;

          function o(t) {
            return n.createElement(
              K,
              null,
              n.createElement(e, s({ key: 'WrappedComponent' }, t)),
            );
          }

          return (
            (o.displayName = `WithErrorBoundary(${
              null != (t = null != (r = e.displayName) ? r : e.name) ? t : 'Component'
            })`),
            o
          );
        })(({ history: e = f, children: t }) => {
          const { location: r } = e,
            [o, a] = n.useState({ location: r }),
            [i] = (function (e) {
              const t = n.useContext(q);

              t.componentDidCatch.current = void 0;
              const r = n.useCallback(() => {
                t.setError(void 0);
              }, []);

              return [t.error, r];
            })();

          if (
            (n.useEffect(() => {
              e._onTransitionComplete();
            }, [o.location]),
            n.useEffect(() => {
              let t = !1;
              const r = e.listen(({ location: e }) => {
                Promise.resolve().then(() => {
                  requestAnimationFrame(() => {
                    t || a({ location: e });
                  });
                });
              });

              return () => {
                (t = !0), r();
              };
            }, []),
            i)
          ) {
            if (!B(i)) throw i;
            p(i.uri, { replace: !0 });
          }

          return n.createElement(
            v.Provider,
            { value: o },
            'function' == typeof t ? t(o) : t || null,
          );
        }),
        Q = ({ children: e }) => {
          const t = b();

          return t ? e(t) : n.createElement(J, null, e);
        },
        Y = ({ url: e, children: t }) => {
          const r = e.indexOf('?');
          let o,
            a = '';

          return (
            r > -1 ? ((o = e.substring(0, r)), (a = e.substring(r))) : (o = e),
            n.createElement(
              v.Provider,
              { value: { location: { pathname: o, search: a, hash: '' } } },
              t,
            )
          );
        },
        ee = ({ path: e, children: t }) => {
          const { baseuri: r } = y(),
            { location: o } = b(),
            n = T(e, r),
            a = E(n, o.pathname);

          return t({
            location: o,
            match: a ? s({}, a.params, { uri: a.uri, path: e }) : null,
          });
        },
        te = ['uri', 'location', 'component'],
        re = ['children', 'style', 'component', 'uri', 'location'],
        oe = (e) => {
          let { uri: t, location: r, component: o } = e,
            a = l(e, te);

          return n.createElement(ae, s({}, a, { component: o, uri: t, location: r }));
        };
      let ne = 0;
      const ae = (e) => {
          let { children: t, style: r, component: o = 'div', uri: a, location: i } = e,
            c = l(e, re);
          const u = n.useRef(),
            d = n.useRef(!0),
            h = n.useRef(a),
            f = n.useRef(i.pathname),
            p = n.useRef(!1);

          n.useEffect(
            () => (
              ne++,
              g(),
              () => {
                ne--, 0 === ne && (d.current = !0);
              }
            ),
            [],
          ),
            n.useEffect(() => {
              let e = !1,
                t = !1;

              a !== h.current && ((h.current = a), (e = !0)),
                i.pathname !== f.current && ((f.current = i.pathname), (t = !0)),
                (p.current = e || (t && i.pathname === a)),
                p.current && g();
            }, [a, i]);
          const g = n.useCallback(() => {
            var e;

            d.current ? (d.current = !1) : ((e = u.current), p.current && e && e.focus());
          }, []);

          return n.createElement(
            o,
            s({ style: s({ outline: 'none' }, r), tabIndex: '-1', ref: u }, c),
            t,
          );
        },
        ie = ['location', 'primary', 'children', 'basepath', 'baseuri', 'component'],
        se = (e) => {
          const t = y(),
            r = b();

          return n.createElement(le, s({}, t, r, e));
        };

      function le(e) {
        const {
            location: t,
            primary: r = !0,
            children: o,
            basepath: a,
            component: i = 'div',
          } = e,
          c = l(e, ie),
          u = n.Children.toArray(o).reduce((e, t) => {
            const r = V(a)(t);

            return e.concat(r);
          }, []),
          { pathname: d } = t,
          h = x(u, d);

        if (h) {
          const {
              params: e,
              uri: o,
              route: l,
              route: { value: u },
            } = h,
            d = l.default ? a : l.path.replace(/\*$/, ''),
            f = s({}, e, { uri: o, location: t }),
            p = n.cloneElement(
              u,
              f,
              u.props.children
                ? n.createElement(se, { location: t, primary: r }, u.props.children)
                : void 0,
            ),
            g = r ? oe : i,
            v = r ? s({ uri: o, location: t, component: i }, c) : c;

          return n.createElement(
            m.Provider,
            { value: { baseuri: o, basepath: d } },
            n.createElement(g, v, p),
          );
        }

        return null;
      }

      const ce = () => {
          const e = b();

          if (!e)
            throw new Error(
              'useLocation hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router',
            );

          return e.location;
        },
        ue = () => {
          throw new Error(
            "useNavigate is removed. Use import { navigate } from 'gatsby' instead",
          );
        },
        de = () => {
          const e = y();

          if (!e)
            throw new Error(
              'useParams hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router',
            );
          const t = ce(),
            r = E(e.basepath, t.pathname);

          return r ? r.params : null;
        },
        he = (e) => {
          if (!e)
            throw new Error(
              'useMatch(path: string) requires an argument of a string to match against',
            );
          const t = y();

          if (!t)
            throw new Error(
              'useMatch hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router',
            );
          const r = ce(),
            o = T(e, t.baseuri),
            n = E(o, r.pathname);

          return n ? s({}, n.params, { uri: n.uri, path: e }) : null;
        };
    },
    7788: function (e, t, r) {
      'use strict';
      r.d(t, {
        T: function () {
          return n;
        },
      });
      var o = r(2784),
        n = o.forwardRef(function ({ as: e = 'span', style: t = {}, ...r }, n) {
          return o.createElement(e, {
            ref: n,
            style: {
              border: 0,
              clip: 'rect(0 0 0 0)',
              height: '1px',
              margin: '-1px',
              overflow: 'hidden',
              padding: 0,
              position: 'absolute',
              width: '1px',
              whiteSpace: 'nowrap',
              wordWrap: 'normal',
              ...t,
            },
            ...r,
          });
        });

      n.displayName = 'VisuallyHidden';
    },
    5380: function (e, t, r) {
      'use strict';
      r.d(t, {
        M: function () {
          return m;
        },
      });
      var o = r(2784),
        n = r(4585),
        a = r(3617);

      function i() {
        const e = (0, o.useRef)(!1);

        return (
          (0, a.L)(
            () => (
              (e.current = !0),
              () => {
                e.current = !1;
              }
            ),
            [],
          ),
          e
        );
      }
      var s = r(7967),
        l = r(3105);

      class c extends o.Component {
        getSnapshotBeforeUpdate(e) {
          const t = this.props.childRef.current;

          if (t && e.isPresent && !this.props.isPresent) {
            const e = this.props.sizeRef.current;

            (e.height = t.offsetHeight || 0),
              (e.width = t.offsetWidth || 0),
              (e.top = t.offsetTop),
              (e.left = t.offsetLeft);
          }

          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }

      function u({ children: e, isPresent: t }) {
        const r = (0, o.useId)(),
          n = (0, o.useRef)(null),
          a = (0, o.useRef)({ width: 0, height: 0, top: 0, left: 0 });

        return (
          (0, o.useInsertionEffect)(() => {
            const { width: e, height: o, top: i, left: s } = a.current;

            if (t || !n.current || !e || !o) return;
            n.current.dataset.motionPopId = r;
            const l = document.createElement('style');

            return (
              document.head.appendChild(l),
              l.sheet &&
                l.sheet.insertRule(
                  `\n          [data-motion-pop-id="${r}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${o}px !important;\n            top: ${i}px !important;\n            left: ${s}px !important;\n          }\n        `,
                ),
              () => {
                document.head.removeChild(l);
              }
            );
          }, [t]),
          o.createElement(
            c,
            { isPresent: t, childRef: n, sizeRef: a },
            o.cloneElement(e, { ref: n }),
          )
        );
      }

      const d = ({
        children: e,
        initial: t,
        isPresent: r,
        onExitComplete: n,
        custom: a,
        presenceAffectsLayout: i,
        mode: c,
      }) => {
        const d = (0, l.h)(h),
          f = (0, o.useId)(),
          p = (0, o.useMemo)(
            () => ({
              id: f,
              initial: t,
              isPresent: r,
              custom: a,
              onExitComplete: (e) => {
                d.set(e, !0);
                for (const t of d.values()) if (!t) return;
                n && n();
              },
              register: (e) => (d.set(e, !1), () => d.delete(e)),
            }),
            i ? void 0 : [r],
          );

        return (
          (0, o.useMemo)(() => {
            d.forEach((e, t) => d.set(t, !1));
          }, [r]),
          o.useEffect(() => {
            !r && !d.size && n && n();
          }, [r]),
          'popLayout' === c && (e = o.createElement(u, { isPresent: r }, e)),
          o.createElement(s.O.Provider, { value: p }, e)
        );
      };

      function h() {
        return new Map();
      }
      var f = r(3422);
      var p = r(7035);
      const g = (e) => e.key || '';
      const m = ({
        children: e,
        custom: t,
        initial: r = !0,
        onExitComplete: s,
        exitBeforeEnter: l,
        presenceAffectsLayout: c = !0,
        mode: u = 'sync',
      }) => {
        (0, p.k)(!l, "Replace exitBeforeEnter with mode='wait'");
        const h =
            (0, o.useContext)(f.p).forceRender ||
            (function () {
              const e = i(),
                [t, r] = (0, o.useState)(0),
                a = (0, o.useCallback)(() => {
                  e.current && r(t + 1);
                }, [t]);

              return [(0, o.useCallback)(() => n.Wi.postRender(a), [a]), t];
            })()[0],
          m = i(),
          v = (function (e) {
            const t = [];

            return (
              o.Children.forEach(e, (e) => {
                (0, o.isValidElement)(e) && t.push(e);
              }),
              t
            );
          })(e);
        let y = v;
        const b = (0, o.useRef)(new Map()).current,
          k = (0, o.useRef)(y),
          B = (0, o.useRef)(new Map()).current,
          P = (0, o.useRef)(!0);
        var w;

        if (
          ((0, a.L)(() => {
            (P.current = !1),
              (function (e, t) {
                e.forEach((e) => {
                  const r = g(e);

                  t.set(r, e);
                });
              })(v, B),
              (k.current = y);
          }),
          (w = () => {
            (P.current = !0), B.clear(), b.clear();
          }),
          (0, o.useEffect)(() => () => w(), []),
          P.current)
        )
          return o.createElement(
            o.Fragment,
            null,
            y.map((e) =>
              o.createElement(
                d,
                {
                  key: g(e),
                  isPresent: !0,
                  initial: !!r && void 0,
                  presenceAffectsLayout: c,
                  mode: u,
                },
                e,
              ),
            ),
          );
        y = [...y];
        const S = k.current.map(g),
          C = v.map(g),
          x = S.length;

        for (let o = 0; o < x; o++) {
          const e = S[o];

          -1 !== C.indexOf(e) || b.has(e) || b.set(e, void 0);
        }

        return (
          'wait' === u && b.size && (y = []),
          b.forEach((e, r) => {
            if (-1 !== C.indexOf(r)) return;
            const n = B.get(r);

            if (!n) return;
            const a = S.indexOf(r);
            let i = e;

            if (!i) {
              const e = () => {
                B.delete(r), b.delete(r);
                const e = k.current.findIndex((e) => e.key === r);

                if ((k.current.splice(e, 1), !b.size)) {
                  if (((k.current = v), !1 === m.current)) return;
                  h(), s && s();
                }
              };

              (i = o.createElement(
                d,
                {
                  key: g(n),
                  isPresent: !1,
                  onExitComplete: e,
                  custom: t,
                  presenceAffectsLayout: c,
                  mode: u,
                },
                n,
              )),
                b.set(r, i);
            }
            y.splice(a, 0, i);
          }),
          (y = y.map((e) => {
            const t = e.key;

            return b.has(t)
              ? e
              : o.createElement(
                  d,
                  { key: g(e), isPresent: !0, presenceAffectsLayout: c, mode: u },
                  e,
                );
          })),
          o.createElement(
            o.Fragment,
            null,
            b.size ? y : y.map((e) => (0, o.cloneElement)(e)),
          )
        );
      };
    },
    3422: function (e, t, r) {
      'use strict';
      r.d(t, {
        p: function () {
          return o;
        },
      });
      const o = (0, r(2784).createContext)({});
    },
    7967: function (e, t, r) {
      'use strict';
      r.d(t, {
        O: function () {
          return o;
        },
      });
      const o = (0, r(2784).createContext)(null);
    },
    5403: function (e, t, r) {
      'use strict';
      r.d(t, {
        frameData: function () {
          return o;
        },
      });
      const o = { delta: 0, timestamp: 0, isProcessing: !1 };
    },
    4585: function (e, t, r) {
      'use strict';
      r.d(t, {
        Pn: function () {
          return d;
        },
        Wi: function () {
          return u;
        },
        S6: function () {
          return s;
        },
      });
      var o = r(5403);
      let n = !0,
        a = !1;
      const i = ['read', 'update', 'preRender', 'render', 'postRender'],
        s = i.reduce(
          (e, t) => (
            (e[t] = (function (e) {
              let t = [],
                r = [],
                o = 0,
                n = !1,
                a = !1;
              const i = new WeakSet(),
                s = {
                  schedule: (e, a = !1, s = !1) => {
                    const l = s && n,
                      c = l ? t : r;

                    return (
                      a && i.add(e),
                      -1 === c.indexOf(e) && (c.push(e), l && n && (o = t.length)),
                      e
                    );
                  },
                  cancel: (e) => {
                    const t = r.indexOf(e);

                    -1 !== t && r.splice(t, 1), i.delete(e);
                  },
                  process: (l) => {
                    if (n) a = !0;
                    else {
                      if (
                        ((n = !0), ([t, r] = [r, t]), (r.length = 0), (o = t.length), o)
                      )
                        for (let r = 0; r < o; r++) {
                          const o = t[r];

                          o(l), i.has(o) && (s.schedule(o), e());
                        }
                      (n = !1), a && ((a = !1), s.process(l));
                    }
                  },
                };

              return s;
            })(() => (a = !0))),
            e
          ),
          {},
        ),
        l = (e) => s[e].process(o.frameData),
        c = (e) => {
          (a = !1),
            (o.frameData.delta = n
              ? 1e3 / 60
              : Math.max(Math.min(e - o.frameData.timestamp, 40), 1)),
            (o.frameData.timestamp = e),
            (o.frameData.isProcessing = !0),
            i.forEach(l),
            (o.frameData.isProcessing = !1),
            a && ((n = !1), requestAnimationFrame(c));
        },
        u = i.reduce((e, t) => {
          const r = s[t];

          return (
            (e[t] = (e, t = !1, i = !1) => (
              a ||
                ((a = !0),
                (n = !0),
                o.frameData.isProcessing || requestAnimationFrame(c)),
              r.schedule(e, t, i)
            )),
            e
          );
        }, {});

      function d(e) {
        i.forEach((t) => s[t].cancel(e));
      }
    },
    1885: function (e, t, r) {
      'use strict';
      r.d(t, {
        E: function () {
          return ei;
        },
      });
      var o = r(2784);
      const n = (0, o.createContext)({
          transformPagePoint: (e) => e,
          isStatic: !1,
          reducedMotion: 'never',
        }),
        a = (0, o.createContext)({});
      var i = r(7967),
        s = r(3617);
      const l = (0, o.createContext)({ strict: !1 });

      function c(e) {
        return 'object' == typeof e && Object.prototype.hasOwnProperty.call(e, 'current');
      }

      function u(e) {
        return 'string' == typeof e || Array.isArray(e);
      }

      function d(e) {
        return 'object' == typeof e && 'function' == typeof e.start;
      }
      const h = [
          'animate',
          'whileInView',
          'whileFocus',
          'whileHover',
          'whileTap',
          'whileDrag',
          'exit',
        ],
        f = ['initial', ...h];

      function p(e) {
        return d(e.animate) || f.some((t) => u(e[t]));
      }

      function g(e) {
        return Boolean(p(e) || e.variants);
      }

      function m(e) {
        const { initial: t, animate: r } = (function (e, t) {
          if (p(e)) {
            const { initial: t, animate: r } = e;

            return { initial: !1 === t || u(t) ? t : void 0, animate: u(r) ? r : void 0 };
          }

          return !1 !== e.inherit ? t : {};
        })(e, (0, o.useContext)(a));

        return (0, o.useMemo)(() => ({ initial: t, animate: r }), [v(t), v(r)]);
      }

      function v(e) {
        return Array.isArray(e) ? e.join(' ') : e;
      }
      const y = {
          animation: [
            'animate',
            'variants',
            'whileHover',
            'whileTap',
            'exit',
            'whileInView',
            'whileFocus',
            'whileDrag',
          ],
          exit: ['exit'],
          drag: ['drag', 'dragControls'],
          focus: ['whileFocus'],
          hover: ['whileHover', 'onHoverStart', 'onHoverEnd'],
          tap: ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
          pan: ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
          inView: ['whileInView', 'onViewportEnter', 'onViewportLeave'],
          layout: ['layout', 'layoutId'],
        },
        b = {};

      for (const ri in y) b[ri] = { isEnabled: (e) => y[ri].some((t) => !!e[t]) };
      var k = r(3791),
        B = r(3422);
      const P = (0, o.createContext)({}),
        w = Symbol.for('motionComponentSymbol');

      function S({
        preloadedFeatures: e,
        createVisualElement: t,
        useRender: r,
        useVisualState: u,
        Component: d,
      }) {
        e &&
          (function (e) {
            for (const t in e) b[t] = { ...b[t], ...e[t] };
          })(e);
        const h = (0, o.forwardRef)(function (h, f) {
          let p;
          const g = { ...(0, o.useContext)(n), ...h, layoutId: C(h) },
            { isStatic: v } = g,
            y = m(h),
            b = u(h, v);

          if (!v && k.j) {
            y.visualElement = (function (e, t, r, c) {
              const { visualElement: u } = (0, o.useContext)(a),
                d = (0, o.useContext)(l),
                h = (0, o.useContext)(i.O),
                f = (0, o.useContext)(n).reducedMotion,
                p = (0, o.useRef)();

              (c = c || d.renderer),
                !p.current &&
                  c &&
                  (p.current = c(e, {
                    visualState: t,
                    parent: u,
                    props: r,
                    presenceContext: h,
                    blockInitialAnimation: !!h && !1 === h.initial,
                    reducedMotionConfig: f,
                  }));
              const g = p.current;

              return (
                (0, o.useInsertionEffect)(() => {
                  g && g.update(r, h);
                }),
                (0, s.L)(() => {
                  g && g.render();
                }),
                (0, o.useEffect)(() => {
                  g && g.updateFeatures();
                }),
                (window.HandoffAppearAnimations ? s.L : o.useEffect)(() => {
                  g && g.animationState && g.animationState.animateChanges();
                }),
                g
              );
            })(d, b, g, t);
            const r = (0, o.useContext)(P),
              c = (0, o.useContext)(l).strict;

            y.visualElement && (p = y.visualElement.loadFeatures(g, c, e, r));
          }

          return o.createElement(
            a.Provider,
            { value: y },
            p && y.visualElement
              ? o.createElement(p, { visualElement: y.visualElement, ...g })
              : null,
            r(
              d,
              h,
              (function (e, t, r) {
                return (0, o.useCallback)(
                  (o) => {
                    o && e.mount && e.mount(o),
                      t && (o ? t.mount(o) : t.unmount()),
                      r && ('function' == typeof r ? r(o) : c(r) && (r.current = o));
                  },
                  [t],
                );
              })(b, y.visualElement, f),
              b,
              v,
              y.visualElement,
            ),
          );
        });

        return (h[w] = d), h;
      }

      function C({ layoutId: e }) {
        const t = (0, o.useContext)(B.p).id;

        return t && void 0 !== e ? t + '-' + e : e;
      }

      function x(e) {
        function t(t, r = {}) {
          return S(e(t, r));
        }
        if ('undefined' == typeof Proxy) return t;
        const r = new Map();

        return new Proxy(t, { get: (e, o) => (r.has(o) || r.set(o, t(o)), r.get(o)) });
      }
      const E = [
        'animate',
        'circle',
        'defs',
        'desc',
        'ellipse',
        'g',
        'image',
        'line',
        'filter',
        'marker',
        'mask',
        'metadata',
        'path',
        'pattern',
        'polygon',
        'polyline',
        'rect',
        'stop',
        'switch',
        'symbol',
        'svg',
        'text',
        'tspan',
        'use',
        'view',
      ];

      function T(e) {
        return (
          'string' == typeof e &&
          !e.includes('-') &&
          !!(E.indexOf(e) > -1 || /[A-Z]/.test(e))
        );
      }
      const N = {};
      const F = [
          'transformPerspective',
          'x',
          'y',
          'z',
          'translateX',
          'translateY',
          'translateZ',
          'scale',
          'scaleX',
          'scaleY',
          'rotate',
          'rotateX',
          'rotateY',
          'rotateZ',
          'skew',
          'skewX',
          'skewY',
        ],
        A = new Set(F);

      function L(e, { layout: t, layoutId: r }) {
        return (
          A.has(e) ||
          e.startsWith('origin') ||
          ((t || void 0 !== r) && (!!N[e] || 'opacity' === e))
        );
      }
      const R = (e) => Boolean(e && e.getVelocity),
        D = {
          x: 'translateX',
          y: 'translateY',
          z: 'translateZ',
          transformPerspective: 'perspective',
        },
        H = F.length;
      const M = (e) => (t) => 'string' == typeof t && t.startsWith(e),
        O = M('--'),
        _ = M('var(--'),
        j = (e, t) => (t && 'number' == typeof e ? t.transform(e) : e),
        I = (e, t, r) => Math.min(Math.max(r, e), t),
        V = { test: (e) => 'number' == typeof e, parse: parseFloat, transform: (e) => e },
        z = { ...V, transform: (e) => I(0, 1, e) },
        $ = { ...V, default: 1 },
        W = (e) => Math.round(1e5 * e) / 1e5,
        U = /(-)?([\d]*\.?[\d])+/g,
        G =
          /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        Z =
          /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

      function X(e) {
        return 'string' == typeof e;
      }
      const q = (e) => ({
          test: (t) => X(t) && t.endsWith(e) && 1 === t.split(' ').length,
          parse: parseFloat,
          transform: (t) => `${t}${e}`,
        }),
        K = q('deg'),
        J = q('%'),
        Q = q('px'),
        Y = q('vh'),
        ee = q('vw'),
        te = {
          ...J,
          parse: (e) => J.parse(e) / 100,
          transform: (e) => J.transform(100 * e),
        },
        re = { ...V, transform: Math.round },
        oe = {
          borderWidth: Q,
          borderTopWidth: Q,
          borderRightWidth: Q,
          borderBottomWidth: Q,
          borderLeftWidth: Q,
          borderRadius: Q,
          radius: Q,
          borderTopLeftRadius: Q,
          borderTopRightRadius: Q,
          borderBottomRightRadius: Q,
          borderBottomLeftRadius: Q,
          width: Q,
          maxWidth: Q,
          height: Q,
          maxHeight: Q,
          size: Q,
          top: Q,
          right: Q,
          bottom: Q,
          left: Q,
          padding: Q,
          paddingTop: Q,
          paddingRight: Q,
          paddingBottom: Q,
          paddingLeft: Q,
          margin: Q,
          marginTop: Q,
          marginRight: Q,
          marginBottom: Q,
          marginLeft: Q,
          rotate: K,
          rotateX: K,
          rotateY: K,
          rotateZ: K,
          scale: $,
          scaleX: $,
          scaleY: $,
          scaleZ: $,
          skew: K,
          skewX: K,
          skewY: K,
          distance: Q,
          translateX: Q,
          translateY: Q,
          translateZ: Q,
          x: Q,
          y: Q,
          z: Q,
          perspective: Q,
          transformPerspective: Q,
          opacity: z,
          originX: te,
          originY: te,
          originZ: Q,
          zIndex: re,
          fillOpacity: z,
          strokeOpacity: z,
          numOctaves: re,
        };

      function ne(e, t, r, o) {
        const { style: n, vars: a, transform: i, transformOrigin: s } = e;
        let l = !1,
          c = !1,
          u = !0;

        for (const d in t) {
          const e = t[d];

          if (O(d)) {
            a[d] = e;
            continue;
          }
          const r = oe[d],
            o = j(e, r);

          if (A.has(d)) {
            if (((l = !0), (i[d] = o), !u)) continue;
            e !== (r.default || 0) && (u = !1);
          } else d.startsWith('origin') ? ((c = !0), (s[d] = o)) : (n[d] = o);
        }

        if (
          (t.transform ||
            (l || o
              ? (n.transform = (function (
                  e,
                  { enableHardwareAcceleration: t = !0, allowTransformNone: r = !0 },
                  o,
                  n,
                ) {
                  let a = '';

                  for (let i = 0; i < H; i++) {
                    const t = F[i];

                    void 0 !== e[t] && (a += `${D[t] || t}(${e[t]}) `);
                  }

                  return (
                    t && !e.z && (a += 'translateZ(0)'),
                    (a = a.trim()),
                    n ? (a = n(e, o ? '' : a)) : r && o && (a = 'none'),
                    a
                  );
                })(e.transform, r, u, o))
              : n.transform && (n.transform = 'none')),
          c)
        ) {
          const { originX: e = '50%', originY: t = '50%', originZ: r = 0 } = s;

          n.transformOrigin = `${e} ${t} ${r}`;
        }
      }
      const ae = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });

      function ie(e, t, r) {
        for (const o in t) R(t[o]) || L(o, r) || (e[o] = t[o]);
      }

      function se(e, t, r) {
        const n = {};

        return (
          ie(n, e.style || {}, e),
          Object.assign(
            n,
            (function ({ transformTemplate: e }, t, r) {
              return (0, o.useMemo)(() => {
                const o = ae();

                return (
                  ne(o, t, { enableHardwareAcceleration: !r }, e),
                  Object.assign({}, o.vars, o.style)
                );
              }, [t]);
            })(e, t, r),
          ),
          e.transformValues ? e.transformValues(n) : n
        );
      }

      function le(e, t, r) {
        const o = {},
          n = se(e, t, r);

        return (
          e.drag &&
            !1 !== e.dragListener &&
            ((o.draggable = !1),
            (n.userSelect = n.WebkitUserSelect = n.WebkitTouchCallout = 'none'),
            (n.touchAction =
              !0 === e.drag ? 'none' : 'pan-' + ('x' === e.drag ? 'y' : 'x'))),
          void 0 === e.tabIndex &&
            (e.onTap || e.onTapStart || e.whileTap) &&
            (o.tabIndex = 0),
          (o.style = n),
          o
        );
      }
      const ce = new Set([
        'animate',
        'exit',
        'variants',
        'initial',
        'style',
        'values',
        'variants',
        'transition',
        'transformTemplate',
        'transformValues',
        'custom',
        'inherit',
        'onLayoutAnimationStart',
        'onLayoutAnimationComplete',
        'onLayoutMeasure',
        'onBeforeLayoutMeasure',
        'onAnimationStart',
        'onAnimationComplete',
        'onUpdate',
        'onDragStart',
        'onDrag',
        'onDragEnd',
        'onMeasureDragConstraints',
        'onDirectionLock',
        'onDragTransitionEnd',
        '_dragX',
        '_dragY',
        'onHoverStart',
        'onHoverEnd',
        'onViewportEnter',
        'onViewportLeave',
        'ignoreStrict',
        'viewport',
      ]);

      function ue(e) {
        return (
          e.startsWith('while') ||
          (e.startsWith('drag') && 'draggable' !== e) ||
          e.startsWith('layout') ||
          e.startsWith('onTap') ||
          e.startsWith('onPan') ||
          ce.has(e)
        );
      }
      let de = (e) => !ue(e);

      try {
        (he = require('@emotion/is-prop-valid').default) &&
          (de = (e) => (e.startsWith('on') ? !ue(e) : he(e)));
      } catch (ti) {}
      var he;

      function fe(e, t, r) {
        return 'string' == typeof e ? e : Q.transform(t + r * e);
      }
      const pe = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
        ge = { offset: 'strokeDashoffset', array: 'strokeDasharray' };

      function me(
        e,
        {
          attrX: t,
          attrY: r,
          attrScale: o,
          originX: n,
          originY: a,
          pathLength: i,
          pathSpacing: s = 1,
          pathOffset: l = 0,
          ...c
        },
        u,
        d,
        h,
      ) {
        if ((ne(e, c, u, h), d))
          return void (e.style.viewBox && (e.attrs.viewBox = e.style.viewBox));
        (e.attrs = e.style), (e.style = {});
        const { attrs: f, style: p, dimensions: g } = e;

        f.transform && (g && (p.transform = f.transform), delete f.transform),
          g &&
            (void 0 !== n || void 0 !== a || p.transform) &&
            (p.transformOrigin = (function (e, t, r) {
              return `${fe(t, e.x, e.width)} ${fe(r, e.y, e.height)}`;
            })(g, void 0 !== n ? n : 0.5, void 0 !== a ? a : 0.5)),
          void 0 !== t && (f.x = t),
          void 0 !== r && (f.y = r),
          void 0 !== o && (f.scale = o),
          void 0 !== i &&
            (function (e, t, r = 1, o = 0, n = !0) {
              e.pathLength = 1;
              const a = n ? pe : ge;

              e[a.offset] = Q.transform(-o);
              const i = Q.transform(t),
                s = Q.transform(r);

              e[a.array] = `${i} ${s}`;
            })(f, i, s, l, !1);
      }
      const ve = () => ({ ...ae(), attrs: {} }),
        ye = (e) => 'string' == typeof e && 'svg' === e.toLowerCase();

      function be(e, t, r, n) {
        const a = (0, o.useMemo)(() => {
          const r = ve();

          return (
            me(r, t, { enableHardwareAcceleration: !1 }, ye(n), e.transformTemplate),
            { ...r.attrs, style: { ...r.style } }
          );
        }, [t]);

        if (e.style) {
          const t = {};

          ie(t, e.style, e), (a.style = { ...t, ...a.style });
        }

        return a;
      }

      function ke(e = !1) {
        return (t, r, n, { latestValues: a }, i) => {
          const s = (T(t) ? be : le)(r, a, i, t),
            l = (function (e, t, r) {
              const o = {};

              for (const n in e)
                ('values' === n && 'object' == typeof e.values) ||
                  ((de(n) ||
                    (!0 === r && ue(n)) ||
                    (!t && !ue(n)) ||
                    (e.draggable && n.startsWith('onDrag'))) &&
                    (o[n] = e[n]));

              return o;
            })(r, 'string' == typeof t, e),
            c = { ...l, ...s, ref: n },
            { children: u } = r,
            d = (0, o.useMemo)(() => (R(u) ? u.get() : u), [u]);

          return (0, o.createElement)(t, { ...c, children: d });
        };
      }
      const Be = (e) => e.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

      function Pe(e, { style: t, vars: r }, o, n) {
        Object.assign(e.style, t, n && n.getProjectionStyles(o));
        for (const a in r) e.style.setProperty(a, r[a]);
      }
      const we = new Set([
        'baseFrequency',
        'diffuseConstant',
        'kernelMatrix',
        'kernelUnitLength',
        'keySplines',
        'keyTimes',
        'limitingConeAngle',
        'markerHeight',
        'markerWidth',
        'numOctaves',
        'targetX',
        'targetY',
        'surfaceScale',
        'specularConstant',
        'specularExponent',
        'stdDeviation',
        'tableValues',
        'viewBox',
        'gradientTransform',
        'pathLength',
        'startOffset',
        'textLength',
        'lengthAdjust',
      ]);

      function Se(e, t, r, o) {
        Pe(e, t, void 0, o);
        for (const n in t.attrs) e.setAttribute(we.has(n) ? n : Be(n), t.attrs[n]);
      }

      function Ce(e, t) {
        const { style: r } = e,
          o = {};

        for (const n in r)
          (R(r[n]) || (t.style && R(t.style[n])) || L(n, e)) && (o[n] = r[n]);

        return o;
      }

      function xe(e, t) {
        const r = Ce(e, t);

        for (const o in e)
          if (R(e[o]) || R(t[o])) {
            r[
              -1 !== F.indexOf(o)
                ? 'attr' + o.charAt(0).toUpperCase() + o.substring(1)
                : o
            ] = e[o];
          }

        return r;
      }

      function Ee(e, t, r, o = {}, n = {}) {
        return (
          'function' == typeof t && (t = t(void 0 !== r ? r : e.custom, o, n)),
          'string' == typeof t && (t = e.variants && e.variants[t]),
          'function' == typeof t && (t = t(void 0 !== r ? r : e.custom, o, n)),
          t
        );
      }
      var Te = r(3105);
      const Ne = (e) => Array.isArray(e),
        Fe = (e) => Boolean(e && 'object' == typeof e && e.mix && e.toValue),
        Ae = (e) => (Ne(e) ? e[e.length - 1] || 0 : e);

      function Le(e) {
        const t = R(e) ? e.get() : e;

        return Fe(t) ? t.toValue() : t;
      }

      const Re = (e) => (t, r) => {
        const n = (0, o.useContext)(a),
          s = (0, o.useContext)(i.O),
          l = () =>
            (function (
              { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: r },
              o,
              n,
              a,
            ) {
              const i = { latestValues: De(o, n, a, e), renderState: t() };

              return r && (i.mount = (e) => r(o, e, i)), i;
            })(e, t, n, s);

        return r ? l() : (0, Te.h)(l);
      };

      function De(e, t, r, o) {
        const n = {},
          a = o(e, {});

        for (const d in a) n[d] = Le(a[d]);
        let { initial: i, animate: s } = e;
        const l = p(e),
          c = g(e);

        t &&
          c &&
          !l &&
          !1 !== e.inherit &&
          (void 0 === i && (i = t.initial), void 0 === s && (s = t.animate));
        let u = !!r && !1 === r.initial;

        u = u || !1 === i;
        const h = u ? s : i;

        if (h && 'boolean' != typeof h && !d(h)) {
          (Array.isArray(h) ? h : [h]).forEach((t) => {
            const r = Ee(e, t);

            if (!r) return;
            const { transitionEnd: o, transition: a, ...i } = r;

            for (const e in i) {
              let t = i[e];

              if (Array.isArray(t)) {
                t = t[u ? t.length - 1 : 0];
              }
              null !== t && (n[e] = t);
            }
            for (const e in o) n[e] = o[e];
          });
        }

        return n;
      }
      const He = {
          useVisualState: Re({
            scrapeMotionValuesFromProps: xe,
            createRenderState: ve,
            onMount: (e, t, { renderState: r, latestValues: o }) => {
              try {
                r.dimensions =
                  'function' == typeof t.getBBox
                    ? t.getBBox()
                    : t.getBoundingClientRect();
              } catch (n) {
                r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
              }
              me(
                r,
                o,
                { enableHardwareAcceleration: !1 },
                ye(t.tagName),
                e.transformTemplate,
              ),
                Se(t, r);
            },
          }),
        },
        Me = {
          useVisualState: Re({ scrapeMotionValuesFromProps: Ce, createRenderState: ae }),
        };

      function Oe(e, t, r, o = { passive: !0 }) {
        return e.addEventListener(t, r, o), () => e.removeEventListener(t, r);
      }
      const _e = (e) =>
        'mouse' === e.pointerType
          ? 'number' != typeof e.button || e.button <= 0
          : !1 !== e.isPrimary;

      function je(e, t = 'page') {
        return { point: { x: e[t + 'X'], y: e[t + 'Y'] } };
      }
      const Ie = (e) => (t) => _e(t) && e(t, je(t));

      function Ve(e, t, r, o) {
        return Oe(e, t, Ie(r), o);
      }
      const ze = (e, t) => (r) => t(e(r)),
        $e = (...e) => e.reduce(ze);

      function We(e) {
        let t = null;

        return () => {
          const r = () => {
            t = null;
          };

          return null === t && ((t = e), r);
        };
      }
      const Ue = We('dragHorizontal'),
        Ge = We('dragVertical');

      function Ze(e) {
        let t = !1;

        if ('y' === e) t = Ge();
        else if ('x' === e) t = Ue();
        else {
          const e = Ue(),
            r = Ge();

          e && r
            ? (t = () => {
                e(), r();
              })
            : (e && e(), r && r());
        }

        return t;
      }

      function Xe() {
        const e = Ze(!0);

        return !e || (e(), !1);
      }
      class qe {
        constructor(e) {
          (this.isMounted = !1), (this.node = e);
        }
        update() {}
      }
      var Ke = r(4585);

      function Je(e, t) {
        const r = 'pointer' + (t ? 'enter' : 'leave'),
          o = 'onHover' + (t ? 'Start' : 'End');

        return Ve(
          e.current,
          r,
          (r, n) => {
            if ('touch' === r.type || Xe()) return;
            const a = e.getProps();

            e.animationState &&
              a.whileHover &&
              e.animationState.setActive('whileHover', t),
              a[o] && Ke.Wi.update(() => a[o](r, n));
          },
          { passive: !e.getProps()[o] },
        );
      }
      const Qe = (e, t) => !!t && (e === t || Qe(e, t.parentElement));
      var Ye = r(65);

      function et(e, t) {
        if (!t) return;
        const r = new PointerEvent('pointer' + e);

        t(r, je(r));
      }

      const tt = new WeakMap(),
        rt = new WeakMap(),
        ot = (e) => {
          const t = tt.get(e.target);

          t && t(e);
        },
        nt = (e) => {
          e.forEach(ot);
        };

      function at(e, t, r) {
        const o = (function ({ root: e, ...t }) {
          const r = e || document;

          rt.has(r) || rt.set(r, {});
          const o = rt.get(r),
            n = JSON.stringify(t);

          return o[n] || (o[n] = new IntersectionObserver(nt, { root: e, ...t })), o[n];
        })(t);

        return (
          tt.set(e, r),
          o.observe(e),
          () => {
            tt.delete(e), o.unobserve(e);
          }
        );
      }
      const it = { some: 0, all: 1 };
      const st = {
        inView: {
          Feature: class extends qe {
            constructor() {
              super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
            }
            startObserver() {
              this.unmount();
              const { viewport: e = {} } = this.node.getProps(),
                { root: t, margin: r, amount: o = 'some', once: n } = e,
                a = {
                  root: t ? t.current : void 0,
                  rootMargin: r,
                  threshold: 'number' == typeof o ? o : it[o],
                };

              return at(this.node.current, a, (e) => {
                const { isIntersecting: t } = e;

                if (this.isInView === t) return;
                if (((this.isInView = t), n && !t && this.hasEnteredView)) return;
                t && (this.hasEnteredView = !0),
                  this.node.animationState &&
                    this.node.animationState.setActive('whileInView', t);
                const { onViewportEnter: r, onViewportLeave: o } = this.node.getProps(),
                  a = t ? r : o;

                a && a(e);
              });
            }
            mount() {
              this.startObserver();
            }
            update() {
              if ('undefined' == typeof IntersectionObserver) return;
              const { props: e, prevProps: t } = this.node;

              ['amount', 'margin', 'root'].some(
                (function ({ viewport: e = {} }, { viewport: t = {} } = {}) {
                  return (r) => e[r] !== t[r];
                })(e, t),
              ) && this.startObserver();
            }
            unmount() {}
          },
        },
        tap: {
          Feature: class extends qe {
            constructor() {
              super(...arguments),
                (this.removeStartListeners = Ye.Z),
                (this.removeEndListeners = Ye.Z),
                (this.removeAccessibleListeners = Ye.Z),
                (this.startPointerPress = (e, t) => {
                  if ((this.removeEndListeners(), this.isPressing)) return;
                  const r = this.node.getProps(),
                    o = Ve(
                      window,
                      'pointerup',
                      (e, t) => {
                        if (!this.checkPressEnd()) return;
                        const { onTap: r, onTapCancel: o } = this.node.getProps();

                        Ke.Wi.update(() => {
                          Qe(this.node.current, e.target) ? r && r(e, t) : o && o(e, t);
                        });
                      },
                      { passive: !(r.onTap || r.onPointerUp) },
                    ),
                    n = Ve(window, 'pointercancel', (e, t) => this.cancelPress(e, t), {
                      passive: !(r.onTapCancel || r.onPointerCancel),
                    });

                  (this.removeEndListeners = $e(o, n)), this.startPress(e, t);
                }),
                (this.startAccessiblePress = () => {
                  const e = Oe(this.node.current, 'keydown', (e) => {
                      if ('Enter' !== e.key || this.isPressing) return;
                      this.removeEndListeners(),
                        (this.removeEndListeners = Oe(this.node.current, 'keyup', (e) => {
                          'Enter' === e.key &&
                            this.checkPressEnd() &&
                            et('up', (e, t) => {
                              const { onTap: r } = this.node.getProps();

                              r && Ke.Wi.update(() => r(e, t));
                            });
                        })),
                        et('down', (e, t) => {
                          this.startPress(e, t);
                        });
                    }),
                    t = Oe(this.node.current, 'blur', () => {
                      this.isPressing && et('cancel', (e, t) => this.cancelPress(e, t));
                    });

                  this.removeAccessibleListeners = $e(e, t);
                });
            }
            startPress(e, t) {
              this.isPressing = !0;
              const { onTapStart: r, whileTap: o } = this.node.getProps();

              o &&
                this.node.animationState &&
                this.node.animationState.setActive('whileTap', !0),
                r && Ke.Wi.update(() => r(e, t));
            }
            checkPressEnd() {
              this.removeEndListeners(), (this.isPressing = !1);

              return (
                this.node.getProps().whileTap &&
                  this.node.animationState &&
                  this.node.animationState.setActive('whileTap', !1),
                !Xe()
              );
            }
            cancelPress(e, t) {
              if (!this.checkPressEnd()) return;
              const { onTapCancel: r } = this.node.getProps();

              r && Ke.Wi.update(() => r(e, t));
            }
            mount() {
              const e = this.node.getProps(),
                t = Ve(this.node.current, 'pointerdown', this.startPointerPress, {
                  passive: !(e.onTapStart || e.onPointerStart),
                }),
                r = Oe(this.node.current, 'focus', this.startAccessiblePress);

              this.removeStartListeners = $e(t, r);
            }
            unmount() {
              this.removeStartListeners(),
                this.removeEndListeners(),
                this.removeAccessibleListeners();
            }
          },
        },
        focus: {
          Feature: class extends qe {
            constructor() {
              super(...arguments), (this.isActive = !1);
            }
            onFocus() {
              let e = !1;

              try {
                e = this.node.current.matches(':focus-visible');
              } catch (t) {
                e = !0;
              }
              e &&
                this.node.animationState &&
                (this.node.animationState.setActive('whileFocus', !0),
                (this.isActive = !0));
            }
            onBlur() {
              this.isActive &&
                this.node.animationState &&
                (this.node.animationState.setActive('whileFocus', !1),
                (this.isActive = !1));
            }
            mount() {
              this.unmount = $e(
                Oe(this.node.current, 'focus', () => this.onFocus()),
                Oe(this.node.current, 'blur', () => this.onBlur()),
              );
            }
            unmount() {}
          },
        },
        hover: {
          Feature: class extends qe {
            mount() {
              this.unmount = $e(Je(this.node, !0), Je(this.node, !1));
            }
            unmount() {}
          },
        },
      };

      function lt(e, t) {
        if (!Array.isArray(t)) return !1;
        const r = t.length;

        if (r !== e.length) return !1;
        for (let o = 0; o < r; o++) if (t[o] !== e[o]) return !1;

        return !0;
      }

      function ct(e, t, r) {
        const o = e.getProps();

        return Ee(
          o,
          t,
          void 0 !== r ? r : o.custom,
          (function (e) {
            const t = {};

            return e.values.forEach((e, r) => (t[r] = e.get())), t;
          })(e),
          (function (e) {
            const t = {};

            return e.values.forEach((e, r) => (t[r] = e.getVelocity())), t;
          })(e),
        );
      }
      const ut = 'data-' + Be('framerAppearId');
      var dt = r(7035);
      const ht = (e) => 1e3 * e,
        ft = (e) => e / 1e3,
        pt = !1,
        gt = (e) => Array.isArray(e) && 'number' == typeof e[0];

      function mt(e) {
        return Boolean(
          !e ||
            ('string' == typeof e && yt[e]) ||
            gt(e) ||
            (Array.isArray(e) && e.every(mt)),
        );
      }
      const vt = ([e, t, r, o]) => `cubic-bezier(${e}, ${t}, ${r}, ${o})`,
        yt = {
          linear: 'linear',
          ease: 'ease',
          easeIn: 'ease-in',
          easeOut: 'ease-out',
          easeInOut: 'ease-in-out',
          circIn: vt([0, 0.65, 0.55, 1]),
          circOut: vt([0.55, 0, 1, 0.45]),
          backIn: vt([0.31, 0.01, 0.66, -0.59]),
          backOut: vt([0.33, 1.53, 0.69, 0.99]),
        };

      function bt(e) {
        if (e) return gt(e) ? vt(e) : Array.isArray(e) ? e.map(bt) : yt[e];
      }
      const kt = {
          waapi: () => Object.hasOwnProperty.call(Element.prototype, 'animate'),
        },
        Bt = {},
        Pt = {};

      for (const ri in kt)
        Pt[ri] = () => (void 0 === Bt[ri] && (Bt[ri] = kt[ri]()), Bt[ri]);
      const wt = (e, t, r) =>
          (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e,
        St = 1e-7,
        Ct = 12;

      function xt(e, t, r, o) {
        if (e === t && r === o) return Ye.Z;
        const n = (t) =>
          (function (e, t, r, o, n) {
            let a,
              i,
              s = 0;

            do {
              (i = t + (r - t) / 2), (a = wt(i, o, n) - e), a > 0 ? (r = i) : (t = i);
            } while (Math.abs(a) > St && ++s < Ct);

            return i;
          })(t, 0, 1, e, r);

        return (e) => (0 === e || 1 === e ? e : wt(n(e), t, o));
      }
      const Et = xt(0.42, 0, 1, 1),
        Tt = xt(0, 0, 0.58, 1),
        Nt = xt(0.42, 0, 0.58, 1),
        Ft = (e) => Array.isArray(e) && 'number' != typeof e[0],
        At = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
        Lt = (e) => (t) => 1 - e(1 - t),
        Rt = (e) => 1 - Math.sin(Math.acos(e)),
        Dt = Lt(Rt),
        Ht = At(Dt),
        Mt = xt(0.33, 1.53, 0.69, 0.99),
        Ot = Lt(Mt),
        _t = At(Ot),
        jt = {
          linear: Ye.Z,
          easeIn: Et,
          easeInOut: Nt,
          easeOut: Tt,
          circIn: Rt,
          circInOut: Ht,
          circOut: Dt,
          backIn: Ot,
          backInOut: _t,
          backOut: Mt,
          anticipate: (e) =>
            (e *= 2) < 1 ? 0.5 * Ot(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
        },
        It = (e) => {
          if (Array.isArray(e)) {
            (0, dt.k)(
              4 === e.length,
              'Cubic bezier arrays must contain four numerical values.',
            );
            const [t, r, o, n] = e;

            return xt(t, r, o, n);
          }

          return 'string' == typeof e
            ? ((0, dt.k)(void 0 !== jt[e], `Invalid easing type '${e}'`), jt[e])
            : e;
        },
        Vt = (e, t) => (r) =>
          Boolean(
            (X(r) && Z.test(r) && r.startsWith(e)) ||
              (t && Object.prototype.hasOwnProperty.call(r, t)),
          ),
        zt = (e, t, r) => (o) => {
          if (!X(o)) return o;
          const [n, a, i, s] = o.match(U);

          return {
            [e]: parseFloat(n),
            [t]: parseFloat(a),
            [r]: parseFloat(i),
            alpha: void 0 !== s ? parseFloat(s) : 1,
          };
        },
        $t = { ...V, transform: (e) => Math.round(((e) => I(0, 255, e))(e)) },
        Wt = {
          test: Vt('rgb', 'red'),
          parse: zt('red', 'green', 'blue'),
          transform: ({ red: e, green: t, blue: r, alpha: o = 1 }) =>
            'rgba(' +
            $t.transform(e) +
            ', ' +
            $t.transform(t) +
            ', ' +
            $t.transform(r) +
            ', ' +
            W(z.transform(o)) +
            ')',
        };
      const Ut = {
          test: Vt('#'),
          parse: function (e) {
            let t = '',
              r = '',
              o = '',
              n = '';

            return (
              e.length > 5
                ? ((t = e.substring(1, 3)),
                  (r = e.substring(3, 5)),
                  (o = e.substring(5, 7)),
                  (n = e.substring(7, 9)))
                : ((t = e.substring(1, 2)),
                  (r = e.substring(2, 3)),
                  (o = e.substring(3, 4)),
                  (n = e.substring(4, 5)),
                  (t += t),
                  (r += r),
                  (o += o),
                  (n += n)),
              {
                red: parseInt(t, 16),
                green: parseInt(r, 16),
                blue: parseInt(o, 16),
                alpha: n ? parseInt(n, 16) / 255 : 1,
              }
            );
          },
          transform: Wt.transform,
        },
        Gt = {
          test: Vt('hsl', 'hue'),
          parse: zt('hue', 'saturation', 'lightness'),
          transform: ({ hue: e, saturation: t, lightness: r, alpha: o = 1 }) =>
            'hsla(' +
            Math.round(e) +
            ', ' +
            J.transform(W(t)) +
            ', ' +
            J.transform(W(r)) +
            ', ' +
            W(z.transform(o)) +
            ')',
        },
        Zt = {
          test: (e) => Wt.test(e) || Ut.test(e) || Gt.test(e),
          parse: (e) =>
            Wt.test(e) ? Wt.parse(e) : Gt.test(e) ? Gt.parse(e) : Ut.parse(e),
          transform: (e) =>
            X(e) ? e : e.hasOwnProperty('red') ? Wt.transform(e) : Gt.transform(e),
        },
        Xt = (e, t, r) => -r * e + r * t + e;

      function qt(e, t, r) {
        return (
          r < 0 && (r += 1),
          r > 1 && (r -= 1),
          r < 1 / 6
            ? e + 6 * (t - e) * r
            : r < 0.5
            ? t
            : r < 2 / 3
            ? e + (t - e) * (2 / 3 - r) * 6
            : e
        );
      }
      const Kt = (e, t, r) => {
          const o = e * e;

          return Math.sqrt(Math.max(0, r * (t * t - o) + o));
        },
        Jt = [Ut, Wt, Gt];

      function Qt(e) {
        const t = ((r = e), Jt.find((e) => e.test(r)));
        var r;

        (0, dt.k)(
          Boolean(t),
          `'${e}' is not an animatable color. Use the equivalent color code instead.`,
        );
        let o = t.parse(e);

        return (
          t === Gt &&
            (o = (function ({ hue: e, saturation: t, lightness: r, alpha: o }) {
              (e /= 360), (r /= 100);
              let n = 0,
                a = 0,
                i = 0;

              if ((t /= 100)) {
                const o = r < 0.5 ? r * (1 + t) : r + t - r * t,
                  s = 2 * r - o;

                (n = qt(s, o, e + 1 / 3)), (a = qt(s, o, e)), (i = qt(s, o, e - 1 / 3));
              } else n = a = i = r;

              return {
                red: Math.round(255 * n),
                green: Math.round(255 * a),
                blue: Math.round(255 * i),
                alpha: o,
              };
            })(o)),
          o
        );
      }

      const Yt = (e, t) => {
        const r = Qt(e),
          o = Qt(t),
          n = { ...r };

        return (e) => (
          (n.red = Kt(r.red, o.red, e)),
          (n.green = Kt(r.green, o.green, e)),
          (n.blue = Kt(r.blue, o.blue, e)),
          (n.alpha = Xt(r.alpha, o.alpha, e)),
          Wt.transform(n)
        );
      };
      const er = {
          regex:
            /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
          countKey: 'Vars',
          token: '${v}',
          parse: Ye.Z,
        },
        tr = { regex: G, countKey: 'Colors', token: '${c}', parse: Zt.parse },
        rr = { regex: U, countKey: 'Numbers', token: '${n}', parse: V.parse };

      function or(e, { regex: t, countKey: r, token: o, parse: n }) {
        const a = e.tokenised.match(t);

        a &&
          ((e['num' + r] = a.length),
          (e.tokenised = e.tokenised.replace(t, o)),
          e.values.push(...a.map(n)));
      }

      function nr(e) {
        const t = e.toString(),
          r = {
            value: t,
            tokenised: t,
            values: [],
            numVars: 0,
            numColors: 0,
            numNumbers: 0,
          };

        return r.value.includes('var(--') && or(r, er), or(r, tr), or(r, rr), r;
      }

      function ar(e) {
        return nr(e).values;
      }

      function ir(e) {
        const { values: t, numColors: r, numVars: o, tokenised: n } = nr(e),
          a = t.length;

        return (e) => {
          let t = n;

          for (let n = 0; n < a; n++)
            t =
              n < o
                ? t.replace(er.token, e[n])
                : n < o + r
                ? t.replace(tr.token, Zt.transform(e[n]))
                : t.replace(rr.token, W(e[n]));

          return t;
        };
      }
      const sr = (e) => ('number' == typeof e ? 0 : e);
      const lr = {
          test: function (e) {
            var t, r;

            return (
              isNaN(e) &&
              X(e) &&
              ((null === (t = e.match(U)) || void 0 === t ? void 0 : t.length) || 0) +
                ((null === (r = e.match(G)) || void 0 === r ? void 0 : r.length) || 0) >
                0
            );
          },
          parse: ar,
          createTransformer: ir,
          getAnimatableNone: function (e) {
            const t = ar(e);

            return ir(e)(t.map(sr));
          },
        },
        cr = (e, t) => (r) => `${r > 0 ? t : e}`;

      function ur(e, t) {
        return 'number' == typeof e
          ? (r) => Xt(e, t, r)
          : Zt.test(e)
          ? Yt(e, t)
          : e.startsWith('var(')
          ? cr(e, t)
          : fr(e, t);
      }
      const dr = (e, t) => {
          const r = [...e],
            o = r.length,
            n = e.map((e, r) => ur(e, t[r]));

          return (e) => {
            for (let t = 0; t < o; t++) r[t] = n[t](e);

            return r;
          };
        },
        hr = (e, t) => {
          const r = { ...e, ...t },
            o = {};

          for (const n in r)
            void 0 !== e[n] && void 0 !== t[n] && (o[n] = ur(e[n], t[n]));

          return (e) => {
            for (const t in o) r[t] = o[t](e);

            return r;
          };
        },
        fr = (e, t) => {
          const r = lr.createTransformer(t),
            o = nr(e),
            n = nr(t);

          return o.numVars === n.numVars &&
            o.numColors === n.numColors &&
            o.numNumbers >= n.numNumbers
            ? $e(dr(o.values, n.values), r)
            : ((0, dt.K)(
                !0,
                `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
              ),
              cr(e, t));
        },
        pr = (e, t, r) => {
          const o = t - e;

          return 0 === o ? 1 : (r - e) / o;
        },
        gr = (e, t) => (r) => Xt(e, t, r);

      function mr(e, t, r) {
        const o = [],
          n =
            r ||
            ('number' == typeof (a = e[0])
              ? gr
              : 'string' == typeof a
              ? Zt.test(a)
                ? Yt
                : fr
              : Array.isArray(a)
              ? dr
              : 'object' == typeof a
              ? hr
              : gr);
        var a;
        const i = e.length - 1;

        for (let s = 0; s < i; s++) {
          let r = n(e[s], e[s + 1]);

          if (t) {
            const e = Array.isArray(t) ? t[s] || Ye.Z : t;

            r = $e(e, r);
          }
          o.push(r);
        }

        return o;
      }

      function vr(e, t, { clamp: r = !0, ease: o, mixer: n } = {}) {
        const a = e.length;

        if (
          ((0, dt.k)(
            a === t.length,
            'Both input and output ranges must be the same length',
          ),
          1 === a)
        )
          return () => t[0];
        e[0] > e[a - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));

        const i = mr(t, o, n),
          s = i.length,
          l = (t) => {
            let r = 0;

            if (s > 1) for (; r < e.length - 2 && !(t < e[r + 1]); r++);
            const o = pr(e[r], e[r + 1], t);

            return i[r](o);
          };

        return r ? (t) => l(I(e[0], e[a - 1], t)) : l;
      }

      function yr(e) {
        const t = [0];

        return (
          (function (e, t) {
            const r = e[e.length - 1];

            for (let o = 1; o <= t; o++) {
              const n = pr(0, t, o);

              e.push(Xt(r, 1, n));
            }
          })(t, e.length - 1),
          t
        );
      }

      function br({ duration: e = 300, keyframes: t, times: r, ease: o = 'easeInOut' }) {
        const n = Ft(o) ? o.map(It) : It(o),
          a = { done: !1, value: t[0] },
          i = (function (e, t) {
            return e.map((e) => e * t);
          })(r && r.length === t.length ? r : yr(t), e),
          s = vr(i, t, {
            ease: Array.isArray(n)
              ? n
              : ((l = t), (c = n), l.map(() => c || Nt).splice(0, l.length - 1)),
          });
        var l, c;

        return {
          calculatedDuration: e,
          next: (t) => ((a.value = s(t)), (a.done = t >= e), a),
        };
      }

      function kr(e, t) {
        return t ? e * (1e3 / t) : 0;
      }
      const Br = 5;

      function Pr(e, t, r) {
        const o = Math.max(t - Br, 0);

        return kr(r - e(o), t - o);
      }
      const wr = 0.001,
        Sr = 0.01,
        Cr = 10,
        xr = 0.05,
        Er = 1;

      function Tr({ duration: e = 800, bounce: t = 0.25, velocity: r = 0, mass: o = 1 }) {
        let n, a;

        (0, dt.K)(e <= ht(Cr), 'Spring duration must be 10 seconds or less');
        let i = 1 - t;

        (i = I(xr, Er, i)),
          (e = I(Sr, Cr, ft(e))),
          i < 1
            ? ((n = (t) => {
                const o = t * i,
                  n = o * e,
                  a = o - r,
                  s = Fr(t, i),
                  l = Math.exp(-n);

                return wr - (a / s) * l;
              }),
              (a = (t) => {
                const o = t * i * e,
                  a = o * r + r,
                  s = Math.pow(i, 2) * Math.pow(t, 2) * e,
                  l = Math.exp(-o),
                  c = Fr(Math.pow(t, 2), i);

                return ((-n(t) + wr > 0 ? -1 : 1) * ((a - s) * l)) / c;
              }))
            : ((n = (t) => Math.exp(-t * e) * ((t - r) * e + 1) - wr),
              (a = (t) => Math.exp(-t * e) * (e * e * (r - t))));
        const s = (function (e, t, r) {
          let o = r;

          for (let n = 1; n < Nr; n++) o -= e(o) / t(o);

          return o;
        })(n, a, 5 / e);

        if (((e = ht(e)), isNaN(s))) return { stiffness: 100, damping: 10, duration: e };

        {
          const t = Math.pow(s, 2) * o;

          return { stiffness: t, damping: 2 * i * Math.sqrt(o * t), duration: e };
        }
      }
      const Nr = 12;

      function Fr(e, t) {
        return e * Math.sqrt(1 - t * t);
      }
      const Ar = ['duration', 'bounce'],
        Lr = ['stiffness', 'damping', 'mass'];

      function Rr(e, t) {
        return t.some((t) => void 0 !== e[t]);
      }

      function Dr({ keyframes: e, restDelta: t, restSpeed: r, ...o }) {
        const n = e[0],
          a = e[e.length - 1],
          i = { done: !1, value: n },
          {
            stiffness: s,
            damping: l,
            mass: c,
            velocity: u,
            duration: d,
            isResolvedFromDuration: h,
          } = (function (e) {
            let t = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...e,
            };

            if (!Rr(e, Lr) && Rr(e, Ar)) {
              const r = Tr(e);

              (t = { ...t, ...r, velocity: 0, mass: 1 }), (t.isResolvedFromDuration = !0);
            }

            return t;
          })(o),
          f = u ? -ft(u) : 0,
          p = l / (2 * Math.sqrt(s * c)),
          g = a - n,
          m = ft(Math.sqrt(s / c)),
          v = Math.abs(g) < 5;
        let y;

        if ((r || (r = v ? 0.01 : 2), t || (t = v ? 0.005 : 0.5), p < 1)) {
          const e = Fr(m, p);

          y = (t) => {
            const r = Math.exp(-p * m * t);

            return (
              a - r * (((f + p * m * g) / e) * Math.sin(e * t) + g * Math.cos(e * t))
            );
          };
        } else if (1 === p) y = (e) => a - Math.exp(-m * e) * (g + (f + m * g) * e);
        else {
          const e = m * Math.sqrt(p * p - 1);

          y = (t) => {
            const r = Math.exp(-p * m * t),
              o = Math.min(e * t, 300);

            return a - (r * ((f + p * m * g) * Math.sinh(o) + e * g * Math.cosh(o))) / e;
          };
        }

        return {
          calculatedDuration: (h && d) || null,
          next: (e) => {
            const o = y(e);

            if (h) i.done = e >= d;
            else {
              let n = f;

              0 !== e && (n = p < 1 ? Pr(y, e, o) : 0);
              const s = Math.abs(n) <= r,
                l = Math.abs(a - o) <= t;

              i.done = s && l;
            }

            return (i.value = i.done ? a : o), i;
          },
        };
      }

      function Hr({
        keyframes: e,
        velocity: t = 0,
        power: r = 0.8,
        timeConstant: o = 325,
        bounceDamping: n = 10,
        bounceStiffness: a = 500,
        modifyTarget: i,
        min: s,
        max: l,
        restDelta: c = 0.5,
        restSpeed: u,
      }) {
        const d = e[0],
          h = { done: !1, value: d },
          f = (e) =>
            void 0 === s ? l : void 0 === l || Math.abs(s - e) < Math.abs(l - e) ? s : l;
        let p = r * t;
        const g = d + p,
          m = void 0 === i ? g : i(g);

        m !== g && (p = m - d);

        const v = (e) => -p * Math.exp(-e / o),
          y = (e) => m + v(e),
          b = (e) => {
            const t = v(e),
              r = y(e);

            (h.done = Math.abs(t) <= c), (h.value = h.done ? m : r);
          };
        let k, B;
        const P = (e) => {
          var t;

          ((t = h.value), (void 0 !== s && t < s) || (void 0 !== l && t > l)) &&
            ((k = e),
            (B = Dr({
              keyframes: [h.value, f(h.value)],
              velocity: Pr(y, e, h.value),
              damping: n,
              stiffness: a,
              restDelta: c,
              restSpeed: u,
            })));
        };

        return (
          P(0),
          {
            calculatedDuration: null,
            next: (e) => {
              let t = !1;

              return (
                B || void 0 !== k || ((t = !0), b(e), P(e)),
                void 0 !== k && e > k ? B.next(e - k) : (!t && b(e), h)
              );
            },
          }
        );
      }
      var Mr = r(5403);
      const Or = (e) => {
          const t = ({ timestamp: t }) => e(t);

          return {
            start: () => Ke.Wi.update(t, !0),
            stop: () => (0, Ke.Pn)(t),
            now: () =>
              Mr.frameData.isProcessing ? Mr.frameData.timestamp : performance.now(),
          };
        },
        _r = 2e4;

      function jr(e) {
        let t = 0;
        let r = e.next(t);

        for (; !r.done && t < _r; ) (t += 50), (r = e.next(t));

        return t >= _r ? 1 / 0 : t;
      }
      const Ir = { decay: Hr, inertia: Hr, tween: br, keyframes: br, spring: Dr };

      function Vr({
        autoplay: e = !0,
        delay: t = 0,
        driver: r = Or,
        keyframes: o,
        type: n = 'keyframes',
        repeat: a = 0,
        repeatDelay: i = 0,
        repeatType: s = 'loop',
        onPlay: l,
        onStop: c,
        onComplete: u,
        onUpdate: d,
        ...h
      }) {
        let f,
          p,
          g = 1,
          m = !1;
        const v = () => {
          f && f(),
            (p = new Promise((e) => {
              f = e;
            }));
        };
        let y;

        v();
        const b = Ir[n] || br;
        let k;

        b !== br &&
          'number' != typeof o[0] &&
          ((k = vr([0, 100], o, { clamp: !1 })), (o = [0, 100]));
        const B = b({ ...h, keyframes: o });
        let P;

        'mirror' === s &&
          (P = b({ ...h, keyframes: [...o].reverse(), velocity: -(h.velocity || 0) }));
        let w = 'idle',
          S = null,
          C = null,
          x = null;

        null === B.calculatedDuration && a && (B.calculatedDuration = jr(B));
        const { calculatedDuration: E } = B;
        let T = 1 / 0,
          N = 1 / 0;

        null !== E && ((T = E + i), (N = T * (a + 1) - i));
        let F = 0;
        const A = (e) => {
            if (null === C) return;
            g > 0 && (C = Math.min(C, e)), (F = null !== S ? S : (e - C) * g);
            const r = F - t,
              n = r < 0;

            (F = Math.max(r, 0)), 'finished' === w && null === S && (F = N);
            let l = F,
              c = B;

            if (a) {
              const e = F / T;
              let t = Math.floor(e),
                r = e % 1;

              !r && e >= 1 && (r = 1), 1 === r && t--, (t = Math.min(t, a + 1));
              const o = Boolean(t % 2);

              o &&
                ('reverse' === s
                  ? ((r = 1 - r), i && (r -= i / T))
                  : 'mirror' === s && (c = P));
              let n = I(0, 1, r);

              F > N && (n = 'reverse' === s && o ? 1 : 0), (l = n * T);
            }
            const u = n ? { done: !1, value: o[0] } : c.next(l);

            k && (u.value = k(u.value));
            let { done: h } = u;

            n || null === E || (h = F >= N);
            const f =
              null === S &&
              ('finished' === w || ('running' === w && h) || (g < 0 && F <= 0));

            return d && d(u.value), f && D(), u;
          },
          L = () => {
            y && y.stop(), (y = void 0);
          },
          R = () => {
            (w = 'idle'), L(), v(), (C = x = null);
          },
          D = () => {
            (w = 'finished'), u && u(), L(), v();
          },
          H = () => {
            if (m) return;
            y || (y = r(A));
            const e = y.now();

            l && l(),
              null !== S ? (C = e - S) : (C && 'finished' !== w) || (C = e),
              (x = C),
              (S = null),
              (w = 'running'),
              y.start();
          };

        e && H();
        const M = {
          then(e, t) {
            return p.then(e, t);
          },
          get time() {
            return ft(F);
          },
          set time(e) {
            (e = ht(e)),
              (F = e),
              null === S && y && 0 !== g ? (C = y.now() - e / g) : (S = e);
          },
          get duration() {
            const e = null === B.calculatedDuration ? jr(B) : B.calculatedDuration;

            return ft(e);
          },
          get speed() {
            return g;
          },
          set speed(e) {
            e !== g && y && ((g = e), (M.time = ft(F)));
          },
          get state() {
            return w;
          },
          play: H,
          pause: () => {
            (w = 'paused'), (S = F);
          },
          stop: () => {
            (m = !0), 'idle' !== w && ((w = 'idle'), c && c(), R());
          },
          cancel: () => {
            null !== x && A(x), R();
          },
          complete: () => {
            w = 'finished';
          },
          sample: (e) => ((C = 0), A(e)),
        };

        return M;
      }
      const zr = new Set([
        'opacity',
        'clipPath',
        'filter',
        'transform',
        'backgroundColor',
      ]);

      function $r(e, t, { onUpdate: r, onComplete: o, ...n }) {
        if (
          !(
            Pt.waapi() &&
            zr.has(t) &&
            !n.repeatDelay &&
            'mirror' !== n.repeatType &&
            0 !== n.damping &&
            'inertia' !== n.type
          )
        )
          return !1;
        let a,
          i,
          s = !1;
        const l = () => {
          i = new Promise((e) => {
            a = e;
          });
        };

        l();
        let { keyframes: c, duration: u = 300, ease: d, times: h } = n;

        if (
          ((e, t) => 'spring' === t.type || 'backgroundColor' === e || !mt(t.ease))(t, n)
        ) {
          const e = Vr({ ...n, repeat: 0, delay: 0 });
          let t = { done: !1, value: c[0] };
          const r = [];
          let o = 0;

          for (; !t.done && o < 2e4; ) (t = e.sample(o)), r.push(t.value), (o += 10);
          (h = void 0), (c = r), (u = o - 10), (d = 'linear');
        }

        const f = (function (
            e,
            t,
            r,
            {
              delay: o = 0,
              duration: n,
              repeat: a = 0,
              repeatType: i = 'loop',
              ease: s,
              times: l,
            } = {},
          ) {
            const c = { [t]: r };

            l && (c.offset = l);
            const u = bt(s);

            return (
              Array.isArray(u) && (c.easing = u),
              e.animate(c, {
                delay: o,
                duration: n,
                easing: Array.isArray(u) ? 'linear' : u,
                fill: 'both',
                iterations: a + 1,
                direction: 'reverse' === i ? 'alternate' : 'normal',
              })
            );
          })(e.owner.current, t, c, { ...n, duration: u, ease: d, times: h }),
          p = () => f.cancel(),
          g = () => {
            Ke.Wi.update(p), a(), l();
          };

        return (
          (f.onfinish = () => {
            e.set(
              (function (e, { repeat: t, repeatType: r = 'loop' }) {
                return e[t && 'loop' !== r && t % 2 == 1 ? 0 : e.length - 1];
              })(c, n),
            ),
              o && o(),
              g();
          }),
          {
            then(e, t) {
              return i.then(e, t);
            },
            get time() {
              return ft(f.currentTime || 0);
            },
            set time(e) {
              f.currentTime = ht(e);
            },
            get speed() {
              return f.playbackRate;
            },
            set speed(e) {
              f.playbackRate = e;
            },
            get duration() {
              return ft(u);
            },
            play: () => {
              s || (f.play(), (0, Ke.Pn)(p));
            },
            pause: () => f.pause(),
            stop: () => {
              if (((s = !0), 'idle' === f.playState)) return;
              const { currentTime: t } = f;

              if (t) {
                const r = Vr({ ...n, autoplay: !1 });

                e.setWithVelocity(r.sample(t - 10).value, r.sample(t).value, 10);
              }
              g();
            },
            complete: () => f.finish(),
            cancel: g,
          }
        );
      }
      const Wr = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
        Ur = { type: 'keyframes', duration: 0.8 },
        Gr = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        Zr = (e, { keyframes: t }) =>
          t.length > 2
            ? Ur
            : A.has(e)
            ? e.startsWith('scale')
              ? {
                  type: 'spring',
                  stiffness: 550,
                  damping: 0 === t[1] ? 2 * Math.sqrt(550) : 30,
                  restSpeed: 10,
                }
              : Wr
            : Gr,
        Xr = (e, t) =>
          'zIndex' !== e &&
          (!('number' != typeof t && !Array.isArray(t)) ||
            !(
              'string' != typeof t ||
              (!lr.test(t) && '0' !== t) ||
              t.startsWith('url(')
            )),
        qr = new Set(['brightness', 'contrast', 'saturate', 'opacity']);

      function Kr(e) {
        const [t, r] = e.slice(0, -1).split('(');

        if ('drop-shadow' === t) return e;
        const [o] = r.match(U) || [];

        if (!o) return e;
        const n = r.replace(o, '');
        let a = qr.has(t) ? 1 : 0;

        return o !== r && (a *= 100), t + '(' + a + n + ')';
      }
      const Jr = /([a-z-]*)\(.*?\)/g,
        Qr = {
          ...lr,
          getAnimatableNone: (e) => {
            const t = e.match(Jr);

            return t ? t.map(Kr).join(' ') : e;
          },
        },
        Yr = {
          ...oe,
          color: Zt,
          backgroundColor: Zt,
          outlineColor: Zt,
          fill: Zt,
          stroke: Zt,
          borderColor: Zt,
          borderTopColor: Zt,
          borderRightColor: Zt,
          borderBottomColor: Zt,
          borderLeftColor: Zt,
          filter: Qr,
          WebkitFilter: Qr,
        },
        eo = (e) => Yr[e];

      function to(e, t) {
        let r = eo(e);

        return (
          r !== Qr && (r = lr), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0
        );
      }
      const ro = (e) => /^0[^.\s]+$/.test(e);

      function oo(e) {
        return 'number' == typeof e
          ? 0 === e
          : null !== e
          ? 'none' === e || '0' === e || ro(e)
          : void 0;
      }

      function no(e, t) {
        return e[t] || e.default || e;
      }

      const ao =
        (e, t, r, o = {}) =>
        (n) => {
          const a = no(o, e) || {},
            i = a.delay || o.delay || 0;
          let { elapsed: s = 0 } = o;

          s -= ht(i);
          const l = (function (e, t, r, o) {
              const n = Xr(t, r);
              let a;

              a = Array.isArray(r) ? [...r] : [null, r];
              const i = void 0 !== o.from ? o.from : e.get();
              let s;
              const l = [];

              for (let c = 0; c < a.length; c++)
                null === a[c] && (a[c] = 0 === c ? i : a[c - 1]),
                  oo(a[c]) && l.push(c),
                  'string' == typeof a[c] &&
                    'none' !== a[c] &&
                    '0' !== a[c] &&
                    (s = a[c]);
              if (n && l.length && s)
                for (let c = 0; c < l.length; c++) a[l[c]] = to(t, s);

              return a;
            })(t, e, r, a),
            c = l[0],
            u = l[l.length - 1],
            d = Xr(e, c),
            h = Xr(e, u);

          (0, dt.K)(
            d === h,
            `You are trying to animate ${e} from "${c}" to "${u}". ${c} is not an animatable value - to enable this animation set ${c} to a value animatable to ${u} via the \`style\` property.`,
          );
          let f = {
            keyframes: l,
            velocity: t.getVelocity(),
            ease: 'easeOut',
            ...a,
            delay: -s,
            onUpdate: (e) => {
              t.set(e), a.onUpdate && a.onUpdate(e);
            },
            onComplete: () => {
              n(), a.onComplete && a.onComplete();
            },
          };

          if (
            ((function ({
              when: e,
              delay: t,
              delayChildren: r,
              staggerChildren: o,
              staggerDirection: n,
              repeat: a,
              repeatType: i,
              repeatDelay: s,
              from: l,
              elapsed: c,
              ...u
            }) {
              return !!Object.keys(u).length;
            })(a) || (f = { ...f, ...Zr(e, f) }),
            f.duration && (f.duration = ht(f.duration)),
            f.repeatDelay && (f.repeatDelay = ht(f.repeatDelay)),
            !d || !h || pt || !1 === a.type)
          )
            return (function ({ keyframes: e, delay: t, onUpdate: r, onComplete: o }) {
              const n = () => (
                r && r(e[e.length - 1]),
                o && o(),
                {
                  time: 0,
                  speed: 1,
                  duration: 0,
                  play: Ye.Z,
                  pause: Ye.Z,
                  stop: Ye.Z,
                  then: (e) => (e(), Promise.resolve()),
                  cancel: Ye.Z,
                  complete: Ye.Z,
                }
              );

              return t
                ? Vr({ keyframes: [0, 1], duration: 0, delay: t, onComplete: n })
                : n();
            })(f);

          if (
            t.owner &&
            t.owner.current instanceof HTMLElement &&
            !t.owner.getProps().onUpdate
          ) {
            const r = $r(t, e, f);

            if (r) return r;
          }

          return Vr(f);
        };

      function io(e) {
        return Boolean(R(e) && e.add);
      }

      function so(e, t) {
        -1 === e.indexOf(t) && e.push(t);
      }

      function lo(e, t) {
        const r = e.indexOf(t);

        r > -1 && e.splice(r, 1);
      }
      class co {
        constructor() {
          this.subscriptions = [];
        }
        add(e) {
          return so(this.subscriptions, e), () => lo(this.subscriptions, e);
        }
        notify(e, t, r) {
          const o = this.subscriptions.length;

          if (o)
            if (1 === o) this.subscriptions[0](e, t, r);
            else
              for (let n = 0; n < o; n++) {
                const o = this.subscriptions[n];

                o && o(e, t, r);
              }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
      class uo {
        constructor(e, t = {}) {
          var r;

          (this.version = '10.12.16'),
            (this.timeDelta = 0),
            (this.lastUpdated = 0),
            (this.canTrackVelocity = !1),
            (this.events = {}),
            (this.updateAndNotify = (e, t = !0) => {
              (this.prev = this.current), (this.current = e);
              const { delta: r, timestamp: o } = Mr.frameData;

              this.lastUpdated !== o &&
                ((this.timeDelta = r),
                (this.lastUpdated = o),
                Ke.Wi.postRender(this.scheduleVelocityCheck)),
                this.prev !== this.current &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()),
                t &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.scheduleVelocityCheck = () => Ke.Wi.postRender(this.velocityCheck)),
            (this.velocityCheck = ({ timestamp: e }) => {
              e !== this.lastUpdated &&
                ((this.prev = this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()));
            }),
            (this.hasAnimated = !1),
            (this.prev = this.current = e),
            (this.canTrackVelocity = ((r = this.current), !isNaN(parseFloat(r)))),
            (this.owner = t.owner);
        }
        onChange(e) {
          return this.on('change', e);
        }
        on(e, t) {
          this.events[e] || (this.events[e] = new co());
          const r = this.events[e].add(t);

          return 'change' === e
            ? () => {
                r(),
                  Ke.Wi.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : r;
        }
        clearListeners() {
          for (const e in this.events) this.events[e].clear();
        }
        attach(e, t) {
          (this.passiveEffect = e), (this.stopPassiveEffect = t);
        }
        set(e, t = !0) {
          t && this.passiveEffect
            ? this.passiveEffect(e, this.updateAndNotify)
            : this.updateAndNotify(e, t);
        }
        setWithVelocity(e, t, r) {
          this.set(t), (this.prev = e), (this.timeDelta = r);
        }
        jump(e) {
          this.updateAndNotify(e),
            (this.prev = e),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          return this.canTrackVelocity
            ? kr(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
            : 0;
        }
        start(e) {
          return (
            this.stop(),
            new Promise((t) => {
              (this.hasAnimated = !0),
                (this.animation = e(t)),
                this.events.animationStart && this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete && this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel && this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }

      function ho(e, t) {
        return new uo(e, t);
      }
      const fo = (e) => (t) => t.test(e),
        po = [V, Q, J, K, ee, Y, { test: (e) => 'auto' === e, parse: (e) => e }],
        go = (e) => po.find(fo(e)),
        mo = [...po, Zt, lr],
        vo = (e) => mo.find(fo(e));

      function yo(e, t, r) {
        e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, ho(r));
      }

      function bo(e, t) {
        const r = ct(e, t);
        let {
          transitionEnd: o = {},
          transition: n = {},
          ...a
        } = r ? e.makeTargetAnimatable(r, !1) : {};

        a = { ...a, ...o };

        for (const i in a) {
          yo(e, i, Ae(a[i]));
        }
      }

      function ko(e, t) {
        if (!t) return;

        return (t[e] || t.default || t).from;
      }

      function Bo({ protectedKeys: e, needsAnimating: t }, r) {
        const o = e.hasOwnProperty(r) && !0 !== t[r];

        return (t[r] = !1), o;
      }

      function Po(e, t, { delay: r = 0, transitionOverride: o, type: n } = {}) {
        let {
          transition: a = e.getDefaultTransition(),
          transitionEnd: i,
          ...s
        } = e.makeTargetAnimatable(t);
        const l = e.getValue('willChange');

        o && (a = o);
        const c = [],
          u = n && e.animationState && e.animationState.getState()[n];

        for (const d in s) {
          const t = e.getValue(d),
            o = s[d];

          if (!t || void 0 === o || (u && Bo(u, d))) continue;
          const n = { delay: r, elapsed: 0, ...a };

          if (window.HandoffAppearAnimations && !t.hasAnimated) {
            const r = e.getProps()[ut];

            r && (n.elapsed = window.HandoffAppearAnimations(r, d, t, Ke.Wi));
          }
          t.start(ao(d, t, o, e.shouldReduceMotion && A.has(d) ? { type: !1 } : n));
          const i = t.animation;

          io(l) && (l.add(d), i.then(() => l.remove(d))), c.push(i);
        }

        return (
          i &&
            Promise.all(c).then(() => {
              i && bo(e, i);
            }),
          c
        );
      }

      function wo(e, t, r = {}) {
        const o = ct(e, t, r.custom);
        let { transition: n = e.getDefaultTransition() || {} } = o || {};

        r.transitionOverride && (n = r.transitionOverride);
        const a = o ? () => Promise.all(Po(e, o, r)) : () => Promise.resolve(),
          i =
            e.variantChildren && e.variantChildren.size
              ? (o = 0) => {
                  const {
                    delayChildren: a = 0,
                    staggerChildren: i,
                    staggerDirection: s,
                  } = n;

                  return (function (e, t, r = 0, o = 0, n = 1, a) {
                    const i = [],
                      s = (e.variantChildren.size - 1) * o,
                      l = 1 === n ? (e = 0) => e * o : (e = 0) => s - e * o;

                    return (
                      Array.from(e.variantChildren)
                        .sort(So)
                        .forEach((e, o) => {
                          e.notify('AnimationStart', t),
                            i.push(
                              wo(e, t, { ...a, delay: r + l(o) }).then(() =>
                                e.notify('AnimationComplete', t),
                              ),
                            );
                        }),
                      Promise.all(i)
                    );
                  })(e, t, a + o, i, s, r);
                }
              : () => Promise.resolve(),
          { when: s } = n;

        if (s) {
          const [e, t] = 'beforeChildren' === s ? [a, i] : [i, a];

          return e().then(() => t());
        }

        return Promise.all([a(), i(r.delay)]);
      }

      function So(e, t) {
        return e.sortNodePosition(t);
      }
      const Co = [...h].reverse(),
        xo = h.length;

      function Eo(e) {
        return (t) =>
          Promise.all(
            t.map(({ animation: t, options: r }) =>
              (function (e, t, r = {}) {
                let o;

                if ((e.notify('AnimationStart', t), Array.isArray(t))) {
                  const n = t.map((t) => wo(e, t, r));

                  o = Promise.all(n);
                } else if ('string' == typeof t) o = wo(e, t, r);
                else {
                  const n = 'function' == typeof t ? ct(e, t, r.custom) : t;

                  o = Promise.all(Po(e, n, r));
                }

                return o.then(() => e.notify('AnimationComplete', t));
              })(e, t, r),
            ),
          );
      }

      function To(e) {
        let t = Eo(e);
        const r = {
          animate: Fo(!0),
          whileInView: Fo(),
          whileHover: Fo(),
          whileTap: Fo(),
          whileDrag: Fo(),
          whileFocus: Fo(),
          exit: Fo(),
        };
        let o = !0;
        const n = (t, r) => {
          const o = ct(e, r);

          if (o) {
            const { transition: e, transitionEnd: r, ...n } = o;

            t = { ...t, ...n, ...r };
          }

          return t;
        };

        function a(a, i) {
          const s = e.getProps(),
            l = e.getVariantContext(!0) || {},
            c = [],
            h = new Set();
          let f = {},
            p = 1 / 0;

          for (let t = 0; t < xo; t++) {
            const g = Co[t],
              m = r[g],
              v = void 0 !== s[g] ? s[g] : l[g],
              y = u(v),
              b = g === i ? m.isActive : null;

            !1 === b && (p = t);
            let k = v === l[g] && v !== s[g] && y;

            if (
              (k && o && e.manuallyAnimateOnMount && (k = !1),
              (m.protectedKeys = { ...f }),
              (!m.isActive && null === b) ||
                (!v && !m.prevProp) ||
                d(v) ||
                'boolean' == typeof v)
            )
              continue;
            const B = No(m.prevProp, v);
            let P = B || (g === i && m.isActive && !k && y) || (t > p && y);
            const w = Array.isArray(v) ? v : [v];
            let S = w.reduce(n, {});

            !1 === b && (S = {});

            const { prevResolvedValues: C = {} } = m,
              x = { ...C, ...S },
              E = (e) => {
                (P = !0), h.delete(e), (m.needsAnimating[e] = !0);
              };

            for (const e in x) {
              const t = S[e],
                r = C[e];

              f.hasOwnProperty(e) ||
                (t !== r
                  ? Ne(t) && Ne(r)
                    ? !lt(t, r) || B
                      ? E(e)
                      : (m.protectedKeys[e] = !0)
                    : void 0 !== t
                    ? E(e)
                    : h.add(e)
                  : void 0 !== t && h.has(e)
                  ? E(e)
                  : (m.protectedKeys[e] = !0));
            }
            (m.prevProp = v),
              (m.prevResolvedValues = S),
              m.isActive && (f = { ...f, ...S }),
              o && e.blockInitialAnimation && (P = !1),
              P &&
                !k &&
                c.push(...w.map((e) => ({ animation: e, options: { type: g, ...a } })));
          }

          if (h.size) {
            const t = {};

            h.forEach((r) => {
              const o = e.getBaseTarget(r);

              void 0 !== o && (t[r] = o);
            }),
              c.push({ animation: t });
          }
          let g = Boolean(c.length);

          return (
            o && !1 === s.initial && !e.manuallyAnimateOnMount && (g = !1),
            (o = !1),
            g ? t(c) : Promise.resolve()
          );
        }

        return {
          animateChanges: a,
          setActive: function (t, o, n) {
            var i;

            if (r[t].isActive === o) return Promise.resolve();
            null === (i = e.variantChildren) ||
              void 0 === i ||
              i.forEach((e) => {
                var r;

                return null === (r = e.animationState) || void 0 === r
                  ? void 0
                  : r.setActive(t, o);
              }),
              (r[t].isActive = o);
            const s = a(n, t);

            for (const e in r) r[e].protectedKeys = {};

            return s;
          },
          setAnimateFunction: function (r) {
            t = r(e);
          },
          getState: () => r,
        };
      }

      function No(e, t) {
        return 'string' == typeof t ? t !== e : !!Array.isArray(t) && !lt(t, e);
      }

      function Fo(e = !1) {
        return {
          isActive: e,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      let Ao = 0;
      const Lo = {
          animation: {
            Feature: class extends qe {
              constructor(e) {
                super(e), e.animationState || (e.animationState = To(e));
              }
              updateAnimationControlsSubscription() {
                const { animate: e } = this.node.getProps();

                this.unmount(), d(e) && (this.unmount = e.subscribe(this.node));
              }
              mount() {
                this.updateAnimationControlsSubscription();
              }
              update() {
                const { animate: e } = this.node.getProps(),
                  { animate: t } = this.node.prevProps || {};

                e !== t && this.updateAnimationControlsSubscription();
              }
              unmount() {}
            },
          },
          exit: {
            Feature: class extends qe {
              constructor() {
                super(...arguments), (this.id = Ao++);
              }
              update() {
                if (!this.node.presenceContext) return;
                const {
                    isPresent: e,
                    onExitComplete: t,
                    custom: r,
                  } = this.node.presenceContext,
                  { isPresent: o } = this.node.prevPresenceContext || {};

                if (!this.node.animationState || e === o) return;
                const n = this.node.animationState.setActive('exit', !e, {
                  custom: null != r ? r : this.node.getProps().custom,
                });

                t && !e && n.then(() => t(this.id));
              }
              mount() {
                const { register: e } = this.node.presenceContext || {};

                e && (this.unmount = e(this.id));
              }
              unmount() {}
            },
          },
        },
        Ro = (e, t) => Math.abs(e - t);

      class Do {
        constructor(e, t, { transformPagePoint: r } = {}) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.updatePoint = () => {
              if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
              const e = Oo(this.lastMoveEventInfo, this.history),
                t = null !== this.startEvent,
                r =
                  (function (e, t) {
                    const r = Ro(e.x, t.x),
                      o = Ro(e.y, t.y);

                    return Math.sqrt(r ** 2 + o ** 2);
                  })(e.offset, { x: 0, y: 0 }) >= 3;

              if (!t && !r) return;
              const { point: o } = e,
                { timestamp: n } = Mr.frameData;

              this.history.push({ ...o, timestamp: n });
              const { onStart: a, onMove: i } = this.handlers;

              t ||
                (a && a(this.lastMoveEvent, e), (this.startEvent = this.lastMoveEvent)),
                i && i(this.lastMoveEvent, e);
            }),
            (this.handlePointerMove = (e, t) => {
              (this.lastMoveEvent = e),
                (this.lastMoveEventInfo = Ho(t, this.transformPagePoint)),
                Ke.Wi.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (e, t) => {
              if ((this.end(), !this.lastMoveEvent || !this.lastMoveEventInfo)) return;
              const { onEnd: r, onSessionEnd: o } = this.handlers,
                n = Oo(
                  'pointercancel' === e.type
                    ? this.lastMoveEventInfo
                    : Ho(t, this.transformPagePoint),
                  this.history,
                );

              this.startEvent && r && r(e, n), o && o(e, n);
            }),
            !_e(e))
          )
            return;
          (this.handlers = t), (this.transformPagePoint = r);
          const o = Ho(je(e), this.transformPagePoint),
            { point: n } = o,
            { timestamp: a } = Mr.frameData;

          this.history = [{ ...n, timestamp: a }];
          const { onSessionStart: i } = t;

          i && i(e, Oo(o, this.history)),
            (this.removeListeners = $e(
              Ve(window, 'pointermove', this.handlePointerMove),
              Ve(window, 'pointerup', this.handlePointerUp),
              Ve(window, 'pointercancel', this.handlePointerUp),
            ));
        }
        updateHandlers(e) {
          this.handlers = e;
        }
        end() {
          this.removeListeners && this.removeListeners(), (0, Ke.Pn)(this.updatePoint);
        }
      }

      function Ho(e, t) {
        return t ? { point: t(e.point) } : e;
      }

      function Mo(e, t) {
        return { x: e.x - t.x, y: e.y - t.y };
      }

      function Oo({ point: e }, t) {
        return {
          point: e,
          delta: Mo(e, jo(t)),
          offset: Mo(e, _o(t)),
          velocity: Io(t, 0.1),
        };
      }

      function _o(e) {
        return e[0];
      }

      function jo(e) {
        return e[e.length - 1];
      }

      function Io(e, t) {
        if (e.length < 2) return { x: 0, y: 0 };
        let r = e.length - 1,
          o = null;
        const n = jo(e);

        for (; r >= 0 && ((o = e[r]), !(n.timestamp - o.timestamp > ht(t))); ) r--;
        if (!o) return { x: 0, y: 0 };
        const a = ft(n.timestamp - o.timestamp);

        if (0 === a) return { x: 0, y: 0 };
        const i = { x: (n.x - o.x) / a, y: (n.y - o.y) / a };

        return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i;
      }

      function Vo(e) {
        return e.max - e.min;
      }

      function zo(e, t = 0, r = 0.01) {
        return Math.abs(e - t) <= r;
      }

      function $o(e, t, r, o = 0.5) {
        (e.origin = o),
          (e.originPoint = Xt(t.min, t.max, e.origin)),
          (e.scale = Vo(r) / Vo(t)),
          (zo(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
          (e.translate = Xt(r.min, r.max, e.origin) - e.originPoint),
          (zo(e.translate) || isNaN(e.translate)) && (e.translate = 0);
      }

      function Wo(e, t, r, o) {
        $o(e.x, t.x, r.x, o ? o.originX : void 0),
          $o(e.y, t.y, r.y, o ? o.originY : void 0);
      }

      function Uo(e, t, r) {
        (e.min = r.min + t.min), (e.max = e.min + Vo(t));
      }

      function Go(e, t, r) {
        (e.min = t.min - r.min), (e.max = e.min + Vo(t));
      }

      function Zo(e, t, r) {
        Go(e.x, t.x, r.x), Go(e.y, t.y, r.y);
      }

      function Xo(e, t, r) {
        return {
          min: void 0 !== t ? e.min + t : void 0,
          max: void 0 !== r ? e.max + r - (e.max - e.min) : void 0,
        };
      }

      function qo(e, t) {
        let r = t.min - e.min,
          o = t.max - e.max;

        return t.max - t.min < e.max - e.min && ([r, o] = [o, r]), { min: r, max: o };
      }
      const Ko = 0.35;

      function Jo(e, t, r) {
        return { min: Qo(e, t), max: Qo(e, r) };
      }

      function Qo(e, t) {
        return 'number' == typeof e ? e : e[t] || 0;
      }
      const Yo = () => ({
          x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
        }),
        en = () => ({ x: { min: 0, max: 0 }, y: { min: 0, max: 0 } });

      function tn(e) {
        return [e('x'), e('y')];
      }

      function rn({ top: e, left: t, right: r, bottom: o }) {
        return { x: { min: t, max: r }, y: { min: e, max: o } };
      }

      function on(e) {
        return void 0 === e || 1 === e;
      }

      function nn({ scale: e, scaleX: t, scaleY: r }) {
        return !on(e) || !on(t) || !on(r);
      }

      function an(e) {
        return nn(e) || sn(e) || e.z || e.rotate || e.rotateX || e.rotateY;
      }

      function sn(e) {
        return ln(e.x) || ln(e.y);
      }

      function ln(e) {
        return e && '0%' !== e;
      }

      function cn(e, t, r) {
        return r + t * (e - r);
      }

      function un(e, t, r, o, n) {
        return void 0 !== n && (e = cn(e, n, o)), cn(e, r, o) + t;
      }

      function dn(e, t = 0, r = 1, o, n) {
        (e.min = un(e.min, t, r, o, n)), (e.max = un(e.max, t, r, o, n));
      }

      function hn(e, { x: t, y: r }) {
        dn(e.x, t.translate, t.scale, t.originPoint),
          dn(e.y, r.translate, r.scale, r.originPoint);
      }

      function fn(e) {
        return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
      }

      function pn(e, t) {
        (e.min = e.min + t), (e.max = e.max + t);
      }

      function gn(e, t, [r, o, n]) {
        const a = void 0 !== t[n] ? t[n] : 0.5,
          i = Xt(e.min, e.max, a);

        dn(e, t[r], t[o], i, t.scale);
      }
      const mn = ['x', 'scaleX', 'originX'],
        vn = ['y', 'scaleY', 'originY'];

      function yn(e, t) {
        gn(e.x, t, mn), gn(e.y, t, vn);
      }

      function bn(e, t) {
        return rn(
          (function (e, t) {
            if (!t) return e;
            const r = t({ x: e.left, y: e.top }),
              o = t({ x: e.right, y: e.bottom });

            return { top: r.y, left: r.x, bottom: o.y, right: o.x };
          })(e.getBoundingClientRect(), t),
        );
      }
      const kn = new WeakMap();

      class Bn {
        constructor(e) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = en()),
            (this.visualElement = e);
        }
        start(e, { snapToCursor: t = !1 } = {}) {
          const { presenceContext: r } = this.visualElement;

          if (r && !1 === r.isPresent) return;
          this.panSession = new Do(
            e,
            {
              onSessionStart: (e) => {
                this.stopAnimation(), t && this.snapToCursor(je(e, 'page').point);
              },
              onStart: (e, t) => {
                const { drag: r, dragPropagation: o, onDragStart: n } = this.getProps();

                if (
                  r &&
                  !o &&
                  (this.openGlobalLock && this.openGlobalLock(),
                  (this.openGlobalLock = Ze(r)),
                  !this.openGlobalLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  tn((e) => {
                    let t = this.getAxisMotionValue(e).get() || 0;

                    if (J.test(t)) {
                      const { projection: r } = this.visualElement;

                      if (r && r.layout) {
                        const o = r.layout.layoutBox[e];

                        if (o) {
                          t = Vo(o) * (parseFloat(t) / 100);
                        }
                      }
                    }
                    this.originPoint[e] = t;
                  }),
                  n && Ke.Wi.update(() => n(e, t), !1, !0);
                const { animationState: a } = this.visualElement;

                a && a.setActive('whileDrag', !0);
              },
              onMove: (e, t) => {
                const {
                  dragPropagation: r,
                  dragDirectionLock: o,
                  onDirectionLock: n,
                  onDrag: a,
                } = this.getProps();

                if (!r && !this.openGlobalLock) return;
                const { offset: i } = t;

                if (o && null === this.currentDirection)
                  return (
                    (this.currentDirection = (function (e, t = 10) {
                      let r = null;

                      Math.abs(e.y) > t ? (r = 'y') : Math.abs(e.x) > t && (r = 'x');

                      return r;
                    })(i)),
                    void (null !== this.currentDirection && n && n(this.currentDirection))
                  );
                this.updateAxis('x', t.point, i),
                  this.updateAxis('y', t.point, i),
                  this.visualElement.render(),
                  a && a(e, t);
              },
              onSessionEnd: (e, t) => this.stop(e, t),
            },
            { transformPagePoint: this.visualElement.getTransformPagePoint() },
          );
        }
        stop(e, t) {
          const r = this.isDragging;

          if ((this.cancel(), !r)) return;
          const { velocity: o } = t;

          this.startAnimation(o);
          const { onDragEnd: n } = this.getProps();

          n && Ke.Wi.update(() => n(e, t));
        }
        cancel() {
          this.isDragging = !1;
          const { projection: e, animationState: t } = this.visualElement;

          e && (e.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          const { dragPropagation: r } = this.getProps();

          !r &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            t && t.setActive('whileDrag', !1);
        }
        updateAxis(e, t, r) {
          const { drag: o } = this.getProps();

          if (!r || !Pn(e, o, this.currentDirection)) return;
          const n = this.getAxisMotionValue(e);
          let a = this.originPoint[e] + r[e];

          this.constraints &&
            this.constraints[e] &&
            (a = (function (e, { min: t, max: r }, o) {
              return (
                void 0 !== t && e < t
                  ? (e = o ? Xt(t, e, o.min) : Math.max(e, t))
                  : void 0 !== r && e > r && (e = o ? Xt(r, e, o.max) : Math.min(e, r)),
                e
              );
            })(a, this.constraints[e], this.elastic[e])),
            n.set(a);
        }
        resolveConstraints() {
          const { dragConstraints: e, dragElastic: t } = this.getProps(),
            { layout: r } = this.visualElement.projection || {},
            o = this.constraints;

          e && c(e)
            ? this.constraints || (this.constraints = this.resolveRefConstraints())
            : (this.constraints =
                !(!e || !r) &&
                (function (e, { top: t, left: r, bottom: o, right: n }) {
                  return { x: Xo(e.x, r, n), y: Xo(e.y, t, o) };
                })(r.layoutBox, e)),
            (this.elastic = (function (e = Ko) {
              return (
                !1 === e ? (e = 0) : !0 === e && (e = Ko),
                { x: Jo(e, 'left', 'right'), y: Jo(e, 'top', 'bottom') }
              );
            })(t)),
            o !== this.constraints &&
              r &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              tn((e) => {
                this.getAxisMotionValue(e) &&
                  (this.constraints[e] = (function (e, t) {
                    const r = {};

                    return (
                      void 0 !== t.min && (r.min = t.min - e.min),
                      void 0 !== t.max && (r.max = t.max - e.min),
                      r
                    );
                  })(r.layoutBox[e], this.constraints[e]));
              });
        }
        resolveRefConstraints() {
          const { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();

          if (!e || !c(e)) return !1;
          const r = e.current;

          (0, dt.k)(
            null !== r,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
          );
          const { projection: o } = this.visualElement;

          if (!o || !o.layout) return !1;
          const n = (function (e, t, r) {
            const o = bn(e, r),
              { scroll: n } = t;

            return n && (pn(o.x, n.offset.x), pn(o.y, n.offset.y)), o;
          })(r, o.root, this.visualElement.getTransformPagePoint());
          let a = (function (e, t) {
            return { x: qo(e.x, t.x), y: qo(e.y, t.y) };
          })(o.layout.layoutBox, n);

          if (t) {
            const e = t(
              (function ({ x: e, y: t }) {
                return { top: t.min, right: e.max, bottom: t.max, left: e.min };
              })(a),
            );

            (this.hasMutatedConstraints = !!e), e && (a = rn(e));
          }

          return a;
        }
        startAnimation(e) {
          const {
              drag: t,
              dragMomentum: r,
              dragElastic: o,
              dragTransition: n,
              dragSnapToOrigin: a,
              onDragTransitionEnd: i,
            } = this.getProps(),
            s = this.constraints || {},
            l = tn((i) => {
              if (!Pn(i, t, this.currentDirection)) return;
              let l = (s && s[i]) || {};

              a && (l = { min: 0, max: 0 });
              const c = o ? 200 : 1e6,
                u = o ? 40 : 1e7,
                d = {
                  type: 'inertia',
                  velocity: r ? e[i] : 0,
                  bounceStiffness: c,
                  bounceDamping: u,
                  timeConstant: 750,
                  restDelta: 1,
                  restSpeed: 10,
                  ...n,
                  ...l,
                };

              return this.startAxisValueAnimation(i, d);
            });

          return Promise.all(l).then(i);
        }
        startAxisValueAnimation(e, t) {
          const r = this.getAxisMotionValue(e);

          return r.start(ao(e, r, 0, t));
        }
        stopAnimation() {
          tn((e) => this.getAxisMotionValue(e).stop());
        }
        getAxisMotionValue(e) {
          const t = '_drag' + e.toUpperCase(),
            r = this.visualElement.getProps(),
            o = r[t];

          return (
            o || this.visualElement.getValue(e, (r.initial ? r.initial[e] : void 0) || 0)
          );
        }
        snapToCursor(e) {
          tn((t) => {
            const { drag: r } = this.getProps();

            if (!Pn(t, r, this.currentDirection)) return;
            const { projection: o } = this.visualElement,
              n = this.getAxisMotionValue(t);

            if (o && o.layout) {
              const { min: r, max: a } = o.layout.layoutBox[t];

              n.set(e[t] - Xt(r, a, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          const { drag: e, dragConstraints: t } = this.getProps(),
            { projection: r } = this.visualElement;

          if (!c(t) || !r || !this.constraints) return;
          this.stopAnimation();
          const o = { x: 0, y: 0 };

          tn((e) => {
            const t = this.getAxisMotionValue(e);

            if (t) {
              const r = t.get();

              o[e] = (function (e, t) {
                let r = 0.5;
                const o = Vo(e),
                  n = Vo(t);

                return (
                  n > o
                    ? (r = pr(t.min, t.max - o, e.min))
                    : o > n && (r = pr(e.min, e.max - n, t.min)),
                  I(0, 1, r)
                );
              })({ min: r, max: r }, this.constraints[e]);
            }
          });
          const { transformTemplate: n } = this.visualElement.getProps();

          (this.visualElement.current.style.transform = n ? n({}, '') : 'none'),
            r.root && r.root.updateScroll(),
            r.updateLayout(),
            this.resolveConstraints(),
            tn((t) => {
              if (!Pn(t, e, null)) return;
              const r = this.getAxisMotionValue(t),
                { min: n, max: a } = this.constraints[t];

              r.set(Xt(n, a, o[t]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          kn.set(this.visualElement, this);
          const e = Ve(this.visualElement.current, 'pointerdown', (e) => {
              const { drag: t, dragListener: r = !0 } = this.getProps();

              t && r && this.start(e);
            }),
            t = () => {
              const { dragConstraints: e } = this.getProps();

              c(e) && (this.constraints = this.resolveRefConstraints());
            },
            { projection: r } = this.visualElement,
            o = r.addEventListener('measure', t);

          r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()), t();
          const n = Oe(window, 'resize', () => this.scalePositionWithinConstraints()),
            a = r.addEventListener('didUpdate', ({ delta: e, hasLayoutChanged: t }) => {
              this.isDragging &&
                t &&
                (tn((t) => {
                  const r = this.getAxisMotionValue(t);

                  r &&
                    ((this.originPoint[t] += e[t].translate),
                    r.set(r.get() + e[t].translate));
                }),
                this.visualElement.render());
            });

          return () => {
            n(), e(), o(), a && a();
          };
        }
        getProps() {
          const e = this.visualElement.getProps(),
            {
              drag: t = !1,
              dragDirectionLock: r = !1,
              dragPropagation: o = !1,
              dragConstraints: n = !1,
              dragElastic: a = Ko,
              dragMomentum: i = !0,
            } = e;

          return {
            ...e,
            drag: t,
            dragDirectionLock: r,
            dragPropagation: o,
            dragConstraints: n,
            dragElastic: a,
            dragMomentum: i,
          };
        }
      }

      function Pn(e, t, r) {
        return !((!0 !== t && t !== e) || (null !== r && r !== e));
      }

      const wn = (e) => (t, r) => {
        e && Ke.Wi.update(() => e(t, r));
      };
      const Sn = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };

      function Cn(e, t) {
        return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
      }
      const xn = {
          correct: (e, t) => {
            if (!t.target) return e;

            if ('string' == typeof e) {
              if (!Q.test(e)) return e;
              e = parseFloat(e);
            }

            return `${Cn(e, t.target.x)}% ${Cn(e, t.target.y)}%`;
          },
        },
        En = {
          correct: (e, { treeScale: t, projectionDelta: r }) => {
            const o = e,
              n = lr.parse(e);

            if (n.length > 5) return o;
            const a = lr.createTransformer(e),
              i = 'number' != typeof n[0] ? 1 : 0,
              s = r.x.scale * t.x,
              l = r.y.scale * t.y;

            (n[0 + i] /= s), (n[1 + i] /= l);
            const c = Xt(s, l, 0.5);

            return (
              'number' == typeof n[2 + i] && (n[2 + i] /= c),
              'number' == typeof n[3 + i] && (n[3 + i] /= c),
              a(n)
            );
          },
        };

      class Tn extends o.Component {
        componentDidMount() {
          const {
              visualElement: e,
              layoutGroup: t,
              switchLayoutGroup: r,
              layoutId: o,
            } = this.props,
            { projection: n } = e;
          var a;

          (a = Fn),
            Object.assign(N, a),
            n &&
              (t.group && t.group.add(n),
              r && r.register && o && r.register(n),
              n.root.didUpdate(),
              n.addEventListener('animationComplete', () => {
                this.safeToRemove();
              }),
              n.setOptions({ ...n.options, onExitComplete: () => this.safeToRemove() })),
            (Sn.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(e) {
          const {
              layoutDependency: t,
              visualElement: r,
              drag: o,
              isPresent: n,
            } = this.props,
            a = r.projection;

          return a
            ? ((a.isPresent = n),
              o || e.layoutDependency !== t || void 0 === t
                ? a.willUpdate()
                : this.safeToRemove(),
              e.isPresent !== n &&
                (n
                  ? a.promote()
                  : a.relegate() ||
                    Ke.Wi.postRender(() => {
                      const e = a.getStack();

                      (e && e.members.length) || this.safeToRemove();
                    })),
              null)
            : null;
        }
        componentDidUpdate() {
          const { projection: e } = this.props.visualElement;

          e &&
            (e.root.didUpdate(),
            queueMicrotask(() => {
              !e.currentAnimation && e.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          const { visualElement: e, layoutGroup: t, switchLayoutGroup: r } = this.props,
            { projection: o } = e;

          o &&
            (o.scheduleCheckAfterUnmount(),
            t && t.group && t.group.remove(o),
            r && r.deregister && r.deregister(o));
        }
        safeToRemove() {
          const { safeToRemove: e } = this.props;

          e && e();
        }
        render() {
          return null;
        }
      }

      function Nn(e) {
        const [t, r] = (function () {
            const e = (0, o.useContext)(i.O);

            if (null === e) return [!0, null];
            const { isPresent: t, onExitComplete: r, register: n } = e,
              a = (0, o.useId)();

            return (
              (0, o.useEffect)(() => n(a), []), !t && r ? [!1, () => r && r(a)] : [!0]
            );
          })(),
          n = (0, o.useContext)(B.p);

        return o.createElement(Tn, {
          ...e,
          layoutGroup: n,
          switchLayoutGroup: (0, o.useContext)(P),
          isPresent: t,
          safeToRemove: r,
        });
      }
      const Fn = {
          borderRadius: {
            ...xn,
            applyTo: [
              'borderTopLeftRadius',
              'borderTopRightRadius',
              'borderBottomLeftRadius',
              'borderBottomRightRadius',
            ],
          },
          borderTopLeftRadius: xn,
          borderTopRightRadius: xn,
          borderBottomLeftRadius: xn,
          borderBottomRightRadius: xn,
          boxShadow: En,
        },
        An = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
        Ln = An.length,
        Rn = (e) => ('string' == typeof e ? parseFloat(e) : e),
        Dn = (e) => 'number' == typeof e || Q.test(e);

      function Hn(e, t) {
        return void 0 !== e[t] ? e[t] : e.borderRadius;
      }
      const Mn = _n(0, 0.5, Dt),
        On = _n(0.5, 0.95, Ye.Z);

      function _n(e, t, r) {
        return (o) => (o < e ? 0 : o > t ? 1 : r(pr(e, t, o)));
      }

      function jn(e, t) {
        (e.min = t.min), (e.max = t.max);
      }

      function In(e, t) {
        jn(e.x, t.x), jn(e.y, t.y);
      }

      function Vn(e, t, r, o, n) {
        return (e = cn((e -= t), 1 / r, o)), void 0 !== n && (e = cn(e, 1 / n, o)), e;
      }

      function zn(e, t, [r, o, n], a, i) {
        !(function (e, t = 0, r = 1, o = 0.5, n, a = e, i = e) {
          J.test(t) && ((t = parseFloat(t)), (t = Xt(i.min, i.max, t / 100) - i.min));
          if ('number' != typeof t) return;
          let s = Xt(a.min, a.max, o);

          e === a && (s -= t),
            (e.min = Vn(e.min, t, r, s, n)),
            (e.max = Vn(e.max, t, r, s, n));
        })(e, t[r], t[o], t[n], t.scale, a, i);
      }
      const $n = ['x', 'scaleX', 'originX'],
        Wn = ['y', 'scaleY', 'originY'];

      function Un(e, t, r, o) {
        zn(e.x, t, $n, r ? r.x : void 0, o ? o.x : void 0),
          zn(e.y, t, Wn, r ? r.y : void 0, o ? o.y : void 0);
      }

      function Gn(e) {
        return 0 === e.translate && 1 === e.scale;
      }

      function Zn(e) {
        return Gn(e.x) && Gn(e.y);
      }

      function Xn(e, t) {
        return (
          e.x.min === t.x.min &&
          e.x.max === t.x.max &&
          e.y.min === t.y.min &&
          e.y.max === t.y.max
        );
      }

      function qn(e) {
        return Vo(e.x) / Vo(e.y);
      }
      class Kn {
        constructor() {
          this.members = [];
        }
        add(e) {
          so(this.members, e), e.scheduleRender();
        }
        remove(e) {
          if (
            (lo(this.members, e),
            e === this.prevLead && (this.prevLead = void 0),
            e === this.lead)
          ) {
            const e = this.members[this.members.length - 1];

            e && this.promote(e);
          }
        }
        relegate(e) {
          const t = this.members.findIndex((t) => e === t);

          if (0 === t) return !1;
          let r;

          for (let o = t; o >= 0; o--) {
            const e = this.members[o];

            if (!1 !== e.isPresent) {
              r = e;

              break;
            }
          }

          return !!r && (this.promote(r), !0);
        }
        promote(e, t) {
          const r = this.lead;

          if (e !== r && ((this.prevLead = r), (this.lead = e), e.show(), r)) {
            r.instance && r.scheduleRender(),
              e.scheduleRender(),
              (e.resumeFrom = r),
              t && (e.resumeFrom.preserveOpacity = !0),
              r.snapshot &&
                ((e.snapshot = r.snapshot),
                (e.snapshot.latestValues = r.animationValues || r.latestValues)),
              e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
            const { crossfade: o } = e.options;

            !1 === o && r.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((e) => {
            const { options: t, resumingFrom: r } = e;

            t.onExitComplete && t.onExitComplete(),
              r && r.options.onExitComplete && r.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((e) => {
            e.instance && e.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }

      function Jn(e, t, r) {
        let o = '';
        const n = e.x.translate / t.x,
          a = e.y.translate / t.y;

        if (
          ((n || a) && (o = `translate3d(${n}px, ${a}px, 0) `),
          (1 === t.x && 1 === t.y) || (o += `scale(${1 / t.x}, ${1 / t.y}) `),
          r)
        ) {
          const { rotate: e, rotateX: t, rotateY: n } = r;

          e && (o += `rotate(${e}deg) `),
            t && (o += `rotateX(${t}deg) `),
            n && (o += `rotateY(${n}deg) `);
        }
        const i = e.x.scale * t.x,
          s = e.y.scale * t.y;

        return (1 === i && 1 === s) || (o += `scale(${i}, ${s})`), o || 'none';
      }
      const Qn = (e, t) => e.depth - t.depth;

      class Yn {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(e) {
          so(this.children, e), (this.isDirty = !0);
        }
        remove(e) {
          lo(this.children, e), (this.isDirty = !0);
        }
        forEach(e) {
          this.isDirty && this.children.sort(Qn),
            (this.isDirty = !1),
            this.children.forEach(e);
        }
      }
      const ea = ['', 'X', 'Y', 'Z'];
      let ta = 0;
      const ra = {
        type: 'projectionFrame',
        totalNodes: 0,
        resolvedTargetDeltas: 0,
        recalculatedProjection: 0,
      };

      function oa({
        attachResizeListener: e,
        defaultParent: t,
        measureScroll: r,
        checkIsScrollRoot: o,
        resetTransform: n,
      }) {
        return class {
          constructor(e = {}, r = null == t ? void 0 : t()) {
            (this.id = ta++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (ra.totalNodes = ra.resolvedTargetDeltas = ra.recalculatedProjection = 0),
                  this.nodes.forEach(ia),
                  this.nodes.forEach(fa),
                  this.nodes.forEach(pa),
                  this.nodes.forEach(sa),
                  (function (e) {
                    window.MotionDebug && window.MotionDebug.record(e);
                  })(ra);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = e),
              (this.root = r ? r.root || r : this),
              (this.path = r ? [...r.path, r] : []),
              (this.parent = r),
              (this.depth = r ? r.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Yn());
          }
          addEventListener(e, t) {
            return (
              this.eventHandlers.has(e) || this.eventHandlers.set(e, new co()),
              this.eventHandlers.get(e).add(t)
            );
          }
          notifyListeners(e, ...t) {
            const r = this.eventHandlers.get(e);

            r && r.notify(...t);
          }
          hasListeners(e) {
            return this.eventHandlers.has(e);
          }
          mount(t, r = this.root.hasTreeAnimated) {
            if (this.instance) return;
            var o;

            (this.isSVG = (o = t) instanceof SVGElement && 'svg' !== o.tagName),
              (this.instance = t);
            const { layoutId: n, layout: a, visualElement: i } = this.options;

            if (
              (i && !i.current && i.mount(t),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              r && (a || n) && (this.isLayoutDirty = !0),
              e)
            ) {
              let r;
              const o = () => (this.root.updateBlockedByResize = !1);

              e(t, () => {
                (this.root.updateBlockedByResize = !0),
                  r && r(),
                  (r = (function (e, t) {
                    const r = performance.now(),
                      o = ({ timestamp: n }) => {
                        const a = n - r;

                        a >= t && ((0, Ke.Pn)(o), e(a - t));
                      };

                    return Ke.Wi.read(o, !0), () => (0, Ke.Pn)(o);
                  })(o, 250)),
                  Sn.hasAnimatedSinceResize &&
                    ((Sn.hasAnimatedSinceResize = !1), this.nodes.forEach(ha));
              });
            }
            n && this.root.registerSharedNode(n, this),
              !1 !== this.options.animate &&
                i &&
                (n || a) &&
                this.addEventListener(
                  'didUpdate',
                  ({
                    delta: e,
                    hasLayoutChanged: t,
                    hasRelativeTargetChanged: r,
                    layout: o,
                  }) => {
                    if (this.isTreeAnimationBlocked())
                      return (this.target = void 0), void (this.relativeTarget = void 0);
                    const n = this.options.transition || i.getDefaultTransition() || ka,
                      { onLayoutAnimationStart: a, onLayoutAnimationComplete: s } =
                        i.getProps(),
                      l = !this.targetLayout || !Xn(this.targetLayout, o) || r,
                      c = !t && r;

                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      c ||
                      (t && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(e, c);
                      const t = { ...no(n, 'layout'), onPlay: a, onComplete: s };

                      (i.shouldReduceMotion || this.options.layoutRoot) &&
                        ((t.delay = 0), (t.type = !1)),
                        this.startAnimation(t);
                    } else
                      t || ha(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = o;
                  },
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const e = this.getStack();

            e && e.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              (0, Ke.Pn)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            this.isUpdateBlocked() ||
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(ga),
              this.animationId++);
          }
          getTransformTemplate() {
            const { visualElement: e } = this.options;

            return e && e.getProps().transformTemplate;
          }
          willUpdate(e = !0) {
            if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked()))
              return void (this.options.onExitComplete && this.options.onExitComplete());
            if ((!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty))
              return;
            this.isLayoutDirty = !0;

            for (let n = 0; n < this.path.length; n++) {
              const e = this.path[n];

              (e.shouldResetTransform = !0),
                e.updateScroll('snapshot'),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            const { layoutId: t, layout: r } = this.options;

            if (void 0 === t && !r) return;
            const o = this.getTransformTemplate();

            (this.prevTransformTemplateValue = o ? o(this.latestValues, '') : void 0),
              this.updateSnapshot(),
              e && this.notifyListeners('willUpdate');
          }
          update() {
            this.updateScheduled = !1;
            if (this.isUpdateBlocked())
              return (
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                void this.nodes.forEach(ca)
              );
            this.isUpdating || this.nodes.forEach(ua),
              (this.isUpdating = !1),
              this.nodes.forEach(da),
              this.nodes.forEach(na),
              this.nodes.forEach(aa),
              this.clearAllSnapshots();
            const e = performance.now();

            (Mr.frameData.delta = I(0, 1e3 / 60, e - Mr.frameData.timestamp)),
              (Mr.frameData.timestamp = e),
              (Mr.frameData.isProcessing = !0),
              Ke.S6.update.process(Mr.frameData),
              Ke.S6.preRender.process(Mr.frameData),
              Ke.S6.render.process(Mr.frameData),
              (Mr.frameData.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
          }
          clearAllSnapshots() {
            this.nodes.forEach(la), this.sharedNodes.forEach(ma);
          }
          scheduleUpdateProjection() {
            Ke.Wi.preRender(this.updateProjection, !1, !0);
          }
          scheduleCheckAfterUnmount() {
            Ke.Wi.postRender(() => {
              this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (!this.instance) return;
            if (
              (this.updateScroll(),
              !(
                (this.options.alwaysMeasureLayout && this.isLead()) ||
                this.isLayoutDirty
              ))
            )
              return;

            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let r = 0; r < this.path.length; r++) {
                this.path[r].updateScroll();
              }
            const e = this.layout;

            (this.layout = this.measure(!1)),
              (this.layoutCorrected = en()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners('measure', this.layout.layoutBox);
            const { visualElement: t } = this.options;

            t &&
              t.notify('LayoutMeasure', this.layout.layoutBox, e ? e.layoutBox : void 0);
          }
          updateScroll(e = 'measure') {
            let t = Boolean(this.options.layoutScroll && this.instance);

            this.scroll &&
              this.scroll.animationId === this.root.animationId &&
              this.scroll.phase === e &&
              (t = !1),
              t &&
                (this.scroll = {
                  animationId: this.root.animationId,
                  phase: e,
                  isRoot: o(this.instance),
                  offset: r(this.instance),
                });
          }
          resetTransform() {
            if (!n) return;
            const e = this.isLayoutDirty || this.shouldResetTransform,
              t = this.projectionDelta && !Zn(this.projectionDelta),
              r = this.getTransformTemplate(),
              o = r ? r(this.latestValues, '') : void 0,
              a = o !== this.prevTransformTemplateValue;

            e &&
              (t || an(this.latestValues) || a) &&
              (n(this.instance, o),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(e = !0) {
            const t = this.measurePageBox();
            let r = this.removeElementScroll(t);
            var o;

            return (
              e && (r = this.removeTransform(r)),
              Ba((o = r).x),
              Ba(o.y),
              {
                animationId: this.root.animationId,
                measuredBox: t,
                layoutBox: r,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            const { visualElement: e } = this.options;

            if (!e) return en();
            const t = e.measureViewportBox(),
              { scroll: r } = this.root;

            return r && (pn(t.x, r.offset.x), pn(t.y, r.offset.y)), t;
          }
          removeElementScroll(e) {
            const t = en();

            In(t, e);

            for (let r = 0; r < this.path.length; r++) {
              const o = this.path[r],
                { scroll: n, options: a } = o;

              if (o !== this.root && n && a.layoutScroll) {
                if (n.isRoot) {
                  In(t, e);
                  const { scroll: r } = this.root;

                  r && (pn(t.x, -r.offset.x), pn(t.y, -r.offset.y));
                }
                pn(t.x, n.offset.x), pn(t.y, n.offset.y);
              }
            }

            return t;
          }
          applyTransform(e, t = !1) {
            const r = en();

            In(r, e);

            for (let o = 0; o < this.path.length; o++) {
              const e = this.path[o];

              !t &&
                e.options.layoutScroll &&
                e.scroll &&
                e !== e.root &&
                yn(r, { x: -e.scroll.offset.x, y: -e.scroll.offset.y }),
                an(e.latestValues) && yn(r, e.latestValues);
            }

            return an(this.latestValues) && yn(r, this.latestValues), r;
          }
          removeTransform(e) {
            const t = en();

            In(t, e);

            for (let r = 0; r < this.path.length; r++) {
              const e = this.path[r];

              if (!e.instance) continue;
              if (!an(e.latestValues)) continue;
              nn(e.latestValues) && e.updateSnapshot();
              const o = en();

              In(o, e.measurePageBox()),
                Un(t, e.latestValues, e.snapshot ? e.snapshot.layoutBox : void 0, o);
            }

            return an(this.latestValues) && Un(t, this.latestValues), t;
          }
          setTargetDelta(e) {
            (this.targetDelta = e),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(e) {
            this.options = {
              ...this.options,
              ...e,
              crossfade: void 0 === e.crossfade || e.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== Mr.frameData.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(e = !1) {
            var t;
            const r = this.getLead();

            this.isProjectionDirty || (this.isProjectionDirty = r.isProjectionDirty),
              this.isTransformDirty || (this.isTransformDirty = r.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = r.isSharedProjectionDirty);
            const o = Boolean(this.resumingFrom) || this !== r;

            if (
              !(
                e ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget
              )
            )
              return;
            const { layout: n, layoutId: a } = this.options;

            if (this.layout && (n || a)) {
              if (
                ((this.resolvedRelativeTargetAt = Mr.frameData.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                const e = this.getClosestProjectingParent();

                e && e.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = e),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = en()),
                    (this.relativeTargetOrigin = en()),
                    Zo(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      e.layout.layoutBox,
                    ),
                    In(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }

              if (this.relativeTarget || this.targetDelta) {
                var i, s, l;

                if (
                  (this.target ||
                    ((this.target = en()), (this.targetWithTransforms = en())),
                  this.relativeTarget &&
                  this.relativeTargetOrigin &&
                  this.relativeParent &&
                  this.relativeParent.target
                    ? (this.forceRelativeParentToResolveTarget(),
                      (i = this.target),
                      (s = this.relativeTarget),
                      (l = this.relativeParent.target),
                      Uo(i.x, s.x, l.x),
                      Uo(i.y, s.y, l.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(this.layout.layoutBox))
                        : In(this.target, this.layout.layoutBox),
                      hn(this.target, this.targetDelta))
                    : In(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  const e = this.getClosestProjectingParent();

                  e &&
                  Boolean(e.resumingFrom) === Boolean(this.resumingFrom) &&
                  !e.options.layoutScroll &&
                  e.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = e),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = en()),
                      (this.relativeTargetOrigin = en()),
                      Zo(this.relativeTargetOrigin, this.target, e.target),
                      In(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                ra.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            if (
              this.parent &&
              !nn(this.parent.latestValues) &&
              !sn(this.parent.latestValues)
            )
              return this.parent.isProjecting()
                ? this.parent
                : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return Boolean(
              (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
                this.layout,
            );
          }
          calcProjection() {
            var e;
            const t = this.getLead(),
              r = Boolean(this.resumingFrom) || this !== t;
            let o = !0;

            if (
              ((this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty)) &&
                (o = !1),
              r && (this.isSharedProjectionDirty || this.isTransformDirty) && (o = !1),
              this.resolvedRelativeTargetAt === Mr.frameData.timestamp && (o = !1),
              o)
            )
              return;
            const { layout: n, layoutId: a } = this.options;

            if (
              ((this.isTreeAnimating = Boolean(
                (this.parent && this.parent.isTreeAnimating) ||
                  this.currentAnimation ||
                  this.pendingAnimation,
              )),
              this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || (!n && !a))
            )
              return;
            In(this.layoutCorrected, this.layout.layoutBox);
            const i = this.treeScale.x,
              s = this.treeScale.y;

            !(function (e, t, r, o = !1) {
              const n = r.length;

              if (!n) return;
              let a, i;

              t.x = t.y = 1;

              for (let s = 0; s < n; s++) {
                (a = r[s]), (i = a.projectionDelta);
                const n = a.instance;

                (n && n.style && 'contents' === n.style.display) ||
                  (o &&
                    a.options.layoutScroll &&
                    a.scroll &&
                    a !== a.root &&
                    yn(e, { x: -a.scroll.offset.x, y: -a.scroll.offset.y }),
                  i && ((t.x *= i.x.scale), (t.y *= i.y.scale), hn(e, i)),
                  o && an(a.latestValues) && yn(e, a.latestValues));
              }
              (t.x = fn(t.x)), (t.y = fn(t.y));
            })(this.layoutCorrected, this.treeScale, this.path, r),
              !t.layout ||
                t.target ||
                (1 === this.treeScale.x && 1 === this.treeScale.y) ||
                (t.target = t.layout.layoutBox);
            const { target: l } = t;

            if (!l)
              return void (
                this.projectionTransform &&
                ((this.projectionDelta = Yo()),
                (this.projectionTransform = 'none'),
                this.scheduleRender())
              );
            this.projectionDelta ||
              ((this.projectionDelta = Yo()), (this.projectionDeltaWithTransform = Yo()));
            const c = this.projectionTransform;

            Wo(this.projectionDelta, this.layoutCorrected, l, this.latestValues),
              (this.projectionTransform = Jn(this.projectionDelta, this.treeScale)),
              (this.projectionTransform === c &&
                this.treeScale.x === i &&
                this.treeScale.y === s) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners('projectionUpdate', l)),
              ra.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(e = !0) {
            if ((this.options.scheduleRender && this.options.scheduleRender(), e)) {
              const e = this.getStack();

              e && e.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          setAnimationOrigin(e, t = !1) {
            const r = this.snapshot,
              o = r ? r.latestValues : {},
              n = { ...this.latestValues },
              a = Yo();

            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !t);
            const i = en(),
              s = (r ? r.source : void 0) !== (this.layout ? this.layout.source : void 0),
              l = this.getStack(),
              c = !l || l.members.length <= 1,
              u = Boolean(
                s && !c && !0 === this.options.crossfade && !this.path.some(ba),
              );
            let d;

            (this.animationProgress = 0),
              (this.mixTargetDelta = (t) => {
                const r = t / 1e3;
                var l, h, f, p;

                va(a.x, e.x, r),
                  va(a.y, e.y, r),
                  this.setTargetDelta(a),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout &&
                    (Zo(i, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                    (l = this.relativeTarget),
                    (h = this.relativeTargetOrigin),
                    (f = i),
                    (p = r),
                    ya(l.x, h.x, f.x, p),
                    ya(l.y, h.y, f.y, p),
                    d && Xn(this.relativeTarget, d) && (this.isProjectionDirty = !1),
                    d || (d = en()),
                    In(d, this.relativeTarget)),
                  s &&
                    ((this.animationValues = n),
                    (function (e, t, r, o, n, a) {
                      n
                        ? ((e.opacity = Xt(
                            0,
                            void 0 !== r.opacity ? r.opacity : 1,
                            Mn(o),
                          )),
                          (e.opacityExit = Xt(
                            void 0 !== t.opacity ? t.opacity : 1,
                            0,
                            On(o),
                          )))
                        : a &&
                          (e.opacity = Xt(
                            void 0 !== t.opacity ? t.opacity : 1,
                            void 0 !== r.opacity ? r.opacity : 1,
                            o,
                          ));

                      for (let i = 0; i < Ln; i++) {
                        const n = `border${An[i]}Radius`;
                        let a = Hn(t, n),
                          s = Hn(r, n);

                        (void 0 === a && void 0 === s) ||
                          (a || (a = 0),
                          s || (s = 0),
                          0 === a || 0 === s || Dn(a) === Dn(s)
                            ? ((e[n] = Math.max(Xt(Rn(a), Rn(s), o), 0)),
                              (J.test(s) || J.test(a)) && (e[n] += '%'))
                            : (e[n] = s));
                      }
                      (t.rotate || r.rotate) &&
                        (e.rotate = Xt(t.rotate || 0, r.rotate || 0, o));
                    })(n, o, this.latestValues, r, u, c)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = r);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(e) {
            this.notifyListeners('animationStart'),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, Ke.Pn)(this.pendingAnimation), (this.pendingAnimation = void 0)),
              (this.pendingAnimation = Ke.Wi.update(() => {
                (Sn.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (e, t, r) {
                    const o = R(e) ? e : ho(e);

                    return o.start(ao('', o, t, r)), o.animation;
                  })(0, 1e3, {
                    ...e,
                    onUpdate: (t) => {
                      this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t);
                    },
                    onComplete: () => {
                      e.onComplete && e.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation = this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            const e = this.getStack();

            e && e.exitAnimationComplete(),
              (this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
              this.notifyListeners('animationComplete');
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            const e = this.getLead();
            let { targetWithTransforms: t, target: r, layout: o, latestValues: n } = e;

            if (t && r && o) {
              if (
                this !== e &&
                this.layout &&
                o &&
                Pa(this.options.animationType, this.layout.layoutBox, o.layoutBox)
              ) {
                r = this.target || en();
                const t = Vo(this.layout.layoutBox.x);

                (r.x.min = e.target.x.min), (r.x.max = r.x.min + t);
                const o = Vo(this.layout.layoutBox.y);

                (r.y.min = e.target.y.min), (r.y.max = r.y.min + o);
              }
              In(t, r),
                yn(t, n),
                Wo(this.projectionDeltaWithTransform, this.layoutCorrected, t, n);
            }
          }
          registerSharedNode(e, t) {
            this.sharedNodes.has(e) || this.sharedNodes.set(e, new Kn());
            this.sharedNodes.get(e).add(t);
            const r = t.options.initialPromotionConfig;

            t.promote({
              transition: r ? r.transition : void 0,
              preserveFollowOpacity:
                r && r.shouldPreserveFollowOpacity
                  ? r.shouldPreserveFollowOpacity(t)
                  : void 0,
            });
          }
          isLead() {
            const e = this.getStack();

            return !e || e.lead === this;
          }
          getLead() {
            var e;
            const { layoutId: t } = this.options;

            return (
              (t && (null === (e = this.getStack()) || void 0 === e ? void 0 : e.lead)) ||
              this
            );
          }
          getPrevLead() {
            var e;
            const { layoutId: t } = this.options;

            return t
              ? null === (e = this.getStack()) || void 0 === e
                ? void 0
                : e.prevLead
              : void 0;
          }
          getStack() {
            const { layoutId: e } = this.options;

            if (e) return this.root.sharedNodes.get(e);
          }
          promote({ needsReset: e, transition: t, preserveFollowOpacity: r } = {}) {
            const o = this.getStack();

            o && o.promote(this, r),
              e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              t && this.setOptions({ transition: t });
          }
          relegate() {
            const e = this.getStack();

            return !!e && e.relegate(this);
          }
          resetRotation() {
            const { visualElement: e } = this.options;

            if (!e) return;
            let t = !1;
            const { latestValues: r } = e;

            if (((r.rotate || r.rotateX || r.rotateY || r.rotateZ) && (t = !0), !t))
              return;
            const o = {};

            for (let n = 0; n < ea.length; n++) {
              const t = 'rotate' + ea[n];

              r[t] && ((o[t] = r[t]), e.setStaticValue(t, 0));
            }
            e.render();
            for (const n in o) e.setStaticValue(n, o[n]);
            e.scheduleRender();
          }
          getProjectionStyles(e = {}) {
            var t, r;
            const o = {};

            if (!this.instance || this.isSVG) return o;
            if (!this.isVisible) return { visibility: 'hidden' };
            o.visibility = '';
            const n = this.getTransformTemplate();

            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (o.opacity = ''),
                (o.pointerEvents = Le(e.pointerEvents) || ''),
                (o.transform = n ? n(this.latestValues, '') : 'none'),
                o
              );
            const a = this.getLead();

            if (!this.projectionDelta || !this.layout || !a.target) {
              const t = {};

              return (
                this.options.layoutId &&
                  ((t.opacity =
                    void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1),
                  (t.pointerEvents = Le(e.pointerEvents) || '')),
                this.hasProjected &&
                  !an(this.latestValues) &&
                  ((t.transform = n ? n({}, '') : 'none'), (this.hasProjected = !1)),
                t
              );
            }
            const i = a.animationValues || a.latestValues;

            this.applyTransformsToTarget(),
              (o.transform = Jn(this.projectionDeltaWithTransform, this.treeScale, i)),
              n && (o.transform = n(i, o.transform));
            const { x: s, y: l } = this.projectionDelta;

            (o.transformOrigin = `${100 * s.origin}% ${100 * l.origin}% 0`),
              a.animationValues
                ? (o.opacity =
                    a === this
                      ? null !==
                          (r =
                            null !== (t = i.opacity) && void 0 !== t
                              ? t
                              : this.latestValues.opacity) && void 0 !== r
                        ? r
                        : 1
                      : this.preserveOpacity
                      ? this.latestValues.opacity
                      : i.opacityExit)
                : (o.opacity =
                    a === this
                      ? void 0 !== i.opacity
                        ? i.opacity
                        : ''
                      : void 0 !== i.opacityExit
                      ? i.opacityExit
                      : 0);

            for (const c in N) {
              if (void 0 === i[c]) continue;
              const { correct: e, applyTo: t } = N[c],
                r = 'none' === o.transform ? i[c] : e(i[c], a);

              if (t) {
                const e = t.length;

                for (let n = 0; n < e; n++) o[t[n]] = r;
              } else o[c] = r;
            }

            return (
              this.options.layoutId &&
                (o.pointerEvents = a === this ? Le(e.pointerEvents) || '' : 'none'),
              o
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((e) => {
              var t;

              return null === (t = e.currentAnimation) || void 0 === t
                ? void 0
                : t.stop();
            }),
              this.root.nodes.forEach(ca),
              this.root.sharedNodes.clear();
          }
        };
      }

      function na(e) {
        e.updateLayout();
      }

      function aa(e) {
        var t;
        const r =
          (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) ||
          e.snapshot;

        if (e.isLead() && e.layout && r && e.hasListeners('didUpdate')) {
          const { layoutBox: t, measuredBox: o } = e.layout,
            { animationType: n } = e.options,
            a = r.source !== e.layout.source;

          'size' === n
            ? tn((e) => {
                const o = a ? r.measuredBox[e] : r.layoutBox[e],
                  n = Vo(o);

                (o.min = t[e].min), (o.max = o.min + n);
              })
            : Pa(n, r.layoutBox, t) &&
              tn((o) => {
                const n = a ? r.measuredBox[o] : r.layoutBox[o],
                  i = Vo(t[o]);

                (n.max = n.min + i),
                  e.relativeTarget &&
                    !e.currentAnimation &&
                    ((e.isProjectionDirty = !0),
                    (e.relativeTarget[o].max = e.relativeTarget[o].min + i));
              });
          const i = Yo();

          Wo(i, t, r.layoutBox);
          const s = Yo();

          a ? Wo(s, e.applyTransform(o, !0), r.measuredBox) : Wo(s, t, r.layoutBox);
          const l = !Zn(i);
          let c = !1;

          if (!e.resumeFrom) {
            const o = e.getClosestProjectingParent();

            if (o && !o.resumeFrom) {
              const { snapshot: n, layout: a } = o;

              if (n && a) {
                const i = en();

                Zo(i, r.layoutBox, n.layoutBox);
                const s = en();

                Zo(s, t, a.layoutBox),
                  Xn(i, s) || (c = !0),
                  o.options.layoutRoot &&
                    ((e.relativeTarget = s),
                    (e.relativeTargetOrigin = i),
                    (e.relativeParent = o));
              }
            }
          }
          e.notifyListeners('didUpdate', {
            layout: t,
            snapshot: r,
            delta: s,
            layoutDelta: i,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: c,
          });
        } else if (e.isLead()) {
          const { onExitComplete: t } = e.options;

          t && t();
        }
        e.options.transition = void 0;
      }

      function ia(e) {
        ra.totalNodes++,
          e.parent &&
            (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
            e.isSharedProjectionDirty ||
              (e.isSharedProjectionDirty = Boolean(
                e.isProjectionDirty ||
                  e.parent.isProjectionDirty ||
                  e.parent.isSharedProjectionDirty,
              )),
            e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
      }

      function sa(e) {
        e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
      }

      function la(e) {
        e.clearSnapshot();
      }

      function ca(e) {
        e.clearMeasurements();
      }

      function ua(e) {
        e.isLayoutDirty = !1;
      }

      function da(e) {
        const { visualElement: t } = e.options;

        t && t.getProps().onBeforeLayoutMeasure && t.notify('BeforeLayoutMeasure'),
          e.resetTransform();
      }

      function ha(e) {
        e.finishAnimation(),
          (e.targetDelta = e.relativeTarget = e.target = void 0),
          (e.isProjectionDirty = !0);
      }

      function fa(e) {
        e.resolveTargetDelta();
      }

      function pa(e) {
        e.calcProjection();
      }

      function ga(e) {
        e.resetRotation();
      }

      function ma(e) {
        e.removeLeadSnapshot();
      }

      function va(e, t, r) {
        (e.translate = Xt(t.translate, 0, r)),
          (e.scale = Xt(t.scale, 1, r)),
          (e.origin = t.origin),
          (e.originPoint = t.originPoint);
      }

      function ya(e, t, r, o) {
        (e.min = Xt(t.min, r.min, o)), (e.max = Xt(t.max, r.max, o));
      }

      function ba(e) {
        return e.animationValues && void 0 !== e.animationValues.opacityExit;
      }
      const ka = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };

      function Ba(e) {
        (e.min = Math.round(e.min)), (e.max = Math.round(e.max));
      }

      function Pa(e, t, r) {
        return 'position' === e || ('preserve-aspect' === e && !zo(qn(t), qn(r), 0.2));
      }
      const wa = oa({
          attachResizeListener: (e, t) => Oe(e, 'resize', t),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        Sa = { current: void 0 },
        Ca = oa({
          measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
          defaultParent: () => {
            if (!Sa.current) {
              const e = new wa({});

              e.mount(window), e.setOptions({ layoutScroll: !0 }), (Sa.current = e);
            }

            return Sa.current;
          },
          resetTransform: (e, t) => {
            e.style.transform = void 0 !== t ? t : 'none';
          },
          checkIsScrollRoot: (e) =>
            Boolean('fixed' === window.getComputedStyle(e).position),
        }),
        xa = {
          pan: {
            Feature: class extends qe {
              constructor() {
                super(...arguments), (this.removePointerDownListener = Ye.Z);
              }
              onPointerDown(e) {
                this.session = new Do(e, this.createPanHandlers(), {
                  transformPagePoint: this.node.getTransformPagePoint(),
                });
              }
              createPanHandlers() {
                const {
                  onPanSessionStart: e,
                  onPanStart: t,
                  onPan: r,
                  onPanEnd: o,
                } = this.node.getProps();

                return {
                  onSessionStart: wn(e),
                  onStart: wn(t),
                  onMove: r,
                  onEnd: (e, t) => {
                    delete this.session, o && Ke.Wi.update(() => o(e, t));
                  },
                };
              }
              mount() {
                this.removePointerDownListener = Ve(
                  this.node.current,
                  'pointerdown',
                  (e) => this.onPointerDown(e),
                );
              }
              update() {
                this.session && this.session.updateHandlers(this.createPanHandlers());
              }
              unmount() {
                this.removePointerDownListener(), this.session && this.session.end();
              }
            },
          },
          drag: {
            Feature: class extends qe {
              constructor(e) {
                super(e),
                  (this.removeGroupControls = Ye.Z),
                  (this.removeListeners = Ye.Z),
                  (this.controls = new Bn(e));
              }
              mount() {
                const { dragControls: e } = this.node.getProps();

                e && (this.removeGroupControls = e.subscribe(this.controls)),
                  (this.removeListeners = this.controls.addListeners() || Ye.Z);
              }
              unmount() {
                this.removeGroupControls(), this.removeListeners();
              }
            },
            ProjectionNode: Ca,
            MeasureLayout: Nn,
          },
        },
        Ea = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      const Ta = 4;

      function Na(e, t, r = 1) {
        (0, dt.k)(
          r <= Ta,
          `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,
        );
        const [o, n] = (function (e) {
          const t = Ea.exec(e);

          if (!t) return [,];
          const [, r, o] = t;

          return [r, o];
        })(e);

        if (!o) return;
        const a = window.getComputedStyle(t).getPropertyValue(o);

        return a ? a.trim() : _(n) ? Na(n, t, r + 1) : n;
      }
      const Fa = new Set([
          'width',
          'height',
          'top',
          'left',
          'right',
          'bottom',
          'x',
          'y',
          'translateX',
          'translateY',
        ]),
        Aa = (e) => Fa.has(e),
        La = (e) => e === V || e === Q,
        Ra = (e, t) => parseFloat(e.split(', ')[t]),
        Da =
          (e, t) =>
          (r, { transform: o }) => {
            if ('none' === o || !o) return 0;
            const n = o.match(/^matrix3d\((.+)\)$/);

            if (n) return Ra(n[1], t);

            {
              const t = o.match(/^matrix\((.+)\)$/);

              return t ? Ra(t[1], e) : 0;
            }
          },
        Ha = new Set(['x', 'y', 'z']),
        Ma = F.filter((e) => !Ha.has(e));
      const Oa = {
          width: ({ x: e }, { paddingLeft: t = '0', paddingRight: r = '0' }) =>
            e.max - e.min - parseFloat(t) - parseFloat(r),
          height: ({ y: e }, { paddingTop: t = '0', paddingBottom: r = '0' }) =>
            e.max - e.min - parseFloat(t) - parseFloat(r),
          top: (e, { top: t }) => parseFloat(t),
          left: (e, { left: t }) => parseFloat(t),
          bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
          right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
          x: Da(4, 13),
          y: Da(5, 14),
        },
        _a = (e, t, r = {}, o = {}) => {
          (t = { ...t }), (o = { ...o });
          const n = Object.keys(t).filter(Aa);
          let a = [],
            i = !1;
          const s = [];

          if (
            (n.forEach((n) => {
              const l = e.getValue(n);

              if (!e.hasValue(n)) return;
              let c = r[n],
                u = go(c);
              const d = t[n];
              let h;

              if (Ne(d)) {
                const e = d.length,
                  t = null === d[0] ? 1 : 0;

                (c = d[t]), (u = go(c));
                for (let r = t; r < e && null !== d[r]; r++)
                  h
                    ? (0, dt.k)(go(d[r]) === h, 'All keyframes must be of the same type')
                    : ((h = go(d[r])),
                      (0, dt.k)(
                        h === u || (La(u) && La(h)),
                        'Keyframes must be of the same dimension as the current value',
                      ));
              } else h = go(d);
              if (u !== h)
                if (La(u) && La(h)) {
                  const e = l.get();

                  'string' == typeof e && l.set(parseFloat(e)),
                    'string' == typeof d
                      ? (t[n] = parseFloat(d))
                      : Array.isArray(d) && h === Q && (t[n] = d.map(parseFloat));
                } else
                  (null == u ? void 0 : u.transform) &&
                  (null == h ? void 0 : h.transform) &&
                  (0 === c || 0 === d)
                    ? 0 === c
                      ? l.set(h.transform(c))
                      : (t[n] = u.transform(d))
                    : (i ||
                        ((a = (function (e) {
                          const t = [];

                          return (
                            Ma.forEach((r) => {
                              const o = e.getValue(r);

                              void 0 !== o &&
                                (t.push([r, o.get()]),
                                o.set(r.startsWith('scale') ? 1 : 0));
                            }),
                            t.length && e.render(),
                            t
                          );
                        })(e)),
                        (i = !0)),
                      s.push(n),
                      (o[n] = void 0 !== o[n] ? o[n] : t[n]),
                      l.jump(d));
            }),
            s.length)
          ) {
            const r = s.indexOf('height') >= 0 ? window.pageYOffset : null,
              n = ((e, t, r) => {
                const o = t.measureViewportBox(),
                  n = t.current,
                  a = getComputedStyle(n),
                  { display: i } = a,
                  s = {};

                'none' === i && t.setStaticValue('display', e.display || 'block'),
                  r.forEach((e) => {
                    s[e] = Oa[e](o, a);
                  }),
                  t.render();
                const l = t.measureViewportBox();

                return (
                  r.forEach((r) => {
                    const o = t.getValue(r);

                    o && o.jump(s[r]), (e[r] = Oa[r](l, a));
                  }),
                  e
                );
              })(t, e, s);

            return (
              a.length &&
                a.forEach(([t, r]) => {
                  e.getValue(t).set(r);
                }),
              e.render(),
              k.j && null !== r && window.scrollTo({ top: r }),
              { target: n, transitionEnd: o }
            );
          }

          return { target: t, transitionEnd: o };
        };

      function ja(e, t, r, o) {
        return ((e) => Object.keys(e).some(Aa))(t)
          ? _a(e, t, r, o)
          : { target: t, transitionEnd: o };
      }

      const Ia = (e, t, r, o) => {
        const n = (function (e, { ...t }, r) {
          const o = e.current;

          if (!(o instanceof Element)) return { target: t, transitionEnd: r };
          r && (r = { ...r }),
            e.values.forEach((e) => {
              const t = e.get();

              if (!_(t)) return;
              const r = Na(t, o);

              r && e.set(r);
            });

          for (const n in t) {
            const e = t[n];

            if (!_(e)) continue;
            const a = Na(e, o);

            a && ((t[n] = a), r || (r = {}), void 0 === r[n] && (r[n] = e));
          }

          return { target: t, transitionEnd: r };
        })(e, t, o);

        return ja(e, (t = n.target), r, (o = n.transitionEnd));
      };
      var Va = r(2519),
        za = r(3993);
      const $a = new WeakMap(),
        Wa = Object.keys(b),
        Ua = Wa.length,
        Ga = [
          'AnimationStart',
          'AnimationComplete',
          'Update',
          'BeforeLayoutMeasure',
          'LayoutMeasure',
          'LayoutAnimationStart',
          'LayoutAnimationComplete',
        ],
        Za = f.length;

      class Xa {
        constructor(
          {
            parent: e,
            props: t,
            presenceContext: r,
            reducedMotionConfig: o,
            visualState: n,
          },
          a = {},
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () => this.notify('Update', this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection,
                ));
            }),
            (this.scheduleRender = () => Ke.Wi.render(this.render, !1, !0));
          const { latestValues: i, renderState: s } = n;

          (this.latestValues = i),
            (this.baseTarget = { ...i }),
            (this.initialValues = t.initial ? { ...i } : {}),
            (this.renderState = s),
            (this.parent = e),
            (this.props = t),
            (this.presenceContext = r),
            (this.depth = e ? e.depth + 1 : 0),
            (this.reducedMotionConfig = o),
            (this.options = a),
            (this.isControllingVariants = p(t)),
            (this.isVariantNode = g(t)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = Boolean(e && e.current));
          const { willChange: l, ...c } = this.scrapeMotionValuesFromProps(t, {});

          for (const u in c) {
            const e = c[u];

            void 0 !== i[u] && R(e) && (e.set(i[u], !1), io(l) && l.add(u));
          }
        }
        scrapeMotionValuesFromProps(e, t) {
          return {};
        }
        mount(e) {
          (this.current = e),
            $a.set(e, this),
            this.projection && !this.projection.instance && this.projection.mount(e),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
            za.O.current || (0, Va.A)(),
            (this.shouldReduceMotion =
              'never' !== this.reducedMotionConfig &&
              ('always' === this.reducedMotionConfig || za.n.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          $a.delete(this.current),
            this.projection && this.projection.unmount(),
            (0, Ke.Pn)(this.notifyUpdate),
            (0, Ke.Pn)(this.render),
            this.valueSubscriptions.forEach((e) => e()),
            this.removeFromVariantTree && this.removeFromVariantTree(),
            this.parent && this.parent.children.delete(this);
          for (const e in this.events) this.events[e].clear();
          for (const e in this.features) this.features[e].unmount();
          this.current = null;
        }
        bindToMotionValue(e, t) {
          const r = A.has(e),
            o = t.on('change', (t) => {
              (this.latestValues[e] = t),
                this.props.onUpdate && Ke.Wi.update(this.notifyUpdate, !1, !0),
                r && this.projection && (this.projection.isTransformDirty = !0);
            }),
            n = t.on('renderRequest', this.scheduleRender);

          this.valueSubscriptions.set(e, () => {
            o(), n();
          });
        }
        sortNodePosition(e) {
          return this.current && this.sortInstanceNodePosition && this.type === e.type
            ? this.sortInstanceNodePosition(this.current, e.current)
            : 0;
        }
        loadFeatures({ children: e, ...t }, r, o, n) {
          let a, i;

          for (let s = 0; s < Ua; s++) {
            const e = Wa[s],
              { isEnabled: r, Feature: o, ProjectionNode: n, MeasureLayout: l } = b[e];

            n && (a = n),
              r(t) &&
                (!this.features[e] && o && (this.features[e] = new o(this)),
                l && (i = l));
          }

          if (!this.projection && a) {
            this.projection = new a(
              this.latestValues,
              this.parent && this.parent.projection,
            );
            const {
              layoutId: e,
              layout: r,
              drag: o,
              dragConstraints: i,
              layoutScroll: s,
              layoutRoot: l,
            } = t;

            this.projection.setOptions({
              layoutId: e,
              layout: r,
              alwaysMeasureLayout: Boolean(o) || (i && c(i)),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: 'string' == typeof r ? r : 'both',
              initialPromotionConfig: n,
              layoutScroll: s,
              layoutRoot: l,
            });
          }

          return i;
        }
        updateFeatures() {
          for (const e in this.features) {
            const t = this.features[e];

            t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.options, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : en();
        }
        getStaticValue(e) {
          return this.latestValues[e];
        }
        setStaticValue(e, t) {
          this.latestValues[e] = t;
        }
        makeTargetAnimatable(e, t = !0) {
          return this.makeTargetAnimatableFromInstance(e, this.props, t);
        }
        update(e, t) {
          (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = e),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = t);

          for (let r = 0; r < Ga.length; r++) {
            const t = Ga[r];

            this.propEventSubscriptions[t] &&
              (this.propEventSubscriptions[t](), delete this.propEventSubscriptions[t]);
            const o = e['on' + t];

            o && (this.propEventSubscriptions[t] = this.on(t, o));
          }
          (this.prevMotionValues = (function (e, t, r) {
            const { willChange: o } = t;

            for (const n in t) {
              const a = t[n],
                i = r[n];

              if (R(a)) e.addValue(n, a), io(o) && o.add(n);
              else if (R(i)) e.addValue(n, ho(a, { owner: e })), io(o) && o.remove(n);
              else if (i !== a)
                if (e.hasValue(n)) {
                  const t = e.getValue(n);

                  !t.hasAnimated && t.set(a);
                } else {
                  const t = e.getStaticValue(n);

                  e.addValue(n, ho(void 0 !== t ? t : a, { owner: e }));
                }
            }
            for (const n in r) void 0 === t[n] && e.removeValue(n);

            return t;
          })(
            this,
            this.scrapeMotionValuesFromProps(e, this.prevProps),
            this.prevMotionValues,
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(e) {
          return this.props.variants ? this.props.variants[e] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        getVariantContext(e = !1) {
          if (e) return this.parent ? this.parent.getVariantContext() : void 0;

          if (!this.isControllingVariants) {
            const e = (this.parent && this.parent.getVariantContext()) || {};

            return void 0 !== this.props.initial && (e.initial = this.props.initial), e;
          }
          const t = {};

          for (let r = 0; r < Za; r++) {
            const e = f[r],
              o = this.props[e];

            (u(o) || !1 === o) && (t[e] = o);
          }

          return t;
        }
        addVariantChild(e) {
          const t = this.getClosestVariantNode();

          if (t)
            return (
              t.variantChildren && t.variantChildren.add(e),
              () => t.variantChildren.delete(e)
            );
        }
        addValue(e, t) {
          t !== this.values.get(e) && (this.removeValue(e), this.bindToMotionValue(e, t)),
            this.values.set(e, t),
            (this.latestValues[e] = t.get());
        }
        removeValue(e) {
          this.values.delete(e);
          const t = this.valueSubscriptions.get(e);

          t && (t(), this.valueSubscriptions.delete(e)),
            delete this.latestValues[e],
            this.removeValueFromRenderState(e, this.renderState);
        }
        hasValue(e) {
          return this.values.has(e);
        }
        getValue(e, t) {
          if (this.props.values && this.props.values[e]) return this.props.values[e];
          let r = this.values.get(e);

          return (
            void 0 === r &&
              void 0 !== t &&
              ((r = ho(t, { owner: this })), this.addValue(e, r)),
            r
          );
        }
        readValue(e) {
          return void 0 === this.latestValues[e] && this.current
            ? this.readValueFromInstance(this.current, e, this.options)
            : this.latestValues[e];
        }
        setBaseTarget(e, t) {
          this.baseTarget[e] = t;
        }
        getBaseTarget(e) {
          var t;
          const { initial: r } = this.props,
            o =
              'string' == typeof r || 'object' == typeof r
                ? null === (t = Ee(this.props, r)) || void 0 === t
                  ? void 0
                  : t[e]
                : void 0;

          if (r && void 0 !== o) return o;
          const n = this.getBaseTargetFromProps(this.props, e);

          return void 0 === n || R(n)
            ? void 0 !== this.initialValues[e] && void 0 === o
              ? void 0
              : this.baseTarget[e]
            : n;
        }
        on(e, t) {
          return this.events[e] || (this.events[e] = new co()), this.events[e].add(t);
        }
        notify(e, ...t) {
          this.events[e] && this.events[e].notify(...t);
        }
      }
      class qa extends Xa {
        sortInstanceNodePosition(e, t) {
          return 2 & e.compareDocumentPosition(t) ? 1 : -1;
        }
        getBaseTargetFromProps(e, t) {
          return e.style ? e.style[t] : void 0;
        }
        removeValueFromRenderState(e, { vars: t, style: r }) {
          delete t[e], delete r[e];
        }
        makeTargetAnimatableFromInstance(
          { transition: e, transitionEnd: t, ...r },
          { transformValues: o },
          n,
        ) {
          let a = (function (e, t, r) {
            const o = {};

            for (const n in e) {
              const e = ko(n, t);

              if (void 0 !== e) o[n] = e;
              else {
                const e = r.getValue(n);

                e && (o[n] = e.get());
              }
            }

            return o;
          })(r, e || {}, this);

          if ((o && (t && (t = o(t)), r && (r = o(r)), a && (a = o(a))), n)) {
            !(function (e, t, r) {
              var o, n;
              const a = Object.keys(t).filter((t) => !e.hasValue(t)),
                i = a.length;

              if (i)
                for (let s = 0; s < i; s++) {
                  const i = a[s],
                    l = t[i];
                  let c = null;

                  Array.isArray(l) && (c = l[0]),
                    null === c &&
                      (c =
                        null !==
                          (n =
                            null !== (o = r[i]) && void 0 !== o ? o : e.readValue(i)) &&
                        void 0 !== n
                          ? n
                          : t[i]),
                    null != c &&
                      ('string' == typeof c && (/^\-?\d*\.?\d+$/.test(c) || ro(c))
                        ? (c = parseFloat(c))
                        : !vo(c) && lr.test(l) && (c = to(i, l)),
                      e.addValue(i, ho(c, { owner: e })),
                      void 0 === r[i] && (r[i] = c),
                      null !== c && e.setBaseTarget(i, c));
                }
            })(this, r, a);
            const e = Ia(this, r, a, t);

            (t = e.transitionEnd), (r = e.target);
          }

          return { transition: e, transitionEnd: t, ...r };
        }
      }
      class Ka extends qa {
        readValueFromInstance(e, t) {
          if (A.has(t)) {
            const e = eo(t);

            return (e && e.default) || 0;
          }

          {
            const o = ((r = e), window.getComputedStyle(r)),
              n = (O(t) ? o.getPropertyValue(t) : o[t]) || 0;

            return 'string' == typeof n ? n.trim() : n;
          }
          var r;
        }
        measureInstanceViewportBox(e, { transformPagePoint: t }) {
          return bn(e, t);
        }
        build(e, t, r, o) {
          ne(e, t, r, o.transformTemplate);
        }
        scrapeMotionValuesFromProps(e, t) {
          return Ce(e, t);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          const { children: e } = this.props;

          R(e) &&
            (this.childSubscription = e.on('change', (e) => {
              this.current && (this.current.textContent = `${e}`);
            }));
        }
        renderInstance(e, t, r, o) {
          Pe(e, t, r, o);
        }
      }
      class Ja extends qa {
        constructor() {
          super(...arguments), (this.isSVGTag = !1);
        }
        getBaseTargetFromProps(e, t) {
          return e[t];
        }
        readValueFromInstance(e, t) {
          if (A.has(t)) {
            const e = eo(t);

            return (e && e.default) || 0;
          }

          return (t = we.has(t) ? t : Be(t)), e.getAttribute(t);
        }
        measureInstanceViewportBox() {
          return en();
        }
        scrapeMotionValuesFromProps(e, t) {
          return xe(e, t);
        }
        build(e, t, r, o) {
          me(e, t, r, this.isSVGTag, o.transformTemplate);
        }
        renderInstance(e, t, r, o) {
          Se(e, t, 0, o);
        }
        mount(e) {
          (this.isSVGTag = ye(e.tagName)), super.mount(e);
        }
      }
      const Qa = (e, t) =>
          T(e)
            ? new Ja(t, { enableHardwareAcceleration: !1 })
            : new Ka(t, { enableHardwareAcceleration: !0 }),
        Ya = {
          ...Lo,
          ...st,
          ...xa,
          ...{ layout: { ProjectionNode: Ca, MeasureLayout: Nn } },
        },
        ei = x((e, t) =>
          (function (e, { forwardMotionProps: t = !1 }, r, o) {
            return {
              ...(T(e) ? He : Me),
              preloadedFeatures: r,
              useRender: ke(t),
              createVisualElement: o,
              Component: e,
            };
          })(e, t, Ya, Qa),
        );
    },
    7035: function (e, t, r) {
      'use strict';
      r.d(t, {
        K: function () {
          return n;
        },
        k: function () {
          return a;
        },
      });
      var o = r(65);
      let n = o.Z,
        a = o.Z;
    },
    3791: function (e, t, r) {
      'use strict';
      r.d(t, {
        j: function () {
          return o;
        },
      });
      const o = 'undefined' != typeof document;
    },
    65: function (e, t, r) {
      'use strict';
      r.d(t, {
        Z: function () {
          return o;
        },
      });
      const o = (e) => e;
    },
    2519: function (e, t, r) {
      'use strict';
      r.d(t, {
        A: function () {
          return a;
        },
      });
      var o = r(3791),
        n = r(3993);

      function a() {
        if (((n.O.current = !0), o.j))
          if (window.matchMedia) {
            const e = window.matchMedia('(prefers-reduced-motion)'),
              t = () => (n.n.current = e.matches);

            e.addListener(t), t();
          } else n.n.current = !1;
      }
    },
    3993: function (e, t, r) {
      'use strict';
      r.d(t, {
        O: function () {
          return n;
        },
        n: function () {
          return o;
        },
      });
      const o = { current: null },
        n = { current: !1 };
    },
    3517: function (e, t, r) {
      'use strict';
      r.d(t, {
        J: function () {
          return i;
        },
      });
      var o = r(2784),
        n = r(2519),
        a = r(3993);

      function i() {
        !a.O.current && (0, n.A)();
        const [e] = (0, o.useState)(a.n.current);

        return e;
      }
    },
    3105: function (e, t, r) {
      'use strict';
      r.d(t, {
        h: function () {
          return n;
        },
      });
      var o = r(2784);

      function n(e) {
        const t = (0, o.useRef)(null);

        return null === t.current && (t.current = e()), t.current;
      }
    },
    3617: function (e, t, r) {
      'use strict';
      r.d(t, {
        L: function () {
          return n;
        },
      });
      var o = r(2784);
      const n = r(3791).j ? o.useLayoutEffect : o.useEffect;
    },
    2467: function (e, t, r) {
      'use strict';
      r.d(t, {
        c4: function () {
          return w;
        },
        cP: function () {
          return l;
        },
        dq: function () {
          return f;
        },
        mc: function () {
          return y;
        },
        rU: function () {
          return P;
        },
      });
      var o = r(3980),
        n = r(2784),
        a = r(5619),
        i = r(5516);

      function s() {
        return (
          (s = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];

                  for (var o in r)
                    Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
                }

                return e;
              }),
          s.apply(this, arguments)
        );
      }

      function l(e) {
        let t = e || '/',
          r = '',
          o = '';
        const n = t.indexOf('#');

        -1 !== n && ((o = t.slice(n)), (t = t.slice(0, n)));
        const a = t.indexOf('?');

        return (
          -1 !== a && ((r = t.slice(a)), (t = t.slice(0, a))),
          { pathname: t, search: '?' === r ? '' : r, hash: '#' === o ? '' : o }
        );
      }
      const c = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        u = (e) => {
          if ('string' == typeof e) return !((e) => c.test(e))(e);
        },
        d = () => '',
        h = () => '';

      function f(e, t = d()) {
        var r;

        if (!u(e)) return e;
        if (e.startsWith('./') || e.startsWith('../')) return e;
        const o = null != (r = null != t ? t : h()) ? r : '/';

        return `${null != o && o.endsWith('/') ? o.slice(0, -1) : o}${
          e.startsWith('/') ? e : `/${e}`
        }`;
      }
      const p = (e) => (null == e ? void 0 : e.startsWith('/'));

      function g(e, t) {
        const { pathname: r, search: o, hash: n } = l(e);

        return `${(0, i.H)(r, t)}${o}${n}`;
      }
      const m = (e, t) =>
          'number' == typeof e
            ? e
            : u(e)
            ? p(e)
              ? (function (e) {
                  const t = f(e),
                    r = 'always';

                  return g(t, r);
                })(e)
              : (function (e, t) {
                  if (p(e)) return e;
                  const r = 'always',
                    o = (0, a.resolve)(e, t);

                  return g(o, r);
                })(e, t)
            : e,
        v = [
          'to',
          'getProps',
          'onClick',
          'onMouseEnter',
          'activeClassName',
          'activeStyle',
          'innerRef',
          'partiallyActive',
          'state',
          'replace',
          '_location',
        ];

      function y(e) {
        return f(e, h());
      }
      const b = {
        activeClassName: o.string,
        activeStyle: o.object,
        partiallyActive: o.bool,
      };

      function k(e) {
        return n.createElement(a.Location, null, ({ location: t }) =>
          n.createElement(B, s({}, e, { _location: t })),
        );
      }
      class B extends n.Component {
        constructor(e) {
          super(e),
            (this.defaultGetProps = ({ isPartiallyCurrent: e, isCurrent: t }) =>
              (this.props.partiallyActive ? e : t)
                ? {
                    className: [this.props.className, this.props.activeClassName]
                      .filter(Boolean)
                      .join(' '),
                    style: s({}, this.props.style, this.props.activeStyle),
                  }
                : null);
          let t = !1;

          'undefined' != typeof window && window.IntersectionObserver && (t = !0),
            (this.state = { IOSupported: t }),
            (this.abortPrefetch = null),
            (this.handleRef = this.handleRef.bind(this));
        }
        _prefetch() {
          let e = window.location.pathname + window.location.search;

          this.props._location &&
            this.props._location.pathname &&
            (e = this.props._location.pathname + this.props._location.search);
          const t = l(m(this.props.to, e)),
            r = t.pathname + t.search;

          if (e !== r) return ___loader.enqueue(r);
        }
        componentWillUnmount() {
          if (!this.io) return;
          const { instance: e, el: t } = this.io;

          this.abortPrefetch && this.abortPrefetch.abort(),
            e.unobserve(t),
            e.disconnect();
        }
        handleRef(e) {
          this.props.innerRef &&
          Object.prototype.hasOwnProperty.call(this.props.innerRef, 'current')
            ? (this.props.innerRef.current = e)
            : this.props.innerRef && this.props.innerRef(e),
            this.state.IOSupported &&
              e &&
              (this.io = ((e, t) => {
                const r = new window.IntersectionObserver((r) => {
                  r.forEach((r) => {
                    e === r.target && t(r.isIntersecting || r.intersectionRatio > 0);
                  });
                });

                return r.observe(e), { instance: r, el: e };
              })(e, (e) => {
                e
                  ? (this.abortPrefetch = this._prefetch())
                  : this.abortPrefetch && this.abortPrefetch.abort();
              }));
        }
        render() {
          const e = this.props,
            {
              to: t,
              getProps: r = this.defaultGetProps,
              onClick: o,
              onMouseEnter: i,
              state: c,
              replace: d,
              _location: h,
            } = e,
            f = (function (e, t) {
              if (null == e) return {};
              var r,
                o,
                n = {},
                a = Object.keys(e);

              for (o = 0; o < a.length; o++) t.indexOf((r = a[o])) >= 0 || (n[r] = e[r]);

              return n;
            })(e, v),
            p = m(t, h.pathname);

          return u(p)
            ? n.createElement(
                a.Link,
                s(
                  {
                    to: p,
                    state: c,
                    getProps: r,
                    innerRef: this.handleRef,
                    onMouseEnter: (e) => {
                      i && i(e);
                      const t = l(p);

                      ___loader.hovering(t.pathname + t.search);
                    },
                    onClick: (e) => {
                      if (
                        (o && o(e),
                        !(
                          0 !== e.button ||
                          this.props.target ||
                          e.defaultPrevented ||
                          e.metaKey ||
                          e.altKey ||
                          e.ctrlKey ||
                          e.shiftKey
                        ))
                      ) {
                        e.preventDefault();
                        let t = d;
                        const r = encodeURI(p) === h.pathname;

                        'boolean' != typeof d && r && (t = !0),
                          window.___navigate(p, { state: c, replace: t });
                      }

                      return !0;
                    },
                  },
                  f,
                ),
              )
            : n.createElement('a', s({ href: p }, f));
        }
      }
      B.propTypes = s({}, b, {
        onClick: o.func,
        to: o.string.isRequired,
        replace: o.bool,
        state: o.object,
      });

      const P = n.forwardRef((e, t) => n.createElement(k, s({ innerRef: t }, e))),
        w = (e, t) => {
          window.___navigate(m(e, window.location.pathname), t);
        };
    },
    6291: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          Script: function () {
            return p;
          },
          ScriptStrategy: function () {
            return c;
          },
          collectedScriptsByPage: function () {
            return s;
          },
          scriptCache: function () {
            return h;
          },
          scriptCallbackCache: function () {
            return f;
          },
        });
      var o = r(2784),
        n = r(5619);

      function a() {
        return (
          (a = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];

                  for (var o in r)
                    Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
                }

                return e;
              }),
          a.apply(this, arguments)
        );
      }

      const i = new Map(),
        s = {
          get: (e) => i.get(e) || [],
          set(e, t) {
            const r = i.get(e) || [];

            r.push(t), i.set(e, r);
          },
          delete(e) {
            i.delete(e);
          },
        },
        l =
          ('undefined' != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (e) {
            const t = Date.now();

            return setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          };
      var c, u;

      ((u = c || (c = {})).postHydrate = 'post-hydrate'),
        (u.idle = 'idle'),
        (u.offMainThread = 'off-main-thread');
      const d = new Set([
          'src',
          'strategy',
          'dangerouslySetInnerHTML',
          'children',
          'onLoad',
          'onError',
        ]),
        h = new Set(),
        f = new Map();

      function p(e) {
        return o.createElement(n.Location, null, () => o.createElement(g, e));
      }

      function g(e) {
        const { src: t, strategy: r = c.postHydrate } = e || {},
          { pathname: i } = (0, n.useLocation)();

        if (
          ((0, o.useEffect)(() => {
            let t;

            switch (r) {
              case c.postHydrate:
                t = m(e);

                break;
              case c.idle:
                l(() => {
                  t = m(e);
                });

                break;
              case c.offMainThread: {
                const t = y(e);

                s.set(i, t);
              }
            }

            return () => {
              const { script: e, loadCallback: r, errorCallback: o } = t || {};

              r && (null == e || e.removeEventListener('load', r)),
                o && (null == e || e.removeEventListener('error', o)),
                null == e || e.remove();
            };
          }, []),
          r === c.offMainThread)
        ) {
          const n = v(e),
            l = y(e);

          return (
            'undefined' == typeof window && s.set(i, l),
            o.createElement(
              'script',
              n
                ? a(
                    {
                      type: 'text/partytown',
                      'data-strategy': r,
                      crossOrigin: 'anonymous',
                    },
                    l,
                    { dangerouslySetInnerHTML: { __html: v(e) } },
                  )
                : a(
                    {
                      type: 'text/partytown',
                      src: b(t),
                      'data-strategy': r,
                      crossOrigin: 'anonymous',
                    },
                    l,
                  ),
            )
          );
        }

        return null;
      }

      function m(e) {
        const {
            id: t,
            src: r,
            strategy: o = c.postHydrate,
            onLoad: n,
            onError: i,
          } = e || {},
          s = t || r,
          l = ['load', 'error'],
          u = { load: n, error: i };

        if (s) {
          for (const e of l)
            if (null != u && u[e]) {
              var d;
              const t = f.get(s) || {},
                { callbacks: r = [] } = (null == t ? void 0 : t[e]) || {};
              var p, g;

              r.push(null == u ? void 0 : u[e]),
                null != t && null != (d = t[e]) && d.event
                  ? null == u ||
                    null == (p = u[e]) ||
                    p.call(u, null == t || null == (g = t[e]) ? void 0 : g.event)
                  : f.set(s, a({}, t, { [e]: { callbacks: r } }));
            }
          if (h.has(s)) return null;
        }
        const m = v(e),
          b = y(e),
          B = document.createElement('script');

        t && (B.id = t), (B.dataset.strategy = o);
        for (const [a, c] of Object.entries(b)) B.setAttribute(a, c);
        m && (B.textContent = m), r && (B.src = r);
        const P = {};

        if (s) {
          for (const e of l) {
            const t = (t) => k(t, s, e);

            B.addEventListener(e, t), (P[`${e}Callback`] = t);
          }
          h.add(s);
        }

        return (
          document.body.appendChild(B),
          { script: B, loadCallback: P.loadCallback, errorCallback: P.errorCallback }
        );
      }

      function v(e) {
        const { dangerouslySetInnerHTML: t, children: r = '' } = e || {},
          { __html: o = '' } = t || {};

        return o || r;
      }

      function y(e) {
        const t = {};

        for (const [r, o] of Object.entries(e)) d.has(r) || (t[r] = o);

        return t;
      }

      function b(e) {
        if (e) return `/__third-party-proxy?url=${encodeURIComponent(e)}`;
      }

      function k(e, t, r) {
        const o = f.get(t) || {};

        for (const a of (null == o || null == (n = o[r]) ? void 0 : n.callbacks) || []) {
          var n;

          a(e);
        }
        f.set(t, { [r]: { event: e } });
      }
    },
    5645: function (e, t, r) {
      'use strict';
      r.d(t, {
        Ab: function () {
          return i;
        },
        Fr: function () {
          return s;
        },
        G$: function () {
          return a;
        },
        JM: function () {
          return d;
        },
        K$: function () {
          return c;
        },
        MS: function () {
          return o;
        },
        h5: function () {
          return l;
        },
        lK: function () {
          return u;
        },
        uj: function () {
          return n;
        },
      });
      var o = '-ms-',
        n = '-moz-',
        a = '-webkit-',
        i = 'comm',
        s = 'rule',
        l = 'decl',
        c = '@import',
        u = '@keyframes',
        d = '@layer';
    },
    299: function (e, t, r) {
      'use strict';
      r.d(t, {
        qR: function () {
          return l;
        },
        Ji: function () {
          return u;
        },
        cD: function () {
          return c;
        },
      });
      var o = r(5645),
        n = r(766),
        a = r(2004),
        i = r(9452);

      function s(e, t, r) {
        switch ((0, n.vp)(e, t)) {
          case 5103:
            return o.G$ + 'print-' + e + e;
          case 5737:
          case 4201:
          case 3177:
          case 3433:
          case 1641:
          case 4457:
          case 2921:
          case 5572:
          case 6356:
          case 5844:
          case 3191:
          case 6645:
          case 3005:
          case 6391:
          case 5879:
          case 5623:
          case 6135:
          case 4599:
          case 4855:
          case 4215:
          case 6389:
          case 5109:
          case 5365:
          case 5621:
          case 3829:
            return o.G$ + e + e;
          case 4789:
            return o.uj + e + e;
          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return o.G$ + e + o.uj + e + o.MS + e + e;
          case 5936:
            switch ((0, n.uO)(e, t + 11)) {
              case 114:
                return o.G$ + e + o.MS + (0, n.gx)(e, /[svh]\w+-[tblr]{2}/, 'tb') + e;
              case 108:
                return o.G$ + e + o.MS + (0, n.gx)(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e;
              case 45:
                return o.G$ + e + o.MS + (0, n.gx)(e, /[svh]\w+-[tblr]{2}/, 'lr') + e;
            }
          case 6828:
          case 4268:
          case 2903:
            return o.G$ + e + o.MS + e + e;
          case 6165:
            return o.G$ + e + o.MS + 'flex-' + e + e;
          case 5187:
            return (
              o.G$ +
              e +
              (0, n.gx)(e, /(\w+).+(:[^]+)/, o.G$ + 'box-$1$2' + o.MS + 'flex-$1$2') +
              e
            );
          case 5443:
            return (
              o.G$ +
              e +
              o.MS +
              'flex-item-' +
              (0, n.gx)(e, /flex-|-self/g, '') +
              ((0, n.EQ)(e, /flex-|baseline/)
                ? ''
                : o.MS + 'grid-row-' + (0, n.gx)(e, /flex-|-self/g, '')) +
              e
            );
          case 4675:
            return (
              o.G$ +
              e +
              o.MS +
              'flex-line-pack' +
              (0, n.gx)(e, /align-content|flex-|-self/g, '') +
              e
            );
          case 5548:
            return o.G$ + e + o.MS + (0, n.gx)(e, 'shrink', 'negative') + e;
          case 5292:
            return o.G$ + e + o.MS + (0, n.gx)(e, 'basis', 'preferred-size') + e;
          case 6060:
            return (
              o.G$ +
              'box-' +
              (0, n.gx)(e, '-grow', '') +
              o.G$ +
              e +
              o.MS +
              (0, n.gx)(e, 'grow', 'positive') +
              e
            );
          case 4554:
            return o.G$ + (0, n.gx)(e, /([^-])(transform)/g, '$1' + o.G$ + '$2') + e;
          case 6187:
            return (
              (0, n.gx)(
                (0, n.gx)(
                  (0, n.gx)(e, /(zoom-|grab)/, o.G$ + '$1'),
                  /(image-set)/,
                  o.G$ + '$1',
                ),
                e,
                '',
              ) + e
            );
          case 5495:
          case 3959:
            return (0, n.gx)(e, /(image-set\([^]*)/, o.G$ + '$1$`$1');
          case 4968:
            return (
              (0, n.gx)(
                (0, n.gx)(
                  e,
                  /(.+:)(flex-)?(.*)/,
                  o.G$ + 'box-pack:$3' + o.MS + 'flex-pack:$3',
                ),
                /s.+-b[^;]+/,
                'justify',
              ) +
              o.G$ +
              e +
              e
            );
          case 4200:
            if (!(0, n.EQ)(e, /flex-|baseline/))
              return o.MS + 'grid-column-align' + (0, n.tb)(e, t) + e;

            break;
          case 2592:
          case 3360:
            return o.MS + (0, n.gx)(e, 'template-', '') + e;
          case 4384:
          case 3616:
            return r &&
              r.some(function (e, r) {
                return (t = r), (0, n.EQ)(e.props, /grid-\w+-end/);
              })
              ? ~(0, n.Cw)(e + (r = r[t].value), 'span')
                ? e
                : o.MS +
                  (0, n.gx)(e, '-start', '') +
                  e +
                  o.MS +
                  'grid-row-span:' +
                  (~(0, n.Cw)(r, 'span')
                    ? (0, n.EQ)(r, /\d+/)
                    : +(0, n.EQ)(r, /\d+/) - +(0, n.EQ)(e, /\d+/)) +
                  ';'
              : o.MS + (0, n.gx)(e, '-start', '') + e;
          case 4896:
          case 4128:
            return r &&
              r.some(function (e) {
                return (0, n.EQ)(e.props, /grid-\w+-start/);
              })
              ? e
              : o.MS + (0, n.gx)((0, n.gx)(e, '-end', '-span'), 'span ', '') + e;
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return (0, n.gx)(e, /(.+)-inline(.+)/, o.G$ + '$1$2') + e;
          case 8116:
          case 7059:
          case 5753:
          case 5535:
          case 5445:
          case 5701:
          case 4933:
          case 4677:
          case 5533:
          case 5789:
          case 5021:
          case 4765:
            if ((0, n.to)(e) - 1 - t > 6)
              switch ((0, n.uO)(e, t + 1)) {
                case 109:
                  if (45 !== (0, n.uO)(e, t + 4)) break;
                case 102:
                  return (
                    (0, n.gx)(
                      e,
                      /(.+:)(.+)-([^]+)/,
                      '$1' +
                        o.G$ +
                        '$2-$3$1' +
                        o.uj +
                        (108 == (0, n.uO)(e, t + 3) ? '$3' : '$2-$3'),
                    ) + e
                  );
                case 115:
                  return ~(0, n.Cw)(e, 'stretch')
                    ? s((0, n.gx)(e, 'stretch', 'fill-available'), t, r) + e
                    : e;
              }

            break;
          case 5152:
          case 5920:
            return (0, n.gx)(
              e,
              /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
              function (t, r, n, a, i, s, l) {
                return (
                  o.MS +
                  r +
                  ':' +
                  n +
                  l +
                  (a ? o.MS + r + '-span:' + (i ? s : +s - +n) + l : '') +
                  e
                );
              },
            );
          case 4949:
            if (121 === (0, n.uO)(e, t + 6)) return (0, n.gx)(e, ':', ':' + o.G$) + e;

            break;
          case 6444:
            switch ((0, n.uO)(e, 45 === (0, n.uO)(e, 14) ? 18 : 11)) {
              case 120:
                return (
                  (0, n.gx)(
                    e,
                    /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
                    '$1' +
                      o.G$ +
                      (45 === (0, n.uO)(e, 14) ? 'inline-' : '') +
                      'box$3$1' +
                      o.G$ +
                      '$2$3$1' +
                      o.MS +
                      '$2box$3',
                  ) + e
                );
              case 100:
                return (0, n.gx)(e, ':', ':' + o.MS) + e;
            }

            break;
          case 5719:
          case 2647:
          case 2135:
          case 3927:
          case 2391:
            return (0, n.gx)(e, 'scroll-', 'scroll-snap-') + e;
        }

        return e;
      }

      function l(e) {
        var t = (0, n.Ei)(e);

        return function (r, o, n, a) {
          for (var i = '', s = 0; s < t; s++) i += e[s](r, o, n, a) || '';

          return i;
        };
      }

      function c(e) {
        return function (t) {
          t.root || ((t = t.return) && e(t));
        };
      }

      function u(e, t, r, l) {
        if (e.length > -1 && !e.return)
          switch (e.type) {
            case o.h5:
              return void (e.return = s(e.value, e.length, r));
            case o.lK:
              return (0, i.q)(
                [(0, a.JG)(e, { value: (0, n.gx)(e.value, '@', '@' + o.G$) })],
                l,
              );
            case o.Fr:
              if (e.length)
                return (0, n.$e)(e.props, function (t) {
                  switch ((0, n.EQ)(t, /(::plac\w+|:read-\w+)/)) {
                    case ':read-only':
                    case ':read-write':
                      return (0,
                      i.q)([(0, a.JG)(e, { props: [(0, n.gx)(t, /:(read-\w+)/, ':' + o.uj + '$1')] })], l);
                    case '::placeholder':
                      return (0,
                      i.q)([(0, a.JG)(e, { props: [(0, n.gx)(t, /:(plac\w+)/, ':' + o.G$ + 'input-$1')] }), (0, a.JG)(e, { props: [(0, n.gx)(t, /:(plac\w+)/, ':' + o.uj + '$1')] }), (0, a.JG)(e, { props: [(0, n.gx)(t, /:(plac\w+)/, o.MS + 'input-$1')] })], l);
                  }

                  return '';
                });
          }
      }
    },
    2774: function (e, t, r) {
      'use strict';
      r.d(t, {
        MY: function () {
          return i;
        },
      });
      var o = r(5645),
        n = r(766),
        a = r(2004);

      function i(e) {
        return (0, a.cE)(s('', null, null, null, [''], (e = (0, a.un)(e)), 0, [0], e));
      }

      function s(e, t, r, o, i, d, h, f, p) {
        for (
          var g = 0,
            m = 0,
            v = h,
            y = 0,
            b = 0,
            k = 0,
            B = 1,
            P = 1,
            w = 1,
            S = 0,
            C = '',
            x = i,
            E = d,
            T = o,
            N = C;
          P;

        )
          switch (((k = S), (S = (0, a.lp)()))) {
            case 40:
              if (108 != k && 58 == (0, n.uO)(N, v - 1)) {
                -1 != (0, n.Cw)((N += (0, n.gx)((0, a.iF)(S), '&', '&\f')), '&\f') &&
                  (w = -1);

                break;
              }
            case 34:
            case 39:
            case 91:
              N += (0, a.iF)(S);

              break;
            case 9:
            case 10:
            case 13:
            case 32:
              N += (0, a.Qb)(k);

              break;
            case 92:
              N += (0, a.kq)((0, a.Ud)() - 1, 7);
              continue;
            case 47:
              switch ((0, a.fj)()) {
                case 42:
                case 47:
                  (0, n.R3)(c((0, a.q6)((0, a.lp)(), (0, a.Ud)()), t, r), p);

                  break;
                default:
                  N += '/';
              }

              break;
            case 123 * B:
              f[g++] = (0, n.to)(N) * w;
            case 125 * B:
            case 59:
            case 0:
              switch (S) {
                case 0:
                case 125:
                  P = 0;
                case 59 + m:
                  -1 == w && (N = (0, n.gx)(N, /\f/g, '')),
                    b > 0 &&
                      (0, n.to)(N) - v &&
                      (0, n.R3)(
                        b > 32
                          ? u(N + ';', o, r, v - 1)
                          : u((0, n.gx)(N, ' ', '') + ';', o, r, v - 2),
                        p,
                      );

                  break;
                case 59:
                  N += ';';
                default:
                  if (
                    ((0, n.R3)((T = l(N, t, r, g, m, i, f, C, (x = []), (E = []), v)), d),
                    123 === S)
                  )
                    if (0 === m) s(N, t, T, T, x, d, v, f, E);
                    else
                      switch (99 === y && 110 === (0, n.uO)(N, 3) ? 100 : y) {
                        case 100:
                        case 108:
                        case 109:
                        case 115:
                          s(
                            e,
                            T,
                            T,
                            o && (0, n.R3)(l(e, T, T, 0, 0, i, f, C, i, (x = []), v), E),
                            i,
                            E,
                            v,
                            f,
                            o ? x : E,
                          );

                          break;
                        default:
                          s(N, T, T, T, [''], E, 0, f, E);
                      }
              }
              (g = m = b = 0), (B = w = 1), (C = N = ''), (v = h);

              break;
            case 58:
              (v = 1 + (0, n.to)(N)), (b = k);
            default:
              if (B < 1)
                if (123 == S) --B;
                else if (125 == S && 0 == B++ && 125 == (0, a.mp)()) continue;

              switch (((N += (0, n.Dp)(S)), S * B)) {
                case 38:
                  w = m > 0 ? 1 : ((N += '\f'), -1);

                  break;
                case 44:
                  (f[g++] = ((0, n.to)(N) - 1) * w), (w = 1);

                  break;
                case 64:
                  45 === (0, a.fj)() && (N += (0, a.iF)((0, a.lp)())),
                    (y = (0, a.fj)()),
                    (m = v = (0, n.to)((C = N += (0, a.QU)((0, a.Ud)())))),
                    S++;

                  break;
                case 45:
                  45 === k && 2 == (0, n.to)(N) && (B = 0);
              }
          }

        return d;
      }

      function l(e, t, r, i, s, l, c, u, d, h, f) {
        for (
          var p = s - 1, g = 0 === s ? l : [''], m = (0, n.Ei)(g), v = 0, y = 0, b = 0;
          v < i;
          ++v
        )
          for (
            var k = 0, B = (0, n.tb)(e, p + 1, (p = (0, n.Wn)((y = c[v])))), P = e;
            k < m;
            ++k
          )
            (P = (0, n.fy)(y > 0 ? g[k] + ' ' + B : (0, n.gx)(B, /&\f/g, g[k]))) &&
              (d[b++] = P);

        return (0, a.dH)(e, t, r, 0 === s ? o.Fr : u, d, h, f);
      }

      function c(e, t, r) {
        return (0, a.dH)(e, t, r, o.Ab, (0, n.Dp)((0, a.Tb)()), (0, n.tb)(e, 2, -2), 0);
      }

      function u(e, t, r, i) {
        return (0, a.dH)(e, t, r, o.h5, (0, n.tb)(e, 0, i), (0, n.tb)(e, i + 1, -1), i);
      }
    },
    9452: function (e, t, r) {
      'use strict';
      r.d(t, {
        P: function () {
          return i;
        },
        q: function () {
          return a;
        },
      });
      var o = r(5645),
        n = r(766);

      function a(e, t) {
        for (var r = '', o = (0, n.Ei)(e), a = 0; a < o; a++) r += t(e[a], a, e, t) || '';

        return r;
      }

      function i(e, t, r, i) {
        switch (e.type) {
          case o.JM:
            if (e.children.length) break;
          case o.K$:
          case o.h5:
            return (e.return = e.return || e.value);
          case o.Ab:
            return '';
          case o.lK:
            return (e.return = e.value + '{' + a(e.children, i) + '}');
          case o.Fr:
            e.value = e.props.join(',');
        }

        return (0, n.to)((r = a(e.children, i)))
          ? (e.return = e.value + '{' + r + '}')
          : '';
      }
    },
    2004: function (e, t, r) {
      'use strict';
      r.d(t, {
        JG: function () {
          return d;
        },
        QU: function () {
          return E;
        },
        Qb: function () {
          return w;
        },
        Tb: function () {
          return h;
        },
        Ud: function () {
          return m;
        },
        cE: function () {
          return k;
        },
        dH: function () {
          return u;
        },
        fj: function () {
          return g;
        },
        iF: function () {
          return B;
        },
        kq: function () {
          return S;
        },
        lp: function () {
          return p;
        },
        mp: function () {
          return f;
        },
        q6: function () {
          return x;
        },
        un: function () {
          return b;
        },
        wS: function () {
          return P;
        },
      });
      var o = r(766),
        n = 1,
        a = 1,
        i = 0,
        s = 0,
        l = 0,
        c = '';

      function u(e, t, r, o, i, s, l) {
        return {
          value: e,
          root: t,
          parent: r,
          type: o,
          props: i,
          children: s,
          line: n,
          column: a,
          length: l,
          return: '',
        };
      }

      function d(e, t) {
        return (0, o.f0)(
          u('', null, null, '', null, null, 0),
          e,
          { length: -e.length },
          t,
        );
      }

      function h() {
        return l;
      }

      function f() {
        return (l = s > 0 ? (0, o.uO)(c, --s) : 0), a--, 10 === l && ((a = 1), n--), l;
      }

      function p() {
        return (l = s < i ? (0, o.uO)(c, s++) : 0), a++, 10 === l && ((a = 1), n++), l;
      }

      function g() {
        return (0, o.uO)(c, s);
      }

      function m() {
        return s;
      }

      function v(e, t) {
        return (0, o.tb)(c, e, t);
      }

      function y(e) {
        switch (e) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1;
        }

        return 0;
      }

      function b(e) {
        return (n = a = 1), (i = (0, o.to)((c = e))), (s = 0), [];
      }

      function k(e) {
        return (c = ''), e;
      }

      function B(e) {
        return (0, o.fy)(v(s - 1, C(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
      }

      function P(e) {
        return k(
          (function (e) {
            for (; p(); )
              switch (y(l)) {
                case 0:
                  (0, o.R3)(E(s - 1), e);

                  break;
                case 2:
                  (0, o.R3)(B(l), e);

                  break;
                default:
                  (0, o.R3)((0, o.Dp)(l), e);
              }

            return e;
          })(b(e)),
        );
      }

      function w(e) {
        for (; (l = g()) && l < 33; ) p();

        return y(e) > 2 || y(l) > 3 ? '' : ' ';
      }

      function S(e, t) {
        for (
          ;
          --t && p() && !(l < 48 || l > 102 || (l > 57 && l < 65) || (l > 70 && l < 97));

        );

        return v(e, m() + (t < 6 && 32 == g() && 32 == p()));
      }

      function C(e) {
        for (; p(); )
          switch (l) {
            case e:
              return s;
            case 34:
            case 39:
              34 !== e && 39 !== e && C(l);

              break;
            case 40:
              41 === e && C(e);

              break;
            case 92:
              p();
          }

        return s;
      }

      function x(e, t) {
        for (; p() && e + l !== 57 && (e + l !== 84 || 47 !== g()); );

        return '/*' + v(t, s - 1) + '*' + (0, o.Dp)(47 === e ? e : p());
      }

      function E(e) {
        for (; !y(g()); ) p();

        return v(e, s);
      }
    },
    766: function (e, t, r) {
      'use strict';
      r.d(t, {
        $e: function () {
          return m;
        },
        Cw: function () {
          return u;
        },
        Dp: function () {
          return n;
        },
        EQ: function () {
          return l;
        },
        Ei: function () {
          return p;
        },
        R3: function () {
          return g;
        },
        Wn: function () {
          return o;
        },
        f0: function () {
          return a;
        },
        fy: function () {
          return s;
        },
        gx: function () {
          return c;
        },
        tb: function () {
          return h;
        },
        to: function () {
          return f;
        },
        uO: function () {
          return d;
        },
        vp: function () {
          return i;
        },
      });
      var o = Math.abs,
        n = String.fromCharCode,
        a = Object.assign;

      function i(e, t) {
        return 45 ^ d(e, 0)
          ? (((((((t << 2) ^ d(e, 0)) << 2) ^ d(e, 1)) << 2) ^ d(e, 2)) << 2) ^ d(e, 3)
          : 0;
      }

      function s(e) {
        return e.trim();
      }

      function l(e, t) {
        return (e = t.exec(e)) ? e[0] : e;
      }

      function c(e, t, r) {
        return e.replace(t, r);
      }

      function u(e, t) {
        return e.indexOf(t);
      }

      function d(e, t) {
        return 0 | e.charCodeAt(t);
      }

      function h(e, t, r) {
        return e.slice(t, r);
      }

      function f(e) {
        return e.length;
      }

      function p(e) {
        return e.length;
      }

      function g(e, t) {
        return t.push(e), e;
      }

      function m(e, t) {
        return e.map(t).join('');
      }
    },
  },
  function (e) {
    e.O(0, [774, 532], function () {
      return (t = 5069), e((e.s = t));
      var t;
    });
    e.O();
  },
]);
//# sourceMappingURL=app-2153e13751186920df40.js.map
