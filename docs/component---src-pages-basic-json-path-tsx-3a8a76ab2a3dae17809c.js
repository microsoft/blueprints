'use strict';
(self.webpackChunkarbutus_boilerplate_gatsby =
  self.webpackChunkarbutus_boilerplate_gatsby || []).push([
  [690],
  {
    2293: function (e, l, t) {
      t.d(l, {
        i: function () {
          return s;
        },
      });
      var n = t(2784),
        a = t(9256),
        i = t(7892),
        o = t(9471),
        u = t(3513),
        r = t(1303),
        c = t(220);
      const s = (e) => {
        var l, t, s;
        let { title: d, leading: v, content: m, heroImage: b } = e;
        const g = (0, o.z)(),
          E = {
            alternativeText:
              null !== (l = null == b ? void 0 : b.alt) && void 0 !== l ? l : '',
            localFile: null == b ? void 0 : b.src,
            url:
              null !==
                (t =
                  null == b || null === (s = b.src) || void 0 === s
                    ? void 0
                    : s.publicURL) && void 0 !== t
                ? t
                : '',
          };

        return n.createElement(
          n.Fragment,
          null,
          b && n.createElement(c.E, { isHero: !0, image: E }),
          n.createElement(
            a.x,
            { block: !0, variant: 'jumbo', as: 'h1', className: g.mt12 },
            d,
          ),
          v &&
            n.createElement(
              a.x,
              { block: !0, variant: 'leading', className: (0, u.z)(g.my5, g.mb10) },
              v,
            ),
          n.createElement(i.i, null),
          m && n.createElement(r.O, { content: m }),
        );
      };
    },
    8818: function (e, l, t) {
      t.r(l),
        t.d(l, {
          Head: function () {
            return o;
          },
          getBasicPageContent: function () {
            return i;
          },
        });
      var n = t(2784),
        a = t(2293);
      const i = (e) => {
          var l, t, n, a, i, o, u;

          return {
            title:
              null !==
                (l =
                  null == e || null === (t = e.basicJson) || void 0 === t
                    ? void 0
                    : t.title) && void 0 !== l
                ? l
                : '[title]',
            leading:
              null !==
                (n =
                  null == e || null === (a = e.basicJson) || void 0 === a
                    ? void 0
                    : a.leading) && void 0 !== n
                ? n
                : '[leading]',
            heroImage:
              null == e || null === (i = e.basicJson) || void 0 === i
                ? void 0
                : i.heroImage,
            content:
              null !==
                (o =
                  null == e || null === (u = e.basicJson) || void 0 === u
                    ? void 0
                    : u.content) && void 0 !== o
                ? o
                : [],
          };
        },
        o = (e) => {
          var l, t;
          let { data: a } = e;
          const { title: o } =
              null !==
                (l = null === (t = a.site) || void 0 === t ? void 0 : t.siteMetadata) &&
              void 0 !== l
                ? l
                : '',
            { title: u } = i(a);

          return n.createElement('title', null, o + ' | ' + u);
        };

      l.default = (e) => {
        let { data: l } = e;
        const t = i(l);

        return n.createElement(a.i, t);
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-basic-json-path-tsx-3a8a76ab2a3dae17809c.js.map
