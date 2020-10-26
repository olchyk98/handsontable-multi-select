module.exports = {
  env: {
    browser: true,
  },
  parser: 'babel-eslint',
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
  },
  rules: {
    'array-bracket-spacing': [ 'error', 'always' ],
    'arrow-parens': [ 'error', 'always' ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'func-names': 0,
    'max-len': 0,
    'no-multi-assign': 0,
    'no-return-assign': 0,
    'function-paren-newline': 'off',
    'global-require': 0,
    'class-methods-use-this': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': [ 'error' ],
    'no-nested-ternary': 'off',
    'no-underscore-dangle': 0,
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'all',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: false,
      },
    ],
    'space-before-function-paren': [ 'error', 'always' ],
    camelcase: [ 'error' ],
    semi: [ 'error', 'never' ],
  },
}