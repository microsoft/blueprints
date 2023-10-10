'use strict';
(self.webpackChunkarbutus_boilerplate_gatsby =
  self.webpackChunkarbutus_boilerplate_gatsby || []).push([
  [136],
  {
    2293: function (e, l, t) {
      t.d(l, {
        i: function () {
          return d;
        },
      });
      var n = t(2784),
        a = t(9256),
        i = t(7892),
        u = t(9471),
        o = t(3513),
        r = t(1303),
        c = t(220);
      const d = (e) => {
        var l, t, d;
        let { title: s, leading: v, content: m, heroImage: g } = e;
        const b = (0, u.z)(),
          E = {
            alternativeText:
              null !== (l = null == g ? void 0 : g.alt) && void 0 !== l ? l : '',
            localFile: null == g ? void 0 : g.src,
            url:
              null !==
                (t =
                  null == g || null === (d = g.src) || void 0 === d
                    ? void 0
                    : d.publicURL) && void 0 !== t
                ? t
                : '',
          };

        return n.createElement(
          n.Fragment,
          null,
          g && n.createElement(c.E, { isHero: !0, image: E }),
          n.createElement(
            a.x,
            { block: !0, variant: 'jumbo', as: 'h1', className: b.mt12 },
            s,
          ),
          v &&
            n.createElement(
              a.x,
              { block: !0, variant: 'leading', className: (0, o.z)(b.my5, b.mb10) },
              v,
            ),
          n.createElement(i.i, null),
          m && n.createElement(r.O, { content: m }),
        );
      };
    },
    178: function (e, l, t) {
      t.r(l),
        t.d(l, {
          Head: function () {
            return u;
          },
          getGuidancePageContent: function () {
            return i;
          },
        });
      var n = t(2784),
        a = t(2293);
      const i = (e) => {
          var l, t, n, a, i, u, o;

          return {
            title:
              null !==
                (l =
                  null == e || null === (t = e.guidanceJson) || void 0 === t
                    ? void 0
                    : t.title) && void 0 !== l
                ? l
                : '[title]',
            leading:
              null !==
                (n =
                  null == e || null === (a = e.guidanceJson) || void 0 === a
                    ? void 0
                    : a.leading) && void 0 !== n
                ? n
                : '[leading]',
            heroImage:
              null == e || null === (i = e.guidanceJson) || void 0 === i
                ? void 0
                : i.heroImage,
            content:
              null !==
                (u =
                  null == e || null === (o = e.guidanceJson) || void 0 === o
                    ? void 0
                    : o.content) && void 0 !== u
                ? u
                : [],
          };
        },
        u = (e) => {
          var l, t;
          let { data: a } = e;
          const { title: u } =
              null !==
                (l = null === (t = a.site) || void 0 === t ? void 0 : t.siteMetadata) &&
              void 0 !== l
                ? l
                : '',
            { title: o } = i(a);

          return n.createElement('title', null, u + ' | ' + o);
        };

      l.default = (e) => {
        let { data: l } = e;
        const t = i(l);

        return n.createElement(a.i, t);
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-guidance-guidance-json-path-tsx-6b9cb2c686dfdd9bc457.js.map
