'use strict';
(self.webpackChunkarbutus_boilerplate_gatsby =
  self.webpackChunkarbutus_boilerplate_gatsby || []).push([
  [36],
  {
    1230: function (r, a, e) {
      e.d(a, {
        n: function () {
          return m;
        },
      });
      var o = e(3513),
        t = e(2784),
        n = e(3552),
        i = e(3387),
        c = e(928),
        u = e(6457);
      const l = {
          none: 'transparent',
          primary: n.T.colorNeutralBackground1,
          secondary: n.T.colorNeutralBackground2,
          tertiary: n.T.colorNeutralBackground3,
          quaternary: n.T.colorNeutralBackground4,
          tile: n.T.colorNeutralBackground6,
          negative: n.T.colorPaletteDarkOrangeBackground1,
          positive: n.T.colorPaletteGreenBackground1,
          warning: n.T.colorPaletteMarigoldBackground1,
          danger: n.T.colorPaletteDarkOrangeBackground1,
          info: n.T.colorNeutralBackground2,
          accent: n.T.colorBrandBackground2,
        },
        d = (0, u.f)(l, (r) => ({ backgroundColor: r })),
        s = (0, i.Z)({
          root: { marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0 },
          interactive: {
            ...c.q5.borderStyle('none'),
            ...c.q5.borderColor('transparent'),
            cursor: 'pointer',
            transitionProperty: 'all',
            transitionDuration: n.T.durationNormal,
            transitionTimingFunction: n.T.curveEasyEase,
            ':focus': { outlineColor: n.T.colorBrandForeground2 },
          },
          card: {
            backgroundColor: n.T.colorNeutralBackground1,
            ...c.q5.borderRadius(n.T.borderRadiusLarge),
            boxShadow: n.T.shadow4,
          },
          interactiveCard: { ':hover': { boxShadow: n.T.shadow16 } },
          image: {
            backgroundColor: n.T.colorNeutralBackground6,
            ...c.q5.borderRadius('var(--arbutus--shape-border-radius)'),
            backgroundSize: 'cover',
            backgroundPositionX: 'center',
            backgroundPositionY: 'center',
          },
          solidColor: { ...c.q5.borderRadius('var(--arbutus--shape-border-radius)') },
          ...d,
        }),
        g = (r) => {
          let { variant: a } = r;

          return 'image' === a;
        },
        m = (r) => {
          let {
            children: a,
            variant: e,
            as: n = 'div',
            backgroundColor: i = 'tile',
            imageSrc: c,
            className: u,
            onClick: l,
          } = r;
          const d = s();
          let m = '';

          switch (!0) {
            case ((r) => {
              let { variant: a } = r;

              return 'card' === a;
            })({ variant: e }):
              m = (0, o.z)(d.root, d.card, l && d.interactive, l && d.interactiveCard, u);

              break;
            case g({ variant: e }):
              m = (0, o.z)(d.root, d.image, l && d.interactive, u);

              break;
            case ((r) => {
              let { variant: a } = r;

              return 'solid-color' === a;
            })({ variant: e }):
              m = (0, o.z)(d.root, d.solidColor, l && d.interactive, d[i], u);

              break;
            default:
              m = (0, o.z)(d.root, u);
          }
          const b = g({ variant: e })
            ? { style: { backgroundImage: 'url("' + (null != c ? c : '') + '")' } }
            : {};

          return t.createElement(n, { className: m, ...b, onClick: l }, a);
        };
    },
    36: function (r, a, e) {
      e.r(a);
      var o = e(3513),
        t = e(9256),
        n = e(1230),
        i = e(9471),
        c = e(2784);

      a.default = () => {
        const r = (0, i.z)();

        return c.createElement(
          n.n,
          { variant: 'card', className: (0, o.z)(r.py9, r.px7) },
          c.createElement(
            t.x,
            { variant: 'headline', className: r.mb7, block: !0 },
            'Example Component',
          ),
          c.createElement(
            t.x,
            { variant: 'description', block: !0 },
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sapiente voluptas laudantium placeat aliquam eum nesciunt dolorem rerum, quasi ea quisquam natus repellendus! Laudantium expedita laborum natus, earum tenetur quidem?',
          ),
        );
      };
    },
  },
]);
//# sourceMappingURL=36-ea954a836566a3ad464c.js.map
