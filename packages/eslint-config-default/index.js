const { resolve } = require('node:path')

const xoTypescriptConfig = require('eslint-config-xo-typescript')

const project = resolve(process.cwd(), 'tsconfig.json')

/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: {
    node: true
  },

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaFeatures: { modules: true },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },

  settings: {
    'import/resolver': {
      typescript: {
        project
      }
    }
  },

  plugins: [
    '@typescript-eslint/eslint-plugin',
    'eslint-plugin-import',
    'eslint-plugin-simple-import-sort'
  ],

  extends: [
    'xo',
    'xo-typescript',
    'xo-typescript/space',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],

  rules: {
    '@typescript-eslint/ban-types': (() => {
      delete xoTypescriptConfig.rules['@typescript-eslint/ban-types'][1].types
        .null
      return xoTypescriptConfig.rules['@typescript-eslint/ban-types']
    })(),

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
