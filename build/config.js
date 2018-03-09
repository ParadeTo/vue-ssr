var path = require('path')

exports.projectRoot = path.resolve(__dirname, '../')
exports.assetsRoot = path.resolve(__dirname, '../dist')
exports.assetsSubDirectory = "static"

exports.ssrRoot = path.resolve(__dirname, '../ssr')

exports.proxy = {
  '/api': "http://localhost:8081"
}
