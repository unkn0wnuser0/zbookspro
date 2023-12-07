var ccpa_optout = (function (t) {
  var e = {}
  function o(n) {
    if (e[n]) return e[n].exports
    var a = (e[n] = { i: n, l: !1, exports: {} })
    return t[n].call(a.exports, a, a.exports, o), (a.l = !0), a.exports
  }
  return (
    (o.m = t),
    (o.c = e),
    (o.d = function (t, e, n) {
      o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n })
    }),
    (o.r = function (t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 })
    }),
    (o.t = function (t, e) {
      if ((1 & e && (t = o(t)), 8 & e)) return t
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t
      var n = Object.create(null)
      if (
        (o.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var a in t)
          o.d(
            n,
            a,
            function (e) {
              return t[e]
            }.bind(null, a)
          )
      return n
    }),
    (o.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default
            }
          : function () {
              return t
            }
      return o.d(e, 'a', e), e
    }),
    (o.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }),
    (o.p = ''),
    o((o.s = 8))
  )
})([
  function (t, e, o) {
    'use strict'
    t.exports = function (t) {
      var e = []
      return (
        (e.toString = function () {
          return this.map(function (e) {
            var o = (function (t, e) {
              var o = t[1] || '',
                n = t[3]
              if (!n) return o
              if (e && 'function' == typeof btoa) {
                var a =
                    ((c = n),
                    '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' +
                      btoa(unescape(encodeURIComponent(JSON.stringify(c)))) +
                      ' */'),
                  r = n.sources.map(function (t) {
                    return '/*# sourceURL=' + n.sourceRoot + t + ' */'
                  })
                return [o].concat(r).concat([a]).join('\n')
              }
              var c
              return [o].join('\n')
            })(e, t)
            return e[2] ? '@media ' + e[2] + '{' + o + '}' : o
          }).join('')
        }),
        (e.i = function (t, o) {
          'string' == typeof t && (t = [[null, t, '']])
          for (var n = {}, a = 0; a < this.length; a++) {
            var r = this[a][0]
            null != r && (n[r] = !0)
          }
          for (a = 0; a < t.length; a++) {
            var c = t[a]
            ;(null != c[0] && n[c[0]]) ||
              (o && !c[2]
                ? (c[2] = o)
                : o && (c[2] = '(' + c[2] + ') and (' + o + ')'),
              e.push(c))
          }
        }),
        e
      )
    }
  },
  function (t, e, o) {
    var n,
      a,
      r = {},
      c =
        ((n = function () {
          return window && document && document.all && !window.atob
        }),
        function () {
          return void 0 === a && (a = n.apply(this, arguments)), a
        }),
      p = function (t, e) {
        return e ? e.querySelector(t) : document.querySelector(t)
      },
      _ = (function (t) {
        var e = {}
        return function (t, o) {
          if ('function' == typeof t) return t()
          if (void 0 === e[t]) {
            var n = p.call(this, t, o)
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head
              } catch (t) {
                n = null
              }
            e[t] = n
          }
          return e[t]
        }
      })(),
      i = null,
      u = 0,
      s = [],
      l = o(5)
    function b(t, e) {
      for (var o = 0; o < t.length; o++) {
        var n = t[o],
          a = r[n.id]
        if (a) {
          a.refs++
          for (var c = 0; c < a.parts.length; c++) a.parts[c](n.parts[c])
          for (; c < n.parts.length; c++) a.parts.push(m(n.parts[c], e))
        } else {
          var p = []
          for (c = 0; c < n.parts.length; c++) p.push(m(n.parts[c], e))
          r[n.id] = { id: n.id, refs: 1, parts: p }
        }
      }
    }
    function d(t, e) {
      for (var o = [], n = {}, a = 0; a < t.length; a++) {
        var r = t[a],
          c = e.base ? r[0] + e.base : r[0],
          p = { css: r[1], media: r[2], sourceMap: r[3] }
        n[c] ? n[c].parts.push(p) : o.push((n[c] = { id: c, parts: [p] }))
      }
      return o
    }
    function g(t, e) {
      var o = _(t.insertInto)
      if (!o)
        throw new Error(
          "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
        )
      var n = s[s.length - 1]
      if ('top' === t.insertAt)
        n
          ? n.nextSibling
            ? o.insertBefore(e, n.nextSibling)
            : o.appendChild(e)
          : o.insertBefore(e, o.firstChild),
          s.push(e)
      else if ('bottom' === t.insertAt) o.appendChild(e)
      else {
        if ('object' != typeof t.insertAt || !t.insertAt.before)
          throw new Error(
            "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
          )
        var a = _(t.insertAt.before, o)
        o.insertBefore(e, a)
      }
    }
    function f(t) {
      if (null === t.parentNode) return !1
      t.parentNode.removeChild(t)
      var e = s.indexOf(t)
      e >= 0 && s.splice(e, 1)
    }
    function h(t) {
      var e = document.createElement('style')
      if (
        (void 0 === t.attrs.type && (t.attrs.type = 'text/css'),
        void 0 === t.attrs.nonce)
      ) {
        var n = (function () {
          0
          return o.nc
        })()
        n && (t.attrs.nonce = n)
      }
      return v(e, t.attrs), g(t, e), e
    }
    function v(t, e) {
      Object.keys(e).forEach(function (o) {
        t.setAttribute(o, e[o])
      })
    }
    function m(t, e) {
      var o, n, a, r
      if (e.transform && t.css) {
        if (
          !(r =
            'function' == typeof e.transform
              ? e.transform(t.css)
              : e.transform.default(t.css))
        )
          return function () {}
        t.css = r
      }
      if (e.singleton) {
        var c = u++
        ;(o = i || (i = h(e))),
          (n = x.bind(null, o, c, !1)),
          (a = x.bind(null, o, c, !0))
      } else
        t.sourceMap &&
        'function' == typeof URL &&
        'function' == typeof URL.createObjectURL &&
        'function' == typeof URL.revokeObjectURL &&
        'function' == typeof Blob &&
        'function' == typeof btoa
          ? ((o = (function (t) {
              var e = document.createElement('link')
              return (
                void 0 === t.attrs.type && (t.attrs.type = 'text/css'),
                (t.attrs.rel = 'stylesheet'),
                v(e, t.attrs),
                g(t, e),
                e
              )
            })(e)),
            (n = w.bind(null, o, e)),
            (a = function () {
              f(o), o.href && URL.revokeObjectURL(o.href)
            }))
          : ((o = h(e)),
            (n = k.bind(null, o)),
            (a = function () {
              f(o)
            }))
      return (
        n(t),
        function (e) {
          if (e) {
            if (
              e.css === t.css &&
              e.media === t.media &&
              e.sourceMap === t.sourceMap
            )
              return
            n((t = e))
          } else a()
        }
      )
    }
    t.exports = function (t, e) {
      if ('undefined' != typeof DEBUG && DEBUG && 'object' != typeof document)
        throw new Error(
          'The style-loader cannot be used in a non-browser environment'
        )
      ;((e = e || {}).attrs = 'object' == typeof e.attrs ? e.attrs : {}),
        e.singleton || 'boolean' == typeof e.singleton || (e.singleton = c()),
        e.insertInto || (e.insertInto = 'head'),
        e.insertAt || (e.insertAt = 'bottom')
      var o = d(t, e)
      return (
        b(o, e),
        function (t) {
          for (var n = [], a = 0; a < o.length; a++) {
            var c = o[a]
            ;(p = r[c.id]).refs--, n.push(p)
          }
          t && b(d(t, e), e)
          for (a = 0; a < n.length; a++) {
            var p
            if (0 === (p = n[a]).refs) {
              for (var _ = 0; _ < p.parts.length; _++) p.parts[_]()
              delete r[p.id]
            }
          }
        }
      )
    }
    var O,
      y =
        ((O = []),
        function (t, e) {
          return (O[t] = e), O.filter(Boolean).join('\n')
        })
    function x(t, e, o, n) {
      var a = o ? '' : n.css
      if (t.styleSheet) t.styleSheet.cssText = y(e, a)
      else {
        var r = document.createTextNode(a),
          c = t.childNodes
        c[e] && t.removeChild(c[e]),
          c.length ? t.insertBefore(r, c[e]) : t.appendChild(r)
      }
    }
    function k(t, e) {
      var o = e.css,
        n = e.media
      if ((n && t.setAttribute('media', n), t.styleSheet))
        t.styleSheet.cssText = o
      else {
        for (; t.firstChild; ) t.removeChild(t.firstChild)
        t.appendChild(document.createTextNode(o))
      }
    }
    function w(t, e, o) {
      var n = o.css,
        a = o.sourceMap,
        r = void 0 === e.convertToAbsoluteUrls && a
      ;(e.convertToAbsoluteUrls || r) && (n = l(n)),
        a &&
          (n +=
            '\n/*# sourceMappingURL=data:application/json;base64,' +
            btoa(unescape(encodeURIComponent(JSON.stringify(a)))) +
            ' */')
      var c = new Blob([n], { type: 'text/css' }),
        p = t.href
      ;(t.href = URL.createObjectURL(c)), p && URL.revokeObjectURL(p)
    }
  },
  function (t) {
    t.exports = JSON.parse(
      '{"banner":{"title":"Do Not Sell My Information","description":"Turning this off will opt you out of personalized advertisements on this website.","category_label":"Personalized Advertisements","category_status_opted_out":"Opted out","category_status_not_opted_out":"Not Opted Out","confirmation_button":"Save Preference","close_button":"Close"}}'
    )
  },
  function (t, e, o) {
    var n = o(4)
    'string' == typeof n && (n = [[t.i, n, '']])
    var a = { hmr: !0, transform: void 0, insertInto: void 0 }
    o(1)(n, a)
    n.locals && (t.exports = n.locals)
  },
  function (t, e, o) {
    ;(t.exports = o(0)(!1)).push([
      t.i,
      '/*! destyle.css v1.0.13 | MIT License | https://github.com/nicolas-cusan/destyle.css */.ccpa_opt_out_reset *{box-sizing:border-box}.ccpa_opt_out_reset ::before,.ccpa_opt_out_reset ::after{box-sizing:inherit}.ccpa_opt_out_reset main{display:block}.ccpa_opt_out_reset p,.ccpa_opt_out_reset table,.ccpa_opt_out_reset blockquote,.ccpa_opt_out_reset address,.ccpa_opt_out_reset pre,.ccpa_opt_out_reset iframe,.ccpa_opt_out_reset form,.ccpa_opt_out_reset figure,.ccpa_opt_out_reset dl{margin:0}.ccpa_opt_out_reset h1,.ccpa_opt_out_reset h2,.ccpa_opt_out_reset h3,.ccpa_opt_out_reset h4,.ccpa_opt_out_reset h5,.ccpa_opt_out_reset h6{font-size:inherit;line-height:inherit;font-weight:inherit;margin:0}.ccpa_opt_out_reset ul,.ccpa_opt_out_reset ol{margin:0;padding:0;list-style:none}.ccpa_opt_out_reset dt{font-weight:bold}.ccpa_opt_out_reset dd{margin-left:0}.ccpa_opt_out_reset hr{box-sizing:content-box;height:0;overflow:visible;border:0;border-top:1px solid;margin:0;clear:both;color:inherit}.ccpa_opt_out_reset pre{font-family:monospace,monospace;font-size:inherit}.ccpa_opt_out_reset address{font-style:inherit}.ccpa_opt_out_reset a{background-color:rgba(0,0,0,0);text-decoration:none;color:inherit}.ccpa_opt_out_reset abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}.ccpa_opt_out_reset b,.ccpa_opt_out_reset strong{font-weight:bolder}.ccpa_opt_out_reset code,.ccpa_opt_out_reset kbd,.ccpa_opt_out_reset samp{font-family:monospace,monospace;font-size:inherit}.ccpa_opt_out_reset small{font-size:80%}.ccpa_opt_out_reset sub,.ccpa_opt_out_reset sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}.ccpa_opt_out_reset sub{bottom:-0.25em}.ccpa_opt_out_reset sup{top:-0.5em}.ccpa_opt_out_reset img{border-style:none;vertical-align:bottom}.ccpa_opt_out_reset embed,.ccpa_opt_out_reset object,.ccpa_opt_out_reset iframe{border:0;vertical-align:bottom}.ccpa_opt_out_reset button,.ccpa_opt_out_reset input,.ccpa_opt_out_reset optgroup,.ccpa_opt_out_reset select,.ccpa_opt_out_reset textarea{-webkit-appearance:none;appearance:none;vertical-align:middle;color:inherit;font:inherit;border:0;background:rgba(0,0,0,0);padding:0;margin:0;outline:0;border-radius:0;text-align:inherit}.ccpa_opt_out_reset [type=checkbox]{-webkit-appearance:checkbox;appearance:checkbox}.ccpa_opt_out_reset [type=radio]{-webkit-appearance:radio;appearance:radio}.ccpa_opt_out_reset button,.ccpa_opt_out_reset input{overflow:visible}.ccpa_opt_out_reset button,.ccpa_opt_out_reset select{text-transform:none}.ccpa_opt_out_reset button,.ccpa_opt_out_reset [type=button],.ccpa_opt_out_reset [type=reset],.ccpa_opt_out_reset [type=submit]{cursor:pointer;-webkit-appearance:none;appearance:none}.ccpa_opt_out_reset button[disabled],.ccpa_opt_out_reset [type=button][disabled],.ccpa_opt_out_reset [type=reset][disabled],.ccpa_opt_out_reset [type=submit][disabled]{cursor:default}.ccpa_opt_out_reset button::-moz-focus-inner,.ccpa_opt_out_reset [type=button]::-moz-focus-inner,.ccpa_opt_out_reset [type=reset]::-moz-focus-inner,.ccpa_opt_out_reset [type=submit]::-moz-focus-inner{border-style:none;padding:0}.ccpa_opt_out_reset button:-moz-focusring,.ccpa_opt_out_reset [type=button]:-moz-focusring,.ccpa_opt_out_reset [type=reset]:-moz-focusring,.ccpa_opt_out_reset [type=submit]:-moz-focusring{outline:1px dotted ButtonText}.ccpa_opt_out_reset option{padding:0}.ccpa_opt_out_reset fieldset{margin:0;padding:0;border:0;min-width:0}.ccpa_opt_out_reset legend{color:inherit;display:table;max-width:100%;padding:0;white-space:normal}.ccpa_opt_out_reset progress{vertical-align:baseline}.ccpa_opt_out_reset textarea{overflow:auto}.ccpa_opt_out_reset [type=checkbox],.ccpa_opt_out_reset [type=radio]{padding:0}.ccpa_opt_out_reset [type=number]::-webkit-inner-spin-button,.ccpa_opt_out_reset [type=number]::-webkit-outer-spin-button{height:auto}.ccpa_opt_out_reset [type=search]{outline-offset:-2px}.ccpa_opt_out_reset [type=search]::-webkit-search-decoration{-webkit-appearance:none}.ccpa_opt_out_reset ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.ccpa_opt_out_reset label[for]{cursor:pointer}.ccpa_opt_out_reset details{display:block}.ccpa_opt_out_reset summary{display:list-item}.ccpa_opt_out_reset table{border-collapse:collapse;border-spacing:0}.ccpa_opt_out_reset caption{text-align:left}.ccpa_opt_out_reset td,.ccpa_opt_out_reset th{vertical-align:top;padding:0}.ccpa_opt_out_reset th{text-align:left;font-weight:bold}.ccpa_opt_out_reset template{display:none}.ccpa_opt_out_reset [hidden]{display:none}.ccpa_opt_out_reset li{padding:0}',
      '',
    ])
  },
  function (t, e) {
    t.exports = function (t) {
      var e = 'undefined' != typeof window && window.location
      if (!e) throw new Error('fixUrls requires window.location')
      if (!t || 'string' != typeof t) return t
      var o = e.protocol + '//' + e.host,
        n = o + e.pathname.replace(/\/[^\/]*$/, '/')
      return t.replace(
        /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
        function (t, e) {
          var a,
            r = e
              .trim()
              .replace(/^"(.*)"$/, function (t, e) {
                return e
              })
              .replace(/^'(.*)'$/, function (t, e) {
                return e
              })
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)
            ? t
            : ((a =
                0 === r.indexOf('//')
                  ? r
                  : 0 === r.indexOf('/')
                  ? o + r
                  : n + r.replace(/^\.\//, '')),
              'url(' + JSON.stringify(a) + ')')
        }
      )
    }
  },
  function (t, e, o) {
    var n = o(7)
    'string' == typeof n && (n = [[t.i, n, '']])
    var a = { hmr: !0, transform: void 0, insertInto: void 0 }
    o(1)(n, a)
    n.locals && (t.exports = n.locals)
  },
  function (t, e, o) {
    ;(t.exports = o(0)(!1)).push([
      t.i,
      '.ccpa_opt_out_banner{position:fixed;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;line-height:1.5;box-shadow:0 0 12px 0 rgba(0,0,0,.16);z-index:9999}.ccpa_opt_out_banner.ccpa_opt_out_banner_style-top{width:100%;top:0;left:0}.ccpa_opt_out_banner.ccpa_opt_out_banner_style-bottom{width:100%;bottom:0;left:0}.ccpa_opt_out_banner.ccpa_opt_out_banner-notice{max-width:479px;bottom:0;right:30px;border-top-left-radius:10px;border-top-right-radius:10px}.ccpa_opt_out_banner.ccpa_opt_out_banner-notice .ccpa_opt_out_banner-title{border-top-left-radius:10px;border-top-right-radius:10px}.ccpa_opt_out_banner.ccpa_opt_out_banner-notice .ccpa_opt_out_banner-setting-text{max-width:225px}.ccpa_opt_out_banner.ccpa_opt_out_banner_color_palette-light.ccpa_opt_out_banner-notice{color:#212531;background:#fff}.ccpa_opt_out_banner.ccpa_opt_out_banner_color_palette-light.ccpa_opt_out_banner_style-top{color:#212531;background:#fff}.ccpa_opt_out_banner.ccpa_opt_out_banner_color_palette-light.ccpa_opt_out_banner_style-bottom{color:#212531;background:#fff}.ccpa_opt_out_banner.ccpa_opt_out_banner_color_palette-light .ccpa_opt_out_banner-title{background:#efefef}.ccpa_opt_out_banner.ccpa_opt_out_banner_color_palette-light .ccpa_opt_out_banner-setting .ccpa_opt_out_banner-toggler .ccpa_opt_out_banner-toggler-checkbox{background:#e7ecf0}.ccpa_opt_out_banner.ccpa_opt_out_banner_color_palette-light .ccpa_opt_out_banner-setting .ccpa_opt_out_banner-toggler .ccpa_opt_out_banner-toggler-checkbox:after{background-color:#8fa3cc}.ccpa_opt_out_banner.ccpa_opt_out_banner_color_palette-light .ccpa_opt_out_banner-setting .ccpa_opt_out_banner-toggler .ccpa_opt_out_banner-toggler-checkbox:checked:after{background-color:#006ade}.ccpa_opt_out_banner.ccpa_opt_out_banner_color_palette-light .ccpa_opt_out_banner-setting .ccpa_opt_out_banner-toggler .ccpa_opt_out_banner-toggler-checkbox:checked+.ccpa_opt_out_banner-toggler-checkbox-status{color:#747474}.ccpa_opt_out_banner.ccpa_opt_out_banner_color_palette-light .ccpa_opt_out_banner-setting .ccpa_opt_out_banner-toggler .ccpa_opt_out_banner-toggler-checkbox-status{color:#8c8e93}.ccpa_opt_out_banner.ccpa_opt_out_banner_color_palette-light .ccpa_opt_out_banner-footer-buttons #ccpa_opt_out_banner-button-save{background-color:#006ade;color:#fff}.ccpa_opt_out_banner.ccpa_opt_out_banner_color_palette-light .ccpa_opt_out_banner-footer-buttons #ccpa_opt_out_banner-button-save:hover{background-color:#1283ff}.ccpa_opt_out_banner.ccpa_opt_out_banner_color_palette-light .ccpa_opt_out_banner-footer-buttons #ccpa_opt_out_banner-button-close{background-color:rgba(0,0,0,0);color:#8c8e93}.ccpa_opt_out_banner.ccpa_opt_out_banner_color_palette-light .ccpa_opt_out_banner-footer-buttons #ccpa_opt_out_banner-button-close:hover{background-color:#898b91;color:#fff}.ccpa_opt_out_banner.ccpa_opt_out_banner_color_palette-light .ccpa_opt_out_banner-footer-copyright{color:#babbba}.ccpa_opt_out_banner.ccpa_opt_out_banner_color_palette-light .ccpa_opt_out_banner-footer-copyright a{font-weight:bold;color:#babbba;text-decoration:none}.ccpa_opt_out_banner.ccpa_opt_out_banner_color_palette-light .ccpa_opt_out_banner-footer-copyright a:hover{text-decoration:underline}.ccpa_opt_out_banner.ccpa_opt_out_banner_color_palette-dark.ccpa_opt_out_banner-notice{color:#ebebec;background:#212531}.ccpa_opt_out_banner.ccpa_opt_out_banner_color_palette-dark.ccpa_opt_out_banner_style-top{color:#ebebec;background:#212531}.ccpa_opt_out_banner.ccpa_opt_out_banner_color_palette-dark.ccpa_opt_out_banner_style-bottom{color:#ebebec;background:#212531}.ccpa_opt_out_banner.ccpa_opt_out_banner_color_palette-dark .ccpa_opt_out_banner-title{background:#181c27}.ccpa_opt_out_banner.ccpa_opt_out_banner_color_palette-dark .ccpa_opt_out_banner-setting .ccpa_opt_out_banner-toggler .ccpa_opt_out_banner-toggler-checkbox{background:#38425e}.ccpa_opt_out_banner.ccpa_opt_out_banner_color_palette-dark .ccpa_opt_out_banner-setting .ccpa_opt_out_banner-toggler .ccpa_opt_out_banner-toggler-checkbox:after{background-color:#8fa3cc}.ccpa_opt_out_banner.ccpa_opt_out_banner_color_palette-dark .ccpa_opt_out_banner-setting .ccpa_opt_out_banner-toggler .ccpa_opt_out_banner-toggler-checkbox:checked:after{background-color:#006ade}.ccpa_opt_out_banner.ccpa_opt_out_banner_color_palette-dark .ccpa_opt_out_banner-setting .ccpa_opt_out_banner-toggler .ccpa_opt_out_banner-toggler-checkbox:checked+.ccpa_opt_out_banner-toggler-checkbox-status{color:#ebebec}.ccpa_opt_out_banner.ccpa_opt_out_banner_color_palette-dark .ccpa_opt_out_banner-setting .ccpa_opt_out_banner-toggler .ccpa_opt_out_banner-toggler-checkbox-status{color:#ebebec}.ccpa_opt_out_banner.ccpa_opt_out_banner_color_palette-dark .ccpa_opt_out_banner-footer-buttons #ccpa_opt_out_banner-button-save{background-color:#006ade;color:#fff}.ccpa_opt_out_banner.ccpa_opt_out_banner_color_palette-dark .ccpa_opt_out_banner-footer-buttons #ccpa_opt_out_banner-button-save:hover{background-color:#1283ff}.ccpa_opt_out_banner.ccpa_opt_out_banner_color_palette-dark .ccpa_opt_out_banner-footer-buttons #ccpa_opt_out_banner-button-close{background-color:rgba(0,0,0,0);color:#8c8e93}.ccpa_opt_out_banner.ccpa_opt_out_banner_color_palette-dark .ccpa_opt_out_banner-footer-buttons #ccpa_opt_out_banner-button-close:hover{background-color:#898b91;color:#fff}.ccpa_opt_out_banner.ccpa_opt_out_banner_color_palette-dark .ccpa_opt_out_banner-footer-copyright{color:#61697e}.ccpa_opt_out_banner.ccpa_opt_out_banner_color_palette-dark .ccpa_opt_out_banner-footer-copyright a{font-weight:bold;color:#61697e;text-decoration:none}.ccpa_opt_out_banner.ccpa_opt_out_banner_color_palette-dark .ccpa_opt_out_banner-footer-copyright a:hover{text-decoration:underline}.ccpa_opt_out_banner .ccpa_opt_out_banner-title{padding:12px 30px 12px 30px;font-size:20px;font-weight:bold}.ccpa_opt_out_banner .ccpa_opt_out_banner-content{font-size:16px;padding:25px 30px 0 30px}.ccpa_opt_out_banner .ccpa_opt_out_banner-setting{font-size:16px;display:flex;flex-direction:row;padding:20px 30px 25px 30px}.ccpa_opt_out_banner .ccpa_opt_out_banner-setting .ccpa_opt_out_banner-setting-text{font-weight:bold}.ccpa_opt_out_banner .ccpa_opt_out_banner-setting .ccpa_opt_out_banner-toggler{display:flex;justify-content:center;align-items:center;padding-left:30px}.ccpa_opt_out_banner .ccpa_opt_out_banner-setting .ccpa_opt_out_banner-toggler input[type=checkbox]{-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer}.ccpa_opt_out_banner .ccpa_opt_out_banner-setting .ccpa_opt_out_banner-toggler input[type=checkbox]:focus{outline:0}.ccpa_opt_out_banner .ccpa_opt_out_banner-setting .ccpa_opt_out_banner-toggler .ccpa_opt_out_banner-toggler-checkbox{position:relative;width:45px;min-width:45px;height:16px;margin:0 8px 0 0;vertical-align:top;border-radius:30px;outline:none;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;transition:all .3s cubic-bezier(0.2, 0.85, 0.32, 1.2)}@media all and (-ms-high-contrast: none){.ccpa_opt_out_banner .ccpa_opt_out_banner-setting .ccpa_opt_out_banner-toggler .ccpa_opt_out_banner-toggler-checkbox{background:none !important}}@supports(-ms-ime-align: auto){.ccpa_opt_out_banner .ccpa_opt_out_banner-setting .ccpa_opt_out_banner-toggler .ccpa_opt_out_banner-toggler-checkbox{background:none !important}}.ccpa_opt_out_banner .ccpa_opt_out_banner-setting .ccpa_opt_out_banner-toggler .ccpa_opt_out_banner-toggler-checkbox:after{content:"";position:absolute;left:0px;top:-1px;width:18px;height:18px;border-radius:50%;transform:translateX(0);transition:all .3s cubic-bezier(0.2, 0.85, 0.32, 1.2)}.ccpa_opt_out_banner .ccpa_opt_out_banner-setting .ccpa_opt_out_banner-toggler .ccpa_opt_out_banner-toggler-checkbox:checked:after{transform:translateX(calc(100% + 10px))}.ccpa_opt_out_banner .ccpa_opt_out_banner-setting .ccpa_opt_out_banner-toggler .ccpa_opt_out_banner-toggler-checkbox:checked+.ccpa_opt_out_banner-toggler-checkbox-status{color:#747474}.ccpa_opt_out_banner .ccpa_opt_out_banner-setting .ccpa_opt_out_banner-toggler .ccpa_opt_out_banner-toggler-checkbox-status{cursor:pointer;font-size:12px;text-transform:uppercase;margin-bottom:0;min-width:96px}.ccpa_opt_out_banner .ccpa_opt_out_banner-footer{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:10px 30px 20px 30px}.ccpa_opt_out_banner .ccpa_opt_out_banner-footer .ccpa_opt_out_banner-footer-buttons button{font-size:16px;outline:none;transition:all .3s}.ccpa_opt_out_banner .ccpa_opt_out_banner-footer .ccpa_opt_out_banner-footer-buttons button:last-of-type{margin-left:12px}.ccpa_opt_out_banner .ccpa_opt_out_banner-footer .ccpa_opt_out_banner-footer-buttons #ccpa_opt_out_banner-button-save{cursor:pointer;border-radius:4px;outline:none;border:none;padding:10px 15px;font-weight:bold}.ccpa_opt_out_banner .ccpa_opt_out_banner-footer .ccpa_opt_out_banner-footer-buttons #ccpa_opt_out_banner-button-close{cursor:pointer;border-radius:4px;outline:none;border:none;padding:10px 15px;font-weight:bold}.ccpa_opt_out_banner .ccpa_opt_out_banner-footer .ccpa_opt_out_banner-footer-copyright{font-size:16px}.ccpa_opt_out_banner .ccpa_opt_out_banner-footer .ccpa_opt_out_banner-footer-copyright a{font-size:16px;font-weight:bold;text-decoration:none;border:0;margin:0;padding:0;box-shadow:none}@media all and (max-width: 479px){.ccpa_opt_out_banner.ccpa_opt_out_banner-notice{max-width:100%;left:15px;right:15px}.ccpa_opt_out_banner .ccpa_opt_out_banner-setting{flex-direction:column;padding-bottom:10px}.ccpa_opt_out_banner .ccpa_opt_out_banner-setting .ccpa_opt_out_banner-toggler{justify-content:left;align-items:left;margin-top:15px;padding-left:0}.ccpa_opt_out_banner .ccpa_opt_out_banner-footer{flex-direction:column;justify-content:flex-start;align-items:stretch}.ccpa_opt_out_banner .ccpa_opt_out_banner-footer .ccpa_opt_out_banner-footer-buttons{display:flex;flex-direction:column}.ccpa_opt_out_banner .ccpa_opt_out_banner-footer .ccpa_opt_out_banner-footer-buttons button{width:100%;text-align:center;margin-top:10px}.ccpa_opt_out_banner .ccpa_opt_out_banner-footer .ccpa_opt_out_banner-footer-buttons button:last-of-type{margin-left:0}.ccpa_opt_out_banner .ccpa_opt_out_banner-footer-copyright{text-align:center;margin-top:10px}}',
      '',
    ])
  },
  function (t, e, o) {
    'use strict'
    o.r(e),
      o.d(e, 'CCPA_OptOut', function () {
        return l
      }),
      o.d(e, 'run', function () {
        return b
      }),
      o.d(e, 'scriptDebugger', function () {
        return n
      })
    o(3), o(6)
    var n,
      a = (function () {
        function t() {}
        return (
          (t.insertCss = function (t) {
            var e = document.querySelector('head'),
              o = document.createElement('link')
            o.setAttribute('href', t),
              o.setAttribute('rel', 'stylesheet'),
              o.setAttribute('type', 'text/css'),
              e.appendChild(o)
          }),
          (t.appendChild = function (t, e, o) {
            var n, a
            return (
              void 0 === o && (o = null),
              (n = 'string' == typeof t ? document.querySelector(t) : t),
              (a = 'string' == typeof e ? document.querySelector(e) : e),
              'afterbegin' === o
                ? n.insertAdjacentElement('afterbegin', a)
                : n.insertAdjacentElement('beforeend', a),
              !0
            )
          }),
          (t.setCookie = function (t, e, o) {
            void 0 === o && (o = 62)
            var n = new Date()
            n.setTime(n.getTime() + 24 * o * 60 * 60 * 1e3)
            var a = '; expires=' + n.toUTCString()
            return (document.cookie = t + '=' + (e || '') + a + '; path=/'), !0
          }),
          (t.getCookie = function (t) {
            for (
              var e = t + '=', o = document.cookie.split(';'), n = 0;
              n < o.length;
              n++
            ) {
              for (var a = o[n]; ' ' === a.charAt(0); )
                a = a.substring(1, a.length)
              if (0 === a.indexOf(e)) return a.substring(e.length, a.length)
            }
            return null
          }),
          (t.removeCookie = function (t) {
            document.cookie = t + '=; Max-Age=-99999999;'
          }),
          (t.registerEvent = function (t) {
            var e = document.createEvent('Event')
            return e.initEvent(t, !0, !0), e
          }),
          (t.searchObjectsArray = function (t, e, o) {
            for (var n in t) {
              if (t[n][e] === o) return !0
            }
            return !1
          }),
          (t.magicTransform = function (t) {
            return decodeURIComponent(
              atob(t)
                .split('')
                .map(function (t) {
                  return '%' + ('00' + t.charCodeAt(0).toString(16)).slice(-2)
                })
                .join('')
            )
          }),
          (t.isValidUrl = function (t) {
            return new RegExp(
              '^(https?:\\/\\/)((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$',
              'i'
            ).test(t)
          }),
          t
        )
      })(),
      r = o(2),
      c = (function () {
        function t(t) {
          ;(this.ccpaOptOut = t),
            (this.userLang = 'en'),
            this.initAvailableLanguages(),
            this.initDefaultTranslations(),
            this.detectUserLanguage()
        }
        return (
          (t.prototype.detectUserLanguage = function () {
            var t = 'en'
            if (
              void 0 !==
              (t =
                void 0 !== navigator.languages
                  ? navigator.languages[0]
                  : navigator.language)
            ) {
              if (t.indexOf('-') > 0) {
                var e = t.split('-')
                t = e[0]
              }
              this.ccpaOptOut.log(
                '[i18n] Detected user default language: ' + t,
                'info'
              )
            } else t = this.ccpaOptOut.ownerSiteLanguage
            var o = t.toLowerCase.toString()
            this.availableTranslations[o]
              ? (this.userLang = o)
              : this.availableTranslations[this.ccpaOptOut.ownerSiteLanguage]
              ? (this.userLang = this.ccpaOptOut.ownerSiteLanguage)
              : (this.userLang = 'en')
          }),
          (t.prototype.initDefaultTranslations = function () {
            ;(this.availableTranslations = { en: r }),
              this.ccpaOptOut.log(
                '[i18n] Default translations initialized',
                'info'
              )
          }),
          (t.prototype.initAvailableLanguages = function () {
            ;(this.availableLanguages = [{ value: 'en', title: 'English' }]),
              this.ccpaOptOut.log(
                '[i18n] Default languages initialized',
                'info'
              )
          }),
          (t.prototype.$t = function (t, e, o) {
            void 0 === o && (o = null)
            var n = this.availableTranslations[this.userLang][t][e]
            return (
              'string' == typeof o
                ? (n = n.replace('%s', o))
                : Array.isArray(o) &&
                  o.map(function (t, e) {
                    var a = o[e]
                    n = n.replace('%s', a)
                  }),
              n || ''
            )
          }),
          t
        )
      })(),
      p = function () {
        ;(this.dialogShown = a.registerEvent('ccpa_opt_out_dialogShown')),
          (this.optoutToggleOn = a.registerEvent(
            'ccpa_opt_out_optoutToggleOn'
          )),
          (this.optoutToggleOff = a.registerEvent(
            'ccpa_opt_out_optoutToggleOff'
          )),
          (this.bannerSaveClick = a.registerEvent(
            'ccpa_opt_out_bannerSaveClick'
          )),
          (this.bannerCloseClick = a.registerEvent(
            'ccpa_opt_out_bannerCloseClick'
          ))
      },
      _ = (function () {
        function t(t) {
          ;(this.ccpaOptOut = t),
            this.ccpa_opt_out_dialogShown(),
            this.ccpa_opt_out_optoutToggleOn(),
            this.ccpa_opt_out_optoutToggleOff(),
            this.ccpa_opt_out_bannerSaveClick(),
            this.ccpa_opt_out_bannerCloseClick()
        }
        return (
          (t.prototype.ccpa_opt_out_dialogShown = function () {
            var t = this
            window.addEventListener('ccpa_opt_out_dialogShown', function () {
              t.ccpaOptOut.log('ccpa_opt_out_dialogShown triggered', 'event')
            })
          }),
          (t.prototype.ccpa_opt_out_optoutToggleOn = function () {
            var t = this
            window.addEventListener(
              'ccpa_opt_out_optoutToggleOn',
              function (e) {
                t.ccpaOptOut.log(
                  'ccpa_opt_out_optoutToggleOn triggered',
                  'event'
                ),
                  t.ccpaOptOut.ccpaBanner.refreshBanner()
              }
            )
          }),
          (t.prototype.ccpa_opt_out_optoutToggleOff = function () {
            var t = this
            window.addEventListener(
              'ccpa_opt_out_optoutToggleOff',
              function (e) {
                t.ccpaOptOut.log(
                  'ccpa_opt_out_optoutToggleOff triggered',
                  'event'
                ),
                  t.ccpaOptOut.ccpaBanner.refreshBanner()
              }
            )
          }),
          (t.prototype.ccpa_opt_out_bannerSaveClick = function () {
            var t = this
            window.addEventListener(
              'ccpa_opt_out_bannerSaveClick',
              function (e) {
                t.ccpaOptOut.log(
                  'ccpa_opt_out_bannerSaveClick triggered',
                  'event'
                ),
                  t.ccpaOptOut.userConsent.markUserOption(
                    t.ccpaOptOut.userOptedOut
                  ),
                  t.ccpaOptOut.javascriptItems.loadAcceptedScripts(),
                  t.ccpaOptOut.ccpaBanner.closeBanner()
              }
            )
          }),
          (t.prototype.ccpa_opt_out_bannerCloseClick = function () {
            var t = this
            window.addEventListener(
              'ccpa_opt_out_bannerCloseClick',
              function (e) {
                t.ccpaOptOut.log(
                  'ccpa_opt_out_bannerCloseClick triggered',
                  'event'
                ),
                  t.ccpaOptOut.ccpaBanner.closeBanner()
              }
            )
          }),
          t
        )
      })(),
      i = (function () {
        function t(t) {
          ;(this.userSavedPreferenceCookieName =
            'ccpa_opt_out_cookie_preference'),
            (this.userOptedOutCookieName = 'ccpa_opt_out_cookie_opted_out'),
            (this.ccpaOptOut = t),
            this.ccpaOptOut.log('UserConsent initialized.', 'info'),
            this.checkIfUserAccepted()
        }
        return (
          (t.prototype.checkIfUserAccepted = function () {
            var t = a.getCookie(this.userOptedOutCookieName)
            ;(this.ccpaOptOut.userOptedOut = 'true' === t),
              this.ccpaOptOut.log(
                'Read user CCPA opt-out preference from cookies (if available)',
                'info'
              )
          }),
          (t.prototype.checkIfUserSavedPreferences = function () {
            return 'true' === a.getCookie(this.userSavedPreferenceCookieName)
          }),
          (t.prototype.markUserOption = function (t) {
            ;(this.ccpaOptOut.userOptedOut = t),
              !1 === this.ccpaOptOut.isDemo &&
                (a.setCookie(this.userOptedOutCookieName, t.toString()),
                a.setCookie(this.userSavedPreferenceCookieName, 'true'),
                this.ccpaOptOut.log(
                  'Saved user CCPA opt-out preference in cookies',
                  'info'
                ))
          }),
          t
        )
      })(),
      u = (function () {
        function t(t) {
          ;(this.scripts = {}),
            (this.ccpaOptOut = t),
            this.ccpaOptOut.log('Javascript items initialized.', 'info'),
            this.readScripts()
        }
        return (
          (t.prototype.readScripts = function () {
            var t = document.querySelectorAll('script[type="text/plain"]')
            for (var e in t) {
              var o = t[e]
              'object' == typeof o && this._noticeScriptIfValid(o)
            }
          }),
          (t.prototype._noticeScriptIfValid = function (t) {
            var e = t.getAttribute('ccpa-opt-out')
            !0 === a.searchObjectsArray(this.ccpaOptOut.scriptLevels, 'id', e)
              ? (this.ccpaOptOut.log(
                  'Javascript with valid cookie consent found',
                  'info'
                ),
                this.ccpaOptOut.log(t, 'info'),
                void 0 === this.scripts[e] && (this.scripts[e] = []),
                this.scripts[e].push(t))
              : this.ccpaOptOut.log(
                  'Invalid script level for javascript script: ' + e,
                  'warning'
                )
          }),
          (t.prototype.loadAcceptedScripts = function () {
            for (var t in this.ccpaOptOut.scriptLevels) {
              var e = this.ccpaOptOut.scriptLevels[t].id
              !1 === this.ccpaOptOut.userOptedOut &&
                this.enableScriptsByLevel(e)
            }
          }),
          (t.prototype.enableScriptsByLevel = function (t) {
            for (var e in this.scripts[t])
              try {
                var o = this.scripts[t][e],
                  n = document.createElement('script')
                n.setAttribute('type', 'text/javascript'),
                  n.setAttribute(
                    'initial-ccpa-opt-out',
                    o.getAttribute('ccpa-opt-out')
                  ),
                  null !== o.getAttribute('src') &&
                    n.setAttribute('src', o.getAttribute('src')),
                  (n.text = o.innerHTML),
                  a.appendChild('head', n),
                  o.parentNode.removeChild(o),
                  delete this.scripts[t][e]
              } catch (t) {
                this.ccpaOptOut.log(
                  'Got an error while trying to activate a script template, message: ' +
                    t.message.toString(),
                  'log'
                )
              }
          }),
          t
        )
      })(),
      s = (function () {
        function t(t) {
          ;(this.ccpaOptOut = t),
            this.ccpaOptOut.log('Banner initialized.', 'info'),
            this.ccpaOptOut.loadsOnPageLoadForNewUsers &&
              !1 ===
                this.ccpaOptOut.userConsent.checkIfUserSavedPreferences() &&
              this.createBanner(),
            this.listenForChangeSettingsClick()
        }
        return (
          (t.prototype.listenForChangeSettingsClick = function () {
            var t = this
            if (t.ccpaOptOut.changeSettingsSelector)
              try {
                document.querySelector(
                  t.ccpaOptOut.changeSettingsSelector
                ).onclick = function () {
                  t.refreshBanner()
                }
              } catch (t) {}
          }),
          (t.prototype.getBannerContent = function () {
            var t = this,
              e = document.createElement('div')
            e.classList.add('ccpa_opt_out_banner'),
              'top' === t.ccpaOptOut.userBannerStyle
                ? e.classList.add('ccpa_opt_out_banner_style-top')
                : 'bottom' === t.ccpaOptOut.userBannerStyle
                ? e.classList.add('ccpa_opt_out_banner_style-bottom')
                : 'notice' === t.ccpaOptOut.userBannerStyle &&
                  e.classList.add('ccpa_opt_out_banner-notice'),
              e.classList.add('ccpa_opt_out_reset'),
              'light' === t.ccpaOptOut.userBannerColorPalette
                ? e.classList.add('ccpa_opt_out_banner_color_palette-light')
                : 'dark' === t.ccpaOptOut.userBannerColorPalette &&
                  e.classList.add('ccpa_opt_out_banner_color_palette-dark')
            var o = document.createElement('div')
            o.classList.add('ccpa_opt_out_banner-title'),
              (o.innerHTML = this.ccpaOptOut.userBannerTitle)
            var n = document.createElement('div')
            n.classList.add('ccpa_opt_out_banner-content'),
              (n.innerHTML = this.ccpaOptOut.userBannerDescription)
            var r = document.createElement('div')
            r.classList.add('ccpa_opt_out_banner-setting')
            var c = document.createElement('div')
            c.classList.add('ccpa_opt_out_banner-setting-text'),
              (c.innerText = this.ccpaOptOut.userBannerCategoryLabel)
            var p = document.createElement('div')
            p.classList.add('ccpa_opt_out_banner-toggler')
            var _ = document.createElement('input')
            _.classList.add('ccpa_opt_out_banner-toggler-checkbox'),
              _.setAttribute('name', 'toggle'),
              _.setAttribute('type', 'checkbox'),
              _.setAttribute('value', '1'),
              _.setAttribute('id', 'toggle-button'),
              t.ccpaOptOut.userOptedOut
                ? _.setAttribute('checked', 'true')
                : _.removeAttribute('checked'),
              _.addEventListener('change', function (e) {
                var o = e.target
                ;(t.ccpaOptOut.userOptedOut = o.checked),
                  setTimeout(function () {
                    o.checked
                      ? document.dispatchEvent(
                          t.ccpaOptOut.events.optoutToggleOn
                        )
                      : document.dispatchEvent(
                          t.ccpaOptOut.events.optoutToggleOff
                        )
                  }, 300)
              })
            var i = document.createElement('label')
            i.classList.add('ccpa_opt_out_banner-toggler-checkbox-status'),
              i.setAttribute('for', 'toggle-button'),
              t.ccpaOptOut.userOptedOut
                ? (i.innerHTML = t.ccpaOptOut.userBannerCategoryStatusOptedOut)
                : (i.innerHTML =
                    t.ccpaOptOut.userBannerCategoryStatusNotOptedOut),
              a.appendChild(p, _),
              a.appendChild(p, i),
              a.appendChild(r, c),
              a.appendChild(r, p)
            var u = document.createElement('div')
            u.classList.add('ccpa_opt_out_banner-footer')
            var s = document.createElement('div')
            s.classList.add('ccpa_opt_out_banner-footer-buttons')
            var l = document.createElement('button')
            l.setAttribute('id', 'ccpa_opt_out_banner-button-save'),
              (l.innerText = t.ccpaOptOut.userBannerConfirmationButton),
              l.addEventListener('click', function () {
                document.dispatchEvent(t.ccpaOptOut.events.bannerSaveClick)
              })
            var b = document.createElement('button')
            b.setAttribute('id', 'ccpa_opt_out_banner-button-close'),
              (b.innerText = t.ccpaOptOut.userBannerCloseButton),
              b.addEventListener('click', function () {
                document.dispatchEvent(t.ccpaOptOut.events.bannerCloseClick)
              }),
              a.appendChild(s, l),
              a.appendChild(s, b)
            var d = document.createElement('div')
            return (
              d.classList.add('ccpa_opt_out_banner-footer-copyright'),
              (d.innerHTML =
                'By <a href="https://www.termsfeed.com/ccpa-opt-out/" target="_blank">TermsFeed</a>'),
              a.appendChild(u, s),
              a.appendChild(u, d),
              a.appendChild(e, o),
              a.appendChild(e, n),
              a.appendChild(e, r),
              a.appendChild(e, u),
              e
            )
          }),
          (t.prototype.createBanner = function () {
            ;(this.bannerContent = this.getBannerContent()),
              a.appendChild('body', this.bannerContent),
              this.ccpaOptOut.log('Banner created', 'info')
          }),
          (t.prototype.closeBanner = function () {
            try {
              this.bannerContent.parentNode.removeChild(this.bannerContent),
                this.ccpaOptOut.log('Banner closed', 'info')
            } catch (t) {}
          }),
          (t.prototype.refreshBanner = function () {
            this.ccpaOptOut.log('Refresh banner', 'info'),
              this.closeBanner(),
              this.createBanner()
          }),
          t
        )
      })(),
      l = (function () {
        function t(t) {
          ;(this.scriptLevels = [{ id: 'personalized-ads' }]),
            (this.userOptedOut = !1),
            (this.i18n = new c(this)),
            (this.userBannerStyle = t.banner_style || 'top'),
            (this.userBannerColorPalette = t.banner_color_palette || 'light'),
            (this.userBannerTitle =
              t.banner_title || this.i18n.$t('banner', 'title')),
            (this.userBannerDescription =
              t.banner_description || this.i18n.$t('banner', 'description')),
            (this.userBannerCategoryLabel =
              t.banner_category_label ||
              this.i18n.$t('banner', 'category_label')),
            (this.userBannerCategoryStatusOptedOut =
              t.banner_category_status_opted_out ||
              this.i18n.$t('banner', 'category_status_opted_out')),
            (this.userBannerCategoryStatusNotOptedOut =
              t.banner_category_status_not_opted_out ||
              this.i18n.$t('banner', 'category_status_not_opted_out')),
            (this.userBannerConfirmationButton =
              t.banner_confirmation_button ||
              this.i18n.$t('banner', 'confirmation_button')),
            (this.userBannerCloseButton =
              t.banner_close_button || this.i18n.$t('banner', 'close_button')),
            (this.ownerSiteLanguage = 'en'),
            (this.userLanguageStrings = {}),
            (this.isDemo = 'true' == t.demo),
            (this.loadsOnPageLoadForNewUsers =
              'true' == t.loads_on_page_load_for_new_users),
            (this.debug = 'true' == t.debug),
            (this.userConsent = new i(this)),
            (this.javascriptItems = new u(this)),
            (this.events = new p()),
            (this.eventsListeners = new _(this)),
            (this.changeSettingsSelector =
              t.change_settings_selector || void 0),
            (this.ccpaBanner = new s(this)),
            this.javascriptItems.loadAcceptedScripts()
        }
        return (
          (t.prototype.log = function (t, e, o) {
            void 0 === o && (o = 'log'),
              !0 === this.debug &&
                ('log' === o || 'table' === o) &&
                console.log('[' + e + ']', t)
          }),
          t
        )
      })(),
      b = function (t) {
        return (n = new l(t))
      }
  },
])
