const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const commonConfig = require('../../webpack.common')

module.exports = merge(commonConfig, {
  entry: path.resolve(__dirname, 'index.ts'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/cax')
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../../dist/cax')
  }
})
