(self.webpackChunkarbutus_boilerplate_gatsby =
  self.webpackChunkarbutus_boilerplate_gatsby || []).push([
  [325],
  {
    4371: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          Head: function () {
            return a;
          },
        });
      var r = n(2784);
      const a = (e) => {
        let {
          pageContext: { title: t },
        } = e;

        return r.createElement('title', null, 'MADS | Preview: ' + t);
      };

      t.default = (e) => {
        let {
          pageContext: { examplePath: t },
        } = e;
        const { 0: a, 1: l } = (0, r.useState)(null);

        return (
          (0, r.useEffect)(() => {
            !(async function () {
              const e = await ((e) =>
                (0, r.lazy)(() =>
                  n(4804)('./' + e).catch(() => n.e(630).then(n.bind(n, 4630))),
                ))(t);

              l(e);
            })();
          }, [t]),
          a
            ? r.createElement(
                r.Suspense,
                {
                  fallback: r.createElement(
                    r.Fragment,
                    null,
                    'Loading component preview',
                  ),
                },
                r.createElement(a, null),
              )
            : r.createElement('p', null, 'Example not found.')
        );
      };
    },
    4804: function (e, t, n) {
      var r = {
        './__raw__/my-component.raw': [9933, 933],
        './__raw__/my-component.raw.ts': [9933, 933],
        './example-wrapper': [9197, 197],
        './example-wrapper.tsx': [9197, 197],
        './my-component.example': [36, 36],
        './my-component.example.tsx': [36, 36],
      };

      function a(e) {
        if (!n.o(r, e))
          return Promise.resolve().then(function () {
            var t = new Error("Cannot find module '" + e + "'");

            throw ((t.code = 'MODULE_NOT_FOUND'), t);
          });
        var t = r[e],
          a = t[0];

        return n.e(t[1]).then(function () {
          return n(a);
        });
      }
      (a.keys = function () {
        return Object.keys(r);
      }),
        (a.id = 4804),
        (e.exports = a);
    },
  },
]);
//# sourceMappingURL=component---src-templates-preview-page-tsx-64ab30c4d9753b62b4a0.js.map
