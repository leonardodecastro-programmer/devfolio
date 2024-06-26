// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  trailingComma: 'none',
  semi: false,
  singleQuote: true,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ]
}
