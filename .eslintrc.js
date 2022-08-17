module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  plugins: [
    '@typescript-eslint/eslint-plugin'
  ],
  // add your custom rules here
  rules: {},
}
