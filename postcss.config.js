module.exports = {
  plugins: [
    require('autoprefixer')({
      'browsers': ['> 1%', 'last 2 versions', 'IE 10']
  }),
    require('cssnano')({
      preset: 'default',
  }),
  ],
};