module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  extends: 'airbnb',
  rules: {
    'max-len': 'warn',
    'no-unused-expressions': 'warn',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'warn',
    'jsx-a11y/no-static-element-interactions': 'warn',
  },
};
