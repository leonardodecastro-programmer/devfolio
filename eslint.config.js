import eslintPluginAstro from 'eslint-plugin-astro'
import eslintPluginPrettier from 'eslint-plugin-prettier'

export default [
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      'astro/no-set-html-directive': 'error',
      'astro/no-set-text-directive': 'error',
      'astro/no-unused-css-selector': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'off'
    }
  },
  {
    plugins: {
      prettier: eslintPluginPrettier
    },
    rules: {
      'prettier/prettier': 'error'
    }
  }
]
