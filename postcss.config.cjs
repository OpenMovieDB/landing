module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-nested': {},
    autoprefixer: {},
    cssnano: {
      preset: ['default', { discardComments: { removeAll: true } }],
    },
  },
};
