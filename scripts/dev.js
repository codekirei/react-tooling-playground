#! node_modules/.bin/babel-node

import webpack from 'webpack'
import webpackConfig from '../configs/webpack'
import browserSync from 'browser-sync'
import browserSyncConfig from '../configs/browser-sync'

const bundler = webpack(webpackConfig)
const server = browserSync.create()
server.init(browserSyncConfig(bundler))
