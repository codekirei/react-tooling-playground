// import
//----------------------------------------------------------
const devMiddleware = require('webpack-dev-middleware')
const path = require('path')
const sync = require('browser-sync').create()
const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// top level vars
//----------------------------------------------------------
const cwd = process.cwd()
const publicPath = '/'

// webpack
//----------------------------------------------------------
const bundler = webpack({
  devtool: 'source-map',
  entry: path.resolve(cwd, 'src', 'app.jsx'),
  output: {
    path: publicPath,
    filename: 'app.js',
    publicPath,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: path.join(cwd, 'src'),
        query: {
          presets: ['react', 'es2015'],
        },
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(['css?sourceMap', 'sass?sourceMap']),
      },
    ],
  },
  plugins: [
    new HtmlPlugin({
      template: path.join('src', 'index.html'),
    }),
    new ExtractTextPlugin('style.css', {
      allChunks: true,
    }),
  ],
})

// browser-sync
//----------------------------------------------------------
sync.init({
  open: false,
  server: publicPath,
  middleware: devMiddleware(bundler, {
    publicPath,
    noInfo: true,
  }),
  files: [
    path.join('src', '**', '*'),
  ],
})
