#! node_modules/.bin/babel-node

import path from 'path'
import webpack from 'webpack'
import makeConfig from './webpack.config'
import browserSync from 'browser-sync'
import devMiddleware from 'webpack-dev-middleware'
import hotMiddleware from 'webpack-hot-middleware'

const config = makeConfig()
const bundler = webpack(config)
const server = browserSync.create('dev')
const baseDir = 'src'

server.init({
  open: false,
  files: [path.join(baseDir, 'index.html')],
  server: {
    baseDir,
    middleware: [
      devMiddleware(bundler, {
        publicPath: config.output.publicPath,
        noInfo: true,
      }),
      hotMiddleware(bundler),
    ],
  },
})