module.exports = {
  extends: [
    require.resolve('@umijs/max/eslint'),
    'plugin:react-hooks/recommended',
  ],
  plugins: ['react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
  },
};
