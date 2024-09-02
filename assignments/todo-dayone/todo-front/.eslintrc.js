/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,

  plugins: [
    '@typescript-eslint/eslint-plugin',
    'eslint-plugin-import',
    'eslint-plugin-simple-import-sort'
  ],

  extends: [
    'eslint-config-next',
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

  ignorePatterns: ['node_modules/', 'dist/'],

  overrides: [
    {
      files: [
        'layout.tsx',
        'page.tsx',
        'error.tsx',
        'not-found.tsx',
        'global-error.tsx',
        'next.config.mjs',
        'tailwind.config.ts',
        'lint-staged.config.mjs',
        'i18n.ts'
      ],
      rules: {
        'import/no-default-export': 'off'
      }
    }
  ]
}
