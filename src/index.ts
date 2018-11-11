module.exports = {
  extends: [
    'tslint:recommended',
    'tslint:latest',
    'tslint-react'
  ],
  rules: {
    'align': [
      true,
      'parameters',
      'arguments',
      'statements'
    ],
    'arrow-parens': [true, 'ban-single-arg-parens'],
    'ban': false,
    'class-name': true,
    'comment-format': [
      true,
      'check-space'
    ],
    'curly': [true, 'ignore-same-line'],
    'eofline': true,
    'forin': true,
    'indent': [ true, 'spaces', 2],
    'interface-name': [true, 'always-prefix'],
    'jsdoc-format': true,
    'jsx-boolean-value': false,
    'jsx-no-lambda': false,
    'jsx-no-multiline-js': false,
    'jsx-wrap-multiline': false,
    'label-position': true,
    'max-classes-per-file': [true, 2],
    'max-line-length': [ true, 120 ],
    'member-access': [false],
    'member-ordering': [
      true,
      'public-before-private',
      'static-before-instance',
      'variables-before-functions'
    ],
    'no-any': true,
    'no-arg': true,
    'no-bitwise': true,
    'no-consecutive-blank-lines': true,
    'no-console': [
      true,
      'log',
      // "error", // # allows console errors
      'debug',
      'info',
      'time',
      'timeEnd',
      'trace'
    ],
    'no-construct': true,
    'no-debugger': true,
    'no-duplicate-variable': true,
    'no-empty': true,
    'no-empty-interface': false,
    'no-eval': true,
    'no-implicit-dependencies': [true, 'dev'],
    'no-inferrable-types': [true, 'ignore-params'], // saves from overtyping
    // "no-import-side-effect": true, // will require an ignore every time css is imported
    'no-shadowed-variable': true,
    'no-string-literal': true,
    'no-submodule-imports': [
      true,
      'colors',
      'history',
      'react-router-dom',
      'material-ui',
      'material-ui-icons',
      'typeface-roboto',
      'normalize.css'
    ],
    'no-switch-case-fall-through': true,
    'no-this-assignment': [true, {
      'allow-destructuring': true,
      'allowed-names': ['^self$', '^record$', '^instance$']}
    ],
    'no-trailing-whitespace': true,
    'no-unused-expression': [true, 'allow-fast-null-checks'],
    //  DEPRRECATED 'no-unused-variable': [true, {'ignore-pattern': '/(^_)|(^err)/'}],
    'no-use-before-declare': true,
    'no-var-requires': true,
    'one-line': [
      true,
      'check-catch',
      'check-else',
      'check-open-brace',
      'check-whitespace'
    ],
    'only-arrow-functions': [true, 'allow-declarations', 'allow-named-functions'],
    'prefer-for-of': true,
    'quotemark': [true, 'single', 'jsx-double', 'avoid-escape'],
    'radix': true,
    'restrict-plus-operands': true,
    'semicolon': [true, 'never'],
    'switch-default': true,
    'trailing-comma': [true],
    'triple-equals': [true, 'allow-null-check' ],
    'typedef': [
      true,
      'parameter',
      'property-declaration'
    ],
    'typedef-whitespace': [
      true,
      {
        'call-signature': 'nospace',
        'index-signature': 'nospace',
        'parameter': 'nospace',
        'property-declaration': 'nospace',
        'variable-declaration': 'nospace'
      }
    ],
    'variable-name': [
      true,
      'ban-keywords',
      'check-format',
      'allow-leading-underscore',
      'allow-snake-case',
      'allow-pascal-case'
    ],
    'whitespace': [
      true,
      'check-branch',
      'check-decl',
      'check-module',
      'check-operator',
      'check-separator',
      'check-type',
      'check-typecast'
    ]
  }
}
