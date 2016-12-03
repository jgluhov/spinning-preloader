const helpers = require('./helpers');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/spinning-preloader.ts',
  output: {
    filename: 'spinning-preloader.js'
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['',  '.js', 'ts', '.styl']
  },
  resolveLoader: {
    modulesDirectories: ['node_modules'],
    extensions: ['',  '.js', '.styl'],
    moduleTemplates: ['*-loader', '*']
  },
  module: {
    loaders: [
      {
        test: /\.ts$/, loader: 'ts'
      },
      {
        test: /\.styl$/,
        loader: ExtractTextWebpackPlugin.extract('style', 'css?sourceMap!stylus')
      }
    ]
  },
  plugins: [
    new ExtractTextWebpackPlugin('spinning-preloader.css')
  ]
};