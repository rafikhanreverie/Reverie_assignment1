/*! For license information please see swalekh-middleware.js.LICENSE.txt */
(() => {
  var t = {
      365: (t, n, e) => {
        "use strict";
        e.d(n, { A: () => a });
        var r = e(601),
          i = e.n(r),
          o = e(314),
          u = e.n(o)()(i());
        u.push([
          t.id,
          "@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap);",
        ]),
          u.push([
            t.id,
            ".rev-drp-active{\n    background-color: rgb(34, 113, 158);\n    color: rgb(255, 255, 255);\n}\n\n#swDropDown{\n    box-shadow: 0 2px 5px rgba(0,0,0,0.1);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n}\n\n#swDropdown {\n    background-color: #f9f9f9;\n    min-width: 140px;\n    width: auto !important;\n    border: 1px solid #ccc;\n    z-index: 999999;\n    font-family: 'Lato', sans-serif;\n}\n.disp-elem {\n    padding: 5px 8px;\n    cursor: pointer;\n    background-color: #f9f9f9;\n    color: black;\n    font-weight: 700;\n}\n.selection-elem {\n    padding: 5px 8px;\n    cursor: pointer;\n    background-color: white;\n    color: black;\n}\n.selection-elem:hover {\n    background-color: #9fceff;\n}\n.rev-drp-active {\n    background-color: #007bff;\n    color: white;\n}\n.ui-kb-icon {\n    font-family: \"kb-icon\";\n    font-style: normal;\n    position: fixed;\n}\n\n/* keyboard css */\n\n.swalekh-keyboard-container{\n    width: max-content;\n    height:max-content;\n    position: fixed;\n    margin: 0px;\n    right: 0;\n    bottom: 0;\n    z-index: 999999;\n    padding: 10px 40px 25px 40px;\n\n}\n\n.rev-draggable{\n    height: 25px;\n    width: 100%;\n    cursor: move;\n}\n\n\n.rev-row{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    gap: 5px;\n    margin-top: 5px;\n    width: 550px;\n\n}\n\n.rev-btn {\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    cursor: pointer;\n    min-width: 30px;\n    height: 30px;\n    line-height: 30px;\n    padding: 0 5px;\n    box-sizing: border-box;\n    white-space: nowrap;\n    overflow: hidden;\n\n}\n\n\n.rev-btn-backspace{\n    width: 50px;\n}\n\n.rev-btn-tab{\n    width: 40px;\n}\n\n.rev-btn-enter{\n    width: 60px;\n}\n\n.rev-btn-shift{\n    width: 75px;\n}\n\n.rev-btn-control{\n    width: 55px;\n}\n\n.rev-btn-alt{\n    width: 45px;\n}\n\n.rev-btn-caps{\n    width: 55px;\n}\n\n.rev-btn-backslash{\n    width: 40px;\n}\n\n.rev-btn-space{\n    width: 215px;\n}\n\n.rev-btn-small-font{\n    font-size: 10px;\n}\n\n\n/* keyboard themes */\n\n.rev-light{\n    background-color: white;\n    color: black;\n    border: solid 1px #EAEAEA;\n    border-radius: 2px;\n    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);\n\n    button{\n        background-color: #f9f9f9;\n        border-radius: 5px;\n        background-color: #FAFAFA;\n        border: solid 1px #DDD;\n        word-wrap: break-word;\n        text-align: center;\n\n        &:hover{\n            box-shadow: 0 2px 4px 0 #DDD;\n        }\n    }\n\n    .rev-draggable{\n        background-color: white;\n    }\n\n    .rev-btn-active{\n        background-color: #dddddd;\n    }\n\n    .rev-btn:active{\n        background-color: #e9e9e9;\n    }\n\n}\n\n.rev-classic{\n    background-color: #cccccc;\n\n    .rev-btn-active{\n        background-color: #8d8d8d;\n        color: white;\n    }\n}\n\n.rev-reverie-red{\n    background-color: #EE4037;\n\n    button{\n        background-color: #ffada7;\n        border: solid 1px #505050;\n        border-radius: 5px;\n        overflow: hidden;\n\n        &:hover{\n            box-shadow: 0 2px 4px 0 #ffb7b7;\n        }\n\n    }\n\n    .rev-btn-active{\n        background-color: #ff6868;\n        color: white;\n    }\n\n    .rev-btn:active{\n        background-color: #ff8585;\n    }\n    \n}\n\n.rev-fresh{\n    background-color: #007bff;\n    \n    button{\n        background-color: #9fceff;\n        border: solid 1px #505050;\n        border-radius: 5px;\n        overflow: hidden;\n\n        &:hover{\n            box-shadow: 0 2px 3px 0 #61aeff;\n        }\n    }\n\n    .rev-btn-active{\n        background-color: #61aeff;\n    }\n\n    .rev-btn:active{\n        background-color: #61aeff;\n    }\n\n}\n\n.rev-dark{\n    background-color: #2f3037;\n    color: #f0f0f0;\n    \n    button{\n        background-color: #131316;\n        color: white;\n        border: solid 1px #505050;\n        border-radius: 5px;\n        overflow: hidden;\n\n        &:hover{\n            box-shadow: 0 2px 2px 0 #646464;\n        }\n    }\n\n    .rev-btn-active{\n        background-color: #4b4c52;\n        color: white;\n    }\n\n    .rev-btn:active{\n        background-color: #4b4c52;\n    }\n}\n\n#swalekh-togglers{\n    display: flex;\n    width: 80%;\n    justify-content: flex-start;\n    padding: 0 7px;\n    align-items: center;\n\n    select{\n        width: 100%;\n        height: 30px;\n        padding: 0;\n        margin: 0;\n        border-radius: 7px;\n        border: 2px solid black;\n\n    }\n}\n\n#kbToggler{\n    padding: 0;\n    width: 30px;\n\n    svg{\n        padding: 0;\n        margin: 0;\n\n    }\n}",
            "",
          ]);
        const a = u;
      },
      314: (t) => {
        "use strict";
        t.exports = function (t) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var e = "",
                  r = void 0 !== n[5];
                return (
                  n[4] && (e += "@supports (".concat(n[4], ") {")),
                  n[2] && (e += "@media ".concat(n[2], " {")),
                  r &&
                    (e += "@layer".concat(
                      n[5].length > 0 ? " ".concat(n[5]) : "",
                      " {"
                    )),
                  (e += t(n)),
                  r && (e += "}"),
                  n[2] && (e += "}"),
                  n[4] && (e += "}"),
                  e
                );
              }).join("");
            }),
            (n.i = function (t, e, r, i, o) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var u = {};
              if (r)
                for (var a = 0; a < this.length; a++) {
                  var l = this[a][0];
                  null != l && (u[l] = !0);
                }
              for (var f = 0; f < t.length; f++) {
                var c = [].concat(t[f]);
                (r && u[c[0]]) ||
                  (void 0 !== o &&
                    (void 0 === c[5] ||
                      (c[1] = "@layer"
                        .concat(c[5].length > 0 ? " ".concat(c[5]) : "", " {")
                        .concat(c[1], "}")),
                    (c[5] = o)),
                  e &&
                    (c[2]
                      ? ((c[1] = "@media "
                          .concat(c[2], " {")
                          .concat(c[1], "}")),
                        (c[2] = e))
                      : (c[2] = e)),
                  i &&
                    (c[4]
                      ? ((c[1] = "@supports ("
                          .concat(c[4], ") {")
                          .concat(c[1], "}")),
                        (c[4] = i))
                      : (c[4] = "".concat(i))),
                  n.push(c));
              }
            }),
            n
          );
        };
      },
      601: (t) => {
        "use strict";
        t.exports = function (t) {
          return t[1];
        };
      },
      543: function (t, n, e) {
        var r;
        (t = e.nmd(t)),
          function () {
            var i,
              o = "Expected a function",
              u = "__lodash_hash_undefined__",
              a = "__lodash_placeholder__",
              l = 32,
              f = 128,
              c = 1 / 0,
              s = 9007199254740991,
              h = NaN,
              p = 4294967295,
              d = [
                ["ary", f],
                ["bind", 1],
                ["bindKey", 2],
                ["curry", 8],
                ["curryRight", 16],
                ["flip", 512],
                ["partial", l],
                ["partialRight", 64],
                ["rearg", 256],
              ],
              v = "[object Arguments]",
              g = "[object Array]",
              _ = "[object Boolean]",
              y = "[object Date]",
              b = "[object Error]",
              m = "[object Function]",
              w = "[object GeneratorFunction]",
              S = "[object Map]",
              A = "[object Number]",
              x = "[object Object]",
              C = "[object Promise]",
              k = "[object RegExp]",
              E = "[object Set]",
              T = "[object String]",
              L = "[object Symbol]",
              I = "[object WeakMap]",
              j = "[object ArrayBuffer]",
              W = "[object DataView]",
              D = "[object Float32Array]",
              R = "[object Float64Array]",
              O = "[object Int8Array]",
              M = "[object Int16Array]",
              N = "[object Int32Array]",
              P = "[object Uint8Array]",
              z = "[object Uint8ClampedArray]",
              Z = "[object Uint16Array]",
              J = "[object Uint32Array]",
              B = /\b__p \+= '';/g,
              U = /\b(__p \+=) '' \+/g,
              q = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
              V = /&(?:amp|lt|gt|quot|#39);/g,
              $ = /[&<>"']/g,
              F = RegExp(V.source),
              H = RegExp($.source),
              K = /<%-([\s\S]+?)%>/g,
              Y = /<%([\s\S]+?)%>/g,
              G = /<%=([\s\S]+?)%>/g,
              X = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
              Q = /^\w*$/,
              tt =
                /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
              nt = /[\\^$.*+?()[\]{}|]/g,
              et = RegExp(nt.source),
              rt = /^\s+/,
              it = /\s/,
              ot = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
              ut = /\{\n\/\* \[wrapped with (.+)\] \*/,
              at = /,? & /,
              lt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
              ft = /[()=,{}\[\]\/\s]/,
              ct = /\\(\\)?/g,
              st = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
              ht = /\w*$/,
              pt = /^[-+]0x[0-9a-f]+$/i,
              dt = /^0b[01]+$/i,
              vt = /^\[object .+?Constructor\]$/,
              gt = /^0o[0-7]+$/i,
              _t = /^(?:0|[1-9]\d*)$/,
              yt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
              bt = /($^)/,
              mt = /['\n\r\u2028\u2029\\]/g,
              wt = "\\ud800-\\udfff",
              St = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
              At = "\\u2700-\\u27bf",
              xt = "a-z\\xdf-\\xf6\\xf8-\\xff",
              Ct = "A-Z\\xc0-\\xd6\\xd8-\\xde",
              kt = "\\ufe0e\\ufe0f",
              Et =
                "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
              Tt = "[" + wt + "]",
              Lt = "[" + Et + "]",
              It = "[" + St + "]",
              jt = "\\d+",
              Wt = "[" + At + "]",
              Dt = "[" + xt + "]",
              Rt = "[^" + wt + Et + jt + At + xt + Ct + "]",
              Ot = "\\ud83c[\\udffb-\\udfff]",
              Mt = "[^" + wt + "]",
              Nt = "(?:\\ud83c[\\udde6-\\uddff]){2}",
              Pt = "[\\ud800-\\udbff][\\udc00-\\udfff]",
              zt = "[" + Ct + "]",
              Zt = "\\u200d",
              Jt = "(?:" + Dt + "|" + Rt + ")",
              Bt = "(?:" + zt + "|" + Rt + ")",
              Ut = "(?:['’](?:d|ll|m|re|s|t|ve))?",
              qt = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
              Vt = "(?:" + It + "|" + Ot + ")?",
              $t = "[" + kt + "]?",
              Ft =
                $t +
                Vt +
                "(?:" +
                Zt +
                "(?:" +
                [Mt, Nt, Pt].join("|") +
                ")" +
                $t +
                Vt +
                ")*",
              Ht = "(?:" + [Wt, Nt, Pt].join("|") + ")" + Ft,
              Kt = "(?:" + [Mt + It + "?", It, Nt, Pt, Tt].join("|") + ")",
              Yt = RegExp("['’]", "g"),
              Gt = RegExp(It, "g"),
              Xt = RegExp(Ot + "(?=" + Ot + ")|" + Kt + Ft, "g"),
              Qt = RegExp(
                [
                  zt +
                    "?" +
                    Dt +
                    "+" +
                    Ut +
                    "(?=" +
                    [Lt, zt, "$"].join("|") +
                    ")",
                  Bt + "+" + qt + "(?=" + [Lt, zt + Jt, "$"].join("|") + ")",
                  zt + "?" + Jt + "+" + Ut,
                  zt + "+" + qt,
                  "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                  "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                  jt,
                  Ht,
                ].join("|"),
                "g"
              ),
              tn = RegExp("[" + Zt + wt + St + kt + "]"),
              nn =
                /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
              en = [
                "Array",
                "Buffer",
                "DataView",
                "Date",
                "Error",
                "Float32Array",
                "Float64Array",
                "Function",
                "Int8Array",
                "Int16Array",
                "Int32Array",
                "Map",
                "Math",
                "Object",
                "Promise",
                "RegExp",
                "Set",
                "String",
                "Symbol",
                "TypeError",
                "Uint8Array",
                "Uint8ClampedArray",
                "Uint16Array",
                "Uint32Array",
                "WeakMap",
                "_",
                "clearTimeout",
                "isFinite",
                "parseInt",
                "setTimeout",
              ],
              rn = -1,
              on = {};
            (on[D] =
              on[R] =
              on[O] =
              on[M] =
              on[N] =
              on[P] =
              on[z] =
              on[Z] =
              on[J] =
                !0),
              (on[v] =
                on[g] =
                on[j] =
                on[_] =
                on[W] =
                on[y] =
                on[b] =
                on[m] =
                on[S] =
                on[A] =
                on[x] =
                on[k] =
                on[E] =
                on[T] =
                on[I] =
                  !1);
            var un = {};
            (un[v] =
              un[g] =
              un[j] =
              un[W] =
              un[_] =
              un[y] =
              un[D] =
              un[R] =
              un[O] =
              un[M] =
              un[N] =
              un[S] =
              un[A] =
              un[x] =
              un[k] =
              un[E] =
              un[T] =
              un[L] =
              un[P] =
              un[z] =
              un[Z] =
              un[J] =
                !0),
              (un[b] = un[m] = un[I] = !1);
            var an = {
                "\\": "\\",
                "'": "'",
                "\n": "n",
                "\r": "r",
                "\u2028": "u2028",
                "\u2029": "u2029",
              },
              ln = parseFloat,
              fn = parseInt,
              cn =
                "object" == typeof e.g && e.g && e.g.Object === Object && e.g,
              sn =
                "object" == typeof self &&
                self &&
                self.Object === Object &&
                self,
              hn = cn || sn || Function("return this")(),
              pn = n && !n.nodeType && n,
              dn = pn && t && !t.nodeType && t,
              vn = dn && dn.exports === pn,
              gn = vn && cn.process,
              _n = (function () {
                try {
                  return (
                    (dn && dn.require && dn.require("util").types) ||
                    (gn && gn.binding && gn.binding("util"))
                  );
                } catch (t) {}
              })(),
              yn = _n && _n.isArrayBuffer,
              bn = _n && _n.isDate,
              mn = _n && _n.isMap,
              wn = _n && _n.isRegExp,
              Sn = _n && _n.isSet,
              An = _n && _n.isTypedArray;
            function xn(t, n, e) {
              switch (e.length) {
                case 0:
                  return t.call(n);
                case 1:
                  return t.call(n, e[0]);
                case 2:
                  return t.call(n, e[0], e[1]);
                case 3:
                  return t.call(n, e[0], e[1], e[2]);
              }
              return t.apply(n, e);
            }
            function Cn(t, n, e, r) {
              for (var i = -1, o = null == t ? 0 : t.length; ++i < o; ) {
                var u = t[i];
                n(r, u, e(u), t);
              }
              return r;
            }
            function kn(t, n) {
              for (
                var e = -1, r = null == t ? 0 : t.length;
                ++e < r && !1 !== n(t[e], e, t);

              );
              return t;
            }
            function En(t, n) {
              for (
                var e = null == t ? 0 : t.length;
                e-- && !1 !== n(t[e], e, t);

              );
              return t;
            }
            function Tn(t, n) {
              for (var e = -1, r = null == t ? 0 : t.length; ++e < r; )
                if (!n(t[e], e, t)) return !1;
              return !0;
            }
            function Ln(t, n) {
              for (
                var e = -1, r = null == t ? 0 : t.length, i = 0, o = [];
                ++e < r;

              ) {
                var u = t[e];
                n(u, e, t) && (o[i++] = u);
              }
              return o;
            }
            function In(t, n) {
              return !(null == t || !t.length) && Zn(t, n, 0) > -1;
            }
            function jn(t, n, e) {
              for (var r = -1, i = null == t ? 0 : t.length; ++r < i; )
                if (e(n, t[r])) return !0;
              return !1;
            }
            function Wn(t, n) {
              for (
                var e = -1, r = null == t ? 0 : t.length, i = Array(r);
                ++e < r;

              )
                i[e] = n(t[e], e, t);
              return i;
            }
            function Dn(t, n) {
              for (var e = -1, r = n.length, i = t.length; ++e < r; )
                t[i + e] = n[e];
              return t;
            }
            function Rn(t, n, e, r) {
              var i = -1,
                o = null == t ? 0 : t.length;
              for (r && o && (e = t[++i]); ++i < o; ) e = n(e, t[i], i, t);
              return e;
            }
            function On(t, n, e, r) {
              var i = null == t ? 0 : t.length;
              for (r && i && (e = t[--i]); i--; ) e = n(e, t[i], i, t);
              return e;
            }
            function Mn(t, n) {
              for (var e = -1, r = null == t ? 0 : t.length; ++e < r; )
                if (n(t[e], e, t)) return !0;
              return !1;
            }
            var Nn = qn("length");
            function Pn(t, n, e) {
              var r;
              return (
                e(t, function (t, e, i) {
                  if (n(t, e, i)) return (r = e), !1;
                }),
                r
              );
            }
            function zn(t, n, e, r) {
              for (var i = t.length, o = e + (r ? 1 : -1); r ? o-- : ++o < i; )
                if (n(t[o], o, t)) return o;
              return -1;
            }
            function Zn(t, n, e) {
              return n == n
                ? (function (t, n, e) {
                    for (var r = e - 1, i = t.length; ++r < i; )
                      if (t[r] === n) return r;
                    return -1;
                  })(t, n, e)
                : zn(t, Bn, e);
            }
            function Jn(t, n, e, r) {
              for (var i = e - 1, o = t.length; ++i < o; )
                if (r(t[i], n)) return i;
              return -1;
            }
            function Bn(t) {
              return t != t;
            }
            function Un(t, n) {
              var e = null == t ? 0 : t.length;
              return e ? Fn(t, n) / e : h;
            }
            function qn(t) {
              return function (n) {
                return null == n ? i : n[t];
              };
            }
            function Vn(t) {
              return function (n) {
                return null == t ? i : t[n];
              };
            }
            function $n(t, n, e, r, i) {
              return (
                i(t, function (t, i, o) {
                  e = r ? ((r = !1), t) : n(e, t, i, o);
                }),
                e
              );
            }
            function Fn(t, n) {
              for (var e, r = -1, o = t.length; ++r < o; ) {
                var u = n(t[r]);
                u !== i && (e = e === i ? u : e + u);
              }
              return e;
            }
            function Hn(t, n) {
              for (var e = -1, r = Array(t); ++e < t; ) r[e] = n(e);
              return r;
            }
            function Kn(t) {
              return t ? t.slice(0, he(t) + 1).replace(rt, "") : t;
            }
            function Yn(t) {
              return function (n) {
                return t(n);
              };
            }
            function Gn(t, n) {
              return Wn(n, function (n) {
                return t[n];
              });
            }
            function Xn(t, n) {
              return t.has(n);
            }
            function Qn(t, n) {
              for (var e = -1, r = t.length; ++e < r && Zn(n, t[e], 0) > -1; );
              return e;
            }
            function te(t, n) {
              for (var e = t.length; e-- && Zn(n, t[e], 0) > -1; );
              return e;
            }
            var ne = Vn({
                À: "A",
                Á: "A",
                Â: "A",
                Ã: "A",
                Ä: "A",
                Å: "A",
                à: "a",
                á: "a",
                â: "a",
                ã: "a",
                ä: "a",
                å: "a",
                Ç: "C",
                ç: "c",
                Ð: "D",
                ð: "d",
                È: "E",
                É: "E",
                Ê: "E",
                Ë: "E",
                è: "e",
                é: "e",
                ê: "e",
                ë: "e",
                Ì: "I",
                Í: "I",
                Î: "I",
                Ï: "I",
                ì: "i",
                í: "i",
                î: "i",
                ï: "i",
                Ñ: "N",
                ñ: "n",
                Ò: "O",
                Ó: "O",
                Ô: "O",
                Õ: "O",
                Ö: "O",
                Ø: "O",
                ò: "o",
                ó: "o",
                ô: "o",
                õ: "o",
                ö: "o",
                ø: "o",
                Ù: "U",
                Ú: "U",
                Û: "U",
                Ü: "U",
                ù: "u",
                ú: "u",
                û: "u",
                ü: "u",
                Ý: "Y",
                ý: "y",
                ÿ: "y",
                Æ: "Ae",
                æ: "ae",
                Þ: "Th",
                þ: "th",
                ß: "ss",
                Ā: "A",
                Ă: "A",
                Ą: "A",
                ā: "a",
                ă: "a",
                ą: "a",
                Ć: "C",
                Ĉ: "C",
                Ċ: "C",
                Č: "C",
                ć: "c",
                ĉ: "c",
                ċ: "c",
                č: "c",
                Ď: "D",
                Đ: "D",
                ď: "d",
                đ: "d",
                Ē: "E",
                Ĕ: "E",
                Ė: "E",
                Ę: "E",
                Ě: "E",
                ē: "e",
                ĕ: "e",
                ė: "e",
                ę: "e",
                ě: "e",
                Ĝ: "G",
                Ğ: "G",
                Ġ: "G",
                Ģ: "G",
                ĝ: "g",
                ğ: "g",
                ġ: "g",
                ģ: "g",
                Ĥ: "H",
                Ħ: "H",
                ĥ: "h",
                ħ: "h",
                Ĩ: "I",
                Ī: "I",
                Ĭ: "I",
                Į: "I",
                İ: "I",
                ĩ: "i",
                ī: "i",
                ĭ: "i",
                į: "i",
                ı: "i",
                Ĵ: "J",
                ĵ: "j",
                Ķ: "K",
                ķ: "k",
                ĸ: "k",
                Ĺ: "L",
                Ļ: "L",
                Ľ: "L",
                Ŀ: "L",
                Ł: "L",
                ĺ: "l",
                ļ: "l",
                ľ: "l",
                ŀ: "l",
                ł: "l",
                Ń: "N",
                Ņ: "N",
                Ň: "N",
                Ŋ: "N",
                ń: "n",
                ņ: "n",
                ň: "n",
                ŋ: "n",
                Ō: "O",
                Ŏ: "O",
                Ő: "O",
                ō: "o",
                ŏ: "o",
                ő: "o",
                Ŕ: "R",
                Ŗ: "R",
                Ř: "R",
                ŕ: "r",
                ŗ: "r",
                ř: "r",
                Ś: "S",
                Ŝ: "S",
                Ş: "S",
                Š: "S",
                ś: "s",
                ŝ: "s",
                ş: "s",
                š: "s",
                Ţ: "T",
                Ť: "T",
                Ŧ: "T",
                ţ: "t",
                ť: "t",
                ŧ: "t",
                Ũ: "U",
                Ū: "U",
                Ŭ: "U",
                Ů: "U",
                Ű: "U",
                Ų: "U",
                ũ: "u",
                ū: "u",
                ŭ: "u",
                ů: "u",
                ű: "u",
                ų: "u",
                Ŵ: "W",
                ŵ: "w",
                Ŷ: "Y",
                ŷ: "y",
                Ÿ: "Y",
                Ź: "Z",
                Ż: "Z",
                Ž: "Z",
                ź: "z",
                ż: "z",
                ž: "z",
                Ĳ: "IJ",
                ĳ: "ij",
                Œ: "Oe",
                œ: "oe",
                ŉ: "'n",
                ſ: "s",
              }),
              ee = Vn({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
              });
            function re(t) {
              return "\\" + an[t];
            }
            function ie(t) {
              return tn.test(t);
            }
            function oe(t) {
              var n = -1,
                e = Array(t.size);
              return (
                t.forEach(function (t, r) {
                  e[++n] = [r, t];
                }),
                e
              );
            }
            function ue(t, n) {
              return function (e) {
                return t(n(e));
              };
            }
            function ae(t, n) {
              for (var e = -1, r = t.length, i = 0, o = []; ++e < r; ) {
                var u = t[e];
                (u !== n && u !== a) || ((t[e] = a), (o[i++] = e));
              }
              return o;
            }
            function le(t) {
              var n = -1,
                e = Array(t.size);
              return (
                t.forEach(function (t) {
                  e[++n] = t;
                }),
                e
              );
            }
            function fe(t) {
              var n = -1,
                e = Array(t.size);
              return (
                t.forEach(function (t) {
                  e[++n] = [t, t];
                }),
                e
              );
            }
            function ce(t) {
              return ie(t)
                ? (function (t) {
                    for (var n = (Xt.lastIndex = 0); Xt.test(t); ) ++n;
                    return n;
                  })(t)
                : Nn(t);
            }
            function se(t) {
              return ie(t)
                ? (function (t) {
                    return t.match(Xt) || [];
                  })(t)
                : (function (t) {
                    return t.split("");
                  })(t);
            }
            function he(t) {
              for (var n = t.length; n-- && it.test(t.charAt(n)); );
              return n;
            }
            var pe = Vn({
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"',
                "&#39;": "'",
              }),
              de = (function t(n) {
                var e,
                  r = (n =
                    null == n
                      ? hn
                      : de.defaults(hn.Object(), n, de.pick(hn, en))).Array,
                  it = n.Date,
                  wt = n.Error,
                  St = n.Function,
                  At = n.Math,
                  xt = n.Object,
                  Ct = n.RegExp,
                  kt = n.String,
                  Et = n.TypeError,
                  Tt = r.prototype,
                  Lt = St.prototype,
                  It = xt.prototype,
                  jt = n["__core-js_shared__"],
                  Wt = Lt.toString,
                  Dt = It.hasOwnProperty,
                  Rt = 0,
                  Ot = (e = /[^.]+$/.exec(
                    (jt && jt.keys && jt.keys.IE_PROTO) || ""
                  ))
                    ? "Symbol(src)_1." + e
                    : "",
                  Mt = It.toString,
                  Nt = Wt.call(xt),
                  Pt = hn._,
                  zt = Ct(
                    "^" +
                      Wt.call(Dt)
                        .replace(nt, "\\$&")
                        .replace(
                          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                          "$1.*?"
                        ) +
                      "$"
                  ),
                  Zt = vn ? n.Buffer : i,
                  Jt = n.Symbol,
                  Bt = n.Uint8Array,
                  Ut = Zt ? Zt.allocUnsafe : i,
                  qt = ue(xt.getPrototypeOf, xt),
                  Vt = xt.create,
                  $t = It.propertyIsEnumerable,
                  Ft = Tt.splice,
                  Ht = Jt ? Jt.isConcatSpreadable : i,
                  Kt = Jt ? Jt.iterator : i,
                  Xt = Jt ? Jt.toStringTag : i,
                  tn = (function () {
                    try {
                      var t = lo(xt, "defineProperty");
                      return t({}, "", {}), t;
                    } catch (t) {}
                  })(),
                  an = n.clearTimeout !== hn.clearTimeout && n.clearTimeout,
                  cn = it && it.now !== hn.Date.now && it.now,
                  sn = n.setTimeout !== hn.setTimeout && n.setTimeout,
                  pn = At.ceil,
                  dn = At.floor,
                  gn = xt.getOwnPropertySymbols,
                  _n = Zt ? Zt.isBuffer : i,
                  Nn = n.isFinite,
                  Vn = Tt.join,
                  ve = ue(xt.keys, xt),
                  ge = At.max,
                  _e = At.min,
                  ye = it.now,
                  be = n.parseInt,
                  me = At.random,
                  we = Tt.reverse,
                  Se = lo(n, "DataView"),
                  Ae = lo(n, "Map"),
                  xe = lo(n, "Promise"),
                  Ce = lo(n, "Set"),
                  ke = lo(n, "WeakMap"),
                  Ee = lo(xt, "create"),
                  Te = ke && new ke(),
                  Le = {},
                  Ie = No(Se),
                  je = No(Ae),
                  We = No(xe),
                  De = No(Ce),
                  Re = No(ke),
                  Oe = Jt ? Jt.prototype : i,
                  Me = Oe ? Oe.valueOf : i,
                  Ne = Oe ? Oe.toString : i;
                function Pe(t) {
                  if (ta(t) && !Uu(t) && !(t instanceof Be)) {
                    if (t instanceof Je) return t;
                    if (Dt.call(t, "__wrapped__")) return Po(t);
                  }
                  return new Je(t);
                }
                var ze = (function () {
                  function t() {}
                  return function (n) {
                    if (!Qu(n)) return {};
                    if (Vt) return Vt(n);
                    t.prototype = n;
                    var e = new t();
                    return (t.prototype = i), e;
                  };
                })();
                function Ze() {}
                function Je(t, n) {
                  (this.__wrapped__ = t),
                    (this.__actions__ = []),
                    (this.__chain__ = !!n),
                    (this.__index__ = 0),
                    (this.__values__ = i);
                }
                function Be(t) {
                  (this.__wrapped__ = t),
                    (this.__actions__ = []),
                    (this.__dir__ = 1),
                    (this.__filtered__ = !1),
                    (this.__iteratees__ = []),
                    (this.__takeCount__ = p),
                    (this.__views__ = []);
                }
                function Ue(t) {
                  var n = -1,
                    e = null == t ? 0 : t.length;
                  for (this.clear(); ++n < e; ) {
                    var r = t[n];
                    this.set(r[0], r[1]);
                  }
                }
                function qe(t) {
                  var n = -1,
                    e = null == t ? 0 : t.length;
                  for (this.clear(); ++n < e; ) {
                    var r = t[n];
                    this.set(r[0], r[1]);
                  }
                }
                function Ve(t) {
                  var n = -1,
                    e = null == t ? 0 : t.length;
                  for (this.clear(); ++n < e; ) {
                    var r = t[n];
                    this.set(r[0], r[1]);
                  }
                }
                function $e(t) {
                  var n = -1,
                    e = null == t ? 0 : t.length;
                  for (this.__data__ = new Ve(); ++n < e; ) this.add(t[n]);
                }
                function Fe(t) {
                  var n = (this.__data__ = new qe(t));
                  this.size = n.size;
                }
                function He(t, n) {
                  var e = Uu(t),
                    r = !e && Bu(t),
                    i = !e && !r && Fu(t),
                    o = !e && !r && !i && la(t),
                    u = e || r || i || o,
                    a = u ? Hn(t.length, kt) : [],
                    l = a.length;
                  for (var f in t)
                    (!n && !Dt.call(t, f)) ||
                      (u &&
                        ("length" == f ||
                          (i && ("offset" == f || "parent" == f)) ||
                          (o &&
                            ("buffer" == f ||
                              "byteLength" == f ||
                              "byteOffset" == f)) ||
                          go(f, l))) ||
                      a.push(f);
                  return a;
                }
                function Ke(t) {
                  var n = t.length;
                  return n ? t[Vr(0, n - 1)] : i;
                }
                function Ye(t, n) {
                  return Wo(ki(t), or(n, 0, t.length));
                }
                function Ge(t) {
                  return Wo(ki(t));
                }
                function Xe(t, n, e) {
                  ((e !== i && !zu(t[n], e)) || (e === i && !(n in t))) &&
                    rr(t, n, e);
                }
                function Qe(t, n, e) {
                  var r = t[n];
                  (Dt.call(t, n) && zu(r, e) && (e !== i || n in t)) ||
                    rr(t, n, e);
                }
                function tr(t, n) {
                  for (var e = t.length; e--; ) if (zu(t[e][0], n)) return e;
                  return -1;
                }
                function nr(t, n, e, r) {
                  return (
                    cr(t, function (t, i, o) {
                      n(r, t, e(t), o);
                    }),
                    r
                  );
                }
                function er(t, n) {
                  return t && Ei(n, Ia(n), t);
                }
                function rr(t, n, e) {
                  "__proto__" == n && tn
                    ? tn(t, n, {
                        configurable: !0,
                        enumerable: !0,
                        value: e,
                        writable: !0,
                      })
                    : (t[n] = e);
                }
                function ir(t, n) {
                  for (
                    var e = -1, o = n.length, u = r(o), a = null == t;
                    ++e < o;

                  )
                    u[e] = a ? i : Ca(t, n[e]);
                  return u;
                }
                function or(t, n, e) {
                  return (
                    t == t &&
                      (e !== i && (t = t <= e ? t : e),
                      n !== i && (t = t >= n ? t : n)),
                    t
                  );
                }
                function ur(t, n, e, r, o, u) {
                  var a,
                    l = 1 & n,
                    f = 2 & n,
                    c = 4 & n;
                  if ((e && (a = o ? e(t, r, o, u) : e(t)), a !== i)) return a;
                  if (!Qu(t)) return t;
                  var s = Uu(t);
                  if (s) {
                    if (
                      ((a = (function (t) {
                        var n = t.length,
                          e = new t.constructor(n);
                        return (
                          n &&
                            "string" == typeof t[0] &&
                            Dt.call(t, "index") &&
                            ((e.index = t.index), (e.input = t.input)),
                          e
                        );
                      })(t)),
                      !l)
                    )
                      return ki(t, a);
                  } else {
                    var h = so(t),
                      p = h == m || h == w;
                    if (Fu(t)) return mi(t, l);
                    if (h == x || h == v || (p && !o)) {
                      if (((a = f || p ? {} : po(t)), !l))
                        return f
                          ? (function (t, n) {
                              return Ei(t, co(t), n);
                            })(
                              t,
                              (function (t, n) {
                                return t && Ei(n, ja(n), t);
                              })(a, t)
                            )
                          : (function (t, n) {
                              return Ei(t, fo(t), n);
                            })(t, er(a, t));
                    } else {
                      if (!un[h]) return o ? t : {};
                      a = (function (t, n, e) {
                        var r,
                          i = t.constructor;
                        switch (n) {
                          case j:
                            return wi(t);
                          case _:
                          case y:
                            return new i(+t);
                          case W:
                            return (function (t, n) {
                              var e = n ? wi(t.buffer) : t.buffer;
                              return new t.constructor(
                                e,
                                t.byteOffset,
                                t.byteLength
                              );
                            })(t, e);
                          case D:
                          case R:
                          case O:
                          case M:
                          case N:
                          case P:
                          case z:
                          case Z:
                          case J:
                            return Si(t, e);
                          case S:
                            return new i();
                          case A:
                          case T:
                            return new i(t);
                          case k:
                            return (function (t) {
                              var n = new t.constructor(t.source, ht.exec(t));
                              return (n.lastIndex = t.lastIndex), n;
                            })(t);
                          case E:
                            return new i();
                          case L:
                            return (r = t), Me ? xt(Me.call(r)) : {};
                        }
                      })(t, h, l);
                    }
                  }
                  u || (u = new Fe());
                  var d = u.get(t);
                  if (d) return d;
                  u.set(t, a),
                    oa(t)
                      ? t.forEach(function (r) {
                          a.add(ur(r, n, e, r, t, u));
                        })
                      : na(t) &&
                        t.forEach(function (r, i) {
                          a.set(i, ur(r, n, e, i, t, u));
                        });
                  var g = s ? i : (c ? (f ? no : to) : f ? ja : Ia)(t);
                  return (
                    kn(g || t, function (r, i) {
                      g && (r = t[(i = r)]), Qe(a, i, ur(r, n, e, i, t, u));
                    }),
                    a
                  );
                }
                function ar(t, n, e) {
                  var r = e.length;
                  if (null == t) return !r;
                  for (t = xt(t); r--; ) {
                    var o = e[r],
                      u = n[o],
                      a = t[o];
                    if ((a === i && !(o in t)) || !u(a)) return !1;
                  }
                  return !0;
                }
                function lr(t, n, e) {
                  if ("function" != typeof t) throw new Et(o);
                  return To(function () {
                    t.apply(i, e);
                  }, n);
                }
                function fr(t, n, e, r) {
                  var i = -1,
                    o = In,
                    u = !0,
                    a = t.length,
                    l = [],
                    f = n.length;
                  if (!a) return l;
                  e && (n = Wn(n, Yn(e))),
                    r
                      ? ((o = jn), (u = !1))
                      : n.length >= 200 &&
                        ((o = Xn), (u = !1), (n = new $e(n)));
                  t: for (; ++i < a; ) {
                    var c = t[i],
                      s = null == e ? c : e(c);
                    if (((c = r || 0 !== c ? c : 0), u && s == s)) {
                      for (var h = f; h--; ) if (n[h] === s) continue t;
                      l.push(c);
                    } else o(n, s, r) || l.push(c);
                  }
                  return l;
                }
                (Pe.templateSettings = {
                  escape: K,
                  evaluate: Y,
                  interpolate: G,
                  variable: "",
                  imports: { _: Pe },
                }),
                  (Pe.prototype = Ze.prototype),
                  (Pe.prototype.constructor = Pe),
                  (Je.prototype = ze(Ze.prototype)),
                  (Je.prototype.constructor = Je),
                  (Be.prototype = ze(Ze.prototype)),
                  (Be.prototype.constructor = Be),
                  (Ue.prototype.clear = function () {
                    (this.__data__ = Ee ? Ee(null) : {}), (this.size = 0);
                  }),
                  (Ue.prototype.delete = function (t) {
                    var n = this.has(t) && delete this.__data__[t];
                    return (this.size -= n ? 1 : 0), n;
                  }),
                  (Ue.prototype.get = function (t) {
                    var n = this.__data__;
                    if (Ee) {
                      var e = n[t];
                      return e === u ? i : e;
                    }
                    return Dt.call(n, t) ? n[t] : i;
                  }),
                  (Ue.prototype.has = function (t) {
                    var n = this.__data__;
                    return Ee ? n[t] !== i : Dt.call(n, t);
                  }),
                  (Ue.prototype.set = function (t, n) {
                    var e = this.__data__;
                    return (
                      (this.size += this.has(t) ? 0 : 1),
                      (e[t] = Ee && n === i ? u : n),
                      this
                    );
                  }),
                  (qe.prototype.clear = function () {
                    (this.__data__ = []), (this.size = 0);
                  }),
                  (qe.prototype.delete = function (t) {
                    var n = this.__data__,
                      e = tr(n, t);
                    return !(
                      e < 0 ||
                      (e == n.length - 1 ? n.pop() : Ft.call(n, e, 1),
                      --this.size,
                      0)
                    );
                  }),
                  (qe.prototype.get = function (t) {
                    var n = this.__data__,
                      e = tr(n, t);
                    return e < 0 ? i : n[e][1];
                  }),
                  (qe.prototype.has = function (t) {
                    return tr(this.__data__, t) > -1;
                  }),
                  (qe.prototype.set = function (t, n) {
                    var e = this.__data__,
                      r = tr(e, t);
                    return (
                      r < 0 ? (++this.size, e.push([t, n])) : (e[r][1] = n),
                      this
                    );
                  }),
                  (Ve.prototype.clear = function () {
                    (this.size = 0),
                      (this.__data__ = {
                        hash: new Ue(),
                        map: new (Ae || qe)(),
                        string: new Ue(),
                      });
                  }),
                  (Ve.prototype.delete = function (t) {
                    var n = uo(this, t).delete(t);
                    return (this.size -= n ? 1 : 0), n;
                  }),
                  (Ve.prototype.get = function (t) {
                    return uo(this, t).get(t);
                  }),
                  (Ve.prototype.has = function (t) {
                    return uo(this, t).has(t);
                  }),
                  (Ve.prototype.set = function (t, n) {
                    var e = uo(this, t),
                      r = e.size;
                    return (
                      e.set(t, n), (this.size += e.size == r ? 0 : 1), this
                    );
                  }),
                  ($e.prototype.add = $e.prototype.push =
                    function (t) {
                      return this.__data__.set(t, u), this;
                    }),
                  ($e.prototype.has = function (t) {
                    return this.__data__.has(t);
                  }),
                  (Fe.prototype.clear = function () {
                    (this.__data__ = new qe()), (this.size = 0);
                  }),
                  (Fe.prototype.delete = function (t) {
                    var n = this.__data__,
                      e = n.delete(t);
                    return (this.size = n.size), e;
                  }),
                  (Fe.prototype.get = function (t) {
                    return this.__data__.get(t);
                  }),
                  (Fe.prototype.has = function (t) {
                    return this.__data__.has(t);
                  }),
                  (Fe.prototype.set = function (t, n) {
                    var e = this.__data__;
                    if (e instanceof qe) {
                      var r = e.__data__;
                      if (!Ae || r.length < 199)
                        return r.push([t, n]), (this.size = ++e.size), this;
                      e = this.__data__ = new Ve(r);
                    }
                    return e.set(t, n), (this.size = e.size), this;
                  });
                var cr = Ii(yr),
                  sr = Ii(br, !0);
                function hr(t, n) {
                  var e = !0;
                  return (
                    cr(t, function (t, r, i) {
                      return (e = !!n(t, r, i));
                    }),
                    e
                  );
                }
                function pr(t, n, e) {
                  for (var r = -1, o = t.length; ++r < o; ) {
                    var u = t[r],
                      a = n(u);
                    if (null != a && (l === i ? a == a && !aa(a) : e(a, l)))
                      var l = a,
                        f = u;
                  }
                  return f;
                }
                function dr(t, n) {
                  var e = [];
                  return (
                    cr(t, function (t, r, i) {
                      n(t, r, i) && e.push(t);
                    }),
                    e
                  );
                }
                function vr(t, n, e, r, i) {
                  var o = -1,
                    u = t.length;
                  for (e || (e = vo), i || (i = []); ++o < u; ) {
                    var a = t[o];
                    n > 0 && e(a)
                      ? n > 1
                        ? vr(a, n - 1, e, r, i)
                        : Dn(i, a)
                      : r || (i[i.length] = a);
                  }
                  return i;
                }
                var gr = ji(),
                  _r = ji(!0);
                function yr(t, n) {
                  return t && gr(t, n, Ia);
                }
                function br(t, n) {
                  return t && _r(t, n, Ia);
                }
                function mr(t, n) {
                  return Ln(n, function (n) {
                    return Yu(t[n]);
                  });
                }
                function wr(t, n) {
                  for (
                    var e = 0, r = (n = gi(n, t)).length;
                    null != t && e < r;

                  )
                    t = t[Mo(n[e++])];
                  return e && e == r ? t : i;
                }
                function Sr(t, n, e) {
                  var r = n(t);
                  return Uu(t) ? r : Dn(r, e(t));
                }
                function Ar(t) {
                  return null == t
                    ? t === i
                      ? "[object Undefined]"
                      : "[object Null]"
                    : Xt && Xt in xt(t)
                    ? (function (t) {
                        var n = Dt.call(t, Xt),
                          e = t[Xt];
                        try {
                          t[Xt] = i;
                          var r = !0;
                        } catch (t) {}
                        var o = Mt.call(t);
                        return r && (n ? (t[Xt] = e) : delete t[Xt]), o;
                      })(t)
                    : (function (t) {
                        return Mt.call(t);
                      })(t);
                }
                function xr(t, n) {
                  return t > n;
                }
                function Cr(t, n) {
                  return null != t && Dt.call(t, n);
                }
                function kr(t, n) {
                  return null != t && n in xt(t);
                }
                function Er(t, n, e) {
                  for (
                    var o = e ? jn : In,
                      u = t[0].length,
                      a = t.length,
                      l = a,
                      f = r(a),
                      c = 1 / 0,
                      s = [];
                    l--;

                  ) {
                    var h = t[l];
                    l && n && (h = Wn(h, Yn(n))),
                      (c = _e(h.length, c)),
                      (f[l] =
                        !e && (n || (u >= 120 && h.length >= 120))
                          ? new $e(l && h)
                          : i);
                  }
                  h = t[0];
                  var p = -1,
                    d = f[0];
                  t: for (; ++p < u && s.length < c; ) {
                    var v = h[p],
                      g = n ? n(v) : v;
                    if (
                      ((v = e || 0 !== v ? v : 0), !(d ? Xn(d, g) : o(s, g, e)))
                    ) {
                      for (l = a; --l; ) {
                        var _ = f[l];
                        if (!(_ ? Xn(_, g) : o(t[l], g, e))) continue t;
                      }
                      d && d.push(g), s.push(v);
                    }
                  }
                  return s;
                }
                function Tr(t, n, e) {
                  var r =
                    null == (t = Co(t, (n = gi(n, t)))) ? t : t[Mo(Ko(n))];
                  return null == r ? i : xn(r, t, e);
                }
                function Lr(t) {
                  return ta(t) && Ar(t) == v;
                }
                function Ir(t, n, e, r, o) {
                  return (
                    t === n ||
                    (null == t || null == n || (!ta(t) && !ta(n))
                      ? t != t && n != n
                      : (function (t, n, e, r, o, u) {
                          var a = Uu(t),
                            l = Uu(n),
                            f = a ? g : so(t),
                            c = l ? g : so(n),
                            s = (f = f == v ? x : f) == x,
                            h = (c = c == v ? x : c) == x,
                            p = f == c;
                          if (p && Fu(t)) {
                            if (!Fu(n)) return !1;
                            (a = !0), (s = !1);
                          }
                          if (p && !s)
                            return (
                              u || (u = new Fe()),
                              a || la(t)
                                ? Xi(t, n, e, r, o, u)
                                : (function (t, n, e, r, i, o, u) {
                                    switch (e) {
                                      case W:
                                        if (
                                          t.byteLength != n.byteLength ||
                                          t.byteOffset != n.byteOffset
                                        )
                                          return !1;
                                        (t = t.buffer), (n = n.buffer);
                                      case j:
                                        return !(
                                          t.byteLength != n.byteLength ||
                                          !o(new Bt(t), new Bt(n))
                                        );
                                      case _:
                                      case y:
                                      case A:
                                        return zu(+t, +n);
                                      case b:
                                        return (
                                          t.name == n.name &&
                                          t.message == n.message
                                        );
                                      case k:
                                      case T:
                                        return t == n + "";
                                      case S:
                                        var a = oe;
                                      case E:
                                        var l = 1 & r;
                                        if (
                                          (a || (a = le),
                                          t.size != n.size && !l)
                                        )
                                          return !1;
                                        var f = u.get(t);
                                        if (f) return f == n;
                                        (r |= 2), u.set(t, n);
                                        var c = Xi(a(t), a(n), r, i, o, u);
                                        return u.delete(t), c;
                                      case L:
                                        if (Me) return Me.call(t) == Me.call(n);
                                    }
                                    return !1;
                                  })(t, n, f, e, r, o, u)
                            );
                          if (!(1 & e)) {
                            var d = s && Dt.call(t, "__wrapped__"),
                              m = h && Dt.call(n, "__wrapped__");
                            if (d || m) {
                              var w = d ? t.value() : t,
                                C = m ? n.value() : n;
                              return u || (u = new Fe()), o(w, C, e, r, u);
                            }
                          }
                          return (
                            !!p &&
                            (u || (u = new Fe()),
                            (function (t, n, e, r, o, u) {
                              var a = 1 & e,
                                l = to(t),
                                f = l.length;
                              if (f != to(n).length && !a) return !1;
                              for (var c = f; c--; ) {
                                var s = l[c];
                                if (!(a ? s in n : Dt.call(n, s))) return !1;
                              }
                              var h = u.get(t),
                                p = u.get(n);
                              if (h && p) return h == n && p == t;
                              var d = !0;
                              u.set(t, n), u.set(n, t);
                              for (var v = a; ++c < f; ) {
                                var g = t[(s = l[c])],
                                  _ = n[s];
                                if (r)
                                  var y = a
                                    ? r(_, g, s, n, t, u)
                                    : r(g, _, s, t, n, u);
                                if (
                                  !(y === i ? g === _ || o(g, _, e, r, u) : y)
                                ) {
                                  d = !1;
                                  break;
                                }
                                v || (v = "constructor" == s);
                              }
                              if (d && !v) {
                                var b = t.constructor,
                                  m = n.constructor;
                                b == m ||
                                  !("constructor" in t) ||
                                  !("constructor" in n) ||
                                  ("function" == typeof b &&
                                    b instanceof b &&
                                    "function" == typeof m &&
                                    m instanceof m) ||
                                  (d = !1);
                              }
                              return u.delete(t), u.delete(n), d;
                            })(t, n, e, r, o, u))
                          );
                        })(t, n, e, r, Ir, o))
                  );
                }
                function jr(t, n, e, r) {
                  var o = e.length,
                    u = o,
                    a = !r;
                  if (null == t) return !u;
                  for (t = xt(t); o--; ) {
                    var l = e[o];
                    if (a && l[2] ? l[1] !== t[l[0]] : !(l[0] in t)) return !1;
                  }
                  for (; ++o < u; ) {
                    var f = (l = e[o])[0],
                      c = t[f],
                      s = l[1];
                    if (a && l[2]) {
                      if (c === i && !(f in t)) return !1;
                    } else {
                      var h = new Fe();
                      if (r) var p = r(c, s, f, t, n, h);
                      if (!(p === i ? Ir(s, c, 3, r, h) : p)) return !1;
                    }
                  }
                  return !0;
                }
                function Wr(t) {
                  return (
                    !(!Qu(t) || ((n = t), Ot && Ot in n)) &&
                    (Yu(t) ? zt : vt).test(No(t))
                  );
                  var n;
                }
                function Dr(t) {
                  return "function" == typeof t
                    ? t
                    : null == t
                    ? el
                    : "object" == typeof t
                    ? Uu(t)
                      ? Pr(t[0], t[1])
                      : Nr(t)
                    : sl(t);
                }
                function Rr(t) {
                  if (!wo(t)) return ve(t);
                  var n = [];
                  for (var e in xt(t))
                    Dt.call(t, e) && "constructor" != e && n.push(e);
                  return n;
                }
                function Or(t, n) {
                  return t < n;
                }
                function Mr(t, n) {
                  var e = -1,
                    i = Vu(t) ? r(t.length) : [];
                  return (
                    cr(t, function (t, r, o) {
                      i[++e] = n(t, r, o);
                    }),
                    i
                  );
                }
                function Nr(t) {
                  var n = ao(t);
                  return 1 == n.length && n[0][2]
                    ? Ao(n[0][0], n[0][1])
                    : function (e) {
                        return e === t || jr(e, t, n);
                      };
                }
                function Pr(t, n) {
                  return yo(t) && So(n)
                    ? Ao(Mo(t), n)
                    : function (e) {
                        var r = Ca(e, t);
                        return r === i && r === n ? ka(e, t) : Ir(n, r, 3);
                      };
                }
                function zr(t, n, e, r, o) {
                  t !== n &&
                    gr(
                      n,
                      function (u, a) {
                        if ((o || (o = new Fe()), Qu(u)))
                          !(function (t, n, e, r, o, u, a) {
                            var l = ko(t, e),
                              f = ko(n, e),
                              c = a.get(f);
                            if (c) Xe(t, e, c);
                            else {
                              var s = u ? u(l, f, e + "", t, n, a) : i,
                                h = s === i;
                              if (h) {
                                var p = Uu(f),
                                  d = !p && Fu(f),
                                  v = !p && !d && la(f);
                                (s = f),
                                  p || d || v
                                    ? Uu(l)
                                      ? (s = l)
                                      : $u(l)
                                      ? (s = ki(l))
                                      : d
                                      ? ((h = !1), (s = mi(f, !0)))
                                      : v
                                      ? ((h = !1), (s = Si(f, !0)))
                                      : (s = [])
                                    : ra(f) || Bu(f)
                                    ? ((s = l),
                                      Bu(l)
                                        ? (s = ga(l))
                                        : (Qu(l) && !Yu(l)) || (s = po(f)))
                                    : (h = !1);
                              }
                              h && (a.set(f, s), o(s, f, r, u, a), a.delete(f)),
                                Xe(t, e, s);
                            }
                          })(t, n, a, e, zr, r, o);
                        else {
                          var l = r ? r(ko(t, a), u, a + "", t, n, o) : i;
                          l === i && (l = u), Xe(t, a, l);
                        }
                      },
                      ja
                    );
                }
                function Zr(t, n) {
                  var e = t.length;
                  if (e) return go((n += n < 0 ? e : 0), e) ? t[n] : i;
                }
                function Jr(t, n, e) {
                  n = n.length
                    ? Wn(n, function (t) {
                        return Uu(t)
                          ? function (n) {
                              return wr(n, 1 === t.length ? t[0] : t);
                            }
                          : t;
                      })
                    : [el];
                  var r = -1;
                  n = Wn(n, Yn(oo()));
                  var i = Mr(t, function (t, e, i) {
                    var o = Wn(n, function (n) {
                      return n(t);
                    });
                    return { criteria: o, index: ++r, value: t };
                  });
                  return (function (t, n) {
                    var r = t.length;
                    for (
                      t.sort(function (t, n) {
                        return (function (t, n, e) {
                          for (
                            var r = -1,
                              i = t.criteria,
                              o = n.criteria,
                              u = i.length,
                              a = e.length;
                            ++r < u;

                          ) {
                            var l = Ai(i[r], o[r]);
                            if (l)
                              return r >= a ? l : l * ("desc" == e[r] ? -1 : 1);
                          }
                          return t.index - n.index;
                        })(t, n, e);
                      });
                      r--;

                    )
                      t[r] = t[r].value;
                    return t;
                  })(i);
                }
                function Br(t, n, e) {
                  for (var r = -1, i = n.length, o = {}; ++r < i; ) {
                    var u = n[r],
                      a = wr(t, u);
                    e(a, u) && Yr(o, gi(u, t), a);
                  }
                  return o;
                }
                function Ur(t, n, e, r) {
                  var i = r ? Jn : Zn,
                    o = -1,
                    u = n.length,
                    a = t;
                  for (
                    t === n && (n = ki(n)), e && (a = Wn(t, Yn(e)));
                    ++o < u;

                  )
                    for (
                      var l = 0, f = n[o], c = e ? e(f) : f;
                      (l = i(a, c, l, r)) > -1;

                    )
                      a !== t && Ft.call(a, l, 1), Ft.call(t, l, 1);
                  return t;
                }
                function qr(t, n) {
                  for (var e = t ? n.length : 0, r = e - 1; e--; ) {
                    var i = n[e];
                    if (e == r || i !== o) {
                      var o = i;
                      go(i) ? Ft.call(t, i, 1) : li(t, i);
                    }
                  }
                  return t;
                }
                function Vr(t, n) {
                  return t + dn(me() * (n - t + 1));
                }
                function $r(t, n) {
                  var e = "";
                  if (!t || n < 1 || n > s) return e;
                  do {
                    n % 2 && (e += t), (n = dn(n / 2)) && (t += t);
                  } while (n);
                  return e;
                }
                function Fr(t, n) {
                  return Lo(xo(t, n, el), t + "");
                }
                function Hr(t) {
                  return Ke(za(t));
                }
                function Kr(t, n) {
                  var e = za(t);
                  return Wo(e, or(n, 0, e.length));
                }
                function Yr(t, n, e, r) {
                  if (!Qu(t)) return t;
                  for (
                    var o = -1, u = (n = gi(n, t)).length, a = u - 1, l = t;
                    null != l && ++o < u;

                  ) {
                    var f = Mo(n[o]),
                      c = e;
                    if (
                      "__proto__" === f ||
                      "constructor" === f ||
                      "prototype" === f
                    )
                      return t;
                    if (o != a) {
                      var s = l[f];
                      (c = r ? r(s, f, l) : i) === i &&
                        (c = Qu(s) ? s : go(n[o + 1]) ? [] : {});
                    }
                    Qe(l, f, c), (l = l[f]);
                  }
                  return t;
                }
                var Gr = Te
                    ? function (t, n) {
                        return Te.set(t, n), t;
                      }
                    : el,
                  Xr = tn
                    ? function (t, n) {
                        return tn(t, "toString", {
                          configurable: !0,
                          enumerable: !1,
                          value: Qa(n),
                          writable: !0,
                        });
                      }
                    : el;
                function Qr(t) {
                  return Wo(za(t));
                }
                function ti(t, n, e) {
                  var i = -1,
                    o = t.length;
                  n < 0 && (n = -n > o ? 0 : o + n),
                    (e = e > o ? o : e) < 0 && (e += o),
                    (o = n > e ? 0 : (e - n) >>> 0),
                    (n >>>= 0);
                  for (var u = r(o); ++i < o; ) u[i] = t[i + n];
                  return u;
                }
                function ni(t, n) {
                  var e;
                  return (
                    cr(t, function (t, r, i) {
                      return !(e = n(t, r, i));
                    }),
                    !!e
                  );
                }
                function ei(t, n, e) {
                  var r = 0,
                    i = null == t ? r : t.length;
                  if ("number" == typeof n && n == n && i <= 2147483647) {
                    for (; r < i; ) {
                      var o = (r + i) >>> 1,
                        u = t[o];
                      null !== u && !aa(u) && (e ? u <= n : u < n)
                        ? (r = o + 1)
                        : (i = o);
                    }
                    return i;
                  }
                  return ri(t, n, el, e);
                }
                function ri(t, n, e, r) {
                  var o = 0,
                    u = null == t ? 0 : t.length;
                  if (0 === u) return 0;
                  for (
                    var a = (n = e(n)) != n,
                      l = null === n,
                      f = aa(n),
                      c = n === i;
                    o < u;

                  ) {
                    var s = dn((o + u) / 2),
                      h = e(t[s]),
                      p = h !== i,
                      d = null === h,
                      v = h == h,
                      g = aa(h);
                    if (a) var _ = r || v;
                    else
                      _ = c
                        ? v && (r || p)
                        : l
                        ? v && p && (r || !d)
                        : f
                        ? v && p && !d && (r || !g)
                        : !d && !g && (r ? h <= n : h < n);
                    _ ? (o = s + 1) : (u = s);
                  }
                  return _e(u, 4294967294);
                }
                function ii(t, n) {
                  for (var e = -1, r = t.length, i = 0, o = []; ++e < r; ) {
                    var u = t[e],
                      a = n ? n(u) : u;
                    if (!e || !zu(a, l)) {
                      var l = a;
                      o[i++] = 0 === u ? 0 : u;
                    }
                  }
                  return o;
                }
                function oi(t) {
                  return "number" == typeof t ? t : aa(t) ? h : +t;
                }
                function ui(t) {
                  if ("string" == typeof t) return t;
                  if (Uu(t)) return Wn(t, ui) + "";
                  if (aa(t)) return Ne ? Ne.call(t) : "";
                  var n = t + "";
                  return "0" == n && 1 / t == -1 / 0 ? "-0" : n;
                }
                function ai(t, n, e) {
                  var r = -1,
                    i = In,
                    o = t.length,
                    u = !0,
                    a = [],
                    l = a;
                  if (e) (u = !1), (i = jn);
                  else if (o >= 200) {
                    var f = n ? null : $i(t);
                    if (f) return le(f);
                    (u = !1), (i = Xn), (l = new $e());
                  } else l = n ? [] : a;
                  t: for (; ++r < o; ) {
                    var c = t[r],
                      s = n ? n(c) : c;
                    if (((c = e || 0 !== c ? c : 0), u && s == s)) {
                      for (var h = l.length; h--; ) if (l[h] === s) continue t;
                      n && l.push(s), a.push(c);
                    } else i(l, s, e) || (l !== a && l.push(s), a.push(c));
                  }
                  return a;
                }
                function li(t, n) {
                  return (
                    null == (t = Co(t, (n = gi(n, t)))) || delete t[Mo(Ko(n))]
                  );
                }
                function fi(t, n, e, r) {
                  return Yr(t, n, e(wr(t, n)), r);
                }
                function ci(t, n, e, r) {
                  for (
                    var i = t.length, o = r ? i : -1;
                    (r ? o-- : ++o < i) && n(t[o], o, t);

                  );
                  return e
                    ? ti(t, r ? 0 : o, r ? o + 1 : i)
                    : ti(t, r ? o + 1 : 0, r ? i : o);
                }
                function si(t, n) {
                  var e = t;
                  return (
                    e instanceof Be && (e = e.value()),
                    Rn(
                      n,
                      function (t, n) {
                        return n.func.apply(n.thisArg, Dn([t], n.args));
                      },
                      e
                    )
                  );
                }
                function hi(t, n, e) {
                  var i = t.length;
                  if (i < 2) return i ? ai(t[0]) : [];
                  for (var o = -1, u = r(i); ++o < i; )
                    for (var a = t[o], l = -1; ++l < i; )
                      l != o && (u[o] = fr(u[o] || a, t[l], n, e));
                  return ai(vr(u, 1), n, e);
                }
                function pi(t, n, e) {
                  for (
                    var r = -1, o = t.length, u = n.length, a = {};
                    ++r < o;

                  ) {
                    var l = r < u ? n[r] : i;
                    e(a, t[r], l);
                  }
                  return a;
                }
                function di(t) {
                  return $u(t) ? t : [];
                }
                function vi(t) {
                  return "function" == typeof t ? t : el;
                }
                function gi(t, n) {
                  return Uu(t) ? t : yo(t, n) ? [t] : Oo(_a(t));
                }
                var _i = Fr;
                function yi(t, n, e) {
                  var r = t.length;
                  return (e = e === i ? r : e), !n && e >= r ? t : ti(t, n, e);
                }
                var bi =
                  an ||
                  function (t) {
                    return hn.clearTimeout(t);
                  };
                function mi(t, n) {
                  if (n) return t.slice();
                  var e = t.length,
                    r = Ut ? Ut(e) : new t.constructor(e);
                  return t.copy(r), r;
                }
                function wi(t) {
                  var n = new t.constructor(t.byteLength);
                  return new Bt(n).set(new Bt(t)), n;
                }
                function Si(t, n) {
                  var e = n ? wi(t.buffer) : t.buffer;
                  return new t.constructor(e, t.byteOffset, t.length);
                }
                function Ai(t, n) {
                  if (t !== n) {
                    var e = t !== i,
                      r = null === t,
                      o = t == t,
                      u = aa(t),
                      a = n !== i,
                      l = null === n,
                      f = n == n,
                      c = aa(n);
                    if (
                      (!l && !c && !u && t > n) ||
                      (u && a && f && !l && !c) ||
                      (r && a && f) ||
                      (!e && f) ||
                      !o
                    )
                      return 1;
                    if (
                      (!r && !u && !c && t < n) ||
                      (c && e && o && !r && !u) ||
                      (l && e && o) ||
                      (!a && o) ||
                      !f
                    )
                      return -1;
                  }
                  return 0;
                }
                function xi(t, n, e, i) {
                  for (
                    var o = -1,
                      u = t.length,
                      a = e.length,
                      l = -1,
                      f = n.length,
                      c = ge(u - a, 0),
                      s = r(f + c),
                      h = !i;
                    ++l < f;

                  )
                    s[l] = n[l];
                  for (; ++o < a; ) (h || o < u) && (s[e[o]] = t[o]);
                  for (; c--; ) s[l++] = t[o++];
                  return s;
                }
                function Ci(t, n, e, i) {
                  for (
                    var o = -1,
                      u = t.length,
                      a = -1,
                      l = e.length,
                      f = -1,
                      c = n.length,
                      s = ge(u - l, 0),
                      h = r(s + c),
                      p = !i;
                    ++o < s;

                  )
                    h[o] = t[o];
                  for (var d = o; ++f < c; ) h[d + f] = n[f];
                  for (; ++a < l; ) (p || o < u) && (h[d + e[a]] = t[o++]);
                  return h;
                }
                function ki(t, n) {
                  var e = -1,
                    i = t.length;
                  for (n || (n = r(i)); ++e < i; ) n[e] = t[e];
                  return n;
                }
                function Ei(t, n, e, r) {
                  var o = !e;
                  e || (e = {});
                  for (var u = -1, a = n.length; ++u < a; ) {
                    var l = n[u],
                      f = r ? r(e[l], t[l], l, e, t) : i;
                    f === i && (f = t[l]), o ? rr(e, l, f) : Qe(e, l, f);
                  }
                  return e;
                }
                function Ti(t, n) {
                  return function (e, r) {
                    var i = Uu(e) ? Cn : nr,
                      o = n ? n() : {};
                    return i(e, t, oo(r, 2), o);
                  };
                }
                function Li(t) {
                  return Fr(function (n, e) {
                    var r = -1,
                      o = e.length,
                      u = o > 1 ? e[o - 1] : i,
                      a = o > 2 ? e[2] : i;
                    for (
                      u = t.length > 3 && "function" == typeof u ? (o--, u) : i,
                        a &&
                          _o(e[0], e[1], a) &&
                          ((u = o < 3 ? i : u), (o = 1)),
                        n = xt(n);
                      ++r < o;

                    ) {
                      var l = e[r];
                      l && t(n, l, r, u);
                    }
                    return n;
                  });
                }
                function Ii(t, n) {
                  return function (e, r) {
                    if (null == e) return e;
                    if (!Vu(e)) return t(e, r);
                    for (
                      var i = e.length, o = n ? i : -1, u = xt(e);
                      (n ? o-- : ++o < i) && !1 !== r(u[o], o, u);

                    );
                    return e;
                  };
                }
                function ji(t) {
                  return function (n, e, r) {
                    for (var i = -1, o = xt(n), u = r(n), a = u.length; a--; ) {
                      var l = u[t ? a : ++i];
                      if (!1 === e(o[l], l, o)) break;
                    }
                    return n;
                  };
                }
                function Wi(t) {
                  return function (n) {
                    var e = ie((n = _a(n))) ? se(n) : i,
                      r = e ? e[0] : n.charAt(0),
                      o = e ? yi(e, 1).join("") : n.slice(1);
                    return r[t]() + o;
                  };
                }
                function Di(t) {
                  return function (n) {
                    return Rn(Ya(Ba(n).replace(Yt, "")), t, "");
                  };
                }
                function Ri(t) {
                  return function () {
                    var n = arguments;
                    switch (n.length) {
                      case 0:
                        return new t();
                      case 1:
                        return new t(n[0]);
                      case 2:
                        return new t(n[0], n[1]);
                      case 3:
                        return new t(n[0], n[1], n[2]);
                      case 4:
                        return new t(n[0], n[1], n[2], n[3]);
                      case 5:
                        return new t(n[0], n[1], n[2], n[3], n[4]);
                      case 6:
                        return new t(n[0], n[1], n[2], n[3], n[4], n[5]);
                      case 7:
                        return new t(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);
                    }
                    var e = ze(t.prototype),
                      r = t.apply(e, n);
                    return Qu(r) ? r : e;
                  };
                }
                function Oi(t) {
                  return function (n, e, r) {
                    var o = xt(n);
                    if (!Vu(n)) {
                      var u = oo(e, 3);
                      (n = Ia(n)),
                        (e = function (t) {
                          return u(o[t], t, o);
                        });
                    }
                    var a = t(n, e, r);
                    return a > -1 ? o[u ? n[a] : a] : i;
                  };
                }
                function Mi(t) {
                  return Qi(function (n) {
                    var e = n.length,
                      r = e,
                      u = Je.prototype.thru;
                    for (t && n.reverse(); r--; ) {
                      var a = n[r];
                      if ("function" != typeof a) throw new Et(o);
                      if (u && !l && "wrapper" == ro(a)) var l = new Je([], !0);
                    }
                    for (r = l ? r : e; ++r < e; ) {
                      var f = ro((a = n[r])),
                        c = "wrapper" == f ? eo(a) : i;
                      l =
                        c &&
                        bo(c[0]) &&
                        424 == c[1] &&
                        !c[4].length &&
                        1 == c[9]
                          ? l[ro(c[0])].apply(l, c[3])
                          : 1 == a.length && bo(a)
                          ? l[f]()
                          : l.thru(a);
                    }
                    return function () {
                      var t = arguments,
                        r = t[0];
                      if (l && 1 == t.length && Uu(r))
                        return l.plant(r).value();
                      for (
                        var i = 0, o = e ? n[i].apply(this, t) : r;
                        ++i < e;

                      )
                        o = n[i].call(this, o);
                      return o;
                    };
                  });
                }
                function Ni(t, n, e, o, u, a, l, c, s, h) {
                  var p = n & f,
                    d = 1 & n,
                    v = 2 & n,
                    g = 24 & n,
                    _ = 512 & n,
                    y = v ? i : Ri(t);
                  return function f() {
                    for (var b = arguments.length, m = r(b), w = b; w--; )
                      m[w] = arguments[w];
                    if (g)
                      var S = io(f),
                        A = (function (t, n) {
                          for (var e = t.length, r = 0; e--; )
                            t[e] === n && ++r;
                          return r;
                        })(m, S);
                    if (
                      (o && (m = xi(m, o, u, g)),
                      a && (m = Ci(m, a, l, g)),
                      (b -= A),
                      g && b < h)
                    ) {
                      var x = ae(m, S);
                      return qi(t, n, Ni, f.placeholder, e, m, x, c, s, h - b);
                    }
                    var C = d ? e : this,
                      k = v ? C[t] : t;
                    return (
                      (b = m.length),
                      c
                        ? (m = (function (t, n) {
                            for (
                              var e = t.length, r = _e(n.length, e), o = ki(t);
                              r--;

                            ) {
                              var u = n[r];
                              t[r] = go(u, e) ? o[u] : i;
                            }
                            return t;
                          })(m, c))
                        : _ && b > 1 && m.reverse(),
                      p && s < b && (m.length = s),
                      this &&
                        this !== hn &&
                        this instanceof f &&
                        (k = y || Ri(k)),
                      k.apply(C, m)
                    );
                  };
                }
                function Pi(t, n) {
                  return function (e, r) {
                    return (function (t, n, e, r) {
                      return (
                        yr(t, function (t, i, o) {
                          n(r, e(t), i, o);
                        }),
                        r
                      );
                    })(e, t, n(r), {});
                  };
                }
                function zi(t, n) {
                  return function (e, r) {
                    var o;
                    if (e === i && r === i) return n;
                    if ((e !== i && (o = e), r !== i)) {
                      if (o === i) return r;
                      "string" == typeof e || "string" == typeof r
                        ? ((e = ui(e)), (r = ui(r)))
                        : ((e = oi(e)), (r = oi(r))),
                        (o = t(e, r));
                    }
                    return o;
                  };
                }
                function Zi(t) {
                  return Qi(function (n) {
                    return (
                      (n = Wn(n, Yn(oo()))),
                      Fr(function (e) {
                        var r = this;
                        return t(n, function (t) {
                          return xn(t, r, e);
                        });
                      })
                    );
                  });
                }
                function Ji(t, n) {
                  var e = (n = n === i ? " " : ui(n)).length;
                  if (e < 2) return e ? $r(n, t) : n;
                  var r = $r(n, pn(t / ce(n)));
                  return ie(n) ? yi(se(r), 0, t).join("") : r.slice(0, t);
                }
                function Bi(t) {
                  return function (n, e, o) {
                    return (
                      o && "number" != typeof o && _o(n, e, o) && (e = o = i),
                      (n = ha(n)),
                      e === i ? ((e = n), (n = 0)) : (e = ha(e)),
                      (function (t, n, e, i) {
                        for (
                          var o = -1,
                            u = ge(pn((n - t) / (e || 1)), 0),
                            a = r(u);
                          u--;

                        )
                          (a[i ? u : ++o] = t), (t += e);
                        return a;
                      })(n, e, (o = o === i ? (n < e ? 1 : -1) : ha(o)), t)
                    );
                  };
                }
                function Ui(t) {
                  return function (n, e) {
                    return (
                      ("string" == typeof n && "string" == typeof e) ||
                        ((n = va(n)), (e = va(e))),
                      t(n, e)
                    );
                  };
                }
                function qi(t, n, e, r, o, u, a, f, c, s) {
                  var h = 8 & n;
                  (n |= h ? l : 64), 4 & (n &= ~(h ? 64 : l)) || (n &= -4);
                  var p = [
                      t,
                      n,
                      o,
                      h ? u : i,
                      h ? a : i,
                      h ? i : u,
                      h ? i : a,
                      f,
                      c,
                      s,
                    ],
                    d = e.apply(i, p);
                  return bo(t) && Eo(d, p), (d.placeholder = r), Io(d, t, n);
                }
                function Vi(t) {
                  var n = At[t];
                  return function (t, e) {
                    if (
                      ((t = va(t)),
                      (e = null == e ? 0 : _e(pa(e), 292)) && Nn(t))
                    ) {
                      var r = (_a(t) + "e").split("e");
                      return +(
                        (r = (_a(n(r[0] + "e" + (+r[1] + e))) + "e").split(
                          "e"
                        ))[0] +
                        "e" +
                        (+r[1] - e)
                      );
                    }
                    return n(t);
                  };
                }
                var $i =
                  Ce && 1 / le(new Ce([, -0]))[1] == c
                    ? function (t) {
                        return new Ce(t);
                      }
                    : al;
                function Fi(t) {
                  return function (n) {
                    var e = so(n);
                    return e == S
                      ? oe(n)
                      : e == E
                      ? fe(n)
                      : (function (t, n) {
                          return Wn(n, function (n) {
                            return [n, t[n]];
                          });
                        })(n, t(n));
                  };
                }
                function Hi(t, n, e, u, c, s, h, p) {
                  var d = 2 & n;
                  if (!d && "function" != typeof t) throw new Et(o);
                  var v = u ? u.length : 0;
                  if (
                    (v || ((n &= -97), (u = c = i)),
                    (h = h === i ? h : ge(pa(h), 0)),
                    (p = p === i ? p : pa(p)),
                    (v -= c ? c.length : 0),
                    64 & n)
                  ) {
                    var g = u,
                      _ = c;
                    u = c = i;
                  }
                  var y = d ? i : eo(t),
                    b = [t, n, e, u, c, g, _, s, h, p];
                  if (
                    (y &&
                      (function (t, n) {
                        var e = t[1],
                          r = n[1],
                          i = e | r,
                          o = i < 131,
                          u =
                            (r == f && 8 == e) ||
                            (r == f && 256 == e && t[7].length <= n[8]) ||
                            (384 == r && n[7].length <= n[8] && 8 == e);
                        if (!o && !u) return t;
                        1 & r && ((t[2] = n[2]), (i |= 1 & e ? 0 : 4));
                        var l = n[3];
                        if (l) {
                          var c = t[3];
                          (t[3] = c ? xi(c, l, n[4]) : l),
                            (t[4] = c ? ae(t[3], a) : n[4]);
                        }
                        (l = n[5]) &&
                          ((c = t[5]),
                          (t[5] = c ? Ci(c, l, n[6]) : l),
                          (t[6] = c ? ae(t[5], a) : n[6])),
                          (l = n[7]) && (t[7] = l),
                          r & f &&
                            (t[8] = null == t[8] ? n[8] : _e(t[8], n[8])),
                          null == t[9] && (t[9] = n[9]),
                          (t[0] = n[0]),
                          (t[1] = i);
                      })(b, y),
                    (t = b[0]),
                    (n = b[1]),
                    (e = b[2]),
                    (u = b[3]),
                    (c = b[4]),
                    !(p = b[9] =
                      b[9] === i ? (d ? 0 : t.length) : ge(b[9] - v, 0)) &&
                      24 & n &&
                      (n &= -25),
                    n && 1 != n)
                  )
                    m =
                      8 == n || 16 == n
                        ? (function (t, n, e) {
                            var o = Ri(t);
                            return function u() {
                              for (
                                var a = arguments.length,
                                  l = r(a),
                                  f = a,
                                  c = io(u);
                                f--;

                              )
                                l[f] = arguments[f];
                              var s =
                                a < 3 && l[0] !== c && l[a - 1] !== c
                                  ? []
                                  : ae(l, c);
                              return (a -= s.length) < e
                                ? qi(
                                    t,
                                    n,
                                    Ni,
                                    u.placeholder,
                                    i,
                                    l,
                                    s,
                                    i,
                                    i,
                                    e - a
                                  )
                                : xn(
                                    this && this !== hn && this instanceof u
                                      ? o
                                      : t,
                                    this,
                                    l
                                  );
                            };
                          })(t, n, p)
                        : (n != l && 33 != n) || c.length
                        ? Ni.apply(i, b)
                        : (function (t, n, e, i) {
                            var o = 1 & n,
                              u = Ri(t);
                            return function n() {
                              for (
                                var a = -1,
                                  l = arguments.length,
                                  f = -1,
                                  c = i.length,
                                  s = r(c + l),
                                  h =
                                    this && this !== hn && this instanceof n
                                      ? u
                                      : t;
                                ++f < c;

                              )
                                s[f] = i[f];
                              for (; l--; ) s[f++] = arguments[++a];
                              return xn(h, o ? e : this, s);
                            };
                          })(t, n, e, u);
                  else
                    var m = (function (t, n, e) {
                      var r = 1 & n,
                        i = Ri(t);
                      return function n() {
                        return (
                          this && this !== hn && this instanceof n ? i : t
                        ).apply(r ? e : this, arguments);
                      };
                    })(t, n, e);
                  return Io((y ? Gr : Eo)(m, b), t, n);
                }
                function Ki(t, n, e, r) {
                  return t === i || (zu(t, It[e]) && !Dt.call(r, e)) ? n : t;
                }
                function Yi(t, n, e, r, o, u) {
                  return (
                    Qu(t) &&
                      Qu(n) &&
                      (u.set(n, t), zr(t, n, i, Yi, u), u.delete(n)),
                    t
                  );
                }
                function Gi(t) {
                  return ra(t) ? i : t;
                }
                function Xi(t, n, e, r, o, u) {
                  var a = 1 & e,
                    l = t.length,
                    f = n.length;
                  if (l != f && !(a && f > l)) return !1;
                  var c = u.get(t),
                    s = u.get(n);
                  if (c && s) return c == n && s == t;
                  var h = -1,
                    p = !0,
                    d = 2 & e ? new $e() : i;
                  for (u.set(t, n), u.set(n, t); ++h < l; ) {
                    var v = t[h],
                      g = n[h];
                    if (r)
                      var _ = a ? r(g, v, h, n, t, u) : r(v, g, h, t, n, u);
                    if (_ !== i) {
                      if (_) continue;
                      p = !1;
                      break;
                    }
                    if (d) {
                      if (
                        !Mn(n, function (t, n) {
                          if (!Xn(d, n) && (v === t || o(v, t, e, r, u)))
                            return d.push(n);
                        })
                      ) {
                        p = !1;
                        break;
                      }
                    } else if (v !== g && !o(v, g, e, r, u)) {
                      p = !1;
                      break;
                    }
                  }
                  return u.delete(t), u.delete(n), p;
                }
                function Qi(t) {
                  return Lo(xo(t, i, qo), t + "");
                }
                function to(t) {
                  return Sr(t, Ia, fo);
                }
                function no(t) {
                  return Sr(t, ja, co);
                }
                var eo = Te
                  ? function (t) {
                      return Te.get(t);
                    }
                  : al;
                function ro(t) {
                  for (
                    var n = t.name + "",
                      e = Le[n],
                      r = Dt.call(Le, n) ? e.length : 0;
                    r--;

                  ) {
                    var i = e[r],
                      o = i.func;
                    if (null == o || o == t) return i.name;
                  }
                  return n;
                }
                function io(t) {
                  return (Dt.call(Pe, "placeholder") ? Pe : t).placeholder;
                }
                function oo() {
                  var t = Pe.iteratee || rl;
                  return (
                    (t = t === rl ? Dr : t),
                    arguments.length ? t(arguments[0], arguments[1]) : t
                  );
                }
                function uo(t, n) {
                  var e,
                    r,
                    i = t.__data__;
                  return (
                    "string" == (r = typeof (e = n)) ||
                    "number" == r ||
                    "symbol" == r ||
                    "boolean" == r
                      ? "__proto__" !== e
                      : null === e
                  )
                    ? i["string" == typeof n ? "string" : "hash"]
                    : i.map;
                }
                function ao(t) {
                  for (var n = Ia(t), e = n.length; e--; ) {
                    var r = n[e],
                      i = t[r];
                    n[e] = [r, i, So(i)];
                  }
                  return n;
                }
                function lo(t, n) {
                  var e = (function (t, n) {
                    return null == t ? i : t[n];
                  })(t, n);
                  return Wr(e) ? e : i;
                }
                var fo = gn
                    ? function (t) {
                        return null == t
                          ? []
                          : ((t = xt(t)),
                            Ln(gn(t), function (n) {
                              return $t.call(t, n);
                            }));
                      }
                    : dl,
                  co = gn
                    ? function (t) {
                        for (var n = []; t; ) Dn(n, fo(t)), (t = qt(t));
                        return n;
                      }
                    : dl,
                  so = Ar;
                function ho(t, n, e) {
                  for (
                    var r = -1, i = (n = gi(n, t)).length, o = !1;
                    ++r < i;

                  ) {
                    var u = Mo(n[r]);
                    if (!(o = null != t && e(t, u))) break;
                    t = t[u];
                  }
                  return o || ++r != i
                    ? o
                    : !!(i = null == t ? 0 : t.length) &&
                        Xu(i) &&
                        go(u, i) &&
                        (Uu(t) || Bu(t));
                }
                function po(t) {
                  return "function" != typeof t.constructor || wo(t)
                    ? {}
                    : ze(qt(t));
                }
                function vo(t) {
                  return Uu(t) || Bu(t) || !!(Ht && t && t[Ht]);
                }
                function go(t, n) {
                  var e = typeof t;
                  return (
                    !!(n = null == n ? s : n) &&
                    ("number" == e || ("symbol" != e && _t.test(t))) &&
                    t > -1 &&
                    t % 1 == 0 &&
                    t < n
                  );
                }
                function _o(t, n, e) {
                  if (!Qu(e)) return !1;
                  var r = typeof n;
                  return (
                    !!("number" == r
                      ? Vu(e) && go(n, e.length)
                      : "string" == r && n in e) && zu(e[n], t)
                  );
                }
                function yo(t, n) {
                  if (Uu(t)) return !1;
                  var e = typeof t;
                  return (
                    !(
                      "number" != e &&
                      "symbol" != e &&
                      "boolean" != e &&
                      null != t &&
                      !aa(t)
                    ) ||
                    Q.test(t) ||
                    !X.test(t) ||
                    (null != n && t in xt(n))
                  );
                }
                function bo(t) {
                  var n = ro(t),
                    e = Pe[n];
                  if ("function" != typeof e || !(n in Be.prototype)) return !1;
                  if (t === e) return !0;
                  var r = eo(e);
                  return !!r && t === r[0];
                }
                ((Se && so(new Se(new ArrayBuffer(1))) != W) ||
                  (Ae && so(new Ae()) != S) ||
                  (xe && so(xe.resolve()) != C) ||
                  (Ce && so(new Ce()) != E) ||
                  (ke && so(new ke()) != I)) &&
                  (so = function (t) {
                    var n = Ar(t),
                      e = n == x ? t.constructor : i,
                      r = e ? No(e) : "";
                    if (r)
                      switch (r) {
                        case Ie:
                          return W;
                        case je:
                          return S;
                        case We:
                          return C;
                        case De:
                          return E;
                        case Re:
                          return I;
                      }
                    return n;
                  });
                var mo = jt ? Yu : vl;
                function wo(t) {
                  var n = t && t.constructor;
                  return t === (("function" == typeof n && n.prototype) || It);
                }
                function So(t) {
                  return t == t && !Qu(t);
                }
                function Ao(t, n) {
                  return function (e) {
                    return null != e && e[t] === n && (n !== i || t in xt(e));
                  };
                }
                function xo(t, n, e) {
                  return (
                    (n = ge(n === i ? t.length - 1 : n, 0)),
                    function () {
                      for (
                        var i = arguments,
                          o = -1,
                          u = ge(i.length - n, 0),
                          a = r(u);
                        ++o < u;

                      )
                        a[o] = i[n + o];
                      o = -1;
                      for (var l = r(n + 1); ++o < n; ) l[o] = i[o];
                      return (l[n] = e(a)), xn(t, this, l);
                    }
                  );
                }
                function Co(t, n) {
                  return n.length < 2 ? t : wr(t, ti(n, 0, -1));
                }
                function ko(t, n) {
                  if (
                    ("constructor" !== n || "function" != typeof t[n]) &&
                    "__proto__" != n
                  )
                    return t[n];
                }
                var Eo = jo(Gr),
                  To =
                    sn ||
                    function (t, n) {
                      return hn.setTimeout(t, n);
                    },
                  Lo = jo(Xr);
                function Io(t, n, e) {
                  var r = n + "";
                  return Lo(
                    t,
                    (function (t, n) {
                      var e = n.length;
                      if (!e) return t;
                      var r = e - 1;
                      return (
                        (n[r] = (e > 1 ? "& " : "") + n[r]),
                        (n = n.join(e > 2 ? ", " : " ")),
                        t.replace(ot, "{\n/* [wrapped with " + n + "] */\n")
                      );
                    })(
                      r,
                      (function (t, n) {
                        return (
                          kn(d, function (e) {
                            var r = "_." + e[0];
                            n & e[1] && !In(t, r) && t.push(r);
                          }),
                          t.sort()
                        );
                      })(
                        (function (t) {
                          var n = t.match(ut);
                          return n ? n[1].split(at) : [];
                        })(r),
                        e
                      )
                    )
                  );
                }
                function jo(t) {
                  var n = 0,
                    e = 0;
                  return function () {
                    var r = ye(),
                      o = 16 - (r - e);
                    if (((e = r), o > 0)) {
                      if (++n >= 800) return arguments[0];
                    } else n = 0;
                    return t.apply(i, arguments);
                  };
                }
                function Wo(t, n) {
                  var e = -1,
                    r = t.length,
                    o = r - 1;
                  for (n = n === i ? r : n; ++e < n; ) {
                    var u = Vr(e, o),
                      a = t[u];
                    (t[u] = t[e]), (t[e] = a);
                  }
                  return (t.length = n), t;
                }
                var Do,
                  Ro,
                  Oo =
                    ((Do = Du(
                      function (t) {
                        var n = [];
                        return (
                          46 === t.charCodeAt(0) && n.push(""),
                          t.replace(tt, function (t, e, r, i) {
                            n.push(r ? i.replace(ct, "$1") : e || t);
                          }),
                          n
                        );
                      },
                      function (t) {
                        return 500 === Ro.size && Ro.clear(), t;
                      }
                    )),
                    (Ro = Do.cache),
                    Do);
                function Mo(t) {
                  if ("string" == typeof t || aa(t)) return t;
                  var n = t + "";
                  return "0" == n && 1 / t == -1 / 0 ? "-0" : n;
                }
                function No(t) {
                  if (null != t) {
                    try {
                      return Wt.call(t);
                    } catch (t) {}
                    try {
                      return t + "";
                    } catch (t) {}
                  }
                  return "";
                }
                function Po(t) {
                  if (t instanceof Be) return t.clone();
                  var n = new Je(t.__wrapped__, t.__chain__);
                  return (
                    (n.__actions__ = ki(t.__actions__)),
                    (n.__index__ = t.__index__),
                    (n.__values__ = t.__values__),
                    n
                  );
                }
                var zo = Fr(function (t, n) {
                    return $u(t) ? fr(t, vr(n, 1, $u, !0)) : [];
                  }),
                  Zo = Fr(function (t, n) {
                    var e = Ko(n);
                    return (
                      $u(e) && (e = i),
                      $u(t) ? fr(t, vr(n, 1, $u, !0), oo(e, 2)) : []
                    );
                  }),
                  Jo = Fr(function (t, n) {
                    var e = Ko(n);
                    return (
                      $u(e) && (e = i),
                      $u(t) ? fr(t, vr(n, 1, $u, !0), i, e) : []
                    );
                  });
                function Bo(t, n, e) {
                  var r = null == t ? 0 : t.length;
                  if (!r) return -1;
                  var i = null == e ? 0 : pa(e);
                  return i < 0 && (i = ge(r + i, 0)), zn(t, oo(n, 3), i);
                }
                function Uo(t, n, e) {
                  var r = null == t ? 0 : t.length;
                  if (!r) return -1;
                  var o = r - 1;
                  return (
                    e !== i &&
                      ((o = pa(e)), (o = e < 0 ? ge(r + o, 0) : _e(o, r - 1))),
                    zn(t, oo(n, 3), o, !0)
                  );
                }
                function qo(t) {
                  return null != t && t.length ? vr(t, 1) : [];
                }
                function Vo(t) {
                  return t && t.length ? t[0] : i;
                }
                var $o = Fr(function (t) {
                    var n = Wn(t, di);
                    return n.length && n[0] === t[0] ? Er(n) : [];
                  }),
                  Fo = Fr(function (t) {
                    var n = Ko(t),
                      e = Wn(t, di);
                    return (
                      n === Ko(e) ? (n = i) : e.pop(),
                      e.length && e[0] === t[0] ? Er(e, oo(n, 2)) : []
                    );
                  }),
                  Ho = Fr(function (t) {
                    var n = Ko(t),
                      e = Wn(t, di);
                    return (
                      (n = "function" == typeof n ? n : i) && e.pop(),
                      e.length && e[0] === t[0] ? Er(e, i, n) : []
                    );
                  });
                function Ko(t) {
                  var n = null == t ? 0 : t.length;
                  return n ? t[n - 1] : i;
                }
                var Yo = Fr(Go);
                function Go(t, n) {
                  return t && t.length && n && n.length ? Ur(t, n) : t;
                }
                var Xo = Qi(function (t, n) {
                  var e = null == t ? 0 : t.length,
                    r = ir(t, n);
                  return (
                    qr(
                      t,
                      Wn(n, function (t) {
                        return go(t, e) ? +t : t;
                      }).sort(Ai)
                    ),
                    r
                  );
                });
                function Qo(t) {
                  return null == t ? t : we.call(t);
                }
                var tu = Fr(function (t) {
                    return ai(vr(t, 1, $u, !0));
                  }),
                  nu = Fr(function (t) {
                    var n = Ko(t);
                    return $u(n) && (n = i), ai(vr(t, 1, $u, !0), oo(n, 2));
                  }),
                  eu = Fr(function (t) {
                    var n = Ko(t);
                    return (
                      (n = "function" == typeof n ? n : i),
                      ai(vr(t, 1, $u, !0), i, n)
                    );
                  });
                function ru(t) {
                  if (!t || !t.length) return [];
                  var n = 0;
                  return (
                    (t = Ln(t, function (t) {
                      if ($u(t)) return (n = ge(t.length, n)), !0;
                    })),
                    Hn(n, function (n) {
                      return Wn(t, qn(n));
                    })
                  );
                }
                function iu(t, n) {
                  if (!t || !t.length) return [];
                  var e = ru(t);
                  return null == n
                    ? e
                    : Wn(e, function (t) {
                        return xn(n, i, t);
                      });
                }
                var ou = Fr(function (t, n) {
                    return $u(t) ? fr(t, n) : [];
                  }),
                  uu = Fr(function (t) {
                    return hi(Ln(t, $u));
                  }),
                  au = Fr(function (t) {
                    var n = Ko(t);
                    return $u(n) && (n = i), hi(Ln(t, $u), oo(n, 2));
                  }),
                  lu = Fr(function (t) {
                    var n = Ko(t);
                    return (
                      (n = "function" == typeof n ? n : i), hi(Ln(t, $u), i, n)
                    );
                  }),
                  fu = Fr(ru),
                  cu = Fr(function (t) {
                    var n = t.length,
                      e = n > 1 ? t[n - 1] : i;
                    return (
                      (e = "function" == typeof e ? (t.pop(), e) : i), iu(t, e)
                    );
                  });
                function su(t) {
                  var n = Pe(t);
                  return (n.__chain__ = !0), n;
                }
                function hu(t, n) {
                  return n(t);
                }
                var pu = Qi(function (t) {
                    var n = t.length,
                      e = n ? t[0] : 0,
                      r = this.__wrapped__,
                      o = function (n) {
                        return ir(n, t);
                      };
                    return !(n > 1 || this.__actions__.length) &&
                      r instanceof Be &&
                      go(e)
                      ? ((r = r.slice(e, +e + (n ? 1 : 0))).__actions__.push({
                          func: hu,
                          args: [o],
                          thisArg: i,
                        }),
                        new Je(r, this.__chain__).thru(function (t) {
                          return n && !t.length && t.push(i), t;
                        }))
                      : this.thru(o);
                  }),
                  du = Ti(function (t, n, e) {
                    Dt.call(t, e) ? ++t[e] : rr(t, e, 1);
                  }),
                  vu = Oi(Bo),
                  gu = Oi(Uo);
                function _u(t, n) {
                  return (Uu(t) ? kn : cr)(t, oo(n, 3));
                }
                function yu(t, n) {
                  return (Uu(t) ? En : sr)(t, oo(n, 3));
                }
                var bu = Ti(function (t, n, e) {
                    Dt.call(t, e) ? t[e].push(n) : rr(t, e, [n]);
                  }),
                  mu = Fr(function (t, n, e) {
                    var i = -1,
                      o = "function" == typeof n,
                      u = Vu(t) ? r(t.length) : [];
                    return (
                      cr(t, function (t) {
                        u[++i] = o ? xn(n, t, e) : Tr(t, n, e);
                      }),
                      u
                    );
                  }),
                  wu = Ti(function (t, n, e) {
                    rr(t, e, n);
                  });
                function Su(t, n) {
                  return (Uu(t) ? Wn : Mr)(t, oo(n, 3));
                }
                var Au = Ti(
                    function (t, n, e) {
                      t[e ? 0 : 1].push(n);
                    },
                    function () {
                      return [[], []];
                    }
                  ),
                  xu = Fr(function (t, n) {
                    if (null == t) return [];
                    var e = n.length;
                    return (
                      e > 1 && _o(t, n[0], n[1])
                        ? (n = [])
                        : e > 2 && _o(n[0], n[1], n[2]) && (n = [n[0]]),
                      Jr(t, vr(n, 1), [])
                    );
                  }),
                  Cu =
                    cn ||
                    function () {
                      return hn.Date.now();
                    };
                function ku(t, n, e) {
                  return (
                    (n = e ? i : n),
                    (n = t && null == n ? t.length : n),
                    Hi(t, f, i, i, i, i, n)
                  );
                }
                function Eu(t, n) {
                  var e;
                  if ("function" != typeof n) throw new Et(o);
                  return (
                    (t = pa(t)),
                    function () {
                      return (
                        --t > 0 && (e = n.apply(this, arguments)),
                        t <= 1 && (n = i),
                        e
                      );
                    }
                  );
                }
                var Tu = Fr(function (t, n, e) {
                    var r = 1;
                    if (e.length) {
                      var i = ae(e, io(Tu));
                      r |= l;
                    }
                    return Hi(t, r, n, e, i);
                  }),
                  Lu = Fr(function (t, n, e) {
                    var r = 3;
                    if (e.length) {
                      var i = ae(e, io(Lu));
                      r |= l;
                    }
                    return Hi(n, r, t, e, i);
                  });
                function Iu(t, n, e) {
                  var r,
                    u,
                    a,
                    l,
                    f,
                    c,
                    s = 0,
                    h = !1,
                    p = !1,
                    d = !0;
                  if ("function" != typeof t) throw new Et(o);
                  function v(n) {
                    var e = r,
                      o = u;
                    return (r = u = i), (s = n), (l = t.apply(o, e));
                  }
                  function g(t) {
                    var e = t - c;
                    return c === i || e >= n || e < 0 || (p && t - s >= a);
                  }
                  function _() {
                    var t = Cu();
                    if (g(t)) return y(t);
                    f = To(
                      _,
                      (function (t) {
                        var e = n - (t - c);
                        return p ? _e(e, a - (t - s)) : e;
                      })(t)
                    );
                  }
                  function y(t) {
                    return (f = i), d && r ? v(t) : ((r = u = i), l);
                  }
                  function b() {
                    var t = Cu(),
                      e = g(t);
                    if (((r = arguments), (u = this), (c = t), e)) {
                      if (f === i)
                        return (function (t) {
                          return (s = t), (f = To(_, n)), h ? v(t) : l;
                        })(c);
                      if (p) return bi(f), (f = To(_, n)), v(c);
                    }
                    return f === i && (f = To(_, n)), l;
                  }
                  return (
                    (n = va(n) || 0),
                    Qu(e) &&
                      ((h = !!e.leading),
                      (a = (p = "maxWait" in e)
                        ? ge(va(e.maxWait) || 0, n)
                        : a),
                      (d = "trailing" in e ? !!e.trailing : d)),
                    (b.cancel = function () {
                      f !== i && bi(f), (s = 0), (r = c = u = f = i);
                    }),
                    (b.flush = function () {
                      return f === i ? l : y(Cu());
                    }),
                    b
                  );
                }
                var ju = Fr(function (t, n) {
                    return lr(t, 1, n);
                  }),
                  Wu = Fr(function (t, n, e) {
                    return lr(t, va(n) || 0, e);
                  });
                function Du(t, n) {
                  if (
                    "function" != typeof t ||
                    (null != n && "function" != typeof n)
                  )
                    throw new Et(o);
                  var e = function () {
                    var r = arguments,
                      i = n ? n.apply(this, r) : r[0],
                      o = e.cache;
                    if (o.has(i)) return o.get(i);
                    var u = t.apply(this, r);
                    return (e.cache = o.set(i, u) || o), u;
                  };
                  return (e.cache = new (Du.Cache || Ve)()), e;
                }
                function Ru(t) {
                  if ("function" != typeof t) throw new Et(o);
                  return function () {
                    var n = arguments;
                    switch (n.length) {
                      case 0:
                        return !t.call(this);
                      case 1:
                        return !t.call(this, n[0]);
                      case 2:
                        return !t.call(this, n[0], n[1]);
                      case 3:
                        return !t.call(this, n[0], n[1], n[2]);
                    }
                    return !t.apply(this, n);
                  };
                }
                Du.Cache = Ve;
                var Ou = _i(function (t, n) {
                    var e = (n =
                      1 == n.length && Uu(n[0])
                        ? Wn(n[0], Yn(oo()))
                        : Wn(vr(n, 1), Yn(oo()))).length;
                    return Fr(function (r) {
                      for (var i = -1, o = _e(r.length, e); ++i < o; )
                        r[i] = n[i].call(this, r[i]);
                      return xn(t, this, r);
                    });
                  }),
                  Mu = Fr(function (t, n) {
                    var e = ae(n, io(Mu));
                    return Hi(t, l, i, n, e);
                  }),
                  Nu = Fr(function (t, n) {
                    var e = ae(n, io(Nu));
                    return Hi(t, 64, i, n, e);
                  }),
                  Pu = Qi(function (t, n) {
                    return Hi(t, 256, i, i, i, n);
                  });
                function zu(t, n) {
                  return t === n || (t != t && n != n);
                }
                var Zu = Ui(xr),
                  Ju = Ui(function (t, n) {
                    return t >= n;
                  }),
                  Bu = Lr(
                    (function () {
                      return arguments;
                    })()
                  )
                    ? Lr
                    : function (t) {
                        return (
                          ta(t) && Dt.call(t, "callee") && !$t.call(t, "callee")
                        );
                      },
                  Uu = r.isArray,
                  qu = yn
                    ? Yn(yn)
                    : function (t) {
                        return ta(t) && Ar(t) == j;
                      };
                function Vu(t) {
                  return null != t && Xu(t.length) && !Yu(t);
                }
                function $u(t) {
                  return ta(t) && Vu(t);
                }
                var Fu = _n || vl,
                  Hu = bn
                    ? Yn(bn)
                    : function (t) {
                        return ta(t) && Ar(t) == y;
                      };
                function Ku(t) {
                  if (!ta(t)) return !1;
                  var n = Ar(t);
                  return (
                    n == b ||
                    "[object DOMException]" == n ||
                    ("string" == typeof t.message &&
                      "string" == typeof t.name &&
                      !ra(t))
                  );
                }
                function Yu(t) {
                  if (!Qu(t)) return !1;
                  var n = Ar(t);
                  return (
                    n == m ||
                    n == w ||
                    "[object AsyncFunction]" == n ||
                    "[object Proxy]" == n
                  );
                }
                function Gu(t) {
                  return "number" == typeof t && t == pa(t);
                }
                function Xu(t) {
                  return "number" == typeof t && t > -1 && t % 1 == 0 && t <= s;
                }
                function Qu(t) {
                  var n = typeof t;
                  return null != t && ("object" == n || "function" == n);
                }
                function ta(t) {
                  return null != t && "object" == typeof t;
                }
                var na = mn
                  ? Yn(mn)
                  : function (t) {
                      return ta(t) && so(t) == S;
                    };
                function ea(t) {
                  return "number" == typeof t || (ta(t) && Ar(t) == A);
                }
                function ra(t) {
                  if (!ta(t) || Ar(t) != x) return !1;
                  var n = qt(t);
                  if (null === n) return !0;
                  var e = Dt.call(n, "constructor") && n.constructor;
                  return (
                    "function" == typeof e && e instanceof e && Wt.call(e) == Nt
                  );
                }
                var ia = wn
                    ? Yn(wn)
                    : function (t) {
                        return ta(t) && Ar(t) == k;
                      },
                  oa = Sn
                    ? Yn(Sn)
                    : function (t) {
                        return ta(t) && so(t) == E;
                      };
                function ua(t) {
                  return (
                    "string" == typeof t || (!Uu(t) && ta(t) && Ar(t) == T)
                  );
                }
                function aa(t) {
                  return "symbol" == typeof t || (ta(t) && Ar(t) == L);
                }
                var la = An
                    ? Yn(An)
                    : function (t) {
                        return ta(t) && Xu(t.length) && !!on[Ar(t)];
                      },
                  fa = Ui(Or),
                  ca = Ui(function (t, n) {
                    return t <= n;
                  });
                function sa(t) {
                  if (!t) return [];
                  if (Vu(t)) return ua(t) ? se(t) : ki(t);
                  if (Kt && t[Kt])
                    return (function (t) {
                      for (var n, e = []; !(n = t.next()).done; )
                        e.push(n.value);
                      return e;
                    })(t[Kt]());
                  var n = so(t);
                  return (n == S ? oe : n == E ? le : za)(t);
                }
                function ha(t) {
                  return t
                    ? (t = va(t)) === c || t === -1 / 0
                      ? 17976931348623157e292 * (t < 0 ? -1 : 1)
                      : t == t
                      ? t
                      : 0
                    : 0 === t
                    ? t
                    : 0;
                }
                function pa(t) {
                  var n = ha(t),
                    e = n % 1;
                  return n == n ? (e ? n - e : n) : 0;
                }
                function da(t) {
                  return t ? or(pa(t), 0, p) : 0;
                }
                function va(t) {
                  if ("number" == typeof t) return t;
                  if (aa(t)) return h;
                  if (Qu(t)) {
                    var n = "function" == typeof t.valueOf ? t.valueOf() : t;
                    t = Qu(n) ? n + "" : n;
                  }
                  if ("string" != typeof t) return 0 === t ? t : +t;
                  t = Kn(t);
                  var e = dt.test(t);
                  return e || gt.test(t)
                    ? fn(t.slice(2), e ? 2 : 8)
                    : pt.test(t)
                    ? h
                    : +t;
                }
                function ga(t) {
                  return Ei(t, ja(t));
                }
                function _a(t) {
                  return null == t ? "" : ui(t);
                }
                var ya = Li(function (t, n) {
                    if (wo(n) || Vu(n)) Ei(n, Ia(n), t);
                    else for (var e in n) Dt.call(n, e) && Qe(t, e, n[e]);
                  }),
                  ba = Li(function (t, n) {
                    Ei(n, ja(n), t);
                  }),
                  ma = Li(function (t, n, e, r) {
                    Ei(n, ja(n), t, r);
                  }),
                  wa = Li(function (t, n, e, r) {
                    Ei(n, Ia(n), t, r);
                  }),
                  Sa = Qi(ir),
                  Aa = Fr(function (t, n) {
                    t = xt(t);
                    var e = -1,
                      r = n.length,
                      o = r > 2 ? n[2] : i;
                    for (o && _o(n[0], n[1], o) && (r = 1); ++e < r; )
                      for (
                        var u = n[e], a = ja(u), l = -1, f = a.length;
                        ++l < f;

                      ) {
                        var c = a[l],
                          s = t[c];
                        (s === i || (zu(s, It[c]) && !Dt.call(t, c))) &&
                          (t[c] = u[c]);
                      }
                    return t;
                  }),
                  xa = Fr(function (t) {
                    return t.push(i, Yi), xn(Da, i, t);
                  });
                function Ca(t, n, e) {
                  var r = null == t ? i : wr(t, n);
                  return r === i ? e : r;
                }
                function ka(t, n) {
                  return null != t && ho(t, n, kr);
                }
                var Ea = Pi(function (t, n, e) {
                    null != n &&
                      "function" != typeof n.toString &&
                      (n = Mt.call(n)),
                      (t[n] = e);
                  }, Qa(el)),
                  Ta = Pi(function (t, n, e) {
                    null != n &&
                      "function" != typeof n.toString &&
                      (n = Mt.call(n)),
                      Dt.call(t, n) ? t[n].push(e) : (t[n] = [e]);
                  }, oo),
                  La = Fr(Tr);
                function Ia(t) {
                  return Vu(t) ? He(t) : Rr(t);
                }
                function ja(t) {
                  return Vu(t)
                    ? He(t, !0)
                    : (function (t) {
                        if (!Qu(t))
                          return (function (t) {
                            var n = [];
                            if (null != t) for (var e in xt(t)) n.push(e);
                            return n;
                          })(t);
                        var n = wo(t),
                          e = [];
                        for (var r in t)
                          ("constructor" != r || (!n && Dt.call(t, r))) &&
                            e.push(r);
                        return e;
                      })(t);
                }
                var Wa = Li(function (t, n, e) {
                    zr(t, n, e);
                  }),
                  Da = Li(function (t, n, e, r) {
                    zr(t, n, e, r);
                  }),
                  Ra = Qi(function (t, n) {
                    var e = {};
                    if (null == t) return e;
                    var r = !1;
                    (n = Wn(n, function (n) {
                      return (n = gi(n, t)), r || (r = n.length > 1), n;
                    })),
                      Ei(t, no(t), e),
                      r && (e = ur(e, 7, Gi));
                    for (var i = n.length; i--; ) li(e, n[i]);
                    return e;
                  }),
                  Oa = Qi(function (t, n) {
                    return null == t
                      ? {}
                      : (function (t, n) {
                          return Br(t, n, function (n, e) {
                            return ka(t, e);
                          });
                        })(t, n);
                  });
                function Ma(t, n) {
                  if (null == t) return {};
                  var e = Wn(no(t), function (t) {
                    return [t];
                  });
                  return (
                    (n = oo(n)),
                    Br(t, e, function (t, e) {
                      return n(t, e[0]);
                    })
                  );
                }
                var Na = Fi(Ia),
                  Pa = Fi(ja);
                function za(t) {
                  return null == t ? [] : Gn(t, Ia(t));
                }
                var Za = Di(function (t, n, e) {
                  return (n = n.toLowerCase()), t + (e ? Ja(n) : n);
                });
                function Ja(t) {
                  return Ka(_a(t).toLowerCase());
                }
                function Ba(t) {
                  return (t = _a(t)) && t.replace(yt, ne).replace(Gt, "");
                }
                var Ua = Di(function (t, n, e) {
                    return t + (e ? "-" : "") + n.toLowerCase();
                  }),
                  qa = Di(function (t, n, e) {
                    return t + (e ? " " : "") + n.toLowerCase();
                  }),
                  Va = Wi("toLowerCase"),
                  $a = Di(function (t, n, e) {
                    return t + (e ? "_" : "") + n.toLowerCase();
                  }),
                  Fa = Di(function (t, n, e) {
                    return t + (e ? " " : "") + Ka(n);
                  }),
                  Ha = Di(function (t, n, e) {
                    return t + (e ? " " : "") + n.toUpperCase();
                  }),
                  Ka = Wi("toUpperCase");
                function Ya(t, n, e) {
                  return (
                    (t = _a(t)),
                    (n = e ? i : n) === i
                      ? (function (t) {
                          return nn.test(t);
                        })(t)
                        ? (function (t) {
                            return t.match(Qt) || [];
                          })(t)
                        : (function (t) {
                            return t.match(lt) || [];
                          })(t)
                      : t.match(n) || []
                  );
                }
                var Ga = Fr(function (t, n) {
                    try {
                      return xn(t, i, n);
                    } catch (t) {
                      return Ku(t) ? t : new wt(t);
                    }
                  }),
                  Xa = Qi(function (t, n) {
                    return (
                      kn(n, function (n) {
                        (n = Mo(n)), rr(t, n, Tu(t[n], t));
                      }),
                      t
                    );
                  });
                function Qa(t) {
                  return function () {
                    return t;
                  };
                }
                var tl = Mi(),
                  nl = Mi(!0);
                function el(t) {
                  return t;
                }
                function rl(t) {
                  return Dr("function" == typeof t ? t : ur(t, 1));
                }
                var il = Fr(function (t, n) {
                    return function (e) {
                      return Tr(e, t, n);
                    };
                  }),
                  ol = Fr(function (t, n) {
                    return function (e) {
                      return Tr(t, e, n);
                    };
                  });
                function ul(t, n, e) {
                  var r = Ia(n),
                    i = mr(n, r);
                  null != e ||
                    (Qu(n) && (i.length || !r.length)) ||
                    ((e = n), (n = t), (t = this), (i = mr(n, Ia(n))));
                  var o = !(Qu(e) && "chain" in e && !e.chain),
                    u = Yu(t);
                  return (
                    kn(i, function (e) {
                      var r = n[e];
                      (t[e] = r),
                        u &&
                          (t.prototype[e] = function () {
                            var n = this.__chain__;
                            if (o || n) {
                              var e = t(this.__wrapped__);
                              return (
                                (e.__actions__ = ki(this.__actions__)).push({
                                  func: r,
                                  args: arguments,
                                  thisArg: t,
                                }),
                                (e.__chain__ = n),
                                e
                              );
                            }
                            return r.apply(t, Dn([this.value()], arguments));
                          });
                    }),
                    t
                  );
                }
                function al() {}
                var ll = Zi(Wn),
                  fl = Zi(Tn),
                  cl = Zi(Mn);
                function sl(t) {
                  return yo(t)
                    ? qn(Mo(t))
                    : (function (t) {
                        return function (n) {
                          return wr(n, t);
                        };
                      })(t);
                }
                var hl = Bi(),
                  pl = Bi(!0);
                function dl() {
                  return [];
                }
                function vl() {
                  return !1;
                }
                var gl,
                  _l = zi(function (t, n) {
                    return t + n;
                  }, 0),
                  yl = Vi("ceil"),
                  bl = zi(function (t, n) {
                    return t / n;
                  }, 1),
                  ml = Vi("floor"),
                  wl = zi(function (t, n) {
                    return t * n;
                  }, 1),
                  Sl = Vi("round"),
                  Al = zi(function (t, n) {
                    return t - n;
                  }, 0);
                return (
                  (Pe.after = function (t, n) {
                    if ("function" != typeof n) throw new Et(o);
                    return (
                      (t = pa(t)),
                      function () {
                        if (--t < 1) return n.apply(this, arguments);
                      }
                    );
                  }),
                  (Pe.ary = ku),
                  (Pe.assign = ya),
                  (Pe.assignIn = ba),
                  (Pe.assignInWith = ma),
                  (Pe.assignWith = wa),
                  (Pe.at = Sa),
                  (Pe.before = Eu),
                  (Pe.bind = Tu),
                  (Pe.bindAll = Xa),
                  (Pe.bindKey = Lu),
                  (Pe.castArray = function () {
                    if (!arguments.length) return [];
                    var t = arguments[0];
                    return Uu(t) ? t : [t];
                  }),
                  (Pe.chain = su),
                  (Pe.chunk = function (t, n, e) {
                    n = (e ? _o(t, n, e) : n === i) ? 1 : ge(pa(n), 0);
                    var o = null == t ? 0 : t.length;
                    if (!o || n < 1) return [];
                    for (var u = 0, a = 0, l = r(pn(o / n)); u < o; )
                      l[a++] = ti(t, u, (u += n));
                    return l;
                  }),
                  (Pe.compact = function (t) {
                    for (
                      var n = -1, e = null == t ? 0 : t.length, r = 0, i = [];
                      ++n < e;

                    ) {
                      var o = t[n];
                      o && (i[r++] = o);
                    }
                    return i;
                  }),
                  (Pe.concat = function () {
                    var t = arguments.length;
                    if (!t) return [];
                    for (var n = r(t - 1), e = arguments[0], i = t; i--; )
                      n[i - 1] = arguments[i];
                    return Dn(Uu(e) ? ki(e) : [e], vr(n, 1));
                  }),
                  (Pe.cond = function (t) {
                    var n = null == t ? 0 : t.length,
                      e = oo();
                    return (
                      (t = n
                        ? Wn(t, function (t) {
                            if ("function" != typeof t[1]) throw new Et(o);
                            return [e(t[0]), t[1]];
                          })
                        : []),
                      Fr(function (e) {
                        for (var r = -1; ++r < n; ) {
                          var i = t[r];
                          if (xn(i[0], this, e)) return xn(i[1], this, e);
                        }
                      })
                    );
                  }),
                  (Pe.conforms = function (t) {
                    return (function (t) {
                      var n = Ia(t);
                      return function (e) {
                        return ar(e, t, n);
                      };
                    })(ur(t, 1));
                  }),
                  (Pe.constant = Qa),
                  (Pe.countBy = du),
                  (Pe.create = function (t, n) {
                    var e = ze(t);
                    return null == n ? e : er(e, n);
                  }),
                  (Pe.curry = function t(n, e, r) {
                    var o = Hi(n, 8, i, i, i, i, i, (e = r ? i : e));
                    return (o.placeholder = t.placeholder), o;
                  }),
                  (Pe.curryRight = function t(n, e, r) {
                    var o = Hi(n, 16, i, i, i, i, i, (e = r ? i : e));
                    return (o.placeholder = t.placeholder), o;
                  }),
                  (Pe.debounce = Iu),
                  (Pe.defaults = Aa),
                  (Pe.defaultsDeep = xa),
                  (Pe.defer = ju),
                  (Pe.delay = Wu),
                  (Pe.difference = zo),
                  (Pe.differenceBy = Zo),
                  (Pe.differenceWith = Jo),
                  (Pe.drop = function (t, n, e) {
                    var r = null == t ? 0 : t.length;
                    return r
                      ? ti(t, (n = e || n === i ? 1 : pa(n)) < 0 ? 0 : n, r)
                      : [];
                  }),
                  (Pe.dropRight = function (t, n, e) {
                    var r = null == t ? 0 : t.length;
                    return r
                      ? ti(
                          t,
                          0,
                          (n = r - (n = e || n === i ? 1 : pa(n))) < 0 ? 0 : n
                        )
                      : [];
                  }),
                  (Pe.dropRightWhile = function (t, n) {
                    return t && t.length ? ci(t, oo(n, 3), !0, !0) : [];
                  }),
                  (Pe.dropWhile = function (t, n) {
                    return t && t.length ? ci(t, oo(n, 3), !0) : [];
                  }),
                  (Pe.fill = function (t, n, e, r) {
                    var o = null == t ? 0 : t.length;
                    return o
                      ? (e &&
                          "number" != typeof e &&
                          _o(t, n, e) &&
                          ((e = 0), (r = o)),
                        (function (t, n, e, r) {
                          var o = t.length;
                          for (
                            (e = pa(e)) < 0 && (e = -e > o ? 0 : o + e),
                              (r = r === i || r > o ? o : pa(r)) < 0 &&
                                (r += o),
                              r = e > r ? 0 : da(r);
                            e < r;

                          )
                            t[e++] = n;
                          return t;
                        })(t, n, e, r))
                      : [];
                  }),
                  (Pe.filter = function (t, n) {
                    return (Uu(t) ? Ln : dr)(t, oo(n, 3));
                  }),
                  (Pe.flatMap = function (t, n) {
                    return vr(Su(t, n), 1);
                  }),
                  (Pe.flatMapDeep = function (t, n) {
                    return vr(Su(t, n), c);
                  }),
                  (Pe.flatMapDepth = function (t, n, e) {
                    return (e = e === i ? 1 : pa(e)), vr(Su(t, n), e);
                  }),
                  (Pe.flatten = qo),
                  (Pe.flattenDeep = function (t) {
                    return null != t && t.length ? vr(t, c) : [];
                  }),
                  (Pe.flattenDepth = function (t, n) {
                    return null != t && t.length
                      ? vr(t, (n = n === i ? 1 : pa(n)))
                      : [];
                  }),
                  (Pe.flip = function (t) {
                    return Hi(t, 512);
                  }),
                  (Pe.flow = tl),
                  (Pe.flowRight = nl),
                  (Pe.fromPairs = function (t) {
                    for (
                      var n = -1, e = null == t ? 0 : t.length, r = {};
                      ++n < e;

                    ) {
                      var i = t[n];
                      r[i[0]] = i[1];
                    }
                    return r;
                  }),
                  (Pe.functions = function (t) {
                    return null == t ? [] : mr(t, Ia(t));
                  }),
                  (Pe.functionsIn = function (t) {
                    return null == t ? [] : mr(t, ja(t));
                  }),
                  (Pe.groupBy = bu),
                  (Pe.initial = function (t) {
                    return null != t && t.length ? ti(t, 0, -1) : [];
                  }),
                  (Pe.intersection = $o),
                  (Pe.intersectionBy = Fo),
                  (Pe.intersectionWith = Ho),
                  (Pe.invert = Ea),
                  (Pe.invertBy = Ta),
                  (Pe.invokeMap = mu),
                  (Pe.iteratee = rl),
                  (Pe.keyBy = wu),
                  (Pe.keys = Ia),
                  (Pe.keysIn = ja),
                  (Pe.map = Su),
                  (Pe.mapKeys = function (t, n) {
                    var e = {};
                    return (
                      (n = oo(n, 3)),
                      yr(t, function (t, r, i) {
                        rr(e, n(t, r, i), t);
                      }),
                      e
                    );
                  }),
                  (Pe.mapValues = function (t, n) {
                    var e = {};
                    return (
                      (n = oo(n, 3)),
                      yr(t, function (t, r, i) {
                        rr(e, r, n(t, r, i));
                      }),
                      e
                    );
                  }),
                  (Pe.matches = function (t) {
                    return Nr(ur(t, 1));
                  }),
                  (Pe.matchesProperty = function (t, n) {
                    return Pr(t, ur(n, 1));
                  }),
                  (Pe.memoize = Du),
                  (Pe.merge = Wa),
                  (Pe.mergeWith = Da),
                  (Pe.method = il),
                  (Pe.methodOf = ol),
                  (Pe.mixin = ul),
                  (Pe.negate = Ru),
                  (Pe.nthArg = function (t) {
                    return (
                      (t = pa(t)),
                      Fr(function (n) {
                        return Zr(n, t);
                      })
                    );
                  }),
                  (Pe.omit = Ra),
                  (Pe.omitBy = function (t, n) {
                    return Ma(t, Ru(oo(n)));
                  }),
                  (Pe.once = function (t) {
                    return Eu(2, t);
                  }),
                  (Pe.orderBy = function (t, n, e, r) {
                    return null == t
                      ? []
                      : (Uu(n) || (n = null == n ? [] : [n]),
                        Uu((e = r ? i : e)) || (e = null == e ? [] : [e]),
                        Jr(t, n, e));
                  }),
                  (Pe.over = ll),
                  (Pe.overArgs = Ou),
                  (Pe.overEvery = fl),
                  (Pe.overSome = cl),
                  (Pe.partial = Mu),
                  (Pe.partialRight = Nu),
                  (Pe.partition = Au),
                  (Pe.pick = Oa),
                  (Pe.pickBy = Ma),
                  (Pe.property = sl),
                  (Pe.propertyOf = function (t) {
                    return function (n) {
                      return null == t ? i : wr(t, n);
                    };
                  }),
                  (Pe.pull = Yo),
                  (Pe.pullAll = Go),
                  (Pe.pullAllBy = function (t, n, e) {
                    return t && t.length && n && n.length
                      ? Ur(t, n, oo(e, 2))
                      : t;
                  }),
                  (Pe.pullAllWith = function (t, n, e) {
                    return t && t.length && n && n.length ? Ur(t, n, i, e) : t;
                  }),
                  (Pe.pullAt = Xo),
                  (Pe.range = hl),
                  (Pe.rangeRight = pl),
                  (Pe.rearg = Pu),
                  (Pe.reject = function (t, n) {
                    return (Uu(t) ? Ln : dr)(t, Ru(oo(n, 3)));
                  }),
                  (Pe.remove = function (t, n) {
                    var e = [];
                    if (!t || !t.length) return e;
                    var r = -1,
                      i = [],
                      o = t.length;
                    for (n = oo(n, 3); ++r < o; ) {
                      var u = t[r];
                      n(u, r, t) && (e.push(u), i.push(r));
                    }
                    return qr(t, i), e;
                  }),
                  (Pe.rest = function (t, n) {
                    if ("function" != typeof t) throw new Et(o);
                    return Fr(t, (n = n === i ? n : pa(n)));
                  }),
                  (Pe.reverse = Qo),
                  (Pe.sampleSize = function (t, n, e) {
                    return (
                      (n = (e ? _o(t, n, e) : n === i) ? 1 : pa(n)),
                      (Uu(t) ? Ye : Kr)(t, n)
                    );
                  }),
                  (Pe.set = function (t, n, e) {
                    return null == t ? t : Yr(t, n, e);
                  }),
                  (Pe.setWith = function (t, n, e, r) {
                    return (
                      (r = "function" == typeof r ? r : i),
                      null == t ? t : Yr(t, n, e, r)
                    );
                  }),
                  (Pe.shuffle = function (t) {
                    return (Uu(t) ? Ge : Qr)(t);
                  }),
                  (Pe.slice = function (t, n, e) {
                    var r = null == t ? 0 : t.length;
                    return r
                      ? (e && "number" != typeof e && _o(t, n, e)
                          ? ((n = 0), (e = r))
                          : ((n = null == n ? 0 : pa(n)),
                            (e = e === i ? r : pa(e))),
                        ti(t, n, e))
                      : [];
                  }),
                  (Pe.sortBy = xu),
                  (Pe.sortedUniq = function (t) {
                    return t && t.length ? ii(t) : [];
                  }),
                  (Pe.sortedUniqBy = function (t, n) {
                    return t && t.length ? ii(t, oo(n, 2)) : [];
                  }),
                  (Pe.split = function (t, n, e) {
                    return (
                      e && "number" != typeof e && _o(t, n, e) && (n = e = i),
                      (e = e === i ? p : e >>> 0)
                        ? (t = _a(t)) &&
                          ("string" == typeof n || (null != n && !ia(n))) &&
                          !(n = ui(n)) &&
                          ie(t)
                          ? yi(se(t), 0, e)
                          : t.split(n, e)
                        : []
                    );
                  }),
                  (Pe.spread = function (t, n) {
                    if ("function" != typeof t) throw new Et(o);
                    return (
                      (n = null == n ? 0 : ge(pa(n), 0)),
                      Fr(function (e) {
                        var r = e[n],
                          i = yi(e, 0, n);
                        return r && Dn(i, r), xn(t, this, i);
                      })
                    );
                  }),
                  (Pe.tail = function (t) {
                    var n = null == t ? 0 : t.length;
                    return n ? ti(t, 1, n) : [];
                  }),
                  (Pe.take = function (t, n, e) {
                    return t && t.length
                      ? ti(t, 0, (n = e || n === i ? 1 : pa(n)) < 0 ? 0 : n)
                      : [];
                  }),
                  (Pe.takeRight = function (t, n, e) {
                    var r = null == t ? 0 : t.length;
                    return r
                      ? ti(
                          t,
                          (n = r - (n = e || n === i ? 1 : pa(n))) < 0 ? 0 : n,
                          r
                        )
                      : [];
                  }),
                  (Pe.takeRightWhile = function (t, n) {
                    return t && t.length ? ci(t, oo(n, 3), !1, !0) : [];
                  }),
                  (Pe.takeWhile = function (t, n) {
                    return t && t.length ? ci(t, oo(n, 3)) : [];
                  }),
                  (Pe.tap = function (t, n) {
                    return n(t), t;
                  }),
                  (Pe.throttle = function (t, n, e) {
                    var r = !0,
                      i = !0;
                    if ("function" != typeof t) throw new Et(o);
                    return (
                      Qu(e) &&
                        ((r = "leading" in e ? !!e.leading : r),
                        (i = "trailing" in e ? !!e.trailing : i)),
                      Iu(t, n, { leading: r, maxWait: n, trailing: i })
                    );
                  }),
                  (Pe.thru = hu),
                  (Pe.toArray = sa),
                  (Pe.toPairs = Na),
                  (Pe.toPairsIn = Pa),
                  (Pe.toPath = function (t) {
                    return Uu(t) ? Wn(t, Mo) : aa(t) ? [t] : ki(Oo(_a(t)));
                  }),
                  (Pe.toPlainObject = ga),
                  (Pe.transform = function (t, n, e) {
                    var r = Uu(t),
                      i = r || Fu(t) || la(t);
                    if (((n = oo(n, 4)), null == e)) {
                      var o = t && t.constructor;
                      e = i
                        ? r
                          ? new o()
                          : []
                        : Qu(t) && Yu(o)
                        ? ze(qt(t))
                        : {};
                    }
                    return (
                      (i ? kn : yr)(t, function (t, r, i) {
                        return n(e, t, r, i);
                      }),
                      e
                    );
                  }),
                  (Pe.unary = function (t) {
                    return ku(t, 1);
                  }),
                  (Pe.union = tu),
                  (Pe.unionBy = nu),
                  (Pe.unionWith = eu),
                  (Pe.uniq = function (t) {
                    return t && t.length ? ai(t) : [];
                  }),
                  (Pe.uniqBy = function (t, n) {
                    return t && t.length ? ai(t, oo(n, 2)) : [];
                  }),
                  (Pe.uniqWith = function (t, n) {
                    return (
                      (n = "function" == typeof n ? n : i),
                      t && t.length ? ai(t, i, n) : []
                    );
                  }),
                  (Pe.unset = function (t, n) {
                    return null == t || li(t, n);
                  }),
                  (Pe.unzip = ru),
                  (Pe.unzipWith = iu),
                  (Pe.update = function (t, n, e) {
                    return null == t ? t : fi(t, n, vi(e));
                  }),
                  (Pe.updateWith = function (t, n, e, r) {
                    return (
                      (r = "function" == typeof r ? r : i),
                      null == t ? t : fi(t, n, vi(e), r)
                    );
                  }),
                  (Pe.values = za),
                  (Pe.valuesIn = function (t) {
                    return null == t ? [] : Gn(t, ja(t));
                  }),
                  (Pe.without = ou),
                  (Pe.words = Ya),
                  (Pe.wrap = function (t, n) {
                    return Mu(vi(n), t);
                  }),
                  (Pe.xor = uu),
                  (Pe.xorBy = au),
                  (Pe.xorWith = lu),
                  (Pe.zip = fu),
                  (Pe.zipObject = function (t, n) {
                    return pi(t || [], n || [], Qe);
                  }),
                  (Pe.zipObjectDeep = function (t, n) {
                    return pi(t || [], n || [], Yr);
                  }),
                  (Pe.zipWith = cu),
                  (Pe.entries = Na),
                  (Pe.entriesIn = Pa),
                  (Pe.extend = ba),
                  (Pe.extendWith = ma),
                  ul(Pe, Pe),
                  (Pe.add = _l),
                  (Pe.attempt = Ga),
                  (Pe.camelCase = Za),
                  (Pe.capitalize = Ja),
                  (Pe.ceil = yl),
                  (Pe.clamp = function (t, n, e) {
                    return (
                      e === i && ((e = n), (n = i)),
                      e !== i && (e = (e = va(e)) == e ? e : 0),
                      n !== i && (n = (n = va(n)) == n ? n : 0),
                      or(va(t), n, e)
                    );
                  }),
                  (Pe.clone = function (t) {
                    return ur(t, 4);
                  }),
                  (Pe.cloneDeep = function (t) {
                    return ur(t, 5);
                  }),
                  (Pe.cloneDeepWith = function (t, n) {
                    return ur(t, 5, (n = "function" == typeof n ? n : i));
                  }),
                  (Pe.cloneWith = function (t, n) {
                    return ur(t, 4, (n = "function" == typeof n ? n : i));
                  }),
                  (Pe.conformsTo = function (t, n) {
                    return null == n || ar(t, n, Ia(n));
                  }),
                  (Pe.deburr = Ba),
                  (Pe.defaultTo = function (t, n) {
                    return null == t || t != t ? n : t;
                  }),
                  (Pe.divide = bl),
                  (Pe.endsWith = function (t, n, e) {
                    (t = _a(t)), (n = ui(n));
                    var r = t.length,
                      o = (e = e === i ? r : or(pa(e), 0, r));
                    return (e -= n.length) >= 0 && t.slice(e, o) == n;
                  }),
                  (Pe.eq = zu),
                  (Pe.escape = function (t) {
                    return (t = _a(t)) && H.test(t) ? t.replace($, ee) : t;
                  }),
                  (Pe.escapeRegExp = function (t) {
                    return (t = _a(t)) && et.test(t)
                      ? t.replace(nt, "\\$&")
                      : t;
                  }),
                  (Pe.every = function (t, n, e) {
                    var r = Uu(t) ? Tn : hr;
                    return e && _o(t, n, e) && (n = i), r(t, oo(n, 3));
                  }),
                  (Pe.find = vu),
                  (Pe.findIndex = Bo),
                  (Pe.findKey = function (t, n) {
                    return Pn(t, oo(n, 3), yr);
                  }),
                  (Pe.findLast = gu),
                  (Pe.findLastIndex = Uo),
                  (Pe.findLastKey = function (t, n) {
                    return Pn(t, oo(n, 3), br);
                  }),
                  (Pe.floor = ml),
                  (Pe.forEach = _u),
                  (Pe.forEachRight = yu),
                  (Pe.forIn = function (t, n) {
                    return null == t ? t : gr(t, oo(n, 3), ja);
                  }),
                  (Pe.forInRight = function (t, n) {
                    return null == t ? t : _r(t, oo(n, 3), ja);
                  }),
                  (Pe.forOwn = function (t, n) {
                    return t && yr(t, oo(n, 3));
                  }),
                  (Pe.forOwnRight = function (t, n) {
                    return t && br(t, oo(n, 3));
                  }),
                  (Pe.get = Ca),
                  (Pe.gt = Zu),
                  (Pe.gte = Ju),
                  (Pe.has = function (t, n) {
                    return null != t && ho(t, n, Cr);
                  }),
                  (Pe.hasIn = ka),
                  (Pe.head = Vo),
                  (Pe.identity = el),
                  (Pe.includes = function (t, n, e, r) {
                    (t = Vu(t) ? t : za(t)), (e = e && !r ? pa(e) : 0);
                    var i = t.length;
                    return (
                      e < 0 && (e = ge(i + e, 0)),
                      ua(t)
                        ? e <= i && t.indexOf(n, e) > -1
                        : !!i && Zn(t, n, e) > -1
                    );
                  }),
                  (Pe.indexOf = function (t, n, e) {
                    var r = null == t ? 0 : t.length;
                    if (!r) return -1;
                    var i = null == e ? 0 : pa(e);
                    return i < 0 && (i = ge(r + i, 0)), Zn(t, n, i);
                  }),
                  (Pe.inRange = function (t, n, e) {
                    return (
                      (n = ha(n)),
                      e === i ? ((e = n), (n = 0)) : (e = ha(e)),
                      (function (t, n, e) {
                        return t >= _e(n, e) && t < ge(n, e);
                      })((t = va(t)), n, e)
                    );
                  }),
                  (Pe.invoke = La),
                  (Pe.isArguments = Bu),
                  (Pe.isArray = Uu),
                  (Pe.isArrayBuffer = qu),
                  (Pe.isArrayLike = Vu),
                  (Pe.isArrayLikeObject = $u),
                  (Pe.isBoolean = function (t) {
                    return !0 === t || !1 === t || (ta(t) && Ar(t) == _);
                  }),
                  (Pe.isBuffer = Fu),
                  (Pe.isDate = Hu),
                  (Pe.isElement = function (t) {
                    return ta(t) && 1 === t.nodeType && !ra(t);
                  }),
                  (Pe.isEmpty = function (t) {
                    if (null == t) return !0;
                    if (
                      Vu(t) &&
                      (Uu(t) ||
                        "string" == typeof t ||
                        "function" == typeof t.splice ||
                        Fu(t) ||
                        la(t) ||
                        Bu(t))
                    )
                      return !t.length;
                    var n = so(t);
                    if (n == S || n == E) return !t.size;
                    if (wo(t)) return !Rr(t).length;
                    for (var e in t) if (Dt.call(t, e)) return !1;
                    return !0;
                  }),
                  (Pe.isEqual = function (t, n) {
                    return Ir(t, n);
                  }),
                  (Pe.isEqualWith = function (t, n, e) {
                    var r = (e = "function" == typeof e ? e : i) ? e(t, n) : i;
                    return r === i ? Ir(t, n, i, e) : !!r;
                  }),
                  (Pe.isError = Ku),
                  (Pe.isFinite = function (t) {
                    return "number" == typeof t && Nn(t);
                  }),
                  (Pe.isFunction = Yu),
                  (Pe.isInteger = Gu),
                  (Pe.isLength = Xu),
                  (Pe.isMap = na),
                  (Pe.isMatch = function (t, n) {
                    return t === n || jr(t, n, ao(n));
                  }),
                  (Pe.isMatchWith = function (t, n, e) {
                    return (
                      (e = "function" == typeof e ? e : i), jr(t, n, ao(n), e)
                    );
                  }),
                  (Pe.isNaN = function (t) {
                    return ea(t) && t != +t;
                  }),
                  (Pe.isNative = function (t) {
                    if (mo(t))
                      throw new wt(
                        "Unsupported core-js use. Try https://npms.io/search?q=ponyfill."
                      );
                    return Wr(t);
                  }),
                  (Pe.isNil = function (t) {
                    return null == t;
                  }),
                  (Pe.isNull = function (t) {
                    return null === t;
                  }),
                  (Pe.isNumber = ea),
                  (Pe.isObject = Qu),
                  (Pe.isObjectLike = ta),
                  (Pe.isPlainObject = ra),
                  (Pe.isRegExp = ia),
                  (Pe.isSafeInteger = function (t) {
                    return Gu(t) && t >= -9007199254740991 && t <= s;
                  }),
                  (Pe.isSet = oa),
                  (Pe.isString = ua),
                  (Pe.isSymbol = aa),
                  (Pe.isTypedArray = la),
                  (Pe.isUndefined = function (t) {
                    return t === i;
                  }),
                  (Pe.isWeakMap = function (t) {
                    return ta(t) && so(t) == I;
                  }),
                  (Pe.isWeakSet = function (t) {
                    return ta(t) && "[object WeakSet]" == Ar(t);
                  }),
                  (Pe.join = function (t, n) {
                    return null == t ? "" : Vn.call(t, n);
                  }),
                  (Pe.kebabCase = Ua),
                  (Pe.last = Ko),
                  (Pe.lastIndexOf = function (t, n, e) {
                    var r = null == t ? 0 : t.length;
                    if (!r) return -1;
                    var o = r;
                    return (
                      e !== i &&
                        (o = (o = pa(e)) < 0 ? ge(r + o, 0) : _e(o, r - 1)),
                      n == n
                        ? (function (t, n, e) {
                            for (var r = e + 1; r--; ) if (t[r] === n) return r;
                            return r;
                          })(t, n, o)
                        : zn(t, Bn, o, !0)
                    );
                  }),
                  (Pe.lowerCase = qa),
                  (Pe.lowerFirst = Va),
                  (Pe.lt = fa),
                  (Pe.lte = ca),
                  (Pe.max = function (t) {
                    return t && t.length ? pr(t, el, xr) : i;
                  }),
                  (Pe.maxBy = function (t, n) {
                    return t && t.length ? pr(t, oo(n, 2), xr) : i;
                  }),
                  (Pe.mean = function (t) {
                    return Un(t, el);
                  }),
                  (Pe.meanBy = function (t, n) {
                    return Un(t, oo(n, 2));
                  }),
                  (Pe.min = function (t) {
                    return t && t.length ? pr(t, el, Or) : i;
                  }),
                  (Pe.minBy = function (t, n) {
                    return t && t.length ? pr(t, oo(n, 2), Or) : i;
                  }),
                  (Pe.stubArray = dl),
                  (Pe.stubFalse = vl),
                  (Pe.stubObject = function () {
                    return {};
                  }),
                  (Pe.stubString = function () {
                    return "";
                  }),
                  (Pe.stubTrue = function () {
                    return !0;
                  }),
                  (Pe.multiply = wl),
                  (Pe.nth = function (t, n) {
                    return t && t.length ? Zr(t, pa(n)) : i;
                  }),
                  (Pe.noConflict = function () {
                    return hn._ === this && (hn._ = Pt), this;
                  }),
                  (Pe.noop = al),
                  (Pe.now = Cu),
                  (Pe.pad = function (t, n, e) {
                    t = _a(t);
                    var r = (n = pa(n)) ? ce(t) : 0;
                    if (!n || r >= n) return t;
                    var i = (n - r) / 2;
                    return Ji(dn(i), e) + t + Ji(pn(i), e);
                  }),
                  (Pe.padEnd = function (t, n, e) {
                    t = _a(t);
                    var r = (n = pa(n)) ? ce(t) : 0;
                    return n && r < n ? t + Ji(n - r, e) : t;
                  }),
                  (Pe.padStart = function (t, n, e) {
                    t = _a(t);
                    var r = (n = pa(n)) ? ce(t) : 0;
                    return n && r < n ? Ji(n - r, e) + t : t;
                  }),
                  (Pe.parseInt = function (t, n, e) {
                    return (
                      e || null == n ? (n = 0) : n && (n = +n),
                      be(_a(t).replace(rt, ""), n || 0)
                    );
                  }),
                  (Pe.random = function (t, n, e) {
                    if (
                      (e && "boolean" != typeof e && _o(t, n, e) && (n = e = i),
                      e === i &&
                        ("boolean" == typeof n
                          ? ((e = n), (n = i))
                          : "boolean" == typeof t && ((e = t), (t = i))),
                      t === i && n === i
                        ? ((t = 0), (n = 1))
                        : ((t = ha(t)),
                          n === i ? ((n = t), (t = 0)) : (n = ha(n))),
                      t > n)
                    ) {
                      var r = t;
                      (t = n), (n = r);
                    }
                    if (e || t % 1 || n % 1) {
                      var o = me();
                      return _e(
                        t + o * (n - t + ln("1e-" + ((o + "").length - 1))),
                        n
                      );
                    }
                    return Vr(t, n);
                  }),
                  (Pe.reduce = function (t, n, e) {
                    var r = Uu(t) ? Rn : $n,
                      i = arguments.length < 3;
                    return r(t, oo(n, 4), e, i, cr);
                  }),
                  (Pe.reduceRight = function (t, n, e) {
                    var r = Uu(t) ? On : $n,
                      i = arguments.length < 3;
                    return r(t, oo(n, 4), e, i, sr);
                  }),
                  (Pe.repeat = function (t, n, e) {
                    return (
                      (n = (e ? _o(t, n, e) : n === i) ? 1 : pa(n)),
                      $r(_a(t), n)
                    );
                  }),
                  (Pe.replace = function () {
                    var t = arguments,
                      n = _a(t[0]);
                    return t.length < 3 ? n : n.replace(t[1], t[2]);
                  }),
                  (Pe.result = function (t, n, e) {
                    var r = -1,
                      o = (n = gi(n, t)).length;
                    for (o || ((o = 1), (t = i)); ++r < o; ) {
                      var u = null == t ? i : t[Mo(n[r])];
                      u === i && ((r = o), (u = e)),
                        (t = Yu(u) ? u.call(t) : u);
                    }
                    return t;
                  }),
                  (Pe.round = Sl),
                  (Pe.runInContext = t),
                  (Pe.sample = function (t) {
                    return (Uu(t) ? Ke : Hr)(t);
                  }),
                  (Pe.size = function (t) {
                    if (null == t) return 0;
                    if (Vu(t)) return ua(t) ? ce(t) : t.length;
                    var n = so(t);
                    return n == S || n == E ? t.size : Rr(t).length;
                  }),
                  (Pe.snakeCase = $a),
                  (Pe.some = function (t, n, e) {
                    var r = Uu(t) ? Mn : ni;
                    return e && _o(t, n, e) && (n = i), r(t, oo(n, 3));
                  }),
                  (Pe.sortedIndex = function (t, n) {
                    return ei(t, n);
                  }),
                  (Pe.sortedIndexBy = function (t, n, e) {
                    return ri(t, n, oo(e, 2));
                  }),
                  (Pe.sortedIndexOf = function (t, n) {
                    var e = null == t ? 0 : t.length;
                    if (e) {
                      var r = ei(t, n);
                      if (r < e && zu(t[r], n)) return r;
                    }
                    return -1;
                  }),
                  (Pe.sortedLastIndex = function (t, n) {
                    return ei(t, n, !0);
                  }),
                  (Pe.sortedLastIndexBy = function (t, n, e) {
                    return ri(t, n, oo(e, 2), !0);
                  }),
                  (Pe.sortedLastIndexOf = function (t, n) {
                    if (null != t && t.length) {
                      var e = ei(t, n, !0) - 1;
                      if (zu(t[e], n)) return e;
                    }
                    return -1;
                  }),
                  (Pe.startCase = Fa),
                  (Pe.startsWith = function (t, n, e) {
                    return (
                      (t = _a(t)),
                      (e = null == e ? 0 : or(pa(e), 0, t.length)),
                      (n = ui(n)),
                      t.slice(e, e + n.length) == n
                    );
                  }),
                  (Pe.subtract = Al),
                  (Pe.sum = function (t) {
                    return t && t.length ? Fn(t, el) : 0;
                  }),
                  (Pe.sumBy = function (t, n) {
                    return t && t.length ? Fn(t, oo(n, 2)) : 0;
                  }),
                  (Pe.template = function (t, n, e) {
                    var r = Pe.templateSettings;
                    e && _o(t, n, e) && (n = i),
                      (t = _a(t)),
                      (n = ma({}, n, r, Ki));
                    var o,
                      u,
                      a = ma({}, n.imports, r.imports, Ki),
                      l = Ia(a),
                      f = Gn(a, l),
                      c = 0,
                      s = n.interpolate || bt,
                      h = "__p += '",
                      p = Ct(
                        (n.escape || bt).source +
                          "|" +
                          s.source +
                          "|" +
                          (s === G ? st : bt).source +
                          "|" +
                          (n.evaluate || bt).source +
                          "|$",
                        "g"
                      ),
                      d =
                        "//# sourceURL=" +
                        (Dt.call(n, "sourceURL")
                          ? (n.sourceURL + "").replace(/\s/g, " ")
                          : "lodash.templateSources[" + ++rn + "]") +
                        "\n";
                    t.replace(p, function (n, e, r, i, a, l) {
                      return (
                        r || (r = i),
                        (h += t.slice(c, l).replace(mt, re)),
                        e && ((o = !0), (h += "' +\n__e(" + e + ") +\n'")),
                        a && ((u = !0), (h += "';\n" + a + ";\n__p += '")),
                        r &&
                          (h +=
                            "' +\n((__t = (" +
                            r +
                            ")) == null ? '' : __t) +\n'"),
                        (c = l + n.length),
                        n
                      );
                    }),
                      (h += "';\n");
                    var v = Dt.call(n, "variable") && n.variable;
                    if (v) {
                      if (ft.test(v))
                        throw new wt(
                          "Invalid `variable` option passed into `_.template`"
                        );
                    } else h = "with (obj) {\n" + h + "\n}\n";
                    (h = (u ? h.replace(B, "") : h)
                      .replace(U, "$1")
                      .replace(q, "$1;")),
                      (h =
                        "function(" +
                        (v || "obj") +
                        ") {\n" +
                        (v ? "" : "obj || (obj = {});\n") +
                        "var __t, __p = ''" +
                        (o ? ", __e = _.escape" : "") +
                        (u
                          ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
                          : ";\n") +
                        h +
                        "return __p\n}");
                    var g = Ga(function () {
                      return St(l, d + "return " + h).apply(i, f);
                    });
                    if (((g.source = h), Ku(g))) throw g;
                    return g;
                  }),
                  (Pe.times = function (t, n) {
                    if ((t = pa(t)) < 1 || t > s) return [];
                    var e = p,
                      r = _e(t, p);
                    (n = oo(n)), (t -= p);
                    for (var i = Hn(r, n); ++e < t; ) n(e);
                    return i;
                  }),
                  (Pe.toFinite = ha),
                  (Pe.toInteger = pa),
                  (Pe.toLength = da),
                  (Pe.toLower = function (t) {
                    return _a(t).toLowerCase();
                  }),
                  (Pe.toNumber = va),
                  (Pe.toSafeInteger = function (t) {
                    return t
                      ? or(pa(t), -9007199254740991, s)
                      : 0 === t
                      ? t
                      : 0;
                  }),
                  (Pe.toString = _a),
                  (Pe.toUpper = function (t) {
                    return _a(t).toUpperCase();
                  }),
                  (Pe.trim = function (t, n, e) {
                    if ((t = _a(t)) && (e || n === i)) return Kn(t);
                    if (!t || !(n = ui(n))) return t;
                    var r = se(t),
                      o = se(n);
                    return yi(r, Qn(r, o), te(r, o) + 1).join("");
                  }),
                  (Pe.trimEnd = function (t, n, e) {
                    if ((t = _a(t)) && (e || n === i))
                      return t.slice(0, he(t) + 1);
                    if (!t || !(n = ui(n))) return t;
                    var r = se(t);
                    return yi(r, 0, te(r, se(n)) + 1).join("");
                  }),
                  (Pe.trimStart = function (t, n, e) {
                    if ((t = _a(t)) && (e || n === i)) return t.replace(rt, "");
                    if (!t || !(n = ui(n))) return t;
                    var r = se(t);
                    return yi(r, Qn(r, se(n))).join("");
                  }),
                  (Pe.truncate = function (t, n) {
                    var e = 30,
                      r = "...";
                    if (Qu(n)) {
                      var o = "separator" in n ? n.separator : o;
                      (e = "length" in n ? pa(n.length) : e),
                        (r = "omission" in n ? ui(n.omission) : r);
                    }
                    var u = (t = _a(t)).length;
                    if (ie(t)) {
                      var a = se(t);
                      u = a.length;
                    }
                    if (e >= u) return t;
                    var l = e - ce(r);
                    if (l < 1) return r;
                    var f = a ? yi(a, 0, l).join("") : t.slice(0, l);
                    if (o === i) return f + r;
                    if ((a && (l += f.length - l), ia(o))) {
                      if (t.slice(l).search(o)) {
                        var c,
                          s = f;
                        for (
                          o.global || (o = Ct(o.source, _a(ht.exec(o)) + "g")),
                            o.lastIndex = 0;
                          (c = o.exec(s));

                        )
                          var h = c.index;
                        f = f.slice(0, h === i ? l : h);
                      }
                    } else if (t.indexOf(ui(o), l) != l) {
                      var p = f.lastIndexOf(o);
                      p > -1 && (f = f.slice(0, p));
                    }
                    return f + r;
                  }),
                  (Pe.unescape = function (t) {
                    return (t = _a(t)) && F.test(t) ? t.replace(V, pe) : t;
                  }),
                  (Pe.uniqueId = function (t) {
                    var n = ++Rt;
                    return _a(t) + n;
                  }),
                  (Pe.upperCase = Ha),
                  (Pe.upperFirst = Ka),
                  (Pe.each = _u),
                  (Pe.eachRight = yu),
                  (Pe.first = Vo),
                  ul(
                    Pe,
                    ((gl = {}),
                    yr(Pe, function (t, n) {
                      Dt.call(Pe.prototype, n) || (gl[n] = t);
                    }),
                    gl),
                    { chain: !1 }
                  ),
                  (Pe.VERSION = "4.17.21"),
                  kn(
                    [
                      "bind",
                      "bindKey",
                      "curry",
                      "curryRight",
                      "partial",
                      "partialRight",
                    ],
                    function (t) {
                      Pe[t].placeholder = Pe;
                    }
                  ),
                  kn(["drop", "take"], function (t, n) {
                    (Be.prototype[t] = function (e) {
                      e = e === i ? 1 : ge(pa(e), 0);
                      var r =
                        this.__filtered__ && !n ? new Be(this) : this.clone();
                      return (
                        r.__filtered__
                          ? (r.__takeCount__ = _e(e, r.__takeCount__))
                          : r.__views__.push({
                              size: _e(e, p),
                              type: t + (r.__dir__ < 0 ? "Right" : ""),
                            }),
                        r
                      );
                    }),
                      (Be.prototype[t + "Right"] = function (n) {
                        return this.reverse()[t](n).reverse();
                      });
                  }),
                  kn(["filter", "map", "takeWhile"], function (t, n) {
                    var e = n + 1,
                      r = 1 == e || 3 == e;
                    Be.prototype[t] = function (t) {
                      var n = this.clone();
                      return (
                        n.__iteratees__.push({ iteratee: oo(t, 3), type: e }),
                        (n.__filtered__ = n.__filtered__ || r),
                        n
                      );
                    };
                  }),
                  kn(["head", "last"], function (t, n) {
                    var e = "take" + (n ? "Right" : "");
                    Be.prototype[t] = function () {
                      return this[e](1).value()[0];
                    };
                  }),
                  kn(["initial", "tail"], function (t, n) {
                    var e = "drop" + (n ? "" : "Right");
                    Be.prototype[t] = function () {
                      return this.__filtered__ ? new Be(this) : this[e](1);
                    };
                  }),
                  (Be.prototype.compact = function () {
                    return this.filter(el);
                  }),
                  (Be.prototype.find = function (t) {
                    return this.filter(t).head();
                  }),
                  (Be.prototype.findLast = function (t) {
                    return this.reverse().find(t);
                  }),
                  (Be.prototype.invokeMap = Fr(function (t, n) {
                    return "function" == typeof t
                      ? new Be(this)
                      : this.map(function (e) {
                          return Tr(e, t, n);
                        });
                  })),
                  (Be.prototype.reject = function (t) {
                    return this.filter(Ru(oo(t)));
                  }),
                  (Be.prototype.slice = function (t, n) {
                    t = pa(t);
                    var e = this;
                    return e.__filtered__ && (t > 0 || n < 0)
                      ? new Be(e)
                      : (t < 0 ? (e = e.takeRight(-t)) : t && (e = e.drop(t)),
                        n !== i &&
                          (e =
                            (n = pa(n)) < 0 ? e.dropRight(-n) : e.take(n - t)),
                        e);
                  }),
                  (Be.prototype.takeRightWhile = function (t) {
                    return this.reverse().takeWhile(t).reverse();
                  }),
                  (Be.prototype.toArray = function () {
                    return this.take(p);
                  }),
                  yr(Be.prototype, function (t, n) {
                    var e = /^(?:filter|find|map|reject)|While$/.test(n),
                      r = /^(?:head|last)$/.test(n),
                      o = Pe[r ? "take" + ("last" == n ? "Right" : "") : n],
                      u = r || /^find/.test(n);
                    o &&
                      (Pe.prototype[n] = function () {
                        var n = this.__wrapped__,
                          a = r ? [1] : arguments,
                          l = n instanceof Be,
                          f = a[0],
                          c = l || Uu(n),
                          s = function (t) {
                            var n = o.apply(Pe, Dn([t], a));
                            return r && h ? n[0] : n;
                          };
                        c &&
                          e &&
                          "function" == typeof f &&
                          1 != f.length &&
                          (l = c = !1);
                        var h = this.__chain__,
                          p = !!this.__actions__.length,
                          d = u && !h,
                          v = l && !p;
                        if (!u && c) {
                          n = v ? n : new Be(this);
                          var g = t.apply(n, a);
                          return (
                            g.__actions__.push({
                              func: hu,
                              args: [s],
                              thisArg: i,
                            }),
                            new Je(g, h)
                          );
                        }
                        return d && v
                          ? t.apply(this, a)
                          : ((g = this.thru(s)),
                            d ? (r ? g.value()[0] : g.value()) : g);
                      });
                  }),
                  kn(
                    ["pop", "push", "shift", "sort", "splice", "unshift"],
                    function (t) {
                      var n = Tt[t],
                        e = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
                        r = /^(?:pop|shift)$/.test(t);
                      Pe.prototype[t] = function () {
                        var t = arguments;
                        if (r && !this.__chain__) {
                          var i = this.value();
                          return n.apply(Uu(i) ? i : [], t);
                        }
                        return this[e](function (e) {
                          return n.apply(Uu(e) ? e : [], t);
                        });
                      };
                    }
                  ),
                  yr(Be.prototype, function (t, n) {
                    var e = Pe[n];
                    if (e) {
                      var r = e.name + "";
                      Dt.call(Le, r) || (Le[r] = []),
                        Le[r].push({ name: n, func: e });
                    }
                  }),
                  (Le[Ni(i, 2).name] = [{ name: "wrapper", func: i }]),
                  (Be.prototype.clone = function () {
                    var t = new Be(this.__wrapped__);
                    return (
                      (t.__actions__ = ki(this.__actions__)),
                      (t.__dir__ = this.__dir__),
                      (t.__filtered__ = this.__filtered__),
                      (t.__iteratees__ = ki(this.__iteratees__)),
                      (t.__takeCount__ = this.__takeCount__),
                      (t.__views__ = ki(this.__views__)),
                      t
                    );
                  }),
                  (Be.prototype.reverse = function () {
                    if (this.__filtered__) {
                      var t = new Be(this);
                      (t.__dir__ = -1), (t.__filtered__ = !0);
                    } else (t = this.clone()).__dir__ *= -1;
                    return t;
                  }),
                  (Be.prototype.value = function () {
                    var t = this.__wrapped__.value(),
                      n = this.__dir__,
                      e = Uu(t),
                      r = n < 0,
                      i = e ? t.length : 0,
                      o = (function (t, n, e) {
                        for (var r = -1, i = e.length; ++r < i; ) {
                          var o = e[r],
                            u = o.size;
                          switch (o.type) {
                            case "drop":
                              t += u;
                              break;
                            case "dropRight":
                              n -= u;
                              break;
                            case "take":
                              n = _e(n, t + u);
                              break;
                            case "takeRight":
                              t = ge(t, n - u);
                          }
                        }
                        return { start: t, end: n };
                      })(0, i, this.__views__),
                      u = o.start,
                      a = o.end,
                      l = a - u,
                      f = r ? a : u - 1,
                      c = this.__iteratees__,
                      s = c.length,
                      h = 0,
                      p = _e(l, this.__takeCount__);
                    if (!e || (!r && i == l && p == l))
                      return si(t, this.__actions__);
                    var d = [];
                    t: for (; l-- && h < p; ) {
                      for (var v = -1, g = t[(f += n)]; ++v < s; ) {
                        var _ = c[v],
                          y = _.iteratee,
                          b = _.type,
                          m = y(g);
                        if (2 == b) g = m;
                        else if (!m) {
                          if (1 == b) continue t;
                          break t;
                        }
                      }
                      d[h++] = g;
                    }
                    return d;
                  }),
                  (Pe.prototype.at = pu),
                  (Pe.prototype.chain = function () {
                    return su(this);
                  }),
                  (Pe.prototype.commit = function () {
                    return new Je(this.value(), this.__chain__);
                  }),
                  (Pe.prototype.next = function () {
                    this.__values__ === i &&
                      (this.__values__ = sa(this.value()));
                    var t = this.__index__ >= this.__values__.length;
                    return {
                      done: t,
                      value: t ? i : this.__values__[this.__index__++],
                    };
                  }),
                  (Pe.prototype.plant = function (t) {
                    for (var n, e = this; e instanceof Ze; ) {
                      var r = Po(e);
                      (r.__index__ = 0),
                        (r.__values__ = i),
                        n ? (o.__wrapped__ = r) : (n = r);
                      var o = r;
                      e = e.__wrapped__;
                    }
                    return (o.__wrapped__ = t), n;
                  }),
                  (Pe.prototype.reverse = function () {
                    var t = this.__wrapped__;
                    if (t instanceof Be) {
                      var n = t;
                      return (
                        this.__actions__.length && (n = new Be(this)),
                        (n = n.reverse()).__actions__.push({
                          func: hu,
                          args: [Qo],
                          thisArg: i,
                        }),
                        new Je(n, this.__chain__)
                      );
                    }
                    return this.thru(Qo);
                  }),
                  (Pe.prototype.toJSON =
                    Pe.prototype.valueOf =
                    Pe.prototype.value =
                      function () {
                        return si(this.__wrapped__, this.__actions__);
                      }),
                  (Pe.prototype.first = Pe.prototype.head),
                  Kt &&
                    (Pe.prototype[Kt] = function () {
                      return this;
                    }),
                  Pe
                );
              })();
            (hn._ = de),
              (r = function () {
                return de;
              }.call(n, e, n, t)) === i || (t.exports = r);
          }.call(this);
      },
      72: (t) => {
        "use strict";
        var n = [];
        function e(t) {
          for (var e = -1, r = 0; r < n.length; r++)
            if (n[r].identifier === t) {
              e = r;
              break;
            }
          return e;
        }
        function r(t, r) {
          for (var o = {}, u = [], a = 0; a < t.length; a++) {
            var l = t[a],
              f = r.base ? l[0] + r.base : l[0],
              c = o[f] || 0,
              s = "".concat(f, " ").concat(c);
            o[f] = c + 1;
            var h = e(s),
              p = {
                css: l[1],
                media: l[2],
                sourceMap: l[3],
                supports: l[4],
                layer: l[5],
              };
            if (-1 !== h) n[h].references++, n[h].updater(p);
            else {
              var d = i(p, r);
              (r.byIndex = a),
                n.splice(a, 0, { identifier: s, updater: d, references: 1 });
            }
            u.push(s);
          }
          return u;
        }
        function i(t, n) {
          var e = n.domAPI(n);
          return (
            e.update(t),
            function (n) {
              if (n) {
                if (
                  n.css === t.css &&
                  n.media === t.media &&
                  n.sourceMap === t.sourceMap &&
                  n.supports === t.supports &&
                  n.layer === t.layer
                )
                  return;
                e.update((t = n));
              } else e.remove();
            }
          );
        }
        t.exports = function (t, i) {
          var o = r((t = t || []), (i = i || {}));
          return function (t) {
            t = t || [];
            for (var u = 0; u < o.length; u++) {
              var a = e(o[u]);
              n[a].references--;
            }
            for (var l = r(t, i), f = 0; f < o.length; f++) {
              var c = e(o[f]);
              0 === n[c].references && (n[c].updater(), n.splice(c, 1));
            }
            o = l;
          };
        };
      },
      659: (t) => {
        "use strict";
        var n = {};
        t.exports = function (t, e) {
          var r = (function (t) {
            if (void 0 === n[t]) {
              var e = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                e instanceof window.HTMLIFrameElement
              )
                try {
                  e = e.contentDocument.head;
                } catch (t) {
                  e = null;
                }
              n[t] = e;
            }
            return n[t];
          })(t);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(e);
        };
      },
      540: (t) => {
        "use strict";
        t.exports = function (t) {
          var n = document.createElement("style");
          return t.setAttributes(n, t.attributes), t.insert(n, t.options), n;
        };
      },
      56: (t, n, e) => {
        "use strict";
        t.exports = function (t) {
          var n = e.nc;
          n && t.setAttribute("nonce", n);
        };
      },
      825: (t) => {
        "use strict";
        t.exports = function (t) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var n = t.insertStyleElement(t);
          return {
            update: function (e) {
              !(function (t, n, e) {
                var r = "";
                e.supports && (r += "@supports (".concat(e.supports, ") {")),
                  e.media && (r += "@media ".concat(e.media, " {"));
                var i = void 0 !== e.layer;
                i &&
                  (r += "@layer".concat(
                    e.layer.length > 0 ? " ".concat(e.layer) : "",
                    " {"
                  )),
                  (r += e.css),
                  i && (r += "}"),
                  e.media && (r += "}"),
                  e.supports && (r += "}");
                var o = e.sourceMap;
                o &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                      " */"
                    )),
                  n.styleTagTransform(r, t, n.options);
              })(n, t, e);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(n);
            },
          };
        };
      },
      113: (t) => {
        "use strict";
        t.exports = function (t, n) {
          if (n.styleSheet) n.styleSheet.cssText = t;
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(t));
          }
        };
      },
    },
    n = {};
  function e(r) {
    var i = n[r];
    if (void 0 !== i) return i.exports;
    var o = (n[r] = { id: r, loaded: !1, exports: {} });
    return t[r].call(o.exports, o, o.exports, e), (o.loaded = !0), o.exports;
  }
  (e.n = (t) => {
    var n = t && t.__esModule ? () => t.default : () => t;
    return e.d(n, { a: n }), n;
  }),
    (e.d = (t, n) => {
      for (var r in n)
        e.o(n, r) &&
          !e.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: n[r] });
    }),
    (e.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (e.o = (t, n) => Object.prototype.hasOwnProperty.call(t, n)),
    (e.nmd = (t) => ((t.paths = []), t.children || (t.children = []), t)),
    (e.nc = void 0);
  var r = {};
  (() => {
    "use strict";
    e.d(r, { IM: () => ft, YE: () => it });
    var t = e(543),
      n = e(72),
      i = e.n(n),
      o = e(825),
      u = e.n(o),
      a = e(659),
      l = e.n(a),
      f = e(56),
      c = e.n(f),
      s = e(540),
      h = e.n(s),
      p = e(113),
      d = e.n(p),
      v = e(365),
      g = {};
    (g.styleTagTransform = d()),
      (g.setAttributes = c()),
      (g.insert = l().bind(null, "head")),
      (g.domAPI = u()),
      (g.insertStyleElement = h()),
      i()(v.A, g),
      v.A && v.A.locals && v.A.locals;
    const _ =
        '\n    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M7 9C7 9.55229 6.55229 10 6 10C5.44772 10 5 9.55229 5 9C5 8.44772 5.44772 8 6 8C6.55229 8 7 8.44772 7 9Z" fill="#000000"/>\n    <path d="M7 12C7 12.5523 6.55229 13 6 13C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11C6.55229 11 7 11.4477 7 12Z" fill="#000000"/>\n    <path d="M10 12C10 12.5523 9.55229 13 9 13C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11C9.55229 11 10 11.4477 10 12Z" fill="#000000"/>\n    <path d="M10 9C10 9.55229 9.55229 10 9 10C8.44772 10 8 9.55229 8 9C8 8.44772 8.44772 8 9 8C9.55229 8 10 8.44772 10 9Z" fill="#000000"/>\n    <path d="M13 9C13 9.55229 12.5523 10 12 10C11.4477 10 11 9.55229 11 9C11 8.44772 11.4477 8 12 8C12.5523 8 13 8.44772 13 9Z" fill="#000000"/>\n    <path d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z" fill="#000000"/>\n    <path d="M16 9C16 9.55229 15.5523 10 15 10C14.4477 10 14 9.55229 14 9C14 8.44772 14.4477 8 15 8C15.5523 8 16 8.44772 16 9Z" fill="#000000"/>\n    <path d="M16 12C16 12.5523 15.5523 13 15 13C14.4477 13 14 12.5523 14 12C14 11.4477 14.4477 11 15 11C15.5523 11 16 11.4477 16 12Z" fill="#000000"/>\n    <path d="M19 9C19 9.55229 18.5523 10 18 10C17.4477 10 17 9.55229 17 9C17 8.44772 17.4477 8 18 8C18.5523 8 19 8.44772 19 9Z" fill="#000000"/>\n    <path d="M19 12C19 12.5523 18.5523 13 18 13C17.4477 13 17 12.5523 17 12C17 11.4477 17.4477 11 18 11C18.5523 11 19 11.4477 19 12Z" fill="#000000"/>\n    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.94513 4.25H16.0549C17.4225 4.24998 18.5248 4.24996 19.3918 4.36652C20.2919 4.48754 21.0497 4.74643 21.6517 5.34835C22.2536 5.95027 22.5125 6.70814 22.6335 7.60825C22.75 8.47522 22.75 9.57754 22.75 10.9451V13.0549C22.75 14.4225 22.75 15.5248 22.6335 16.3918C22.5125 17.2919 22.2536 18.0497 21.6517 18.6517C21.0497 19.2536 20.2919 19.5125 19.3918 19.6335C18.5248 19.75 17.4225 19.75 16.0549 19.75H7.94513C6.57754 19.75 5.47522 19.75 4.60825 19.6335C3.70814 19.5125 2.95027 19.2536 2.34835 18.6517C1.74643 18.0497 1.48754 17.2919 1.36652 16.3918C1.24996 15.5248 1.24998 14.4225 1.25 13.0549V10.9451C1.24998 9.57754 1.24996 8.47522 1.36652 7.60825C1.48754 6.70814 1.74643 5.95027 2.34835 5.34835C2.95027 4.74643 3.70814 4.48754 4.60825 4.36652C5.47522 4.24996 6.57754 4.24998 7.94513 4.25ZM4.80812 5.85315C4.07435 5.9518 3.68577 6.13225 3.40901 6.40901C3.13225 6.68577 2.9518 7.07435 2.85315 7.80812C2.75159 8.56347 2.75 9.56458 2.75 11V13C2.75 14.4354 2.75159 15.4365 2.85315 16.1919C2.9518 16.9257 3.13225 17.3142 3.40901 17.591C3.68577 17.8678 4.07435 18.0482 4.80812 18.1469C5.56347 18.2484 6.56458 18.25 8 18.25H16C17.4354 18.25 18.4365 18.2484 19.1919 18.1469C19.9257 18.0482 20.3142 17.8678 20.591 17.591C20.8678 17.3142 21.0482 16.9257 21.1469 16.1919C21.2484 15.4365 21.25 14.4354 21.25 13V11C21.25 9.56459 21.2484 8.56347 21.1469 7.80812C21.0482 7.07435 20.8678 6.68577 20.591 6.40901C20.3142 6.13225 19.9257 5.9518 19.1919 5.85315C18.4365 5.75159 17.4354 5.75 16 5.75H8C6.56458 5.75 5.56347 5.75159 4.80812 5.85315ZM6.25 16C6.25 15.5858 6.58579 15.25 7 15.25H17C17.4142 15.25 17.75 15.5858 17.75 16C17.75 16.4142 17.4142 16.75 17 16.75H7C6.58579 16.75 6.25 16.4142 6.25 16Z" fill="#000000"/>\n    </svg> \n',
      y = {
        hi: {
          default_layout: [
            [
              "`",
              "१",
              "२",
              "३",
              "४",
              "५",
              "६",
              "७",
              "८",
              "९",
              "०",
              "-",
              "ृ",
              "⌫",
            ],
            [
              "Tab",
              "ौ",
              "ै",
              "ा",
              "ी",
              "ू",
              "ब",
              "ह",
              "ग",
              "द",
              "ज",
              "ड",
              "़",
              "\\",
            ],
            [
              "Caps",
              "ो",
              "े",
              "्",
              "ि",
              "ु",
              "प",
              "र",
              "क",
              "त",
              "च",
              "ट",
              "Enter",
            ],
            [
              "Shift",
              " ",
              "ं",
              "म",
              "न",
              "व",
              "ल",
              "स",
              ",",
              ".",
              "य",
              "Shift",
              "↑",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " ", "←", "↓", "→"],
          ],
          shift_layout: [
            [
              "~",
              "ऍ",
              "ॅ",
              "्र",
              "र्",
              "ज्ञ",
              "त्र",
              "क्ष",
              "श्र",
              "(",
              ")",
              "ः",
              "ऋ",
              "⌫",
            ],
            [
              "Tab",
              "औ",
              "ऐ",
              "आ",
              "ई",
              "ऊ",
              "भ",
              "ङ",
              "घ",
              "ध",
              "झ",
              "ढ",
              "ञ",
              "ऑ",
            ],
            [
              "Caps",
              "ओ",
              "ए",
              "अ",
              "इ",
              "उ",
              "फ",
              " ",
              "ख",
              "थ",
              "छ",
              "ठ",
              "Enter",
            ],
            [
              "Shift",
              " ",
              "ँ",
              "ण",
              " ",
              " ",
              "ळ",
              "श",
              "ष",
              "।",
              "?",
              "Shift",
              "↑",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " ", "←", "↓", "→"],
          ],
          alt_layout: [
            [
              " ",
              "ZWJ",
              "ZWNJ",
              " ",
              "₹",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ॄ",
              "⌫",
            ],
            [
              "Tab",
              " ",
              " ",
              " ",
              "ॣ",
              " ",
              " ",
              " ",
              "ग़",
              " ",
              "ज़",
              "ड़",
              " ",
              " ",
              " ",
            ],
            [
              "Caps",
              " ",
              " ",
              " ",
              "ॢ",
              " ",
              " ",
              " ",
              "क़",
              " ",
              " ",
              " ",
              "Enter",
            ],
            [
              "Shift",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "॰",
              "॥",
              " ",
              "Shift",
              "↑",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " ", "←", "↓", "→"],
          ],
          alt_shift_layout: [
            [
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "ॠ",
              "⌫",
            ],
            [
              "Tab",
              " ",
              " ",
              " ",
              "  ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "ढ़",
              " ",
              " ",
            ],
            [
              "Caps",
              " ",
              " ",
              " ",
              "ऌ",
              " ",
              " फ़",
              " ",
              "ख़",
              " ",
              " ",
              " ",
              "Enter",
            ],
            [
              "Shift",
              " ",
              "ॐ",
              " ",
              " ",
              " ",
              " ळ",
              " ",
              " ",
              "ऽ",
              " ",
              "Shift",
              "↑",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " ", "←", "↓", "→"],
          ],
        },
        en: {
          default_layout: [
            [
              "`",
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "0",
              "-",
              "=",
              "⌫",
            ],
            [
              "Tab",
              "q",
              "w",
              "e",
              "r",
              "t",
              "y",
              "u",
              "i",
              "o",
              "p",
              "[",
              "]",
              "\\",
            ],
            [
              "Caps",
              "a",
              "s",
              "d",
              "f",
              "g",
              "h",
              "j",
              "k",
              "l",
              ";",
              "'",
              "Enter",
            ],
            [
              "Shift",
              "z",
              "x",
              "c",
              "v",
              "b",
              "n",
              "m",
              ",",
              ".",
              "/",
              "Shift",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " "],
          ],
          shift_layout: [
            [
              "~",
              "!",
              "@",
              "#",
              "$",
              "%",
              "^",
              "&",
              "*",
              "(",
              ")",
              "_",
              "+",
              "⌫",
            ],
            [
              "Tab",
              "Q",
              "W",
              "E",
              "R",
              "T",
              "Y",
              "U",
              "I",
              "O",
              "P",
              "{",
              "}",
              "|",
            ],
            [
              "Caps",
              "A",
              "S",
              "D",
              "F",
              "G",
              "H",
              "J",
              "K",
              "L",
              ":",
              '"',
              "Enter",
            ],
            [
              "Shift",
              "Z",
              "X",
              "C",
              "V",
              "B",
              "N",
              "M",
              "<",
              ">",
              "?",
              "Shift",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " "],
          ],
          alt_layout: [
            [
              "~",
              "!",
              "@",
              "#",
              "$",
              "%",
              "^",
              "&",
              "*",
              "(",
              ")",
              "_",
              "+",
              "⌫",
            ],
            [
              "Tab",
              "Q",
              "W",
              "E",
              "R",
              "T",
              "Y",
              "U",
              "I",
              "O",
              "P",
              "{",
              "}",
              "|",
            ],
            [
              "Caps",
              "A",
              "S",
              "D",
              "F",
              "G",
              "H",
              "J",
              "K",
              "L",
              ":",
              '"',
              "Enter",
            ],
            [
              "Shift",
              "Z",
              "X",
              "C",
              "V",
              "B",
              "N",
              "M",
              "<",
              ">",
              "?",
              "Shift",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " "],
          ],
          alt_shift_layout: [
            [
              "~",
              "!",
              "@",
              "#",
              "$",
              "%",
              "^",
              "&",
              "*",
              "(",
              ")",
              "_",
              "+",
              "⌫",
            ],
            [
              "Tab",
              "Q",
              "W",
              "E",
              "R",
              "T",
              "Y",
              "U",
              "I",
              "O",
              "P",
              "{",
              "}",
              "|",
            ],
            [
              "Caps",
              "A",
              "S",
              "D",
              "F",
              "G",
              "H",
              "J",
              "K",
              "L",
              ":",
              '"',
              "Enter",
            ],
            [
              "Shift",
              "Z",
              "X",
              "C",
              "V",
              "B",
              "N",
              "M",
              "<",
              ">",
              "?",
              "Shift",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " "],
          ],
        },
        as: {
          default_layout: [
            [
              "`",
              "১",
              "২",
              "৩",
              "৪",
              "৫",
              "৬",
              "৭",
              "৮",
              "৯",
              "০",
              "-",
              "ৃ",
              "⌫",
            ],
            [
              "Tab",
              "ৌ",
              "ৈ",
              "া",
              "ী",
              "ূ",
              "ব",
              "হ",
              "গ",
              "দ",
              "জ",
              "ড",
              " ़",
              "\\",
            ],
            [
              "Caps",
              "ো",
              "ে",
              "্",
              "ি",
              "ু",
              "প",
              "র",
              "ক",
              "ত",
              "চ",
              "ট",
              "Enter",
            ],
            [
              "Shift",
              " ",
              "ং",
              "ম",
              "ন",
              "ৱ",
              "ল",
              "স",
              ",",
              ".",
              "য়",
              "Shift",
              "↑",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " ", "←", "↓", "→"],
          ],
          shift_layout: [
            [
              "~",
              "্য",
              " ",
              "্র",
              "র্",
              "জ্ঞ",
              "ত্র",
              "ক্ষ",
              "শ্র",
              "(",
              ")",
              "ঃ",
              "ঋ",
              "⌫",
            ],
            [
              "Tab",
              "ঔ",
              "ঐ",
              "আ",
              "ঈ",
              "ঊ",
              "ভ",
              "ঙ",
              "ঘ",
              "ধ",
              "ঝ",
              "ঢ",
              " ঞ",
              "|",
            ],
            [
              "Caps",
              "ও",
              "এ",
              "অ",
              "ই",
              "উ",
              "ফ",
              " ",
              "খ",
              "থ",
              "ছ",
              "ঠ",
              "Enter",
            ],
            [
              "Shift",
              "ৎ",
              "ঁ",
              "ণ",
              " ",
              " ",
              "ল",
              "শ",
              "ষ",
              "।",
              "য",
              "Shift",
              "↑",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " ", "←", "↓", "→"],
          ],
          alt_layout: [
            [
              " ",
              "ZWJ",
              "ZWNJ",
              " ",
              "₹",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "ৄ",
              "⌫",
            ],
            [
              "Tab",
              " ",
              " ",
              " ",
              "ৣ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "ড়",
              " ",
              " ",
            ],
            [
              "Caps",
              " ",
              " ",
              " ",
              "ৢ",
              " ",
              " ",
              " ",
              " ",
              "ৎ",
              " ",
              " ",
              "Enter",
            ],
            [
              "Shift",
              " ",
              "৺",
              " ",
              " ",
              " ",
              " ",
              " ",
              "৳",
              "॥",
              "্য",
              "Shift",
              "↑",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " ", "←", "↓", "→"],
          ],
          alt_shift_layout: [
            [
              " ",
              "৴",
              "৵",
              "৶",
              "৷",
              "৸",
              "৹",
              " ",
              " ",
              " ",
              " ",
              " ",
              "ৠ",
              "⌫",
            ],
            [
              "Tab",
              " ",
              " ",
              " ",
              "ৡ",
              "  ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "ঢ়",
              " ",
              " ",
            ],
            [
              "Caps",
              " ",
              " ",
              " ",
              "ঌ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "Enter",
            ],
            [
              "Shift",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "৲",
              "ঽ",
              " ",
              "Shift",
              "↑",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " ", "←", "↓", "→"],
          ],
        },
        bn: {
          default_layout: [
            [
              "`",
              "১",
              "২",
              "৩",
              "৪",
              "৫",
              "৬",
              "৭",
              "৮",
              "৯",
              "০",
              "-",
              "ৃ",
              "⌫",
            ],
            [
              "Tab",
              "ৌ",
              "ৈ",
              "া",
              "ী",
              "ূ",
              "ব",
              "হ",
              "গ",
              "দ",
              "জ",
              "ড",
              " ़",
              "\\",
            ],
            [
              "Caps",
              "ো",
              "ে",
              "্",
              "ি",
              "ু",
              "প",
              "র",
              "ক",
              "ত",
              "চ",
              "ট",
              "Enter",
            ],
            [
              "Shift",
              "ৎ",
              "ং",
              "ম",
              "ন",
              " ",
              "ল",
              "স",
              ",",
              ".",
              "য়",
              "Shift",
              "↑",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " ", "←", "↓", "→"],
          ],
          shift_layout: [
            [
              "~",
              "্য",
              " ",
              "্র",
              "র্",
              "জ্ঞ",
              "ত্র",
              "ক্ষ",
              "শ্র",
              "(",
              ")",
              "ঃ",
              "ঋ",
              "⌫",
            ],
            [
              "Tab",
              "ঔ",
              "ঐ",
              "আ",
              "ঈ",
              "ঊ",
              "ভ",
              "ঙ",
              "ঘ",
              "ধ",
              "ঝ",
              "ঢ",
              " ঞ",
              "|",
            ],
            [
              "Caps",
              "ও",
              "এ",
              "অ",
              "ই",
              "উ",
              "ফ",
              " ",
              "খ",
              "থ",
              "ছ",
              "ঠ",
              "Enter",
            ],
            [
              "Shift",
              " ",
              "ঁ",
              "ণ",
              " ",
              " ",
              "ল",
              "শ",
              "ষ",
              "।",
              "য",
              "Shift",
              "↑",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " ", "←", "↓", "→"],
          ],
          alt_layout: [
            [
              " ",
              "ZWJ",
              "ZWNJ",
              " ",
              "₹",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "ৄ",
              "⌫",
            ],
            [
              "Tab",
              " ",
              " ",
              " ",
              "ৣ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "ড়",
              " ",
              " ",
            ],
            [
              "Caps",
              " ",
              " ",
              " ",
              "ৢ",
              " ",
              " ",
              " ",
              " ",
              "ৎ",
              " ",
              " ",
              "Enter",
            ],
            [
              "Shift",
              " ",
              "৺",
              " ",
              " ",
              " ",
              " ",
              " ",
              "৳",
              "॥",
              "্য",
              "Shift",
              "↑",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " ", "←", "↓", "→"],
          ],
          alt_shift_layout: [
            [
              " ",
              "৴",
              "৵",
              "৶",
              "৷",
              "৸",
              "৹",
              " ",
              " ",
              " ",
              " ",
              " ",
              "ৠ",
              "⌫",
            ],
            [
              "Tab",
              " ",
              " ",
              " ",
              "ৡ",
              "  ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "ঢ়",
              " ",
              " ",
            ],
            [
              "Caps",
              " ",
              " ",
              " ",
              "ঌ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "Enter",
            ],
            [
              "Shift",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "৲",
              "ঽ",
              " ",
              "Shift",
              "↑",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " ", "←", "↓", "→"],
          ],
        },
        gu: {
          default_layout: [
            [
              "`",
              "૧",
              "૨",
              "૩",
              "૪",
              "૫",
              "૬",
              "૭",
              "૮",
              "૯",
              "૦",
              "-",
              "ૃ",
              "⌫",
            ],
            [
              "Tab",
              "ૌ",
              "ૈ",
              "ા",
              "ી",
              "ૂ",
              "બ",
              "હ",
              "ગ",
              "દ",
              "જ",
              "ડ",
              " ઼",
              "\\",
            ],
            [
              "Caps",
              "ો",
              "ે",
              "્",
              "િ",
              "ુ",
              "પ",
              "ર",
              "ક",
              "ત",
              "ચ",
              "ટ",
              "Enter",
            ],
            [
              "Shift",
              " ",
              "ં",
              "મ",
              "ન",
              "વ",
              "લ",
              "સ",
              ",",
              ".",
              "ય",
              "Shift",
              "↑",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " ", "←", "↓", "→"],
          ],
          shift_layout: [
            [
              "~",
              "ઍ",
              "ૅ",
              "્ર",
              "ર્",
              "જ્ઞ",
              "ત્ર",
              "ક્ષ",
              "શ્ર",
              "(",
              ")",
              "ઃ",
              "ઋ",
              "⌫",
            ],
            [
              "Tab",
              "ઔ",
              "ઐ",
              "આ",
              "ઈ",
              "ઊ",
              "ભ",
              "ઙ",
              "ઘ",
              "ધ",
              "ઝ",
              "ઢ",
              " ઞ",
              "|",
            ],
            [
              "Caps",
              "ઓ",
              "એ",
              "અ",
              "ઇ",
              "ઉ",
              "ફ",
              " ",
              "ખ",
              "થ",
              "છ",
              "ઠ",
              "Enter",
            ],
            [
              "Shift",
              " ",
              "ઁ",
              "ણ",
              " ",
              " ",
              "ળ",
              "શ",
              "ષ",
              " ",
              " ",
              "Shift",
              "↑",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " ", "←", "↓", "→"],
          ],
          alt_layout: [
            [
              " ",
              "ZWJ",
              "ZWNJ",
              " ",
              "₹",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "ૄ",
              "⌫",
            ],
            [
              "Tab",
              " ",
              " ",
              " ",
              "ૣ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
            ],
            [
              "Caps",
              " ",
              " ",
              " ",
              "ૢ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "Enter",
            ],
            [
              "Shift",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "૱",
              "॥",
              " ",
              "Shift",
              "↑",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " ", "←", "↓", "→"],
          ],
          alt_shift_layout: [
            [
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "ૠ",
              "⌫",
            ],
            [
              "Tab",
              " ",
              " ",
              " ",
              "ૡ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
            ],
            [
              "Caps",
              " ",
              " ",
              " ",
              "ઌ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "Enter",
            ],
            [
              "Shift",
              " ",
              "ॐ",
              " ",
              " ",
              " ",
              "  ",
              " ",
              " ",
              "ऽ",
              " ",
              "Shift",
              "↑",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " ", "←", " ↓ ", "→"],
          ],
        },
        kn: {
          default_layout: [
            [
              "ೊ",
              "೧",
              "೨",
              "೩",
              "೪",
              "೫",
              "೬",
              "೭",
              "೮",
              "೯",
              "೦",
              "-",
              "ೃ",
              "⌫",
            ],
            [
              "Tab",
              "ೌ",
              "ೈ",
              "ಾ",
              "ೀ",
              "ೂ",
              "ಬ",
              "ಹ",
              "ಗ",
              "ದ",
              "ಜ",
              "ಡ",
              " ",
              "\\",
            ],
            [
              "Caps",
              "ೋ",
              "ೇ",
              "್",
              "ಿ",
              "ು",
              "ಪ",
              "ರ",
              "ಕ",
              "ತ",
              "ಚ",
              "ಟ",
              "Enter",
            ],
            [
              "Shift",
              "ೆ",
              "ಂ",
              "ಮ",
              "ನ",
              "ವ",
              "ಲ",
              "ಸ",
              ",",
              ".",
              "ಯ",
              "Shift",
              "↑",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " ", "←", "↓", "→"],
          ],
          shift_layout: [
            [
              "ಒ",
              " ",
              " ",
              "್ರ",
              " ",
              "ಜ್ಞ",
              "ತ್ರ",
              "ಕ್ಷ",
              "ಶ್ರ",
              "(",
              ")",
              "ಃ",
              "ಋ",
              "⌫",
            ],
            ["Tab", "ಔ", "ಐ", "ಆ", "ಈ", "ಊ", "ಭ", "ಙ", "ಘ", "ಧ", "ಝ", "ಞ", " "],
            [
              "Caps",
              "ಓ",
              "ಏ",
              "ಅ",
              "ಇ",
              "ಉ",
              "ಫ",
              "ಱ",
              "ಖ",
              "ಥ",
              "ಛ",
              "ಠ",
              "Enter",
            ],
            [
              "Shift",
              "ಎ",
              " ",
              "ಣ",
              " ",
              " ",
              "ಳ",
              "ಶ",
              "ಷ",
              "।",
              " ",
              "Shift",
              "↑",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " ", "←", "↓", "→"],
          ],
          alt_layout: [
            [
              " ",
              "ZWJ",
              "ZWNJ",
              " ",
              "₹",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "ೄ",
              "⌫",
            ],
            [
              "Tab",
              " ",
              " ",
              " ",
              "ೣ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "಼",
              " ",
            ],
            [
              "Caps",
              " ",
              " ",
              " ",
              "ೢ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "Enter",
            ],
            [
              "Shift",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "॥",
              " ",
              "Shift",
              "↑",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " ", "←", "↓", "→"],
          ],
          alt_shift_layout: [
            [
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "ೠ",
              "⌫",
            ],
            [
              "Tab",
              " ",
              " ",
              " ",
              "ೡ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "ೝ",
              " ",
              " ",
            ],
            [
              "Caps",
              " ",
              " ",
              " ",
              "ಌ",
              " ",
              "ೞ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "Enter",
            ],
            [
              "Shift",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "ऽ",
              " ",
              "Shift",
              "↑",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " ", "←", "↓", "→"],
          ],
        },
        ml: {
          default_layout: [
            [
              "ൊ",
              "൧",
              "൨",
              "൩",
              "൪",
              "൫",
              "൬",
              "൭",
              "൮",
              "൯",
              "൦",
              "-",
              "ൃ",
              "⌫",
              " ",
            ],
            [
              "Tab",
              "ൗ",
              "ൈ",
              "ാ",
              "ീ",
              "ൂ",
              "ബ",
              "ഹ",
              "ഗ",
              "ദ",
              "ഇ",
              "ഡ",
              " ",
              "ർ",
              " ",
            ],
            [
              "Caps",
              "ോ",
              "േ",
              "്",
              "ി",
              "ു",
              "പ",
              "ര",
              "ക",
              "ത",
              "ച",
              "ട",
              "Enter",
              " ",
            ],
            [
              "Shift",
              "െ",
              "ം",
              "മ",
              "ന",
              "വ",
              "ല",
              "സ",
              ",",
              ".",
              "യ",
              "Shift",
              " ↑ ",
              " ",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " ", "←", " ↓ ", "→"],
          ],
          shift_layout: [
            [
              "ഒ",
              " ",
              " ",
              "്ര",
              "ര്",
              "ജ്ഞ",
              "ത്ര",
              "ക്ഷ",
              "ൾ",
              "(",
              ")",
              "ഃ",
              "ഋ",
              "⌫",
              " ",
            ],
            [
              "Tab",
              "ഔ",
              "ഐ",
              "ആ",
              "ഈ",
              "ഊ",
              "ഭ",
              "ങ",
              "ഘ",
              "ധ",
              "ഝ",
              "ഢ",
              "ഞ",
              " ",
              " ",
            ],
            [
              "Caps",
              "ഓ",
              "ഏ",
              "അ",
              "ഇ",
              "ഉ",
              "ഫ",
              "റ",
              "ഖ",
              "ഥ",
              "ഛ",
              "ഠ",
              "Enter",
              " ",
            ],
            [
              "Shift",
              "എ",
              "ൺ",
              "ണ",
              "ൻ",
              "ഴ",
              "ള",
              "ശ",
              "ഷ",
              "ൽ",
              "?",
              "Shift",
              " ↑ ",
              " ",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " ", "←", " ↓ ", "→"],
          ],
          alt_layout: [
            [
              " ",
              "ZWJ",
              "ZWNJ",
              " ",
              "₹",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "ൄ",
              "⌫",
              " ",
            ],
            [
              "Tab",
              "ൌ",
              " ",
              " ",
              "ൣ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
            ],
            [
              "Caps",
              " ",
              " ",
              " ",
              "ൢ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "Enter",
              " ",
            ],
            [
              "Shift",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "Shift",
              " ↑ ",
              " ",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " ", "←", " ↓ ", "→"],
          ],
          alt_shift_layout: [
            [
              " ",
              "൰",
              "൱",
              "൲",
              "൳",
              "൴",
              "൵",
              " ",
              " ",
              " ",
              " ",
              " ",
              "ൠ",
              "⌫",
              " ",
            ],
            [
              "Tab",
              " ",
              " ",
              " ",
              "ൡ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
            ],
            [
              "Caps",
              " ",
              " ",
              " ",
              "ഌ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "Enter",
              " ",
            ],
            [
              "Shift",
              " ",
              " ",
              " ",
              "൹",
              " ",
              " ",
              " ",
              " ",
              "ഽ",
              " ",
              "Shift",
              " ↑ ",
              " ",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " ", "←", " ↓ ", "→"],
          ],
        },
        mr: {
          default_layout: [
            [
              "`",
              "१",
              "२",
              "३",
              "४",
              "५",
              "६",
              "७",
              "८",
              "९",
              "०",
              "-",
              "ृ",
              "⌫",
              " ",
            ],
            [
              "Tab",
              "ौ",
              " ै",
              " ा",
              " ी",
              " ू",
              "ब",
              "ह",
              "ग",
              "द",
              "ज",
              "ड",
              " ़",
              "\\",
              " ",
            ],
            [
              "Caps",
              "ो",
              " े",
              " ्",
              " ि",
              " ु",
              "प",
              "र",
              "क",
              "त",
              "च",
              "ट",
              "Enter",
              " ",
            ],
            [
              "Shift",
              " ",
              "ं",
              "म",
              "न",
              "व",
              "ल",
              "स",
              ",",
              ".",
              "य",
              "Shift",
              " ↑ ",
              " ",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " ", "←", " ↓ ", "→"],
          ],
          shift_layout: [
            [
              "~",
              "ऍ",
              "ॅ",
              "्र",
              "र्",
              "ज्ञ",
              "त्र",
              "क्ष",
              "श्र",
              "(",
              ")",
              "ः",
              "ऋ",
              "⌫",
              " ",
            ],
            [
              "Tab",
              "औ",
              "ऐ",
              " आ",
              " ई",
              " ऊ",
              "भ",
              "ङ",
              "घ",
              "ध",
              "झ",
              "ढ",
              " ञ",
              "ऑ",
              " ",
            ],
            [
              "Caps",
              "ओ",
              "ए",
              "अ",
              "इ",
              "उ",
              "फ",
              "ऱ",
              "ख",
              "थ",
              "छ",
              "ठ",
              "Enter",
              " ",
            ],
            [
              "Shift",
              " ",
              "ँ",
              "ण",
              " ",
              " ",
              "ळ",
              "श",
              "ष",
              "।",
              "य़",
              "Shift",
              " ↑ ",
              " ",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " ", "←", " ↓ ", "→"],
          ],
          alt_layout: [
            [
              " ",
              "ZWJ",
              "ZWNJ",
              " ",
              "₹",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ॄ",
              "⌫",
              " ",
            ],
            [
              "Tab",
              " ",
              " ",
              " ",
              "ॣ",
              " ",
              " ",
              " ",
              "ग़",
              " ",
              "ज़",
              "ड़",
              " ",
              " ",
              " ",
            ],
            [
              "Caps",
              " ",
              " ",
              " ",
              "ॢ",
              " ",
              " ",
              " ",
              "क़",
              " ",
              " ",
              " ",
              "Enter",
              " ",
            ],
            [
              "Shift",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "॰",
              "॥",
              " ",
              "Shift",
              " ↑ ",
              " ",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " ", "←", " ↓ ", "→"],
          ],
          alt_shift_layout: [
            [
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "ॠ",
              "⌫",
              " ",
            ],
            [
              "Tab",
              " ",
              " ",
              " ",
              "  ",
              "  ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "ढ़",
              " ",
              " ",
              " ",
            ],
            [
              "Caps",
              " ",
              " ",
              " ",
              "ऌ",
              " ",
              " फ़",
              " ",
              "ख़",
              " ",
              " ",
              " ",
              "Enter",
              " ",
            ],
            [
              "Shift",
              " ",
              "ॐ",
              " ",
              " ",
              " ",
              " ळ",
              " ",
              " ",
              "ऽ",
              " ",
              "Shift",
              " ↑ ",
              " ",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " ", "←", " ↓ ", "→"],
          ],
        },
        or: {
          default_layout: [
            [
              "`",
              "୧",
              "୨",
              "୩",
              "୪",
              "୫",
              "୬",
              "୭",
              "୮",
              "୯",
              "୦",
              "-",
              "ୃ",
              "⌫",
            ],
            [
              "Tab",
              "ୌ",
              "ୈ",
              "ା",
              "ୀ",
              "ୂ",
              "ବ",
              "ହ",
              "ଗ",
              "ଦ",
              "ଜ",
              "ଡ",
              "଼",
              "\\",
            ],
            [
              "Caps",
              " ୋ",
              "େ",
              "୍",
              "ି",
              "ୁ",
              "ପ",
              "ର",
              "କ",
              "ତ",
              "ଚ",
              "ଟ",
              "Enter",
            ],
            [
              "Shift",
              " ",
              "ଂ",
              "ମ",
              " ନ",
              " ଵ ",
              "ଲ",
              "ସ",
              ",",
              ".",
              "ଯ",
              "Shift",
              "↑",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " ", "←", "↓", "→"],
          ],
          shift_layout: [
            [
              "~",
              "!",
              "@",
              "୍ର",
              "ର୍",
              "ଜ୍ଞ",
              "ତ୍ର",
              "କ୍ଷ",
              "ଶ୍ର",
              "(",
              ")",
              "ଃ",
              "ଋ",
              "⌫",
            ],
            [
              "Tab",
              "ଔ",
              "ଐ",
              "ଆ",
              "ଈ",
              "ଊ",
              "ଭ",
              "ଙ",
              "ଘ",
              "ଧ",
              "ଝ",
              "ଢ",
              "ଞ",
              " ",
            ],
            [
              "Caps",
              "ଓ ",
              "ଏ ",
              "ଅ",
              "ଇ",
              "ଉ",
              "ଫ ",
              " ",
              "ଖ",
              "ଥ ",
              "ଛ ",
              "ଠ",
              "Enter",
            ],
            [
              "Shift",
              " ",
              "ଁ",
              "ଣ",
              " ",
              " ",
              "ଳ",
              "ଶ",
              "ଷ",
              "।",
              "ୟ",
              "Shift",
              "↑",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " ", "←", "↓", "→"],
          ],
          alt_layout: [
            [
              " ",
              "ZWJ",
              "ZWNJ",
              " ",
              "ଡ଼",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ୄ",
              "⌫",
            ],
            [
              "Tab",
              " ",
              " ",
              " ",
              "ୣ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
            ],
            [
              "Caps",
              " ",
              " ",
              " ",
              "ୢ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "Enter",
            ],
            [
              "Shift",
              " ",
              "୰",
              " ",
              " ",
              "ଵ",
              " ",
              " ",
              " ",
              "॥",
              " ",
              "Shift",
              "↑",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " ", "←", "↓", "→"],
          ],
          alt_shift_layout: [
            [
              " ",
              " ",
              "ଯ଼",
              " ",
              "ଢ଼",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "ୠ",
              "⌫",
            ],
            [
              "Tab",
              " ",
              " ",
              " ",
              "ୡ",
              "  ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
            ],
            [
              "Caps",
              " ",
              " ",
              " ",
              "ଌ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "Enter",
            ],
            [
              "Shift",
              " ",
              "ॐ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "ଽ",
              " ",
              "Shift",
              "↑",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " ", "←", "↓", "→"],
          ],
        },
        pa: {
          default_layout: [
            [
              "`",
              "੧",
              "੨",
              "੩",
              "੪",
              "੫",
              "੬",
              "੭",
              "੮",
              "੯",
              "੦",
              "-",
              "=",
              "⌫",
              " ",
            ],
            [
              "Tab",
              " ੌ",
              "  ੈ",
              "  ਾ",
              "  ੀ",
              " ੂ",
              "ਬ",
              "ਹ",
              "ਗ",
              "ਦ",
              "ਜ",
              "ਡ",
              " ਼",
              "\\",
              " ",
            ],
            [
              "Caps",
              " ੋ",
              "  ੇ",
              " ੍",
              " ਿ",
              "  ੁ",
              "ਪ",
              " ਰ",
              " ਕ",
              " ਤ",
              " ਚ",
              " ਟ",
              "Enter",
              " ",
            ],
            [
              "Shift",
              " ",
              " ਂ",
              "ਮ",
              " ਨ",
              " ਵ ",
              "ਲ",
              " ਸ ",
              ",",
              ".",
              "ਯ",
              "Shift",
              " ↑ ",
              " ",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " ", "←", " ↓ ", "→"],
          ],
          shift_layout: [
            [
              "~",
              " ",
              " ",
              "੍ਰ",
              "ਰ੍",
              " ",
              "ਤ੍ਰ",
              " ",
              "ਸ਼੍ਰ",
              "(",
              ")",
              " ਃ",
              " ",
              "⌫",
              " ",
            ],
            [
              "Tab",
              "ਔ",
              " ਐ",
              "ਆ",
              "ਈ",
              "ਊ",
              "ਭ",
              "ਙ",
              "ਘ",
              "ਧ",
              "ਝ",
              "ਢ",
              " ਞ",
              "|",
              " ",
            ],
            [
              "Caps",
              "ਓ ",
              "ਏ ",
              "ਅ ",
              "ਇ ",
              "ਉ ",
              "ਫ ",
              " ",
              "ਖ",
              " ਥ ",
              "ਛ ",
              "ਠ",
              "Enter",
              " ",
            ],
            [
              "Shift",
              " ",
              " ਁ ",
              "ਣ",
              " ",
              " ",
              "ਲ਼",
              "ਸ਼",
              " ",
              " ",
              "?",
              "Shift",
              " ↑ ",
              " ",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " ", "←", " ↓ ", "→"],
          ],
          alt_layout: [
            [
              " ",
              "ZWJ",
              "ZWNJ",
              " ",
              "₹",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "⌫",
              " ",
            ],
            [
              "Tab",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "ਗ਼",
              " ",
              "ਜ਼",
              "ੜ",
              " ",
              " ",
            ],
            [
              "Caps",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "Enter",
              " ",
            ],
            [
              "Shift",
              " ",
              " ",
              " ",
              " ",
              "ੳ",
              " ",
              " ",
              " ੰ",
              "॥",
              " ",
              "Shift",
              " ↑ ",
              " ",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " ", "←", " ↓ ", "→"],
          ],
          alt_shift_layout: [
            [
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "⌫",
              " ",
            ],
            [
              "Tab",
              " ",
              " ",
              " ",
              "  ",
              "  ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
            ],
            [
              "Caps",
              " ",
              " ",
              " ",
              " ",
              "ਫ਼",
              " ",
              "ਖ਼",
              " ",
              " ",
              " ",
              " ੑ",
              "Enter",
              " ",
            ],
            [
              "Shift",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "Shift",
              " ↑ ",
              " ",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " ", "←", " ↓ ", "→"],
          ],
        },
        ta: {
          default_layout: [
            [
              "ொ",
              "௧",
              "௨",
              "௩",
              "௪",
              "௫",
              "௬",
              "௭",
              "௮",
              "௯",
              "௦",
              "-",
              "=",
              "⌫",
              " ",
            ],
            [
              "Tab",
              "ௌ",
              "ை",
              "ா",
              "ீ",
              "ூ",
              " ",
              "ஹ",
              " ",
              " ",
              "ஜ",
              " ",
              " ",
              "\\",
              " ",
            ],
            [
              "Caps",
              "ோ",
              "ே",
              "்",
              "ி",
              "ு",
              "ப",
              "ர",
              "க",
              "த",
              "ச",
              "ட",
              "Enter",
              " ",
            ],
            [
              "Shift",
              "ெ",
              " ",
              "ம",
              "ந",
              "வ",
              "ல",
              "ஸ",
              ",",
              ".",
              "ய",
              "Shift",
              " ↑ ",
              " ",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " ", "←", " ↓ ", "→"],
          ],
          shift_layout: [
            [
              "ஒ",
              " ",
              " ",
              " ",
              "ர்",
              " ",
              "த்ர",
              "க்ஷ",
              "ஶ்ர",
              "(",
              ")",
              "_",
              "ஃ",
              "⌫",
              " ",
            ],
            [
              "Tab",
              "ஔ",
              "ஐ",
              "ஆ",
              "ஈ",
              "ஊ",
              " ",
              "ங",
              " ",
              " ",
              " ",
              " ",
              "ஞ",
              " ",
              " ",
            ],
            [
              "Caps",
              "ஓ",
              "ஏ",
              "அ",
              "இ",
              "உ",
              " ",
              "ற",
              " ",
              " ",
              " ",
              " ",
              "Enter",
              " ",
            ],
            [
              "Shift",
              "எ",
              " ",
              "ண",
              "ன",
              "ழ",
              "ள",
              " ",
              "ஷ",
              " ",
              "?",
              "Shift",
              " ↑ ",
              " ",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " ", "←", " ↓ ", "→"],
          ],
          alt_layout: [
            [
              " ",
              "ZWJ",
              "ZWNJ",
              " ",
              "₹",
              " ",
              " ",
              " ",
              " ",
              " ",
              "௰",
              "௱",
              "௲",
              "⌫",
              " ",
            ],
            [
              "Tab",
              " ",
              " ",
              " ",
              " ",
              " ",
              "௷",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
            ],
            [
              "Caps",
              " ",
              " ",
              " ",
              " ",
              " ",
              "௶",
              " ",
              " ",
              " ",
              " ",
              " ",
              "Enter",
              " ",
            ],
            [
              "Shift",
              " ",
              " ",
              "௴",
              "௳",
              "௵",
              " ",
              " ",
              "௹",
              " ",
              " ",
              "Shift",
              " ↑ ",
              " ",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " ", "←", " ↓ ", "→"],
          ],
          alt_shift_layout: [
            [
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "⌫",
              " ",
            ],
            [
              "Tab",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
            ],
            [
              "Caps",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "Enter",
              " ",
            ],
            [
              "Shift",
              " ",
              "ௐ",
              "௸",
              "௺",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "Shift",
              " ↑ ",
              " ",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " ", "←", " ↓ ", "→"],
          ],
        },
        te: {
          default_layout: [
            [
              "ొ",
              "౧",
              "౨",
              "౩",
              "౪",
              "౫",
              "౬",
              "౭",
              "౮",
              "౯",
              "౦",
              "-",
              " ృ",
              "⌫",
            ],
            [
              "Tab",
              "ా",
              "ై",
              "ా",
              "ీ",
              "ూ",
              "బ",
              "హ",
              "గ",
              "ద",
              "జ",
              "డ",
              " ",
              "\\",
            ],
            [
              "Caps",
              "ో",
              "ే",
              "్",
              "ి",
              "ు",
              "ప",
              "ర",
              "క",
              "త",
              "చ",
              "ట",
              "Enter",
            ],
            [
              "Shift",
              "ె",
              "ం",
              "మ",
              "న",
              "వ",
              "ల",
              "స",
              ",",
              ".",
              "య",
              "Shift",
              "↑",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " ", "←", "↓", "→"],
          ],
          shift_layout: [
            [
              "ఒ",
              " ",
              " ",
              "్ర",
              " ",
              "జ్ఞ",
              "త్ర",
              "క్ష",
              "శ్ర",
              "(",
              ")",
              "ః",
              "ఋ",
              "⌫",
            ],
            ["Tab", "ఔ", "ఐ", "ఆ", "ఈ", "ఊ", "భ", "ఙ", "ఘ", "ధ", "ఝ", "ఞ", " "],
            [
              "Caps",
              "ఓ",
              "ఏ",
              "అ",
              "ఇ",
              "ఉ",
              "ఫ",
              "ఱ",
              "ఖ",
              "థ",
              "ఛ",
              "ఠ",
              "Enter",
            ],
            [
              "Shift",
              "ఎ",
              "ఁ",
              "ణ",
              " ",
              " ",
              "ళ",
              "శ",
              "ష",
              "।",
              "?",
              "Shift",
              "↑",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " ", "←", " ↓ ", "→"],
          ],
          alt_layout: [
            [
              " ",
              "ZWJ",
              "ZWNJ",
              " ",
              "₹",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "౿",
              "ౄ",
              "⌫",
            ],
            [
              "Tab",
              " ",
              " ",
              " ",
              "ౣ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "ౙ",
              " ",
              " ",
              " ",
            ],
            [
              "Caps",
              " ",
              " ",
              " ",
              ",ౢ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "ౘ",
              " ",
              "Enter",
            ],
            [
              "Shift",
              "ౕ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "॥",
              " ",
              "Shift",
              "↑",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " ", "←", " ↓ ", "→"],
          ],
          alt_shift_layout: [
            [
              " ",
              "౹",
              "౼",
              "౺",
              "౽",
              "౻",
              "౾",
              " ",
              " ",
              " ",
              "౸",
              " ",
              "ౠ",
              "⌫",
            ],
            [
              "Tab",
              " ",
              " ",
              " ",
              "ౡ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
            ],
            [
              "Caps",
              " ",
              " ",
              " ",
              "ౡ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "Enter",
            ],
            [
              "Shift",
              "ౖ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "ఽ",
              " ",
              "Shift",
              "↑",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " ", "←", " ↓ ", "→"],
          ],
        },
        ur: {
          default_layout: [
            [
              " ",
              "۱",
              "۲",
              "۳",
              "۴",
              "۵",
              "۶",
              "۷",
              "۸",
              "۹",
              "۰",
              " ",
              " ",
              "⌫",
            ],
            [
              "Tab",
              "ق",
              "و",
              "ع",
              "ر",
              "ت",
              "ے",
              "ء",
              "ی",
              "ہ",
              "پ",
              "[",
              "]",
              "\\",
            ],
            [
              "Caps",
              "ا",
              "س",
              "د",
              "ف",
              "گ",
              "ح",
              "ج",
              "ک",
              "ل",
              ";",
              "'",
              "Enter",
            ],
            [
              "Shift",
              "ز",
              "ش",
              "چ",
              "ظ",
              "ب",
              "ن",
              "م",
              "،",
              "۔",
              "/",
              "Shift",
              "↑",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " ", "←", "↓", "→"],
          ],
          shift_layout: [
            [
              "`",
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "0",
              "-",
              "=",
              "⌫",
            ],
            [
              "Tab",
              "ْ",
              "ّ",
              "ٰ",
              "ڑ",
              "ٹ",
              "َ",
              "ئ",
              "ِ",
              "ۃ",
              "ُ",
              "{",
              "}",
              "|",
            ],
            [
              "Caps",
              "آ",
              "ص",
              "ڈ",
              " ",
              "غ",
              "ھ",
              "ض",
              "خ",
              " ",
              ":",
              '"',
              "Enter",
            ],
            [
              "Shift",
              "ذ",
              "ژ",
              "ث",
              "ظ",
              " ",
              "ں",
              "٘",
              ",",
              ".",
              "؟",
              "Shift",
              "↑",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " ", "←", "↓", "→"],
          ],
          alt_layout: [
            [
              " ",
              "ZWJ",
              "ZWNJ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "⌫",
            ],
            [
              "Tab",
              " ",
              "؂",
              "ٖ",
              "ؓ",
              "ٓ",
              "؁",
              "ٔ",
              "ؑ",
              " ",
              "ٗ",
              " ",
              " ",
              "\\",
            ],
            [
              "Caps",
              "ﷲ",
              "ؐ",
              "ﷺ",
              " ",
              " ",
              "ؒ",
              "ﷻ",
              " ",
              " ",
              " ",
              " ",
              "Enter",
            ],
            [
              "Shift",
              "؏",
              "؎",
              "؃",
              " ",
              "﷽",
              "؀",
              " ",
              "<",
              ">",
              "?",
              "Shift",
              "↑",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " ", "←", "↓", "→"],
          ],
          alt_shift_layout: [
            [
              "~",
              " !",
              "@ ",
              "# ",
              "$ ",
              "% ",
              "^ ",
              "& ",
              "* ",
              "( ",
              ") ",
              "_ ",
              "+ ",
              "⌫",
            ],
            [
              "Tab",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
            ],
            [
              "Caps",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "Enter",
            ],
            [
              "Shift",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "Shift",
              "↑",
            ],
            [" ", " ", "Alt", "Space", "Alt", " ", " ", "←", " ↓ ", "→"],
          ],
        },
      };
    let b = null,
      m = !1,
      w = !1,
      S = !1;
    const A = [
      [
        "tilde",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
        "minus",
        "equal",
        "backspace",
      ],
      [
        "tab",
        "q",
        "w",
        "e",
        "r",
        "t",
        "y",
        "u",
        "i",
        "o",
        "p",
        "bracketleft",
        "bracketright",
        "backslash",
      ],
      [
        "caps",
        "a",
        "s",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        "semicolon",
        "quote",
        "enter",
      ],
      [
        "shift",
        "z",
        "x",
        "c",
        "v",
        "b",
        "n",
        "m",
        "comma",
        "period",
        "slash",
        "shift",
      ],
      ["control", "win", "alt", "space", "alt", "win", "control"],
    ];
    async function x(t) {
      try {
        return y[t];
      } catch (t) {
        return console.log(t), null;
      }
    }
    let C = !1,
      k = !1,
      E = !1,
      T = !1;
    async function L(t, n) {
      let e = t.code;
      if (
        !T &&
        (t.preventDefault(),
        e.includes("Digit") && (e = e.replace("Digit", "")),
        e.includes("Backquote") && (e = "tilde"),
        e.includes("Key") && (e = e.replace("Key", "")),
        e.includes("Caps") && (e = "caps"),
        e.includes("Shift") && (e = "shift"),
        e.includes("Control") && (e = "control"),
        e.includes("Alt") && (e = "alt"),
        e.includes("-") && (e = e.replace("-", "")),
        (e = e.toLowerCase()),
        !["shift", "control", "alt", "altgraph", "meta", "caps"].includes(e))
      )
        if (["backspace", "tab", "space", "enter"].includes(e))
          "backspace" === e
            ? it().execCommand("delete", !1)
            : j("tab" === e ? "\t" : "enter" === e ? "\n" : " ");
        else
          for (let r = 0; r < A.length; r++)
            for (let i = 0; i < A[r].length; i++)
              if (A[r][i] === e)
                if ((t.preventDefault(), C && (k || E)))
                  j(n.alt_shift_layout[r][i].trim());
                else if (C) j(n.shift_layout[r][i].trim());
                else if (k || E) {
                  if (
                    ("ZWJ" === n.alt_layout[r][i] && j("‍"),
                    "ZWNJ" === n.alt_layout[r][i])
                  )
                    return void j("‌");
                  j(n.alt_layout[r][i].trim());
                } else j(n.default_layout[r][i].trim());
    }
    async function I() {
      let t = document.querySelectorAll(".rev-row");
      if (!t) return;
      if (0 === t.length) return;
      let n = await x(b),
        e = null;
      if (C && (k || E)) {
        if ("en" === b) return;
        e = n.alt_shift_layout;
      } else if (C) e = n.shift_layout;
      else if (k || E) {
        if ("en" === b) return;
        e = n.alt_layout;
      } else e = n.default_layout;
      A.forEach((n, r) => {
        let i = document.createElement("div");
        i.classList.add("rev-row"),
          n.forEach((t, n) => {
            let o = document.createElement("button");
            o.classList.add("rev-btn"),
              o.classList.add(`rev-btn-${t}`),
              (o.textContent = e[r][n]),
              ["ZWJ", "ZWNJ"].includes(e[r][n]) &&
                o.classList.add("rev-btn-small-font"),
              "shift" === t && C && o.classList.add("rev-btn-active"),
              "caps" === t && C && o.classList.add("rev-btn-active"),
              "alt" === t && (k || E) && o.classList.add("rev-btn-active"),
              i.appendChild(o),
              o.addEventListener("mousedown", (i) => {
                if ((i.preventDefault(), "backspace" === t))
                  it().execCommand("delete", !1);
                else if ("enter" === t) j("\n");
                else if ("tab" === t) j("\t");
                else if ("space" === t) j(" ");
                else {
                  if ("control" === t) return;
                  if ("alt" === t) (k = !k), I();
                  else if ("shift" === t || "caps" === t) (C = !C), I();
                  else {
                    if ("ZWJ" === e[r][n]) return void j("‍");
                    if ("ZWNJ" === e[r][n]) return void j("‌");
                    j(e[r][n]);
                  }
                }
              });
          });
        try {
          t[r].replaceWith(i);
        } catch (t) {
          console.log("No keyboard", t);
        }
      });
    }
    async function j(t) {
      return new Promise((n, e) => {
        try {
          ft(t, "", null);
        } catch (t) {
          e(t);
        }
        n(!0);
      });
    }
    document.addEventListener("keydown", function (t) {
      if ("Shift" === t.key) {
        if (m) return;
        (C = !C), I(), (m = !0);
      }
      if ("Alt" === t.key || "Meta" === t.key) {
        if (w) return;
        (k = !k), I(), (w = !0);
      }
      if ("AltGraph" === t.key) {
        if (S) return;
        (E = !E), I(), (S = !0);
      }
      (t.key?.includes("Meta") || t.key?.includes("Control")) && (T = !0);
    }),
      document.addEventListener("keyup", function (t) {
        "Shift" === t.key
          ? ((C = !C), I(), (m = !1))
          : "CapsLock" === t.key
          ? ((C = !C), I())
          : "Alt" === t.key || "Meta" === t.key
          ? ((k = !k), I(), (w = !1))
          : "AltGraph" === t.key
          ? ((E = !E), I(), (S = !1))
          : (t.key?.includes("Meta") || t.key?.includes("Control")) && (T = !1);
      });
    const W = {
        en: ".",
        hi: "।",
        as: "।",
        bn: "।",
        gu: "।",
        kn: "।",
        ml: "।",
        mr: "।",
        or: "।",
        pa: "।",
        ta: "।",
        te: "।",
        ur: "।",
      },
      D = [
        "Hindi",
        "Assamese",
        "Bengali",
        "Gujarati",
        "Kannada",
        "Malayalam",
        "Marathi",
        "Oriya",
        "Punjabi",
        "Tamil",
        "Telugu",
        "Urdu",
      ],
      R = {
        Hindi: "hi",
        Assamese: "as",
        Bengali: "bn",
        Gujarati: "gu",
        Kannada: "kn",
        Malayalam: "ml",
        Marathi: "mr",
        Oriya: "or",
        Punjabi: "pa",
        Tamil: "ta",
        Telugu: "te",
        Urdu: "ur",
      };
    let O = "`~-=!@#$%^&*()_+[]\\{}|;':\",./<>?",
      M = "hi",
      N = "REV-APP-ID",
      P = "REV-API-KEY",
      z = "1",
      Z = "phonetic",
      J = !1,
      B = !1,
      U = [],
      q = null,
      V = '<span style="visibility:visible" id="rev-cursor-swalekh">│</span>',
      $ = "light",
      F = 5,
      H = {},
      K = !1,
      Y = {};
    setInterval(() => {
      let t = it().querySelector("#rev-cursor-swalekh");
      t &&
        ("hidden" === t.style.visibility
          ? (t.style.visibility = "visible")
          : (t.style.visibility = "hidden"));
    }, 500);
    let G = "",
      X = "",
      Q = !1,
      tt = [],
      nt = 0,
      et = 0;
    function rt() {
      let t = document.querySelector("#swDropdown");
      t && t.remove(), (tt = []), (nt = 0), (et = 0);
    }
    function it(t = !1) {
      return "iframe" === document.activeElement.tagName.toLowerCase()
        ? t
          ? document.activeElement.contentWindow.document.activeElement
          : document.activeElement.contentWindow.document
        : t
        ? document.activeElement
        : document;
    }
    function ot() {
      return "iframe" === document.activeElement.tagName.toLowerCase()
        ? document.activeElement.contentWindow.window
        : window;
    }
    function ut(t) {
      let n = document.querySelector(".disp-elem");
      n && (n.innerHTML = t.substring(0, et) + V + t.substring(et));
    }
    function at() {
      let n = document.querySelector("#swDropdown");
      n && n.remove(),
        (n = document.createElement("div")),
        (n.id = "swDropdown");
      let e = document.createElement("div");
      if (((e.id = "swalekh-togglers"), J)) {
        let t,
          n = document.createElement("select");
        (n.id = "dropdown-select"),
          D.forEach((t) => {
            let e = document.createElement("option");
            (e.value = R[t]), (e.textContent = t), n.appendChild(e);
          }),
          (n.value = H[it(!0)] || "hi"),
          n.addEventListener("mousedown", (n) => {
            (K = !0), (t = it(!0));
          }),
          n.addEventListener("change", (n) => {
            t && (H[t] = n.target.value), (G = ""), rt();
          }),
          e.appendChild(n),
          (n.style.width = "max-content");
      }
      if (B) {
        let t = document.createElement("div");
        (t.id = "kb-toggler"),
          (t.innerHTML = _),
          t.addEventListener("mousedown", (t) => {
            t.preventDefault(), (Z = "keyboard"), (G = ""), rt();
            let n = document.activeElement;
            n.blur(), n.focus();
          }),
          e.appendChild(t);
      }
      J && B && (e.style.justifyContent = "space-around"),
        (J || B) && (n.appendChild(e), (e.style.width = "100%"));
      let r = document.createElement("div");
      (r.className = "disp-elem"),
        (r.innerHTML = G.substring(0, et) + V + G.substring(et)),
        n.appendChild(r);
      let i = document.createElement("div");
      if (
        ((i.id = "rev-drpDown"),
        tt.forEach((t, n) => {
          let e = document.createElement("div");
          (e.className = "selection-elem"),
            nt === n && e.classList.add("rev-drp-active"),
            (e.textContent = t),
            (e.onmousedown = (n) => {
              n.preventDefault(), ft(t, "", G), rt(), (G = "");
            }),
            i.appendChild(e);
        }),
        n.appendChild(i),
        document.body.appendChild(n),
        ["div", "p", "body", "h1", "h2", "h3", "h4", "h5"].includes(
          q.tagName.toLowerCase()
        ))
      )
        lt(
          n,
          (function () {
            if (!ot() || !ot().getSelection())
              return { top: 0, left: 0, height: 0 };
            if (ot().getSelection() && 0 === ot().getSelection().anchorOffset) {
              it().execCommand("insertText", !1, "a");
              let t = ot().getSelection();
              if (!t) return { top: 0, left: 0, height: 0 };
              let n = t.getRangeAt(0).getBoundingClientRect();
              return (
                it().execCommand("delete", !1, null),
                {
                  top: n.top + window.scrollY,
                  left: n.left + window.scrollX,
                  height: n.height,
                }
              );
            }
            {
              let t = ot().getSelection();
              if (!t) return { top: 0, left: 0, height: 0 };
              let n = t.getRangeAt(0).getBoundingClientRect();
              return {
                top: n.top + window.scrollY,
                left: n.left + window.scrollX,
                height: n.height,
              };
            }
          })(),
          0
        );
      else {
        let e = window.getComputedStyle(q).height;
        e.replace("px", ""), (e = (0, t.parseInt)(e));
        let r = window.getComputedStyle(q).paddingTop;
        r.replace("px", ""), (r = (0, t.parseInt)(r));
        let i = window.getComputedStyle(q).fontSize;
        i.replace("px", ""), (i = (0, t.parseInt)(i));
        const _ =
          ((v = (function (t, n, e) {
            var r = "undefined" != typeof window,
              i = r && null != window.mozInnerScreenX;
            if (!r)
              throw new Error(
                "textarea-caret-position#getCaretCoordinates should only be called in a browser"
              );
            var o = document.createElement("div");
            (o.id = "input-textarea-caret-position-mirror-div"),
              it().body.appendChild(o);
            var u = o.style,
              a = window.getComputedStyle
                ? getComputedStyle(t)
                : t.currentStyle;
            (u.whiteSpace = "pre-wrap"),
              "INPUT" !== t.nodeName && (u.wordWrap = "break-word"),
              (u.position = "absolute"),
              (u.visibility = "hidden"),
              [
                "direction",
                "boxSizing",
                "width",
                "height",
                "overflowX",
                "overflowY",
                "borderTopWidth",
                "borderRightWidth",
                "borderBottomWidth",
                "borderLeftWidth",
                "borderStyle",
                "paddingTop",
                "paddingRight",
                "paddingBottom",
                "paddingLeft",
                "fontStyle",
                "fontVariant",
                "fontWeight",
                "fontStretch",
                "fontSize",
                "fontSizeAdjust",
                "lineHeight",
                "fontFamily",
                "textAlign",
                "textTransform",
                "textIndent",
                "textDecoration",
                "letterSpacing",
                "wordSpacing",
                "tabSize",
                "MozTabSize",
              ].forEach(function (t) {
                u[t] = a[t];
              }),
              i
                ? t.scrollHeight > parseInt(a.height) &&
                  (u.overflowY = "scroll")
                : (u.overflow = "hidden"),
              (o.textContent = t.value.substring(0, n)),
              "INPUT" === t.nodeName &&
                (o.textContent = o.textContent.replace(/\s/g, " "));
            var l = document.createElement("span");
            (l.textContent = t.value.substring(n) || "."), o.appendChild(l);
            var f = {
              top: l.offsetTop + parseInt(a.borderTopWidth),
              left: l.offsetLeft + parseInt(a.borderLeftWidth),
            };
            return it().body.removeChild(o), f;
          })((o = q), o.selectionStart)),
          (u = o.getBoundingClientRect()),
          (a = it().body),
          (l = it().documentElement),
          (f = window.pageYOffset || l.scrollTop || a.scrollTop),
          (c = window.pageXOffset || l.scrollLeft || a.scrollLeft),
          (s = l.clientTop || a.clientTop || 0),
          (h = l.clientLeft || a.clientLeft || 0),
          (p = u.top + f - s),
          (d = u.left + c - h),
          (g = { top: Math.round(p), left: Math.round(d) }),
          (y = v.top + g.top),
          { left: v.left + g.left, top: y });
        "INPUT" === q.tagName ? lt(n, _, e - 2 * r - i) : lt(n, _, r + i);
      }
      var o, u, a, l, f, c, s, h, p, d, v, g, y;
    }
    function lt(t, n, e) {
      t.style.position = "absolute";
      let r = n.height ? n.top + n.height + e : n.top + e,
        i = n.left;
      t.clientHeight + r + 15 - window.scrollY > window.innerHeight &&
        (r = r - t.clientHeight - 10),
        i + 160 - window.scrollX > window.innerWidth && (i = i - 160 - 25),
        (t.style.top = r + "px"),
        (t.style.left = i + "px");
    }
    async function ft(t, n, e) {
      let r = it(!0),
        i = (r.textContent || "").length,
        o = r.attributes.characterLimit || "auto";
      if (o && "auto" !== o && o - i < t.length) {
        if (i > o) return;
        t.substring(0, o - i), (e = null);
      }
      let u = it(!0);
      if (!e || tt.includes(G)) {
        if (e) {
          let n = JSON.parse(
            window.localStorage.getItem("rev-t13-personalDict")
          );
          n[H[u] || M] || (n[H[u] || M] = {}),
            (n[H[u] || M][e] = t),
            window.localStorage.setItem(
              "rev-t13-personalDict",
              JSON.stringify(n)
            );
        }
        Y[u] ? Y[u](t + n) : it().execCommand("insertText", !1, t + n);
      } else {
        let t = JSON.parse(window.localStorage.getItem("rev-t13-personalDict"));
        if (t[H[u] || M] && t[H[u] || M][G])
          Y[u]
            ? Y[u](t[H[u] || M][G] + n)
            : it().execCommand("insertText", !1, t[H[u] || M][G] + n);
        else {
          let t = await (async function (t) {
            const n = {
                data: [t.trim()],
                isBulk: !1,
                ignoreTaggedEntities: !1,
                noOfSuggestions: F,
              },
              e = {
                headers: {
                  "Content-Type": "application/json",
                  "REV-API-KEY": P,
                  "REV-APP-ID": N,
                  "REV-APPNAME": "transliteration",
                  src_lang: "en",
                  tgt_lang: H[it(!0)] || M,
                  domain: z,
                  cnt_lang: "en",
                },
              };
            return fetch("https://swalekht13n.reverieinc.com/transliteration", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "REV-API-KEY": e.headers["REV-API-KEY"],
                "REV-APP-ID": e.headers["REV-APP-ID"],
                "REV-APPNAME": e.headers["REV-APPNAME"],
                src_lang: e.headers.src_lang,
                tgt_lang: e.headers.tgt_lang,
                domain: e.headers.domain,
                cnt_lang: e.headers.cnt_lang,
              },
              body: JSON.stringify(n),
            })
              .then((t) => {
                if (!t.ok)
                  throw new Error(
                    "Network response was not ok " + t.statusText
                  );
                return t.json();
              })
              .then((t) => t.responseList[0].outString)
              .catch((t) => {
                throw (console.error(t), t);
              });
          })(G);
          if (!t && !t[0]) return tt.length > 0 ? tt[0] : void 0;
          Y[u] ? Y[u](t[0] + n) : it().execCommand("insertText", !1, t[0] + n);
        }
      }
    }
    function ct(t) {
      if (!t.ctrlKey && !t.metaKey) {
        if (O.includes(t.key))
          return (
            t.preventDefault(),
            void ("" === G
              ? ft(t.key, "", null)
              : ("." === t.key
                  ? ft(tt[nt], (W[M] || "।") + " ", G)
                  : ft(tt[nt], t.key + " ", G),
                rt(),
                (G = "")))
          );
        if (!Q)
          if (
            (t.keyCode >= 65 && t.keyCode <= 90) ||
            (t.keyCode >= 97 && t.keyCode <= 122) ||
            (t.keyCode >= 48 && t.keyCode <= 57)
          )
            t.preventDefault(),
              (G = G.substring(0, et) + t.key + G.substring(et)),
              (et += 1),
              ut(G);
          else if (" " === t.key)
            G.length > 0 &&
              (t.preventDefault(),
              ft(tt[nt], " ", G),
              rt(),
              (G = ""),
              (et = 0));
          else if ("Backspace" === t.key) {
            if (0 === et && G.length > 0) return void t.preventDefault();
            G.length >= 1 &&
              (t.preventDefault(),
              (G = G.substring(0, et - 1) + G.substring(et)),
              (et -= 1),
              ut(G));
          } else if ("Delete" === t.key) {
            if (et === G.length && G.length > 0) return void t.preventDefault();
            G.length >= 1 &&
              (t.preventDefault(),
              (G = G.substring(0, et) + G.substring(et + 1)),
              ut(G));
          } else if ("Enter" === t.key)
            G.length > 0 &&
              (t.preventDefault(), ft(tt[nt], " ", G), rt(), (G = ""));
          else if ("Tab" === t.key)
            G.length > 0
              ? (t.preventDefault(),
                ft(tt[nt], " ", G),
                rt(),
                (G = ""),
                (et = 0))
              : (t.preventDefault(), ft(" ", " ", null));
          else if ("Shift" === t.key) t.preventDefault(), t.stopPropagation();
          else if (
            "Control" === t.key ||
            "Meta" === t.key ||
            t.metaKey ||
            t.ctrlKey
          )
            Q = !0;
          else if ("ArrowUp" === t.key) {
            if ("" == G) return;
            t.preventDefault(),
              0 == nt && (nt = tt.length),
              (nt = (nt - 1) % tt.length),
              at();
          } else if ("ArrowDown" === t.key) {
            if ("" == G) return;
            t.preventDefault(), (nt = (nt + 1) % tt.length), at();
          } else if ("ArrowLeft" === t.key) {
            if ("" === G) return;
            t.preventDefault(),
              et > 0 &&
                ((et -= 1),
                (document.querySelector(".disp-elem").innerHTML =
                  G.substring(0, et) + V + G.substring(et)));
          } else if ("ArrowRight" === t.key) {
            if ("" === G) return;
            t.preventDefault(),
              et < G.length &&
                ((et += 1),
                (document.querySelector(".disp-elem").innerHTML =
                  G.substring(0, et) + V + G.substring(et)));
          } else {
            if ("" == G) return;
            t.preventDefault(), ft(tt[nt], " ", G), rt(), (G = "");
          }
      }
    }
    function st(t) {
      Q &&
        ("Control" == t.key || "Meta" === t.key || t.metaKey || t.ctrlKey) &&
        (Q = !1);
    }
    const ht = function (t) {
        (q = t.target),
          (async function (t) {
            if ("keyboard" === Z || "en" === M) {
              vt({ elements: [it(!0)] });
              let t = document.createElement("div");
              t.addEventListener("mousedown", (t) => {
                t.preventDefault();
              }),
                t.classList.add("swalekh-keyboard-container"),
                t.classList.add(`rev-${$}`);
              let n = document.createElement("div");
              if ((n.classList.add("swalekh-kb-toggle-row"), B)) {
                let t = document.createElement("button");
                (t.textContent = "Phonetic"),
                  t.addEventListener("mousedown", (t) => {
                    t.preventDefault(), gt("phonetic");
                  }),
                  n.appendChild(t);
              }
              B && t.appendChild(n);
              let e = await (async function ({
                lang: t,
                shift: n,
                caps: e,
                kbDiv: r,
              }) {
                (C = !1), (k = !1), (T = !1), (b = t);
                let i = await x(t),
                  o = n || e ? i.shift_layout : i.default_layout;
                if (!o)
                  return console.log("Failed to fetch keyboard layout"), null;
                let u = document.createElement("div");
                u.classList.add("rev-kb");
                let a = document.createElement("div");
                a.classList.add("rev-draggable"),
                  a.classList.add("draggable"),
                  u.appendChild(a);
                let l = !1,
                  f = 0,
                  c = 0;
                return (
                  a.addEventListener("mousedown", (t) => {
                    t.preventDefault(),
                      (l = !0),
                      (f = t.clientY),
                      (c = t.clientX);
                  }),
                  document.addEventListener("mouseup", (t) => {
                    (l = !1), (f = 0), (c = 0);
                  }),
                  document.addEventListener("mousemove", (t) => {
                    t.preventDefault(),
                      l &&
                        ((r.style.top = r.offsetTop - (f - t.clientY) + "px"),
                        (r.style.left = r.offsetLeft - (c - t.clientX) + "px"),
                        (f = t.clientY),
                        (c = t.clientX),
                        r.offsetTop < 0 && (r.style.top = "0px"),
                        r.offsetLeft < 0 && (r.style.left = "0px"),
                        r.offsetLeft + r.offsetWidth > window.innerWidth &&
                          (r.style.left =
                            window.innerWidth - r.offsetWidth + "px"),
                        r.offsetTop + r.offsetHeight > window.innerHeight &&
                          (r.style.top =
                            window.innerHeight - r.offsetHeight + "px"),
                        window.localStorage.setItem(
                          "swalekh-kb-top",
                          r.style.top
                        ),
                        window.localStorage.setItem(
                          "swalekh-kb-left",
                          r.style.left
                        ));
                  }),
                  A.forEach((t, n) => {
                    let e = document.createElement("div");
                    e.classList.add("rev-row"),
                      t.forEach((t, r) => {
                        let i = document.createElement("button");
                        i.classList.add("rev-btn"),
                          i.classList.add(`rev-btn-${t}`),
                          (i.textContent = o[n][r]),
                          e.appendChild(i),
                          i.addEventListener("mousedown", (e) => {
                            if ((e.preventDefault(), "backspace" === t))
                              it().execCommand("delete", !1);
                            else if ("enter" === t) j("\n");
                            else if ("tab" === t) j("\t");
                            else if ("space" === t) j(" ");
                            else {
                              if ("control" === t) return;
                              if ("alt" === t) (k = !k), I();
                              else if ("shift" === t || "caps" === t)
                                (C = !C), I();
                              else {
                                if ("ZWJ" === o[n][r]) return void j("‍");
                                if ("ZWNJ" === o[n][r]) return void j("‌");
                                j(o[n][r]);
                              }
                            }
                          });
                      }),
                      u.appendChild(e);
                  }),
                  u
                );
              })({ lang: M, shift: !1, caps: !1, kbDiv: t });
              t.appendChild(e),
                (t.style.left = window.innerWidth - 650 + "px"),
                "en" !== M && document.body.appendChild(t),
                window.localStorage.getItem("swalekh-kb-top") &&
                  (t.style.top = window.localStorage.getItem("swalekh-kb-top")),
                window.localStorage.getItem("swalekh-kb-left") &&
                  (t.style.left =
                    window.localStorage.getItem("swalekh-kb-left"));
            } else
              vt({ elements: [it(!0)] }),
                t.addEventListener("keydown", ct, !0),
                t.addEventListener("keyup", st, !0);
          })(t.target);
      },
      pt = function () {
        K ? (K = !1) : ((G = ""), rt()), vt({ elements: q }), (q = null);
        let t = document.querySelector(".swalekh-keyboard-container");
        t && t.remove();
      };
    function dt(t) {
      if (t)
        try {
          for (let n of t)
            (H[n] = M),
              n.addEventListener("focus", ht, !0),
              n.addEventListener("blur", pt, !0);
        } catch (t) {
          console.log("Swalekh Init failed", t);
        }
    }
    function vt({ querySel: t, elements: n }) {
      let e = t ? document.querySelectorAll(t) : [];
      if (n && n.length > 0) {
        e || (e = []);
        for (let t = 0; t < n.length; t++) e.push(n[t]);
      }
      let r = document.querySelector(".swalekh-keyboard-container");
      if ((r && r.remove(), e && 0 !== e.length))
        for (let t of e)
          t.removeEventListener("keydown", ct, !0),
            t.removeEventListener("keyup", st, !0);
    }
    function gt(t) {
      try {
        let n = it().activeElement;
        (Z = "keyboard" === t ? "keyboard" : "phonetic"),
          (n.attributes.swalekhMode = Z),
          n
            ? (n.blur(), n.focus())
            : console.log("err in catching mode change");
      } catch (t) {
        console.log(t);
      }
    }
    setInterval(() => {
      if ("" === G || "keyboard" === Z) return (G = ""), rt(), void (X = G);
      G != X &&
        ((function (t) {
          const n = {
              data: [t.trim()],
              isBulk: !1,
              ignoreTaggedEntities: !1,
              noOfSuggestions: F,
            },
            e = {
              headers: {
                "Content-Type": "application/json",
                "REV-API-KEY": P,
                "REV-APP-ID": N,
                "REV-APPNAME": "transliteration",
                src_lang: "en",
                tgt_lang: H[it(!0)] || M,
                domain: z,
                cnt_lang: "en",
              },
            };
          fetch("https://swalekht13n.reverieinc.com/transliteration", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "REV-API-KEY": e.headers["REV-API-KEY"],
              "REV-APP-ID": e.headers["REV-APP-ID"],
              "REV-APPNAME": e.headers["REV-APPNAME"],
              src_lang: e.headers.src_lang,
              tgt_lang: e.headers.tgt_lang,
              domain: e.headers.domain,
              cnt_lang: e.headers.cnt_lang,
            },
            body: JSON.stringify(n),
          })
            .then((t) => {
              if (!t.ok)
                throw new Error("Network response was not ok " + t.statusText);
              return t.json();
            })
            .then((n) => {
              let e = n.responseList[0].outString;
              if ("en" === M) return (tt = []), void at();
              let r = !0;
              for (let n = 0; n < t.length; n++)
                if (t[n].charCodeAt(0) < 48 || t[n].charCodeAt(0) > 57) {
                  r = !1;
                  break;
                }
              r || e.push(t);
              let i = JSON.parse(
                  window.localStorage.getItem("rev-t13-personalDict")
                ),
                o = it(!0);
              if (i[H[o] || M] && i[H[o] || M][t]) {
                let n = [];
                n.push(i[H[o] || M][t]);
                for (let r of e) r !== i[H[o] || M][t] && n.push(r);
                tt = n;
              } else tt = e;
              at();
            })
            .catch((t) => {
              console.log(t);
            });
        })(G),
        (X = G));
    }, 75),
      (window.loadSwalekh = function (t) {
        if (!t) return;
        if (!t.apiKey || !t.appId) return;
        if (!t.querySel && !t.elements) return;
        JSON.parse(window.localStorage.getItem("rev-t13-personalDict")) ||
          window.localStorage.setItem(
            "rev-t13-personalDict",
            JSON.stringify({})
          ),
          (M = t.lang),
          (P = t.apiKey),
          (N = t.appId),
          (z = t.domain || "1"),
          (Z = t.mode),
          (J = J || t.langToggle || !1),
          (B = B || t.modeToggle || !1);
        let n = t.noOfSuggestions || 5;
        if (
          ((F = n > 7 ? 7 : n < 2 ? 2 : n),
          ($ = t.theme || "light"),
          ["light", "dark", "fresh", "reverie-red", "classic"].includes($) ||
            ($ = "light"),
          (U = document.querySelectorAll(t.querySel)),
          (U && 0 !== U.length) || (U = []),
          t.elements && t.elements.length > 0)
        )
          for (let n of t.elements) U.push(n);
        if (U)
          for (let n = 0; n < U.length; n++)
            t.characterLimit &&
              (U[n].attributes.characterLimit = t.characterLimit),
              t.callback && (Y[U[n]] = t.callback),
              U[n].attributes.swalekhMode ||
                (U[n].attributes.swalekhMode = t.mode),
              U[n].attributes.swalekhInit ||
                ((U[n].attributes.swalekhInit = !0),
                U[n].addEventListener("keydown", async function (t) {
                  if ("keyboard" == Z) {
                    if (
                      [
                        "ArrowLeft",
                        "ArrowRight",
                        "ArrowUp",
                        "ArrowDown",
                      ].includes(t.key)
                    )
                      return;
                    L(t, await x(M));
                  }
                }));
        dt(U);
      }),
      (window.unloadSwalekh = function ({ querySel: t, elements: n }) {
        vt({ querySel: t, elements: n });
        let e = document.querySelectorAll(t);
        if (e && 0 !== e.length) {
          for (let t of e)
            t.removeEventListener("focus", ht, !0),
              t.removeEventListener("blur", pt, !0),
              t.attributes.swalekhMode && t.removeAttribute("swalekhMode"),
              t.attributes.swalekhInit && t.removeAttribute("swalekhInit"),
              t.attributes.characterLimit &&
                t.removeAttribute("characterLimit"),
              Y[t] && (Y[t] = null);
          (M = "en"), dt(e);
        }
      }),
      (window.trigger_mode_change = gt);
  })();
})();
