module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  rules: {
    'jsx-a11y/no-autofocus': 0,
  },
  overrides: [
    {
      files: ['docs/**/*.tsx'],
      rules: {
        'no-console': 0,
      },
    },
  ],
};
