# ----------------------------------------------------------
# modules
# ----------------------------------------------------------
path = require 'path'
webpack = require 'webpack'
htmlPlugin = require 'html-webpack-plugin'

# ----------------------------------------------------------
# shared vars
# ----------------------------------------------------------
cwd = process.cwd()

# ----------------------------------------------------------
# webpack
# ----------------------------------------------------------
# loaders
babel =
  test: /\.jsx?$/
  include: path.join cwd, 'src', 'scripts'
  loader: 'babel'
  query:
    presets: ['react', 'es2015']

webpackConf =
  devtool: 'cheap-module-eval-source-map'
  entry: '.' + path.sep + path.join 'src', 'scripts', 'app.jsx'
  output:
    path: path.join cwd, 'dist'
    filename: 'app.js'
    publicPath: '/'
  module:
    loaders: [babel]
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin()
  , new webpack.HotModuleReplacementPlugin()
  , new webpack.NoErrorsPlugin()
  , new htmlPlugin template: path.join 'src', 'markup', 'index.html'
  ]

# ----------------------------------------------------------
# middleware
# ----------------------------------------------------------
devMiddlewareConf =
  publicPath: '/'
  noInfo: true

# ----------------------------------------------------------
# exports
# ----------------------------------------------------------
module.exports =
  webpack: webpackConf
  devMiddleware: devMiddlewareConf
