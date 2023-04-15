module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
    extends: [
      'eslint:recommended',
      "plugin:react/recommended",
      'prettier',
    ],
  };
  