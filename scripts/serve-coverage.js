#! /usr/bin/env node

const path = require('path')
const sync = require('browser-sync').create()
const root = path.join('coverage', 'lcov-report')

sync.init({
  server: root,
  open: false,
  files: [path.join(root, 'index.html')],
})
