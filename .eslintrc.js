module.exports = {
  plugins: [
    "@typescript-eslint/eslint-plugin",
    "eslint-plugin-tsdoc"
  ],
  extends: [
    'plugin:@typescript-eslint/recommended'
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
        ecmaVersion: 2018,
        sourceType: "module"
      },
    }
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    "tsdoc/syntax": "warn"
  }
};