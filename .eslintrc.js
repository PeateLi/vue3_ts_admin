module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2016
  },
  plugins: [
    'html',
    'vue',
    'import'
  ],
  extends: ['standard', 'plugin:vue/recommended'],
  rules: {
    '@typescript-eslint/no-var-requires': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
