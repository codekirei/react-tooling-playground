'use strict'

// import
//----------------------------------------------------------
const devMiddleware = require('webpack-dev-middleware')
const path = require('path')
const sync = require('browser-sync').create()
const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')

// top level vars
//----------------------------------------------------------
const cwd = process.cwd()
const publicPath = '/'

// webpack
//----------------------------------------------------------
const bundler = webpack({
  devtool: 'cheap-module-eval-source-map'
, entry: path.resolve(cwd, 'src', 'scripts', 'app.jsx')
, output: {
    path: path.join(cwd, 'dist')
  , filename: 'app.js'
  , publicPath
  }
, module: {
    loaders: [
      {
        loader: 'babel'
      , test: /\.jsx?$/
      , include: path.join(cwd, 'src', 'scripts')
      , query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
, plugins :[
  //   new webpack.optimize.OccurenceOrderPlugin()
  // , new webpack.HotModuleReplacementPlugin()
  // , new webpack.NoErrorsPlugin()
    new HtmlPlugin({
      template: path.join('src', 'markup', 'index.html')
    })
  ]
})

// browser-sync
//----------------------------------------------------------
sync.init({
  open: false
, server: publicPath
, middleware: devMiddleware(bundler, {
    publicPath
  , noInfo: true
  })
, files: [
    path.join(cwd, 'src, **, *')
  ]
})
