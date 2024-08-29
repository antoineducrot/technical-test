/** @type {import("eslint").Linter.Config} */
module.exports = {
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'eslint-plugin-import',
    'eslint-plugin-simple-import-sort'
  ],

  extends: [
    'xo',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],

  rules: {
    'new-cap': 'off',

    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',

    'import/exports-last': 'error',
    'import/no-default-export': 'error',

    '@typescript-eslint/no-unused-vars': 'error',

    'no-unused-vars': 'error',

    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
        custom: {
          regex: '^I?[A-Z][a-z]*([A-Z][a-z]*)*$',
          match: true
        }
      }
    ]
  },

  overrides: [
    {
      files: ['*.test.(t|j)s'],

      env: {
        jest: true
      }
    }
  ],

  ignorePatterns: ['dist/', 'node_modules/']
}
