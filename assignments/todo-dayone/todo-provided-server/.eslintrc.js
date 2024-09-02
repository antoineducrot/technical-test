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
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',

    'import/exports-last': 'error',
    'import/no-default-export': 'error'
  },

  overrides: [
    {
      files: ['lint-staged.config.mjs'],
      rules: {
        'import/no-default-export': 'off'
      }
    }
  ],

  ignorePatterns: ['dist/', 'node_modules/']
}
