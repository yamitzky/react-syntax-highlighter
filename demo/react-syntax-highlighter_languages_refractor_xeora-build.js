(window.webpackJsonp = window.webpackJsonp || []).push([
  [148],
  {
    728: function(n, t, a) {
      'use strict';
      function e(n) {
        !(function(n) {
          (n.languages.xeora = n.languages.extend('markup', {
            constant: {
              pattern: /\$(?:DomainContents|PageRenderDuration)\$/,
              inside: { punctuation: { pattern: /\$/ } }
            },
            variable: {
              pattern: /\$@?(?:#+|[-+*~=^])?[\w.]+\$/,
              inside: {
                punctuation: { pattern: /[$.]/ },
                operator: { pattern: /#+|[-+*~=^@]/ }
              }
            },
            'function-inline': {
              pattern: /\$F:[-\w.]+\?[-\w.]+(?:,(?:\|?(?:[-#.^+*~]*(?:[\w+][^$]*)|=(?:[\S+][^$]*)|@[-#]*(?:\w+.)[\w+.]+)?)*)?\$/,
              inside: {
                variable: {
                  pattern: /(?:[,|])@?(?:#+|[-+*~=^])?[\w.]+/,
                  inside: {
                    punctuation: { pattern: /[,.|]/ },
                    operator: { pattern: /#+|[-+*~=^@]/ }
                  }
                },
                punctuation: { pattern: /\$\w:|[$:?.,|]/ }
              },
              alias: 'function'
            },
            'function-block': {
              pattern: /\$XF:{[-\w.]+\?[-\w.]+(?:,(?:\|?(?:[-#.^+*~]*(?:[\w+][^$]*)|=(?:[\S+][^$]*)|@[-#]*(?:\w+.)[\w+.]+)?)*)?}:XF\$/,
              inside: { punctuation: { pattern: /[$:{}?.,|]/ } },
              alias: 'function'
            },
            'directive-inline': {
              pattern: /\$\w(?:#\d+\+?)?(?:\[[-\w.]+])?:[-\/\w.]+\$/,
              inside: {
                punctuation: {
                  pattern: /\$(?:\w:|C(?:\[|#\d))?|[:{[\]]/,
                  inside: { tag: { pattern: /#\d/ } }
                }
              },
              alias: 'function'
            },
            'directive-block-open': {
              pattern: /\$\w+:{|\$\w(?:#\d+\+?)?(?:\[[-\w.]+])?:[-\w.]+:{(![A-Z]+)?/,
              inside: {
                punctuation: {
                  pattern: /\$(?:\w:|C(?:\[|#\d))?|[:{[\]]/,
                  inside: { tag: { pattern: /#\d/ } }
                },
                attribute: {
                  pattern: /![A-Z]+$/,
                  inside: { punctuation: { pattern: /!/ } },
                  alias: 'keyword'
                }
              },
              alias: 'function'
            },
            'directive-block-separator': {
              pattern: /}:[-\w.]+:{/,
              inside: { punctuation: { pattern: /[:{}]/ } },
              alias: 'function'
            },
            'directive-block-close': {
              pattern: /}:[-\w.]+\$/,
              inside: { punctuation: { pattern: /[:{}$]/ } },
              alias: 'function'
            }
          })),
            n.languages.insertBefore(
              'inside',
              'punctuation',
              {
                variable: n.languages.xeora['function-inline'].inside.variable
              },
              n.languages.xeora['function-block']
            ),
            (n.languages.xeoracube = n.languages.xeora);
        })(n);
      }
      (n.exports = e), (e.displayName = 'xeora'), (e.aliases = ['xeoracube']);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_xeora-build.js.map
