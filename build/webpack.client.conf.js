const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrors = require('friendly-errors-webpack-plugin')

const baseWebpackConfig = require('./webpack.base.conf')
const config = require('./config')

module.exports = merge(baseWebpackConfig, {
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      // beautify: false,
      compress: {
        warnings: false, // ,
        drop_console: true
      }
      // ,
      // output: {
      //   comments: true
      // }
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: 'index.template.html',
      inject: true,      // 是否注入 html
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: false
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),
  ]
})
