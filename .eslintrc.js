module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'arrow-parens': 0,
    'implicit-arrow-linebreak': 0,
    'no-underscore-dangle': [
      2,
      {
        allow: ['_id'],
      },
    ],
    semi: 0,
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', 'ts', 'tsx'],
      },
    ],
    'react/jsx-one-expression-per-line': [2, { allow: 'literal' }],
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
  },
}
