const path = require("path")
const config = require('./config')
const webpack = require('webpack')

var env = process.env.NODE_ENV

module.exports = {
  entry: {
    app: './src/entry-client.js'
  },
  output: {
    path: config.assetsRoot,
    publicPath: "/",
    filename: '[name].js'
  },
  resolve: {
    // 自动补全的拓展名
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'COMPONENTS': path.resolve(__dirname, '../src/components'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            less: 'vue-style-loader!css-loader!less-loader'
          },
          postcss: [
            require('autoprefixer')({
              browsers: ['iOS >= 7', 'Android >= 4.1']
            })
          ]
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.join(config.projectRoot, 'src')
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,// 小于10000b时，转为base64
          name: path.posix.join(config.assetsSubDirectory, 'img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,// 小于10000b时，转为base64
          name: path.posix.join(config.assetsSubDirectory, 'fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      DEV: env === 'development' ? true : false
    }),
  ]
}
