const helpers = require('./helpers');
const commonConfig = require('./webpack.common');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: '/'
  }
});