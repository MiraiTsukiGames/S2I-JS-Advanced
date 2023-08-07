/*! For license information please see index.2230479849676d45c487.js.LICENSE.txt */
(() => {
  var t = {
      4162: (t, e, n) => {
        "use strict";
        n.d(e, { Z: () => r });
        const r = function (t, e) {
          var n = document.createElement("div");
          n.classList.add("bookCard");
          var r = document.createElement("h2");
          r.innerHTML = "<strong>".concat(t, "</strong>");
          var o = document.createElement("p");
          o.textContent = "Author: ".concat(e);
          var i = document.createElement("button");
          return (
            i.classList.add("read-button"),
            (i.textContent = "Read more"),
            n.append(r, o, i),
            n
          );
        };
      },
      3653: (t, e, n) => {
        "use strict";
        n.d(e, { Z: () => r });
        const r = function (t) {
          var e = document.createElement("div");
          e.classList.add("description");
          var n = document.createElement("p"),
            r = document.createElement("div");
          return (
            r.classList.add("container-description"),
            void 0 === t
              ? ((t = "description not found"), (n.innerHTML = "".concat(t)))
              : ((t = t.value || t), (n.innerHTML = "".concat(t))),
            r.append(e, n),
            r
          );
        };
      },
      4830: (t, e, n) => {
        "use strict";
        n.d(e, { D: () => f, Z: () => p });
        var r = n(4162),
          o = n(9302),
          i = n(2861),
          a = n(7361),
          s = n.n(a);
        function c(t) {
          return (
            (c =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            c(t)
          );
        }
        function u() {
          u = function () {
            return t;
          };
          var t = {},
            e = Object.prototype,
            n = e.hasOwnProperty,
            r =
              Object.defineProperty ||
              function (t, e, n) {
                t[e] = n.value;
              },
            o = "function" == typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator",
            a = o.asyncIterator || "@@asyncIterator",
            s = o.toStringTag || "@@toStringTag";
          function l(t, e, n) {
            return (
              Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            l({}, "");
          } catch (t) {
            l = function (t, e, n) {
              return (t[e] = n);
            };
          }
          function f(t, e, n, o) {
            var i = e && e.prototype instanceof h ? e : h,
              a = Object.create(i.prototype),
              s = new L(o || []);
            return r(a, "_invoke", { value: O(t, n, s) }), a;
          }
          function p(t, e, n) {
            try {
              return { type: "normal", arg: t.call(e, n) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          t.wrap = f;
          var d = {};
          function h() {}
          function m() {}
          function y() {}
          var g = {};
          l(g, i, function () {
            return this;
          });
          var v = Object.getPrototypeOf,
            b = v && v(v(T([])));
          b && b !== e && n.call(b, i) && (g = b);
          var w = (y.prototype = h.prototype = Object.create(g));
          function x(t) {
            ["next", "throw", "return"].forEach(function (e) {
              l(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function E(t, e) {
            function o(r, i, a, s) {
              var u = p(t[r], t, i);
              if ("throw" !== u.type) {
                var l = u.arg,
                  f = l.value;
                return f && "object" == c(f) && n.call(f, "__await")
                  ? e.resolve(f.__await).then(
                      function (t) {
                        o("next", t, a, s);
                      },
                      function (t) {
                        o("throw", t, a, s);
                      },
                    )
                  : e.resolve(f).then(
                      function (t) {
                        (l.value = t), a(l);
                      },
                      function (t) {
                        return o("throw", t, a, s);
                      },
                    );
              }
              s(u.arg);
            }
            var i;
            r(this, "_invoke", {
              value: function (t, n) {
                function r() {
                  return new e(function (e, r) {
                    o(t, n, e, r);
                  });
                }
                return (i = i ? i.then(r, r) : r());
              },
            });
          }
          function O(t, e, n) {
            var r = "suspendedStart";
            return function (o, i) {
              if ("executing" === r)
                throw new Error("Generator is already running");
              if ("completed" === r) {
                if ("throw" === o) throw i;
                return { value: void 0, done: !0 };
              }
              for (n.method = o, n.arg = i; ; ) {
                var a = n.delegate;
                if (a) {
                  var s = S(a, n);
                  if (s) {
                    if (s === d) continue;
                    return s;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                r = "executing";
                var c = p(t, e, n);
                if ("normal" === c.type) {
                  if (
                    ((r = n.done ? "completed" : "suspendedYield"), c.arg === d)
                  )
                    continue;
                  return { value: c.arg, done: n.done };
                }
                "throw" === c.type &&
                  ((r = "completed"), (n.method = "throw"), (n.arg = c.arg));
              }
            };
          }
          function S(t, e) {
            var n = e.method,
              r = t.iterator[n];
            if (void 0 === r)
              return (
                (e.delegate = null),
                ("throw" === n &&
                  t.iterator.return &&
                  ((e.method = "return"),
                  (e.arg = void 0),
                  S(t, e),
                  "throw" === e.method)) ||
                  ("return" !== n &&
                    ((e.method = "throw"),
                    (e.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method",
                    )))),
                d
              );
            var o = p(r, t.iterator, e.arg);
            if ("throw" === o.type)
              return (
                (e.method = "throw"), (e.arg = o.arg), (e.delegate = null), d
              );
            var i = o.arg;
            return i
              ? i.done
                ? ((e[t.resultName] = i.value),
                  (e.next = t.nextLoc),
                  "return" !== e.method &&
                    ((e.method = "next"), (e.arg = void 0)),
                  (e.delegate = null),
                  d)
                : i
              : ((e.method = "throw"),
                (e.arg = new TypeError("iterator result is not an object")),
                (e.delegate = null),
                d);
          }
          function _(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function j(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function L(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(_, this),
              this.reset(!0);
          }
          function T(t) {
            if (t) {
              var e = t[i];
              if (e) return e.call(t);
              if ("function" == typeof t.next) return t;
              if (!isNaN(t.length)) {
                var r = -1,
                  o = function e() {
                    for (; ++r < t.length; )
                      if (n.call(t, r))
                        return (e.value = t[r]), (e.done = !1), e;
                    return (e.value = void 0), (e.done = !0), e;
                  };
                return (o.next = o);
              }
            }
            return { next: A };
          }
          function A() {
            return { value: void 0, done: !0 };
          }
          return (
            (m.prototype = y),
            r(w, "constructor", { value: y, configurable: !0 }),
            r(y, "constructor", { value: m, configurable: !0 }),
            (m.displayName = l(y, s, "GeneratorFunction")),
            (t.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === m || "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (t.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, y)
                  : ((t.__proto__ = y), l(t, s, "GeneratorFunction")),
                (t.prototype = Object.create(w)),
                t
              );
            }),
            (t.awrap = function (t) {
              return { __await: t };
            }),
            x(E.prototype),
            l(E.prototype, a, function () {
              return this;
            }),
            (t.AsyncIterator = E),
            (t.async = function (e, n, r, o, i) {
              void 0 === i && (i = Promise);
              var a = new E(f(e, n, r, o), i);
              return t.isGeneratorFunction(n)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            x(w),
            l(w, s, "Generator"),
            l(w, i, function () {
              return this;
            }),
            l(w, "toString", function () {
              return "[object Generator]";
            }),
            (t.keys = function (t) {
              var e = Object(t),
                n = [];
              for (var r in e) n.push(r);
              return (
                n.reverse(),
                function t() {
                  for (; n.length; ) {
                    var r = n.pop();
                    if (r in e) return (t.value = r), (t.done = !1), t;
                  }
                  return (t.done = !0), t;
                }
              );
            }),
            (t.values = T),
            (L.prototype = {
              constructor: L,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = void 0),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = void 0),
                  this.tryEntries.forEach(j),
                  !t)
                )
                  for (var e in this)
                    "t" === e.charAt(0) &&
                      n.call(this, e) &&
                      !isNaN(+e.slice(1)) &&
                      (this[e] = void 0);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                if (this.done) throw t;
                var e = this;
                function r(n, r) {
                  return (
                    (a.type = "throw"),
                    (a.arg = t),
                    (e.next = n),
                    r && ((e.method = "next"), (e.arg = void 0)),
                    !!r
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i.completion;
                  if ("root" === i.tryLoc) return r("end");
                  if (i.tryLoc <= this.prev) {
                    var s = n.call(i, "catchLoc"),
                      c = n.call(i, "finallyLoc");
                    if (s && c) {
                      if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                    } else if (s) {
                      if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    } else {
                      if (!c)
                        throw new Error(
                          "try statement without catch or finally",
                        );
                      if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ("break" === t || "continue" === t) &&
                  i.tryLoc <= e &&
                  e <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), d)
                    : this.complete(a)
                );
              },
              complete: function (t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                  d
                );
              },
              finish: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (n.finallyLoc === t)
                    return this.complete(n.completion, n.afterLoc), j(n), d;
                }
              },
              catch: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (n.tryLoc === t) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                      var o = r.arg;
                      j(n);
                    }
                    return o;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (t, e, n) {
                return (
                  (this.delegate = {
                    iterator: T(t),
                    resultName: e,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = void 0),
                  d
                );
              },
            }),
            t
          );
        }
        function l(t, e, n, r, o, i, a) {
          try {
            var s = t[i](a),
              c = s.value;
          } catch (t) {
            return void n(t);
          }
          s.done ? e(c) : Promise.resolve(c).then(r, o);
        }
        var f = "https://openlibrary.org";
        const p = (function () {
          var t,
            e =
              ((t = u().mark(function t(e, n) {
                var a, c;
                return u().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            (t.next = 3),
                            i.Z.get(f + "/subjects/".concat(e, ".json"))
                          );
                        case 3:
                          (a = t.sent),
                            (c = a.data.works),
                            404 !== a.status && c.length > 0
                              ? ((n.innerHTML = ""),
                                c.forEach(function (t) {
                                  var e = s()(t, "title"),
                                    i = s()(t, "authors[0].name"),
                                    a = (0, r.Z)(e, i);
                                  n.append(a);
                                  var c = a.querySelector(".read-button");
                                  c.addEventListener("click", function () {
                                    (0, o.Z)(t, a), c.remove();
                                  });
                                }))
                              : (n.innerHTML =
                                  "<h2>No results found for the category: ".concat(
                                    e,
                                    "</h2>",
                                  )),
                            (t.next = 11);
                          break;
                        case 8:
                          (t.prev = 8), (t.t0 = t.catch(0)), console.log(t.t0);
                        case 11:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 8]],
                );
              })),
              function () {
                var e = this,
                  n = arguments;
                return new Promise(function (r, o) {
                  var i = t.apply(e, n);
                  function a(t) {
                    l(i, r, o, a, s, "next", t);
                  }
                  function s(t) {
                    l(i, r, o, a, s, "throw", t);
                  }
                  a(void 0);
                });
              });
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })();
      },
      9302: (t, e, n) => {
        "use strict";
        n.d(e, { Z: () => f });
        var r = n(3653),
          o = n(2861),
          i = n(7361),
          a = n.n(i),
          s = n(4830);
        function c(t) {
          return (
            (c =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            c(t)
          );
        }
        function u() {
          u = function () {
            return t;
          };
          var t = {},
            e = Object.prototype,
            n = e.hasOwnProperty,
            r =
              Object.defineProperty ||
              function (t, e, n) {
                t[e] = n.value;
              },
            o = "function" == typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator",
            a = o.asyncIterator || "@@asyncIterator",
            s = o.toStringTag || "@@toStringTag";
          function l(t, e, n) {
            return (
              Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            l({}, "");
          } catch (t) {
            l = function (t, e, n) {
              return (t[e] = n);
            };
          }
          function f(t, e, n, o) {
            var i = e && e.prototype instanceof h ? e : h,
              a = Object.create(i.prototype),
              s = new L(o || []);
            return r(a, "_invoke", { value: O(t, n, s) }), a;
          }
          function p(t, e, n) {
            try {
              return { type: "normal", arg: t.call(e, n) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          t.wrap = f;
          var d = {};
          function h() {}
          function m() {}
          function y() {}
          var g = {};
          l(g, i, function () {
            return this;
          });
          var v = Object.getPrototypeOf,
            b = v && v(v(T([])));
          b && b !== e && n.call(b, i) && (g = b);
          var w = (y.prototype = h.prototype = Object.create(g));
          function x(t) {
            ["next", "throw", "return"].forEach(function (e) {
              l(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function E(t, e) {
            function o(r, i, a, s) {
              var u = p(t[r], t, i);
              if ("throw" !== u.type) {
                var l = u.arg,
                  f = l.value;
                return f && "object" == c(f) && n.call(f, "__await")
                  ? e.resolve(f.__await).then(
                      function (t) {
                        o("next", t, a, s);
                      },
                      function (t) {
                        o("throw", t, a, s);
                      },
                    )
                  : e.resolve(f).then(
                      function (t) {
                        (l.value = t), a(l);
                      },
                      function (t) {
                        return o("throw", t, a, s);
                      },
                    );
              }
              s(u.arg);
            }
            var i;
            r(this, "_invoke", {
              value: function (t, n) {
                function r() {
                  return new e(function (e, r) {
                    o(t, n, e, r);
                  });
                }
                return (i = i ? i.then(r, r) : r());
              },
            });
          }
          function O(t, e, n) {
            var r = "suspendedStart";
            return function (o, i) {
              if ("executing" === r)
                throw new Error("Generator is already running");
              if ("completed" === r) {
                if ("throw" === o) throw i;
                return { value: void 0, done: !0 };
              }
              for (n.method = o, n.arg = i; ; ) {
                var a = n.delegate;
                if (a) {
                  var s = S(a, n);
                  if (s) {
                    if (s === d) continue;
                    return s;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                r = "executing";
                var c = p(t, e, n);
                if ("normal" === c.type) {
                  if (
                    ((r = n.done ? "completed" : "suspendedYield"), c.arg === d)
                  )
                    continue;
                  return { value: c.arg, done: n.done };
                }
                "throw" === c.type &&
                  ((r = "completed"), (n.method = "throw"), (n.arg = c.arg));
              }
            };
          }
          function S(t, e) {
            var n = e.method,
              r = t.iterator[n];
            if (void 0 === r)
              return (
                (e.delegate = null),
                ("throw" === n &&
                  t.iterator.return &&
                  ((e.method = "return"),
                  (e.arg = void 0),
                  S(t, e),
                  "throw" === e.method)) ||
                  ("return" !== n &&
                    ((e.method = "throw"),
                    (e.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method",
                    )))),
                d
              );
            var o = p(r, t.iterator, e.arg);
            if ("throw" === o.type)
              return (
                (e.method = "throw"), (e.arg = o.arg), (e.delegate = null), d
              );
            var i = o.arg;
            return i
              ? i.done
                ? ((e[t.resultName] = i.value),
                  (e.next = t.nextLoc),
                  "return" !== e.method &&
                    ((e.method = "next"), (e.arg = void 0)),
                  (e.delegate = null),
                  d)
                : i
              : ((e.method = "throw"),
                (e.arg = new TypeError("iterator result is not an object")),
                (e.delegate = null),
                d);
          }
          function _(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function j(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function L(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(_, this),
              this.reset(!0);
          }
          function T(t) {
            if (t) {
              var e = t[i];
              if (e) return e.call(t);
              if ("function" == typeof t.next) return t;
              if (!isNaN(t.length)) {
                var r = -1,
                  o = function e() {
                    for (; ++r < t.length; )
                      if (n.call(t, r))
                        return (e.value = t[r]), (e.done = !1), e;
                    return (e.value = void 0), (e.done = !0), e;
                  };
                return (o.next = o);
              }
            }
            return { next: A };
          }
          function A() {
            return { value: void 0, done: !0 };
          }
          return (
            (m.prototype = y),
            r(w, "constructor", { value: y, configurable: !0 }),
            r(y, "constructor", { value: m, configurable: !0 }),
            (m.displayName = l(y, s, "GeneratorFunction")),
            (t.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === m || "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (t.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, y)
                  : ((t.__proto__ = y), l(t, s, "GeneratorFunction")),
                (t.prototype = Object.create(w)),
                t
              );
            }),
            (t.awrap = function (t) {
              return { __await: t };
            }),
            x(E.prototype),
            l(E.prototype, a, function () {
              return this;
            }),
            (t.AsyncIterator = E),
            (t.async = function (e, n, r, o, i) {
              void 0 === i && (i = Promise);
              var a = new E(f(e, n, r, o), i);
              return t.isGeneratorFunction(n)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            x(w),
            l(w, s, "Generator"),
            l(w, i, function () {
              return this;
            }),
            l(w, "toString", function () {
              return "[object Generator]";
            }),
            (t.keys = function (t) {
              var e = Object(t),
                n = [];
              for (var r in e) n.push(r);
              return (
                n.reverse(),
                function t() {
                  for (; n.length; ) {
                    var r = n.pop();
                    if (r in e) return (t.value = r), (t.done = !1), t;
                  }
                  return (t.done = !0), t;
                }
              );
            }),
            (t.values = T),
            (L.prototype = {
              constructor: L,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = void 0),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = void 0),
                  this.tryEntries.forEach(j),
                  !t)
                )
                  for (var e in this)
                    "t" === e.charAt(0) &&
                      n.call(this, e) &&
                      !isNaN(+e.slice(1)) &&
                      (this[e] = void 0);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                if (this.done) throw t;
                var e = this;
                function r(n, r) {
                  return (
                    (a.type = "throw"),
                    (a.arg = t),
                    (e.next = n),
                    r && ((e.method = "next"), (e.arg = void 0)),
                    !!r
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i.completion;
                  if ("root" === i.tryLoc) return r("end");
                  if (i.tryLoc <= this.prev) {
                    var s = n.call(i, "catchLoc"),
                      c = n.call(i, "finallyLoc");
                    if (s && c) {
                      if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                    } else if (s) {
                      if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    } else {
                      if (!c)
                        throw new Error(
                          "try statement without catch or finally",
                        );
                      if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ("break" === t || "continue" === t) &&
                  i.tryLoc <= e &&
                  e <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), d)
                    : this.complete(a)
                );
              },
              complete: function (t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                  d
                );
              },
              finish: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (n.finallyLoc === t)
                    return this.complete(n.completion, n.afterLoc), j(n), d;
                }
              },
              catch: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (n.tryLoc === t) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                      var o = r.arg;
                      j(n);
                    }
                    return o;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (t, e, n) {
                return (
                  (this.delegate = {
                    iterator: T(t),
                    resultName: e,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = void 0),
                  d
                );
              },
            }),
            t
          );
        }
        function l(t, e, n, r, o, i, a) {
          try {
            var s = t[i](a),
              c = s.value;
          } catch (t) {
            return void n(t);
          }
          s.done ? e(c) : Promise.resolve(c).then(r, o);
        }
        const f = (function () {
          var t,
            e =
              ((t = u().mark(function t(e, n) {
                var i, c, l, f;
                return u().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            (t.next = 3),
                            o.Z.get(s.D + "".concat(e.key, ".json"))
                          );
                        case 3:
                          (i = t.sent),
                            (c = i.data),
                            (l = a()(c, "description")),
                            (f = (0, r.Z)(l)),
                            n.appendChild(f),
                            (t.next = 13);
                          break;
                        case 10:
                          (t.prev = 10), (t.t0 = t.catch(0)), console.log(t.t0);
                        case 13:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 10]],
                );
              })),
              function () {
                var e = this,
                  n = arguments;
                return new Promise(function (r, o) {
                  var i = t.apply(e, n);
                  function a(t) {
                    l(i, r, o, a, s, "next", t);
                  }
                  function s(t) {
                    l(i, r, o, a, s, "throw", t);
                  }
                  a(void 0);
                });
              });
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })();
      },
      5609: (t, e, n) => {
        "use strict";
        n.d(e, { Z: () => p });
        var r = n(8081),
          o = n.n(r),
          i = n(3645),
          a = n.n(i),
          s = n(1667),
          c = n.n(s),
          u = new URL(n(3685), n.b),
          l = a()(o());
        l.push([
          t.id,
          "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap);",
        ]);
        var f = c()(u);
        l.push([
          t.id,
          `* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  line-height: 1.6;\n  font-family: "Poppins", sans-serif;\n}\n\nbody {\n  font-size: 18px;\n  background-color: rgb(253, 252, 244);\n}\n.container {\n  max-width: auto;\n}\nh1 {\n  color: rgb(255, 255, 255);\n  font-size: 6rem;\n  text-align: center;\n  font-weight: bold;\n}\n\n#bar {\n  margin: 0 auto;\n  width: 575px;\n  border-radius: 30px;\n  border: 1px solid #dcdcdc;\n  background-color: white;\n  position: absolute;\n  top: 65%;\n  left: 35%;\n}\n\n#bar:hover {\n  box-shadow: 1px 1px 8px 1px #dcdcdc;\n}\n\n#bar:focus-within {\n  box-shadow: 1px 1px 8px 1px #dcdcdc;\n  outline: none;\n}\n\n#search-input {\n  height: 45px;\n  border: none;\n  width: 500px;\n  font-size: 16px;\n  outline: none;\n  background-color: transparent;\n  border-radius: 30px;\n  margin-left: 15px;\n}\n\n.read-button {\n  background-color: darkblue;\n  color: white;\n  font-size: 14px;\n  border-radius: 5px;\n  border: 1px solid white;\n  padding: 14px 20px;\n  padding-top: 10px;\n}\n\n.read-button:hover {\n  background-color: lightskyblue;\n  color: darkblue;\n  cursor: pointer;\n}\nheader {\n  height: 100vh;\n  width: 100%;\n  background:\n    linear-gradient(rgba(141, 39, 174, 0.3), rgba(141, 39, 174, 0.5)),\n    url(${f}) center/cover no-repeat;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.fa-sharp {\n  font-size: 20px;\n  height: 20px;\n  position: relative;\n  top: 5px;\n  left: 10px;\n  color: black;\n}\n\n#search-button {\n  background-color: transparent;\n  border: none;\n}\n\n#search-button:hover {\n  cursor: pointer;\n  color: blueviolet;\n}\n\n.structural {\n  position: absolute;\n  left: 80px;\n  top: -200%;\n  color: rgb(255, 255, 255);\n  font-size: 2rem;\n  opacity: 0.5;\n}\n\n#books {\n  padding-top: 100px;\n  padding-bottom: 100px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n#book-list h2 {\n  font-size: 2rem;\n}\n#book-list {\n  color: black;\n  opacity: 1;\n  margin-bottom: 50px;\n  max-width: 1200px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(900px, 1fr));\n  grid-template-rows: auto;\n  grid-gap: 1rem;\n  text-align: center;\n}\n\n.description {\n  text-align: center;\n  line-height: 1.8;\n}\n\n.container-description {\n  max-width: 900px;\n}\n\n.bookCard {\n  text-align: center;\n  padding: 3rem;\n  border: 1px solid black;\n  background-color: rgb(233, 233, 233);\n  border-radius: 5px;\n}\n`,
          "",
        ]);
        const p = l;
      },
      7403: (t, e, n) => {
        "use strict";
        n.d(e, { Z: () => s });
        var r = n(8081),
          o = n.n(r),
          i = n(3645),
          a = n.n(i)()(o());
        a.push([
          t.id,
          "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap);",
        ]),
          a.push([
            t.id,
            '@media only screen and (max-width: 1280px) {\n  #bar {\n    left: 30%;\n  }\n}\n\n@media only screen and (max-width: 1024px) {\n  #bar {\n    top: 70%;\n    left: 20%;\n  }\n}\n\n@media only screen and (max-width: 912px) {\n  body {\n    font-size: 14px;\n    overflow-x: hidden;\n  }\n\n  h1 {\n    font-size: 5rem;\n  }\n\n  #bar {\n    max-width: 100%;\n    top: 32%;\n    left: 15%;\n  }\n\n  #search-input {\n    height: 35px;\n    max-width: 100%;\n    font-size: 14px;\n  }\n\n  header {\n    height: 50vh;\n  }\n\n  .structural {\n    position: absolute;\n    left: 80px;\n    top: -160%;\n    color: rgb(255, 255, 255);\n    font-size: 2rem;\n    opacity: 0.5;\n  }\n\n  #book-list h2 {\n    font-size: 1.5rem;\n  }\n\n  #book-list {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .bookCard {\n    padding: 2em;\n    max-width: 80%;\n  }\n\n  .container-description {\n    max-width: 100%;\n  }\n\n  .description {\n    text-align: center;\n    line-height: 1.8;\n  }\n\n  .read-button {\n    background-color: darkblue;\n    color: white;\n    font-size: 14px;\n    border-radius: 5px;\n    border: 1px solid white;\n    padding: 14px 20px;\n    padding-top: 10px;\n  }\n\n  .read-button:hover {\n    background-color: lightskyblue;\n    color: darkblue;\n    cursor: pointer;\n  }\n}\n\n@media only screen and (max-width: 576px) {\n  * {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    line-height: 1.6;\n    font-family: "Poppins", sans-serif;\n  }\n\n  body {\n    font-size: 8px;\n    overflow-x: hidden;\n  }\n\n  h1 {\n    font-size: 2.5rem;\n  }\n\n  #bar {\n    max-width: 80%;\n    top: 35%;\n    left: 10%;\n  }\n\n  #search-input {\n    height: 35px;\n    max-width: 80%;\n    font-size: 14px;\n  }\n\n  header {\n    height: 50vh;\n  }\n\n  #book-list h2 {\n    font-size: 1rem;\n  }\n\n  .structural {\n    position: absolute;\n    left: 80px;\n    top: -120%;\n    color: rgb(255, 255, 255);\n    font-size: 1rem;\n    opacity: 0.5;\n  }\n  #book-list {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .bookCard {\n    padding: 1em;\n    max-width: 80%;\n  }\n\n  .container-description {\n    max-width: 100%;\n  }\n\n  .description {\n    text-align: center;\n    line-height: 1.8;\n  }\n\n  .fa-sharp {\n    font-size: 15px;\n    height: 15px;\n    position: relative;\n    top: 0;\n    left: 10px;\n    color: black;\n  }\n\n  .read-button {\n    background-color: darkblue;\n    color: white;\n    font-size: 8px;\n    border-radius: 5px;\n    border: 1px solid white;\n    padding: 5px 10px;\n    padding-top: 5px;\n  }\n\n  .read-button:hover {\n    background-color: lightskyblue;\n    color: darkblue;\n    cursor: pointer;\n  }\n}\n',
            "",
          ]);
        const s = a;
      },
      3645: (t) => {
        "use strict";
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (n += "@supports (".concat(e[4], ") {")),
                  e[2] && (n += "@media ".concat(e[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {",
                    )),
                  (n += t(e)),
                  r && (n += "}"),
                  e[2] && (n += "}"),
                  e[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (e.i = function (t, n, r, o, i) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var a = {};
              if (r)
                for (var s = 0; s < this.length; s++) {
                  var c = this[s][0];
                  null != c && (a[c] = !0);
                }
              for (var u = 0; u < t.length; u++) {
                var l = [].concat(t[u]);
                (r && a[l[0]]) ||
                  (void 0 !== i &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = i)),
                  n &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = n))
                      : (l[2] = n)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = o))
                      : (l[4] = "".concat(o))),
                  e.push(l));
              }
            }),
            e
          );
        };
      },
      1667: (t) => {
        "use strict";
        t.exports = function (t, e) {
          return (
            e || (e = {}),
            t
              ? ((t = String(t.__esModule ? t.default : t)),
                /^['"].*['"]$/.test(t) && (t = t.slice(1, -1)),
                e.hash && (t += e.hash),
                /["'() \t\n]|(%20)/.test(t) || e.needQuotes
                  ? '"'.concat(
                      t.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                      '"',
                    )
                  : t)
              : t
          );
        };
      },
      8081: (t) => {
        "use strict";
        t.exports = function (t) {
          return t[1];
        };
      },
      1989: (t, e, n) => {
        var r = n(1789),
          o = n(401),
          i = n(7667),
          a = n(1327),
          s = n(1866);
        function c(t) {
          var e = -1,
            n = null == t ? 0 : t.length;
          for (this.clear(); ++e < n; ) {
            var r = t[e];
            this.set(r[0], r[1]);
          }
        }
        (c.prototype.clear = r),
          (c.prototype.delete = o),
          (c.prototype.get = i),
          (c.prototype.has = a),
          (c.prototype.set = s),
          (t.exports = c);
      },
      8407: (t, e, n) => {
        var r = n(7040),
          o = n(4125),
          i = n(2117),
          a = n(7518),
          s = n(4705);
        function c(t) {
          var e = -1,
            n = null == t ? 0 : t.length;
          for (this.clear(); ++e < n; ) {
            var r = t[e];
            this.set(r[0], r[1]);
          }
        }
        (c.prototype.clear = r),
          (c.prototype.delete = o),
          (c.prototype.get = i),
          (c.prototype.has = a),
          (c.prototype.set = s),
          (t.exports = c);
      },
      7071: (t, e, n) => {
        var r = n(852)(n(5639), "Map");
        t.exports = r;
      },
      3369: (t, e, n) => {
        var r = n(4785),
          o = n(1285),
          i = n(6e3),
          a = n(9916),
          s = n(5265);
        function c(t) {
          var e = -1,
            n = null == t ? 0 : t.length;
          for (this.clear(); ++e < n; ) {
            var r = t[e];
            this.set(r[0], r[1]);
          }
        }
        (c.prototype.clear = r),
          (c.prototype.delete = o),
          (c.prototype.get = i),
          (c.prototype.has = a),
          (c.prototype.set = s),
          (t.exports = c);
      },
      2705: (t, e, n) => {
        var r = n(5639).Symbol;
        t.exports = r;
      },
      9932: (t) => {
        t.exports = function (t, e) {
          for (
            var n = -1, r = null == t ? 0 : t.length, o = Array(r);
            ++n < r;

          )
            o[n] = e(t[n], n, t);
          return o;
        };
      },
      8470: (t, e, n) => {
        var r = n(7813);
        t.exports = function (t, e) {
          for (var n = t.length; n--; ) if (r(t[n][0], e)) return n;
          return -1;
        };
      },
      7786: (t, e, n) => {
        var r = n(1811),
          o = n(327);
        t.exports = function (t, e) {
          for (var n = 0, i = (e = r(e, t)).length; null != t && n < i; )
            t = t[o(e[n++])];
          return n && n == i ? t : void 0;
        };
      },
      4239: (t, e, n) => {
        var r = n(2705),
          o = n(9607),
          i = n(2333),
          a = r ? r.toStringTag : void 0;
        t.exports = function (t) {
          return null == t
            ? void 0 === t
              ? "[object Undefined]"
              : "[object Null]"
            : a && a in Object(t)
            ? o(t)
            : i(t);
        };
      },
      8458: (t, e, n) => {
        var r = n(3560),
          o = n(5346),
          i = n(3218),
          a = n(346),
          s = /^\[object .+?Constructor\]$/,
          c = Function.prototype,
          u = Object.prototype,
          l = c.toString,
          f = u.hasOwnProperty,
          p = RegExp(
            "^" +
              l
                .call(f)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?",
                ) +
              "$",
          );
        t.exports = function (t) {
          return !(!i(t) || o(t)) && (r(t) ? p : s).test(a(t));
        };
      },
      531: (t, e, n) => {
        var r = n(2705),
          o = n(9932),
          i = n(1469),
          a = n(3448),
          s = r ? r.prototype : void 0,
          c = s ? s.toString : void 0;
        t.exports = function t(e) {
          if ("string" == typeof e) return e;
          if (i(e)) return o(e, t) + "";
          if (a(e)) return c ? c.call(e) : "";
          var n = e + "";
          return "0" == n && 1 / e == -1 / 0 ? "-0" : n;
        };
      },
      1811: (t, e, n) => {
        var r = n(1469),
          o = n(5403),
          i = n(5514),
          a = n(9833);
        t.exports = function (t, e) {
          return r(t) ? t : o(t, e) ? [t] : i(a(t));
        };
      },
      4429: (t, e, n) => {
        var r = n(5639)["__core-js_shared__"];
        t.exports = r;
      },
      1957: (t, e, n) => {
        var r = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
        t.exports = r;
      },
      5050: (t, e, n) => {
        var r = n(7019);
        t.exports = function (t, e) {
          var n = t.__data__;
          return r(e) ? n["string" == typeof e ? "string" : "hash"] : n.map;
        };
      },
      852: (t, e, n) => {
        var r = n(8458),
          o = n(7801);
        t.exports = function (t, e) {
          var n = o(t, e);
          return r(n) ? n : void 0;
        };
      },
      9607: (t, e, n) => {
        var r = n(2705),
          o = Object.prototype,
          i = o.hasOwnProperty,
          a = o.toString,
          s = r ? r.toStringTag : void 0;
        t.exports = function (t) {
          var e = i.call(t, s),
            n = t[s];
          try {
            t[s] = void 0;
            var r = !0;
          } catch (t) {}
          var o = a.call(t);
          return r && (e ? (t[s] = n) : delete t[s]), o;
        };
      },
      7801: (t) => {
        t.exports = function (t, e) {
          return null == t ? void 0 : t[e];
        };
      },
      1789: (t, e, n) => {
        var r = n(4536);
        t.exports = function () {
          (this.__data__ = r ? r(null) : {}), (this.size = 0);
        };
      },
      401: (t) => {
        t.exports = function (t) {
          var e = this.has(t) && delete this.__data__[t];
          return (this.size -= e ? 1 : 0), e;
        };
      },
      7667: (t, e, n) => {
        var r = n(4536),
          o = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
          var e = this.__data__;
          if (r) {
            var n = e[t];
            return "__lodash_hash_undefined__" === n ? void 0 : n;
          }
          return o.call(e, t) ? e[t] : void 0;
        };
      },
      1327: (t, e, n) => {
        var r = n(4536),
          o = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
          var e = this.__data__;
          return r ? void 0 !== e[t] : o.call(e, t);
        };
      },
      1866: (t, e, n) => {
        var r = n(4536);
        t.exports = function (t, e) {
          var n = this.__data__;
          return (
            (this.size += this.has(t) ? 0 : 1),
            (n[t] = r && void 0 === e ? "__lodash_hash_undefined__" : e),
            this
          );
        };
      },
      5403: (t, e, n) => {
        var r = n(1469),
          o = n(3448),
          i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          a = /^\w*$/;
        t.exports = function (t, e) {
          if (r(t)) return !1;
          var n = typeof t;
          return (
            !(
              "number" != n &&
              "symbol" != n &&
              "boolean" != n &&
              null != t &&
              !o(t)
            ) ||
            a.test(t) ||
            !i.test(t) ||
            (null != e && t in Object(e))
          );
        };
      },
      7019: (t) => {
        t.exports = function (t) {
          var e = typeof t;
          return "string" == e ||
            "number" == e ||
            "symbol" == e ||
            "boolean" == e
            ? "__proto__" !== t
            : null === t;
        };
      },
      5346: (t, e, n) => {
        var r,
          o = n(4429),
          i = (r = /[^.]+$/.exec((o && o.keys && o.keys.IE_PROTO) || ""))
            ? "Symbol(src)_1." + r
            : "";
        t.exports = function (t) {
          return !!i && i in t;
        };
      },
      7040: (t) => {
        t.exports = function () {
          (this.__data__ = []), (this.size = 0);
        };
      },
      4125: (t, e, n) => {
        var r = n(8470),
          o = Array.prototype.splice;
        t.exports = function (t) {
          var e = this.__data__,
            n = r(e, t);
          return !(
            n < 0 ||
            (n == e.length - 1 ? e.pop() : o.call(e, n, 1), --this.size, 0)
          );
        };
      },
      2117: (t, e, n) => {
        var r = n(8470);
        t.exports = function (t) {
          var e = this.__data__,
            n = r(e, t);
          return n < 0 ? void 0 : e[n][1];
        };
      },
      7518: (t, e, n) => {
        var r = n(8470);
        t.exports = function (t) {
          return r(this.__data__, t) > -1;
        };
      },
      4705: (t, e, n) => {
        var r = n(8470);
        t.exports = function (t, e) {
          var n = this.__data__,
            o = r(n, t);
          return o < 0 ? (++this.size, n.push([t, e])) : (n[o][1] = e), this;
        };
      },
      4785: (t, e, n) => {
        var r = n(1989),
          o = n(8407),
          i = n(7071);
        t.exports = function () {
          (this.size = 0),
            (this.__data__ = {
              hash: new r(),
              map: new (i || o)(),
              string: new r(),
            });
        };
      },
      1285: (t, e, n) => {
        var r = n(5050);
        t.exports = function (t) {
          var e = r(this, t).delete(t);
          return (this.size -= e ? 1 : 0), e;
        };
      },
      6e3: (t, e, n) => {
        var r = n(5050);
        t.exports = function (t) {
          return r(this, t).get(t);
        };
      },
      9916: (t, e, n) => {
        var r = n(5050);
        t.exports = function (t) {
          return r(this, t).has(t);
        };
      },
      5265: (t, e, n) => {
        var r = n(5050);
        t.exports = function (t, e) {
          var n = r(this, t),
            o = n.size;
          return n.set(t, e), (this.size += n.size == o ? 0 : 1), this;
        };
      },
      4523: (t, e, n) => {
        var r = n(8306);
        t.exports = function (t) {
          var e = r(t, function (t) {
              return 500 === n.size && n.clear(), t;
            }),
            n = e.cache;
          return e;
        };
      },
      4536: (t, e, n) => {
        var r = n(852)(Object, "create");
        t.exports = r;
      },
      2333: (t) => {
        var e = Object.prototype.toString;
        t.exports = function (t) {
          return e.call(t);
        };
      },
      5639: (t, e, n) => {
        var r = n(1957),
          o = "object" == typeof self && self && self.Object === Object && self,
          i = r || o || Function("return this")();
        t.exports = i;
      },
      5514: (t, e, n) => {
        var r = n(4523),
          o =
            /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          i = /\\(\\)?/g,
          a = r(function (t) {
            var e = [];
            return (
              46 === t.charCodeAt(0) && e.push(""),
              t.replace(o, function (t, n, r, o) {
                e.push(r ? o.replace(i, "$1") : n || t);
              }),
              e
            );
          });
        t.exports = a;
      },
      327: (t, e, n) => {
        var r = n(3448);
        t.exports = function (t) {
          if ("string" == typeof t || r(t)) return t;
          var e = t + "";
          return "0" == e && 1 / t == -1 / 0 ? "-0" : e;
        };
      },
      346: (t) => {
        var e = Function.prototype.toString;
        t.exports = function (t) {
          if (null != t) {
            try {
              return e.call(t);
            } catch (t) {}
            try {
              return t + "";
            } catch (t) {}
          }
          return "";
        };
      },
      7813: (t) => {
        t.exports = function (t, e) {
          return t === e || (t != t && e != e);
        };
      },
      7361: (t, e, n) => {
        var r = n(7786);
        t.exports = function (t, e, n) {
          var o = null == t ? void 0 : r(t, e);
          return void 0 === o ? n : o;
        };
      },
      1469: (t) => {
        var e = Array.isArray;
        t.exports = e;
      },
      3560: (t, e, n) => {
        var r = n(4239),
          o = n(3218);
        t.exports = function (t) {
          if (!o(t)) return !1;
          var e = r(t);
          return (
            "[object Function]" == e ||
            "[object GeneratorFunction]" == e ||
            "[object AsyncFunction]" == e ||
            "[object Proxy]" == e
          );
        };
      },
      3218: (t) => {
        t.exports = function (t) {
          var e = typeof t;
          return null != t && ("object" == e || "function" == e);
        };
      },
      7005: (t) => {
        t.exports = function (t) {
          return null != t && "object" == typeof t;
        };
      },
      3448: (t, e, n) => {
        var r = n(4239),
          o = n(7005);
        t.exports = function (t) {
          return "symbol" == typeof t || (o(t) && "[object Symbol]" == r(t));
        };
      },
      8306: (t, e, n) => {
        var r = n(3369);
        function o(t, e) {
          if ("function" != typeof t || (null != e && "function" != typeof e))
            throw new TypeError("Expected a function");
          var n = function () {
            var r = arguments,
              o = e ? e.apply(this, r) : r[0],
              i = n.cache;
            if (i.has(o)) return i.get(o);
            var a = t.apply(this, r);
            return (n.cache = i.set(o, a) || i), a;
          };
          return (n.cache = new (o.Cache || r)()), n;
        }
        (o.Cache = r), (t.exports = o);
      },
      9833: (t, e, n) => {
        var r = n(531);
        t.exports = function (t) {
          return null == t ? "" : r(t);
        };
      },
      3379: (t) => {
        "use strict";
        var e = [];
        function n(t) {
          for (var n = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === t) {
              n = r;
              break;
            }
          return n;
        }
        function r(t, r) {
          for (var i = {}, a = [], s = 0; s < t.length; s++) {
            var c = t[s],
              u = r.base ? c[0] + r.base : c[0],
              l = i[u] || 0,
              f = "".concat(u, " ").concat(l);
            i[u] = l + 1;
            var p = n(f),
              d = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== p) e[p].references++, e[p].updater(d);
            else {
              var h = o(d, r);
              (r.byIndex = s),
                e.splice(s, 0, { identifier: f, updater: h, references: 1 });
            }
            a.push(f);
          }
          return a;
        }
        function o(t, e) {
          var n = e.domAPI(e);
          return (
            n.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                n.update((t = e));
              } else n.remove();
            }
          );
        }
        t.exports = function (t, o) {
          var i = r((t = t || []), (o = o || {}));
          return function (t) {
            t = t || [];
            for (var a = 0; a < i.length; a++) {
              var s = n(i[a]);
              e[s].references--;
            }
            for (var c = r(t, o), u = 0; u < i.length; u++) {
              var l = n(i[u]);
              0 === e[l].references && (e[l].updater(), e.splice(l, 1));
            }
            i = c;
          };
        };
      },
      569: (t) => {
        "use strict";
        var e = {};
        t.exports = function (t, n) {
          var r = (function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (t) {
                  n = null;
                }
              e[t] = n;
            }
            return e[t];
          })(t);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(n);
        };
      },
      9216: (t) => {
        "use strict";
        t.exports = function (t) {
          var e = document.createElement("style");
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
        };
      },
      3565: (t, e, n) => {
        "use strict";
        t.exports = function (t) {
          var e = n.nc;
          e && t.setAttribute("nonce", e);
        };
      },
      7795: (t) => {
        "use strict";
        t.exports = function (t) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = t.insertStyleElement(t);
          return {
            update: function (n) {
              !(function (t, e, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var o = void 0 !== n.layer;
                o &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {",
                  )),
                  (r += n.css),
                  o && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var i = n.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */",
                    )),
                  e.styleTagTransform(r, t, e.options);
              })(e, t, n);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
      4589: (t) => {
        "use strict";
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
      3685: (t, e, n) => {
        "use strict";
        t.exports = n.p + "img/8366d467eb3097fdbd2b.jpg";
      },
      2861: (t, e, n) => {
        "use strict";
        function r(t, e) {
          return function () {
            return t.apply(e, arguments);
          };
        }
        n.d(e, { Z: () => Bt });
        const { toString: o } = Object.prototype,
          { getPrototypeOf: i } = Object,
          a =
            ((s = Object.create(null)),
            (t) => {
              const e = o.call(t);
              return s[e] || (s[e] = e.slice(8, -1).toLowerCase());
            });
        var s;
        const c = (t) => ((t = t.toLowerCase()), (e) => a(e) === t),
          u = (t) => (e) => typeof e === t,
          { isArray: l } = Array,
          f = u("undefined"),
          p = c("ArrayBuffer"),
          d = u("string"),
          h = u("function"),
          m = u("number"),
          y = (t) => null !== t && "object" == typeof t,
          g = (t) => {
            if ("object" !== a(t)) return !1;
            const e = i(t);
            return !(
              (null !== e &&
                e !== Object.prototype &&
                null !== Object.getPrototypeOf(e)) ||
              Symbol.toStringTag in t ||
              Symbol.iterator in t
            );
          },
          v = c("Date"),
          b = c("File"),
          w = c("Blob"),
          x = c("FileList"),
          E = c("URLSearchParams");
        function O(t, e, { allOwnKeys: n = !1 } = {}) {
          if (null == t) return;
          let r, o;
          if (("object" != typeof t && (t = [t]), l(t)))
            for (r = 0, o = t.length; r < o; r++) e.call(null, t[r], r, t);
          else {
            const o = n ? Object.getOwnPropertyNames(t) : Object.keys(t),
              i = o.length;
            let a;
            for (r = 0; r < i; r++) (a = o[r]), e.call(null, t[a], a, t);
          }
        }
        function S(t, e) {
          e = e.toLowerCase();
          const n = Object.keys(t);
          let r,
            o = n.length;
          for (; o-- > 0; ) if (((r = n[o]), e === r.toLowerCase())) return r;
          return null;
        }
        const _ =
            "undefined" != typeof globalThis
              ? globalThis
              : "undefined" != typeof self
              ? self
              : "undefined" != typeof window
              ? window
              : global,
          j = (t) => !f(t) && t !== _,
          L =
            ((T = "undefined" != typeof Uint8Array && i(Uint8Array)),
            (t) => T && t instanceof T);
        var T;
        const A = c("HTMLFormElement"),
          R = (
            ({ hasOwnProperty: t }) =>
            (e, n) =>
              t.call(e, n)
          )(Object.prototype),
          P = c("RegExp"),
          k = (t, e) => {
            const n = Object.getOwnPropertyDescriptors(t),
              r = {};
            O(n, (n, o) => {
              !1 !== e(n, o, t) && (r[o] = n);
            }),
              Object.defineProperties(t, r);
          },
          N = "abcdefghijklmnopqrstuvwxyz",
          C = "0123456789",
          F = { DIGIT: C, ALPHA: N, ALPHA_DIGIT: N + N.toUpperCase() + C },
          U = c("AsyncFunction"),
          B = {
            isArray: l,
            isArrayBuffer: p,
            isBuffer: function (t) {
              return (
                null !== t &&
                !f(t) &&
                null !== t.constructor &&
                !f(t.constructor) &&
                h(t.constructor.isBuffer) &&
                t.constructor.isBuffer(t)
              );
            },
            isFormData: (t) => {
              let e;
              return (
                t &&
                (("function" == typeof FormData && t instanceof FormData) ||
                  (h(t.append) &&
                    ("formdata" === (e = a(t)) ||
                      ("object" === e &&
                        h(t.toString) &&
                        "[object FormData]" === t.toString()))))
              );
            },
            isArrayBufferView: function (t) {
              let e;
              return (
                (e =
                  "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
                    ? ArrayBuffer.isView(t)
                    : t && t.buffer && p(t.buffer)),
                e
              );
            },
            isString: d,
            isNumber: m,
            isBoolean: (t) => !0 === t || !1 === t,
            isObject: y,
            isPlainObject: g,
            isUndefined: f,
            isDate: v,
            isFile: b,
            isBlob: w,
            isRegExp: P,
            isFunction: h,
            isStream: (t) => y(t) && h(t.pipe),
            isURLSearchParams: E,
            isTypedArray: L,
            isFileList: x,
            forEach: O,
            merge: function t() {
              const { caseless: e } = (j(this) && this) || {},
                n = {},
                r = (r, o) => {
                  const i = (e && S(n, o)) || o;
                  g(n[i]) && g(r)
                    ? (n[i] = t(n[i], r))
                    : g(r)
                    ? (n[i] = t({}, r))
                    : l(r)
                    ? (n[i] = r.slice())
                    : (n[i] = r);
                };
              for (let t = 0, e = arguments.length; t < e; t++)
                arguments[t] && O(arguments[t], r);
              return n;
            },
            extend: (t, e, n, { allOwnKeys: o } = {}) => (
              O(
                e,
                (e, o) => {
                  n && h(e) ? (t[o] = r(e, n)) : (t[o] = e);
                },
                { allOwnKeys: o },
              ),
              t
            ),
            trim: (t) =>
              t.trim
                ? t.trim()
                : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
            stripBOM: (t) => (65279 === t.charCodeAt(0) && (t = t.slice(1)), t),
            inherits: (t, e, n, r) => {
              (t.prototype = Object.create(e.prototype, r)),
                (t.prototype.constructor = t),
                Object.defineProperty(t, "super", { value: e.prototype }),
                n && Object.assign(t.prototype, n);
            },
            toFlatObject: (t, e, n, r) => {
              let o, a, s;
              const c = {};
              if (((e = e || {}), null == t)) return e;
              do {
                for (o = Object.getOwnPropertyNames(t), a = o.length; a-- > 0; )
                  (s = o[a]),
                    (r && !r(s, t, e)) || c[s] || ((e[s] = t[s]), (c[s] = !0));
                t = !1 !== n && i(t);
              } while (t && (!n || n(t, e)) && t !== Object.prototype);
              return e;
            },
            kindOf: a,
            kindOfTest: c,
            endsWith: (t, e, n) => {
              (t = String(t)),
                (void 0 === n || n > t.length) && (n = t.length),
                (n -= e.length);
              const r = t.indexOf(e, n);
              return -1 !== r && r === n;
            },
            toArray: (t) => {
              if (!t) return null;
              if (l(t)) return t;
              let e = t.length;
              if (!m(e)) return null;
              const n = new Array(e);
              for (; e-- > 0; ) n[e] = t[e];
              return n;
            },
            forEachEntry: (t, e) => {
              const n = (t && t[Symbol.iterator]).call(t);
              let r;
              for (; (r = n.next()) && !r.done; ) {
                const n = r.value;
                e.call(t, n[0], n[1]);
              }
            },
            matchAll: (t, e) => {
              let n;
              const r = [];
              for (; null !== (n = t.exec(e)); ) r.push(n);
              return r;
            },
            isHTMLForm: A,
            hasOwnProperty: R,
            hasOwnProp: R,
            reduceDescriptors: k,
            freezeMethods: (t) => {
              k(t, (e, n) => {
                if (h(t) && -1 !== ["arguments", "caller", "callee"].indexOf(n))
                  return !1;
                const r = t[n];
                h(r) &&
                  ((e.enumerable = !1),
                  "writable" in e
                    ? (e.writable = !1)
                    : e.set ||
                      (e.set = () => {
                        throw Error(
                          "Can not rewrite read-only method '" + n + "'",
                        );
                      }));
              });
            },
            toObjectSet: (t, e) => {
              const n = {},
                r = (t) => {
                  t.forEach((t) => {
                    n[t] = !0;
                  });
                };
              return l(t) ? r(t) : r(String(t).split(e)), n;
            },
            toCamelCase: (t) =>
              t
                .toLowerCase()
                .replace(/[-_\s]([a-z\d])(\w*)/g, function (t, e, n) {
                  return e.toUpperCase() + n;
                }),
            noop: () => {},
            toFiniteNumber: (t, e) => ((t = +t), Number.isFinite(t) ? t : e),
            findKey: S,
            global: _,
            isContextDefined: j,
            ALPHABET: F,
            generateString: (t = 16, e = F.ALPHA_DIGIT) => {
              let n = "";
              const { length: r } = e;
              for (; t--; ) n += e[(Math.random() * r) | 0];
              return n;
            },
            isSpecCompliantForm: function (t) {
              return !!(
                t &&
                h(t.append) &&
                "FormData" === t[Symbol.toStringTag] &&
                t[Symbol.iterator]
              );
            },
            toJSONObject: (t) => {
              const e = new Array(10),
                n = (t, r) => {
                  if (y(t)) {
                    if (e.indexOf(t) >= 0) return;
                    if (!("toJSON" in t)) {
                      e[r] = t;
                      const o = l(t) ? [] : {};
                      return (
                        O(t, (t, e) => {
                          const i = n(t, r + 1);
                          !f(i) && (o[e] = i);
                        }),
                        (e[r] = void 0),
                        o
                      );
                    }
                  }
                  return t;
                };
              return n(t, 0);
            },
            isAsyncFn: U,
            isThenable: (t) => t && (y(t) || h(t)) && h(t.then) && h(t.catch),
          };
        function D(t, e, n, r, o) {
          Error.call(this),
            Error.captureStackTrace
              ? Error.captureStackTrace(this, this.constructor)
              : (this.stack = new Error().stack),
            (this.message = t),
            (this.name = "AxiosError"),
            e && (this.code = e),
            n && (this.config = n),
            r && (this.request = r),
            o && (this.response = o);
        }
        B.inherits(D, Error, {
          toJSON: function () {
            return {
              message: this.message,
              name: this.name,
              description: this.description,
              number: this.number,
              fileName: this.fileName,
              lineNumber: this.lineNumber,
              columnNumber: this.columnNumber,
              stack: this.stack,
              config: B.toJSONObject(this.config),
              code: this.code,
              status:
                this.response && this.response.status
                  ? this.response.status
                  : null,
            };
          },
        });
        const z = D.prototype,
          I = {};
        [
          "ERR_BAD_OPTION_VALUE",
          "ERR_BAD_OPTION",
          "ECONNABORTED",
          "ETIMEDOUT",
          "ERR_NETWORK",
          "ERR_FR_TOO_MANY_REDIRECTS",
          "ERR_DEPRECATED",
          "ERR_BAD_RESPONSE",
          "ERR_BAD_REQUEST",
          "ERR_CANCELED",
          "ERR_NOT_SUPPORT",
          "ERR_INVALID_URL",
        ].forEach((t) => {
          I[t] = { value: t };
        }),
          Object.defineProperties(D, I),
          Object.defineProperty(z, "isAxiosError", { value: !0 }),
          (D.from = (t, e, n, r, o, i) => {
            const a = Object.create(z);
            return (
              B.toFlatObject(
                t,
                a,
                function (t) {
                  return t !== Error.prototype;
                },
                (t) => "isAxiosError" !== t,
              ),
              D.call(a, t.message, e, n, r, o),
              (a.cause = t),
              (a.name = t.name),
              i && Object.assign(a, i),
              a
            );
          });
        const M = D;
        function q(t) {
          return B.isPlainObject(t) || B.isArray(t);
        }
        function H(t) {
          return B.endsWith(t, "[]") ? t.slice(0, -2) : t;
        }
        function G(t, e, n) {
          return t
            ? t
                .concat(e)
                .map(function (t, e) {
                  return (t = H(t)), !n && e ? "[" + t + "]" : t;
                })
                .join(n ? "." : "")
            : e;
        }
        const Z = B.toFlatObject(B, {}, null, function (t) {
            return /^is[A-Z]/.test(t);
          }),
          $ = function (t, e, n) {
            if (!B.isObject(t)) throw new TypeError("target must be an object");
            e = e || new FormData();
            const r = (n = B.toFlatObject(
                n,
                { metaTokens: !0, dots: !1, indexes: !1 },
                !1,
                function (t, e) {
                  return !B.isUndefined(e[t]);
                },
              )).metaTokens,
              o = n.visitor || u,
              i = n.dots,
              a = n.indexes,
              s =
                (n.Blob || ("undefined" != typeof Blob && Blob)) &&
                B.isSpecCompliantForm(e);
            if (!B.isFunction(o))
              throw new TypeError("visitor must be a function");
            function c(t) {
              if (null === t) return "";
              if (B.isDate(t)) return t.toISOString();
              if (!s && B.isBlob(t))
                throw new M("Blob is not supported. Use a Buffer instead.");
              return B.isArrayBuffer(t) || B.isTypedArray(t)
                ? s && "function" == typeof Blob
                  ? new Blob([t])
                  : Buffer.from(t)
                : t;
            }
            function u(t, n, o) {
              let s = t;
              if (t && !o && "object" == typeof t)
                if (B.endsWith(n, "{}"))
                  (n = r ? n : n.slice(0, -2)), (t = JSON.stringify(t));
                else if (
                  (B.isArray(t) &&
                    (function (t) {
                      return B.isArray(t) && !t.some(q);
                    })(t)) ||
                  ((B.isFileList(t) || B.endsWith(n, "[]")) &&
                    (s = B.toArray(t)))
                )
                  return (
                    (n = H(n)),
                    s.forEach(function (t, r) {
                      !B.isUndefined(t) &&
                        null !== t &&
                        e.append(
                          !0 === a ? G([n], r, i) : null === a ? n : n + "[]",
                          c(t),
                        );
                    }),
                    !1
                  );
              return !!q(t) || (e.append(G(o, n, i), c(t)), !1);
            }
            const l = [],
              f = Object.assign(Z, {
                defaultVisitor: u,
                convertValue: c,
                isVisitable: q,
              });
            if (!B.isObject(t)) throw new TypeError("data must be an object");
            return (
              (function t(n, r) {
                if (!B.isUndefined(n)) {
                  if (-1 !== l.indexOf(n))
                    throw Error(
                      "Circular reference detected in " + r.join("."),
                    );
                  l.push(n),
                    B.forEach(n, function (n, i) {
                      !0 ===
                        (!(B.isUndefined(n) || null === n) &&
                          o.call(e, n, B.isString(i) ? i.trim() : i, r, f)) &&
                        t(n, r ? r.concat(i) : [i]);
                    }),
                    l.pop();
                }
              })(t),
              e
            );
          };
        function J(t) {
          const e = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+",
            "%00": "\0",
          };
          return encodeURIComponent(t).replace(
            /[!'()~]|%20|%00/g,
            function (t) {
              return e[t];
            },
          );
        }
        function W(t, e) {
          (this._pairs = []), t && $(t, this, e);
        }
        const V = W.prototype;
        (V.append = function (t, e) {
          this._pairs.push([t, e]);
        }),
          (V.toString = function (t) {
            const e = t
              ? function (e) {
                  return t.call(this, e, J);
                }
              : J;
            return this._pairs
              .map(function (t) {
                return e(t[0]) + "=" + e(t[1]);
              }, "")
              .join("&");
          });
        const K = W;
        function X(t) {
          return encodeURIComponent(t)
            .replace(/%3A/gi, ":")
            .replace(/%24/g, "$")
            .replace(/%2C/gi, ",")
            .replace(/%20/g, "+")
            .replace(/%5B/gi, "[")
            .replace(/%5D/gi, "]");
        }
        function Y(t, e, n) {
          if (!e) return t;
          const r = (n && n.encode) || X,
            o = n && n.serialize;
          let i;
          if (
            ((i = o
              ? o(e, n)
              : B.isURLSearchParams(e)
              ? e.toString()
              : new K(e, n).toString(r)),
            i)
          ) {
            const e = t.indexOf("#");
            -1 !== e && (t = t.slice(0, e)),
              (t += (-1 === t.indexOf("?") ? "?" : "&") + i);
          }
          return t;
        }
        const Q = class {
            constructor() {
              this.handlers = [];
            }
            use(t, e, n) {
              return (
                this.handlers.push({
                  fulfilled: t,
                  rejected: e,
                  synchronous: !!n && n.synchronous,
                  runWhen: n ? n.runWhen : null,
                }),
                this.handlers.length - 1
              );
            }
            eject(t) {
              this.handlers[t] && (this.handlers[t] = null);
            }
            clear() {
              this.handlers && (this.handlers = []);
            }
            forEach(t) {
              B.forEach(this.handlers, function (e) {
                null !== e && t(e);
              });
            }
          },
          tt = {
            silentJSONParsing: !0,
            forcedJSONParsing: !0,
            clarifyTimeoutError: !1,
          },
          et = {
            isBrowser: !0,
            classes: {
              URLSearchParams:
                "undefined" != typeof URLSearchParams ? URLSearchParams : K,
              FormData: "undefined" != typeof FormData ? FormData : null,
              Blob: "undefined" != typeof Blob ? Blob : null,
            },
            isStandardBrowserEnv: (() => {
              let t;
              return (
                ("undefined" == typeof navigator ||
                  ("ReactNative" !== (t = navigator.product) &&
                    "NativeScript" !== t &&
                    "NS" !== t)) &&
                "undefined" != typeof window &&
                "undefined" != typeof document
              );
            })(),
            isStandardBrowserWebWorkerEnv:
              "undefined" != typeof WorkerGlobalScope &&
              self instanceof WorkerGlobalScope &&
              "function" == typeof self.importScripts,
            protocols: ["http", "https", "file", "blob", "url", "data"],
          },
          nt = function (t) {
            function e(t, n, r, o) {
              let i = t[o++];
              const a = Number.isFinite(+i),
                s = o >= t.length;
              return (
                (i = !i && B.isArray(r) ? r.length : i),
                s
                  ? (B.hasOwnProp(r, i) ? (r[i] = [r[i], n]) : (r[i] = n), !a)
                  : ((r[i] && B.isObject(r[i])) || (r[i] = []),
                    e(t, n, r[i], o) &&
                      B.isArray(r[i]) &&
                      (r[i] = (function (t) {
                        const e = {},
                          n = Object.keys(t);
                        let r;
                        const o = n.length;
                        let i;
                        for (r = 0; r < o; r++) (i = n[r]), (e[i] = t[i]);
                        return e;
                      })(r[i])),
                    !a)
              );
            }
            if (B.isFormData(t) && B.isFunction(t.entries)) {
              const n = {};
              return (
                B.forEachEntry(t, (t, r) => {
                  e(
                    (function (t) {
                      return B.matchAll(/\w+|\[(\w*)]/g, t).map((t) =>
                        "[]" === t[0] ? "" : t[1] || t[0],
                      );
                    })(t),
                    r,
                    n,
                    0,
                  );
                }),
                n
              );
            }
            return null;
          },
          rt = { "Content-Type": void 0 },
          ot = {
            transitional: tt,
            adapter: ["xhr", "http"],
            transformRequest: [
              function (t, e) {
                const n = e.getContentType() || "",
                  r = n.indexOf("application/json") > -1,
                  o = B.isObject(t);
                if (
                  (o && B.isHTMLForm(t) && (t = new FormData(t)),
                  B.isFormData(t))
                )
                  return r && r ? JSON.stringify(nt(t)) : t;
                if (
                  B.isArrayBuffer(t) ||
                  B.isBuffer(t) ||
                  B.isStream(t) ||
                  B.isFile(t) ||
                  B.isBlob(t)
                )
                  return t;
                if (B.isArrayBufferView(t)) return t.buffer;
                if (B.isURLSearchParams(t))
                  return (
                    e.setContentType(
                      "application/x-www-form-urlencoded;charset=utf-8",
                      !1,
                    ),
                    t.toString()
                  );
                let i;
                if (o) {
                  if (n.indexOf("application/x-www-form-urlencoded") > -1)
                    return (function (t, e) {
                      return $(
                        t,
                        new et.classes.URLSearchParams(),
                        Object.assign(
                          {
                            visitor: function (t, e, n, r) {
                              return et.isNode && B.isBuffer(t)
                                ? (this.append(e, t.toString("base64")), !1)
                                : r.defaultVisitor.apply(this, arguments);
                            },
                          },
                          e,
                        ),
                      );
                    })(t, this.formSerializer).toString();
                  if (
                    (i = B.isFileList(t)) ||
                    n.indexOf("multipart/form-data") > -1
                  ) {
                    const e = this.env && this.env.FormData;
                    return $(
                      i ? { "files[]": t } : t,
                      e && new e(),
                      this.formSerializer,
                    );
                  }
                }
                return o || r
                  ? (e.setContentType("application/json", !1),
                    (function (t, e, n) {
                      if (B.isString(t))
                        try {
                          return (0, JSON.parse)(t), B.trim(t);
                        } catch (t) {
                          if ("SyntaxError" !== t.name) throw t;
                        }
                      return (0, JSON.stringify)(t);
                    })(t))
                  : t;
              },
            ],
            transformResponse: [
              function (t) {
                const e = this.transitional || ot.transitional,
                  n = e && e.forcedJSONParsing,
                  r = "json" === this.responseType;
                if (t && B.isString(t) && ((n && !this.responseType) || r)) {
                  const n = !(e && e.silentJSONParsing) && r;
                  try {
                    return JSON.parse(t);
                  } catch (t) {
                    if (n) {
                      if ("SyntaxError" === t.name)
                        throw M.from(
                          t,
                          M.ERR_BAD_RESPONSE,
                          this,
                          null,
                          this.response,
                        );
                      throw t;
                    }
                  }
                }
                return t;
              },
            ],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            maxBodyLength: -1,
            env: { FormData: et.classes.FormData, Blob: et.classes.Blob },
            validateStatus: function (t) {
              return t >= 200 && t < 300;
            },
            headers: {
              common: { Accept: "application/json, text/plain, */*" },
            },
          };
        B.forEach(["delete", "get", "head"], function (t) {
          ot.headers[t] = {};
        }),
          B.forEach(["post", "put", "patch"], function (t) {
            ot.headers[t] = B.merge(rt);
          });
        const it = ot,
          at = B.toObjectSet([
            "age",
            "authorization",
            "content-length",
            "content-type",
            "etag",
            "expires",
            "from",
            "host",
            "if-modified-since",
            "if-unmodified-since",
            "last-modified",
            "location",
            "max-forwards",
            "proxy-authorization",
            "referer",
            "retry-after",
            "user-agent",
          ]),
          st = Symbol("internals");
        function ct(t) {
          return t && String(t).trim().toLowerCase();
        }
        function ut(t) {
          return !1 === t || null == t
            ? t
            : B.isArray(t)
            ? t.map(ut)
            : String(t);
        }
        function lt(t, e, n, r, o) {
          return B.isFunction(r)
            ? r.call(this, e, n)
            : (o && (e = n),
              B.isString(e)
                ? B.isString(r)
                  ? -1 !== e.indexOf(r)
                  : B.isRegExp(r)
                  ? r.test(e)
                  : void 0
                : void 0);
        }
        class ft {
          constructor(t) {
            t && this.set(t);
          }
          set(t, e, n) {
            const r = this;
            function o(t, e, n) {
              const o = ct(e);
              if (!o) throw new Error("header name must be a non-empty string");
              const i = B.findKey(r, o);
              (!i ||
                void 0 === r[i] ||
                !0 === n ||
                (void 0 === n && !1 !== r[i])) &&
                (r[i || e] = ut(t));
            }
            const i = (t, e) => B.forEach(t, (t, n) => o(t, n, e));
            return (
              B.isPlainObject(t) || t instanceof this.constructor
                ? i(t, e)
                : B.isString(t) &&
                  (t = t.trim()) &&
                  !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim())
                ? i(
                    ((t) => {
                      const e = {};
                      let n, r, o;
                      return (
                        t &&
                          t.split("\n").forEach(function (t) {
                            (o = t.indexOf(":")),
                              (n = t.substring(0, o).trim().toLowerCase()),
                              (r = t.substring(o + 1).trim()),
                              !n ||
                                (e[n] && at[n]) ||
                                ("set-cookie" === n
                                  ? e[n]
                                    ? e[n].push(r)
                                    : (e[n] = [r])
                                  : (e[n] = e[n] ? e[n] + ", " + r : r));
                          }),
                        e
                      );
                    })(t),
                    e,
                  )
                : null != t && o(e, t, n),
              this
            );
          }
          get(t, e) {
            if ((t = ct(t))) {
              const n = B.findKey(this, t);
              if (n) {
                const t = this[n];
                if (!e) return t;
                if (!0 === e)
                  return (function (t) {
                    const e = Object.create(null),
                      n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                    let r;
                    for (; (r = n.exec(t)); ) e[r[1]] = r[2];
                    return e;
                  })(t);
                if (B.isFunction(e)) return e.call(this, t, n);
                if (B.isRegExp(e)) return e.exec(t);
                throw new TypeError("parser must be boolean|regexp|function");
              }
            }
          }
          has(t, e) {
            if ((t = ct(t))) {
              const n = B.findKey(this, t);
              return !(
                !n ||
                void 0 === this[n] ||
                (e && !lt(0, this[n], n, e))
              );
            }
            return !1;
          }
          delete(t, e) {
            const n = this;
            let r = !1;
            function o(t) {
              if ((t = ct(t))) {
                const o = B.findKey(n, t);
                !o || (e && !lt(0, n[o], o, e)) || (delete n[o], (r = !0));
              }
            }
            return B.isArray(t) ? t.forEach(o) : o(t), r;
          }
          clear(t) {
            const e = Object.keys(this);
            let n = e.length,
              r = !1;
            for (; n--; ) {
              const o = e[n];
              (t && !lt(0, this[o], o, t, !0)) || (delete this[o], (r = !0));
            }
            return r;
          }
          normalize(t) {
            const e = this,
              n = {};
            return (
              B.forEach(this, (r, o) => {
                const i = B.findKey(n, o);
                if (i) return (e[i] = ut(r)), void delete e[o];
                const a = t
                  ? (function (t) {
                      return t
                        .trim()
                        .toLowerCase()
                        .replace(
                          /([a-z\d])(\w*)/g,
                          (t, e, n) => e.toUpperCase() + n,
                        );
                    })(o)
                  : String(o).trim();
                a !== o && delete e[o], (e[a] = ut(r)), (n[a] = !0);
              }),
              this
            );
          }
          concat(...t) {
            return this.constructor.concat(this, ...t);
          }
          toJSON(t) {
            const e = Object.create(null);
            return (
              B.forEach(this, (n, r) => {
                null != n &&
                  !1 !== n &&
                  (e[r] = t && B.isArray(n) ? n.join(", ") : n);
              }),
              e
            );
          }
          [Symbol.iterator]() {
            return Object.entries(this.toJSON())[Symbol.iterator]();
          }
          toString() {
            return Object.entries(this.toJSON())
              .map(([t, e]) => t + ": " + e)
              .join("\n");
          }
          get [Symbol.toStringTag]() {
            return "AxiosHeaders";
          }
          static from(t) {
            return t instanceof this ? t : new this(t);
          }
          static concat(t, ...e) {
            const n = new this(t);
            return e.forEach((t) => n.set(t)), n;
          }
          static accessor(t) {
            const e = (this[st] = this[st] = { accessors: {} }).accessors,
              n = this.prototype;
            function r(t) {
              const r = ct(t);
              e[r] ||
                ((function (t, e) {
                  const n = B.toCamelCase(" " + e);
                  ["get", "set", "has"].forEach((r) => {
                    Object.defineProperty(t, r + n, {
                      value: function (t, n, o) {
                        return this[r].call(this, e, t, n, o);
                      },
                      configurable: !0,
                    });
                  });
                })(n, t),
                (e[r] = !0));
            }
            return B.isArray(t) ? t.forEach(r) : r(t), this;
          }
        }
        ft.accessor([
          "Content-Type",
          "Content-Length",
          "Accept",
          "Accept-Encoding",
          "User-Agent",
          "Authorization",
        ]),
          B.freezeMethods(ft.prototype),
          B.freezeMethods(ft);
        const pt = ft;
        function dt(t, e) {
          const n = this || it,
            r = e || n,
            o = pt.from(r.headers);
          let i = r.data;
          return (
            B.forEach(t, function (t) {
              i = t.call(n, i, o.normalize(), e ? e.status : void 0);
            }),
            o.normalize(),
            i
          );
        }
        function ht(t) {
          return !(!t || !t.__CANCEL__);
        }
        function mt(t, e, n) {
          M.call(this, null == t ? "canceled" : t, M.ERR_CANCELED, e, n),
            (this.name = "CanceledError");
        }
        B.inherits(mt, M, { __CANCEL__: !0 });
        const yt = mt,
          gt = et.isStandardBrowserEnv
            ? {
                write: function (t, e, n, r, o, i) {
                  const a = [];
                  a.push(t + "=" + encodeURIComponent(e)),
                    B.isNumber(n) &&
                      a.push("expires=" + new Date(n).toGMTString()),
                    B.isString(r) && a.push("path=" + r),
                    B.isString(o) && a.push("domain=" + o),
                    !0 === i && a.push("secure"),
                    (document.cookie = a.join("; "));
                },
                read: function (t) {
                  const e = document.cookie.match(
                    new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"),
                  );
                  return e ? decodeURIComponent(e[3]) : null;
                },
                remove: function (t) {
                  this.write(t, "", Date.now() - 864e5);
                },
              }
            : {
                write: function () {},
                read: function () {
                  return null;
                },
                remove: function () {},
              };
        function vt(t, e) {
          return t && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
            ? (function (t, e) {
                return e
                  ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "")
                  : t;
              })(t, e)
            : e;
        }
        const bt = et.isStandardBrowserEnv
          ? (function () {
              const t = /(msie|trident)/i.test(navigator.userAgent),
                e = document.createElement("a");
              let n;
              function r(n) {
                let r = n;
                return (
                  t && (e.setAttribute("href", r), (r = e.href)),
                  e.setAttribute("href", r),
                  {
                    href: e.href,
                    protocol: e.protocol ? e.protocol.replace(/:$/, "") : "",
                    host: e.host,
                    search: e.search ? e.search.replace(/^\?/, "") : "",
                    hash: e.hash ? e.hash.replace(/^#/, "") : "",
                    hostname: e.hostname,
                    port: e.port,
                    pathname:
                      "/" === e.pathname.charAt(0)
                        ? e.pathname
                        : "/" + e.pathname,
                  }
                );
              }
              return (
                (n = r(window.location.href)),
                function (t) {
                  const e = B.isString(t) ? r(t) : t;
                  return e.protocol === n.protocol && e.host === n.host;
                }
              );
            })()
          : function () {
              return !0;
            };
        function wt(t, e) {
          let n = 0;
          const r = (function (t, e) {
            t = t || 10;
            const n = new Array(t),
              r = new Array(t);
            let o,
              i = 0,
              a = 0;
            return (
              (e = void 0 !== e ? e : 1e3),
              function (s) {
                const c = Date.now(),
                  u = r[a];
                o || (o = c), (n[i] = s), (r[i] = c);
                let l = a,
                  f = 0;
                for (; l !== i; ) (f += n[l++]), (l %= t);
                if (
                  ((i = (i + 1) % t), i === a && (a = (a + 1) % t), c - o < e)
                )
                  return;
                const p = u && c - u;
                return p ? Math.round((1e3 * f) / p) : void 0;
              }
            );
          })(50, 250);
          return (o) => {
            const i = o.loaded,
              a = o.lengthComputable ? o.total : void 0,
              s = i - n,
              c = r(s);
            n = i;
            const u = {
              loaded: i,
              total: a,
              progress: a ? i / a : void 0,
              bytes: s,
              rate: c || void 0,
              estimated: c && a && i <= a ? (a - i) / c : void 0,
              event: o,
            };
            (u[e ? "download" : "upload"] = !0), t(u);
          };
        }
        const xt = {
          http: null,
          xhr:
            "undefined" != typeof XMLHttpRequest &&
            function (t) {
              return new Promise(function (e, n) {
                let r = t.data;
                const o = pt.from(t.headers).normalize(),
                  i = t.responseType;
                let a;
                function s() {
                  t.cancelToken && t.cancelToken.unsubscribe(a),
                    t.signal && t.signal.removeEventListener("abort", a);
                }
                B.isFormData(r) &&
                  (et.isStandardBrowserEnv || et.isStandardBrowserWebWorkerEnv
                    ? o.setContentType(!1)
                    : o.setContentType("multipart/form-data;", !1));
                let c = new XMLHttpRequest();
                if (t.auth) {
                  const e = t.auth.username || "",
                    n = t.auth.password
                      ? unescape(encodeURIComponent(t.auth.password))
                      : "";
                  o.set("Authorization", "Basic " + btoa(e + ":" + n));
                }
                const u = vt(t.baseURL, t.url);
                function l() {
                  if (!c) return;
                  const r = pt.from(
                    "getAllResponseHeaders" in c && c.getAllResponseHeaders(),
                  );
                  !(function (t, e, n) {
                    const r = n.config.validateStatus;
                    n.status && r && !r(n.status)
                      ? e(
                          new M(
                            "Request failed with status code " + n.status,
                            [M.ERR_BAD_REQUEST, M.ERR_BAD_RESPONSE][
                              Math.floor(n.status / 100) - 4
                            ],
                            n.config,
                            n.request,
                            n,
                          ),
                        )
                      : t(n);
                  })(
                    function (t) {
                      e(t), s();
                    },
                    function (t) {
                      n(t), s();
                    },
                    {
                      data:
                        i && "text" !== i && "json" !== i
                          ? c.response
                          : c.responseText,
                      status: c.status,
                      statusText: c.statusText,
                      headers: r,
                      config: t,
                      request: c,
                    },
                  ),
                    (c = null);
                }
                if (
                  (c.open(
                    t.method.toUpperCase(),
                    Y(u, t.params, t.paramsSerializer),
                    !0,
                  ),
                  (c.timeout = t.timeout),
                  "onloadend" in c
                    ? (c.onloadend = l)
                    : (c.onreadystatechange = function () {
                        c &&
                          4 === c.readyState &&
                          (0 !== c.status ||
                            (c.responseURL &&
                              0 === c.responseURL.indexOf("file:"))) &&
                          setTimeout(l);
                      }),
                  (c.onabort = function () {
                    c &&
                      (n(new M("Request aborted", M.ECONNABORTED, t, c)),
                      (c = null));
                  }),
                  (c.onerror = function () {
                    n(new M("Network Error", M.ERR_NETWORK, t, c)), (c = null);
                  }),
                  (c.ontimeout = function () {
                    let e = t.timeout
                      ? "timeout of " + t.timeout + "ms exceeded"
                      : "timeout exceeded";
                    const r = t.transitional || tt;
                    t.timeoutErrorMessage && (e = t.timeoutErrorMessage),
                      n(
                        new M(
                          e,
                          r.clarifyTimeoutError ? M.ETIMEDOUT : M.ECONNABORTED,
                          t,
                          c,
                        ),
                      ),
                      (c = null);
                  }),
                  et.isStandardBrowserEnv)
                ) {
                  const e =
                    (t.withCredentials || bt(u)) &&
                    t.xsrfCookieName &&
                    gt.read(t.xsrfCookieName);
                  e && o.set(t.xsrfHeaderName, e);
                }
                void 0 === r && o.setContentType(null),
                  "setRequestHeader" in c &&
                    B.forEach(o.toJSON(), function (t, e) {
                      c.setRequestHeader(e, t);
                    }),
                  B.isUndefined(t.withCredentials) ||
                    (c.withCredentials = !!t.withCredentials),
                  i && "json" !== i && (c.responseType = t.responseType),
                  "function" == typeof t.onDownloadProgress &&
                    c.addEventListener(
                      "progress",
                      wt(t.onDownloadProgress, !0),
                    ),
                  "function" == typeof t.onUploadProgress &&
                    c.upload &&
                    c.upload.addEventListener(
                      "progress",
                      wt(t.onUploadProgress),
                    ),
                  (t.cancelToken || t.signal) &&
                    ((a = (e) => {
                      c &&
                        (n(!e || e.type ? new yt(null, t, c) : e),
                        c.abort(),
                        (c = null));
                    }),
                    t.cancelToken && t.cancelToken.subscribe(a),
                    t.signal &&
                      (t.signal.aborted
                        ? a()
                        : t.signal.addEventListener("abort", a)));
                const f = (function (t) {
                  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
                  return (e && e[1]) || "";
                })(u);
                f && -1 === et.protocols.indexOf(f)
                  ? n(
                      new M(
                        "Unsupported protocol " + f + ":",
                        M.ERR_BAD_REQUEST,
                        t,
                      ),
                    )
                  : c.send(r || null);
              });
            },
        };
        B.forEach(xt, (t, e) => {
          if (t) {
            try {
              Object.defineProperty(t, "name", { value: e });
            } catch (t) {}
            Object.defineProperty(t, "adapterName", { value: e });
          }
        });
        function Et(t) {
          if (
            (t.cancelToken && t.cancelToken.throwIfRequested(),
            t.signal && t.signal.aborted)
          )
            throw new yt(null, t);
        }
        function Ot(t) {
          return (
            Et(t),
            (t.headers = pt.from(t.headers)),
            (t.data = dt.call(t, t.transformRequest)),
            -1 !== ["post", "put", "patch"].indexOf(t.method) &&
              t.headers.setContentType("application/x-www-form-urlencoded", !1),
            ((t) => {
              t = B.isArray(t) ? t : [t];
              const { length: e } = t;
              let n, r;
              for (
                let o = 0;
                o < e &&
                ((n = t[o]), !(r = B.isString(n) ? xt[n.toLowerCase()] : n));
                o++
              );
              if (!r) {
                if (!1 === r)
                  throw new M(
                    `Adapter ${n} is not supported by the environment`,
                    "ERR_NOT_SUPPORT",
                  );
                throw new Error(
                  B.hasOwnProp(xt, n)
                    ? `Adapter '${n}' is not available in the build`
                    : `Unknown adapter '${n}'`,
                );
              }
              if (!B.isFunction(r))
                throw new TypeError("adapter is not a function");
              return r;
            })(t.adapter || it.adapter)(t).then(
              function (e) {
                return (
                  Et(t),
                  (e.data = dt.call(t, t.transformResponse, e)),
                  (e.headers = pt.from(e.headers)),
                  e
                );
              },
              function (e) {
                return (
                  ht(e) ||
                    (Et(t),
                    e &&
                      e.response &&
                      ((e.response.data = dt.call(
                        t,
                        t.transformResponse,
                        e.response,
                      )),
                      (e.response.headers = pt.from(e.response.headers)))),
                  Promise.reject(e)
                );
              },
            )
          );
        }
        const St = (t) => (t instanceof pt ? t.toJSON() : t);
        function _t(t, e) {
          e = e || {};
          const n = {};
          function r(t, e, n) {
            return B.isPlainObject(t) && B.isPlainObject(e)
              ? B.merge.call({ caseless: n }, t, e)
              : B.isPlainObject(e)
              ? B.merge({}, e)
              : B.isArray(e)
              ? e.slice()
              : e;
          }
          function o(t, e, n) {
            return B.isUndefined(e)
              ? B.isUndefined(t)
                ? void 0
                : r(void 0, t, n)
              : r(t, e, n);
          }
          function i(t, e) {
            if (!B.isUndefined(e)) return r(void 0, e);
          }
          function a(t, e) {
            return B.isUndefined(e)
              ? B.isUndefined(t)
                ? void 0
                : r(void 0, t)
              : r(void 0, e);
          }
          function s(n, o, i) {
            return i in e ? r(n, o) : i in t ? r(void 0, n) : void 0;
          }
          const c = {
            url: i,
            method: i,
            data: i,
            baseURL: a,
            transformRequest: a,
            transformResponse: a,
            paramsSerializer: a,
            timeout: a,
            timeoutMessage: a,
            withCredentials: a,
            adapter: a,
            responseType: a,
            xsrfCookieName: a,
            xsrfHeaderName: a,
            onUploadProgress: a,
            onDownloadProgress: a,
            decompress: a,
            maxContentLength: a,
            maxBodyLength: a,
            beforeRedirect: a,
            transport: a,
            httpAgent: a,
            httpsAgent: a,
            cancelToken: a,
            socketPath: a,
            responseEncoding: a,
            validateStatus: s,
            headers: (t, e) => o(St(t), St(e), !0),
          };
          return (
            B.forEach(Object.keys(Object.assign({}, t, e)), function (r) {
              const i = c[r] || o,
                a = i(t[r], e[r], r);
              (B.isUndefined(a) && i !== s) || (n[r] = a);
            }),
            n
          );
        }
        const jt = {};
        ["object", "boolean", "number", "function", "string", "symbol"].forEach(
          (t, e) => {
            jt[t] = function (n) {
              return typeof n === t || "a" + (e < 1 ? "n " : " ") + t;
            };
          },
        );
        const Lt = {};
        jt.transitional = function (t, e, n) {
          function r(t, e) {
            return (
              "[Axios v1.4.0] Transitional option '" +
              t +
              "'" +
              e +
              (n ? ". " + n : "")
            );
          }
          return (n, o, i) => {
            if (!1 === t)
              throw new M(
                r(o, " has been removed" + (e ? " in " + e : "")),
                M.ERR_DEPRECATED,
              );
            return (
              e &&
                !Lt[o] &&
                ((Lt[o] = !0),
                console.warn(
                  r(
                    o,
                    " has been deprecated since v" +
                      e +
                      " and will be removed in the near future",
                  ),
                )),
              !t || t(n, o, i)
            );
          };
        };
        const Tt = {
            assertOptions: function (t, e, n) {
              if ("object" != typeof t)
                throw new M(
                  "options must be an object",
                  M.ERR_BAD_OPTION_VALUE,
                );
              const r = Object.keys(t);
              let o = r.length;
              for (; o-- > 0; ) {
                const i = r[o],
                  a = e[i];
                if (a) {
                  const e = t[i],
                    n = void 0 === e || a(e, i, t);
                  if (!0 !== n)
                    throw new M(
                      "option " + i + " must be " + n,
                      M.ERR_BAD_OPTION_VALUE,
                    );
                } else if (!0 !== n)
                  throw new M("Unknown option " + i, M.ERR_BAD_OPTION);
              }
            },
            validators: jt,
          },
          At = Tt.validators;
        class Rt {
          constructor(t) {
            (this.defaults = t),
              (this.interceptors = { request: new Q(), response: new Q() });
          }
          request(t, e) {
            "string" == typeof t ? ((e = e || {}).url = t) : (e = t || {}),
              (e = _t(this.defaults, e));
            const { transitional: n, paramsSerializer: r, headers: o } = e;
            let i;
            void 0 !== n &&
              Tt.assertOptions(
                n,
                {
                  silentJSONParsing: At.transitional(At.boolean),
                  forcedJSONParsing: At.transitional(At.boolean),
                  clarifyTimeoutError: At.transitional(At.boolean),
                },
                !1,
              ),
              null != r &&
                (B.isFunction(r)
                  ? (e.paramsSerializer = { serialize: r })
                  : Tt.assertOptions(
                      r,
                      { encode: At.function, serialize: At.function },
                      !0,
                    )),
              (e.method = (
                e.method ||
                this.defaults.method ||
                "get"
              ).toLowerCase()),
              (i = o && B.merge(o.common, o[e.method])),
              i &&
                B.forEach(
                  ["delete", "get", "head", "post", "put", "patch", "common"],
                  (t) => {
                    delete o[t];
                  },
                ),
              (e.headers = pt.concat(i, o));
            const a = [];
            let s = !0;
            this.interceptors.request.forEach(function (t) {
              ("function" == typeof t.runWhen && !1 === t.runWhen(e)) ||
                ((s = s && t.synchronous), a.unshift(t.fulfilled, t.rejected));
            });
            const c = [];
            let u;
            this.interceptors.response.forEach(function (t) {
              c.push(t.fulfilled, t.rejected);
            });
            let l,
              f = 0;
            if (!s) {
              const t = [Ot.bind(this), void 0];
              for (
                t.unshift.apply(t, a),
                  t.push.apply(t, c),
                  l = t.length,
                  u = Promise.resolve(e);
                f < l;

              )
                u = u.then(t[f++], t[f++]);
              return u;
            }
            l = a.length;
            let p = e;
            for (f = 0; f < l; ) {
              const t = a[f++],
                e = a[f++];
              try {
                p = t(p);
              } catch (t) {
                e.call(this, t);
                break;
              }
            }
            try {
              u = Ot.call(this, p);
            } catch (t) {
              return Promise.reject(t);
            }
            for (f = 0, l = c.length; f < l; ) u = u.then(c[f++], c[f++]);
            return u;
          }
          getUri(t) {
            return Y(
              vt((t = _t(this.defaults, t)).baseURL, t.url),
              t.params,
              t.paramsSerializer,
            );
          }
        }
        B.forEach(["delete", "get", "head", "options"], function (t) {
          Rt.prototype[t] = function (e, n) {
            return this.request(
              _t(n || {}, { method: t, url: e, data: (n || {}).data }),
            );
          };
        }),
          B.forEach(["post", "put", "patch"], function (t) {
            function e(e) {
              return function (n, r, o) {
                return this.request(
                  _t(o || {}, {
                    method: t,
                    headers: e ? { "Content-Type": "multipart/form-data" } : {},
                    url: n,
                    data: r,
                  }),
                );
              };
            }
            (Rt.prototype[t] = e()), (Rt.prototype[t + "Form"] = e(!0));
          });
        const Pt = Rt;
        class kt {
          constructor(t) {
            if ("function" != typeof t)
              throw new TypeError("executor must be a function.");
            let e;
            this.promise = new Promise(function (t) {
              e = t;
            });
            const n = this;
            this.promise.then((t) => {
              if (!n._listeners) return;
              let e = n._listeners.length;
              for (; e-- > 0; ) n._listeners[e](t);
              n._listeners = null;
            }),
              (this.promise.then = (t) => {
                let e;
                const r = new Promise((t) => {
                  n.subscribe(t), (e = t);
                }).then(t);
                return (
                  (r.cancel = function () {
                    n.unsubscribe(e);
                  }),
                  r
                );
              }),
              t(function (t, r, o) {
                n.reason || ((n.reason = new yt(t, r, o)), e(n.reason));
              });
          }
          throwIfRequested() {
            if (this.reason) throw this.reason;
          }
          subscribe(t) {
            this.reason
              ? t(this.reason)
              : this._listeners
              ? this._listeners.push(t)
              : (this._listeners = [t]);
          }
          unsubscribe(t) {
            if (!this._listeners) return;
            const e = this._listeners.indexOf(t);
            -1 !== e && this._listeners.splice(e, 1);
          }
          static source() {
            let t;
            return {
              token: new kt(function (e) {
                t = e;
              }),
              cancel: t,
            };
          }
        }
        const Nt = kt,
          Ct = {
            Continue: 100,
            SwitchingProtocols: 101,
            Processing: 102,
            EarlyHints: 103,
            Ok: 200,
            Created: 201,
            Accepted: 202,
            NonAuthoritativeInformation: 203,
            NoContent: 204,
            ResetContent: 205,
            PartialContent: 206,
            MultiStatus: 207,
            AlreadyReported: 208,
            ImUsed: 226,
            MultipleChoices: 300,
            MovedPermanently: 301,
            Found: 302,
            SeeOther: 303,
            NotModified: 304,
            UseProxy: 305,
            Unused: 306,
            TemporaryRedirect: 307,
            PermanentRedirect: 308,
            BadRequest: 400,
            Unauthorized: 401,
            PaymentRequired: 402,
            Forbidden: 403,
            NotFound: 404,
            MethodNotAllowed: 405,
            NotAcceptable: 406,
            ProxyAuthenticationRequired: 407,
            RequestTimeout: 408,
            Conflict: 409,
            Gone: 410,
            LengthRequired: 411,
            PreconditionFailed: 412,
            PayloadTooLarge: 413,
            UriTooLong: 414,
            UnsupportedMediaType: 415,
            RangeNotSatisfiable: 416,
            ExpectationFailed: 417,
            ImATeapot: 418,
            MisdirectedRequest: 421,
            UnprocessableEntity: 422,
            Locked: 423,
            FailedDependency: 424,
            TooEarly: 425,
            UpgradeRequired: 426,
            PreconditionRequired: 428,
            TooManyRequests: 429,
            RequestHeaderFieldsTooLarge: 431,
            UnavailableForLegalReasons: 451,
            InternalServerError: 500,
            NotImplemented: 501,
            BadGateway: 502,
            ServiceUnavailable: 503,
            GatewayTimeout: 504,
            HttpVersionNotSupported: 505,
            VariantAlsoNegotiates: 506,
            InsufficientStorage: 507,
            LoopDetected: 508,
            NotExtended: 510,
            NetworkAuthenticationRequired: 511,
          };
        Object.entries(Ct).forEach(([t, e]) => {
          Ct[e] = t;
        });
        const Ft = Ct,
          Ut = (function t(e) {
            const n = new Pt(e),
              o = r(Pt.prototype.request, n);
            return (
              B.extend(o, Pt.prototype, n, { allOwnKeys: !0 }),
              B.extend(o, n, null, { allOwnKeys: !0 }),
              (o.create = function (n) {
                return t(_t(e, n));
              }),
              o
            );
          })(it);
        (Ut.Axios = Pt),
          (Ut.CanceledError = yt),
          (Ut.CancelToken = Nt),
          (Ut.isCancel = ht),
          (Ut.VERSION = "1.4.0"),
          (Ut.toFormData = $),
          (Ut.AxiosError = M),
          (Ut.Cancel = Ut.CanceledError),
          (Ut.all = function (t) {
            return Promise.all(t);
          }),
          (Ut.spread = function (t) {
            return function (e) {
              return t.apply(null, e);
            };
          }),
          (Ut.isAxiosError = function (t) {
            return B.isObject(t) && !0 === t.isAxiosError;
          }),
          (Ut.mergeConfig = _t),
          (Ut.AxiosHeaders = pt),
          (Ut.formToJSON = (t) => nt(B.isHTMLForm(t) ? new FormData(t) : t)),
          (Ut.HttpStatusCode = Ft),
          (Ut.default = Ut);
        const Bt = Ut;
      },
    },
    e = {};
  function n(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var i = (e[r] = { id: r, exports: {} });
    return t[r](i, i.exports, n), i.exports;
  }
  (n.m = t),
    (n.n = (t) => {
      var e = t && t.__esModule ? () => t.default : () => t;
      return n.d(e, { a: e }), e;
    }),
    (n.d = (t, e) => {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (() => {
      var t;
      n.g.importScripts && (t = n.g.location + "");
      var e = n.g.document;
      if (!t && e && (e.currentScript && (t = e.currentScript.src), !t)) {
        var r = e.getElementsByTagName("script");
        if (r.length) for (var o = r.length - 1; o > -1 && !t; ) t = r[o--].src;
      }
      if (!t)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      (t = t
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (n.p = t + "../");
    })(),
    (n.b = document.baseURI || self.location.href),
    (n.nc = void 0),
    (() => {
      "use strict";
      var t = n(3379),
        e = n.n(t),
        r = n(7795),
        o = n.n(r),
        i = n(569),
        a = n.n(i),
        s = n(3565),
        c = n.n(s),
        u = n(9216),
        l = n.n(u),
        f = n(4589),
        p = n.n(f),
        d = n(5609),
        h = {};
      (h.styleTagTransform = p()),
        (h.setAttributes = c()),
        (h.insert = a().bind(null, "head")),
        (h.domAPI = o()),
        (h.insertStyleElement = l()),
        e()(d.Z, h),
        d.Z && d.Z.locals && d.Z.locals;
      var m = n(7403),
        y = {};
      (y.styleTagTransform = p()),
        (y.setAttributes = c()),
        (y.insert = a().bind(null, "head")),
        (y.domAPI = o()),
        (y.insertStyleElement = l()),
        e()(m.Z, y),
        m.Z && m.Z.locals && m.Z.locals;
      var g = n(4830),
        v = document.getElementById("search-input"),
        b = document.getElementById("book-list");
      function w() {
        var t = v.value.trim().toLowerCase().replace(/[\W_]/g, "");
        b.scrollIntoView({ behavior: "smooth" }),
          "" !== t
            ? ((b.innerHTML = ""), (0, g.Z)(t, b))
            : (b.innerHTML = "<h2>Please write a category in english</h2>");
      }
      document.getElementById("search-button").addEventListener("click", w),
        v.addEventListener("keyup", function (t) {
          "Enter" === t.key && w();
        });
    })();
})();
