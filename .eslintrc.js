module.exports = {
  root: true,
  extends: ['airbnb', 'airbnb/hooks', 'plugin:@typescript-eslint/recommended', 'prettier', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  // Ref: https://stackoverflow.com/a/55280867
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        trailingComma: 'all',
        printWidth: 150,
        bracketSpacing: true,
        arrowParens: 'avoid',
      },
    ],
    'import/extensions': ['off'],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/require-default-props': [2, { ignoreFunctionalComponents: true }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'linebreak-style': 'off',
    'object-curly-newline': 'off',
    'import/no-unresolved': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
};
