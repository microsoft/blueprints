'use strict';
(self.webpackChunkarbutus_boilerplate_gatsby =
  self.webpackChunkarbutus_boilerplate_gatsby || []).push([
  [727],
  {
    3317: function (e, t, a) {
      a.r(t),
        a.d(t, {
          Head: function () {
            return L;
          },
          default: function () {
            return F;
          },
          getComponentPageContent: function () {
            return A;
          },
        });
      var n = a(2784),
        o = a(9256),
        r = a(2251),
        i = a(3513);
      const l = (0, n.createContext)({
          currentIndex: 0,
          prevIndex: void 0,
          id: '',
          onChangeIndex: (e) => {
            let { nextIndex: t } = e;
          },
        }),
        s = l.Provider;
      var d = a(3552),
        c = a(3387),
        u = a(928);
      const m = (0, c.Z)({
          root: {
            color: d.T.colorNeutralForeground1,
            ':global(:root)': { '--reach-tabs': 1 },
            '& [data-reach-tabs][data-orientation="vertical"]': { display: 'flex' },
            '& [data-reach-tab-list][aria-orientation="vertical"]': {
              flexDirection: 'column',
            },
            '& [data-reach-tab]': {
              ...u.q5.margin('0'),
              paddingTop: d.T.spacingHorizontalS,
              paddingBottom: d.T.spacingHorizontalS,
              paddingLeft: d.T.spacingHorizontalL,
              paddingRight: d.T.spacingHorizontalL,
              display: 'inline-block',
              ...u.q5.borderColor('transparent'),
              ...u.q5.borderWidth(0),
              ...u.q5.borderStyle('none'),
              ...u.q5.borderRadius('0.25rem 0.25rem 0 0'),
              boxShadow: '0 0 0 -2px transparent',
              backgroundColor: 'transparent',
              color: 'inherit',
              cursor: 'pointer',
              WebkitAppearance: 'none',
              MozAppearance: 'none',
              fontWeight: d.T.fontWeightRegular,
              fontSize: d.T.fontSizeBase300,
              lineHeight: d.T.lineHeightBase300,
              transitionProperty: 'box-shadow',
              transitionDuration: d.T.durationNormal,
              transitionTimingFunction: d.T.curveEasyEase,
              '&:focus': {
                outlineColor: 'initial',
                outlineStyle: 'none',
                outlineWidth: 'initial',
              },
            },
            '& [data-reach-tab]:active': { backgroundColor: d.T.colorNeutralBackground1 },
            '& [data-reach-tab]:disabled': { opacity: '0.25', cursor: 'default' },
            '& [data-reach-tab][data-selected]': {
              fontWeight: d.T.fontWeightSemibold,
              boxShadow: '0 0.125rem 0 0 ' + d.T.colorBrandForeground1,
            },
          },
        }),
        p = (e) => {
          let { className: t, children: a, initialIndex: o = 0 } = e;
          const { 0: r, 1: l } = (0, n.useState)(o),
            { 0: d, 1: c } = (0, n.useState)(),
            u = (0, n.useId)(),
            p = m();

          return n.createElement(
            'div',
            { className: (0, i.z)(p.root, t), role: 'tablist' },
            n.createElement(
              s,
              {
                value: {
                  id: u,
                  currentIndex: r,
                  prevIndex: d,
                  onChangeIndex: (e) => {
                    let { nextIndex: t } = e;

                    c(r), l(t);
                  },
                },
              },
              a,
            ),
          );
        },
        b = (e) => {
          let { children: t } = e,
            a = -1;
          const o = n.Children.count(t);

          return n.Children.map(t, (e) =>
            (0, n.isValidElement)(e)
              ? ((a += 1), (0, n.cloneElement)(e, { __index: a, __total: o }))
              : e,
          );
        },
        v = (0, c.Z)({
          root: {
            display: 'flex',
            backgroundColor: d.T.colorNeutralBackground1,
            borderBottomWidth: '0.0625rem',
            borderBottomStyle: 'solid',
            borderBottomColor: d.T.colorNeutralStroke1,
            marginBottom: d.T.spacingVerticalXL,
          },
        }),
        g = (e) => {
          let { className: t, children: a } = e;
          const o = b({ children: a }),
            r = v();

          return n.createElement(
            'div',
            { role: 'tablist', className: (0, i.z)(r.root, t) },
            o,
          );
        },
        h = () => (0, n.useContext)(l),
        f = (0, c.Z)({
          root: {
            position: 'relative',
            ...u.q5.margin('0'),
            paddingTop: d.T.spacingHorizontalS,
            paddingBottom: d.T.spacingHorizontalS,
            paddingLeft: d.T.spacingHorizontalL,
            paddingRight: d.T.spacingHorizontalL,
            display: 'inline-block',
            ...u.q5.borderColor('transparent'),
            ...u.q5.borderWidth(0),
            ...u.q5.borderStyle('none'),
            ...u.q5.borderRadius('0.25rem 0.25rem 0 0'),
            boxShadow: '0 0 0 -2px transparent',
            backgroundColor: 'transparent',
            color: 'inherit',
            cursor: 'pointer',
            WebkitAppearance: 'none',
            MozAppearance: 'none',
            fontWeight: d.T.fontWeightRegular,
            fontSize: d.T.fontSizeBase300,
            lineHeight: d.T.lineHeightBase300,
            transitionProperty: 'box-shadow',
            transitionDuration: d.T.durationNormal,
            transitionTimingFunction: d.T.curveEasyEase,
            '&::after': {
              content: '""',
              position: 'absolute',
              top: '-1px',
              left: '-1px',
              height: 'calc(100% + 2px)',
              width: 'calc(100% + 2px)',
              boxShadow: '0 0 4px 1px transparent',
              transitionProperty: 'box-shadow',
              transitionDuration: d.T.durationNormal,
              transitionTimingFunction: d.T.curveEasyEase,
              ...u.q5.borderRadius(d.T.borderRadiusMedium),
            },
            '&:focus': {
              outlineColor: 'initial',
              outlineStyle: 'none',
              outlineWidth: 'initial',
              position: 'relative',
            },
            '&:focus-visible': {
              '&::after': { boxShadow: '0 0 4px 2px ' + d.T.colorBrandForeground1 },
            },
          },
          active: {
            backgroundColor: d.T.colorNeutralBackground1,
            fontWeight: d.T.fontWeightSemibold,
            boxShadow: '0 2px 0 0 ' + d.T.colorBrandForeground1,
            '&:focus-visible': { boxShadow: '0 2px 0 0 transparent' },
          },
          disabled: { opacity: '0.25', cursor: 'default' },
        }),
        x = (e) => {
          let {
            className: t,
            children: a,
            disabled: o,
            __index: r = 0,
            __total: l = 0,
          } = e;
          const { onChangeIndex: s, currentIndex: d, id: c } = h(),
            u = d === r,
            m = (0, n.useRef)(null),
            p = (0, n.useRef)(!0);

          (0, n.useEffect)(() => {
            var e;

            !p.current && u && (null === (e = m.current) || void 0 === e || e.focus());
            p.current = !1;
          }, [u]);
          const b = f();

          return n.createElement(
            'button',
            {
              id: c + '-tab-' + r,
              role: 'tab',
              'aria-selected': u,
              'aria-controls': c + '-tabpanel-' + r,
              disabled: o,
              tabIndex: u ? 0 : -1,
              className: (0, i.z)(b.root, u && b.active, o && b.disabled, t),
              onClick: () => {
                s({ nextIndex: r });
              },
              onKeyDown: (e) => {
                'ArrowRight' === e.key &&
                  (e.preventDefault(), s({ nextIndex: d === l - 1 ? 0 : d + 1 })),
                  'ArrowLeft' === e.key &&
                    (e.preventDefault(), s({ nextIndex: 0 === d ? l - 1 : d - 1 }));
              },
              ref: m,
            },
            a,
          );
        },
        T = (e) => {
          let { children: t, className: a } = e;

          return n.createElement('div', { className: a }, b({ children: t }));
        };
      var y = a(1885),
        E = a(3517);
      const k = { active: { display: 'block' }, inactive: { display: 'none' } },
        N = (e) => {
          let {
            children: t,
            className: a,
            hidden: o,
            id: r,
            isActive: i,
            role: l,
            tabIndex: s,
          } = e;

          return n.createElement(
            y.E.div,
            {
              animate: i ? 'active' : 'inactive',
              className: a,
              hidden: o,
              id: r,
              initial: 'inactive',
              role: l,
              style: { position: 'relative', top: 0 },
              tabIndex: s,
              variants: k,
            },
            t,
          );
        },
        C = (e) => {
          let { children: t, isActive: a } = e;
          const o = (0, E.J)();

          return n.createElement(
            y.E.div,
            {
              variants: {
                initial: { top: 0 },
                active: {
                  opacity: 1,
                  top: 0,
                  transition: {
                    delay: o ? 0 : 0.2,
                    ease: 'easeOut',
                    duration: o ? 0 : 0.2,
                  },
                },
                inactive: {
                  opacity: 0,
                  top: '-4px',
                  transition: { ease: 'easeOut', duration: o ? 0 : 0.2 },
                },
              },
              style: { position: 'relative', top: 0 },
              animate: a ? 'active' : 'inactive',
              initial: 'initial',
            },
            t,
          );
        },
        S = (e) => {
          let { className: t, children: a, __index: o = 0 } = e;
          const { currentIndex: r, id: i } = h(),
            l = r === o;

          return n.createElement(
            N,
            {
              tabIndex: 0,
              role: 'tabpanel',
              key: o,
              isActive: l,
              className: t,
              id: i + '-tabpanel-' + o,
              hidden: !l,
            },
            n.createElement(C, { isActive: l }, a),
          );
        };
      var w = a(9471);
      const z = (0, c.Z)({
          root: {
            display: 'grid',
            columnGap: d.T.spacingHorizontalL,
            rowGap: d.T.spacingVerticalXXL,
          },
          full: { gridTemplateColumns: '1fr' },
          halves: { gridTemplateColumns: '1fr 1fr' },
          thirds: { gridTemplateColumns: '1fr 1fr 1fr' },
          quarters: { gridTemplateColumns: 'repeat(auto-fill, minmax(12rem, 1fr))' },
          small: { gridTemplateColumns: 'repeat(auto-fill, minmax(16rem, 1fr))' },
          large: { gridTemplateColumns: 'repeat(auto-fill, minmax(24rem, 1fr))' },
        }),
        I = (e) => {
          let { children: t, layout: a, className: o } = e;
          const r = z();

          return n.createElement('div', { className: (0, i.z)(r.root, a && r[a], o) }, t);
        };
      var B = a(1303);
      const W = (0, c.Z)({ tab: { textTransform: 'capitalize' } });
      var _ = a(4616);
      const H = ['usage', 'design', 'develop', 'code', 'accessibility', 'content'],
        q = (e) => {
          const [t, a] = ((e) => {
            let t = [[], []];

            return (
              e.forEach((e) => {
                H.includes(e.tab) ? t[0].push(e) : t[1].push(e);
              }),
              t
            );
          })(e);

          return [].concat(
            (0, _.Z)(
              t.sort((e, t) => ((e, t) => H.indexOf(e) - H.indexOf(t))(e.tab, t.tab)),
            ),
            (0, _.Z)(
              a.sort((e, t) => ((e, t) => (e < t ? -1 : e > t ? 1 : 0))(e.tab, t.tab)),
            ),
          );
        },
        R = (e) => {
          let { title: t, definition: a, owners: l, packageName: s, tabs: d } = e;
          const c = (0, w.z)(),
            u = W();

          return n.createElement(
            n.Fragment,
            null,
            n.createElement(o.x, { block: !0, variant: 'jumbo', as: 'h1' }, t),
            a &&
              n.createElement(
                o.x,
                { block: !0, variant: 'leading', className: (0, i.z)(c.my5, c.mb10) },
                a,
              ),
            n.createElement(
              I,
              { layout: 'small' },
              l.map((e, t) => {
                var a, o, i;

                return n.createElement(r.d, {
                  key: t,
                  firstName: e.firstName,
                  lastName: null !== (a = e.lastName) && void 0 !== a ? a : '',
                  role: e.role,
                  avatarSrc: null === (o = e.avatar) || void 0 === o ? void 0 : o.url,
                  onClick:
                    ((i = e.alias),
                    () => {
                      var e;

                      return (
                        i &&
                        (null === (e = window) || void 0 === e
                          ? void 0
                          : e.open(
                              'https://teams.microsoft.com/l/chat/0/0?users=' +
                                i +
                                '@microsoft.com',
                              '_blank',
                            ))
                      );
                    }),
                });
              }),
            ),
            n.createElement(
              p,
              { className: c.mt12 },
              n.createElement(
                g,
                null,
                q(d).map((e, t) => {
                  const a = d.find((t) => t.tab === e.tab);

                  return n.createElement(
                    x,
                    { key: t + '--' + (null == a ? void 0 : a.tab), className: u.tab },
                    null == a ? void 0 : a.tab,
                  );
                }),
              ),
              n.createElement(
                T,
                null,
                q(d).map((e, t) => {
                  let { tab: a, content: o } = e;

                  return n.createElement(
                    S,
                    { key: t + '--' + a },
                    o && n.createElement(B.O, { content: o }),
                  );
                }),
              ),
            ),
          );
        },
        A = (e) => {
          var t, a, n, o, r, i, l, s, d, c;

          return {
            title:
              null !==
                (t =
                  null == e || null === (a = e.componentsJson) || void 0 === a
                    ? void 0
                    : a.title) && void 0 !== t
                ? t
                : '[title]',
            definition:
              null !==
                (n =
                  null == e || null === (o = e.componentsJson) || void 0 === o
                    ? void 0
                    : o.definition) && void 0 !== n
                ? n
                : '[definition]',
            packageName:
              null !==
                (r =
                  null == e || null === (i = e.componentsJson) || void 0 === i
                    ? void 0
                    : i.packageName) && void 0 !== r
                ? r
                : '[packageName]',
            owners:
              null !==
                (l =
                  null == e || null === (s = e.componentsJson) || void 0 === s
                    ? void 0
                    : s.owners) && void 0 !== l
                ? l
                : [],
            tabs:
              null !==
                (d =
                  null == e || null === (c = e.componentsJson) || void 0 === c
                    ? void 0
                    : c.tabs) && void 0 !== d
                ? d
                : [],
          };
        },
        L = (e) => {
          var t, a;
          let { data: o } = e;
          const { title: r } =
              null !==
                (t = null === (a = o.site) || void 0 === a ? void 0 : a.siteMetadata) &&
              void 0 !== t
                ? t
                : '',
            { title: i } = A(o);

          return n.createElement('title', null, r + ' | ' + i);
        };
      var F = (e) => {
        let { data: t } = e;
        const a = A(t);

        return n.createElement(R, a);
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-components-components-json-path-tsx-b88f03660342e5d07d8f.js.map
