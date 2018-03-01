var path = require('path')
var webpack = require('webpack')
var projectRoot = path.resolve(__dirname, '../')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrors = require('friendly-errors-webpack-plugin')

const outPath = path.resolve(__dirname, '../dist')
var assetsSubDirectory = "static"

module.exports = {
  entry: {
    app: ['./build/dev-client', 'babel-polyfill', './src/entry-client.js']
    // app: './src/entry-client.js'
  },
  output: {
    path: outPath,
    publicPath: "/",
    filename: '[name].js'
  },
  resolve: {
    // 自动补全的拓展名
    extensions: ['', '.js', '.vue', '.json'],
    // 找不到模块时，从下面找
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'COMPONENTS': path.resolve(__dirname, '../src/components'),
    }
  },
  resolveLoader: {
    // 跟上面类似
    fallback: [path.join(__dirname, '../node_modules')]
  },
  devtool: '#eval-source-map',
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: [
          path.join(projectRoot, 'src'),
          // path.join(projectRoot, 'node_modules/vue-awesome'),
          // path.join(projectRoot, 'node_modules/vue-echarts')
        ],
        // exclude: /node_modules(?![\\/]vue-echarts[\\/])/
        // exclude: /node_modules/
        exclude: /node_modules(?![\\/]vue-awesome[\\/])/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,// 小于10000b时，转为base64
          name: path.posix.join(assetsSubDirectory, 'img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,// 小于10000b时，转为base64
          name: path.posix.join(assetsSubDirectory, 'fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  vue: {
    // .vue 文件配置 loader 及工具 (autoprefixer)
    loaders: {
      less: 'vue-style-loader!css-loader!less-loader',
    },
    postcss: [
      require('autoprefixer')({
        browsers: ['iOS >= 7', 'Android >= 4.1']
      })
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.template.html',
      inject: true // 插入css和js
    }),
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrors()
  ]
}
