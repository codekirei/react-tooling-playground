#! node_modules/.bin/babel-node

import path from 'path'
import browserSync from 'browser-sync'

const server = browserSync.create('coverage')
const root = path.join('coverage', 'lcov-report')
server.init({
  server: root,
  open: false,
  files: [path.join(root, 'index.html')],
})
