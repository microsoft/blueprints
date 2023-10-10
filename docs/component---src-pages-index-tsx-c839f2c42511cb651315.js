'use strict';
(self.webpackChunkarbutus_boilerplate_gatsby =
  self.webpackChunkarbutus_boilerplate_gatsby || []).push([
  [691],
  {
    4522: function (e, a, t) {
      t.r(a),
        t.d(a, {
          Head: function () {
            return b;
          },
          default: function () {
            return m;
          },
        });
      var r = t(2784),
        i = t(9256),
        o = t(9471),
        n = t(3552),
        d = t(3387),
        l = t(4910),
        u = t(2430);
      const s = (0, d.Z)({
        root: {
          position: 'relative',
          maxWidth: u.RZ,
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingTop: u.Mz,
          ['@media (max-width: ' + u.RZ + ')']: {
            paddingLeft: n.T.spacingHorizontalXL,
            paddingRight: n.T.spacingHorizontalXL,
          },
          ['@media (max-width: ' + l.b.tablet + ')']: {
            paddingLeft: n.T.spacingVerticalL,
            paddingRight: n.T.spacingVerticalL,
          },
        },
        welcomeCard: {
          backgroundColor: n.T.colorBrandBackground2,
          borderTopLeftRadius: n.T.borderRadiusXLarge,
          borderTopRightRadius: n.T.borderRadiusXLarge,
          borderBottomLeftRadius: n.T.borderRadiusXLarge,
          borderBottomRightRadius: n.T.borderRadiusXLarge,
        },
      });
      var c = t(3513);
      const g = (e) => {
          let { title: a, leading: t } = e;
          const n = s(),
            d = (0, o.z)();

          return r.createElement(
            'div',
            { className: n.root },
            r.createElement(
              'div',
              { className: (0, c.z)(n.welcomeCard, d.py12, d.px9) },
              r.createElement(i.x, { as: 'h1', block: !0, variant: 'jumbo' }, a),
              r.createElement(i.x, { as: 'p', block: !0, variant: 'subtitle' }, t),
            ),
          );
        },
        b = () => r.createElement('title', null, 'Home Page');
      var m = (e) => {
        let { data: a } = e;
        const t = ((e) => {
          var a, t, r, i;

          return {
            title:
              null !==
                (a =
                  null == e || null === (t = e.homeJson) || void 0 === t
                    ? void 0
                    : t.title) && void 0 !== a
                ? a
                : '',
            leading:
              null !==
                (r =
                  null == e || null === (i = e.homeJson) || void 0 === i
                    ? void 0
                    : i.leading) && void 0 !== r
                ? r
                : '',
          };
        })(a);

        return r.createElement(g, t);
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-index-tsx-c839f2c42511cb651315.js.map
