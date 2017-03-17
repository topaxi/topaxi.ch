module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  extends: './node_modules/eslint-config-topaxi/eslint.json',
  env: {
    browser: true
  },
  rules: {
    'semi': 0,
    'comma-dangle': 0
  }
};
