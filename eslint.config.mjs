import eslint from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default [
  eslint.configs.recommended,
  {
    files: ['**/*.ts', '**/*.mts', '**/*.cts'],
    languageOptions: {
      parser: tsparser,
      sourceType: 'module',
      globals: {
        process: true,
        require: true,
        module: true,
        console: true,
        exports: true,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      prettier,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      'prettier/prettier': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
    },
  },
  {
    files: ['src/**/*.ts', 'dist/**/*.js'],
    languageOptions: {
      globals: {
        process: true,
        require: true,
        module: true,
        console: true,
        exports: true,
      },
    },
  },
  {
    files: ['tests/**/*.spec.ts'],
    languageOptions: {
      globals: {
        describe: true,
        it: true,
        expect: true,
      },
    },
  },
  prettierConfig,
]
