/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */
!function (t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var i = e[r] = {i: r, l: !1, exports: {}};
        return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }

    n.m = t, n.c = e, n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: r})
    }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var i in t) n.d(r, i, function (e) {
            return t[e]
        }.bind(null, i));
        return r
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 121)
}([function (t, e) {
    t.exports = function (t) {
        return t && t.__esModule ? t : {default: t}
    }
}, function (t, e) {
    var n = Array.isArray;
    t.exports = n
}, function (t, e, n) {
    "use strict";
    var r = n(13);
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = {IX2EngineActionTypes: !0, IX2EngineConstants: !0};
    e.IX2EngineConstants = e.IX2EngineActionTypes = void 0;
    var o = n(170);
    Object.keys(o).forEach(function (t) {
        "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(i, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return o[t]
            }
        }))
    });
    var a = n(171);
    Object.keys(a).forEach(function (t) {
        "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(i, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return a[t]
            }
        }))
    });
    var u = n(172);
    Object.keys(u).forEach(function (t) {
        "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(i, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return u[t]
            }
        }))
    });
    var c = r(n(173));
    e.IX2EngineActionTypes = c;
    var s = r(n(174));
    e.IX2EngineConstants = s
}, function (t, e, n) {
    (function (e) {
        var n = "object", r = function (t) {
            return t && t.Math == Math && t
        };
        t.exports = r(typeof globalThis == n && globalThis) || r(typeof window == n && window) || r(typeof self == n && self) || r(typeof e == n && e) || Function("return this")()
    }).call(this, n(22))
}, function (t, e, n) {
    var r = n(90), i = "object" == typeof self && self && self.Object === Object && self,
        o = r || i || Function("return this")();
    t.exports = o
}, function (t, e, n) {
    "use strict";
    var r = {}, i = {}, o = [], a = window.Webflow || [], u = window.jQuery, c = u(window), s = u(document),
        f = u.isFunction, l = r._ = n(123), d = r.tram = n(66) && u.tram, p = !1, v = !1;

    function h(t) {
        r.env() && (f(t.design) && c.on("__wf_design", t.design), f(t.preview) && c.on("__wf_preview", t.preview)), f(t.destroy) && c.on("__wf_destroy", t.destroy), t.ready && f(t.ready) && function (t) {
            if (p) return void t.ready();
            if (l.contains(o, t.ready)) return;
            o.push(t.ready)
        }(t)
    }

    function E(t) {
        f(t.design) && c.off("__wf_design", t.design), f(t.preview) && c.off("__wf_preview", t.preview), f(t.destroy) && c.off("__wf_destroy", t.destroy), t.ready && f(t.ready) && function (t) {
            o = l.filter(o, function (e) {
                return e !== t.ready
            })
        }(t)
    }

    d.config.hideBackface = !1, d.config.keepInherited = !0, r.define = function (t, e, n) {
        i[t] && E(i[t]);
        var r = i[t] = e(u, l, n) || {};
        return h(r), r
    }, r.require = function (t) {
        return i[t]
    }, r.push = function (t) {
        p ? f(t) && t() : a.push(t)
    }, r.env = function (t) {
        var e = window.__wf_design, n = void 0 !== e;
        return t ? "design" === t ? n && e : "preview" === t ? n && !e : "slug" === t ? n && window.__wf_slug : "editor" === t ? window.WebflowEditor : "test" === t ? window.__wf_test : "frame" === t ? window !== window.top : void 0 : n
    };
    var g, _ = navigator.userAgent.toLowerCase(),
        y = r.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
        m = r.env.chrome = /chrome/.test(_) && /Google/.test(navigator.vendor) && parseInt(_.match(/chrome\/(\d+)\./)[1], 10),
        I = r.env.ios = /(ipod|iphone|ipad)/.test(_);
    r.env.safari = /safari/.test(_) && !m && !I, y && s.on("touchstart mousedown", function (t) {
        g = t.target
    }), r.validClick = y ? function (t) {
        return t === g || u.contains(t, g)
    } : function () {
        return !0
    };
    var T, b = "resize.webflow orientationchange.webflow load.webflow";

    function O(t, e) {
        var n = [], r = {};
        return r.up = l.throttle(function (t) {
            l.each(n, function (e) {
                e(t)
            })
        }), t && e && t.on(e, r.up), r.on = function (t) {
            "function" == typeof t && (l.contains(n, t) || n.push(t))
        }, r.off = function (t) {
            n = arguments.length ? l.filter(n, function (e) {
                return e !== t
            }) : []
        }, r
    }

    function w(t) {
        f(t) && t()
    }

    function A() {
        T && (T.reject(), c.off("load", T.resolve)), T = new u.Deferred, c.on("load", T.resolve)
    }

    r.resize = O(c, b), r.scroll = O(c, "scroll.webflow resize.webflow orientationchange.webflow load.webflow"), r.redraw = O(), r.location = function (t) {
        window.location = t
    }, r.env() && (r.location = function () {
    }), r.ready = function () {
        p = !0, v ? (v = !1, l.each(i, h)) : l.each(o, w), l.each(a, w), r.resize.up()
    }, r.load = function (t) {
        T.then(t)
    }, r.destroy = function (t) {
        t = t || {}, v = !0, c.triggerHandler("__wf_destroy"), null != t.domready && (p = t.domready), l.each(i, E), r.resize.off(), r.scroll.off(), r.redraw.off(), o = [], a = [], "pending" === T.state() && A()
    }, u(r.ready), A(), t.exports = window.Webflow = r
}, function (t, e) {
    t.exports = function (t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e)
    }
}, function (t, e, n) {
    var r = n(177), i = n(231), o = n(60), a = n(1), u = n(240);
    t.exports = function (t) {
        return "function" == typeof t ? t : null == t ? o : "object" == typeof t ? a(t) ? i(t[0], t[1]) : r(t) : u(t)
    }
}, function (t, e, n) {
    var r = n(189), i = n(194);
    t.exports = function (t, e) {
        var n = i(t, e);
        return r(n) ? n : void 0
    }
}, function (t, e) {
    t.exports = function (t) {
        return null != t && "object" == typeof t
    }
}, function (t, e, n) {
    "use strict";
    var r = n(13);
    Object.defineProperty(e, "__esModule", {value: !0}), e.IX2VanillaUtils = e.IX2VanillaPlugins = e.IX2ElementsReducer = e.IX2EasingUtils = e.IX2Easings = e.IX2BrowserSupport = void 0;
    var i = r(n(46));
    e.IX2BrowserSupport = i;
    var o = r(n(107));
    e.IX2Easings = o;
    var a = r(n(109));
    e.IX2EasingUtils = a;
    var u = r(n(247));
    e.IX2ElementsReducer = u;
    var c = r(n(111));
    e.IX2VanillaPlugins = c;
    var s = r(n(249));
    e.IX2VanillaUtils = s
}, function (t, e, n) {
    var r = n(19), i = n(190), o = n(191), a = "[object Null]", u = "[object Undefined]",
        c = r ? r.toStringTag : void 0;
    t.exports = function (t) {
        return null == t ? void 0 === t ? u : a : c && c in Object(t) ? i(t) : o(t)
    }
}, function (t, e, n) {
    var r = n(89), i = n(54);
    t.exports = function (t) {
        return null != t && i(t.length) && !r(t)
    }
}, function (t, e) {
    t.exports = function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
            r.get || r.set ? Object.defineProperty(e, n, r) : e[n] = t[n]
        }
        return e.default = t, e
    }
}, function (t, e, n) {
    var r = n(15);
    t.exports = !r(function () {
        return 7 != Object.defineProperty({}, "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (t, e) {
    t.exports = function (t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, function (t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function (t, e) {
        return n.call(t, e)
    }
}, function (t, e, n) {
    var r = n(14), i = n(40), o = n(68);
    t.exports = r ? function (t, e, n) {
        return i.f(t, e, o(1, n))
    } : function (t, e, n) {
        return t[e] = n, t
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    e.clone = c, e.addLast = l, e.addFirst = d, e.removeLast = p, e.removeFirst = v, e.insert = h, e.removeAt = E, e.replaceAt = g, e.getIn = _, e.set = y, e.setIn = m, e.update = I, e.updateIn = T, e.merge = b, e.mergeDeep = O, e.mergeIn = w, e.omit = A, e.addDefaults = S;
    /*!
 * Timm
 *
 * Immutability helpers with fast reads and acceptable writes.
 *
 * @copyright Guillermo Grau Panea 2016
 * @license MIT
 */
    var i = "INVALID_ARGS";

    function o(t) {
        throw new Error(t)
    }

    function a(t) {
        var e = Object.keys(t);
        return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e
    }

    var u = {}.hasOwnProperty;

    function c(t) {
        if (Array.isArray(t)) return t.slice();
        for (var e = a(t), n = {}, r = 0; r < e.length; r++) {
            var i = e[r];
            n[i] = t[i]
        }
        return n
    }

    function s(t, e, n) {
        var r = n;
        null == r && o(i);
        for (var u = !1, l = arguments.length, d = Array(l > 3 ? l - 3 : 0), p = 3; p < l; p++) d[p - 3] = arguments[p];
        for (var v = 0; v < d.length; v++) {
            var h = d[v];
            if (null != h) {
                var E = a(h);
                if (E.length) for (var g = 0; g <= E.length; g++) {
                    var _ = E[g];
                    if (!t || void 0 === r[_]) {
                        var y = h[_];
                        e && f(r[_]) && f(y) && (y = s(t, e, r[_], y)), void 0 !== y && y !== r[_] && (u || (u = !0, r = c(r)), r[_] = y)
                    }
                }
            }
        }
        return r
    }

    function f(t) {
        var e = void 0 === t ? "undefined" : r(t);
        return null != t && ("object" === e || "function" === e)
    }

    function l(t, e) {
        return Array.isArray(e) ? t.concat(e) : t.concat([e])
    }

    function d(t, e) {
        return Array.isArray(e) ? e.concat(t) : [e].concat(t)
    }

    function p(t) {
        return t.length ? t.slice(0, t.length - 1) : t
    }

    function v(t) {
        return t.length ? t.slice(1) : t
    }

    function h(t, e, n) {
        return t.slice(0, e).concat(Array.isArray(n) ? n : [n]).concat(t.slice(e))
    }

    function E(t, e) {
        return e >= t.length || e < 0 ? t : t.slice(0, e).concat(t.slice(e + 1))
    }

    function g(t, e, n) {
        if (t[e] === n) return t;
        for (var r = t.length, i = Array(r), o = 0; o < r; o++) i[o] = t[o];
        return i[e] = n, i
    }

    function _(t, e) {
        if (!Array.isArray(e) && o(i), null != t) {
            for (var n = t, r = 0; r < e.length; r++) {
                var a = e[r];
                if (void 0 === (n = null != n ? n[a] : void 0)) return n
            }
            return n
        }
    }

    function y(t, e, n) {
        var r = null == t ? "number" == typeof e ? [] : {} : t;
        if (r[e] === n) return r;
        var i = c(r);
        return i[e] = n, i
    }

    function m(t, e, n) {
        return e.length ? function t(e, n, r, i) {
            var o = void 0, a = n[i];
            o = i === n.length - 1 ? r : t(f(e) && f(e[a]) ? e[a] : "number" == typeof n[i + 1] ? [] : {}, n, r, i + 1);
            return y(e, a, o)
        }(t, e, n, 0) : n
    }

    function I(t, e, n) {
        return y(t, e, n(null == t ? void 0 : t[e]))
    }

    function T(t, e, n) {
        return m(t, e, n(_(t, e)))
    }

    function b(t, e, n, r, i, o) {
        for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c];
        return u.length ? s.call.apply(s, [null, !1, !1, t, e, n, r, i, o].concat(u)) : s(!1, !1, t, e, n, r, i, o)
    }

    function O(t, e, n, r, i, o) {
        for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c];
        return u.length ? s.call.apply(s, [null, !1, !0, t, e, n, r, i, o].concat(u)) : s(!1, !0, t, e, n, r, i, o)
    }

    function w(t, e, n, r, i, o, a) {
        var u = _(t, e);
        null == u && (u = {});
        for (var c = arguments.length, f = Array(c > 7 ? c - 7 : 0), l = 7; l < c; l++) f[l - 7] = arguments[l];
        return m(t, e, f.length ? s.call.apply(s, [null, !1, !1, u, n, r, i, o, a].concat(f)) : s(!1, !1, u, n, r, i, o, a))
    }

    function A(t, e) {
        for (var n = Array.isArray(e) ? e : [e], r = !1, i = 0; i < n.length; i++) if (u.call(t, n[i])) {
            r = !0;
            break
        }
        if (!r) return t;
        for (var o = {}, c = a(t), s = 0; s < c.length; s++) {
            var f = c[s];
            n.indexOf(f) >= 0 || (o[f] = t[f])
        }
        return o
    }

    function S(t, e, n, r, i, o) {
        for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c];
        return u.length ? s.call.apply(s, [null, !0, !1, t, e, n, r, i, o].concat(u)) : s(!0, !1, t, e, n, r, i, o)
    }

    var x = {
        clone: c,
        addLast: l,
        addFirst: d,
        removeLast: p,
        removeFirst: v,
        insert: h,
        removeAt: E,
        replaceAt: g,
        getIn: _,
        set: y,
        setIn: m,
        update: I,
        updateIn: T,
        merge: b,
        mergeDeep: O,
        mergeIn: w,
        omit: A,
        addDefaults: S
    };
    e.default = x
}, function (t, e, n) {
    var r = n(4).Symbol;
    t.exports = r
}, function (t, e, n) {
    var r = n(36), i = 1 / 0;
    t.exports = function (t) {
        if ("string" == typeof t || r(t)) return t;
        var e = t + "";
        return "0" == e && 1 / t == -i ? "-0" : e
    }
}, function (t, e) {
    function n(t) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function r(e) {
        return "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? t.exports = r = function (t) {
            return n(t)
        } : t.exports = r = function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : n(t)
        }, r(e)
    }

    t.exports = r
}, function (t, e) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function (t, e) {
    t.exports = function (t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function (t, e, n) {
    var r = n(23);
    t.exports = function (t) {
        if (!r(t)) throw TypeError(String(t) + " is not an object");
        return t
    }
}, function (t, e, n) {
    var r = n(3), i = n(41), o = n(136), a = r["__core-js_shared__"] || i("__core-js_shared__", {});
    (t.exports = function (t, e) {
        return a[t] || (a[t] = void 0 !== e ? e : {})
    })("versions", []).push({
        version: "3.1.3",
        mode: o ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
}, function (t, e) {
    t.exports = function (t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }
}, function (t, e) {
    function n() {
        return t.exports = n = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        }, n.apply(this, arguments)
    }

    t.exports = n
}, function (t, e, n) {
    var r = n(179), i = n(180), o = n(181), a = n(182), u = n(183);

    function c(t) {
        var e = -1, n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }

    c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c
}, function (t, e, n) {
    var r = n(47);
    t.exports = function (t, e) {
        for (var n = t.length; n--;) if (r(t[n][0], e)) return n;
        return -1
    }
}, function (t, e, n) {
    var r = n(8)(Object, "create");
    t.exports = r
}, function (t, e, n) {
    var r = n(203);
    t.exports = function (t, e) {
        var n = t.__data__;
        return r(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
    }
}, function (t, e, n) {
    var r = n(97), i = n(55), o = n(12);
    t.exports = function (t) {
        return o(t) ? r(t) : i(t)
    }
}, function (t, e, n) {
    var r = n(221), i = n(9), o = Object.prototype, a = o.hasOwnProperty, u = o.propertyIsEnumerable,
        c = r(function () {
            return arguments
        }()) ? r : function (t) {
            return i(t) && a.call(t, "callee") && !u.call(t, "callee")
        };
    t.exports = c
}, function (t, e, n) {
    var r = n(58);
    t.exports = function (t, e, n) {
        var i = null == t ? void 0 : r(t, e);
        return void 0 === i ? n : i
    }
}, function (t, e, n) {
    var r = n(1), i = n(59), o = n(232), a = n(235);
    t.exports = function (t, e) {
        return r(t) ? t : i(t, e) ? [t] : o(a(t))
    }
}, function (t, e, n) {
    var r = n(11), i = n(9), o = "[object Symbol]";
    t.exports = function (t) {
        return "symbol" == typeof t || i(t) && r(t) == o
    }
}, function (t, e, n) {
    "use strict";
    var r = window.jQuery, i = {}, o = [], a = {
        reset: function (t, e) {
            e.__wf_intro = null
        }, intro: function (t, e) {
            e.__wf_intro || (e.__wf_intro = !0, r(e).triggerHandler(i.types.INTRO))
        }, outro: function (t, e) {
            e.__wf_intro && (e.__wf_intro = null, r(e).triggerHandler(i.types.OUTRO))
        }
    };
    i.triggers = {}, i.types = {INTRO: "w-ix-intro.w-ix", OUTRO: "w-ix-outro.w-ix"}, i.init = function () {
        for (var t = o.length, e = 0; e < t; e++) {
            var n = o[e];
            n[0](0, n[1])
        }
        o = [], r.extend(i.triggers, a)
    }, i.async = function () {
        for (var t in a) {
            var e = a[t];
            a.hasOwnProperty(t) && (i.triggers[t] = function (t, n) {
                o.push([e, n])
            })
        }
    }, i.async(), t.exports = i
}, function (t, e, n) {
    "use strict";
    var r = n(37);

    function i(t, e) {
        var n = document.createEvent("CustomEvent");
        n.initCustomEvent(e, !0, !0, null), t.dispatchEvent(n)
    }

    var o = window.jQuery, a = {}, u = {
        reset: function (t, e) {
            r.triggers.reset(t, e)
        }, intro: function (t, e) {
            r.triggers.intro(t, e), i(e, "COMPONENT_ACTIVE")
        }, outro: function (t, e) {
            r.triggers.outro(t, e), i(e, "COMPONENT_INACTIVE")
        }
    };
    a.triggers = {}, a.types = {
        INTRO: "w-ix-intro.w-ix",
        OUTRO: "w-ix-outro.w-ix"
    }, o.extend(a.triggers, u), t.exports = a
}, function (t, e, n) {
    var r = n(132), i = n(134);
    t.exports = function (t) {
        return r(i(t))
    }
}, function (t, e, n) {
    var r = n(14), i = n(70), o = n(24), a = n(69), u = Object.defineProperty;
    e.f = r ? u : function (t, e, n) {
        if (o(t), e = a(e, !0), o(n), i) try {
            return u(t, e, n)
        } catch (t) {
        }
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
        return "value" in n && (t[e] = n.value), t
    }
}, function (t, e, n) {
    var r = n(3), i = n(17);
    t.exports = function (t, e) {
        try {
            i(r, t, e)
        } catch (n) {
            r[t] = e
        }
        return e
    }
}, function (t, e) {
    t.exports = {}
}, function (t, e) {
    t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
}, function (t, e, n) {
    "use strict";
    n.r(e), n.d(e, "ActionTypes", function () {
        return o
    }), n.d(e, "default", function () {
        return a
    });
    var r = n(80), i = n(165), o = {INIT: "@@redux/INIT"};

    function a(t, e, n) {
        var u;
        if ("function" == typeof e && void 0 === n && (n = e, e = void 0), void 0 !== n) {
            if ("function" != typeof n) throw new Error("Expected the enhancer to be a function.");
            return n(a)(t, e)
        }
        if ("function" != typeof t) throw new Error("Expected the reducer to be a function.");
        var c = t, s = e, f = [], l = f, d = !1;

        function p() {
            l === f && (l = f.slice())
        }

        function v() {
            return s
        }

        function h(t) {
            if ("function" != typeof t) throw new Error("Expected listener to be a function.");
            var e = !0;
            return p(), l.push(t), function () {
                if (e) {
                    e = !1, p();
                    var n = l.indexOf(t);
                    l.splice(n, 1)
                }
            }
        }

        function E(t) {
            if (!Object(r.default)(t)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
            if (void 0 === t.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
            if (d) throw new Error("Reducers may not dispatch actions.");
            try {
                d = !0, s = c(s, t)
            } finally {
                d = !1
            }
            for (var e = f = l, n = 0; n < e.length; n++) e[n]();
            return t
        }

        return E({type: o.INIT}), (u = {
            dispatch: E, subscribe: h, getState: v, replaceReducer: function (t) {
                if ("function" != typeof t) throw new Error("Expected the nextReducer to be a function.");
                c = t, E({type: o.INIT})
            }
        })[i.default] = function () {
            var t, e = h;
            return (t = {
                subscribe: function (t) {
                    if ("object" != typeof t) throw new TypeError("Expected the observer to be an object.");

                    function n() {
                        t.next && t.next(v())
                    }

                    return n(), {unsubscribe: e(n)}
                }
            })[i.default] = function () {
                return this
            }, t
        }, u
    }
}, function (t, e, n) {
    "use strict";

    function r() {
        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        if (0 === e.length) return function (t) {
            return t
        };
        if (1 === e.length) return e[0];
        var r = e[e.length - 1], i = e.slice(0, -1);
        return function () {
            return i.reduceRight(function (t, e) {
                return e(t)
            }, r.apply(void 0, arguments))
        }
    }

    n.r(e), n.d(e, "default", function () {
        return r
    })
}, function (t, e, n) {
    "use strict";
    var r = n(0);
    Object.defineProperty(e, "__esModule", {value: !0}), e.TRANSFORM_STYLE_PREFIXED = e.TRANSFORM_PREFIXED = e.FLEX_PREFIXED = e.ELEMENT_MATCHES = e.withBrowser = e.IS_BROWSER_ENV = void 0;
    var i = r(n(86)), o = "undefined" != typeof window;
    e.IS_BROWSER_ENV = o;
    var a = function (t, e) {
        return o ? t() : e
    };
    e.withBrowser = a;
    var u = a(function () {
        return (0, i.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], function (t) {
            return t in Element.prototype
        })
    });
    e.ELEMENT_MATCHES = u;
    var c = a(function () {
        var t = document.createElement("i"), e = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"];
        try {
            for (var n = e.length, r = 0; r < n; r++) {
                var i = e[r];
                if (t.style.display = i, t.style.display === i) return i
            }
            return ""
        } catch (t) {
            return ""
        }
    }, "flex");
    e.FLEX_PREFIXED = c;
    var s = a(function () {
        var t = document.createElement("i");
        if (null == t.style.transform) for (var e = ["Webkit", "Moz", "ms"], n = e.length, r = 0; r < n; r++) {
            var i = e[r] + "Transform";
            if (void 0 !== t.style[i]) return i
        }
        return "transform"
    }, "transform");
    e.TRANSFORM_PREFIXED = s;
    var f = s.split("transform")[0], l = f ? f + "TransformStyle" : "transformStyle";
    e.TRANSFORM_STYLE_PREFIXED = l
}, function (t, e) {
    t.exports = function (t, e) {
        return t === e || t != t && e != e
    }
}, function (t, e, n) {
    var r = n(8)(n(4), "Map");
    t.exports = r
}, function (t, e, n) {
    var r = n(195), i = n(202), o = n(204), a = n(205), u = n(206);

    function c(t) {
        var e = -1, n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }

    c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c
}, function (t, e) {
    t.exports = function (t, e) {
        for (var n = -1, r = e.length, i = t.length; ++n < r;) t[i + n] = e[n];
        return t
    }
}, function (t, e, n) {
    (function (t) {
        var r = n(4), i = n(222), o = e && !e.nodeType && e, a = o && "object" == typeof t && t && !t.nodeType && t,
            u = a && a.exports === o ? r.Buffer : void 0, c = (u ? u.isBuffer : void 0) || i;
        t.exports = c
    }).call(this, n(98)(t))
}, function (t, e) {
    var n = 9007199254740991, r = /^(?:0|[1-9]\d*)$/;
    t.exports = function (t, e) {
        var i = typeof t;
        return !!(e = null == e ? n : e) && ("number" == i || "symbol" != i && r.test(t)) && t > -1 && t % 1 == 0 && t < e
    }
}, function (t, e, n) {
    var r = n(223), i = n(224), o = n(225), a = o && o.isTypedArray, u = a ? i(a) : r;
    t.exports = u
}, function (t, e) {
    var n = 9007199254740991;
    t.exports = function (t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= n
    }
}, function (t, e, n) {
    var r = n(56), i = n(226), o = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
        if (!r(t)) return i(t);
        var e = [];
        for (var n in Object(t)) o.call(t, n) && "constructor" != n && e.push(n);
        return e
    }
}, function (t, e) {
    var n = Object.prototype;
    t.exports = function (t) {
        var e = t && t.constructor;
        return t === ("function" == typeof e && e.prototype || n)
    }
}, function (t, e, n) {
    var r = n(227), i = n(48), o = n(228), a = n(229), u = n(100), c = n(11), s = n(91), f = s(r), l = s(i), d = s(o),
        p = s(a), v = s(u), h = c;
    (r && "[object DataView]" != h(new r(new ArrayBuffer(1))) || i && "[object Map]" != h(new i) || o && "[object Promise]" != h(o.resolve()) || a && "[object Set]" != h(new a) || u && "[object WeakMap]" != h(new u)) && (h = function (t) {
        var e = c(t), n = "[object Object]" == e ? t.constructor : void 0, r = n ? s(n) : "";
        if (r) switch (r) {
            case f:
                return "[object DataView]";
            case l:
                return "[object Map]";
            case d:
                return "[object Promise]";
            case p:
                return "[object Set]";
            case v:
                return "[object WeakMap]"
        }
        return e
    }), t.exports = h
}, function (t, e, n) {
    var r = n(35), i = n(20);
    t.exports = function (t, e) {
        for (var n = 0, o = (e = r(e, t)).length; null != t && n < o;) t = t[i(e[n++])];
        return n && n == o ? t : void 0
    }
}, function (t, e, n) {
    var r = n(1), i = n(36), o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, a = /^\w*$/;
    t.exports = function (t, e) {
        if (r(t)) return !1;
        var n = typeof t;
        return !("number" != n && "symbol" != n && "boolean" != n && null != t && !i(t)) || a.test(t) || !o.test(t) || null != e && t in Object(e)
    }
}, function (t, e) {
    t.exports = function (t) {
        return t
    }
}, function (t, e, n) {
    var r = n(6), i = n(36), o = NaN, a = /^\s+|\s+$/g, u = /^[-+]0x[0-9a-f]+$/i, c = /^0b[01]+$/i, s = /^0o[0-7]+$/i,
        f = parseInt;
    t.exports = function (t) {
        if ("number" == typeof t) return t;
        if (i(t)) return o;
        if (r(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = r(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(a, "");
        var n = c.test(t);
        return n || s.test(t) ? f(t.slice(2), n ? 2 : 8) : u.test(t) ? o : +t
    }
}, function (t, e, n) {
    "use strict";
    var r = n(0);
    Object.defineProperty(e, "__esModule", {value: !0}), e.mediaQueriesDefined = e.viewportWidthChanged = e.actionListPlaybackChanged = e.elementStateChanged = e.instanceRemoved = e.instanceStarted = e.instanceAdded = e.parameterChanged = e.animationFrameChanged = e.eventStateChanged = e.testFrameRendered = e.eventListenerAdded = e.clearRequested = e.stopRequested = e.playbackRequested = e.previewRequested = e.sessionStopped = e.sessionStarted = e.sessionInitialized = e.rawDataImported = void 0;
    var i = r(n(27)), o = n(2), a = n(10), u = o.IX2EngineActionTypes, c = u.IX2_RAW_DATA_IMPORTED,
        s = u.IX2_SESSION_INITIALIZED, f = u.IX2_SESSION_STARTED, l = u.IX2_SESSION_STOPPED,
        d = u.IX2_PREVIEW_REQUESTED, p = u.IX2_PLAYBACK_REQUESTED, v = u.IX2_STOP_REQUESTED, h = u.IX2_CLEAR_REQUESTED,
        E = u.IX2_EVENT_LISTENER_ADDED, g = u.IX2_TEST_FRAME_RENDERED, _ = u.IX2_EVENT_STATE_CHANGED,
        y = u.IX2_ANIMATION_FRAME_CHANGED, m = u.IX2_PARAMETER_CHANGED, I = u.IX2_INSTANCE_ADDED,
        T = u.IX2_INSTANCE_STARTED, b = u.IX2_INSTANCE_REMOVED, O = u.IX2_ELEMENT_STATE_CHANGED,
        w = u.IX2_ACTION_LIST_PLAYBACK_CHANGED, A = u.IX2_VIEWPORT_WIDTH_CHANGED, S = u.IX2_MEDIA_QUERIES_DEFINED,
        x = a.IX2VanillaUtils.reifyState;
    e.rawDataImported = function (t) {
        return {type: c, payload: (0, i.default)({}, x(t))}
    };
    e.sessionInitialized = function (t) {
        var e = t.hasBoundaryNodes;
        return {type: s, payload: {hasBoundaryNodes: e}}
    };
    e.sessionStarted = function () {
        return {type: f}
    };
    e.sessionStopped = function () {
        return {type: l}
    };
    e.previewRequested = function (t) {
        var e = t.rawData, n = t.defer;
        return {type: d, payload: {defer: n, rawData: e}}
    };
    e.playbackRequested = function (t) {
        var e = t.actionTypeId, n = void 0 === e ? o.ActionTypeConsts.GENERAL_START_ACTION : e, r = t.actionListId,
            i = t.actionItemId, a = t.eventId, u = t.allowEvents, c = t.immediate, s = t.testManual, f = t.verbose,
            l = t.rawData;
        return {
            type: p,
            payload: {
                actionTypeId: n,
                actionListId: r,
                actionItemId: i,
                testManual: s,
                eventId: a,
                allowEvents: u,
                immediate: c,
                verbose: f,
                rawData: l
            }
        }
    };
    e.stopRequested = function (t) {
        return {type: v, payload: {actionListId: t}}
    };
    e.clearRequested = function () {
        return {type: h}
    };
    e.eventListenerAdded = function (t, e) {
        return {type: E, payload: {target: t, listenerParams: e}}
    };
    e.testFrameRendered = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return {type: g, payload: {step: t}}
    };
    e.eventStateChanged = function (t, e) {
        return {type: _, payload: {stateKey: t, newState: e}}
    };
    e.animationFrameChanged = function (t, e) {
        return {type: y, payload: {now: t, parameters: e}}
    };
    e.parameterChanged = function (t, e) {
        return {type: m, payload: {key: t, value: e}}
    };
    e.instanceAdded = function (t) {
        return {type: I, payload: (0, i.default)({}, t)}
    };
    e.instanceStarted = function (t, e) {
        return {type: T, payload: {instanceId: t, time: e}}
    };
    e.instanceRemoved = function (t) {
        return {type: b, payload: {instanceId: t}}
    };
    e.elementStateChanged = function (t, e, n, r) {
        return {type: O, payload: {elementId: t, actionTypeId: e, current: n, actionItem: r}}
    };
    e.actionListPlaybackChanged = function (t) {
        var e = t.actionListId, n = t.isPlaying;
        return {type: w, payload: {actionListId: e, isPlaying: n}}
    };
    e.viewportWidthChanged = function (t) {
        var e = t.width, n = t.mediaQueries;
        return {type: A, payload: {width: e, mediaQueries: n}}
    };
    e.mediaQueriesDefined = function () {
        return {type: S}
    }
}, function (t, e, n) {
    var r = n(118), i = n(64);

    function o(t, e) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = void 0
    }

    o.prototype = r(i.prototype), o.prototype.constructor = o, t.exports = o
}, function (t, e) {
    t.exports = function () {
    }
}, function (t, e, n) {
    var r = n(118), i = n(64), o = 4294967295;

    function a(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = o, this.__views__ = []
    }

    a.prototype = r(i.prototype), a.prototype.constructor = a, t.exports = a
}, function (t, e, n) {
    "use strict";
    var r = n(0)(n(21));
    window.tram = function (t) {
        function e(t, e) {
            return (new F.Bare).init(t, e)
        }

        function n(t) {
            return t.replace(/[A-Z]/g, function (t) {
                return "-" + t.toLowerCase()
            })
        }

        function i(t) {
            var e = parseInt(t.slice(1), 16);
            return [e >> 16 & 255, e >> 8 & 255, 255 & e]
        }

        function o(t, e, n) {
            return "#" + (1 << 24 | t << 16 | e << 8 | n).toString(16).slice(1)
        }

        function a() {
        }

        function u(t, e, n) {
            s("Units do not match [" + t + "]: " + e + ", " + n)
        }

        function c(t, e, n) {
            if (void 0 !== e && (n = e), void 0 === t) return n;
            var r = n;
            return $.test(t) || !Z.test(t) ? r = parseInt(t, 10) : Z.test(t) && (r = 1e3 * parseFloat(t)), 0 > r && (r = 0), r == r ? r : n
        }

        function s(t) {
            H.debug && window && window.console.warn(t)
        }

        var f = function (t, e, n) {
                function i(t) {
                    return "object" == (0, r.default)(t)
                }

                function o(t) {
                    return "function" == typeof t
                }

                function a() {
                }

                return function r(u, c) {
                    function s() {
                        var t = new f;
                        return o(t.init) && t.init.apply(t, arguments), t
                    }

                    function f() {
                    }

                    c === n && (c = u, u = Object), s.Bare = f;
                    var l, d = a[t] = u[t], p = f[t] = s[t] = new a;
                    return p.constructor = s, s.mixin = function (e) {
                        return f[t] = s[t] = r(s, e)[t], s
                    }, s.open = function (t) {
                        if (l = {}, o(t) ? l = t.call(s, p, d, s, u) : i(t) && (l = t), i(l)) for (var n in l) e.call(l, n) && (p[n] = l[n]);
                        return o(p.init) || (p.init = u), s
                    }, s.open(c)
                }
            }("prototype", {}.hasOwnProperty), l = {
                ease: ["ease", function (t, e, n, r) {
                    var i = (t /= r) * t, o = i * t;
                    return e + n * (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + .25 * t)
                }], "ease-in": ["ease-in", function (t, e, n, r) {
                    var i = (t /= r) * t, o = i * t;
                    return e + n * (-1 * o * i + 3 * i * i + -3 * o + 2 * i)
                }], "ease-out": ["ease-out", function (t, e, n, r) {
                    var i = (t /= r) * t, o = i * t;
                    return e + n * (.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * t)
                }], "ease-in-out": ["ease-in-out", function (t, e, n, r) {
                    var i = (t /= r) * t, o = i * t;
                    return e + n * (2 * o * i + -5 * i * i + 2 * o + 2 * i)
                }], linear: ["linear", function (t, e, n, r) {
                    return n * t / r + e
                }], "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function (t, e, n, r) {
                    return n * (t /= r) * t + e
                }], "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function (t, e, n, r) {
                    return -n * (t /= r) * (t - 2) + e
                }], "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function (t, e, n, r) {
                    return (t /= r / 2) < 1 ? n / 2 * t * t + e : -n / 2 * (--t * (t - 2) - 1) + e
                }], "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function (t, e, n, r) {
                    return n * (t /= r) * t * t + e
                }], "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function (t, e, n, r) {
                    return n * ((t = t / r - 1) * t * t + 1) + e
                }], "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function (t, e, n, r) {
                    return (t /= r / 2) < 1 ? n / 2 * t * t * t + e : n / 2 * ((t -= 2) * t * t + 2) + e
                }], "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function (t, e, n, r) {
                    return n * (t /= r) * t * t * t + e
                }], "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function (t, e, n, r) {
                    return -n * ((t = t / r - 1) * t * t * t - 1) + e
                }], "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function (t, e, n, r) {
                    return (t /= r / 2) < 1 ? n / 2 * t * t * t * t + e : -n / 2 * ((t -= 2) * t * t * t - 2) + e
                }], "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function (t, e, n, r) {
                    return n * (t /= r) * t * t * t * t + e
                }], "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function (t, e, n, r) {
                    return n * ((t = t / r - 1) * t * t * t * t + 1) + e
                }], "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function (t, e, n, r) {
                    return (t /= r / 2) < 1 ? n / 2 * t * t * t * t * t + e : n / 2 * ((t -= 2) * t * t * t * t + 2) + e
                }], "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function (t, e, n, r) {
                    return -n * Math.cos(t / r * (Math.PI / 2)) + n + e
                }], "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function (t, e, n, r) {
                    return n * Math.sin(t / r * (Math.PI / 2)) + e
                }], "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function (t, e, n, r) {
                    return -n / 2 * (Math.cos(Math.PI * t / r) - 1) + e
                }], "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function (t, e, n, r) {
                    return 0 === t ? e : n * Math.pow(2, 10 * (t / r - 1)) + e
                }], "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function (t, e, n, r) {
                    return t === r ? e + n : n * (1 - Math.pow(2, -10 * t / r)) + e
                }], "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function (t, e, n, r) {
                    return 0 === t ? e : t === r ? e + n : (t /= r / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + e : n / 2 * (2 - Math.pow(2, -10 * --t)) + e
                }], "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function (t, e, n, r) {
                    return -n * (Math.sqrt(1 - (t /= r) * t) - 1) + e
                }], "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function (t, e, n, r) {
                    return n * Math.sqrt(1 - (t = t / r - 1) * t) + e
                }], "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function (t, e, n, r) {
                    return (t /= r / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + e : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
                }], "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function (t, e, n, r, i) {
                    return void 0 === i && (i = 1.70158), n * (t /= r) * t * ((i + 1) * t - i) + e
                }], "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function (t, e, n, r, i) {
                    return void 0 === i && (i = 1.70158), n * ((t = t / r - 1) * t * ((i + 1) * t + i) + 1) + e
                }], "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function (t, e, n, r, i) {
                    return void 0 === i && (i = 1.70158), (t /= r / 2) < 1 ? n / 2 * t * t * ((1 + (i *= 1.525)) * t - i) + e : n / 2 * ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2) + e
                }]
            }, d = {
                "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
            }, p = document, v = window, h = "bkwld-tram", E = /[\-\.0-9]/g, g = /[A-Z]/, _ = "number", y = /^(rgb|#)/,
            m = /(em|cm|mm|in|pt|pc|px)$/, I = /(em|cm|mm|in|pt|pc|px|%)$/, T = /(deg|rad|turn)$/, b = "unitless",
            O = /(all|none) 0s ease 0s/, w = /^(width|height)$/, A = " ", S = p.createElement("a"),
            x = ["Webkit", "Moz", "O", "ms"], R = ["-webkit-", "-moz-", "-o-", "-ms-"], N = function (t) {
                if (t in S.style) return {dom: t, css: t};
                var e, n, r = "", i = t.split("-");
                for (e = 0; e < i.length; e++) r += i[e].charAt(0).toUpperCase() + i[e].slice(1);
                for (e = 0; e < x.length; e++) if ((n = x[e] + r) in S.style) return {dom: n, css: R[e] + t}
            }, C = e.support = {
                bind: Function.prototype.bind,
                transform: N("transform"),
                transition: N("transition"),
                backface: N("backface-visibility"),
                timing: N("transition-timing-function")
            };
        if (C.transition) {
            var L = C.timing.dom;
            if (S.style[L] = l["ease-in-back"][0], !S.style[L]) for (var D in d) l[D][0] = d[D]
        }
        var P = e.frame = function () {
            var t = v.requestAnimationFrame || v.webkitRequestAnimationFrame || v.mozRequestAnimationFrame || v.oRequestAnimationFrame || v.msRequestAnimationFrame;
            return t && C.bind ? t.bind(v) : function (t) {
                v.setTimeout(t, 16)
            }
        }(), M = e.now = function () {
            var t = v.performance, e = t && (t.now || t.webkitNow || t.msNow || t.mozNow);
            return e && C.bind ? e.bind(t) : Date.now || function () {
                return +new Date
            }
        }(), j = f(function (e) {
            function i(t, e) {
                var n = function (t) {
                    for (var e = -1, n = t ? t.length : 0, r = []; ++e < n;) {
                        var i = t[e];
                        i && r.push(i)
                    }
                    return r
                }(("" + t).split(A)), r = n[0];
                e = e || {};
                var i = Q[r];
                if (!i) return s("Unsupported property: " + r);
                if (!e.weak || !this.props[r]) {
                    var o = i[0], a = this.props[r];
                    return a || (a = this.props[r] = new o.Bare), a.init(this.$el, n, i, e), a
                }
            }

            function o(t, e, n) {
                if (t) {
                    var o = (0, r.default)(t);
                    if (e || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), "number" == o && e) return this.timer = new W({
                        duration: t,
                        context: this,
                        complete: a
                    }), void (this.active = !0);
                    if ("string" == o && e) {
                        switch (t) {
                            case"hide":
                                f.call(this);
                                break;
                            case"stop":
                                u.call(this);
                                break;
                            case"redraw":
                                l.call(this);
                                break;
                            default:
                                i.call(this, t, n && n[1])
                        }
                        return a.call(this)
                    }
                    if ("function" == o) return void t.call(this, this);
                    if ("object" == o) {
                        var s = 0;
                        p.call(this, t, function (t, e) {
                            t.span > s && (s = t.span), t.stop(), t.animate(e)
                        }, function (t) {
                            "wait" in t && (s = c(t.wait, 0))
                        }), d.call(this), s > 0 && (this.timer = new W({
                            duration: s,
                            context: this
                        }), this.active = !0, e && (this.timer.complete = a));
                        var v = this, h = !1, E = {};
                        P(function () {
                            p.call(v, t, function (t) {
                                t.active && (h = !0, E[t.name] = t.nextStyle)
                            }), h && v.$el.css(E)
                        })
                    }
                }
            }

            function a() {
                if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                    var t = this.queue.shift();
                    o.call(this, t.options, !0, t.args)
                }
            }

            function u(t) {
                var e;
                this.timer && this.timer.destroy(), this.queue = [], this.active = !1, "string" == typeof t ? (e = {})[t] = 1 : e = "object" == (0, r.default)(t) && null != t ? t : this.props, p.call(this, e, v), d.call(this)
            }

            function f() {
                u.call(this), this.el.style.display = "none"
            }

            function l() {
                this.el.offsetHeight
            }

            function d() {
                var t, e, n = [];
                for (t in this.upstream && n.push(this.upstream), this.props) (e = this.props[t]).active && n.push(e.string);
                n = n.join(","), this.style !== n && (this.style = n, this.el.style[C.transition.dom] = n)
            }

            function p(t, e, r) {
                var o, a, u, c, s = e !== v, f = {};
                for (o in t) u = t[o], o in q ? (f.transform || (f.transform = {}), f.transform[o] = u) : (g.test(o) && (o = n(o)), o in Q ? f[o] = u : (c || (c = {}), c[o] = u));
                for (o in f) {
                    if (u = f[o], !(a = this.props[o])) {
                        if (!s) continue;
                        a = i.call(this, o)
                    }
                    e.call(this, a, u)
                }
                r && c && r.call(this, c)
            }

            function v(t) {
                t.stop()
            }

            function E(t, e) {
                t.set(e)
            }

            function _(t) {
                this.$el.css(t)
            }

            function y(t, n) {
                e[t] = function () {
                    return this.children ? function (t, e) {
                        var n, r = this.children.length;
                        for (n = 0; r > n; n++) t.apply(this.children[n], e);
                        return this
                    }.call(this, n, arguments) : (this.el && n.apply(this, arguments), this)
                }
            }

            e.init = function (e) {
                if (this.$el = t(e), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, H.keepInherited && !H.fallback) {
                    var n = Y(this.el, "transition");
                    n && !O.test(n) && (this.upstream = n)
                }
                C.backface && H.hideBackface && z(this.el, C.backface.css, "hidden")
            }, y("add", i), y("start", o), y("wait", function (t) {
                t = c(t, 0), this.active ? this.queue.push({options: t}) : (this.timer = new W({
                    duration: t,
                    context: this,
                    complete: a
                }), this.active = !0)
            }), y("then", function (t) {
                return this.active ? (this.queue.push({
                    options: t,
                    args: arguments
                }), void (this.timer.complete = a)) : s("No active transition timer. Use start() or wait() before then().")
            }), y("next", a), y("stop", u), y("set", function (t) {
                u.call(this, t), p.call(this, t, E, _)
            }), y("show", function (t) {
                "string" != typeof t && (t = "block"), this.el.style.display = t
            }), y("hide", f), y("redraw", l), y("destroy", function () {
                u.call(this), t.removeData(this.el, h), this.$el = this.el = null
            })
        }), F = f(j, function (e) {
            function n(e, n) {
                var r = t.data(e, h) || t.data(e, h, new j.Bare);
                return r.el || r.init(e), n ? r.start(n) : r
            }

            e.init = function (e, r) {
                var i = t(e);
                if (!i.length) return this;
                if (1 === i.length) return n(i[0], r);
                var o = [];
                return i.each(function (t, e) {
                    o.push(n(e, r))
                }), this.children = o, this
            }
        }), k = f(function (t) {
            function e() {
                var t = this.get();
                this.update("auto");
                var e = this.get();
                return this.update(t), e
            }

            function n(t) {
                var e = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);
                return (e ? o(e[1], e[2], e[3]) : t).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
            }

            var i = 500, a = "ease", u = 0;
            t.init = function (t, e, n, r) {
                this.$el = t, this.el = t[0];
                var o = e[0];
                n[2] && (o = n[2]), K[o] && (o = K[o]), this.name = o, this.type = n[1], this.duration = c(e[1], this.duration, i), this.ease = function (t, e, n) {
                    return void 0 !== e && (n = e), t in l ? t : n
                }(e[2], this.ease, a), this.delay = c(e[3], this.delay, u), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = w.test(this.name), this.unit = r.unit || this.unit || H.defaultUnit, this.angle = r.angle || this.angle || H.defaultAngle, H.fallback || r.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + A + this.duration + "ms" + ("ease" != this.ease ? A + l[this.ease][0] : "") + (this.delay ? A + this.delay + "ms" : ""))
            }, t.set = function (t) {
                t = this.convert(t, this.type), this.update(t), this.redraw()
            }, t.transition = function (t) {
                this.active = !0, t = this.convert(t, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == t && (t = e.call(this))), this.nextStyle = t
            }, t.fallback = function (t) {
                var n = this.el.style[this.name] || this.convert(this.get(), this.type);
                t = this.convert(t, this.type), this.auto && ("auto" == n && (n = this.convert(this.get(), this.type)), "auto" == t && (t = e.call(this))), this.tween = new U({
                    from: n,
                    to: t,
                    duration: this.duration,
                    delay: this.delay,
                    ease: this.ease,
                    update: this.update,
                    context: this
                })
            }, t.get = function () {
                return Y(this.el, this.name)
            }, t.update = function (t) {
                z(this.el, this.name, t)
            }, t.stop = function () {
                (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, z(this.el, this.name, this.get()));
                var t = this.tween;
                t && t.context && t.destroy()
            }, t.convert = function (t, e) {
                if ("auto" == t && this.auto) return t;
                var i, o = "number" == typeof t, a = "string" == typeof t;
                switch (e) {
                    case _:
                        if (o) return t;
                        if (a && "" === t.replace(E, "")) return +t;
                        i = "number(unitless)";
                        break;
                    case y:
                        if (a) {
                            if ("" === t && this.original) return this.original;
                            if (e.test(t)) return "#" == t.charAt(0) && 7 == t.length ? t : n(t)
                        }
                        i = "hex or rgb string";
                        break;
                    case m:
                        if (o) return t + this.unit;
                        if (a && e.test(t)) return t;
                        i = "number(px) or string(unit)";
                        break;
                    case I:
                        if (o) return t + this.unit;
                        if (a && e.test(t)) return t;
                        i = "number(px) or string(unit or %)";
                        break;
                    case T:
                        if (o) return t + this.angle;
                        if (a && e.test(t)) return t;
                        i = "number(deg) or string(angle)";
                        break;
                    case b:
                        if (o) return t;
                        if (a && I.test(t)) return t;
                        i = "number(unitless) or string(unit or %)"
                }
                return function (t, e) {
                    s("Type warning: Expected: [" + t + "] Got: [" + (0, r.default)(e) + "] " + e)
                }(i, t), t
            }, t.redraw = function () {
                this.el.offsetHeight
            }
        }), X = f(k, function (t, e) {
            t.init = function () {
                e.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), y))
            }
        }), G = f(k, function (t, e) {
            t.init = function () {
                e.init.apply(this, arguments), this.animate = this.fallback
            }, t.get = function () {
                return this.$el[this.name]()
            }, t.update = function (t) {
                this.$el[this.name](t)
            }
        }), V = f(k, function (t, e) {
            function n(t, e) {
                var n, r, i, o, a;
                for (n in t) i = (o = q[n])[0], r = o[1] || n, a = this.convert(t[n], i), e.call(this, r, a, i)
            }

            t.init = function () {
                e.init.apply(this, arguments), this.current || (this.current = {}, q.perspective && H.perspective && (this.current.perspective = H.perspective, z(this.el, this.name, this.style(this.current)), this.redraw()))
            }, t.set = function (t) {
                n.call(this, t, function (t, e) {
                    this.current[t] = e
                }), z(this.el, this.name, this.style(this.current)), this.redraw()
            }, t.transition = function (t) {
                var e = this.values(t);
                this.tween = new B({
                    current: this.current,
                    values: e,
                    duration: this.duration,
                    delay: this.delay,
                    ease: this.ease
                });
                var n, r = {};
                for (n in this.current) r[n] = n in e ? e[n] : this.current[n];
                this.active = !0, this.nextStyle = this.style(r)
            }, t.fallback = function (t) {
                var e = this.values(t);
                this.tween = new B({
                    current: this.current,
                    values: e,
                    duration: this.duration,
                    delay: this.delay,
                    ease: this.ease,
                    update: this.update,
                    context: this
                })
            }, t.update = function () {
                z(this.el, this.name, this.style(this.current))
            }, t.style = function (t) {
                var e, n = "";
                for (e in t) n += e + "(" + t[e] + ") ";
                return n
            }, t.values = function (t) {
                var e, r = {};
                return n.call(this, t, function (t, n, i) {
                    r[t] = n, void 0 === this.current[t] && (e = 0, ~t.indexOf("scale") && (e = 1), this.current[t] = this.convert(e, i))
                }), r
            }
        }), U = f(function (e) {
            function n() {
                var t, e, r, i = c.length;
                if (i) for (P(n), e = M(), t = i; t--;) (r = c[t]) && r.render(e)
            }

            var r = {ease: l.ease[1], from: 0, to: 1};
            e.init = function (t) {
                this.duration = t.duration || 0, this.delay = t.delay || 0;
                var e = t.ease || r.ease;
                l[e] && (e = l[e][1]), "function" != typeof e && (e = r.ease), this.ease = e, this.update = t.update || a, this.complete = t.complete || a, this.context = t.context || this, this.name = t.name;
                var n = t.from, i = t.to;
                void 0 === n && (n = r.from), void 0 === i && (i = r.to), this.unit = t.unit || "", "number" == typeof n && "number" == typeof i ? (this.begin = n, this.change = i - n) : this.format(i, n), this.value = this.begin + this.unit, this.start = M(), !1 !== t.autoplay && this.play()
            }, e.play = function () {
                var t;
                this.active || (this.start || (this.start = M()), this.active = !0, t = this, 1 === c.push(t) && P(n))
            }, e.stop = function () {
                var e, n, r;
                this.active && (this.active = !1, e = this, (r = t.inArray(e, c)) >= 0 && (n = c.slice(r + 1), c.length = r, n.length && (c = c.concat(n))))
            }, e.render = function (t) {
                var e, n = t - this.start;
                if (this.delay) {
                    if (n <= this.delay) return;
                    n -= this.delay
                }
                if (n < this.duration) {
                    var r = this.ease(n, 0, 1, this.duration);
                    return e = this.startRGB ? function (t, e, n) {
                        return o(t[0] + n * (e[0] - t[0]), t[1] + n * (e[1] - t[1]), t[2] + n * (e[2] - t[2]))
                    }(this.startRGB, this.endRGB, r) : function (t) {
                        return Math.round(t * s) / s
                    }(this.begin + r * this.change), this.value = e + this.unit, void this.update.call(this.context, this.value)
                }
                e = this.endHex || this.begin + this.change, this.value = e + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
            }, e.format = function (t, e) {
                if (e += "", "#" == (t += "").charAt(0)) return this.startRGB = i(e), this.endRGB = i(t), this.endHex = t, this.begin = 0, void (this.change = 1);
                if (!this.unit) {
                    var n = e.replace(E, "");
                    n !== t.replace(E, "") && u("tween", e, t), this.unit = n
                }
                e = parseFloat(e), t = parseFloat(t), this.begin = this.value = e, this.change = t - e
            }, e.destroy = function () {
                this.stop(), this.context = null, this.ease = this.update = this.complete = a
            };
            var c = [], s = 1e3
        }), W = f(U, function (t) {
            t.init = function (t) {
                this.duration = t.duration || 0, this.complete = t.complete || a, this.context = t.context, this.play()
            }, t.render = function (t) {
                t - this.start < this.duration || (this.complete.call(this.context), this.destroy())
            }
        }), B = f(U, function (t, e) {
            t.init = function (t) {
                var e, n;
                for (e in this.context = t.context, this.update = t.update, this.tweens = [], this.current = t.current, t.values) n = t.values[e], this.current[e] !== n && this.tweens.push(new U({
                    name: e,
                    from: this.current[e],
                    to: n,
                    duration: t.duration,
                    delay: t.delay,
                    ease: t.ease,
                    autoplay: !1
                }));
                this.play()
            }, t.render = function (t) {
                var e, n, r = !1;
                for (e = this.tweens.length; e--;) (n = this.tweens[e]).context && (n.render(t), this.current[n.name] = n.value, r = !0);
                return r ? void (this.update && this.update.call(this.context)) : this.destroy()
            }, t.destroy = function () {
                if (e.destroy.call(this), this.tweens) {
                    var t;
                    for (t = this.tweens.length; t--;) this.tweens[t].destroy();
                    this.tweens = null, this.current = null
                }
            }
        }), H = e.config = {
            debug: !1,
            defaultUnit: "px",
            defaultAngle: "deg",
            keepInherited: !1,
            hideBackface: !1,
            perspective: "",
            fallback: !C.transition,
            agentTests: []
        };
        e.fallback = function (t) {
            if (!C.transition) return H.fallback = !0;
            H.agentTests.push("(" + t + ")");
            var e = new RegExp(H.agentTests.join("|"), "i");
            H.fallback = e.test(navigator.userAgent)
        }, e.fallback("6.0.[2-5] Safari"), e.tween = function (t) {
            return new U(t)
        }, e.delay = function (t, e, n) {
            return new W({complete: e, duration: t, context: n})
        }, t.fn.tram = function (t) {
            return e.call(null, this, t)
        };
        var z = t.style, Y = t.css, K = {transform: C.transform && C.transform.css}, Q = {
            color: [X, y],
            background: [X, y, "background-color"],
            "outline-color": [X, y],
            "border-color": [X, y],
            "border-top-color": [X, y],
            "border-right-color": [X, y],
            "border-bottom-color": [X, y],
            "border-left-color": [X, y],
            "border-width": [k, m],
            "border-top-width": [k, m],
            "border-right-width": [k, m],
            "border-bottom-width": [k, m],
            "border-left-width": [k, m],
            "border-spacing": [k, m],
            "letter-spacing": [k, m],
            margin: [k, m],
            "margin-top": [k, m],
            "margin-right": [k, m],
            "margin-bottom": [k, m],
            "margin-left": [k, m],
            padding: [k, m],
            "padding-top": [k, m],
            "padding-right": [k, m],
            "padding-bottom": [k, m],
            "padding-left": [k, m],
            "outline-width": [k, m],
            opacity: [k, _],
            top: [k, I],
            right: [k, I],
            bottom: [k, I],
            left: [k, I],
            "font-size": [k, I],
            "text-indent": [k, I],
            "word-spacing": [k, I],
            width: [k, I],
            "min-width": [k, I],
            "max-width": [k, I],
            height: [k, I],
            "min-height": [k, I],
            "max-height": [k, I],
            "line-height": [k, b],
            "scroll-top": [G, _, "scrollTop"],
            "scroll-left": [G, _, "scrollLeft"]
        }, q = {};
        C.transform && (Q.transform = [V], q = {
            x: [I, "translateX"],
            y: [I, "translateY"],
            rotate: [T],
            rotateX: [T],
            rotateY: [T],
            scale: [_],
            scaleX: [_],
            scaleY: [_],
            skew: [T],
            skewX: [T],
            skewY: [T]
        }), C.transform && C.backface && (q.z = [I, "translateZ"], q.rotateZ = [T], q.scaleZ = [_], q.perspective = [m]);
        var $ = /ms/, Z = /s|\./;
        return t.tram = e
    }(window.jQuery)
}, function (t, e, n) {
    var r = n(14), i = n(131), o = n(68), a = n(39), u = n(69), c = n(16), s = n(70),
        f = Object.getOwnPropertyDescriptor;
    e.f = r ? f : function (t, e) {
        if (t = a(t), e = u(e, !0), s) try {
            return f(t, e)
        } catch (t) {
        }
        if (c(t, e)) return o(!i.f.call(t, e), t[e])
    }
}, function (t, e) {
    t.exports = function (t, e) {
        return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e}
    }
}, function (t, e, n) {
    var r = n(23);
    t.exports = function (t, e) {
        if (!r(t)) return t;
        var n, i;
        if (e && "function" == typeof (n = t.toString) && !r(i = n.call(t))) return i;
        if ("function" == typeof (n = t.valueOf) && !r(i = n.call(t))) return i;
        if (!e && "function" == typeof (n = t.toString) && !r(i = n.call(t))) return i;
        throw TypeError("Can't convert object to primitive value")
    }
}, function (t, e, n) {
    var r = n(14), i = n(15), o = n(71);
    t.exports = !r && !i(function () {
        return 7 != Object.defineProperty(o("div"), "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (t, e, n) {
    var r = n(3), i = n(23), o = r.document, a = i(o) && i(o.createElement);
    t.exports = function (t) {
        return a ? o.createElement(t) : {}
    }
}, function (t, e, n) {
    var r = n(25);
    t.exports = r("native-function-to-string", Function.toString)
}, function (t, e, n) {
    var r = n(25), i = n(74), o = r("keys");
    t.exports = function (t) {
        return o[t] || (o[t] = i(t))
    }
}, function (t, e) {
    var n = 0, r = Math.random();
    t.exports = function (t) {
        return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++n + r).toString(36)
    }
}, function (t, e, n) {
    var r = n(141), i = n(3), o = function (t) {
        return "function" == typeof t ? t : void 0
    };
    t.exports = function (t, e) {
        return arguments.length < 2 ? o(r[t]) || o(i[t]) : r[t] && r[t][e] || i[t] && i[t][e]
    }
}, function (t, e, n) {
    var r = n(16), i = n(39), o = n(77).indexOf, a = n(42);
    t.exports = function (t, e) {
        var n, u = i(t), c = 0, s = [];
        for (n in u) !r(a, n) && r(u, n) && s.push(n);
        for (; e.length > c;) r(u, n = e[c++]) && (~o(s, n) || s.push(n));
        return s
    }
}, function (t, e, n) {
    var r = n(39), i = n(143), o = n(144), a = function (t) {
        return function (e, n, a) {
            var u, c = r(e), s = i(c.length), f = o(a, s);
            if (t && n != n) {
                for (; s > f;) if ((u = c[f++]) != u) return !0
            } else for (; s > f; f++) if ((t || f in c) && c[f] === n) return t || f || 0;
            return !t && -1
        }
    };
    t.exports = {includes: a(!0), indexOf: a(!1)}
}, function (t, e) {
    var n = Math.ceil, r = Math.floor;
    t.exports = function (t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
    }
}, function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(44);
    n.d(e, "createStore", function () {
        return r.default
    });
    var i = n(82);
    n.d(e, "combineReducers", function () {
        return i.default
    });
    var o = n(84);
    n.d(e, "bindActionCreators", function () {
        return o.default
    });
    var a = n(85);
    n.d(e, "applyMiddleware", function () {
        return a.default
    });
    var u = n(45);
    n.d(e, "compose", function () {
        return u.default
    });
    n(83)
}, function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(157), i = n(162), o = n(164), a = "[object Object]", u = Function.prototype, c = Object.prototype,
        s = u.toString, f = c.hasOwnProperty, l = s.call(Object);
    e.default = function (t) {
        if (!Object(o.default)(t) || Object(r.default)(t) != a) return !1;
        var e = Object(i.default)(t);
        if (null === e) return !0;
        var n = f.call(e, "constructor") && e.constructor;
        return "function" == typeof n && n instanceof n && s.call(n) == l
    }
}, function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(158).default.Symbol;
    e.default = r
}, function (t, e, n) {
    "use strict";
    n.r(e), n.d(e, "default", function () {
        return o
    });
    var r = n(44);
    n(80), n(83);

    function i(t, e) {
        var n = e && e.type;
        return "Given action " + (n && '"' + n.toString() + '"' || "an action") + ', reducer "' + t + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
    }

    function o(t) {
        for (var e = Object.keys(t), n = {}, o = 0; o < e.length; o++) {
            var a = e[o];
            0, "function" == typeof t[a] && (n[a] = t[a])
        }
        var u, c = Object.keys(n);
        try {
            !function (t) {
                Object.keys(t).forEach(function (e) {
                    var n = t[e];
                    if (void 0 === n(void 0, {type: r.ActionTypes.INIT})) throw new Error('Reducer "' + e + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                    if (void 0 === n(void 0, {type: "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".")})) throw new Error('Reducer "' + e + "\" returned undefined when probed with a random type. Don't try to handle " + r.ActionTypes.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.')
                })
            }(n)
        } catch (t) {
            u = t
        }
        return function () {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], e = arguments[1];
            if (u) throw u;
            for (var r = !1, o = {}, a = 0; a < c.length; a++) {
                var s = c[a], f = n[s], l = t[s], d = f(l, e);
                if (void 0 === d) {
                    var p = i(s, e);
                    throw new Error(p)
                }
                o[s] = d, r = r || d !== l
            }
            return r ? o : t
        }
    }
}, function (t, e, n) {
    "use strict";

    function r(t) {
        "undefined" != typeof console && "function" == typeof console.error && console.error(t);
        try {
            throw new Error(t)
        } catch (t) {
        }
    }

    n.r(e), n.d(e, "default", function () {
        return r
    })
}, function (t, e, n) {
    "use strict";

    function r(t, e) {
        return function () {
            return e(t.apply(void 0, arguments))
        }
    }

    function i(t, e) {
        if ("function" == typeof t) return r(t, e);
        if ("object" != typeof t || null === t) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === t ? "null" : typeof t) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
        for (var n = Object.keys(t), i = {}, o = 0; o < n.length; o++) {
            var a = n[o], u = t[a];
            "function" == typeof u && (i[a] = r(u, e))
        }
        return i
    }

    n.r(e), n.d(e, "default", function () {
        return i
    })
}, function (t, e, n) {
    "use strict";
    n.r(e), n.d(e, "default", function () {
        return o
    });
    var r = n(45), i = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
        }
        return t
    };

    function o() {
        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return function (t) {
            return function (n, o, a) {
                var u, c = t(n, o, a), s = c.dispatch, f = {
                    getState: c.getState, dispatch: function (t) {
                        return s(t)
                    }
                };
                return u = e.map(function (t) {
                    return t(f)
                }), s = r.default.apply(void 0, u)(c.dispatch), i({}, c, {dispatch: s})
            }
        }
    }
}, function (t, e, n) {
    var r = n(87)(n(242));
    t.exports = r
}, function (t, e, n) {
    var r = n(7), i = n(12), o = n(32);
    t.exports = function (t) {
        return function (e, n, a) {
            var u = Object(e);
            if (!i(e)) {
                var c = r(n, 3);
                e = o(e), n = function (t) {
                    return c(u[t], t, u)
                }
            }
            var s = t(e, n, a);
            return s > -1 ? u[c ? e[s] : s] : void 0
        }
    }
}, function (t, e, n) {
    var r = n(28), i = n(184), o = n(185), a = n(186), u = n(187), c = n(188);

    function s(t) {
        var e = this.__data__ = new r(t);
        this.size = e.size
    }

    s.prototype.clear = i, s.prototype.delete = o, s.prototype.get = a, s.prototype.has = u, s.prototype.set = c, t.exports = s
}, function (t, e, n) {
    var r = n(11), i = n(6), o = "[object AsyncFunction]", a = "[object Function]", u = "[object GeneratorFunction]",
        c = "[object Proxy]";
    t.exports = function (t) {
        if (!i(t)) return !1;
        var e = r(t);
        return e == a || e == u || e == o || e == c
    }
}, function (t, e, n) {
    (function (e) {
        var n = "object" == typeof e && e && e.Object === Object && e;
        t.exports = n
    }).call(this, n(22))
}, function (t, e) {
    var n = Function.prototype.toString;
    t.exports = function (t) {
        if (null != t) {
            try {
                return n.call(t)
            } catch (t) {
            }
            try {
                return t + ""
            } catch (t) {
            }
        }
        return ""
    }
}, function (t, e, n) {
    var r = n(207), i = n(9);
    t.exports = function t(e, n, o, a, u) {
        return e === n || (null == e || null == n || !i(e) && !i(n) ? e != e && n != n : r(e, n, o, a, t, u))
    }
}, function (t, e, n) {
    var r = n(208), i = n(211), o = n(212), a = 1, u = 2;
    t.exports = function (t, e, n, c, s, f) {
        var l = n & a, d = t.length, p = e.length;
        if (d != p && !(l && p > d)) return !1;
        var v = f.get(t), h = f.get(e);
        if (v && h) return v == e && h == t;
        var E = -1, g = !0, _ = n & u ? new r : void 0;
        for (f.set(t, e), f.set(e, t); ++E < d;) {
            var y = t[E], m = e[E];
            if (c) var I = l ? c(m, y, E, e, t, f) : c(y, m, E, t, e, f);
            if (void 0 !== I) {
                if (I) continue;
                g = !1;
                break
            }
            if (_) {
                if (!i(e, function (t, e) {
                    if (!o(_, e) && (y === t || s(y, t, n, c, f))) return _.push(e)
                })) {
                    g = !1;
                    break
                }
            } else if (y !== m && !s(y, m, n, c, f)) {
                g = !1;
                break
            }
        }
        return f.delete(t), f.delete(e), g
    }
}, function (t, e, n) {
    var r = n(50), i = n(1);
    t.exports = function (t, e, n) {
        var o = e(t);
        return i(t) ? o : r(o, n(t))
    }
}, function (t, e, n) {
    var r = n(219), i = n(96), o = Object.prototype.propertyIsEnumerable, a = Object.getOwnPropertySymbols,
        u = a ? function (t) {
            return null == t ? [] : (t = Object(t), r(a(t), function (e) {
                return o.call(t, e)
            }))
        } : i;
    t.exports = u
}, function (t, e) {
    t.exports = function () {
        return []
    }
}, function (t, e, n) {
    var r = n(220), i = n(33), o = n(1), a = n(51), u = n(52), c = n(53), s = Object.prototype.hasOwnProperty;
    t.exports = function (t, e) {
        var n = o(t), f = !n && i(t), l = !n && !f && a(t), d = !n && !f && !l && c(t), p = n || f || l || d,
            v = p ? r(t.length, String) : [], h = v.length;
        for (var E in t) !e && !s.call(t, E) || p && ("length" == E || l && ("offset" == E || "parent" == E) || d && ("buffer" == E || "byteLength" == E || "byteOffset" == E) || u(E, h)) || v.push(E);
        return v
    }
}, function (t, e) {
    t.exports = function (t) {
        return t.webpackPolyfill || (t.deprecate = function () {
        }, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function () {
                return t.l
            }
        }), Object.defineProperty(t, "id", {
            enumerable: !0, get: function () {
                return t.i
            }
        }), t.webpackPolyfill = 1), t
    }
}, function (t, e) {
    t.exports = function (t, e) {
        return function (n) {
            return t(e(n))
        }
    }
}, function (t, e, n) {
    var r = n(8)(n(4), "WeakMap");
    t.exports = r
}, function (t, e, n) {
    var r = n(6);
    t.exports = function (t) {
        return t == t && !r(t)
    }
}, function (t, e) {
    t.exports = function (t, e) {
        return function (n) {
            return null != n && n[t] === e && (void 0 !== e || t in Object(n))
        }
    }
}, function (t, e) {
    t.exports = function (t, e) {
        for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r;) i[n] = e(t[n], n, t);
        return i
    }
}, function (t, e) {
    t.exports = function (t) {
        return function (e) {
            return null == e ? void 0 : e[t]
        }
    }
}, function (t, e) {
    t.exports = function (t, e, n, r) {
        for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;) if (e(t[o], o, t)) return o;
        return -1
    }
}, function (t, e, n) {
    var r = n(243);
    t.exports = function (t) {
        var e = r(t), n = e % 1;
        return e == e ? n ? e - n : e : 0
    }
}, function (t, e, n) {
    "use strict";
    var r = n(0);
    Object.defineProperty(e, "__esModule", {value: !0}), e.inQuad = function (t) {
        return Math.pow(t, 2)
    }, e.outQuad = function (t) {
        return -(Math.pow(t - 1, 2) - 1)
    }, e.inOutQuad = function (t) {
        if ((t /= .5) < 1) return .5 * Math.pow(t, 2);
        return -.5 * ((t -= 2) * t - 2)
    }, e.inCubic = function (t) {
        return Math.pow(t, 3)
    }, e.outCubic = function (t) {
        return Math.pow(t - 1, 3) + 1
    }, e.inOutCubic = function (t) {
        if ((t /= .5) < 1) return .5 * Math.pow(t, 3);
        return .5 * (Math.pow(t - 2, 3) + 2)
    }, e.inQuart = function (t) {
        return Math.pow(t, 4)
    }, e.outQuart = function (t) {
        return -(Math.pow(t - 1, 4) - 1)
    }, e.inOutQuart = function (t) {
        if ((t /= .5) < 1) return .5 * Math.pow(t, 4);
        return -.5 * ((t -= 2) * Math.pow(t, 3) - 2)
    }, e.inQuint = function (t) {
        return Math.pow(t, 5)
    }, e.outQuint = function (t) {
        return Math.pow(t - 1, 5) + 1
    }, e.inOutQuint = function (t) {
        if ((t /= .5) < 1) return .5 * Math.pow(t, 5);
        return .5 * (Math.pow(t - 2, 5) + 2)
    }, e.inSine = function (t) {
        return 1 - Math.cos(t * (Math.PI / 2))
    }, e.outSine = function (t) {
        return Math.sin(t * (Math.PI / 2))
    }, e.inOutSine = function (t) {
        return -.5 * (Math.cos(Math.PI * t) - 1)
    }, e.inExpo = function (t) {
        return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
    }, e.outExpo = function (t) {
        return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
    }, e.inOutExpo = function (t) {
        if (0 === t) return 0;
        if (1 === t) return 1;
        if ((t /= .5) < 1) return .5 * Math.pow(2, 10 * (t - 1));
        return .5 * (2 - Math.pow(2, -10 * --t))
    }, e.inCirc = function (t) {
        return -(Math.sqrt(1 - t * t) - 1)
    }, e.outCirc = function (t) {
        return Math.sqrt(1 - Math.pow(t - 1, 2))
    }, e.inOutCirc = function (t) {
        if ((t /= .5) < 1) return -.5 * (Math.sqrt(1 - t * t) - 1);
        return .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
    }, e.outBounce = function (t) {
        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
    }, e.inBack = function (t) {
        return t * t * ((o + 1) * t - o)
    }, e.outBack = function (t) {
        return (t -= 1) * t * ((o + 1) * t + o) + 1
    }, e.inOutBack = function (t) {
        var e = o;
        if ((t /= .5) < 1) return t * t * ((1 + (e *= 1.525)) * t - e) * .5;
        return .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
    }, e.inElastic = function (t) {
        var e = o, n = 0, r = 1;
        if (0 === t) return 0;
        if (1 === t) return 1;
        n || (n = .3);
        r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
        return -r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)
    }, e.outElastic = function (t) {
        var e = o, n = 0, r = 1;
        if (0 === t) return 0;
        if (1 === t) return 1;
        n || (n = .3);
        r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
        return r * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1
    }, e.inOutElastic = function (t) {
        var e = o, n = 0, r = 1;
        if (0 === t) return 0;
        if (2 == (t /= .5)) return 1;
        n || (n = .3 * 1.5);
        r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
        if (t < 1) return r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5;
        return r * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1
    }, e.swingFromTo = function (t) {
        var e = o;
        return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
    }, e.swingFrom = function (t) {
        return t * t * ((o + 1) * t - o)
    }, e.swingTo = function (t) {
        return (t -= 1) * t * ((o + 1) * t + o) + 1
    }, e.bounce = function (t) {
        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
    }, e.bouncePast = function (t) {
        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 2 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 2 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 2 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
    }, e.easeInOut = e.easeOut = e.easeIn = e.ease = void 0;
    var i = r(n(108)), o = 1.70158, a = (0, i.default)(.25, .1, .25, 1);
    e.ease = a;
    var u = (0, i.default)(.42, 0, 1, 1);
    e.easeIn = u;
    var c = (0, i.default)(0, 0, .58, 1);
    e.easeOut = c;
    var s = (0, i.default)(.42, 0, .58, 1);
    e.easeInOut = s
}, function (t, e) {
    var n = 4, r = .001, i = 1e-7, o = 10, a = 11, u = 1 / (a - 1), c = "function" == typeof Float32Array;

    function s(t, e) {
        return 1 - 3 * e + 3 * t
    }

    function f(t, e) {
        return 3 * e - 6 * t
    }

    function l(t) {
        return 3 * t
    }

    function d(t, e, n) {
        return ((s(e, n) * t + f(e, n)) * t + l(e)) * t
    }

    function p(t, e, n) {
        return 3 * s(e, n) * t * t + 2 * f(e, n) * t + l(e)
    }

    t.exports = function (t, e, s, f) {
        if (!(0 <= t && t <= 1 && 0 <= s && s <= 1)) throw new Error("bezier x values must be in [0, 1] range");
        var l = c ? new Float32Array(a) : new Array(a);
        if (t !== e || s !== f) for (var v = 0; v < a; ++v) l[v] = d(v * u, t, s);

        function h(e) {
            for (var c = 0, f = 1, v = a - 1; f !== v && l[f] <= e; ++f) c += u;
            var h = c + (e - l[--f]) / (l[f + 1] - l[f]) * u, E = p(h, t, s);
            return E >= r ? function (t, e, r, i) {
                for (var o = 0; o < n; ++o) {
                    var a = p(e, r, i);
                    if (0 === a) return e;
                    e -= (d(e, r, i) - t) / a
                }
                return e
            }(e, h, t, s) : 0 === E ? h : function (t, e, n, r, a) {
                var u, c, s = 0;
                do {
                    (u = d(c = e + (n - e) / 2, r, a) - t) > 0 ? n = c : e = c
                } while (Math.abs(u) > i && ++s < o);
                return c
            }(e, c, c + u, t, s)
        }

        return function (n) {
            return t === e && s === f ? n : 0 === n ? 0 : 1 === n ? 1 : d(h(n), e, f)
        }
    }
}, function (t, e, n) {
    "use strict";
    var r = n(0)(n(110)), i = n(0), o = n(13);
    Object.defineProperty(e, "__esModule", {value: !0}), e.optimizeFloat = c, e.createBezierEasing = function (t) {
        return u.default.apply(void 0, (0, r.default)(t))
    }, e.applyEasing = function (t, e, n) {
        if (0 === e) return 0;
        if (1 === e) return 1;
        if (n) return c(e > 0 ? n(e) : e);
        return c(e > 0 && t && a[t] ? a[t](e) : e)
    };
    var a = o(n(107)), u = i(n(108));

    function c(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10, r = Math.pow(n, e),
            i = Number(Math.round(t * r) / r);
        return Math.abs(i) > 1e-4 ? i : 0
    }
}, function (t, e, n) {
    var r = n(244), i = n(245), o = n(246);
    t.exports = function (t) {
        return r(t) || i(t) || o()
    }
}, function (t, e, n) {
    "use strict";
    var r = n(0)(n(26));
    Object.defineProperty(e, "__esModule", {value: !0}), e.isPluginType = function (t) {
        return t === o.ActionTypeConsts.PLUGIN_LOTTIE
    }, e.clearPlugin = e.renderPlugin = e.createPluginInstance = e.getPluginDestination = e.getPluginDuration = e.getPluginOrigin = e.getPluginConfig = void 0;
    var i = n(248), o = n(2), a = n(46), u = (0, r.default)({}, o.ActionTypeConsts.PLUGIN_LOTTIE, {
        getConfig: i.getPluginConfig,
        getOrigin: i.getPluginOrigin,
        getDuration: i.getPluginDuration,
        getDestination: i.getPluginDestination,
        createInstance: i.createPluginInstance,
        render: i.renderPlugin,
        clear: i.clearPlugin
    });
    var c = function (t) {
        return function (e) {
            if (!a.IS_BROWSER_ENV) return function () {
                return null
            };
            var n = u[e];
            if (!n) throw new Error("IX2 no plugin configured for: ".concat(e));
            var r = n[t];
            if (!r) throw new Error("IX2 invalid plugin method: ".concat(t));
            return r
        }
    }, s = c("getConfig");
    e.getPluginConfig = s;
    var f = c("getOrigin");
    e.getPluginOrigin = f;
    var l = c("getDuration");
    e.getPluginDuration = l;
    var d = c("getDestination");
    e.getPluginDestination = d;
    var p = c("createInstance");
    e.createPluginInstance = p;
    var v = c("render");
    e.renderPlugin = v;
    var h = c("clear");
    e.clearPlugin = h
}, function (t, e, n) {
    var r = n(113), i = n(255)(r);
    t.exports = i
}, function (t, e, n) {
    var r = n(253), i = n(32);
    t.exports = function (t, e) {
        return t && r(t, e, i)
    }
}, function (t, e, n) {
    "use strict";
    var r = n(259);
    e.__esModule = !0, e.default = void 0;
    var i = r(n(260)).default;
    e.default = i
}, function (t, e, n) {
    "use strict";
    var r = n(0)(n(110)), i = n(13), o = n(0);
    Object.defineProperty(e, "__esModule", {value: !0}), e.observeRequests = function (t) {
        D({
            store: t, select: function (t) {
                var e = t.ixRequest;
                return e.preview
            }, onChange: tt
        }), D({
            store: t, select: function (t) {
                var e = t.ixRequest;
                return e.playback
            }, onChange: nt
        }), D({
            store: t, select: function (t) {
                var e = t.ixRequest;
                return e.stop
            }, onChange: rt
        }), D({
            store: t, select: function (t) {
                var e = t.ixRequest;
                return e.clear
            }, onChange: it
        })
    }, e.startEngine = ot, e.stopEngine = at, e.stopAllActionGroups = vt, e.stopActionGroup = ht, e.startActionGroup = Et;
    var a = o(n(27)), u = o(n(263)), c = o(n(86)), s = o(n(34)), f = o(n(264)), l = o(n(270)), d = o(n(282)),
        p = o(n(283)), v = o(n(284)), h = o(n(287)), E = o(n(114)), g = n(2), _ = n(290), y = n(10), m = n(62),
        I = i(n(292)), T = o(n(293)), b = g.IX2EngineConstants, O = b.COLON_DELIMITER, w = b.BOUNDARY_SELECTOR,
        A = b.HTML_ELEMENT, S = b.RENDER_GENERAL, x = b.W_MOD_IX, R = y.IX2VanillaUtils, N = R.getAffectedElements,
        C = R.getElementId, L = R.getDestinationValues, D = R.observeStore, P = R.getInstanceId,
        M = R.renderHTMLElement, j = R.clearAllStyles, F = R.getMaxDurationItemIndex, k = R.getComputedStyle,
        X = R.getInstanceOrigin, G = R.reduceListToGroup, V = R.shouldNamespaceEventParameter,
        U = R.getNamespacedParameterId, W = R.shouldAllowMediaQuery, B = R.cleanupHTMLElement, H = R.stringifyTarget,
        z = R.mediaQueriesEqual, Y = y.IX2VanillaPlugins, K = Y.isPluginType, Q = Y.createPluginInstance,
        q = Y.getPluginDuration, $ = navigator.userAgent, Z = $.match(/iPad/i) || $.match(/iPhone/), J = 12;

    function tt(t, e) {
        var n = t.rawData, r = function () {
            ot({store: e, rawData: n, allowEvents: !0}), et()
        };
        t.defer ? setTimeout(r, 0) : r()
    }

    function et() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
    }

    function nt(t, e) {
        var n = t.actionTypeId, r = t.actionListId, i = t.actionItemId, o = t.eventId, a = t.allowEvents,
            u = t.immediate, c = t.testManual, s = t.verbose, f = void 0 === s || s, l = t.rawData;
        if (r && i && l && u) {
            var d = l.actionLists[r];
            d && (l = G({actionList: d, actionItemId: i, rawData: l}))
        }
        if (ot({
            store: e,
            rawData: l,
            allowEvents: a,
            testManual: c
        }), r && n === g.ActionTypeConsts.GENERAL_START_ACTION || (0, _.isQuickEffect)(n)) {
            ht({store: e, actionListId: r}), pt({store: e, actionListId: r, eventId: o});
            var p = Et({store: e, eventId: o, actionListId: r, immediate: u, verbose: f});
            f && p && e.dispatch((0, m.actionListPlaybackChanged)({actionListId: r, isPlaying: !u}))
        }
    }

    function rt(t, e) {
        var n = t.actionListId;
        n ? ht({store: e, actionListId: n}) : vt({store: e}), at(e)
    }

    function it(t, e) {
        at(e), j({store: e, elementApi: I})
    }

    function ot(t) {
        var e, n = t.store, i = t.rawData, o = t.allowEvents, a = t.testManual, u = n.getState().ixSession;
        i && n.dispatch((0, m.rawDataImported)(i)), u.active || (n.dispatch((0, m.sessionInitialized)({hasBoundaryNodes: Boolean(document.querySelector(w))})), o && (function (t) {
            var e = t.getState().ixData.eventTypeMap;
            st(t), (0, v.default)(e, function (e, n) {
                var i = T.default[n];
                i ? function (t) {
                    var e = t.logic, n = t.store, i = t.events;
                    !function (t) {
                        if (Z) {
                            var e = {}, n = "";
                            for (var r in t) {
                                var i = t[r], o = i.eventTypeId, a = i.target, u = I.getQuerySelector(a);
                                e[u] || o !== g.EventTypeConsts.MOUSE_CLICK && o !== g.EventTypeConsts.MOUSE_SECOND_CLICK || (e[u] = !0, n += u + "{cursor: pointer;touch-action: manipulation;}")
                            }
                            if (n) {
                                var c = document.createElement("style");
                                c.textContent = n, document.body.appendChild(c)
                            }
                        }
                    }(i);
                    var o = e.types, a = e.handler, u = n.getState().ixData, l = u.actionLists, d = ft(i, dt);
                    if ((0, f.default)(d)) {
                        (0, v.default)(d, function (t, e) {
                            var o = i[e], a = o.action, f = o.id, d = o.mediaQueries,
                                p = void 0 === d ? u.mediaQueryKeys : d, v = a.config.actionListId;
                            if (z(p, u.mediaQueryKeys) || n.dispatch((0, m.mediaQueriesDefined)()), a.actionTypeId === g.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) {
                                var h = Array.isArray(o.config) ? o.config : [o.config];
                                h.forEach(function (e) {
                                    var i = e.continuousParameterGroupId,
                                        o = (0, s.default)(l, "".concat(v, ".continuousParameterGroups"), []),
                                        a = (0, c.default)(o, function (t) {
                                            var e = t.id;
                                            return e === i
                                        }), u = (e.smoothing || 0) / 100, d = (e.restingState || 0) / 100;
                                    a && t.forEach(function (t, i) {
                                        var o = f + O + i;
                                        !function (t) {
                                            var e = t.store, n = t.eventStateKey, i = t.eventTarget, o = t.eventId,
                                                a = t.eventConfig, u = t.actionListId, c = t.parameterGroup,
                                                f = t.smoothing, l = t.restingValue, d = e.getState(), p = d.ixData,
                                                v = d.ixSession, h = p.events[o], E = h.eventTypeId, g = {}, _ = {},
                                                y = [], m = c.continuousActionGroups, T = c.id;
                                            V(E, a) && (T = U(n, T));
                                            var b = v.hasBoundaryNodes && i ? I.getClosestElement(i, w) : null;
                                            m.forEach(function (t) {
                                                var e = t.keyframe, n = t.actionItems;
                                                n.forEach(function (t) {
                                                    var n = t.actionTypeId, o = t.config.target;
                                                    if (o) {
                                                        var a = o.boundaryMode ? b : null, u = H(o) + O + n;
                                                        if (_[u] = function () {
                                                            var t,
                                                                e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                                                n = arguments.length > 1 ? arguments[1] : void 0,
                                                                i = arguments.length > 2 ? arguments[2] : void 0,
                                                                o = (0, r.default)(e);
                                                            return o.some(function (e, r) {
                                                                return e.keyframe === n && (t = r, !0)
                                                            }), null == t && (t = o.length, o.push({
                                                                keyframe: n,
                                                                actionItems: []
                                                            })), o[t].actionItems.push(i), o
                                                        }(_[u], e, t), !g[u]) {
                                                            g[u] = !0;
                                                            var c = t.config;
                                                            N({
                                                                config: c,
                                                                event: h,
                                                                eventTarget: i,
                                                                elementRoot: a,
                                                                elementApi: I
                                                            }).forEach(function (t) {
                                                                y.push({element: t, key: u})
                                                            })
                                                        }
                                                    }
                                                })
                                            }), y.forEach(function (t) {
                                                var n = t.element, r = t.key, i = _[r],
                                                    a = (0, s.default)(i, "[0].actionItems[0]", {}), c = a.actionTypeId,
                                                    d = K(c) ? Q(c)(n, a) : null,
                                                    p = L({element: n, actionItem: a, elementApi: I}, d);
                                                gt({
                                                    store: e,
                                                    element: n,
                                                    eventId: o,
                                                    actionListId: u,
                                                    actionItem: a,
                                                    destination: p,
                                                    continuous: !0,
                                                    parameterId: T,
                                                    actionGroups: i,
                                                    smoothing: f,
                                                    restingValue: l,
                                                    pluginInstance: d
                                                })
                                            })
                                        }({
                                            store: n,
                                            eventStateKey: o,
                                            eventTarget: t,
                                            eventId: f,
                                            eventConfig: e,
                                            actionListId: v,
                                            parameterGroup: a,
                                            smoothing: u,
                                            restingValue: d
                                        })
                                    })
                                })
                            }
                            (a.actionTypeId === g.ActionTypeConsts.GENERAL_START_ACTION || (0, _.isQuickEffect)(a.actionTypeId)) && pt({
                                store: n,
                                actionListId: v,
                                eventId: f
                            })
                        });
                        var p = function (t) {
                            var e = n.getState(), r = e.ixSession;
                            lt(d, function (e, o, c) {
                                var s = i[o], f = r.eventState[c], l = s.action, d = s.mediaQueries,
                                    p = void 0 === d ? u.mediaQueryKeys : d;
                                if (W(p, r.mediaQueryKey)) {
                                    var v = function () {
                                        var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            i = a({
                                                store: n,
                                                element: e,
                                                event: s,
                                                eventConfig: r,
                                                nativeEvent: t,
                                                eventStateKey: c
                                            }, f);
                                        (0, E.default)(i, f) || n.dispatch((0, m.eventStateChanged)(c, i))
                                    };
                                    if (l.actionTypeId === g.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) {
                                        var h = Array.isArray(s.config) ? s.config : [s.config];
                                        h.forEach(v)
                                    } else v()
                                }
                            })
                        }, y = (0, h.default)(p, J), T = function (t) {
                            var e = t.target, r = void 0 === e ? document : e, i = t.types, o = t.throttle;
                            i.split(" ").filter(Boolean).forEach(function (t) {
                                var e = o ? y : p;
                                r.addEventListener(t, e), n.dispatch((0, m.eventListenerAdded)(r, [t, e]))
                            })
                        };
                        Array.isArray(o) ? o.forEach(T) : "string" == typeof o && T(e)
                    }
                }({logic: i, store: t, events: e}) : console.warn("IX2 event type not configured: ".concat(n))
            }), t.getState().ixSession.eventListeners.length && function (t) {
                var e = function () {
                    st(t)
                };
                ct.forEach(function (n) {
                    window.addEventListener(n, e), t.dispatch((0, m.eventListenerAdded)(window, [n, e]))
                }), e()
            }(t)
        }(n), -1 === (e = document.documentElement).className.indexOf(x) && (e.className += " ".concat(x)), n.getState().ixSession.hasDefinedMediaQueries && function (t) {
            D({
                store: t, select: function (t) {
                    return t.ixSession.mediaQueryKey
                }, onChange: function () {
                    at(t), j({store: t, elementApi: I}), ot({store: t, allowEvents: !0}), et()
                }
            })
        }(n)), n.dispatch((0, m.sessionStarted)()), function (t, e) {
            !function n(r) {
                var i = t.getState(), o = i.ixSession, a = i.ixParameters;
                o.active && (t.dispatch((0, m.animationFrameChanged)(r, a)), e ? function (t, e) {
                    var n = D({
                        store: t, select: function (t) {
                            return t.ixSession.tick
                        }, onChange: function (t) {
                            e(t), n()
                        }
                    })
                }(t, n) : requestAnimationFrame(n))
            }(window.performance.now())
        }(n, a))
    }

    function at(t) {
        var e = t.getState().ixSession;
        e.active && (e.eventListeners.forEach(ut), t.dispatch((0, m.sessionStopped)()))
    }

    function ut(t) {
        var e = t.target, n = t.listenerParams;
        e.removeEventListener.apply(e, n)
    }

    var ct = ["resize", "orientationchange"];

    function st(t) {
        var e = t.getState(), n = e.ixSession, r = e.ixData, i = window.innerWidth;
        if (i !== n.viewportWidth) {
            var o = r.mediaQueries;
            t.dispatch((0, m.viewportWidthChanged)({width: i, mediaQueries: o}))
        }
    }

    var ft = function (t, e) {
        return (0, l.default)((0, p.default)(t, e), d.default)
    }, lt = function (t, e) {
        (0, v.default)(t, function (t, n) {
            t.forEach(function (t, r) {
                e(t, n, n + O + r)
            })
        })
    }, dt = function (t) {
        var e = t.target, n = t.targets;
        return n && n.length ? n.reduce(function (t, e) {
            var n = {target: e};
            return t.concat(N({config: n, elementApi: I}))
        }, []) : N({config: {target: e}, elementApi: I})
    };

    function pt(t) {
        var e = t.store, n = t.actionListId, r = t.eventId, i = e.getState(), o = i.ixData, a = i.ixSession,
            u = o.actionLists, c = o.events[r], f = u[n];
        if (f && f.useFirstGroupAsInitialState) {
            var l = (0, s.default)(f, "actionItemGroups[0].actionItems", []),
                d = (0, s.default)(c, "mediaQueries", o.mediaQueryKeys);
            if (!W(d, a.mediaQueryKey)) return;
            l.forEach(function (t) {
                var i = t.config, o = t.actionTypeId, a = N({config: i, event: c, elementApi: I}), u = K(o);
                a.forEach(function (i) {
                    var a = u ? Q(o)(i, t) : null;
                    gt({
                        destination: L({element: i, actionItem: t, elementApi: I}, a),
                        immediate: !0,
                        store: e,
                        element: i,
                        eventId: r,
                        actionItem: t,
                        actionListId: n,
                        pluginInstance: a
                    })
                })
            })
        }
    }

    function vt(t) {
        var e = t.store, n = e.getState().ixInstances;
        (0, v.default)(n, function (t) {
            if (!t.continuous) {
                var n = t.actionListId, r = t.verbose;
                _t(t, e), r && e.dispatch((0, m.actionListPlaybackChanged)({actionListId: n, isPlaying: !1}))
            }
        })
    }

    function ht(t) {
        var e = t.store, n = t.eventId, r = t.eventTarget, i = t.eventStateKey, o = t.actionListId, a = e.getState(),
            u = a.ixInstances, c = a.ixSession.hasBoundaryNodes && r ? I.getClosestElement(r, w) : null;
        (0, v.default)(u, function (t) {
            var r = (0, s.default)(t, "actionItem.config.target.boundaryMode"), a = !i || t.eventStateKey === i;
            if (t.actionListId === o && t.eventId === n && a) {
                if (c && r && !I.elementContains(c, t.element)) return;
                _t(t, e), t.verbose && e.dispatch((0, m.actionListPlaybackChanged)({actionListId: o, isPlaying: !1}))
            }
        })
    }

    function Et(t) {
        var e, n = t.store, r = t.eventId, i = t.eventTarget, o = t.eventStateKey, a = t.actionListId, u = t.groupIndex,
            c = void 0 === u ? 0 : u, f = t.immediate, l = t.verbose, d = n.getState(), p = d.ixData, v = d.ixSession,
            h = p.events[r] || {}, E = h.mediaQueries, g = void 0 === E ? p.mediaQueryKeys : E,
            y = (0, s.default)(p, "actionLists.".concat(a), {}), m = y.actionItemGroups,
            T = y.useFirstGroupAsInitialState;
        if (!m || !m.length) return !1;
        c >= m.length && (0, s.default)(h, "config.loop") && (c = 0), 0 === c && T && c++;
        var b = (0 === c || 1 === c && T) && (0, _.isQuickEffect)(null === (e = h.action) || void 0 === e ? void 0 : e.actionTypeId) ? h.config.delay : void 0,
            O = (0, s.default)(m, [c, "actionItems"], []);
        if (!O.length) return !1;
        if (!W(g, v.mediaQueryKey)) return !1;
        var A = v.hasBoundaryNodes && i ? I.getClosestElement(i, w) : null, S = F(O), x = !1;
        return O.forEach(function (t, e) {
            var u = t.config, s = t.actionTypeId, d = K(s), p = u.target;
            if (p) {
                var v = p.boundaryMode ? A : null;
                N({config: u, event: h, eventTarget: i, elementRoot: v, elementApi: I}).forEach(function (u, p) {
                    var v = d ? Q(s)(u, t) : null, h = d ? q(s)(u, t) : null;
                    x = !0;
                    var E = S === e && 0 === p, g = k({element: u, actionItem: t}),
                        _ = L({element: u, actionItem: t, elementApi: I}, v);
                    gt({
                        store: n,
                        element: u,
                        actionItem: t,
                        eventId: r,
                        eventTarget: i,
                        eventStateKey: o,
                        actionListId: a,
                        groupIndex: c,
                        isCarrier: E,
                        computedStyle: g,
                        destination: _,
                        immediate: f,
                        verbose: l,
                        pluginInstance: v,
                        pluginDuration: h,
                        instanceDelay: b
                    })
                })
            }
        }), x
    }

    function gt(t) {
        var e = t.store, n = t.computedStyle, r = (0, u.default)(t, ["store", "computedStyle"]), i = !r.continuous,
            o = r.element, c = r.actionItem, s = r.immediate, f = r.pluginInstance, l = P(), d = e.getState(),
            p = d.ixElements, v = d.ixSession, h = C(p, o), E = (p[h] || {}).refState, g = I.getRefType(o),
            _ = X(o, E, n, c, I, f);
        e.dispatch((0, m.instanceAdded)((0, a.default)({
            instanceId: l,
            elementId: h,
            origin: _,
            refType: g
        }, r))), yt(document.body, "ix2-animation-started", l), s ? function (t, e) {
            var n = t.getState().ixParameters;
            t.dispatch((0, m.instanceStarted)(e, 0)), t.dispatch((0, m.animationFrameChanged)(performance.now(), n)), mt(t.getState().ixInstances[e], t)
        }(e, l) : (D({
            store: e, select: function (t) {
                return t.ixInstances[l]
            }, onChange: mt
        }), i && e.dispatch((0, m.instanceStarted)(l, v.tick)))
    }

    function _t(t, e) {
        yt(document.body, "ix2-animation-stopping", {instanceId: t.id, state: e.getState()});
        var n = t.elementId, r = t.actionItem, i = e.getState().ixElements[n] || {}, o = i.ref;
        i.refType === A && B(o, r, I), e.dispatch((0, m.instanceRemoved)(t.id))
    }

    function yt(t, e, n) {
        var r = document.createEvent("CustomEvent");
        r.initCustomEvent(e, !0, !0, n), t.dispatchEvent(r)
    }

    function mt(t, e) {
        var n = t.active, r = t.continuous, i = t.complete, o = t.elementId, a = t.actionItem, u = t.actionTypeId,
            c = t.renderType, s = t.current, f = t.groupIndex, l = t.eventId, d = t.eventTarget, p = t.eventStateKey,
            v = t.actionListId, h = t.isCarrier, E = t.styleProp, g = t.verbose, _ = t.pluginInstance, y = e.getState(),
            T = y.ixData, b = y.ixSession, O = (T.events[l] || {}).mediaQueries,
            w = void 0 === O ? T.mediaQueryKeys : O;
        if (W(w, b.mediaQueryKey) && (r || n || i)) {
            if (s || c === S && i) {
                e.dispatch((0, m.elementStateChanged)(o, u, s, a));
                var x = e.getState().ixElements[o] || {}, R = x.ref, N = x.refType, C = x.refState, L = C && C[u];
                switch (N) {
                    case A:
                        M(R, C, L, l, a, E, I, c, _)
                }
            }
            if (i) {
                if (h) {
                    var D = Et({
                        store: e,
                        eventId: l,
                        eventTarget: d,
                        eventStateKey: p,
                        actionListId: v,
                        groupIndex: f + 1,
                        verbose: g
                    });
                    g && !D && e.dispatch((0, m.actionListPlaybackChanged)({actionListId: v, isPlaying: !1}))
                }
                _t(t, e)
            }
        }
    }
}, function (t, e, n) {
    var r = n(117);
    t.exports = function (t, e, n) {
        "__proto__" == e && r ? r(t, e, {configurable: !0, enumerable: !0, value: n, writable: !0}) : t[e] = n
    }
}, function (t, e, n) {
    var r = n(8), i = function () {
        try {
            var t = r(Object, "defineProperty");
            return t({}, "", {}), t
        } catch (t) {
        }
    }();
    t.exports = i
}, function (t, e, n) {
    var r = n(6), i = Object.create, o = function () {
        function t() {
        }

        return function (e) {
            if (!r(e)) return {};
            if (i) return i(e);
            t.prototype = e;
            var n = new t;
            return t.prototype = void 0, n
        }
    }();
    t.exports = o
}, function (t, e, n) {
    var r = n(306), i = n(307), o = r ? function (t) {
        return r.get(t)
    } : i;
    t.exports = o
}, function (t, e, n) {
    var r = n(308), i = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
        for (var e = t.name + "", n = r[e], o = i.call(r, e) ? n.length : 0; o--;) {
            var a = n[o], u = a.func;
            if (null == u || u == t) return a.name
        }
        return e
    }
}, function (t, e, n) {
    n(122), n(37), n(124), n(38), n(125), n(315), n(316), n(317), n(318), n(323), t.exports = n(324)
}, function (t, e, n) {
    "use strict";
    var r = n(5);
    r.define("brand", t.exports = function (t) {
        var e, n = {}, i = document, o = t("html"), a = t("body"), u = ".w-webflow-badge", c = window.location,
            s = /PhantomJS/i.test(navigator.userAgent),
            f = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";

        function l() {
            var n = i.fullScreen || i.mozFullScreen || i.webkitIsFullScreen || i.msFullscreenElement || Boolean(i.webkitFullscreenElement);
            t(e).attr("style", n ? "display: none !important;" : "")
        }

        function d() {
            var t = a.children(u), n = t.length && t.get(0) === e, i = r.env("editor");
            n ? i && t.remove() : (t.length && t.remove(), i || a.append(e))
        }

        return n.ready = function () {
            var n, r, a, u = o.attr("data-wf-status"), p = o.attr("data-wf-domain") || "";
            /\.webflow\.io$/i.test(p) && c.hostname !== p && (u = !0), u && !s && (e = e || (n = t('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"), r = t("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg").attr("alt", "").css({
                marginRight: "8px",
                width: "16px"
            }), a = t("<img>").attr("src", "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg").attr("alt", "Made in Webflow"), n.append(r, a), n[0]), d(), setTimeout(d, 500), t(i).off(f, l).on(f, l))
        }, n
    })
}, function (t, e, n) {
    "use strict";
    var r = window.$, i = n(66) && r.tram;
    /*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
    t.exports = function () {
        var t = {VERSION: "1.6.0-Webflow"}, e = {}, n = Array.prototype, r = Object.prototype, o = Function.prototype,
            a = (n.push, n.slice), u = (n.concat, r.toString, r.hasOwnProperty), c = n.forEach, s = n.map,
            f = (n.reduce, n.reduceRight, n.filter), l = (n.every, n.some), d = n.indexOf,
            p = (n.lastIndexOf, Array.isArray, Object.keys), v = (o.bind, t.each = t.forEach = function (n, r, i) {
                if (null == n) return n;
                if (c && n.forEach === c) n.forEach(r, i); else if (n.length === +n.length) {
                    for (var o = 0, a = n.length; o < a; o++) if (r.call(i, n[o], o, n) === e) return
                } else {
                    var u = t.keys(n);
                    for (o = 0, a = u.length; o < a; o++) if (r.call(i, n[u[o]], u[o], n) === e) return
                }
                return n
            });
        t.map = t.collect = function (t, e, n) {
            var r = [];
            return null == t ? r : s && t.map === s ? t.map(e, n) : (v(t, function (t, i, o) {
                r.push(e.call(n, t, i, o))
            }), r)
        }, t.find = t.detect = function (t, e, n) {
            var r;
            return h(t, function (t, i, o) {
                if (e.call(n, t, i, o)) return r = t, !0
            }), r
        }, t.filter = t.select = function (t, e, n) {
            var r = [];
            return null == t ? r : f && t.filter === f ? t.filter(e, n) : (v(t, function (t, i, o) {
                e.call(n, t, i, o) && r.push(t)
            }), r)
        };
        var h = t.some = t.any = function (n, r, i) {
            r || (r = t.identity);
            var o = !1;
            return null == n ? o : l && n.some === l ? n.some(r, i) : (v(n, function (t, n, a) {
                if (o || (o = r.call(i, t, n, a))) return e
            }), !!o)
        };
        t.contains = t.include = function (t, e) {
            return null != t && (d && t.indexOf === d ? -1 != t.indexOf(e) : h(t, function (t) {
                return t === e
            }))
        }, t.delay = function (t, e) {
            var n = a.call(arguments, 2);
            return setTimeout(function () {
                return t.apply(null, n)
            }, e)
        }, t.defer = function (e) {
            return t.delay.apply(t, [e, 1].concat(a.call(arguments, 1)))
        }, t.throttle = function (t) {
            var e, n, r;
            return function () {
                e || (e = !0, n = arguments, r = this, i.frame(function () {
                    e = !1, t.apply(r, n)
                }))
            }
        }, t.debounce = function (e, n, r) {
            var i, o, a, u, c, s = function s() {
                var f = t.now() - u;
                f < n ? i = setTimeout(s, n - f) : (i = null, r || (c = e.apply(a, o), a = o = null))
            };
            return function () {
                a = this, o = arguments, u = t.now();
                var f = r && !i;
                return i || (i = setTimeout(s, n)), f && (c = e.apply(a, o), a = o = null), c
            }
        }, t.defaults = function (e) {
            if (!t.isObject(e)) return e;
            for (var n = 1, r = arguments.length; n < r; n++) {
                var i = arguments[n];
                for (var o in i) void 0 === e[o] && (e[o] = i[o])
            }
            return e
        }, t.keys = function (e) {
            if (!t.isObject(e)) return [];
            if (p) return p(e);
            var n = [];
            for (var r in e) t.has(e, r) && n.push(r);
            return n
        }, t.has = function (t, e) {
            return u.call(t, e)
        }, t.isObject = function (t) {
            return t === Object(t)
        }, t.now = Date.now || function () {
            return (new Date).getTime()
        }, t.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var E = /(.)^/, g = {"'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029"},
            _ = /\\|'|\r|\n|\u2028|\u2029/g, y = function (t) {
                return "\\" + g[t]
            };
        return t.template = function (e, n, r) {
            !n && r && (n = r), n = t.defaults({}, n, t.templateSettings);
            var i = RegExp([(n.escape || E).source, (n.interpolate || E).source, (n.evaluate || E).source].join("|") + "|$", "g"),
                o = 0, a = "__p+='";
            e.replace(i, function (t, n, r, i, u) {
                return a += e.slice(o, u).replace(_, y), o = u + t.length, n ? a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : i && (a += "';\n" + i + "\n__p+='"), t
            }), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
            try {
                var u = new Function(n.variable || "obj", "_", a)
            } catch (t) {
                throw t.source = a, t
            }
            var c = function (e) {
                return u.call(this, e, t)
            }, s = n.variable || "obj";
            return c.source = "function(" + s + "){\n" + a + "}", c
        }, t
    }()
}, function (t, e, n) {
    "use strict";
    var r = n(5), i = n(37);
    r.define("ix", t.exports = function (t, e) {
        var n, o, a = {}, u = t(window), c = ".w-ix", s = t.tram, f = r.env, l = f(), d = f.chrome && f.chrome < 35,
            p = "none 0s ease 0s", v = t(), h = {}, E = [], g = [], _ = [], y = 1,
            m = {tabs: ".w-tab-link, .w-tab-pane", dropdown: ".w-dropdown", slider: ".w-slide", navbar: ".w-nav"};

        function I(t) {
            t && (h = {}, e.each(t, function (t) {
                h[t.slug] = t.value
            }), T())
        }

        function T() {
            !function () {
                var e = t("[data-ix]");
                if (!e.length) return;
                e.each(w), e.each(b), E.length && (r.scroll.on(A), setTimeout(A, 1));
                g.length && r.load(S);
                _.length && setTimeout(x, y)
            }(), i.init(), r.redraw.up()
        }

        function b(n, o) {
            var u = t(o), s = u.attr("data-ix"), f = h[s];
            if (f) {
                var d = f.triggers;
                d && (a.style(u, f.style), e.each(d, function (t) {
                    var e = {}, n = t.type, o = t.stepsB && t.stepsB.length;

                    function a() {
                        R(t, u, {group: "A"})
                    }

                    function s() {
                        R(t, u, {group: "B"})
                    }

                    if ("load" !== n) {
                        if ("click" === n) return u.on("click" + c, function (n) {
                            r.validClick(n.currentTarget) && ("#" === u.attr("href") && n.preventDefault(), R(t, u, {group: e.clicked ? "B" : "A"}), o && (e.clicked = !e.clicked))
                        }), void (v = v.add(u));
                        if ("hover" === n) return u.on("mouseenter" + c, a), u.on("mouseleave" + c, s), void (v = v.add(u));
                        if ("scroll" !== n) {
                            var f = m[n];
                            if (f) {
                                var d = u.closest(f);
                                return d.on(i.types.INTRO, a).on(i.types.OUTRO, s), void (v = v.add(d))
                            }
                        } else E.push({
                            el: u,
                            trigger: t,
                            state: {active: !1},
                            offsetTop: O(t.offsetTop),
                            offsetBot: O(t.offsetBot)
                        })
                    } else t.preload && !l ? g.push(a) : _.push(a)
                }))
            }
        }

        function O(t) {
            if (!t) return 0;
            t = String(t);
            var e = parseInt(t, 10);
            return e != e ? 0 : (t.indexOf("%") > 0 && (e /= 100) >= 1 && (e = .999), e)
        }

        function w(e, n) {
            t(n).off(c)
        }

        function A() {
            for (var t = u.scrollTop(), e = u.height(), n = E.length, r = 0; r < n; r++) {
                var i = E[r], o = i.el, a = i.trigger, c = a.stepsB && a.stepsB.length, s = i.state, f = o.offset().top,
                    l = o.outerHeight(), d = i.offsetTop, p = i.offsetBot;
                d < 1 && d > 0 && (d *= e), p < 1 && p > 0 && (p *= e);
                var v = f + l - d >= t && f + p <= t + e;
                v !== s.active && ((!1 !== v || c) && (s.active = v, R(a, o, {group: v ? "A" : "B"})))
            }
        }

        function S() {
            for (var t = g.length, e = 0; e < t; e++) g[e]()
        }

        function x() {
            for (var t = _.length, e = 0; e < t; e++) _[e]()
        }

        function R(e, r, i, o) {
            var a = (i = i || {}).done, u = e.preserve3d;
            if (!n || i.force) {
                var c = i.group || "A", f = e["loop" + c], p = e["steps" + c];
                if (p && p.length) {
                    if (p.length < 2 && (f = !1), !o) {
                        var v = e.selector;
                        v && (r = e.descend ? r.find(v) : e.siblings ? r.siblings(v) : t(v), l && r.attr("data-ix-affect", 1)), d && r.addClass("w-ix-emptyfix"), u && r.css("transform-style", "preserve-3d")
                    }
                    for (var h = s(r), E = {omit3d: !u}, g = 0; g < p.length; g++) N(h, p[g], E);
                    E.start ? h.then(_) : _()
                }
            }

            function _() {
                if (f) return R(e, r, i, !0);
                "auto" === E.width && h.set({width: "auto"}), "auto" === E.height && h.set({height: "auto"}), a && a()
            }
        }

        function N(t, e, n) {
            var i = "add", o = "start";
            n.start && (i = o = "then");
            var a = e.transition;
            if (a) {
                a = a.split(",");
                for (var u = 0; u < a.length; u++) {
                    var c = a[u];
                    t[i](c)
                }
            }
            var s = C(e, n) || {};
            if (null != s.width && (n.width = s.width), null != s.height && (n.height = s.height), null == a) {
                n.start ? t.then(function () {
                    var e = this.queue;
                    this.set(s), s.display && (t.redraw(), r.redraw.up()), this.queue = e, this.next()
                }) : (t.set(s), s.display && (t.redraw(), r.redraw.up()));
                var f = s.wait;
                null != f && (t.wait(f), n.start = !0)
            } else {
                if (s.display) {
                    var l = s.display;
                    delete s.display, n.start ? t.then(function () {
                        var t = this.queue;
                        this.set({display: l}).redraw(), r.redraw.up(), this.queue = t, this.next()
                    }) : (t.set({display: l}).redraw(), r.redraw.up())
                }
                t[o](s), n.start = !0
            }
        }

        function C(t, e) {
            var n = e && e.omit3d, r = {}, i = !1;
            for (var o in t) "transition" !== o && "keysort" !== o && (!n || "z" !== o && "rotateX" !== o && "rotateY" !== o && "scaleZ" !== o) && (r[o] = t[o], i = !0);
            return i ? r : null
        }

        return a.init = function (t) {
            setTimeout(function () {
                I(t)
            }, 1)
        }, a.preview = function () {
            n = !1, y = 100, setTimeout(function () {
                I(window.__wf_ix)
            }, 1)
        }, a.design = function () {
            n = !0, a.destroy()
        }, a.destroy = function () {
            o = !0, v.each(w), r.scroll.off(A), i.async(), E = [], g = [], _ = []
        }, a.ready = function () {
            if (l) return f("design") ? a.design() : a.preview();
            h && o && (o = !1, T())
        }, a.run = R, a.style = l ? function (e, n) {
            var r = s(e);
            if (t.isEmptyObject(n)) return;
            e.css("transition", "");
            var i = e.css("transition");
            i === p && (i = r.upstream = null);
            r.upstream = p, r.set(C(n)), r.upstream = i
        } : function (t, e) {
            s(t).set(C(e))
        }, a
    })
}, function (t, e, n) {
    "use strict";
    var r = n(5), i = n(126);
    i.setEnv(r.env), r.define("ix2", t.exports = function () {
        return i
    })
}, function (t, e, n) {
    "use strict";
    var r = n(13), i = n(0);
    Object.defineProperty(e, "__esModule", {value: !0}), e.setEnv = function (t) {
        t() && (0, u.observeRequests)(s)
    }, e.init = function (t) {
        f(), (0, u.startEngine)({store: s, rawData: t, allowEvents: !0})
    }, e.destroy = f, e.actions = e.store = void 0, n(127);
    var o = n(79), a = i(n(168)), u = n(115), c = r(n(62));
    e.actions = c;
    var s = (0, o.createStore)(a.default);

    function f() {
        (0, u.stopEngine)(s)
    }

    e.store = s
}, function (t, e, n) {
    t.exports = n(128)
}, function (t, e, n) {
    n(129);
    var r = n(154);
    t.exports = r("Array", "includes")
}, function (t, e, n) {
    "use strict";
    var r = n(130), i = n(77).includes, o = n(147);
    r({target: "Array", proto: !0}, {
        includes: function (t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), o("includes")
}, function (t, e, n) {
    var r = n(3), i = n(67).f, o = n(17), a = n(135), u = n(41), c = n(139), s = n(146);
    t.exports = function (t, e) {
        var n, f, l, d, p, v = t.target, h = t.global, E = t.stat;
        if (n = h ? r : E ? r[v] || u(v, {}) : (r[v] || {}).prototype) for (f in e) {
            if (d = e[f], l = t.noTargetGet ? (p = i(n, f)) && p.value : n[f], !s(h ? f : v + (E ? "." : "#") + f, t.forced) && void 0 !== l) {
                if (typeof d == typeof l) continue;
                c(d, l)
            }
            (t.sham || l && l.sham) && o(d, "sham", !0), a(n, f, d, t)
        }
    }
}, function (t, e, n) {
    "use strict";
    var r = {}.propertyIsEnumerable, i = Object.getOwnPropertyDescriptor, o = i && !r.call({1: 2}, 1);
    e.f = o ? function (t) {
        var e = i(this, t);
        return !!e && e.enumerable
    } : r
}, function (t, e, n) {
    var r = n(15), i = n(133), o = "".split;
    t.exports = r(function () {
        return !Object("z").propertyIsEnumerable(0)
    }) ? function (t) {
        return "String" == i(t) ? o.call(t, "") : Object(t)
    } : Object
}, function (t, e) {
    var n = {}.toString;
    t.exports = function (t) {
        return n.call(t).slice(8, -1)
    }
}, function (t, e) {
    t.exports = function (t) {
        if (null == t) throw TypeError("Can't call method on " + t);
        return t
    }
}, function (t, e, n) {
    var r = n(3), i = n(25), o = n(17), a = n(16), u = n(41), c = n(72), s = n(137), f = s.get, l = s.enforce,
        d = String(c).split("toString");
    i("inspectSource", function (t) {
        return c.call(t)
    }), (t.exports = function (t, e, n, i) {
        var c = !!i && !!i.unsafe, s = !!i && !!i.enumerable, f = !!i && !!i.noTargetGet;
        "function" == typeof n && ("string" != typeof e || a(n, "name") || o(n, "name", e), l(n).source = d.join("string" == typeof e ? e : "")), t !== r ? (c ? !f && t[e] && (s = !0) : delete t[e], s ? t[e] = n : o(t, e, n)) : s ? t[e] = n : u(e, n)
    })(Function.prototype, "toString", function () {
        return "function" == typeof this && f(this).source || c.call(this)
    })
}, function (t, e) {
    t.exports = !1
}, function (t, e, n) {
    var r, i, o, a = n(138), u = n(3), c = n(23), s = n(17), f = n(16), l = n(73), d = n(42), p = u.WeakMap;
    if (a) {
        var v = new p, h = v.get, E = v.has, g = v.set;
        r = function (t, e) {
            return g.call(v, t, e), e
        }, i = function (t) {
            return h.call(v, t) || {}
        }, o = function (t) {
            return E.call(v, t)
        }
    } else {
        var _ = l("state");
        d[_] = !0, r = function (t, e) {
            return s(t, _, e), e
        }, i = function (t) {
            return f(t, _) ? t[_] : {}
        }, o = function (t) {
            return f(t, _)
        }
    }
    t.exports = {
        set: r, get: i, has: o, enforce: function (t) {
            return o(t) ? i(t) : r(t, {})
        }, getterFor: function (t) {
            return function (e) {
                var n;
                if (!c(e) || (n = i(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
                return n
            }
        }
    }
}, function (t, e, n) {
    var r = n(3), i = n(72), o = r.WeakMap;
    t.exports = "function" == typeof o && /native code/.test(i.call(o))
}, function (t, e, n) {
    var r = n(16), i = n(140), o = n(67), a = n(40);
    t.exports = function (t, e) {
        for (var n = i(e), u = a.f, c = o.f, s = 0; s < n.length; s++) {
            var f = n[s];
            r(t, f) || u(t, f, c(e, f))
        }
    }
}, function (t, e, n) {
    var r = n(75), i = n(142), o = n(145), a = n(24);
    t.exports = r("Reflect", "ownKeys") || function (t) {
        var e = i.f(a(t)), n = o.f;
        return n ? e.concat(n(t)) : e
    }
}, function (t, e, n) {
    t.exports = n(3)
}, function (t, e, n) {
    var r = n(76), i = n(43).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function (t) {
        return r(t, i)
    }
}, function (t, e, n) {
    var r = n(78), i = Math.min;
    t.exports = function (t) {
        return t > 0 ? i(r(t), 9007199254740991) : 0
    }
}, function (t, e, n) {
    var r = n(78), i = Math.max, o = Math.min;
    t.exports = function (t, e) {
        var n = r(t);
        return n < 0 ? i(n + e, 0) : o(n, e)
    }
}, function (t, e) {
    e.f = Object.getOwnPropertySymbols
}, function (t, e, n) {
    var r = n(15), i = /#|\.prototype\./, o = function (t, e) {
        var n = u[a(t)];
        return n == s || n != c && ("function" == typeof e ? r(e) : !!e)
    }, a = o.normalize = function (t) {
        return String(t).replace(i, ".").toLowerCase()
    }, u = o.data = {}, c = o.NATIVE = "N", s = o.POLYFILL = "P";
    t.exports = o
}, function (t, e, n) {
    var r = n(148), i = n(150), o = n(17), a = r("unscopables"), u = Array.prototype;
    null == u[a] && o(u, a, i(null)), t.exports = function (t) {
        u[a][t] = !0
    }
}, function (t, e, n) {
    var r = n(3), i = n(25), o = n(74), a = n(149), u = r.Symbol, c = i("wks");
    t.exports = function (t) {
        return c[t] || (c[t] = a && u[t] || (a ? u : o)("Symbol." + t))
    }
}, function (t, e, n) {
    var r = n(15);
    t.exports = !!Object.getOwnPropertySymbols && !r(function () {
        return !String(Symbol())
    })
}, function (t, e, n) {
    var r = n(24), i = n(151), o = n(43), a = n(42), u = n(153), c = n(71), s = n(73)("IE_PROTO"), f = function () {
    }, l = function () {
        var t, e = c("iframe"), n = o.length;
        for (e.style.display = "none", u.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), l = t.F; n--;) delete l.prototype[o[n]];
        return l()
    };
    t.exports = Object.create || function (t, e) {
        var n;
        return null !== t ? (f.prototype = r(t), n = new f, f.prototype = null, n[s] = t) : n = l(), void 0 === e ? n : i(n, e)
    }, a[s] = !0
}, function (t, e, n) {
    var r = n(14), i = n(40), o = n(24), a = n(152);
    t.exports = r ? Object.defineProperties : function (t, e) {
        o(t);
        for (var n, r = a(e), u = r.length, c = 0; u > c;) i.f(t, n = r[c++], e[n]);
        return t
    }
}, function (t, e, n) {
    var r = n(76), i = n(43);
    t.exports = Object.keys || function (t) {
        return r(t, i)
    }
}, function (t, e, n) {
    var r = n(75);
    t.exports = r("document", "documentElement")
}, function (t, e, n) {
    var r = n(3), i = n(155), o = Function.call;
    t.exports = function (t, e, n) {
        return i(o, r[t].prototype[e], n)
    }
}, function (t, e, n) {
    var r = n(156);
    t.exports = function (t, e, n) {
        if (r(t), void 0 === e) return t;
        switch (n) {
            case 0:
                return function () {
                    return t.call(e)
                };
            case 1:
                return function (n) {
                    return t.call(e, n)
                };
            case 2:
                return function (n, r) {
                    return t.call(e, n, r)
                };
            case 3:
                return function (n, r, i) {
                    return t.call(e, n, r, i)
                }
        }
        return function () {
            return t.apply(e, arguments)
        }
    }
}, function (t, e) {
    t.exports = function (t) {
        if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
        return t
    }
}, function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(81), i = n(160), o = n(161), a = "[object Null]", u = "[object Undefined]",
        c = r.default ? r.default.toStringTag : void 0;
    e.default = function (t) {
        return null == t ? void 0 === t ? u : a : c && c in Object(t) ? Object(i.default)(t) : Object(o.default)(t)
    }
}, function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(159), i = "object" == typeof self && self && self.Object === Object && self,
        o = r.default || i || Function("return this")();
    e.default = o
}, function (t, e, n) {
    "use strict";
    n.r(e), function (t) {
        var n = "object" == typeof t && t && t.Object === Object && t;
        e.default = n
    }.call(this, n(22))
}, function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(81), i = Object.prototype, o = i.hasOwnProperty, a = i.toString,
        u = r.default ? r.default.toStringTag : void 0;
    e.default = function (t) {
        var e = o.call(t, u), n = t[u];
        try {
            t[u] = void 0;
            var r = !0
        } catch (t) {
        }
        var i = a.call(t);
        return r && (e ? t[u] = n : delete t[u]), i
    }
}, function (t, e, n) {
    "use strict";
    n.r(e);
    var r = Object.prototype.toString;
    e.default = function (t) {
        return r.call(t)
    }
}, function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(163), i = Object(r.default)(Object.getPrototypeOf, Object);
    e.default = i
}, function (t, e, n) {
    "use strict";
    n.r(e), e.default = function (t, e) {
        return function (n) {
            return t(e(n))
        }
    }
}, function (t, e, n) {
    "use strict";
    n.r(e), e.default = function (t) {
        return null != t && "object" == typeof t
    }
}, function (t, e, n) {
    "use strict";
    n.r(e), function (t, r) {
        var i, o = n(167);
        i = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : r;
        var a = Object(o.default)(i);
        e.default = a
    }.call(this, n(22), n(166)(t))
}, function (t, e) {
    t.exports = function (t) {
        if (!t.webpackPolyfill) {
            var e = Object.create(t);
            e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                enumerable: !0, get: function () {
                    return e.l
                }
            }), Object.defineProperty(e, "id", {
                enumerable: !0, get: function () {
                    return e.i
                }
            }), Object.defineProperty(e, "exports", {enumerable: !0}), e.webpackPolyfill = 1
        }
        return e
    }
}, function (t, e, n) {
    "use strict";

    function r(t) {
        var e, n = t.Symbol;
        return "function" == typeof n ? n.observable ? e = n.observable : (e = n("observable"), n.observable = e) : e = "@@observable", e
    }

    n.r(e), n.d(e, "default", function () {
        return r
    })
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
    var r = n(79), i = n(169), o = n(175), a = n(176), u = n(10), c = n(261), s = n(262),
        f = u.IX2ElementsReducer.ixElements, l = (0, r.combineReducers)({
            ixData: i.ixData,
            ixRequest: o.ixRequest,
            ixSession: a.ixSession,
            ixElements: f,
            ixInstances: c.ixInstances,
            ixParameters: s.ixParameters
        });
    e.default = l
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.ixData = void 0;
    var r = n(2).IX2EngineActionTypes.IX2_RAW_DATA_IMPORTED;
    e.ixData = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
            e = arguments.length > 1 ? arguments[1] : void 0;
        switch (e.type) {
            case r:
                return e.payload.ixData || Object.freeze({});
            default:
                return t
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.QuickEffectDirectionConsts = e.QuickEffectIds = e.EventLimitAffectedElements = e.EventContinuousMouseAxes = e.EventBasedOn = e.EventAppliesTo = e.EventTypeConsts = void 0;
    e.EventTypeConsts = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL"
    };
    e.EventAppliesTo = {ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE"};
    e.EventBasedOn = {ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT"};
    e.EventContinuousMouseAxes = {X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS"};
    e.EventLimitAffectedElements = {
        CHILDREN: "CHILDREN",
        SIBLINGS: "SIBLINGS",
        IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
    };
    e.QuickEffectIds = {
        FADE_EFFECT: "FADE_EFFECT",
        SLIDE_EFFECT: "SLIDE_EFFECT",
        GROW_EFFECT: "GROW_EFFECT",
        SHRINK_EFFECT: "SHRINK_EFFECT",
        SPIN_EFFECT: "SPIN_EFFECT",
        FLY_EFFECT: "FLY_EFFECT",
        POP_EFFECT: "POP_EFFECT",
        FLIP_EFFECT: "FLIP_EFFECT",
        JIGGLE_EFFECT: "JIGGLE_EFFECT",
        PULSE_EFFECT: "PULSE_EFFECT",
        DROP_EFFECT: "DROP_EFFECT",
        BLINK_EFFECT: "BLINK_EFFECT",
        BOUNCE_EFFECT: "BOUNCE_EFFECT",
        FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
        FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
        RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
        JELLO_EFFECT: "JELLO_EFFECT",
        GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
        SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
        PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
    };
    e.QuickEffectDirectionConsts = {
        LEFT: "LEFT",
        RIGHT: "RIGHT",
        BOTTOM: "BOTTOM",
        TOP: "TOP",
        BOTTOM_LEFT: "BOTTOM_LEFT",
        BOTTOM_RIGHT: "BOTTOM_RIGHT",
        TOP_RIGHT: "TOP_RIGHT",
        TOP_LEFT: "TOP_LEFT",
        CLOCKWISE: "CLOCKWISE",
        COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.ActionAppliesTo = e.ActionTypeConsts = void 0;
    e.ActionTypeConsts = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
    };
    e.ActionAppliesTo = {ELEMENT: "ELEMENT", ELEMENT_CLASS: "ELEMENT_CLASS", TRIGGER_ELEMENT: "TRIGGER_ELEMENT"}
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.InteractionTypeConsts = void 0;
    e.InteractionTypeConsts = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION"
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.IX2_TEST_FRAME_RENDERED = e.IX2_MEDIA_QUERIES_DEFINED = e.IX2_VIEWPORT_WIDTH_CHANGED = e.IX2_ACTION_LIST_PLAYBACK_CHANGED = e.IX2_ELEMENT_STATE_CHANGED = e.IX2_INSTANCE_REMOVED = e.IX2_INSTANCE_STARTED = e.IX2_INSTANCE_ADDED = e.IX2_PARAMETER_CHANGED = e.IX2_ANIMATION_FRAME_CHANGED = e.IX2_EVENT_STATE_CHANGED = e.IX2_EVENT_LISTENER_ADDED = e.IX2_CLEAR_REQUESTED = e.IX2_STOP_REQUESTED = e.IX2_PLAYBACK_REQUESTED = e.IX2_PREVIEW_REQUESTED = e.IX2_SESSION_STOPPED = e.IX2_SESSION_STARTED = e.IX2_SESSION_INITIALIZED = e.IX2_RAW_DATA_IMPORTED = void 0;
    e.IX2_RAW_DATA_IMPORTED = "IX2_RAW_DATA_IMPORTED";
    e.IX2_SESSION_INITIALIZED = "IX2_SESSION_INITIALIZED";
    e.IX2_SESSION_STARTED = "IX2_SESSION_STARTED";
    e.IX2_SESSION_STOPPED = "IX2_SESSION_STOPPED";
    e.IX2_PREVIEW_REQUESTED = "IX2_PREVIEW_REQUESTED";
    e.IX2_PLAYBACK_REQUESTED = "IX2_PLAYBACK_REQUESTED";
    e.IX2_STOP_REQUESTED = "IX2_STOP_REQUESTED";
    e.IX2_CLEAR_REQUESTED = "IX2_CLEAR_REQUESTED";
    e.IX2_EVENT_LISTENER_ADDED = "IX2_EVENT_LISTENER_ADDED";
    e.IX2_EVENT_STATE_CHANGED = "IX2_EVENT_STATE_CHANGED";
    e.IX2_ANIMATION_FRAME_CHANGED = "IX2_ANIMATION_FRAME_CHANGED";
    e.IX2_PARAMETER_CHANGED = "IX2_PARAMETER_CHANGED";
    e.IX2_INSTANCE_ADDED = "IX2_INSTANCE_ADDED";
    e.IX2_INSTANCE_STARTED = "IX2_INSTANCE_STARTED";
    e.IX2_INSTANCE_REMOVED = "IX2_INSTANCE_REMOVED";
    e.IX2_ELEMENT_STATE_CHANGED = "IX2_ELEMENT_STATE_CHANGED";
    e.IX2_ACTION_LIST_PLAYBACK_CHANGED = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
    e.IX2_VIEWPORT_WIDTH_CHANGED = "IX2_VIEWPORT_WIDTH_CHANGED";
    e.IX2_MEDIA_QUERIES_DEFINED = "IX2_MEDIA_QUERIES_DEFINED";
    e.IX2_TEST_FRAME_RENDERED = "IX2_TEST_FRAME_RENDERED"
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.RENDER_PLUGIN = e.RENDER_STYLE = e.RENDER_GENERAL = e.RENDER_TRANSFORM = e.ABSTRACT_NODE = e.PLAIN_OBJECT = e.HTML_ELEMENT = e.PRESERVE_3D = e.PARENT = e.SIBLINGS = e.IMMEDIATE_CHILDREN = e.CHILDREN = e.BAR_DELIMITER = e.COLON_DELIMITER = e.COMMA_DELIMITER = e.AUTO = e.WILL_CHANGE = e.FLEX = e.DISPLAY = e.COLOR = e.BORDER_COLOR = e.BACKGROUND = e.BACKGROUND_COLOR = e.HEIGHT = e.WIDTH = e.FILTER = e.OPACITY = e.SKEW_Y = e.SKEW_X = e.SKEW = e.ROTATE_Z = e.ROTATE_Y = e.ROTATE_X = e.SCALE_3D = e.SCALE_Z = e.SCALE_Y = e.SCALE_X = e.TRANSLATE_3D = e.TRANSLATE_Z = e.TRANSLATE_Y = e.TRANSLATE_X = e.TRANSFORM = e.CONFIG_UNIT = e.CONFIG_Z_UNIT = e.CONFIG_Y_UNIT = e.CONFIG_X_UNIT = e.CONFIG_VALUE = e.CONFIG_Z_VALUE = e.CONFIG_Y_VALUE = e.CONFIG_X_VALUE = e.BOUNDARY_SELECTOR = e.W_MOD_IX = e.W_MOD_JS = e.WF_PAGE = e.IX2_ID_DELIMITER = void 0;
    e.IX2_ID_DELIMITER = "|";
    e.WF_PAGE = "data-wf-page";
    e.W_MOD_JS = "w-mod-js";
    e.W_MOD_IX = "w-mod-ix";
    e.BOUNDARY_SELECTOR = ".w-dyn-item";
    e.CONFIG_X_VALUE = "xValue";
    e.CONFIG_Y_VALUE = "yValue";
    e.CONFIG_Z_VALUE = "zValue";
    e.CONFIG_VALUE = "value";
    e.CONFIG_X_UNIT = "xUnit";
    e.CONFIG_Y_UNIT = "yUnit";
    e.CONFIG_Z_UNIT = "zUnit";
    e.CONFIG_UNIT = "unit";
    e.TRANSFORM = "transform";
    e.TRANSLATE_X = "translateX";
    e.TRANSLATE_Y = "translateY";
    e.TRANSLATE_Z = "translateZ";
    e.TRANSLATE_3D = "translate3d";
    e.SCALE_X = "scaleX";
    e.SCALE_Y = "scaleY";
    e.SCALE_Z = "scaleZ";
    e.SCALE_3D = "scale3d";
    e.ROTATE_X = "rotateX";
    e.ROTATE_Y = "rotateY";
    e.ROTATE_Z = "rotateZ";
    e.SKEW = "skew";
    e.SKEW_X = "skewX";
    e.SKEW_Y = "skewY";
    e.OPACITY = "opacity";
    e.FILTER = "filter";
    e.WIDTH = "width";
    e.HEIGHT = "height";
    e.BACKGROUND_COLOR = "backgroundColor";
    e.BACKGROUND = "background";
    e.BORDER_COLOR = "borderColor";
    e.COLOR = "color";
    e.DISPLAY = "display";
    e.FLEX = "flex";
    e.WILL_CHANGE = "willChange";
    e.AUTO = "AUTO";
    e.COMMA_DELIMITER = ",";
    e.COLON_DELIMITER = ":";
    e.BAR_DELIMITER = "|";
    e.CHILDREN = "CHILDREN";
    e.IMMEDIATE_CHILDREN = "IMMEDIATE_CHILDREN";
    e.SIBLINGS = "SIBLINGS";
    e.PARENT = "PARENT";
    e.PRESERVE_3D = "preserve-3d";
    e.HTML_ELEMENT = "HTML_ELEMENT";
    e.PLAIN_OBJECT = "PLAIN_OBJECT";
    e.ABSTRACT_NODE = "ABSTRACT_NODE";
    e.RENDER_TRANSFORM = "RENDER_TRANSFORM";
    e.RENDER_GENERAL = "RENDER_GENERAL";
    e.RENDER_STYLE = "RENDER_STYLE";
    e.RENDER_PLUGIN = "RENDER_PLUGIN"
}, function (t, e, n) {
    "use strict";
    var r, i = n(0)(n(26)), o = n(0);
    Object.defineProperty(e, "__esModule", {value: !0}), e.ixRequest = void 0;
    var a = o(n(27)), u = n(2), c = n(18), s = u.IX2EngineActionTypes, f = s.IX2_PREVIEW_REQUESTED,
        l = s.IX2_PLAYBACK_REQUESTED, d = s.IX2_STOP_REQUESTED, p = s.IX2_CLEAR_REQUESTED,
        v = {preview: {}, playback: {}, stop: {}, clear: {}},
        h = Object.create(null, (r = {}, (0, i.default)(r, f, {value: "preview"}), (0, i.default)(r, l, {value: "playback"}), (0, i.default)(r, d, {value: "stop"}), (0, i.default)(r, p, {value: "clear"}), r));
    e.ixRequest = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
            e = arguments.length > 1 ? arguments[1] : void 0;
        if (e.type in h) {
            var n = [h[e.type]];
            return (0, c.setIn)(t, [n], (0, a.default)({}, e.payload))
        }
        return t
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.ixSession = void 0;
    var r = n(2), i = n(18), o = r.IX2EngineActionTypes, a = o.IX2_SESSION_INITIALIZED, u = o.IX2_SESSION_STARTED,
        c = o.IX2_TEST_FRAME_RENDERED, s = o.IX2_SESSION_STOPPED, f = o.IX2_EVENT_LISTENER_ADDED,
        l = o.IX2_EVENT_STATE_CHANGED, d = o.IX2_ANIMATION_FRAME_CHANGED, p = o.IX2_ACTION_LIST_PLAYBACK_CHANGED,
        v = o.IX2_VIEWPORT_WIDTH_CHANGED, h = o.IX2_MEDIA_QUERIES_DEFINED, E = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1
        };
    e.ixSession = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
            e = arguments.length > 1 ? arguments[1] : void 0;
        switch (e.type) {
            case a:
                var n = e.payload.hasBoundaryNodes;
                return (0, i.set)(t, "hasBoundaryNodes", n);
            case u:
                return (0, i.set)(t, "active", !0);
            case c:
                var r = e.payload.step, o = void 0 === r ? 20 : r;
                return (0, i.set)(t, "tick", t.tick + o);
            case s:
                return E;
            case d:
                var g = e.payload.now;
                return (0, i.set)(t, "tick", g);
            case f:
                var _ = (0, i.addLast)(t.eventListeners, e.payload);
                return (0, i.set)(t, "eventListeners", _);
            case l:
                var y = e.payload, m = y.stateKey, I = y.newState;
                return (0, i.setIn)(t, ["eventState", m], I);
            case p:
                var T = e.payload, b = T.actionListId, O = T.isPlaying;
                return (0, i.setIn)(t, ["playbackState", b], O);
            case v:
                for (var w = e.payload, A = w.width, S = w.mediaQueries, x = S.length, R = null, N = 0; N < x; N++) {
                    var C = S[N], L = C.key, D = C.min, P = C.max;
                    if (A >= D && A <= P) {
                        R = L;
                        break
                    }
                }
                return (0, i.merge)(t, {viewportWidth: A, mediaQueryKey: R});
            case h:
                return (0, i.set)(t, "hasDefinedMediaQueries", !0);
            default:
                return t
        }
    }
}, function (t, e, n) {
    var r = n(178), i = n(230), o = n(102);
    t.exports = function (t) {
        var e = i(t);
        return 1 == e.length && e[0][2] ? o(e[0][0], e[0][1]) : function (n) {
            return n === t || r(n, t, e)
        }
    }
}, function (t, e, n) {
    var r = n(88), i = n(92), o = 1, a = 2;
    t.exports = function (t, e, n, u) {
        var c = n.length, s = c, f = !u;
        if (null == t) return !s;
        for (t = Object(t); c--;) {
            var l = n[c];
            if (f && l[2] ? l[1] !== t[l[0]] : !(l[0] in t)) return !1
        }
        for (; ++c < s;) {
            var d = (l = n[c])[0], p = t[d], v = l[1];
            if (f && l[2]) {
                if (void 0 === p && !(d in t)) return !1
            } else {
                var h = new r;
                if (u) var E = u(p, v, d, t, e, h);
                if (!(void 0 === E ? i(v, p, o | a, u, h) : E)) return !1
            }
        }
        return !0
    }
}, function (t, e) {
    t.exports = function () {
        this.__data__ = [], this.size = 0
    }
}, function (t, e, n) {
    var r = n(29), i = Array.prototype.splice;
    t.exports = function (t) {
        var e = this.__data__, n = r(e, t);
        return !(n < 0 || (n == e.length - 1 ? e.pop() : i.call(e, n, 1), --this.size, 0))
    }
}, function (t, e, n) {
    var r = n(29);
    t.exports = function (t) {
        var e = this.__data__, n = r(e, t);
        return n < 0 ? void 0 : e[n][1]
    }
}, function (t, e, n) {
    var r = n(29);
    t.exports = function (t) {
        return r(this.__data__, t) > -1
    }
}, function (t, e, n) {
    var r = n(29);
    t.exports = function (t, e) {
        var n = this.__data__, i = r(n, t);
        return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this
    }
}, function (t, e, n) {
    var r = n(28);
    t.exports = function () {
        this.__data__ = new r, this.size = 0
    }
}, function (t, e) {
    t.exports = function (t) {
        var e = this.__data__, n = e.delete(t);
        return this.size = e.size, n
    }
}, function (t, e) {
    t.exports = function (t) {
        return this.__data__.get(t)
    }
}, function (t, e) {
    t.exports = function (t) {
        return this.__data__.has(t)
    }
}, function (t, e, n) {
    var r = n(28), i = n(48), o = n(49), a = 200;
    t.exports = function (t, e) {
        var n = this.__data__;
        if (n instanceof r) {
            var u = n.__data__;
            if (!i || u.length < a - 1) return u.push([t, e]), this.size = ++n.size, this;
            n = this.__data__ = new o(u)
        }
        return n.set(t, e), this.size = n.size, this
    }
}, function (t, e, n) {
    var r = n(89), i = n(192), o = n(6), a = n(91), u = /^\[object .+?Constructor\]$/, c = Function.prototype,
        s = Object.prototype, f = c.toString, l = s.hasOwnProperty,
        d = RegExp("^" + f.call(l).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    t.exports = function (t) {
        return !(!o(t) || i(t)) && (r(t) ? d : u).test(a(t))
    }
}, function (t, e, n) {
    var r = n(19), i = Object.prototype, o = i.hasOwnProperty, a = i.toString, u = r ? r.toStringTag : void 0;
    t.exports = function (t) {
        var e = o.call(t, u), n = t[u];
        try {
            t[u] = void 0;
            var r = !0
        } catch (t) {
        }
        var i = a.call(t);
        return r && (e ? t[u] = n : delete t[u]), i
    }
}, function (t, e) {
    var n = Object.prototype.toString;
    t.exports = function (t) {
        return n.call(t)
    }
}, function (t, e, n) {
    var r, i = n(193), o = (r = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
    t.exports = function (t) {
        return !!o && o in t
    }
}, function (t, e, n) {
    var r = n(4)["__core-js_shared__"];
    t.exports = r
}, function (t, e) {
    t.exports = function (t, e) {
        return null == t ? void 0 : t[e]
    }
}, function (t, e, n) {
    var r = n(196), i = n(28), o = n(48);
    t.exports = function () {
        this.size = 0, this.__data__ = {hash: new r, map: new (o || i), string: new r}
    }
}, function (t, e, n) {
    var r = n(197), i = n(198), o = n(199), a = n(200), u = n(201);

    function c(t) {
        var e = -1, n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }

    c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c
}, function (t, e, n) {
    var r = n(30);
    t.exports = function () {
        this.__data__ = r ? r(null) : {}, this.size = 0
    }
}, function (t, e) {
    t.exports = function (t) {
        var e = this.has(t) && delete this.__data__[t];
        return this.size -= e ? 1 : 0, e
    }
}, function (t, e, n) {
    var r = n(30), i = "__lodash_hash_undefined__", o = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
        var e = this.__data__;
        if (r) {
            var n = e[t];
            return n === i ? void 0 : n
        }
        return o.call(e, t) ? e[t] : void 0
    }
}, function (t, e, n) {
    var r = n(30), i = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
        var e = this.__data__;
        return r ? void 0 !== e[t] : i.call(e, t)
    }
}, function (t, e, n) {
    var r = n(30), i = "__lodash_hash_undefined__";
    t.exports = function (t, e) {
        var n = this.__data__;
        return this.size += this.has(t) ? 0 : 1, n[t] = r && void 0 === e ? i : e, this
    }
}, function (t, e, n) {
    var r = n(31);
    t.exports = function (t) {
        var e = r(this, t).delete(t);
        return this.size -= e ? 1 : 0, e
    }
}, function (t, e) {
    t.exports = function (t) {
        var e = typeof t;
        return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
    }
}, function (t, e, n) {
    var r = n(31);
    t.exports = function (t) {
        return r(this, t).get(t)
    }
}, function (t, e, n) {
    var r = n(31);
    t.exports = function (t) {
        return r(this, t).has(t)
    }
}, function (t, e, n) {
    var r = n(31);
    t.exports = function (t, e) {
        var n = r(this, t), i = n.size;
        return n.set(t, e), this.size += n.size == i ? 0 : 1, this
    }
}, function (t, e, n) {
    var r = n(88), i = n(93), o = n(213), a = n(217), u = n(57), c = n(1), s = n(51), f = n(53), l = 1,
        d = "[object Arguments]", p = "[object Array]", v = "[object Object]", h = Object.prototype.hasOwnProperty;
    t.exports = function (t, e, n, E, g, _) {
        var y = c(t), m = c(e), I = y ? p : u(t), T = m ? p : u(e), b = (I = I == d ? v : I) == v,
            O = (T = T == d ? v : T) == v, w = I == T;
        if (w && s(t)) {
            if (!s(e)) return !1;
            y = !0, b = !1
        }
        if (w && !b) return _ || (_ = new r), y || f(t) ? i(t, e, n, E, g, _) : o(t, e, I, n, E, g, _);
        if (!(n & l)) {
            var A = b && h.call(t, "__wrapped__"), S = O && h.call(e, "__wrapped__");
            if (A || S) {
                var x = A ? t.value() : t, R = S ? e.value() : e;
                return _ || (_ = new r), g(x, R, n, E, _)
            }
        }
        return !!w && (_ || (_ = new r), a(t, e, n, E, g, _))
    }
}, function (t, e, n) {
    var r = n(49), i = n(209), o = n(210);

    function a(t) {
        var e = -1, n = null == t ? 0 : t.length;
        for (this.__data__ = new r; ++e < n;) this.add(t[e])
    }

    a.prototype.add = a.prototype.push = i, a.prototype.has = o, t.exports = a
}, function (t, e) {
    var n = "__lodash_hash_undefined__";
    t.exports = function (t) {
        return this.__data__.set(t, n), this
    }
}, function (t, e) {
    t.exports = function (t) {
        return this.__data__.has(t)
    }
}, function (t, e) {
    t.exports = function (t, e) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r;) if (e(t[n], n, t)) return !0;
        return !1
    }
}, function (t, e) {
    t.exports = function (t, e) {
        return t.has(e)
    }
}, function (t, e, n) {
    var r = n(19), i = n(214), o = n(47), a = n(93), u = n(215), c = n(216), s = 1, f = 2, l = "[object Boolean]",
        d = "[object Date]", p = "[object Error]", v = "[object Map]", h = "[object Number]", E = "[object RegExp]",
        g = "[object Set]", _ = "[object String]", y = "[object Symbol]", m = "[object ArrayBuffer]",
        I = "[object DataView]", T = r ? r.prototype : void 0, b = T ? T.valueOf : void 0;
    t.exports = function (t, e, n, r, T, O, w) {
        switch (n) {
            case I:
                if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                t = t.buffer, e = e.buffer;
            case m:
                return !(t.byteLength != e.byteLength || !O(new i(t), new i(e)));
            case l:
            case d:
            case h:
                return o(+t, +e);
            case p:
                return t.name == e.name && t.message == e.message;
            case E:
            case _:
                return t == e + "";
            case v:
                var A = u;
            case g:
                var S = r & s;
                if (A || (A = c), t.size != e.size && !S) return !1;
                var x = w.get(t);
                if (x) return x == e;
                r |= f, w.set(t, e);
                var R = a(A(t), A(e), r, T, O, w);
                return w.delete(t), R;
            case y:
                if (b) return b.call(t) == b.call(e)
        }
        return !1
    }
}, function (t, e, n) {
    var r = n(4).Uint8Array;
    t.exports = r
}, function (t, e) {
    t.exports = function (t) {
        var e = -1, n = Array(t.size);
        return t.forEach(function (t, r) {
            n[++e] = [r, t]
        }), n
    }
}, function (t, e) {
    t.exports = function (t) {
        var e = -1, n = Array(t.size);
        return t.forEach(function (t) {
            n[++e] = t
        }), n
    }
}, function (t, e, n) {
    var r = n(218), i = 1, o = Object.prototype.hasOwnProperty;
    t.exports = function (t, e, n, a, u, c) {
        var s = n & i, f = r(t), l = f.length;
        if (l != r(e).length && !s) return !1;
        for (var d = l; d--;) {
            var p = f[d];
            if (!(s ? p in e : o.call(e, p))) return !1
        }
        var v = c.get(t), h = c.get(e);
        if (v && h) return v == e && h == t;
        var E = !0;
        c.set(t, e), c.set(e, t);
        for (var g = s; ++d < l;) {
            var _ = t[p = f[d]], y = e[p];
            if (a) var m = s ? a(y, _, p, e, t, c) : a(_, y, p, t, e, c);
            if (!(void 0 === m ? _ === y || u(_, y, n, a, c) : m)) {
                E = !1;
                break
            }
            g || (g = "constructor" == p)
        }
        if (E && !g) {
            var I = t.constructor, T = e.constructor;
            I != T && "constructor" in t && "constructor" in e && !("function" == typeof I && I instanceof I && "function" == typeof T && T instanceof T) && (E = !1)
        }
        return c.delete(t), c.delete(e), E
    }
}, function (t, e, n) {
    var r = n(94), i = n(95), o = n(32);
    t.exports = function (t) {
        return r(t, o, i)
    }
}, function (t, e) {
    t.exports = function (t, e) {
        for (var n = -1, r = null == t ? 0 : t.length, i = 0, o = []; ++n < r;) {
            var a = t[n];
            e(a, n, t) && (o[i++] = a)
        }
        return o
    }
}, function (t, e) {
    t.exports = function (t, e) {
        for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
        return r
    }
}, function (t, e, n) {
    var r = n(11), i = n(9), o = "[object Arguments]";
    t.exports = function (t) {
        return i(t) && r(t) == o
    }
}, function (t, e) {
    t.exports = function () {
        return !1
    }
}, function (t, e, n) {
    var r = n(11), i = n(54), o = n(9), a = {};
    a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, t.exports = function (t) {
        return o(t) && i(t.length) && !!a[r(t)]
    }
}, function (t, e) {
    t.exports = function (t) {
        return function (e) {
            return t(e)
        }
    }
}, function (t, e, n) {
    (function (t) {
        var r = n(90), i = e && !e.nodeType && e, o = i && "object" == typeof t && t && !t.nodeType && t,
            a = o && o.exports === i && r.process, u = function () {
                try {
                    var t = o && o.require && o.require("util").types;
                    return t || a && a.binding && a.binding("util")
                } catch (t) {
                }
            }();
        t.exports = u
    }).call(this, n(98)(t))
}, function (t, e, n) {
    var r = n(99)(Object.keys, Object);
    t.exports = r
}, function (t, e, n) {
    var r = n(8)(n(4), "DataView");
    t.exports = r
}, function (t, e, n) {
    var r = n(8)(n(4), "Promise");
    t.exports = r
}, function (t, e, n) {
    var r = n(8)(n(4), "Set");
    t.exports = r
}, function (t, e, n) {
    var r = n(101), i = n(32);
    t.exports = function (t) {
        for (var e = i(t), n = e.length; n--;) {
            var o = e[n], a = t[o];
            e[n] = [o, a, r(a)]
        }
        return e
    }
}, function (t, e, n) {
    var r = n(92), i = n(34), o = n(237), a = n(59), u = n(101), c = n(102), s = n(20), f = 1, l = 2;
    t.exports = function (t, e) {
        return a(t) && u(e) ? c(s(t), e) : function (n) {
            var a = i(n, t);
            return void 0 === a && a === e ? o(n, t) : r(e, a, f | l)
        }
    }
}, function (t, e, n) {
    var r = n(233),
        i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        o = /\\(\\)?/g, a = r(function (t) {
            var e = [];
            return 46 === t.charCodeAt(0) && e.push(""), t.replace(i, function (t, n, r, i) {
                e.push(r ? i.replace(o, "$1") : n || t)
            }), e
        });
    t.exports = a
}, function (t, e, n) {
    var r = n(234), i = 500;
    t.exports = function (t) {
        var e = r(t, function (t) {
            return n.size === i && n.clear(), t
        }), n = e.cache;
        return e
    }
}, function (t, e, n) {
    var r = n(49), i = "Expected a function";

    function o(t, e) {
        if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError(i);
        var n = function () {
            var r = arguments, i = e ? e.apply(this, r) : r[0], o = n.cache;
            if (o.has(i)) return o.get(i);
            var a = t.apply(this, r);
            return n.cache = o.set(i, a) || o, a
        };
        return n.cache = new (o.Cache || r), n
    }

    o.Cache = r, t.exports = o
}, function (t, e, n) {
    var r = n(236);
    t.exports = function (t) {
        return null == t ? "" : r(t)
    }
}, function (t, e, n) {
    var r = n(19), i = n(103), o = n(1), a = n(36), u = 1 / 0, c = r ? r.prototype : void 0,
        s = c ? c.toString : void 0;
    t.exports = function t(e) {
        if ("string" == typeof e) return e;
        if (o(e)) return i(e, t) + "";
        if (a(e)) return s ? s.call(e) : "";
        var n = e + "";
        return "0" == n && 1 / e == -u ? "-0" : n
    }
}, function (t, e, n) {
    var r = n(238), i = n(239);
    t.exports = function (t, e) {
        return null != t && i(t, e, r)
    }
}, function (t, e) {
    t.exports = function (t, e) {
        return null != t && e in Object(t)
    }
}, function (t, e, n) {
    var r = n(35), i = n(33), o = n(1), a = n(52), u = n(54), c = n(20);
    t.exports = function (t, e, n) {
        for (var s = -1, f = (e = r(e, t)).length, l = !1; ++s < f;) {
            var d = c(e[s]);
            if (!(l = null != t && n(t, d))) break;
            t = t[d]
        }
        return l || ++s != f ? l : !!(f = null == t ? 0 : t.length) && u(f) && a(d, f) && (o(t) || i(t))
    }
}, function (t, e, n) {
    var r = n(104), i = n(241), o = n(59), a = n(20);
    t.exports = function (t) {
        return o(t) ? r(a(t)) : i(t)
    }
}, function (t, e, n) {
    var r = n(58);
    t.exports = function (t) {
        return function (e) {
            return r(e, t)
        }
    }
}, function (t, e, n) {
    var r = n(105), i = n(7), o = n(106), a = Math.max;
    t.exports = function (t, e, n) {
        var u = null == t ? 0 : t.length;
        if (!u) return -1;
        var c = null == n ? 0 : o(n);
        return c < 0 && (c = a(u + c, 0)), r(t, i(e, 3), c)
    }
}, function (t, e, n) {
    var r = n(61), i = 1 / 0, o = 1.7976931348623157e308;
    t.exports = function (t) {
        return t ? (t = r(t)) === i || t === -i ? (t < 0 ? -1 : 1) * o : t == t ? t : 0 : 0 === t ? t : 0
    }
}, function (t, e) {
    t.exports = function (t) {
        if (Array.isArray(t)) {
            for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
            return n
        }
    }
}, function (t, e) {
    t.exports = function (t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
    }
}, function (t, e) {
    t.exports = function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.createElementState = I, e.mergeActionState = T, e.ixElements = void 0;
    var r = n(18), i = n(2), o = i.IX2EngineConstants, a = (o.HTML_ELEMENT, o.PLAIN_OBJECT),
        u = (o.ABSTRACT_NODE, o.CONFIG_X_VALUE), c = o.CONFIG_Y_VALUE, s = o.CONFIG_Z_VALUE, f = o.CONFIG_VALUE,
        l = o.CONFIG_X_UNIT, d = o.CONFIG_Y_UNIT, p = o.CONFIG_Z_UNIT, v = o.CONFIG_UNIT, h = i.IX2EngineActionTypes,
        E = h.IX2_SESSION_STOPPED, g = h.IX2_INSTANCE_ADDED, _ = h.IX2_ELEMENT_STATE_CHANGED, y = {}, m = "refState";

    function I(t, e, n, i, o) {
        var u = n === a ? (0, r.getIn)(o, ["config", "target", "objectId"]) : null;
        return (0, r.mergeIn)(t, [i], {id: i, ref: e, refId: u, refType: n})
    }

    function T(t, e, n, i, o) {
        var a = function (t) {
            var e = t.config;
            return b.reduce(function (t, n) {
                var r = n[0], i = n[1], o = e[r], a = e[i];
                return null != o && null != a && (t[i] = a), t
            }, {})
        }(o), u = [e, m, n];
        return (0, r.mergeIn)(t, u, i, a)
    }

    e.ixElements = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        switch (e.type) {
            case E:
                return y;
            case g:
                var n = e.payload, i = n.elementId, o = n.element, a = n.origin, u = n.actionItem, c = n.refType,
                    s = u.actionTypeId, f = t;
                return (0, r.getIn)(f, [i, o]) !== o && (f = I(f, o, c, i, u)), T(f, i, s, a, u);
            case _:
                var l = e.payload;
                return T(t, l.elementId, l.actionTypeId, l.current, l.actionItem);
            default:
                return t
        }
    };
    var b = [[u, l], [c, d], [s, p], [f, v]]
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.clearPlugin = e.renderPlugin = e.createPluginInstance = e.getPluginDestination = e.getPluginOrigin = e.getPluginDuration = e.getPluginConfig = void 0;
    e.getPluginConfig = function (t) {
        return t.value
    };
    e.getPluginDuration = function (t, e) {
        if ("auto" !== e.config.duration) return null;
        var n = parseFloat(t.getAttribute("data-duration"));
        return n > 0 ? 1e3 * n : 1e3 * parseFloat(t.getAttribute("data-default-duration"))
    };
    e.getPluginOrigin = function (t) {
        return t || {value: 0}
    };
    e.getPluginDestination = function (t) {
        return {value: t.value}
    };
    e.createPluginInstance = function (t) {
        var e = window.Webflow.require("lottie").createInstance(t);
        return e.stop(), e.setSubframe(!0), e
    };
    e.renderPlugin = function (t, e, n) {
        if (t) {
            var r = e[n.actionTypeId].value / 100;
            t.goToFrame(t.frames * r)
        }
    };
    e.clearPlugin = function (t) {
        window.Webflow.require("lottie").createInstance(t).stop()
    }
}, function (t, e, n) {
    "use strict";
    var r, i, o, a = n(0), u = a(n(21)), c = a(n(26)), s = n(0);
    Object.defineProperty(e, "__esModule", {value: !0}), e.getInstanceId = function () {
        return "i" + ht++
    }, e.getElementId = function (t, e) {
        for (var n in t) {
            var r = t[n];
            if (r && r.ref === e) return r.id
        }
        return "e" + Et++
    }, e.reifyState = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = t.events, n = t.actionLists,
            r = t.site, i = (0, l.default)(e, function (t, e) {
                var n = e.eventTypeId;
                return t[n] || (t[n] = {}), t[n][e.id] = e, t
            }, {}), o = r && r.mediaQueries, a = [];
        o ? a = o.map(function (t) {
            return t.key
        }) : (o = [], console.warn("IX2 missing mediaQueries in site data"));
        return {ixData: {events: e, actionLists: n, eventTypeMap: i, mediaQueries: o, mediaQueryKeys: a}}
    }, e.observeStore = function (t) {
        var e = t.store, n = t.select, r = t.onChange, i = t.comparator, o = void 0 === i ? gt : i, a = e.getState,
            u = (0, e.subscribe)(function () {
                var t = n(a());
                if (null == t) return void u();
                o(t, c) || r(c = t, e)
            }), c = n(a());
        return u
    }, e.getAffectedElements = yt, e.getComputedStyle = function (t) {
        var e = t.element, n = t.actionItem;
        if (!y.IS_BROWSER_ENV) return {};
        switch (n.actionTypeId) {
            case ot:
            case at:
            case ut:
            case ct:
            case st:
                return window.getComputedStyle(e);
            default:
                return {}
        }
    }, e.getInstanceOrigin = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = arguments.length > 3 ? arguments[3] : void 0,
            i = (arguments.length > 4 ? arguments[4] : void 0).getStyle, o = r.actionTypeId, a = r.config;
        if ((0, _.isPluginType)(o)) return (0, _.getPluginOrigin)(o)(e[o]);
        switch (o) {
            case J:
            case tt:
            case et:
            case nt:
                return e[o] || Ot[o];
            case it:
                return It(e[o], r.config.filters);
            case rt:
                return {value: (0, f.default)(parseFloat(i(t, C)), 1)};
            case ot:
                var u, c, s = i(t, D), l = i(t, P);
                return u = a.widthUnit === B ? mt.test(s) ? parseFloat(s) : parseFloat(n.width) : (0, f.default)(parseFloat(s), parseFloat(n.width)), c = a.heightUnit === B ? mt.test(l) ? parseFloat(l) : parseFloat(n.height) : (0, f.default)(parseFloat(l), parseFloat(n.height)), {
                    widthValue: u,
                    heightValue: c
                };
            case at:
            case ut:
            case ct:
                return function (t) {
                    var e = t.element, n = t.actionTypeId, r = t.computedStyle, i = t.getStyle, o = dt[n], a = i(e, o),
                        u = xt.test(a) ? a : r[o], c = function (t, e) {
                            var n = t.exec(e);
                            return n ? n[1] : ""
                        }(Rt, u).split(H);
                    return {
                        rValue: (0, f.default)(parseInt(c[0], 10), 255),
                        gValue: (0, f.default)(parseInt(c[1], 10), 255),
                        bValue: (0, f.default)(parseInt(c[2], 10), 255),
                        aValue: (0, f.default)(parseFloat(c[3]), 1)
                    }
                }({element: t, actionTypeId: o, computedStyle: n, getStyle: i});
            case st:
                return {value: (0, f.default)(i(t, U), n.display)};
            case ft:
                return e[o] || {value: 0};
            default:
                return
        }
    }, e.getDestinationValues = function (t) {
        var e = t.element, n = t.actionItem, r = t.elementApi, i = n.actionTypeId;
        if ((0, _.isPluginType)(i)) return (0, _.getPluginDestination)(i)(n.config);
        switch (i) {
            case J:
            case tt:
            case et:
            case nt:
                var o = n.config, a = o.xValue, u = o.yValue, c = o.zValue;
                return {xValue: a, yValue: u, zValue: c};
            case ot:
                var s = r.getStyle, f = r.setStyle, l = r.getProperty, d = n.config, p = d.widthUnit, v = d.heightUnit,
                    h = n.config, E = h.widthValue, g = h.heightValue;
                if (!y.IS_BROWSER_ENV) return {widthValue: E, heightValue: g};
                if (p === B) {
                    var m = s(e, D);
                    f(e, D, ""), E = l(e, "offsetWidth"), f(e, D, m)
                }
                if (v === B) {
                    var I = s(e, P);
                    f(e, P, ""), g = l(e, "offsetHeight"), f(e, P, I)
                }
                return {widthValue: E, heightValue: g};
            case at:
            case ut:
            case ct:
                var T = n.config, b = T.rValue, O = T.gValue, w = T.bValue, A = T.aValue;
                return {rValue: b, gValue: O, bValue: w, aValue: A};
            case it:
                return n.config.filters.reduce(Tt, {});
            default:
                var S = n.config.value;
                return {value: S}
        }
    }, e.getRenderType = bt, e.getStyleProp = function (t, e) {
        return t === q ? e.replace("STYLE_", "").toLowerCase() : null
    }, e.renderHTMLElement = function (t, e, n, r, i, o, a, u, c) {
        switch (u) {
            case K:
                return function (t, e, n, r, i) {
                    var o = St.map(function (t) {
                        var n = Ot[t], r = e[t] || {}, i = r.xValue, o = void 0 === i ? n.xValue : i, a = r.yValue,
                            u = void 0 === a ? n.yValue : a, c = r.zValue, s = void 0 === c ? n.zValue : c, f = r.xUnit,
                            l = void 0 === f ? "" : f, d = r.yUnit, p = void 0 === d ? "" : d, v = r.zUnit,
                            h = void 0 === v ? "" : v;
                        switch (t) {
                            case J:
                                return "".concat(b, "(").concat(o).concat(l, ", ").concat(u).concat(p, ", ").concat(s).concat(h, ")");
                            case tt:
                                return "".concat(O, "(").concat(o).concat(l, ", ").concat(u).concat(p, ", ").concat(s).concat(h, ")");
                            case et:
                                return "".concat(w, "(").concat(o).concat(l, ") ").concat(A, "(").concat(u).concat(p, ") ").concat(S, "(").concat(s).concat(h, ")");
                            case nt:
                                return "".concat(x, "(").concat(o).concat(l, ", ").concat(u).concat(p, ")");
                            default:
                                return ""
                        }
                    }).join(" "), a = i.setStyle;
                    Nt(t, y.TRANSFORM_PREFIXED, i), a(t, y.TRANSFORM_PREFIXED, o), u = r, c = n, s = u.actionTypeId, f = c.xValue, l = c.yValue, d = c.zValue, (s === J && void 0 !== d || s === tt && void 0 !== d || s === et && (void 0 !== f || void 0 !== l)) && a(t, y.TRANSFORM_STYLE_PREFIXED, R);
                    var u, c, s, f, l, d
                }(t, e, n, i, a);
            case q:
                return function (t, e, n, r, i, o) {
                    var a = o.setStyle, u = r.actionTypeId, c = r.config;
                    switch (u) {
                        case ot:
                            var s = r.config, f = s.widthUnit, d = void 0 === f ? "" : f, p = s.heightUnit,
                                v = void 0 === p ? "" : p, h = n.widthValue, E = n.heightValue;
                            void 0 !== h && (d === B && (d = "px"), Nt(t, D, o), a(t, D, h + d)), void 0 !== E && (v === B && (v = "px"), Nt(t, P, o), a(t, P, E + v));
                            break;
                        case it:
                            !function (t, e, n, r) {
                                var i = (0, l.default)(e, function (t, e, r) {
                                    return "".concat(t, " ").concat(r, "(").concat(e).concat(At(r, n), ")")
                                }, ""), o = r.setStyle;
                                Nt(t, L, r), o(t, L, i)
                            }(t, n, c, o);
                            break;
                        case at:
                        case ut:
                        case ct:
                            var g = dt[u], _ = Math.round(n.rValue), y = Math.round(n.gValue), m = Math.round(n.bValue),
                                I = n.aValue;
                            Nt(t, g, o), a(t, g, I >= 1 ? "rgb(".concat(_, ",").concat(y, ",").concat(m, ")") : "rgba(".concat(_, ",").concat(y, ",").concat(m, ",").concat(I, ")"));
                            break;
                        default:
                            var T = c.unit, b = void 0 === T ? "" : T;
                            Nt(t, i, o), a(t, i, n.value + b)
                    }
                }(t, 0, n, i, o, a);
            case Q:
                return function (t, e, n) {
                    var r = n.setStyle;
                    switch (e.actionTypeId) {
                        case st:
                            var i = e.config.value;
                            return void (i === N && y.IS_BROWSER_ENV ? r(t, U, y.FLEX_PREFIXED) : r(t, U, i))
                    }
                }(t, i, a);
            case $:
                var s = i.actionTypeId;
                if ((0, _.isPluginType)(s)) return (0, _.renderPlugin)(s)(c, e, i)
        }
    }, e.clearAllStyles = function (t) {
        var e = t.store, n = t.elementApi, r = e.getState().ixData, i = r.events, o = void 0 === i ? {} : i,
            a = r.actionLists, u = void 0 === a ? {} : a;
        Object.keys(o).forEach(function (t) {
            var e = o[t], r = e.action.config, i = r.actionListId, a = u[i];
            a && Lt({actionList: a, event: e, elementApi: n})
        }), Object.keys(u).forEach(function (t) {
            Lt({actionList: u[t], elementApi: n})
        })
    }, e.cleanupHTMLElement = function (t, e, n) {
        var r = n.setStyle, i = n.getStyle, o = e.actionTypeId;
        if (o === ot) {
            var a = e.config;
            a.widthUnit === B && r(t, D, ""), a.heightUnit === B && r(t, P, "")
        }
        i(t, W) && Pt({effect: Ct, actionTypeId: o, elementApi: n})(t)
    }, e.getMaxDurationItemIndex = jt, e.getActionListProgress = function (t, e) {
        var n = t.actionItemGroups, r = t.useFirstGroupAsInitialState, i = e.actionItem, o = e.verboseTimeElapsed,
            a = void 0 === o ? 0 : o, u = 0, c = 0;
        return n.forEach(function (t, e) {
            if (!r || 0 !== e) {
                var n = t.actionItems, o = n[jt(n)], s = o.config, f = o.actionTypeId;
                i.id === o.id && (c = u + a);
                var l = bt(f) === Q ? 0 : s.duration;
                u += s.delay + l
            }
        }), u > 0 ? (0, g.optimizeFloat)(c / u) : 0
    }, e.reduceListToGroup = function (t) {
        var e = t.actionList, n = t.actionItemId, r = t.rawData, i = e.actionItemGroups,
            o = e.continuousParameterGroups, a = [], u = function (t) {
                return a.push((0, v.mergeIn)(t, ["config"], {delay: 0, duration: 0})), t.id === n
            };
        return i && i.some(function (t) {
            return t.actionItems.some(u)
        }), o && o.some(function (t) {
            return t.continuousActionGroups.some(function (t) {
                return t.actionItems.some(u)
            })
        }), (0, v.setIn)(r, ["actionLists"], (0, c.default)({}, e.id, {id: e.id, actionItemGroups: [{actionItems: a}]}))
    }, e.shouldNamespaceEventParameter = function (t, e) {
        var n = e.basedOn;
        return t === E.EventTypeConsts.SCROLLING_IN_VIEW && (n === E.EventBasedOn.ELEMENT || null == n) || t === E.EventTypeConsts.MOUSE_MOVE && n === E.EventBasedOn.ELEMENT
    }, e.getNamespacedParameterId = function (t, e) {
        return t + z + e
    }, e.shouldAllowMediaQuery = function (t, e) {
        if (null == e) return !0;
        return -1 !== t.indexOf(e)
    }, e.mediaQueriesEqual = function (t, e) {
        return (0, h.default)(t && t.sort(), e && e.sort())
    }, e.stringifyTarget = function (t) {
        if ("string" == typeof t) return t;
        var e = t.id, n = void 0 === e ? "" : e, r = t.selector, i = void 0 === r ? "" : r, o = t.useEventTarget;
        return n + Y + i + Y + (void 0 === o ? "" : o)
    }, e.getItemConfigByKey = void 0;
    var f = s(n(250)), l = s(n(251)), d = s(n(257)), p = s(n(34)), v = n(18), h = s(n(114)), E = n(2), g = n(109),
        _ = n(111), y = n(46), m = E.IX2EngineConstants, I = m.BACKGROUND, T = m.TRANSFORM, b = m.TRANSLATE_3D,
        O = m.SCALE_3D, w = m.ROTATE_X, A = m.ROTATE_Y, S = m.ROTATE_Z, x = m.SKEW, R = m.PRESERVE_3D, N = m.FLEX,
        C = m.OPACITY, L = m.FILTER, D = m.WIDTH, P = m.HEIGHT, M = m.BACKGROUND_COLOR, j = m.BORDER_COLOR, F = m.COLOR,
        k = m.CHILDREN, X = m.IMMEDIATE_CHILDREN, G = m.SIBLINGS, V = m.PARENT, U = m.DISPLAY, W = m.WILL_CHANGE,
        B = m.AUTO, H = m.COMMA_DELIMITER, z = m.COLON_DELIMITER, Y = m.BAR_DELIMITER, K = m.RENDER_TRANSFORM,
        Q = m.RENDER_GENERAL, q = m.RENDER_STYLE, $ = m.RENDER_PLUGIN, Z = E.ActionTypeConsts, J = Z.TRANSFORM_MOVE,
        tt = Z.TRANSFORM_SCALE, et = Z.TRANSFORM_ROTATE, nt = Z.TRANSFORM_SKEW, rt = Z.STYLE_OPACITY,
        it = Z.STYLE_FILTER, ot = Z.STYLE_SIZE, at = Z.STYLE_BACKGROUND_COLOR, ut = Z.STYLE_BORDER,
        ct = Z.STYLE_TEXT_COLOR, st = Z.GENERAL_DISPLAY, ft = "OBJECT_VALUE", lt = function (t) {
            return t.trim()
        }, dt = Object.freeze((r = {}, (0, c.default)(r, at, M), (0, c.default)(r, ut, j), (0, c.default)(r, ct, F), r)),
        pt = Object.freeze((i = {}, (0, c.default)(i, y.TRANSFORM_PREFIXED, T), (0, c.default)(i, M, I), (0, c.default)(i, C, C), (0, c.default)(i, L, L), (0, c.default)(i, D, D), (0, c.default)(i, P, P), i)),
        vt = {}, ht = 1;
    var Et = 1;
    var gt = function (t, e) {
        return t === e
    };

    function _t(t) {
        var e = (0, u.default)(t);
        return "string" === e ? {id: t} : null != t && "object" === e ? {
            id: t.id,
            objectId: t.objectId,
            selector: t.selector,
            selectorGuids: t.selectorGuids,
            appliesTo: t.appliesTo,
            useEventTarget: t.useEventTarget
        } : {}
    }

    function yt(t) {
        var e = t.config, n = t.event, r = t.eventTarget, i = t.elementRoot, o = t.elementApi;
        if (!o) throw new Error("IX2 missing elementApi");
        var a = o.getValidDocument, u = o.getQuerySelector, c = o.queryDocument, s = o.getChildElements,
            f = o.getSiblingElements, l = o.matchSelector, d = o.elementContains, v = o.isSiblingNode, h = e.target;
        if (!h) return [];
        var g = _t(h), _ = g.id, m = g.objectId, I = g.selector, T = g.selectorGuids, b = g.appliesTo,
            O = g.useEventTarget;
        if (m) return [vt[m] || (vt[m] = {})];
        if (b === E.EventAppliesTo.PAGE) {
            var w = a(_);
            return w ? [w] : []
        }
        var A, S, x, R = (0, p.default)(n, "action.config.affectedElements", {})[_ || I] || {},
            N = Boolean(R.id || R.selector), C = n && u(_t(n.target));
        if (N ? (A = R.limitAffectedElements, S = C, x = u(R)) : S = x = u({
            id: _,
            selector: I,
            selectorGuids: T
        }), n && O) {
            var L = r && (x || !0 === O) ? [r] : c(C);
            if (x) {
                if (O === V) return c(x).filter(function (t) {
                    return L.some(function (e) {
                        return d(t, e)
                    })
                });
                if (O === k) return c(x).filter(function (t) {
                    return L.some(function (e) {
                        return d(e, t)
                    })
                });
                if (O === G) return c(x).filter(function (t) {
                    return L.some(function (e) {
                        return v(e, t)
                    })
                })
            }
            return L
        }
        return null == S || null == x ? [] : y.IS_BROWSER_ENV && i ? c(x).filter(function (t) {
            return i.contains(t)
        }) : A === k ? c(S, x) : A === X ? s(c(S)).filter(l(x)) : A === G ? f(c(S)).filter(l(x)) : c(x)
    }

    var mt = /px/, It = function (t, e) {
        return e.reduce(function (t, e) {
            return null == t[e.type] && (t[e.type] = wt[e.type]), t
        }, t || {})
    };
    var Tt = function (t, e) {
        return e && (t[e.type] = e.value || 0), t
    };

    function bt(t) {
        return /^TRANSFORM_/.test(t) ? K : /^STYLE_/.test(t) ? q : /^GENERAL_/.test(t) ? Q : /^PLUGIN_/.test(t) ? $ : void 0
    }

    e.getItemConfigByKey = function (t, e, n) {
        if ((0, _.isPluginType)(t)) return (0, _.getPluginConfig)(t)(n, e);
        switch (t) {
            case it:
                var r = (0, d.default)(n.filters, function (t) {
                    return t.type === e
                });
                return r ? r.value : 0;
            default:
                return n[e]
        }
    };
    var Ot = (o = {}, (0, c.default)(o, J, Object.freeze({
        xValue: 0,
        yValue: 0,
        zValue: 0
    })), (0, c.default)(o, tt, Object.freeze({
        xValue: 1,
        yValue: 1,
        zValue: 1
    })), (0, c.default)(o, et, Object.freeze({
        xValue: 0,
        yValue: 0,
        zValue: 0
    })), (0, c.default)(o, nt, Object.freeze({xValue: 0, yValue: 0})), o), wt = Object.freeze({
        blur: 0,
        "hue-rotate": 0,
        invert: 0,
        grayscale: 0,
        saturate: 100,
        sepia: 0,
        contrast: 100,
        brightness: 100
    }), At = function (t, e) {
        var n = (0, d.default)(e.filters, function (e) {
            return e.type === t
        });
        if (n && n.unit) return n.unit;
        switch (t) {
            case"blur":
                return "px";
            case"hue-rotate":
                return "deg";
            default:
                return "%"
        }
    }, St = Object.keys(Ot);
    var xt = /^rgb/, Rt = RegExp("rgba?".concat("\\(([^)]+)\\)"));

    function Nt(t, e, n) {
        if (y.IS_BROWSER_ENV) {
            var r = pt[e];
            if (r) {
                var i = n.getStyle, o = n.setStyle, a = i(t, W);
                if (a) {
                    var u = a.split(H).map(lt);
                    -1 === u.indexOf(r) && o(t, W, u.concat(r).join(H))
                } else o(t, W, r)
            }
        }
    }

    function Ct(t, e, n) {
        if (y.IS_BROWSER_ENV) {
            var r = pt[e];
            if (r) {
                var i = n.getStyle, o = n.setStyle, a = i(t, W);
                a && -1 !== a.indexOf(r) && o(t, W, a.split(H).map(lt).filter(function (t) {
                    return t !== r
                }).join(H))
            }
        }
    }

    function Lt(t) {
        var e = t.actionList, n = void 0 === e ? {} : e, r = t.event, i = t.elementApi, o = n.actionItemGroups,
            a = n.continuousParameterGroups;
        o && o.forEach(function (t) {
            Dt({actionGroup: t, event: r, elementApi: i})
        }), a && a.forEach(function (t) {
            t.continuousActionGroups.forEach(function (t) {
                Dt({actionGroup: t, event: r, elementApi: i})
            })
        })
    }

    function Dt(t) {
        var e = t.actionGroup, n = t.event, r = t.elementApi;
        e.actionItems.forEach(function (t) {
            var e, i = t.actionTypeId, o = t.config;
            e = (0, _.isPluginType)(i) ? (0, _.clearPlugin)(i) : Pt({
                effect: Mt,
                actionTypeId: i,
                elementApi: r
            }), yt({config: o, event: n, elementApi: r}).forEach(e)
        })
    }

    var Pt = function (t) {
        var e = t.effect, n = t.actionTypeId, r = t.elementApi;
        return function (t) {
            switch (n) {
                case J:
                case tt:
                case et:
                case nt:
                    e(t, y.TRANSFORM_PREFIXED, r);
                    break;
                case it:
                    e(t, L, r);
                    break;
                case rt:
                    e(t, C, r);
                    break;
                case ot:
                    e(t, D, r), e(t, P, r);
                    break;
                case at:
                case ut:
                case ct:
                    e(t, dt[n], r);
                    break;
                case st:
                    e(t, U, r)
            }
        }
    };

    function Mt(t, e, n) {
        var r = n.setStyle;
        Ct(t, e, n), r(t, e, ""), e === y.TRANSFORM_PREFIXED && r(t, y.TRANSFORM_STYLE_PREFIXED, "")
    }

    function jt(t) {
        var e = 0, n = 0;
        return t.forEach(function (t, r) {
            var i = t.config, o = i.delay + i.duration;
            o >= e && (e = o, n = r)
        }), n
    }
}, function (t, e) {
    t.exports = function (t, e) {
        return null == t || t != t ? e : t
    }
}, function (t, e, n) {
    var r = n(252), i = n(112), o = n(7), a = n(256), u = n(1);
    t.exports = function (t, e, n) {
        var c = u(t) ? r : a, s = arguments.length < 3;
        return c(t, o(e, 4), n, s, i)
    }
}, function (t, e) {
    t.exports = function (t, e, n, r) {
        var i = -1, o = null == t ? 0 : t.length;
        for (r && o && (n = t[++i]); ++i < o;) n = e(n, t[i], i, t);
        return n
    }
}, function (t, e, n) {
    var r = n(254)();
    t.exports = r
}, function (t, e) {
    t.exports = function (t) {
        return function (e, n, r) {
            for (var i = -1, o = Object(e), a = r(e), u = a.length; u--;) {
                var c = a[t ? u : ++i];
                if (!1 === n(o[c], c, o)) break
            }
            return e
        }
    }
}, function (t, e, n) {
    var r = n(12);
    t.exports = function (t, e) {
        return function (n, i) {
            if (null == n) return n;
            if (!r(n)) return t(n, i);
            for (var o = n.length, a = e ? o : -1, u = Object(n); (e ? a-- : ++a < o) && !1 !== i(u[a], a, u);) ;
            return n
        }
    }
}, function (t, e) {
    t.exports = function (t, e, n, r, i) {
        return i(t, function (t, i, o) {
            n = r ? (r = !1, t) : e(n, t, i, o)
        }), n
    }
}, function (t, e, n) {
    var r = n(87)(n(258));
    t.exports = r
}, function (t, e, n) {
    var r = n(105), i = n(7), o = n(106), a = Math.max, u = Math.min;
    t.exports = function (t, e, n) {
        var c = null == t ? 0 : t.length;
        if (!c) return -1;
        var s = c - 1;
        return void 0 !== n && (s = o(n), s = n < 0 ? a(c + s, 0) : u(s, c - 1)), r(t, i(e, 3), s, !0)
    }
}, function (t, e) {
    t.exports = function (t) {
        return t && t.__esModule ? t : {default: t}
    }
}, function (t, e, n) {
    "use strict";
    var r = Object.prototype.hasOwnProperty;

    function i(t, e) {
        return t === e ? 0 !== t || 0 !== e || 1 / t == 1 / e : t != t && e != e
    }

    t.exports = function (t, e) {
        if (i(t, e)) return !0;
        if ("object" != typeof t || null === t || "object" != typeof e || null === e) return !1;
        var n = Object.keys(t), o = Object.keys(e);
        if (n.length !== o.length) return !1;
        for (var a = 0; a < n.length; a++) if (!r.call(e, n[a]) || !i(t[n[a]], e[n[a]])) return !1;
        return !0
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.ixInstances = void 0;
    var r = n(2), i = n(10), o = n(18), a = r.IX2EngineActionTypes, u = a.IX2_RAW_DATA_IMPORTED,
        c = a.IX2_SESSION_STOPPED, s = a.IX2_INSTANCE_ADDED, f = a.IX2_INSTANCE_STARTED, l = a.IX2_INSTANCE_REMOVED,
        d = a.IX2_ANIMATION_FRAME_CHANGED, p = i.IX2EasingUtils, v = p.optimizeFloat, h = p.applyEasing,
        E = p.createBezierEasing, g = r.IX2EngineConstants.RENDER_GENERAL, _ = i.IX2VanillaUtils,
        y = _.getItemConfigByKey, m = _.getRenderType, I = _.getStyleProp, T = function (t, e) {
            var n = t.position, r = t.parameterId, i = t.actionGroups, a = t.destinationKeys, u = t.smoothing,
                c = t.restingValue, s = t.actionTypeId, f = t.customEasingFn, l = e.payload.parameters,
                d = Math.max(1 - u, .01), p = l[r];
            null == p && (d = 1, p = c);
            var E, g, _, m, I = Math.max(p, 0) || 0, T = v(I - n), b = v(n + T * d), O = 100 * b;
            if (b === n && t.current) return t;
            for (var w = 0, A = i.length; w < A; w++) {
                var S = i[w], x = S.keyframe, R = S.actionItems;
                if (0 === w && (E = R[0]), O >= x) {
                    E = R[0];
                    var N = i[w + 1], C = N && O !== x;
                    g = C ? N.actionItems[0] : null, C && (_ = x / 100, m = (N.keyframe - x) / 100)
                }
            }
            var L = {};
            if (E && !g) for (var D = 0, P = a.length; D < P; D++) {
                var M = a[D];
                L[M] = y(s, M, E.config)
            } else if (E && g && void 0 !== _ && void 0 !== m) for (var j = (b - _) / m, F = E.config.easing, k = h(F, j, f), X = 0, G = a.length; X < G; X++) {
                var V = a[X], U = y(s, V, E.config), W = (y(s, V, g.config) - U) * k + U;
                L[V] = W
            }
            return (0, o.merge)(t, {position: b, current: L})
        }, b = function (t, e) {
            var n = t, r = n.active, i = n.origin, a = n.start, u = n.immediate, c = n.renderType, s = n.verbose,
                f = n.actionItem, l = n.destination, d = n.destinationKeys, p = n.pluginDuration, E = n.instanceDelay,
                _ = n.customEasingFn, y = f.config.easing, m = f.config, I = m.duration, T = m.delay;
            null != p && (I = p), T = null != E ? E : T, c === g ? I = 0 : u && (I = T = 0);
            var b = e.payload.now;
            if (r && i) {
                var O = b - (a + T);
                if (s) {
                    var w = b - a, A = I + T, S = v(Math.min(Math.max(0, w / A), 1));
                    t = (0, o.set)(t, "verboseTimeElapsed", A * S)
                }
                if (O < 0) return t;
                var x = v(Math.min(Math.max(0, O / I), 1)), R = h(y, x, _), N = {}, C = null;
                return d.length && (C = d.reduce(function (t, e) {
                    var n = l[e], r = parseFloat(i[e]) || 0, o = (parseFloat(n) - r) * R + r;
                    return t[e] = o, t
                }, {})), N.current = C, N.position = x, 1 === x && (N.active = !1, N.complete = !0), (0, o.merge)(t, N)
            }
            return t
        };
    e.ixInstances = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
            e = arguments.length > 1 ? arguments[1] : void 0;
        switch (e.type) {
            case u:
                return e.payload.ixInstances || Object.freeze({});
            case c:
                return Object.freeze({});
            case s:
                var n = e.payload, r = n.instanceId, i = n.elementId, a = n.actionItem, p = n.eventId,
                    v = n.eventTarget, h = n.eventStateKey, g = n.actionListId, _ = n.groupIndex, y = n.isCarrier,
                    O = n.origin, w = n.destination, A = n.immediate, S = n.verbose, x = n.continuous,
                    R = n.parameterId, N = n.actionGroups, C = n.smoothing, L = n.restingValue, D = n.pluginInstance,
                    P = n.pluginDuration, M = n.instanceDelay, j = a.actionTypeId, F = m(j), k = I(F, j),
                    X = Object.keys(w).filter(function (t) {
                        return null != w[t]
                    }), G = a.config.easing;
                return (0, o.set)(t, r, {
                    id: r,
                    elementId: i,
                    active: !1,
                    position: 0,
                    start: 0,
                    origin: O,
                    destination: w,
                    destinationKeys: X,
                    immediate: A,
                    verbose: S,
                    current: null,
                    actionItem: a,
                    actionTypeId: j,
                    eventId: p,
                    eventTarget: v,
                    eventStateKey: h,
                    actionListId: g,
                    groupIndex: _,
                    renderType: F,
                    isCarrier: y,
                    styleProp: k,
                    continuous: x,
                    parameterId: R,
                    actionGroups: N,
                    smoothing: C,
                    restingValue: L,
                    pluginInstance: D,
                    pluginDuration: P,
                    instanceDelay: M,
                    customEasingFn: Array.isArray(G) && 4 === G.length ? E(G) : void 0
                });
            case f:
                var V = e.payload, U = V.instanceId, W = V.time;
                return (0, o.mergeIn)(t, [U], {active: !0, complete: !1, start: W});
            case l:
                var B = e.payload.instanceId;
                if (!t[B]) return t;
                for (var H = {}, z = Object.keys(t), Y = z.length, K = 0; K < Y; K++) {
                    var Q = z[K];
                    Q !== B && (H[Q] = t[Q])
                }
                return H;
            case d:
                for (var q = t, $ = Object.keys(t), Z = $.length, J = 0; J < Z; J++) {
                    var tt = $[J], et = t[tt], nt = et.continuous ? T : b;
                    q = (0, o.set)(q, tt, nt(et, e))
                }
                return q;
            default:
                return t
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.ixParameters = void 0;
    var r = n(2).IX2EngineActionTypes, i = r.IX2_RAW_DATA_IMPORTED, o = r.IX2_SESSION_STOPPED,
        a = r.IX2_PARAMETER_CHANGED;
    e.ixParameters = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = arguments.length > 1 ? arguments[1] : void 0;
        switch (e.type) {
            case i:
                return e.payload.ixParameters || {};
            case o:
                return {};
            case a:
                var n = e.payload, r = n.key, u = n.value;
                return t[r] = u, t;
            default:
                return t
        }
    }
}, function (t, e) {
    t.exports = function (t, e) {
        if (null == t) return {};
        var n, r, i = {}, o = Object.keys(t);
        for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]);
        return i
    }
}, function (t, e, n) {
    var r = n(55), i = n(57), o = n(12), a = n(265), u = n(266), c = "[object Map]", s = "[object Set]";
    t.exports = function (t) {
        if (null == t) return 0;
        if (o(t)) return a(t) ? u(t) : t.length;
        var e = i(t);
        return e == c || e == s ? t.size : r(t).length
    }
}, function (t, e, n) {
    var r = n(11), i = n(1), o = n(9), a = "[object String]";
    t.exports = function (t) {
        return "string" == typeof t || !i(t) && o(t) && r(t) == a
    }
}, function (t, e, n) {
    var r = n(267), i = n(268), o = n(269);
    t.exports = function (t) {
        return i(t) ? o(t) : r(t)
    }
}, function (t, e, n) {
    var r = n(104)("length");
    t.exports = r
}, function (t, e) {
    var n = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
    t.exports = function (t) {
        return n.test(t)
    }
}, function (t, e) {
    var n = "[\\ud800-\\udfff]", r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", i = "\\ud83c[\\udffb-\\udfff]",
        o = "[^\\ud800-\\udfff]", a = "(?:\\ud83c[\\udde6-\\uddff]){2}", u = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        c = "(?:" + r + "|" + i + ")" + "?",
        s = "[\\ufe0e\\ufe0f]?" + c + ("(?:\\u200d(?:" + [o, a, u].join("|") + ")[\\ufe0e\\ufe0f]?" + c + ")*"),
        f = "(?:" + [o + r + "?", r, a, u, n].join("|") + ")", l = RegExp(i + "(?=" + i + ")|" + f + s, "g");
    t.exports = function (t) {
        for (var e = l.lastIndex = 0; l.test(t);) ++e;
        return e
    }
}, function (t, e, n) {
    var r = n(7), i = n(271), o = n(272);
    t.exports = function (t, e) {
        return o(t, i(r(e)))
    }
}, function (t, e) {
    var n = "Expected a function";
    t.exports = function (t) {
        if ("function" != typeof t) throw new TypeError(n);
        return function () {
            var e = arguments;
            switch (e.length) {
                case 0:
                    return !t.call(this);
                case 1:
                    return !t.call(this, e[0]);
                case 2:
                    return !t.call(this, e[0], e[1]);
                case 3:
                    return !t.call(this, e[0], e[1], e[2])
            }
            return !t.apply(this, e)
        }
    }
}, function (t, e, n) {
    var r = n(103), i = n(7), o = n(273), a = n(276);
    t.exports = function (t, e) {
        if (null == t) return {};
        var n = r(a(t), function (t) {
            return [t]
        });
        return e = i(e), o(t, n, function (t, n) {
            return e(t, n[0])
        })
    }
}, function (t, e, n) {
    var r = n(58), i = n(274), o = n(35);
    t.exports = function (t, e, n) {
        for (var a = -1, u = e.length, c = {}; ++a < u;) {
            var s = e[a], f = r(t, s);
            n(f, s) && i(c, o(s, t), f)
        }
        return c
    }
}, function (t, e, n) {
    var r = n(275), i = n(35), o = n(52), a = n(6), u = n(20);
    t.exports = function (t, e, n, c) {
        if (!a(t)) return t;
        for (var s = -1, f = (e = i(e, t)).length, l = f - 1, d = t; null != d && ++s < f;) {
            var p = u(e[s]), v = n;
            if ("__proto__" === p || "constructor" === p || "prototype" === p) return t;
            if (s != l) {
                var h = d[p];
                void 0 === (v = c ? c(h, p, d) : void 0) && (v = a(h) ? h : o(e[s + 1]) ? [] : {})
            }
            r(d, p, v), d = d[p]
        }
        return t
    }
}, function (t, e, n) {
    var r = n(116), i = n(47), o = Object.prototype.hasOwnProperty;
    t.exports = function (t, e, n) {
        var a = t[e];
        o.call(t, e) && i(a, n) && (void 0 !== n || e in t) || r(t, e, n)
    }
}, function (t, e, n) {
    var r = n(94), i = n(277), o = n(279);
    t.exports = function (t) {
        return r(t, o, i)
    }
}, function (t, e, n) {
    var r = n(50), i = n(278), o = n(95), a = n(96), u = Object.getOwnPropertySymbols ? function (t) {
        for (var e = []; t;) r(e, o(t)), t = i(t);
        return e
    } : a;
    t.exports = u
}, function (t, e, n) {
    var r = n(99)(Object.getPrototypeOf, Object);
    t.exports = r
}, function (t, e, n) {
    var r = n(97), i = n(280), o = n(12);
    t.exports = function (t) {
        return o(t) ? r(t, !0) : i(t)
    }
}, function (t, e, n) {
    var r = n(6), i = n(56), o = n(281), a = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
        if (!r(t)) return o(t);
        var e = i(t), n = [];
        for (var u in t) ("constructor" != u || !e && a.call(t, u)) && n.push(u);
        return n
    }
}, function (t, e) {
    t.exports = function (t) {
        var e = [];
        if (null != t) for (var n in Object(t)) e.push(n);
        return e
    }
}, function (t, e, n) {
    var r = n(55), i = n(57), o = n(33), a = n(1), u = n(12), c = n(51), s = n(56), f = n(53), l = "[object Map]",
        d = "[object Set]", p = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
        if (null == t) return !0;
        if (u(t) && (a(t) || "string" == typeof t || "function" == typeof t.splice || c(t) || f(t) || o(t))) return !t.length;
        var e = i(t);
        if (e == l || e == d) return !t.size;
        if (s(t)) return !r(t).length;
        for (var n in t) if (p.call(t, n)) return !1;
        return !0
    }
}, function (t, e, n) {
    var r = n(116), i = n(113), o = n(7);
    t.exports = function (t, e) {
        var n = {};
        return e = o(e, 3), i(t, function (t, i, o) {
            r(n, i, e(t, i, o))
        }), n
    }
}, function (t, e, n) {
    var r = n(285), i = n(112), o = n(286), a = n(1);
    t.exports = function (t, e) {
        return (a(t) ? r : i)(t, o(e))
    }
}, function (t, e) {
    t.exports = function (t, e) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t);) ;
        return t
    }
}, function (t, e, n) {
    var r = n(60);
    t.exports = function (t) {
        return "function" == typeof t ? t : r
    }
}, function (t, e, n) {
    var r = n(288), i = n(6), o = "Expected a function";
    t.exports = function (t, e, n) {
        var a = !0, u = !0;
        if ("function" != typeof t) throw new TypeError(o);
        return i(n) && (a = "leading" in n ? !!n.leading : a, u = "trailing" in n ? !!n.trailing : u), r(t, e, {
            leading: a,
            maxWait: e,
            trailing: u
        })
    }
}, function (t, e, n) {
    var r = n(6), i = n(289), o = n(61), a = "Expected a function", u = Math.max, c = Math.min;
    t.exports = function (t, e, n) {
        var s, f, l, d, p, v, h = 0, E = !1, g = !1, _ = !0;
        if ("function" != typeof t) throw new TypeError(a);

        function y(e) {
            var n = s, r = f;
            return s = f = void 0, h = e, d = t.apply(r, n)
        }

        function m(t) {
            var n = t - v;
            return void 0 === v || n >= e || n < 0 || g && t - h >= l
        }

        function I() {
            var t = i();
            if (m(t)) return T(t);
            p = setTimeout(I, function (t) {
                var n = e - (t - v);
                return g ? c(n, l - (t - h)) : n
            }(t))
        }

        function T(t) {
            return p = void 0, _ && s ? y(t) : (s = f = void 0, d)
        }

        function b() {
            var t = i(), n = m(t);
            if (s = arguments, f = this, v = t, n) {
                if (void 0 === p) return function (t) {
                    return h = t, p = setTimeout(I, e), E ? y(t) : d
                }(v);
                if (g) return clearTimeout(p), p = setTimeout(I, e), y(v)
            }
            return void 0 === p && (p = setTimeout(I, e)), d
        }

        return e = o(e) || 0, r(n) && (E = !!n.leading, l = (g = "maxWait" in n) ? u(o(n.maxWait) || 0, e) : l, _ = "trailing" in n ? !!n.trailing : _), b.cancel = function () {
            void 0 !== p && clearTimeout(p), h = 0, s = v = f = p = void 0
        }, b.flush = function () {
            return void 0 === p ? d : T(i())
        }, b
    }
}, function (t, e, n) {
    var r = n(4);
    t.exports = function () {
        return r.Date.now()
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var r = n(291);
    Object.keys(r).forEach(function (t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0, get: function () {
                return r[t]
            }
        })
    })
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.isQuickEffect = void 0;
    var r = n(2), i = Object.keys(r.QuickEffectIds);
    e.isQuickEffect = function (t) {
        return i.includes(t)
    }
}, function (t, e, n) {
    "use strict";
    var r = n(0)(n(21));
    Object.defineProperty(e, "__esModule", {value: !0}), e.setStyle = function (t, e, n) {
        t.style[e] = n
    }, e.getStyle = function (t, e) {
        return t.style[e]
    }, e.getProperty = function (t, e) {
        return t[e]
    }, e.matchSelector = function (t) {
        return function (e) {
            return e[a](t)
        }
    }, e.getQuerySelector = function (t) {
        var e = t.id, n = t.selector;
        if (e) {
            var r = e;
            if (-1 !== e.indexOf(c)) {
                var i = e.split(c), o = i[0];
                if (r = i[1], o !== document.documentElement.getAttribute(l)) return null
            }
            return '[data-w-id^="'.concat(r, '"]')
        }
        return n
    }, e.getValidDocument = function (t) {
        if (null == t || t === document.documentElement.getAttribute(l)) return document;
        return null
    }, e.queryDocument = function (t, e) {
        return Array.prototype.slice.call(document.querySelectorAll(e ? t + " " + e : t))
    }, e.elementContains = function (t, e) {
        return t.contains(e)
    }, e.isSiblingNode = function (t, e) {
        return t !== e && t.parentNode === e.parentNode
    }, e.getChildElements = function (t) {
        for (var e = [], n = 0, r = (t || []).length; n < r; n++) {
            var i = t[n].children, o = i.length;
            if (o) for (var a = 0; a < o; a++) e.push(i[a])
        }
        return e
    }, e.getSiblingElements = function () {
        for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = [], n = [], r = 0, i = t.length; r < i; r++) {
            var o = t[r].parentNode;
            if (o && o.children && o.children.length && -1 === n.indexOf(o)) {
                n.push(o);
                for (var a = o.firstElementChild; null != a;) -1 === t.indexOf(a) && e.push(a), a = a.nextElementSibling
            }
        }
        return e
    }, e.getRefType = function (t) {
        if (null != t && "object" == (0, r.default)(t)) return t instanceof Element ? s : f;
        return null
    }, e.getClosestElement = void 0;
    var i = n(10), o = n(2), a = i.IX2BrowserSupport.ELEMENT_MATCHES, u = o.IX2EngineConstants, c = u.IX2_ID_DELIMITER,
        s = u.HTML_ELEMENT, f = u.PLAIN_OBJECT, l = u.WF_PAGE;
    var d = Element.prototype.closest ? function (t, e) {
        return document.documentElement.contains(t) ? t.closest(e) : null
    } : function (t, e) {
        if (!document.documentElement.contains(t)) return null;
        var n = t;
        do {
            if (n[a] && n[a](e)) return n;
            n = n.parentNode
        } while (null != n);
        return null
    };
    e.getClosestElement = d
}, function (t, e, n) {
    "use strict";
    var r, i = n(0), o = i(n(26)), a = i(n(21)), u = n(0);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
    var c, s, f, l = u(n(27)), d = u(n(294)), p = u(n(34)), v = u(n(313)), h = n(2), E = n(115), g = n(62), _ = n(10),
        y = h.EventTypeConsts, m = y.MOUSE_CLICK, I = y.MOUSE_SECOND_CLICK, T = y.MOUSE_DOWN, b = y.MOUSE_UP,
        O = y.MOUSE_OVER, w = y.MOUSE_OUT, A = y.DROPDOWN_CLOSE, S = y.DROPDOWN_OPEN, x = y.SLIDER_ACTIVE,
        R = y.SLIDER_INACTIVE, N = y.TAB_ACTIVE, C = y.TAB_INACTIVE, L = y.NAVBAR_CLOSE, D = y.NAVBAR_OPEN,
        P = y.MOUSE_MOVE, M = y.PAGE_SCROLL_DOWN, j = y.SCROLL_INTO_VIEW, F = y.SCROLL_OUT_OF_VIEW,
        k = y.PAGE_SCROLL_UP, X = y.SCROLLING_IN_VIEW, G = y.PAGE_FINISH, V = y.ECOMMERCE_CART_CLOSE,
        U = y.ECOMMERCE_CART_OPEN, W = y.PAGE_START, B = y.PAGE_SCROLL, H = "COMPONENT_ACTIVE",
        z = "COMPONENT_INACTIVE", Y = h.IX2EngineConstants.COLON_DELIMITER,
        K = _.IX2VanillaUtils.getNamespacedParameterId, Q = function (t) {
            return function (e) {
                return !("object" !== (0, a.default)(e) || !t(e)) || e
            }
        }, q = Q(function (t) {
            return t.element === t.nativeEvent.target
        }), $ = Q(function (t) {
            var e = t.element, n = t.nativeEvent;
            return e.contains(n.target)
        }), Z = (0, d.default)([q, $]), J = function (t, e) {
            if (e) {
                var n = t.getState().ixData.events[e];
                if (n && !at[n.eventTypeId]) return n
            }
            return null
        }, tt = function (t, e) {
            var n = t.store, r = t.event, i = t.element, o = t.eventStateKey, a = r.action, u = r.id, c = a.config,
                s = c.actionListId, f = c.autoStopEventId, l = J(n, f);
            return l && (0, E.stopActionGroup)({
                store: n,
                eventId: f,
                eventTarget: i,
                eventStateKey: f + Y + o.split(Y)[1],
                actionListId: (0, p.default)(l, "action.config.actionListId")
            }), (0, E.stopActionGroup)({
                store: n,
                eventId: u,
                eventTarget: i,
                eventStateKey: o,
                actionListId: s
            }), (0, E.startActionGroup)({store: n, eventId: u, eventTarget: i, eventStateKey: o, actionListId: s}), e
        }, et = function (t, e) {
            return function (n, r) {
                return !0 === t(n, r) ? e(n, r) : r
            }
        }, nt = {handler: et(Z, tt)}, rt = (0, l.default)({}, nt, {types: [H, z].join(" ")}),
        it = [{target: window, types: "resize orientationchange", throttle: !0}, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }], ot = {types: it}, at = {PAGE_START: W, PAGE_FINISH: G},
        ut = (c = void 0 !== window.pageXOffset, s = "CSS1Compat" === document.compatMode ? document.documentElement : document.body, function () {
            return {
                scrollLeft: c ? window.pageXOffset : s.scrollLeft,
                scrollTop: c ? window.pageYOffset : s.scrollTop,
                stiffScrollTop: (0, v.default)(c ? window.pageYOffset : s.scrollTop, 0, s.scrollHeight - window.innerHeight),
                scrollWidth: s.scrollWidth,
                scrollHeight: s.scrollHeight,
                clientWidth: s.clientWidth,
                clientHeight: s.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            }
        }), ct = function (t) {
            var e = t.element, n = t.nativeEvent, r = n.type, i = n.target, o = n.relatedTarget, a = e.contains(i);
            if ("mouseover" === r && a) return !0;
            var u = e.contains(o);
            return !("mouseout" !== r || !a || !u)
        }, st = function (t) {
            var e, n, r = t.element, i = t.event.config, o = ut(), a = o.clientWidth, u = o.clientHeight,
                c = i.scrollOffsetValue, s = "PX" === i.scrollOffsetUnit ? c : u * (c || 0) / 100;
            return e = r.getBoundingClientRect(), n = {
                left: 0,
                top: s,
                right: a,
                bottom: u - s
            }, !(e.left > n.right || e.right < n.left || e.top > n.bottom || e.bottom < n.top)
        }, ft = function (t) {
            return function (e, n) {
                var r = e.nativeEvent.type, i = -1 !== [H, z].indexOf(r) ? r === H : n.isActive,
                    o = (0, l.default)({}, n, {isActive: i});
                return n && o.isActive === n.isActive ? o : t(e, o) || o
            }
        }, lt = function (t) {
            return function (e, n) {
                var r = {elementHovered: ct(e)};
                return (n ? r.elementHovered !== n.elementHovered : r.elementHovered) && t(e, r) || r
            }
        }, dt = function (t) {
            return function (e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = ut(), i = r.stiffScrollTop,
                    o = r.scrollHeight, a = r.innerHeight, u = e.event, c = u.config, s = u.eventTypeId,
                    f = c.scrollOffsetValue, d = "PX" === c.scrollOffsetUnit, p = o - a, v = Number((i / p).toFixed(2));
                if (n && n.percentTop === v) return n;
                var h, E, g = (d ? f : a * (f || 0) / 100) / p, _ = 0;
                n && (h = v > n.percentTop, _ = (E = n.scrollingDown !== h) ? v : n.anchorTop);
                var y = s === M ? v >= _ + g : v <= _ - g,
                    m = (0, l.default)({}, n, {percentTop: v, inBounds: y, anchorTop: _, scrollingDown: h});
                return n && y && (E || m.inBounds !== n.inBounds) && t(e, m) || m
            }
        }, pt = function (t) {
            return function (e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {clickCount: 0},
                    r = {clickCount: n.clickCount % 2 + 1};
                return r.clickCount !== n.clickCount && t(e, r) || r
            }
        }, vt = function () {
            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            return (0, l.default)({}, rt, {
                handler: et(t ? Z : q, ft(function (t, e) {
                    return e.isActive ? nt.handler(t, e) : e
                }))
            })
        }, ht = function () {
            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            return (0, l.default)({}, rt, {
                handler: et(t ? Z : q, ft(function (t, e) {
                    return e.isActive ? e : nt.handler(t, e)
                }))
            })
        }, Et = (0, l.default)({}, ot, {
            handler: (f = function (t, e) {
                var n = e.elementVisible, r = t.event;
                return !t.store.getState().ixData.events[r.action.config.autoStopEventId] && e.triggered ? e : r.eventTypeId === j === n ? (tt(t), (0, l.default)({}, e, {triggered: !0})) : e
            }, function (t, e) {
                var n = (0, l.default)({}, e, {elementVisible: st(t)});
                return (e ? n.elementVisible !== e.elementVisible : n.elementVisible) && f(t, n) || n
            })
        }),
        gt = (r = {}, (0, o.default)(r, x, vt()), (0, o.default)(r, R, ht()), (0, o.default)(r, S, vt()), (0, o.default)(r, A, ht()), (0, o.default)(r, D, vt(!1)), (0, o.default)(r, L, ht(!1)), (0, o.default)(r, N, vt()), (0, o.default)(r, C, ht()), (0, o.default)(r, U, {
            types: "ecommerce-cart-open",
            handler: et(Z, tt)
        }), (0, o.default)(r, V, {
            types: "ecommerce-cart-close",
            handler: et(Z, tt)
        }), (0, o.default)(r, m, {
            types: "click", handler: et(Z, pt(function (t, e) {
                var n, r, i, o = e.clickCount;
                r = (n = t).store, i = n.event.action.config.autoStopEventId, Boolean(J(r, i)) ? 1 === o && tt(t) : tt(t)
            }))
        }), (0, o.default)(r, I, {
            types: "click", handler: et(Z, pt(function (t, e) {
                2 === e.clickCount && tt(t)
            }))
        }), (0, o.default)(r, T, (0, l.default)({}, nt, {types: "mousedown"})), (0, o.default)(r, b, (0, l.default)({}, nt, {types: "mouseup"})), (0, o.default)(r, O, {
            types: "mouseover mouseout",
            handler: et(Z, lt(function (t, e) {
                e.elementHovered && tt(t)
            }))
        }), (0, o.default)(r, w, {
            types: "mouseover mouseout", handler: et(Z, lt(function (t, e) {
                e.elementHovered || tt(t)
            }))
        }), (0, o.default)(r, P, {
            types: "mousemove mouseout scroll", handler: function (t) {
                var e = t.store, n = t.element, r = t.eventConfig, i = t.nativeEvent, o = t.eventStateKey,
                    a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        clientX: 0,
                        clientY: 0,
                        pageX: 0,
                        pageY: 0
                    }, u = r.basedOn, c = r.selectedAxis, s = r.continuousParameterGroupId, f = r.reverse,
                    l = r.restingState, d = void 0 === l ? 0 : l, p = i.clientX, v = void 0 === p ? a.clientX : p,
                    E = i.clientY, _ = void 0 === E ? a.clientY : E, y = i.pageX, m = void 0 === y ? a.pageX : y,
                    I = i.pageY, T = void 0 === I ? a.pageY : I, b = "X_AXIS" === c, O = "mouseout" === i.type,
                    w = d / 100, A = s, S = !1;
                switch (u) {
                    case h.EventBasedOn.VIEWPORT:
                        w = b ? Math.min(v, window.innerWidth) / window.innerWidth : Math.min(_, window.innerHeight) / window.innerHeight;
                        break;
                    case h.EventBasedOn.PAGE:
                        var x = ut(), R = x.scrollLeft, N = x.scrollTop, C = x.scrollWidth, L = x.scrollHeight;
                        w = b ? Math.min(R + m, C) / C : Math.min(N + T, L) / L;
                        break;
                    case h.EventBasedOn.ELEMENT:
                    default:
                        A = K(o, s);
                        var D = 0 === i.type.indexOf("mouse");
                        if (D && !0 !== Z({element: n, nativeEvent: i})) break;
                        var P = n.getBoundingClientRect(), M = P.left, j = P.top, F = P.width, k = P.height;
                        if (!D && !function (t, e) {
                            return t.left > e.left && t.left < e.right && t.top > e.top && t.top < e.bottom
                        }({left: v, top: _}, P)) break;
                        S = !0, w = b ? (v - M) / F : (_ - j) / k
                }
                return O && (w > .95 || w < .05) && (w = Math.round(w)), (u !== h.EventBasedOn.ELEMENT || S || S !== a.elementHovered) && (w = f ? 1 - w : w, e.dispatch((0, g.parameterChanged)(A, w))), {
                    elementHovered: S,
                    clientX: v,
                    clientY: _,
                    pageX: m,
                    pageY: T
                }
            }
        }), (0, o.default)(r, B, {
            types: it, handler: function (t) {
                var e = t.store, n = t.eventConfig, r = n.continuousParameterGroupId, i = n.reverse, o = ut(),
                    a = o.scrollTop / (o.scrollHeight - o.clientHeight);
                a = i ? 1 - a : a, e.dispatch((0, g.parameterChanged)(r, a))
            }
        }), (0, o.default)(r, X, {
            types: it, handler: function (t) {
                var e = t.element, n = t.store, r = t.eventConfig, i = t.eventStateKey,
                    o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {scrollPercent: 0}, a = ut(),
                    u = a.scrollLeft, c = a.scrollTop, s = a.scrollWidth, f = a.scrollHeight, l = a.clientHeight,
                    d = r.basedOn, p = r.selectedAxis, v = r.continuousParameterGroupId, E = r.startsEntering,
                    _ = r.startsExiting, y = r.addEndOffset, m = r.addStartOffset, I = r.addOffsetValue,
                    T = void 0 === I ? 0 : I, b = r.endOffsetValue, O = void 0 === b ? 0 : b, w = "X_AXIS" === p;
                if (d === h.EventBasedOn.VIEWPORT) {
                    var A = w ? u / s : c / f;
                    return A !== o.scrollPercent && n.dispatch((0, g.parameterChanged)(v, A)), {scrollPercent: A}
                }
                var S = K(i, v), x = e.getBoundingClientRect(), R = (m ? T : 0) / 100, N = (y ? O : 0) / 100;
                R = E ? R : 1 - R, N = _ ? N : 1 - N;
                var C = x.top + Math.min(x.height * R, l), L = x.top + x.height * N - C, D = Math.min(l + L, f),
                    P = Math.min(Math.max(0, l - C), D) / D;
                return P !== o.scrollPercent && n.dispatch((0, g.parameterChanged)(S, P)), {scrollPercent: P}
            }
        }), (0, o.default)(r, j, Et), (0, o.default)(r, F, Et), (0, o.default)(r, M, (0, l.default)({}, ot, {
            handler: dt(function (t, e) {
                e.scrollingDown && tt(t)
            })
        })), (0, o.default)(r, k, (0, l.default)({}, ot, {
            handler: dt(function (t, e) {
                e.scrollingDown || tt(t)
            })
        })), (0, o.default)(r, G, {
            types: "readystatechange IX2_PAGE_UPDATE", handler: et(q, function (t) {
                return function (e, n) {
                    var r = {finished: "complete" === document.readyState};
                    return !r.finished || n && n.finshed || t(e), r
                }
            }(tt))
        }), (0, o.default)(r, W, {
            types: "readystatechange IX2_PAGE_UPDATE", handler: et(q, function (t) {
                return function (e, n) {
                    return n || t(e), {started: !0}
                }
            }(tt))
        }), r);
    e.default = gt
}, function (t, e, n) {
    var r = n(295)();
    t.exports = r
}, function (t, e, n) {
    var r = n(63), i = n(296), o = n(119), a = n(120), u = n(1), c = n(309), s = "Expected a function", f = 8, l = 32,
        d = 128, p = 256;
    t.exports = function (t) {
        return i(function (e) {
            var n = e.length, i = n, v = r.prototype.thru;
            for (t && e.reverse(); i--;) {
                var h = e[i];
                if ("function" != typeof h) throw new TypeError(s);
                if (v && !E && "wrapper" == a(h)) var E = new r([], !0)
            }
            for (i = E ? i : n; ++i < n;) {
                h = e[i];
                var g = a(h), _ = "wrapper" == g ? o(h) : void 0;
                E = _ && c(_[0]) && _[1] == (d | f | l | p) && !_[4].length && 1 == _[9] ? E[a(_[0])].apply(E, _[3]) : 1 == h.length && c(h) ? E[g]() : E.thru(h)
            }
            return function () {
                var t = arguments, r = t[0];
                if (E && 1 == t.length && u(r)) return E.plant(r).value();
                for (var i = 0, o = n ? e[i].apply(this, t) : r; ++i < n;) o = e[i].call(this, o);
                return o
            }
        })
    }
}, function (t, e, n) {
    var r = n(297), i = n(300), o = n(302);
    t.exports = function (t) {
        return o(i(t, void 0, r), t + "")
    }
}, function (t, e, n) {
    var r = n(298);
    t.exports = function (t) {
        return null != t && t.length ? r(t, 1) : []
    }
}, function (t, e, n) {
    var r = n(50), i = n(299);
    t.exports = function t(e, n, o, a, u) {
        var c = -1, s = e.length;
        for (o || (o = i), u || (u = []); ++c < s;) {
            var f = e[c];
            n > 0 && o(f) ? n > 1 ? t(f, n - 1, o, a, u) : r(u, f) : a || (u[u.length] = f)
        }
        return u
    }
}, function (t, e, n) {
    var r = n(19), i = n(33), o = n(1), a = r ? r.isConcatSpreadable : void 0;
    t.exports = function (t) {
        return o(t) || i(t) || !!(a && t && t[a])
    }
}, function (t, e, n) {
    var r = n(301), i = Math.max;
    t.exports = function (t, e, n) {
        return e = i(void 0 === e ? t.length - 1 : e, 0), function () {
            for (var o = arguments, a = -1, u = i(o.length - e, 0), c = Array(u); ++a < u;) c[a] = o[e + a];
            a = -1;
            for (var s = Array(e + 1); ++a < e;) s[a] = o[a];
            return s[e] = n(c), r(t, this, s)
        }
    }
}, function (t, e) {
    t.exports = function (t, e, n) {
        switch (n.length) {
            case 0:
                return t.call(e);
            case 1:
                return t.call(e, n[0]);
            case 2:
                return t.call(e, n[0], n[1]);
            case 3:
                return t.call(e, n[0], n[1], n[2])
        }
        return t.apply(e, n)
    }
}, function (t, e, n) {
    var r = n(303), i = n(305)(r);
    t.exports = i
}, function (t, e, n) {
    var r = n(304), i = n(117), o = n(60), a = i ? function (t, e) {
        return i(t, "toString", {configurable: !0, enumerable: !1, value: r(e), writable: !0})
    } : o;
    t.exports = a
}, function (t, e) {
    t.exports = function (t) {
        return function () {
            return t
        }
    }
}, function (t, e) {
    var n = 800, r = 16, i = Date.now;
    t.exports = function (t) {
        var e = 0, o = 0;
        return function () {
            var a = i(), u = r - (a - o);
            if (o = a, u > 0) {
                if (++e >= n) return arguments[0]
            } else e = 0;
            return t.apply(void 0, arguments)
        }
    }
}, function (t, e, n) {
    var r = n(100), i = r && new r;
    t.exports = i
}, function (t, e) {
    t.exports = function () {
    }
}, function (t, e) {
    t.exports = {}
}, function (t, e, n) {
    var r = n(65), i = n(119), o = n(120), a = n(310);
    t.exports = function (t) {
        var e = o(t), n = a[e];
        if ("function" != typeof n || !(e in r.prototype)) return !1;
        if (t === n) return !0;
        var u = i(n);
        return !!u && t === u[0]
    }
}, function (t, e, n) {
    var r = n(65), i = n(63), o = n(64), a = n(1), u = n(9), c = n(311), s = Object.prototype.hasOwnProperty;

    function f(t) {
        if (u(t) && !a(t) && !(t instanceof r)) {
            if (t instanceof i) return t;
            if (s.call(t, "__wrapped__")) return c(t)
        }
        return new i(t)
    }

    f.prototype = o.prototype, f.prototype.constructor = f, t.exports = f
}, function (t, e, n) {
    var r = n(65), i = n(63), o = n(312);
    t.exports = function (t) {
        if (t instanceof r) return t.clone();
        var e = new i(t.__wrapped__, t.__chain__);
        return e.__actions__ = o(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e
    }
}, function (t, e) {
    t.exports = function (t, e) {
        var n = -1, r = t.length;
        for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
        return e
    }
}, function (t, e, n) {
    var r = n(314), i = n(61);
    t.exports = function (t, e, n) {
        return void 0 === n && (n = e, e = void 0), void 0 !== n && (n = (n = i(n)) == n ? n : 0), void 0 !== e && (e = (e = i(e)) == e ? e : 0), r(i(t), e, n)
    }
}, function (t, e) {
    t.exports = function (t, e, n) {
        return t == t && (void 0 !== n && (t = t <= n ? t : n), void 0 !== e && (t = t >= e ? t : e)), t
    }
}, function (t, e, n) {
    "use strict";
    var r = n(5);
    r.define("links", t.exports = function (t, e) {
        var n, i, o, a = {}, u = t(window), c = r.env(), s = window.location, f = document.createElement("a"),
            l = "w--current", d = /index\.(html|php)$/, p = /\/$/;

        function v(e) {
            var r = n && e.getAttribute("href-disabled") || e.getAttribute("href");
            if (f.href = r, !(r.indexOf(":") >= 0)) {
                var a = t(e);
                if (f.hash.length > 1 && f.host + f.pathname === s.host + s.pathname) {
                    if (!/^#[a-zA-Z0-9\-\_]+$/.test(f.hash)) return;
                    var u = t(f.hash);
                    u.length && i.push({link: a, sec: u, active: !1})
                } else if ("#" !== r && "" !== r) {
                    var c = f.href === s.href || r === o || d.test(r) && p.test(o);
                    E(a, l, c)
                }
            }
        }

        function h() {
            var t = u.scrollTop(), n = u.height();
            e.each(i, function (e) {
                var r = e.link, i = e.sec, o = i.offset().top, a = i.outerHeight(), u = .5 * n,
                    c = i.is(":visible") && o + a - u >= t && o + u <= t + n;
                e.active !== c && (e.active = c, E(r, l, c))
            })
        }

        function E(t, e, n) {
            var r = t.hasClass(e);
            n && r || (n || r) && (n ? t.addClass(e) : t.removeClass(e))
        }

        return a.ready = a.design = a.preview = function () {
            n = c && r.env("design"), o = r.env("slug") || s.pathname || "", r.scroll.off(h), i = [];
            for (var t = document.links, e = 0; e < t.length; ++e) v(t[e]);
            i.length && (r.scroll.on(h), h())
        }, a
    })
}, function (t, e, n) {
    "use strict";
    var r = n(5);
    r.define("scroll", t.exports = function (t) {
        var e, n = {CLICK_EMPTY: "click.wf-empty-link", CLICK_SCROLL: "click.wf-scroll"}, i = t(document), o = window,
            a = o.location, u = function () {
                try {
                    return Boolean(o.frameElement)
                } catch (t) {
                    return !0
                }
            }() ? null : o.history, c = /^[a-zA-Z0-9][\w:.-]*$/, s = 'a[href="#"]',
            f = 'a[href*="#"]:not(.w-tab-link):not(' + s + ")";

        function l(n) {
            if (!(r.env("design") || window.$.mobile && t(n.currentTarget).hasClass("ui-link"))) {
                var i = this.href.split("#"), s = i[0] === e ? i[1] : null;
                s && function (e, n) {
                    if (!c.test(e)) return;
                    var i = t("#" + e);
                    if (!i.length) return;
                    n && (n.preventDefault(), n.stopPropagation());
                    if (a.hash !== e && u && u.pushState && (!r.env.chrome || "file:" !== a.protocol)) {
                        var s = u.state && u.state.hash;
                        s !== e && u.pushState({hash: e}, "", "#" + e)
                    }
                    var f = r.env("editor") ? ".w-editor-body" : "body",
                        l = t("header, " + f + " > .header, " + f + " > .w-nav:not([data-no-scroll])"),
                        d = "fixed" === l.css("position") ? l.outerHeight() : 0;
                    o.setTimeout(function () {
                        !function (e, n) {
                            var r = t(o).scrollTop(), i = e.offset().top - n;
                            if ("mid" === e.data("scroll")) {
                                var a = t(o).height() - n, u = e.outerHeight();
                                u < a && (i -= Math.round((a - u) / 2))
                            }
                            var c = 1;
                            t("body").add(e).each(function () {
                                var e = parseFloat(t(this).attr("data-scroll-time"), 10);
                                !isNaN(e) && (0 === e || e > 0) && (c = e)
                            }), Date.now || (Date.now = function () {
                                return (new Date).getTime()
                            });
                            var s = Date.now(),
                                f = o.requestAnimationFrame || o.mozRequestAnimationFrame || o.webkitRequestAnimationFrame || function (t) {
                                    o.setTimeout(t, 15)
                                }, l = (472.143 * Math.log(Math.abs(r - i) + 125) - 2e3) * c;
                            !function t() {
                                var e = Date.now() - s;
                                o.scroll(0, function (t, e, n, r) {
                                    if (n > r) return e;
                                    return t + (e - t) * (i = n / r, i < .5 ? 4 * i * i * i : (i - 1) * (2 * i - 2) * (2 * i - 2) + 1);
                                    var i
                                }(r, i, e, l)), e <= l && f(t)
                            }()
                        }(i, d)
                    }, n ? 0 : 300)
                }(s, n)
            }
        }

        return {
            ready: function () {
                var t = n.CLICK_EMPTY, r = n.CLICK_SCROLL;
                e = a.href.split("#")[0], i.on(r, f, l), i.on(t, s, function (t) {
                    t.preventDefault()
                })
            }
        }
    })
}, function (t, e, n) {
    "use strict";
    n(5).define("touch", t.exports = function (t) {
        var e = {}, n = window.getSelection;

        function r(e) {
            var r, i, o = !1, a = !1, u = Math.min(Math.round(.04 * window.innerWidth), 40);

            function c(t) {
                var e = t.touches;
                e && e.length > 1 || (o = !0, e ? (a = !0, r = e[0].clientX) : r = t.clientX, i = r)
            }

            function s(e) {
                if (o) {
                    if (a && "mousemove" === e.type) return e.preventDefault(), void e.stopPropagation();
                    var r = e.touches, c = r ? r[0].clientX : e.clientX, s = c - i;
                    i = c, Math.abs(s) > u && n && "" === String(n()) && (!function (e, n, r) {
                        var i = t.Event(e, {originalEvent: n});
                        t(n.target).trigger(i, r)
                    }("swipe", e, {direction: s > 0 ? "right" : "left"}), l())
                }
            }

            function f(t) {
                if (o) return o = !1, a && "mouseup" === t.type ? (t.preventDefault(), t.stopPropagation(), void (a = !1)) : void 0
            }

            function l() {
                o = !1
            }

            e.addEventListener("touchstart", c, !1), e.addEventListener("touchmove", s, !1), e.addEventListener("touchend", f, !1), e.addEventListener("touchcancel", l, !1), e.addEventListener("mousedown", c, !1), e.addEventListener("mousemove", s, !1), e.addEventListener("mouseup", f, !1), e.addEventListener("mouseout", l, !1), this.destroy = function () {
                e.removeEventListener("touchstart", c, !1), e.removeEventListener("touchmove", s, !1), e.removeEventListener("touchend", f, !1), e.removeEventListener("touchcancel", l, !1), e.removeEventListener("mousedown", c, !1), e.removeEventListener("mousemove", s, !1), e.removeEventListener("mouseup", f, !1), e.removeEventListener("mouseout", l, !1), e = null
            }
        }

        return t.event.special.tap = {bindType: "click", delegateType: "click"}, e.init = function (e) {
            return (e = "string" == typeof e ? t(e).get(0) : e) ? new r(e) : null
        }, e.instance = e.init(document), e
    })
}, function (t, e, n) {
    "use strict";
    var r = n(0)(n(319)), i = n(5);
    i.define("forms", t.exports = function (t, e) {
        var n, o, a, u, c, s = {}, f = t(document), l = window.location, d = window.XDomainRequest && !window.atob,
            p = ".w-form", v = /e(-)?mail/i, h = /^\S+@\S+$/, E = window.alert, g = i.env(),
            _ = /list-manage[1-9]?.com/i, y = e.debounce(function () {
                E("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
            }, 100);

        function m(e, n) {
            var r = t(n), i = t.data(n, p);
            i || (i = t.data(n, p, {form: r})), I(i);
            var a = r.closest("div.w-form");
            i.done = a.find("> .w-form-done"), i.fail = a.find("> .w-form-fail"), i.fileUploads = a.find(".w-file-upload"), i.fileUploads.each(function (e) {
                !function (e, n) {
                    if (!n.fileUploads || !n.fileUploads[e]) return;
                    var r, i = t(n.fileUploads[e]), o = i.find("> .w-file-upload-default"),
                        a = i.find("> .w-file-upload-uploading"), u = i.find("> .w-file-upload-success"),
                        s = i.find("> .w-file-upload-error"), f = o.find(".w-file-upload-input"),
                        l = o.find(".w-file-upload-label"), d = l.children(), p = s.find(".w-file-upload-error-msg"),
                        v = u.find(".w-file-upload-file"), h = u.find(".w-file-remove-link"),
                        E = v.find(".w-file-upload-file-name"), _ = p.attr("data-w-size-error"),
                        y = p.attr("data-w-type-error"), m = p.attr("data-w-generic-error");
                    if (g) f.on("click", function (t) {
                        t.preventDefault()
                    }), l.on("click", function (t) {
                        t.preventDefault()
                    }), d.on("click", function (t) {
                        t.preventDefault()
                    }); else {
                        h.on("click", function () {
                            f.removeAttr("data-value"), f.val(""), E.html(""), o.toggle(!0), u.toggle(!1)
                        }), f.on("change", function (i) {
                            (r = i.target && i.target.files && i.target.files[0]) && (o.toggle(!1), s.toggle(!1), a.toggle(!0), E.text(r.name), S() || T(n), n.fileUploads[e].uploading = !0, function (e, n) {
                                var r = {name: e.name, size: e.size};
                                t.ajax({
                                    type: "POST",
                                    url: c,
                                    data: r,
                                    dataType: "json",
                                    crossDomain: !0
                                }).done(function (t) {
                                    n(null, t)
                                }).fail(function (t) {
                                    n(t)
                                })
                            }(r, w))
                        });
                        var b = l.outerHeight();
                        f.height(b), f.width(1)
                    }

                    function O(t) {
                        var r = t.responseJSON && t.responseJSON.msg, i = m;
                        "string" == typeof r && 0 === r.indexOf("InvalidFileTypeError") ? i = y : "string" == typeof r && 0 === r.indexOf("MaxFileSizeError") && (i = _), p.text(i), f.removeAttr("data-value"), f.val(""), a.toggle(!1), o.toggle(!0), s.toggle(!0), n.fileUploads[e].uploading = !1, S() || I(n)
                    }

                    function w(e, n) {
                        if (e) return O(e);
                        var i = n.fileName, o = n.postData, a = n.fileId, u = n.s3Url;
                        f.attr("data-value", a), function (e, n, r, i, o) {
                            var a = new FormData;
                            for (var u in n) a.append(u, n[u]);
                            a.append("file", r, i), t.ajax({
                                type: "POST",
                                url: e,
                                data: a,
                                processData: !1,
                                contentType: !1
                            }).done(function () {
                                o(null)
                            }).fail(function (t) {
                                o(t)
                            })
                        }(u, o, r, i, A)
                    }

                    function A(t) {
                        if (t) return O(t);
                        a.toggle(!1), u.css("display", "inline-block"), n.fileUploads[e].uploading = !1, S() || I(n)
                    }

                    function S() {
                        var t = n.fileUploads && n.fileUploads.toArray() || [];
                        return t.some(function (t) {
                            return t.uploading
                        })
                    }
                }(e, i)
            });
            var u = i.action = r.attr("action");
            i.handler = null, i.redirect = r.attr("data-redirect"), _.test(u) ? i.handler = w : u || (o ? i.handler = "function" == typeof hostedSubmitWebflow ? hostedSubmitWebflow : O : y())
        }

        function I(t) {
            var e = t.btn = t.form.find(':input[type="submit"]');
            t.wait = t.btn.attr("data-wait") || null, t.success = !1, e.prop("disabled", !1), t.label && e.val(t.label)
        }

        function T(t) {
            var e = t.btn, n = t.wait;
            e.prop("disabled", !0), n && (t.label = e.val(), e.val(n))
        }

        function b(e, n) {
            var r = null;
            return n = n || {}, e.find(':input:not([type="submit"]):not([type="file"])').each(function (i, o) {
                var a = t(o), u = a.attr("type"), c = a.attr("data-name") || a.attr("name") || "Field " + (i + 1),
                    s = a.val();
                if ("checkbox" === u) s = a.is(":checked"); else if ("radio" === u) {
                    if (null === n[c] || "string" == typeof n[c]) return;
                    s = e.find('input[name="' + a.attr("name") + '"]:checked').val() || null
                }
                "string" == typeof s && (s = t.trim(s)), n[c] = s, r = r || function (t, e, n, r) {
                    var i = null;
                    "password" === e ? i = "Passwords cannot be submitted." : t.attr("required") ? r ? v.test(t.attr("type")) && (h.test(r) || (i = "Please enter a valid email address for: " + n)) : i = "Please fill out the required field: " + n : "g-recaptcha-response" !== n || r || (i = "Please confirm you’re not a robot.");
                    return i
                }(a, u, c, s)
            }), r
        }

        function O(t) {
            S(t), A(t)
        }

        function w(n) {
            I(n);
            var r = n.form, i = {};
            if (!/^https/.test(l.href) || /^https/.test(n.action)) {
                S(n);
                var o, a = b(r, i);
                if (a) return E(a);
                T(n), e.each(i, function (t, e) {
                    v.test(e) && (i.EMAIL = t), /^((full[ _-]?)?name)$/i.test(e) && (o = t), /^(first[ _-]?name)$/i.test(e) && (i.FNAME = t), /^(last[ _-]?name)$/i.test(e) && (i.LNAME = t)
                }), o && !i.FNAME && (o = o.split(" "), i.FNAME = o[0], i.LNAME = i.LNAME || o[1]);
                var u = n.action.replace("/post?", "/post-json?") + "&c=?", c = u.indexOf("u=") + 2;
                c = u.substring(c, u.indexOf("&", c));
                var s = u.indexOf("id=") + 3;
                s = u.substring(s, u.indexOf("&", s)), i["b_" + c + "_" + s] = "", t.ajax({
                    url: u,
                    data: i,
                    dataType: "jsonp"
                }).done(function (t) {
                    n.success = "success" === t.result || /already/.test(t.msg), n.success || console.info("MailChimp error: " + t.msg), A(n)
                }).fail(function () {
                    A(n)
                })
            } else r.attr("method", "post")
        }

        function A(t) {
            var e = t.form, n = t.redirect, r = t.success;
            r && n ? i.location(n) : (t.done.toggle(r), t.fail.toggle(!r), e.toggle(!r), I(t))
        }

        function S(t) {
            t.evt && t.evt.preventDefault(), t.evt = null
        }

        return s.ready = s.design = s.preview = function () {
            !function () {
                o = t("html").attr("data-wf-site"), u = "https://webflow.com/api/v1/form/" + o, d && u.indexOf("https://webflow.com") >= 0 && (u = u.replace("https://webflow.com", "http://formdata.webflow.com"));
                if (c = "".concat(u, "/signFile"), !(n = t(p + " form")).length) return;
                n.each(m)
            }(), g || a || function () {
                a = !0, f.on("submit", p + " form", function (e) {
                    var n = t.data(this, p);
                    n.handler && (n.evt = e, n.handler(n))
                });
                var e = [["checkbox", ".w-checkbox-input"], ["radio", ".w-radio-input"]];
                f.on("change", p + ' form input[type="checkbox"]:not(.w-checkbox-input)', function (e) {
                    t(e.target).siblings(".w-checkbox-input").toggleClass("w--redirected-checked")
                }), f.on("change", p + ' form input[type="radio"]', function (e) {
                    t('input[name="'.concat(e.target.name, '"]:not(').concat(".w-checkbox-input", ")")).map(function (e, n) {
                        return t(n).siblings(".w-radio-input").removeClass("w--redirected-checked")
                    });
                    var n = t(e.target);
                    n.hasClass("w-radio-input") || n.siblings(".w-radio-input").addClass("w--redirected-checked")
                }), e.forEach(function (e) {
                    var n = (0, r.default)(e, 2), i = n[0], o = n[1];
                    f.on("focus", p + ' form input[type="'.concat(i, '"]:not(') + o + ")", function (e) {
                        t(e.target).siblings(o).addClass("w--redirected-focus")
                    }), f.on("blur", p + ' form input[type="'.concat(i, '"]:not(') + o + ")", function (e) {
                        t(e.target).siblings(o).removeClass("w--redirected-focus")
                    })
                })
            }()
        }, s
    })
}, function (t, e, n) {
    var r = n(320), i = n(321), o = n(322);
    t.exports = function (t, e) {
        return r(t) || i(t, e) || o()
    }
}, function (t, e) {
    t.exports = function (t) {
        if (Array.isArray(t)) return t
    }
}, function (t, e) {
    t.exports = function (t, e) {
        var n = [], r = !0, i = !1, o = void 0;
        try {
            for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0) ;
        } catch (t) {
            i = !0, o = t
        } finally {
            try {
                r || null == u.return || u.return()
            } finally {
                if (i) throw o
            }
        }
        return n
    }
}, function (t, e) {
    t.exports = function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
}, function (t, e, n) {
    "use strict";
    var r = n(5), i = n(38), o = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35
    };
    r.define("navbar", t.exports = function (t, e) {
        var n, a, u, c, s = {}, f = t.tram, l = t(window), d = t(document), p = e.debounce, v = r.env(),
            h = '<div class="w-nav-overlay" data-wf-ignore />', E = ".w-nav", g = "w--open", _ = "w--nav-dropdown-open",
            y = "w--nav-dropdown-toggle-open", m = "w--nav-dropdown-list-open", I = "w--nav-link-open", T = i.triggers,
            b = t();

        function O() {
            r.resize.off(w)
        }

        function w() {
            a.each(M)
        }

        function A(n, r) {
            var i = t(r), a = t.data(r, E);
            a || (a = t.data(r, E, {
                open: !1,
                el: i,
                config: {},
                selectedIdx: -1
            })), a.menu = i.find(".w-nav-menu"), a.links = a.menu.find(".w-nav-link"), a.dropdowns = a.menu.find(".w-dropdown"), a.dropdownToggle = a.menu.find(".w-dropdown-toggle"), a.dropdownList = a.menu.find(".w-dropdown-list"), a.button = i.find(".w-nav-button"), a.container = i.find(".w-container"), a.overlayContainerId = "w-nav-overlay-" + n, a.outside = function (e) {
                e.outside && d.off("click" + E, e.outside);
                return function (n) {
                    var r = t(n.target);
                    c && r.closest(".w-editor-bem-EditorOverlay").length || P(e, r)
                }
            }(a);
            var s = i.find(".w-nav-brand");
            s && "/" === s.attr("href") && null == s.attr("aria-label") && s.attr("aria-label", "home"), a.button.attr("style", "-webkit-user-select: text;"), null == a.button.attr("aria-label") && a.button.attr("aria-label", "menu"), a.button.attr("role", "button"), a.button.attr("tabindex", "0"), a.button.attr("aria-controls", a.overlayContainerId), a.button.attr("aria-haspopup", "menu"), a.button.attr("aria-expanded", "false"), a.el.off(E), a.button.off(E), a.menu.off(E), R(a), u ? (x(a), a.el.on("setting" + E, function (t) {
                return function (n, r) {
                    r = r || {};
                    var i = l.width();
                    R(t), !0 === r.open && X(t, !0), !1 === r.open && V(t, !0), t.open && e.defer(function () {
                        i !== l.width() && C(t)
                    })
                }
            }(a))) : (!function (e) {
                if (e.overlay) return;
                e.overlay = t(h).appendTo(e.el), e.overlay.attr("id", e.overlayContainerId), e.parent = e.menu.parent(), V(e, !0)
            }(a), a.button.on("click" + E, L(a)), a.menu.on("click" + E, "a", D(a)), a.button.on("keydown" + E, function (t) {
                return function (e) {
                    switch (e.keyCode) {
                        case o.SPACE:
                        case o.ENTER:
                            return L(t)(), e.preventDefault(), e.stopPropagation();
                        case o.ESCAPE:
                            return V(t), e.preventDefault(), e.stopPropagation();
                        case o.ARROW_RIGHT:
                        case o.ARROW_DOWN:
                        case o.HOME:
                        case o.END:
                            return t.open ? (e.keyCode === o.END ? t.selectedIdx = t.links.length - 1 : t.selectedIdx = 0, N(t), e.preventDefault(), e.stopPropagation()) : (e.preventDefault(), e.stopPropagation())
                    }
                }
            }(a)), a.el.on("keydown" + E, function (t) {
                return function (e) {
                    if (t.open) switch (t.selectedIdx = t.links.index(document.activeElement), e.keyCode) {
                        case o.HOME:
                        case o.END:
                            return e.keyCode === o.END ? t.selectedIdx = t.links.length - 1 : t.selectedIdx = 0, N(t), e.preventDefault(), e.stopPropagation();
                        case o.ESCAPE:
                            return V(t), t.button.focus(), e.preventDefault(), e.stopPropagation();
                        case o.ARROW_LEFT:
                        case o.ARROW_UP:
                            return t.selectedIdx = Math.max(-1, t.selectedIdx - 1), N(t), e.preventDefault(), e.stopPropagation();
                        case o.ARROW_RIGHT:
                        case o.ARROW_DOWN:
                            return t.selectedIdx = Math.min(t.links.length - 1, t.selectedIdx + 1), N(t), e.preventDefault(), e.stopPropagation()
                    }
                }
            }(a))), M(n, r)
        }

        function S(e, n) {
            var r = t.data(n, E);
            r && (x(r), t.removeData(n, E))
        }

        function x(t) {
            t.overlay && (V(t, !0), t.overlay.remove(), t.overlay = null)
        }

        function R(t) {
            var n = {}, r = t.config || {}, i = n.animation = t.el.attr("data-animation") || "default";
            n.animOver = /^over/.test(i), n.animDirect = /left$/.test(i) ? -1 : 1, r.animation !== i && t.open && e.defer(C, t), n.easing = t.el.attr("data-easing") || "ease", n.easing2 = t.el.attr("data-easing2") || "ease";
            var o = t.el.attr("data-duration");
            n.duration = null != o ? Number(o) : 400, n.docHeight = t.el.attr("data-doc-height"), t.config = n
        }

        function N(t) {
            if (t.links[t.selectedIdx]) {
                var e = t.links[t.selectedIdx];
                e.focus(), D(e)
            }
        }

        function C(t) {
            t.open && (V(t, !0), X(t, !0))
        }

        function L(t) {
            return p(function () {
                t.open ? V(t) : X(t)
            })
        }

        function D(e) {
            return function (n) {
                var i = t(this).attr("href");
                r.validClick(n.currentTarget) ? i && 0 === i.indexOf("#") && e.open && V(e) : n.preventDefault()
            }
        }

        s.ready = s.design = s.preview = function () {
            if (u = v && r.env("design"), c = r.env("editor"), n = t(document.body), !(a = d.find(E)).length) return;
            a.each(A), O(), r.resize.on(w)
        }, s.destroy = function () {
            b = t(), O(), a && a.length && a.each(S)
        };
        var P = p(function (t, e) {
            if (t.open) {
                var n = e.closest(".w-nav-menu");
                t.menu.is(n) || V(t)
            }
        });

        function M(e, n) {
            var r = t.data(n, E), i = r.collapsed = "none" !== r.button.css("display");
            if (!r.open || i || u || V(r, !0), r.container.length) {
                var o = function (e) {
                    var n = e.container.css(j);
                    "none" === n && (n = "");
                    return function (e, r) {
                        (r = t(r)).css(j, ""), "none" === r.css(j) && r.css(j, n)
                    }
                }(r);
                r.links.each(o), r.dropdowns.each(o)
            }
            r.open && G(r)
        }

        var j = "max-width";

        function F(t, e) {
            e.setAttribute("data-nav-menu-open", "")
        }

        function k(t, e) {
            e.removeAttribute("data-nav-menu-open")
        }

        function X(t, e) {
            if (!t.open) {
                t.open = !0, t.menu.each(F), t.links.addClass(I), t.dropdowns.addClass(_), t.dropdownToggle.addClass(y), t.dropdownList.addClass(m), t.button.addClass(g);
                var n = t.config;
                "none" !== n.animation && f.support.transform || (e = !0);
                var i = G(t), o = t.menu.outerHeight(!0), a = t.menu.outerWidth(!0), c = t.el.height(), s = t.el[0];
                if (M(0, s), T.intro(0, s), r.redraw.up(), u || d.on("click" + E, t.outside), e) v(); else {
                    var l = "transform " + n.duration + "ms " + n.easing;
                    if (t.overlay && (b = t.menu.prev(), t.overlay.show().append(t.menu)), n.animOver) return f(t.menu).add(l).set({
                        x: n.animDirect * a,
                        height: i
                    }).start({x: 0}).then(v), void (t.overlay && t.overlay.width(a));
                    var p = c + o;
                    f(t.menu).add(l).set({y: -p}).start({y: 0}).then(v)
                }
            }

            function v() {
                t.button.attr("aria-expanded", "true")
            }
        }

        function G(t) {
            var e = t.config, r = e.docHeight ? d.height() : n.height();
            return e.animOver ? t.menu.height(r) : "fixed" !== t.el.css("position") && (r -= t.el.outerHeight(!0)), t.overlay && t.overlay.height(r), r
        }

        function V(t, e) {
            if (t.open) {
                t.open = !1, t.button.removeClass(g);
                var n = t.config;
                if (("none" === n.animation || !f.support.transform || n.duration <= 0) && (e = !0), T.outro(0, t.el[0]), d.off("click" + E, t.outside), e) return f(t.menu).stop(), void c();
                var r = "transform " + n.duration + "ms " + n.easing2, i = t.menu.outerHeight(!0),
                    o = t.menu.outerWidth(!0), a = t.el.height();
                if (n.animOver) f(t.menu).add(r).start({x: o * n.animDirect}).then(c); else {
                    var u = a + i;
                    f(t.menu).add(r).start({y: -u}).then(c)
                }
            }

            function c() {
                t.menu.height(""), f(t.menu).set({
                    x: 0,
                    y: 0
                }), t.menu.each(k), t.links.removeClass(I), t.dropdowns.removeClass(_), t.dropdownToggle.removeClass(y), t.dropdownList.removeClass(m), t.overlay && t.overlay.children().length && (b.length ? t.menu.insertAfter(b) : t.menu.prependTo(t.parent), t.overlay.attr("style", "").hide()), t.el.triggerHandler("w-close"), t.button.attr("aria-expanded", "false")
            }
        }

        return s
    })
}, function (t, e, n) {
    "use strict";
    var r = n(5), i = n(38),
        o = {ARROW_LEFT: 37, ARROW_UP: 38, ARROW_RIGHT: 39, ARROW_DOWN: 40, SPACE: 32, ENTER: 13, HOME: 36, END: 35},
        a = 'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
    r.define("slider", t.exports = function (t, e) {
        var n, u, c, s, f = {}, l = t.tram, d = t(document), p = r.env(), v = ".w-slider",
            h = '<div class="w-slider-dot" data-wf-ignore />',
            E = '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />', g = i.triggers;

        function _() {
            (n = d.find(v)).length && (n.each(I), s = null, c || (y(), r.resize.on(m), r.redraw.on(f.redraw)))
        }

        function y() {
            r.resize.off(m), r.redraw.off(f.redraw)
        }

        function m() {
            n.filter(":visible").each(D)
        }

        function I(e, n) {
            var r = t(n), i = t.data(n, v);
            i || (i = t.data(n, v, {
                index: 0,
                depth: 1,
                hasFocus: {keyboard: !1, mouse: !1},
                el: r,
                config: {}
            })), i.mask = r.children(".w-slider-mask"), i.left = r.children(".w-slider-arrow-left"), i.right = r.children(".w-slider-arrow-right"), i.nav = r.children(".w-slider-nav"), i.slides = i.mask.children(".w-slide"), i.slides.each(g.reset), s && (i.maskWidth = 0), void 0 === r.attr("role") && r.attr("role", "region"), void 0 === r.attr("aria-label") && r.attr("aria-label", "carousel");
            var o = i.mask.attr("id");
            if (o || (o = "w-slider-mask-" + e, i.mask.attr("id", o)), i.ariaLiveLabel = t(E).appendTo(i.mask), i.left.attr("role", "button"), i.left.attr("tabindex", "0"), i.left.attr("aria-controls", o), void 0 === i.left.attr("aria-label") && i.left.attr("aria-label", "previous slide"), i.right.attr("role", "button"), i.right.attr("tabindex", "0"), i.right.attr("aria-controls", o), void 0 === i.right.attr("aria-label") && i.right.attr("aria-label", "next slide"), !l.support.transform) return i.left.hide(), i.right.hide(), i.nav.hide(), void (c = !0);
            i.el.off(v), i.left.off(v), i.right.off(v), i.nav.off(v), T(i), u ? (i.el.on("setting" + v, N(i)), R(i), i.hasTimer = !1) : (i.el.on("swipe" + v, N(i)), i.left.on("click" + v, A(i)), i.right.on("click" + v, S(i)), i.left.on("keydown" + v, w(i, A)), i.right.on("keydown" + v, w(i, S)), i.nav.on("keydown" + v, "> div", N(i)), i.config.autoplay && !i.hasTimer && (i.hasTimer = !0, i.timerCount = 1, x(i)), i.el.on("mouseenter" + v, O(i, !0, "mouse")), i.el.on("focusin" + v, O(i, !0, "keyboard")), i.el.on("mouseleave" + v, O(i, !1, "mouse")), i.el.on("focusout" + v, O(i, !1, "keyboard"))), i.nav.on("click" + v, "> div", N(i)), p || i.mask.contents().filter(function () {
                return 3 === this.nodeType
            }).remove();
            var a = r.filter(":hidden");
            a.show();
            var f = r.parents(":hidden");
            f.show(), D(e, n), a.css("display", ""), f.css("display", "")
        }

        function T(t) {
            var e = {crossOver: 0};
            e.animation = t.el.attr("data-animation") || "slide", "outin" === e.animation && (e.animation = "cross", e.crossOver = .5), e.easing = t.el.attr("data-easing") || "ease";
            var n = t.el.attr("data-duration");
            if (e.duration = null != n ? parseInt(n, 10) : 500, b(t.el.attr("data-infinite")) && (e.infinite = !0), b(t.el.attr("data-disable-swipe")) && (e.disableSwipe = !0), b(t.el.attr("data-hide-arrows")) ? e.hideArrows = !0 : t.config.hideArrows && (t.left.show(), t.right.show()), b(t.el.attr("data-autoplay"))) {
                e.autoplay = !0, e.delay = parseInt(t.el.attr("data-delay"), 10) || 2e3, e.timerMax = parseInt(t.el.attr("data-autoplay-limit"), 10);
                var r = "mousedown" + v + " touchstart" + v;
                u || t.el.off(r).one(r, function () {
                    R(t)
                })
            }
            var i = t.right.width();
            e.edge = i ? i + 40 : 100, t.config = e
        }

        function b(t) {
            return "1" === t || "true" === t
        }

        function O(e, n, r) {
            return function (i) {
                if (n) e.hasFocus[r] = n; else {
                    if (t.contains(e.el.get(0), i.relatedTarget)) return;
                    if (e.hasFocus[r] = n, e.hasFocus.mouse && "keyboard" === r || e.hasFocus.keyboard && "mouse" === r) return
                }
                n ? (e.ariaLiveLabel.attr("aria-live", "polite"), e.hasTimer && R(e)) : (e.ariaLiveLabel.attr("aria-live", "off"), e.hasTimer && x(e))
            }
        }

        function w(t, e) {
            return function (n) {
                switch (n.keyCode) {
                    case o.SPACE:
                    case o.ENTER:
                        return e(t)(), n.preventDefault(), n.stopPropagation()
                }
            }
        }

        function A(t) {
            return function () {
                L(t, {index: t.index - 1, vector: -1})
            }
        }

        function S(t) {
            return function () {
                L(t, {index: t.index + 1, vector: 1})
            }
        }

        function x(t) {
            R(t);
            var e = t.config, n = e.timerMax;
            n && t.timerCount++ > n || (t.timerId = window.setTimeout(function () {
                null == t.timerId || u || (S(t)(), x(t))
            }, e.delay))
        }

        function R(t) {
            window.clearTimeout(t.timerId), t.timerId = null
        }

        function N(n) {
            return function (i, a) {
                a = a || {};
                var c = n.config;
                if (u && "setting" === i.type) {
                    if ("prev" === a.select) return A(n)();
                    if ("next" === a.select) return S(n)();
                    if (T(n), P(n), null == a.select) return;
                    !function (n, r) {
                        var i = null;
                        r === n.slides.length && (_(), P(n)), e.each(n.anchors, function (e, n) {
                            t(e.els).each(function (e, o) {
                                t(o).index() === r && (i = n)
                            })
                        }), null != i && L(n, {index: i, immediate: !0})
                    }(n, a.select)
                } else {
                    if ("swipe" === i.type) {
                        if (c.disableSwipe) return;
                        if (r.env("editor")) return;
                        return "left" === a.direction ? S(n)() : "right" === a.direction ? A(n)() : void 0
                    }
                    if (n.nav.has(i.target).length) {
                        var s = t(i.target).index();
                        if ("click" === i.type && L(n, {index: s}), "keydown" === i.type) switch (i.keyCode) {
                            case o.ENTER:
                            case o.SPACE:
                                L(n, {index: s}), i.preventDefault();
                                break;
                            case o.ARROW_LEFT:
                            case o.ARROW_UP:
                                C(n.nav, Math.max(s - 1, 0)), i.preventDefault();
                                break;
                            case o.ARROW_RIGHT:
                            case o.ARROW_DOWN:
                                C(n.nav, Math.min(s + 1, n.pages)), i.preventDefault();
                                break;
                            case o.HOME:
                                C(n.nav, 0), i.preventDefault();
                                break;
                            case o.END:
                                C(n.nav, n.pages), i.preventDefault();
                                break;
                            default:
                                return
                        }
                    }
                }
            }
        }

        function C(t, e) {
            var n = t.children().eq(e).focus();
            t.children().not(n)
        }

        function L(e, n) {
            n = n || {};
            var r = e.config, i = e.anchors;
            e.previous = e.index;
            var o = n.index, c = {};
            o < 0 ? (o = i.length - 1, r.infinite && (c.x = -e.endX, c.from = 0, c.to = i[0].width)) : o >= i.length && (o = 0, r.infinite && (c.x = i[i.length - 1].width, c.from = -i[i.length - 1].x, c.to = c.from - c.x)), e.index = o;
            var f = e.nav.children().eq(o).addClass("w-active").attr("aria-selected", "true").attr("tabindex", "0");
            e.nav.children().not(f).removeClass("w-active").attr("aria-selected", "false").attr("tabindex", "-1"), r.hideArrows && (e.index === i.length - 1 ? e.right.hide() : e.right.show(), 0 === e.index ? e.left.hide() : e.left.show());
            var d = e.offsetX || 0, p = e.offsetX = -i[e.index].x, v = {x: p, opacity: 1, visibility: ""},
                h = t(i[e.index].els), E = t(i[e.previous] && i[e.previous].els), _ = e.slides.not(h), y = r.animation,
                m = r.easing, I = Math.round(r.duration), T = n.vector || (e.index > e.previous ? 1 : -1),
                b = "opacity " + I + "ms " + m, O = "transform " + I + "ms " + m;
            if (h.find(a).removeAttr("tabindex"), h.removeAttr("aria-hidden"), h.find("*").removeAttr("aria-hidden"), _.find(a).attr("tabindex", "-1"), _.attr("aria-hidden", "true"), _.find("*").attr("aria-hidden", "true"), u || (h.each(g.intro), _.each(g.outro)), n.immediate && !s) return l(h).set(v), void S();
            if (e.index !== e.previous) {
                if (e.ariaLiveLabel.text("Slide ".concat(o + 1, " of ").concat(i.length, ".")), "cross" === y) {
                    var w = Math.round(I - I * r.crossOver), A = Math.round(I - w);
                    return b = "opacity " + w + "ms " + m, l(E).set({visibility: ""}).add(b).start({opacity: 0}), void l(h).set({
                        visibility: "",
                        x: p,
                        opacity: 0,
                        zIndex: e.depth++
                    }).add(b).wait(A).then({opacity: 1}).then(S)
                }
                if ("fade" === y) return l(E).set({visibility: ""}).stop(), void l(h).set({
                    visibility: "",
                    x: p,
                    opacity: 0,
                    zIndex: e.depth++
                }).add(b).start({opacity: 1}).then(S);
                if ("over" === y) return v = {x: e.endX}, l(E).set({visibility: ""}).stop(), void l(h).set({
                    visibility: "",
                    zIndex: e.depth++,
                    x: p + i[e.index].width * T
                }).add(O).start({x: p}).then(S);
                r.infinite && c.x ? (l(e.slides.not(E)).set({
                    visibility: "",
                    x: c.x
                }).add(O).start({x: p}), l(E).set({
                    visibility: "",
                    x: c.from
                }).add(O).start({x: c.to}), e.shifted = E) : (r.infinite && e.shifted && (l(e.shifted).set({
                    visibility: "",
                    x: d
                }), e.shifted = null), l(e.slides).set({visibility: ""}).add(O).start({x: p}))
            }

            function S() {
                h = t(i[e.index].els), _ = e.slides.not(h), "slide" !== y && (v.visibility = "hidden"), l(_).set(v)
            }
        }

        function D(e, n) {
            var r = t.data(n, v);
            if (r) return function (t) {
                var e = t.mask.width();
                if (t.maskWidth !== e) return t.maskWidth = e, !0;
                return !1
            }(r) ? P(r) : void (u && function (e) {
                var n = 0;
                if (e.slides.each(function (e, r) {
                    n += t(r).outerWidth(!0)
                }), e.slidesWidth !== n) return e.slidesWidth = n, !0;
                return !1
            }(r) && P(r))
        }

        function P(e) {
            var n = 1, r = 0, i = 0, o = 0, a = e.maskWidth, c = a - e.config.edge;
            c < 0 && (c = 0), e.anchors = [{els: [], x: 0, width: 0}], e.slides.each(function (u, s) {
                i - r > c && (n++, r += a, e.anchors[n - 1] = {
                    els: [],
                    x: i,
                    width: 0
                }), o = t(s).outerWidth(!0), i += o, e.anchors[n - 1].width += o, e.anchors[n - 1].els.push(s);
                var f = u + 1 + " of " + e.slides.length;
                t(s).attr("aria-label", f), t(s).attr("role", "group")
            }), e.endX = i, u && (e.pages = null), e.nav.length && e.pages !== n && (e.pages = n, function (e) {
                var n, r = [], i = e.el.attr("data-nav-spacing");
                i && (i = parseFloat(i) + "px");
                for (var o = 0, a = e.pages; o < a; o++) (n = t(h)).attr("aria-label", "Show slide " + (o + 1) + " of " + a).attr("aria-selected", "false").attr("role", "button").attr("tabindex", "-1"), e.nav.hasClass("w-num") && n.text(o + 1), null != i && n.css({
                    "margin-left": i,
                    "margin-right": i
                }), r.push(n);
                e.nav.empty().append(r)
            }(e));
            var s = e.index;
            s >= n && (s = n - 1), L(e, {immediate: !0, index: s})
        }

        return f.ready = function () {
            u = r.env("design"), _()
        }, f.design = function () {
            u = !0, _()
        }, f.preview = function () {
            u = !1, _()
        }, f.redraw = function () {
            s = !0, _()
        }, f.destroy = y, f
    })
}]);
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions: Init
 */
Webflow.require('ix').init([
    {
        "slug": "audio-logo",
        "name": "Audio logo",
        "value": {
            "style": {"display": "flex", "opacity": 0.6},
            "triggers": [{
                "type": "hover",
                "stepsA": [{
                    "opacity": 1,
                    "transition": "transform 200 ease 0, opacity 200 ease 0",
                    "scaleX": 0.95,
                    "scaleY": 0.95,
                    "scaleZ": 1
                }],
                "stepsB": [{
                    "opacity": 0.6,
                    "transition": "transform 200 ease 0, opacity 200 ease 0",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }]
            }]
        }
    },
    {
        "slug": "pag-progress-indicator",
        "name": "Pag progress indicator",
        "value": {
            "style": {"opacity": 0},
            "triggers": [{
                "type": "hover",
                "stepsA": [{"opacity": 1, "transition": "opacity 200ms ease-in 0"}],
                "stepsB": [{"opacity": 0, "transition": "opacity 300ms ease-out 0, width 200 ease 0"}]
            }]
        }
    },
    {
        "slug": "button-fov",
        "name": "Button fov",
        "value": {
            "style": {"opacity": 0},
            "triggers": [{
                "type": "hover",
                "stepsA": [{"opacity": 1, "transition": "opacity 200 ease 0"}],
                "stepsB": [{"opacity": 0, "transition": "opacity 200 ease 0"}]
            }]
        }
    }
]);
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init(
    {
        "events": {
            "e-9": {
                "id": "e-9",
                "name": "",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-10"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "selector": ".button-download",
                    "originalId": "5f81b2cef07fa39ce69e7537|2a0174b2-2a79-b92a-3694-b6901684b5b9",
                    "appliesTo": "CLASS"
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1602349822750
            },
            "e-10": {
                "id": "e-10",
                "name": "",
                "eventTypeId": "MOUSE_OUT",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-2",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-9"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "selector": ".button-download",
                    "originalId": "5f81b2cef07fa39ce69e7537|2a0174b2-2a79-b92a-3694-b6901684b5b9",
                    "appliesTo": "CLASS"
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1602349822750
            },
            "e-11": {
                "id": "e-11",
                "name": "",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "RUBBER_BAND_EFFECT",
                    "config": {"actionListId": "rubberBand", "autoStopEventId": "e-12"},
                    "instant": false
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "selector": ".button-download",
                    "originalId": "5f81b2cef07fa39ce69e7537|2a0174b2-2a79-b92a-3694-b6901684b5b9",
                    "appliesTo": "CLASS"
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": 0,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1602349822750
            },
            "e-13": {
                "id": "e-13",
                "name": "",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-7",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-14"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": [],
                    "id": "5f81b2cef07fa39ce69e7537|ed3164eb-5f7b-ba6d-65be-c93a3e391e39"
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1602364562243
            },
            "e-14": {
                "id": "e-14",
                "name": "",
                "eventTypeId": "MOUSE_OUT",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-8",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-13"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": [],
                    "id": "5f81b2cef07fa39ce69e7537|ed3164eb-5f7b-ba6d-65be-c93a3e391e39"
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1602364562245
            },
            "e-15": {
                "id": "e-15",
                "name": "",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-9",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-16"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": [],
                    "id": "5f81b2cef07fa39ce69e7537|ed3164eb-5f7b-ba6d-65be-c93a3e391e39"
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1602364770263
            },
            "e-23": {
                "id": "e-23",
                "name": "",
                "eventTypeId": "PAGE_SCROLL",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                    "config": {"actionListId": "a-15", "affectedElements": {}, "duration": 0}
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {"appliesTo": "PAGE", "styleBlockIds": [], "id": "5f81b2cef07fa39ce69e7537"},
                "targets": [],
                "config": [{
                    "continuousParameterGroupId": "a-15-p",
                    "smoothing": 20,
                    "startsEntering": true,
                    "addStartOffset": false,
                    "addOffsetValue": 50,
                    "startsExiting": false,
                    "addEndOffset": false,
                    "endOffsetValue": 50
                }],
                "createdOn": 1602494348310
            },
            "e-24": {
                "id": "e-24",
                "name": "",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-7",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-25"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": [],
                    "id": "5f81b2cef07fa39ce69e7537|9c86bd27-82c1-3909-7e80-1653ceb2fd81"
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1602515538587
            },
            "e-25": {
                "id": "e-25",
                "name": "",
                "eventTypeId": "MOUSE_OUT",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-8",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-24"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": [],
                    "id": "5f81b2cef07fa39ce69e7537|9c86bd27-82c1-3909-7e80-1653ceb2fd81"
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1602515538588
            },
            "e-26": {
                "id": "e-26",
                "name": "",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-7",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-27"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": [],
                    "id": "5f81b2cef07fa39ce69e7537|78138957-ad1b-9c98-5884-f4aed25cc6de"
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1602515562937
            },
            "e-27": {
                "id": "e-27",
                "name": "",
                "eventTypeId": "MOUSE_OUT",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-8",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-26"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": [],
                    "id": "5f81b2cef07fa39ce69e7537|78138957-ad1b-9c98-5884-f4aed25cc6de"
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1602515562963
            },
            "e-28": {
                "id": "e-28",
                "name": "",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-7",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-29"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": [],
                    "id": "5f81b2cef07fa39ce69e7537|ffaae021-ca97-f845-d19c-0c77810fcde0"
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1602515583407
            },
            "e-29": {
                "id": "e-29",
                "name": "",
                "eventTypeId": "MOUSE_OUT",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-8",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-28"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": [],
                    "id": "5f81b2cef07fa39ce69e7537|ffaae021-ca97-f845-d19c-0c77810fcde0"
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1602515583427
            },
            "e-30": {
                "id": "e-30",
                "name": "",
                "eventTypeId": "PAGE_START",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-20",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-31"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {"appliesTo": "PAGE", "styleBlockIds": [], "id": "5f81b2cef07fa39ce69e7537"},
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1602602873434
            },
            "e-31": {
                "id": "e-31",
                "name": "",
                "eventTypeId": "PAGE_FINISH",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-20",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-30"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {"appliesTo": "PAGE", "styleBlockIds": [], "id": "5f81b2cef07fa39ce69e7537"},
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1602602873435
            },
            "e-32": {
                "id": "e-32",
                "name": "",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-12",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-39"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": [],
                    "id": "5f82cd1ef07fa3113da0b874|057548ea-2e91-daf6-0dcf-fd652ef402c1"
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1602678075990
            },
            "e-33": {
                "id": "e-33",
                "name": "",
                "eventTypeId": "MOUSE_OUT",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-13",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-38"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": [],
                    "id": "5f82cd1ef07fa3113da0b874|057548ea-2e91-daf6-0dcf-fd652ef402c1"
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1602678075991
            },
            "e-38": {
                "id": "e-38",
                "name": "",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-12",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-39"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": [],
                    "id": "5f82cd1ef07fa3113da0b874|057548ea-2e91-daf6-0dcf-fd652ef402c1"
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1602678075990
            },
            "e-39": {
                "id": "e-39",
                "name": "",
                "eventTypeId": "MOUSE_OUT",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-13",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-38"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": [],
                    "id": "5f82cd1ef07fa3113da0b874|057548ea-2e91-daf6-0dcf-fd652ef402c1"
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1602678075991
            },
            "e-40": {
                "id": "e-40",
                "name": "",
                "eventTypeId": "PAGE_START",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-20",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-41"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {"appliesTo": "PAGE", "styleBlockIds": [], "id": "5f82cd1ef07fa3113da0b874"},
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1602756322680
            },
            "e-41": {
                "id": "e-41",
                "name": "",
                "eventTypeId": "PAGE_FINISH",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-20",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-40"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {"appliesTo": "PAGE", "styleBlockIds": [], "id": "5f82cd1ef07fa3113da0b874"},
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1602756322681
            },
            "e-42": {
                "id": "e-42",
                "name": "",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-24",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-43"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": [],
                    "id": "5f89792e9195b492456c6abd|06fb2f7f-20d4-382f-1ce9-5fbfca8f396e"
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1602845953450
            },
            "e-44": {
                "id": "e-44",
                "name": "",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-25",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-45"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": [],
                    "id": "5f89792e9195b492456c6abd|8fd37840-10b3-1363-3959-1028bd982c17"
                },
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1602848198393
            },
            "e-46": {
                "id": "e-46",
                "name": "",
                "eventTypeId": "PAGE_START",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-25",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-47"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {"appliesTo": "PAGE", "styleBlockIds": [], "id": "5f89792e9195b492456c6abd"},
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1602848350894
            },
            "e-47": {
                "id": "e-47",
                "name": "",
                "eventTypeId": "PAGE_FINISH",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-26",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-46"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {"appliesTo": "PAGE", "styleBlockIds": [], "id": "5f89792e9195b492456c6abd"},
                "targets": [],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1602848350896
            }
        },
        "actionLists": {
            "a": {
                "id": "a",
                "title": "OnDownloadButtonHover",
                "actionItemGroups": [{
                    "actionItems": [{
                        "id": "a-n-2",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 0,
                            "target": {
                                "useEventTarget": true,
                                "id": "5f81b2cef07fa39ce69e7537|713b902c-64e5-7e6a-8ee9-95769259afed"
                            },
                            "rValue": 255,
                            "gValue": 255,
                            "bValue": 255,
                            "aValue": 0.56
                        }
                    }, {
                        "id": "a-n-3",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 0,
                            "globalSwatchId": "7f1b2e3c",
                            "target": {
                                "useEventTarget": true,
                                "id": "5f81b2cef07fa39ce69e7537|713b902c-64e5-7e6a-8ee9-95769259afed"
                            },
                            "rValue": 255,
                            "gValue": 255,
                            "bValue": 255,
                            "aValue": 1
                        }
                    }]
                }, {
                    "actionItems": [{
                        "id": "a-n-4",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "5f81b2cef07fa39ce69e7537|713b902c-64e5-7e6a-8ee9-95769259afed"
                            },
                            "rValue": 122,
                            "gValue": 122,
                            "bValue": 122,
                            "aValue": 1
                        }
                    }, {
                        "id": "a-n",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "globalSwatchId": "7f1b2e3c",
                            "target": {
                                "useEventTarget": true,
                                "id": "5f81b2cef07fa39ce69e7537|713b902c-64e5-7e6a-8ee9-95769259afed"
                            },
                            "rValue": 255,
                            "gValue": 255,
                            "bValue": 255,
                            "aValue": 1
                        }
                    }]
                }],
                "createdOn": 1602337936138,
                "useFirstGroupAsInitialState": true
            },
            "a-2": {
                "id": "a-2",
                "title": "OnDownloadButtonExit",
                "actionItemGroups": [{
                    "actionItems": [{
                        "id": "a-2-n-2",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 100,
                            "globalSwatchId": "7f1b2e3c",
                            "target": {
                                "useEventTarget": true,
                                "id": "5f81b2cef07fa39ce69e7537|713b902c-64e5-7e6a-8ee9-95769259afed"
                            },
                            "rValue": 255,
                            "gValue": 255,
                            "bValue": 255,
                            "aValue": 1
                        }
                    }, {
                        "id": "a-2-n-3",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "5f81b2cef07fa39ce69e7537|713b902c-64e5-7e6a-8ee9-95769259afed"
                            },
                            "rValue": 122,
                            "gValue": 122,
                            "bValue": 122,
                            "aValue": 1
                        }
                    }]
                }, {
                    "actionItems": [{
                        "id": "a-2-n",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 100,
                            "target": {
                                "useEventTarget": true,
                                "id": "5f81b2cef07fa39ce69e7537|713b902c-64e5-7e6a-8ee9-95769259afed"
                            },
                            "rValue": 255,
                            "gValue": 255,
                            "bValue": 255,
                            "aValue": 0.56
                        }
                    }, {
                        "id": "a-2-n-4",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "globalSwatchId": "7f1b2e3c",
                            "target": {
                                "useEventTarget": true,
                                "id": "5f81b2cef07fa39ce69e7537|713b902c-64e5-7e6a-8ee9-95769259afed"
                            },
                            "rValue": 255,
                            "gValue": 255,
                            "bValue": 255,
                            "aValue": 1
                        }
                    }]
                }],
                "createdOn": 1602338108077,
                "useFirstGroupAsInitialState": true
            },
            "a-7": {
                "id": "a-7",
                "title": "OnScoreHover",
                "actionItemGroups": [{
                    "actionItems": [{
                        "id": "a-7-n",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 0,
                            "target": {
                                "useEventTarget": true,
                                "id": "5f81b2cef07fa39ce69e7537|ed3164eb-5f7b-ba6d-65be-c93a3e391e39"
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }]
                }, {
                    "actionItems": [{
                        "id": "a-7-n-2",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 150,
                            "target": {
                                "useEventTarget": true,
                                "id": "5f81b2cef07fa39ce69e7537|ed3164eb-5f7b-ba6d-65be-c93a3e391e39"
                            },
                            "xValue": 1.2,
                            "yValue": 1.2,
                            "locked": true
                        }
                    }]
                }],
                "createdOn": 1602364567939,
                "useFirstGroupAsInitialState": true
            },
            "a-8": {
                "id": "a-8",
                "title": "OnScoreExit",
                "actionItemGroups": [{
                    "actionItems": [{
                        "id": "a-8-n",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "5f81b2cef07fa39ce69e7537|ed3164eb-5f7b-ba6d-65be-c93a3e391e39"
                            },
                            "xValue": 1.2,
                            "yValue": 1.2,
                            "locked": true
                        }
                    }]
                }, {
                    "actionItems": [{
                        "id": "a-8-n-2",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 200,
                            "target": {
                                "useEventTarget": true,
                                "id": "5f81b2cef07fa39ce69e7537|ed3164eb-5f7b-ba6d-65be-c93a3e391e39"
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }]
                }],
                "createdOn": 1602364711575,
                "useFirstGroupAsInitialState": true
            },
            "a-9": {
                "id": "a-9",
                "title": "OnScoreClick",
                "actionItemGroups": [{
                    "actionItems": [{
                        "id": "a-9-n",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "5f81b2cef07fa39ce69e7537|ed3164eb-5f7b-ba6d-65be-c93a3e391e39"
                            },
                            "xValue": 0,
                            "yValue": 0,
                            "zValue": 0,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "DEG"
                        }
                    }]
                }, {
                    "actionItems": [{
                        "id": "a-9-n-3",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 300,
                            "target": {
                                "useEventTarget": true,
                                "id": "5f81b2cef07fa39ce69e7537|ed3164eb-5f7b-ba6d-65be-c93a3e391e39"
                            },
                            "zValue": 360,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "DEG"
                        }
                    }]
                }],
                "createdOn": 1602364777784,
                "useFirstGroupAsInitialState": true
            },
            "a-15": {
                "id": "a-15", "title": "OnGameoftricksBackgroundScroll", "continuousParameterGroups": [{
                    "id": "a-15-p", "type": "SCROLL_PROGRESS", "parameterLabel": "Scroll", "continuousActionGroups": [{
                        "keyframe": 0,
                        "actionItems": [{
                            "id": "a-15-n",
                            "actionTypeId": "STYLE_OPACITY",
                            "config": {
                                "delay": 0,
                                "easing": "",
                                "duration": 500,
                                "target": {"id": "5f81b2cef07fa39ce69e7537|bdc9c0c8-f4ba-1fe3-b142-1ea2f49e40c8"},
                                "value": 1,
                                "unit": ""
                            }
                        }, {
                            "id": "a-15-n-3",
                            "actionTypeId": "STYLE_OPACITY",
                            "config": {
                                "delay": 0,
                                "easing": "",
                                "duration": 500,
                                "target": {"id": "5f81b2cef07fa39ce69e7537|3850d9c3-dceb-c893-3198-d56d4fed3bc0"},
                                "value": 0,
                                "unit": ""
                            }
                        }, {
                            "id": "a-15-n-4",
                            "actionTypeId": "STYLE_OPACITY",
                            "config": {
                                "delay": 0,
                                "easing": "",
                                "duration": 500,
                                "target": {"id": "5f81b2cef07fa39ce69e7537|590ea925-b84d-164a-2ef3-47254fb34393"},
                                "value": 0,
                                "unit": ""
                            }
                        }, {
                            "id": "a-15-n-5",
                            "actionTypeId": "STYLE_OPACITY",
                            "config": {
                                "delay": 0,
                                "easing": "",
                                "duration": 500,
                                "target": {"id": "5f81b2cef07fa39ce69e7537|60cb7efd-44c8-fa4d-9de8-9ffc3fd962d7"},
                                "value": 0,
                                "unit": ""
                            }
                        }, {
                            "id": "a-15-n-6",
                            "actionTypeId": "STYLE_OPACITY",
                            "config": {
                                "delay": 0,
                                "easing": "",
                                "duration": 500,
                                "target": {"id": "5f81b2cef07fa39ce69e7537|fda58293-134c-d9f6-80d2-543147301eb6"},
                                "value": 0,
                                "unit": ""
                            }
                        }, {
                            "id": "a-15-n-26",
                            "actionTypeId": "TRANSFORM_MOVE",
                            "config": {
                                "delay": 0,
                                "easing": "",
                                "duration": 500,
                                "target": {"id": "5f81b2cef07fa39ce69e7537|22c0acb4-c49b-5309-3abc-a6a31e439be8"},
                                "yValue": 0,
                                "xUnit": "PX",
                                "yUnit": "VH",
                                "zUnit": "PX"
                            }
                        }]
                    }, {
                        "keyframe": 25,
                        "actionItems": [{
                            "id": "a-15-n-7",
                            "actionTypeId": "STYLE_OPACITY",
                            "config": {
                                "delay": 0,
                                "easing": "",
                                "duration": 500,
                                "target": {"id": "5f81b2cef07fa39ce69e7537|3850d9c3-dceb-c893-3198-d56d4fed3bc0"},
                                "value": 1,
                                "unit": ""
                            }
                        }, {
                            "id": "a-15-n-8",
                            "actionTypeId": "STYLE_OPACITY",
                            "config": {
                                "delay": 0,
                                "easing": "",
                                "duration": 500,
                                "target": {"id": "5f81b2cef07fa39ce69e7537|bdc9c0c8-f4ba-1fe3-b142-1ea2f49e40c8"},
                                "value": 0,
                                "unit": ""
                            }
                        }, {
                            "id": "a-15-n-9",
                            "actionTypeId": "STYLE_OPACITY",
                            "config": {
                                "delay": 0,
                                "easing": "",
                                "duration": 500,
                                "target": {"id": "5f81b2cef07fa39ce69e7537|590ea925-b84d-164a-2ef3-47254fb34393"},
                                "value": 0,
                                "unit": ""
                            }
                        }, {
                            "id": "a-15-n-10",
                            "actionTypeId": "STYLE_OPACITY",
                            "config": {
                                "delay": 0,
                                "easing": "",
                                "duration": 500,
                                "target": {"id": "5f81b2cef07fa39ce69e7537|60cb7efd-44c8-fa4d-9de8-9ffc3fd962d7"},
                                "value": 0,
                                "unit": ""
                            }
                        }, {
                            "id": "a-15-n-11",
                            "actionTypeId": "STYLE_OPACITY",
                            "config": {
                                "delay": 0,
                                "easing": "",
                                "duration": 500,
                                "target": {"id": "5f81b2cef07fa39ce69e7537|fda58293-134c-d9f6-80d2-543147301eb6"},
                                "value": 0,
                                "unit": ""
                            }
                        }]
                    }, {
                        "keyframe": 50,
                        "actionItems": [{
                            "id": "a-15-n-12",
                            "actionTypeId": "STYLE_OPACITY",
                            "config": {
                                "delay": 0,
                                "easing": "",
                                "duration": 500,
                                "target": {"id": "5f81b2cef07fa39ce69e7537|590ea925-b84d-164a-2ef3-47254fb34393"},
                                "value": 1,
                                "unit": ""
                            }
                        }, {
                            "id": "a-15-n-13",
                            "actionTypeId": "STYLE_OPACITY",
                            "config": {
                                "delay": 0,
                                "easing": "",
                                "duration": 500,
                                "target": {"id": "5f81b2cef07fa39ce69e7537|60cb7efd-44c8-fa4d-9de8-9ffc3fd962d7"},
                                "value": 0,
                                "unit": ""
                            }
                        }, {
                            "id": "a-15-n-14",
                            "actionTypeId": "STYLE_OPACITY",
                            "config": {
                                "delay": 0,
                                "easing": "",
                                "duration": 500,
                                "target": {"id": "5f81b2cef07fa39ce69e7537|fda58293-134c-d9f6-80d2-543147301eb6"},
                                "value": 0,
                                "unit": ""
                            }
                        }, {
                            "id": "a-15-n-15",
                            "actionTypeId": "STYLE_OPACITY",
                            "config": {
                                "delay": 0,
                                "easing": "",
                                "duration": 500,
                                "target": {"id": "5f81b2cef07fa39ce69e7537|bdc9c0c8-f4ba-1fe3-b142-1ea2f49e40c8"},
                                "value": 0,
                                "unit": ""
                            }
                        }, {
                            "id": "a-15-n-16",
                            "actionTypeId": "STYLE_OPACITY",
                            "config": {
                                "delay": 0,
                                "easing": "",
                                "duration": 500,
                                "target": {"id": "5f81b2cef07fa39ce69e7537|3850d9c3-dceb-c893-3198-d56d4fed3bc0"},
                                "value": 0,
                                "unit": ""
                            }
                        }]
                    }, {
                        "keyframe": 62,
                        "actionItems": [{
                            "id": "a-15-n-17",
                            "actionTypeId": "STYLE_OPACITY",
                            "config": {
                                "delay": 0,
                                "easing": "",
                                "duration": 500,
                                "target": {"id": "5f81b2cef07fa39ce69e7537|60cb7efd-44c8-fa4d-9de8-9ffc3fd962d7"},
                                "value": 1,
                                "unit": ""
                            }
                        }, {
                            "id": "a-15-n-19",
                            "actionTypeId": "STYLE_OPACITY",
                            "config": {
                                "delay": 0,
                                "easing": "",
                                "duration": 500,
                                "target": {"id": "5f81b2cef07fa39ce69e7537|bdc9c0c8-f4ba-1fe3-b142-1ea2f49e40c8"},
                                "value": 0,
                                "unit": ""
                            }
                        }, {
                            "id": "a-15-n-20",
                            "actionTypeId": "STYLE_OPACITY",
                            "config": {
                                "delay": 0,
                                "easing": "",
                                "duration": 500,
                                "target": {"id": "5f81b2cef07fa39ce69e7537|3850d9c3-dceb-c893-3198-d56d4fed3bc0"},
                                "value": 0,
                                "unit": ""
                            }
                        }, {
                            "id": "a-15-n-21",
                            "actionTypeId": "STYLE_OPACITY",
                            "config": {
                                "delay": 0,
                                "easing": "",
                                "duration": 500,
                                "target": {"id": "5f81b2cef07fa39ce69e7537|590ea925-b84d-164a-2ef3-47254fb34393"},
                                "value": 0,
                                "unit": ""
                            }
                        }, {
                            "id": "a-15-n-18",
                            "actionTypeId": "STYLE_OPACITY",
                            "config": {
                                "delay": 0,
                                "easing": "",
                                "duration": 500,
                                "target": {"id": "5f81b2cef07fa39ce69e7537|fda58293-134c-d9f6-80d2-543147301eb6"},
                                "value": 0,
                                "unit": ""
                            }
                        }]
                    }, {
                        "keyframe": 75,
                        "actionItems": [{
                            "id": "a-15-n-22",
                            "actionTypeId": "STYLE_OPACITY",
                            "config": {
                                "delay": 0,
                                "easing": "",
                                "duration": 500,
                                "target": {"id": "5f81b2cef07fa39ce69e7537|fda58293-134c-d9f6-80d2-543147301eb6"},
                                "value": 1,
                                "unit": ""
                            }
                        }]
                    }, {
                        "keyframe": 100,
                        "actionItems": [{
                            "id": "a-15-n-2",
                            "actionTypeId": "STYLE_OPACITY",
                            "config": {
                                "delay": 0,
                                "easing": "",
                                "duration": 500,
                                "target": {"id": "5f81b2cef07fa39ce69e7537|bdc9c0c8-f4ba-1fe3-b142-1ea2f49e40c8"},
                                "value": 0,
                                "unit": ""
                            }
                        }, {
                            "id": "a-15-n-23",
                            "actionTypeId": "STYLE_OPACITY",
                            "config": {
                                "delay": 0,
                                "easing": "",
                                "duration": 500,
                                "target": {"id": "5f81b2cef07fa39ce69e7537|fda58293-134c-d9f6-80d2-543147301eb6"},
                                "value": 1,
                                "unit": ""
                            }
                        }, {
                            "id": "a-15-n-27",
                            "actionTypeId": "TRANSFORM_MOVE",
                            "config": {
                                "delay": 0,
                                "easing": "",
                                "duration": 500,
                                "target": {"id": "5f81b2cef07fa39ce69e7537|22c0acb4-c49b-5309-3abc-a6a31e439be8"},
                                "yValue": 70,
                                "xUnit": "PX",
                                "yUnit": "VH",
                                "zUnit": "PX"
                            }
                        }]
                    }]
                }], "createdOn": 1602494356264
            },
            "a-20": {
                "id": "a-20", "title": "OnPageLoaded", "actionItemGroups": [{
                    "actionItems": [{
                        "id": "a-20-n-3",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".link-score",
                                "selectorGuids": ["4d0a0972-58d8-35f4-844c-ac9d0ffb044d"]
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }, {
                        "id": "a-20-n-4",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".div-presentation-alors",
                                "selectorGuids": ["d8beae49-cc63-0cee-8f1e-3962c5838447"]
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }, {
                        "id": "a-20-n-5",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".div-presentation-demdillon",
                                "selectorGuids": ["d7d523ad-1690-554a-03bd-9d60beac782c"]
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }, {
                        "id": "a-20-n-6",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".div-presentation-elfefe",
                                "selectorGuids": ["6f49cafd-fa20-aa83-0279-0129cadaf114"]
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }, {
                        "id": "a-20-n-7",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {"selector": ".logo", "selectorGuids": ["264649cf-ad10-2b98-43db-174cc949ba1a"]},
                            "value": 0.5,
                            "unit": ""
                        }
                    }]
                }], "createdOn": 1602602955393, "useFirstGroupAsInitialState": true
            },
            "a-12": {
                "id": "a-12",
                "title": "OnHeaderNavHover",
                "actionItemGroups": [{
                    "actionItems": [{
                        "id": "a-12-n",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 200,
                            "target": {
                                "useEventTarget": true,
                                "id": "5f82cd1ef07fa3113da0b874|057548ea-2e91-daf6-0dcf-fd652ef402bf"
                            },
                            "value": 0.5,
                            "unit": ""
                        }
                    }]
                }, {
                    "actionItems": [{
                        "id": "a-12-n-2",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 200,
                            "target": {
                                "useEventTarget": true,
                                "id": "5f82cd1ef07fa3113da0b874|057548ea-2e91-daf6-0dcf-fd652ef402bf"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }],
                "createdOn": 1602417871486,
                "useFirstGroupAsInitialState": true
            },
            "a-13": {
                "id": "a-13",
                "title": "OnHeaderNavExit",
                "actionItemGroups": [{
                    "actionItems": [{
                        "id": "a-13-n",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "5f82cd1ef07fa3113da0b874|057548ea-2e91-daf6-0dcf-fd652ef402bf"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "actionItems": [{
                        "id": "a-13-n-2",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 200,
                            "target": {
                                "useEventTarget": true,
                                "id": "5f82cd1ef07fa3113da0b874|057548ea-2e91-daf6-0dcf-fd652ef402bf"
                            },
                            "value": 0.5,
                            "unit": ""
                        }
                    }]
                }],
                "createdOn": 1602417954936,
                "useFirstGroupAsInitialState": true
            },
            "a-24": {
                "id": "a-24", "title": "ButtonFov1-1Click", "actionItemGroups": [{
                    "actionItems": [{
                        "id": "a-24-n",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".block-background-fov-1",
                                "selectorGuids": ["fe4cae34-d544-cf8f-1477-893e933b16fc"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-24-n-11",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".background-fov-2",
                                "selectorGuids": ["ce40bc66-24aa-9655-02c8-82e8252ea6c7"]
                            },
                            "xValue": 0.5,
                            "yValue": 0.5,
                            "locked": true
                        }
                    }, {
                        "id": "a-24-n-2",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".block-background-fov-2",
                                "selectorGuids": ["f1fd2cfa-e300-1e9a-21df-f89a8e7f187a"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-24-n-10",
                        "actionTypeId": "GENERAL_DISPLAY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 0,
                            "value": "block",
                            "target": {
                                "selector": ".block-background-fov-1",
                                "selectorGuids": ["fe4cae34-d544-cf8f-1477-893e933b16fc"]
                            }
                        }
                    }, {
                        "id": "a-24-n-3",
                        "actionTypeId": "GENERAL_DISPLAY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 0,
                            "value": "none",
                            "target": {
                                "selector": ".block-background-fov-2",
                                "selectorGuids": ["f1fd2cfa-e300-1e9a-21df-f89a8e7f187a"]
                            }
                        }
                    }, {
                        "id": "a-24-n-8",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".background-fov-1",
                                "selectorGuids": ["6b4bd741-6518-5618-3723-4bae8e2b76fc"]
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }]
                }, {
                    "actionItems": [{
                        "id": "a-24-n-5",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 700,
                            "target": {
                                "selector": ".block-background-fov-2",
                                "selectorGuids": ["f1fd2cfa-e300-1e9a-21df-f89a8e7f187a"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-24-n-12",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".background-fov-2",
                                "selectorGuids": ["ce40bc66-24aa-9655-02c8-82e8252ea6c7"]
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }, {
                        "id": "a-24-n-9",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".background-fov-1",
                                "selectorGuids": ["6b4bd741-6518-5618-3723-4bae8e2b76fc"]
                            },
                            "xValue": 2,
                            "yValue": 2,
                            "locked": true
                        }
                    }, {
                        "id": "a-24-n-6",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 700,
                            "target": {
                                "selector": ".block-background-fov-1",
                                "selectorGuids": ["fe4cae34-d544-cf8f-1477-893e933b16fc"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-24-n-4",
                        "actionTypeId": "GENERAL_DISPLAY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 0,
                            "value": "block",
                            "target": {
                                "selector": ".block-background-fov-2",
                                "selectorGuids": ["f1fd2cfa-e300-1e9a-21df-f89a8e7f187a"]
                            }
                        }
                    }, {
                        "id": "a-24-n-7",
                        "actionTypeId": "GENERAL_DISPLAY",
                        "config": {
                            "delay": 700,
                            "easing": "",
                            "duration": 0,
                            "value": "none",
                            "target": {
                                "selector": ".block-background-fov-1",
                                "selectorGuids": ["fe4cae34-d544-cf8f-1477-893e933b16fc"]
                            }
                        }
                    }]
                }], "createdOn": 1602845965001, "useFirstGroupAsInitialState": true
            },
            "a-25": {
                "id": "a-25", "title": "ButtonFov2-1Click", "actionItemGroups": [{
                    "actionItems": [{
                        "id": "a-25-n-2",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".block-background-fov-2",
                                "selectorGuids": ["f1fd2cfa-e300-1e9a-21df-f89a8e7f187a"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-25-n-14",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".background-fov-2",
                                "selectorGuids": ["ce40bc66-24aa-9655-02c8-82e8252ea6c7"]
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }, {
                        "id": "a-25-n-12",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".block-background-fov-1",
                                "selectorGuids": ["fe4cae34-d544-cf8f-1477-893e933b16fc"]
                            },
                            "xValue": 2,
                            "yValue": 2,
                            "locked": true
                        }
                    }, {
                        "id": "a-25-n",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".block-background-fov-1",
                                "selectorGuids": ["fe4cae34-d544-cf8f-1477-893e933b16fc"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-25-n-10",
                        "actionTypeId": "GENERAL_DISPLAY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 0,
                            "value": "none",
                            "target": {
                                "selector": ".block-background-fov-1",
                                "selectorGuids": ["fe4cae34-d544-cf8f-1477-893e933b16fc"]
                            }
                        }
                    }, {
                        "id": "a-25-n-3",
                        "actionTypeId": "GENERAL_DISPLAY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 0,
                            "value": "block",
                            "target": {
                                "selector": ".block-background-fov-2",
                                "selectorGuids": ["f1fd2cfa-e300-1e9a-21df-f89a8e7f187a"]
                            }
                        }
                    }]
                }, {
                    "actionItems": [{
                        "id": "a-25-n-5",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 700,
                            "target": {
                                "selector": ".block-background-fov-2",
                                "selectorGuids": ["f1fd2cfa-e300-1e9a-21df-f89a8e7f187a"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-25-n-15",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".background-fov-2",
                                "selectorGuids": ["ce40bc66-24aa-9655-02c8-82e8252ea6c7"]
                            },
                            "xValue": 0.5,
                            "yValue": 0.5,
                            "locked": true
                        }
                    }, {
                        "id": "a-25-n-13",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".background-fov-1",
                                "selectorGuids": ["6b4bd741-6518-5618-3723-4bae8e2b76fc"]
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }, {
                        "id": "a-25-n-7",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 700,
                            "target": {
                                "selector": ".block-background-fov-1",
                                "selectorGuids": ["fe4cae34-d544-cf8f-1477-893e933b16fc"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-25-n-9",
                        "actionTypeId": "GENERAL_DISPLAY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 0,
                            "value": "block",
                            "target": {
                                "selector": ".block-background-fov-1",
                                "selectorGuids": ["fe4cae34-d544-cf8f-1477-893e933b16fc"]
                            }
                        }
                    }, {
                        "id": "a-25-n-11",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".block-background-fov-1",
                                "selectorGuids": ["fe4cae34-d544-cf8f-1477-893e933b16fc"]
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }, {
                        "id": "a-25-n-8",
                        "actionTypeId": "GENERAL_DISPLAY",
                        "config": {
                            "delay": 500,
                            "easing": "",
                            "duration": 0,
                            "value": "none",
                            "target": {
                                "selector": ".block-background-fov-2",
                                "selectorGuids": ["f1fd2cfa-e300-1e9a-21df-f89a8e7f187a"]
                            }
                        }
                    }]
                }], "createdOn": 1602845965001, "useFirstGroupAsInitialState": true
            },
            "a-26": {
                "id": "a-26",
                "title": "OnTestFOVLoaded",
                "actionItemGroups": [{
                    "actionItems": [{
                        "id": "a-26-n-7",
                        "actionTypeId": "STYLE_FILTER",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {"id": "5f89792e9195b492456c6abd|453039e7-9012-212c-1839-021539e4a315"},
                            "filters": [{"type": "blur", "filterId": "175c", "value": 20, "unit": "px"}]
                        }
                    }, {
                        "id": "a-26-n-6",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {"id": "5f89792e9195b492456c6abd|453039e7-9012-212c-1839-021539e4a315"},
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }, {
                    "actionItems": [{
                        "id": "a-26-n",
                        "actionTypeId": "STYLE_FILTER",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 2000,
                            "target": {"id": "5f89792e9195b492456c6abd|453039e7-9012-212c-1839-021539e4a315"},
                            "filters": [{"type": "blur", "filterId": "091c", "value": 0, "unit": "px"}]
                        }
                    }, {
                        "id": "a-26-n-2",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 2000,
                            "target": {"id": "5f89792e9195b492456c6abd|4141d7f0-2d06-1feb-4351-4980593dc5e0"},
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-26-n-8",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 2000,
                            "target": {"id": "5f89792e9195b492456c6abd|453039e7-9012-212c-1839-021539e4a315"},
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "actionItems": [{
                        "id": "a-26-n-5",
                        "actionTypeId": "STYLE_FILTER",
                        "config": {
                            "delay": 1600,
                            "easing": "",
                            "duration": 3000,
                            "target": {"id": "5f89792e9195b492456c6abd|453039e7-9012-212c-1839-021539e4a315"},
                            "filters": [{"type": "blur", "filterId": "3f8e", "value": 20, "unit": "px"}]
                        }
                    }, {
                        "id": "a-26-n-3",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 2000,
                            "easing": "",
                            "duration": 3000,
                            "target": {"id": "5f89792e9195b492456c6abd|4141d7f0-2d06-1feb-4351-4980593dc5e0"},
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }, {
                    "actionItems": [{
                        "id": "a-26-n-4",
                        "actionTypeId": "GENERAL_DISPLAY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 0,
                            "value": "none",
                            "target": {"id": "5f89792e9195b492456c6abd|4141d7f0-2d06-1feb-4351-4980593dc5e0"}
                        }
                    }]
                }],
                "createdOn": 1602855379904,
                "useFirstGroupAsInitialState": true
            },
            "rubberBand": {
                "id": "rubberBand",
                "actionItemGroups": [{
                    "actionItems": [{
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "outQuart",
                            "duration": 250,
                            "target": {"id": "N/A", "appliesTo": "TRIGGER_ELEMENT", "useEventTarget": true},
                            "xValue": 1.25,
                            "yValue": 0.7500000000000001
                        }
                    }]
                }, {
                    "actionItems": [{
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "outElastic",
                            "duration": 1000,
                            "target": {"id": "N/A", "appliesTo": "TRIGGER_ELEMENT", "useEventTarget": true},
                            "xValue": 1,
                            "yValue": 1
                        }
                    }]
                }]
            }
        },
        "site": {
            "mediaQueries": [{"key": "main", "min": 992, "max": 10000}, {
                "key": "medium",
                "min": 768,
                "max": 991
            }, {"key": "small", "min": 480, "max": 767}, {"key": "tiny", "min": 0, "max": 479}]
        }
    }
);
