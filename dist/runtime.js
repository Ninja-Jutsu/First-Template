(() => {
  "use strict";
  var e,
    r = {},
    t = {};
  function o(e) {
    var n = t[e];
    if (void 0 !== n) return n.exports;
    var a = (t[e] = { id: e, exports: {} });
    return r[e](a, a.exports, o), a.exports;
  }
  (o.m = r),
    (e = []),
    (o.O = (r, t, n, a) => {
      if (!t) {
        var i = 1 / 0;
        for (p = 0; p < e.length; p++) {
          for (var [t, n, a] = e[p], l = !0, f = 0; f < t.length; f++)
            (!1 & a || i >= a) && Object.keys(o.O).every((e) => o.O[e](t[f]))
              ? t.splice(f--, 1)
              : ((l = !1), a < i && (i = a));
          if (l) {
            e.splice(p--, 1);
            var v = n();
            void 0 !== v && (r = v);
          }
        }
        return r;
      }
      a = a || 0;
      for (var p = e.length; p > 0 && e[p - 1][2] > a; p--) e[p] = e[p - 1];
      e[p] = [t, n, a];
    }),
    (o.n = (e) => {
      var r = e && e.__esModule ? () => e.default : () => e;
      return o.d(r, { a: r }), r;
    }),
    (o.d = (e, r) => {
      for (var t in r)
        o.o(r, t) &&
          !o.o(e, t) &&
          Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
    }),
    (o.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (() => {
      var e = { 666: 0 };
      o.O.j = (r) => 0 === e[r];
      var r = (r, t) => {
          var n,
            a,
            [i, l, f] = t,
            v = 0;
          if (i.some((r) => 0 !== e[r])) {
            for (n in l) o.o(l, n) && (o.m[n] = l[n]);
            if (f) var p = f(o);
          }
          for (r && r(t); v < i.length; v++)
            (a = i[v]), o.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
          return o.O(p);
        },
        t = (self.webpackChunktemplate2 = self.webpackChunktemplate2 || []);
      t.forEach(r.bind(null, 0)), (t.push = r.bind(null, t.push.bind(t)));
    })(),
    (o.nc = void 0);
})();
//# sourceMappingURL=runtime.js.map
