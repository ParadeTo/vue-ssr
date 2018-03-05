const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrors = require('friendly-errors-webpack-plugin')

const baseWebpackConfig = require('./webpack.base.conf')
const config = require('./config')

module.exports = merge(baseWebpackConfig, {
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    proxy: config.proxy
  },
  devtool: '#eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.template.html',
      inject: true // 插入css和js
    }),
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrors()
  ]
})
