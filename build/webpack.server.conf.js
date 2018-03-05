const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

const baseWebpackConfig = require('./webpack.base.conf')
const config = require('./config')

module.exports = merge(baseWebpackConfig, {
  entry: './src/entry-server.js',
  // 告知 `vue-loader` 输送面向服务器代码(server-oriented code)。
  target: 'node',
  output: {
    filename: 'server-bundle.js',
    libraryTarget: 'commonjs2',
  },
  plugins: [
     new VueSSRServerPlugin(),
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
