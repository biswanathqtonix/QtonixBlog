! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    var n = [],
        i = e.document,
        o = n.slice,
        r = n.concat,
        s = n.push,
        a = n.indexOf,
        l = {},
        d = l.toString,
        c = l.hasOwnProperty,
        u = {},
        p = "1.12.4",
        f = function(e, t) {
            return new f.fn.init(e, t)
        },
        h = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        v = /^-ms-/,
        g = /-([\da-z])/gi,
        m = function(e, t) {
            return t.toUpperCase()
        };

    function y(e) {
        var t = !!e && "length" in e && e.length,
            n = f.type(e);
        return "function" !== n && !f.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    f.fn = f.prototype = {
        jquery: p,
        constructor: f,
        selector: "",
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : o.call(this)
        },
        pushStack: function(e) {
            var t = f.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e) {
            return f.each(this, e)
        },
        map: function(e) {
            return this.pushStack(f.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    }, f.extend = f.fn.extend = function() {
        var e, t, n, i, o, r, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            d = !1;
        for ("boolean" == typeof s && (d = s, s = arguments[a] || {}, a++), "object" == typeof s || f.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (o = arguments[a]))
                for (i in o) e = s[i], n = o[i], "__proto__" !== i && s !== n && (d && n && (f.isPlainObject(n) || (t = f.isArray(n))) ? (t ? (t = !1, r = e && f.isArray(e) ? e : []) : r = e && f.isPlainObject(e) ? e : {}, s[i] = f.extend(d, r, n)) : void 0 !== n && (s[i] = n));
        return s
    }, f.extend({
        expando: "jQuery" + (p + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === f.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === f.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !f.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== f.type(e) || e.nodeType || f.isWindow(e)) return !1;
            try {
                if (e.constructor && !c.call(e, "constructor") && !c.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (e) {
                return !1
            }
            if (!u.ownFirst)
                for (t in e) return c.call(e, t);
            for (t in e);
            return void 0 === t || c.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[d.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && f.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(v, "ms-").replace(g, m)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var n, i = 0;
            if (y(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(h, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (y(Object(e)) ? f.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
        },
        inArray: function(e, t, n) {
            var i;
            if (t) {
                if (a) return a.call(t, e, n);
                for (i = t.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n;) e[o++] = t[i++];
            if (n != n)
                for (; void 0 !== t[i];) e[o++] = t[i++];
            return e.length = o, e
        },
        grep: function(e, t, n) {
            for (var i = [], o = 0, r = e.length, s = !n; o < r; o++) !t(e[o], o) !== s && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var i, o, s = 0,
                a = [];
            if (y(e))
                for (i = e.length; s < i; s++) null != (o = t(e[s], s, n)) && a.push(o);
            else
                for (s in e) null != (o = t(e[s], s, n)) && a.push(o);
            return r.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, r;
            if ("string" == typeof t && (r = e[t], t = e, e = r), f.isFunction(e)) return n = o.call(arguments, 2), (i = function() {
                return e.apply(t || this, n.concat(o.call(arguments)))
            }).guid = e.guid = e.guid || f.guid++, i
        },
        now: function() {
            return +new Date
        },
        support: u
    }), "function" == typeof Symbol && (f.fn[Symbol.iterator] = n[Symbol.iterator]), f.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    });
    var b = function(e) {
        var t, n, i, o, r, s, a, l, d, c, u, p, f, h, v, g, m, y, b, w = "sizzle" + 1 * new Date,
            k = e.document,
            x = 0,
            T = 0,
            C = re(),
            S = re(),
            _ = re(),
            $ = function(e, t) {
                return e === t && (u = !0), 0
            },
            A = 1 << 31,
            j = {}.hasOwnProperty,
            E = [],
            N = E.pop,
            L = E.push,
            D = E.push,
            H = E.slice,
            O = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            q = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            I = "\\[" + q + "*(" + M + ")(?:" + q + "*([*^$|!~]?=)" + q + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + q + "*\\]",
            z = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
            W = new RegExp(q + "+", "g"),
            F = new RegExp("^" + q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + q + "+$", "g"),
            R = new RegExp("^" + q + "*," + q + "*"),
            B = new RegExp("^" + q + "*([>+~]|" + q + ")" + q + "*"),
            X = new RegExp("=" + q + "*([^\\]'\"]*?)" + q + "*\\]", "g"),
            U = new RegExp(z),
            Y = new RegExp("^" + M + "$"),
            V = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + I),
                PSEUDO: new RegExp("^" + z),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + q + "*(even|odd|(([+-]|)(\\d*)n|)" + q + "*(?:([+-]|)" + q + "*(\\d+)|))" + q + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + P + ")$", "i"),
                needsContext: new RegExp("^" + q + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + q + "*((?:-\\d)?\\d*)" + q + "*\\)|)(?=[^-]|$)", "i")
            },
            Q = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Z = /[+~]/,
            ee = /'|\\/g,
            te = new RegExp("\\\\([\\da-f]{1,6}" + q + "?|(" + q + ")|.)", "ig"),
            ne = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            ie = function() {
                p()
            };
        try {
            D.apply(E = H.call(k.childNodes), k.childNodes), E[k.childNodes.length].nodeType
        } catch (e) {
            D = {
                apply: E.length ? function(e, t) {
                    L.apply(e, H.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }

        function oe(e, t, i, o) {
            var r, a, d, c, u, h, m, y, x = t && t.ownerDocument,
                T = t ? t.nodeType : 9;
            if (i = i || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return i;
            if (!o && ((t ? t.ownerDocument || t : k) !== f && p(t), t = t || f, v)) {
                if (11 !== T && (h = K.exec(e)))
                    if (r = h[1]) {
                        if (9 === T) {
                            if (!(d = t.getElementById(r))) return i;
                            if (d.id === r) return i.push(d), i
                        } else if (x && (d = x.getElementById(r)) && b(t, d) && d.id === r) return i.push(d), i
                    } else {
                        if (h[2]) return D.apply(i, t.getElementsByTagName(e)), i;
                        if ((r = h[3]) && n.getElementsByClassName && t.getElementsByClassName) return D.apply(i, t.getElementsByClassName(r)), i
                    } if (n.qsa && !_[e + " "] && (!g || !g.test(e))) {
                    if (1 !== T) x = t, y = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((c = t.getAttribute("id")) ? c = c.replace(ee, "\\$&") : t.setAttribute("id", c = w), a = (m = s(e)).length, u = Y.test(c) ? "#" + c : "[id='" + c + "']"; a--;) m[a] = u + " " + ve(m[a]);
                        y = m.join(","), x = Z.test(e) && fe(t.parentNode) || t
                    }
                    if (y) try {
                        return D.apply(i, x.querySelectorAll(y)), i
                    } catch (e) {} finally {
                        c === w && t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(F, "$1"), t, i, o)
        }

        function re() {
            var e = [];
            return function t(n, o) {
                return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = o
            }
        }

        function se(e) {
            return e[w] = !0, e
        }

        function ae(e) {
            var t = f.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function le(e, t) {
            for (var n = e.split("|"), o = n.length; o--;) i.attrHandle[n[o]] = t
        }

        function de(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || A) - (~e.sourceIndex || A);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function ce(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function ue(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function pe(e) {
            return se(function(t) {
                return t = +t, se(function(n, i) {
                    for (var o, r = e([], n.length, t), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }

        function fe(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = oe.support = {}, r = oe.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, p = oe.setDocument = function(e) {
                var t, o, s = e ? e.ownerDocument || e : k;
                return s !== f && 9 === s.nodeType && s.documentElement ? (h = (f = s).documentElement, v = !r(f), (o = f.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", ie, !1) : o.attachEvent && o.attachEvent("onunload", ie)), n.attributes = ae(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), n.getElementsByTagName = ae(function(e) {
                    return e.appendChild(f.createComment("")), !e.getElementsByTagName("*").length
                }), n.getElementsByClassName = J.test(f.getElementsByClassName), n.getById = ae(function(e) {
                    return h.appendChild(e).id = w, !f.getElementsByName || !f.getElementsByName(w).length
                }), n.getById ? (i.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && v) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }, i.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete i.find.ID, i.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), i.find.TAG = n.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        o = 0,
                        r = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }, i.find.CLASS = n.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && v) return t.getElementsByClassName(e)
                }, m = [], g = [], (n.qsa = J.test(f.querySelectorAll)) && (ae(function(e) {
                    h.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + q + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + q + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + w + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || g.push(".#.+[+~]")
                }), ae(function(e) {
                    var t = f.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + q + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                })), (n.matchesSelector = J.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ae(function(e) {
                    n.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), m.push("!=", z)
                }), g = g.length && new RegExp(g.join("|")), m = m.length && new RegExp(m.join("|")), t = J.test(h.compareDocumentPosition), b = t || J.test(h.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, $ = t ? function(e, t) {
                    if (e === t) return u = !0, 0;
                    var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === f || e.ownerDocument === k && b(k, e) ? -1 : t === f || t.ownerDocument === k && b(k, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & i ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return u = !0, 0;
                    var n, i = 0,
                        o = e.parentNode,
                        r = t.parentNode,
                        s = [e],
                        a = [t];
                    if (!o || !r) return e === f ? -1 : t === f ? 1 : o ? -1 : r ? 1 : c ? O(c, e) - O(c, t) : 0;
                    if (o === r) return de(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (; s[i] === a[i];) i++;
                    return i ? de(s[i], a[i]) : s[i] === k ? -1 : a[i] === k ? 1 : 0
                }, f) : f
            }, oe.matches = function(e, t) {
                return oe(e, null, null, t)
            }, oe.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== f && p(e), t = t.replace(X, "='$1']"), n.matchesSelector && v && !_[t + " "] && (!m || !m.test(t)) && (!g || !g.test(t))) try {
                    var i = y.call(e, t);
                    if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (e) {}
                return oe(t, f, null, [e]).length > 0
            }, oe.contains = function(e, t) {
                return (e.ownerDocument || e) !== f && p(e), b(e, t)
            }, oe.attr = function(e, t) {
                (e.ownerDocument || e) !== f && p(e);
                var o = i.attrHandle[t.toLowerCase()],
                    r = o && j.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !v) : void 0;
                return void 0 !== r ? r : n.attributes || !v ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, oe.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, oe.uniqueSort = function(e) {
                var t, i = [],
                    o = 0,
                    r = 0;
                if (u = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort($), u) {
                    for (; t = e[r++];) t === e[r] && (o = i.push(r));
                    for (; o--;) e.splice(i[o], 1)
                }
                return c = null, e
            }, o = oe.getText = function(e) {
                var t, n = "",
                    i = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else
                    for (; t = e[i++];) n += o(t);
                return n
            }, (i = oe.selectors = {
                cacheLength: 50,
                createPseudo: se,
                match: V,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && U.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = C[e + " "];
                        return t || (t = new RegExp("(^|" + q + ")" + e + "(" + q + "|$)")) && C(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, n) {
                        return function(i) {
                            var o = oe.attr(i, e);
                            return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace(W, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(e, t, n, i, o) {
                        var r = "nth" !== e.slice(0, 3),
                            s = "last" !== e.slice(-4),
                            a = "of-type" === t;
                        return 1 === i && 0 === o ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var d, c, u, p, f, h, v = r !== s ? "nextSibling" : "previousSibling",
                                g = t.parentNode,
                                m = a && t.nodeName.toLowerCase(),
                                y = !l && !a,
                                b = !1;
                            if (g) {
                                if (r) {
                                    for (; v;) {
                                        for (p = t; p = p[v];)
                                            if (a ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;
                                        h = v = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [s ? g.firstChild : g.lastChild], s && y) {
                                    for (b = (f = (d = (c = (u = (p = g)[w] || (p[w] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === x && d[1]) && d[2], p = f && g.childNodes[f]; p = ++f && p && p[v] || (b = f = 0) || h.pop();)
                                        if (1 === p.nodeType && ++b && p === t) {
                                            c[e] = [x, f, b];
                                            break
                                        }
                                } else if (y && (b = f = (d = (c = (u = (p = t)[w] || (p[w] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === x && d[1]), !1 === b)
                                    for (;
                                        (p = ++f && p && p[v] || (b = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++b || (y && ((c = (u = p[w] || (p[w] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] = [x, b]), p !== t)););
                                return (b -= o) === i || b % i == 0 && b / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, o = i.pseudos[e] || i.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                        return o[w] ? o(t) : o.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, n) {
                            for (var i, r = o(e, t), s = r.length; s--;) e[i = O(e, r[s])] = !(n[i] = r[s])
                        }) : function(e) {
                            return o(e, 0, n)
                        }) : o
                    }
                },
                pseudos: {
                    not: se(function(e) {
                        var t = [],
                            n = [],
                            i = a(e.replace(F, "$1"));
                        return i[w] ? se(function(e, t, n, o) {
                            for (var r, s = i(e, null, o, []), a = e.length; a--;)(r = s[a]) && (e[a] = !(t[a] = r))
                        }) : function(e, o, r) {
                            return t[0] = e, i(t, null, r, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: se(function(e) {
                        return function(t) {
                            return oe(e, t).length > 0
                        }
                    }),
                    contains: se(function(e) {
                        return e = e.replace(te, ne),
                            function(t) {
                                return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
                            }
                    }),
                    lang: se(function(e) {
                        return Y.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = v ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === h
                    },
                    focus: function(e) {
                        return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return !1 === e.disabled
                    },
                    disabled: function(e) {
                        return !0 === e.disabled
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !i.pseudos.empty(e)
                    },
                    header: function(e) {
                        return G.test(e.nodeName)
                    },
                    input: function(e) {
                        return Q.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: pe(function() {
                        return [0]
                    }),
                    last: pe(function(e, t) {
                        return [t - 1]
                    }),
                    eq: pe(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: pe(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: pe(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: pe(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                        return e
                    }),
                    gt: pe(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }).pseudos.nth = i.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) i.pseudos[t] = ce(t);
        for (t in {
                submit: !0,
                reset: !0
            }) i.pseudos[t] = ue(t);

        function he() {}

        function ve(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function ge(e, t, n) {
            var i = t.dir,
                o = n && "parentNode" === i,
                r = T++;
            return t.first ? function(t, n, r) {
                for (; t = t[i];)
                    if (1 === t.nodeType || o) return e(t, n, r)
            } : function(t, n, s) {
                var a, l, d, c = [x, r];
                if (s) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || o) && e(t, n, s)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || o) {
                            if ((a = (l = (d = t[w] || (t[w] = {}))[t.uniqueID] || (d[t.uniqueID] = {}))[i]) && a[0] === x && a[1] === r) return c[2] = a[2];
                            if (l[i] = c, c[2] = e(t, n, s)) return !0
                        }
            }
        }

        function me(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var o = e.length; o--;)
                    if (!e[o](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function ye(e, t, n, i, o) {
            for (var r, s = [], a = 0, l = e.length, d = null != t; a < l; a++)(r = e[a]) && (n && !n(r, i, o) || (s.push(r), d && t.push(a)));
            return s
        }

        function be(e, t, n, i, o, r) {
            return i && !i[w] && (i = be(i)), o && !o[w] && (o = be(o, r)), se(function(r, s, a, l) {
                var d, c, u, p = [],
                    f = [],
                    h = s.length,
                    v = r || function(e, t, n) {
                        for (var i = 0, o = t.length; i < o; i++) oe(e, t[i], n);
                        return n
                    }(t || "*", a.nodeType ? [a] : a, []),
                    g = !e || !r && t ? v : ye(v, p, e, a, l),
                    m = n ? o || (r ? e : h || i) ? [] : s : g;
                if (n && n(g, m, a, l), i)
                    for (d = ye(m, f), i(d, [], a, l), c = d.length; c--;)(u = d[c]) && (m[f[c]] = !(g[f[c]] = u));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (d = [], c = m.length; c--;)(u = m[c]) && d.push(g[c] = u);
                            o(null, m = [], d, l)
                        }
                        for (c = m.length; c--;)(u = m[c]) && (d = o ? O(r, u) : p[c]) > -1 && (r[d] = !(s[d] = u))
                    }
                } else m = ye(m === s ? m.splice(h, m.length) : m), o ? o(null, s, m, l) : D.apply(s, m)
            })
        }

        function we(e) {
            for (var t, n, o, r = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, c = ge(function(e) {
                    return e === t
                }, a, !0), u = ge(function(e) {
                    return O(t, e) > -1
                }, a, !0), p = [function(e, n, i) {
                    var o = !s && (i || n !== d) || ((t = n).nodeType ? c(e, n, i) : u(e, n, i));
                    return t = null, o
                }]; l < r; l++)
                if (n = i.relative[e[l].type]) p = [ge(me(p), n)];
                else {
                    if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
                        for (o = ++l; o < r && !i.relative[e[o].type]; o++);
                        return be(l > 1 && me(p), l > 1 && ve(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(F, "$1"), n, l < o && we(e.slice(l, o)), o < r && we(e = e.slice(o)), o < r && ve(e))
                    }
                    p.push(n)
                } return me(p)
        }

        function ke(e, t) {
            var n = t.length > 0,
                o = e.length > 0,
                r = function(r, s, a, l, c) {
                    var u, h, g, m = 0,
                        y = "0",
                        b = r && [],
                        w = [],
                        k = d,
                        T = r || o && i.find.TAG("*", c),
                        C = x += null == k ? 1 : Math.random() || .1,
                        S = T.length;
                    for (c && (d = s === f || s || c); y !== S && null != (u = T[y]); y++) {
                        if (o && u) {
                            for (h = 0, s || u.ownerDocument === f || (p(u), a = !v); g = e[h++];)
                                if (g(u, s || f, a)) {
                                    l.push(u);
                                    break
                                } c && (x = C)
                        }
                        n && ((u = !g && u) && m--, r && b.push(u))
                    }
                    if (m += y, n && y !== m) {
                        for (h = 0; g = t[h++];) g(b, w, s, a);
                        if (r) {
                            if (m > 0)
                                for (; y--;) b[y] || w[y] || (w[y] = N.call(l));
                            w = ye(w)
                        }
                        D.apply(l, w), c && !r && w.length > 0 && m + t.length > 1 && oe.uniqueSort(l)
                    }
                    return c && (x = C, d = k), b
                };
            return n ? se(r) : r
        }
        return he.prototype = i.filters = i.pseudos, i.setFilters = new he, s = oe.tokenize = function(e, t) {
            var n, o, r, s, a, l, d, c = S[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (a = e, l = [], d = i.preFilter; a;) {
                for (s in n && !(o = R.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), n = !1, (o = B.exec(a)) && (n = o.shift(), r.push({
                        value: n,
                        type: o[0].replace(F, " ")
                    }), a = a.slice(n.length)), i.filter) !(o = V[s].exec(a)) || d[s] && !(o = d[s](o)) || (n = o.shift(), r.push({
                    value: n,
                    type: s,
                    matches: o
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? oe.error(e) : S(e, l).slice(0)
        }, a = oe.compile = function(e, t) {
            var n, i = [],
                o = [],
                r = _[e + " "];
            if (!r) {
                for (t || (t = s(e)), n = t.length; n--;)(r = we(t[n]))[w] ? i.push(r) : o.push(r);
                (r = _(e, ke(o, i))).selector = e
            }
            return r
        }, l = oe.select = function(e, t, o, r) {
            var l, d, c, u, p, f = "function" == typeof e && e,
                h = !r && s(e = f.selector || e);
            if (o = o || [], 1 === h.length) {
                if ((d = h[0] = h[0].slice(0)).length > 2 && "ID" === (c = d[0]).type && n.getById && 9 === t.nodeType && v && i.relative[d[1].type]) {
                    if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return o;
                    f && (t = t.parentNode), e = e.slice(d.shift().value.length)
                }
                for (l = V.needsContext.test(e) ? 0 : d.length; l-- && (c = d[l], !i.relative[u = c.type]);)
                    if ((p = i.find[u]) && (r = p(c.matches[0].replace(te, ne), Z.test(d[0].type) && fe(t.parentNode) || t))) {
                        if (d.splice(l, 1), !(e = r.length && ve(d))) return D.apply(o, r), o;
                        break
                    }
            }
            return (f || a(e, h))(r, t, !v, o, !t || Z.test(e) && fe(t.parentNode) || t), o
        }, n.sortStable = w.split("").sort($).join("") === w, n.detectDuplicates = !!u, p(), n.sortDetached = ae(function(e) {
            return 1 & e.compareDocumentPosition(f.createElement("div"))
        }), ae(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || le("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && ae(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || le("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ae(function(e) {
            return null == e.getAttribute("disabled")
        }) || le(P, function(e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), oe
    }(e);
    f.find = b, f.expr = b.selectors, f.expr[":"] = f.expr.pseudos, f.uniqueSort = f.unique = b.uniqueSort, f.text = b.getText, f.isXMLDoc = b.isXML, f.contains = b.contains;
    var w = function(e, t, n) {
            for (var i = [], o = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && f(e).is(n)) break;
                    i.push(e)
                } return i
        },
        k = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        x = f.expr.match.needsContext,
        T = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        C = /^.[^:#\[\.,]*$/;

    function S(e, t, n) {
        if (f.isFunction(t)) return f.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType) return f.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (C.test(t)) return f.filter(t, e, n);
            t = f.filter(t, e)
        }
        return f.grep(e, function(e) {
            return f.inArray(e, t) > -1 !== n
        })
    }
    f.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? f.find.matchesSelector(i, e) ? [i] : [] : f.find.matches(e, f.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, f.fn.extend({
        find: function(e) {
            var t, n = [],
                i = this,
                o = i.length;
            if ("string" != typeof e) return this.pushStack(f(e).filter(function() {
                for (t = 0; t < o; t++)
                    if (f.contains(i[t], this)) return !0
            }));
            for (t = 0; t < o; t++) f.find(e, i[t], n);
            return (n = this.pushStack(o > 1 ? f.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack(S(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(S(this, e || [], !0))
        },
        is: function(e) {
            return !!S(this, "string" == typeof e && x.test(e) ? f(e) : e || [], !1).length
        }
    });
    var _, $ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (f.fn.init = function(e, t, n) {
        var o, r;
        if (!e) return this;
        if (n = n || _, "string" == typeof e) {
            if (!(o = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : $.exec(e)) || !o[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (o[1]) {
                if (t = t instanceof f ? t[0] : t, f.merge(this, f.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : i, !0)), T.test(o[1]) && f.isPlainObject(t))
                    for (o in t) f.isFunction(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
                return this
            }
            if ((r = i.getElementById(o[2])) && r.parentNode) {
                if (r.id !== o[2]) return _.find(e);
                this.length = 1, this[0] = r
            }
            return this.context = i, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : f.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(f) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), f.makeArray(e, this))
    }).prototype = f.fn, _ = f(i);
    var A = /^(?:parents|prev(?:Until|All))/,
        j = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function E(e, t) {
        do {
            e = e[t]
        } while (e && 1 !== e.nodeType);
        return e
    }
    f.fn.extend({
        has: function(e) {
            var t, n = f(e, this),
                i = n.length;
            return this.filter(function() {
                for (t = 0; t < i; t++)
                    if (f.contains(this, n[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0, o = this.length, r = [], s = x.test(e) || "string" != typeof e ? f(e, t || this.context) : 0; i < o; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && f.find.matchesSelector(n, e))) {
                        r.push(n);
                        break
                    } return this.pushStack(r.length > 1 ? f.uniqueSort(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? f.inArray(this[0], f(e)) : f.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(f.uniqueSort(f.merge(this.get(), f(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), f.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return w(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return w(e, "parentNode", n)
        },
        next: function(e) {
            return E(e, "nextSibling")
        },
        prev: function(e) {
            return E(e, "previousSibling")
        },
        nextAll: function(e) {
            return w(e, "nextSibling")
        },
        prevAll: function(e) {
            return w(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return w(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return w(e, "previousSibling", n)
        },
        siblings: function(e) {
            return k((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return k(e.firstChild)
        },
        contents: function(e) {
            return f.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : f.merge([], e.childNodes)
        }
    }, function(e, t) {
        f.fn[e] = function(n, i) {
            var o = f.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = f.filter(i, o)), this.length > 1 && (j[e] || (o = f.uniqueSort(o)), A.test(e) && (o = o.reverse())), this.pushStack(o)
        }
    });
    var N, L, D = /\S+/g;

    function H() {
        i.addEventListener ? (i.removeEventListener("DOMContentLoaded", O), e.removeEventListener("load", O)) : (i.detachEvent("onreadystatechange", O), e.detachEvent("onload", O))
    }

    function O() {
        (i.addEventListener || "load" === e.event.type || "complete" === i.readyState) && (H(), f.ready())
    }
    for (L in f.Callbacks = function(e) {
            e = "string" == typeof e ? function(e) {
                var t = {};
                return f.each(e.match(D) || [], function(e, n) {
                    t[n] = !0
                }), t
            }(e) : f.extend({}, e);
            var t, n, i, o, r = [],
                s = [],
                a = -1,
                l = function() {
                    for (o = e.once, i = t = !0; s.length; a = -1)
                        for (n = s.shift(); ++a < r.length;) !1 === r[a].apply(n[0], n[1]) && e.stopOnFalse && (a = r.length, n = !1);
                    e.memory || (n = !1), t = !1, o && (r = n ? [] : "")
                },
                d = {
                    add: function() {
                        return r && (n && !t && (a = r.length - 1, s.push(n)), function t(n) {
                            f.each(n, function(n, i) {
                                f.isFunction(i) ? e.unique && d.has(i) || r.push(i) : i && i.length && "string" !== f.type(i) && t(i)
                            })
                        }(arguments), n && !t && l()), this
                    },
                    remove: function() {
                        return f.each(arguments, function(e, t) {
                            for (var n;
                                (n = f.inArray(t, r, n)) > -1;) r.splice(n, 1), n <= a && a--
                        }), this
                    },
                    has: function(e) {
                        return e ? f.inArray(e, r) > -1 : r.length > 0
                    },
                    empty: function() {
                        return r && (r = []), this
                    },
                    disable: function() {
                        return o = s = [], r = n = "", this
                    },
                    disabled: function() {
                        return !r
                    },
                    lock: function() {
                        return o = !0, n || d.disable(), this
                    },
                    locked: function() {
                        return !!o
                    },
                    fireWith: function(e, n) {
                        return o || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || l()), this
                    },
                    fire: function() {
                        return d.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return d
        }, f.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", f.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", f.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", f.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return f.Deferred(function(n) {
                                f.each(t, function(t, r) {
                                    var s = f.isFunction(e[t]) && e[t];
                                    o[r[1]](function() {
                                        var e = s && s.apply(this, arguments);
                                        e && f.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? f.extend(e, i) : i
                        }
                    },
                    o = {};
                return i.pipe = i.then, f.each(t, function(e, r) {
                    var s = r[2],
                        a = r[3];
                    i[r[1]] = s.add, a && s.add(function() {
                        n = a
                    }, t[1 ^ e][2].disable, t[2][2].lock), o[r[0]] = function() {
                        return o[r[0] + "With"](this === o ? i : this, arguments), this
                    }, o[r[0] + "With"] = s.fireWith
                }), i.promise(o), e && e.call(o, o), o
            },
            when: function(e) {
                var t, n, i, r = 0,
                    s = o.call(arguments),
                    a = s.length,
                    l = 1 !== a || e && f.isFunction(e.promise) ? a : 0,
                    d = 1 === l ? e : f.Deferred(),
                    c = function(e, n, i) {
                        return function(r) {
                            n[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : r, i === t ? d.notifyWith(n, i) : --l || d.resolveWith(n, i)
                        }
                    };
                if (a > 1)
                    for (t = new Array(a), n = new Array(a), i = new Array(a); r < a; r++) s[r] && f.isFunction(s[r].promise) ? s[r].promise().progress(c(r, n, t)).done(c(r, i, s)).fail(d.reject) : --l;
                return l || d.resolveWith(i, s), d.promise()
            }
        }), f.fn.ready = function(e) {
            return f.ready.promise().done(e), this
        }, f.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? f.readyWait++ : f.ready(!0)
            },
            ready: function(e) {
                (!0 === e ? --f.readyWait : f.isReady) || (f.isReady = !0, !0 !== e && --f.readyWait > 0 || (N.resolveWith(i, [f]), f.fn.triggerHandler && (f(i).triggerHandler("ready"), f(i).off("ready"))))
            }
        }), f.ready.promise = function(t) {
            if (!N)
                if (N = f.Deferred(), "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll) e.setTimeout(f.ready);
                else if (i.addEventListener) i.addEventListener("DOMContentLoaded", O), e.addEventListener("load", O);
            else {
                i.attachEvent("onreadystatechange", O), e.attachEvent("onload", O);
                var n = !1;
                try {
                    n = null == e.frameElement && i.documentElement
                } catch (e) {}
                n && n.doScroll && function t() {
                    if (!f.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (n) {
                            return e.setTimeout(t, 50)
                        }
                        H(), f.ready()
                    }
                }()
            }
            return N.promise(t)
        }, f.ready.promise(), f(u)) break;
    u.ownFirst = "0" === L, u.inlineBlockNeedsLayout = !1, f(function() {
            var e, t, n, o;
            (n = i.getElementsByTagName("body")[0]) && n.style && (t = i.createElement("div"), (o = i.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(o).appendChild(t), void 0 !== t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", u.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(o))
        }),
        function() {
            var e = i.createElement("div");
            u.deleteExpando = !0;
            try {
                delete e.test
            } catch (e) {
                u.deleteExpando = !1
            }
            e = null
        }();
    var P = function(e) {
            var t = f.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
        },
        q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        M = /([A-Z])/g;

    function I(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var i = "data-" + t.replace(M, "-$1").toLowerCase();
            if ("string" == typeof(n = e.getAttribute(i))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : q.test(n) ? f.parseJSON(n) : n)
                } catch (e) {}
                f.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function z(e) {
        var t;
        for (t in e)
            if (("data" !== t || !f.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function W(e, t, i, o) {
        if (P(e)) {
            var r, s, a = f.expando,
                l = e.nodeType,
                d = l ? f.cache : e,
                c = l ? e[a] : e[a] && a;
            if (c && d[c] && (o || d[c].data) || void 0 !== i || "string" != typeof t) return c || (c = l ? e[a] = n.pop() || f.guid++ : a), d[c] || (d[c] = l ? {} : {
                toJSON: f.noop
            }), "object" != typeof t && "function" != typeof t || (o ? d[c] = f.extend(d[c], t) : d[c].data = f.extend(d[c].data, t)), s = d[c], o || (s.data || (s.data = {}), s = s.data), void 0 !== i && (s[f.camelCase(t)] = i), "string" == typeof t ? null == (r = s[t]) && (r = s[f.camelCase(t)]) : r = s, r
        }
    }

    function F(e, t, n) {
        if (P(e)) {
            var i, o, r = e.nodeType,
                s = r ? f.cache : e,
                a = r ? e[f.expando] : f.expando;
            if (s[a]) {
                if (t && (i = n ? s[a] : s[a].data)) {
                    f.isArray(t) ? t = t.concat(f.map(t, f.camelCase)) : t in i ? t = [t] : t = (t = f.camelCase(t)) in i ? [t] : t.split(" "), o = t.length;
                    for (; o--;) delete i[t[o]];
                    if (n ? !z(i) : !f.isEmptyObject(i)) return
                }(n || (delete s[a].data, z(s[a]))) && (r ? f.cleanData([e], !0) : u.deleteExpando || s != s.window ? delete s[a] : s[a] = void 0)
            }
        }
    }
    f.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(e) {
                return !!(e = e.nodeType ? f.cache[e[f.expando]] : e[f.expando]) && !z(e)
            },
            data: function(e, t, n) {
                return W(e, t, n)
            },
            removeData: function(e, t) {
                return F(e, t)
            },
            _data: function(e, t, n) {
                return W(e, t, n, !0)
            },
            _removeData: function(e, t) {
                return F(e, t, !0)
            }
        }), f.fn.extend({
            data: function(e, t) {
                var n, i, o, r = this[0],
                    s = r && r.attributes;
                if (void 0 === e) {
                    if (this.length && (o = f.data(r), 1 === r.nodeType && !f._data(r, "parsedAttrs"))) {
                        for (n = s.length; n--;) s[n] && (0 === (i = s[n].name).indexOf("data-") && I(r, i = f.camelCase(i.slice(5)), o[i]));
                        f._data(r, "parsedAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof e ? this.each(function() {
                    f.data(this, e)
                }) : arguments.length > 1 ? this.each(function() {
                    f.data(this, e, t)
                }) : r ? I(r, e, f.data(r, e)) : void 0
            },
            removeData: function(e) {
                return this.each(function() {
                    f.removeData(this, e)
                })
            }
        }), f.extend({
            queue: function(e, t, n) {
                var i;
                if (e) return t = (t || "fx") + "queue", i = f._data(e, t), n && (!i || f.isArray(n) ? i = f._data(e, t, f.makeArray(n)) : i.push(n)), i || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = f.queue(e, t),
                    i = n.length,
                    o = n.shift(),
                    r = f._queueHooks(e, t);
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, function() {
                    f.dequeue(e, t)
                }, r)), !i && r && r.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return f._data(e, n) || f._data(e, n, {
                    empty: f.Callbacks("once memory").add(function() {
                        f._removeData(e, t + "queue"), f._removeData(e, n)
                    })
                })
            }
        }), f.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? f.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = f.queue(this, e, t);
                    f._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && f.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    f.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, i = 1,
                    o = f.Deferred(),
                    r = this,
                    s = this.length,
                    a = function() {
                        --i || o.resolveWith(r, [r])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = f._data(r[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
                return a(), o.promise(t)
            }
        }),
        function() {
            var e;
            u.shrinkWrapBlocks = function() {
                return null != e ? e : (e = !1, (n = i.getElementsByTagName("body")[0]) && n.style ? (t = i.createElement("div"), (o = i.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(o).appendChild(t), void 0 !== t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(i.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(o), e) : void 0);
                var t, n, o
            }
        }();
    var R = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        B = new RegExp("^(?:([+-])=|)(" + R + ")([a-z%]*)$", "i"),
        X = ["Top", "Right", "Bottom", "Left"],
        U = function(e, t) {
            return e = t || e, "none" === f.css(e, "display") || !f.contains(e.ownerDocument, e)
        };

    function Y(e, t, n, i) {
        var o, r = 1,
            s = 20,
            a = i ? function() {
                return i.cur()
            } : function() {
                return f.css(e, t, "")
            },
            l = a(),
            d = n && n[3] || (f.cssNumber[t] ? "" : "px"),
            c = (f.cssNumber[t] || "px" !== d && +l) && B.exec(f.css(e, t));
        if (c && c[3] !== d) {
            d = d || c[3], n = n || [], c = +l || 1;
            do {
                c /= r = r || ".5", f.style(e, t, c + d)
            } while (r !== (r = a() / l) && 1 !== r && --s)
        }
        return n && (c = +c || +l || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = d, i.start = c, i.end = o)), o
    }
    var V = function(e, t, n, i, o, r, s) {
            var a = 0,
                l = e.length,
                d = null == n;
            if ("object" === f.type(n))
                for (a in o = !0, n) V(e, t, a, n[a], !0, r, s);
            else if (void 0 !== i && (o = !0, f.isFunction(i) || (s = !0), d && (s ? (t.call(e, i), t = null) : (d = t, t = function(e, t, n) {
                    return d.call(f(e), n)
                })), t))
                for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return o ? e : d ? t.call(e) : l ? t(e[0], n) : r
        },
        Q = /^(?:checkbox|radio)$/i,
        G = /<([\w:-]+)/,
        J = /^$|\/(?:java|ecma)script/i,
        K = /^\s+/,
        Z = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

    function ee(e) {
        var t = Z.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }! function() {
        var e = i.createElement("div"),
            t = i.createDocumentFragment(),
            n = i.createElement("input");
        e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", u.leadingWhitespace = 3 === e.firstChild.nodeType, u.tbody = !e.getElementsByTagName("tbody").length, u.htmlSerialize = !!e.getElementsByTagName("link").length, u.html5Clone = "<:nav></:nav>" !== i.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, t.appendChild(n), u.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", u.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), (n = i.createElement("input")).setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), u.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, u.noCloneEvent = !!e.addEventListener, e[f.expando] = 1, u.attributes = !e.getAttribute(f.expando)
    }();
    var te = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: u.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };

    function ne(e, t) {
        var n, i, o = 0,
            r = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
        if (!r)
            for (r = [], n = e.childNodes || e; null != (i = n[o]); o++) !t || f.nodeName(i, t) ? r.push(i) : f.merge(r, ne(i, t));
        return void 0 === t || t && f.nodeName(e, t) ? f.merge([e], r) : r
    }

    function ie(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++) f._data(n, "globalEval", !t || f._data(t[i], "globalEval"))
    }
    te.optgroup = te.option, te.tbody = te.tfoot = te.colgroup = te.caption = te.thead, te.th = te.td;
    var oe = /<|&#?\w+;/,
        re = /<tbody/i;

    function se(e) {
        Q.test(e.type) && (e.defaultChecked = e.checked)
    }

    function ae(e, t, n, i, o) {
        for (var r, s, a, l, d, c, p, h = e.length, v = ee(t), g = [], m = 0; m < h; m++)
            if ((s = e[m]) || 0 === s)
                if ("object" === f.type(s)) f.merge(g, s.nodeType ? [s] : s);
                else if (oe.test(s)) {
            for (l = l || v.appendChild(t.createElement("div")), d = (G.exec(s) || ["", ""])[1].toLowerCase(), p = te[d] || te._default, l.innerHTML = p[1] + f.htmlPrefilter(s) + p[2], r = p[0]; r--;) l = l.lastChild;
            if (!u.leadingWhitespace && K.test(s) && g.push(t.createTextNode(K.exec(s)[0])), !u.tbody)
                for (r = (s = "table" !== d || re.test(s) ? "<table>" !== p[1] || re.test(s) ? 0 : l : l.firstChild) && s.childNodes.length; r--;) f.nodeName(c = s.childNodes[r], "tbody") && !c.childNodes.length && s.removeChild(c);
            for (f.merge(g, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
            l = v.lastChild
        } else g.push(t.createTextNode(s));
        for (l && v.removeChild(l), u.appendChecked || f.grep(ne(g, "input"), se), m = 0; s = g[m++];)
            if (i && f.inArray(s, i) > -1) o && o.push(s);
            else if (a = f.contains(s.ownerDocument, s), l = ne(v.appendChild(s), "script"), a && ie(l), n)
            for (r = 0; s = l[r++];) J.test(s.type || "") && n.push(s);
        return l = null, v
    }! function() {
        var t, n, o = i.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + t, (u[t] = n in e) || (o.setAttribute(n, "t"), u[t] = !1 === o.attributes[n].expando);
        o = null
    }();
    var le = /^(?:input|select|textarea)$/i,
        de = /^key/,
        ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ue = /^(?:focusinfocus|focusoutblur)$/,
        pe = /^([^.]*)(?:\.(.+)|)/;

    function fe() {
        return !0
    }

    function he() {
        return !1
    }

    function ve() {
        try {
            return i.activeElement
        } catch (e) {}
    }

    function ge(e, t, n, i, o, r) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), t) ge(e, a, n, i, t[a], r);
            return e
        }
        if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = he;
        else if (!o) return e;
        return 1 === r && (s = o, (o = function(e) {
            return f().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = f.guid++)), e.each(function() {
            f.event.add(this, t, o, i, n)
        })
    }
    f.event = {
        global: {},
        add: function(e, t, n, i, o) {
            var r, s, a, l, d, c, u, p, h, v, g, m = f._data(e);
            if (m) {
                for (n.handler && (n = (l = n).handler, o = l.selector), n.guid || (n.guid = f.guid++), (s = m.events) || (s = m.events = {}), (c = m.handle) || ((c = m.handle = function(e) {
                        return void 0 === f || e && f.event.triggered === e.type ? void 0 : f.event.dispatch.apply(c.elem, arguments)
                    }).elem = e), a = (t = (t || "").match(D) || [""]).length; a--;) h = g = (r = pe.exec(t[a]) || [])[1], v = (r[2] || "").split(".").sort(), h && (d = f.event.special[h] || {}, h = (o ? d.delegateType : d.bindType) || h, d = f.event.special[h] || {}, u = f.extend({
                    type: h,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && f.expr.match.needsContext.test(o),
                    namespace: v.join(".")
                }, l), (p = s[h]) || ((p = s[h] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, v, c) || (e.addEventListener ? e.addEventListener(h, c, !1) : e.attachEvent && e.attachEvent("on" + h, c))), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, u) : p.push(u), f.event.global[h] = !0);
                e = null
            }
        },
        remove: function(e, t, n, i, o) {
            var r, s, a, l, d, c, u, p, h, v, g, m = f.hasData(e) && f._data(e);
            if (m && (c = m.events)) {
                for (d = (t = (t || "").match(D) || [""]).length; d--;)
                    if (h = g = (a = pe.exec(t[d]) || [])[1], v = (a[2] || "").split(".").sort(), h) {
                        for (u = f.event.special[h] || {}, p = c[h = (i ? u.delegateType : u.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = p.length; r--;) s = p[r], !o && g !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (p.splice(r, 1), s.selector && p.delegateCount--, u.remove && u.remove.call(e, s));
                        l && !p.length && (u.teardown && !1 !== u.teardown.call(e, v, m.handle) || f.removeEvent(e, h, m.handle), delete c[h])
                    } else
                        for (h in c) f.event.remove(e, h + t[d], n, i, !0);
                f.isEmptyObject(c) && (delete m.handle, f._removeData(e, "events"))
            }
        },
        trigger: function(t, n, o, r) {
            var s, a, l, d, u, p, h, v = [o || i],
                g = c.call(t, "type") ? t.type : t,
                m = c.call(t, "namespace") ? t.namespace.split(".") : [];
            if (l = p = o = o || i, 3 !== o.nodeType && 8 !== o.nodeType && !ue.test(g + f.event.triggered) && (g.indexOf(".") > -1 && (m = g.split("."), g = m.shift(), m.sort()), a = g.indexOf(":") < 0 && "on" + g, (t = t[f.expando] ? t : new f.Event(g, "object" == typeof t && t)).isTrigger = r ? 2 : 3, t.namespace = m.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = o), n = null == n ? [t] : f.makeArray(n, [t]), u = f.event.special[g] || {}, r || !u.trigger || !1 !== u.trigger.apply(o, n))) {
                if (!r && !u.noBubble && !f.isWindow(o)) {
                    for (d = u.delegateType || g, ue.test(d + g) || (l = l.parentNode); l; l = l.parentNode) v.push(l), p = l;
                    p === (o.ownerDocument || i) && v.push(p.defaultView || p.parentWindow || e)
                }
                for (h = 0;
                    (l = v[h++]) && !t.isPropagationStopped();) t.type = h > 1 ? d : u.bindType || g, (s = (f._data(l, "events") || {})[t.type] && f._data(l, "handle")) && s.apply(l, n), (s = a && l[a]) && s.apply && P(l) && (t.result = s.apply(l, n), !1 === t.result && t.preventDefault());
                if (t.type = g, !r && !t.isDefaultPrevented() && (!u._default || !1 === u._default.apply(v.pop(), n)) && P(o) && a && o[g] && !f.isWindow(o)) {
                    (p = o[a]) && (o[a] = null), f.event.triggered = g;
                    try {
                        o[g]()
                    } catch (e) {}
                    f.event.triggered = void 0, p && (o[a] = p)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = f.event.fix(e);
            var t, n, i, r, s, a = [],
                l = o.call(arguments),
                d = (f._data(this, "events") || {})[e.type] || [],
                c = f.event.special[e.type] || {};
            if (l[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                for (a = f.event.handlers.call(this, e, d), t = 0;
                    (r = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = r.elem, n = 0;
                        (s = r.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(s.namespace) || (e.handleObj = s, e.data = s.data, void 0 !== (i = ((f.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, l)) && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, i, o, r, s = [],
                a = t.delegateCount,
                l = e.target;
            if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                        for (i = [], n = 0; n < a; n++) void 0 === i[o = (r = t[n]).selector + " "] && (i[o] = r.needsContext ? f(o, this).index(l) > -1 : f.find(o, this, null, [l]).length), i[o] && i.push(r);
                        i.length && s.push({
                            elem: l,
                            handlers: i
                        })
                    } return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s
        },
        fix: function(e) {
            if (e[f.expando]) return e;
            var t, n, o, r = e.type,
                s = e,
                a = this.fixHooks[r];
            for (a || (this.fixHooks[r] = a = ce.test(r) ? this.mouseHooks : de.test(r) ? this.keyHooks : {}), o = a.props ? this.props.concat(a.props) : this.props, e = new f.Event(s), t = o.length; t--;) e[n = o[t]] = s[n];
            return e.target || (e.target = s.srcElement || i), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, s) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, o, r, s = t.button,
                    a = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = (o = e.target.ownerDocument || i).documentElement, n = o.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === s || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== ve() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === ve() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (f.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                },
                _default: function(e) {
                    return f.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n) {
            var i = f.extend(new f.Event, n, {
                type: e,
                isSimulated: !0
            });
            f.event.trigger(i, null, t), i.isDefaultPrevented() && n.preventDefault()
        }
    }, f.removeEvent = i.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    } : function(e, t, n) {
        var i = "on" + t;
        e.detachEvent && (void 0 === e[i] && (e[i] = null), e.detachEvent(i, n))
    }, f.Event = function(e, t) {
        if (!(this instanceof f.Event)) return new f.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? fe : he) : this.type = e, t && f.extend(this, t), this.timeStamp = e && e.timeStamp || f.now(), this[f.expando] = !0
    }, f.Event.prototype = {
        constructor: f.Event,
        isDefaultPrevented: he,
        isPropagationStopped: he,
        isImmediatePropagationStopped: he,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = fe, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = fe, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = fe, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, f.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        f.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = e.relatedTarget,
                    o = e.handleObj;
                return i && (i === this || f.contains(this, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), u.submit || (f.event.special.submit = {
        setup: function() {
            if (f.nodeName(this, "form")) return !1;
            f.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = f.nodeName(t, "input") || f.nodeName(t, "button") ? f.prop(t, "form") : void 0;
                n && !f._data(n, "submit") && (f.event.add(n, "submit._submit", function(e) {
                    e._submitBubble = !0
                }), f._data(n, "submit", !0))
            })
        },
        postDispatch: function(e) {
            e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && f.event.simulate("submit", this.parentNode, e))
        },
        teardown: function() {
            if (f.nodeName(this, "form")) return !1;
            f.event.remove(this, "._submit")
        }
    }), u.change || (f.event.special.change = {
        setup: function() {
            if (le.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (f.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
            }), f.event.add(this, "click._change", function(e) {
                this._justChanged && !e.isTrigger && (this._justChanged = !1), f.event.simulate("change", this, e)
            })), !1;
            f.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                le.test(t.nodeName) && !f._data(t, "change") && (f.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || f.event.simulate("change", this.parentNode, e)
                }), f._data(t, "change", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return f.event.remove(this, "._change"), !le.test(this.nodeName)
        }
    }), u.focusin || f.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            f.event.simulate(t, e.target, f.event.fix(e))
        };
        f.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    o = f._data(i, t);
                o || i.addEventListener(e, n, !0), f._data(i, t, (o || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    o = f._data(i, t) - 1;
                o ? f._data(i, t, o) : (i.removeEventListener(e, n, !0), f._removeData(i, t))
            }
        }
    }), f.fn.extend({
        on: function(e, t, n, i) {
            return ge(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return ge(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, f(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = he), this.each(function() {
                f.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                f.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return f.event.trigger(e, t, n, !0)
        }
    });
    var me = / jQuery\d+="(?:null|\d+)"/g,
        ye = new RegExp("<(?:" + Z + ")[\\s/>]", "i"),
        be = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        we = /<script|<style|<link/i,
        ke = /checked\s*(?:[^=]|=\s*.checked.)/i,
        xe = /^true\/(.*)/,
        Te = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ce = ee(i).appendChild(i.createElement("div"));

    function Se(e, t) {
        return f.nodeName(e, "table") && f.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function _e(e) {
        return e.type = (null !== f.find.attr(e, "type")) + "/" + e.type, e
    }

    function $e(e) {
        var t = xe.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function Ae(e, t) {
        if (1 === t.nodeType && f.hasData(e)) {
            var n, i, o, r = f._data(e),
                s = f._data(t, r),
                a = r.events;
            if (a)
                for (n in delete s.handle, s.events = {}, a)
                    for (i = 0, o = a[n].length; i < o; i++) f.event.add(t, n, a[n][i]);
            s.data && (s.data = f.extend({}, s.data))
        }
    }

    function je(e, t) {
        var n, i, o;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !u.noCloneEvent && t[f.expando]) {
                for (i in (o = f._data(t)).events) f.removeEvent(t, i, o.handle);
                t.removeAttribute(f.expando)
            }
            "script" === n && t.text !== e.text ? (_e(t).text = e.text, $e(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), u.html5Clone && e.innerHTML && !f.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Q.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
    }

    function Ee(e, t, n, i) {
        t = r.apply([], t);
        var o, s, a, l, d, c, p = 0,
            h = e.length,
            v = h - 1,
            g = t[0],
            m = f.isFunction(g);
        if (m || h > 1 && "string" == typeof g && !u.checkClone && ke.test(g)) return e.each(function(o) {
            var r = e.eq(o);
            m && (t[0] = g.call(this, o, r.html())), Ee(r, t, n, i)
        });
        if (h && (o = (c = ae(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === c.childNodes.length && (c = o), o || i)) {
            for (a = (l = f.map(ne(c, "script"), _e)).length; p < h; p++) s = c, p !== v && (s = f.clone(s, !0, !0), a && f.merge(l, ne(s, "script"))), n.call(e[p], s, p);
            if (a)
                for (d = l[l.length - 1].ownerDocument, f.map(l, $e), p = 0; p < a; p++) s = l[p], J.test(s.type || "") && !f._data(s, "globalEval") && f.contains(d, s) && (s.src ? f._evalUrl && f._evalUrl(s.src) : f.globalEval((s.text || s.textContent || s.innerHTML || "").replace(Te, "")));
            c = o = null
        }
        return e
    }

    function Ne(e, t, n) {
        for (var i, o = t ? f.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || f.cleanData(ne(i)), i.parentNode && (n && f.contains(i.ownerDocument, i) && ie(ne(i, "script")), i.parentNode.removeChild(i));
        return e
    }
    f.extend({
        htmlPrefilter: function(e) {
            return e.replace(be, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, o, r, s, a, l = f.contains(e.ownerDocument, e);
            if (u.html5Clone || f.isXMLDoc(e) || !ye.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) : (Ce.innerHTML = e.outerHTML, Ce.removeChild(r = Ce.firstChild)), !(u.noCloneEvent && u.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || f.isXMLDoc(e)))
                for (i = ne(r), a = ne(e), s = 0; null != (o = a[s]); ++s) i[s] && je(o, i[s]);
            if (t)
                if (n)
                    for (a = a || ne(e), i = i || ne(r), s = 0; null != (o = a[s]); s++) Ae(o, i[s]);
                else Ae(e, r);
            return (i = ne(r, "script")).length > 0 && ie(i, !l && ne(e, "script")), i = a = o = null, r
        },
        cleanData: function(e, t) {
            for (var i, o, r, s, a = 0, l = f.expando, d = f.cache, c = u.attributes, p = f.event.special; null != (i = e[a]); a++)
                if ((t || P(i)) && (s = (r = i[l]) && d[r])) {
                    if (s.events)
                        for (o in s.events) p[o] ? f.event.remove(i, o) : f.removeEvent(i, o, s.handle);
                    d[r] && (delete d[r], c || void 0 === i.removeAttribute ? i[l] = void 0 : i.removeAttribute(l), n.push(r))
                }
        }
    }), f.fn.extend({
        domManip: Ee,
        detach: function(e) {
            return Ne(this, e, !0)
        },
        remove: function(e) {
            return Ne(this, e)
        },
        text: function(e) {
            return V(this, function(e) {
                return void 0 === e ? f.text(this) : this.empty().append((this[0] && this[0].ownerDocument || i).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return Ee(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Se(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Ee(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Se(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Ee(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Ee(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && f.cleanData(ne(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && f.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return f.clone(this, e, t)
            })
        },
        html: function(e) {
            return V(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(me, "") : void 0;
                if ("string" == typeof e && !we.test(e) && (u.htmlSerialize || !ye.test(e)) && (u.leadingWhitespace || !K.test(e)) && !te[(G.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = f.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (f.cleanData(ne(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Ee(this, arguments, function(t) {
                var n = this.parentNode;
                f.inArray(this, e) < 0 && (f.cleanData(ne(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), f.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        f.fn[e] = function(e) {
            for (var n, i = 0, o = [], r = f(e), a = r.length - 1; i <= a; i++) n = i === a ? this : this.clone(!0), f(r[i])[t](n), s.apply(o, n.get());
            return this.pushStack(o)
        }
    });
    var Le, De = {
        HTML: "block",
        BODY: "block"
    };

    function He(e, t) {
        var n = f(t.createElement(e)).appendTo(t.body),
            i = f.css(n[0], "display");
        return n.detach(), i
    }

    function Oe(e) {
        var t = i,
            n = De[e];
        return n || ("none" !== (n = He(e, t)) && n || ((t = ((Le = (Le || f("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || Le[0].contentDocument).document).write(), t.close(), n = He(e, t), Le.detach()), De[e] = n), n
    }
    var Pe = /^margin/,
        qe = new RegExp("^(" + R + ")(?!px)[a-z%]+$", "i"),
        Me = function(e, t, n, i) {
            var o, r, s = {};
            for (r in t) s[r] = e.style[r], e.style[r] = t[r];
            for (r in o = n.apply(e, i || []), t) e.style[r] = s[r];
            return o
        },
        Ie = i.documentElement;
    ! function() {
        var t, n, o, r, s, a, l = i.createElement("div"),
            d = i.createElement("div");

        function c() {
            var c, u, p = i.documentElement;
            p.appendChild(l), d.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", t = o = a = !1, n = s = !0, e.getComputedStyle && (u = e.getComputedStyle(d), t = "1%" !== (u || {}).top, a = "2px" === (u || {}).marginLeft, o = "4px" === (u || {
                width: "4px"
            }).width, d.style.marginRight = "50%", n = "4px" === (u || {
                marginRight: "4px"
            }).marginRight, (c = d.appendChild(i.createElement("div"))).style.cssText = d.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", d.style.width = "1px", s = !parseFloat((e.getComputedStyle(c) || {}).marginRight), d.removeChild(c)), d.style.display = "none", (r = 0 === d.getClientRects().length) && (d.style.display = "", d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", d.childNodes[0].style.borderCollapse = "separate", (c = d.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (r = 0 === c[0].offsetHeight) && (c[0].style.display = "", c[1].style.display = "none", r = 0 === c[0].offsetHeight)), p.removeChild(l)
        }
        d.style && (d.style.cssText = "float:left;opacity:.5", u.opacity = "0.5" === d.style.opacity, u.cssFloat = !!d.style.cssFloat, d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", u.clearCloneStyle = "content-box" === d.style.backgroundClip, (l = i.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", d.innerHTML = "", l.appendChild(d), u.boxSizing = "" === d.style.boxSizing || "" === d.style.MozBoxSizing || "" === d.style.WebkitBoxSizing, f.extend(u, {
            reliableHiddenOffsets: function() {
                return null == t && c(), r
            },
            boxSizingReliable: function() {
                return null == t && c(), o
            },
            pixelMarginRight: function() {
                return null == t && c(), n
            },
            pixelPosition: function() {
                return null == t && c(), t
            },
            reliableMarginRight: function() {
                return null == t && c(), s
            },
            reliableMarginLeft: function() {
                return null == t && c(), a
            }
        }))
    }();
    var ze, We, Fe = /^(top|right|bottom|left)$/;

    function Re(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    e.getComputedStyle ? (ze = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t)
    }, We = function(e, t, n) {
        var i, o, r, s, a = e.style;
        return "" !== (s = (n = n || ze(e)) ? n.getPropertyValue(t) || n[t] : void 0) && void 0 !== s || f.contains(e.ownerDocument, e) || (s = f.style(e, t)), n && !u.pixelMarginRight() && qe.test(s) && Pe.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r), void 0 === s ? s : s + ""
    }) : Ie.currentStyle && (ze = function(e) {
        return e.currentStyle
    }, We = function(e, t, n) {
        var i, o, r, s, a = e.style;
        return null == (s = (n = n || ze(e)) ? n[t] : void 0) && a && a[t] && (s = a[t]), qe.test(s) && !Fe.test(t) && (i = a.left, (r = (o = e.runtimeStyle) && o.left) && (o.left = e.currentStyle.left), a.left = "fontSize" === t ? "1em" : s, s = a.pixelLeft + "px", a.left = i, r && (o.left = r)), void 0 === s ? s : s + "" || "auto"
    });
    var Be = /alpha\([^)]*\)/i,
        Xe = /opacity\s*=\s*([^)]*)/i,
        Ue = /^(none|table(?!-c[ea]).+)/,
        Ye = new RegExp("^(" + R + ")(.*)$", "i"),
        Ve = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Qe = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ge = ["Webkit", "O", "Moz", "ms"],
        Je = i.createElement("div").style;

    function Ke(e) {
        if (e in Je) return e;
        for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = Ge.length; n--;)
            if ((e = Ge[n] + t) in Je) return e
    }

    function Ze(e, t) {
        for (var n, i, o, r = [], s = 0, a = e.length; s < a; s++)(i = e[s]).style && (r[s] = f._data(i, "olddisplay"), n = i.style.display, t ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && U(i) && (r[s] = f._data(i, "olddisplay", Oe(i.nodeName)))) : (o = U(i), (n && "none" !== n || !o) && f._data(i, "olddisplay", o ? n : f.css(i, "display"))));
        for (s = 0; s < a; s++)(i = e[s]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[s] || "" : "none"));
        return e
    }

    function et(e, t, n) {
        var i = Ye.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function tt(e, t, n, i, o) {
        for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; r < 4; r += 2) "margin" === n && (s += f.css(e, n + X[r], !0, o)), i ? ("content" === n && (s -= f.css(e, "padding" + X[r], !0, o)), "margin" !== n && (s -= f.css(e, "border" + X[r] + "Width", !0, o))) : (s += f.css(e, "padding" + X[r], !0, o), "padding" !== n && (s += f.css(e, "border" + X[r] + "Width", !0, o)));
        return s
    }

    function nt(e, t, n) {
        var i = !0,
            o = "width" === t ? e.offsetWidth : e.offsetHeight,
            r = ze(e),
            s = u.boxSizing && "border-box" === f.css(e, "boxSizing", !1, r);
        if (o <= 0 || null == o) {
            if (((o = We(e, t, r)) < 0 || null == o) && (o = e.style[t]), qe.test(o)) return o;
            i = s && (u.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
        }
        return o + tt(e, t, n || (s ? "border" : "content"), i, r) + "px"
    }

    function it(e, t, n, i, o) {
        return new it.prototype.init(e, t, n, i, o)
    }
    f.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = We(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: u.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, s, a = f.camelCase(t),
                    l = e.style;
                if (t = f.cssProps[a] || (f.cssProps[a] = Ke(a) || a), s = f.cssHooks[t] || f.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : l[t];
                if ("string" === (r = typeof n) && (o = B.exec(n)) && o[1] && (n = Y(e, t, o), r = "number"), null != n && n == n && ("number" === r && (n += o && o[3] || (f.cssNumber[a] ? "" : "px")), u.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(s && "set" in s && void 0 === (n = s.set(e, n, i))))) try {
                    l[t] = n
                } catch (e) {}
            }
        },
        css: function(e, t, n, i) {
            var o, r, s, a = f.camelCase(t);
            return t = f.cssProps[a] || (f.cssProps[a] = Ke(a) || a), (s = f.cssHooks[t] || f.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = We(e, t, i)), "normal" === r && t in Qe && (r = Qe[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }), f.each(["height", "width"], function(e, t) {
        f.cssHooks[t] = {
            get: function(e, n, i) {
                if (n) return Ue.test(f.css(e, "display")) && 0 === e.offsetWidth ? Me(e, Ve, function() {
                    return nt(e, t, i)
                }) : nt(e, t, i)
            },
            set: function(e, n, i) {
                var o = i && ze(e);
                return et(0, n, i ? tt(e, t, i, u.boxSizing && "border-box" === f.css(e, "boxSizing", !1, o), o) : 0)
            }
        }
    }), u.opacity || (f.cssHooks.opacity = {
        get: function(e, t) {
            return Xe.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                i = e.currentStyle,
                o = f.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                r = i && i.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === f.trim(r.replace(Be, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = Be.test(r) ? r.replace(Be, o) : r + " " + o)
        }
    }), f.cssHooks.marginRight = Re(u.reliableMarginRight, function(e, t) {
        if (t) return Me(e, {
            display: "inline-block"
        }, We, [e, "marginRight"])
    }), f.cssHooks.marginLeft = Re(u.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(We(e, "marginLeft")) || (f.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - Me(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        }) : 0)) + "px"
    }), f.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        f.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[e + X[i] + t] = r[i] || r[i - 2] || r[0];
                return o
            }
        }, Pe.test(e) || (f.cssHooks[e + t].set = et)
    }), f.fn.extend({
        css: function(e, t) {
            return V(this, function(e, t, n) {
                var i, o, r = {},
                    s = 0;
                if (f.isArray(t)) {
                    for (i = ze(e), o = t.length; s < o; s++) r[t[s]] = f.css(e, t[s], !1, i);
                    return r
                }
                return void 0 !== n ? f.style(e, t, n) : f.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return Ze(this, !0)
        },
        hide: function() {
            return Ze(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                U(this) ? f(this).show() : f(this).hide()
            })
        }
    }), f.Tween = it, it.prototype = {
        constructor: it,
        init: function(e, t, n, i, o, r) {
            this.elem = e, this.prop = n, this.easing = o || f.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (f.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = it.propHooks[this.prop];
            return e && e.get ? e.get(this) : it.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = it.propHooks[this.prop];
            return this.options.duration ? this.pos = t = f.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : it.propHooks._default.set(this), this
        }
    }, it.prototype.init.prototype = it.prototype, it.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = f.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                f.fx.step[e.prop] ? f.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[f.cssProps[e.prop]] && !f.cssHooks[e.prop] ? e.elem[e.prop] = e.now : f.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, it.propHooks.scrollTop = it.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, f.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, f.fx = it.prototype.init, f.fx.step = {};
    var ot, rt, st = /^(?:toggle|show|hide)$/,
        at = /queueHooks$/;

    function lt() {
        return e.setTimeout(function() {
            ot = void 0
        }), ot = f.now()
    }

    function dt(e, t) {
        var n, i = {
                height: e
            },
            o = 0;
        for (t = t ? 1 : 0; o < 4; o += 2 - t) i["margin" + (n = X[o])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function ct(e, t, n) {
        for (var i, o = (ut.tweeners[t] || []).concat(ut.tweeners["*"]), r = 0, s = o.length; r < s; r++)
            if (i = o[r].call(n, t, e)) return i
    }

    function ut(e, t, n) {
        var i, o, r = 0,
            s = ut.prefilters.length,
            a = f.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var t = ot || lt(), n = Math.max(0, d.startTime + d.duration - t), i = 1 - (n / d.duration || 0), r = 0, s = d.tweens.length; r < s; r++) d.tweens[r].run(i);
                return a.notifyWith(e, [d, i, n]), i < 1 && s ? n : (a.resolveWith(e, [d]), !1)
            },
            d = a.promise({
                elem: e,
                props: f.extend({}, t),
                opts: f.extend(!0, {
                    specialEasing: {},
                    easing: f.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: ot || lt(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = f.Tween(e, d.opts, t, n, d.opts.specialEasing[t] || d.opts.easing);
                    return d.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? d.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n < i; n++) d.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [d, 1, 0]), a.resolveWith(e, [d, t])) : a.rejectWith(e, [d, t]), this
                }
            }),
            c = d.props;
        for (function(e, t) {
                var n, i, o, r, s;
                for (n in e)
                    if (o = t[i = f.camelCase(n)], r = e[n], f.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = f.cssHooks[i]) && "expand" in s)
                        for (n in r = s.expand(r), delete e[i], r) n in e || (e[n] = r[n], t[n] = o);
                    else t[i] = o
            }(c, d.opts.specialEasing); r < s; r++)
            if (i = ut.prefilters[r].call(d, e, c, d.opts)) return f.isFunction(i.stop) && (f._queueHooks(d.elem, d.opts.queue).stop = f.proxy(i.stop, i)), i;
        return f.map(c, ct, d), f.isFunction(d.opts.start) && d.opts.start.call(e, d), f.fx.timer(f.extend(l, {
            elem: e,
            anim: d,
            queue: d.opts.queue
        })), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always)
    }
    f.Animation = f.extend(ut, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return Y(n.elem, e, B.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                f.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(D);
                for (var n, i = 0, o = e.length; i < o; i++) n = e[i], ut.tweeners[n] = ut.tweeners[n] || [], ut.tweeners[n].unshift(t)
            },
            prefilters: [function(e, t, n) {
                var i, o, r, s, a, l, d, c = this,
                    p = {},
                    h = e.style,
                    v = e.nodeType && U(e),
                    g = f._data(e, "fxshow");
                for (i in n.queue || (null == (a = f._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                        a.unqueued || l()
                    }), a.unqueued++, c.always(function() {
                        c.always(function() {
                            a.unqueued--, f.queue(e, "fx").length || a.empty.fire()
                        })
                    })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === ("none" === (d = f.css(e, "display")) ? f._data(e, "olddisplay") || Oe(e.nodeName) : d) && "none" === f.css(e, "float") && (u.inlineBlockNeedsLayout && "inline" !== Oe(e.nodeName) ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", u.shrinkWrapBlocks() || c.always(function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), t)
                    if (o = t[i], st.exec(o)) {
                        if (delete t[i], r = r || "toggle" === o, o === (v ? "hide" : "show")) {
                            if ("show" !== o || !g || void 0 === g[i]) continue;
                            v = !0
                        }
                        p[i] = g && g[i] || f.style(e, i)
                    } else d = void 0;
                if (f.isEmptyObject(p)) "inline" === ("none" === d ? Oe(e.nodeName) : d) && (h.display = d);
                else
                    for (i in g ? "hidden" in g && (v = g.hidden) : g = f._data(e, "fxshow", {}), r && (g.hidden = !v), v ? f(e).show() : c.done(function() {
                            f(e).hide()
                        }), c.done(function() {
                            var t;
                            for (t in f._removeData(e, "fxshow"), p) f.style(e, t, p[t])
                        }), p) s = ct(v ? g[i] : 0, i, c), i in g || (g[i] = s.start, v && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
            }],
            prefilter: function(e, t) {
                t ? ut.prefilters.unshift(e) : ut.prefilters.push(e)
            }
        }), f.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? f.extend({}, e) : {
                complete: n || !n && t || f.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !f.isFunction(t) && t
            };
            return i.duration = f.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in f.fx.speeds ? f.fx.speeds[i.duration] : f.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                f.isFunction(i.old) && i.old.call(this), i.queue && f.dequeue(this, i.queue)
            }, i
        }, f.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(U).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var o = f.isEmptyObject(e),
                    r = f.speed(t, n, i),
                    s = function() {
                        var t = ut(this, f.extend({}, e), r);
                        (o || f._data(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        o = null != e && e + "queueHooks",
                        r = f.timers,
                        s = f._data(this);
                    if (o) s[o] && s[o].stop && i(s[o]);
                    else
                        for (o in s) s[o] && s[o].stop && at.test(o) && i(s[o]);
                    for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                    !t && n || f.dequeue(this, e)
                })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each(function() {
                    var t, n = f._data(this),
                        i = n[e + "queue"],
                        o = n[e + "queueHooks"],
                        r = f.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, f.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                    for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), f.each(["toggle", "show", "hide"], function(e, t) {
            var n = f.fn[t];
            f.fn[t] = function(e, i, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(dt(t, !0), e, i, o)
            }
        }), f.each({
            slideDown: dt("show"),
            slideUp: dt("hide"),
            slideToggle: dt("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            f.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), f.timers = [], f.fx.tick = function() {
            var e, t = f.timers,
                n = 0;
            for (ot = f.now(); n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
            t.length || f.fx.stop(), ot = void 0
        }, f.fx.timer = function(e) {
            f.timers.push(e), e() ? f.fx.start() : f.timers.pop()
        }, f.fx.interval = 13, f.fx.start = function() {
            rt || (rt = e.setInterval(f.fx.tick, f.fx.interval))
        }, f.fx.stop = function() {
            e.clearInterval(rt), rt = null
        }, f.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, f.fn.delay = function(t, n) {
            return t = f.fx && f.fx.speeds[t] || t, n = n || "fx", this.queue(n, function(n, i) {
                var o = e.setTimeout(n, t);
                i.stop = function() {
                    e.clearTimeout(o)
                }
            })
        },
        function() {
            var e, t = i.createElement("input"),
                n = i.createElement("div"),
                o = i.createElement("select"),
                r = o.appendChild(i.createElement("option"));
            (n = i.createElement("div")).setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), (e = n.getElementsByTagName("a")[0]).style.cssText = "top:1px", u.getSetAttribute = "t" !== n.className, u.style = /top/.test(e.getAttribute("style")), u.hrefNormalized = "/a" === e.getAttribute("href"), u.checkOn = !!t.value, u.optSelected = r.selected, u.enctype = !!i.createElement("form").enctype, o.disabled = !0, u.optDisabled = !r.disabled, (t = i.createElement("input")).setAttribute("value", ""), u.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), u.radioValue = "t" === t.value
        }();
    var pt = /\r/g,
        ft = /[\x20\t\r\n\f]+/g;
    f.fn.extend({
        val: function(e) {
            var t, n, i, o = this[0];
            return arguments.length ? (i = f.isFunction(e), this.each(function(n) {
                var o;
                1 === this.nodeType && (null == (o = i ? e.call(this, n, f(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : f.isArray(o) && (o = f.map(o, function(e) {
                    return null == e ? "" : e + ""
                })), (t = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            })) : o ? (t = f.valHooks[o.type] || f.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof(n = o.value) ? n.replace(pt, "") : null == n ? "" : n : void 0
        }
    }), f.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = f.find.attr(e, "value");
                    return null != t ? t : f.trim(f.text(e)).replace(ft, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || o < 0, s = r ? null : [], a = r ? o + 1 : i.length, l = o < 0 ? a : r ? o : 0; l < a; l++)
                        if (((n = i[l]).selected || l === o) && (u.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !f.nodeName(n.parentNode, "optgroup"))) {
                            if (t = f(n).val(), r) return t;
                            s.push(t)
                        } return s
                },
                set: function(e, t) {
                    for (var n, i, o = e.options, r = f.makeArray(t), s = o.length; s--;)
                        if (i = o[s], f.inArray(f.valHooks.option.get(i), r) > -1) try {
                            i.selected = n = !0
                        } catch (e) {
                            i.scrollHeight
                        } else i.selected = !1;
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), f.each(["radio", "checkbox"], function() {
        f.valHooks[this] = {
            set: function(e, t) {
                if (f.isArray(t)) return e.checked = f.inArray(f(e).val(), t) > -1
            }
        }, u.checkOn || (f.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var ht, vt, gt = f.expr.attrHandle,
        mt = /^(?:checked|selected)$/i,
        yt = u.getSetAttribute,
        bt = u.input;
    f.fn.extend({
        attr: function(e, t) {
            return V(this, f.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                f.removeAttr(this, e)
            })
        }
    }), f.extend({
        attr: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? f.prop(e, t, n) : (1 === r && f.isXMLDoc(e) || (t = t.toLowerCase(), o = f.attrHooks[t] || (f.expr.match.bool.test(t) ? vt : ht)), void 0 !== n ? null === n ? void f.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : null == (i = f.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!u.radioValue && "radio" === t && f.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i, o = 0,
                r = t && t.match(D);
            if (r && 1 === e.nodeType)
                for (; n = r[o++];) i = f.propFix[n] || n, f.expr.match.bool.test(n) ? bt && yt || !mt.test(n) ? e[i] = !1 : e[f.camelCase("default-" + n)] = e[i] = !1 : f.attr(e, n, ""), e.removeAttribute(yt ? n : i)
        }
    }), vt = {
        set: function(e, t, n) {
            return !1 === t ? f.removeAttr(e, n) : bt && yt || !mt.test(n) ? e.setAttribute(!yt && f.propFix[n] || n, n) : e[f.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, f.each(f.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = gt[t] || f.find.attr;
        bt && yt || !mt.test(t) ? gt[t] = function(e, t, i) {
            var o, r;
            return i || (r = gt[t], gt[t] = o, o = null != n(e, t, i) ? t.toLowerCase() : null, gt[t] = r), o
        } : gt[t] = function(e, t, n) {
            if (!n) return e[f.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), bt && yt || (f.attrHooks.value = {
        set: function(e, t, n) {
            if (!f.nodeName(e, "input")) return ht && ht.set(e, t, n);
            e.defaultValue = t
        }
    }), yt || (ht = {
        set: function(e, t, n) {
            var i = e.getAttributeNode(n);
            if (i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n)) return t
        }
    }, gt.id = gt.name = gt.coords = function(e, t, n) {
        var i;
        if (!n) return (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
    }, f.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            if (n && n.specified) return n.value
        },
        set: ht.set
    }, f.attrHooks.contenteditable = {
        set: function(e, t, n) {
            ht.set(e, "" !== t && t, n)
        }
    }, f.each(["width", "height"], function(e, t) {
        f.attrHooks[t] = {
            set: function(e, n) {
                if ("" === n) return e.setAttribute(t, "auto"), n
            }
        }
    })), u.style || (f.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var wt = /^(?:input|select|textarea|button|object)$/i,
        kt = /^(?:a|area)$/i;
    f.fn.extend({
        prop: function(e, t) {
            return V(this, f.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = f.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e]
                } catch (e) {}
            })
        }
    }), f.extend({
        prop: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && f.isXMLDoc(e) || (t = f.propFix[t] || t, o = f.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = f.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : wt.test(e.nodeName) || kt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), u.hrefNormalized || f.each(["href", "src"], function(e, t) {
        f.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), u.optSelected || (f.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), f.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        f.propFix[this.toLowerCase()] = this
    }), u.enctype || (f.propFix.enctype = "encoding");
    var xt = /[\t\r\n\f]/g;

    function Tt(e) {
        return f.attr(e, "class") || ""
    }
    f.fn.extend({
        addClass: function(e) {
            var t, n, i, o, r, s, a, l = 0;
            if (f.isFunction(e)) return this.each(function(t) {
                f(this).addClass(e.call(this, t, Tt(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(D) || []; n = this[l++];)
                    if (o = Tt(n), i = 1 === n.nodeType && (" " + o + " ").replace(xt, " ")) {
                        for (s = 0; r = t[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        o !== (a = f.trim(i)) && f.attr(n, "class", a)
                    } return this
        },
        removeClass: function(e) {
            var t, n, i, o, r, s, a, l = 0;
            if (f.isFunction(e)) return this.each(function(t) {
                f(this).removeClass(e.call(this, t, Tt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(D) || []; n = this[l++];)
                    if (o = Tt(n), i = 1 === n.nodeType && (" " + o + " ").replace(xt, " ")) {
                        for (s = 0; r = t[s++];)
                            for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                        o !== (a = f.trim(i)) && f.attr(n, "class", a)
                    } return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : f.isFunction(e) ? this.each(function(n) {
                f(this).toggleClass(e.call(this, n, Tt(this), t), t)
            }) : this.each(function() {
                var t, i, o, r;
                if ("string" === n)
                    for (i = 0, o = f(this), r = e.match(D) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else void 0 !== e && "boolean" !== n || ((t = Tt(this)) && f._data(this, "__className__", t), f.attr(this, "class", t || !1 === e ? "" : f._data(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + Tt(n) + " ").replace(xt, " ").indexOf(t) > -1) return !0;
            return !1
        }
    }), f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        f.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), f.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    });
    var Ct = e.location,
        St = f.now(),
        _t = /\?/,
        $t = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    f.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, i = null,
            o = f.trim(t + "");
        return o && !f.trim(o.replace($t, function(e, t, o, r) {
            return n && t && (i = 0), 0 === i ? e : (n = o || t, i += !r - !o, "")
        })) ? Function("return " + o)() : f.error("Invalid JSON: " + t)
    }, f.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? n = (new e.DOMParser).parseFromString(t, "text/xml") : ((n = new e.ActiveXObject("Microsoft.XMLDOM")).async = "false", n.loadXML(t))
        } catch (e) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || f.error("Invalid XML: " + t), n
    };
    var At = /#.*$/,
        jt = /([?&])_=[^&]*/,
        Et = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Nt = /^(?:GET|HEAD)$/,
        Lt = /^\/\//,
        Dt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Ht = {},
        Ot = {},
        Pt = "*/".concat("*"),
        qt = Ct.href,
        Mt = Dt.exec(qt.toLowerCase()) || [];

    function It(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, o = 0,
                r = t.toLowerCase().match(D) || [];
            if (f.isFunction(n))
                for (; i = r[o++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function zt(e, t, n, i) {
        var o = {},
            r = e === Ot;

        function s(a) {
            var l;
            return o[a] = !0, f.each(e[a] || [], function(e, a) {
                var d = a(t, n, i);
                return "string" != typeof d || r || o[d] ? r ? !(l = d) : void 0 : (t.dataTypes.unshift(d), s(d), !1)
            }), l
        }
        return s(t.dataTypes[0]) || !o["*"] && s("*")
    }

    function Wt(e, t) {
        var n, i, o = f.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
        return n && f.extend(!0, e, n), e
    }

    function Ft(e) {
        return e.style && e.style.display || f.css(e, "display")
    }
    f.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: qt,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Mt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Pt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": f.parseJSON,
                "text xml": f.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Wt(Wt(e, f.ajaxSettings), t) : Wt(f.ajaxSettings, e)
        },
        ajaxPrefilter: It(Ht),
        ajaxTransport: It(Ot),
        ajax: function(t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, o, r, s, a, l, d, c, u = f.ajaxSetup({}, n),
                p = u.context || u,
                h = u.context && (p.nodeType || p.jquery) ? f(p) : f.event,
                v = f.Deferred(),
                g = f.Callbacks("once memory"),
                m = u.statusCode || {},
                y = {},
                b = {},
                w = 0,
                k = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === w) {
                            if (!c)
                                for (c = {}; t = Et.exec(s);) c[t[1].toLowerCase()] = t[2];
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === w ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return w || (e = b[n] = b[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return w || (u.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (w < 2)
                                for (t in e) m[t] = [m[t], e[t]];
                            else x.always(e[x.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || k;
                        return d && d.abort(t), T(0, t), this
                    }
                };
            if (v.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, u.url = ((t || u.url || qt) + "").replace(At, "").replace(Lt, Mt[1] + "//"), u.type = n.method || n.type || u.method || u.type, u.dataTypes = f.trim(u.dataType || "*").toLowerCase().match(D) || [""], null == u.crossDomain && (i = Dt.exec(u.url.toLowerCase()), u.crossDomain = !(!i || i[1] === Mt[1] && i[2] === Mt[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Mt[3] || ("http:" === Mt[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = f.param(u.data, u.traditional)), zt(Ht, u, n, x), 2 === w) return x;
            for (o in (l = f.event && u.global) && 0 == f.active++ && f.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !Nt.test(u.type), r = u.url, u.hasContent || (u.data && (r = u.url += (_t.test(r) ? "&" : "?") + u.data, delete u.data), !1 === u.cache && (u.url = jt.test(r) ? r.replace(jt, "$1_=" + St++) : r + (_t.test(r) ? "&" : "?") + "_=" + St++)), u.ifModified && (f.lastModified[r] && x.setRequestHeader("If-Modified-Since", f.lastModified[r]), f.etag[r] && x.setRequestHeader("If-None-Match", f.etag[r])), (u.data && u.hasContent && !1 !== u.contentType || n.contentType) && x.setRequestHeader("Content-Type", u.contentType), x.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + Pt + "; q=0.01" : "") : u.accepts["*"]), u.headers) x.setRequestHeader(o, u.headers[o]);
            if (u.beforeSend && (!1 === u.beforeSend.call(p, x, u) || 2 === w)) return x.abort();
            for (o in k = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[o](u[o]);
            if (d = zt(Ot, u, n, x)) {
                if (x.readyState = 1, l && h.trigger("ajaxSend", [x, u]), 2 === w) return x;
                u.async && u.timeout > 0 && (a = e.setTimeout(function() {
                    x.abort("timeout")
                }, u.timeout));
                try {
                    w = 1, d.send(y, T)
                } catch (e) {
                    if (!(w < 2)) throw e;
                    T(-1, e)
                }
            } else T(-1, "No Transport");

            function T(t, n, i, o) {
                var c, y, b, k, T, C = n;
                2 !== w && (w = 2, a && e.clearTimeout(a), d = void 0, s = o || "", x.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, i && (k = function(e, t, n) {
                    for (var i, o, r, s, a = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (o)
                        for (s in a)
                            if (a[s] && a[s].test(o)) {
                                l.unshift(s);
                                break
                            } if (l[0] in n) r = l[0];
                    else {
                        for (s in n) {
                            if (!l[0] || e.converters[s + " " + l[0]]) {
                                r = s;
                                break
                            }
                            i || (i = s)
                        }
                        r = r || i
                    }
                    if (r) return r !== l[0] && l.unshift(r), n[r]
                }(u, x, i)), k = function(e, t, n, i) {
                    var o, r, s, a, l, d = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (s in e.converters) d[s.toLowerCase()] = e.converters[s];
                    for (r = c.shift(); r;)
                        if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = c.shift())
                            if ("*" === r) r = l;
                            else if ("*" !== l && l !== r) {
                        if (!(s = d[l + " " + r] || d["* " + r]))
                            for (o in d)
                                if ((a = o.split(" "))[1] === r && (s = d[l + " " + a[0]] || d["* " + a[0]])) {
                                    !0 === s ? s = d[o] : !0 !== d[o] && (r = a[0], c.unshift(a[1]));
                                    break
                                } if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else try {
                                t = s(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + l + " to " + r
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(u, k, x, c), c ? (u.ifModified && ((T = x.getResponseHeader("Last-Modified")) && (f.lastModified[r] = T), (T = x.getResponseHeader("etag")) && (f.etag[r] = T)), 204 === t || "HEAD" === u.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = k.state, y = k.data, c = !(b = k.error))) : (b = C, !t && C || (C = "error", t < 0 && (t = 0))), x.status = t, x.statusText = (n || C) + "", c ? v.resolveWith(p, [y, C, x]) : v.rejectWith(p, [x, C, b]), x.statusCode(m), m = void 0, l && h.trigger(c ? "ajaxSuccess" : "ajaxError", [x, u, c ? y : b]), g.fireWith(p, [x, C]), l && (h.trigger("ajaxComplete", [x, u]), --f.active || f.event.trigger("ajaxStop")))
            }
            return x
        },
        getJSON: function(e, t, n) {
            return f.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return f.get(e, void 0, t, "script")
        }
    }), f.each(["get", "post"], function(e, t) {
        f[t] = function(e, n, i, o) {
            return f.isFunction(n) && (o = o || i, i = n, n = void 0), f.ajax(f.extend({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: i
            }, f.isPlainObject(e) && e))
        }
    }), f._evalUrl = function(e) {
        return f.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, f.fn.extend({
        wrapAll: function(e) {
            if (f.isFunction(e)) return this.each(function(t) {
                f(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = f(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return f.isFunction(e) ? this.each(function(t) {
                f(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = f(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = f.isFunction(e);
            return this.each(function(n) {
                f(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
            }).end()
        }
    }), f.expr.filters.hidden = function(e) {
        return u.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : function(e) {
            if (!f.contains(e.ownerDocument || i, e)) return !0;
            for (; e && 1 === e.nodeType;) {
                if ("none" === Ft(e) || "hidden" === e.type) return !0;
                e = e.parentNode
            }
            return !1
        }(e)
    }, f.expr.filters.visible = function(e) {
        return !f.expr.filters.hidden(e)
    };
    var Rt = /%20/g,
        Bt = /\[\]$/,
        Xt = /\r?\n/g,
        Ut = /^(?:submit|button|image|reset|file)$/i,
        Yt = /^(?:input|select|textarea|keygen)/i;

    function Vt(e, t, n, i) {
        var o;
        if (f.isArray(t)) f.each(t, function(t, o) {
            n || Bt.test(e) ? i(e, o) : Vt(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
        });
        else if (n || "object" !== f.type(t)) i(e, t);
        else
            for (o in t) Vt(e + "[" + o + "]", t[o], n, i)
    }
    f.param = function(e, t) {
        var n, i = [],
            o = function(e, t) {
                t = f.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = f.ajaxSettings && f.ajaxSettings.traditional), f.isArray(e) || e.jquery && !f.isPlainObject(e)) f.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (n in e) Vt(n, e[n], t, o);
        return i.join("&").replace(Rt, "+")
    }, f.fn.extend({
        serialize: function() {
            return f.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = f.prop(this, "elements");
                return e ? f.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !f(this).is(":disabled") && Yt.test(this.nodeName) && !Ut.test(e) && (this.checked || !Q.test(e))
            }).map(function(e, t) {
                var n = f(this).val();
                return null == n ? null : f.isArray(n) ? f.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Xt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Xt, "\r\n")
                }
            }).get()
        }
    }), f.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return this.isLocal ? Zt() : i.documentMode > 8 ? Kt() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Kt() || Zt()
    } : Kt;
    var Qt = 0,
        Gt = {},
        Jt = f.ajaxSettings.xhr();

    function Kt() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }

    function Zt() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in Gt) Gt[e](void 0, !0)
    }), u.cors = !!Jt && "withCredentials" in Jt, (Jt = u.ajax = !!Jt) && f.ajaxTransport(function(t) {
        var n;
        if (!t.crossDomain || u.cors) return {
            send: function(i, o) {
                var r, s = t.xhr(),
                    a = ++Qt;
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (r in t.xhrFields) s[r] = t.xhrFields[r];
                for (r in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) void 0 !== i[r] && s.setRequestHeader(r, i[r] + "");
                s.send(t.hasContent && t.data || null), n = function(e, i) {
                    var r, l, d;
                    if (n && (i || 4 === s.readyState))
                        if (delete Gt[a], n = void 0, s.onreadystatechange = f.noop, i) 4 !== s.readyState && s.abort();
                        else {
                            d = {}, r = s.status, "string" == typeof s.responseText && (d.text = s.responseText);
                            try {
                                l = s.statusText
                            } catch (e) {
                                l = ""
                            }
                            r || !t.isLocal || t.crossDomain ? 1223 === r && (r = 204) : r = d.text ? 200 : 404
                        } d && o(r, l, d, s.getAllResponseHeaders())
                }, t.async ? 4 === s.readyState ? e.setTimeout(n) : s.onreadystatechange = Gt[a] = n : n()
            },
            abort: function() {
                n && n(void 0, !0)
            }
        }
    }), f.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return f.globalEval(e), e
            }
        }
    }), f.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), f.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = i.head || f("head")[0] || i.documentElement;
            return {
                send: function(o, r) {
                    (t = i.createElement("script")).async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || r(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var en = [],
        tn = /(=)\?(?=&|$)|\?\?/;
    f.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = en.pop() || f.expando + "_" + St++;
            return this[e] = !0, e
        }
    }), f.ajaxPrefilter("json jsonp", function(t, n, i) {
        var o, r, s, a = !1 !== t.jsonp && (tn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && tn.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = f.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(tn, "$1" + o) : !1 !== t.jsonp && (t.url += (_t.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
            return s || f.error(o + " was not called"), s[0]
        }, t.dataTypes[0] = "json", r = e[o], e[o] = function() {
            s = arguments
        }, i.always(function() {
            void 0 === r ? f(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, en.push(o)), s && f.isFunction(r) && r(s[0]), s = r = void 0
        }), "script"
    }), f.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || i;
        var o = T.exec(e),
            r = !n && [];
        return o ? [t.createElement(o[1])] : (o = ae([e], t, r), r && r.length && f(r).remove(), f.merge([], o.childNodes))
    };
    var nn = f.fn.load;

    function on(e) {
        return f.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    f.fn.load = function(e, t, n) {
        if ("string" != typeof e && nn) return nn.apply(this, arguments);
        var i, o, r, s = this,
            a = e.indexOf(" ");
        return a > -1 && (i = f.trim(e.slice(a, e.length)), e = e.slice(0, a)), f.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), s.length > 0 && f.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments, s.html(i ? f("<div>").append(f.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, r || [e.responseText, t, e])
            })
        }), this
    }, f.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        f.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), f.expr.filters.animated = function(e) {
        return f.grep(f.timers, function(t) {
            return e === t.elem
        }).length
    }, f.offset = {
        setOffset: function(e, t, n) {
            var i, o, r, s, a, l, d = f.css(e, "position"),
                c = f(e),
                u = {};
            "static" === d && (e.style.position = "relative"), a = c.offset(), r = f.css(e, "top"), l = f.css(e, "left"), ("absolute" === d || "fixed" === d) && f.inArray("auto", [r, l]) > -1 ? (s = (i = c.position()).top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), f.isFunction(t) && (t = t.call(e, n, f.extend({}, a))), null != t.top && (u.top = t.top - a.top + s), null != t.left && (u.left = t.left - a.left + o), "using" in t ? t.using.call(e, u) : c.css(u)
        }
    }, f.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                f.offset.setOffset(this, e, t)
            });
            var t, n, i = {
                    top: 0,
                    left: 0
                },
                o = this[0],
                r = o && o.ownerDocument;
            return r ? (t = r.documentElement, f.contains(t, o) ? (void 0 !== o.getBoundingClientRect && (i = o.getBoundingClientRect()), n = on(r), {
                top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : i) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    i = this[0];
                return "fixed" === f.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), f.nodeName(e[0], "html") || (n = e.offset()), n.top += f.css(e[0], "borderTopWidth", !0), n.left += f.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - f.css(i, "marginTop", !0),
                    left: t.left - n.left - f.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && !f.nodeName(e, "html") && "static" === f.css(e, "position");) e = e.offsetParent;
                return e || Ie
            })
        }
    }), f.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        f.fn[e] = function(i) {
            return V(this, function(e, i, o) {
                var r = on(e);
                if (void 0 === o) return r ? t in r ? r[t] : r.document.documentElement[i] : e[i];
                r ? r.scrollTo(n ? f(r).scrollLeft() : o, n ? o : f(r).scrollTop()) : e[i] = o
            }, e, i, arguments.length, null)
        }
    }), f.each(["top", "left"], function(e, t) {
        f.cssHooks[t] = Re(u.pixelPosition, function(e, n) {
            if (n) return n = We(e, t), qe.test(n) ? f(e).position()[t] + "px" : n
        })
    }), f.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        f.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            f.fn[i] = function(i, o) {
                var r = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === o ? "margin" : "border");
                return V(this, function(t, n, i) {
                    var o;
                    return f.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? f.css(t, n, s) : f.style(t, n, i, s)
                }, t, r ? i : void 0, r, null)
            }
        })
    }), f.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), f.fn.size = function() {
        return this.length
    }, f.fn.andSelf = f.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return f
    });
    var rn = e.jQuery,
        sn = e.$;
    return f.noConflict = function(t) {
        return e.$ === f && (e.$ = sn), t && e.jQuery === f && (e.jQuery = rn), f
    }, t || (e.jQuery = e.$ = f), f
}), jQuery.noConflict(),
    function(e, t) {
        "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t : e.fluidvids = t()
    }(this, function() {
        "use strict";
        var e = {
                selector: "iframe",
                players: ["www.youtube.com", "player.vimeo.com"]
            },
            t = document.head || document.getElementsByTagName("head")[0],
            n = function(t) {
                return new RegExp("^(https?:)?//(?:" + e.players.join("|") + ").*$", "i").test(t)
            },
            i = function(e) {
                if (!e.getAttribute("data-fluidvids")) {
                    var t = document.createElement("div"),
                        n = parseInt(e.height ? e.height : e.offsetHeight, 10) / parseInt(e.width ? e.width : e.offsetWidth, 10) * 100;
                    e.parentNode.insertBefore(t, e), e.setAttribute("data-fluidvids", "loaded"), t.className += "fluidvids", t.style.paddingTop = n + "%", t.appendChild(e)
                }
            },
            o = function() {
                var e = document.createElement("div");
                e.innerHTML = "<p>x</p><style>.fluidvids{width:100%;position:relative;}.fluidvids iframe{position:absolute;top:0px;left:0px;width:100%;height:100%;}</style>", t.appendChild(e.childNodes[1])
            };
        return e.apply = function() {
            for (var t = document.querySelectorAll(e.selector), o = 0; o < t.length; o++) {
                var r = t[o];
                n(r.src) && i(r)
            }
        }, e.init = function(t) {
            for (var n in t) e[n] = t[n];
            e.apply(), o()
        }, e
    }),
    function(e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(function(e) {
        "use strict";
        var t = window.Slick || {};
        (t = function() {
            var t = 0;
            return function(n, i) {
                var o, r = this;
                r.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: e(n),
                    appendDots: e(n),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                    nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function(t, n) {
                        return e('<button type="button" />').text(n + 1)
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    focusOnChange: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, r.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    scrolling: !1,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    swiping: !1,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, e.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.focussed = !1, r.interrupted = !1, r.hidden = "hidden", r.paused = !0, r.positionProp = null, r.respondTo = null, r.rowCount = 1, r.shouldClick = !0, r.$slider = e(n), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.visibilityChange = "visibilitychange", r.windowWidth = 0, r.windowTimer = null, o = e(n).data("slick") || {}, r.options = e.extend({}, r.defaults, i, o), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, void 0 !== document.mozHidden ? (r.hidden = "mozHidden", r.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (r.hidden = "webkitHidden", r.visibilityChange = "webkitvisibilitychange"), r.autoPlay = e.proxy(r.autoPlay, r), r.autoPlayClear = e.proxy(r.autoPlayClear, r), r.autoPlayIterator = e.proxy(r.autoPlayIterator, r), r.changeSlide = e.proxy(r.changeSlide, r), r.clickHandler = e.proxy(r.clickHandler, r), r.selectHandler = e.proxy(r.selectHandler, r), r.setPosition = e.proxy(r.setPosition, r), r.swipeHandler = e.proxy(r.swipeHandler, r), r.dragHandler = e.proxy(r.dragHandler, r), r.keyHandler = e.proxy(r.keyHandler, r), r.instanceUid = t++, r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, r.registerBreakpoints(), r.init(!0)
            }
        }()).prototype.activateADA = function() {
            this.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, t.prototype.addSlide = t.prototype.slickAdd = function(t, n, i) {
            var o = this;
            if ("boolean" == typeof n) i = n, n = null;
            else if (n < 0 || n >= o.slideCount) return !1;
            o.unload(), "number" == typeof n ? 0 === n && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : i ? e(t).insertBefore(o.$slides.eq(n)) : e(t).insertAfter(o.$slides.eq(n)) : !0 === i ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function(t, n) {
                e(n).attr("data-slick-index", t)
            }), o.$slidesCache = o.$slides, o.reinit()
        }, t.prototype.animateHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.animate({
                    height: t
                }, e.options.speed)
            }
        }, t.prototype.animateSlide = function(t, n) {
            var i = {},
                o = this;
            o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (t = -t), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
                left: t
            }, o.options.speed, o.options.easing, n) : o.$slideTrack.animate({
                top: t
            }, o.options.speed, o.options.easing, n) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), e({
                animStart: o.currentLeft
            }).animate({
                animStart: t
            }, {
                duration: o.options.speed,
                easing: o.options.easing,
                step: function(e) {
                    e = Math.ceil(e), !1 === o.options.vertical ? (i[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(i)) : (i[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(i))
                },
                complete: function() {
                    n && n.call()
                }
            })) : (o.applyTransition(), t = Math.ceil(t), !1 === o.options.vertical ? i[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : i[o.animType] = "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(i), n && setTimeout(function() {
                o.disableTransition(), n.call()
            }, o.options.speed))
        }, t.prototype.getNavTarget = function() {
            var t = this.options.asNavFor;
            return t && null !== t && (t = e(t).not(this.$slider)), t
        }, t.prototype.asNavFor = function(t) {
            var n = this.getNavTarget();
            null !== n && "object" == typeof n && n.each(function() {
                var n = e(this).slick("getSlick");
                n.unslicked || n.slideHandler(t, !0)
            })
        }, t.prototype.applyTransition = function(e) {
            var t = this,
                n = {};
            !1 === t.options.fade ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
        }, t.prototype.autoPlay = function() {
            var e = this;
            e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
        }, t.prototype.autoPlayClear = function() {
            this.autoPlayTimer && clearInterval(this.autoPlayTimer)
        }, t.prototype.autoPlayIterator = function() {
            var e = this,
                t = e.currentSlide + e.options.slidesToScroll;
            e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
        }, t.prototype.buildArrows = function() {
            var t = this;
            !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, t.prototype.buildDots = function() {
            var t, n, i = this;
            if (!0 === i.options.dots) {
                for (i.$slider.addClass("slick-dotted"), n = e("<ul />").addClass(i.options.dotsClass), t = 0; t <= i.getDotCount(); t += 1) n.append(e("<li />").append(i.options.customPaging.call(this, i, t)));
                i.$dots = n.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active")
            }
        }, t.prototype.buildOut = function() {
            var t = this;
            t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, n) {
                e(n).attr("data-slick-index", t).data("originalStyling", e(n).attr("style") || "")
            }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
        }, t.prototype.buildRows = function() {
            var e, t, n, i, o, r, s, a = this;
            if (i = document.createDocumentFragment(), r = a.$slider.children(), a.options.rows > 1) {
                for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), e = 0; e < o; e++) {
                    var l = document.createElement("div");
                    for (t = 0; t < a.options.rows; t++) {
                        var d = document.createElement("div");
                        for (n = 0; n < a.options.slidesPerRow; n++) {
                            var c = e * s + (t * a.options.slidesPerRow + n);
                            r.get(c) && d.appendChild(r.get(c))
                        }
                        l.appendChild(d)
                    }
                    i.appendChild(l)
                }
                a.$slider.empty().append(i), a.$slider.children().children().children().css({
                    width: 100 / a.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, t.prototype.checkResponsive = function(t, n) {
            var i, o, r, s = this,
                a = !1,
                l = s.$slider.width(),
                d = window.innerWidth || e(window).width();
            if ("window" === s.respondTo ? r = d : "slider" === s.respondTo ? r = l : "min" === s.respondTo && (r = Math.min(d, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
                for (i in o = null, s.breakpoints) s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? r < s.breakpoints[i] && (o = s.breakpoints[i]) : r > s.breakpoints[i] && (o = s.breakpoints[i]));
                null !== o ? null !== s.activeBreakpoint ? (o !== s.activeBreakpoint || n) && (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t), a = o), t || !1 === a || s.$slider.trigger("breakpoint", [s, a])
            }
        }, t.prototype.changeSlide = function(t, n) {
            var i, o, r = this,
                s = e(t.currentTarget);
            switch (s.is("a") && t.preventDefault(), s.is("li") || (s = s.closest("li")), i = r.slideCount % r.options.slidesToScroll != 0 ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, t.data.message) {
                case "previous":
                    o = 0 === i ? r.options.slidesToScroll : r.options.slidesToShow - i, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - o, !1, n);
                    break;
                case "next":
                    o = 0 === i ? r.options.slidesToScroll : i, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + o, !1, n);
                    break;
                case "index":
                    var a = 0 === t.data.index ? 0 : t.data.index || s.index() * r.options.slidesToScroll;
                    r.slideHandler(r.checkNavigable(a), !1, n), s.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, t.prototype.checkNavigable = function(e) {
            var t, n;
            if (n = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1];
            else
                for (var i in t) {
                    if (e < t[i]) {
                        e = n;
                        break
                    }
                    n = t[i]
                }
            return e
        }, t.prototype.cleanUpEvents = function() {
            var t = this;
            t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
        }, t.prototype.cleanUpSlideEvents = function() {
            var t = this;
            t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
        }, t.prototype.cleanUpRows = function() {
            var e, t = this;
            t.options.rows > 1 && ((e = t.$slides.children().children()).removeAttr("style"), t.$slider.empty().append(e))
        }, t.prototype.clickHandler = function(e) {
            !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
        }, t.prototype.destroy = function(t) {
            var n = this;
            n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), e(".slick-cloned", n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                e(this).attr("style", e(this).data("originalStyling"))
            }), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), n.$slider.removeClass("slick-initialized"), n.$slider.removeClass("slick-dotted"), n.unslicked = !0, t || n.$slider.trigger("destroy", [n])
        }, t.prototype.disableTransition = function(e) {
            var t = this,
                n = {};
            n[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
        }, t.prototype.fadeSlide = function(e, t) {
            var n = this;
            !1 === n.cssTransitions ? (n.$slides.eq(e).css({
                zIndex: n.options.zIndex
            }), n.$slides.eq(e).animate({
                opacity: 1
            }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
                opacity: 1,
                zIndex: n.options.zIndex
            }), t && setTimeout(function() {
                n.disableTransition(e), t.call()
            }, n.options.speed))
        }, t.prototype.fadeSlideOut = function(e) {
            var t = this;
            !1 === t.cssTransitions ? t.$slides.eq(e).animate({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }))
        }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
            var t = this;
            null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
        }, t.prototype.focusHandler = function() {
            var t = this;
            t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(n) {
                n.stopImmediatePropagation();
                var i = e(this);
                setTimeout(function() {
                    t.options.pauseOnFocus && (t.focussed = i.is(":focus"), t.autoPlay())
                }, 0)
            })
        }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
            return this.currentSlide
        }, t.prototype.getDotCount = function() {
            var e = this,
                t = 0,
                n = 0,
                i = 0;
            if (!0 === e.options.infinite)
                if (e.slideCount <= e.options.slidesToShow) ++i;
                else
                    for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else if (!0 === e.options.centerMode) i = e.slideCount;
            else if (e.options.asNavFor)
                for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
            return i - 1
        }, t.prototype.getLeft = function(e) {
            var t, n, i, o, r = this,
                s = 0;
            return r.slideOffset = 0, n = r.$slides.first().outerHeight(!0), !0 === r.options.infinite ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, o = -1, !0 === r.options.vertical && !0 === r.options.centerMode && (2 === r.options.slidesToShow ? o = -1.5 : 1 === r.options.slidesToShow && (o = -2)), s = n * r.options.slidesToShow * o), r.slideCount % r.options.slidesToScroll != 0 && e + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (e > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (e - r.slideCount)) * r.slideWidth * -1, s = (r.options.slidesToShow - (e - r.slideCount)) * n * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, s = r.slideCount % r.options.slidesToScroll * n * -1))) : e + r.options.slidesToShow > r.slideCount && (r.slideOffset = (e + r.options.slidesToShow - r.slideCount) * r.slideWidth, s = (e + r.options.slidesToShow - r.slideCount) * n), r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0, s = 0), !0 === r.options.centerMode && r.slideCount <= r.options.slidesToShow ? r.slideOffset = r.slideWidth * Math.floor(r.options.slidesToShow) / 2 - r.slideWidth * r.slideCount / 2 : !0 === r.options.centerMode && !0 === r.options.infinite ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : !0 === r.options.centerMode && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), t = !1 === r.options.vertical ? e * r.slideWidth * -1 + r.slideOffset : e * n * -1 + s, !0 === r.options.variableWidth && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow), t = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, !0 === r.options.centerMode && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow + 1), t = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, t += (r.$list.width() - i.outerWidth()) / 2)), t
        }, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
            return this.options[e]
        }, t.prototype.getNavigableIndexes = function() {
            var e, t = this,
                n = 0,
                i = 0,
                o = [];
            for (!1 === t.options.infinite ? e = t.slideCount : (n = -1 * t.options.slidesToScroll, i = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); n < e;) o.push(n), n = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            return o
        }, t.prototype.getSlick = function() {
            return this
        }, t.prototype.getSlideCount = function() {
            var t, n, i = this;
            return n = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0, !0 === i.options.swipeToSlide ? (i.$slideTrack.find(".slick-slide").each(function(o, r) {
                if (r.offsetLeft - n + e(r).outerWidth() / 2 > -1 * i.swipeLeft) return t = r, !1
            }), Math.abs(e(t).attr("data-slick-index") - i.currentSlide) || 1) : i.options.slidesToScroll
        }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
            this.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(e)
                }
            }, t)
        }, t.prototype.init = function(t) {
            var n = this;
            e(n.$slider).hasClass("slick-initialized") || (e(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots(), n.checkResponsive(!0), n.focusHandler()), t && n.$slider.trigger("init", [n]), !0 === n.options.accessibility && n.initADA(), n.options.autoplay && (n.paused = !1, n.autoPlay())
        }, t.prototype.initADA = function() {
            var t = this,
                n = Math.ceil(t.slideCount / t.options.slidesToShow),
                i = t.getNavigableIndexes().filter(function(e) {
                    return e >= 0 && e < t.slideCount
                });
            t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(n) {
                var o = i.indexOf(n);
                e(this).attr({
                    role: "tabpanel",
                    id: "slick-slide" + t.instanceUid + n,
                    tabindex: -1
                }), -1 !== o && e(this).attr({
                    "aria-describedby": "slick-slide-control" + t.instanceUid + o
                })
            }), t.$dots.attr("role", "tablist").find("li").each(function(o) {
                var r = i[o];
                e(this).attr({
                    role: "presentation"
                }), e(this).find("button").first().attr({
                    role: "tab",
                    id: "slick-slide-control" + t.instanceUid + o,
                    "aria-controls": "slick-slide" + t.instanceUid + r,
                    "aria-label": o + 1 + " of " + n,
                    "aria-selected": null,
                    tabindex: "-1"
                })
            }).eq(t.currentSlide).find("button").attr({
                "aria-selected": "true",
                tabindex: "0"
            }).end());
            for (var o = t.currentSlide, r = o + t.options.slidesToShow; o < r; o++) t.$slides.eq(o).attr("tabindex", 0);
            t.activateADA()
        }, t.prototype.initArrowEvents = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
        }, t.prototype.initDotEvents = function() {
            var t = this;
            !0 === t.options.dots && (e("li", t.$dots).on("click.slick", {
                message: "index"
            }, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
        }, t.prototype.initSlideEvents = function() {
            var t = this;
            t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
        }, t.prototype.initializeEvents = function() {
            var t = this;
            t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(t.setPosition)
        }, t.prototype.initUI = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
        }, t.prototype.keyHandler = function(e) {
            var t = this;
            e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
                data: {
                    message: !0 === t.options.rtl ? "next" : "previous"
                }
            }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
                data: {
                    message: !0 === t.options.rtl ? "previous" : "next"
                }
            }))
        }, t.prototype.lazyLoad = function() {
            function t(t) {
                e("img[data-lazy]", t).each(function() {
                    var t = e(this),
                        n = e(this).attr("data-lazy"),
                        i = e(this).attr("data-srcset"),
                        o = e(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
                        s = document.createElement("img");
                    s.onload = function() {
                        t.animate({
                            opacity: 0
                        }, 100, function() {
                            i && (t.attr("srcset", i), o && t.attr("sizes", o)), t.attr("src", n).animate({
                                opacity: 1
                            }, 200, function() {
                                t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                            }), r.$slider.trigger("lazyLoaded", [r, t, n])
                        })
                    }, s.onerror = function() {
                        t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, t, n])
                    }, s.src = n
                })
            }
            var n, i, o, r = this;
            if (!0 === r.options.centerMode ? !0 === r.options.infinite ? o = (i = r.currentSlide + (r.options.slidesToShow / 2 + 1)) + r.options.slidesToShow + 2 : (i = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), o = r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide) : (i = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, o = Math.ceil(i + r.options.slidesToShow), !0 === r.options.fade && (i > 0 && i--, o <= r.slideCount && o++)), n = r.$slider.find(".slick-slide").slice(i, o), "anticipated" === r.options.lazyLoad)
                for (var s = i - 1, a = o, l = r.$slider.find(".slick-slide"), d = 0; d < r.options.slidesToScroll; d++) s < 0 && (s = r.slideCount - 1), n = (n = n.add(l.eq(s))).add(l.eq(a)), s--, a++;
            t(n), r.slideCount <= r.options.slidesToShow ? t(r.$slider.find(".slick-slide")) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? t(r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow)) : 0 === r.currentSlide && t(r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow))
        }, t.prototype.loadSlider = function() {
            var e = this;
            e.setPosition(), e.$slideTrack.css({
                opacity: 1
            }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
        }, t.prototype.next = t.prototype.slickNext = function() {
            this.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, t.prototype.orientationChange = function() {
            this.checkResponsive(), this.setPosition()
        }, t.prototype.pause = t.prototype.slickPause = function() {
            this.autoPlayClear(), this.paused = !0
        }, t.prototype.play = t.prototype.slickPlay = function() {
            var e = this;
            e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
        }, t.prototype.postSlide = function(t) {
            var n = this;
            n.unslicked || (n.$slider.trigger("afterChange", [n, t]), n.animating = !1, n.slideCount > n.options.slidesToShow && n.setPosition(), n.swipeLeft = null, n.options.autoplay && n.autoPlay(), !0 === n.options.accessibility && (n.initADA(), n.options.focusOnChange && e(n.$slides.get(n.currentSlide)).attr("tabindex", 0).focus()))
        }, t.prototype.prev = t.prototype.slickPrev = function() {
            this.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, t.prototype.preventDefault = function(e) {
            e.preventDefault()
        }, t.prototype.progressiveLazyLoad = function(t) {
            t = t || 1;
            var n, i, o, r, s, a = this,
                l = e("img[data-lazy]", a.$slider);
            l.length ? (n = l.first(), i = n.attr("data-lazy"), o = n.attr("data-srcset"), r = n.attr("data-sizes") || a.$slider.attr("data-sizes"), (s = document.createElement("img")).onload = function() {
                o && (n.attr("srcset", o), r && n.attr("sizes", r)), n.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, n, i]), a.progressiveLazyLoad()
            }, s.onerror = function() {
                t < 3 ? setTimeout(function() {
                    a.progressiveLazyLoad(t + 1)
                }, 500) : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, n, i]), a.progressiveLazyLoad())
            }, s.src = i) : a.$slider.trigger("allImagesLoaded", [a])
        }, t.prototype.refresh = function(t) {
            var n, i, o = this;
            i = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > i && (o.currentSlide = i), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), n = o.currentSlide, o.destroy(!0), e.extend(o, o.initials, {
                currentSlide: n
            }), o.init(), t || o.changeSlide({
                data: {
                    message: "index",
                    index: n
                }
            }, !1)
        }, t.prototype.registerBreakpoints = function() {
            var t, n, i, o = this,
                r = o.options.responsive || null;
            if ("array" === e.type(r) && r.length) {
                for (t in o.respondTo = o.options.respondTo || "window", r)
                    if (i = o.breakpoints.length - 1, r.hasOwnProperty(t)) {
                        for (n = r[t].breakpoint; i >= 0;) o.breakpoints[i] && o.breakpoints[i] === n && o.breakpoints.splice(i, 1), i--;
                        o.breakpoints.push(n), o.breakpointSettings[n] = r[t].settings
                    } o.breakpoints.sort(function(e, t) {
                    return o.options.mobileFirst ? e - t : t - e
                })
            }
        }, t.prototype.reinit = function() {
            var t = this;
            t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
        }, t.prototype.resize = function() {
            var t = this;
            e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
                t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
            }, 50))
        }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, n) {
            var i = this;
            if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : i.slideCount - 1 : !0 === t ? --e : e, i.slideCount < 1 || e < 0 || e > i.slideCount - 1) return !1;
            i.unload(), !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, i.reinit()
        }, t.prototype.setCSS = function(e) {
            var t, n, i = this,
                o = {};
            !0 === i.options.rtl && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", o[i.positionProp] = e, !1 === i.transformsEnabled ? i.$slideTrack.css(o) : (o = {}, !1 === i.cssTransitions ? (o[i.animType] = "translate(" + t + ", " + n + ")", i.$slideTrack.css(o)) : (o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)", i.$slideTrack.css(o)))
        }, t.prototype.setDimensions = function() {
            var e = this;
            !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
                padding: "0px " + e.options.centerPadding
            }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
                padding: e.options.centerPadding + " 0px"
            })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
            var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
            !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
        }, t.prototype.setFade = function() {
            var t, n = this;
            n.$slides.each(function(i, o) {
                t = n.slideWidth * i * -1, !0 === n.options.rtl ? e(o).css({
                    position: "relative",
                    right: t,
                    top: 0,
                    zIndex: n.options.zIndex - 2,
                    opacity: 0
                }) : e(o).css({
                    position: "relative",
                    left: t,
                    top: 0,
                    zIndex: n.options.zIndex - 2,
                    opacity: 0
                })
            }), n.$slides.eq(n.currentSlide).css({
                zIndex: n.options.zIndex - 1,
                opacity: 1
            })
        }, t.prototype.setHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.css("height", t)
            }
        }, t.prototype.setOption = t.prototype.slickSetOption = function() {
            var t, n, i, o, r, s = this,
                a = !1;
            if ("object" === e.type(arguments[0]) ? (i = arguments[0], a = arguments[1], r = "multiple") : "string" === e.type(arguments[0]) && (i = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? r = "responsive" : void 0 !== arguments[1] && (r = "single")), "single" === r) s.options[i] = o;
            else if ("multiple" === r) e.each(i, function(e, t) {
                s.options[e] = t
            });
            else if ("responsive" === r)
                for (n in o)
                    if ("array" !== e.type(s.options.responsive)) s.options.responsive = [o[n]];
                    else {
                        for (t = s.options.responsive.length - 1; t >= 0;) s.options.responsive[t].breakpoint === o[n].breakpoint && s.options.responsive.splice(t, 1), t--;
                        s.options.responsive.push(o[n])
                    } a && (s.unload(), s.reinit())
        }, t.prototype.setPosition = function() {
            var e = this;
            e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
        }, t.prototype.setProps = function() {
            var e = this,
                t = document.body.style;
            e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
        }, t.prototype.setSlideClasses = function(e) {
            var t, n, i, o, r = this;
            if (n = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(e).addClass("slick-current"), !0 === r.options.centerMode) {
                var s = r.options.slidesToShow % 2 == 0 ? 1 : 0;
                t = Math.floor(r.options.slidesToShow / 2), !0 === r.options.infinite && (e >= t && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t + s, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = r.options.slidesToShow + e, n.slice(i - t + 1 + s, i + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? n.eq(n.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && n.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(e).addClass("slick-center")
            } else e >= 0 && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= r.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, i = !0 === r.options.infinite ? r.options.slidesToShow + e : e, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? n.slice(i - (r.options.slidesToShow - o), i + o).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
            "ondemand" !== r.options.lazyLoad && "anticipated" !== r.options.lazyLoad || r.lazyLoad()
        }, t.prototype.setupInfinite = function() {
            var t, n, i, o = this;
            if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (n = null, o.slideCount > o.options.slidesToShow)) {
                for (i = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - i; t -= 1) n = t - 1, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
                for (t = 0; t < i + o.slideCount; t += 1) n = t, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
                o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    e(this).attr("id", "")
                })
            }
        }, t.prototype.interrupt = function(e) {
            e || this.autoPlay(), this.interrupted = e
        }, t.prototype.selectHandler = function(t) {
            var n = this,
                i = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
                o = parseInt(i.attr("data-slick-index"));
            o || (o = 0), n.slideCount <= n.options.slidesToShow ? n.slideHandler(o, !1, !0) : n.slideHandler(o)
        }, t.prototype.slideHandler = function(e, t, n) {
            var i, o, r, s, a, l = null,
                d = this;
            if (t = t || !1, !(!0 === d.animating && !0 === d.options.waitForAnimate || !0 === d.options.fade && d.currentSlide === e))
                if (!1 === t && d.asNavFor(e), i = e, l = d.getLeft(i), s = d.getLeft(d.currentSlide), d.currentLeft = null === d.swipeLeft ? s : d.swipeLeft, !1 === d.options.infinite && !1 === d.options.centerMode && (e < 0 || e > d.getDotCount() * d.options.slidesToScroll)) !1 === d.options.fade && (i = d.currentSlide, !0 !== n ? d.animateSlide(s, function() {
                    d.postSlide(i)
                }) : d.postSlide(i));
                else if (!1 === d.options.infinite && !0 === d.options.centerMode && (e < 0 || e > d.slideCount - d.options.slidesToScroll)) !1 === d.options.fade && (i = d.currentSlide, !0 !== n ? d.animateSlide(s, function() {
                d.postSlide(i)
            }) : d.postSlide(i));
            else {
                if (d.options.autoplay && clearInterval(d.autoPlayTimer), o = i < 0 ? d.slideCount % d.options.slidesToScroll != 0 ? d.slideCount - d.slideCount % d.options.slidesToScroll : d.slideCount + i : i >= d.slideCount ? d.slideCount % d.options.slidesToScroll != 0 ? 0 : i - d.slideCount : i, d.animating = !0, d.$slider.trigger("beforeChange", [d, d.currentSlide, o]), r = d.currentSlide, d.currentSlide = o, d.setSlideClasses(d.currentSlide), d.options.asNavFor && (a = (a = d.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(d.currentSlide), d.updateDots(), d.updateArrows(), !0 === d.options.fade) return !0 !== n ? (d.fadeSlideOut(r), d.fadeSlide(o, function() {
                    d.postSlide(o)
                })) : d.postSlide(o), void d.animateHeight();
                !0 !== n ? d.animateSlide(l, function() {
                    d.postSlide(o)
                }) : d.postSlide(o)
            }
        }, t.prototype.startLoad = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
        }, t.prototype.swipeDirection = function() {
            var e, t, n, i, o = this;
            return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, n = Math.atan2(t, e), (i = Math.round(180 * n / Math.PI)) < 0 && (i = 360 - Math.abs(i)), i <= 45 && i >= 0 ? !1 === o.options.rtl ? "left" : "right" : i <= 360 && i >= 315 ? !1 === o.options.rtl ? "left" : "right" : i >= 135 && i <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? i >= 35 && i <= 135 ? "down" : "up" : "vertical"
        }, t.prototype.swipeEnd = function(e) {
            var t, n, i = this;
            if (i.dragging = !1, i.swiping = !1, i.scrolling) return i.scrolling = !1, !1;
            if (i.interrupted = !1, i.shouldClick = !(i.touchObject.swipeLength > 10), void 0 === i.touchObject.curX) return !1;
            if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
                switch (n = i.swipeDirection()) {
                    case "left":
                    case "down":
                        t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1
                }
                "vertical" != n && (i.slideHandler(t), i.touchObject = {}, i.$slider.trigger("swipe", [i, n]))
            } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
        }, t.prototype.swipeHandler = function(e) {
            var t = this;
            if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
                case "start":
                    t.swipeStart(e);
                    break;
                case "move":
                    t.swipeMove(e);
                    break;
                case "end":
                    t.swipeEnd(e)
            }
        }, t.prototype.swipeMove = function(e) {
            var t, n, i, o, r, s, a = this;
            return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || a.scrolling || r && 1 !== r.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX, a.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && s > 4 ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = s), n = a.swipeDirection(), void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, e.preventDefault()), o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), i = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === n || a.currentSlide >= a.getDotCount() && "left" === n) && (i = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + i * o : a.swipeLeft = t + i * (a.$list.height() / a.listWidth) * o, !0 === a.options.verticalSwiping && (a.swipeLeft = t + i * o), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
        }, t.prototype.swipeStart = function(e) {
            var t, n = this;
            if (n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow) return n.touchObject = {}, !1;
            void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, n.dragging = !0
        }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
            var e = this;
            null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
        }, t.prototype.unload = function() {
            var t = this;
            e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, t.prototype.unslick = function(e) {
            var t = this;
            t.$slider.trigger("unslick", [t, e]), t.destroy()
        }, t.prototype.updateArrows = function() {
            var e = this;
            Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, t.prototype.updateDots = function() {
            var e = this;
            null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
        }, t.prototype.visibility = function() {
            var e = this;
            e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
        }, e.fn.slick = function() {
            var e, n, i = this,
                o = arguments[0],
                r = Array.prototype.slice.call(arguments, 1),
                s = i.length;
            for (e = 0; e < s; e++)
                if ("object" == typeof o || void 0 === o ? i[e].slick = new t(i[e], o) : n = i[e].slick[o].apply(i[e].slick, r), void 0 !== n) return n;
            return i
        }
    }),
    function(e, t, n) {
        function i(t, n) {
            this.element = t, this.settings = e.extend({}, o, n), this.settings.duplicate || n.hasOwnProperty("removeIds") || (this.settings.removeIds = !1), this._defaults = o, this._name = r, this.init()
        }
        var o = {
                label: "MENU",
                duplicate: !0,
                duration: 200,
                easingOpen: "swing",
                easingClose: "swing",
                closedSymbol: "&#9658;",
                openedSymbol: "&#9660;",
                prependTo: "body",
                appendTo: "",
                parentTag: "a",
                closeOnClick: !1,
                allowParentLinks: !1,
                nestedParentLinks: !0,
                showChildren: !1,
                removeIds: !0,
                removeClasses: !1,
                removeStyles: !1,
                brand: "",
                animations: "jquery",
                init: function() {},
                beforeOpen: function() {},
                beforeClose: function() {},
                afterOpen: function() {},
                afterClose: function() {}
            },
            r = "slicknav",
            s = "slicknav",
            a = 40,
            l = 13,
            d = 27,
            c = 37,
            u = 39,
            p = 32,
            f = 38;
        i.prototype.init = function() {
            var n, i, o = this,
                r = e(this.element),
                h = this.settings;
            if (h.duplicate ? o.mobileNav = r.clone() : o.mobileNav = r, h.removeIds && (o.mobileNav.removeAttr("id"), o.mobileNav.find("*").each(function(t, n) {
                    e(n).removeAttr("id")
                })), h.removeClasses && (o.mobileNav.removeAttr("class"), o.mobileNav.find("*").each(function(t, n) {
                    e(n).removeAttr("class")
                })), h.removeStyles && (o.mobileNav.removeAttr("style"), o.mobileNav.find("*").each(function(t, n) {
                    e(n).removeAttr("style")
                })), n = s + "_icon", "" === h.label && (n += " " + s + "_no-text"), "a" == h.parentTag && (h.parentTag = 'a href="#"'), o.mobileNav.attr("class", s + "_nav"), i = e('<div class="' + s + '_menu"></div>'), "" !== h.brand) {
                var v = e('<div class="' + s + '_brand">' + h.brand + "</div>");
                e(i).append(v)
            }
            o.btn = e(["<" + h.parentTag + ' aria-haspopup="true" role="button" tabindex="0" class="' + s + "_btn " + s + '_collapsed">', '<span class="' + s + '_menutxt">' + h.label + "</span>", '<span class="' + n + '">', '<span class="' + s + '_icon-bar"></span>', '<span class="' + s + '_icon-bar"></span>', '<span class="' + s + '_icon-bar"></span>', "</span>", "</" + h.parentTag + ">"].join("")), e(i).append(o.btn), "" !== h.appendTo ? e(h.appendTo).append(i) : e(h.prependTo).prepend(i), i.append(o.mobileNav);
            var g = o.mobileNav.find("li");
            e(g).each(function() {
                var t = e(this),
                    n = {};
                if (n.children = t.children("ul").attr("role", "menu"), t.data("menu", n), n.children.length > 0) {
                    var i = t.contents(),
                        r = !1,
                        a = [];
                    e(i).each(function() {
                        return !e(this).is("ul") && (a.push(this), void(e(this).is("a") && (r = !0)))
                    });
                    var l = e("<" + h.parentTag + ' role="menuitem" aria-haspopup="true" tabindex="-1" class="' + s + '_item"/>');
                    if (h.allowParentLinks && !h.nestedParentLinks && r) e(a).wrapAll('<span class="' + s + "_parent-link " + s + '_row"/>').parent();
                    else e(a).wrapAll(l).parent().addClass(s + "_row");
                    h.showChildren ? t.addClass(s + "_open") : t.addClass(s + "_collapsed"), t.addClass(s + "_parent");
                    var d = e('<span class="' + s + '_arrow">' + (h.showChildren ? h.openedSymbol : h.closedSymbol) + "</span>");
                    h.allowParentLinks && !h.nestedParentLinks && r && (d = d.wrap(l).parent()), e(a).last().after(d)
                } else 0 === t.children().length && t.addClass(s + "_txtnode");
                t.children("a").attr("role", "menuitem").click(function(t) {
                    h.closeOnClick && !e(t.target).parent().closest("li").hasClass(s + "_parent") && e(o.btn).click()
                }), h.closeOnClick && h.allowParentLinks && (t.children("a").children("a").click(function(t) {
                    e(o.btn).click()
                }), t.find("." + s + "_parent-link a:not(." + s + "_item)").click(function(t) {
                    e(o.btn).click()
                }))
            }), e(g).each(function() {
                var t = e(this).data("menu");
                h.showChildren || o._visibilityToggle(t.children, null, !1, null, !0)
            }), o._visibilityToggle(o.mobileNav, null, !1, "init", !0), o.mobileNav.attr("role", "menu"), e(t).mousedown(function() {
                o._outlines(!1)
            }), e(t).keyup(function() {
                o._outlines(!0)
            }), e(o.btn).click(function(e) {
                e.preventDefault(), o._menuToggle()
            }), o.mobileNav.on("click", "." + s + "_item", function(t) {
                t.preventDefault(), o._itemClick(e(this))
            }), e(o.btn).keydown(function(t) {
                var n = t || event;
                switch (n.keyCode) {
                    case l:
                    case p:
                    case a:
                        t.preventDefault(), n.keyCode === a && e(o.btn).hasClass(s + "_open") || o._menuToggle(), e(o.btn).next().find('[role="menuitem"]').first().focus()
                }
            }), o.mobileNav.on("keydown", "." + s + "_item", function(t) {
                switch ((t || event).keyCode) {
                    case l:
                        t.preventDefault(), o._itemClick(e(t.target));
                        break;
                    case u:
                        t.preventDefault(), e(t.target).parent().hasClass(s + "_collapsed") && o._itemClick(e(t.target)), e(t.target).next().find('[role="menuitem"]').first().focus()
                }
            }), o.mobileNav.on("keydown", '[role="menuitem"]', function(t) {
                switch ((t || event).keyCode) {
                    case a:
                        t.preventDefault();
                        var n = (r = (i = e(t.target).parent().parent().children().children('[role="menuitem"]:visible')).index(t.target)) + 1;
                        i.length <= n && (n = 0), i.eq(n).focus();
                        break;
                    case f:
                        t.preventDefault();
                        var i, r = (i = e(t.target).parent().parent().children().children('[role="menuitem"]:visible')).index(t.target);
                        i.eq(r - 1).focus();
                        break;
                    case c:
                        if (t.preventDefault(), e(t.target).parent().parent().parent().hasClass(s + "_open")) {
                            var l = e(t.target).parent().parent().prev();
                            l.focus(), o._itemClick(l)
                        } else e(t.target).parent().parent().hasClass(s + "_nav") && (o._menuToggle(), e(o.btn).focus());
                        break;
                    case d:
                        t.preventDefault(), o._menuToggle(), e(o.btn).focus()
                }
            }), h.allowParentLinks && h.nestedParentLinks && e("." + s + "_item a").click(function(e) {
                e.stopImmediatePropagation()
            })
        }, i.prototype._menuToggle = function(e) {
            var t = this,
                n = t.btn,
                i = t.mobileNav;
            n.hasClass(s + "_collapsed") ? (n.removeClass(s + "_collapsed"), n.addClass(s + "_open")) : (n.removeClass(s + "_open"), n.addClass(s + "_collapsed")), n.addClass(s + "_animating"), t._visibilityToggle(i, n.parent(), !0, n)
        }, i.prototype._itemClick = function(e) {
            var t = this,
                n = t.settings,
                i = e.data("menu");
            i || ((i = {}).arrow = e.children("." + s + "_arrow"), i.ul = e.next("ul"), i.parent = e.parent(), i.parent.hasClass(s + "_parent-link") && (i.parent = e.parent().parent(), i.ul = e.parent().next("ul")), e.data("menu", i)), i.parent.hasClass(s + "_collapsed") ? (i.arrow.html(n.openedSymbol), i.parent.removeClass(s + "_collapsed"), i.parent.addClass(s + "_open"), i.parent.addClass(s + "_animating"), t._visibilityToggle(i.ul, i.parent, !0, e)) : (i.arrow.html(n.closedSymbol), i.parent.addClass(s + "_collapsed"), i.parent.removeClass(s + "_open"), i.parent.addClass(s + "_animating"), t._visibilityToggle(i.ul, i.parent, !0, e))
        }, i.prototype._visibilityToggle = function(t, n, i, o, r) {
            function a(t, n) {
                e(t).removeClass(s + "_animating"), e(n).removeClass(s + "_animating"), r || c.afterOpen(t)
            }

            function l(n, i) {
                t.attr("aria-hidden", "true"), u.attr("tabindex", "-1"), d._setVisAttr(t, !0), t.hide(), e(n).removeClass(s + "_animating"), e(i).removeClass(s + "_animating"), r ? "init" == n && c.init() : c.afterClose(n)
            }
            var d = this,
                c = d.settings,
                u = d._getActionItems(t),
                p = 0;
            i && (p = c.duration), t.hasClass(s + "_hidden") ? (t.removeClass(s + "_hidden"), r || c.beforeOpen(o), "jquery" === c.animations ? t.stop(!0, !0).slideDown(p, c.easingOpen, function() {
                a(o, n)
            }) : "velocity" === c.animations && t.velocity("finish").velocity("slideDown", {
                duration: p,
                easing: c.easingOpen,
                complete: function() {
                    a(o, n)
                }
            }), t.attr("aria-hidden", "false"), u.attr("tabindex", "0"), d._setVisAttr(t, !1)) : (t.addClass(s + "_hidden"), r || c.beforeClose(o), "jquery" === c.animations ? t.stop(!0, !0).slideUp(p, this.settings.easingClose, function() {
                l(o, n)
            }) : "velocity" === c.animations && t.velocity("finish").velocity("slideUp", {
                duration: p,
                easing: c.easingClose,
                complete: function() {
                    l(o, n)
                }
            }))
        }, i.prototype._setVisAttr = function(t, n) {
            var i = this,
                o = t.children("li").children("ul").not("." + s + "_hidden");
            n ? o.each(function() {
                var t = e(this);
                t.attr("aria-hidden", "true"), i._getActionItems(t).attr("tabindex", "-1"), i._setVisAttr(t, n)
            }) : o.each(function() {
                var t = e(this);
                t.attr("aria-hidden", "false"), i._getActionItems(t).attr("tabindex", "0"), i._setVisAttr(t, n)
            })
        }, i.prototype._getActionItems = function(e) {
            var t = e.data("menu");
            if (!t) {
                t = {};
                var n = e.children("li"),
                    i = n.find("a");
                t.links = i.add(n.find("." + s + "_item")), e.data("menu", t)
            }
            return t.links
        }, i.prototype._outlines = function(t) {
            t ? e("." + s + "_item, ." + s + "_btn").css("outline", "") : e("." + s + "_item, ." + s + "_btn").css("outline", "none")
        }, i.prototype.toggle = function() {
            this._menuToggle()
        }, i.prototype.open = function() {
            this.btn.hasClass(s + "_collapsed") && this._menuToggle()
        }, i.prototype.close = function() {
            this.btn.hasClass(s + "_open") && this._menuToggle()
        }, e.fn[r] = function(t) {
            var n, o = arguments;
            return void 0 === t || "object" == typeof t ? this.each(function() {
                e.data(this, "plugin_" + r) || e.data(this, "plugin_" + r, new i(this, t))
            }) : "string" == typeof t && "_" !== t[0] && "init" !== t ? (this.each(function() {
                var s = e.data(this, "plugin_" + r);
                s instanceof i && "function" == typeof s[t] && (n = s[t].apply(s, Array.prototype.slice.call(o, 1)))
            }), void 0 !== n ? n : this) : void 0
        }
    }(jQuery, document, window), jQuery(document).ready(function(e) {
        if (e(".jl_menu_sticky").hasClass("jl_stick")) var t = e(".jl_menu_sticky").offset().top;
        e(window).scroll(function() {
            if (e(window).scrollTop() > t) {
                e(".jl_menu_sticky.jl_stick").addClass("jl_sticky");
                var n = e(".jl_menu_sticky.jl_stick").outerHeight();
                e(".jl_blank_nav").css({
                    height: n
                })
            } else e(".jl_menu_sticky.jl_stick").removeClass("jl_sticky"), e(".jl_blank_nav").css({
                height: 0
            })
        }), e(".jl_w_slider").slick({
            dots: !1,
            speed: 600,
            arrows: !0,
            autoplaySpeed: 6e3,
            autoplay: !0,
            pauseOnHover: !0,
            adaptiveHeight: !0,
            prevArrow: '<div class="jl-slider-prev jl_es_pre"><i class="jli-left-chevron"></i></div>',
            nextArrow: '<div class="jl-slider-next jl_es_next"><i class="jli-right-chevron"></i></div>',
            slidesToShow: 1,
            slidesToScroll: 1
        }), e(".jl-s-slider").slick({
            dots: !0,
            speed: 600,
            arrows: !0,
            autoplaySpeed: 6e3,
            autoplay: !0,
            pauseOnHover: !0,
            adaptiveHeight: !0,
            prevArrow: '<div class="jl-slider-prev jl_es_pre"><i class="jli-left-chevron"></i></div>',
            nextArrow: '<div class="jl-slider-next jl_es_next"><i class="jli-right-chevron"></i></div>',
            dotsClass: "jl_s_pagination",
            slidesToShow: 1,
            slidesToScroll: 1
        }),
        //  e(".jl_day_night .jl_moon").on("click", function() {
        //     e(".jl_day_night").addClass("jl_night_en"), e(".jl_day_night").removeClass("jl_day_en"), e(".jl_en_day_night").addClass("options_dark_skin"), e(".mobile_nav_class").addClass("wp-night-mode-on")
        // }), 
        // e(".jl_day_night .jl_sun").on("click", function() {
        //     e(".jl_day_night").addClass("jl_day_en"), e(".jl_day_night").removeClass("jl_night_en"), e(".jl_en_day_night").removeClass("options_dark_skin"), e(".mobile_nav_class").removeClass("wp-night-mode-on")
        // }), 
        e(".jl_day_night .jl_moon").on("click", function() {
            e(".jl_day_night").addClass("jl_night_en"), e(".jl_day_night").removeClass("jl_day_en"), e(".jl_en_day_night").addClass(""), e(".mobile_nav_class").addClass("wp-night-mode-on")
        }), 
        e(".jl_day_night .jl_sun").on("click", function() {
            e(".jl_day_night").addClass("jl_day_en"), e(".jl_day_night").removeClass("jl_night_en"), e(".jl_en_day_night").removeClass(""), e(".mobile_nav_class").removeClass("wp-night-mode-on")
        }),
        e(".menu_mobile_icons, .mobile_menu_overlay").on("click", function() {
            e("#content_nav").toggleClass("jl_mobile_nav_open"), e(".mobile_menu_overlay").toggleClass("mobile_menu_active"), e(".mobile_nav_class").toggleClass("active_mobile_nav_class")
        }), e("#mobile_menu_slide .menu-item-has-children > a").append(e("<span/>", {
            class: "arrow_down"
        }).html('<i class="jli-down-chevron" aria-hidden="true"></i>')), e("#mobile_menu_slide .arrow_down i").on("click", function() {
            var t = e(this).closest(".menu-item-has-children").find(" > .sub-menu");
            return e(this).toggleClass("jli-down-chevron").toggleClass("jli-up-chevron"), t.hasClass("menu-active-class") ? t.removeClass("menu-active-class") : t.addClass("menu-active-class"), !1
        }), e(".search_form_menu_personal_click").on("click", function() {
            e(".search_form_menu_personal").toggleClass("search_form_menu_personal_active"), e(".mobile_nav_class").toggleClass("active_mobile_nav_class")
        }), e(".single_post_share_icons").on("click", function() {
            e(".single_post_share_wrapper").toggleClass("share_single_active"), e(".mobile_nav_class").toggleClass("active_mobile_nav_class")
        }), e(".search_form_menu_click").on("click", function(t) {
            t.preventDefault(), e(".search_form_menu").toggle(), e(this).toggleClass("active")
        }), e(".sb-toggle-left").length && (e(".sb-toggle-left").on("click", function() {
            e("#nav-wrapper").toggle(100)
        }), e("#menu-main-menu .menu-item-has-children > a").append(e("<span/>", {
            class: "arrow_down"
        }).html('<i class="jli-down-chevron-1"></i>'))), e("#nav-wrapper .menu .arrow_down").on("click", function() {
            var t = e(this).closest(".menu-item-has-children").find(" > .sub-menu");
            return t.hasClass("menu-active-class") ? t.removeClass("menu-active-class") : t.addClass("menu-active-class"), !1
        }), e("#menu_wrapper li").hover(function() {
            var t = e(this).parent(),
                n = e(t).position(),
                i = e(t).width(),
                o = (n.left, e(this).position()),
                r = e(this).children("ul").width();
            o.left + r - 100 > i && e(this).children("ul").addClass("jl_menu_tls")
        });
        var n = e(".tabs-product"),
            o = n.children("li");
        n.each(function() {
            var t = e(this);
            t.next().children(".tab-content").stop(!0, !0).hide().first().show(), t.children("li").first().addClass("active").stop(!0, !0).show()
        }), o.on("click", function(t) {
            var n = e(this);
            n.siblings().removeClass("active").end().addClass("active"), n.parent().next().children(".tab-content").stop(!0, !0).hide().siblings(n.find("a").attr("href")).fadeIn(), t.preventDefault()
        }), jQuery(window).scroll(function() {
            e(window).scrollTop() >= 100 ? (e(".jl_large_menu_logo").addClass("jl_custom_height_small"), e(".options_dark_header").addClass("dark_header_menu")) : (e(".jl_large_menu_logo").removeClass("jl_custom_height_small"), e(".options_dark_header").removeClass("dark_header_menu")), jQuery(this).scrollTop() > 500 ? jQuery("#go-top").fadeIn() : jQuery("#go-top").fadeOut()
        }), e("#go-top").on("click", function() {
            return jQuery("body,html").animate({
                scrollTop: 0
            }, 800), !1
        });
        var r = e(".jl-eb-slider");
        for (i = 0; i < r.length; i++) {
            var s = e(r[i]);
            s.slick({
                arrows: "true" == s.attr("data-arrows"),
                prevArrow: '<div class="jl-slider-prev jl_es_pre"><i class="jli-left-chevron"></i></div>',
                nextArrow: '<div class="jl-slider-next jl_es_next"><i class="jli-right-chevron"></i></div>',
                dotsClass: "jl_s_pagination",
                speed: parseInt(s.attr("data-speed")) || 500,
                fade: "true" == s.attr("data-effect"),
                dots: "true" == s.attr("data-dots"),
                infinite: "true" == s.attr("data-loop"),
                autoplay: "true" == s.attr("data-play"),
                autoplaySpeed: parseInt(s.attr("data-autospeed")) || 7e3,
                swipe: "true" == s.attr("data-swipe"),
                pauseOnHover: !0,
                slidesToShow: parseInt(s.attr("data-xl-items")) || 1,
                adaptiveHeight: !0,
                responsive: [{
                    breakpoint: 0,
                    settings: {
                        slidesToShow: parseInt(s.attr("data-items")) || 1
                    }
                }, {
                    breakpoint: 479,
                    settings: {
                        slidesToShow: parseInt(s.attr("data-xs-items")) || 1
                    }
                }, {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: parseInt(s.attr("data-sm-items")) || 1
                    }
                }, {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: parseInt(s.attr("data-md-items")) || 1
                    }
                }, {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: parseInt(s.attr("data-lg-items")) || 1
                    }
                }, {
                    breakpoint: 1799,
                    settings: {
                        slidesToShow: parseInt(s.attr("data-xl-items")) || 1
                    }
                }]
            })
        }
        fluidvids.init({
            selector: "iframe",
            players: ["www.youtube.com", "player.vimeo.com", "www.facebook.com"]
        }), e(".quantity .jlb-btn").on("click", function(t) {
            t.preventDefault();
            var n = e(this),
                i = 1,
                o = n.parent().find("input"),
                r = 1,
                s = 1e3,
                a = parseInt(o.val()),
                l = parseInt(o.val());
            o.attr("step") && (i = parseInt(o.attr("step"))), o.attr("min") && (r = parseInt(o.attr("min"))), o.attr("max") && (s = parseInt(o.attr("max"))), n.hasClass("up") ? l = a < s ? a + i : s : n.hasClass("down") && (l = a > r ? a - i : r), o.attr("disabled") || o.val(l).change()
        })
    });