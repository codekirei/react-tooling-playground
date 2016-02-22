// import
//----------------------------------------------------------
const path = require('path')
const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')

// shared
//----------------------------------------------------------
const cwd = process.cwd()

// webpack
//----------------------------------------------------------

// loaders
const babel = {
  test: /\.jsx?$/
, include: path.join(cwd, 'src', 'scripts')
, loader: 'babel'
, query: {
    presets: ['react', 'es2015']
  }
}

const webpackConf = {
  devtool: 'cheap-module-eval-source-map'
, entry: '.' + path.sep + path.join('src', 'scripts', 'app.jsx')
, output: {
    path: path.join(cwd, 'dist')
  , filename: 'app.js'
  , publicPath: '/'
  }
, module: {
    loaders: [babel]
  }
, plugins :[
    new webpack.optimize.OccurenceOrderPlugin()
  , new webpack.HotModuleReplacementPlugin()
  , new webpack.NoErrorsPlugin()
  , new HtmlPlugin({
      template: path.join('src', 'markup', 'index.html')
    })
  ]
}

// middleware
//----------------------------------------------------------
const devMiddlewareConf = {
  publicPath: webpackConf.output.publicPath
, noInfo: true
}

// export
//----------------------------------------------------------
module.exports = {
  webpack: webpackConf
, devMiddleware: devMiddlewareConf
}
