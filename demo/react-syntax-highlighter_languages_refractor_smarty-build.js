(window.webpackJsonp = window.webpackJsonp || []).push([
  [128],
  {
    710: function(e, t, n) {
      'use strict';
      function a(e) {
        !(function(e) {
          (e.languages.smarty = {
            comment: /\{\*[\s\S]*?\*\}/,
            delimiter: { pattern: /^\{|\}$/i, alias: 'punctuation' },
            string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
            number: /\b0x[\dA-Fa-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][-+]?\d+)?/,
            variable: [
              /\$(?!\d)\w+/,
              /#(?!\d)\w+#/,
              { pattern: /(\.|->)(?!\d)\w+/, lookbehind: !0 },
              { pattern: /(\[)(?!\d)\w+(?=\])/, lookbehind: !0 }
            ],
            function: [
              { pattern: /(\|\s*)@?(?!\d)\w+/, lookbehind: !0 },
              /^\/?(?!\d)\w+/,
              /(?!\d)\w+(?=\()/
            ],
            'attr-name': {
              pattern: /\w+\s*=\s*(?:(?!\d)\w+)?/,
              inside: {
                variable: { pattern: /(=\s*)(?!\d)\w+/, lookbehind: !0 },
                operator: /=/
              }
            },
            punctuation: [/[\[\]().,:`]|->/],
            operator: [
              /[+\-*\/%]|==?=?|[!<>]=?|&&|\|\|?/,
              /\bis\s+(?:not\s+)?(?:div|even|odd)(?:\s+by)?\b/,
              /\b(?:eq|neq?|gt|lt|gt?e|lt?e|not|mod|or|and)\b/
            ],
            keyword: /\b(?:false|off|on|no|true|yes)\b/
          }),
            e.languages.insertBefore('smarty', 'tag', {
              'smarty-comment': {
                pattern: /\{\*[\s\S]*?\*\}/,
                alias: ['smarty', 'comment']
              }
            }),
            e.hooks.add('before-tokenize', function(t) {
              var n = !1;
              e.languages['markup-templating'].buildPlaceholders(
                t,
                'smarty',
                /\{\*[\s\S]*?\*\}|\{[\s\S]+?\}/g,
                function(e) {
                  return (
                    '{/literal}' === e && (n = !1),
                    !n && ('{literal}' === e && (n = !0), !0)
                  );
                }
              );
            }),
            e.hooks.add('after-tokenize', function(t) {
              e.languages['markup-templating'].tokenizePlaceholders(
                t,
                'smarty'
              );
            });
        })(e);
      }
      (e.exports = a), (a.displayName = 'smarty'), (a.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_smarty-build.js.map
