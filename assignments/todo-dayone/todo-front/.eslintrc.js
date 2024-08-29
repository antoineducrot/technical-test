module.exports = {
  root: true,

  extends: ['@repo/eslint-config-default', 'eslint-config-next'],

  ignorePatterns: ['node_modules/', '.eslintrc.js'],

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
        'i18n.ts'
      ],
      rules: {
        'import/no-default-export': 'off'
      }
    }
  ]
}
