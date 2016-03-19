#! node_modules/.bin/babel-node

import browserSync from 'browser-sync'
import webpack from 'webpack'
import webpackConfig from '../configs/webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

const bundler = webpack(webpackConfig)
const server = browserSync.create()
server.init({
  open: false,
  server: {
    baseDir: '/',
    middleware: [
      webpackDevMiddleware(bundler, {
        publicPath: '/',
        stats: {
          colors: true,
        },
        noInfo: true,
      }),
      webpackHotMiddleware(bundler),
    ],
  },
})
