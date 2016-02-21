p = require 'path'
webpack = require 'webpack'
html = require 'html-webpack-plugin'

cwd = process.cwd()

babelLoader =
  test: /\.jsx?/
  loaders: ['babel']
  include: p.join cwd, 'src', 'scripts'

htmlOpts =
  template: p.join 'src', 'markup', 'index.html'

module.exports =
  webpack:
    devtool: 'cheap-module-eval-source-map'
    entry: '.' + p.sep + p.join 'src', 'scripts', 'app.jsx'
    output:
      path: p.join cwd, 'dist'
      filename: 'app.js'
      publicPath: '/'
    module:
      loaders: [babelLoader]
    plugins: [
      new webpack.optimize.OccurenceOrderPlugin()
    , new webpack.HotModuleReplacementPlugin()
    , new webpack.NoErrorsPlugin()
    , new html(htmlOpts)
    ]
