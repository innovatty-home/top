;(function(t) {
  function e(e) {
    for (
      var s, r, l = e[0], o = e[1], u = e[2], c = 0, v = [];
      c < l.length;
      c++
    )
      (r = l[c]),
        Object.prototype.hasOwnProperty.call(i, r) && i[r] && v.push(i[r][0]),
        (i[r] = 0)
    for (s in o) Object.prototype.hasOwnProperty.call(o, s) && (t[s] = o[s])
    A && A(e)
    while (v.length) v.shift()()
    return n.push.apply(n, u || []), a()
  }
  function a() {
    for (var t, e = 0; e < n.length; e++) {
      for (var a = n[e], s = !0, r = 1; r < a.length; r++) {
        var o = a[r]
        0 !== i[o] && (s = !1)
      }
      s && (n.splice(e--, 1), (t = l((l.s = a[0]))))
    }
    return t
  }
  var s = {},
    i = { app: 0 },
    n = []
  function r(t) {
    return (
      l.p +
      'js/' +
      ({ about: 'about' }[t] || t) +
      '.' +
      { about: '2a1091bc' }[t] +
      '.js'
    )
  }
  function l(e) {
    if (s[e]) return s[e].exports
    var a = (s[e] = { i: e, l: !1, exports: {} })
    return t[e].call(a.exports, a, a.exports, l), (a.l = !0), a.exports
  }
  ;(l.e = function(t) {
    var e = [],
      a = i[t]
    if (0 !== a)
      if (a) e.push(a[2])
      else {
        var s = new Promise(function(e, s) {
          a = i[t] = [e, s]
        })
        e.push((a[2] = s))
        var n,
          o = document.createElement('script')
        ;(o.charset = 'utf-8'),
          (o.timeout = 120),
          l.nc && o.setAttribute('nonce', l.nc),
          (o.src = r(t))
        var u = new Error()
        n = function(e) {
          ;(o.onerror = o.onload = null), clearTimeout(c)
          var a = i[t]
          if (0 !== a) {
            if (a) {
              var s = e && ('load' === e.type ? 'missing' : e.type),
                n = e && e.target && e.target.src
              ;(u.message =
                'Loading chunk ' + t + ' failed.\n(' + s + ': ' + n + ')'),
                (u.name = 'ChunkLoadError'),
                (u.type = s),
                (u.request = n),
                a[1](u)
            }
            i[t] = void 0
          }
        }
        var c = setTimeout(function() {
          n({ type: 'timeout', target: o })
        }, 12e4)
        ;(o.onerror = o.onload = n), document.head.appendChild(o)
      }
    return Promise.all(e)
  }),
    (l.m = t),
    (l.c = s),
    (l.d = function(t, e, a) {
      l.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a })
    }),
    (l.r = function(t) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 })
    }),
    (l.t = function(t, e) {
      if ((1 & e && (t = l(t)), 8 & e)) return t
      if (4 & e && 'object' === typeof t && t && t.__esModule) return t
      var a = Object.create(null)
      if (
        (l.r(a),
        Object.defineProperty(a, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var s in t)
          l.d(
            a,
            s,
            function(e) {
              return t[e]
            }.bind(null, s)
          )
      return a
    }),
    (l.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t['default']
            }
          : function() {
              return t
            }
      return l.d(e, 'a', e), e
    }),
    (l.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }),
    (l.p = ''),
    (l.oe = function(t) {
      throw (console.error(t), t)
    })
  var o = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    u = o.push.bind(o)
  ;(o.push = e), (o = o.slice())
  for (var c = 0; c < o.length; c++) e(o[c])
  var A = u
  n.push([0, 'chunk-vendors']), a()
})({
  0: function(t, e, a) {
    t.exports = a('cd49')
  },
  '40d1': function(t, e) {
    t.exports =
      'data:image/png;base64,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'
  },
  6310: function(t, e, a) {
    t.exports = a.p + 'img/section.f736edc0.jpg'
  },
  '7ae3': function(t, e, a) {
    t.exports = a.p + 'img/hero.ffec4320.jpeg'
  },
  cd49: function(t, e, a) {
    'use strict'
    a.r(e)
    a('e260'), a('e6cf'), a('cca6'), a('a79d')
    var s = a('2b0e'),
      i = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e
        return a('v-app', [a('v-content', [a('HelloWorld')], 1)], 1)
      },
      n = [],
      r = function() {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e
        return s(
          'v-app',
          { attrs: { light: '' } },
          [
            s(
              'v-content',
              [
                s(
                  'section',
                  [
                    s(
                      'v-parallax',
                      { attrs: { src: a('7ae3'), height: '600' } },
                      [
                        s(
                          'v-layout',
                          {
                            staticClass: 'white--text',
                            attrs: {
                              column: '',
                              'align-center': '',
                              'justify-center': ''
                            }
                          },
                          [
                            s('img', {
                              attrs: {
                                src: a('40d1'),
                                alt: 'Vuetify.js',
                                height: '200'
                              }
                            }),
                            s(
                              'h1',
                              {
                                staticClass:
                                  'white--text mb-2 display-1 text-center'
                              },
                              [t._v(' Parallax Template ')]
                            ),
                            s(
                              'div',
                              { staticClass: 'subheading mb-4 text-center' },
                              [t._v('Powered by Vuetify')]
                            ),
                            s(
                              'v-btn',
                              {
                                staticClass: 'mt-12',
                                attrs: {
                                  color: 'blue lighten-2',
                                  dark: '',
                                  large: '',
                                  href: '/pre-made-themes'
                                }
                              },
                              [t._v(' Get Started ')]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                s(
                  'section',
                  [
                    s(
                      'v-layout',
                      {
                        staticClass: 'my-12',
                        attrs: { column: '', wrap: '', 'align-center': '' }
                      },
                      [
                        s(
                          'v-flex',
                          { staticClass: 'my-4', attrs: { xs12: '', sm4: '' } },
                          [
                            s('div', { staticClass: 'text-center' }, [
                              s('h2', { staticClass: 'headline' }, [
                                t._v('The best way to start developing')
                              ]),
                              s('span', { staticClass: 'subheading' }, [
                                t._v(' Cras facilisis mi vitae nunc ')
                              ])
                            ])
                          ]
                        ),
                        s(
                          'v-flex',
                          { attrs: { xs12: '' } },
                          [
                            s(
                              'v-container',
                              { attrs: { 'grid-list-xl': '' } },
                              [
                                s(
                                  'v-layout',
                                  {
                                    attrs: {
                                      row: '',
                                      wrap: '',
                                      'align-center': ''
                                    }
                                  },
                                  [
                                    s(
                                      'v-flex',
                                      { attrs: { xs12: '', md4: '' } },
                                      [
                                        s(
                                          'v-card',
                                          {
                                            staticClass: 'transparent',
                                            attrs: { flat: '' }
                                          },
                                          [
                                            s(
                                              'v-card-text',
                                              { staticClass: 'text-center' },
                                              [
                                                s(
                                                  'v-icon',
                                                  {
                                                    staticClass:
                                                      'blue--text text--lighten-2',
                                                    attrs: { 'x-large': '' }
                                                  },
                                                  [t._v('mdi-palette')]
                                                )
                                              ],
                                              1
                                            ),
                                            s(
                                              'v-card-title',
                                              {
                                                staticClass:
                                                  'layout justify-center',
                                                attrs: { 'primary-title': '' }
                                              },
                                              [
                                                s(
                                                  'div',
                                                  {
                                                    staticClass:
                                                      'headline text-center'
                                                  },
                                                  [t._v('Material Design')]
                                                )
                                              ]
                                            ),
                                            s('v-card-text', [
                                              t._v(
                                                ' Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. '
                                              )
                                            ])
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    ),
                                    s(
                                      'v-flex',
                                      { attrs: { xs12: '', md4: '' } },
                                      [
                                        s(
                                          'v-card',
                                          {
                                            staticClass: 'transparent',
                                            attrs: { flat: '' }
                                          },
                                          [
                                            s(
                                              'v-card-text',
                                              { staticClass: 'text-center' },
                                              [
                                                s(
                                                  'v-icon',
                                                  {
                                                    staticClass:
                                                      'blue--text text--lighten-2',
                                                    attrs: { 'x-large': '' }
                                                  },
                                                  [t._v('mdi-flash')]
                                                )
                                              ],
                                              1
                                            ),
                                            s(
                                              'v-card-title',
                                              {
                                                staticClass:
                                                  'layout justify-center',
                                                attrs: { 'primary-title': '' }
                                              },
                                              [
                                                s(
                                                  'div',
                                                  { staticClass: 'headline' },
                                                  [t._v('Fast development')]
                                                )
                                              ]
                                            ),
                                            s('v-card-text', [
                                              t._v(
                                                ' Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. '
                                              )
                                            ])
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    ),
                                    s(
                                      'v-flex',
                                      { attrs: { xs12: '', md4: '' } },
                                      [
                                        s(
                                          'v-card',
                                          {
                                            staticClass: 'transparent',
                                            attrs: { flat: '' }
                                          },
                                          [
                                            s(
                                              'v-card-text',
                                              { staticClass: 'text-center' },
                                              [
                                                s(
                                                  'v-icon',
                                                  {
                                                    staticClass:
                                                      'blue--text text--lighten-2',
                                                    attrs: { 'x-large': '' }
                                                  },
                                                  [t._v('mdi-wrench')]
                                                )
                                              ],
                                              1
                                            ),
                                            s(
                                              'v-card-title',
                                              {
                                                staticClass:
                                                  'layout justify-center',
                                                attrs: { 'primary-title': '' }
                                              },
                                              [
                                                s(
                                                  'div',
                                                  {
                                                    staticClass:
                                                      'headline text-center'
                                                  },
                                                  [
                                                    t._v(
                                                      ' Completely Open Sourced '
                                                    )
                                                  ]
                                                )
                                              ]
                                            ),
                                            s('v-card-text', [
                                              t._v(
                                                ' Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. '
                                              )
                                            ])
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                s(
                  'section',
                  [
                    s(
                      'v-parallax',
                      { attrs: { src: a('6310'), height: '380' } },
                      [
                        s(
                          'v-layout',
                          {
                            attrs: {
                              column: '',
                              'align-center': '',
                              'justify-center': ''
                            }
                          },
                          [
                            s(
                              'div',
                              {
                                staticClass:
                                  'headline white--text mb-4 text-center'
                              },
                              [t._v(' Web development has never been easier ')]
                            ),
                            s('em', [
                              t._v('Kick-start your application today')
                            ]),
                            s(
                              'v-btn',
                              {
                                staticClass: 'mt-12',
                                attrs: {
                                  color: 'blue lighten-2',
                                  dark: '',
                                  large: '',
                                  href: '/pre-made-themes'
                                }
                              },
                              [t._v(' Get Started ')]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                s(
                  'section',
                  [
                    s(
                      'v-container',
                      { attrs: { 'grid-list-xl': '' } },
                      [
                        s(
                          'v-layout',
                          {
                            staticClass: 'my-12',
                            attrs: { row: '', wrap: '', 'justify-center': '' }
                          },
                          [
                            s(
                              'v-flex',
                              { attrs: { xs12: '', sm4: '' } },
                              [
                                s(
                                  'v-card',
                                  {
                                    staticClass: 'transparent',
                                    attrs: { flat: '' }
                                  },
                                  [
                                    s(
                                      'v-card-title',
                                      {
                                        staticClass: 'layout justify-center',
                                        attrs: { 'primary-title': '' }
                                      },
                                      [
                                        s('div', { staticClass: 'headline' }, [
                                          t._v('Company info')
                                        ])
                                      ]
                                    ),
                                    s('v-card-text', [
                                      t._v(
                                        ' Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. '
                                      )
                                    ])
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            s(
                              'v-flex',
                              {
                                attrs: { xs12: '', sm4: '', 'offset-sm1': '' }
                              },
                              [
                                s(
                                  'v-card',
                                  {
                                    staticClass: 'transparent',
                                    attrs: { flat: '' }
                                  },
                                  [
                                    s(
                                      'v-card-title',
                                      {
                                        staticClass: 'layout justify-center',
                                        attrs: { 'primary-title': '' }
                                      },
                                      [
                                        s('div', { staticClass: 'headline' }, [
                                          t._v('Contact us')
                                        ])
                                      ]
                                    ),
                                    s('v-card-text', [
                                      t._v(
                                        ' Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. '
                                      )
                                    ]),
                                    s(
                                      'v-list',
                                      { staticClass: 'transparent' },
                                      [
                                        s(
                                          'v-list-item',
                                          [
                                            s(
                                              'v-list-item-action',
                                              [
                                                s(
                                                  'v-icon',
                                                  {
                                                    staticClass:
                                                      'blue--text text--lighten-2'
                                                  },
                                                  [t._v('mdi-phone')]
                                                )
                                              ],
                                              1
                                            ),
                                            s(
                                              'v-list-item-content',
                                              [
                                                s('v-list-item-title', [
                                                  t._v('777-867-5309')
                                                ])
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        ),
                                        s(
                                          'v-list-item',
                                          [
                                            s(
                                              'v-list-item-action',
                                              [
                                                s(
                                                  'v-icon',
                                                  {
                                                    staticClass:
                                                      'blue--text text--lighten-2'
                                                  },
                                                  [t._v('mdi-map-marker')]
                                                )
                                              ],
                                              1
                                            ),
                                            s(
                                              'v-list-item-content',
                                              [
                                                s('v-list-item-title', [
                                                  t._v('Chicago, US')
                                                ])
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        ),
                                        s(
                                          'v-list-item',
                                          [
                                            s(
                                              'v-list-item-action',
                                              [
                                                s(
                                                  'v-icon',
                                                  {
                                                    staticClass:
                                                      'blue--text text--lighten-2'
                                                  },
                                                  [t._v('mdi-email')]
                                                )
                                              ],
                                              1
                                            ),
                                            s(
                                              'v-list-item-content',
                                              [
                                                s('v-list-item-title', [
                                                  t._v('john@vuetifyjs.com')
                                                ])
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                s(
                  'v-footer',
                  { attrs: { color: 'blue darken-2' } },
                  [
                    s(
                      'v-layout',
                      { attrs: { row: '', wrap: '', 'align-center': '' } },
                      [
                        s('v-flex', { attrs: { xs12: '' } }, [
                          s(
                            'div',
                            { staticClass: 'white--text ml-4' },
                            [
                              t._v(' Made with '),
                              s('v-icon', { staticClass: 'red--text' }, [
                                t._v('mdi-heart')
                              ]),
                              t._v(' by '),
                              s(
                                'a',
                                {
                                  staticClass: 'white--text',
                                  attrs: {
                                    href: 'https://vuetifyjs.com',
                                    target: '_blank'
                                  }
                                },
                                [t._v('Vuetify')]
                              ),
                              t._v(' and '),
                              s(
                                'a',
                                {
                                  staticClass: 'white--text',
                                  attrs: { href: 'https://github.com/vwxyzjn' }
                                },
                                [t._v('Costa Huang')]
                              )
                            ],
                            1
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      },
      l = [],
      o = s['a'].extend({
        name: 'HelloWorld',
        data: function() {
          return {}
        }
      }),
      u = o,
      c = a('2877'),
      A = a('6544'),
      v = a.n(A),
      d = a('7496'),
      p = a('8336'),
      m = a('b0af'),
      f = a('99d9'),
      h = a('a523'),
      C = a('a75b'),
      x = a('0e8f'),
      b = a('553a'),
      g = a('132d'),
      y = a('a722'),
      w = a('8860'),
      U = a('da13'),
      j = a('1800'),
      L = a('5d23'),
      V = a('8b9c'),
      W = Object(c['a'])(u, r, l, !1, null, null, null),
      I = W.exports
    v()(W, {
      VApp: d['a'],
      VBtn: p['a'],
      VCard: m['a'],
      VCardText: f['a'],
      VCardTitle: f['b'],
      VContainer: h['a'],
      VContent: C['a'],
      VFlex: x['a'],
      VFooter: b['a'],
      VIcon: g['a'],
      VLayout: y['a'],
      VList: w['a'],
      VListItem: U['a'],
      VListItemAction: j['a'],
      VListItemContent: L['a'],
      VListItemTitle: L['b'],
      VParallax: V['a']
    })
    var E = s['a'].extend({
        name: 'App',
        components: { HelloWorld: I },
        data: function() {
          return {}
        }
      }),
      B = E,
      S = Object(c['a'])(B, i, n, !1, null, null, null),
      q = S.exports
    v()(S, { VApp: d['a'], VContent: C['a'] })
    a('d3b7')
    var Y = a('8c4f'),
      K = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e
        return a('div', { staticClass: 'home' }, [a('HelloWorld')], 1)
      },
      P = [],
      F = { name: 'home', components: { HelloWorld: I } },
      Q = F,
      G = Object(c['a'])(Q, K, P, !1, null, null, null),
      M = G.exports
    s['a'].use(Y['a'])
    var R = [
        { path: '/', name: 'home', component: M },
        {
          path: '/about',
          name: 'about',
          component: function() {
            return a.e('about').then(a.bind(null, 'f820'))
          }
        }
      ],
      k = new Y['a']({ mode: 'history', base: '', routes: R }),
      O = k,
      T = a('2f62')
    s['a'].use(T['a'])
    var Z = new T['a'].Store({
        state: {},
        mutations: {},
        actions: {},
        modules: {}
      }),
      N = a('f309')
    s['a'].use(N['a'])
    var _ = new N['a']({})
    ;(s['a'].config.productionTip = !1),
      new s['a']({
        router: O,
        store: Z,
        vuetify: _,
        render: function(t) {
          return t(q)
        }
      }).$mount('#app')
  }
})
//# sourceMappingURL=app.247555e5.js.map